import { defaultClothingItems } from '../util/constants';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import './Main.css';
import { useMemo } from 'react';
function Main({ weatherTemp, onSelectCard }) {
	const weatherType = useMemo(() => {
		if (weatherTemp >= 86) {
			return 'hot';
		} else if (weatherTemp >= 66 && weatherTemp <= 85) {
			return 'warm';
		} else if (weatherTemp <= 65) {
			return 'cold';
		}
	}, [weatherTemp]);
	console.log(weatherType);

	const filteredCards = defaultClothingItems.filter((x) => {
		return x.weather.toLowerCase() === weatherType;
	});
    console.log(filteredCards);

	return (
		<main className="main">
			<WeatherCard day={false} type="rain" weatherTemp={weatherTemp} />
			<section className="card__section">
				Today is {weatherTemp}°F/ You may want to wear:
				<div className="card__items">
					{filteredCards.map((x) => {
						console.log(x);
						return <ItemCard x={x} onSelectCard={onSelectCard} />;
					})}
				</div>
			</section>
		</main>
	);
}

export default Main;
