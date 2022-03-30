import { Link } from 'react-router-dom'
import './GoalCard.css'
import ClearIcon from '@mui/icons-material/Clear';
import SavingsIcon from '@mui/icons-material/Savings';
import GoalProgressBar from '../GoalProgressBar/GoalProgressBar'
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

function GoalCard ({goal, handleDeleteGoal, user}) {
  return ( 
    <>
    {goal.owner._id === user.profile ?
    <main>
    <div className='goal-container'>
      <SavingsIcon className='savings-icon' fontSize='large' />
      <p className='goal-name'>{goal.name}</p>
      <div className='goal-progress-container'>
        <GoalProgressBar goal={goal} className='goal-progress' />
      </div>
      {goal.currentAmount > 0 ?
      <div className='amount-container'>
      <p className='goal-current-amount'><SquareRoundedIcon className='saved' /> ${goal.currentAmount} Saved</p>
      <p className='goal-amount'><SquareRoundedIcon className='to-save' /> ${goal.amount - goal.currentAmount} To Save</p>
      </div>
      :
      <p></p>
      }

      <div className='delete-goal-btn-container'>
      <button className='delete-goal-btn' onClick={() => handleDeleteGoal(goal._id)}>X</button>
      </div>
      <div className='edit-goal-link-container'>
      <Link to='/edit-goal' state={{goal}} className='edit-goal-link'>Edit</Link>
      </div>
    </div>
    </main>
    :
    <p></p>
  }
    </>
  );
}

export default GoalCard;