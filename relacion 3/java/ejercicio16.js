var num=prompt("Escribe un número para calcular su factorial")
num=parseInt(num)
function factorial(num){
    let factorial=1
    for (i=num;i>0;i--){
        factorial=factorial*i
    }
    return "El factorial de "+num+" es: "+factorial
}
alert(factorial(num))