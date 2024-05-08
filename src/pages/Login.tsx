import { FormEvent, useState } from "react"
import { loginUser } from "../store/UserSlice"
import { useAppDispatch } from "../hooks/reduxHooks"
import '../styles/Login.css'
import LoadingButton from "../components/LoadingButton"
import GuestNav from "../components/GuestNav"

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    

    const handleSubmitForm = (e:FormEvent) =>
    {
        e.preventDefault()
        dispatch(loginUser({email, password}))
        setPassword('')
    }

  return (
    <>
    <GuestNav/>
    <div className="LoginContainer">
        <form className="LoginContainer__form" onSubmit={handleSubmitForm}>
          <div className="LoginContainer__div">
            <label className="LoginContainer__label" htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} className="LoginContainer__input" type="email" required name="email" id="email" />
          </div>
          <div className="LoginContainer__div">
            <label className="LoginContainer__label" htmlFor="password">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} className="LoginContainer__input" type="password" required name="password" id="password" />
          </div>
            <LoadingButton />
            <p className="LoginContainer_p">Did you forget your password?</p>
        </form>
    </div>
    </>   
  )
}

export default Login