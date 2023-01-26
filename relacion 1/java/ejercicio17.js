let numero=prompt("Introduce un número entero");
numero=parseInt(numero);
function entero(numero){
    while(numero<0){
        var numero=prompt("Introduce un número entero");
    }
    return numero
}
alert(entero(numero));