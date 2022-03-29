import styles from './Landing.module.css'
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <p>hello, {props.user ? props.user.name : 'friend'}</p>
        <h3>You have ___ remaining in this month's budget</h3>
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
