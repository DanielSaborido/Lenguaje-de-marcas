var numero=prompt("Escribe un número")
numero=parseInt(numero)
function primo_no(numero){
    for (i=2; i<=(numero-1); i++){
        if (numero%i==0){
            return "No es primo"
        }
    }
    return "Es primo"
}
alert(primo_no(numero))