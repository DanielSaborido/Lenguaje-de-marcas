const dni=prompt("Ingresa tu DNI");
const dniRegex=/^(\d{8})([A-Za-z])$/;
const match=dni.match(dniRegex);
var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
var number=match[1];
var letter=match[2];

console.log("Número: "+number);
console.log("Letra: "+letter);

if (number<0|| number>99999999){
    alert("Dni no es válido")
}
else{
    number=number%23
    console.log(number)
    var validarLetra=letras[number]
    console.log(validarLetra)
    if (letter==validarLetra){
        alert("Dni introducido correctamente")
    }
    else{
        alert("Error")
    }
}