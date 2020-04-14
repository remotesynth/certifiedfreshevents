---
title: "Promises, Generators, Async"
date: 2018-04-13T18:52:51-04:00
speakers:
    - kyle-simpson
recordings:
    crowdcast:
        url: https://www.crowdcast.io/e/fundamental-javascript/1
        start_time: 03:13
draft: false
---

[_Watch a preview for this workshop on YouTube_](https://www.youtube.com/watch?v=mnRCmzPDPO0)

You probably know about promises by now, but are you still writing your async code as long chains of `.then()`s? Did you leap for joy at the recent `.finally()` promise feature? Bah. That's all anti-pattern if you ask me. Promises are one of the most powerful concepts to be added to JS, but have one of the worst API designs of any JS feature.

So how can we make use of promises but not have to suffer this poor and confusing API? Async functions, of course! Except, async/await has some painful drawbacks. Maybe what we really want is generators.