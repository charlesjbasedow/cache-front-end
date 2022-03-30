import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function TotalBudgetChart(props) {
  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ["total budget", "amount spent"],
      datasets: [
        {
          label: "",
          cutout: 220,
          data: [props.currentBudget.totalLimit, props.totalExpense],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
        }
      ]
    })
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      cutout: 200,
      plugins: {
        legend: {
          display: false,
        }
      },
      title: {
        display: true,
        text: ""
      }
    })
  }, [props.currentBudget.totalLimit, props.totalExpense])

  return (  
      <Doughnut options={chartOptions} data={chartData} />
  );
}
 
export default TotalBudgetChart;