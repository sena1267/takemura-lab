from database import database
from fastapi import FastAPI
from routers import user

database.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.include_router(user.router)
