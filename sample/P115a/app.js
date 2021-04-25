const Title = {
  props: {
    prop: {
      type: String
    }
  },
  data: function() {
    return {
      title: this.prop
    }
  },
  template: "#title-template"
}

Vue.createApp({
  components: {
    'my-title': Title
  }
}).mount("#app")