
class Singleton {

    static instancia; //undefined
    nombre = '';


    constructor ( nombre = '') {
        if ( !!Singleton.instancia ) { //si es true
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('ironman');
const instancia2 = new Singleton ('spidwerman');

console.log(`instancia1 ${instancia1.nombre}`);
console.log(`instancia2 ${instancia2.nombre}`);
