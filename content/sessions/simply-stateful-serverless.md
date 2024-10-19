---
categories:
- software
date: 2021-10-28 12:00:00-04:00
draft: false
featured: true
recordings:
  youtube:
    length: '47:47'
    url: https://youtu.be/qYtxfuh58vU
speakers:
- leon-stigter
tags:
- serverless
- aws
- databases
title: Simply Stateful Serverless
---


One of the things I love about serverless is that I never have to be bothered with managing servers, it’s just using a service like Lambda, Cloud Run, etc and my code is running. If I want to use a database I can rely on services like DynamoDB or CosmosDB. While I think that is absolutely great, it feels like serverless is only for stateless processes. I think serverless needs a bold and stateful vision so that we can build any type of application (stateful and stateless) without ever managing servers. In this talk, I’ll touch on why statefulness matters and how stateful serverless makes patterns like Event Sourcing and CQRS available to anyone.
