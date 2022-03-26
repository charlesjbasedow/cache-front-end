function IncomeCard({income, handleDeleteIncome, user}) {
  return (  
    <>
    <h1>Income Card</h1>
    {income.owner._id === user.profile ?
    <div>
      <h3>{income.name}</h3>
      <p>{income.amount}</p>
      <p>{income.date}</p>
      <button onClick={() => handleDeleteIncome(income._id)} >X</button>
    </div>
    :
    <p></p>
  }
    </>
  );
}
 
export default IncomeCard;