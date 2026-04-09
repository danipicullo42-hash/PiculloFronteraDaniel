//ejercicio 1------------------------------------------
function mostraralerta() {
    alert("¡Hola, mundo!");
}

//ejercicio2--------------------------------------------
function mostrarAlertaConNombre() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
    } else {
        alert("¡Hola, " + nombre + "!");
    }
}

//ejercicio3--------------------------------------------
function analizar (){
    var valor = document.getElementById("valor").value;

    var tipo = typeof valor;

    if (isNaN(valor)) {
      document.getElementById("resultado").innerHTML="tipo: " + tipo + " no es un numero";

    }else {
        document.getElementById("resultado").innerHTML="tipo: " + tipo + " es un numero";
    }
    
}
//ejercicio 4--------------------------------------------
function calcular(){
    var resultado = 25 * 4 - 10;
    console.log("Resultado:",resultado);
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}

//ejercicio 5 -------------------------------------------
function sumar(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    if (n1 === ""|| n2 ==="") {
        document.getElementById("resultado").innerHTML="error: completar ambos campos";
        return;
    }
    var num1 = Number(n1);
    var num2 = Number(n2);
    var resultado = num1+num2;
    console.log("resultado:",resultado);
    document.getElementById("resultado").innerHTML="resultado: "+ suma;
}

//ejercicio 6------------------------------------------------
function Restar() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    if (n1 === ""|| n2 === "") {
        document.getElementById("resultado").innerHTML = "Error: completa ambos campos";
        return;
    }
    var num1 = Number(n1);
    var num2 = Number(n2);

    var resultado = num1 - num2;

    var tipo;

    if (resultado > 0) {
        tipo = "positivo";
    } else if (resultado < 0) {
        tipo = "negativo";
    } else {
        tipo = "cero";
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado + "("+tipo+")";
}

//ejercicio 7 ------------------------------
function Multiplicar() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    if (n1 === ""|| n2 ===""){
      document.getElementById("resultado").innerHTML = "Error: completá ambos campos";
        return;  
    }
    var num1 = Number(n1);
    var num2 = Number(n2);

    var producto = num1 * num2;

    // Mostrar resultado en pantalla
    document.getElementById("resultado").innerHTML = "Resultado: " + producto;

    // Tabla del primer número (sin bucles)
    console.log(num1 + "×1=" + (num1 * 1));
    console.log(num1 + "×2=" + (num1 * 2));
    console.log(num1 + "×3=" + (num1 * 3));
    console.log(num1 + "×4=" + (num1 * 4));
    console.log(num1 + "×5=" + (num1 * 5));
}

//ejercicio 8 ----------------------------------

function dividir() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let resultado = document.getElementById("resultado");

    if(n2 === 0) {
        resultado.innerText = "error: no se puede dividir por cero";
    } else{
        let division = n1/n2;
        resultado.innerText=division.toFixed(2);
    }   
}

//ejercicio 9-----------------------------------

function clasificar() {
    let num = parseFloat(document.getElementById("num").value);
    let resultado = document.getElementById("resultado");

    if (num > 0) {
        resultado.innerText = "positivo";
    } else if (num < 0) {
        resultado.innerText = "negativo";
    } else {
        resultado.innerText = "cero";
    }
}

// ejercicio 10-----------------------------

function verificar() {
    let num = parseFloat(document.getElementById("num").value);
    let resultado = document.getElementById("resultado");

    if (!Number.isInteger(num)) {
        resultado.innerText = "ingresar un numero entero";
    } else {
        if (num % 2 === 0) {
            resultado.innerText = "Par";
        } else {
            resultado.innerText = "Impar";
        }
    }
}   

//ejercicio 11----------------------------------

function verificar() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = document.getElementById("resultado");

    if (edad < 0 || edad > 120) {
        resultado.innerText = "error: edad invalida";
    } else {
        if (edad >=18) {
            resultado.innerText = nombre + " es mayor de edad";
        } else {
            let faltan = 18 - edad;
            resultado.innerText = nombre + " es menor de edad, le falta " + faltan + "años";
        }
    }

}

// ejercicio 12-------------------------------------------

function comparar() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let resultado = document.getElementById("resultado");

    if (n1 > n2) {
        resultado.innerText = "el mayor es: " + n1;
    } else if (n2 > n1) {
        resultado.innerText = "el mayor es: " + n2;
    } else {
        resultado.innerText = "los dos numeros son iguales";
    }
}

// ejercicio 13----------------------------------------------

function calcular() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (base <= 0  || altura <= 0) {
        resultado.innerText = "error: valores deben ser positivos";
    } else {
        let area = base * altura;
        let perimetro = 2 * (base+altura);

        resultado.innerText = "Area: " + area + "  Perimetro: "+perimetro;
    }
}

//ejercicio 14------------------------------------
function convertir(){
    let c = parseFloat(document.getElementById("celsius").value);
    let resultado = document.getElementById("resultado");

    if (c < -273.15) {
        resultado.innerText = "error: temperatura por debajo del cero";
    } else {
        let f = c *9/5 + 32;
        let k = c + 273.15;

        resultado.innerText = "fahrenheit: "+ f.toFixed(2) + " | kelvin " + k.toFixed(2); 
    }
}

//ejercicio 15-------------------------------------
function calcular() {
    let monto = parseFloat(document.getElementById("monto").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);
    let resultado = document.getElementById("resultado");


    if (porcentaje < 0 || porcentaje > 100) {
        resultado.innerText  = "error: porcentaje invalido";

    } else {
        let propina = monto * porcentaje / 100;
        let total = monto + propina;

        resultado.innerText = "Propina: $ " + propina.toFixed(2) + "| total: $ " + total.toFixed(2);
    }
}

//ejercicio 16 -----------------------------------
function verificar() {
    let min = parseFloat(document.getElementById("min").value);
    let max = parseFloat(document.getElementById("max").value);
    let num = parseFloat(document.getElementById("num").value);
    let resultado = document.getElementById("resultado");

    // Validar rango incorrecto
    if (min >= max) {
        resultado.innerText = "Error: el mínimo debe ser menor que el máximo.";
    } else {
        if (num >= min && num <= max) {
            resultado.innerText = "número dentro del rango.";
        } else if (num < min) {
            resultado.innerText = "número menor al mínimo.";
        } else {
            resultado.innerText = "número mayor al máximo.";
        }
    }
}

// ejercicio 17 -----------------------------------------
function calcular() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");

    if (op === "suma") {
       resultado.innerText = n1 + n2; 
    } else if (op === "resta") {
        resultado.innerText = n1 - n2;
    } else if (op === "multiplicacion") {
        resultado.innerText = n1*n2;
    } else if (op === "division") {
        if (n2 === 0) {
            resultado.innerText = "error: por cero no se puede dividir";
        } else {
            resultado.innerText = (n1/n2).toFixed(2);
        }
    }
}

// ejercicio 18 --------------------------------------
function aplicar() {
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento = parseFloat(document.getElementById("descuento").value);
    let resultado = document.getElementById("resultado");

    if (descuento < 0 || descuento > 100) {
        resultado.innerText = "descuento inválido.";
    } else {
        let ahorro = precio * descuento / 100;
        let final = precio - ahorro;
        let mensaje = "";

        if (descuento === 0) {
            mensaje = "Sin descuento";
        } else if (descuento <= 30) {
            mensaje = "Oferta";
        } else {
            mensaje = "¡super oferta!";
        }

        resultado.innerText = "Precio final: $" + final.toFixed(2) + " | Ahorrás: $" + ahorro.toFixed(2) + " | " + mensaje;
    }
}

//ejercicio 19 -----------------------------------------------
function verificar() {
    let anio = parseInt(document.getElementById("anio").value);
    let resultado = document.getElementById("resultado");

    if ((anio % 4 === 0) && (anio % 100 !== 0 || anio % 400 === 0)) {
        resultado.innerText = "Es bisiesto";
    } else {
        resultado.innerText = "No es bisiesto";
    }
}

// ejercicio 20 ----------------------------------------------
function calcular() {
    let precio = parseFloat(document.getElementById("precio").value);
    let conIva = document.getElementById("conIva").checked;
    let resultado = document.getElementById("resultado");

    if (conIva) {
        let total = precio * 1.21;
        resultado.innerText = "Precio con IVA: $" + total.toFixed(2) + " (IVA aplicado)";
    } else {
        resultado.innerText = "Precio: $" + precio.toFixed(2) + " (sin IVA)";
    }
}

// ejercicio 21 ----------------------------------------------------
function convertir() {
    let seg = parseFloat(document.getElementById("segundos").value);
    let resultado = document.getElementById("resultado");

    if (seg < 0) {
        resultado.innerText = "cantidad invalida";
    } else {
        let horas = Math.floor(seg / 3600);
        let resto = seg % 3600;
        let minutos = Math.floor(resto/60);
        let segundos = resto % 60;

        resultado.innerText = horas + "h " + minutos + "m " + segundos + "s";
    }
}

// ejercicio 22 -------------------------------------------------
function validar() {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let resultado = document.getElementById("resultado");

    if(pass1.length < 6) {
        resultado.innerText =" la contraseña tiene que tener 6 caracteres";
    } else if (pass1 !== pass2){
        resultado.innerText = "las contraseñas no coinciden ";
    } else {
        resultado.innerText = "contraseña correcta";
    }
}

// ejercicio 23 -------------------------------------------------
function evaluar () {
    let nota = parseFloat(document.getElementById("nota").value);
    let resultado = document.getElementById("resultado");

    if (nota < 0 || nota > 10) {
        resultado.innerText = " la nota debe ser entre 0 y 10";
    } else if (nota <=3) {
        resultado.innerText = "desaprobado";
    } else if (nota <= 5) {
        resultado.innerText = "Recuperatorio";
    } else if (nota <= 6) {
        resultado.innerText = "Aprobado";
    } else if (nota <= 9) {
        resultado.innerText = "Excelente";
    } else {
        resultado.innerText = "sobresaliente";
    }
}

// ejercicio 24 ----------------------------------------------------

function calcular() {
    let precio = parseFloat(document.getElementById("precio").value);
    let entregado = parseFloat(document.getElementById("entregado").value);
    let resultado = document.getElementById("resultado");

    if (entregado < precio) {
        let falta = precio - entregado;
        resultado.innerText = "Falta : $ " + falta.toFixed(2);
    } else if (entregado === precio) {
        resultado.innerText = "Monto total, no hay vuelto "
    } else {
        let vuelto = entregado - precio;
        resultado.innerText = "vuelto: $ " + vuelto.toFixed(2);
    }
}

//ejercicio 25 --------------------------------------------------
function calcular() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let op = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");

    // Validar campos vacíos
    if (n1 === "" || n2 === "") {
        resultado.innerText = "completar los dos campos.";
        return;
    }

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    let res;

    if (op === "suma") {
        res = n1 + n2;
    } else if (op === "resta") {
        res = n1 - n2;
    } else if (op === "multiplicacion") {
        res = n1 * n2;
    } else if (op === "division") {
        if (n2 === 0) {
            resultado.innerText = "no se puede dividir por cero.";
            return;
        }
        res = n1 / n2;
    } else if (op === "potencia") {
        res = Math.pow(n1, n2);
    }

    resultado.innerText = "Resultado: " + res.toFixed(2);
    console.log("Resultado:", res.toFixed(2));
}

function limpiar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").innerText = "";
}













