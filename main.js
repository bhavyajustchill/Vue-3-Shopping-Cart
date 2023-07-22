const app = Vue.createApp({
  // data() {} is same as data: function() {}
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
