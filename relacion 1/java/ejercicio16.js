let numero=prompt("introduce un número");
function factorial(numero){
    let resultado=1;
    for (i=1; i <= numero; i++){
        resultado *= i
    }
    return resultado
}
alert(factorial(numero));