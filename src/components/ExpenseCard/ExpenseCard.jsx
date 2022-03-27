import '../IncomeCard/IncomeExpenseCard.css'
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

function ExpenseCard({expense, handleDeleteExpense, user}) {
  // write a function that returns the correct icon based on category name 

  function checkCategory(expense) {
    let catIcon
    if(expense.category === 'Health'){
      catIcon = <LocalHospitalIcon />
    } 
    if(expense.category === 'Housing') {
      catIcon = <HomeIcon />
    } 
    if(expense.category === 'Grocery') {
      catIcon = <RestaurantIcon />
    } 
    if(expense.category === 'Bills') {
      catIcon = <CreditCardIcon />
    } 
    if(expense.category === 'Travel'){
      catIcon = <AirplanemodeActiveIcon />
    } 
    if(expense.category === 'Other'){
      catIcon = <MoneyOffIcon />
    }
    return catIcon
  }
  let icon = checkCategory(expense)

  return (  
    <>
    {expense.owner._id === user.profile ?
    <div className='card'>
      <p>{icon}</p>
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