Vue.createApp({
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    onClickCountUp: function(event) {
      console.log(event.offsetX)
      this.count += 1;
    }
  }
}).mount("#app");