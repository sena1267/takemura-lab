# python3.9のイメージをダウンロード
FROM python:3.11-buster
ENV PYTHONUNBUFFERED=1

WORKDIR /takemura-lab/backend/src
COPY . /takemura-lab/backend

RUN pip install --upgrade pip
RUN pip install anyio==3.6.2
RUN pip install bcrypt==4.0.1
RUN pip install click==8.1.3
RUN pip install colorama==0.4.6
RUN pip install ecdsa==0.18.0
RUN pip install fastapi==0.95.1
RUN pip install greenlet==2.0.2
RUN pip install h11==0.14.0
RUN pip install idna==3.4
RUN pip install passlib==1.7.4
RUN pip install psycopg2==2.9.6
RUN pip install pyasn1==0.5.0
RUN pip install pydantic==1.10.7
RUN pip install python-jose==3.3.0
RUN pip install rsa==4.9
RUN pip install six==1.16.0
RUN pip install sniffio==1.3.0
RUN pip install sqlalchemy==2.0.13
RUN pip install starlette==0.26.1
RUN pip install typing-extensions==4.5.0
RUN pip install uvicorn==0.22.0

CMD ["uvicorn", "main:app","--reload","--host","0.0.0.0","--port","8080"]