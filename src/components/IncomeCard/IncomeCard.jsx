function IncomeCard({income, handleDeleteIncome}) {
  return (  
    <>
    <h1>Income Card</h1>
    <div>
      <h3>{income.name}</h3>
      <p>{income.amount}</p>
      <p>{income.date}</p>
      <button onClick={() => handleDeleteIncome(income._id)} >X</button>
    </div>
    </>
  );
}
 
export default IncomeCard;