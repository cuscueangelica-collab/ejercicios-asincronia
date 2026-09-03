//// Estructura: objeto de objetos – clave = ID del proveedor

const proveedores = {
  "PRV-001": {
    nombre: "Tech Distribuidora S.A.S.",
    ciudad: "Bogotá",
    telefono: "6012345678",
    activo: true,
    productos: ["Laptop Dell", "Monitor LG", "Mouse Logitech"]
  },

  "PRV-002": {
    nombre: "ImportaCo LTDA",
    ciudad: "Cali",
    telefono: "6023456789",
    activo: true,
    productos: ["Teclado Redragon", "Mouse Logitech", "Webcam C920"]
  },

  "PRV-003": {
    nombre: "Digital Supplies",
    ciudad: "Medellín",
    telefono: "6045678901",
    activo: false, // proveedor inactivo
    productos: ["Auriculares Sony", "Bocinas Logitech"]
  }
};

// Agregar un nuevo proveedor