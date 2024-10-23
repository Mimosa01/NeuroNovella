import json
from typing import Any

from fastapi import FastAPI, WebSocket
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
    return {'result': 'ok'}


@app.post("/settings")
async def start_neuro(user_input: SAnswer):
    whoIAm(user_input.value)

    return {'result': 'ok'}


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        print(data)
        answer = talk(data)
        print(answer)
        await websocket.send_json({
                "type": "human",
                "content": data
            })
        await websocket.send_json({
                "type": "ai",
                "content": answer.content
            })
