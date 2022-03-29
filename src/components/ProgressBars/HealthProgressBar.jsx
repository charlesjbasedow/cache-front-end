import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function HealthProgressBar(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(props.totalHealthExpense)
  }, [props.totalHealthExpense])
  

  return (
    <>     
    {props.totalHealthExpense ? 
    <div>
      <LinearProgress variant="determinate" value={progress} sx={{height: 15}} />
    </div>
    :
    ''
    }
    </>
  );
}

// chart.js bar chart

// import { Bar } from "react-chartjs-2";
// import { useEffect, useState } from 'react';
// import { red } from "@mui/material/colors";

// function HealthBarChart(props) {
//   const [chartData, setChartData] = useState({
//     datasets: []
//   })

//   const [chartOptions, setChartOptions] = useState({})

//   useEffect(() => {
//     setChartData({
//       labels: [""],
//       datasets: [{
//           categoryPercentage: 0.5,
//           barPercentage: 1.0,
//           maxBarThickness: 20,
//           label: "",
//           data: [props.totalHealthExpense],
//           backgroundColor: 'rgb(255, 99, 132)',
//           // borderRadius: 8,
//         }]
//     })
//     setChartOptions({
//       options: {
//         legend: {
//           display: false 
//         }
//     },
//       responsive: true,
//       indexAxis: 'y',
//         scales: {
//           x: {
//             max: 100,
//             min: 0,
//             grid: {
//               display: false,
//               drawBorder: false,
//             }
//           },
//           y: {
//             grid: {
//               display: false,
//               drawBorder: false,
//             }
//           },
//       }
//     })
//   }, [props.totalHealthExpense])

//   return ( 
//     <>
//     {props.totalHealthExpense ? 
//     <div>
//       <Bar options={chartOptions} data={chartData} />
//     </div>
//     :
//     ''
//     }
//     </>
//   );
// }

// export default HealthBarChart;