var max=prompt("Introduce un valor maximo")
max=parseInt(max)
var min=prompt("Introduce un valor minimo")
min=parseInt(min)
var num=prompt("Introduce un número entero")
num=parseInt(num)
function entero(num,max,min){
    while(num<min || num>max){
        var num=prompt("Introduce un número entero")
        num=parseInt(num)
    }
    return num
}
alert(entero(num,max,min))