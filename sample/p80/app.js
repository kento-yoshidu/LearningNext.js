Vue.createApp({
  data: function() {
    return {
      myObj: {
        todoTitle: ""
      }
    }
  },
  watch: {
    myObj: {
      handler: function(next, prev) {
        window.alert('変更有')
      },
      deep: true
    }
  },
  methods: {
    onClick: function(event) {
      this.myObj.todoTitle = "ほげ"
    }
  }
}).mount("#app")