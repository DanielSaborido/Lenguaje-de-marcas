var precio_sin_iva=123.45;
var iva=21;
var aplicariva=(precio_sin_iva*iva)/100;
var precio=precio_sin_iva+aplicariva

document.getElementById("iva").innerHTML="El precio del producto aplicando su iva es "+precio+"€";