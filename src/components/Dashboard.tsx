import "../styles/dashboard.css"
import { useEffect} from "react"
import { FaBars } from "react-icons/fa";
import useToggleHook from "../hooks/useToggleHook";

interface DashboardProps {
    onComponentChange: (component: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({onComponentChange}) => {

    const [active, handleToggle] = useToggleHook(false)

    const handleResize = () => {
        if(window.innerWidth < 720)
        { 
            
        }
        else{
            handleToggle
        }
    }

    useEffect(() =>
    {
        window.addEventListener("resize", handleResize)
    }, [])


return (
    <>
    <nav className={active ? "navDashboard mobile" : "navDashboard" }>
        <ul className="navDashboard__ul">
            <li className="navDashboard__li" onClick={ ()=> onComponentChange("userPanel")}>
                <p>Graphic</p>
            </li>
            <li className="navDashboard__li" onClick={ ()=> onComponentChange("userData")}>
                <p>User Data</p>
            </li>
            <li className="navDashboard__li" onClick={ ()=> onComponentChange("excercisePanel")}>
                <p>Excercise Plan</p>
            </li>
        </ul>
    </nav>
    <div>
        <FaBars onClick={handleToggle} className="icon"/>
    </div>
    </>
)
}

export default Dashboard