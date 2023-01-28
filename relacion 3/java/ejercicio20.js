var lista=[]
var listaAprobados=[]
var listaSuspensos=[]
function addToList(){
    let nota=document.getElementById("text").value
    nota=parseFloat(nota)
    var notaredondeada=Math.round(nota)
    lista.push(notaredondeada);
    document.getElementById("form").reset()
    console.log(lista)
}
function detectEnter(event){
    if(event.keyCode===13){
        addToList()
    }
}
function comprobarNota(lista){
    for (i=0; i<lista.length;i++){
        if(i>=5){
            listaAprobados.push(lista[i])
        }
        else if(i<5){
            listaSuspensos.push(lista[i])
        }
    }
}

function aprobados(){
    alert(listaAprobados)
}
function suspensos(){
    alert(listaSuspensos)
}