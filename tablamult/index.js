function multriplicacion(){
    var num = document.getElementById("num").value;
    if (isNaN(num)) {alert("[ERROR] El valor introduciodo es un String.")}
    else if (Number.isInteger(parseFloat(num))) {
        var tabla = document.getElementById("tabla");
        tabla.innerHTML = "";
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
    else {alert("[ERROR] El valor introduciodo es un Float.")}
}

function reseteo(){
    location.reload();
}