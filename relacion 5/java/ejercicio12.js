var dni = "12345678A";
var numeros = "";
for (var i = 0; i < dni.length; i++) {
  var caracter = dni.charAt(i);
  if (isNaN(caracter)) {} 
  else {
    numeros += caracter;
  }
}
document.getElementById("numeros").innerHTML = "Los numeros del dni son: "+numeros;