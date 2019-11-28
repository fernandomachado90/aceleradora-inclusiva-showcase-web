function enviar(){
 
 var nome = document.getElementById('nome').value; 
 var dia =  parseInt(document.getElementById('dia').value);
 var mes =  parseInt(document.getElementById('mes').value);
if (mes < 1 || mes > 12){
 alert("Mês invalido");
} else if (dia < 1 || dia > 32){
  alert("Dia invalido");
} else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)){
  alert("Olá " + nome + ",\n seu signo é: Áries \n seu elemento é: Fogo \n seu planeta é: Marte \n sua pedra é: a Jaspe \n seu inferno astral é: Peixes \n e seu par perfeito é: Libra.");
} else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)){
  alert("Olá" + nome + ", \n seu signo é: Touro \n  seu elemento é: a Terra \n seu planeta é: Vênus \n sua pedra é: a Quartzo Rosa \n seu inferno astral é Áries \n seu par perfeito é Escorpião.");
} else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)){
  alert("Olá " + nome + ", \n  seu signo é Gêmeos \n seu elemento é Ar \n  seu planeta é Mercúrio \n  sua pedra é a Hematita \n  seu inferno astral é Touro  \n  seu par perfeito é Sargitário.");
} else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 21)){
  alert("Olá " + nome + ",\n seu signo é: Câncer \n  seu elemento é: Água \n  seu planeta é: Lua \n  sua pedra é: a Quartzo Verde \n  seu inferno astral é Gêmeos \n  seu par perfeito é Capricórnio.");
} else if ((mes == 7 && dia >= 22) || (mes == 8 && dia <= 22)){
  alert("Olám " + nome + ", \n  seu signo é Leão \n  seu elemento é Fogo \n  seu planeta é Sol \n  sua pedra é a Cristal \n seu inferno astral é: Câncer  \n  seu par perfeito é: Aquário.");
} else if ((mes == 8 && dia >= 22) || (mes == 9 && dia <= 23)){
  alert("Olá " + nome + ", \n  seu signo é: Virgem \n  seu elemento é: Terra \n  seu planeta é: Mercúrio \n  sua pedra é: a Ágata \n  seu inferno astral é: Leão  \n  seu par perfeito é: Peixes.");
} else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)){
 alert("Olá " + nome + ", \n  seu signo é: Libra \n  seu elemento é: Ar \n seu planeta é: Vênus \n sua pedra é: a Citrino \n  seu inferno astral é: Virgem  \n  seu par perfeito é: Áries.");
} else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)){
  alert("Olá " + nome + ", \n seu signo é: Escorpião \n seu elemento é: Água \n seu planeta é: Marte e Plutão \n sua pedra é: a Ágata de Fogo \n seu inferno astral é: Libra e seu par perfeito  \n  é: Touro.");
} else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)){
 alert("Olá " + nome + ", \n seu signo é: Sagitário, \n  seu elemento é: Fogo \n seu planeta é: Júpiter \n sua pedra é: a Quartzo Azul \n seu inferno astral é: Escorpião \n seu par perfeito é: Gêmeos.");
} else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)){
   alert("Olá " + nome + ", seu signo é: Capricórnio \n seu elemento é: Terra \n seu planeta é Saturno \n sua pedra é: a Ônix \n seu inferno astral é: Sagitário \n seu par perfeito é: Câncer.");
} else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)){
 alert("Olá " + nome + ",seu signo é: Aquário \n seu elemento é: Ar \n seu planeta é: Saturno e Urano \n sua pedra é: a Sodalita \n seu inferno astral  é: Capricórnio  \n  seu par perfeito é: Leão.");
} else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)){
  alert("Olá " + nome + ", seu signo é: Peixes, \n  seu elemento é: Água \n seu planeta é: Júpiter e Netuno \n  sua pedra é: a Ametista \n  seu inferno astral é: Aquário \n seu par perfeito é Virgem.");
} 
  
 

  
}