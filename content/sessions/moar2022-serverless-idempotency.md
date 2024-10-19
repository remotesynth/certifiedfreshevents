---
categories:
- software
date: 2022-08-11 12:45:00-04:00
draft: false
end_date: 2022-08-11 13:25:00-04:00
event: moar-serverless-2022
recordings:
  youtube:
    length: '38:21'
    url: https://youtu.be/X24mIe0LrgM
speakers:
- adrienne-tacke
tags:
- serverless
- computer science
title: 'One Serverless Principle to Rule Them All: Idempotency'
---


When it comes to serverless applications one principle rules them all: idempotency. This ability to rerun a function, make a REST API call, or process a message any number of times and ensure the same result is extremely hard to do reliably. In this talk, I’d like to explain and explore the importance of idempotency and discuss how we can implement it in our own systems, including:

- Idempotency’s relationship with good serverless architecture.
- How safe retries are impossible without idempotency.
- Examples of serverless frameworks and tools that help/encourage idempotency.

You’ll leave this talk with a deeper understanding and appreciation for this tongue-twisting principle and start combing through your code with an idempotent eye.
