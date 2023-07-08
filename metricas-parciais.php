<!-- Para pegar o Header -->
<?php
// Template name: Página Métricas Parciais
get_header(); ?>

<!-- MAIN -->
<main id="page-metricas-parciais">
  <section id="metricas-parciais" class="container">
    <h1 class="h1">Relatório de Métricas</h1>
    <form id="metricsForm">
      <div class="grid-2">
        <div>
          <label for="opportunities">Oportunidades:</label>
          <input type="number" id="opportunities" name="opportunities" required><br>
        </div>
        <div>

          <label for="trials">Trials:</label>
          <input type="number" id="trials" name="trials" required><br>
        </div>
      </div>
      <div class="grid-2">
        <div>
          <label for="leads">Leads:</label>
          <input type="number" id="leads" name="leads" required><br>
        </div>
        <div>
          <label for="mqls">MQL's:</label>
          <input type="number" id="mqls" name="mqls" required><br>
        </div>
      </div>

      <button type="submit">Gerar Relatório</button>
    </form>

    <div id="report"></div>
  </section>
</main>

<!-- Para pegar o Footer -->
<?php get_footer(); ?>