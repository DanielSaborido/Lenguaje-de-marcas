// Almacenamos los nombres de las imágenes en una variable compleja.
// Se denomina tabla y se accede a los valores mediante el indice (empezando por 0).
// Por ejemplo: opciones[0] contiene "rajoy.png"
var opciones = ["../img/premios/dagas.png", "../img/premios/grimorios/ilusion.png", "../img/premios/moneda.png", "../img/premios/armadura.png", "../img/premios/arcos.png"];
var dagas = ["../img/armas/dagas/acero.png", "../img/armas/dagas/elfo.png", "../img/armas/dagas/cristal.png", "../img/armas/dagas/merunes.png"];
var armaduras = ["../img/personaje/asesino/piel.png", "../img/personaje/asesino/elfo.png", "../img/personaje/asesino/cristal.png", "../img/personaje/asesino/dragon.png"];
var arco = ["../img/armas/arcos/caza.png", "../img/armas/arcos/elfo.png", "../img/armas/arcos/cristal.png", "../img/armas/arcos/ruisenor.png"];
var ilusion = ["Valor", "Clarividencia", "Frenesis", "Invisibilidad", "Pacificar"];
var lista = [];
const imagen1 = document.getElementById("imag0");
const imagen2 = document.getElementById("imag1");
const imagen3 = document.getElementById("imag2");
const imagen4 = document.getElementById("imag3");
var dinero = 500;
document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
var progreso = document.getElementById("barpro")
// Almacenamos el indice de la imagen que esta en cada recuadro.
var cuadro = [0, 0, 0, 0];
// Almacenamos el setInterval de cada recuadro de forma independiente.
var intervaloRuleta = [null, null, null, null];
// Variable donde almacenamos el numero de recuadros que están cambiando.
var corriendo = 0;
// Intervalo del cambio de sombras.
var intervaloSombras;
var posicionSombras = [[2,2], [-2,2], [-2,-2], [2,-2]];
var posicionActualSombra = 0;

// Función que inicia la ruleta.
function ruleta() {
    // Solo actua cuando estan los tres recuadros parados.
    if (corriendo == 0) {
        // Para el efecto de las sombras.
        clearInterval(intervaloSombras);
        
        // Sortea la imagen con la que comienza cada recuadro.
            // Math.random() genera un número en el dominio [0-1)
            // Si lo multiplico por tres el dominio pasa a ser [0-3)
            // Esta operación genera decimales, para eliminarlos se usa Math.floor()
        for(i in cuadro)
            cuadro[i] = Math.floor(Math.random() * 4);
        
        // Genera los intervalos para que cada recuadro cambie de imagen cada centésima de segundo.
        intervaloRuleta[0] = setInterval(function() { cambiaImagen(0);}, 350);
        intervaloRuleta[1] = setInterval(function() { cambiaImagen(1);}, 300);
        intervaloRuleta[2] = setInterval(function() { cambiaImagen(2);}, 450);
        intervaloRuleta[3] = setInterval(function() { cambiaImagen(3);}, 400);
        
        // Al empezar están cambiando los tres recuadros.
        corriendo = 4;
    }
}

function jugar(){
    progresojuego();
    if (dinero<25){
        document.getElementById("iniciar").addEventListener("click", function(){
            progresojuego();
        })
    }
    else{
        ruleta();
        dinero -= 25;
        document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
    }    
}

// Función que cambia la imagen.
function cambiaImagen(x) {
    // Si la imagen es la última paso a la primera.
    //  Si no cambia al asiguiente imagen.
    if(cuadro[x]>=4) cuadro[x]=0;
    else cuadro[x] = cuadro[x]+1;
    
    // Cambia la propiedad src de la imagen correspondiente en el html.
    document.getElementById("imag"+x).src = opciones[cuadro[x]];                
}

// Función que para un recuadro de la ruleta.
function paraRuleta() {
    // Solo para si hay alguna corriendo.
    if (corriendo > 0) {
        // Como las tablas empiezan en cero, el ultimo valor es 2.
        // Restamos uno a los recuadros corriendo.
        corriendo = corriendo - 1;
        // Paramos el intervalo para que deje de cambiar la imagen del recuadro.
        clearInterval(intervaloRuleta[corriendo]);
        // Si hemos parado el último activamos el efecto de las sombras.
        if (corriendo==0) { 
            analisis();
            cambiaSombras();
        }
    }
}

function analisis() {
    const src1 = imagen1.getAttribute("src");
    const src2 = imagen2.getAttribute("src");
    const src3 = imagen3.getAttribute("src");
    const src4 = imagen4.getAttribute("src");
    lista.push(src1);
    lista.push(src2);
    lista.push(src3);
    lista.push(src4);
    document.getElementById("recompensa").innerHTML = "Analizando premio";
    setTimeout(function() {
        if (lista[0] === lista[1] && lista[2] === lista[3] && lista[0] === lista[3] && lista[0] === opciones[0]){
            cambiarArma();
            lista = [];
        }
        if (lista[0] === lista[1] && lista[2] === lista[3] && lista[0] === lista[3] && lista[0] === opciones[1]){
            masilusion();
            lista = [];
        }
        if (lista[0] === lista[1] && lista[2] === lista[3] && lista[0] === lista[3] && lista[0] === opciones[3]){
            cambiarArmadura();
            lista = [];
        }
        if (lista[0] === lista[1] && lista[2] === lista[3] && lista[0] === lista[3] && lista[0] === opciones[4]){
            cambiarArco();
            lista = [];
        }
        else{
            dineropremio();
            lista = [];
        }
    }, 2000);
}

// Funcion que activa el cambio de las sombras.
function cambiaSombras() {
    // Define el intervalo de cambio de las sombras.
    intervaloSombras=setInterval(circulaSombras, 100);
}

// Cambia las sombras de posición.
function circulaSombras() {
    // Circula entre las posiciones de la sombra.
    if(posicionActualSombra>=3) posicionActualSombra=0;
        else posicionActualSombra=posicionActualSombra+1;
    
    // Crea el estilo que hay que aplicar a la caja.
    // p.e.: 2px 2px 5px #FF5050
    //       2px arriba,  2px hacia la derecha y 5px de difuminado en color #FF5050
    var estilo = posicionSombras[posicionActualSombra][0]+"px "+posicionSombras[posicionActualSombra][1]+"px 5px #FF5050";
        document.getElementById("imag0").style['boxShadow']=estilo;
        document.getElementById("imag1").style['boxShadow']=estilo;
        document.getElementById("imag2").style['boxShadow']=estilo;
        document.getElementById("imag3").style['boxShadow']=estilo;
}

function dineropremio(){
    var dinpre=0;
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === opciones[2]){
            dinpre+=250;
        } 
    }
    console.log(dinpre)
    if (dinpre > 0){
        document.getElementById("recompensa").innerHTML = "Has obtenido una bolsa con "+dinpre+" septims. Añadiendolo a su cantidad actual.";
        dinero+=dinpre;
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
        }, 2000);
    }
    if (dinpre==0 && lista.length!=0) {
        document.getElementById("recompensa").innerHTML = "No has obtenido nada. Intentalo de nuevo.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
        }, 2000);
    }
}

function cambiarArmadura() {
    if (armaduras.length==0){
        dinero+=1250;
        document.getElementById("recompensa").innerHTML = "Ya tienes la mejor armadura. Vendiendo la nueva armadura por 1250 septims.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
    else {
        document.getElementById("armadura").src = armaduras[0];
        document.getElementById("recompensa").innerHTML = "Armadura mejorada.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            progresojuego();
        }, 2000);
        progreso.value +=1;
        armaduras.shift();
    }
}

function cambiarArma() {
    if (dagas.length==0){
        dinero+=1250;
        document.getElementById("recompensa").innerHTML = "Ya tienes la mejor daga. Vendiendo la nueva daga por 1250 septims.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
    else {
        document.getElementById("arma").src = dagas[0];
        document.getElementById("recompensa").innerHTML = "Daga mejorada.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            progresojuego();
        }, 2000);
        progreso.value +=1;
        dagas.shift();
    }
}

function cambiarArco() {
    if (arco.length==0){
        dinero+=1250;
        document.getElementById("recompensa").innerHTML = "Ya tienes el mejor arco. Vendiendo el nuevo arco por 1250 septims.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
    else {
        document.getElementById("arco").src = arco[0];
        document.getElementById("recompensa").innerHTML = "Arco mejorado.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            progresojuego();
        }, 2000);
        progreso.value +=1;
        arco.shift();
    }
}

function masilusion() {
    if (ilusion.length==0){
        dinero+=1250;
        document.getElementById("recompensa").innerHTML = "Ya tienes todos los hechizos ilusion aprendidos. Vendiendo el grimorio por 1250 septims.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
    else {
        var anadirilusion = document.getElementById("ilusion");
        var li = document.createElement("li"); 
        var tipoilusion = document.createTextNode(ilusion[0]); // Creamos un nodo de texto con el valor del elemento del array
        li.appendChild(tipoilusion); // Agregamos el nodo de texto al elemento LI
        anadirilusion.appendChild(li); // Agregamos el elemento LI al elemento UL
        document.getElementById("recompensa").innerHTML = "Nuevo hechizo de ilusion aprendido.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            progresojuego();
        }, 2000);
        progreso.value +=1;
        ilusion.shift();
    }
}

function carma() {
    if (dinero>=1000){ 
        dinero-=1000;
        document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
        cambiarArma();
    } 
    else {
        document.getElementById("recompensa").innerHTML ="Saldo insuficiente.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
}

function carmadura() {
    if (dinero>=1000){ 
        dinero-=1000;
        document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
        cambiarArmadura();
    } 
    else {
        document.getElementById("recompensa").innerHTML ="Saldo insuficiente.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
}

function carco() {
    if (dinero>=1000){ 
        dinero-=1000;
        document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
        cambiarArco();
    } 
    else {
        document.getElementById("recompensa").innerHTML ="Saldo insuficiente.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            progresojuego();
        }, 2000);
        progresojuego();
    }
}

function cilusion() {
    if (dinero>=1000){ 
        dinero-=1000;
        document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
        masilusion();
    } 
    else {
        document.getElementById("recompensa").innerHTML ="Saldo insuficiente.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            progresojuego();
        }, 2000);
        progresojuego();
    }
}

function progresojuego() {
    if (progreso.value == 17) {
        dinero = 0
        document.getElementById("recompensa").innerHTML = "¡Felicidades! Lograste alganzar el rango del Oyente, la senda del asesino fue completada.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "Vas a salir de la senda en breve";
            setTimeout(function() {
                window.close();
            }, 2000);
        }, 2000);
    }
    if (progreso.value != 17 && dinero < 25){
        document.getElementById("recompensa").innerHTML = "Derrota, te quedaste sin fondos.";
    }
}