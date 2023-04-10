const numeros = [25, 40, 60, 20];

let media = 0;
for (let i = 0; i < numeros.length; i++) {
  media += numeros[i];
}
media = media/numeros.length();
document.write("La media de los elementos de la lista es: "+media)