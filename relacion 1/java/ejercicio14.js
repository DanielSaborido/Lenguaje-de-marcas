var ini=prompt("Introduce el valor de entrada");
var fin=prompt("Introduce el valor de final");
ini=parseInt(ini);
fin=parseInt(fin);
function primo(num){
    if (num<2){
        return false
    }
    for(i = 2;i < num; i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}
for (j = ini; j <= fin; j++){
    if (primo(j)){
        document.write(j+" ");
    }
}
alert(primo(fin));