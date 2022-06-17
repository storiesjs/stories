module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with 'str-' as custom elements
          isCustomElement: tag => tag.startsWith("str-")
        }
      }))
  }
}