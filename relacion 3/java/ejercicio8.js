var numero=prompt("Introduce la altura de la piramide")
var simbolo=prompt("Introduce el simbolo que deseas imprimir")
function piramide(simbolo,numero){
    for (i=0;i<=numero;i++){
        let fila=simbolo.repeat(i)+"<br>"
        document.write(fila)
    }
}
piramide(simbolo,numero)