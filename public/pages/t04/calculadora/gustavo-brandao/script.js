var historico = []

function mostrarHistorico(){
	var resultado = "";
	for(var cont=0; cont < historico.length; cont++){
		resultado  += (historico[cont]+ "\n" )
		
	}
	alert(resultado)
}
function somar() {
	var input1 = document.getElementById('numero1')
	var input2 =document.getElementById('numero2')
     
	var resultado= parseInt(input1.value)+parseInt(input2.value)
		alert(resultado)
		historico.push(input1.value+" + "+ input2.value +" = "+resultado)
    }  
   
function subtracao() {

    var input1 = document.getElementById('numero1')
    var input2 = document.getElementById('numero2')
     
    var result = parseInt(input1.value) - parseInt(input2.value)
        alert(result)
		historico.push(input1.value+" - "+ input2.value +" = "+result)
    } 
   
function multiplicacao() {

    var input1 = document.getElementById('numero1')
    var input2 = document.getElementById('numero2')
    var result = parseInt(input1.value)* parseInt(input2.value)
		alert(result)
		historico.push(input1.value+" * "+ input2.value +" = "+result)
    }  

function  divisao() {
    var input1 =document.getElementById('numero1')
    var input2 =document.getElementById('numero2')
    var result= parseInt(input1.value)/ parseInt(input2.value)
		alert(result)
		historico.push(input1.value+" / "+ input2.value +" = "+result)
    }  
	
	
function pow(){
   var numero_1 = parseInt(document.getElementById("numero1").value);
   var numero_2 = parseInt(document.getElementById("numero2").value);
   var resultado = 1
   for(var pot=0; pot < numero_2; pot++){
		resultado =  resultado * numero_1
    
	}
   alert(resultado);
   historico.push(numero1.value+" ^ "+ numero2.value +" = "+resultado);
	}

function primo(){
   var numero_1 = parseInt(document.getElementById("numero1").value);
   var numero_2 = parseInt(document.getElementById("numero2").value);
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
  historico.push(resultado)
  
} 
function fatorial(){
  var fatore = 2;
  var numero_2 = document.getElementById("numero_1").value

for(var cont = 2; cont <= numero_1; cont++){
    fatore=fatore*cont;
}
historico.push(numero1.value+" + "+ numero2.value +" = "+result)
}