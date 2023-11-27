import './ItemCard.css';

const ItemCard = ({ item, onSelectCard }) => {
	const handleImageClick = () => {
		onSelectCard(item);
	};

	return (
		<li className="itemCard">
			<h3 className="itemCard__name">{item.name}</h3>
			<img
				src={item.link}
				className="itemCard__image"
				onClick={handleImageClick}
				alt={item.name}
			/>
		</li>
	);
};

export default ItemCard;
