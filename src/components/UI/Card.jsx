import CardItem from "./CardItem";
import { useSelector, useDispatch } from "react-redux";

function Card() {
  const selectedUsers = useSelector((state) => state.users.selectedUsers);

  return (
    <div className="card--container">
      {selectedUsers &&
        selectedUsers.map((user) => <CardItem key={user.id} user={user} />)}
    </div>
  );
}

export default Card;
