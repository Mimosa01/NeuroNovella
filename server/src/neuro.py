import os

from dotenv import load_dotenv
from langchain.chains.question_answering.map_reduce_prompt import messages
from langchain_core.messages import HumanMessage, SystemMessage, BaseMessage
from langchain_community.chat_models.gigachat import GigaChat

load_dotenv()

TOKEN = os.environ.get("TOKEN")

dop_text: str = 'Продолжи историю пятью предложениями, добавив негативные или положительные последствия и предоставь мне возможность отвечать за действия главного героя'

messages = []

llm = GigaChat(
    credentials=TOKEN,
    scope="GIGACHAT_API_PERS",
    model="GigaChat",
    # Отключает проверку наличия сертификатов НУЦ Минцифры
    verify_ssl_certs=False,
    streaming=False,
)


def whoIAm(value: str) -> None:
    text = f'Ты сценарист визуальной новеллы. Параметры истории: {value}. Твоя задача писать историю на основе ответа пользователя.'
    messages.append(
        SystemMessage(
            content=text
        )
    )


def talk(value: str) -> BaseMessage:
    user_message = HumanMessage(content=f'{value}. {dop_text}')
    messages.append(
        user_message
    )
    answer = llm.invoke(messages)
    messages.append(answer)

    return answer
