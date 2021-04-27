const myName = {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    upperName: function() {
      return this.name.toUpperCase();
    }
  },
  template: "#name-template"
}

Vue.createApp({
  components: {
    "my-title": myName
  }
}).mount("#app")