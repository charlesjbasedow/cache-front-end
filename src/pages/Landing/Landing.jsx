import styles from './Landing.module.css'
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
      <div>
        <DoughnutChart />
      </div>
    </main>
  )
}

export default Landing
