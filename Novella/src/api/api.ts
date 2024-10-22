import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/'

export type PostData = {
    value: string;
}

export async function startSettingsHistory(value: PostData): Promise<string> {
    return await axios.post(`${BASE_URL}settings`, value, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.data)
}

export async function talkNeuro(value: PostData): Promise<string> {
    return await axios.post(`${BASE_URL}talk`, value, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.data)
}

export async function test(value: PostData): Promise<{result: string}> {
    return await axios.post(`${BASE_URL}test`, value, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

export async function allMessages(): Promise<void> {
    return await axios.post(`${BASE_URL}messages`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}