const email = prompt("Introduce tu dirección de correo electrónico:");

function validar(correo) {
    return /^[a-zA-Z]+$/.test(correo);
}

function validarnombre(nombre) {
    return /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]+$/.test(nombre);
}

if (!email) {
    alert("El nombre no se introdujo.");
} else if (email.split("@").length > 2) {
    alert("Solo se permite un @");
} else if (email.split(".").length > 2) {
    alert("Solo se permite un .");
} else {
    const [nombre, direccion] = email.split("@");
    if (!validarnombre(nombre)) {
        alert("El nombre contiene caracteres especiales.");
    } else if (!direccion) {
        alert("La dirreccion de correo no se introdujo.");
    } else {
        const [usuario, dominio] = direccion.split(".");
        if (!validar(usuario)) {
            alert("La direccion contiene caracteres especiales.");
        } else if (!dominio) {
            alert("El dominio no se introdujo.");
        } else {
            document.getElementById("correo").innerHTML = `Nombre de usuario: ${nombre} <br>
            Dirreccion correo: ${usuario} <br>
            Dominio: ${dominio}.`;
        }
    }
}