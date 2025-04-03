const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5008', // Change this to match your backend URL
        changeOrigin: true,
        secure: false
      }
    }
  }
})
