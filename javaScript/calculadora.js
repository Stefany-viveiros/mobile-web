//Varivel
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

//Função
function soma(event) {
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    resultado.innerHTML = Number(num1.value) + Number(num2.value);
    num1.value = "";
    num2.value = "";
}

function Sub(event) {
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    resultado.innerHTML = Number(num1.value) - Number(num2.value);
    num1.value = "";
    num2.value = "";
}

function Multiplicação(event) {
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    resultado.innerHTML = Number(num1.value) * Number(num2.value);
    num1.value = "";
    num2.value = "";
}

function divisao(event) {
    event.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    resultado.innerHTML = Number(num1.value) / Number(num2.value);
    num1.value = "";
    num2.value = "";
}