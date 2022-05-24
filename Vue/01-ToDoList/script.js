var app = new Vue({
  el: "#todoapp",
  data: {
    list: ['写代码', '看番', '睡觉'],
    inputValue: ""
  },
  methods: {
    add() {
      // 新建项后 输入项初始化
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    remove(index) {
      // console.log('删除');
      // console.log(index);
      this.list.splice(index, 1);
    },
    clear() {
      // 列表内容清空
      this.list = [];
      // 输入框内容为空
      this.inputValue = "";
    }
  },
  
})