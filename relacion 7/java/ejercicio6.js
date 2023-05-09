const resultado = document.getElementById('resultado')
resultado.innerHTML = ''

function Validacion() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var direccion = document.getElementById("direccion").value;
    var comentarios = document.getElementById("comentarios").value;
    var telefono = document.getElementById("telefono").value;
    var codigop = document.getElementById("codigop").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var provincia = document.getElementById("provincias").value;
    var sexo = document.getElementById("genero").value;
    var condiciones = document.getElementById("condiciones").checked;
	var aviso = document.getElementById("aviso").checked;

    if (nombre == "" || apellidos == "" || direccion == "" || comentarios == "" || telefono == "" || edad == "" || codigop == "" || correo == "") {
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

    if (telefono.length != 9 || isNaN(telefono)) {
        alert("El telefono no es valido.");
        return false;
    }

    if (codigop.length != 5 || isNaN(codigop)) {
        alert("El codigo postal no es valido.");
        return false;
    }

    if (edad < 0) {
        alert("La edad no es valida.");
        return false;
    }

    var mail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!correo.match(mail)){
        alert("Correo mal introducido.");
        return false;
    }

    if (provincia == "Elegir" || sexo == "Elegir") {
        alert("No has modificado el select.");
        return false;
    }

    if (!condiciones || !aviso) {
        alert("Debe aceptar las Condiciones Generales y Avisos Legales para continuar.");
        return false;
    }

    resultado.innerHTML = "Formulario enviado correctamente.";
    alert("Formulario enviado correctamente.");
    return true;
}