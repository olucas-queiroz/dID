var marca = document.getElementById("marca");
var modelo = document.getElementById("modelo");
var sistema = document.getElementById("sistema");
var produto = document.getElementById("produto");

const info = platform.parse(navigator.userAgent);

console.log(info);

marca.textContent = info.manufacturer;
modelo.textContent = info.model;
sistema.textContent = info.os.family;
produto.textContent = info.product;