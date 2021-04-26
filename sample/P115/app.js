Vue.createApp({
  components: {
    "my-title": {
      data: function() {
        return {
          title: "testtest"
        }
      },
      template: "<p>{{ title }}</p>"
    }
  }
}).mount("#app")