
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula':'Infinity War',
    casado: true
};
/* 
console.table(personaje);
console.log(`Nombre ${personaje.nombre}`);
console.log(`Nombre ${personaje['nombre']}`);

 */

/*  
Object.keys (personaje).forEach ( prop => {
    console.log(`aca toy ${prop}`,personaje[prop]);
});
 */

// recorro el objeto personaje
// Object.entries (personaje).forEach ( prop => {
//     console.log(prop);
// });

const x = 'vivo';
console.log(`esta vivo? ${personaje[x]}`);

// borrar propiedades
/* 
delete personaje.edad;

console.log(personaje);
*/

//no permite modificar el objeto, ni agregar ni modificar propiedades
Object.freeze (personaje);

personaje.dinero = 10000000000;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);

console.log(propiedades);


Object.getOwnPropertyNames(personaje).forEach ( prop => {
    console.log(personaje[prop]);
})
