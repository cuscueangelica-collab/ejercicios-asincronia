//subtema 3. object.keys,object.values, object.entries
let producto={
    nombre:"web cam fhd",
    precio: 2800000
    stock:40,
    categoria:"perifericos"
};
//object.keys
let claves=Object.keys(producto);// array con las claves del objeto
console.log(claves);
let valores=Object.values(producto);//array con los valores
console.log(valores);
let entradas=Object.entries(producto);// array de pares
console.log(entradas);
//interaccion sobre un objeto coo
console.log("\nficha tecnica:");
for(let[clave,valor]of Object.entries(producto));
crossOriginIsolated.log(`$ {clave.padEnd(12)}:$ {valor}`)

