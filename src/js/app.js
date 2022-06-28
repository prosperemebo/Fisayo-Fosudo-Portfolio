import barba from '@barba/core';
import gsap from 'gsap/gsap-core';
import { animationEnter, animationLeave } from './animations';

barba.init({
  transitions: [
    {
      once({ next }) {
        gsap.to('.header .intro', {
          autoAlpha: 0,
          duration: 0.6,
          delay: 0.5,
          onComplete: () => animationEnter(next.container),
        });
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
    },
  ],
});
