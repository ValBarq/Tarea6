// Control de flujo y manejo de errores
function condicionales(valor) {
    if (valor.length === 0) {
        alert("No hay ningun valor")
    } else {
        alert("El contenido es: " + valor)
    }
}

function _switch(valor) {
    switch (valor) {
        case "Perro":
            alert("El perro hace guau guau");
            break;
        case "Gato":
            alert("El Gato hace miau");
            break;
        case "Vaca":
            alert("La vaca hace mu");
            break;
        case "Mono":
            alert("El mono hace Oooo Ooo Ahh Ahh");
            break;
        default:
            alert("No seleccionó ningún animal");
    }
}

function crearExcepcion(valor) {
    if (valor === "")
        throw new Error("No hay valor");
}

function manejarExcepcion(valor) {

    try {
        crearExcepcion(valor);
    } catch (error) {
        alert(error);
    }
}

function objetoError(error) {
    if (error instanceof TypeError) {
        alert("Oops, clickeaste el boton de error y esto genero un error de tipo: " + error)
    }
}

// Bucles e iteración

function bucles(valor) {
    var contador = 0;
    switch (valor) {
        case "for":
            for (let i = 0; i <= 5; i++) {
                alert(`iteracion numero ${i} con for`);
            }
            break;
        case "while":
            while (contador <= 5) {
                alert(`iteracion numero ${contador} con while`);
                contador++;
            }
            break;
        case "do While":
            do {
                alert(`iteracion numero ${contador} con do while`);
                contador++;
            } while (contador <= 5);
            break;
    }
}

// Expresiones y operadores
function operar(num1, num2, operacion) {
    let total;

    switch (operacion) {
        case "Sumar":
            total = Number.parseInt(num1) + Number.parseInt(num2);
            break;
        case "Restar":
            total = Number.parseInt(num1) - Number.parseInt(num2);
            break;
        case "Multiplicar":
            total = Number.parseInt(num1) * Number.parseInt(num2);
            break;
        case "Dividir":
            total = Number.parseInt(num1) / Number.parseInt(num2);
            break;
    }
    alert(`El resultado de la operacion es: ${total}`);
}

//Numeros y fechas
function objetos(tipo) {
    switch (tipo) {
        case 'Number':
            alert("Objeto Number: " + new Number(3).valueOf());
            break;
        case 'Math':
            alert("Objeto Math: " + Math.E);
            break;
        case 'Date':
            alert("Objeto Date: " + new Date().toLocaleDateString());
            break;
    }
}

//Formateo de texto
function formatearTexto(accion, texto, textbox) {
    switch (accion) {
        case 'Mayúscula':
            textbox.value = texto.toUpperCase();
            break;
        case 'Minúscula':
            textbox.value = texto.toLowerCase();
            break;
        case 'Tamaño':
            alert(`La cadena tiene ${texto.length} caracteres`);
            break;
    }
}

//Colecciones indexadas
function array() {
    let lista = new String();
    let frutas = ["Manzana", "Banano", "Pera", "Fresa", "Uva"];
    for (let i = 0; i < frutas.length; i++) {
        lista += frutas[i] + "\n";
    }
    alert(lista)
}

function arrayTipado() {
    const arrayTipado = new Int8Array(4);
    for (let i = 0; i < arrayTipado.length; i++) {
        arrayTipado[i] = i;
    }
    alert(arrayTipado);
}