const texto = prompt("Introduce tu texto");
var nuevaCadena = "";
if (/^[a-zA-Z]+$/.test(texto)) {
  for (var i = 0; i < texto.length; i++) {
    var caracter = texto.charAt(i);
    if (i%2==0) {
      nuevaCadena += caracter.toUpperCase();
    } else {
      nuevaCadena += caracter.toLowerCase();
    }
  }
  document.getElementById("texto").innerHTML = nuevaCadena;
}
else {alert("[ERROR] El valor introduciodo tiene numeros o caracteres especiales.")}