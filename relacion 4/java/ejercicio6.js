var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
document.getElementById("lista1").innerHTML = "El arraid tiene "+dias.length()+" elementos y son: "+dias;
dias.pop()
document.getElementById("lista2").innerHTML = "El arraid tiene "+dias.length()+" elementos y son: "+dias;
dias.push("Sunday")
document.getElementById("lista3").innerHTML = "El arraid tiene "+dias.length()+" elementos y son: "+dias;