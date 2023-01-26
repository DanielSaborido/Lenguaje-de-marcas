let ini=prompt("Introduce un número entero");
let fin = prompt("Introduce un valor final");
fin = parseInt(fin);
ini = parseInt(ini);

function entero(ini, fin){
    while(ini<0 || ini<fin){    
        var ini = prompt("Introduce un número entero");
        ini=parseInt(ini);
        ini++;
    }
    return ini;
}
alert(entero(ini, fin));