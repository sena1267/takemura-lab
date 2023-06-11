import models
from schemas.equipment_lack import EquipmentLack, EquipmentLackCreate, EquipmentLackUpdate

from sqlalchemy import select, update, delete
from sqlalchemy.orm import Session


def get_lacked_equipments(db: Session) -> list[EquipmentLack]:
    lacked_equipments = db.scalars(select(models.EquipmentLack)).all()

    return list(map(EquipmentLack.from_orm, lacked_equipments))


def get_lacked_equipment_by_id(lacked_equipment_id: int, db: Session):
    lacked_equipment = db.scalar(
        select(models.EquipmentLack).where(
            models.EquipmentLack.id == lacked_equipment_id)
    )

    if lacked_equipment is None:
        return None

    return EquipmentLack.from_orm(lacked_equipment)


def create_lacked_equipment(lacked_equipment: EquipmentLackCreate, db: Session):
    new_quipment_obj = models.EquipmentLack(**lacked_equipment.dict())
    db.add(new_quipment_obj)
    db.commit()
    db.refresh(new_quipment_obj)

    return EquipmentLack.from_orm(new_quipment_obj)


def update_lacked_equipment(
        lacked_equipent_id: int, lacked_equipment: EquipmentLackUpdate, db: Session
):
    updated_lacked_equipment = db.scalar(
        update(models.EquipmentLack)
        .where(models.EquipmentLack.id == lacked_equipent_id)
        .values(
            {
                models.EquipmentLack.name: lacked_equipment.name,
            }
        )
        .returning(models.EquipmentLack)
    )
    db.commit()

    return EquipmentLack.from_orm(updated_lacked_equipment)


def delete_lacked_equipment(lacked_equipment_id: int, db: Session):
    db.execute(delete(models.EquipmentLack).where(
        models.EquipmentLack.id == lacked_equipment_id))
    db.commit()
