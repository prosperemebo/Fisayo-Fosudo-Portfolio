import gsap from 'gsap';

const animationLeave = (container) => {
  gsap.to(container, {
    autoAlpha: 0,
    duration: 2,
    clearProps: 'all',
    ease: 'none',
  });
};

export default animationLeave;
