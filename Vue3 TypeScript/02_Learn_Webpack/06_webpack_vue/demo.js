const message = "Hello World";
const names = ["abc", "des", "nba"];
// 输出 npx babel demo.js --out-dir dist
// npx babel demo.js --out-file test.js

// 使用插件 plugin-transform-arrow-functions 转化箭头函数
// 使用插件 plugin-transform-block-scoping 将 const 转换为 var
names.forEach(item => console.log(item));

// 如果转换的内容过多 使用babel预设 preset
// npx babel demo.js --out-file test.js --presets=@babel/preset-env

// babel 将一种源代码转化成另一种源代码(es6->es5) 本质上就是一个编译器
// 源代码 -> 解析(parse) -> 转换(transform) -> 生成(generator) -> 目标代码
// https://vip2.loli.io/2022/08/20/fC48XVrn1SpUtH7.png
// 手写一个babel: https://github.com/jamiebuilds/the-super-tiny-compiler