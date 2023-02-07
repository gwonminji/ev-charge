module.exports = {
    outputDir: 'docs',
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/helpers/global.scss";`
        }
      }
    }
  }