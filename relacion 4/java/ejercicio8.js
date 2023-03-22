const numeros = [25, 40, 60, 20];
const suma = 6

for (let i = 0; i < numeros.length; i++) {
  numeros[i] += suma;
}
document.write("el resultado de sumar " +suma+" a cada elemento de la lista da: "+numeros)