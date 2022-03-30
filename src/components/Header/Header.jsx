import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import './Header.css'

const Header = ({user, handleLogout}) => {
  return (  
    <>
    {user ?
      <nav className='user-name'>
        <PersonIcon /> {user.name} 
        <Link className='logout-link' to="/" onClick={handleLogout}>Log Out</Link>
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