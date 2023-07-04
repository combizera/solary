function calcular() {
  var pontos = parseInt(document.getElementById('pontos').value);
  var valor = 0;

  if (pontos <= 3000) {
    valor = pontos * 0.20;
  } else if (pontos <= 9000) {
    valor = 600 + (pontos - 3000) * 0.30;
  } else if (pontos <= 15000) {
    valor = 2400 + (pontos - 9000) * 0.10;
  } else {
    var excedente = pontos - 15000;
    valor = 2400 + 600 + 600 + Math.floor(excedente / 1000) * 50;
  }

  document.getElementById('valor').textContent = 'R$ ' + valor.toFixed(2);
}
