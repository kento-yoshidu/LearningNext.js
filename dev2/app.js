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
      categoryName: "",
    }
  },
  computed: {
    // Todoアイテムが作成可能かどうか
    canCreateTodo: function() {
      return this.todoTitle !== ""
    },

    // カテゴリが作成可能かどうか
    canCreateCategory: function() {
      window.alert('todoが空')
      return this.this.categoryName !== ""
    },
  },
  methods: {
    createTodo: function() {
      if (!this.canCreateTodo) {
        return
      }

      // todo: TODoタスクを追加する処理

      //フォームの内容を初期化？
      this.todoTitle = "";
      this.todoDescription = "";
      this.todoCategories = "";
    },
    createCategory: function() {
      if (!this.canCreateCategory) {
        return
      }

      // todo: TODoタスクを追加する処理

      this.categoryName = "";
    },
  },
}).mount("#app")