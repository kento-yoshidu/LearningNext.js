Vue.createApp({
  data: function(){
    return {
      todoTitle: "", //入力されたtodoのタイトル
      todoDescription: "", //入力されたdescription
      todoCategories: [], //検索対象として選択されたカテゴリ
      hideDOneTodo: false, //終了したものも表示させるかの選択
      searchWord: "", //入力された検索ワード
    }
  }
}).mount("#app")