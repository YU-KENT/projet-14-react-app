import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const UserCreatedModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Employee Created!</h2>
        <button className='close-button' onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};



export default UserCreatedModal;
