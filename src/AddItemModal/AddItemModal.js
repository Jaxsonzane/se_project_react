import React, { useState } from 'react';
import ModalWithForm from '../components/ModalWithForm/ModalWithForm';

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

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddItem({ name, link });
	};
	return (
		<ModalWithForm
			title="New Garment"
			onClose={handleCloseModal}
			setActiveModal={setActiveModal}
			onSubmit={handleSubmit}
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
						maxLength="30"
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
						<input type="radio" id="hot" value="hot" name="temperature" />
						Hot
					</label>
				</div>
				<div>
					<label>
						<input type="radio" id="warm" value="warm" name="temperature" />
						Warm
					</label>
				</div>
				<div>
					<label>
						<input type="radio" id="cold" value="cold" name="temperature" />
						Cold
					</label>
				</div>
			</div>
		</ModalWithForm>
	);
};

export default AddItemModal;
