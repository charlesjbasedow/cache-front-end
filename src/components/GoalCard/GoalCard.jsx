import { Link } from 'react-router-dom'

const GoalCard = ({goal, handleDeleteGoal}) => {
  return ( 
    <>
    <h1>Goal Card</h1>
    <div>
      <h3>{goal.name}</h3>
      <p>{goal.amount}</p>
      <button onClick={() => handleDeleteGoal(goal._id)}>Delete</button>
      <Link to='/edit-goal' state={{goal}} className='btn btn-sm btn-warning'>Edit</Link>
    </div>
    </>
   );
}
 
export default GoalCard;