var texto = document.getElementById("r");

function checkDevice() {
  if (navigator.userAgent.match(/Android/i)) {
    texto.textContent = "Acesso via dispositivo Android.";
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    texto.textContent = "Acesso via dispositivo iOS.";
  } else {
    texto.textContent = "Acesso via computador.";
  }
}
// checkDevice();

// Obtém o user agent do navegador
const userAgent = navigator.userAgent;

// Verifica se o dispositivo é um Android
if (userAgent.includes("Android")) {
  // Extrai o nome do navegador
  const browserName = userAgent.split(" ")[0];
  texto.textContent = `Navegador: ${browserName}`;

  // Extrai o sistema operacional (Android)
  const os = userAgent.match(/Android\s([\d\.]+)/);
  if (os) {
    texto.textContent = `Sistema Operacional: Android ${os[1]}`;
  }
} else {
  texto.textContent = "Não é um dispositivo Android.";
}
