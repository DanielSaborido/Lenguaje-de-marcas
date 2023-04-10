var dni = "12345678A";
var caracteres = "";
for (var i = 0; i < dni.length; i++) {
  var caracter = dni.charAt(i);
  if (i<=2) {caracteres += caracter;}
}
document.getElementById("caracteres").innerHTML = "Los tres primeros caracteres del dni son: "+caracteres;