// import logo from './logo.svg';
import './App.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import Profile from '../components/Profile/Profile';
import ModalWithConfirmation from '../components/ModalWithConfirmation/ModalWithConfirmation';
import { useEffect, useState } from 'react';
import ItemModal from '../components/ItemModal/ItemModal';
import { getForecastWeather, parseWeatherData } from '../utils/weatherApi';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import { getCards, postCard, deleteCard } from '../utils/api';
import { Switch, Route } from 'react-router-dom';
import AddItemModal from '../components/AddItemModal/AddItemModal';



function App() {
	const [activeModal, setActiveModal] = useState('');
	const [selectedCard, setSelectedCard] = useState({});
	const [temp, setTemp] = useState(0);
	const [currentTempUnit, setCurrentTemperatureUnit] = useState('F');
	const [clothingItems, setClothingItems] = useState([]);
	const [isLoading, setIsLoading] = useState(0);

	const handleCreateModal = () => {
		setActiveModal('create');
	};

	const handleCloseModal = () => {
		setActiveModal('');
		if (activeModal === 'delete') {
			setClothingItems(clothingItems.filter((item) => item._id !== selectedCard._id));
		}
	};

	const handleSelectedCard = (card) => {
		setActiveModal('preview');
		setSelectedCard(card);
	};

	const onAddItem = (values) => {
		postCard(values).then((newItem) => {
			setClothingItems((prevItems) => [newItem, ...prevItems]);
		});
		handleCloseModal();
	};

	const handleToggleSwitchChange = () => {
		setCurrentTemperatureUnit((prev) => (prev === 'C' ? 'F' : 'C'));
	};

	const openConfirmationModal = () => {
		setActiveModal('delete');
	};

	const handleCardDelete = () => {
		deleteCard(selectedCard._id)
		  .then(() => {
			setIsLoading(clothingItems.filter((item) => item._id !== selectedCard._id));
			handleCloseModal();
		  })
		  .catch((err) => console.log(err));
	  };



	useEffect(() => {
		getForecastWeather()
			.then((data) => {
				const temperature = parseWeatherData(data);
				setTemp(temperature);
			})
			.catch((error) => {
				console.error('An error occurred while fetching weather data.', error);
			});
	}, []);

	useEffect(() => {
		getCards()
			.then((data) => {
		
				setClothingItems(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<CurrentTemperatureUnitContext.Provider
				value={{ currentTempUnit, handleToggleSwitchChange }}
			>
				<Header onCreateModal={handleCreateModal} />
				<Switch>
					<Route exact path="/">
						<Main weatherTemp={temp} onSelectCard={handleSelectedCard}  clothingItems={clothingItems}/>
					</Route>
					<Route path="/profile">
						<Profile
							onSelectCard={handleSelectedCard}
							onCreateModal={handleCreateModal}
							clothingItems={clothingItems}
						/>
					</Route>
				</Switch>
				<Footer />
				{activeModal === 'create' && (
					<AddItemModal
						handleCloseModal={handleCloseModal}
						setActiveModal={activeModal === 'create'}
						onAddItem={onAddItem}
						onClick={handleCloseModal}
						buttonText={!isLoading ? "Add garment" : "Adding..."}
					/>
				)}
				{activeModal === 'preview' && (
					<ItemModal
						selectedCard={selectedCard}
						onClose={handleCloseModal}
						openModal={openConfirmationModal}
						onSubmit={handleCardDelete}
						buttonText={!isLoading ? 'Delete Item' : 'Deleting...'}
					/>
				)}
				{activeModal === 'delete' && (
					<ModalWithConfirmation
						isOpen={activeModal === 'delete'}
						onClose={handleCloseModal}
						onSubmit={handleCardDelete}
						buttonText={!isLoading ? 'Yes, delete item' : 'Deleting...'}
					/>
				)}
			</CurrentTemperatureUnitContext.Provider>
		</div>
	);
}

export default App;
