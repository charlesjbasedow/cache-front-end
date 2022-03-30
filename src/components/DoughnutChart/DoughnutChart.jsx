import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function DoughnutChart(props) {
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
          data: [props.healthExpense, props.housingExpense, props.travelExpense, props.billsExpense, props.groceryExpense],
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
      // plugins: {
      //   legend: {
      //     display: false,
      //   }
      // },
      title: {
        display: true,
        text: "Expenses for March"
      }
    })
  }, [props.healthExpense, props.housingExpense, props.travelExpense, props.billsExpense, props.groceryExpense])

  return (  
      <Doughnut options={chartOptions} data={chartData} />
  );
}
 
export default DoughnutChart;