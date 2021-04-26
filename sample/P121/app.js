const myTitle = {
  props: {
    prop: {
      type: String
    }
  },
  data: function () {
    return {
      title: this.prop
    } 
  },
  template: "#title-template"
}

const myNum = {
  props: {
    num: {
      type: Number
    }
  },
  data: function() {
    return {
      num: this.num
    } 
  },
  computed: {
    result: function() {
      return this.num * 100 
    }
  },
  template: "#num-template"
}

Vue.createApp({
  components: {
    "my-title": myTitle,
    "my-num": myNum
  }
}).mount("#app")