//crear un objeto
let producto ={
    id: 101,
    nombre:`laptop dell cps 13`,
    precio: 560000
    stock:10,
    disponible: true,
    // una propiedad puede ser otro objeto (anido)
    dimensiones:{largo:34, ancho:25, alto:15},
    // array
    etiquetas:["ultrabook", "gamer", "programacion"]
};
// acceder a una propiedad
console.log(producto.nombre);
console.log(producto.etiquetas)
console.log(producto.dimensiones);
// notacion o trabajo con corchetes
let clave="precio"
console.log(producto[clave]);
// modificacion de propiedades
producto.precio= 500000 // modifico un valor existente
producto.disponible=false; //modifico
producto.color="plateado"; //agrego una propiedad
delete producto.disponible;// elimieno una propiedad
// verificar la propiedad existente
console.log("precio" in producto);//true
console.log("disponible" in producto);//false


