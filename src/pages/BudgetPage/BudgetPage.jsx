import BudgetCard from "../../components/BudgetCard/BudgetCard";

const BudgetPage = (props) => {
  return ( 
    <>
    <h1>Budget Page</h1>
      <div>
        {props.budgets.map(budget => (
          <BudgetCard key={budget._id} budget={budget} handleDeleteBudget={props.handleDeleteBudget} />
        ))}
      </div>
    </>
  );
}

export default BudgetPage;