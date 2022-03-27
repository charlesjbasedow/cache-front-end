import { Link } from 'react-router-dom'
import './NavBar.css'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarIcon from '@mui/icons-material/Star';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          {/* Welcome, {user.name} */}
          {/* <Link to="/profiles">Profiles</Link> */}
          <Link to="" onClick={handleLogout}>LOG OUT</Link>
          {/* <Link to="/changePassword">Change Password</Link> */}
          <Link className='add' to="/add"><AddCircleSharpIcon fontSize='large' /></Link>
          <Link className='transactions' to="/transactions"><CompareArrowsIcon fontSize='large'/></Link>
          <Link className='budget' to="/budgetspage"><BarChartIcon fontSize='large' /></Link>
          <Link className='goals' to="/goals-page"><StarIcon fontSize='large' /></Link>
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
  )
}

export default NavBar
