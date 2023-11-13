
const ItemModal = ({ selectedCard, onClose }) => {

	console.log('item modal');

	return (
		<div className={`modal`}>
			<div className="modal__content modal__content_item">
            <button className="modal__close_img" type="button" onClick={onClose}></button>
				<img className="modal__image" src={selectedCard.link} alt={selectedCard.name} />
				<p className="modal__card_name"> {selectedCard.name} </p>
				<p className="modal__card_weather"> Weather: {selectedCard.weather} </p>
			</div>
		</div>
	);
};

export default ItemModal;
