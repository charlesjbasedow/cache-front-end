import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import './BudgetCategoryCards.css'

export default function BillsProgressBar(props) {
  const [progress, setProgress] = useState(0);
  // return NaN
  let percentSpent = props.totalBillsExpense / props.lastBudget.billsLimit * 100
  console.log(percentSpent)

  useEffect(() => {
    setProgress(props.totalBillsExpense)
  }, [props.totalBillsExpense])

  return (
    <div className='budget-cat-card-container'>
    <p className='budget-cat-card-icon'>icon</p>
    <p className='budget-cat-card-title'>Bills</p>
    <div className='budget-progress-container'>
      <LinearProgress variant="determinate" value={progress} sx={{height: 15}} />
    </div>
    {progress >= 100 ? 
    <p className='budget-status-msg'>You've exceeded your budget</p>
    :
    <p className='budget-status-msg'>Your spending is on track</p>
    }
    </div> 
  );
}