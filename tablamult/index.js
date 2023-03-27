function multriplicacion(){
    var num = document.getElementById("num").value;
    num=parseInt(num);
    if (isNaN(num)){alert("El numero no es un entero.")}
    else{
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
}

function reseteo(){
    location.reload();
}