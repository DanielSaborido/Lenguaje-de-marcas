var numero=prompt("Escribe un número")
numero=parseInt(numero)
var valor=0
for (i=2;i<=(numero-1);i++){
    if (numero%i==0){
        valor=1
    }
}
if (valor=1){
    document.write("No es primo")
}
if (valor=0){
    document.write("Es primo")
}