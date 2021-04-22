const test = {
  props: {
    name: {
      type: String,
    },
  },
  /*
  computed: {
    upperCase: function() {
      return this.name.toUpperCase()
    },
  },
  */
  data: function(){
    return {
      upperCase: this.name
    }
  },
  template: "#title-template",
}
Vue.createApp({
  data: function() {
    return {
      author: 'yamada'
    }
  },
  components: {
    'my-title': test,
  }
}).mount("#app")