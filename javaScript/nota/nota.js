//Variaveis 
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");

//Função
function resultadoNotaClick(event) {
    event.preventDefault();
    console.log(inputNota.value);
   
    
    if (inputNota.value >=6) {
       resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";

    
    inputNota.value = "";
}
}