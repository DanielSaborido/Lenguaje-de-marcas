var texto=prompt("Introduce tu texto")
texto=texto.toLowerCase()
function palindromo(texto){
    if (texto===texto.split("").reverse().join("")){
        alert("El texto es un palindromo")
    }
    else{
        alert("El texto no es un palindromo")
    }
}
palindromo(texto)