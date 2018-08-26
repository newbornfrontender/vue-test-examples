<template>
  <header>
    <div>
      <span>{{ title }}</span>
    </div>
    <nav>
      <ul>
        <li
          v-for="item in orderedList"
          v-bind:key="item.id"
        >
          <router-link v-bind:to="item.url">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Header',
  props: {
    title: String,
  },
  data () {
    return {
      list: [{
        order: '1',
        url: '/',
        text: 'Главная',
      }, {
        order: '3',
        url: '/dynamic-attributes',
        text: 'Динамические аттрибуты',
      }, {
        order: '2',
        url: '/media-queries',
        text: 'Медиа выражения',
      }],
    };
  },
  computed: {
    orderedList () {
      return _.orderBy(this.list, 'order');
    },
  },
};
</script>
