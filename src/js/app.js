Vue.createApp({
  data: function() {
    return {
      todoTitle: "タイトルを入力",
      todoDescription: "説明を入力",
      todoCategories: [],
      selectedCategory: "",
      hideDoneTodo: false,
      searchWord: "キーワード",
      order: "desc",
      categoryName: ""
    }
  },

  computed: {
    // todoタイトル、カテゴリ名が入力されているかのチェック
    canCreateTodo: function() {
      return this.todoTitle !== "";
    },
    canCreateCategory: function() {
      return this.categoryName !== "";
    }
  },

  methods: {
    createTodo: function() {
      if (!this.canCreateTodo) {
        console.log("空です")
        return
      }

      this.todoTitle = "";
      this.todoDescription = "";
      this.todoCategories = [];
    },

    createCategory: function() {
      if (!this.canCreateCategory) {
        return
      }

      this.categoryName = "";
    }

  }
}).mount("#app");