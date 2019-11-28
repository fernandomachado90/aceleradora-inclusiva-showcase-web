function signo(){
 
  var dia  =  parseInt(document.getElementById("dia").value);
  var mes = parseInt(document.getElementById("mes").value);
  console.log("dia: " + dia);

   console.log("mes: " + mes);
    switch(mes){
      case 1: 
        if(dia >= 1 && dia <= 20){
          alert("capricornio");
        } else if(dia >= 21 && dia <= 31) {
          alert ("Aquario");
        }
        break;
      
      case 2:
        if(dia >= 1 && dia <= 19){
          alert("Aquario");
        } else if(dia >= 20 && dia <= 28){
          alert("Peixes");
        }
      
        break;
         
      case 3:
        if(dia >= 1 && dia <= 20){
         alert("Peixes"); 
        } else if(dia >= 21 && dia <= 31){
          alert("aries");
        }
        break;
       
      case 4:
        if(dia >= 1 && dia <= 20 ){
          alert("aries");
        }else if(dia >= 21 && dia <= 31){
          alert("touro");
        }
        break;
        
      case 5:
        if(dia >= 1 && dia <= 20){
          alert("touro");
        }else if(dia >= 21 && dia<= 31){
          alert("gemeos");
        }
        break;
        case 6:
        if(dia >= 1 && dia <= 20){
          alert("gemeos");
        }else if(dia >= 21 && dia<= 31){
          alert("cancer");
        }
        break;
         case 7:
        if(dia >= 1 && dia <= 21){
          alert("cancer");
        }else if(dia >= 22 && dia<= 31){
          alert("gemeos");
        }
        break;
        case 8:
        if(dia >= 1 && dia <= 21){
          alert("cancer");
        }else if(dia >= 22 && dia<= 31){
          alert("gemeos");
        }
        break;
        
        
        
       
       
    }
  
    
}