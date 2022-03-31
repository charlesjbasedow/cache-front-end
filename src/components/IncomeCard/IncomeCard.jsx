import './IncomeExpenseCard.css'
import PaidIcon from '@mui/icons-material/Paid';
import DeleteIcon from '@mui/icons-material/Delete';

function IncomeCard({income, handleDeleteIncome, user}) {
  return (  
    <>
    {income.owner._id === user.profile ?
    <div className='income-card'>
      <PaidIcon fontSize="large" className='icon' />
      <p className='name'>{income.name}</p>
      <p className='amount'>+ ${income.amount}</p>
      <p className='date'>{new Date(income.date).toLocaleDateString() }</p>
      <button className='delete-btn' onClick={() => handleDeleteIncome(income._id)} ><DeleteIcon fontSize='small' /></button>
    </div>
    :
    <p></p>
  }
    </>
  );
}

export default IncomeCard;