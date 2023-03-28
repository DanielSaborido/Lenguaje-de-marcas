function multriplicacion(){
    var num = document.getElementById("num").value;
    if (isNaN(num)) {alert("[ERROR] El valor introduciodo es un String.")}
    else if (Number.isInteger(parseInt(num))) {
        if (num.length > 17) {
            alert("[ERROR] El numero es demasiado largo (max 17 caracteres).");
            document.getElementById("num").value = "";
        }
        else{
            var estilo = "0px 0px 46px 25px rgba(26, 255, 0, 1), 0px 0px 27px 50px rgba(178, 12, 196, 1), 0px 0px 67px 75px rgba(0, 183, 255, 0.79)";
            var tabla = document.getElementById("tabla");
            tabla.innerHTML = "";
            tabla.style['boxShadow']= estilo;
            for (var i = 0; i <= 10; i++) {
                var fila = tabla.insertRow();
                var celda1 = fila.insertCell();
                var celda2 = fila.insertCell();
                var celda3 = fila.insertCell();
                var celda4 = fila.insertCell();
                var celda5 = fila.insertCell();
                celda1.innerHTML = num;
                celda2.innerHTML = "x";
                celda3.innerHTML = i;
                celda4.innerHTML = "=";
                celda5.innerHTML = (num*i);
            }
        }
    }
    else {alert("[ERROR] El valor introduciodo es un Float.")}
}

function reseteo(){
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("num").value = "";
}