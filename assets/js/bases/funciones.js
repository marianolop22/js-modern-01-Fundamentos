
function saludar( nombre ) {
    console.log(arguments); //la funcion de flecha no soporta esto
    console.log(`hola ${nombre}`);
    // return 1;
};

const saludar2 = ( nombre ) => {
    console.log(`hola ${nombre}`);
}

const retorno = saludar( 'mariano', 41, true,'Argentina');
console.log(retorno);
saludar2( 'mariano');

function sumar(a,b) {
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b;
}

//se pueden achicar las funciones de flecha
const sumar3 = (a,b) => a + b;


console.log( sumar (1,2));
console.log( sumar3 (1,2));

// function getAleatorio() {
//     return Math.random();
// }

const getAleatorio = () => Math.random();

console.log( getAleatorio() );


