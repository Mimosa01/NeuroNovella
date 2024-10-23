import { Button } from "../../styles/button"
import { Wrapper } from "../../styles/wrapper"
import { Input } from "../Input.tsx/Input"
import { useMutation } from "@tanstack/react-query";
import { startSettingsHistory } from "../../api/api";
import { queryClient } from "../../api/queryClient";
import { PostDataType } from "../../models/apiModels";
import { useState } from "react";

function handleRestart(): void {
  console.log('Restart');
}

export const Settings = () => {
  const [isStartSettings, setStartSettings] = useState(true);

  const settingsHistoryMutate = useMutation({
    mutationFn: (value: PostDataType) => startSettingsHistory(value),
    mutationKey: ['start'],
    retry: 0,
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ['messages']})
    }
  }, queryClient
  );

  const handleClickSettingsHistory = (value: string) => {
    settingsHistoryMutate.mutate({'value': value});
    setStartSettings(false);
  }

  return (
    <Wrapper>
      <h3>Settings</h3>
      <Input 
        onClick={handleClickSettingsHistory}
        placeholder="Write genre history"
        disabled={!isStartSettings}
      />
      <Button onClick={() => handleRestart()}>
        Restart
      </Button>
    </Wrapper>
  )
}