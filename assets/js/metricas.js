document.getElementById("metricsForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter os valores preenchidos no formulário
  var opportunities = document.getElementById("opportunities").value;
  var trials = document.getElementById("trials").value;
  var leads = document.getElementById("leads").value;
  var mqls = document.getElementById("mqls").value;

  // Calcular a proporção das métricas em relação ao mês atual
  var week = 1; // Defina aqui o número da semana atual
  var totalWeeks = document.getElementById("totalWeeks").value; // Total de semanas no mês
  var ratio = week + "/" + totalWeeks;

  // Gerar o texto do relatório
  var reportText = "Boa tarde galera! Encerramos a primeira semana do mês de Julho.\n\n";
  reportText += "Resultados até o momento:\n\n";
  reportText += "Oportunidades - " + opportunities + " | " + ratio + " - " + Math.round(opportunities / totalWeeks) + " | Até o momento: " + opportunities + "\n";
  reportText += "Trials - " + trials + " | " + ratio + " - " + Math.round(trials / totalWeeks) + " | Até o momento: " + trials + "\n";
  reportText += "Leads - " + leads + " | " + ratio + " - " + Math.round(leads / totalWeeks) + " | Até o momento: " + leads + "\n";
  reportText += "MQL's - " + mqls + " | " + ratio + " - " + Math.round(mqls / totalWeeks) + " | Até o momento: " + mqls + "\n";

  // Exibir o relatório gerado
  var reportElement = document.getElementById("report");
  reportElement.textContent = reportText;

  // Adicionar destaque
  reportElement.classList.add("highlight");

  // Criar botão de cópia
  var copyButton = document.createElement("button");
  copyButton.classList.add("copy-button");
  copyButton.setAttribute("data-clipboard-target", "#report");

  // Criar ícone de colar
  var copyIcon = document.createElement("span");
  copyIcon.classList.add("copy-icon");
  copyButton.appendChild(copyIcon);

  // Adicionar botão ao relatório
  reportElement.appendChild(copyButton);

  // Inicializar o Clipboard.js
  new ClipboardJS(copyButton);

  // Adicionar evento de feedback após a cópia
  copyButton.addEventListener("click", function() {
    copyButton.textContent = "Copiado!";
    setTimeout(function() {
      copyButton.textContent = "Copiar";
    }, 1500);
  });
});
