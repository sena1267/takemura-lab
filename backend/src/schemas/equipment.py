from datetime import datetime
from pydantic import BaseModel


class Equipment(BaseModel):
    id: int
    name: str
    price: int
    buyer_id: int
    bought_date: datetime

    class Config:
        orm_mode = True


class EquipmentCreate(BaseModel):
    name: str
    price: int
    buyer_id: int
    bought_date: datetime


class EquipmentUpdate(BaseModel):
    name: str
    price: int
    buyer_id: int
    bought_date: datetime
