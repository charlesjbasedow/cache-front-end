import { Link } from 'react-router-dom'
import './GoalCard.css'

function GoalCard ({goal, handleDeleteGoal, user}) {
  return ( 
    <>
    {goal.owner._id === user.profile ?
    <div className='goal-container'>
      <p className='goal-name'>{goal.name}</p>
      <p className='goal-currentAmount'>Current Amount: {goal.currentAmount}</p>
      <p className='goal-amount'>Goal Target: {goal.amount}</p>
      <button className='delete-goal-btn' onClick={() => handleDeleteGoal(goal._id)}>X</button>
      <div className='edit-goal-link'>
      <Link to='/edit-goal' state={{goal}} className='btn btn-sm btn-warning'>Edit</Link><br></br>
      </div>
    </div>
    :
    <p></p>
  }
    </>
  );
}

export default GoalCard;