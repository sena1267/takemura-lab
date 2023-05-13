import models
from schemas.user import User, UserCreate
from sqlalchemy.orm import Session


def get_all_users(db: Session):
    users = db.query(models.User).all()

    return list(map(User.from_orm, users))


def get_user_by_name(name: str, db: Session):
    return db.query(models.User).filter(models.User.name == name).first()


def get_user_by_id(id: int, db: Session) -> User | None:
    return db.query(models.User).filter(models.User.id == id).first()


def create_user(user: UserCreate, db: Session) -> UserCreate:
    user_obj = models.User(**user.dict())
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)

    return UserCreate.from_orm(user_obj)


def delete_user(user_id: int, db: Session):
    user = get_user_by_id(user_id, db)

    db.delete(user)
    db.commit()
