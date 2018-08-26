<template>
  <section id="app">
    <Header v-bind:title="title"/>
    <Main/>
  </section>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data() {
    return {
      title: 'Примеры',
    };
  },
};
</script>
