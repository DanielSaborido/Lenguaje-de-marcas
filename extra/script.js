function Nombre(){
    var nombre=document.getElementById("nombre").value
    if (nombre.length<2){
        alert("La longitud del nombre no es valida.")
        return false
    }
    else{
        console.log(nombre+" valida")
        return true
    }
}

function Apellidos(){
    var apellido=document.getElementById("apellido").value
    if (apellido.length<2){
        alert("La longitud del apellido no es valida.")
        return false
    }
    else{
        console.log(apellido+" valida")
        return true
    }
}

function Edad(){
    var edad=document.getElementById("edad").value
    parseInt(edad)
    if(edad<18){
        alert("La edad introducida no es valida.")
        return false
    }
    if (edad>=100){
        alert("La edad introducida no es valida.")
        return false
    }
    else{
        console.log(edad+" valida")
        return true
    }
}

function Telefono(){
    var telefono=document.getElementById("telefono").value
    if (telefono.startsWith("6") || telefono.length(9)){
        console.log(telefono+" valido")
        return true
    }
    else{
        alert("Telefono mal introducido.")
        return false
    }
}

function Correo(){
    var correo=document.getElementById("correo").value
    if (correo.match(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)){
        console.log(correo+" valido")
        return true
    }
    else{
        alert("Correo mal introducido.")
        return false
    }
}

function Validacion(){
    Nombre()
    Apellidos()
    Edad()
    Telefono()
    Correo()
    if (Nombre() || Apellidos() || Edad() || Telefono() || Correo()){
        alert("Respuestas guardadas correctamente")
    }
    else{
        alert("Algo ha fallado")
    }
}