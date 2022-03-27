import { Link } from 'react-router-dom'

function BudgetCard({budget, handleDeleteBudget}) {
  return (  
    <>
    <div>
      <p>total limit: {budget.totalLimit}</p>
      <p>health limit: {budget.healthLimit}</p>
      <p>housing limit: {budget.housingLimit}</p>
      <p>grocery limit: {budget.groceryLimit}</p>
      <p>bills limit: {budget.billsLimit}</p>
      <p>travel limit: {budget.travelLimit}</p>
      <Link
          className='btn btn-sm btn-warning'
          to='/edit-budget'
          state={{budget}}
      >
        Edit
      </Link>
      <button onClick={() => handleDeleteBudget(budget._id)} >Delete</button>
    </div>
    </>
  );
}

export default BudgetCard;
