// let objeto = {
//     usuario: 'buenos aires',
//     edad: 'Montevideo',
//     direccion: "Av. siempre viva 123",
//     fachaDeNacimiento: "12-03-1997",
//     contraseña: "queteimporta"
// }
// //objeto vacio
// let miAuto = {}
// //agregamos propiedades al objeto
// miAuto.marca="Ford";
// miAuto.anio=2020;
// miAuto.nuevo=true; 
// //creamos una variable con su string y la agregamos al objeto.
// let propetyKey = "modelo";
// miAuto[propetyKey]="corolla";

// let anotherPropertyKey = "precio";
// miAuto[anotherPropertyKey]= 40000000;

// let nexProperty = "color";
// miAuto[nexProperty]= "negro"

// //el loop for..in intera sobre el objeto recorriendo sus 
// //propiedades, "prop" es la vaeriable que se utilizara 
// //para almacenar el nombre de cada propiedad

// for (let prop in miAuto) {
//     console.log(`${prop}:${miAuto[prop]}`)
// }
//  console.log(miAuto["modelo"])
//  console.log(miAuto["color"])

//###################################### Aumentar la nota ####################################################

// let estudiantes = [
//     {nombre: "Juan", nota: 6}, 
//     {nombre: "Julia", nota: 8},
//     {nombre: "Sofia", nota: 10},
//     {nombre: "Mario", nota: 2}
// ]

// for (let i=0; i <estudiantes.length; i++){
//     if (estudiantes[i].nota >5 ){
//         estudiantes[i].nota+=2; 
//     } if (estudiantes[i].nota >10){
//         estudiantes[i].nota = 10; 
//     }
// }

// for (let i = 0; i <estudiantes.length; i++){
//     console.log(`${estudiantes[i].nombre}: ${estudiantes[i].nota}`)
// }

//######################################## Base de datos de peliculas ##############################################
// let peliculas = [
//     {
//         titulo: "Busqueda implacable",
//         rating: 5,
//         loHasVisto: true
//     },
//     {
//         titulo: "Norbit",
//         rating: 3,
//         loHasVisto: false
//     },
//     {
//         titulo: "Mini espias",
//         rating: 2,
//         loHasVisto: true
//     },
//     {
//         titulo: "La vida",
//         rating: 5,
//         loHasVisto: false
//     }
// ];

// for (let i = 0; i < peliculas.length; i++) {
//     let pelicula = peliculas[i];
//     let mensaje;

//     if (pelicula.loHasVisto) {
//         mensaje = "Viste";
//     } else {
//         mensaje = "No viste";
//     }

//     console.log(mensaje + ' "' + pelicula.titulo + '" - ' + pelicula.rating + ' estrellas');
// }

//##################################### Numeros Duplicados ############################################## 
// let numeros = [2, 4, 37, 0];
// let numeros_duplicados = {};
// // Iterar sobre el arreglo y agregar cada valor como una propiedad del objeto
// for (let i = 0; i < numeros.length; i++) {
//     let numero = numeros[i];
//     numeros_duplicados[numero] = numero * 2; 
// }
// console.log(numeros_duplicados);


//####################################  Desafio +27  #######################################################3
// let persona = [ {nombre: 'Ana', edad: '28'},
//     {nombre: 'Maria', edad: '24'}, {nombre: 'Jose', edad: '31'}
// ]
//  let personasConMasDe27 = persona.filter(persona => parseInt(persona.edad)> 27);
//  console.log(personasConMasDe27);



//############################ Camnio al oscar ################################################################
// let bienvenida = "Hola, sean muy bienvenidos!"
// bienvenida[0];
// let palabras = bienvenida.split('');

// let actoresVocales = []
// let actoresPrincipales = ['Tom Hanks', 'Jonny Deep', 'Elisabeth Taylor','Morgan Freeman', 'Jennifer Aniston', 'Merf Streep', 'Natali Portman','Ashion Kutcher']
// let vocales = ["a","e","i","o","u"];
// for (let i = 0; i <actoresPrincipales.length; i++){
//     let actores = actoresPrincipales[i].toLocaleLowerCase().split(" ");
//     let nombre = actores [0];
//     let apellido = actores [1];
//     if (vocales.includes(nombre[0])|| vocales.includes(apellido[0])){
//         actoresVocales.push(actoresPrincipales[i]);
//     }
// }
// //console.log(actoresVocales);

//  let peliculas= [];
//  let actoresPricipalesPorPelicula = {
//      "Titanic":"Leonardo DiCaprio",
//    "El Padrino": "Al Pacino",
//      "Matrix" : "Keanu Reeves",
//      "Iron Man": "Robert Downey Jr",
//     "Soy Leyenda" : "Will Smith",
//     "Bastardos sin gloria" : "Brad Pitt"
// }

// peliculas = Object.keys(actoresPricipalesPorPelicula);

// //console.log(peliculas);

// let peliculaPorActor = {}

// peliculaPorActor.LeonardoDiCaprio = ["Inception", "Titanic"];
// peliculaPorActor.ChristianBale = ["The Dark Knight", "American Psycho"];
// peliculaPorActor.JohnTravolta = ["Pulp Fiction", "Grease"];
// peliculaPorActor.TomHanks = ["Forrest Gump", "Cast Away"];
// peliculaPorActor.MorganFreeman = ["The Shawshank Redemption", "Se7en"];

// for ( let actores in peliculaPorActor){
//     console.log(`${actores}: ${peliculaPorActor[actores].join("-")}`)
// }

//############################ Posición Adecuada ######################################################

// let personas = [
//     { nombre: "Alba", edad: 15},
//     { nombre: "Estrella", edad: 30},
//     { nombre: "Belen", edad: 20},
//     { nombre: "Santiago", edad: 4},
//     { nombre: "Katherine", edad: 55}
// ]

// personas.sort((a, b) => a.edad - b.edad); 

// for (let i = 0 ; i < personas.length; i++){
//     personas[i].posicion = i + 1;
// }

// console.log(personas);

//######################  Software Factory ##################

let ecommerce = [
    {nombre:"Samsung TV", precio: 6000, articulos:10},
    {nombre:"DELL notebook", precio: 4000, articulos:30},
    {nombre:"Auriculares Sony", precio: 1500, articulos:15},
    {nombre:"Monitor Philips", precio: 12000, articulos:20},
    {nombre:"Teclado logitech", precio: 3000, articulos:5}
];

function totalArticulos(ecommerce) {
    let resultado = ecommerce.map(producto => {
        return {
            nombre: producto.nombre,
            valorTotal: producto.precio * producto.articulos
        };
    });
    return resultado;
}

let valorTotalProductos = totalArticulos(ecommerce);

console.log(valorTotalProductos);
