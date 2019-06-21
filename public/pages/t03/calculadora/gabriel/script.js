//window.prompt("Como é Seu Lindo Nome?");
//window.prompt("Quantos Anos o Lindo(a) que esta Lendo Tem?");
//window.prompt("Você sabe oque é Javascript?")
//window.prompt("Como você ficou sabendo que Javascript existe?")
//window.prompt("Você gostaria de Aprender Javascript?");
//window.prompt("vamos nessa?")
//window.alert("Obrigado por dar um pouco do seu tempo para participar da enquete!");
//console.log("Respondeeram Todas as perguntinhas?");

  var resultado = document.getElementById("Resultado");

function Somar(e){
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);
    Resultado.value = valor_a + valor_b;
}
function Multiplicar(e){
  var valor_c = parseInt(document.getElementById("valor_1").value);
  var valor_d = parseInt(document.getElementById("valor_2").value);
    Resultado.value = valor_c * valor_d;
}
function Subtrair(e){
  var valor_e = parseInt(document.getElementById("valor_1").value);
  var valor_f = parseInt(document.getElementById("valor_2").value);
    Resultado.value = valor_e - valor_f;
}
function Dividir(e){
  var valor_g = parseInt(document.getElementById("valor_1").value);
  var valor_h = parseInt(document.getElementById("valor_2").value);
    Resultado.value = valor_g / valor_h;
}
function Limpar(){
 var valor_i = document.getElementById("valor_1").value;
 var valor_j = document.getElementById("valor_1").value;
  valor_i.value = " ";
  valor_j.value = " ";
}