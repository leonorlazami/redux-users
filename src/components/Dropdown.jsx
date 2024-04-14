import { useSelector, useDispatch } from "react-redux";
import { usernameActions } from "../store/username-slice";

function Dropdown() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleSelectUser = (e) => {
    const selectedUserId = Number(e.target.value);
    const selectedUser = users.find((user) => user.id === selectedUserId);
    const updatedArr = users.filter((user) => user.id !== selectedUserId);

    dispatch(usernameActions.setUsers(updatedArr));
    dispatch(usernameActions.setSelectedUsers(selectedUser));
    e.target.selectedIndex = 0;
  };

  return (
    <select
      name="list"
      id=""
      className="dropdown--item"
      defaultValue=""
      onChange={handleSelectUser}
    >
      <option value="" disabled>
        List of users
      </option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
