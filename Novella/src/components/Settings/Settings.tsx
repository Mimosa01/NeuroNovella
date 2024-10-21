import { FC } from "react";
import { Button } from "../../styles/button"
import { Wrapper } from "../../styles/wrapper"
import { Input } from "../Input.tsx/Input"

type PropsSettings = {
  onGenre: (value: string) => void;
  onRestart: () => void;
}

export const Settings: FC<PropsSettings> = (props) => {
  return (
    <Wrapper>
      <h3>Settings</h3>
      <Input 
        onClick={props.onGenre}
        placeholder="Write genre history"
      />
      <Button onClick={props.onRestart}>
        Restart
      </Button>
    </Wrapper>
  )
}