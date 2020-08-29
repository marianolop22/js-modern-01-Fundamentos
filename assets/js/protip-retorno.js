// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     };
// };

//para devolver solo el objeto va entre ()
const crearPersona = ( nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona ( 'Maariano', 'Lopez');
console.log(persona);

function imprimeArgumentos () {
    console.log(arguments);
};

imprimeArgumentos(10, true, false, 'Mariano', 'hola');

 //es como un array de argumentos parametro REST. No se pueden agregar parametros despues del ...args
const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log( {edad, args} );
    return args;
};

const [casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Mariano', 'hola');

console.log( {casado, vivo, nombre, saludo} );



const { apellido: nuevoApellido } = crearPersona ('Mariano','Lopez');

console.log({nuevoApellido});


//destructuracion

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {

//     Object.getOwnPropertyNames(personaje).forEach ( prop => {
//         console.log(personaje[prop]);
//     })
// };

// agrego un valor por defecto
const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15,trajes} ) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

};




imprimePropiedades(tony);






