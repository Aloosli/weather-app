const key = "mNlJIgw7IDY5vduMcgVEnQ5ZYXyyrOUm";
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  console.log(data[0]);
};
getCity("manchester")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
