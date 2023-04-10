var pruebas = "abcdefghijklmn";
for (var i = 0; i < pruebas.length; i++) {
    var caracter = pruebas.charAt(i);
    if (caracter == "f") {
      document.getElementById("f").innerHTML="La letra f se encuentra en la posicion: "+i;
    }
    if (i == 11){
      document.getElementById("11").innerHTML="La letra que se encuentra en la posicion 11 es: "+caracter;
    }
}