import styles from './Landing.module.css'
import ExpensesBarChart from '../../components/DoughnutChart/DoughnutChart'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
      <div>
        <ExpensesBarChart />
      </div>
    </main>
  )
}

export default Landing
