import "./Transactions.css"
import IncomeCard from "../../components/IncomeCard/IncomeCard";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import ColorToggleButton from "../../components/ToggleButton/ToggleButton";

const Transactions = (props) => {

  let totalIncome = props.incomes.reduce(function(prev, income){
    if (income.owner._id === props.user.profile) {
    prev = prev + income.amount
    return prev
    }
    return 0
  }, 0)


  let totalExpense = props.expenses.reduce(function(prev, expense){
    if (expense.owner._id === props.user.profile) {
    prev = prev + expense.amount
    return prev
    }
    return 0
  }, 0)


  return (  
    <>
    <div className="transactions-header">
      <div className="current-balance">
        <p className="current-balance-label">Current Balance</p>
      </div>
      <div className="income-label-container">
        <p>{totalIncome}</p>
        <p className="income-label">Income</p>
      </div>
      <div className="expenses-label-container">
      <p>{totalExpense}</p>
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