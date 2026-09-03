// CADENA DE PROMESAS - StoreApp
// Uso: Node.js



// 1. BUSCAR CLIENTE
// Simula buscar un cliente en una base de datos.
// Tiempo de respuesta: 800 ms


function buscarCliente(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const clientes = {

                "C001": {
                    id: "C001",
                    nombre: "Ana García",
                    membresia: "gold",
                    activo: true
                },

                "C002": {
                    id: "C002",
                    nombre: "Luis Torres",
                    membresia: "normal",
                    activo: false
                },

                "C003": {
                    id: "C003",
                    nombre: "María López",
                    membresia: "gold",
                    activo: true
                }

            };

            const cliente = clientes[id];


            // Cliente no encontrado
            if (!cliente) {

                reject(
                    new Error(
                        `Cliente "${id}" no encontrado en el sistema.`
                    )
                );

            }

            // Cliente encontrado pero inactivo
            else if (!cliente.activo) {

                reject(
                    new Error(
                        `Cliente "${cliente.nombre}" está inactivo.`
                    )
                );

            }

            // Cliente encontrado y activo
            else {

                resolve(cliente);

            }

        }, 800);

    });

}

// 2. CALCULAR DESCUENTO
// Simula el cálculo del descuento según la membresía.


function calcularDescuento(cliente, monto) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Validar monto
            if (monto <= 0) {

                reject(
                    new Error(
                        "El monto debe ser mayor que cero."
                    )
                );

                return;
            }


            let porcentajeDescuento;


            // Membresía GOLD = 20%
            if (cliente.membresia === "gold") {

                porcentajeDescuento = 20;

            }

            // Membresía NORMAL = 5%
            else {

                porcentajeDescuento = 5;

            }


            // Calcular descuento
            const descuento =
                monto * porcentajeDescuento / 100;


            // Calcular total
            const total =
                monto - descuento;


            // Enviar resultado
            resolve({

                cliente: cliente,

                montoOriginal: monto,

                porcentajeDescuento:
                    porcentajeDescuento,

                descuento:
                    descuento,

                total:
                    total

            });

        }, 600);

    });

}



// 3. PROCESAR PAGO
// Simula el procesamiento del pago.
// Límite máximo: $20.000.000

function procesarPago(datos) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Verificar límite de transacción
            if (datos.total > 20000000) {

                reject(
                    new Error(
                        "El monto supera el límite de transacción."
                    )
                );

                return;
            }


            // Pago aprobado
            resolve({

                estado: "APROBADO",

                cliente:
                    datos.cliente.nombre,

                montoPagado:
                    datos.total

            });

        }, 1000);

    });

}


// =====================================================
// 4. CADENA DE PROMESAS
// buscarCliente()
//       ↓
// calcularDescuento()
//       ↓
// procesarPago()
//       ↓
// catch() si ocurre algún error
// =====================================================

buscarCliente("C001")

    .then(cliente => {

        console.log("=================================");
        console.log("CLIENTE ENCONTRADO");
        console.log("=================================");

        console.log("ID:", cliente.id);
        console.log("Nombre:", cliente.nombre);
        console.log("Membresía:", cliente.membresia);
        console.log("Activo:", cliente.activo);

        console.log("\nCalculando descuento...");

        return calcularDescuento(
            cliente,
            100000
        );

    })


    .then(datos => {

        console.log("\n=================================");
        console.log("DESCUENTO CALCULADO");
        console.log("=================================");

        console.log(
            "Monto original: $",
            datos.montoOriginal
        );

        console.log(
            "Descuento:",
            datos.porcentajeDescuento + "%"
        );

        console.log(
            "Valor descuento: $",
            datos.descuento
        );

        console.log(
            "Total a pagar: $",
            datos.total
        );

        console.log("\nProcesando pago...");

        return procesarPago(datos);

    })


    .then(resultado => {

        console.log("\n=================================");
        console.log("RESULTADO DEL PAGO");
        console.log("=================================");

        console.log(
            "Estado:",
            resultado.estado
        );

        console.log(
            "Cliente:",
            resultado.cliente
        );

        console.log(
            "Monto pagado: $",
            resultado.montoPagado
        );

    })


    .catch(error => {

        console.error("\n=================================");
        console.error("ERROR");
        console.error("=================================");

        console.error(
            error.message
        );

    });