import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import './AddItemModal.css';

const AddItemModal = ({ handleCloseModal, isOpen, onAddItem, buttonText }) => {
  
const [name, setName] = useState('');
const handleNameChange = (e) => {
  setName(e.target.value);
}

const [imageUrl, setImageUrl] = useState('');
const handleUrlChange = (e) => {
  setImageUrl(e.target.value);
}

const [weather, setWeather] = useState('');

const handleWeatherChange = (e) => {
  setWeather(e.target.value);
}

const handleSubmit = (e) => {
  onAddItem({name, weather, imageUrl});
}
  return (
    <ModalWithForm
      title="New Garmnet"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Name</label>

      <input
        className="modal__input modal__input_type_text"
        type="text"
        name="name"
        value={name}
        minLength="1"
        maxLength="30"
        placeholder="Name"
        id="name"
        onChange={handleNameChange}
      />
      <label className="modal__label">Image</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name="imageUrl"
        value={imageUrl}
        minLength="1"
        id="link"
        placeholder="Image URL"
        onChange={handleUrlChange}
      />
      <label className="modal__label">Select the weather type:</label>
      <div>
        <div className="modal__radio-container">
          <input
            className="modal__input_radio"
            type="radio"
            name="weather"
            id="Hot"
            value="hot"
            onChange={handleWeatherChange}
          />
          <label className="modal__label_radio" htmlFor="Hot">
            Hot
          </label>
        </div>
        <div className="modal__radio-container">
          <input
            className="modal__input_radio"
            type="radio"
            name="weather"
            id="Warm"
            value="warm"
            onChange={handleWeatherChange}
          />
          <label className="modal__label_radio" htmlFor="Warm">
            Warm
          </label>
        </div>
        <div className="modal__radio-container">
          <input
            className=" modal__input_radio"
            type="radio"
            name="weather"
            id="Cold"
            value="cold"
            onChange={handleWeatherChange}
          />
          <label className=" modal__label_radio" htmlFor="Cold">
            Cold
          </label>
        </div>
      </div>
      <div className="modal__button-container">
        <button className="modal__submit-button" type="submit">
          {buttonText}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;