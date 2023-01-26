var ini=prompt("Valor inicial");
ini=parseInt(ini);
var fin=prompt("Valor final");
fin=parseInt(fin);
function ordena_limites(ini, fin){
    if (ini> fin){
        let ini2 = ini++;
        alert("Incrementando valor... ");
        alert(ini2 + " + 1 = " +ini );
    }
    else{
        alert("Nada pasó");
    }
}
ordena_limites(ini, fin);