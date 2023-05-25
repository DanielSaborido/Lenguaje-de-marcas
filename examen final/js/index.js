var myWindow;

var intervalId; // Variable para almacenar el ID del intervalo

// Variables de la cuenta regresiva
var m1 = 2;
var s2 = 0;
var s1 = 0;

// Función que se ejecuta al abrir la página y define lo que se hace cada segundo
function cuentaAtras() {
    // Definimos acciones que se realizan cada cierto tiempo usando setInterval
    // El tiempo se expresa en milisegundos.
    // En este caso, se ejecuta marchaAtras cada 500 milisegundos.
    intervalId = setInterval(marchaAtras, 1000);
}

// Función que actualiza los números de la cuenta regresiva
function actualizarNumeros() {
    document.getElementById("cuenta1").src ="../img/numeros/"+ s1 + ".png";
    document.getElementById("cuenta2").src ="../img/numeros/"+ s2 + ".png";
    document.getElementById("cuenta3").src ="../img/numeros/"+ m1 + ".png";
}

// Función que se ejecuta cada segundo para la cuenta regresiva
function marchaAtras() {
    if (s1 > 0) {
        s1 -= 1;
    }
    if (s1 == 0 && s2 > 0) {
        s1 = 9;
        s2 -= 1;
    }
    if (s1 == 0 && s2 == 0 && m1 > 0) {
        s1 = 9;
        s2 = 5;
        m1 -= 1;
    }
    if (s1 == 0 && s2 == 0 && m1 == 0) {
        setTimeout(function() {
            window.close();
        }, 1000);
    }
    actualizarNumeros();
}

function Validacion() {
    var campo1 = document.getElementById("campo1").value;
    var dni = document.getElementById("dni").value;
    var opciones = document.getElementById("opciones").value;

    if (opciones == "longitud") {
        if (campo1 == "") {
            alert("No se ha puesto ningun texto.");
            return false;
        }

        var letras = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
        if (!campo1.match(letras) || campo1.length < 3) {
            alert("El campo 1 no es valido.");
            return false;
        }

        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El texto 1 "+campo1+" tiene "+campo1.length+" caracteres de longitud.</p>");
    }

    if (opciones == "maymin") {
        if (campo1 == "") {
            alert("No se ha puesto ningun texto.");
            return false;
        }

        var letras = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
        if (!campo1.match(letras) || campo1.length < 3) {
            alert("El campo 1 no es valido.");
            return false;
        }

        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El texto 1 "+campo1+" tiene "+campo1.length+" caracteres de longitud.</p>");
    }

    if (opciones == "numdni") {
        if (dni == "") {
            alert("Faltan datos por introducirse.");
            return false;
        }

        var DNI = /^\d{8}[a-zA-Z]$/;
        if (!dni.match(DNI) || dni.length != 9) {
            alert("El dni no es valido.");
            return false;
        }

        var numeros = "";
        for (var i = 0; i < dni.length; i++) {
          var caracter = dni.charAt(i);
          if (isNaN(caracter)) {} 
          else {
            numeros += caracter;
          }
        }
        
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>Los numeros del dni son: "+numeros+"</p>");
    }

    if (opciones == "letradni") {
        if (dni == "") {
            alert("Faltan datos por introducirse.");
            return false;
        }

        var DNI = /^\d{8}[a-zA-Z]$/;
        if (!dni.match(DNI) || dni.length != 9) {
            alert("El dni no es valido.");
            return false;
        }

        var letra = "";
        for (var i = 0; i < dni.length; i++) {
          var caracter = dni.charAt(i);
          if (isNaN(caracter)) {letra += caracter;}
        }
        
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>La letra del dni es: "+letra+"</p>");
    }
    return true;
}