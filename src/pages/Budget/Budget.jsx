import BudgetCard from "../../components/BudgetCard/BudgetCard";
import HealthProgressBar from "../../components/ProgressBars/HealthProgressBar";
import HousingProgressBar from "../../components/ProgressBars/HousingProgressBar";
import GroceryProgressBar from "../../components/ProgressBars/GroceryProgressBar";
import BillsProgressBar from "../../components/ProgressBars/BillsProgressBar";
import TravelProgressBar from "../../components/ProgressBars/TravelProgressBar";

const BudgetPage = (props) => {
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
      <HealthProgressBar totalHealthExpense={props.healthExpense} />
    </div>
    <div>
      <HousingProgressBar totalHousingExpense={props.housingExpense} />
    </div>
    <div>
      <GroceryProgressBar totalGroceryExpense={props.groceryExpense} />
    </div>
    <div>
      <BillsProgressBar totalBillsExpense={props.billsExpense} />
    </div>
    <div>
      <TravelProgressBar totalTravelExpense={props.travelExpense} />
    </div>
    </>
  );
}

export default BudgetPage;