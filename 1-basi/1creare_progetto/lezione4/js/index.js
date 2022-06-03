function stampa() {
    alert("ciao a tutti");
}
const btn = document.querySelectorAll(".button-lg");
btn.forEach(function (item) {
    item.addEventListener("click", stampa);
});