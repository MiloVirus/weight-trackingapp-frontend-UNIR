import axios, { AxiosResponse } from "axios"

const URL_AUTH = `${import.meta.env.VITE_URL_API}/auth/login/users`

export const loginService = async(data :object) =>
{
    const response: AxiosResponse<string, object> = await axios.post(URL_AUTH, data)

    return response.data
}