/* eslint-disable no-extra-semi */

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import DynamicAttributes from './views/DynamicAttributes.vue';

Vue.use(Router);

function lang(page) {
  const langSite = 'en';
  const langPage = page || langSite;

  return langPage;
};

function title(sub) {
  const titlePage = 'VTE';
  const titleSub = sub || '';

  if (titleSub) {
    return `${titlePage} | ${titleSub}`;
  };

  return titlePage;
};

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        /* eslint-disable-next-line no-unused-vars */
        lang: (route) => {
          return lang();
        },
        /* eslint-disable-next-line no-unused-vars */
        title: (route) => {
          return title();
        },
      },
      component: Home,
    },
    {
      path: '/dynamic-attributes',
      name: 'DynamicAttributes',
      meta: {
        /* eslint-disable-next-line no-unused-vars */
        lang: (route) => {
          return lang();
        },
        /* eslint-disable-next-line no-unused-vars */
        title: (route) => {
          return title('Dynamic attributes');
        },
      },
      component: DynamicAttributes,
    },
  ],
});
