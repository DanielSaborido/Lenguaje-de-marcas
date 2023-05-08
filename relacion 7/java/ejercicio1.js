const resultado = document.getElementById('resultado');
resultado.innerHTML = '';

function Validacion(){
    var nombre1=document.getElementById("Jugador1").value;
    var nombre3=document.getElementById("Jugador3").value;
    var nombre2=document.getElementById("Jugador2").value;

    if (nombre1.length<2 || nombre1.length>20){
        alert("La longitud del nombre no es valida.");
        return false;
    }

    if (nombre2.length<2 || nombre2.length>20){
        alert("La longitud del nombre no es valida.");
        return false;
    }

    if (nombre3.length<2 || nombre3.length>20){
        alert("La longitud del nombre no es valida.");
        return false;
    }
    
    resultado.innerHTML = 'La informacion se envio correctamente';
    alert("Formulario enviado correctamente.");
    return true;
}