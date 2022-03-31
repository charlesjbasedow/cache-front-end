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
          cutout: 150,
          data: [props.currentBudget.totalLimit, props.totalExpense],
          borderColor: "rgb(255, 255, 255)",
          backgroundColor: [
            'rgb(5,204,169)',
            'rgb(240, 240, 240)',
          ],
        }
      ]
    })
    setChartOptions({
      responsive: true,
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