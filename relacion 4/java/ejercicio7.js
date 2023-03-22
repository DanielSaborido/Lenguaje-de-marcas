const numeros = [25, 40, 60, 20];

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
document.write("La suma de todos los elementos de la lista es: "+suma)