const myTitle = {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    upperCaseName: function(value) {
      return this.name.toUpperCase()
    }
  },
  template: "#title-template"
}

Vue.createApp({
  data: function() {
    return {
      authorName: "takada"
    }
  },
  components: {
    'my-title': myTitle
  }
}).mount("#app")