var numero=prompt("Escribe el número de la tababla que deseas ver")
    numero=parseInt(numero)
    for (i=0;i<11;i++){
        multiplicacion=i*numero
        document.write(numero+" x "+i+" = "+multiplicacion+"<br>")
    }