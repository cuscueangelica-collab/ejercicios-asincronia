//subtema2. metodos en objetos
const carrito={
    items:[], //propiedad
    total:0,
    //metodos
    agregarproducto(producto,cantidad){
        //this hacer referencia al produsto del carrito
        this.items.push({producto,cantidad});
        this.total +=producto.precio*cantidad;
        
    },
    // metodo para mostrar productos
    verproducto(){
        console.log(`items:$ {this.items.length}|total:$ {this.total.toLocaleString("es-co")}`);

    }

};//fin del objeto
carrito.agregar({nombre:"mouse", precio:30000});
carrito.agregar({nombre:"teclado",precio:450});
carrito.verproducto();
// forma correcta de usar una funcion
let objeto={
    nombre:"storeapp"
    mostrar(){console.log(this.nombre);}
};
objeto.mostrar();//llamado metodo

