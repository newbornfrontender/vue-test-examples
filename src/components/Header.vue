<template>
  <header>
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
  data () {
    return {
      list: [{
        order: '1',
        url: '/',
        text: 'Home',
      }, {
        order: '3',
        url: '/dynamic-attributes',
        text: 'Dynamic attributes',
      }, {
        order: '2',
        url: '/media-queries',
        text: 'Media queries',
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
