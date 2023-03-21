from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class AudioRequest(_message.Message):
    __slots__ = ["audio"]
    AUDIO_FIELD_NUMBER: _ClassVar[int]
    audio: bytes
    def __init__(self, audio: _Optional[bytes] = ...) -> None: ...

class EmotionResponse(_message.Message):
    __slots__ = ["anger", "anxiety", "disgust", "happy", "neutral", "sadness", "surprise"]
    ANGER_FIELD_NUMBER: _ClassVar[int]
    ANXIETY_FIELD_NUMBER: _ClassVar[int]
    DISGUST_FIELD_NUMBER: _ClassVar[int]
    HAPPY_FIELD_NUMBER: _ClassVar[int]
    NEUTRAL_FIELD_NUMBER: _ClassVar[int]
    SADNESS_FIELD_NUMBER: _ClassVar[int]
    SURPRISE_FIELD_NUMBER: _ClassVar[int]
    anger: float
    anxiety: float
    disgust: float
    happy: float
    neutral: float
    sadness: float
    surprise: float
    def __init__(self, neutral: _Optional[float] = ..., happy: _Optional[float] = ..., surprise: _Optional[float] = ..., anger: _Optional[float] = ..., anxiety: _Optional[float] = ..., sadness: _Optional[float] = ..., disgust: _Optional[float] = ...) -> None: ...

class TextRequest(_message.Message):
    __slots__ = ["text"]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    text: str
    def __init__(self, text: _Optional[str] = ...) -> None: ...

class TextResponse(_message.Message):
    __slots__ = ["prediction"]
    PREDICTION_FIELD_NUMBER: _ClassVar[int]
    prediction: str
    def __init__(self, prediction: _Optional[str] = ...) -> None: ...
