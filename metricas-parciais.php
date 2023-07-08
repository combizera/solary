<!-- Para pegar o Header -->
<?php
// Template name: Página Métricas Parciais
get_header(); ?>

<!-- MAIN -->
<main id="page-metricas-parciais">
  <section id="metricas-parciais" class="container">

    <h1>Relatório de Métricas</h1>

    <form id="metricsForm">
      <label for="opportunities">Oportunidades:</label>
      <input type="number" id="opportunities" name="opportunities" required><br>

      <label for="trials">Trials:</label>
      <input type="number" id="trials" name="trials" required><br>

      <label for="leads">Leads:</label>
      <input type="number" id="leads" name="leads" required><br>

      <label for="mqls">MQL's:</label>
      <input type="number" id="mqls" name="mqls" required><br>

      <button type="submit">Gerar Relatório</button>
    </form>

    <div id="report"></div>

    <script>
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
        document.getElementById("report").textContent = reportText;
      });
    </script>

  </section>
</main>

<!-- Para pegar o Footer -->
<?php get_footer(); ?>