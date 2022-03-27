import GoalCard from "../../components/GoalCard/GoalCard";
import { Link } from 'react-router-dom'

const GoalPage = (props) => {
  return ( 
    <>
    <h1>Goals Page</h1>
    <div>
      <Link to="/add-goal">Add a New Goal</Link>
    </div>
    <div>
      {props.goals.map(goal => (
        <GoalCard key={goal._id} goal={goal} handleDeleteGoal={props.handleDeleteGoal} />
      ))}
    </div>
    </>
   );
}
 
export default GoalPage;