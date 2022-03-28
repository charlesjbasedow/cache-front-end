import { Bar } from "react-chartjs-2";
import { useEffect, useState } from 'react';

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
          data: [props.totalHealthExpense],
          backgroundColor: 'rgb(255, 99, 132)',
        }]
    })
    setChartOptions({
      responsive: true,
      indexAxis: 'y',
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
    })
  }, [props.totalHealthExpense])

  return (  
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default HealthBarChart;