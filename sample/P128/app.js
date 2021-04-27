const countUpButton = {
  template: "#btn-template",
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClick: function() {
      this.$emit("count-up", this.count)
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
      this.count += value
    }
  }
}).mount("#app")