from datetime import datetime

from pydantic import BaseModel


class Information(BaseModel):
    id: int
    title: str
    content: str
    url: str
    created_at: datetime
    created_by: int

    class Config:
        orm_mode = True


class InformationCreate(BaseModel):
    title: str
    content: str
    url: str
    created_at: datetime
    created_by: int


class InformationUpdate(BaseModel):
    title: str
    content: str
    url: str
    created_at: datetime
    created_by: int
