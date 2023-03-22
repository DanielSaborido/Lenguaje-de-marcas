var numeros = [2,3,7,4,9,5]
for (var numero in numeros){
    numero = parseInt(numero)
    if (numero == 0 || numero == 1 || numero == 4) numeros.pop(numero);
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) numeros.pop(numero);
    }
}
document.write("Los numeros primos de la lista son: "+numeros)