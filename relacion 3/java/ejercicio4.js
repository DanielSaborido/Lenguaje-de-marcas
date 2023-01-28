function piramide(){
    let numero=5
    for (i=1; i<=numero; i++) {
        let fila="△".repeat(i)+"<br>"
        document.write(fila)
    }
}
piramide()