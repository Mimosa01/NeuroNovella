import os
from dotenv import load_dotenv
from langchain.chains.question_answering.map_reduce_prompt import messages
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_community.chat_models.gigachat import GigaChat

load_dotenv()

TOKEN = os.environ.get("TOKEN")

dop_text: str = 'Продолжи историю, добавив негативные или положительные последствия и предоставь мне возможность отвечать за действия главного героя'
messages = []
llm = GigaChat(
    credentials=TOKEN,
    scope="GIGACHAT_API_PERS",
    model="GigaChat",
    # Отключает проверку наличия сертификатов НУЦ Минцифры
    verify_ssl_certs=False,
    streaming=False,
)


def whoIAm(value: str) -> str:
    text = f'Ты сценарист визуальной новеллы. Параметры истории: {value}. Твоя задача писать историю на основе ответа пользователя.'
    messages.append(
        SystemMessage(
            content=text
        )
    )

    messages.append(
        HumanMessage(content='Начни писать историю, предоставив мне возможность отвечать за действия главного героя.'))
    answer = llm.invoke(messages)
    messages.append(answer)

    return answer.content


def talk(value: str) -> str:
    messages.append(HumanMessage(content=f'{value}. {dop_text}'))
    answer = llm.invoke(messages)
    messages.append(answer)

    return answer.content
