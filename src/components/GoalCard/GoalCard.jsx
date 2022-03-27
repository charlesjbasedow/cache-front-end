import { Link } from 'react-router-dom'
import './GoalCard.css'

function GoalCard ({goal, handleDeleteGoal, user}) {
  return ( 
    <>
    {goal.owner._id === user.profile ?
    <div className='goal-container'>
      <p className='goal-name'>{goal.name}</p>
      <p className='goal-amount'>{goal.amount}</p>
      <button className='delete-goal-btn' onClick={() => handleDeleteGoal(goal._id)}>Delete</button>
      <div className='edit-goal-link'>
      <Link to='/edit-goal' state={{goal}} className='btn btn-sm btn-warning'>Edit</Link>
      </div>
    </div>
    :
    <p></p>
  }
    </>
  );
}
 
export default GoalCard;