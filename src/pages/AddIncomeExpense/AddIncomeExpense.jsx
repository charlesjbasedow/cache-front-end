import { Link } from "react-router-dom";
import './AddIncomeExpense.css'

const AddIncomeExpense = () => {
  return (  
    <div className="add-container">
      <div className="add-income-link">
        <Link className="link" to="/add-income">Add Income</Link>
      </div>
      <div className="add-expense-link">
        <Link className="link" to="/add-expense">Add Expense</Link>
      </div>
    </div>
  );
}

export default AddIncomeExpense;