var base=prompt("Introduce la base")
var altura=prompt("Introduce la altura")
base=parseInt(base)
altura=parseInt(altura)
function area(base, altura) {
    for (i=1;i<=altura;i++) {
        for (j=1;j<=base;j++) {
            if (i===1||i===altura||j===1||j===base){
                document.write("#")
            }
            else{
                document.write("&nbsp;&nbsp;")
            }
        }
        document.write("<br>")
    }
}
area(base, altura)