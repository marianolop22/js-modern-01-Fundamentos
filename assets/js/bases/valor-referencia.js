//los primitivos se pasan por valor
// let a = 10;
// let b = a;

// console.log({ a , b });
// a = 30;
// console.log({ a , b });

// los objetos se pasan por referencia
// let juan = {
//     nombre: 'juan'
// };

// let ana = juan;

// console.log({juan, ana});
// ana.nombre = 'ana';
// console.log({juan, ana});


// const cambiaNonbre = ( persona ) => {
//     persona.nombre = 'Tony';
//     return persona;
// }

// let peter = {nombre: 'peter'};
// let tony = cambiaNonbre (peter);

// console.log({peter, tony});


//copia de objetos
let juan = {
    nombre: 'juan'
};

let ana = { ...juan };//operador spread, hace una copia

console.log({juan, ana});
ana.nombre = 'ana';
console.log({juan, ana});


const cambiaNonbre = ( {...persona} ) => { //acá el operador spread sirve para tocar una copia
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'peter'};
let tony = cambiaNonbre (peter);

console.log({peter, tony});


//para arreglos
const frutas = ['Manzana','Pera','Piña'];

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');


console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');




otrasFrutas.push('Mango');
otrasFrutas2.push('Banana');

console.table({frutas, otrasFrutas, otrasFrutas2});
