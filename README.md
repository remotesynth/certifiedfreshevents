# Certified Fresh Events

[CFE.dev](https://cfe.dev) is a site that hosts virtual meetups, conferences, talk shows and workshops for developers. The site is build as fully static using [Hugo](https://gohugo.io). We welcome contributions to the site, including improvements to the site functionality, corrections to text, transcripts and source code or design improvements.

All upcoming and past events are in the `/content/events` directory. An event should be made up of one or more sessions from the `/sessions` directory. Every session should be made up of one or more speakers, which are in the `/speakers` directory.

Our various talk show home pages are in the `/talkshow` directory and the episodes are in the `/talkshows` directory. A talk show is typically made up of one or more hosts and one or more guests from the `/speakers` directory.

Transcripts for both the sessions and talk shows are in the `/transcripts` directory. The file name should match the show it is transcribing.

## Installation

Install Hugo: `brew install hugo`

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```

## Local Development

Run Hugo with `hugo server --buildFuture`. This will render both past events and upcoming events.

## Design Assets

Icons by [Heroicons](https://github.com/refactoringui/heroicons). Use [HeroIcons.dev](https://heroicons.dev/) to easily identify each icon.

Icon sprites are compiled with: [svg-sprite-generator](https://www.npmjs.com/package/svg-sprite-generator)

### Adding Categories

Each category is visually represented with an icon, color, and pattern. For a list of all available colors, see `assets/css/tailwind.config.js`.

Any repeatable pattern will work, but initial patterns were selected from [Hero Patterns](https://www.heropatterns.com/).
