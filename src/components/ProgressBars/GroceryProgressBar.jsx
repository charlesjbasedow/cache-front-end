import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function GroceryProgressBar(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(props.totalGroceryExpense)
  }, [props.totalGroceryExpense])
  

  return (
    <>     
    {props.totalGroceryExpense ? 
      <LinearProgress variant="determinate" value={progress} sx={{height: 15}} />
    :
    ''
    }
    </>
  );
}