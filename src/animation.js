export const textAnimate = {
  hide: {
    y: 70,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

export const imageAnimate = {
  hide: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1.6,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.6,
    },
  },
};

export const headerAnimate = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.8,
    },
  },
};

