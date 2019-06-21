var historico=[]
function calcular(e,operacao){ 
  var resultado = document.getElementById("resultado");
  var valor_1 = parseInt(document.getElementById("valor_1").value);
  var valor_2 = parseInt(document.getElementById("valor_2").value); 
        switch(operacao){       
        case "+":
            resultado.value = valor_1 + valor_2;  
          break;
        case "-":
             resultado.value = valor_1 - valor_2;
          break;
        case "*": 
             resultado.value = valor_1 * valor_2;
          break; 
        case "/":
            resultado.value = valor_1 / valor_2;
          break;
              default:
             alert("algo de errada não esta certo")
        } 
  historico.push(resultado.value)
}

function limpar() {
  var elemento1 = document.getElementById("valor_1");
  var elemento2 = document.getElementById("valor_2");
  
  elemento1.value = "";
  elemento2.value = "";
}

function zerar() {
  var elemento1 = document.getElementById("valor_1");
  var elemento2 = document.getElementById("valor_2");
  
  elemento1.value = "0";
  elemento2.value = "0";
}
function trocar() {
  var elemento1 = document.getElementById("valor_1");
  var elemento2 = document.getElementById("valor_2");
  
  var valor_para_trocar = elemento1.value;
  
  elemento1.value = elemento2.value;
  elemento2.value = valor_para_trocar;
  
}
function ver_historico(){
  for(var i =0;i <historico.length; i++){
    alert (historico[i]);
  }
}

function limpar_historico(){
  historico=[];
  var resultado = document.getElementById("resultado"); 
  resultado.value=" ";
}
 function anterior(){
    alert(historico.pop());
  }