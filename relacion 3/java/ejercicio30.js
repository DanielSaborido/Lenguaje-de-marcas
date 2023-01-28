var texto=prompt("Escribe un texto para contar sus a")
function contar_a(texto){
    return "Las veces que sale  una 'a' es: "+texto.toLowerCase().split("a").length - 1
}
alert(contar_a(texto))