const baraja = []
const jugadorDiv = document.getElementById('jugador')
const croupierDiv = document.getElementById('croupier')
const almacenDiv = document.getElementById('almacencarta')
const PuntosJ = document.getElementById('Puntos-J')
const PuntosC = document.getElementById('Puntos-C')
const PuntosA = document.getElementById('Puntos-A')
const resultado = document.getElementById('resultado')
const tusfichas = document.getElementById('tus-fichas')
const fichasApostadas = document.getElementById('fichas-apostadas')
const fichasApostadasE = document.getElementById('fichas-apostadas2')
const apuestaManual = document.getElementById('manual')
var jugadorCartas = []
const croupierCartas = []
var cartaExtra = []
var fichas = 1000
var apuesta = 0
var apuestaE = 0
tusfichas.innerHTML = `Tus fichas: ${fichas}`
fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`

// Función para crear una baraja de poker con palos y puntuaciones y barajarla de forma aleatoria
function crearBaraja() {
    baraja.splice(0, baraja.length)
    jugadorCartas.splice(0, jugadorCartas.length)
    croupierCartas.splice(0, croupierCartas.length)
    const palos = ['picas', 'corazones', 'treboles', 'diamantes']
    const puntuaciones = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    // Creamos las cartas y las almacenamos en el arreglo baraja
    for (let i = 0; i < palos.length; i++) {
        for (let j = 0; j < puntuaciones.length; j++) {
            baraja.push(`${puntuaciones[j]} de ${palos[i]}`)
        }
    }

    // Barajamos las cartas
    for (let i = baraja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }

}

// Función para empezar una partida de blackjack
function empezarPartida() {
    if(sumarPuntaje(jugadorCartas) != 0){
        alert('La partida ya ha empezado.')
        return false
    }
    if (apuesta == 0) {
        alert('No has realizado ninguna apuesta')
        return false
    }
    crearBaraja()
    const almacenTit = document.getElementById('almacencarta').getElementsByTagName('h2')[0]
    PuntosA.innerHTML = `<h2> </h2>`
    almacenTit.innerHTML = ` `
    const almacenDiv = document.getElementById('almacencarta').getElementsByTagName('ul')[0]
    almacenDiv.innerHTML = ` `
    fichasApostadasE.innerHTML = ` `
    tusfichas.innerHTML = `Tus fichas: ${fichas}`
    resultado.innerHTML = ''
    jugadorCartas.push(baraja.shift(), baraja.shift())
    croupierCartas.push(baraja.shift())
    jugadorDiv.innerHTML = `<h2>Cartas del Jugador</h2><ul><img src='cartas/${jugadorCartas[0]}.png' alt="cartas"><img src='cartas/${jugadorCartas[1]}.png' alt="cartas"></ul>`
    croupierDiv.innerHTML = `<h2>Cartas del Croupier</h2><ul><img src='cartas/${croupierCartas[0]}.png' alt="cartas"></ul>`
    PuntosJ.innerHTML = `<h2>Puntuacion del Jugador: ${sumarPuntaje(jugadorCartas)}</h2>`
    PuntosC.innerHTML = `<h2>Puntuacion del Croupier: ${sumarPuntaje(croupierCartas)}</h2>`
    if (sumarPuntaje(jugadorCartas) == 21) {
        resultado.innerHTML = `Has ganado`
        fichas += apuesta * 2
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
    }
    else if (sumarPuntaje(croupierCartas) == 21) {
        resultado.innerHTML = `Has perdido`
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
    }
}

// Función para agregar una nueva carta a la mano del jugador
function tomarCarta() {
    if(sumarPuntaje(jugadorCartas) == 0 && sumarPuntaje(cartaExtra) == 0){
        alert('La partida no ha empezado.')
        return false
    }
    if (resultado.innerHTML != '') {
        alert('La partida no ha empezado.')
        return false
    }
    if(cartaExtra.length > 0){
        const cartaA = baraja.shift()
        cartaExtra.push(cartaA)
        const almacenDiv = document.getElementById('almacencarta').getElementsByTagName('ul')[0]
        almacenDiv.innerHTML += `<img src='cartas/${cartaA}.png' alt="cartas">`
        PuntosA.innerHTML = `<h2>Puntuacion del Croupier: ${sumarPuntaje(cartaExtra)}</h2>`
        if (sumarPuntaje(cartaExtra) == 21) {
            resultado.innerHTML = `Has ganado la segunda mano`
            fichas += apuestaE * 2
            apuestaE = 0
            tusfichas.innerHTML = `Tus fichas: ${fichas}`
            fichasApostadasE.innerHTML = ` `
            cartaExtra = [];
        }
        else if (sumarPuntaje(cartaExtra) >= 22) {
            resultado.innerHTML = `Has perdido la segunda mano`
            apuestaE = 0
            fichasApostadasE.innerHTML = ` `
            cartaExtra = [];
        }
    }
    const cartaJ = baraja.shift()
    jugadorCartas.push(cartaJ)
    const jugadorDiv = document.getElementById('jugador').getElementsByTagName('ul')[0]
    jugadorDiv.innerHTML += `<img src='cartas/${cartaJ}.png' alt="cartas">`
    if (sumarPuntaje(croupierCartas) < 17){
        const cartaC = baraja.shift()
        croupierCartas.push(cartaC)
        const croupierDiv = document.getElementById('croupier').getElementsByTagName('ul')[0]
        croupierDiv.innerHTML += `<img src='cartas/${cartaC}.png' alt="cartas">`
    }
    PuntosJ.innerHTML = `<h2>Puntuacion del Jugador: ${sumarPuntaje(jugadorCartas)}</h2>`
    PuntosC.innerHTML = `<h2>Puntuacion del Croupier: ${sumarPuntaje(croupierCartas)}</h2>`

    if (sumarPuntaje(jugadorCartas) == 21) {
        resultado.innerHTML = `Has ganado`
        fichas += apuesta * 2
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
    }
    else if (sumarPuntaje(jugadorCartas) >= 22) {
        resultado.innerHTML = `Has perdido`
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
    }
    else if (sumarPuntaje(croupierCartas) == 21) {
        resultado.innerHTML = `Has perdido`
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
    }
    else if (sumarPuntaje(croupierCartas) >= 22) {
        resultado.innerHTML = `Has ganado`
        fichas += apuesta * 2
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
    }
}

//Función para finalizar la mano del jugador
function plantarse() {
    if(sumarPuntaje(jugadorCartas) == 0){
        alert('La partida no ha empezado.')
        return false
    }
    while (sumarPuntaje(croupierCartas) < 17 || sumarPuntaje(croupierCartas) < sumarPuntaje(jugadorCartas) || sumarPuntaje(croupierCartas) < sumarPuntaje(cartaExtra)){
        const cartaC = baraja.shift()
        croupierCartas.push(cartaC)
        const croupierDiv = document.getElementById('croupier').getElementsByTagName('ul')[0]
        croupierDiv.innerHTML += `<img src='cartas/${cartaC}.png' alt="cartas">`
    }
    PuntosC.innerHTML = `<h2>Puntuacion del Croupier: ${sumarPuntaje(croupierCartas)}</h2>`
    resultado.innerHTML = `${determinarGanador(sumarPuntaje(jugadorCartas), sumarPuntaje(croupierCartas), sumarPuntaje(cartaExtra))}`
    jugadorCartas = [];
}

// Función para sumar el valor de las cartas y obtener un puntaje
function sumarPuntaje(mano) {
    let totalPuntos = 0
    let numAces = 0
    for (let i = 0; i < mano.length; i++) {
        let carta = mano[i].split(' ')[0]
        if (carta === 'As') {
            numAces += 1
            totalPuntos += 11
        } else if (carta === 'J' || carta === 'Q' || carta === 'K') {
            totalPuntos += 10
        } else {
            totalPuntos += parseInt(carta)
        }
    }
    // Si el valor con As pasa de 21 pasa a valor 1
    while (totalPuntos > 21 && numAces > 0) {
        totalPuntos -= 10
        numAces--
    }
    return totalPuntos
}

// Establece las normas del BlackJack a partir de las puntuaciones obtenidas
function determinarGanador(puntajeJugador = 0, puntajecroupier = 0, puntajealmacen = 0) {
    if (puntajeJugador > 21) {
        apuesta = 0
        apuestaE = 0
        fichasApostadasE.innerHTML = ` `
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
        cartaExtra = [];
        return 'Ganó el croupier'
    }
    else if (puntajecroupier > 21) {
        fichas += apuesta * 2
        fichas += apuestaE * 2
        apuesta = 0
        apuestaE = 0
        fichasApostadasE.innerHTML = ` `
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
        cartaExtra = [];
        return 'Ganaste'
    }
    else if (puntajeJugador > puntajecroupier) {
        fichas += apuesta * 2
        fichas += apuestaE * 2
        apuesta = 0
        apuestaE = 0
        fichasApostadasE.innerHTML = ` `
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
        cartaExtra = [];
        return 'Ganaste'
    }
    else if (puntajealmacen > puntajecroupier) {
        fichas += apuesta * 2
        fichas += apuestaE * 2
        apuesta = 0
        apuestaE = 0
        fichasApostadasE.innerHTML = ` `
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
        cartaExtra = [];
        return 'Ganaste'
    }
    else if (puntajecroupier > puntajeJugador && puntajecroupier > puntajealmacen) {
        apuesta = 0
        apuestaE = 0
        fichasApostadasE.innerHTML = ` `
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
        cartaExtra = [];
        return 'Ganó el croupier'
    }
    else if (puntajeJugador = puntajecroupier) {
        fichas += apuesta
        fichas += apuestaE
        apuesta = 0
        apuestaE = 0
        fichasApostadasE.innerHTML = ` `
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
        cartaExtra = [];
        return 'Empataste'
    }
    else if (puntajealmacen > 21) {
        apuesta = 0
        apuestaE = 0
        fichasApostadasE.innerHTML = ` `
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
        cartaExtra = [];
        return 'Ganó el croupier'
    }
    else if (puntajealmacen = puntajecroupier) {
        fichas += apuesta
        fichas += apuestaE
        apuesta = 0
        apuestaE = 0
        fichasApostadasE.innerHTML = ` `
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        jugadorCartas = [];
        cartaExtra = [];
        return 'Empataste la segunda mano'
    }
}

//Función que permite hacer apuestas con fichas
function apostarFichas(apostados = fichas) {
    if(sumarPuntaje(jugadorCartas) != 0){
        alert('La partida ya ha empezado.')
        return false
    }
    if (fichas <= 0) {
        alert("No tienes mas dinero para apostar.")
        return false
    }
    if (fichas < apostados) {
        alert("No tienes el dinero suficiente para apostar esta cantidad.")
        return false
    }
    fichas -= apostados
    tusfichas.innerHTML = `Tus fichas: ${fichas}`
    apuesta += apostados
    fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
}

apuestaManual.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var value = parseFloat(this.value);
        value = Number(value.toFixed(2));
        apostarFichas(value);
        this.value='';
    }
});

//Función que limpia la apuesta establecida
function limpiarApuesta() {
    if(sumarPuntaje(jugadorCartas) != 0){
        alert('La partida ya ha empezado.')
        return false
    }
    fichas += apuesta
    apuesta = 0
    tusfichas.innerHTML = `Tus fichas: ${fichas}`
    fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`

}

function rendirse() {
    if(sumarPuntaje(jugadorCartas) == 0 && sumarPuntaje(cartaExtra) == 0){
        alert('La partida no ha empezado.')
        return false
    }
    resultado.innerHTML = `Te has rendido`;
    fichas += apuesta / 2;
    fichas += apuestaE / 2;
    apuesta = 0;
    apuestaE = 0;
    fichas = Number(fichas.toFixed(2))
    fichasApostadasE.innerHTML = ` `
    tusfichas.innerHTML = `Tus fichas: ${fichas}`;
    fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`;
    jugadorCartas = [];
    cartaExtra = [];
}

function doblar() {
    if(sumarPuntaje(jugadorCartas) == 0){
        alert('La partida no ha empezado.')
        return false
    }
    if(sumarPuntaje(jugadorCartas) == 9 || sumarPuntaje(jugadorCartas) == 10 || sumarPuntaje(jugadorCartas) == 11 && fichas >= apuesta){
        const seguro = apuesta
        fichas -= seguro;
        apuesta += seguro;
        tusfichas.innerHTML = `Tus fichas: ${fichas}`;
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`;
        const cartaJ = baraja.shift()
        jugadorCartas.push(cartaJ)
        const jugadorDiv = document.getElementById('jugador').getElementsByTagName('ul')[0]
        jugadorDiv.innerHTML += `<img src='cartas/${cartaJ}.png' alt="cartas">`
        PuntosJ.innerHTML = `<h2>Puntuacion del Jugador: ${sumarPuntaje(jugadorCartas)}</h2>`
        while (sumarPuntaje(croupierCartas) < 17 || sumarPuntaje(croupierCartas) < sumarPuntaje(jugadorCartas)){
            const cartaC = baraja.shift()
            croupierCartas.push(cartaC)
            const croupierDiv = document.getElementById('croupier').getElementsByTagName('ul')[0]
            croupierDiv.innerHTML += `<img src='cartas/${cartaC}.png' alt="cartas">`
        }
        PuntosC.innerHTML = `<h2>Puntuacion del Croupier: ${sumarPuntaje(croupierCartas)}</h2>`
        if (sumarPuntaje(jugadorCartas) > sumarPuntaje(croupierCartas)) {
            resultado.innerHTML = `Has ganado`
            fichas += apuesta * 2
            apuesta = 0
            tusfichas.innerHTML = `Tus fichas: ${fichas}`
            fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
            jugadorCartas = [];
        }
        else{
            resultado.innerHTML = `Has perdido`
            apuesta = 0
            tusfichas.innerHTML = `Tus fichas: ${fichas}`
            fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
            jugadorCartas = [];
        }
    }
    else {
        alert('No se cumplen las condiciones para esta accion.')
        return false
    }
}

function seguro() {
    if(sumarPuntaje(jugadorCartas) == 0){
        alert('La partida no ha empezado.')
        return false
    }
    if(sumarPuntaje(croupierCartas) == 11 && croupierCartas.length < 2 && fichas >= apuesta / 2){
        const seguro = apuesta / 2
        fichas -= seguro;
        apuesta += seguro;
        tusfichas.innerHTML = `Tus fichas: ${fichas}`;
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`;
        const cartaC = baraja.shift()
        croupierCartas.push(cartaC)
        const croupierDiv = document.getElementById('croupier').getElementsByTagName('ul')[0]
        croupierDiv.innerHTML += `<img src='cartas/${cartaC}.png' alt="cartas">`
        PuntosC.innerHTML = `<h2>Puntuacion del Croupier: ${sumarPuntaje(croupierCartas)}</h2>`
        if (sumarPuntaje(croupierCartas) == 21) {
            resultado.innerHTML = `Has acertado`
            fichas += apuesta * 2
            apuesta = 0
            tusfichas.innerHTML = `Tus fichas: ${fichas}`
            fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
            jugadorCartas = [];
        }
        else{
            apuesta -= seguro;
        }
    }
    else {
        alert('No se cumplen las condiciones para esta accion.')
        return false
    }
}

function dividir() {
    if(sumarPuntaje(jugadorCartas) == 0){
        alert('La partida no ha empezado.')
        return false
    }
    if(jugadorCartas.length > 2){
        alert('No se cumplen las condiciones para esta accion.')
        return false
    }
    if(compararCartas(jugadorCartas)){
        apuestaE = apuesta / 2
        fichas -= apuestaE
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadasE.innerHTML = `Tu segunda apuesta: ${apuestaE}`
        cartaExtra.push(jugadorCartas.pop())
        const jugadorDiv = document.getElementById('jugador').getElementsByTagName('ul')[0]
        jugadorDiv.innerHTML = `<img src='cartas/${jugadorCartas[0]}.png' alt="cartas">`
        PuntosJ.innerHTML = `<h2>Puntuacion del Jugador: ${sumarPuntaje(jugadorCartas)}</h2>`
        const almacenTit = document.getElementById('almacencarta').getElementsByTagName('h2')[0]
        PuntosA.innerHTML = `<h2>Puntuacion de segunda mano: ${sumarPuntaje(cartaExtra)}</h2>`
        almacenTit.innerHTML = `Carta almacenada`
        const almacenDiv = document.getElementById('almacencarta').getElementsByTagName('ul')[0]
        almacenDiv.innerHTML += `<img src='cartas/${cartaExtra}.png' alt="cartas">`
    }
    else {
        alert('No se cumplen las condiciones para esta accion.')
        return false
    }
}

function compararCartas(mano) {
    const carta = []
    for (let i = 0; i < mano.length; i++) {
        carta.push(mano[i].split(' ')[0])
    }
    if (carta[0] === carta[1]) {
        return true
    }
}