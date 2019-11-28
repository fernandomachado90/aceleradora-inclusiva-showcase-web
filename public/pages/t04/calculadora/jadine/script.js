var historico=[];

function historico1(){

   var resultado = "";   
for(var cont=0;cont<historico.length;cont ++){
   resultado += (historico[cont] + "\n");
  }  
    alert("Seu histórico é: \n" + resultado);
  }
           
function somar(){
                var input1 = document.getElementById('valor1').value 
                var input2 = document.getElementById('valor2').value 
                var result = parseInt(input2) + parseInt(input1);
                alert(result)
                historico.push(input1 + " + " + input2 + " = " + result);
            
             }
            function subitrair(){
                var input1 = document.getElementById('valor1').value
                var input2 = document.getElementById('valor2').value
                 
                var result = parseInt(input2) - parseInt(input1) 
                historico.push(input1 + " - " + input2 + " = " + result);
                alert(result) 
            }
            function multiplicar(){
                var input1 = document.getElementById('valor1').value
                var input2 = document.getElementById('valor2').value  
                
                var result =  parseInt(input2) * parseInt(input1)
                alert(result)
              historico.push(input1 + " x " + input2 + " = " + result);
            }

            function dividir(){
                var input1 = document.getElementById('valor1').value 
                var input2 = document.getElementById('valor2').value  
                
                var result =  parseInt(input2) / parseInt(input1) 
                alert(result)
              historico.push(input1 + " / " + input2 + " = " + result);
            }  
function POW(){
                var input1 = parseInt(document.getElementById('valor1').value)
                var input2 = parseInt(document.getElementById('valor2') .value)
                
                var resultado = 1
                for ( var potencia = 0; potencia < input2; potencia++ ){
                  resultado = resultado * input1
           
              }
                alert(resultado)
           historico.push(input1 + " ^ " + input2 + " = " + resultado);
            
}
    function teste(numero){

      var flag = 0;
      for ( var cont = numero -1; cont >1 ; cont-- ){
          if (numero % cont ==0){ 
             flag= 1;

       }
      }
          if(flag == 0){
            historico.push(numero + " é primo");
           alert(numero + " é primo");
      }else{
            historico.push(numero + " não é primo");
           alert(numero + " não é primo");
             flag = 0;  
      }
    }  
 
//fazer o fatorial ainda


    function primo() {
    var input1 = parseInt(document.getElementById('valor1').value);
    var input2 = parseInt(document.getElementById('valor2') .value);
  
teste(input1)
teste(input2) 
     
     }


    function fatorial(){
      var input1 = parseInt(document.getElementById('valor1').value);
      var input2 = parseInt(document.getElementById('valor2').value);
      
      var fatorial1 = 1;       
      for (var i = input1; i >= 1; i--){
        fatorial1 = fatorial1 * i;
      }
      
      var fatorial2 = 1;
      for (var i = 1; i <= input2; i++){
        fatorial2 = fatorial2 * i;
      }
      
      alert('fatorial de ' + input1 + ' é ' + fatorial1);
            historico.push("O fatorial de " + input1 + " = " + fatorial2);
      alert('fatorial de ' + input2 + ' é ' + fatorial2);
          historico.push("O fatorial de " + input2 + " = " + fatorial2);
      
    }