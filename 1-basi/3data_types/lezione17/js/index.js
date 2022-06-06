const prova = [1, 2, 3, 4, 5, 5, 5, 5];
console.log(prova);

//per eliminare i duplicati
const esempio = new Set(prova);
console.log(esempio);
//controllo se un valore ce
console.log(esempio.has(5));
// aggiungo un valore ad un SET
esempio.add(45);
console.log(esempio);