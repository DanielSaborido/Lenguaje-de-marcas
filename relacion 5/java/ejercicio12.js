const articulos = ["Camisa", "Pantalón", "Zapatos", "Sombrero"];
const precios = [25, 40, 60, 20];

let ventasTotales = 0;
for (let i = 0; i < articulos.length; i++) {
  ventasTotales += precios[i];
}
document.write("Las ventas totales son: "+ventasTotales)