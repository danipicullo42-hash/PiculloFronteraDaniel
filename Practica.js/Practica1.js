function obtenerValores() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    return [n1, n2];
}

document.addEventListener("click",function(){
    let botonsuma = this.documentElement.getElementById("suma");
    let botonresta = this.documentElement.getElementById("resta");
    let botonmultiplicacion = this.documentElement.getElementById("multiplicacion");
    let botondivision = this.documentElement.getElementById("division");
})
function mostrarResultado(res) {
    document.getElementById("resultado").textContent = res;
}

function sumar() {
    let [n1, n2] = obtenerValores();
    mostrarResultado(n1 + n2);
}

function restar() {
    let [n1, n2] = obtenerValores();
    mostrarResultado(n1 - n2);
}

function multiplicar() {
    let [n1, n2] = obtenerValores();
    mostrarResultado(n1 * n2);
}

function dividir() {
    let [n1, n2] = obtenerValores();
    if (n2 === 0) {
        mostrarResultado("No se puede dividir por 0");
    } else {
        mostrarResultado(n1 / n2);
    }
}