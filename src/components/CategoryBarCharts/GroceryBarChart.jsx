import { Bar } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function GroceryBarChart(props) {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Grocery"],
      datasets: [{
          base: 0,
          categoryPercentage: 0.5,
          barPercentage: 1.0,
          maxBarThickness: 20,
          label: "March Expenses",
          data: [props.totalGroceryExpense],
          backgroundColor: 'green',
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
  }, [props.totalGroceryExpense])

  return (  
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default GroceryBarChart;