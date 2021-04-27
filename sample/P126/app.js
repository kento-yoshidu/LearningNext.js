const countUpButton = {
  template: "#btn-template",
  methods: {
    addTwo: function() {
      this.$emit('count-up', 13)
    }
  }
}

Vue.createApp({
  data: function() {
    return {
      count: 1
    }
  },
  components: {
    'count-up-button': countUpButton
  },
  methods: {
    countUp: function(value) {
      this.count *= value
    }
  }
}).mount("#app")