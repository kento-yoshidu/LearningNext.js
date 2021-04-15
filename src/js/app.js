Vue.createApp({
  data: function() {
    return {
      todoTitle: "タイトルを入力",
      todoDescription: "説明を入力",
      todoCategories: [],
      hideDoneTodo: false,
      searchWord: "キーワード"
    }
  },
}).mount("#app");