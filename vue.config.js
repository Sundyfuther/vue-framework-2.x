const path = require("path");
// 是否为生产环境
// const isProduction = process.env.NODE_ENV !== "development";
// gzip压缩
// const CompressionWebpackPlugin = require("compression-webpack-plugin");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/normalize.scss")],
    });
}

module.exports = {
  productionSourceMap: false,
  publicPath: "/spcare-public/agent-promote-bm/",
  runtimeCompiler: true,
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) => addStyleResource(config.module.rule("stylus").oneOf(type)));
  },
  // configureWebpack: (config) => {
  //   // 生产环境相关配置
  //   if (isProduction) {
  //     //gzip压缩
  //     const productionGzipExtensions = ["html", "js", "css"];
  //     config.plugins.push(
  //       new CompressionWebpackPlugin({
  //         filename: "[path].gz[query]",
  //         algorithm: "gzip",
  //         test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
  //         threshold: 10240, // 只有大小大于该值的资源会被处理 10240
  //         minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
  //         deleteOriginalAssets: false, // 删除原文件
  //       })
  //     );
  //   }
  // },
};
