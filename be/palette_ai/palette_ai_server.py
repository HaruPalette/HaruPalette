import grpc
import palette_ai_pb2
import palette_ai_pb2_grpc
from concurrent import futures
import logging
import torch
import torchaudio
from transformers import pipeline

device = "cuda:0" if torch.cuda.is_available() else "cpu"
# 모델 로드
# whisper 모델
whisperPipe = pipeline(
    "automatic-speech-recognition",
    model="openai/whisper-medium",
    chunk_length_s=30,
    device="cuda:0",
)

# RoBERTa fine-tuned 모델
bertClassifier = pipeline(
    "text-classification",
    "nlp04/korean_sentiment_analysis_dataset3",
    device="cpu",
    top_k=None,
)

ko2en = {
    "중립": "neutral",
    "행복": "happy",
    "당황": "surprise",
    "분노": "anger",
    "불안": "anxiety",
    "슬픔": "sadness",
    "혐오": "disgust",
}


# 메인 로직
class PaletteAI(palette_ai_pb2_grpc.PaletteAIServicer):
    def __init__(self):
        pass

    def SpeechToText(self, request, context):
        audio_data = request.audio
        audio_path = 'audio.wav'
        with open(audio_path, 'wb') as f:
            f.write(audio_data)
        audio_input, _ = torchaudio.load(audio_path)
        input_values = torch.mean(audio_input, dim=0).numpy()
        prediction = whisperPipe(
            input_values,
            generate_kwargs={
                "task": "transcribe",
                "language": "korean",
                "max_new_tokens": 65535
             }
        )['text']
        print(prediction)
        return palette_ai_pb2.TextResponse(prediction=prediction)

    def TextToEmotion(self, request, context):
        result = bertClassifier(request.text)[0]
        data = {
            ko2en[r["label"]]: r["score"] for r in result
        }
        ret = palette_ai_pb2.EmotionResponse(
            neutral=data.get("neutral", 0),
            happy=data.get("happy", 0),
            surprise=data.get("surprise", 0),
            anger=data.get("anger", 0),
            anxiety=data.get("anxiety", 0),
            sadness=data.get("sadness", 0),
            disgust=data.get("disgust", 0),
        )
        return ret


# 서버 실행
def serve():
    # 병렬 처리
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    palette_ai_pb2_grpc.add_PaletteAIServicer_to_server(PaletteAI(), server)
    # 포트번호
    port = '50051'
    server.add_insecure_port('[::]:' + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()


if __name__ == '__main__':
    # 로그 설정
    logging.basicConfig()
    serve()
