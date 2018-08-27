/* eslint-disable no-extra-semi */

function setMediaExpression(prop, size) {
  return window.matchMedia(`(${prop}: ${size}px)`).matches;
};

const getMediaSizes = {
  min(size) {
    return setMediaExpression('min-width', size);
  },
  max(size) {
    return setMediaExpression('max-width', size);
  },
};

export default {
  install(Vue) {
    Vue.mixin({
      data () {
        return {
          mq: {
            max: {
              md: getMediaSizes.max(767),
            },
          },
        };
      },
      methods: {
        checkScreenSize () {
          this.mq.max.md = getMediaSizes.max(767);
        },
      },
      created () {
        window.addEventListener('resize', this.checkScreenSize);
        this.checkScreenSize ();
      },
      destroyed () {
        window.removeEventListener('resize', this.checkScreenSize);
      },
    });
  },
};
