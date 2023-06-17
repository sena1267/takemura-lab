from datetime import datetime

from pydantic import BaseModel


class EquipmentHistory(BaseModel):
    id: int
    name: str
    price: int
    buyer_id: int
    bought_date: datetime

    class Config:
        orm_mode = True


class EquipmentHistoryCreate(BaseModel):
    name: str
    price: int
    buyer_id: int
    bought_date: datetime


class EquipmentHistoryUpdate(BaseModel):
    name: str
    price: int
    buyer_id: int
    bought_date: datetime
