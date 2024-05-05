import axios from "axios"

console.log(import.meta.env.VITE_URL_API)

const URL_AUTH = `${import.meta.env.VITE_URL_API}/auth/login/users`

export const loginService = async(data :object) =>
{
    const response = await axios.post(URL_AUTH, data)
    console.log(response.data)
    return response.data
}