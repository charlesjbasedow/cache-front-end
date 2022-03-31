import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from 'react';
import styles from '../../pages/Landing/Landing.module.css'

function DoughnutChart(props) {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["Health", "Housing", "Bills", "Travel", "Other", "Grocery"],
      datasets: [
        {
          label: "March Expenses",
          data: [props.healthExpense, props.housingExpense, props.travelExpense, props.billsExpense, props.otherExpense, props.groceryExpense],
          borderColor: "rgb(255, 255, 255)",
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(3, 162, 230)',
            'rgb(255, 205, 86)',
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
  }, [props.healthExpense, props.housingExpense, props.travelExpense, props.billsExpense, props.otherExpense, props.groceryExpense])

  {console.log(props.groceryExpense)}

  return ( 
    <div className={styles.doughnutchart}>
      <Doughnut options={chartOptions} data={chartData} />
    </div> 
  );
}

export default DoughnutChart;