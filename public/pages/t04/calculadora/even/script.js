var historico = [];

function somar(){
  var NumA = document.getElementById("a").value;
  var NumB = document.getElementById("b").value;
  
  var resultadoSoma = (parseInt(NumA) + parseInt(NumB));
  historico.push(NumA + "+" + NumB + " : " + resultadoSoma);
  alert("O resultado da sua soma é: " + resultadoSoma);
  
 }
function subtrair(){
  var NumA =document.getElementById("a").value;
  var NumB = document.getElementById("b").value;
  
  var resultadoSubtracao = parseInt(NumA) - parseInt(NumB);
  historico.push(NumA + "-" + NumB + " : " + resultadoSubtracao);
  alert("O resultado da subtração é: " + resultadoSubtracao);
  
 }
function multiplicar(){
  var NumA = document.getElementById("a").value;
  var NumB = document.getElementById("b").value;
  
  var resultadoMultiplicacao = parseInt(NumA) * parseInt(NumB);
  historico.push(NumA + "*" + NumB + " : " + resultadoMultiplicacao);
  alert("O resultado da sua multiplicação é: " + resultadoMultiplicacao);
  
 }
 function divisao(){
  var NumA = document.getElementById("a").value;
  var NumB = document.getElementById("b").value;
  
  var resultadoDivisao = parseInt(NumA) / parseInt(NumB);
   historico.push(NumA + "/" + NumB + " : " + resultadoDivisao);
   alert("O resultado da sua divisão é: " + resultadoDivisao);
 }  
function pow(){
  
    var NumA = document.getElementById("a").value;
    var NumB = document.getElementById("b").value;
  
  var resultado = 1;
  for(var cont = 0; cont < NumB; cont++){
    resultado = resultado * NumA;
  }
   historico.push(NumA + "^" + NumB + " : " + resultado);
   alert("pow: " + resultado);
  }
 function primo(){
   // Se for divisivel somente por ele mesmo e 1 === primo 
   var numero = document.getElementById("c").value;
   var cont = numero;
   var contDivisores = 0;
   while(cont >0){
     if(numero%cont == 0){
       console.log(contDivisores)
       contDivisores += 1;
   }
   cont--;
   }
   if(contDivisores > 2){
     console.log("não é primo")
      historico.push("O NÚMERO " + numero + " NÃO É PRIMO!" );
     alert("O numero: " + numero + " não é primo !" )
   } 
   else
   {
    console.log("é primo ! ")
    contDivisores = 0;
     historico.push("O NÚMERO " + numero + " É PRIMO!" );
     alert("O numero: " + numero + " é primo !" )
   } 
   
 }
function fatorial(){
  var numero = document.getElementById("d").value;
  var resultado = 1;
  
  for(var cont = numero; cont > 0; cont--){
    resultado *= cont;  
  }
  alert("a fatoração do numero " + numero + " é: " + resultado )
}
function mostrarHistorico(){
  
  var resultado = "";
  
   for(var cont = 0; cont<historico.length; cont++){
     resultado += (historico[cont] + "\n");
   }
  alert("Seu histórico é: \n" + resultado)
}