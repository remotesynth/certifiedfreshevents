# Certified Fresh Events

## Installation

Install Hugo: `brew install hugo`

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```

## Local Development

Run Hugo with `hugo server --disableFastRender`. This will serve the site locally at `localhost:1313`. Alternatively, run `npm run serve`.

## Design Assets

Icons by [Heroicons](https://github.com/refactoringui/heroicons). Use [HeroIcons.dev](https://heroicons.dev/) to easily identify each icon.

Icon sprites are compiled with: [svg-sprite-generator](https://www.npmjs.com/package/svg-sprite-generator)
