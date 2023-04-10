const email = prompt("Introduce tu dirección de correo electrónico:");
const [usuario, dominio] = email.split("@");

document.getElementById("usuario").innerHTML = `El nombre de usuario del correo es: ${usuario}`;
document.getElementById("dominio").innerHTML = `El dominio del correo es: ${dominio}`;