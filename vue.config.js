module.exports = {
  css: {
    loaderOptions: {
      less: {
        // If you are using less-loader@5 please spread the lessOptions to options directly
        modifyVars: {
          "primary-color": "#78ba65",
          "link-color": "#1890ff",
          "border-radius-base": "6px",
          "@success-color": "#78ba65"
        },
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/", // 要访问的接口域名
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "", //这里理解成用'/api'代替target里面的地址,比如我要调用'http://localhost:8088/user/list'，直接写'/api/user/list'即可
        },
      },
    },
  },
};
