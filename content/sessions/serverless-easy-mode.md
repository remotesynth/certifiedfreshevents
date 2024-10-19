---
categories:
- devops
date: 2017-12-15 18:52:51-04:00
draft: false
recordings:
  youtube:
    length: '37:26'
    url: https://youtu.be/xlP3TNTo9d4
speakers:
- brian-leroux
tags:
- devops
- serverless
- aws
title: Going Severless on Easy Mode
---


With functions as a service, cloud providers have signaled the smallest billable unit of computation is a single function execution. It's a beautifully simple idea, rejecting the metaphor of a server, and freeing developers to design smaller and simpler services. We can iterate on our code with a high degree of isolation, without fear of affecting other parts of the system; deploy systems in seconds with zero downtime; and always be available regardless of load.

However, building serverless-y apps is very new and as such fought with early days complexity:

- Configuration tooling was designed for the last generation of computing metaphors (and often lags behind the releases of new functionality)
- AWS is massive and overwhelming with many similar, but not the same, products
- The web console is confusing, with divergent interfaces between interlocking services
- Deep proprietary knowledge is required to configure and maintain common infrastructure primitives

In this talk Brian will walk you through a new approach to architecting applications with plain text using [arc.codes](https://arc.codes/) to create apps in minutes and subsequently deploy in seconds with zero downtime and unprecedented availability.
