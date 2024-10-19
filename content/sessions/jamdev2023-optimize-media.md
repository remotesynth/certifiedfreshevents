---
categories:
- software
date: 2023-01-26 12:30:00-05:00
draft: false
end_date: 2023-01-26 13:15:00-05:00
event: the-jam-2023
recordings:
  youtube:
    length: '42:35'
    url: https://youtu.be/gp-BhnMt3OI
speakers:
- colby-fayock
tags:
- webdev
- jamstack
- video
- video straming
- cloudinary
- netlify
title: Everyone Wins When You Optimize Media
---


Images and videos play a large role in any website or application. From a simple profile picture to a high resolution image of your next Amazon drone delivery, providing visuals helps to tell a story or at least set up some interesting context for that story.

But images and videos can easily bloat your site’s resources, wasting the bandwidth of your visitors and potentially hurting your store’s conversion rate or application’s engagement rates. And while there are manual tools to help us solve this, educating the team managing the site only gets us so far.

Instead we can look to automation to handle our optimization, leveraging modern tooling within our existing development pipelines and infrastructure to automatically compress our images and  videos without overcompressing and serving them in modern formats, further helping to lower the file size and time it takes to download.

We’ll see how we can use tooling to make integration optimization easy as well as how we can hook into build processes like Netlify to automate our media optimization with Cloudinary.