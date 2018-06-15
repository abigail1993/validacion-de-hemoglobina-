function validar(){
    var edad= document.getElementById("edad").value;
    var nivel = document.getElementById("nivel").value;
    
    if(edad== 0|| nivel == 0){
        alert("Ingresa los datos solicitados");
        return false;
    } 
    
    if (edad > 6){
        alert("Debe ingresar la edad entre 1 a 6 meses.");
        return false;
    }
    else if(isNaN(edad)){
           alert("TIENES QUE INGRESAR TU EDAD EN NUMEROS");
           return false;
        }


    if (nivel < 10){
        alert(edad+" meses, "+nivel +"% es en nivel ingresado. El resultado es positivo para las pruebas de anemia.");
        return false;
    }   else if(isNaN(nivel)){
           alert("TIENES QUE INGRESAR TU NIVEL DE HEMOGLOBINA EN NUMEROS");
           return false;
        }

    alert(edad+" meses, " + nivel+ "% es tu nivel ingresado. El resultado es negativo para las pruebas de anemia.");
}