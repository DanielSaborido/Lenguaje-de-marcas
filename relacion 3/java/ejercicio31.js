var texto=prompt("Escribe un texto")
var parametro=prompt("Escribe el parametro a contar")
function contar_a(texto,parametro){
    return "Las veces que sale  una 'a' es: "+texto.toLowerCase().split(parametro).length - 1
}
alert(contar_a(texto,parametro))