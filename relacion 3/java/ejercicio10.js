var inicio=prompt("Introduce el valor inicial")
inicio=parseInt(inicio)
var fin=prompt("Introduce el valor final")
fin=parseInt(fin)
function ordena_limites(ini,fin){
    if (ini>fin) {
        var temp=ini;
        ini=fin;
        fin=temp;
        return [ini, fin];
    }
    else{
        alert("El valor final es mayor al inicial")
    }
}
ordena_limites(inicio,fin)