const elMayor = (a,b) => ( a > b ) ? a : b ;

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';

console.log( elMayor (10,15));

console.log( tieneMembresia (true));

const amigo = false;
const amigos = [
    'Peter',
    'Tonny',
    'Dr Strange',
    amigo ? 'Thor':'Loki'
];

console.log(amigos);


const notas = 65;
const grado =  (notas >= 95) ? 'A+':
                (notas >= 90) ? 'A':
                (notas >= 85) ? 'B+': 'F';

console.log(grado);








