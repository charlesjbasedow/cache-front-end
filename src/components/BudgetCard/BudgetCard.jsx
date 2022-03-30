import { Link } from 'react-router-dom'
import '../../pages/Budget/Budget.css'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

function BudgetCard({budget, user, handleDeleteBudget,totalExpense, healthExpense,housingExpense, groceryExpense,billsExpense, travelExpense}) {

  return (  
    <>
    {budget.owner._id === user.profile ?
    <div>
      {/* <p>total limit: {budget.totalLimit}</p>
      <p>total expense: {totalExpense}</p>
      <p>health limit: {budget.healthLimit}</p>
      <p>health expense: {healthExpense}</p>
      <p>housing limit: {budget.housingLimit}</p>
      <p>housing expense: {housingExpense}</p>
      <p>grocery limit: {budget.groceryLimit}</p>
      <p>grocery expense: {groceryExpense}</p>
      <p>bills limit: {budget.billsLimit}</p>
      <p>bills expense: {billsExpense}</p>
      <p>travel limit: {budget.travelLimit}</p>
      <p>travel expense: {travelExpense}</p> */}
      <Link
          className='edit-budget-link'
          to='/edit-budget'
          state={{budget}}
      >
        <ModeEditOutlineIcon /> edit
      </Link>
      {/* <button onClick={() => handleDeleteBudget(budget._id)} >Delete</button> */}
    </div>
    :
    <p></p>
}
    </>
  );
}

export default BudgetCard;
