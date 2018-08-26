/* eslint-disable no-extra-semi */

import Vue from 'vue';
import Router from 'vue-router';
import ViewHome from './views/ViewHome.vue';
import ViewDynamicAttributes from './views/ViewDynamicAttributes.vue';
import ViewMediaQueries from './views/ViewMediaQueries.vue';

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
      name: 'ViewHome',
      meta: {
        lang: () => {
          return lang('ru');
        },
        title: () => {
          return title();
        },
      },
      component: ViewHome,
    },
    {
      path: '/dynamic-attributes',
      name: 'ViewDynamicAttributes',
      meta: {
        lang: () => {
          return lang('ru');
        },
        title: () => {
          return title('Dynamic attributes');
        },
      },
      component: ViewDynamicAttributes,
    },
    {
      path: '/media-queries',
      name: 'ViewMediaQueries',
      meta: {
        lang: () => {
          return lang('ru');
        },
        title: () => {
          return title('Media queries');
        },
      },
      component: ViewMediaQueries,
    },
  ],
});
