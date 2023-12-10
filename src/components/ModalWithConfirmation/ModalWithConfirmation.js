import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './ModalWithConfirmation.css';

const ModalWithConfirmation = ({ onClose, isOpen, onSubmit, buttonText }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	};

	return (
		<ModalWithForm
			title=""
			buttonText="Delete item"
			onClose={onClose}
			isOpen={isOpen}
			onSubmit={handleSubmit}
			className="modal__confirm_deletion"
      additionalButton={<button onClick={onClose} className="modal__add_btn"> Cancel </button>}
		>
			<p className="modal__text">Are you sure you want to delete this item?</p>
			<p className="modal__text">This action is irreversible.</p>
			
		</ModalWithForm>
	);
};

export default ModalWithConfirmation;
