function realizarBusqueda(){

	const infoInput = document.getElementById('buscador').value;
	const datos = [
		{
			link: 'https://www.google.com/?hl=es',
			titulo: 'mancuernas'
		},
		{
			link: '',
			titulo: 'discos'
		},
		{
			link: '',
			titulo: 'lazos'
		}
	]
	
	const buscador = new Buscador(datos);
	const resultados = buscador.buscar(infoInput)

	mostrarInformacion(resultados);
}

function mostrarInformacion(informacion){
	const divMostrarInfo = document.getElementById('listadoBusqueda');
	for(let i = 0; i < informacion.length; i++){
		const objeto = informacion[i];
		const link = document.createElement('a');
		link.textContent = objeto.titulo;
		link.href = objeto.link;

		divMostrarInfo.appendChild(link)
	}
}
