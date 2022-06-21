module.exports = {
  devServer: {
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/", // 目标
        changeOrigin: true, // 换一个源
        ws: true, //  websocket  开启
        secure: false, //  https检查  关闭
        pathRewrite: {
          "^/api": "" // api后面的字段
        }
      }
    }
  },
  // lintOnSave: false
}