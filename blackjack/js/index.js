var myWindow;

function suma(){
    var num1 = document.getElementById("primernum").value;
    var num2 = document.getElementById("segundonum").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    console.log(num1)
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    if (isNaN(num2)){alert("El segundo numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = num1+num2;
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El resultado de la suma es: "+(num1+num2)+"</p>");
    }
}
function resta(){
    var num1 = document.getElementById("primernum").value;
    var num2 = document.getElementById("segundonum").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    if (isNaN(num2)){alert("El segundo numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = num1-num2;
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El resultado de la resta es: "+(num1-num2)+"</p>");
    }
}
function multriplicacion(){
    var num1 = document.getElementById("primernum").value;
    var num2 = document.getElementById("segundonum").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    if (isNaN(num2)){alert("El segundo numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = num1*num2;
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El resultado de la multriplicacion es: "+(num1*num2)+"</p>");
    }
}
function division(){
    var num1 = document.getElementById("primernum").value;
    var num2 = document.getElementById("segundonum").value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    if (isNaN(num1)){alert("El primer numero es un String.")}
    if (isNaN(num2)){alert("El segundo numero es un String.")}
    else{
        document.getElementById("resultado").innerHTML = num1/num2;
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El resultado de la division es: "+(num1/num2)+"</p>");
    }
}
function producto(){
    var num1 = document.getElementById("primernum").value;
    var num2 = document.getElementById("segundonum").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    if (isNaN(num2)){alert("El segundo numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = Math.pow(num1, num2);
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El resultado del producto es: "+Math.pow(num1, num2)+"</p>");
    }
}
function raizcua(){
    var num1 = document.getElementById("primernum").value;
    num1=parseInt(num1);
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = Math.sqrt(num1);
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El resultado de la raiz es: "+(Math.sqrt(num1))+"</p>");
    }
}
function porcentaje(){
    var num1 = document.getElementById("primernum").value;
    var num2 = document.getElementById("segundonum").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    if (isNaN(num2)){alert("El segundo numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = (num1*num2)/100;
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El "+num2+"% de "+num1+" es: "+((num1*num2)/100)+"</p>");
    }
}

function octal(){
    var num1 = document.getElementById("primernum").value;
    num1=parseInt(num1);
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = num1.toString(8);
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El numero en octal es: "+(num1.toString(8))+"</p>");
    }
}
function binario(){
    var num1 = document.getElementById("primernum").value;
    num1=parseInt(num1);
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = num1.toString(2);
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El numero en biario es: "+(num1.toString(2))+"</p>");
    }
}
function hexadecimal(){
    var num1 = document.getElementById("primernum").value;
    num1=parseInt(num1);
    if (isNaN(num1)){alert("El primer numero no es un Int.")}
    else{
        document.getElementById("resultado").innerHTML = num1.toString(16);
        myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>El el numero en hexadecimal es: "+(num1.toString(16))+"</p>");
    }
}

function reseteo(){
    location.reload();
    myWindow.close();
}