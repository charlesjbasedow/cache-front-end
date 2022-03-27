import { Link } from 'react-router-dom'

function BudgetCard({budget, handleDeleteBudget}) {
  return (  
    <>
    <div>
      <p>total limit: {budget.totalLimit}</p>
      <p>category: {budget.category}</p>
      <p>category limit: {budget.categoryLimit}</p>
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
