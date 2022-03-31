// import styles from './Landing.module.css'
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart'
import '../../components/Header/Header.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const Landing = (props) => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date()
  let currentMonth = month[d.getMonth()]

  let totalLimit = props?.budgets[props.budgets.length-1]?.totalLimit

  return (
    <>
    {props.user ?
    <main >
      <>
      <nav className='header-nav'>
        <div className='user-icon-container'>
          <AccountCircleIcon fontSize="medium" className="user-icon" /> {props.user.name}
        </div>
        <p className='title' >Spending Overview</p>
        <Link className='logout-link' to="/" onClick={props.handleLogout}><LogoutIcon fontSize="medium"/> </Link>
      </nav>
    
  </>
     
        <h3>You have ${totalLimit - props.totalExpense} remaining in your budget</h3>
      <div>
        <DoughnutChart 
        totalExpense={props.totalExpense} 
        healthExpense={props.healthExpense}
        housingExpense={props.housingExpense}
        groceryExpense={props.groceryExpense}
        billsExpense={props.billsExpense}
        travelExpense={props.travelExpense}
        />
      </div>
    </main>
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

export default Landing
