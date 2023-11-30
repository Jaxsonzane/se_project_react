import './Weather.css';
import { findWeatherOption } from '../../utils/weatherApi';
import { weatherConditions } from '../../utils/constants';
import { useContext } from 'react';
import { CurrentTemperatureUnitContext } from '../../Context/CurrentTemperatureUnitContext';

const WeatherCard = ({ day, weather, weatherTemp }) => {
	const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(day, weather, weatherTemp);
	const weatherOption = weatherConditions.filter((option) =>
	  findWeatherOption(option, day, weather)
	);
  
	const imageSrcUrl = weatherOption.length > 0 ? weatherOption[0].url : "";
	const altText = weatherOption.length > 0 ? weatherOption[0].weather : "";
  
	return (
	  <div className="weather">
		<p className="weather__info">
		  {weatherTemp}°{currentTempUnit}
		</p>
		<img
		  className="weather__image"
		  src={imageSrcUrl}
		  alt={altText}
		/>
	  </div>
	);
  };

export default WeatherCard;
