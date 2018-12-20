const Lugar = require('./Lugar/Lugar');
const Clima = require('./Clima/Clima');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Direccion de la ciudad para obtner el clima',
		demand: true
	}
}).argv;

let getInfo = async (direccion) => {

try {

	let coordenadas = await Lugar.getLugarLatitudLongitud(direccion);
	let temperatura = await Clima.getClima(coordenadas.lat, coordenadas.lng);

	return `El clima en ${coordenadas.direccion} es de ${temperatura}`;

}	catch(e) {
		return `No se pudo determinar el clima en ${direccion}`;
}
	


}

getInfo(argv.direccion)
	.then(mensaje => console.log(mensaje))
	.catch(e => console.log(e));