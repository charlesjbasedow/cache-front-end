const IncomeCard = (props) => {
  return (  
    <>
    <h1>Income Card</h1>
    <div>
      <h3>{props.income.name}</h3>
      <p>{props.income.amount}</p>
      <p>{props.income.date}</p>
    </div>
    </>
  );
}
 
export default IncomeCard;