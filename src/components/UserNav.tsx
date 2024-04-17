import logo from '../../public/img/WIN_20240401_16_41_57_Pro.jpg'
import "../styles/UserNav.css"
import { FaBars } from "react-icons/fa";
import useToggleHook from './useToggleHook'

const UserNav = () => {

  const [active, handleToggle] = useToggleHook(false)


  return (
    <>
    <nav className="userNavigation">
        <img className="userNavigation__img" src={logo}/>
        <p className='userNavigation__p'>Username</p>
        <FaBars onClick={handleToggle} className='userNavigation__button'/>
    </nav>
    <div className={active ? 'dropDownMenu': 'dropDownMenu hidden'}>
      <ul>
        <li className='dropDownMenu__li'>Profile</li>
        <li className='dropDownMenu__li'>Settings</li>
        <li className='dropDownMenu__li'>Logout</li>
      </ul>
    </div>
    </>
  )
}

export default UserNav