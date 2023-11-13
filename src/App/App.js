// import logo from './logo.svg';
import './App.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import ModalWithForm from '../components/ModalWithForm/ModalWithForm';
import { useEffect, useState } from 'react';
import ItemModal from '../components/ItemModal/ItemModal';
import { getForecastWeather, parseWeatherData } from '../utils/weatherApi';

function App() {
	// const weatherTemp = '100';
	const [activeModal, setActiveModal] = useState('');
	const [selectedCard, setSelectedCard] = useState({});
	const [temp, setTemp] = useState(0);

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
	console.log(temp);

	return (
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
							<input type="radio" id="hot" value="hot" name="temperature" />
							<label>Hot</label>
						</div>
						<div>
							<input type="radio" id="warm" value="warm" name="temperature" />
							<label>Warm</label>
						</div>
						<div>
							<input type="radio" id="cold" value="cold" name="temperature" />
							<label>Cold</label>
						</div>
					</div>
				</ModalWithForm>
			)}
			{activeModal === 'preview' && (
				<ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
			)}
		</div>
	);
}

export default App;
