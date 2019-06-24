var resultado = document.getElementById("resultado");

function naturais(){
  var input_naturais = document.getElementById("naturais");
  var naturais = 0
  if(naturais >= 0){
    document.getElementById("naturais").checked = true;
    
  }
  
}
function Trocar() {
  var input_primeiro = document.getElementById("valor_1");
  var input_segundo = document.getElementById("valor_2");

  var a = input_primeiro.value;
  var b = input_segundo.value;
  
  input_primeiro.value = b;
  input_segundo.value = a;
   
}

function Zerar() {
  var input_primeiro = document.getElementById("valor_1");
  var input_segundo = document.getElementById("valor_2");
  var input_resultado= document.getElementById("resultado");
  
  document.getElementById("naturais").checked = true;

  input_primeiro.value = 0;
  input_segundo.value = 0;
  input_resultado.value = 0;
  
}
function Limpar(){
  var input_primeiro = document.getElementById("valor_1");
  var input_segundo = document.getElementById("valor_2");
  var input_resultado= document.getElementById("resultado");
 
  input_primeiro.value = " ";
  input_segundo.value = " ";
  input_resultado.value = " ";
}


function operacao(oper) {
  var val1 = parseInt(document.getElementById("valor_1").value);
  var val2 = parseInt(document.getElementById("valor_2").value);
  var input_resultado= document.getElementById("resultado");
  
  switch(oper) {
    case "-":
      input_resultado.value=subtrair(val1,val2);
      break;
    case "+":
      input_resultado.value=somar(val1,val2);
      break;
    case "*":
      input_resultado.value=multiplicar(val1,val2);
      break;
    case "/":
        if (val2 == 0 ) { 
          input_resultado.value= "ERRO!";
        } else {
          input_resultado.value=dividir(val1,val2);
      }
    
  }
      historico.push(input_resultado.value);
      
  }
  function somar (a,b){
    return a+b;
  }
  function multiplicar (a,b){
   var resultado = 0;
   for (var contador=0; contador<b; contador++) {
     resultado = resultado + a;
   }
    return resultado;
  }
  function subtrair (a,b){
    return a-b;
  }
  function dividir (a,b){
    return a/b;
  }

var historico = []
var  vetor = document.getElementsByClassName("entrada")

function ver_historico (){
  for (var i=0; i < historico.length; i++){
    alert(historico[i])
  }
}
function limpar_historico(){
  historico = [];
}  
function anterior(){
  for(var i=historico.length-1; i>0; i--){
  alert(historico[i])
}
}