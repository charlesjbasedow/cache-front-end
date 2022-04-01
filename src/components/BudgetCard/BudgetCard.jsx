import { Link } from 'react-router-dom'
import '../../pages/Budget/Budget.css'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

function BudgetCard({budget, user}) {

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let currentMonth = month[d.getMonth()];

  return (  
    <>
      {budget.owner._id === user.profile && budget.month === currentMonth ?
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
        <p></p>
      }
    </>
  );
}

export default BudgetCard;
