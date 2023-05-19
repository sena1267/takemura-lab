from database.database import Base
from sqlalchemy.orm import relationship

from sqlalchemy import (
    Column,
    String,
    Integer,
    Boolean,
    DateTime,
    ForeignKey
)


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    password_hash = Column(String)
    icon = Column(String)
    birthday = Column(Integer)
    is_admin = Column(Boolean)


class Equipment(Base):
    __tablename__ = "equipment"

    id = Column(Integer, primary_key=True)
    name = Column(String(20), nullable=False)
    price = Column(Integer, nullable=False)
    buyer_id = Column(Integer, ForeignKey("user.id"))
    bought_date = Column(DateTime)

    buyer = relationship("User")
