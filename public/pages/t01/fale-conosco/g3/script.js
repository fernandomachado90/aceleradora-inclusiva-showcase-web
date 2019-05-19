function enviarEmail(){
  var nome = document.getElementById('nome').value;
  var mensagem = document.getElementById('msg').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('tel').value;
  var subject = "Contato de " + nome;
  
  var body = mensagem + "\r\n" + 
  "e-mail: " + email + "\r\n" + 
  "telefone: " + telefone + "\r\n";
  
  body = encodeURIComponent(body);

  
  window.open('mailto:aceleradora-inclusiva@outlook.com?' + 
              'subject=' + subject + '&' +
              'body=' + body,
              '_self');
} 