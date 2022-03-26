const GoalCard = ({goal, handleDeleteGoal}) => {
  return ( 
    <>
    <h1>Goal Card</h1>
    <div>
      <h3>{goal.name}</h3>
      <p>{goal.amount}</p>
      <button onClick={() => handleDeleteGoal(goal._id)}>Delete</button>
    </div>
    </>
   );
}
 
export default GoalCard;