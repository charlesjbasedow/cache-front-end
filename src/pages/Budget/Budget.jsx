import { useState, useEffect } from "react";
import BudgetCard from "../../components/BudgetCard/BudgetCard";
import HealthProgressBar from "../../components/BudgetCategoryCards/HealthProgressBar";
import HousingProgressBar from "../../components/BudgetCategoryCards/HousingProgressBar";
import GroceryProgressBar from "../../components/BudgetCategoryCards/GroceryProgressBar";
import BillsProgressBar from "../../components/BudgetCategoryCards/BillsProgressBar";
import TravelProgressBar from "../../components/BudgetCategoryCards/TravelProgressBar";

const BudgetPage = (props) => {
  // const [currentBudget, setCurrentBudget] = useState({})

  // useEffect(() => {
  //    let currentMonthBudgetIndex = props.budgets.length - 1
  // let currentMonthBudget = props.budgets[currentMonthBudgetIndex]
  // setCurrentBudget(currentMonthBudget)
  // }, [props.budgets])
 


  return ( 
    <>
    <h1>Budget Page</h1>
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
      <HealthProgressBar totalHealthExpense={props.healthExpense} budgets={props.budgets} />
    </div>
    <div>
      <HousingProgressBar totalHousingExpense={props.housingExpense} budgets={props.budgets} />
    </div>
    <div>
      <GroceryProgressBar totalGroceryExpense={props.groceryExpense} budgets={props.budgets} />
    </div>
    <div>
      <BillsProgressBar totalBillsExpense={props.billsExpense} budgets={props.budgets} />
    </div>
    <div>
      <TravelProgressBar totalTravelExpense={props.travelExpense} budgets={props.budgets} />
    </div>
    </>
  );
}

export default BudgetPage;