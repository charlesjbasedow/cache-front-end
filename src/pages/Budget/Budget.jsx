import BudgetCard from "../../components/BudgetCard/BudgetCard";
import HealthBarChart from "../../components/CategoryBarCharts/HealthBarChart"
import HousingBarChart from "../../components/CategoryBarCharts/HousingBarChart";
import GroceryBarChart from "../../components/CategoryBarCharts/GroceryBarChart";
import BillsBarChart from "../../components/CategoryBarCharts/BillsBarChar";
import TravelBarChart from "../../components/CategoryBarCharts/TravelBarChart";

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
      <HealthBarChart totalHealthExpense={props.healthExpense} />
    </div>
    <div>
      <HousingBarChart totalHousingExpense={props.housingExpense} />
    </div>
    <div>
      <GroceryBarChart totalGroceryExpense={props.groceryExpense} />
    </div>
    <div>
      <BillsBarChart totalBillsExpense={props.billsExpense} />
    </div>
    <div>
      <TravelBarChart totalTravelExpense={props.travelExpense} />
    </div>
    </>
  );
}

export default BudgetPage;