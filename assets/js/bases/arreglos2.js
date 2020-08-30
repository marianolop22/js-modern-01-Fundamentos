let juegos = ['Zelda','Mario','Metroid','Arkanoid'];

console.log(`Largo: ${juegos.length}`);

let primero = juegos[0];
let ultimo  = juegos[ juegos.length - 1 ];

console.log({primero, ultimo});


juegos.forEach ( (juego, indice, arr) => {

    console.log({juego, indice, arr});
})


let nuevaLongitud  = juegos.push ('F-Zero'); //inserta al final

console.log(nuevaLongitud);

juegos.unshift('Soccer 86'); //inserta al principio
console.log(juegos);

let ultimoBorrado = juegos.pop (); //borra el ultimo
console.log({ultimoBorrado});


let pos = 1;
let juegosBorrados = juegos.splice( pos, 2); //devuelve un array de elementos borrados

console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid'); //-1 si no existe
console.log(metroidIndex);















