var numero=prompt("Escribe un número")
numero=parseInt(numero)
for (i=numero-1;i>0;i--){
    numero=numero*i
    console.log(numero)
}
alert(numero)