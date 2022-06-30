import barba from '@barba/core';
import gsap from 'gsap/gsap-core';
import { animationEnter, animationLeave } from './animations';
import './animations/compositionAnimationDesktop';
import './animations/composition1AnimationMobile';
import './animations/composition2AnimationMobile';

const resetScroll = () => {
  // TODO: PUT THIS BACK
  // window.scrollTo(0, 0);

  // TODO: remove this
  const body = document.querySelector('body');
  body.classList.remove('lock-scroll');
};

resetScroll();

barba.init({
  transitions: [
    {
      once({ next }) {
        gsap.to('.header .intro', {
          autoAlpha: 0,
          duration: 0.6,
          delay: 0.8,
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
