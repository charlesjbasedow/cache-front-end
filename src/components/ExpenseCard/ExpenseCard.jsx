import '../IncomeCard/IncomeExpenseCard.css'
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

function ExpenseCard({expense, handleDeleteExpense, user}) {

  function checkCategory(expense) {
    let catIcon
    if(expense.category === 'Health'){
      catIcon = <LocalHospitalIcon fontSize='large'/>
    } 
    if(expense.category === 'Housing') {
      catIcon = <HomeIcon fontSize='large'/>
    } 
    if(expense.category === 'Grocery') {
      catIcon = <RestaurantIcon fontSize='large'/>
    } 
    if(expense.category === 'Bills') {
      catIcon = <CreditCardIcon fontSize='large'/>
    } 
    if(expense.category === 'Travel'){
      catIcon = <AirplanemodeActiveIcon fontSize='large'/>
    } 
    if(expense.category === 'Other'){
      catIcon = <MoneyOffIcon fontSize='large' />
    }
    return catIcon
  }
  let icon = checkCategory(expense)

  return (  
    <>
    {expense.owner._id === user.profile ?
    <div className='card'>
      <p className='icon'>{icon}</p>
      <p className='category'>{expense.category}</p>
      <p className='amount'>- ${expense.amount}</p>
      <p className='date'>{expense.date}</p>
      <button className='delete-btn' onClick={() => handleDeleteExpense(expense._id)} >X</button>
    </div>
    :
    <p></p>
    }
    </>
  );
}

export default ExpenseCard; 