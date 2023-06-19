from database import database
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from routers import (
    user,
    equipment,
    equipment_lack,
    equipment_history,
    auth,
    information
)
from starlette.middleware.cors import CORSMiddleware
from fastapi.openapi.docs import get_swagger_ui_html

security = HTTPBasic()

def get_current_username(credentials: HTTPBasicCredentials = Depends(security)):
    correct_username = "hirofuru"
    correct_password = "@pp"
    if credentials.username != correct_username or credentials.password != correct_password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Basic"},
        )
    return credentials.username

database.Base.metadata.create_all(bind=database.engine)

app = FastAPI(docs_url=None)  # Disable default docs

app.include_router(auth.router)
app.include_router(user.router)
app.include_router(equipment.router)
app.include_router(equipment_lack.router)
app.include_router(equipment_history.router)
app.include_router(information.router)

# CORSを回避する
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)