import { useCallback, useEffect, useRef, useState } from "react";
import { Wrapper } from "../../styles/wrapper"
import { Input } from "../Input.tsx/Input";
import { ContentContainer, Message } from "../../styles/content";
import useWebSocket from "react-use-websocket";
import { Button } from "../../styles/button";

const SOCKET = 'http://127.0.0.1:8000/ws';

export const Content = () => {
  const containerRef = useRef(null!);
  const [isStart, setIsStart] = useState(true);
  const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>([]);
  const { sendMessage, lastMessage } = useWebSocket(SOCKET);

  useEffect(() => {
    const elem: HTMLDivElement = containerRef.current;
    elem.scrollTop = elem.scrollHeight;
  });

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  const handleClickStart = useCallback(() => {
    sendMessage('Начни писать историю, предоставив мне возможность отвечать за действия главного героя.');
    setIsStart(false);
  },
    [sendMessage]
  );

  const handleClickSendMessage = useCallback((value: string) => {
    sendMessage(value);
  }, [sendMessage]);

  return (
    <Wrapper $big>
      <h3>Content</h3>

      <ContentContainer ref={containerRef}>
        {messageHistory.slice(1).map((message, idx) => (
          <Message key={idx} $right={JSON.parse(message.data).type === 'human'}>
            {JSON.parse(message.data).content}
          </Message>
        ))}
      </ContentContainer>
      {
        isStart ?
        <Button onClick={() => handleClickStart()}>Start</Button> :
        <Input 
          long
          placeholder="Your answer"
          onClick={handleClickSendMessage} 
        />
      }

    </Wrapper>      
  )
}