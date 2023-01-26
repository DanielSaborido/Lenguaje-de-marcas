function piramide(){
    let numero=prompt("Introduce la altura de la piramide");
    var simbolo=prompt("Introduce el simbolo que deseas imprimir");
    linea(simbolo);
    numero=parseInt(numero);
    for (i=1; i<=numero; i++) {
        let line=simbolo.repeat(i) + "<br>";
        document.write(line);
    }
}   
function linea(simbolo){
    for (i=0;i<10;i++){
        document.write(simbolo);
    }
}
piramide();