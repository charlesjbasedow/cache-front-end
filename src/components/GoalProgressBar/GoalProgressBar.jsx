import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function GoalProgressBar(props) {
  const [progress, setProgress] = useState(0);

  let percentSaved = props.goal.currentAmount / props.goal.amount * 100

  useEffect(() => {
    setProgress(percentSaved)
  }, [percentSaved])

  return (
      <LinearProgress className='progress-bar' variant="determinate" value={progress} 
      sx={{height: 15, 
        color: 'secondary', }} />
  );
}