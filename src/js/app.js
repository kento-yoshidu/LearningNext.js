Vue.createApp({
  data: function() {
    return {
      todoTitle: "タイトルを入力",
      todoDescription: "説明を入力",
      todoCategories: [],
      selectedCategory: "",
      hideDoneTodo: false,
      searchWord: "キーワード",
      order: "desc"
    }
  },
}).mount("#app");