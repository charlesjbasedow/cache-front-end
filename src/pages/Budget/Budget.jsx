import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BudgetCard from "../../components/BudgetCard/BudgetCard";
import HealthProgressBar from "../../components/BudgetCategoryCards/HealthProgressBar";
import HousingProgressBar from "../../components/BudgetCategoryCards/HousingProgressBar";
import GroceryProgressBar from "../../components/BudgetCategoryCards/GroceryProgressBar";
import BillsProgressBar from "../../components/BudgetCategoryCards/BillsProgressBar";
import TravelProgressBar from "../../components/BudgetCategoryCards/TravelProgressBar";
import CircularDeterminate from "../../components/TotalBudgetChart/TotalBudgetChart";


const BudgetPage = (props) => {
  // const [currentBudget, setCurrentBudget] = useState({})

  // useEffect(() => {
  //    let currentMonthBudgetIndex = props.budgets.length - 1
  // let currentMonthBudget = props.budgets[currentMonthBudgetIndex]
  // setCurrentBudget(currentMonthBudget)
  // }, [props.budgets])

  let date = new Date().getDate();

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];





const d = new Date();
let currentMonth = month[d.getMonth()];
let hasBudget = props?.budgets?.some((budget) => budget.month === currentMonth);
let lastBudget = props?.budgets[props.budgets.length-1]

// console.log(lastbudget)

  return ( 
    <>
    {date === 1 || !hasBudget ?
    <div>
      <p>Click here to create your {currentMonth} budget </p>
      <Link to='/add-budget' >Add Budget</Link > 
    </div>
    :
    <>
    <h1>Budget Page</h1>
    <div>
      <CircularDeterminate budgets={props.budgets} />
    </div>
      <div>
        {props.budgets.map(budget => (
          <BudgetCard 
            user={props.user} 
            key={budget._id} 
            budget={budget} 
            handleDeleteBudget={props.handleDeleteBudget}
            totalExpense={props.totalExpense} 
            healthExpense={props.healthExpense}
            housingExpense={props.housingExpense}
            groceryExpense={props.groceryExpense}
            billsExpense={props.billsExpense}
            travelExpense={props.travelExpense}
          />
        ))}
      </div>
      <div>
        <h3>Categories</h3>
      </div>
    <div>
      <HealthProgressBar totalHealthExpense={props.healthExpense} budgets={props.budgets} />
    </div>
    <div>
      <HousingProgressBar totalHousingExpense={props.housingExpense} budgets={props.budgets} />
    </div>
    <div>
      <GroceryProgressBar totalGroceryExpense={props.groceryExpense} budgets={props.budgets} />
    </div>
    <div>
      <BillsProgressBar totalBillsExpense={props.billsExpense} lastBudget={lastBudget} budgets={props.budgets} />
    </div>
    <div>
      <TravelProgressBar totalTravelExpense={props.travelExpense} budgets={props.budgets} />
    </div>
    </>
    
    }
    </>
  );
}

export default BudgetPage;