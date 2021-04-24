const countUpButton = {
  template: '#btn-template',
  methods: {
    onClick: function() {
      //親のcountUpメソッドの呼び出し
      this.$emit('count-up')
      window.alert('hoge')
    }
  }
}

Vue.createApp({
  data: function() {
    return {
      count: 0
    }
  },
  components: {
    'count-up-button': countUpButton
  },
  methods: {
    countUp: function() {
      this.count += 1
    }
  }
}).mount("#app")