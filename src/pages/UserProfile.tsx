import UserNav from "../components/UserNav"
import Dashboard from "../components/Dashboard"
import UserPanel from "../components/UserPanel"
import UserData from "../components/UserData"
import ExcercisePanel from "../components/ExcercisePanel"
import "../styles/UserProfile.css"
import { useState } from "react"


const UserProfile = () => {

  const [activeComponent, setActiveComponent] = useState<string>("userPanel"); 
  

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };
    
  return (
    <>
    <UserNav/>
    <div className="userContainer">
      <div className="userContainer__div--dashboard">
        <Dashboard onComponentChange={handleComponentChange}/>
      </div>
      <div className="userContainer__div--userPanel">
        {activeComponent === "userPanel" && <UserPanel/>}
        {activeComponent === "userData" && <UserData/>}
        {activeComponent === "excercisePanel" && <ExcercisePanel/>}
      </div>
        
        
    </div>
    
    </>
  )
}

export default UserProfile