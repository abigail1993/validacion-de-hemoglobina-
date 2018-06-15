function validar(){
    var edad= document.getElementById("edad").value;
    var nivel= document.getElementById("nivel").value;
    var opciones=document.getElementsByName("genero");

//solicita de datos requeridos
    if(edad === ""  || nivel === ""){
        alert("ingresa los datos requeridos");
        return false;
    } 
    
    if(edad.length > 2){
        alert("ingresa la edad con numeros");
        return false;
    }
        for(i=0; i<edad.length; i ++){
           if(isNaN(parseInt(edad.charAt(i)))==true){
              alert("solo se permiten numeros");
               return false;
            }
        }
//hasta aquise valida que sea edad con numeros    
    for(i=0; i<opciones.length; i ++){
      if(opciones[0].checked== true|| opciones[1].checked== true){
      }else{
        alert("debes seleccionar un genero");
        return false;
      }
    };


 
    if(nivel.length > 4){
        alert("ingresa el nivel de hemoglobina");
        return false;
    }
        for(i=0; i<nivel.length; i++){
            if(isNaN(nivel.charAt(i))==true){
                alert("ingresa tu nivel correcto");
                return false;
            }
        }
       


    alert (edad  +  nivel);//aqui es donde tiene  verse todo los resultados
    form.submit();
}

