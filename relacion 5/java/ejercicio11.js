var pruebas = "Hola y adios";
const letra = "a"
const primeraletra = pruebas.indexOf(letra);
const ultimaletra = pruebas.lastIndexOf(letra);

if (primeraletra === -1) {
  document.getElementById("prim").innerHTML = "No se encontró la letra "+letra+" en la cadena.";
} else {
  document.getElementById("prim").innerHTML = "La primera letra "+letra+" se encuentra en la posición "+primeraletra;
}

if (ultimaletra === -1) {
  document.getElementById("ult").innerHTML = "No se encontró la letra "+letra+" en la cadena.";
} else {
  document.getElementById("ult").innerHTML = "La última letra "+letra+" se encuentra en la posición "+ultimaletra;
}