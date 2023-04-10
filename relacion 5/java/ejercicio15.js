var dni = "12345678A";
var numeros = "";
var caracteres = "";
for (var i = 0; i < dni.length; i++) {
  var caracter = dni.charAt(i);
  if (isNaN(caracter)) {} 
  else {
    numeros += caracter;
  }
}
for (var i = 0; i < numeros.length; i++) {
  var caracter = numeros.charAt(i);
  if (i>=((numeros.length)-4)) {caracteres += caracter;}
}
document.getElementById("caracteres").innerHTML = "Los cuatro ultimos digitos del dni son: "+caracteres;