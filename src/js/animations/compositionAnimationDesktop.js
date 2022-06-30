import gsap from 'gsap/gsap-core';
import ScrollTrigger from 'gsap/ScrollTrigger';

const mainDesktop = document.querySelector('.main-desktop');
const composition1Image = mainDesktop.querySelector('.composition-1-contain');
const composition1Headline = mainDesktop.querySelectorAll(
  '.composition-text-1 .heading-attention .text'
);
const composition1Content = mainDesktop.querySelectorAll(
  '.composition-text-1 .content'
);
const composition1ContentArrow = mainDesktop.querySelectorAll(
  '.composition-text-1 .content img'
);
const composition2Image = mainDesktop.querySelector('.composition-2-contain');
const composition2Headline = mainDesktop.querySelectorAll(
  '.composition-text-2 .heading-attention .text'
);
const composition2Content = mainDesktop.querySelectorAll(
  '.composition-text-2 .content'
);
gsap.registerPlugin(ScrollTrigger);

const compositionTimeline = gsap.timeline({
  defaults: {
    duration: 4,
    ease: 'linear',
  },
});

compositionTimeline
  .set(composition1Image, { autoAlpha: 0, yPercent: 50 })
  .set(composition1Headline, {
    y: 120,
  })
  .set(composition2Image, { autoAlpha: 0, yPercent: 50 })
  .set(composition2Headline, {
    y: 120,
  })
  .set(composition1Content, {
    y: 120,
    autoAlpha: 0,
  })
  .set(composition2Content, {
    y: 120,
    autoAlpha: 0,
  })
  .to(composition1Image, {
    autoAlpha: 1,
    yPercent: 0,
    duration: 0.7,
  })
  .to(
    composition1Headline,
    {
      y: 0,
      stagger: 0.3,
      duration: 0.7,
    },
    '-=0.5'
  )
  .to(
    composition1Content,
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
    },
    '-=0.7'
  )

  .to('.main-desktop', {
    x: () =>
      `-${mainDesktop.scrollWidth - document.documentElement.clientWidth}px`,
  })
  .to(
    composition2Image,
    {
      autoAlpha: 1,
      yPercent: 0,
      duration: 0.7,
    },
    '-=3'
  )
  .to(
    composition2Headline,
    {
      y: 0,
      stagger: 0.3,
      duration: 0.7,
    },
    '-=2'
  )
  .to(
    composition2Content,
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
    },
    '-=1.5'
  )
  .to(
    composition1ContentArrow,
    {
      xPercent: 350,
      autoAlpha: 0,
      duration: 0.7,
    },
    '-=4'
  );

ScrollTrigger.create({
  animation: compositionTimeline,
  trigger: '.main-desktop',
  start: 'top top',
  invalidateOnRefresh: true,
  end: () => '+=' + mainDesktop.scrollWidth,
  scrub: true,
  pin: true,
});
