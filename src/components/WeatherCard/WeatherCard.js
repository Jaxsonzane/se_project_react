import './Weather.css';
import { weatherOptions } from '../../utils/constants';

const WeatherCard = ({ day = true, type = 'sunny', weatherTemp = 0 }) => {
	const imageSrc = weatherOptions.filter((i) => {
		return i.day === day && i.type === type;
	});

	const imageSrcUrl = imageSrc[0].url || '';

	return (
		<section className="weather">
			<div className="weather__info">{weatherTemp}° F</div>
			<img src={imageSrcUrl} alt={type} className="weather__image" />
		</section>
	);
};

export default WeatherCard;
