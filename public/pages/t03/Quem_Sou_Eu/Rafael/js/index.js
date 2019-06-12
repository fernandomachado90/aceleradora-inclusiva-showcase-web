

function mudarCordoTextoParaRosa() {
    var elemento = document.getElementById("txt");
    elemento.style.color = "#ff00ae";
  }

document.getElementById("btn_pink").addEventListener("click",mudarCordoTextoParaRosa);


function mudarCordoTextoParaAzul() {
    var elemento = document.getElementById("txt");
    elemento.style.color = "#1d00ff";
  }
document.getElementById("btn_blue").addEventListener("click",mudarCordoTextoParaAzul);

function mudarCordoTextoParaVerde() {
    var elemento = document.getElementById("texto");
    elemento.style.color = "#08ff00";
  }