var numero=prompt("Escribe un número")
var numero=parseInt(numero)
var suma=0
if (numero<=0){
    alert("El numero introducido es menor de 1")
}
if (numero=1){
    alert("La suma total desde 1 al "+numero+" es: "+numero)
}
else{
    for (i=1;i<=numero;i++){
    suma+=i
    }
alert("La suma total desde 1 al "+numero+" es: "+suma)
}
