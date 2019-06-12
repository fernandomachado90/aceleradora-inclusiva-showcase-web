 function mudacor() {
   window.document.getElementById("titulo").style.color =geraCorRandomica();
}

function geraCorRandomica() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}