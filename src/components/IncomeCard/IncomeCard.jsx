import './IncomeExpenseCard.css'
import PaidIcon from '@mui/icons-material/Paid';
import ClearIcon from '@mui/icons-material/Clear';

function IncomeCard({income, handleDeleteIncome, user}) {
  return (  
    <>
    {income.owner._id === user.profile ?
    <div className='card'>
      <PaidIcon fontSize="large" className='icon' />
      <p className='name'>{income.name}</p>
      <p className='amount'>+ ${income.amount}</p>
      <p className='date'>{income.date}</p>
      <button className='delete-btn' onClick={() => handleDeleteIncome(income._id)} ><ClearIcon fontSize='small' /></button>
    </div>
    :
    <p></p>
  }
    </>
  );
}
 
export default IncomeCard;