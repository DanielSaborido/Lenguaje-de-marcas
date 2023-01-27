var edad=prompt("Escriba su edad")
var saldo=prompt("Introduzca su saldo")
edad=parseInt(edad)
saldo=parseInt(saldo)
if (edad>=18 & saldo>=50){
    alert("Puedes seguir jugando")
}
if (edad<18){
    alert("No puedes seguir jugando por ser menor de edad")
}
if (saldo<50){
    alert("No puedes seguir jugando por saldo insuficiente")
}