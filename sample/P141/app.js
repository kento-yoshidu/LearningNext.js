Vue.createApp({
  data: function() {
    return {
      filterDone: false,
      items: [
        {
          title: "タイトル1",
          done: false
        },
        {
          title: "タイトル2",
          done: true
        },
        {
          title: "タイトル3",
          done: false
        },
        {
          title: "タイトル4",
          done: true
        }
      ]
    }
  },
  computed: {
    filterDoneItems: function() {
      if (this.filterDone) {
        return this.items.filter(function(item) {
          return item.done
        })
      }
      return this.items
    }
  }
}).mount("#app")

