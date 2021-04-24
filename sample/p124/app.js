const countButton = {
  template: '#btn-template'
}

const countButton2 = {
  template: '#btn-template2'
}

Vue.createApp({
  data: function() {
    return {
      count: 0,
      count2: 100
    }
  },
  components: {
    'count-up-button': countButton,
    'count-up-button2': countButton2
  }
}).mount('#app')