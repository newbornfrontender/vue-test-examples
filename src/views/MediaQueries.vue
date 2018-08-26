<template>
  <section>
    <p>Media queries</p>
    <p>{{ window.width }}</p>
    <p v-if="bp.max.md">Hidden text</p>
  </section>
</template>

<script>
export default {
  name: 'MediaQueries',
  data () {
    return {
      window: {
        width: 0,
      },
    };
  },
  created () {
    window.addEventListener('resize', this.getClientWidth);
    this.getClientWidth();
  },
  destroyed () {
    window.removeEventListener('resize', this.getClientWidth);
  },
  methods: {
    getClientWidth () {
      this.window.width = document.documentElement.clientWidth;
    },
  },
};
</script>
