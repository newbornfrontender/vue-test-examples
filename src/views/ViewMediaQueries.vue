<template>
  <section>
    <h1>Медиа выражения</h1>
    <p>
      <b>{{ window.width }}</b>
    </p>
    <p v-if="bp.max.md">Скрытый текст</p>
  </section>
</template>

<script>
export default {
  name: 'ViewMediaQueries',
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
