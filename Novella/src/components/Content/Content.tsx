import { FC, useEffect, useRef } from "react";
import { Wrapper } from "../../styles/wrapper"
import { Input } from "../Input.tsx/Input";
import { ContentContainer, Message } from "../../styles/content";

type PropsContent = {
  text: string;
  onClick: (value: string) => void;
}

export const Content: FC<PropsContent> = (props) => {
  const containerRef = useRef(null!);

  useEffect(() => {
    const elem: HTMLDivElement = containerRef.current;
    elem.scrollTop = elem.scrollHeight;
  })

  return (
    <Wrapper>
      <h3>Content</h3>

      <ContentContainer ref={containerRef}>
        <Message>
          {props.text}
        </Message>

        <Message $right>
          {props.text}
        </Message>

        <Message>
          {props.text}
        </Message>

        <Message $right>
          {props.text}
        </Message>

        <Message>
          {props.text}
        </Message>

        <Message $right>
          {props.text}
        </Message>

      </ContentContainer>

      <Input 
        long
        placeholder="Your answer"
        onClick={props.onClick} 
      />

    </Wrapper>      
  )
}