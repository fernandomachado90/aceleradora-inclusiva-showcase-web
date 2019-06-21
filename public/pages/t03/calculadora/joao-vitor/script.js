 var historico=[];
 
 function verHistorico() {
   for(var i=0; i < historico.length; i++){
     console.log(historico[i]);
   }
 }

function limparHistorico(){
  historico = [];
}

function anterior(){
  var resultado = document.getElementById("resultado");
  resultado.value = historico.pop();
}

function somar(e){
  var resultado = document.getElementById("resultado");
  resultado.value = 1+1;
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  var resultado = document.getElementById("resultado");
  resultado.value = valor_a + valor_b;
  historico.push(resultado.value);
}
function divisao (e){
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  var resultado = document.getElementById("resultado");
  resultado.value = valor_a / valor_b;
  historico.push(resultado.value);
}

function subtracao (e){
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  var resultado = document.getElementById("resultado");
  resultado.value = valor_a - valor_b;
  historico.push(resultado.value);
}

function multiplicacao (e){
  var valor_a = parseInt(document.getElementById("valor_1").value);
  var valor_b = parseInt(document.getElementById("valor_2").value);

  var resultado = document.getElementById("resultado");

   //resultado.value = valor_a * valor_b;
   resultado.value = multiplicar(valor_a , valor_b);
    historico.push(resultado.value);
} 

function multiplicar(valorum1 , valordois2){ 
  var resultado =0;
    
  for (var contador=1;contador<=valorum1;contador++){
    resultado = resultado + valordois2;
  }
    return resultado;
}  
 

 /* Learn how to create this and much more with this email course:

https://cssanimation.rocks/courses/animation-101/

MANY THANKS TO @tadywankenobi for the following JS to handle the text in the byline:

The following JS takes in the byline and splits it into letters, each one wrapped in a span. We need to create the spans as nodes, we can't just add them to the HTML using innerHTML, as to do so would mean the CSS won't affect the span because it doesn't recognise the tag as existing. It's an old problem we run into time and again.

*/

var byline = document.getElementById('byline');     // Find the H2
bylineText = byline.innerHTML;                                      // Get the content of the H2
bylineArr = bylineText.split('');                                   // Split content into array
byline.innerHTML = '';                                                      // Empty current content

var span;                   // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
  span = document.createElement("span");                    // Create a <span> element
  letter = document.createTextNode(bylineArr[i]);   // Create the letter
  if(bylineArr[i] == ' ') {                                             // If the letter is a space...
    byline.appendChild(letter);                 // ...Add the space without a span
  } else {
        span.appendChild(letter);                       // Add the letter to the span
    byline.appendChild(span);                   // Add the span to the h2
  }
}

Resources