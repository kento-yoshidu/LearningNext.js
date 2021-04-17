Vue.createApp({
  data: function() {
    return {
      todoTitle: "タイトルを入力",
      todoDescription: "説明を入力",
      todoCategories: [],
      selectedCategory: "",
      // 作成したtodoを格納
      todos: [],
      // 作成したカテゴリ格納
      categories: [],
      hideDoneTodo: false,
      searchWord: "キーワード",
      order: "desc",
      categoryName: ""
    }
  },

  computed: {
    //todo作成が可能かを判定
    canCreateTodo: function() {
      //todoが空ではないこと
      return this.todoTitle !== "";
    },
    //カテゴリ作成が可能かを判定
    canCreateCategory: function() {
      //カテゴリが空ではないかつ、既に存在していないこと
      return this.categoryName !== "";
    },

    //カテゴリが存在しているかを判定
    existsCategory: function() {
      const categoryName = this.categoryName;

      return this.categories.indexOf(categoryName) !== -1;
    }
  },

  watch: {
    todos: {
      handler: function(next) {
        window.localStorage.setItem('todos', JSON.stringify(next))
      },
      deep: true
    },
    categories: {
      handler: function(next) {
        window.localStorage.setItem('categories', JSON.stringify(next))
      },
      deep: true
    },
  },

  methods: {
    createTodo: function() {
      if (!this.canCreateTodo) {
        console.log("空です")
        return
      }

      this.todos.push({
        id: "todo-" + Date.now(),
        title: this.todoTitle,
        description: this.todoDescription,
        categories: this.todoCategories,
        dateTime: Date.now(),
        done: false,
      })

      this.todoTitle = "";
      this.todoDescription = "";
      this.todoCategories = [];
    },

    createCategory: function() {
      if (!this.canCreateCategory) {
        return
      }

      this.categories.push(this.categoryName);

      this.categoryName = "";
    }
  },

  created: function() {
    const todos = window.localStorage.getItem('todos')
    const categories = window.localStorage.getItem('categories')

    if(todos) {
      this.todos = JSON.parse(todos)
    }

    if(categories) {
      this.categories = JSON.parse(categories)
    }
  }
}).mount("#app");