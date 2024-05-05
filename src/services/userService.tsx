import axios from "axios"

const URL_AUTH = `${import.meta.env.VITE_URL_API}/auth/login/users`

export const loginService = async(data :object) =>
{
    const response = await axios.post(URL_AUTH, data)

    return response.data
}