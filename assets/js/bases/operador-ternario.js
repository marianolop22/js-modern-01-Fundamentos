// dias de la semanaa aabrimos a las 11
//los findes abrea a las 9

const dia = 0; //0=domingo

const horaActual = 8;

let horaApertura;
let mensaje; //está abierto, está cerado hoy abrimos a las XX

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11 ;

mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `está cerrado, abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});