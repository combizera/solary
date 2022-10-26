## Sobre

Site que mostra alguns dos meus principais projetos pessoais, assim como também servirá de porta de entrada para novos clientes.

## Cores

--bg: #ebe7e1;
--c0: #faf8f5;
--c1: #b0b0b0;
--c2: #707070;
--c3: #404040;

## Fontes

Títulos e destaques
Serifada - Amiri
Regular e Bold

## Elementos não usados

--Footer antigo

---HTML

<footer>
  <div class="footer-bg container">
    <div class="footer-logo">
      <a href="#"><img src="./assets/img/icon/svgs/logo-footer.svg" alt="Logotipo Solary"></a>
    </div>
    <div class="footer-left">
      <div class="footer-contato">
        <p class="footer-tit">Contato</p>
        <a href="mailto:ola@solary.com.br"> ola@solary.com.br</a>
      </div>
      <div class="footer-sociais">
        <p class="footer-tit">Sociais</p>
        <a href="#"><img src="./assets/img/icon/svgs/soc-zap.svg" alt=""></a>
        <a href="#"><img src="./assets/img/icon/svgs/soc-ig.svg" alt=""></a>
        <a href="#"><img src="./assets/img/icon/svgs/soc-be.svg" alt=""></a>
      </div>
    </div>

    <div class="footer-right">
      <p class="footer-tit">Assine a newsletter</p>
      <p></p>
      <div class="footer-form">
        <form action="POST" action="./">
          <label for="news-label">Prometemos não enviar spam :p </label>
          <div class="news-bloco">
            <input id="news-email" type="email" name="news-email" placeholder="Insira aqui seu melhor e-mail" required>
            <button id="btn-insc">Inscrever</button>
        </form>
      </div>
    </div>

  </div>
</footer>
---CSS
footer {
  background-color: #404040;
  font-family: "Saira", sans-serif;
}
footer a,
label {
  font-weight: 300;
  color: #b0b0b0;
  transition: 0.3s;
}

#news-label {
line-height: 100%;
}

footer a:hover {
color: var(--bg);
}

.footer-bg {
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 60px 0;
}

.footer-left {
display: flex;
justify-content: space-between;
}
.footer-tit {
font-weight: 700;
font-size: 1.5rem;
line-height: 40px;
color: var(--bg);
}
.footer-logo {
display: flex;
align-items: center;
justify-content: center;
}

.footer-logo img {
max-width: 100px;
}

.footer-sociais:last-child {
margin-right: 0rem;
}

.footer-sociais a {
margin-right: 1rem;
}

/_ Formulário _/
.news-bloco {
position: relative;
}

input {
background-color: #ebe7e1;
width: 100%;
border-radius: 16px;
padding: 0.45rem 1rem;
margin: 0.5rem 0;
border: none;

font-family: "Saira";
font-size: 14px;

color: #abaaaa;
}

button {
cursor: pointer;
position: absolute;
top: 0;
margin: 0.5rem 0;
right: 0;
font-family: "Saira", sans-serif;

text-transform: uppercase;
padding: 0.5rem 1rem;
border-left: 0px;
border: none;
transition: 0.3s;
font-weight: 700;
line-height: 150%;
letter-spacing: 0.1em;

color: #ebe7e1;
background: linear-gradient(180deg, #7f62f4 0%, #7f44f4 100%);
border-radius: 0px 16px 16px 0px;
}
