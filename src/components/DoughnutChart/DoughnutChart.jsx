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
            'rgb(50, 168, 82)',
            'rgb(168, 139, 50)',
            'rgb(145, 50, 168)',
            'rgb(168, 50, 56)',
            'rgb(157, 168, 50)',
            'rgb(50, 157, 168)',
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
  }, [props.healthExpense, props.housingExpense, props.travelExpense, props.billsExpense, props.otherExpense, props.groceryExpense])

  return ( 
    <div className={styles.doughnutchart}>
      <Doughnut options={chartOptions} data={chartData} />
    </div> 
  );
}

export default DoughnutChart;