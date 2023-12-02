import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './AddItemModal.css';

const AddItemModal = ({ handleCloseModal, onAddItem, setActiveModal }) => {
	const [name, setName] = useState('');
	const handleNameChange = (e) => {
		console.log(e.target.value);
		setName(e.target.value);
	};
	const [link, setUrl] = useState('');
	const handleUrlChange = (e) => {
		console.log(e.target.value);
		setUrl(e.target.value);
	};
	const [weather, setWeather] = useState('');
	const handleWeatherChange = (e) => {
		console.log(e.target.value);
		setWeather(e.target.value);
	};
	const getID = () => {
		const timestamp = new Date().getTime();
		const randomNum = Math.random().toString(36).substring(2, 8);

		return `${timestamp}-${randomNum}`;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddItem({ name, link, weather, _id: getID() });
	};
	return (
		<ModalWithForm
			title="New Garment"
			onClose={handleCloseModal}
			setActiveModal={setActiveModal}
			onSubmit={handleSubmit}
			className="modal__garment_title"
		>
			<div className="modal__input_container">
				<label className="modal__label">
					<p className="modal__input_title">Name</p>
					<input
						className="modal__input"
						type="text"
						name="name"
						minLength="1"
						placeholder="Name"
						value={name}
						onChange={handleNameChange}
					/>
				</label>
				<label className="modal__label">
					<p className="modal__input_title">Image</p>
					<input
						className="modal__input"
						type="url"
						name="link"
						minLength="1"
						placeholder="Image"
						value={link}
						onChange={handleUrlChange}
					/>
				</label>
			</div>
			<p className="modal__radio_title">Select the weather type:</p>
			<div className="modal__radio_btns">
				<div>
					<label>
						<input
							type="radio"
							id="hot"
							value="hot"
							name="temperature"
							onChange={handleWeatherChange}
						/>
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
							onChange={handleWeatherChange}
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
							onChange={handleWeatherChange}
						/>
						Cold
					</label>
				</div>
			</div>
		</ModalWithForm>
	);
};

export default AddItemModal;
