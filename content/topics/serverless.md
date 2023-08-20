---
title: Serverless
date: 2023-07-09T11:00:00-04:00
featured_sessions:
  - moar2022-past-present-future-serverless
  - multi-tenant-saas-aws
  - moar2022-serverless-idempotency
  - serverless-pwa-with-firebase
  - getting-started-serverless
  - moar2022-living-on-the-edge
tags:
  - serverless
  - cloud
speakers:
  - jeremy-daly
  - anubhav-sharma
  - adrienne-tacke
  - gift-egwuenu
faqs:      
  -
    question: Where do I deploy my serverless application?
    answer: |
      Several prominent cloud providers offer serverless computing platforms. AWS Lambda is widely recognized as a pioneer in serverless and still dominates the space. Lambda provides multiple language options for serverless funcitons including Python, Go and JavaScript.  Microsoft's Azure Functions provides similar capabilities with the benefit of strong integration within the Microsoft ecosystem. Similarly, Google Cloud Functions includes tight integration with other Google services. Cloudflare Workers are also serverless functions but deployed to Cloudflare's edge network.

      In addition to many of these large cloud providers, other platforms offer built-in serverless integration and deployment, typically built on top of one of the major providers. These would include services like Netlify and Vercel.
  -
    question: What is the meaning of edge serverless?
    answer: |
      A typical serverless function is deployed to a single region within the cloud provider's infrastructure. This means that, when the function is called from across the globe, the call and response needs to traverse the distance to the server region, which can add noticeable latency. Edge functions are similar to traditional serverless functions but are replicated across "edge nodes", which are typically CDNs, across the globe. When they get called, the call will get processed by the node closest to the request, reducing the latency.

      Edge functions can also do some things a typical serverless function cannot, such as intercepting the request and/or response. This is often referred to as middleware. The function can then make changes to the request, for instance redirecting an unauthenticated request, or modify the response, for example adding personalization.
---

Serverless computing is a cloud computing model that fundamentally shifts the way developers manage and deploy applications. Contrary to its name, "serverless" doesn't imply the absence of servers, but rather abstracts away the need for managing the underlying server infrastructure. It allows developers to focus on writing and deploying code without concerning themselves with the provisioning, scaling, or maintenance of servers. Often this takes the form of serverless functions, which are event-driven and triggered by events like HTTP requests, database changes, or scheduled tasks.

Serverless architecture encourages the development of smaller, modular functions, which can be independently deployed and scaled. This microservices-like approach can enhance application modularity, scalability, and maintainability. Serverless is well-suited for event-driven, short-lived tasks and applications with varying workloads. Applications that require things like persistent connections or large memory footprints might not be a great fit.