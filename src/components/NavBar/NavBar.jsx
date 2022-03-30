import { Link } from 'react-router-dom'
import './NavBar.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='bottom-nav'>
          <Link className='home' to="/"><HomeOutlinedIcon fontSize='large' /></Link>
          <Link className='add' to="/add"><AddCircleOutlineOutlinedIcon fontSize='large' /></Link>
          <Link className='transactions' to="/transactions"><CompareArrowsIcon fontSize='large'/></Link>
          <Link className='budget' to="/budgets"><BarChartIcon fontSize='large' /></Link>
          <Link className='goals' to="/goals"><StarBorderPurple500OutlinedIcon fontSize='large' /></Link>
        </nav>
      :
        <nav>
        </nav>
      }
    </>
  )
}

export default NavBar
