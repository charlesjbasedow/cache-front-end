import { Link } from 'react-router-dom'

function BudgetCard({budget, user, handleDeleteBudget,totalExpense, healthExpense,housingExpense, groceryExpense,billsExpense, travelExpense}) {

  return (  
    <>
    {budget.owner._id === user.profile ?
    <div>
      {/* <p>total limit: {budget.totalLimit}</p>
      <p>total expense: {totalExpense}</p>
      <p>health limit: {budget.healthLimit}</p>
      <p>health expense: {healthExpense}</p>
      <p>housing limit: {budget.housingLimit}</p>
      <p>housing expense: {housingExpense}</p>
      <p>grocery limit: {budget.groceryLimit}</p>
      <p>grocery expense: {groceryExpense}</p>
      <p>bills limit: {budget.billsLimit}</p>
      <p>bills expense: {billsExpense}</p>
      <p>travel limit: {budget.travelLimit}</p>
      <p>travel expense: {travelExpense}</p> */}
      <Link
          className='btn btn-sm btn-warning'
          to='/edit-budget'
          state={{budget}}
      >
        Edit
      </Link>
      {/* <button onClick={() => handleDeleteBudget(budget._id)} >Delete</button> */}
    </div>
    :
    <p></p>
}
    </>
  );
}

export default BudgetCard;
