function diasParaNiver() {
    const hoje = new Date();
    const diaSemana = hoje.getDay(2); //0=Dom, 1=Seg,...., 4=Quin
    let diasFaltando = 4 - diaSemana;

    if (diasFaltando < 0) {
        diasFaltando += 7;
       
    }
     document.getElementById("dias").textContent = diasFaltando 
    }

function atualizarHora(){
    const horaHtml = document.getElementById("hora");
    const agora = new Date();
    const hora = agora.getHours().toString(). padStart(2, '0');
    const minutos = agora.getMinutes(). toString(). padStart(2,'0');
    const segundos = agora.getSeconds(). toString(). padStart(2,'0');

    horaHtml.textContent = `${hora}:${minutos}:${segundos}`;
    
}

diasParaNiver();


setInterval(atualizarHora, 1000);
atualizarHora();