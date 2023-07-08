<!-- Para pegar o Header -->
<?php
// Template name: Página Cálculo
get_header(); ?>

<!-- MAIN -->
<main id="page-calculo">
  <div class="container calculo">
    <h1>Calculadora de Pontuação | ADVBOX</h1>
    <label for="pontos">Digite a quantidade de pontos feitos nesse mês:</label>
    <div>
      <input type="number" id="pontos" min="0">
      <button onclick="calcular()">Calcular</button>
    </div>
    <div id="resultado">Valor a receber: <span id="valor"></span></div>
  </div>
</main>

<!-- Para pegar o Footer -->
<?php get_footer(); ?>