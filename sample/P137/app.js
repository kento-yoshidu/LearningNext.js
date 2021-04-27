Vue.createApp({
  data: function() {
    return {
      isShow: false,
    }
  },
  methods: {
    enter: function(el, done) {
      console.log(el)
    }
  }
}).mount("#app")

