const setRandomColor = {
  methods: {
    setRandomColor () {
      this.titleColor = `rgb(${
        (Math.floor(Math.random() * 256))
      }, ${
        (Math.floor(Math.random() * 256))
      }, ${
        (Math.floor(Math.random() * 256))
      })`;
    },
  },
};

export { setRandomColor };
