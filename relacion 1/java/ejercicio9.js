var base=prompt("Introduce la base");
var altura=prompt("Introduce la altura");
base=parseInt(base);
altura=parseInt(altura);
function area(x, y) {
    for (let i=1; i<=y; i++){
        for (let j = 1;j <= x; j++){
            if(i === 1 || i === y || j === 1 || j === x){
                linea += "#";
            }
            else{
                linea += " ";
            }
        }
        console.log(linea);
    }
}
area(base, altura);