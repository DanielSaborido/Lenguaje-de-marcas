function piramide(){
    let numero=prompt("Número de altura de la piramide");
    let caracter=prompt("El caracter que deseas usar");
    numero=parseInt(numero);
    for (i=1; i<=numero; i++) {
        let line=caracter.repeat(i) + "<br>";
        document.write(line);
    }
}
piramide();