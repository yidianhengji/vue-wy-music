module.exports = {
  devServer: {
    proxy: 'http://localhost:4000'
  },
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  }
}