import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';

const mainMobile = document.querySelector('.main-mobile');
const composition1Image = mainMobile.querySelector('.composition-1-contain');
const composition1Headline = mainMobile.querySelectorAll(
  '.composition-text-1 .heading-attention .text'
);
const composition1Content = mainMobile.querySelectorAll(
  '.composition-text-1 .content'
);
const composition1ContentArrow = mainMobile.querySelectorAll(
  '.composition-text-1 .content img'
);
const composition2Image = mainMobile.querySelector('.composition-2-contain');
const composition2Headline = mainMobile.querySelectorAll(
  '.composition-text-2 .heading-attention .text'
);
const composition2Content = mainMobile.querySelectorAll(
  '.composition-text-2 .content'
);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'restart none none reverse',
  markers: true,
  start: 'top 90%',
  end: 'bottom 90%',
  scrub: true,
});

const compositionTimeline = gsap.timeline({
  defaults: {
    ease: 'power4.out',
  },
  scrollTrigger: {
    trigger: '.composition-text-1',
  },
});

compositionTimeline.fromTo(
  composition1Headline,
  {
    y: 120,
  },
  {
    y: 0,
    stagger: 0.3,
    duration: 0.7,
  },
  '-=0.5'
);
