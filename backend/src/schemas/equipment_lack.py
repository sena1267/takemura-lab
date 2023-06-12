from pydantic import BaseModel


class EquipmentLack(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True


class EquipmentLackCreate(BaseModel):
    name: str


class EquipmentLackUpdate(BaseModel):
    name: str
