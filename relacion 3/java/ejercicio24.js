var numero=prompt("Escribe un número")
numero=parseInt(numero)
var suma=0
function suma(numero){
    if (numero<=0){
        return "El numero introducido es menor de 1"
    }
    if (numero=1){
        return "La suma total desde 1 al "+numero+" es: "+numero
    }
    else{
        for (i=1; i<=numero; i++){
            suma+=i
        }
    return "La suma total desde 1 al "+numero+" es: "+suma
    }
}
alert(suma(numero))