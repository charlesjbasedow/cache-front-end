import "./Transactions.css"
import IncomeCard from "../../components/IncomeCard/IncomeCard";
import ExpenseCard from "../../components/ExpenseCard/ExpenseCard";
import { useState, useEffect } from "react";
import GoalTransCard from "../../components/GoalTransCard/GoalTransCard";
// import '../../components/Header/Header.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

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

    <div className="transactions-background">

      <nav className='transactions-header-nav'>
        <div className="page-header">

        <div className='user-icon-container'>
          <AccountCircleIcon fontSize="medium" className="user-icon" /> {props.user.name}
        </div>
        <h3 className='transactions-title' >Transactions</h3>
        <Link className='logout-link' to="/" onClick={props.handleLogout}><LogoutIcon fontSize="medium"/> </Link>
        </div>

      <div className="transactions-header">
        <p className="current-balance">$ {props.totalIncome - props.totalExpense - props.totalSavings}</p>
        <p className="current-balance-label">Current Balance</p>
        <p className="income">{props.totalIncome}</p>
        <p className="income-label">Income</p>
        <p className="expenses">{props.totalExpense}</p>
        <p className="expenses-label">Expenses</p>
      </div>
      </nav>

      <div className="transactions-section">

      <h3 className="transactions-title">Transactions</h3>
      <div className="income-expenses-tabs">
        <button className="all-tab" value="all" onClick={handleClick}>All</button>
        <button className="income-tab" value="income" onClick={handleClick}>Income</button>
        <button className="expenses-tab" value="expense" onClick={handleClick}>Expenses</button>
      </div>   
        <div>
          {transactionLists}
          {showGoals && props.goals.map(goal => (
          <GoalTransCard key={goal._id} goal={goal} user={props.user} />
        ))}
        </div>  

      </div>
    </div>


    </>
  )
}

export default Transactions;