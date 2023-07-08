document.getElementById("metricsForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter os valores preenchidos no formulário
  var opportunities = document.getElementById("opportunities").value;
  var trials = document.getElementById("trials").value;
  var leads = document.getElementById("leads").value;
  var mqls = document.getElementById("mqls").value;

  // Calcular a proporção das métricas em relação à semana atual
  var week = 1; // Defina aqui o número da semana atual
  var totalWeeks = 4; // Total de semanas no mês
  var ratio = week + "/" + totalWeeks;

  // Calcular os valores parciais
  var opportunitiesPartial = opportunities + " | " + ratio + " - " + week + "/" + totalWeeks + " | Até o momento: " + opportunities;
  var trialsPartial = trials + " | " + ratio + " - " + week + "/" + totalWeeks + " | Até o momento: " + trials;
  var leadsPartial = leads + " | " + ratio + " - " + week + "/" + totalWeeks + " | Até o momento: " + leads;
  var mqlsPartial = mqls + " | " + ratio + " - " + week + "/" + totalWeeks + " | Até o momento: " + mqls;

  // Gerar o texto do relatório
  var reportText = "Boa tarde galera! Encerramos a [PRIMEIRA] semana do mês de [MÊS]. Levando isso em conta, o resultado parcial deve ser de " + ratio + ".\n\n";
  reportText += "Resultados até o momento:\n\n";
  reportText += "Oportunidades - " + opportunitiesPartial + "\n";
  reportText += "Trials - " + trialsPartial + "\n";
  reportText += "Leads - " + leadsPartial + "\n";
  reportText += "MQL's - " + mqlsPartial + "\n";

  // Exibir o relatório gerado
  var reportElement = document.getElementById("report");
  reportElement.textContent = reportText;

  // Adicionar destaque
  reportElement.classList.add("highlight");

  // Adicionar botão de cópia
  var copyButton = document.createElement("button");
  copyButton.textContent = "Copiar";
  copyButton.setAttribute("data-clipboard-target", "#report");
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
