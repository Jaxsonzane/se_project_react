// import logo from './logo.svg';
import './App.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import Profile from '../components/Profile/Profile';
import ModalWithForm from '../components/ModalWithForm/ModalWithForm';
import { useEffect, useState } from 'react';
import ItemModal from '../components/ItemModal/ItemModal';
import { getForecastWeather, parseWeatherData } from '../utils/weatherApi';
import { CurrentTemperatureUnitContext } from '../Context/CurrentTemperatureUnitContext';
import { Switch, Route } from 'react-router-dom';
import AddItemModal from '../AddItemModal/AddItemModal';

function App() {
	// const weatherTemp = '100';
	const [activeModal, setActiveModal] = useState('');
	const [selectedCard, setSelectedCard] = useState({});
	const [temp, setTemp] = useState(0);
	const [currentTempUnit, setCurrentTemperatureUnit] = useState('F');

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
	};

	const handleToggleSwitchChange = () => {
		setCurrentTemperatureUnit((prev) => (prev === 'C' ? 'F' : 'C'));
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
						handleOpenModal={handleCreateModal}
						// clothingItems={clothingItems} 
						/>
					</Route>
				</Switch>
				<Footer />
				{activeModal === 'create' && (
					<AddItemModal
						handleCloseModal={handleCloseModal}
						setActiveModal={activeModal === 'create'}
						onAddItem={onAddItem}
					/>
				)}
				{activeModal === 'preview' && (
					<ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
				)}
			</CurrentTemperatureUnitContext.Provider>
		</div>
	);
}

export default App;
