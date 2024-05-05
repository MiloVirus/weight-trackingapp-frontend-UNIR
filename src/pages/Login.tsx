import { FormEvent, useState } from "react"
import { loginService } from "../services/userService"

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmitForm = (e:FormEvent) =>
    {
        e.preventDefault()
        loginService({email, password})
    }

  return (
    <>
    <div className="LoginContainer">
        <form className="LoginContainer__form" onSubmit={handleSubmitForm}>
            <label className="LoginContainer__label" htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} className="LoginContainer__input" type="email" required name="email" id="email" />
            <label className="LoginContainer__label" htmlFor="password">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} className="LoginContainer__input" type="password" required name="password" id="password" />
            <button className="LoginContainer_button">Login</button>
            <p className="LoginContainer_p">Did you forget your password?</p>
        </form>
    </div>
    </>   
  )
}

export default Login