from database import database
from fastapi import FastAPI
from routers import (user, equipment, equipment_lack, auth, information)
from starlette.middleware.cors import CORSMiddleware

database.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(user.router)
app.include_router(equipment.router)
app.include_router(equipment_lack.router)
app.include_router(information.router)

# CORSを回避する
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)