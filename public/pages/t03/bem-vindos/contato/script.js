function enviarEmail() {
  var conteudo = document.getElementById('conteudo').value;
  window.open("mailto:aceleradora-inclusiva@thoughtworks.com?subject=Contato&body="+conteudo,"_self");
}