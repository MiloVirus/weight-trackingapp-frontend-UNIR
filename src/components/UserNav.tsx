import logo from '../../public/img/WIN_20240401_16_41_57_Pro.jpg'
import "../styles/UserNav.css"

const UserNav = () => {
  return (
    <>
    <nav className="userNavigation">
        <img className="userNavigation__img" src={logo}/>
        <p className='userNavigation__p'>Username</p>
    </nav>
    </>
  )
}

export default UserNav