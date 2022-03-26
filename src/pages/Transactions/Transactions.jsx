const Transactions = (props) => {
  return (  
    <>
    <h1>Transactions</h1>
    <div>
      {props.incomes.map(income => (
        <div key={income._id}>
          <p>{income.name}</p>
          <p>{income.amount}</p>
          <p>{income.date}</p>
        </div>
      ))}
    </div>
    </>
  )
}
 
export default Transactions;