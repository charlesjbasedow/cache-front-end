import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function BillsProgressBar(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(props.totalBillsExpense)
  }, [props.totalBillsExpense])
  

  return (
    <>     
    {props.totalBillsExpense ? 
      <LinearProgress variant="determinate" value={progress} sx={{height: 15}} />
    :
    ''
    }
    </>
  );
}