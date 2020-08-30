let a = 10;

if ( a >= 10 ) {
    console.log('A es mayor a 10');

} else {
    console.log('es menor');
}

console.log('fin del programa');


const hoy = new Date();

console.log(hoy);

let dia = hoy.getDay();

if ( dia === 6 ) {
    console.log('hoy es sabado');
    
} else {
    console.log('no es sabado');
}

const diasSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};



console.log(diasSemana[dia] || 'Dia no definido');




