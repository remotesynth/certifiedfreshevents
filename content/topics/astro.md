---
title: Astro
date: 2024-02-02T11:00:00-04:00
featured_sessions:
  - jamdev2024-astro-developer-experience
  - 2full2stack-january2024
  - jamdev2022-what-is-jamstack
  - jamdev2024-sharing-is-pearing
  - codeword2023-markdown
  - astro-from-the-ground-up
tags:
  - astro
  - webdev
  - javascript
  - javascript frameworks
speakers:
  - james-quick
  - cassidy-williams
  - fred-k-schott
  - ben-holmes
faqs:      
  -
    question: What makes Astro different?
    answer: |
      The biggest initial difference between Astro and most popular JavaScript-based, full-stack frameworks is that Astro ships zero JavaScript by default. JavaScript can be enabled for interactivity using the islands architecture.

      However, Astro has a number of other unqiue features, including it's ability to use components built with any of the major frameworks such as React, Angular, Svelte and Vue. If you wanted, you could even include multiple frameworks across the same application. Astro also supports it's own Astro components for rendering static or server rendered pages. You can include React/etc. components in an Astro component and vice-versa.

      Astro supports static rendering and/or server rendering. For server rendering, it can be deployed in a Node container or run as a decoupled application using serverless functions for rendering on a variety of platforms. This is done using Astro's adapters.

      Astro also has a large number of integrations for various tools, platforms and services.
  - 
    question: What is the islands architecture?
    answer: |
      Astro relies upon an islands archticture for interactivity. In order to reduce the amount of JavaScript sent to the client, Astro only includes JavaScript for specified components within a page rather than rendering the entire page with JavaScript. This means that some page components may render statically or on the server with no interactivity while others include JavaScript to make them interactive.

      For example, when including a React component on a page, the developer would tell Astro how to load the JavaScript using a directive. Astro supports a number of directives depending on the nature of the JavaScript included . For instance, you might load JavaScript as soon as the component is loaded or you might load JavaScript when the component becomes visible in the viewport.
---

Astro is a full-stack JavaScript framework that first debuted in 2021 and is currently at a 4.x release. Astro described itself as a content-focused web framework that aims to reduce the amount of JavaScript that developers push down to the client, thereby improving the overall performance of the web application.
      
Astro was created by Fred K. Schott. In 2022, Fred formed the Astro Technology Company which now has a team that builds and maintains Astro. Astro can be deployed on almost any platform, either within a Node container or as a decoupled application on platforms like Netlify, Vercel, Cloudflare and others.