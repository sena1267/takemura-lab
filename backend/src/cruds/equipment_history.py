from sqlalchemy import select, update, delete
from sqlalchemy.orm import Session

import models
from schemas.equipment_history import (
    EquipmentHistory,
    EquipmentHistoryCreate,
    EquipmentHistoryUpdate
)


def get_equipment_history(db: Session):
    equipment_history = db.scalars(select(models.EquipmentHistroy)).all()

    return list(map(EquipmentHistory.from_orm, equipment_history))


def get_equipment_history_by_id(equipment_history_id: int, db: Session):
    equipment_history = db.scalar(
        select(models.EquipmentHistroy)
        .where(models.EquipmentHistroy.id == equipment_history_id)
    )

    if equipment_history is None:
        return None

    return EquipmentHistory.from_orm(equipment_history)


def create_equipment_history(equipment_history: EquipmentHistoryCreate, db: Session):
    new_equipment_hisory_obj = models.EquipmentHistroy(
        **equipment_history.dict()
    )
    db.add(new_equipment_hisory_obj)
    db.commit()
    db.refresh(new_equipment_hisory_obj)

    return EquipmentHistory.from_orm(new_equipment_hisory_obj)


def update_equipment_history(
    equipment_history_id: int,
    equipment_history_update: EquipmentHistoryUpdate,
    db: Session
):
    updated_equipment_history = db.scalar(
        update(models.EquipmentHistroy)
        .where(models.EquipmentHistroy.id == equipment_history_id)
        .values({
            models.EquipmentHistroy.name: equipment_history_update.name,
            models.EquipmentHistroy.price: equipment_history_update.price,
            models.EquipmentHistroy.buyer_id: equipment_history_update.buyer_id,
            models.EquipmentHistroy.bought_date: equipment_history_update.bought_date
        })
        .returning(models.EquipmentHistroy)
    )
    db.commit()

    return EquipmentHistory.from_orm(updated_equipment_history)


def delete_equipment_history(equipment_history_id: int, db: Session):
    db.execute(
        delete(models.EquipmentHistroy)
        .where(models.EquipmentHistroy.id == equipment_history_id)
    )
    db.commit()
