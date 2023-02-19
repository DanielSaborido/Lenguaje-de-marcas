const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

document.getElementById("dias").innerHTML = dias
dias.reverse()
document.getElementById("revertido").innerHTML = dias
dias.sort()
document.getElementById("alfabetico").innerHTML = dias
for (dia in dias){
    if (dias[dia]=='Lunes')
    document.write("El Lunes esta en la posicion "+dia)
}
