import Chart from 'chart.js/auto';
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
      title: {
        display: true,
        text: ""
      }
    })
  }, [])

  return (  
    <div>
      <Doughnut options={chartOptions} data={chartData} />
    </div>
  );
}
 
export default TotalBudgetChart;