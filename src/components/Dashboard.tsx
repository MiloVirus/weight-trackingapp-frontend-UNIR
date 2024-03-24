 import "../styles/dashboard.css"

const Dashboard = () => {
  return (
    <>
    <nav className="navDashboard">
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
    </>
  )
}

export default Dashboard