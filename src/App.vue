<template>
  <section id="app">
    <ComponentHeader v-bind:title="title"/>
    <ComponentMain/>
  </section>
</template>

<script>
import ComponentHeader from './components/ComponentHeader.vue';
import ComponentMain from './components/ComponentMain.vue';

export default {
  name: 'App',
  components: {
    ComponentHeader,
    ComponentMain,
  },
  data() {
    return {
      title: 'Примеры',
    };
  },
};
</script>
