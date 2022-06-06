// come creare un oggetto 
const persona = {
    nome: 'Enzo',
    cognome: 'Goduria',
    age: 33,
    isRetired(age) {
        return age > 60;
    }
};
console.log(persona);
console.log(persona.isRetired(persona.age));

// accedere i suoi valori
console.log(persona.nome);
console.log(persona.cognome);
console.log(persona.age);

//associare un un valore ad un oggetto esempio
const figli = ['Maurizio', 'Anna'];
persona.figli = figli;
console.log(persona);

