var trimestre1=prompt("Escribe la nota del primer trimestre");
var trimestre2=prompt("Escribe la nota del segundo trimestre");
var trimestre3=prompt("Escribe la nota del tercer trimestre");
trimestre1=parseFloat(trimestre1)
trimestre2=parseFloat(trimestre2)
trimestre3=parseFloat(trimestre3)
var total=((trimestre1+trimestre2+trimestre3)/3)
total=parseFloat(total)
console.log(total)
if (trimestre1<5){
    alert("El primer triestre esta suspenso.")
}
if (trimestre2<5){
    alert("El segundo triestre esta suspenso.")
}
if (trimestre3<5){
    alert("El tercer triestre esta suspenso.")
}
else{
    alert("La asignatura esta aprobada.")
}