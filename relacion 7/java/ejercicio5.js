const resultado = document.getElementById('resultado')
resultado.innerHTML = ''

function Validacion() {
    var campo1 = document.getElementById("campo1").value;
    var campo2 = document.getElementById("campo2").value;
    var codigopost = document.getElementById("codigopost").value;
    var dni = document.getElementById("dni").value;
    var correo = document.getElementById("correo").value;
    var codigosCadiz = [];

    for (var i = 11000; i <= 11999; i++) {
        codigosCadiz.push(i);
    }

    if (campo1 == "" || campo2 == "" || codigopost == "" || dni == "" || correo == "") {
        alert("Faltan datos por introducirse.");
        return false;
    }

    var letras = /^[A-Za-z]+$/;
    if (!campo1.match(letras) || campo1.length < 3) {
        alert("El campo 1 no es valido.");
        return false;
    }

    if (codigopost.length != 5 || isNaN(codigopost) || !codigosCadiz.includes(codigopost)) {
        alert("El codigo postal no es valido.");
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

    resultado.innerHTML = "Formulario enviado correctamente.";
    alert("Formulario enviado correctamente.");
    return true;
}