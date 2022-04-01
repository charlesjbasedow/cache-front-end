import { Link } from "react-router-dom";
import './Budget.css'
import BudgetCard from "../../components/BudgetCard/BudgetCard";
import HealthProgressBar from "../../components/BudgetCategoryCards/HealthProgressBar";
import HousingProgressBar from "../../components/BudgetCategoryCards/HousingProgressBar";
import GroceryProgressBar from "../../components/BudgetCategoryCards/GroceryProgressBar";
import BillsProgressBar from "../../components/BudgetCategoryCards/BillsProgressBar";
import TravelProgressBar from "../../components/BudgetCategoryCards/TravelProgressBar";
import TotalBudgetChart from "../../components/TotalBudgetChart/TotalBudgetChart"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const BudgetPage = (props) => {

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let currentMonth = month[d.getMonth()];
  let hasBudget = props?.budgets?.some((budget) => budget.month === currentMonth)
  let currentBudget = props?.budgets[props.budgets.length-1]

  return ( 
    <>
      <main>
        {!hasBudget ?
          <div className="add-budget">
            <h3 className="add-budget-msg">Click below to create your {currentMonth} budget </h3>
            <button className="add-budget-btn">
              <Link className="add-budget-link" to='/add-budget' >Create a Budget</Link > 
            </button>
          </div>
          :
          <>
            <nav className='budget-header-nav'>
              <div className='user-icon-container'>
                <AccountCircleIcon fontSize="medium" className="user-icon" /> {props.user.name}
              </div>
              <h3 className="budget-pg-title">Budgets</h3>
              <Link className='logout-link' to="/" onClick={props.handleLogout}><LogoutIcon fontSize="medium"/> </Link>
            </nav>
            <h2 className="budget-title">{currentMonth} Budget</h2>
            <div className="budget-chart">
              <div className="total-amount-container">
                <h1 className="total-amount-left">${currentBudget.totalLimit - props.totalExpense}</h1>
                <h3 className="left">left</h3>
              </div>
              <div className="budget-chart-container">
                <TotalBudgetChart className="total-budget-chart" currentBudget={currentBudget} totalExpense={props.totalExpense} />
              </div>
            </div>
            <div className="categories-container">
              <div className=".categories-title-container">
                <div>
                  {props.budgets.map(budget => (
                    <BudgetCard 
                      user={props.user} 
                      key={budget._id} 
                      budget={budget} 
                    />
                    ))}
                </div>
              </div>
              <h3 className="categories-title">Categories</h3>
              <div>
                <HealthProgressBar totalHealthExpense={props.healthExpense} currentBudget={currentBudget} budgets={props.budgets} />
              </div>
              <div>
                <HousingProgressBar totalHousingExpense={props.housingExpense} currentBudget={currentBudget} budgets={props.budgets} />
              </div>
              <div>
                <GroceryProgressBar totalGroceryExpense={props.groceryExpense} currentBudget={currentBudget} budgets={props.budgets} />
              </div>
              <div>
                <BillsProgressBar totalBillsExpense={props.billsExpense} currentBudget={currentBudget} budgets={props.budgets} />
              </div>
              <div>
                <TravelProgressBar totalTravelExpense={props.travelExpense} currentBudget={currentBudget} budgets={props.budgets} />
              </div>
            </div>
          </>        
        }
      </main>
    </>
  );
}

export default BudgetPage;