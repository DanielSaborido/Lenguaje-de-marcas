var texto=prompt("Introduce tu cadena de texto")
function comprobarCadena(texto){
    if (texto==texto.toUpperCase()){
        alert("El texto está escrito en mayúsculas")
    }
    else if (texto==texto.toLowerCase()){
        alert("El texto está escrito en minúsculas")
    }
    else if (texto!==texto.toUpperCase() && texto!==texto.toLowerCase()){
        alert("El texto contiene ambas")
    }
}
comprobarCadena(texto)