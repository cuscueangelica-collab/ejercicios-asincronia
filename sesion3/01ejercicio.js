// ejercicio1 - Ficha de empleado
/*enunciado crea  un objeto empleado con al menos 7 propiedades(incluyendo un objeto anidado para el contacto y un arrayde habilidades).
agrega metodo fichacompleta() que se use this para retornar un  resumen formateo.
Luego recorre sus propiedades con Object.entrias e imprime cada clave y valor*/

let empleado = {
    id:"emp_01",
    nombre:"Valentina Castillo"
    cargo:"Administradora",
    activo: true,
    fechadeingreso:"2020-04-12"
};
    //otro objeto (anidado)
    contacto:{
        email: "valencast04@gmail.com"
        telefono: 3176313265
        ciudad: " Popayan"
    };
    //array
    habilidades:["getion de inventario","Excel","Atencion del cliente"];
    fichacompleta(){
        return
            id: $(this.id)
        ;
    }

