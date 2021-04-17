Vue.createApp({
  data: function() {
    return {
      todos: [
        {
          title: "タスク1"
        },
        {
          title: "タスク2"
        },
      ],
    }
  },
  watch: {
    kgaoprjg: {
      handler: function(next, prev) {
        console.log("ヘンコウガアリアマシ")
      },
      deep: true,
    }
  },
  methods: {
    onClick: function(event) {
      this.todos[1].title = "たすく2"
    }
  }
}).mount("#app");