const myTitle = {
  data: function () {
    return {
      title: "Test"
    }
  },
  template: "#title-template"
}

Vue.createApp({
  components: {
    "my-title": myTitle
  }
}).mount("#app")