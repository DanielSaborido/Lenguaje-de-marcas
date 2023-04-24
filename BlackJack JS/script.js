const baraja = []
const jugadorDiv = document.getElementById('jugador')
const dealerDiv = document.getElementById('dealer')
const PuntosJ = document.getElementById('Puntos-J')
const PuntosD = document.getElementById('Puntos-D')
const resultado = document.getElementById('resultado')
const tusfichas = document.getElementById('tus-fichas')
const fichasApostadas = document.getElementById('fichas-apostadas')
const jugadorCartas = []
const dealerCartas = []
var fichas = 1000
var apuesta = 0
tusfichas.innerHTML = `Tus fichas: ${fichas}`
fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`

// Función para crear una baraja de poker con palos y puntuaciones y barajarla de forma aleatoria
function crearBaraja() {
    baraja.splice(0, baraja.length)
    jugadorCartas.splice(0, jugadorCartas.length)
    dealerCartas.splice(0, dealerCartas.length)
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
    if (apuesta == 0) {
        alert('No has realizado ninguna apuesta')
        return false
    }
    crearBaraja()
    tusfichas.innerHTML = `Tus fichas: ${fichas}`
    resultado.innerHTML = ''
    jugadorCartas.push(baraja.shift(), baraja.shift())
    dealerCartas.push(baraja.shift())
    if (sumarPuntaje(dealerCartas) >= 10) {
        dealerCartas.push(baraja.shift())
        dealerDiv.innerHTML = `<h2>Cartas del Dealer</h2><ul><img src='cartas/${dealerCartas[0]}.png'><img src='cartas/${dealerCartas[1]}.png'></ul>`
    }
    jugadorDiv.innerHTML = `<h2>Cartas del Jugador</h2><ul><img src='cartas/${jugadorCartas[0]}.png'><img src='cartas/${jugadorCartas[1]}.png'></ul>`
    PuntosJ.innerHTML = `<h2>Puntuacion del Jugador: ${sumarPuntaje(jugadorCartas)}</h2>`
    PuntosD.innerHTML = `<h2>Puntuacion del Dealer: ${sumarPuntaje(dealerCartas)}</h2>`
    if (dealerCartas.length < 2) {
        dealerDiv.innerHTML = `<h2>Cartas del Dealer</h2><ul><img src='cartas/${dealerCartas[0]}.png'></ul>`
        dealerCartas.push(baraja.shift())
    }
    if (sumarPuntaje(jugadorCartas) == 21) {
        resultado.innerHTML = `Has ganado`
        fichas += apuesta * 2
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
    }
    else if (sumarPuntaje(dealerCartas) == 21) {
        resultado.innerHTML = `Has perdido`
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
    }
}

// Función para agregar una nueva carta a la mano del jugador
function tomarCarta() {
    if(apuesta == 0){
        alert('La partida no ha empezado.')
        return false
    }
    if (resultado.innerHTML != '') {
        return false
    }

    const carta = baraja.shift()
    jugadorCartas.push(carta)
    const jugadorDiv = document.getElementById('jugador').getElementsByTagName('ul')[0]
    jugadorDiv.innerHTML += `<img src='cartas/${carta}.png'>`
    dealerDiv.innerHTML = `<h2>Cartas del Dealer</h2><ul><img src='cartas/${dealerCartas[0]}.png'><img src='cartas/${dealerCartas[1]}.png'></ul>`
    PuntosJ.innerHTML = `<h2>Puntuacion del Jugador: ${sumarPuntaje(jugadorCartas)}</h2>`
    PuntosD.innerHTML = `<h2>Puntuacion del Dealer: ${sumarPuntaje(dealerCartas)}</h2>`

    if (sumarPuntaje(jugadorCartas) == 21) {
        resultado.innerHTML = `Has ganado`
        fichas += apuesta * 2
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
    }
    else if (sumarPuntaje(jugadorCartas) >= 22) {
        resultado.innerHTML = `Has perdido`
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
    }
}

//Función para finalizar la mano del jugador
function plantarse() {
    if(apuesta == 0){
        alert('La partida no ha empezado.')
        return false
    }
    resultado.innerHTML = `${determinarGanador(sumarPuntaje(jugadorCartas), sumarPuntaje(dealerCartas))}`
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
function determinarGanador(puntajeJugador = 0, puntajeDealer = 0) {
    if (puntajeJugador > 21) {
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        return 'Ganó el dealer'
    }
    else if (puntajeDealer > 21) {
        fichas += apuesta * 2
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        return 'Ganaste'
    }
    else if (puntajeJugador > puntajeDealer) {
        fichas += apuesta * 2
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        return 'Ganaste'
    }
    else if (puntajeDealer > puntajeJugador) {
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        return 'Ganó el dealer'
    }
    else if (puntajeJugador = puntajeDealer) {
        fichas += apuesta
        apuesta = 0
        tusfichas.innerHTML = `Tus fichas: ${fichas}`
        fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
        return 'Empataste'
    }
}

//Función que permite hacer apuestas con fichas
function apostarFichas(apostados = fichas) {
    if (fichas <= 0) {
        alert("No tienes mas dinero para apostar")
        return false
    }
    fichas -= apostados
    tusfichas.innerHTML = `Tus fichas: ${fichas}`
    apuesta += apostados
    fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`
}

//Función que limpia la apuesta establecida
function limpiarApuesta() {
    fichas += apuesta
    apuesta = 0
    tusfichas.innerHTML = `Tus fichas: ${fichas}`
    fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`

}

function rendirse() {
    if(apuesta == 0){
        alert('La partida no ha empezado.')
        return false
    }
    resultado.innerHTML = `Te has rendido`;
    fichas += apuesta / 2;
    apuesta = 0;
    tusfichas.innerHTML = `Tus fichas: ${fichas}`;
    fichasApostadas.innerHTML = `Tu apuesta actual: ${apuesta}`;
  }