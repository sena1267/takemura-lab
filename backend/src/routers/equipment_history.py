from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database.database import get_db
from cruds import equipment_history as equipment_history_ceruds
from cruds import user as user_cruds
from schemas.equipment_history import (
    EquipmentHistory,
    EquipmentHistoryCreate,
    EquipmentHistoryUpdate
)
router = APIRouter(prefix="/equipment/history", tags=["equipment"])


@router.get("/", response_model=list[EquipmentHistory])
def get_equipment_history(db: Session = Depends(get_db)):
    equipment_history = equipment_history_ceruds.get_equipment_history(db=db)

    return equipment_history


@router.post("/", response_model=EquipmentHistory)
def create_equipment_history(
    equipment_history: EquipmentHistoryCreate, db: Session = Depends(get_db)
):
    user_in_db = user_cruds.get_user_by_id(
        id=equipment_history.buyer_id, db=db)

    if user_in_db is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="購入したユーザーが存在しません。"
        )

    new_equipment_history = equipment_history_ceruds.create_equipment_history(
        equipment_history=equipment_history,
        db=db
    )

    return new_equipment_history


@router.put("/{id}", response_model=EquipmentHistory)
def update_equipment_history(
    id: int, equipment_history_update: EquipmentHistoryUpdate, db: Session = Depends(get_db)
):
    equipment_history_in_db = equipment_history_ceruds.get_equipment_history_by_id(
        equipment_history_id=id,
        db=db
    )

    if equipment_history_in_db is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="備品履歴が存在しません。")

    updated_equipment_history = equipment_history_ceruds.update_equipment_history(
        equipment_history_id=id,
        equipment_history_update=equipment_history_update,
        db=db
    )

    return updated_equipment_history


@router.delete("/{id}")
def delete_equipment_history(id: int, db: Session = Depends(get_db)):
    equipment_history_in_db = equipment_history_ceruds.get_equipment_history_by_id(
        equipment_history_id=id,
        db=db
    )

    if equipment_history_in_db is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="備品履歴が存在しません。")

    equipment_history_ceruds.delete_equipment_history(
        equipment_history_id=id,
        db=db
    )

    return {"message": "備品履歴の削除が完了しました。"}
