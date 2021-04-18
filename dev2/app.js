Vue.createApp({
  data: function(){
    return {
      todoTitle: "", //入力されたtodoのタイトル
      todoDescription: "", //入力されたdescription
      searchWord: "", //入力された検索ワード
    }
  }
}).mount("#app")