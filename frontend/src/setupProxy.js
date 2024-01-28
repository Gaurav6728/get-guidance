const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://get-guidance.onrender.com/",
      changeOrigin: true,
    })
  );
};
