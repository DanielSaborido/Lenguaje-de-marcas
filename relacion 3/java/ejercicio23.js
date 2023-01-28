var min=prompt("Introduce el valor mínimo")
min=parseInt(min)
var max=prompt("Introduce el valor máximo")
max=parseInt(max)
function sumaTotal(min, max){
    for(i=min; i<=max; i++){
        document.write(i+" ")
    }
}
sumaTotal(min,max)