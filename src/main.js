/* eslint-disable no-extra-semi */

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// -----------------------------------------------------------------------------
// Мета-информация

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.documentElement.lang = to.meta.lang(to);
    document.title = to.meta.title(to);
  });
});

// -----------------------------------------------------------------------------
// Медиа точки

function mq(prop, size) {
  return window.matchMedia(`(${prop}: ${size}px)`).matches;
};

const bp = {
  min(size) {
    return mq('min-width', size);
  },
  max(size) {
    return mq('max-width', size);
  },
};

const MediaBreakpoints = {
  bp: {
    max: {
      md: bp.max(767),
    },
  },
};

MediaBreakpoints.install = function(Vue) {
  Vue.mixin({
    data () {
      return MediaBreakpoints;
    },
    created () {
      window.addEventListener('resize', this.getMatchMedia);
      this.getMatchMedia ();
    },
    destroyed () {
      window.removeEventListener('resize', this.getMatchMedia);
    },
    methods: {
      getMatchMedia () {
        this.bp.max.md = bp.max(767);
      },
    },
  });
};

Vue.use(MediaBreakpoints);

// -----------------------------------------------------------------------------

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
