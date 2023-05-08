const resultado = document.getElementById('resultado')
resultado.innerHTML = ''

function Validacion() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var calle = document.getElementById("calle").value;
    var numero = document.getElementById("numero").value;
    var codigop = document.getElementById("codigop").value;

    if (nombre == "" || apellidos == "" || edad == "" || calle == "" || numero == "" || codigop == "") {
        alert("Faltan datos por introducirse.");
        return false;
    }

    var letras = /^[A-Za-z]+$/;
    if (!nombre.match(letras) || nombre.length < 3) {
        alert("El nombre no es valido.");
        return false;
    }

    letras = /^[A-Za-z]+( [A-Za-z]+)*$/;
    if (!apellidos.match(letras) || apellidos.split(' ').some(a => a.length < 3)) {
        alert("El apellido no es valido.");
        return false;
    }

    var hoy = new Date();
    var fechaNacimiento = new Date(edad);
    var edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edadCalculada--;
    }
    if (edadCalculada < 1 || edadCalculada > 100) {
        alert("La edad no esta dentro del rango permitido.");
        return false;
    }

    if (codigop.length != 5 || isNaN(codigop)) {
        alert("El codigo postal no es valido.");
        return false;
    }

    resultado.innerHTML = "Formulario enviado correctamente.";
    return true;
}