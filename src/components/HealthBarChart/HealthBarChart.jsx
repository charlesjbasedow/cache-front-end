import { Bar } from "react-chartjs-2";
import { useEffect, useState } from 'react';
import { NoEncryptionTwoTone } from "@mui/icons-material";


function HealthBarChart(props) {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Health"],
      datasets: [{
          base: 0,
          categoryPercentage: 0.5,
          barPercentage: 1.0,
          maxBarThickness: 20,
          label: "March Expenses",
          data: [28],
          backgroundColor: 'rgb(255, 99, 132)',
        }]
    })
    setChartOptions({
      responsive: true,
      indexAxis: 'y',
      options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          },
        }
      }
    })
  }, [])

  return (  
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}
 
export default HealthBarChart;