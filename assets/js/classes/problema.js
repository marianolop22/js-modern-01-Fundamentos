const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir () {
        console.log(`nombre ${this.nombre}, edad ${this.edad}`);
    }
}

// fher.imprimir();

// esto sería una especie de clase con el viejo js
function Persona (nombre, edad) {

    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`nombre ${this.nombre}, edad ${this.edad}`);
    }

}

const maria = new Persona ('Maria', 32);
const melissa = new Persona ('Melissa', 35);
console.log(maria);
maria.imprimir();
melissa.imprimir();


