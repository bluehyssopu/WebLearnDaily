"use strict";

var message = "Hello World";
var names = ["abc", "des", "nba"]; // 输出 npx babel demo.js --out-dir dist
// npx babel demo.js --out-file test.js
// 使用插件 plugin-transform-arrow-functions 转化箭头函数
// 使用插件 plugin-transform-block-scoping 将 const 转换为 var

names.forEach(function (item) {
  return console.log(item);
}); // 如果转换的内容过多 使用babel预设 preset
// npx babel demo.js --out-file test.js --presets=@babel/preset-env
