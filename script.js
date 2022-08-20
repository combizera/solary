document.addEventListener("DOMContentLoaded", () => {
  var tl = gsap.timeline();

  tl
    // cabacalho
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

  gsap.from("#metodologia li", {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: { each: 0.3 },
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#metodologia li",
    },
  });

  // gsap.registerPlugin(ScrollTrigger);

  // gsap.from("#step", {
  //   duration: 2,
  //   y: 300,
  //   opacity: 0,
  //   stagger: { each: 0.2 },
  //   ease: "power3.out",
  //   ScrollTrigger: {
  //     trigger: "#step",
  //   },
  // });
});
