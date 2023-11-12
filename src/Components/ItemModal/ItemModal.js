
const ItemModal = ({ selectedCard, onClose }) => {

	console.log('item modal');

	return (
		<div className={`modal`}>
			<div className="modal__content modal__content_item">
            <button className="modal__close_img" type="button" onClick={onClose}></button>
				<img className="modal__image" src={selectedCard.link} alt="images" />
				<div> {selectedCard.name} </div>
				<div> Weather: {selectedCard.weather} </div>
			</div>
		</div>
	);
};

export default ItemModal;
