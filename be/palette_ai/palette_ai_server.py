import grpc
import palette_ai_pb2, palette_ai_pb2_grpc
from concurrent import futures
import logging
import torch
import torchaudio
from transformers import pipeline

# 모델 로드
# whisper 모델
# whisperPipe = pipeline(
#     "automatic-speech-recognition",
#     model="openai/whisper-medium",
#     chunk_length_s=30,
#     device="cpu",
#     max_new_tokens=65535,
# )

# RoBERTa fine-tuned 모델
bertClassifier = pipeline(
    "text-classification",
    "nlp04/korean_sentiment_analysis_dataset3",
    device="cpu",
    top_k=None,
)

success_message = {
    "response_code": "200",
    "response_msg": "it has been successfully done"
}

not_found_message = {
    "response_code": "404",
    "response_msg": "No data found"
}

fail_message = {
    "response_code": "500",
    "response_msg": "Occured a server error"
}

# 메인 로직
class PaletteAI(palette_ai_pb2_grpc.PaletteAIServicer):
    def __init__(self):
        pass

    def SpeechToText(self, request, context):
        # audio_input, _ = torchaudio.load(audio_path)
        # input_values = torch.mean(audio_input, dim=0).numpy()
        # prediction = whisperPipe(input_values)
        return 0

    def TextToEmotion(self, request, context):
        predictions = bertClassifier(request.text)[0]
        res = palette_ai_pb2.EmotionResponse(
            predictions = predictions
        )
        return res


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
    #로그 설정
    logging.basicConfig()
    serve()
