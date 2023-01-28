var numero=prompt("Escribe un número para calcular su factorial")
var factorial=1
numero=parseInt(numero)
for (i=numero;i>0;i--){
    factorial=factorial*i
    console.log(factorial)
}
alert("El factorial de "+numero+" es: "+factorial)