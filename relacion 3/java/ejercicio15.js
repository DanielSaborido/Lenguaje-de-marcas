var num=prompt("Escribe un número")
num=parseInt(num)
var expo=prompt("Introduce el exponente a calcular")
expo=parseInt(expo)
function exponencial(num,expo){
    let exponencial=num**expo
    return "El exponencial de "+num+" elevado a "+expo+" es: "+exponencial
}
alert(exponencial(num,expo))