---
title: What the Heck is Edge Computing?
date: 2023-04-23T13:00:00-04:00
summary: A look at what edge computing is as well as the benefits, confiderations and potential drawbacks to using it.
---

Edge compute is the distribution of serverless functions to thousands of locations worldwide, handling requests as close to the user as possible. This leads to programmable, dynamic, customizable responses with minimal latency, that can potentially make your application perform faster.

To better understand edge compute, let's first define compute. Compute refers to the amount of work computers must perform to generate output. 

> This article is based upon [a presentation by Austin Gil](https://cfe.dev/sessions/what-is-edge-computing/), a web educator and developer at Akamai, one of the largest CDN providers, which also offers compute at the edge.

## What do We Mean by Compute



![define edge compute](/img/blog/edge-computing/00-02-24_idx-011.jpg)

There are various methods of generating output like HTML, PDF, dynamic images, or JSON. The main options include traditional servers for server-side rendering, client-side rendering, static site generation, and rendering in the cloud via Cloud Functions. 

Traditional servers involve running software on a machine you've chosen to execute your code and generate the desired output. These servers offer predictable pricing, unbounded run times, and complete control. However, this also means you pay even when the server isn't actively working, and scaling can be complicated. Additionally, deploying to a single location might cause latency for users in other parts of the world. Moreover, you'll be responsible for maintaining server software in addition to your application. Think of traditional servers like a commercial workspace: you either own or rent the space, providing machinery and workers, but pay the bill regardless of the number of clients you serve.

![traditional servers](/img/blog/edge-computing/00-03-42_idx-014.jpg)

## Exploring Rendering Methods: Client-side, Static Site Generators, and Serverless Functions

Client-side rendering involves sending code to the user's browser, where it's responsible for generating the HTML for the page. This can be done using JavaScript or WebAssembly. The benefits include reduced latency, as the code is running on the user's machine, and potentially offline functionality with a service worker. However, there are downsides are that the initial download size is larger, secrets cannot be hidden in the code, you have less control over the environment, and performance depends on the user's device.

Static site generators, on the other hand, pre-build all pages in an application and generate static resources that can be deployed to various targets. When a user requests a page, there's no need to build it on demand – they simply receive a static asset. This approach falls under the server-side rendering umbrella, since it runs in environments like Node.js, Go, or PHP.

![client side rendering](/img/blog/edge-computing/00-06-00_idx-017.jpg)

The main advantages of using pre-built assets are immediate response time, easy deployment to CDNs, and being fast, cheap, and secure due to static nature. However, there are some drawbacks, such as the inability to handle dynamic content like logins or authenticated content without combining client-side rendering or other dynamic rendering methods. Additionally, the build time for static site generators increases linearly with the number of pages, potentially causing delays in generating a large amount of content.

![static site generators](/img/blog/edge-computing/00-08-18_idx-020.jpg)

In terms of compute resources, Cloud Functions (also known as Lambda Functions or Serverless Functions) enable a cloud provider to manage the necessary computing and scaling of an application based on the user-created functions. The provider maintains the machines and server-side software, handles requests, and passes them to the designated functions. Often, a URL is provided for the function to receive requests.

![cloud functions](/img/blog/edge-computing/00-11-42_idx-024.jpg)

Serverless Functions offer several advantages, including easy provisioning and infinite scalability. As traffic to a URL increases, service providers can allocate more machines to run the same function. The pay-for-what-you-use model can make pricing more affordable, especially for low-traffic applications. Since the service provider maintains server software, developers only need to focus on business logic and function code, simplifying maintenance.

However, there are drawbacks to Serverless Functions. Developers must adhere to conventions set by the provider, such as naming, file structure, and stateless principles. Due to the scaling nature, shared state, memory, or file systems cannot be relied upon. Service providers also determine available software and languages, limiting choices for developers. Finally, like traditional servers, Cloud Functions can suffer from latency if deployed far from the user requesting it.

## Exploring Edge Compute: Cloud Functions, CDNs, and Performance Optimization

Now, let's discuss the edge part of edge compute. The edge is essentially a globally distributed network of computers capable of handling user requests. The importance of edge computing lies in reducing latency. By placing resources closer to users around the world, we can decrease the time it takes for users to make a request and receive a response, ultimately improving their experience.

![content delivery network](/img/blog/edge-computing/00-14-09_idx-028.jpg)

A content delivery network (CDN) is an excellent example of the edge in web development. It consists of thousands of connected computers that deliver resources to users upon request. CDNs are particularly effective for reducing latency due to their proximity to users, often within a few miles. They work well for distributing static resources, such as CSS, JavaScript, images and fonts, generated by static site generators. However, CDNs are not suitable for applications that require dynamic content. A big part of the improved performance is in terms of reduced distance – the amount of distance a request and response must travel.

Latency, download size, and device capabilities are crucial factors affecting web performance. While edge compute doesn't solve the download and device issues, it can greatly improve the the distance. By bringing processing closer to the user, similar to Content Delivery Networks (CDNs), we can improve performance and reduce latency.

![user experience performance](/img/blog/edge-computing/00-15-39_idx-031.jpg)

## Exploring the Advantages of Edge Compute

Edge compute can be used to perform dynamic server-side functionality but executed as close to the user as possible. This not only improves user experience but also offers reliable location information that is not possible with a traditional server. Additionally, many edge compute providers grant access to a key-value store for persistent data on the edge, enabling more customized and dynamic experiences for users without the limitations of pre-built or static options.

![benefits to users](/img/blog/edge-computing/00-19-06_idx-039.jpg)

Moving rendering to edge compute versus client-side rendering also means less data downloading. This results in better battery life and performance for users' devices. 

For developers, edge functions are easy to set up, have a low barrier of entry for proofs of concept, and provide consistent environments. Dynamic content can be based on users' locations without worrying about secret leaks, and JavaScript is the most widely supported programming language on the edge. Additionally, maintaining server infrastructure is unnecessary.

For business owners, dynamic compute at the edge reduces the workload on origin servers, improving performance, reliability, and potentially reducing costs. Edge compute provides automatic scaling and global request distribution. Most edge compute providers offer a pay-as-you-go model, which can save costs. However, it's essential to remember that no solution is perfect and should be considered as the ultimate answer.

![benefits to developers](/img/blog/edge-computing/00-20-00_idx-040.jpg)

## Challenges and Considerations in Edge Computing Adoption

Edge compute has its challenges that need to be understood before adopting it. One issue is that many edge compute providers rely on V8 isolates — JavaScript running on the edge — which differs from Node.js. While more resources are being added to edge providers, edge compute offerings usually have fewer resources in terms of function runtime and memory, so avoid long-running functions.

Furthermore, most prominent edge compute providers only allow HTTP as the networking protocol, limiting actions like database access. For instance, establishing a Postgres connection at an edge node might not be possible. However, an edge node can connect to a proxy server that communicates with the database.

It's essential to consider the architectural decisions, as proximity to the user doesn't always guarantee better performance. To illustrate this, imagine a proxy service in the same region as a database (the target). The user (computer emoji in the image below), server (waiter emoji), edge (knife emoji), and target (origin server). Running multiple sequential requests that go from the edge to the server and back is actually slower than running those requests on the server. Careful planning is required to ensure optimal performance in such scenarios.

![multiple sequential requests](/img/blog/edge-computing/00-26-30_idx-045.jpg)

Traditionally, browsers cannot communicate directly with a database, so an intermediary is needed to handle requests and responses. In a typical setup, a user sends a lengthy request to a server located near the database, resulting in a short connection. With edge computing, the user connects to an edge node with a short hop, but the request might still have a long distance to travel if the target service is far away.

The duration of a request-response cycle depends on the distance between the target and the edge compute node. While edge computing reduces some time due to the shorter distance, multiple sequential or waterfall requests can still cause delays. For example, a request may go from the user to the proxy, then to a service, back to the proxy, and so on before finally reaching the user.

![proxy server in distant region](/img/blog/edge-computing/00-25-24_idx-044.jpg)

## Exploring Edge Computing: Use Cases

Edge computing allows for various optimizations, such as modifying requests to inject ads without client-side ad blocking interference or enabling fast static searches with low latency. This is useful for auto-complete suggestions and store locators, as they don't change frequently. Geolocation-based enhancements can also be made, like preemptively guessing a user's language or applying region-specific policies. Redirect management can be improved, reducing the round trip time for users. Edge nodes are also well-suited for token-based personalization, A/B testing, feature flags, and stateless authentication with JSON web tokens. Additionally, they can serve as proxies for API orchestration and securely store sensitive information like API keys. The introduction of edge computing as a new paradigm opens up exciting possibilities for the next phase of web development.

![addition not replacement](/img/blog/edge-computing/00-27-24_idx-046.jpg)

Edge compute is gaining traction in various frameworks as a potential, primary, or main target, and many already support edge compute deployment. While this is exciting, it can also lead to an increase in mental overhead and architectural decisions, with developers weighing the costs and benefits for performance.

![common use cases](/img/blog/edge-computing/00-29-54_idx-047.jpg)

## Exploring Edge Computing: Choosing a Provider

Edge computing offers a variety of solutions to save time and optimize performance for various applications. However, the importance of saving 300 milliseconds depends on the use case. For large enterprises like Walmart, it's a significant problem to solve, but for a personal blog site, it might not be worth the effort.

When choosing an edge computing provider, factors like cost, network size, and security should be considered. The big three providers are Akamai, Cloudflare, and Fastly. Cloudflare offers a low-cost entry point and is easy to get started with, while Akamai is known for its large network and strong security. However, the best provider will depend on your specific use case and requirements.