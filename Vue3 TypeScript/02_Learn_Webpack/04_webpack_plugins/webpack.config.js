const path = require("path");
// 引入 clean-webpack-plugin插件 每次run build后自动删除原本生成的打包文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // 设置模式
  // development 开发阶段设置
  // production 准备打包上线时设置 mode配置表示更多 
  mode: 'development',
  // 设置source-map,建立映射文件，方便调试错误，开发模式一般开启
  devtool: 'source-map',
  entry: "./src/index.js",
  output: {
    // 为了优雅qvq 拼接路径 给一个绝对路径在后面拼接 其他路径
    // path: path.resolve(__dirname, "./build"),
    path: path.resolve(__dirname, "./dist"),
    filename: "js/bundle.js", // 输出的文件名
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
  // 配置插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      title: "public模板",
      hash: true,
    }),
    new DefinePlugin({
      // 这里填 "./"会报错
      BASE_URL: "'./'",
    }),
    // CopyWebpackPlugin 复制文件（实例是复制public中的favicon.ico文件 至 打包后的文件夹）
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          // to: './',
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};
