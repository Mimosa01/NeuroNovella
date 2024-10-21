import { FC, useState } from "react";
import { InputContainer } from "../../styles/input"
import { Button } from "../../styles/button";

type PropsInput = {
  long?: boolean;
  placeholder: string;
  onClick: (value: string) => void;
}

export const Input: FC<PropsInput> = (props) => {
  const [ value, setValue ] = useState('');

  return (
    <InputContainer $long={props.long}>
      <input 
        type="text" 
        placeholder={props.placeholder} 
        value={value} 
        onChange={e => setValue(e.target.value as string)}
      />
      <Button onClick={() => props.onClick(value)}>
        Send
      </Button>
    </InputContainer>
  )
}