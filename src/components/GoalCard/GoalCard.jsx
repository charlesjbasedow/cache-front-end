import { Link } from 'react-router-dom'

function GoalCard ({goal, handleDeleteGoal, user}) {
  return ( 
    <>
    {goal.owner._id === user.profile ?
    <div>
      <p>{goal.name}</p>
      <p>{goal.amount}</p>
      <button onClick={() => handleDeleteGoal(goal._id)}>Delete</button>
      <Link to='/edit-goal' state={{goal}} className='btn btn-sm btn-warning'>Edit</Link>
    </div>
    :
    <p></p>
  }
    </>
  );
}
 
export default GoalCard;