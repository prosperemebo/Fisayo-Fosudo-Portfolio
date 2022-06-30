import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';

const mainMobile = document.querySelector('.main-mobile');
const composition2Image = mainMobile.querySelector('.composition-2-contain');
const composition2Headline = mainMobile.querySelectorAll(
  '.composition-text-2 .heading-attention .text'
);
const composition2Content = mainMobile.querySelectorAll(
  '.composition-text-2 .content'
);
const composition2ContentArrow = mainMobile.querySelectorAll(
  '.composition-text-2 .content img'
);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'restart none none reverse',
  //   markers: true,
  start: 'top 70%',
  end: 'bottom 70%',
  scrub: true,
});

const compositionTimeline = gsap.timeline({
  defaults: {
    ease: 'power4.out',
  },
  scrollTrigger: {
    trigger: '.main-mobile .composition-2',
  },
});

compositionTimeline
  .fromTo(
    composition2Headline,
    {
      y: 120,
    },
    {
      y: 0,
      stagger: 0.3,
      duration: 0.7,
    }
  )
  .fromTo(
    composition2Content,
    {
      y: 120,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
    },
    '-=0.7'
  )
  .fromTo(
    composition2Image,
    { autoAlpha: 0, yPercent: 50 },
    {
      autoAlpha: 1,
      yPercent: 0,
      duration: 1.2,
      delay: 0.5,
    }
  );
