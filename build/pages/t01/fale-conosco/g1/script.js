function enviarEmail(){
   var nome= document.getElementById("nome").value
   var  data= document.getElementById("date").value
   var genero =pegarValor("genero");
   var  number= document.getElementById("number").value
   var  number2= document.getElementById("number2").value
   var email= document.getElementById("email").value
   var estado= pegarValorDoSelect("estado");
   var cidade= document.getElementById("cidade").value
   var assunto= document.getElementById("assunto").value
   var mensagem= document.getElementById("mensagem").value
   
   var subject = assunto;
   var body = "Nome: " + nome + "\r\n" + "Nascimento: " + data  + "\r\n"  + "Gênero: " + genero  +  "\r\n"  + "Tel/Cel: " + number  +  "\r\n" + "Cel opcional: " + number2  +  "\r\n"  + "E-mail: " + email  +  "\r\n"  + "Estado: " + estado  +  "\r\n"  + "Cidade: " + cidade  +  "\r\n"  + "Assunto: " + assunto  +  "\r\n"  + "Mensagem: " + mensagem;
              
      body = encodeURIComponent(body)
  console.log(subject);
  console.log(body);
   
  window.open('mailto:aceleradora-inclusiva@outlook.com?' +
          'subject=' + subject + '&' +
          'body=' + body,
          '_self');
  
}
function pegarValor(nomeDoElemento) {
  var elementos= document.getElementsByName(nomeDoElemento);
  
  for(var i=0; i < elementos.length; i++) {
    if(elementos[i].checked){
      return elementos[i].value;
  }
}
}

function pegarValorDoSelect(nomeDoElemento){
  var select = document.getElementById(nomeDoElemento);
  return select[select.selectedIndex].value; 
}

  