var nota1=prompt("Escribe la nota del primer trimestre");
var nota2=prompt("Escribe la nota del segundo trimestre");
var nota3=prompt("Escribe la nota del tercer trimestre");
nota1=parseInt(nota1)
nota2=parseInt(nota2)
nota3=parseInt(nota3)
var total=((nota1+nota2+nota3)/3)
total=parseInt(total)
console.log(total)
if (total<=5){
    alert("La asignatura esta suspensa.")
}
else{
    alert("La asignatura esta aprobada.")
}