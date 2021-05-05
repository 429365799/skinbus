const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy(['/tool', '/yuesao', '/admin', '/new_captcha','/ownSource'], {
        // target: 'http://xiongma-api.zzbtest.com/',
        target: 'http://hub.zzbtest.com/',
        changeOrigin: true
    }));
};
