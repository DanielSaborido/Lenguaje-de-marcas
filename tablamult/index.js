function multriplicacion(){
    var num = document.getElementById("num").value;
    if (isNaN(num)) {alert("[ERROR] El valor introduciodo es un String.")}
    else if (Number.isInteger(parseInt(num))) {
        if (num.length > 15) {
            alert("[ERROR] El numero es demasiado largo (max 15 caracteres).");
            document.getElementById("num").value = "";
        }
        else{
            var estilo = "0px 0px 46px 25px rgba(26, 255, 0, 1), 0px 0px 27px 50px rgba(178, 12, 196, 1), 0px 0px 67px 75px rgba(0, 183, 255, 0.79)";
            var tabla = document.getElementById("tabla");
            tabla.innerHTML = "";
            tabla.style['boxShadow']= estilo;
            for (var i = 0; i <= 10; i++) {
                var div1 = document.createElement("div");
                div1.innerHTML = i;
                tabla.appendChild(div1);

                var div2 = document.createElement("div");
                div2.innerHTML = " x ";
                tabla.appendChild(div2);

                var div3 = document.createElement("div");
                div3.innerHTML = num;
                tabla.appendChild(div3);

                var div4 = document.createElement("div");
                div4.innerHTML = " = ";
                tabla.appendChild(div4);

                var div5 = document.createElement("div");
                div5.innerHTML = (num*i);
                tabla.appendChild(div5);
            }
        }
    }
    else {alert("[ERROR] El valor introduciodo es un Float.")}
}

function reseteo(){
    var estilo = "";
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = "";
    tabla.style['boxShadow']= estilo;
    document.getElementById("num").value = "";
}