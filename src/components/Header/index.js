import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
    <nav className='navbar'>
       <div class='logo'><h1>Tutor</h1></div>
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
