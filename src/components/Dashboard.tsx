import "../styles/dashboard.css"
import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa";

const Dashboard = () => {

    const [onSwitch, setOnSwitch] = useState(false)

    const switchSelection = () => {
        setOnSwitch(!onSwitch)
    }

    const handleResize = () => {
        if(window.innerWidth < 720)
        { }
        else{
            setOnSwitch(false)
        }
    }

    useEffect(() =>
    {
        window.addEventListener("resize", handleResize)
    }, [])


return (
    <>
    <nav className={onSwitch ? "navDashboard mobile" : "navDashboard" }>
        <ul className="navDashboard__ul">
            <li className="navDashboard__li">
                <p>Graphic</p>
            </li>
            <li className="navDashboard__li">
                <p>User Data</p>
            </li>
            <li className="navDashboard__li">
                <p>Extra Option</p>
            </li>
        </ul>
    </nav>
    <div>
        <FaBars onClick={switchSelection} className="icon"/>
    </div>
    </>
)
}

export default Dashboard