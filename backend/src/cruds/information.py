from sqlalchemy import select, update, delete
from sqlalchemy.orm import Session

import models
from schemas.information import Information, InformationCreate, InformationUpdate


def get_inforamtions(db: Session) -> list[Information]:
    informations = db.scalars(select(models.Information)).all()

    print(type(informations))
    return list(map(Information.from_orm, informations))


def get_information_by_id(information_id: int, db: Session) -> Information:
    information = db.scalar(
        select(models.Information)
        .where(models.Information.id == information_id)
    )
    if information is None:
        return None

    return Information.from_orm(information)


def create_information(information: InformationCreate, db: Session) -> Information:
    new_information_obj = models.Information(**information.dict())
    db.add(new_information_obj)
    db.commit()
    db.refresh(new_information_obj)

    return Information.from_orm(new_information_obj)


def update_inforemation(information_id: int, information_update: InformationUpdate, db: Session):
    updated_information = db.scalar(
        update(models.Information)
        .where(models.Information.id == information_id)
        .values(
            {
                models.Information.title: information_update.title,
                models.Information.content: information_update.content,
                models.Information.url: information_update.url,
            }
        )
        .returning(models.Information)
    )
    db.commit()

    return Information.from_orm(updated_information)


def delete_information(information_id: int, db: Session):
    db.execute(
        delete(models.Information)
        .where(models.Information.id == information_id)
    )
    db.commit()
