function comprobacion(){
    var num = document.getElementById("num").value;
    if (isNaN(num)) {alert("[ERROR] El valor introduciodo es un String.")}
    else if (Number.isInteger(parseInt(num))) {
        if (num%2==0){ alert("El numero es par.") }
        else{ alert("El numero es impar.") }
    }
    else {alert("[ERROR] El valor introduciodo es un Float.")}
}