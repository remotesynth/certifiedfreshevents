---
title: "Concurrent Rendering in React 18"
date: 2022-01-27T15:35:00-05:00
end_date: 2022-01-27T15:45:00-05:00
speakers:
  - ifeoma-imoh
recordings:
  youtube:
    url: https://youtu.be/gAFAlckB4Jo
    length: "09:03"
event: the-jam-2022
categories:
  - javascript
draft: false
---

React could only handle one task at a time in the past, and a task could not be interrupted once it has started. This approach is referred to as Blocking Rendering. To fix the problem, Concurrent Mode — which makes rendering interruptible, was introduced in React 16, but upgrading to React 16 would automatically turn on concurrent mode for your entire application.

In favor of a gradual adoption plan that allows you to opt-in to concurrency at your own pace, concurrent mode is now replaced in React 18 with what is known as Concurrent Rendering. This talk will cover concurrent rendering is in React and how you can improve your app's performance using the concurrent features introduced in React 18.
