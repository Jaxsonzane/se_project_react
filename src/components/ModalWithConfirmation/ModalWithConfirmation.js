import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ModalWithConfirmation.css";

const ModalWithConfirmation = ({ onClose, isOpen, onSubmit, buttonText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <ModalWithForm
      title=""
      buttonText="Yes, delete item"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      className="modal__confirm_deletion"
      
    >
      <p className="modal__text">Are you sure you want to delete this item?</p>
      <p className="modal__text">This action is irreversible.</p>
      <div className="modal__confirm_btns">
        <button
          onClick={handleSubmit}
          className="confirm__modal_btn"
          type="submit"
        >
          {buttonText}
        </button>
        
        <button
          onClick={onClose}
          className="confirm__modal_btn"
          type="button"
        >
          Cancel
        </button>
      </div>
    </ModalWithForm>
  );
};

export default ModalWithConfirmation;