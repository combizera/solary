<!DOCTYPE html>
<html lang="pt-br">

<head>
  <!-- Orgulhosamente desenvolvido por agenciasolary.com.br -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Folha de estilos -->
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">

  <!-- Google tag (gtag.js) -->
  <script defer src="https://www.googletagmanager.com/gtag/js?id=G-QP9PL9SE5C"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-QP9PL9SE5C');
  </script>

  <!-- Favicon -->
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <!-- Descrição -->
  <meta name="description" content="Construímos produtos intuitivos que atendem às necessidades dos usuários. Projetamos do 0, não utilizamos layouts prontos, cada produto é único e completo.">

  <!-- Fontes usadas -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;700&family=Poppins:wght@300;700&family=Saira:wght@300;500;700&display=swap" rel="stylesheet">

  <!-- Pacote Swiper -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
  <script defer src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

  <!-- Título -->
  <title>Agência Solary</title>

  <!-- HEADER WORDPRESS -->
  <?php wp_head(); ?>
</head>

<body>
  <!-- HEADER -->
  <header class="container">
    <div class="header-bloco">
      <div class="header-left">
        <a href="#metodologia">
          <p class="header-1">metodologia</p>
        </a>
        <a href="#diferenciais">
          <p class="header-2">diferenciais</p>
        </a>
      </div>
      <div class="header-logo">
        <a href="#">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon/log.svg" alt="Ícone Solary"></a>
      </div>
      <div class="header-right">
        <a target="_blank" href="https://forms.gle/vWMG9GMsxZWfwRJ88">
          <p class="header-3">formulário</p>
        </a>
        <a target="_blank" href="https://wa.me/5553999902079">
          <p class="header-4">contato</p>
        </a>
      </div>
    </div>
  </header>