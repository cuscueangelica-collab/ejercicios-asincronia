// INICIALIZACIÓN ASÍNCRONA - StoreApp
// Uso: Node.js



// 1. CARGAR PRODUCTOS
// Simula cargar productos desde una base de datos.

function cargarProductos() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(
                "Productos cargados correctamente."
            );

        }, 1000);

    });

}


// =====================================================
// 2. CARGAR CLIENTES
// Simula cargar clientes desde una base de datos.
// =====================================================

function cargarClientes() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(
                "Clientes cargados correctamente."
            );

        }, 1500);

    });

}


// =====================================================
// 3. CARGAR CONFIGURACIÓN
// Simula cargar la configuración de StoreApp.
// =====================================================

function cargarConfiguracion() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(
                "Configuración cargada correctamente."
            );

        }, 800);

    });

}


// =====================================================
// 4. INICIALIZAR LA APLICACIÓN
// Utilizamos async/await y Promise.allSettled()
// =====================================================

async function inicializarApp() {

    console.log("=================================");
    console.log("INICIANDO STOREAPP");
    console.log("=================================\n");


    try {

        // Ejecutamos las tres cargas al mismo tiempo
        const resultados = await Promise.allSettled([

            cargarProductos(),

            cargarClientes(),

            cargarConfiguracion()

        ]);


        console.log("RESULTADOS DE LA CARGA:\n");



        // PRODUCTOS

        if (resultados[0].status === "fulfilled") {

            console.log(
                "Productos:",
                resultados[0].value
            );

        }

        else {

            console.error(
                "Productos: ERROR -",
                resultados[0].reason.message
            );

        }


        // CLIENTES


        if (resultados[1].status === "fulfilled") {

            console.log(
                "Clientes:",
                resultados[1].value
            );

        }

        else {

            console.error(
                "Clientes: ERROR -",
                resultados[1].reason.message
            );

        }


        // =============================================
        // CONFIGURACIÓN
        // =============================================

        if (resultados[2].status === "fulfilled") {

            console.log(
                "Configuración:",
                resultados[2].value
            );

        }

        else {

            console.error(
                "Configuración: ERROR -",
                resultados[2].reason.message
            );

        }


        console.log("\n=================================");
        console.log("STOREAPP INICIALIZADO");
        console.log("=================================");


    }

    catch (error) {

        console.error(
            "Error inesperado:",
            error.message
        );

    }

}



// 5. EJECUTAR LA INICIALIZACIÓN


inicializarApp();