//archivos json javascript object notation formato estandar de intercambio de datos
let producto={
    id:2002,
    nombre:"monitor lg 35",
    precio:1200000
    activo: true,
    etiquetas:["ips","4k","hdr"]
};
// convertir bjetos js a texto JSON  stringify
let productoJSON=JSON.stringify(producto);
console.log(productoJSON);//texto
console.log(typeof productoJSON);//es texto no objeto
//verificado con formato legible para programar
let productoJSON=JSON.stringify(producto,null,2);

console.log(productoJSON2);
//JSON.para convertir texto JSON a objeto javascript
let textoecibido=`{"id","mouse","precio":8500, "stock":30}`;
let objetorecuperado=JSON.parse(textorecibido);
console.log(objetorecuperado.nombre);
console.log(typeof objetorecuperado);
//caso de uso simulacion guardar y recuperar texto
function guardar(clave,dato){
    let json=JSON.stringify(datos);
    console.log(`guardando..."$ {clave}":{json}`);   
}
function cargar(json){
    return JSON.parse(json);

}
let guardado = guardar("producto_1001",producto)
let recupero=cargar(guardado);
console.log(`recuperado: $ {recupero.nombre}-$${recupero.precio.tolowarcase}`)