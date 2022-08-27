document.addEventListener("DOMContentLoaded", () => {
  var tl = gsap.timeline();

  tl
    // cabecalho
    .from(".logo", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5,
      ease: "power3.out",
    });
  tl.from(
    ".header1",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );
  tl.from(
    ".header2",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );
  tl.from(
    ".header3",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );
  tl.from(
    ".header4",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );

  // hero
  tl.from(
    ".hero__det",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 300,
    },
    "-=0.8"
  );

  tl.from(
    ".hero__tit",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 300,
    },
    "-=0.8"
  );
  tl.from(
    ".hero__cta",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 300,
    },
    "-=0.8"
  );
  tl.from(
    ".hero__cta2",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 300,
    },
    "-=0.8"
  );
  // antes do bg__hero é preciso mexer naquela imagem
  tl.from(
    ".bg__hero",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 300,
    },
    "-=0.8"
  );

  // depois do scroll
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".meto__bg", {
    duration: 2,
    delay: 0.2,
    x: -1000,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#metodologia ",
    },
  });

  gsap.from("#metodologia li", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#metodologia",
    },
  });

  // Números
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#numeros", {
    duration: 1,
    x: -1000,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#numeros",
    },
  });

  gsap.from(".num__grid div", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#numeros",
    },
  });

  // Portfólio
  gsap.registerPlugin(ScrollTrigger);
  gsap.from("#portfolio .sec__tit", {
    duration: 1.5,
    delay: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio",
    },
  });

  gsap.from(".port__itens div", {
    duration: 1,
    delay: 2,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio",
    },
  });

  // Feedback
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".feed__img", {
    duration: 1.5,
    delay: 0.5,

    x: -600,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#feedback",
    },
  });

  gsap.from(".feed__tit", {
    duration: 1,
    delay: 0.7,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#feedback",
    },
  });

  gsap.from(".feed__depo", {
    duration: 1,
    delay: 0.9,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#feedback",
    },
  });

  gsap.from(".feed__pessoa", {
    duration: 1,
    delay: 1.1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#feedback",
    },
  });
});
