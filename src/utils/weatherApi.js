// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 44.34;
const longitude = 10.99;
const APIkey = '959e503e246022886f5983092a4f2ab3';
export const getForecastWeather = () => {
	const weatherApi = fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
	).then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(`Error: ${res.status}`);
		}
	});
	return weatherApi;
};

export const parseWeatherData = (data) => {
	const main = data.main;
	const temperature = main && main.temp;
	console.log(Math.ceil(temperature));
	return Math.ceil(temperature);
};