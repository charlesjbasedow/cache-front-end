import { Link } from "react-router-dom";
import './AddIncomeExpense.css'

const AddIncomeExpense = () => {
  return (  
    <>
    <div className="container">
    <div className="add-income">
      <Link className="link" to="/add-income">Add Income</Link>
    </div>
    <div className="add-expense">
      <Link className="link" to="/add-expense">Add Expense</Link>
    </div>
      <div className="add-budget">
        <Link to="/add-budget">Add Budget</Link>
      </div>
    </div>
      
    </>
  );
}

export default AddIncomeExpense;