// import logo from './logo.svg';
import './App.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import ModalWithForm from '../components/ModalWithForm/ModalWithForm';
import { useEffect, useState } from 'react';
import ItemModal from '../components/ItemModal/ItemModal';
import { getForecastWeather, parseWeatherData } from '../utils/weatherApi';
import { CurrentTemperatureUnitContext } from '../Context/CurrentTemperatureUnitContext';

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

	const handleToggleSwitchChange = () => {
		if (currentTempUnit === 'C') setCurrentTemperatureUnit('F');
		if (currentTempUnit === 'F') setCurrentTemperatureUnit('C');
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
	console.log(currentTempUnit);

	return (
		<CurrentTemperatureUnitContext.Provider
			value={{ currentTempUnit, handleToggleSwitchChange }}
		>
			<div>
				<Header onCreateModal={handleCreateModal} />
				<Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
				<Footer />
				{activeModal === 'create' && (
					<ModalWithForm
						title="New Garment"
						onClose={handleCloseModal}
						setActiveModal={setActiveModal}
					>
						<div className="modal__input_container">
							<label className="modal__label">
								<p className="modal__input_title">Name</p>
								<input
									className="modal__input"
									type="text"
									name="name"
									minLength="1"
									maxLength="30"
									placeholder="Name"
								/>
							</label>
							<label className="modal__label">
								<p className="modal__input_title">Image</p>
								<input
									className="modal__input"
									type="url"
									name="link"
									minLength="1"
									maxLength="30"
									placeholder="Image"
								/>
							</label>
						</div>
						<p className="modal__radio_title">Select the weather type:</p>
						<div className="modal__radio_btns">
							<div>
								<label>
									<input type="radio" id="hot" value="hot" name="temperature" />
									Hot
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										id="warm"
										value="warm"
										name="temperature"
									/>
									Warm
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										id="cold"
										value="cold"
										name="temperature"
									/>
									Cold
								</label>
							</div>
						</div>
					</ModalWithForm>
				)}
				{activeModal === 'preview' && (
					<ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
				)}
			</div>
		</CurrentTemperatureUnitContext.Provider>
	);
}

export default App;
