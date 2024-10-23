import axios from "axios";
import { PostDataType } from "../models/apiModels";

const BASE_URL = 'http://127.0.0.1:8000/'

export async function startSettingsHistory(value: PostDataType): Promise<void> {
    return await axios.post(`${BASE_URL}settings`, value, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.data)
}

export async function talkNeuro(value: PostDataType): Promise<void> {
    return await axios.post(`${BASE_URL}talk`, value, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.data)
}

export async function test(value: PostDataType): Promise<{result: string}> {
    return await axios.post(`${BASE_URL}test`, value, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

export async function allMessages(): Promise<void> {
    return await axios.get(`${BASE_URL}messages`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}