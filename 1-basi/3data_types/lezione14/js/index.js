// let numero1 = 12;
// let numero2 = "5";

// const risultato = numero1 + numero2;
// const risultato2 = numero1 - numero2;

// console.log(risultato);
// console.log(risultato2);

const numero = 22;

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let input = document.getElementById("input").value;
    console.log(typeof (input)); //facendo cosi ottengo una stringa

    input = parseInt(input);
    console.log(typeof (input)); //facendo cosi ottengo un numero
})