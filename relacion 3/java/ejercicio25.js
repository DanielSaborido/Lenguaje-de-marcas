var numero=prompt("Escribe un número")
numero=parseInt(numero)
var producto=1
function producto(numero){
    if (numero<=0){
        return "El numero introducido es menor de 1"
    }
    else{
        for (i=1; i<=numero; i++){
            producto*=i
        }
    return "El producto total total desde 1 al "+numero+" es: "+producto
    }
}
alert(producto(numero))