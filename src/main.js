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
// Медиа-значения

import MediaQueries from './plugins/media-queries';

Vue.use(MediaQueries);

// -----------------------------------------------------------------------------

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
