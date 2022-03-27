import IncomeCard from "../../components/IncomeCard/IncomeCard";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import "./Transactions.css"

const Transactions = (props) => {
  

  return (  
    <>
    <div className="transactions-header">
      <div className="current-balance">
      <h3 className="current-balance-label">Current Balance</h3>
    </div>
    <div className="income">
      <p className="income-label">Income</p>
    </div>
    <div className="expenses">
      <p className="expenses-label">Expenses</p>
    </div>
    <h3 className="transactions-title">Transactions</h3>
    </div>
    
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