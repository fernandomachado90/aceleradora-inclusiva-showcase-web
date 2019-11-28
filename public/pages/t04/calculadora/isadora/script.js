var historico = [];

function soma(){
 var numero_1 = parseInt(document.getElementById("numero_1").value,10);
 var numero_2 = parseInt(document.getElementById("numero_2").value,10);
  var somar = numero_1 + numero_2
  //window.alert("soma: " + soma );
  document.getElementById("resultado").innerHTML=somar 
  historico.push(numero_1 + "+" + numero_2 + "=" + somar);
 

}

function subtracao (){
 var numero_1 = parseInt(document.getElementById("numero_1").value, 10);
 var numero_2 = parseInt(document.getElementById("numero_2").value, 10);
 var subtrair = numero_1 - numero_2
// window.alert("subtracao: " + subtracao);
 document.getElementById("resultado").innerHTML=subtrair  
 historico.push(numero_1 + "-" + numero_2 + "=" + subtrair);
}

function multiplicacao(){
 var numero_1 = parseInt(document.getElementById("numero_1").value, 10);
 var numero_2 = parseInt(document.getElementById("numero_2").value, 10);
 var multiplicar = numero_1 * numero_2
 //window.alert("multiplicacao: " + multiplicacao);
 document.getElementById("resultado").innerHTML=multiplicar
 historico.push(numero_1 + "*" + numero_2 + "=" + multiplicar); 
  
}
function divisao(){
 var numero_1 = parseInt(document.getElementById("numero_1").value, 10);
 var numero_2 = parseInt(document.getElementById("numero_2").value, 10);
 var dividir = numero_1 / numero_2
 //window.alert("divisao: " + divisao);
 document.getElementById("resultado").innerHTML=dividir
 historico.push(numero_1 + "/" + numero_2 + "=" + dividir);
  
}

function zerar(){
  var numero_1 = document.getElementById("numero_1");
  var numero_2 = document.getElementById("numero_2");
  
  numero_1.value = 0;
  numero_2.value = 0;
  resultado.innerHTML = 0;
}

function limpar(){
  var numero_1 = document.getElementById("numero_1");
  var numero_2 = document.getElementById("numero_2");
  
  numero_1.value = " ";
  numero_2.value = " ";
  resultado.innerHTML = " ";
  
}

function potencia(){
  var numero_1 = parseInt(document.getElementById("numero_1").value, 10);
  var numero_2 = parseInt(document.getElementById("numero_2").value, 10);
  var resultado = 1
  for(var pot=0; pot < numero_2; pot++){
     resultado =  resultado * numero_1
    
  }
   document.getElementById("resultado").innerHTML= resultado
 
  
}

function primo(){
  var numero_1 = parseInt(document.getElementById("numero_1").value);
  var numero_2 = parseInt(document.getElementById("numero_2").value);
  var cont = numero_1;
  var resultado = "";
  
  var contDivisores = 0;
  while(cont>0){
    if(numero_1 % cont==0){
      contDivisores +=1;
    }
    cont--;
    
  }if(contDivisores > 2){
   resultado = (numero_1 + " nao é primo!\n" );
  }else{
    resultado = (numero_1 + " é primo!\n");
    contDivisores = 0;
  }
  
  cont = numero_2;
  contDivisores = 0;
  while(cont>0){
    if(numero_2 % cont==0){
      contDivisores +=1;
    }
    cont--;
    
  }if(contDivisores > 2){
   resultado += (numero_2 + " nao é primo!");
  }else{
    resultado += (numero_2 + " é primo!");
    contDivisores = 0;
  }
  
  alert(resultado);
  
} 

function fatorial(){
  var fatore = 1;
  var numero_1 = document.getElementById("numero_1").value

for(var cont = 1; cont <= numero_1; cont++){
    fatore=fatore*cont;
}
  document.getElementById("resultado").innerHTML = fatore;
}

function ver_historico(){
 var resultado = " ";
 for(var i = 0; i < historico.length; i++){
   resultado += (historico[i] + "\n");
 }
 window.alert("Seu historico é: \n" +  resultado);
}