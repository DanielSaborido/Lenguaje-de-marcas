var numero=prompt("Escribe el número de la tababla que deseas ver")
numero=parseInt(numero)
function tabla_n(numero){
    for (i=0;i<11;i++){
        multiplicacion=i*numero
        return numero+" x "+i+" = "+multiplicacion+"<br>"
    }
}
alert(tabla_n(numero))