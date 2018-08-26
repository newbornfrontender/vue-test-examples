import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.documentElement.lang = to.meta.lang(to);
    document.title = to.meta.title(to);
  });
});

// -----------------------------------------------------------------------------

// const shared = {
//   message: '123',
// };

// shared.install = function () {
//   Object.defineProperty(Vue.prototype, '$msg', {
//     get () {
//       return shared;
//     },
//   });
// };

// Vue.use(shared);

// -----------------------------------------------------------------------------

// var mql = window.matchMedia('(max-width: 600px)');

// function screenTest(e) {
//   if (e.matches) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// }

// mql.addListener(screenTest);

// Vue.prototype.$mq = window.matchMedia('(max-width: 600px)').matches;

// -----------------------------------------------------------------------------

// Vue.mixin({
//   data () {
//     return {
//       window: {
//         width: 0,
//       },
//     };
//   },
//   created () {
//     window.addEventListener('resize', this.handleResize);
//     this.handleResize();
//   },
//   destroyed () {
//     window.removeEventListener('resize', this.handleResize);
//   },
//   methods: {
//     handleResize () {
//       this.window.width = document.documentElement.clientWidth;
//     },
//   },
//   computed: {
//     mq () {
//       const screen = this.window.width;
//       return {
//         md: screen > 500 && screen < 768,
//       };
//     },
//   },
// });

// -----------------------------------------------------------------------------

const MediaBreakpoints = {
  md: window.matchMedia('(max-width: 767px)').matches
};

MediaBreakpoints.install = function(Vue) {
  // Vue.mixin({
  //   data () {
  //     return {
  //       window: {
  //         width: 0,
  //       },
  //     };
  //   },
  //   created () {
  //     window.addEventListener('resize', this.handleResize);
  //     this.handleResize();
  //   },
  //   destroyed () {
  //     window.removeEventListener('resize', this.handleResize);
  //   },
  //   methods: {
  //     handleResize () {
  //       this.window.width = document.documentElement.clientWidth;
  //     },
  //   },
  //   computed: {
  //     mq () {
  //       const screen = this.window.width;
  //       return {
  //         md: screen > 500 && screen < 768,
  //       };
  //     },
  //   },
  // });
  // ---------------------------------------------------------------------------
  const mq = MediaBreakpoints;

  Vue.mixin({
    data () {
      return {
        bp: {
          max: {
            md: mq.md,
          },
        },
      };
    },
    created () {
      window.addEventListener('resize', this.handleResize);
      this.handleResize ();
    },
    destroyed () {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize () {
        this.bp.max.md = window.matchMedia('(max-width: 767px)').matches;
      },
    },
  });
};

Vue.use(MediaBreakpoints);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
