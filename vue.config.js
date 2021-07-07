module.exports = {
  devServer: {
    proxy: {
      '/app': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
