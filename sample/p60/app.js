Vue.createApp({
  data: function() {
    return {
      todoCategories: []
    }
  },
  computed: {
    joinedToDoCategories: function() {
      return this.todoCategories.join(' / ')
    },
    categoryText: function() {
      return "hogeho" + this.joinedToDoCategories
    }
  }
}).mount("#app")