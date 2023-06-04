import models
from schemas.user import User, UserCreate
from sqlalchemy.orm import Session
from sqlalchemy import select

from core.auth import get_password_hash


def get_all_users(db: Session) -> list[User]:

    users = db.scalars(select(models.User)).all()

    return list(map(User.from_orm, users))


def get_user_by_username(username: str, db: Session):
    return db.query(models.User).filter(models.User.name == username).first()


def get_user_by_id(id: int, db: Session) -> User | None:
    return db.query(models.User).filter(models.User.id == id).first()


def create_user(user: UserCreate, db: Session):
    user.password = get_password_hash(user.password)
    user_obj = models.User(
        name=user.name,
        password_hash=user.password,
        icon=user.icon,
        birthday=user.birthday,
        is_admin=user.is_admin
    )
    db.add(user_obj)
    db.commit()


def delete_user(user_id: int, db: Session):
    user = get_user_by_id(user_id, db)

    db.delete(user)
    db.commit()
