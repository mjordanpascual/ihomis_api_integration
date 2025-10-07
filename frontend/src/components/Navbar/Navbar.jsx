import { Link } from 'react-router-dom'
import logo from '../../assets/ospar1logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='Navbar-container'>
         <nav className='Navbar'>
            <div className='Navbrand-logo'>
                <div>
                  <img src={ logo } alt="Ospar Logo" />
                </div>
                <div>
                  <h1>Ospital ng Parañaque</h1>
                </div>
            </div>
            <div className='Navbar-menu'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/policies">Policies</Link></li>
              </ul>
            </div>
         </nav>
      </div>  
    </>
  )
}

export default Navbar