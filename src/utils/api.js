const baseUrl = "http://localhost:3001";

const request = (url, options) => {
  return fetch(url, options).then(processServerResponce);
};

const processServerResponce = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

const getCards = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const postCard = ({ name, link, weather }) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      link: link,
      weather: weather,
    }),
  };

  return request(`${baseUrl}/items`, options);
};

const deleteCard = (id) => {
  const deleteOpiions = {
    method: "DELETE",
  };

  return request(`${baseUrl}/items/${id}`, deleteOpiions);
};

export { getCards, postCard, deleteCard, request };