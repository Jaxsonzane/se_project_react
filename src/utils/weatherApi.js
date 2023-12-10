import { processServerResponse } from './api';

const latitude = 44.34;
const longitude = 10.99;
const APIkey = '959e503e246022886f5983092a4f2ab3';
export const getForecastWeather = () => {
	const weatherApi = fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
		// ).then((res) => {
		// 	if (res.ok) {
		// 		return res.json();
		// 	} else {
		// 		return Promise.reject(`Error: ${res.status}`);
		// 	}
		// });
	).then(processServerResponse);
	return weatherApi;
};

const findWeatherOption = (option, day, weather) => {
	return option.day === day && option.type === weather;
};

export const parseWeatherData = (data) => {
	const main = data.main;
	const temperature = main && main.temp;
	const weather = {
		temperature: {
			F: Math.round(temperature),
			C: Math.round(((temperature - 32) * 5) / 9),
		},
	};
	console.log(weather);
	return weather;
};

export { findWeatherOption };
