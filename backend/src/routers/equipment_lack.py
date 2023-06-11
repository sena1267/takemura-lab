from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from cruds import equipment_lack as equipment_lack_cruds
from database.database import get_db
from schemas.equipment_lack import EquipmentLack, EquipmentLackCreate, EquipmentLackUpdate

router = APIRouter(prefix="/equipment/lack", tags=["equipment"])


@router.get("/", response_model=list[EquipmentLack])
def get_equipments(db: Session = Depends(get_db)):
    return equipment_lack_cruds.get_lacked_equipments(db=db)


@router.post("/", response_model=EquipmentLack)
def create_equipment_lack(lacked_equipment: EquipmentLackCreate, db: Session = Depends(get_db)):

    new_equipment = equipment_lack_cruds.create_lacked_equipment(
        lacked_equipment=lacked_equipment, db=db
    )

    return new_equipment


@router.put("/{id}", response_model=EquipmentLack)
def update_equipment_lack(
    id: int, equipment: EquipmentLackUpdate, db: Session = Depends(get_db)
):
    lacked_equipment_in_db = equipment_lack_cruds.get_lacked_equipment_by_id(
        lacked_equipment_id=id, db=db)

    if lacked_equipment_in_db is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="不足備品が存在しません。")

    updated_lacked_equipment = equipment_lack_cruds.update_lacked_equipment(
        lacked_equipent_id=id, lacked_equipment=equipment, db=db
    )

    return updated_lacked_equipment


@router.delete("/{id}")
def delete_equipment_lack(id: int, db: Session = Depends(get_db)):
    equipment_in_db = equipment_lack_cruds.get_lacked_equipment_by_id(
        lacked_equipment_id=id, db=db)

    if equipment_in_db is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="不足備品が存在しません。")

    equipment_lack_cruds.delete_lacked_equipment(lacked_equipment_id=id, db=db)

    return {"message": "不足備品の削除が完了しました。"}
