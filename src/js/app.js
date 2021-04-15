Vue.createApp({
  data: function() {
    return {
      todoTitle: "タイトルを入力",
      todoDescription: "説明を入力",
      searchWord: "キーワード"
    }
  },
}).mount("#app");