import logo from '../img/WIN_20240401_16_41_57_Pro.jpg'
import "../styles/UserNav.css"
import { FaBars } from "react-icons/fa";
import useToggleHook from '../hooks/useToggleHook'
import { Link } from 'react-router-dom';

const UserNav = () => {

  const [active, handleToggle] = useToggleHook(false)


  return (
    <>
    <div className="container">
      <nav className="userNavigation">
          <div className='userNavigation__div--container1'>
          <Link to="/"><div className='userNavigation__option'>Home</div></Link>
            <div className='userNavigation__option'>About</div>
          </div>
          <div className='userNavigation__div--container2'>
            <img className="userNavigation__img" src={logo}/>
            <p className='userNavigation__p'>Username</p>
            <FaBars onClick={handleToggle} className='userNavigation__button'/> 
          </div>
      </nav>
      <div className={active ? 'dropDownMenu': 'dropDownMenu hidden'}>
        <ul className='dropDownMenu__ul'>
          <li className='dropDownMenu__li'>Profile</li>
          <li className='dropDownMenu__li'>Settings</li>
          <li className='dropDownMenu__li'>Logout</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default UserNav