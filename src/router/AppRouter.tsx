import { createBrowserRouter } from 'react-router-dom'
import UserPanel from '../components/UserPanel'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import UserProfile from '../pages/UserProfile'


export const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/UserPanel', element: <UserPanel/>},
    {path: '/Login', element: <Login/>},
    {path: '/UserProfile', element: <UserProfile/>}
  ])
  


