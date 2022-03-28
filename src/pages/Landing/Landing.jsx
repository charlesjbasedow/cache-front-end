import styles from './Landing.module.css'
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
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
