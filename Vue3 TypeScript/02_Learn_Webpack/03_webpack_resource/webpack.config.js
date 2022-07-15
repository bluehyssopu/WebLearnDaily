const path = require("path");

module.exports = {
  entry: "./src/index.js", // 入口
  output: {
    // 为了优雅qvq 拼接路径 给一个绝对路径在后面拼接 其他路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js", // 输出的文件名
  },
  // loader配置方式 在module.rules中允许我们配置多个loader 添加rules即可
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式 转义
        // 1.loader的写法-语法糖
        // loader: 'css-loader'

        // 2. 完整写法
        use: [
          // { loader: "css-loader" }
          "style-loader",
          "css-loader",
          "postcss-loader",
          // 自动添加浏览器前缀 指明autoprefixer的loader
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // }
        ],
      },
      {
        // 也可以合并
        // test: /\.(css|less)$/,
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // {
        // test: /\.(jpe?g|png|gif|svg)$/, //正则表达式
      //   use: [
      //     {
      //       loader: "url-loader", //file-loader
      //       options: {
      //         // outputPath: 'img', 命名规则
      //         name: "img/[name]_[hash:6].[ext]",
      //         //配置尺寸大小 单位kb
      //         limit: 100 * 1024,
      //       },
      //     },
      //   ],
      // },
      {
        // webpack 5 版本 最新语法
        test: /\.(jpe?g|png|gif|svg)$/, //正则表达式
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "font/[name]_[hash:6][ext]",
      //     }
      //   }
      // },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]",
        },
      },
    ],
  },
};
