const nombre = prompt("Introduce tu nombre");
const apellidos = prompt("Introduce tus apellidos separados por un espacio");
const [apell1, apell2, apell3] = apellidos.split(" ");

if (!nombre) {
    alert("El nombre no se introdujo.");
} else {
    if (!apell2) {
        alert("El segundo apellido no se introdujo.");
    } else {
        if (!apell3) {
            if (apell1.length >= 3){
                if (apell2.length >= 3) {
                    if (nombre.length >= 3) {
                        if (/^[a-zA-Z]+$/.test(apell1)) {
                            if (/^[a-zA-Z]+$/.test(apell2)) {
                                if (/^[a-zA-Z]+$/.test(nombre)) {
                                    document.getElementById("saludo").innerHTML = `Hola ${apell1} ${apell2}, ${nombre}.`;
                                } else {
                                    alert("El nombre tiene caracteres especiales");
                                }
                            } else {
                                alert("El segundo apellido tiene caracteres especiales");
                            }
                        } else {
                            alert("El primer apellido tiene caracteres especiales");
                        }
                    } else {
                        alert("El nombre es muy corto.");
                    }
                } else {
                    alert("El segundo apellido es muy corto.");
                }
            } else{
                alert("El primer apellido es muy corto.");
            }
        } else {
            alert("En españa solo hay 2 apellidos.");
        }
    }    
}
