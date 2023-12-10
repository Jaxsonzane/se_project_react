import ItemCard from '../ItemCard/ItemCard';
import './ClothingSection.css';

const ClothingSection = ({ onSelectCard, onCreateModal, clothingItems }) => {
	return (
		<>
			<div className="clothingsection__content">
				<p className="clothingsection__header"> Your items</p>
				<button
					className="clothingsection__add-clothes-button"
					type="button"
					onClick={onCreateModal}
				>
					+ Add new
				</button>
			</div>
			<div className="clothingsection__card-wrapper">
				{clothingItems.map((item) => (
					<ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
				))}
			</div>
		</>
	);
};

export default ClothingSection;
