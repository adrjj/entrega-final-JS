
//creamos una funcion llamada conteedor para vincular el div del html con js nombrado con el ID contHistoria 
const contenedor = document.querySelector("#contHistoria");
// creamos una funcion llamada seleccionMarca esta funcion esta llamada desde la etiqueta 
// html <select id="miLista" onchange="seleccionarMarca(this.value)">
//esto nos permite llamar a esta funcion segun lo que selecione ya que el parametro de la funcion (this.value) nos permite
//llenar ese campo relacionando el valor en la etiqueta <option value="ford">Ford</option> este valor es el mismo que esta 
// en el JSon 

function seleccionarMarca(marca) { //como parametro le pasamos "marca" 
	fetch('../datos.json') // enlazamos el archvo Json local como base de datos
		.then(respuesta => respuesta.json()) // convertimos esos datos en array de objetos con el metodo .Json

		.then(datos => {
			const marcaInfo = datos[marca][0]; // en esta variable datos: representa el nombre que designamos para los datos del JSON
			// [marca]: representa el nombre que legiriamos en la opciones de la etiqueta html 	
			//[0]: es el primer objeto que tiene el array [marca] en este caso el unico.

			const div = document.createElement("div");// cremamos en la variable div una eitiqueta DIV html
			div.innerHTML = ` 
				<h2>${marcaInfo.nombre}</h2>
				<div class="contInfo">
				<p class="prop" >Fundado en: <p class="info"> ${marcaInfo.fundacion}</p></p>
				<p class="prop" >Fundador: <p class="info"> ${marcaInfo.fundador}</p></p>
				<p class="prop" >Sede Central: <p class="info"> ${marcaInfo.sede_central}</p></p>
				<p class="prop" >Propietario: <p class="info"> ${marcaInfo.propietario}</p></p>
				<p class="prop" >Sitio Web:</p> <a href="https://${marcaInfo.sitio_web}" class="info"  target="_blank">${marcaInfo.sitio_web}</a>
				<p class="prop" >Primer Auto Producido:  <p class="info">${marcaInfo.primer_auto_producido}</p></p>
				<p class="prop" >Breve Historia del Primer Auto:  <p class="info">${marcaInfo.breve_historia_auto_producido}</p></p>
				<img class="imagen" id="imagenAmpliable" src="${marcaInfo.imagen}" alt="">
			    </div>
				`;
			contenedor.innerHTML = ""; // Limpia el contenedor antes de añadir el nuevo contenido
			contenedor.appendChild(div);// creamo en DOM (html) una eiqueta hijo en en la etiqueta 
			
			document.getElementById('imagenAmpliable').addEventListener('click', function() {
				this.classList.toggle('ampliada');
			});
		})
		.catch(error => console.error('Error:', error));

		

};


