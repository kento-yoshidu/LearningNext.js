Vue.createApp({
  data: function(){
    return {
      todoTitle: "", //入力されたtodoのタイトル
      todoDescription: "", //入力されたdescription
      todoCategories: [], //todoのカテゴリ
      selectedCategory: " ", //検索するカテゴリ
      hideDOneTodo: false, //終了したものも表示させるかの選択
      searchWord: "", //入力された検索ワード
      order: "desc", //todoの表示順
    }
  },
  computed: {
    // Todoアイテムが作成可能かどうか
    canCreateTodo: function() {
      return this.todoTitle !== ""
    }
  }
}).mount("#app")