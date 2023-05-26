const resultado = document.getElementById('resultado')
var myWindow;

var lnombres = [];
var ldni = [];
var lcorreo = [];

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
    var correo = document.getElementById("correo").value;

    if (campo1 == "" || dni == "" || correo == "") {
        alert("Faltan datos por introducirse.");
        return false;
    }

    var letras = /^[A-Za-z]+$/;
    if (!campo1.match(letras) || campo1.length < 3) {
        alert("El campo 1 no es valido.");
        return false;
    }

    var DNI = /^\d{8}[a-zA-Z]$/;
    if (!dni.match(DNI) || dni.length != 9) {
        alert("El dni no es valido.");
        return false;
    }

    var mail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!correo.match(mail)){
        alert("Correo mal introducido.");
        return false;
    }
    
    lnombres.push(campo1);
    ldni.push(dni);
    lcorreo.push(correo);
    genera_tabla();
}

function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < lnombres.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var textoCelda1 = document.createTextNode(lnombres[i]);
        var textoCelda2 = document.createTextNode(ldni[i]);
        var textoCelda3 = document.createTextNode(lcorreo[i]);
        celda1.appendChild(textoCelda1);
        celda2.appendChild(textoCelda2);
        celda3.appendChild(textoCelda3);
        hilera.appendChild(celda1);
        hilera.appendChild(celda2);
        hilera.appendChild(celda3);
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
}