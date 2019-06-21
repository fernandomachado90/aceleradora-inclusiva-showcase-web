var resultado = document.getElementById("resultado");
function somar (e){
    var valor_1 = parseInt(document.getElementById("valor_1").value)
    var valor_2 = parseInt(document.getElementById("valor_2").value);
  resultado.value = valor_1 + valor_2;
  }

function subtrair (e){
   var valor_1 = parseInt(document.getElementById("valor_1").value);
   var valor_2= parseInt(document.getElementById("valor_2").value);
   resultado.value = valor_1 - valor_2;
  }

function divisao (e){
  var valor_1 =  parseInt(document.getElementById("valor_1").value);
  var valor_2 =  parseInt(document.getElementById("valor_2").value);
   resultado.value = valor_1 / valor_2;
  }

function multiplicacao(e){
  console.log("OI")
    var valor_1 = parseInt(document.getElementById("valor_1").value);
    var valor_2 = parseInt(document.getElementById("valor_2").value);
    resultado.value = valor_1 * valor_2;
  }