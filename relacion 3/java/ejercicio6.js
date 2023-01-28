function piramide(){
    let numero=prompt("Introduce la altura de la piramide")
    numero=parseInt(numero)
    let simbolo=prompt("El simbolo que deseas usar")
    for (i=1; i<=numero; i++) {
        let fila=simbolo.repeat(i)+"<br>"
        document.write(fila)
    }
}
piramide()