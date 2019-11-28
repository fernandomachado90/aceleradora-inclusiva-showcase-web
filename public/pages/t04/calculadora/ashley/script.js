function soma(){
  var numero_1 = parseInt(document.getElementById("numero_1").value,10);
  var numero_2 = parseInt(document.getElementById("numero_2").value,10);
  var soma = numero_1 + numero_2
  //window.alert("soma" + soma );
  document.getElementById("resultado").value=soma
  
}
function subtracao(){
 var numero_1 = parseInt(document.getElementById("numero_1").value, 10);
 var numero_2 = parseInt(document.getElementById("numero_2").value, 10);
 var subtracao = numero_1 - numero_2
// window.alert("subtracao" + subtracao);
 document.getElementById("resultado").value=subtracao
 
  
}
function multiplicacao(){
 var numero_1 = parseInt(document.getElementById("numero_1").value, 10);
 var numero_2 = parseInt(document.getElementById("numero_2").value, 10);
 var multiplicacao = numero_1 * numero_2
 //window.alert("multiplicacao" + multiplicacao);
 document.getElementById("resultado").value=multiplicacao
  
}
function divisao(){
 var numero_1 = parseInt(document.getElementById("numero_1").value, 10);
 var numero_2 = parseInt(document.getElementById("numero_2").value, 10);
 var divisao = numero_1 / numero_2
 //window.alert("divisao" + divisao);
 document.getElementById("resultado").value=divisao

}
function zerar(){
  var numero_1 = document.getElementById("numero_1");
  var numero_2 = document.getElementById("numero_2");
  
  numero_1.value=0;
  numero_2.value=0;
  document.getElementById("resultado").value=0
}

function limpar(){
  var numero_1 = document.getElementById("numero_1");
  var numero_2 = document.getElementById("numero_2");
  numero_1.value=" ";
  numero_2.value=" ";
 document.getElementById("resultado").value=" ";
}

function potencia(){
  var numero_1 = parseInt(document.getElementById("numero_1").value, 10);
  var numero_2 = parseInt(document.getElementById("numero_2").value, 10);
  var resultado= 1
  for(var pot=0;pot < numero_2; pot++){
    resultado= resultado * numero_1;
  }
   document.getElementById("resultado").value=resultado;
}

function fatorial(){
  var fatore=1;
  var numero_1 = document.getElementById("numero_1").value;

for(var cont = 1; cont <= numero_1; cont++){
    fatore=fatore*cont;
}
  document.getElementById("resultado").value = fatore;
}
function primos(){
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