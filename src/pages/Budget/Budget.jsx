import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Budget.css'
import BudgetCard from "../../components/BudgetCard/BudgetCard";
import HealthProgressBar from "../../components/BudgetCategoryCards/HealthProgressBar";
import HousingProgressBar from "../../components/BudgetCategoryCards/HousingProgressBar";
import GroceryProgressBar from "../../components/BudgetCategoryCards/GroceryProgressBar";
import BillsProgressBar from "../../components/BudgetCategoryCards/BillsProgressBar";
import TravelProgressBar from "../../components/BudgetCategoryCards/TravelProgressBar";
import TotalBudgetChart from "../../components/TotalBudgetChart/TotalBudgetChart"


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
    <div>
      <p>Click here to create your {currentMonth} budget </p>
      <Link to='/add-budget' >Add Budget</Link > 
    </div>
    :
    <>

    <h1 className="budget-pg-title">{currentMonth} Budget Summary</h1>
      
          
    <div className="budget-chart">
    <div className="total-amount-container">
      <h3 className="total-amount-left">${props.totalExpense} left</h3>
    </div>
    <div>
        {props.budgets.map(budget => (
          <BudgetCard 
          user={props.user} 
          key={budget._id} 
          budget={budget} 
          // handleDeleteBudget={props.handleDeleteBudget}
          />
        ))}
      </div>
    <div className="budget-chart-container">
      <TotalBudgetChart className="total-budget-chart" currentBudget={currentBudget} totalExpense={props.totalExpense} />
    </div>
    </div>
      <div className=".categories-title-container">
        <h3 className="categories-title">Categories</h3>
      </div>
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
    </>
    
    }
    </main>
    </>
  );
}

export default BudgetPage;