const carros = ['ford', 'mazda','toyota', 'honda'];

let i = 0
while ( carros[i] ) {

    if (i===1) {
        // break;
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}

let j = 0

do {
    console.log(carros[j]);
    j++ ;
} while ( false );






