// Almacenamos los nombres de las imágenes en una variable compleja.
// Se denomina tabla y se accede a los valores mediante el indice (empezando por 0).
// Por ejemplo: opciones[0] contiene "rajoy.png"
var opciones = ["img/espadas.png", "img/grito.png", "img/moneda.png", "img/armadura.png", "img/grimorio.png"];
var armas = ["img/armas/acero.png", "img/armas/OrcishSword.png", "img/armas/Daedricsword.png", "img/armas/Dragonsword.png"];
var armaduras = ["img/personaje/hierro.png", "img/personaje/orco.png", "img/personaje/ebano.png", "img/personaje/dragon.png"];
var hechizos = ["Curación", "Expulsar no muerto", "Explosión elemental", "Conjurar atronach", "LLamada a las armas", "Piel de Dragón"];
var gritos = ["Fuerza implacable", "Torbellino arrollador", "Invocar Tormenta", "Despejar cielos", "Invocar dragón", "Desgarro de dragones"];
var dinero = 20000;
document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
var progreso = document.getElementById("barpro")
// Almacenamos el indice de la imagen que esta en cada recuadro.
var cuadro = [0, 0, 0, 0, 0];
// Almacenamos el setInterval de cada recuadro de forma independiente.
var intervaloRuleta = [null, null, null, null, null];
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
        intervaloRuleta[0] = setInterval(function() { cambiaImagen(0);}, 100);
        intervaloRuleta[1] = setInterval(function() { cambiaImagen(1);}, 150);
        intervaloRuleta[2] = setInterval(function() { cambiaImagen(2);}, 200);
        intervaloRuleta[3] = setInterval(function() { cambiaImagen(3);}, 250);
        
        // Al empezar están cambiando los tres recuadros.
        corriendo = 4;
    }
}

function jugar(){
    progresojuego();
    if (dinero<50){
        document.getElementById("iniciar").addEventListener("click", function(){
            progresojuego();
        })
    }
    else{
        ruleta();
        dinero -= 50;
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
        if (corriendo==0) 
            cambiaSombras();
    }
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

function cambiarArmadura() {
    if (armaduras.length==0){
        dinero+=1000;
        document.getElementById("recompensa").innerHTML = "Ya tienes la mejor armadura. Vendiendo la nueva armadura por 1000 septins.";
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
        }, 2000);
        progreso.value +=5;
        armaduras.shift();
    }
}

function cambiarArma() {
    if (armas.length==0){
        dinero+=1000;
        document.getElementById("recompensa").innerHTML = "Ya tienes la mejor arma. Vendiendo la nueva arma por 1000 septins.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
    else {
        document.getElementById("arma").src = armas[0];
        document.getElementById("recompensa").innerHTML = "Arma mejorada.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
        }, 2000);
        progreso.value +=5;
        armas.shift();
    }
}

function mashechizo() {
    if (hechizos.length==0){
        dinero+=1000;
        document.getElementById("recompensa").innerHTML = "Ya tienes todos los hechizos disponibles. Vendiendo el grimorio por 1000 septins.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
    else {
        var anadirmagia = document.getElementById("magia");
        var li = document.createElement("li"); 
        var tipohechizo = document.createTextNode(hechizos[0]); // Creamos un nodo de texto con el valor del elemento del array
        li.appendChild(tipohechizo); // Agregamos el nodo de texto al elemento LI
        anadirmagia.appendChild(li); // Agregamos el elemento LI al elemento UL
        document.getElementById("recompensa").innerHTML = "Nuevo hechizo aprendido.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
        }, 2000);
        progreso.value +=5;
        hechizos.shift();
    }
}

function masgrito() {
    if (gritos.length==0){
        dinero+=1000;
        document.getElementById("recompensa").innerHTML = "Ya tienes todos los gritos disponibles. Vendiendo el grito por 1000 septins.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
            document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
            progresojuego(); 
        }, 2000);
        progresojuego();
    }
    else {
        var anadirgrito = document.getElementById("gritos");
        var li = document.createElement("li"); 
        var tipogrito = document.createTextNode(gritos[0]); // Creamos un nodo de texto con el valor del elemento del array
        li.appendChild(tipogrito); // Agregamos el nodo de texto al elemento LI
        anadirgrito.appendChild(li); // Agregamos el elemento LI al elemento UL
        document.getElementById("recompensa").innerHTML = "Nuevo grito aprendido.";
        setTimeout(function() {
            document.getElementById("recompensa").innerHTML = "";
        }, 2000);
        progreso.value +=5;
        gritos.shift();
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

function chechizo() {
    if (dinero>=1000){ 
        dinero-=1000;
        document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
        mashechizo();
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

function cgrito() {
    if (dinero>=1000){ 
        dinero-=1000;
        document.getElementById("dinero").innerHTML = "Dinero disponible: "+dinero+" septim(s)";
        masgrito();
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
    if (progreso.value == 100) {
        document.getElementById("recompensa").innerHTML = "Victoria, fin del juego.";
        dinero = 0
    }
    if (progreso.value != 100 && dinero < 50){
        document.getElementById("recompensa").innerHTML = "Derrota, te quedaste sin fondos.";
    }
}