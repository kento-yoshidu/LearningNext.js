Vue.createApp({
  data: function() {
    return {
      isActive: true
    }
  },
  computed: {
    className: function() {
      return {
        "colorRed": true,
        "backGreen": true
      }
    }
  }
}).mount("#app")