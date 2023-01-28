let max=prompt("Introduce un valor maximo")
max=parseInt(max)
let num=prompt("Introduce un número entero")
num=parseInt(num)
function entero(num,max){
    while(num<0 || num>max){
        var num=prompt("Introduce un número entero")
        num=parseInt(num)
    }
    return num
}
alert(entero(num,max))