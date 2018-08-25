import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable-next-line no-unused-vars */
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.documentElement.lang = to.meta.lang(to);
    document.title = to.meta.title(to);
  });
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
