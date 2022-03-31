import "./Transactions.css"
import IncomeCard from "../../components/IncomeCard/IncomeCard";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import { useState, useEffect } from "react";
import GoalTransCard from "../../components/GoalTransCard/GoalTransCard";
import ColorToggleButton from "../../components/ToggleButton/ToggleButton";

const Transactions = (props) => { 
  const [showGoals, setShowGoals] = useState(null)
  const [transactionLists, setTransactionLists] = useState(null)

useEffect(()=>{
  setTransactionLists(getTransactionList("all"))
}, [props.incomes, props.expenses])

  function handleClick(e) {
      setTransactionLists(getTransactionList(e.target.value))
    } 

    function getTransactionList(filterName) {
    if(filterName === "income") {
      setShowGoals(false)
      return props?.incomes?.map(income => (
      <IncomeCard key={income._id} income={income} user={props.user} handleDeleteIncome={props.handleDeleteIncome} />
    ))} else if(filterName === "expense") {
      setShowGoals(false)
      return props.expenses.map(expense => (
        <ExpenseCard key={expense._id} expense={expense} user={props.user} handleDeleteExpense={props.handleDeleteExpense} />))
    } else {
      setShowGoals(true)
      const income = props?.incomes?.map(income => (
        <IncomeCard key={income._id} income={income} user={props.user} handleDeleteIncome={props.handleDeleteIncome} /> ))
      const expenses = props.expenses.map(expense => (
        <ExpenseCard key={expense._id} expense={expense} user={props.user} handleDeleteExpense={props.handleDeleteExpense} />))
        return [...income, ...expenses]
    }}

  return (  
    <>
    <main>
      <div className="transactions-header">
        <p className="current-balance">$ {props.totalIncome - props.totalExpense - props.totalSavings}</p>
        <p className="current-balance-label">Current Balance</p>
        <p className="income">{props.totalIncome}</p>
        <p className="income-label">Income</p>
        <p className="expenses">{props.totalExpense}</p>
        <p className="expenses-label">Expenses</p>
      </div>
      <h3 className="transactions-title">Transactions</h3>
      <div className="income-expenses-tabs">
        <button className="income-tab" value="all" onClick={handleClick}>All</button>
        <button className="income-tab" value="income" onClick={handleClick}>Income</button>
        <button className="expenses-tab" value="expense" onClick={handleClick}>Expenses</button>
      </div>   
        <div>
          {transactionLists}
          {showGoals && props.goals.map(goal => (
          <GoalTransCard key={goal._id} goal={goal} user={props.user} />
        ))}
        </div>  
    </main>    
    </>
  )
}

export default Transactions;