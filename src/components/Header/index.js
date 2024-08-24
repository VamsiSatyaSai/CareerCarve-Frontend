import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
    <nav className='navbar'>
        <img className='logo' alt='logo' src='https://res.cloudinary.com/dmkxsg5xs/image/upload/v1724408446/Picture1_x7iijf.png'/>
        <div className='header-text-container'>
            <Link to='/' className='link'>
            <p>Home</p>
            </Link>
            <Link to='/booking' className='link'>
            <p>Booking</p>
            </Link>
            
        </div>
    </nav>
)

export default Header