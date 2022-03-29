import { Bar } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function GroceryBarChart(props) {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: [""],
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
          max: 100,
          min: 0,
          grid: {
            display: false,
            drawBorder: false,
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
          }
        },
    }
    })
  }, [props.totalGroceryExpense])

  return (  
    <>
    {props.totalGroceryExpense ? 
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
    :
    ''
    }
    </>
  );
}

export default GroceryBarChart;