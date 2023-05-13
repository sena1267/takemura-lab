from database.database import Base

from sqlalchemy import (
    Column,
    String,
    Integer,
    Boolean,
)


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    password_hash = Column(String)
    icon = Column(String)
    birthday = Column(Integer)
    is_admin = Column(Boolean)
