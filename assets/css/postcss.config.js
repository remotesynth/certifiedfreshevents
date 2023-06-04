const stylesDir = __dirname;

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [stylesDir]
    }),
    require('tailwindcss')('assets/css/tailwind.config.js'),
    require('autoprefixer')({
      path: [stylesDir]
    }),
  ]
}
