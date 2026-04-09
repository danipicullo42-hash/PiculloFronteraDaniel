console.log('hola daniel');

function saludar(nombre) {
    return 'hola ${nombre}'
}

saludar('Daniel');

function sumar(a,b){
    return a + b;
}

sumar(5,5);

function resultado() {
    return sumar(5,5);
}

console.log(resultado());