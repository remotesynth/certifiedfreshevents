---
title: "Decoupling Frontends and Backends with GraphQL"
date: 2021-04-22T12:00:00-04:00
speakers:
    - anant-jhingran
recordings:
  crowdcast:
    url: https://www.crowdcast.io/e/decoupling-frontends-and
    start_time: "04:00"
  vimeo:
    url: https://vimeo.com/569022182
    length: "32:23"
categories:
  - webdev
  - software
draft: false
---

The backend developer creates APIs that reflect how they see the data. In many cases, this does not meet the needs of the frontend developer who needs data from APIs in the context of the apps they are building. The backend-for-frontend pattern grew out of this need to support multiple user interfaces with differing needs, particularly mobile interfaces. This decoupling of the frontend and backend is a good thing. It frees frontend developers from having to wait on changes to an underlying API to iterate on the UI but it can lead to a significant amount of code to bridge the divide.

In this session, we'll see how using GraphQL as the frontend API can simplify this decoupling by eliminating the need for code to make the API meet the needs of the frontend. In particular, how things like interfaces, routing, and declarative specifications in GraphQL can make decoupling much easier and accelerate application development.
