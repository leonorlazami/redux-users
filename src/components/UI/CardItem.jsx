/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { AiOutlineDelete } from "react-icons/ai";

import Modal from "./Modal";

function CardItem({ user }) {
  const { name: userName, email, phone, website } = user;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { street, city } = user?.address;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { name: companyName } = user?.company;
  const { id } = user;

  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ui.showModal);

  const toggleModal = (userID) => {
    if (showModal === userID) {
      dispatch(uiActions.setShowModal(null));
    } else {
      dispatch(uiActions.setShowModal(userID));
    }
  };

  return (
    <div className="card--items">
      {showModal === id && <Modal key={id} user={user} />}
      <div className="card--button-group">
        <h2>{userName}</h2>

        <button onClick={() => toggleModal(id)}>
          <AiOutlineDelete size={20} />
        </button>
      </div>
      <p>
        <strong>Email: </strong> {email}
      </p>
      <p>
        <strong>Address: </strong> {street}, {city}
      </p>
      <p>
        <strong>Phone: </strong> {phone}
      </p>
      <p>
        <strong>Company: </strong> {companyName}
      </p>
      <p>
        <strong>
          Website:{" "}
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </strong>
      </p>
    </div>
  );
}

export default CardItem;
