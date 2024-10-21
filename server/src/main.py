from fastapi import FastAPI
from src.neuro import whoIAm, talk
from src.schemas import SAnswer


app = FastAPI(
    title="Neuro Novella",
)


@app.get("/")
async def index():
    return {"result": True}


@app.post("/settings")
async def start_neuro(user_input: SAnswer):
    whoIAm(user_input.value)
    answer = talk('Начни писать историю, предоставив мне возможность отвечать за действия главного героя')

    return {'result': answer}


@app.post('/answer')
async def user_answer(user_input: SAnswer):
    answer = talk(user_input.value)

    return {"result": answer}
