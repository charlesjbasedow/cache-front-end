import styles from './Landing.module.css'
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart'

const Landing = (props) => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let currentMonth = month[d.getMonth()];

  let currentBudget = props?.budgets[props.budgets.length-1]

  console.log(currentBudget)

  return (
    <main className={styles.container}>
      <h1>{currentMonth} Spending Overview</h1>
        {/* <h3>You have {currentBudget.totalLimit - props.totalExpense} remaining in this month's budget</h3> */}
      <div>
        <DoughnutChart 
        totalExpense={props.totalExpense} 
        healthExpense={props.healthExpense}
        housingExpense={props.housingExpense}
        groceryExpense={props.groceryExpense}
        billsExpense={props.billsExpense}
        travelExpense={props.travelExpense}
        />
      </div>
    </main>
  )
}

export default Landing
