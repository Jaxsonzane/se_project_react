import { defaultClothingItems } from '../../utils/constants';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css';
import { useMemo, useContext } from 'react';
import { CurrentTemperatureUnitContext } from '../../Context/CurrentTemperatureUnitContext';

function Main({ weatherTemp, onSelectCard }) {

	const {currentTempUnit} = useContext(CurrentTemperatureUnitContext);
	// console.log(currentTempUnit);
	const temp = weatherTemp?.temperature?.[currentTempUnit] || 999

	const weatherType = useMemo(() => {
		if (temp >= 86) {
			return 'hot';
		} else if (temp >= 66 && temp <= 85) {
			return 'warm';
		} else if (temp <= 65) {
			return 'cold';
		}
	}, [weatherTemp]);
	

	const filteredCards = defaultClothingItems.filter((item) => {
		return item.weather.toLowerCase() === weatherType;
	});

	return (
		<main className="main">
			<WeatherCard day={false} type="rain" weatherTemp={temp} />
			<section className="card__section">
				Today is {temp}°{currentTempUnit} You may want to wear:
				<div className="card__items">
					{filteredCards.map((item, index) => {
						return (
							<ItemCard key={index} item={item} onSelectCard={onSelectCard} />
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default Main;
