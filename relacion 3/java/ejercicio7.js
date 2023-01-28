var simbolo=prompt("Introduce el simbolo que deseas imprimir")
var numero=prompt("Introduce el número de veces que lo deseas imprimir")
function linea(simbolo,numero){
    for (i=0;i<=numero;i++){
        document.write(simbolo)
    }
}
linea(simbolo,numero)