import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';

const footer = document.querySelector('.footer');
const footerHeadline = footer.querySelectorAll('.heading-attention .text');
const footerBtn = footer.querySelectorAll('.textbox .btn');
const footerImage = footer.querySelector('.composition-contain');
const foot = footer.querySelector('.foot');

console.log(foot);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'restart none none reverse',
  start: '20% 70%',
  end: '80% 70%',
  scrub: true,
});

const timeline = gsap.timeline({
  defaults: {
    ease: 'power4.out',
  },
  scrollTrigger: {
    trigger: '.footer',
  },
});

timeline
  .fromTo(
    footerHeadline,
    {
      y: 120,
    },
    {
      y: 0,
      stagger: 0.4,
      duration: 2,
      delay: 2.5,
    }
  )
  .fromTo(
    footerImage,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 2,
      // delay: 0.7,
    }
  )
  .fromTo(
    footerBtn,
    { autoAlpha: 0 },
    {
      duration: 1.2,
      autoAlpha: 1,
    },
    '-=2'
  )
  .fromTo(
    foot,
    { autoAlpha: 0 },
    {
      duration: 1.2,
      //   delay: 1,
      autoAlpha: 1,
    }
  );
