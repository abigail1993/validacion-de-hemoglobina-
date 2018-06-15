function validar(){
    var edad= document.getElementById("edad").value;
    var nivel = document.getElementById("nivel").value;
    
    if(edad== 0|| nivel == 0){
        alert("Ingresa los datos solicitados");
        return false;
    }
    
    if (edad > 31){
        alert("Debe ser entre 1 a 30 o 31 dias");
        return false;
    }
    else if(isNaN(edad)){
           alert("TIENES QUE INGRESAR LA EDAD EN NUMEROS");
           return false;
        }


    if (nivel < 13){
        alert(edad+"días, "+nivel +"% es en nivel ingresado. El resultado es positivo para las pruebas de anemia.");
        return false;
    }   else if(isNaN(nivel)){
           alert("TIENES QUE INGRESAR EL NIVEL DE HEMOGLOBINA EN NUMEROS");
           return false;
        }
    
    alert(edad+"días, " + nivel+ "% es tu nivel ingresado. El resultado es negativo para las pruebas de anemia.");

}

