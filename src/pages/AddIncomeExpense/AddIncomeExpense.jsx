import { Link } from "react-router-dom";

const AddIncomeExpense = () => {
  return (  
    <>
      <h1>Add Income Expense</h1>
      <Link to="/add-income">Add Income</Link>
      <Link to="/add-expense">Add Expense</Link>

    </>
  );
}
 
export default AddIncomeExpense;