function validar(){
    var edad= document.getElementById("edad").value;
    var nivel = document.getElementById("nivel").value;
    
    if(edad== 0|| nivel == 0){
        alert("Ingresa los datos solicitados");
        return false;
    }
    
    if (edad < 6 || edad >10){
        alert("Debe ingresar la edad entre 6  a 10 años.");
        return false;
    }else if(isNaN(edad)){
           alert("TIENES QUE INGRESAR TU EDAD EN NUMEROS");
           return false;
        }


    if (nivel < 12.6){
        alert(edad+" años, "+nivel +"% es en nivel ingresado. El resultado es positivo para las pruebas de anemia.");
        return false;
    }else if(isNaN(nivel)){
           alert("TIENES QUE INGRESAR TU NIVEL DE HEMOGLOBINA EN NUMEROS");
           return false;
        }

    alert(edad+" años, " + nivel+ "% es tu nivel ingresado. El resultado es negativo para las pruebas de anemia.");
}