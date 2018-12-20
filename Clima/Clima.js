const axios = require('axios');


const getClima = async(lat, lng) => {


	let temperatura = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ec2f993cb97980ca58dfd246ff6e16e3`)

	return temperatura.data.main.temp;

	}


module.exports = {
	getClima
}