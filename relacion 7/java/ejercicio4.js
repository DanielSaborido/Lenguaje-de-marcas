const resultado = document.getElementById('resultado')
resultado.innerHTML = ''

function Validacion() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var opcion = document.getElementById("opciones").value;

    if (nombre == "" || edad == "" || correo == "") {
        alert("Faltan datos por introducirse.");
        return false;
    }

    var letras = /^[A-Za-z]+$/;
    if (!nombre.match(letras) || nombre.length < 3) {
        alert("El nombre no es valido.");
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

    if (opcion == "Elegir") {
        alert("No has modificado el select.");
        return false;
    }

    resultado.innerHTML = "Formulario enviado correctamente.";
    alert("Formulario enviado correctamente.");
    return true;
}