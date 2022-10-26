document.addEventListener("DOMContentLoaded", () => {
  var tl = gsap.timeline();

  tl
    // cabecalho
    .from(".header-1", {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5,
      ease: "power3.out",
    });
  tl.from(
    ".header-2",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );
  tl.from(
    ".header-logo",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.8"
  );
  tl.from(
    ".header-3",
    {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      y: 50,
    },
    "-=0.5"
  );
  tl.from(
    ".header-4",
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

  // Diferenciais
  gsap.from("#diferenciais h4", {
    duration: 2,
    delay: 0.2,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#diferenciais ",
    },
  });

  gsap.from("#diferenciais__responsivo .diferenciais__txt", {
    duration: 1,
    delay: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#diferenciais__responsivo",
    },
  });

  gsap.from("#diferenciais__responsivo .diferenciais__img", {
    duration: 1,
    delay: 1.4,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#diferenciais__responsivo",
    },
  });

  gsap.from("#diferenciais__codigo .diferenciais__txt", {
    duration: 1,
    delay: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#diferenciais__codigo",
    },
  });

  gsap.from("#diferenciais__codigo .diferenciais__img", {
    duration: 1,
    delay: 1.4,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#diferenciais__codigo",
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
  gsap.from("#portfolio h2", {
    duration: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio",
    },
  });

  gsap.from("#portfolio p", {
    duration: 1,
    delay: 0.3,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio",
    },
  });

  gsap.from("#portfolio .port-item1", {
    duration: 1,
    delay: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio .port-grid",
    },
  });

  gsap.from("#portfolio .port-item2", {
    duration: 1,
    delay: 1.3,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio .port-grid",
    },
  });

  gsap.from("#portfolio .port-item3", {
    duration: 1,
    delay: 0.2,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio .port-item3",
    },
  });

  gsap.from("#portfolio .port-item4", {
    duration: 1,
    delay: 0.6,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#portfolio .port-item3",
    },
  });

  // Depoimentos
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".depo h4", {
    duration: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".depo",
    },
  });

  gsap.from(".depo-main", {
    duration: 1,
    delay: 0.3,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".depo-main",
    },
  });

  gsap.from(".swiper-slide img", {
    duration: 1,
    delay: 0.5,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".depo-main",
    },
  });

  gsap.from(".swiper-slide .depo-txt", {
    duration: 1,
    delay: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".depo-main",
    },
  });

  // Footer
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".footer-logo", {
    duration: 1,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "footer",
    },
  });
  gsap.from(".footer-email", {
    duration: 1,
    delay: 0.4,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "footer",
    },
  });
  gsap.from(".footer-social img", {
    duration: 1,
    delay: 0.4,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    stagger: { each: 0.3 },
    scrollTrigger: {
      trigger: "footer",
    },
  });
  gsap.from(".footer-cnpj", {
    duration: 1,
    delay: 1.4,
    y: 300,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "footer",
    },
  });
});
