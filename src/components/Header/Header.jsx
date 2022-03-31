import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './Header.css'

const Header = ({user, handleLogout}) => {
  return (  
    <>
    {user ?
      <nav className='header-nav'>
        <div className='user-icon-container'>
          <AccountCircleIcon fontSize="large" className="user-icon" /> {user.name}
        </div>
        
        <Link className='logout-link' to="/" onClick={handleLogout}><LogoutIcon fontSize="large"/> </Link>
        {/* <Link to="/changePassword">Change Password</Link> */}
      </nav>
    :
      <nav>
        <ul>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </ul>
      </nav>
    }
  </>
  );
}

export default Header;