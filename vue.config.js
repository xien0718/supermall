module.exports = {
  configureWebpack: {
    resolve: {
      alias: { //别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        //router和store不需要因为可以通过this.$router/this.$store拿到他们
      }
    }
  },
  lintOnSave: false
}
