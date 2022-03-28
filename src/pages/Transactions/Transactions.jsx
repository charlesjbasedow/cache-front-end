import "./Transactions.css"
import IncomeCard from "../../components/IncomeCard/IncomeCard";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import ColorToggleButton from "../../components/ToggleButton/ToggleButton";

const Transactions = (props) => {

  return (  
    <>
    <div className="transactions-header">
      <div className="current-balance">
        <p>{props.totalIncome - props.totalExpense}</p>
        <p className="current-balance-label">Current Balance</p>
      </div>
      <div className="income-label-container">
        <p>{props.totalIncome}</p>
        <p className="income-label">Income</p>
      </div>
      <div className="expenses-label-container">
      <p>{props.totalExpense}</p>
        <p className="expenses-label">Expenses</p>
      </div>
    </div>

    <h3 className="transactions-title">Transactions</h3>
    <ColorToggleButton />
    <div>
      {props.incomes.map(income => (
        <IncomeCard key={income._id} income={income} user={props.user} handleDeleteIncome={props.handleDeleteIncome} />
      ))}
    </div>
    <div>
      {props.expenses.map(expense => (
        <ExpenseCard key={expense._id} expense={expense} user={props.user} handleDeleteExpense={props.handleDeleteExpense} />
      ))}
    </div>
    </>
  )
}

export default Transactions;