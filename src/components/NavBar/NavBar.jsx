import { Link } from 'react-router-dom'
import './NavBar.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useState, useEffect } from "react";

const NavBar = ({ user, handleLogout }) => {

  const [activeRoute, setActiveRoute] = useState('home')

  function handleHomeClick (){
    setActiveRoute('home')
  }

  function handleAddClick (){
    setActiveRoute('add')
  }

  function handleTransactionsClick (){
    setActiveRoute('transactions')
  }


  function handleBudgetsClick (){
    setActiveRoute('budgets')
  }


  function handleGoalsClick (){
    setActiveRoute('goals')
  }

  function getActiveClassName(routeName) {
    return routeName === activeRoute ? 'active' : '';
  }

  return (
    <>
      {user ?
        <nav className='bottom-nav'>
          <Link className={'home' + getActiveClassName('home')} to="/" onClick={handleHomeClick}><HomeOutlinedIcon fontSize='large' /></Link>
          <Link className={'transactions' + getActiveClassName('transactions')} to="/transactions" onClick={handleTransactionsClick}><CompareArrowsIcon fontSize='large'/></Link>
          <Link className={'add' + getActiveClassName('add')} to="/add" onClick={handleAddClick}><AddCircleOutlineOutlinedIcon fontSize='large' /></Link>
          <Link className={'budgets' + getActiveClassName('budgets')}  to="/budgets" onClick={handleBudgetsClick}><BarChartIcon fontSize='large' /></Link>
          <Link className={'goals' + getActiveClassName('goals')}  to="/goals" onClick={handleGoalsClick}><StarBorderPurple500OutlinedIcon fontSize='large' /></Link>
        </nav>
        :
        <nav>
        </nav>
      }
    </>
  )
}

export default NavBar
