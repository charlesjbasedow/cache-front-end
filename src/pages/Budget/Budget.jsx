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
          <BudgetCard user={props.user} key={budget._id} budget={budget} handleDeleteBudget={props.handleDeleteBudget}
          totalExpense={props.totalExpense} healthExpense={props.healthExpense}
          />
        ))}
      </div>
    <div>
      <HealthBarChart />
    </div>
    <div>
      <HousingBarChart />
    </div>
    <div>
      <GroceryBarChart />
    </div>
    <div>
      <BillsBarChart />
    </div>
    <div>
      <TravelBarChart />
    </div>
    </>
  );
}

export default BudgetPage;