
const heroes = ['Batman', 'Superman', 'MujerMaravilla', 'Aquaman'];

console.warn ('For TRadicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
};

console.warn ('For in');
for (const elemento in heroes) {

    console.log(heroes[elemento]);
}

console.warn ('For of');
for (const hero of heroes) {
    console.log(hero);
}

