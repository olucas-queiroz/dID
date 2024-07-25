var device = document.getElementById("device");

const info = platform.parse(navigator.userAgent);

device.textContent = `${info.manufacturer} - ${info.model} - ${info.os.family} - ${info.product}`;
