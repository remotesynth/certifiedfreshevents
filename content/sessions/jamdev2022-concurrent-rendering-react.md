---
categories:
- javascript
date: 2022-01-27 15:35:00-05:00
draft: false
end_date: 2022-01-27 15:45:00-05:00
event: the-jam-2022
recordings:
  youtube:
    length: 09:03
    url: https://youtu.be/gAFAlckB4Jo
speakers:
- ifeoma-imoh
tags:
- webdev
- jamstack
- javascript
- javascript frameworks
- react
title: Concurrent Rendering in React 18
---


React could only handle one task at a time in the past, and a task could not be interrupted once it has started. This approach is referred to as Blocking Rendering. To fix the problem, Concurrent Mode — which makes rendering interruptible, was introduced in React 16, but upgrading to React 16 would automatically turn on concurrent mode for your entire application.

In favor of a gradual adoption plan that allows you to opt-in to concurrency at your own pace, concurrent mode is now replaced in React 18 with what is known as Concurrent Rendering. This talk will cover concurrent rendering is in React and how you can improve your app's performance using the concurrent features introduced in React 18.
