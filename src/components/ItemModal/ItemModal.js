import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, openModal }) => {
	return (
		<div className='modal modal__preview'>
			<div className="modal__content">
				<button
					className="modal__close"
					type="button"
					onClick={onClose}
				></button>
				<img
					className="modal__image"
					src={selectedCard.link}
					alt={selectedCard.name}
				/>
				<div className='modal__button-wrap'>
				<p className="modal__card_name"> {selectedCard.name} </p>
				<button
					onClick={openModal}
					type="button"
					className="modal__delete-btn"
				>
					Delete Item
				</button>
			
			</div>
				<p className="modal__card_weather"> Weather: {selectedCard.weather} </p>
			</div>
		</div>
	);
};



export default ItemModal;
