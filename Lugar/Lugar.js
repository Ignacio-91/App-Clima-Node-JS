const axios = require('axios');


const getLugarLatitudLongitud = async(direccion) => {

	let encodedUrl = encodeURI(direccion);

	let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
	
	if(respuesta.data.status === 'ZERO_RESULTS') {
		throw new Error(`No hay resultados para la ciudad ${direccion}`)

	}

		let location = respuesta.data.results[0];
		let coordenadas = location.geometry.location;


	return {
		direccion: location.formatted_address,
		lat: coordenadas.lat,
		lng: coordenadas.lng
	}

}


module.exports = {
	getLugarLatitudLongitud
}

