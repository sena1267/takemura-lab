from cruds import user as user_cruds
from database.database import get_db
from fastapi import APIRouter, Depends, HTTPException
from schemas.user import UserCreate
from sqlalchemy.orm import Session


router = APIRouter(
    prefix="/user",
    tags=["user"]
)


@router.get("/")
def get_users(db: Session = Depends(get_db)):
    return user_cruds.get_all_users(db)


@router.post("/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    user_in_db = user_cruds.get_user_by_name(user.name, db)
    if user_in_db:
        raise HTTPException(
            status_code=400,
            detail="この名前は既に使われています。"
        )

    new_user = user_cruds.create_user(user, db)

    return new_user
