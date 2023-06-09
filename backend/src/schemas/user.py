from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    icon: str
    birthday: int
    is_admin: bool

    class Config:
        orm_mode = True


class UserCreate(BaseModel):
    name: str
    password: str
    icon: str
    birthday: int
    is_admin: bool

    class Config:
        orm_mode = True
