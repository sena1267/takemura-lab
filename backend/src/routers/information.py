from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from cruds import information as information_cruds
from database.database import get_db
from schemas.information import Information, InformationCreate, InformationUpdate

router = APIRouter(prefix="/information", tags=["information"])


@router.get("/", response_model=list[Information])
def get_informations(db: Session = Depends(get_db)):
    return information_cruds.get_inforamtions(db=db)


@router.post("/", response_model=Information)
def create_information(information: InformationCreate, db: Session = Depends(get_db)):
    new_information = information_cruds.create_information(
        information=information, db=db
    )
    return new_information


@router.put("/{id}", response_model=Information)
def update_information(
    id: int,
    information_update: InformationUpdate,
    db: Session = Depends(get_db)
) -> Information:
    information_in_db = information_cruds.get_information_by_id(
        information_id=id, db=db
    )

    if information_in_db is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="情報が存在しません。"
        )

    updated_information = information_cruds.update_inforemation(
        information_id=id,
        information_update=information_update,
        db=db
    )

    return updated_information


@router.delete("/{id}")
def delete_information(id: int, db: Session = Depends(get_db)):
    information_in_db = information_cruds.get_information_by_id(
        information_id=id, db=db)

    if information_in_db is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="情報が存在しません。"
        )

    information_cruds.delete_information(
        information_id=id,
        db=db
    )

    return {"message": "情報の削除が完了しました。"}
