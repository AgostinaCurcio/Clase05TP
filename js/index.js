
/*


    Crear una funcion que agrege una pelicula al array 
    de peliculas
    La pelicula debera tener un ID y un Titulo
    Crear una funcion que evalue antes de agregar que la
     pelicula no fue ingresada previamente
    Crear una funcion que ordene las peliculas por Titulo 
    |y por ID
    Crear una funcion que elimine una pelicula por su ID.


 */

var Peliculas = function (titulopelicula, idpelicula){
	this.titulo = titulopelicula
	this.id = idpelicula
}


var pel1 = new Peliculas ("Lo que el viento se llevo", 1)
var pel2 = new Peliculas ("When Harry met Sally", 2)
var pel3 = new Peliculas("La vida es bella", 3)
var pel4 = new Peliculas("Titanic", 4)
var pel5 = new Peliculas("Batman", 5)
var pel6 = new Peliculas("1984", 6)
var pel7 = new Peliculas("Fargo", 7)

var arrPeliculas = [pel1, pel4, pel6, pel2, pel5, pel3, pel7]

var chequearID = function (peli){
	var posicionPelicula = arrPeliculas.indexOf(peli)
	return posicionPelicula
}

var incluirPelicula = function (peli){

	if (chequearID(peli) === -1){
		arrPeliculas.push(peli)
		return arrPeliculas
	}else{
		console.log ("Esa película ya está en el array")
	}
}

var ordenarPorTitulo = function (lista)
	lista.sort(function(a, b) {
 	var tituloA = a.titulo.toUpperCase(); 
  	var tituloB = b.titulo.toUpperCase();
  	if (tituloA < tituloB) {
    	return -1;
  	}
  	if (tituloA > tituloB) {
    	return 1;
  	}
  	return 0;
	});


var ordenarPorId = function (lista)
	lista.sort(function (a, b) {
  		return a.id - b.id;
	})



var eliminarPelicula = function (lista, parametro, valorid) {
 
	for (var i = 0; i < lista.length; i++) {
 	if (lista[i][parametro] == valorid) {
	return lista.remove(i)
	}
	}
	return null;
	}
