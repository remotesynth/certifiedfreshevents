---
title: "Moar Cloudflare Workers: Building a serverless platform on a serverless platform"
date: 2024-05-23T13:35:00-04:00
end_date: 2024-05-23T14:05:00-04:00
speakers:
  - natalie-rogers
event: moar-serverless-2024
draft: false
---

Over the last 5 years Cloudflare Workers has evolved from a way to intercept and dynamically augment a request on its way to a server, to a full fledged development platform capable of hosting and globally distributing large scale applications.  
  
Almost every recent feature developed at Cloudflare utilizes Workers in some way. But most of these features are still utilizing Workers in the old way, using a centralized control plane in one of our core data centers to manage how these features behave.  
  
While our platform has evolved to empower users to build the serverless applications of their dreams, our applications are stuck in the past, relying on the tired centralized model we're pushing the rest of the Internet to move beyond. How can we expect you to fully adopt our serverless platform if we're not willing (or able) to do it ourselves?  
  
Today, in possibly the most self-referential talk of all time, I'll discuss how my team is building the next generation of CI/CD for Cloudflare's Development Platform (Workers and Pages) on Cloudflare's Development Platform. I'll share:  
   
The architecture design and some of the tradeoffs we made to go serverless  
* What tools we're using and why  
* Areas where the platform is still falling short for the Workers CI/CD use case, and what we're doing about it both as a customer and as an organization