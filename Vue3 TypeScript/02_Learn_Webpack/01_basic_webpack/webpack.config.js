const path = require("path");

module.exports = {
  entry: "./src/index.js", //入口
  output: {
    // 为了优雅qvq 拼接路径 给一个绝对路径在后面拼接 其他路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js", //输出的文件名
  },
};
