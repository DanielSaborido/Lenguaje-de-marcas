function Edad(){
    let edad=document.getElementById("edad").value
    parseInt(edad)
    if(edad>100){
        alert("Eres mayor de 100 años.")
        return false
    }
    if(edad<=18){
        alert("Eres menor de 18 años.")
        return false
    }
    else{
        return true
    }
}

function Telefono(){
    let telefono=document.getElementById("telefono").value
    if (telefono.match("(^6|^7)[0-9]{8}")){
        return true     
    }
    else{
        alert("Telefono mal introducido.")
        return false
    }
}

function Correo(){
    let correo=document.getElementById("correo").value
    if (correo.match( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ )){
        return true
    }
    else{
        alert("Correo mal introducido.")
        return false
    }
}

function Validacion(){
    Edad()
    Telefono()
    Correo()
    if (Edad() && Telefono() && Correo()){
        document.write("Respuestas guardadas correctamente")
    }
}