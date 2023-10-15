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

function mostrarResultado(producto, modelo) {
    const resultadoDiv = document.getElementById('resultado');
    const resultadoItem = document.createElement('div');
    resultadoItem.classList.add('d-flex', 'flex-column', 'align-items-center');

    // Agregar el modelo al resultado
    resultadoItem.innerHTML += `<p>Modelo: ${producto.modelo}</p>`;

    // Crear un contenedor para el texto y la imagen
    const modeloImagenContainer = document.createElement('div');
    modeloImagenContainer.classList.add('d-flex', 'flex-column', 'align-items-center');

    // Agregar la imagen al contenedor
    modeloImagenContainer.innerHTML += `<img src="img/${modelo.toLowerCase()}.jpg" alt="${modelo}">`;

    // Agregar el contenedor al resultadoItem
    resultadoItem.appendChild(modeloImagenContainer);

    // Agregar el nuevo resultadoItem al contenedor principal
    resultadoDiv.appendChild(resultadoItem);
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
