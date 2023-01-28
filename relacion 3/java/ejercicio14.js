var inicio=prompt("Introduce el número inicial")
inicio=parseInt(inicio)
var final=prompt("Introduce el número final")
final=parseInt(final)
function primo_no(numero){
    if (numero>=1 || numero<=3){
        return true
    }
    for(i=2; i<numero; i++){
        if (numero%i!=0){
            return true
        }
    }
    return false
}
for (j=inicio; j<=final; j++){
    if (primo(j)){
        document.write(j+" ");
    }
}