import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function ExpensesBarChart(props) {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  

  useEffect(() => {
    setChartData({
      labels: ["Health", "Housing", "Grocery", "Bills", "Travel", "Other"],
      datasets: [
        {
          label: "March Expenses",
          data: [20, 50, 100, 35, 120, 10],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(3, 162, 230)',
          ],
        }
      ]
    })
    setChartOptions({
      responsive: true,
      title: {
        display: true,
        text: "Expenses for March"
      }
    })
  }, [])

  return (  
    <div>
      <Doughnut options={chartOptions} data={chartData} />
    </div>
  );
}
 
export default ExpensesBarChart;