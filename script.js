class ProductoIphone {
    constructor(modelo) {
        this.modelo = modelo;
        console.log("El modelo de Iphone elegido es: " + this.modelo);
    }
}

class ProductoIpad {
    constructor(modelo) {
        this.modelo = modelo;
        console.log("El modelo de Ipad elegido es: " + this.modelo);
    }
}

class IphoneFactoria {
    crearProducto(modelo) {
        console.log("Llamado de la clase IphoneFactoria");
        return new ProductoIphone(modelo);
    }
}

class IpadFactoria {
    crearProducto(modelo) {
        console.log("Llamado de la clase IpadFactoria");
        return new ProductoIpad(modelo);
    }
}

class AppleFactoria {
    constructor() {
        this.productoIphone = new IphoneFactoria();
        this.productoIpad = new IpadFactoria();
        console.log("Llamado de la clase AppleFactoria");
    }

    obtenerIphone() {
        console.log("Llamado a la funcion obtenerIphone, fabricando telefono...");
        return this.productoIphone;
    }

    obtenerIpad() {
        console.log("Llamado a la funcion obtenerIpad, fabricando ipad...");
        return this.productoIpad;
    }
}

// Mueve la función mostrarImagen arriba para que esté definida antes de ser utilizada
function mostrarImagen(modelo, imagenId) {
    // Verifica si el elemento con el ID especificado existe
    const imagen = document.getElementById(imagenId);

    if (imagen) {
        // Cambia la fuente de la imagen según el modelo seleccionado
        imagen.src = `img/${modelo.toLowerCase()}.jpg`;
    } else {
        console.error(`Elemento con ID ${imagenId} no encontrado.`);
    }
}

function mostrarResultado(producto, modelo) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML += `<p>Modelo: ${producto.modelo}</p>`;

    // Agregar la imagen al resultado
    resultadoDiv.innerHTML += `<img src="img/${modelo.toLowerCase()}.jpg" alt="${modelo}">`;
}

function crearProducto1() {
    const modeloIphone = document.getElementById('iphoneModel').value;
    const factoria = new AppleFactoria();
    const iphone = factoria.obtenerIphone().crearProducto(modeloIphone);
    mostrarResultado(iphone, modeloIphone);
    console.log("Iphone Creado: IPhone " + modeloIphone);
}

function crearProducto2() {
    const modeloIpad = document.getElementById('ipadModel').value;
    const factoria = new AppleFactoria();
    const ipad = factoria.obtenerIpad().crearProducto(modeloIpad);
    mostrarResultado(ipad, modeloIpad);
    console.log("Ipad Creado: IPad " + modeloIpad);
}
