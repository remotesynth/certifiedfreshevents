---
categories:
- webdev
date: 2023-01-25 16:25:00-05:00
draft: false
end_date: 2023-01-25 17:10:00-05:00
event: the-jam-2023
recordings:
  youtube:
    length: '46:09'
    url: https://youtu.be/ArDHZfTRkcw
speakers:
- simon-macdonald
tags:
- webdev
- jamstack
- web components
- javascript
- javascript frameworks
- enhance
title: SSR Web Components
---


Building web apps is often characterized as painful, complex, and time consuming. There are many tools, libraries, frontend frameworks, and opinions about how to fix that problem… but they come with a catch. The frontend ecosystem is fractured into incompatible niches. They are incompatible with the web standards until they've been compiled. They are incompatible with each other, and often even incompatible themselves in between versions. This is especially frustrating as web browsers automatically update while remaining backwards compatible. The web is a medium where compatibility is a feature. By adopting non standard dialects we trade off the web's most powerful feature.

Imagine if we could write code that just worked, and ran forever? Imagine not chasing npm updates? Imagine not hunting the forums for an elusive combination of configuration values to fix a broken build?

Good news: we can. HTML, it turns out, is a pretty good choice for web development. Specifically rendering custom elements, styling them with modern CSS, and treating the element upgrade as a progressive enhancement step with JavaScript.
