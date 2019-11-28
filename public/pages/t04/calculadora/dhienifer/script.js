var historico = [];
function historico1(){

   var resultado = "";
   
  for(var cont=0;cont<historico.length;cont ++){
   resultado += (historico[cont] + "\n");
  }
   
   
    alert("Seu histórico é: \n" + resultado);
  }



function somar() {
 var input1 = document.getElementById("input1").value
 var input2 = document.getElementById("input2").value
 var result = parseInt(input1)+parseInt(input2);
 alert(result)
    
  historico.push(input1 + "+" + input2 + "=" + result)

}   
   
function subtração() {
   var input1 =document.getElementById("input1").value
      var input2 =document.getElementById("input2").value
      
      var result= parseInt(input2)- parseInt(input1)
      alert(result)
     historico.push(input1 + "-" + input2 + "=" + result)

   }    
    
   function multiplicação() {
   var input1 =document.getElementById("input1").value
 var input2 =document.getElementById("input2").value
  var result= parseInt(input2)* parseInt(input1)
      alert(result)
     historico.push(input1 + "*" + input2 + "=" + result)

   }   

   function  divisão() {
   var input1 =document.getElementById("input1").value
   var input2 =document.getElementById("input2").value
  var result= parseInt(input2)/ parseInt(input1)
  alert(result)
     historico.push(input1+ "/" + input2 + "=" + result)
   }   

function  pow () {
   var input1 = document.getElementById("input1").value
   var input2 = document.getElementById("input2").value
   var result= 1
  for(var cont = input2.value; cont>0; cont--){
    result = result * (input1.value)
  }  
  alert(result)
}


function primo(){
  

  
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  var cont = input1;
  
   alert(cont);
  var resultado = "";
 
  var contDivisores = 0;
  while(cont>0){
      
    if(input1 % cont==0){
      contDivisores +=1;
    }
    cont--;
   
  }
  
  if(contDivisores > 2){
   resultado = (input1 + " nao é primo!\n" );
  }else{
    resultado = (input1 + " é primo!\n");
    contDivisores = 0;
  }
 
  cont = input2;
  contDivisores = 0;
  while(cont>0){
   if(input2 % cont==0){
      contDivisores +=1;
    }
    cont--;
   
  }if(contDivisores > 2){
   resultado += (input2 + " Não é primo!");
  }else{
    resultado += (input2 + " é primo!");
    contDivisores = 0;
  }
 
  alert(resultado);
 
}


function  fatorial() {
   
 var input1 =document.getElementById("input1").value;
  var input2=document.getElementById("input2").value;
	var fatori1=1;
   for(var i = 1; i <=input1; i++) {
  fatori1 = fatori1 * i;

		}
    var resultado= "fatorial de "+ input1 + " é  " + fatori1;
  
   alert(resultado);
  
  var resultado= "fatorial de "+ input2 + " é  " + fatori1;
	
	 alert(resultado);
   

 }