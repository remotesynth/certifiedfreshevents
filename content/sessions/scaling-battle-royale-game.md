---
title: "Scaling a Live Battle Royale Game With No Budget"
date: 2020-07-31T12:00:00-04:00
speakers:
  - em-lazer-walker
recordings:
  crowdcast:
    url: https://www.crowdcast.io/e/scaling-a-live-battle
    start_time: "04:07"
  vimeo:
    url: https://vimeo.com/447357320
    length: "28:12"
categories:
  - stuff
tags:
  - webdev
  - game development
  - devops
draft: false
---

When my collaborator and I built a silly online HTML5 multiplayer game as an open-source side project — Flappy Royale is a 100-player battle royale version of Flappy Bird — we didn’t expect it to go viral. But when we found ourselves going from 0 to nearly 200,000 daily users in just three days, we also found ourselves facing equivalently huge server stability issues and server costs. This talk will walk through our journey rearchitecting Flappy Royale’s backend services, and what we learned building a low-cost, low-maintenance backend for a live HTML5 multiplayer game without a dedicated operations team.

We’ll cover how serverless technologies can enable small teams to make interesting and experimental live multiplayer games, as well as the importance of game design in designing scalable architecture. Just as designers of the first online games in the 1970s, 80s, and early 90s made games suited to the bandwidth constraints of early Internet and pre-Internet networking tech, we’ll talk about how Flappy Royale’s fundamental game design lends itself to modern serverless infrastructure.
