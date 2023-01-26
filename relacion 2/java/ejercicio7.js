var entrada=prompt("Escribe algo", "desconocido")
console.log(entrada)
if (entrada=="desconocido"){
    alert("no introdujo ningún valor, valor por defecto")
}
if (entrada== entrada.match(/^[A-Z][a-z]+$/)){
    alert("Hola, "+entrada)
}
if (entrada==entrada.match(/\s/g)){
    alert("Espacio en blanco")
}
if (entrada==null){
    alert("Cancelado")
}