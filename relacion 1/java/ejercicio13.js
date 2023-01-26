var numero=prompt("Introduce un número");
function esPrimo(numero) {
	if (numero==0 || numero==1 || numero==2) alert('El numero no es primo');
	for (let i=2; i < numero/2; i++) {
		if (numero%i==0) alert('El numero no es primo');
	}
	alert('El numero es primo');
}
esPrimo(numero);