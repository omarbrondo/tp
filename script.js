class ProductoIphone {
    constructor(modelo) {
        this.modelo = modelo;
        console.log("estoy en la clase ProductoIphone y llamo al contructor, le paso el modelo " + this.modelo);
    }
}

class ProductoIpad {
    constructor(modelo) {
        this.modelo = modelo;
        console.log("estoy en la clase ProductoIpad y llamo al contructor, le paso el modelo " + this.modelo);
    }
}

class IphoneFactoria {
    crearProducto(modelo) {
        console.log("Llamado de la clase IphoneFactoria, voy a crear el Iphone");
        return new ProductoIphone(modelo);
    }
}

class IpadFactoria {
    crearProducto(modelo) {
        console.log("Llamado de la clase IpadFactoria, voy a crear el Ipad");
        return new ProductoIpad(modelo);
    }
}

class AppleFactoria {
    constructor() {
        console.log("Llamado de la clase AppleFactoria");
        this.productoIphone = new IphoneFactoria();
        console.log("Creo un objeto del tipo IphoneFactoria() y lo llamo productoIphone");
        this.productoIpad = new IpadFactoria();
        console.log("Creo un objeto del tipo IpadFactoria() y lo llamo productoIpad");
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

    // Crear un nuevo contenedor para el resultadoItem
    const resultadoItem = document.createElement('div');
    resultadoItem.classList.add('d-flex', 'flex-column', 'align-items-center');

    // Agregar el modelo al resultadoItem
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
    console.log("voy a crear el producto, declaro la variable modeloIphone y el modelo es: " + modeloIphone)
    const factoria = new AppleFactoria();
    console.log("Se creo una constante factoria del tipo AppleFactoria (para Iphone)");
    const iphone = factoria.obtenerIphone().crearProducto(modeloIphone);
    mostrarResultado(iphone, modeloIphone);
    console.log("Iphone Creado: IPhone " + modeloIphone);
}

function crearProducto2() {
    const modeloIpad = document.getElementById('ipadModel').value;
    const factoria = new AppleFactoria();
    console.log("Se creo una constante factoria del tipo AppleFactoria (para Ipad)");
    const ipad = factoria.obtenerIpad().crearProducto(modeloIpad);
    mostrarResultado(ipad, modeloIpad);
    console.log("Ipad Creado: IPad " + modeloIpad);
}
