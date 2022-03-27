import '../IncomeCard/IncomeExpenseCard.css'

function ExpenseCard({expense, handleDeleteExpense, user}) {
  return (  
    <>
    {expense.owner._id === user.profile ?
    <div className='card'>
      <p className='category'>{expense.category}</p>
      <p className='amount'>- ${expense.amount}</p>
      <p className='date'>{expense.date}</p>
      <button className='delete-btn' onClick={() => handleDeleteExpense(expense._id)} >X</button>
    </div>
    :
    <p></p>
  }
    </>
  );
}

export default ExpenseCard; 