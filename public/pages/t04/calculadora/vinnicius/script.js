var historico = [];

 function soma(){
   var numero1 = parseInt(document.getElementById("a").value);
   var numero2 = parseInt(document.getElementById("b").value);
   var soma = numero1 + numero2;
 
   historico.push(numero1 + " + " + numero2 + " = " + soma);
 
   alert(soma);
}
 


 function sub(){
  var numero1 = parseInt(document.getElementById("a").value);
  var numero2 = parseInt(document.getElementById("b").value);
  var subtracao = numero1 - numero2;
 
  historico.push(numero1 + " - "+ numero2 + " = " + subtracao);
 
  alert(subtracao);
  }

function divisao(){
  var numero1 = parseInt(document.getElementById("a").value);
  var numero2 = parseInt(document.getElementById("b").value);
  var divisao = numero1 / numero2;
 
  historico.push(numero1 + "/" + numero2 + "=" + divisao);
 
  alert(divisao);
  }

function multi(){
  var numero1 = parseInt(document.getElementById("a").value);
  var numero2 = parseInt(document.getElementById("b").value);
  var multi = numero1 * numero2;
 
  historico.push(numero1 + "*" + numero2 + "=" + multi);
 
  alert(multi);
  }
 

 function pot(){
  var numero1 = parseInt(document.getElementById("a").value);
  var numero2 = parseInt(document.getElementById("b").value);
  var numero = 1
   for (var i = 0; i < numero2; i++){
    numero = numero * numero1;
   }
   
   historico.push(numero1 + "^" + numero2 + "=" + numero);
   
alert(numero);
   }
 
 function primo(){
var numero1 = parseInt(document.getElementById("a").value);
var numero2 = parseInt(document.getElementById("b").value);
var eprimo = true
for (var cont = numero1 - 1; cont > 1; cont--){

if(numero1 % cont == 0){
eprimo = false
}
}

if (eprimo){
alert(numero1 +" e primo");
   historico.push(numero1 +" e primo");
}else{
alert(numero1 +" nao e primo");
   historico.push(numero1 +" nao e primo");
}
   
   
 eprimo = true
for (var cont = numero2 - 1; cont > 1; cont--){

if(numero2 % cont == 0){
eprimo = false
}
}

if (eprimo){
alert(numero2 +" e primo");
   historico.push(numero2 +" e primo");
}else{
alert(numero2 +" nao e primo");
   historico.push(numero2 +" nao e primo");
}
 }
  

function fator(){
  var numero1 = parseInt(document.getElementById("a").value);
  var numero2 = parseInt(document.getElementById("b").value);
  var fatorial = 1;
 
  for (var i = 2; i <= numero1; i++){
    fatorial = fatorial * i;
  }
  historico.push(numero1 + "! =" + fatorial);
  alert(numero1 + "! =" + fatorial);
  
  
  fatorial = 1;
 
  for (var i = 2; i <= numero2; i++){
    fatorial = fatorial * i;
  }
  historico.push(numero2 + "! =" + fatorial);
  alert(numero2 + "!  =" + fatorial);
  
  
}

function AddHistorico(){
var resultado ="";
for(var cont = 0; cont < historico.length; cont++) {
var numero1 = parseInt(document.getElementById("a").value);
var numero2 = parseInt(document.getElementById("b").value);

resultado += (historico[cont] + "\n");


}
alert("seu historico é: \n" + resultado);
}