function BudgetCard({budget, handleDeleteBudget}) {
  return (  
    <>
    <h1>Budget Card</h1>
    <div>
      <h3>{budget.category}</h3>
      <p>{budget.categoryLimit}</p>
      <p>{budget.totalLimit}</p>
      <button onClick={() => handleDeleteBudget(budget._id)} >X</button>
    </div>
    </>
  );
}

export default BudgetCard;