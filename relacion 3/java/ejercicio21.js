var nota=prompt("Escribe la nota")
function nota(nota){
    if (nota>=0,nota<4){
        return "Insuficiente"
    }
    if (nota>=4,nota<5){
        return "Suficiente"
    }
    if (nota>=5,nota<7){
        return "Bien"
    }
    if (nota>=7,nota<=8){
        return "Notable"
    }
    if (nota>=9,nota<=10){
        return "Sobresaliente"
    }
    else{
        return "La nota introducida no es valida."
    }
}