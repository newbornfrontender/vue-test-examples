<template>
  <header>
    <nav>
      <ul>
        <li
          v-for="item in list"
          v-bind:key="item.id"
        >
          <router-link v-bind:to="item.url">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      list: [{
        url: '/',
        text: 'Home',
      }, {
        url: '/dynamic-attributes',
        text: 'Dynamic attributes',
      }],
    };
  },
};
</script>
