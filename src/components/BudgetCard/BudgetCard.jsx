import { Link } from 'react-router-dom'

function BudgetCard({budget, handleDeleteBudget}) {
  return (  
    <>
    <h1>Budget Card</h1>
    <div>
      <h3>{budget.category}</h3>
      <p>{budget.categoryLimit}</p>
      <p>{budget.totalLimit}</p>
      <Link
          className='btn btn-sm btn-warning'
          to='/editbudget'
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
