import { useState } from 'react'
import logo from '../../public/img/WIN_20240401_16_41_57_Pro.jpg'
import "../styles/UserNav.css"

const UserNav = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () =>
  {
    setToggle(!toggle)
  }

  return (
    <>
    <nav className="userNavigation">
        <img className="userNavigation__img" src={logo}/>
        <p className='userNavigation__p'>Username</p>
        <button onClick={handleToggle} className='userNavigation__button'>v</button>
    </nav>
    <div className={toggle ? 'dropDownMenu': 'dropDownMenu hidden'}>
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