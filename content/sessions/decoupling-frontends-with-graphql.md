---
categories:
- webdev
- software
date: 2021-04-22 12:00:00-04:00
draft: false
recordings:
  youtube:
    length: '32:23'
    url: https://youtu.be/ljbWF5YoIaA
speakers:
- anant-jhingran
tags:
- graphql
- databases
- APIs
- webdev
title: Decoupling Frontends and Backends with GraphQL
---


The backend developer creates APIs that reflect how they see the data. In many cases, this does not meet the needs of the frontend developer who needs data from APIs in the context of the apps they are building. The backend-for-frontend pattern grew out of this need to support multiple user interfaces with differing needs, particularly mobile interfaces. This decoupling of the frontend and backend is a good thing. It frees frontend developers from having to wait on changes to an underlying API to iterate on the UI but it can lead to a significant amount of code to bridge the divide.

In this session, we'll see how using GraphQL as the frontend API can simplify this decoupling by eliminating the need for code to make the API meet the needs of the frontend. In particular, how things like interfaces, routing, and declarative specifications in GraphQL can make decoupling much easier and accelerate application development.
