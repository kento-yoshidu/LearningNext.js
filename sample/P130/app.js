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
      this.$emit("update:count", this.count + 1)
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
}).mount("#app")