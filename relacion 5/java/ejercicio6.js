const nombre = prompt("Introduce tu nombre");
const apellidos = prompt("Introduce tus apellidos separados por un espacio");

function validarNombre(nombre) {
    return /^[a-zA-Z]+$/.test(nombre) && nombre.length >= 3;
}

function validarApellido(apellido) {
    return /^[a-zA-Z]+$/.test(apellido) && apellido.length >= 3;
}

if (!nombre) {
    alert("El nombre no se introdujo.");
} else if (!apellidos) {
    alert("Los apellidos no se introdujeron.");
} else if (apellidos.split(" ").length > 2) {
    alert("En España solo hay 2 apellidos.");
} else {
    const [apell1, apell2] = apellidos.split(" ");
    if (!validarNombre(nombre)) {
        alert("El nombre es muy corto o contiene caracteres especiales.");
    } else if (!apell2) {
        alert("El segundo apellido no se introdujo.");
    } else if (!validarApellido(apell1)) {
        alert("El primer apellido es muy corto o contiene caracteres especiales.");
    } else if (!validarApellido(apell2)) {
        alert("El segundo apellido es muy corto o contiene caracteres especiales.");
    } else {
        document.getElementById("saludo").innerHTML = `Hola ${apell1} ${apell2}, ${nombre}.`;
    }
}
