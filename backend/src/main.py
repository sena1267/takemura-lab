from database import database
from fastapi import FastAPI
from routers import (user, equipment)

database.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.include_router(user.router)
app.include_router(equipment.router)
