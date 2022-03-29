import { Bar } from "react-chartjs-2";
import { useEffect, useState } from 'react';

function BillsBarChart(props) {
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
          data: [props.totalBillsExpense],
          backgroundColor: 'grey',
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
  }, [props.totalBillsExpense])

  return (  
    <>
    {props.totalBillsExpense ? 
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
    :
    ''
    }
    </>
  );
}

export default BillsBarChart;