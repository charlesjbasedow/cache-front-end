import { Bar } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function HousingBarChart(props) {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Housing"],
      datasets: [{
          base: 0,
          categoryPercentage: 0.5,
          barPercentage: 1.0,
          maxBarThickness: 20,
          label: "March Expenses",
          data: [props.totalHousingExpense],
          backgroundColor: 'blue',
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
  }, [props.totalHousingExpense])

  return (  
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default HousingBarChart;