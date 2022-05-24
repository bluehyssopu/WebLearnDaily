var app = new Vue({
  el: "#app",
  data: {
    joke: "点击按钮获取随机笑话"
  },
  methods: {
    getJoke() {
      var that = this;
      axios.get("https://autumnfish.cn/api/joke").then(function (response) {
        console.log(response.data);
        that.joke = response.data;
      }, function (err) { })
    }
  },
})