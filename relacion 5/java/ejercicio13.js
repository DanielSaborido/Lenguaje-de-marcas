var dni = "12345678A";
var letra = "";
for (var i = 0; i < dni.length; i++) {
  var caracter = dni.charAt(i);
  if (isNaN(caracter)) {letra += caracter;}
}
document.getElementById("letra").innerHTML = "La letra del dni es: "+letra;