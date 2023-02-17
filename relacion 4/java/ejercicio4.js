var notas_alumnos = []

var trimestre1 = parseFloat(prompt("Nota del primer trimestre."))
if (trimestre1>0 && trimestre1<10){
    notas_alumnos.push(trimestre1)
    var trimestre2 = parseFloat(prompt("Nota del segundo trimestre."))
    if (trimestre2>0 && trimestre2<10){
        notas_alumnos.push(trimestre2)
        var trimestre3 = parseFloat(prompt("Nota del tercer trimestre."))
        if (trimestre3>0 && trimestre3<10){
            notas_alumnos.push(trimestre3)
            alert("La nota media del alumno es: "+Math.round((trimestre1+trimestre2+trimestre3)/3))
        }
        else{
            alert("Elemento introducido no es valido.")
        }
    }
    else{
        alert("Elemento introducido no es valido.")
    }
}
else{
    alert("Elemento introducido no es valido.")
}