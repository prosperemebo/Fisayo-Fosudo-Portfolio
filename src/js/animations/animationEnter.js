import gsap from 'gsap';

const animationEnter = (container) => {
  const textbox = container.querySelector('.header .textbox');
  const cta = container.querySelector('.cta');
  const greetings = container.querySelectorAll('.greetings .text span');
  const hero = container.querySelector('.header .hero-contain');
  const logo = container.querySelector('.logo');

  const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power4.out' } });

  tl.set(textbox, {
    autoAlpha: 1,
  });
  tl.set(logo, {
    autoAlpha: 1,
  })
    .set(hero, {
      autoAlpha: 0,
      x: 100,
    })
    .set(cta, { autoAlpha: 0 })
    .from(
      greetings,
      {
        y: 120,
        stagger: 0.2,
      },
      '-=.2'
    )

    .from(
      textbox,
      {
        y: 50,
        x: 60,
        scale: 1.2,
      },
      '-=.2'
    )
    .to(
      hero,
      {
        x: 0,
        autoAlpha: 1,
      },
      '-=1.2'
    )
    .from(
      logo,
      {
        y: -150,
      },
      '-=1.3'
    )
    .to(cta, { autoAlpha: 1 });

  return tl;
};

export default animationEnter;
