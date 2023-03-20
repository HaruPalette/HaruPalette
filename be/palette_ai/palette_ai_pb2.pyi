from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AudioRequest(_message.Message):
    __slots__ = ["audio"]
    AUDIO_FIELD_NUMBER: _ClassVar[int]
    audio: bytes
    def __init__(self, audio: _Optional[bytes] = ...) -> None: ...

class EmotionResponse(_message.Message):
    __slots__ = ["predictions"]
    PREDICTIONS_FIELD_NUMBER: _ClassVar[int]
    predictions: _containers.RepeatedCompositeFieldContainer[Prediction]
    def __init__(self, predictions: _Optional[_Iterable[_Union[Prediction, _Mapping]]] = ...) -> None: ...

class Prediction(_message.Message):
    __slots__ = ["label", "score"]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    label: str
    score: float
    def __init__(self, label: _Optional[str] = ..., score: _Optional[float] = ...) -> None: ...

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
