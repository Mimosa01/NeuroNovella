import uuid

from pydantic import BaseModel


class SAnswer(BaseModel):
    value: str


class SMessage(BaseModel):
    type: str
    content: str
    id: int