export default {
    '/mocker.api': {
      target: 'http://rddgit.changhong.com:7300/mock/5dd5efbdc239b926aeb04627/seid.api',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/mocker.api': '' },
    },
    '/service.api': {
      target: 'http://10.4.208.86:8100',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/service.api': '' },
    },
  }
