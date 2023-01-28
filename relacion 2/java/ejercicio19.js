var numero=prompt("Escribe un número")
var numero=parseInt(numero)
var producto=1
if (numero<=0){
    alert("El numero introducido es menor de 1")
}
else{
    for (i=1;i<=numero;i++){
        producto*=i;
    }
alert("El producto total total desde 1 al "+numero+" es: "+producto)
}