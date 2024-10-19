---
categories:
- javascript
date: 2018-04-13 18:52:51-04:00
draft: false
recordings:
  youtube:
    length: 01:57:44
    url: https://youtu.be/8pgCNuuAPKI
speakers:
- kyle-simpson
tags:
- javascript
- computer science
title: Promises, Generators, Async
---


[_Watch a preview for this workshop on YouTube_](https://www.youtube.com/watch?v=mnRCmzPDPO0)

You probably know about promises by now, but are you still writing your async code as long chains of `.then()`s? Did you leap for joy at the recent `.finally()` promise feature? Bah. That's all anti-pattern if you ask me. Promises are one of the most powerful concepts to be added to JS, but have one of the worst API designs of any JS feature.

So how can we make use of promises but not have to suffer this poor and confusing API? Async functions, of course! Except, async/await has some painful drawbacks. Maybe what we really want is generators.
