import { Link } from 'react-router-dom'
import '../../pages/Budget/Budget.css'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

function BudgetCard({budget, user}) {

  return (  
    <>
      {budget.owner._id === user.profile ?
        <div>
          <Link
              className='edit-budget-link'
              to='/edit-budget'
              state={{budget}}
          >
            <ModeEditOutlineIcon /> edit
          </Link>
        </div>
        :
        <p>You don't have a budget</p>
      }
    </>
  );
}

export default BudgetCard;
