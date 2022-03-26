import GoalCard from "../../components/GoalCard/GoalCard";

const GoalPage = (props) => {
  return ( 
    <>
    <h1>Goal Page</h1>
    <div>
      {props.goals.map(goal => (
        <GoalCard key={goal._id} goal={goal} handleDeleteGoal={props.handleDeleteGoal} />
      ))}
    </div>
    </>
   );
}
 
export default GoalPage;