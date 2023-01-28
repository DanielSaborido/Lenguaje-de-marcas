var numero=prompt("Escribe un número")
numero=parseInt(numero)
for (i=1;i<=numero;i++) {
    let line="△".repeat(i)+"<br>"
    document.write(line);
  }