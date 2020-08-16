const stylesDir = __dirname;

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    'layouts/**/*.html',
  ],
  whitelist: ['modal-active','highlight-pattern-circles','highlight-pattern-tictac','bg-carlo','bg-sky','bg-flower','bg-red','bg-salmon','bg-lightBlue','bg-jelly'],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
})

module.exports = {
  plugins: [
    require('postcss-import')({
        path: [stylesDir]
    }),
    require('tailwindcss')('assets/css/tailwind.config.js'),
    require('autoprefixer')({
        path: [stylesDir]
    }),
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
  ]
}
