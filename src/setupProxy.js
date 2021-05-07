const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware(['/front'], {
        // target: 'http://xiongma-api.zzbtest.com/',
        target: 'http://hubskins.zzbtest.com/',
        changeOrigin: true
    }));
};
