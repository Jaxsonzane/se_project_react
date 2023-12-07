const baseUrl = 'http://localhost:3001';

const request = (url, options) => {
	return fetch(url, options).then(processServerResponse);
};

const processServerResponse = (res) => {
	if (!res.ok) {
		return Promise.reject(`Error: ${res.status}`);
	}
	return res.json();
};

const getCards = () => {
	return fetch(`${baseUrl}/items`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => processServerResponse(res));
};

const postCard = ({ name, link, weather }) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: name,
			imageUrl: link,
			weather: weather,
		}),
	};

	return request(`${baseUrl}/items`, options);
};

const deleteCard = (id) => {
	return fetch(`http://localhost:3001/items/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => processServerResponse(res));
};

export { getCards, postCard, deleteCard, request };
