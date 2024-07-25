function checkDevice() {
  var texto = document.getElementById("r");
  if (navigator.userAgent.match(/Android/i)) {
    texto.textContent = "Acesso via dispositivo Android.";
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    texto.textContent = "Acesso via dispositivo iOS.";
  } else {
    texto.textContent = "Acesso via computador.";
  }
}
checkDevice();
