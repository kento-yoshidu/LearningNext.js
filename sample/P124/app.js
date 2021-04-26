const countUpButton = {
  template: "#btn-template",
  methods: {
    addThree: function() {
      this.$emit("count-up")
    }
  }
}

Vue.createApp({
  data: function() {
    return {
      count: 0
    } 
  },
  components: {
    "count-up-button": countUpButton
  },
  methods: {
    countUp: function() {
      this.count += 3
    }
  }
}).mount("#app")