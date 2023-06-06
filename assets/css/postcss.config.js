const stylesDir = __dirname;

module.exports = {
  plugins: {
    'postcss-import': {
      path: [stylesDir]
    },
    tailwindcss: {
      config: 'assets/css/tailwind.config.js'
    },
    autoprefixer: {
      path: [stylesDir]
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
