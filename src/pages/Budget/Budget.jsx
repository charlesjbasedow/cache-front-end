import BudgetCard from "../../components/BudgetCard/BudgetCard";

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
    </>
  );
}

export default BudgetPage;