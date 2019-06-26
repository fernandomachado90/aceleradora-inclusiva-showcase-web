function mostrarConteudo(e){
  var listaDeTarefas = e.target.nextElementSibling;
  if(listaDeTarefas.style.display == "" || listaDeTarefas.style.display == "none"){
    listaDeTarefas.style.display = "block";
  }else {
     listaDeTarefas.style.display = "none";
  }
}