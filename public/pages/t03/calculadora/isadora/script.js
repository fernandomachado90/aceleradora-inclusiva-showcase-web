var resultado = document.getElementById("resultado");
var historico = [];



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

function multiplicar(a, b){
       var resultado = 0
       for(var i=0; i<b; i++){
      resultado = resultado + a;
 }
return resultado;
}
function somar(a, b){
       var resultado = 0
       resultado = a+b;
       return resultado;
}
function subtrair(a, b){
       var resultado = 0
       resultado= a-b;
       return resultado;
}
function divisao(a,b){
   var resultado = 0
  resultado= a/b;
  return resultado;
  
}
 function operacao(oper) {
  var val1 = parseInt(document.getElementById("valor_1").value);
  var val2 = parseInt(document.getElementById("valor_2").value);
  var input_resultado= document.getElementById("resultado");
  var numero;
  switch(oper) {
    case "-":
      numero=subtrair(val1,val2);
      historico.push(numero);
      break;
    case "+":
      numero=somar(val1,val2);
      historico.push(numero);
      break;
    case "*":
      numero=multiplicar(val1,val2);
      historico.push(numero);
      break;
    case "/":
      numero=divisao(val1,val2);
      historico.push(numero);
      }
  
  if(numero <=0 && document.getElementByClassName.checked == true){
    numero = 0;
  }
  input_resultado.value = numero;
   
  
}
//****************** historico *************************//
function verHistorico(){
  for(var i=0; i<historico.length; i++){
    alert(historico[i]);
  }
}function anterior(){
  alert(historico[historico.length-2]);
}
function limparhistorico(){
  historico = [];
}


//****************** historico *************************//