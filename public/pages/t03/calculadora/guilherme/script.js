 
function operar(operacao){
    vavar historico=[];
function operar(operacao){
    var elementos = document.getElementsByClassName("numeros");
    var elemento1 = elementos[0];
    var elemento2 = elementos[1];
    var elemento1valor = parseInt(elemento1.value);
    var elemento2valor = parseInt(elemento2.value);
  
    var resultado = document.getElementById("resultado");
     switch (operacao){
     case "+":
     resultado.value = elemento1valor + elemento2valor;
     break;
     case "-":
     resultado.value = elemento1valor - elemento2valor;
     break;
     case "/":
     if(elemento2valor == 0){
     return resultado.value = "Erro!";
  }
       resultado.value = elemento1valor / elemento2valor;
       break;
       case "*":
       resultado.value =  multiplicacao(elemento1valor , elemento2valor);
       break;
       case "limpar":
       resultado.value= " "
       elemento1.value = " "
       elemento2.value = " "
       break;
       case "zerar":
       elemento1.value = 0
       elemento2.value = 0
       break;
       case"trocar": 
       var trocar =  elemento1valor;
       elemento1.value = elemento2valor;
       elemento2.value= trocar;
       break;
    }
  historico.push(resultado.value);
 }
function multiplicacao (elemento1valor , elemento2valor){
  var somatorio = 0;
  for(var contador=0;contador<elemento1valor; contador++){
      somatorio = somatorio + elemento2valor;
    }
  return somatorio;
}
function anterior(){
  var ultimo =  historico.pop();
   var resultado_historico = document.getElementById("resultado_historico");
  resultado_historico.innerHTML = ultimo;
}
function ver_historico( ){
  for (var i=0; i < historico.length; i++){
    alert(historico[i]);
  }
 }
 function limpar_historico(){
  historico = [];
 }r elemento1 =document.getElementById("valor_1");
    var elemento2 = document.getElementById("valor_2");
    var elemento1valor = parseInt(elemento1.value);
    var elemento2valor = parseInt(elemento2.value);
    var resultado = document.getElementById("resultado");
  
  var elementosEntrada =  document.getElementsByClassName("entrada")
  var elementosSaida =  document.getElementsByClassName("saida")
  
    switch (operacao){
   case "+":
  
       resultado.value = elemento1valor + elemento2valor;
     break;
      case "-":
       resultado.value = elemento1valor - elemento2valor;
       break;
        case "/":
         if(elemento2valor == 0) {
          resultado.value = "deu erro";
    } else{
           resultado.value = elemento1valor / elemento2valor;
        }
      
       break;
        case "*":
       resultado.value = elemento1valor * elemento2valor;
       break;
      case "limpar":
        resultado.value= " ";
        elemento1.value = " ";
        elemento2.value = " ";
        break;
      case "zerar":
          elemento1.value = 0
        elemento2.value = 0
      case"trocar": 
        var trocar = elemento1.value;
        elemento1.value = elemento2.value;
        elemento2.value = trocar;
    }
 }

function multiplicaçao(elemento1valor , elemento2valor){
  var somatorio =0;
  for(var contador=0;contador<elemento1; contador++){
      somatorio = somatorio + elemento2valor;{
        return somatorio;
      }
  }
}
  var historico=[]
  var vetor = document.getElementsByClassName("entrada")
  
  function anterior(){
   for(var i=anterior.lenght-1; i>0; i--){
      alert(historico[i])
   }
    
  } 
function  historico(){
   for(var i= historico.lenght-1; i>0; i--){
      alert(historico[i])
   }
  function limparHistorico(){
   for(var i=historico.lenght-1; i>0; i--){
      alert(historico[i])
   }