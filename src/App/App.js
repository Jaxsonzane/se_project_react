// import logo from './logo.svg';
import './App.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import Profile from '../components/Profile/Profile';
import ModalWithConfirmation from '../components/ModalWithConfirmation/ModalWithConfirmation';
import ModalWithForm from '../components/ModalWithForm/ModalWithForm';
import { useEffect, useState } from 'react';
import ItemModal from '../components/ItemModal/ItemModal';
import { getForecastWeather, parseWeatherData } from '../utils/weatherApi';
import { CurrentTemperatureUnitContext } from '../Context/CurrentTemperatureUnitContext';
import { getCards, postCard, deleteCard } from '../utils/api';
import { Switch, Route } from 'react-router-dom';
import AddItemModal from '../AddItemModal/AddItemModal';

function App() {
	// const weatherTemp = '100';
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
	};

	const handleSelectedCard = (card) => {
		setActiveModal('preview');
		setSelectedCard(card);
	};

	const onAddItem = (values) => {
		console.log(values);
		postCard(values).then(() => {
		setClothingItems((prevItems) => [...prevItems, values]);})
	};

	const handleToggleSwitchChange = () => {
		setCurrentTemperatureUnit((prev) => (prev === 'C' ? 'F' : 'C'));
	};

	const handleCardDelete = () => {
		setIsLoading(true);
		deleteCard(selectedCard._id)
			.then(() => {
				const updatedClothing = clothingItems.filter((item) => {
					return item._id !== selectedCard._id;
				});
				setClothingItems(updatedClothing);
				handleCloseModal();
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => setIsLoading(false));
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
			const items = data.sort(
			  (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
			);
			setClothingItems(items);
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
						<Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
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
					/>
				)}
				{activeModal === 'preview' && (
					<ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
				)}
				{activeModal === 'delete' && (
					<ModalWithConfirmation
						isOpen={activeModal === 'delete'}
						onClose={handleCloseModal}
						onSubmit={handleCardDelete}
						buttonText={!isLoading ? 'Delete' : 'Deleting...'}
					/>
				)}
			</CurrentTemperatureUnitContext.Provider>
		</div>
	);
}

export default App;
