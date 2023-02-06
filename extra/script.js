function Edad(){
    let edad=document.getElementById("edad").value
    parseInt(edad)
    if(edad>=18 && edad<=100){
        console.log(edad+" valida")
        return true
    }
    else{
        alert("La edad introducida no es valida.")
    }
    return false
}

function Telefono(){
    let telefono=document.getElementById("telefono").value
    if ((telefono.match(/(^6|^7)[0-9]{9}/)) && (length(telefono)==9)){
        console.log(telefono+" valido")
        return true
    }
    else{
        alert("Telefono mal introducido.")
        return false
    }
}

function Correo(){
    let correo=document.getElementById("correo").value
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
    Edad()
    Telefono()
    Correo()
    if (Edad() && Telefono() && Correo()){
        alert("Respuestas guardadas correctamente")
    }
    else{
        alert("Algo ha fallado")
    }
}