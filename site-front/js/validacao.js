const form = document.getElementById("newForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    

    //Condição de validação
    if (email === "") {
        alert("Digite seu email");
        return false;
    }    

    //Validação simples: tem @ e .
    if (!email.includes("@")|| !email.includes(".")) {
        alert("Email inválido, tente novamente");
        return;
    }

    alert("Email cadastrado com sucesso!✅")


    form.reset();
});