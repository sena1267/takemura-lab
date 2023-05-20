from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from cruds import equipment as equipment_cruds
from cruds import user as user_cruds
from database.database import get_db
from schemas.equipment import Equipment, EquipmentCreate, EquipmentUpdate

router = APIRouter(prefix="/equipment", tags=["equipment"])


@router.get("/", response_model=list[Equipment])
def get_equipments(db: Session = Depends(get_db)):
    return equipment_cruds.get_equipments(db=db)


@router.post("/", response_model=Equipment)
def create_equipment(equipment: EquipmentCreate, db: Session = Depends(get_db)):
    user_in_db = user_cruds.get_user_by_id(id=equipment.buyer_id, db=db)

    print(type(user_in_db))

    if user_in_db is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="購入したユーザーが存在しません。"
        )

    new_equipment = equipment_cruds.create_equipment(equipment=equipment, db=db)

    return new_equipment


@router.put("/{id}", response_model=Equipment)
def update_equipment(
    id: int, equipment: EquipmentUpdate, db: Session = Depends(get_db)
):
    equipment_in_db = equipment_cruds.get_equipment_by_id(equipment_id=id, db=db)

    if equipment_in_db is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="備品が存在しません。")

    updated_equipment = equipment_cruds.update_equipment(
        equipent_id=id, equipment=equipment, db=db
    )

    return updated_equipment


@router.delete("/{id}")
def delete_equipment(id: int, db: Session = Depends(get_db)):
    equipment_in_db = equipment_cruds.get_equipment_by_id(equipment_id=id, db=db)

    if equipment_in_db is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="備品が存在しません。")

    equipment_cruds.delete_equipment(equipment_id=id, db=db)

    return {"message": "備品の削除が完了しました。"}
