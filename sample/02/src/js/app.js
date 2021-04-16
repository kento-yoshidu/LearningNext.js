Vue.createApp({
  data: function() {
    return {
      todoCategories: [],
    }
  },
  computed: {
    canCreateTodo: function() {
      return this.todoTitle !== "";
    }
  }
}).mount("#app");