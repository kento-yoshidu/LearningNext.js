const todoItem = {
  template: "#template-todo-item",
  props: {
    todo: {
      type: Object,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    hasCategories: function() {
      return this.todo.categories.length > 0
    }
  },
  methods: {
    onChangeTodo: function($event) {
      this.$emit('update:done', $event.target.checked)
    }
  }
}

Vue.createApp({
  components: {
    'todo-item': todoItem
  },
  data: function(){
    return {
      todoTitle: "", //入力されたtodoのタイトル
      todoDescription: "", //入力されたdescription
      todoCategories: [], //todoのカテゴリ
      selectedCategory: "", //検索するカテゴリ
      todos: [], //実際に存在するtodoアイテム
      categories: [], //実際に存在するカテゴリ
      hideDoneTodo: false, //終了したものも表示させるかの選択
      searchWord: "", //入力された検索ワード
      order: "desc", //todoの表示順
      categoryName: "", //入力されたカテゴリ名
    }
  },
  computed: {
    // Todoアイテムが作成可能かどうか
    canCreateTodo: function() {
      // タイトルが空でないこと
      return this.todoTitle !== ""
    },

    // カテゴリが作成可能かどうか
    canCreateCategory: function() {
      // カテゴリ名が空でないこと、かつ、既に存在していないこと
      return this.categoryName !== "" && !this.existsCategory
    },
    // カテゴリが重複しないかのチェック
    existsCategory: function() {
      const categoryName = this.categoryName
      return this.categories.indexOf(categoryName) !== -1
    },

    // todoにアイテムが登録されているかのチェック
    hasTodos: function() {
      return this.todos.length > 0
    },

    // リストに表示するTodoアイテムを返す
    resultTodos: function() {
      const selectedCategory = this.selectedCategory
      const hideDoneTodo = this.hideDoneTodo
      const order = this.order
      const searchWord = this.searchWord

      return this.todos
        .filter(function (todo) {
          return (
            selectedCategory === '' ||
            todo.categories.indexOf(selectedCategory) !== -1
          )
        })
        .filter(function (todo) {
          if (hideDoneTodo) {
            return !todo.done
          }
          return true
        })
        .filter(function (todo) {
          return (
            todo.title.indexOf(searchWord) !== -1 ||
            todo.description.indexOf(searchWord) !== -1
          )
        })
        .sort(function (a, b) {
          if (order === 'asc') {
            return a.dateTime - b.dateTime
          }
          return b.dateTime - a.dateTime
        })
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
    }
  },
  methods: {
    createTodo: function() {
      if (!this.canCreateTodo) {
        return
      }

      this.todos.push({
        id: 'todo-' + Date.now(),
        title: this.todoTitle,
        description: this.todoDescription,
        categories: this.todoCategories,
        dateTime: Date.now(),
        done: false,
      })

      //フォームの内容を初期化
      this.todoTitle = "";
      this.todoDescription = "";
      this.todoCategories = "";
    },

    createCategory: function() {
      if (!this.canCreateCategory) {
        return
      }

      this.categories.push(this.categoryName)

      this.categoryName = "";
    },

    deleteTodos: function() {
      this.todos = [];
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
  },
}).mount("#app")