import "../styles/UserNav.css"
import useToggleHook from '../hooks/useToggleHook'
import { Link } from 'react-router-dom';

const GuestNav = () => {

const [active] = useToggleHook(false)

  return (
    <>
    <div className="container">
      <nav className="userNavigation">
          <div className='userNavigation__div--container1'>
            <Link to="/"><div className='userNavigation__option'>Home</div></Link>
            <div className='userNavigation__option'>About</div>
          </div>
      </nav>
    </div>
    </>
  )
}

export default GuestNav