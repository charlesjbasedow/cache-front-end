import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function GoalProgressBar(props) {
  const [progress, setProgress] = useState(0);

  // let percentSpent = props.totalBillsExpense / props.currentBudget.billsLimit * 100

  useEffect(() => {
    setProgress(15)
  }, [])

  return (
      <LinearProgress className='progress-bar' variant="determinate" value={progress} 
      sx={{height: 15, 
        color: 'secondary', }} />
  );
}