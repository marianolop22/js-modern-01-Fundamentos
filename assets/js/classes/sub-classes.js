class Persona {

    //estática, propia de la clase
    static _conteo = 0;
    static get conteo ( ){
        return Persona._conteo;
    }
    static mensaje () {
        console.log('mensaje estático');
    }

    nombre;
    codigo;
    frase;
    comida = '';
    
    /**
     * Constructor
     * @param {string} nombre
     * @param {string} codigo
     * @param {Number} frase
     */
    constructor( nombre = '', codigo = '', frase = ''){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    //getters y settets
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () {
        return `La comida favorita es ${this.comida}`;
    }

    quienSoy () {
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    /**
     * Funcion que devuelve la frase
     * 
     */
    miFrase () {
        console.log(`${this.nombre} dice: ${this.frase}`);
    }
}



//const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');


class Heroe extends Persona{

    clan = '';
    constructor ( nombre, codigo, frase, clan) {
        super( nombre, codigo, frase );
        this.clan = clan;
    }

    quienSoy() {
        console.log('sobreescribo el metodo');
        super.quienSoy();
    }
}

const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman', 'Avengers');
console.log(spiderman);

spiderman.quienSoy();

