import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function HousingProgressBar(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(props.totalHousingExpense)
  }, [props.totalHousingExpense])
  

  return (
    <>     
    {props.totalHousingExpense ? 
      <LinearProgress variant="determinate" value={progress} sx={{height: 15}} />
    :
    ''
    }
    </>
  );
}