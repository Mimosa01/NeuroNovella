from typing import Any

from fastapi import FastAPI
from src.neuro import whoIAm, talk, messages
from src.schemas import SAnswer
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Neuro Novella",
)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allow_headers=["Content-Type", "Set-Cookie", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
                   "Authorization"],
)


@app.get("/")
async def index():
    return {"result": True}


@app.post("/settings")
async def start_neuro(user_input: SAnswer):
    whoIAm(user_input.value)
    answer = talk('Начни писать историю, предоставив мне возможность отвечать за действия главного героя')

    return {'result': answer}


@app.post('/talk')
async def user_answer(user_input: SAnswer):
    answer = talk(user_input.value)

    return {"result": "ok"}


@app.get('/messages')
async def get_all_messages() -> dict[str, Any]:
    return {"result": "ok"}


@app.post('/test')
async def test(user_input: SAnswer):
    print(user_input)
    return {'result': user_input.value}


