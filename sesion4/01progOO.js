//clases en poo es una plantilla o molde para crear objetos
//el constructor seria el metodoprincipal y permite crear los objetos

class producto{
    //el constuctor recibe los datos iniciales en cada objeto
    constructor(id,nombre,precio,stock=5){
        //this asigna los valores a cada propiedad
        this.id= id;
        this.nombre= nombre;
        this.precio= precio;
        this.stock= stock;
        this.fechaC= new Date();
    }//end constructor
    //crear los metodos utilizados para cualquier objeto
    descripcion(){
        return `[${this.id}$(this.nombre)]`

    }
    //metodo para mostrar el producto con stock mayor a 5
    productoDisponible(){
        return this.stock > 5
        ?`se cuenta con un stock alto ${this.stock}`
        ?`no tienes un stock adecuado ${this.stock}`
    }
    // hacer un descuento de acuerdo al valor indicado desde el llamado al metodo
    descuentoProducto(numero){
    let poecentaje = numero
    return  porcentaje >5
    ?`no aplica`
    :`no aplica`
    }
}//fin clase
let prod1=new producto(1001, "laptop dell XPS",5500000,10);
let prod2=new producto(1002, "mouse logitech", 80000, 4);
let prod3=new producto(1003,"teclado mecanico", 100000, 10);
console.log(prod1);
//console.log(prod1);
//llamar la funcion descripcion
console.log(prod1.descripcion());
console.log(prod1.productoDisponible());
console.log(prod1.productoDisponible(5));//resultado valor actual del producto
// si es mayor a 5 mensaje no se puede hacer descuento sino hacer la operacion



