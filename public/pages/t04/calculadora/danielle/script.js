var historico=[];

function historico1(){

   var resultado = "";
   
  for(var cont=0;cont<historico.length;cont ++){
   resultado += (historico[cont] + "\n");
  }
   
   
    alert("Seu histórico é: \n" + resultado);
  }

function soma() {
                var input1 = document.getElementById('valor1').value 
                var input2 = document.getElementById('valor2').value  
                var result = parseInt(input2) + parseInt(input1);
                historico.push(input1 + "+" + input2  + "=" + result);
                alert(result)
            }

             function subtrair() {
                var input1 = document.getElementById('valor1').value 
                var input2 = document.getElementById('valor2').value  
                var result =  parseInt(input2) - parseInt(input1) 
                historico.push(input1 + "-" + input2  + "=" + result); 
                alert(result) 
            }
            function multiplicar() {
                var input1 = document.getElementById('valor1').value
                var input2 = document.getElementById('valor2').value
                var result =  parseInt(input2) * parseInt(input1)
                historico.push(input1 + "*" + input2  + "=" + result);
                alert(result)
            }

            function dividir() {
                var input1 = document.getElementById('valor1').value 
                var input2 = document.getElementById('valor2').value  
             
                var result =  parseInt(input2) / parseInt(input1) 
                historico.push(input1 + "/" + input2  + "=" + result); 
                alert(result)
            }


        function potencia() {
                var input1 = parseInt(document.getElementById('valor1').value)  
                var input2 = parseInt(document.getElementById('valor2').value)   
            
                var resultado = 1
           for(var potencia1 = 0; potencia1 < input1; potencia1++){
             resultado = resultado * input1;
               
             
             
           }
               historico.push(input1 + " elevado à " + input2  + "=" + resultado);
               alert(resultado); 
    
           
            }
          

          function primo() {
             
                var input1 = parseInt(document.getElementById('valor1').value)  
                var input2 = parseInt(document.getElementById('valor2').value)   
                var resultado1 = verificarPrimos(input1)
                var resultado2 = verificarPrimos(input2)
            
                alert(resultado1);
                historico.push(resultado1);
            
                alert(resultado2);
                historico.push(resultado2);
           }
                
      function verificarPrimos(d){
                var flag=0;
                for (var cont=d-1 ; cont>1; cont--){
                if (d % cont == 0) {
                flag=1;
                  }
                }
               if(flag==0){
                  return d + " é primo";
                }else{
                  return d + " não é primo";
                  flag=0;
                }
              
          }

           function fatorial() {
            var input1 = parseInt(document.getElementById('valor1').value)  
            var input2 = parseInt(document.getElementById('valor2').value)  
            var fatorial1=1;
              for (var cont=input1; cont>=1; cont--){
               fatorial1= fatorial1 *cont;
              }
                var fatorial2=1;
                for (var cont=input2; cont>=1; cont--){
                fatorial2= fatorial2 *cont;
           }
              
               alert('fatorial de ' + input1 + ' é ' + fatorial1);
               historico.push('fatorial de ' + input1 + ' é ' + fatorial1);
               alert('fatorial de ' + input2 + ' é ' + fatorial2);
               historico.push('fatorial de ' + input2 + ' é ' + fatorial2); 
       }