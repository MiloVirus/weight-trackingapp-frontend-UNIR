import UserNav from "../components/UserNav"
import Dashboard from "../components/Dashboard"
import UserPanel from "./UserPanel"
import UserData from "./UserData"
import "../styles/UserProfile.css"
import { useState } from "react"


const UserProfile = () => {

    const [activeComponent, setActiveComponent] = useState<string>("userPanel"); // Initially set to Dashboard

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };
    
  return (
    <>
    <UserNav/>
    <div className="userContainer">
        <Dashboard onComponentChange={handleComponentChange}/>
        {activeComponent === "userPanel" && <UserPanel/>}
        {activeComponent === "userData" && <UserData/>}
    </div>
    
    </>
  )
}

export default UserProfile