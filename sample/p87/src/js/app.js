Vue.createApp({
  data: function() {
    return {
      isActive: true,
      isHoge: true
    }
  },
  computed: {
    classNameComputed: function() {
      return 'from0computed-name'
    }
  },
  methods: {
    classNameMethod: function() {
      return 'from-method-class-name'
    }
  }
}).mount("#app");