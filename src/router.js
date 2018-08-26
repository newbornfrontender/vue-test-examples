/* eslint-disable no-extra-semi */

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import DynamicAttributes from './views/DynamicAttributes.vue';
import MediaQueries from './views/MediaQueries.vue';

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
  linkActiveClass: 'routerActive',
  linkExactActiveClass: 'routerActiveExact',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        lang: () => {
          return lang('ru');
        },
        title: () => {
          return title();
        },
      },
      component: Home,
    },
    {
      path: '/dynamic-attributes',
      name: 'DynamicAttributes',
      meta: {
        lang: () => {
          return lang('ru');
        },
        title: () => {
          return title('Dynamic attributes');
        },
      },
      component: DynamicAttributes,
    },
    {
      path: '/media-queries',
      name: 'MediaQueries',
      meta: {
        lang: () => {
          return lang('ru');
        },
        title: () => {
          return title('Media queries');
        },
      },
      component: MediaQueries,
    },
  ],
});
