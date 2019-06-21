function calcular(e, operacao) {
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  switch (operacao) {
    case "+":
      var resultado = document.getElementById("resultado");
      resultado.value = valor_a + valor_b;
      break;
    case "-":
      var resultado = document.getElementById("resultado");
      resultado.value = valor_a - valor_b;
      break;
    default:
      alert('Algo errado aconteceu')
  }
} 




/*
function somar (e){
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  var resultado = document.getElementById("resultado");
  resultado.value = valor_a + valor_b;
}*/
function divisao (e){
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  var resultado = document.getElementById("resultado");
  resultado.value = valor_a / valor_b;
}
function subtracao (e){
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  var resultado = document.getElementById("resultado");
  resultado.value = valor_a - valor_b;
}
function multiplicacao (e){
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  var resultado = document.getElementById("resultado");
  resultado.value = valor_a * valor_b;
}