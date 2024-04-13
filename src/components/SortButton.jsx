import { useDispatch, useSelector } from "react-redux";
import { usernameActions } from "../store/username-slice";
function SortButton() {
  const dispatch = useDispatch();
  const selectedUsers = useSelector((state) => state.users.selectedUsers);

  const handleSortAZ = () => {
    const sortedArrAZ = [...selectedUsers].sort((a, b) =>
      a.company.name.localeCompare(b.company.name)
    );
    dispatch(usernameActions.sortSelectedUsers(sortedArrAZ));
  };

  const handleSortZA = () => {
    const sortedArrayZA = [...selectedUsers].sort((a, b) =>
      b.company.name.localeCompare(a.company.name)
    );
    dispatch(usernameActions.sortSelectedUsers(sortedArrayZA));
  };
  return (
    <div className="sort--group">
      {selectedUsers.length > 1 && (
        <>
          <p className="sort--title">Sort by company name</p>
          <div className="sort--buttons-group">
            <button id="fromAZ" onClick={handleSortAZ}>
              Sort A-Z
            </button>
            <button onClick={handleSortZA} id="fromZA">
              Sort Z-A
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SortButton;
