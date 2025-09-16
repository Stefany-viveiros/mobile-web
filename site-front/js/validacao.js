const form = document.getElementById("newForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    

    //Condição
    if (email === "") {
        alert("Digite seu email");
        return false;
        
    } 
    form.reset();
});