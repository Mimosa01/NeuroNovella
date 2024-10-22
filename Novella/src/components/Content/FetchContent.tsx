import { useQuery } from "@tanstack/react-query"
import { allMessages } from "../../api/api"
import { queryClient } from "../../api/queryClient"

export const FetchContent = () => {
    const messagesQuery = useQuery({
        queryFn: () => allMessages(),
        queryKey: ['messages'],
        retry: 0
    }, queryClient)

    // Сюда нужно написать вывод сообщений

    return (
        <></>
    )
}