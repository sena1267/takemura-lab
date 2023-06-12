from datetime import datetime

from sqlalchemy import (
    Column,
    String,
    Text,
    Integer,
    Boolean,
    DateTime,
    ForeignKey
)
from sqlalchemy.orm import relationship

from database.database import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    password_hash = Column(String)
    icon = Column(String)
    birthday = Column(Integer)
    is_admin = Column(Boolean)
    at_office = Column(Boolean)
    current = Column(Integer)
    target = Column(Integer)


class Equipment(Base):
    __tablename__ = "equipment"

    id = Column(Integer, primary_key=True)
    name = Column(String(20), nullable=False)
    price = Column(Integer, nullable=False)
    buyer_id = Column(Integer, ForeignKey("user.id"))
    bought_date = Column(DateTime)

    buyer = relationship("User")


class EquipmentLack(Base):
    __tablename__ = "equipment_lack"

    id = Column(Integer, primary_key=True)
    name = Column(String(20), nullable=False)


class EquipmentHistroy(Base):
    __tablename__ = "equipment_history"

    id = Column(Integer, primary_key=True)
    name = Column(String(20), nullable=False)
    price = Column(Integer, nullable=False)
    buyer_id = Column(Integer, ForeignKey("user.id"))
    bought_date = Column(DateTime)

    buyer = relationship("User")


class Information(Base):
    __tablename__ = "forum"

    id = Column(Integer, primary_key=True)
    title = Column(String(255))
    content = Column(Text)
    url = Column(Text)
    created_at = Column(DateTime, default=datetime.now())
    created_by = Column(Integer, ForeignKey("user.id"))

    creator = relationship("User")
