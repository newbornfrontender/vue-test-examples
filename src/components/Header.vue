<template>
  <header>
    <div>
      <span
        v-bind:class="$style.title"
        v-bind:style="{ color: titleColor }"
        v-on:click="setRandomColor"
      >{{ title }}</span>
    </div>
    <nav>
      <ul>
        <li
          v-for="item in orderedList"
          v-bind:key="item.id"
        >
          <router-link
            v-bind:active-class="$style.routerActive"
            v-bind:exact-active-class="$style.routerActiveExact"
            v-bind:to="item.url"
            v-bind:exact="item.exact"
          >{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import _ from 'lodash';
import { setRandomColor as randomColor } from '@/mixins/randomColor';

export default {
  name: 'Header',
  mixins: [
    randomColor,
  ],
  props: {
    title: String,
  },
  data () {
    return {
      list: [{
        order: '1',
        url: '/',
        text: 'Главная',
        exact: false,
      }, {
        order: '3',
        url: '/dynamic-attributes',
        text: 'Динамические аттрибуты',
        exact: false,
      }, {
        order: '2',
        url: '/media-queries',
        text: 'Медиа выражения',
        exact: false,
      }],
      titleColor: 'rgb(0, 0, 0)',
    };
  },
  computed: {
    orderedList () {
      return _.orderBy(this.list, 'order');
    },
  },
};
</script>

<style module lang="postcss">
.title {
  cursor: pointer;
}

.routerActive {
  color: green;
}

.routerActiveExact {
  color: red;
}
</style>
