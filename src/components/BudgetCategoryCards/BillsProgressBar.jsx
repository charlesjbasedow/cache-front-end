import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import './BudgetCategoryCards.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { pink } from '@mui/material/colors';

export default function BillsProgressBar(props) {
  const [progress, setProgress] = useState(0);

  let percentSpent = props.totalBillsExpense / props.currentBudget.billsLimit * 100

  useEffect(() => {
    setProgress(percentSpent)
  }, [percentSpent])

  return (
    <div className='budget-cat-card-container'>
    <CreditCardIcon fontSize='large' className='budget-cat-card-icon'/>
    <p className='budget-cat-card-title'>Bills</p>
    <div className='budget-progress-container'>
      <LinearProgress className='progress-bar' variant="determinate" value={progress} 
      sx={{height: 15, 
        color: 'secondary', }} />
    </div>
    {progress >= 100 ? 
    <p className='budget-status-msg'>You've exceeded your budget</p>
    :
    <p className='budget-status-msg'>Your spending is on track</p>
    }
    </div> 
  );
}