var nota=prompt("Escribe una nota")
if (nota>=0,nota<4){
    alert("Insuficiente")
}
if (nota>=4,nota<5){
    alert("Suficiente")
}
if (nota>=5,nota<7){
    alert("Bien")
}
if (nota>=7,nota<=8){
    alert("Notable")
}
if (nota>=9,nota<=10){
    alert("Sobresaliente")
}
else{
    alert("La nota introducida no es valida.")
}