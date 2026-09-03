//2. subtema herencia con extends y super
//la herencia permite crear clases nuevas basadas en clases nuevas basadas en clases existentes
// la clase hija hereda metodos y propiedades del padre

class producto{
    constructor(id,nombre,precio,stock=o){
        this.id=id;
        this.nombre= nombre,
        this.precio= precio;
        this.stock= stock;

    }//fila del constructor
    //metodo de descripcion
    descripcion(){
        return`[${this.id}${this.nombre}]`
    }
    disponible(){
        return this.stock>5;
    }
}//fin de la clase

//hereda del padre producto o una nueva clase llamada productodigital
class productodigital extends producto{
    constructor(id,nombre,precio,urldescargar,licencia=2){
        //super() llama al comstructor del padre es obligatorio antes de usar this
        super(id,nombre,precio,999);
        this.urldescargar=urldescargar;
        this.licencia-licencia;

    }//termina constructor

    descripcion(){
        //super.descripcion()llamar al metodo padre
        return `${super.descripcion()} | digital | ${this.licencias} licencia(s)`;
    }
}//fuera fin de la clase productodigital

let sofware = new productodigital
 