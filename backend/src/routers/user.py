from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from cruds import user as user_crud
from database.database import get_db
from schemas.user import UserCreate, User
from core.auth import get_current_user


router = APIRouter(
    prefix="/user",
    tags=["user"]
)


@router.get("/", response_model=list[User])
def get_users(db: Session = Depends(get_db)):
    return user_crud.get_all_users(db=db)


@router.get("/get_user/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    return user_crud.get_user_by_id(user_id, db)


@router.get("/me", response_model=User)
def get_user_me(user: User = Depends(get_current_user)):
    return user


@router.post("/",)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    user_in_db = user_crud.get_user_by_username(user.name, db)
    if user_in_db:
        raise HTTPException(
            status_code=400,
            detail="この名前は既に使われています。"
        )

    new_user = user_crud.create_user(user, db)

    return new_user


@router.delete("/{user_id}")
def delete_user(
    user_id: int,
    db: Session = Depends(get_db)
):
    user_in_db = user_crud.get_user_by_id(user_id, db)
    if user_in_db is None:
        raise HTTPException(status_code=404, detail="ユーザーが見つかりません。")

    return user_crud.delete_user(user_id, db)
