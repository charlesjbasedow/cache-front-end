import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function TravelProgressBar(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(props.totalTravelExpense)
  }, [props.totalTravelExpense])
  

  return (
    <>     
    {props.totalTravelExpense ? 
      <LinearProgress variant="determinate" value={progress} sx={{height: 15}} />
    :
    ''
    }
    </>
  );
}