
const regresaTrue = () => {
    console.log('regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('regresa false');
    return false;
};

console.warn (' Not o la Negacion');
console.log(true);
console.log(!true);
console.log(!false);
console.log(!regresaFalse());


console.warn('and');//
console.log(true && true);

console.log('===============');
regresaFalse() && regresaTrue(); //ejecuta la primer funcion nomas
regresaTrue() && regresaFalse(); //ejecuta las dos

