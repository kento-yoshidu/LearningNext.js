const Title = {
  props: {
    name: {
      type: String
    }
  },
  computed: {
    upperCase: function() {
      return this.name.toUpperCase();
    }
  },
  template: "#title-template"
}

Vue.createApp({
  components: {
    'my-title': Title
  }
}).mount("#app")