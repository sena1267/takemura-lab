from pydantic import BaseModel


class User(BaseModel):
    name: str
    icon: str
    birthday: int
    is_admin: bool

    class Config:
        orm_mode = True


class UserCreate(BaseModel):
    name: str
    password_hash: str
    icon: str
    birthday: int
    is_admin: bool

    class Config:
        orm_mode = True
