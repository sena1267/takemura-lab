import models
from schemas.equipment import Equipment, EquipmentCreate, EquipmentUpdate

from sqlalchemy import select, update, delete
from sqlalchemy.orm import Session


def get_equipments(db: Session) -> list[Equipment]:
    # sqlalchemy2.0では、この書き方が推奨らしい。
    # equipments = db.execute(
    #     select(models.Equipment)
    # ).scalars().all()
    equipments = db.scalars(select(models.Equipment)).all()

    return list(map(Equipment.from_orm, equipments))


def get_equipment_by_id(equipment_id: int, db: Session):
    equipment = db.scalar(
        select(models.Equipment).where(models.Equipment.id == equipment_id)
    )

    if equipment is None:
        return None

    return Equipment.from_orm(equipment)


def create_equipment(equipment: EquipmentCreate, db: Session):
    new_quipment_obj = models.Equipment(**equipment.dict())
    db.add(new_quipment_obj)
    db.commit()
    db.refresh(new_quipment_obj)

    return Equipment.from_orm(new_quipment_obj)


def update_equipment(equipent_id: int, equipment: EquipmentUpdate, db: Session):
    updated_equipment = db.scalar(
        update(models.Equipment)
        .where(models.Equipment.id == equipent_id)
        .values(
            {
                models.Equipment.name: equipment.name,
                models.Equipment.price: equipment.price,
                models.Equipment.buyer_id: equipment.buyer_id,
                models.Equipment.bought_date: equipment.bought_date,
            }
        )
        .returning(models.Equipment)
    )
    db.commit()

    return Equipment.from_orm(updated_equipment)


def delete_equipment(equipment_id: int, db: Session):
    db.execute(delete(models.Equipment).where(models.Equipment.id == equipment_id))
    db.commit()
