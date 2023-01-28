var num=prompt("Introduce un número entero")
num=parseInt(num)
function entero(num){
    while(num<0){
        var num=prompt("Introduce un número entero")
        num=parseInt(num)
    }
    return num
}
alert(entero(num))