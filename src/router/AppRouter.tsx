import { createBrowserRouter } from 'react-router-dom'
import UserPanel from '../pages/UserPanel'
import HomePage from '../pages/HomePage'


export const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/UserPanel', element: <UserPanel/>},
    {path: '/UserProfile', element: ""}
  ])
  


