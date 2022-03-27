import './IncomeExpenseCard.css'

function IncomeCard({income, handleDeleteIncome, user}) {
  return (  
    <>
    {income.owner._id === user.profile ?
    <div className='card'>
      {/* <h3>income card</h3> */}
      <p className='name'>{income.name}</p>
      <p className='amount'>+ ${income.amount}</p>
      <p className='date'>{income.date}</p>
      <button className='delete-btn' onClick={() => handleDeleteIncome(income._id)} >X</button>
    </div>
    :
    <p></p>
  }
    </>
  );
}
 
export default IncomeCard;