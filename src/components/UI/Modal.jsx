/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { usernameActions } from "../../store/username-slice";
import { uiActions } from "../../store/ui-slice";

function Modal({ user }) {
  const { id } = user;

  const selectedUsers = useSelector((state) => state.users.selectedUsers);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const deleteUser = (userID) => {
    dispatch(uiActions.setShowModal(null));
    const removedUser = selectedUsers.find((user) => {
      return user.id === userID;
    });
    console.log("removedUser", removedUser);
    const finalArr = [...users, removedUser];
    dispatch(usernameActions.removeSelectedUser(userID));
    dispatch(usernameActions.setUsers(finalArr));
  };
  return (
    <div className="modal">
      <p>Do you want to delete user?</p>
      <div className="modal--buttons">
        <button onClick={() => deleteUser(id)}>Yes</button>
        <button onClick={() => dispatch(uiActions.setShowModal(null))}>
          No
        </button>
      </div>
    </div>
  );
}

export default Modal;
