---
_build:
  list: false
  render: never
---

**Dina Kozlov:** [00:00:00] Hi everybody. I'm Dina, product manager at CloudFlare. I get to work on our developer platform and these last few months I've been working with our engineering team to figure out how do we make it as easy as possible to. Build and deploy MCP servers, um, because MCP is all the hype these days. And so today we're not just going to be talking through how you can build these out and everything around the standards and what you need to know about MCCP, but we actually are going to deploy an MCP server during the session.

But before we dive into. MCP in case anybody here is unfamiliar or needs a bit more context about it, uh, what exactly is it? So if you are watching this, you probably have [00:01:00] used some kind of AI tool like chat, GPT or Claude Cursor to maybe help draft an email, generate some code, or maybe even help you come up with a recipe.

It is no secret that these AI tools are incredibly knowledgeable and helpful. They help you boost productivity, but there's still one thing that they've been missing, and so. If you have used one of these tools, then you've probably asked it to help you with some kind of task, and these agents are really great at telling you how to complete the task.

They can read documentation, they can give you instructions, but they can't complete the task for you, at least not just yet.

Now, imagine you're a business owner and you now need to generate a PayPal invoice for some socks that you are selling. And so you've never used PayPal before and you don't know exactly how to do this, [00:02:00] so you turn to Claude, which is what a lot of people are doing today when they need some help and you ask it.

Hey, can you help me out with this task? And so Claude is smart enough that it's going to be able to tell you here's exactly what you need to do. And so this helps you out because you no longer need to go through documentation and, um, find the information that you need. It just gives it to you. But you still have to go through each one of these steps and complete them yourself.

Now imagine a world where Claude is connected to your PayPal account. And so if you ask it to help you create an invoice, instead of giving you a set of instructions, it just generates the invoice for you. It has your account information, it knows exactly what you need to do, and so it gets you to that end state in literally seconds.

And so this is exactly what MCP enables. And so MCP is a relatively new [00:03:00] protocol. It's an open protocol that was developed by Anthropic, the company behind Claude, around late November of 2024. And MCP is meant to standardize how AI agents can interact with services directly so that now they can take action instead of just guiding users through how to complete a task.

And. Really, if you think about it, this can do so much to help boost productivity, um, or just allow you to use services that before you may not have been able to use. And so this example that I just showed is a small demo of what it's like to connect an AI agent with. PayPal over MCP, but really you can create the same type of integration for any service.

Uh, unlocking the ability for Claude or any AI agent to be able to actually send an email or even build a full stack application for you, or maybe even order groceries all directly from the chat interface. [00:04:00] And so MCP has been all the high platelet, and for a really good reason, it unlocks the next generation of AI because it allows users to connect the knowledge and power of their favorite L LMS with everyday tools so that they can do even more with them.

And while this started out as a protocol that Anthropic developed, it is quickly growing support from companies like Google, Microsoft OpenAI, with plans to bring this technology into every AI agent that is currently being developed. And so MCP Connect connects two main parties, one which is the MCP client, which is your AI agent like Claude, and the MCP server, which is the service that which represents the service that you want to use.

And so when you ask the AI agents something like, Hey, can you post an update on the Slack channel? The AI agent is going [00:05:00] to interpret your request in natural language. Is going to figure out what needs to be done. It's going to determine what tools it needs to call to complete the task, and it's going to use MCP as the standardized protocol to communicate with the different tools that are hosted by the MCP server to complete the request.

And like I said, MCP is relatively new. It just launched, uh, what is it, six months ago, and at the end of last year, and when it initially launched, it was only supported locally, which means that to be able to use one of these MCP servers, you had to install the MCP server. On your device, you could only use it from a local client like Cloud desktop.

Um, which meant that if you logged in from one device and then logged in from another device, that any of your, your MCP configuration would be completely wiped out because it was specific to [00:06:00] that device. Um, but local MCP was really important in the start because. It got this technology into the hands of developers who were able to take it and evolve it, and it has helped form it into the protocol that it is today.

Um, but, and if you have used MCP, chances are that you've probably used local MCP. Um, and so you've probably used it from one of these clients, like Cloud desktop Cursor. Uh, you probably had to set up some config file. Where you had to add in some API token to it that would be used, um, and local MCP because anybody can run it on their device.

Today, a lot of developers are putting their implementation of their MCP server. Up on different GitHub repos. And so that's really great because it's open sourced and you can go and find an MCP server for the service that you want to use. Um, but it also can [00:07:00] become insecure very quickly because there's a lot of MCP servers that are out there that you don't necessarily know if you can trust if they're created by the actual company that runs the service.

And, um. You just have to be careful to make sure that it is not doing something that you don't intend it to do. And so for MCP to become really adopted by everyone, people like my mom, who are not developers, who have no clue what MCP stands for, um, MCP really needs to act as an online service, and that is what we call remote MCP.

And so ideally. The way that remote MCP um, allows you to use the service is that you can log into the different chat app that you plan to use. So it can be cloud.ai, it can be chat gpt.com. Uh, you can enter the URL of the service that you're looking to connect to. So very similar to how we input the. [00:08:00] A website name or maybe an API endpoint.

Um, it can be something like cp.service.com. And ideally, if there is some kind of login experience, it takes you to the login page, you sign into your account, you grant some permission. Um, and then after that, the AI agent is automatically connected to the service. The nice thing about remote MCP is that because it is connected to your account and because it is running over the internet and not tied to a specific device, you can access this integration from anywhere.

Which means that if I log into, uh, let's say my AI agent from my work laptop, and then from home, uh, the integration stays in place as long as I'm logged into the account. In both devices, um, it is ideally available to any user because this type of integration does not require you to set up a config file.

And so it's no longer just catered towards developers or somebody that's a bit more technical and knows how to set this up. [00:09:00] Um, and so. Remote. MCP is very much the future of MCP and it solves a lot of the security concerns where with remote MCP service providers can build the official MCP server for their service.

Uh, so for example, cp.cloudflare.com. And so when you are using that endpoint, you know that you can trust it because it's hosted by the actual company. It is not one that was maybe built out by somebody that, um, does not have, uh, does not actually work at the company or, um. Actually run that service. And remote MCB adoption is growing very quickly.

Um, even though it just launched probably about a month, a month and a half ago, um, it is being quickly adopted by all of the companies that you see on the screen. Andro, they actually launched the very first remote MCP client, uh, cloud.ai. If you go to the website, you can use it from there. [00:10:00] Um, and so what this means is you no longer are, um, you no longer are restricted to just using the cloud desktop app.

You no longer have to manage a config file. They've actually made it easy enough where it is set up as an integration, uh, that you can use. And so at CloudFlare, I mentioned the very beginning. Our engineering team has been very busy building out the toolkit that is part of our agents SDK, that is meant to make it as easy as possible for any developer out there to be able to create and deploy an MCP server.

And as a result of the toolkit that we've built out, all of the companies on this page have actually built out the remote NCP servers on CloudFlare. Um, but I can talk about it all day long, but I think the best way. Um, for you to really understand what it's like to build an MCP server is for us to go through this exercise ourselves.

Uh, so I will share a different screen now. And so let's say you want to build [00:11:00] a remote MCP server, you don't exactly know where to start it. And so my recommendation would be to go to the CloudFlare Docs. Uh, you can find this in the agent section, but also if you Google build a remote MCP server, I.

CloudFlare, this will bring you here. And uh, one of the things that I love that our team has built out is these deploy to CloudFlare buttons, uh, which make it really easy. Truly one click to be able to deploy the MCP server. So I'm going to click on this button and what it's going to do is it's going to take an example repo that already has your hello world MCP server, and it's going to get it deployed.

It is going to have some pre-filled. Pre-built duals, uh, that we'll be able to use. And then of course, if you want to modify it, you'll be able to do that. So let's click deploy to CloudFlare. This will take me to the CloudFlare dashboard where I will select my account and it is already connected to my GitHub repo.

Uh, I can give it a project name. [00:12:00] So here we can put in, um, more server lists. And that is actually all you have to fill out. Then I can click create and deploy. So now it is going to run the build to build the MCP server and to start deploying it to our global network. And one of the benefits of using CloudFlare to build your remote MCP servers is that all of these servers are automatically hosted across all of our data centers, across our global network.

And that automatically makes your MCP server highly available, uh, which you want it to be. Just like your dashboard, your IPI on point. Uh, you wanna make sure you have that high availability. But you also want it to be very performant. You might have a global customer base, um, not just that, but there's also going to be, uh, users that are using AI, agents that are going to be hosted in different parts of the world.

And so you wanna make sure that the MCP server is running as close as possible to these agents and to the end user. Uh, so that all [00:13:00] of the requests and the responses are lightning fast, um, and those interactions, um, can happen dynamically. So, ta-da Success, um, the MCP server has been deployed to this endpoint, and so now let's, uh, go and use this.

So I'm going to copy the URL here. I'm going to take you all to our AI playground. This is a remote MCP client that we ourselves have built at CloudFlare. Uh, it is available for anybody to use and so this has been really helpful for us to test any new developments with MCP. So I'll talk about this a bit later on, but the protocol itself is quickly changing and so anytime it changes, we like to make sure that we.

Implement the latest and greatest. Um, and we do understand that it takes some time for MCP clients to be able to make those changes as well. And so that's why we've created our own playground that also has, that is also up to date with the latest [00:14:00] standard so that anytime we push out a new update, we can automatically test it without, without.

With that without having to weigh on an MCP client to do the same. So here, I can go to the playground and I'm going to type in the URL of the MCP server. Um, make sure to add in H-T-T-P-S and then it will actually be running on dash SSE endpoint. Uh, we'll talk about this a bit later on when we talk about the transport layer, but I'm going to connect to this.

And just like that I am connected to a remote NCP server that I just deployed. It has these two tools that come prebuilt with it. And so I can ask it, can you add two and three?

And this will use the tool that we created, the addition tool, and it will add the two numbers. Um, get us the right answer. And so. The MCP server that I just deployed, you can find the code on our GitHub repo. Uh, we link to it from the [00:15:00] developer doc so you can go check it out. Um, but really all it is is we've built out a framework that takes care of a lot of the tooling.

Um, it takes care of the transport layer. A lot of the NCPE. MCP specifics. And so as a developer, all you have to do is go in here and write out the actual tools, the actual functionality. And so here you can see this is what one of the tools is like. It's just some TypeScript code that allows you to add two numbers together.

Um, and do a calculation. And, um, if you wanted to add, uh, different kinds of tools, you can do that because this is also built on our workers' platform. You can use tools like Workers' AI to be able to, um, run one of the models that we give to you to bring image generation. Into an AI agent, um, or to be able to use our browser rendering product, which allows you to capture screenshots of different websites or get [00:16:00] the HTML content of the page, um, and build out your MCP tool around that.

So we have now built out our MCP server, and so let's go back and talk about what exactly. Goes into, uh, remote MCP servers. So there are three main components. There is transport, there's authentication, and there's authorization. So transport defines how the client and the server can communicate with one another to send messages.

And the MCP spec defines three standard methods of transport. The first one is S-T-D-I-O, which is mostly used for local connections. So that is used for local MCP clients. Uh, that is what, uh, if you're using cursor for example, uh, their local or windsurf, they'll be using this. Uh, or cloud desktop even. Uh, the next one is server sent events.

Uh, [00:17:00] server sent events was the first transport method for remote MCP. And so because it was the first one that was out there, it is the one that is currently supported, uh, by most remote MCP clients. Um, and so server sent events, it uses a single connection. For the communication, but with two endpoints, so it uses one endpoint dash SSE, which you saw that we entered to establish the persistent server sent event connection that the client keeps open for receiving responses and updates from the server, and then it uses another endpoint dash SSE desk.

Messages, um, which is where the client sends requests for the different tool calls. And so while this works, it's kind of like having a conversation with two different phones. Uh, one that is for listening and one that is for speaking. And so this. It can add a lot of complexity to the setup, and it definitely makes it harder to [00:18:00] scale, especially as you start getting thousands, hundreds of thousands of users, uh, connecting to your MCP server.

It also requires connections to be kept open for long periods of time. And, uh, a big part of why that is, is because SSC operates as a persistent one-way channel, where the server can push updates to the clients. But if the client closes the connection prematurely, then the client will miss any responses or updates that are sent from the MCP server, uh, during any long running operations.

So. Uh, the first remote MCP, uh, transport method. And so because of all of these limitations, uh, new better transport method was developed, it is called Streamable, HCDP. This was introduced in March of 2025, so very recent. Um, I think it only landed in the M-C-P-S-D-K in April. Um, [00:19:00] and so the, the AI playground that I just showed to you all.

That is an MCP client that supports the new streamable HTDP method. Um, but actually outside of that, um, there's no remote MCP clients that I know of, uh, that support it yet, so clients have yet to adopt it. Um, but they will. And so the new streamable HTDP transport method addresses a lot of the challenges that come with server sent events, um, by enabling communication through a single endpoint.

So with server sent events. All MCP interactions flow through one end points, so you don't need to, um, manage the two separate ones for sending responses and for receiving them, and so that instantly helps reduce the complexity. Uh, next, it enabled bidirectional communication, so now servers can send notifications and requests back to clients on the same connection, and so that enables the server to prompt for additional information or provide real time [00:20:00] updates if it needs to do that.

And then finally. One of the benefits of streamable HTDP is that it actually starts as a standard HTDP request, but it can dynamically be updated, upgraded to SSE, uh, so that it can stream responses during long running tasks. And so now when an AI agent wants to call a tool on a remote MCB server. It can do all of this by just making a call to a single post, um, by making a single post request to one endpoint, uh, dash MCP.

And depending on the tool call, the server will either respond immediately or it will decide that to upgrade the connection to SSC if it needs to do that, to be able to stream responses. Or send notifications as they become available. Um, but this will happen all over the same request. Um, but like I said, this has yet to be adopted broadly.

So I definitely think that [00:21:00] over the next few months we are going to be in the state where there's going to be a mix of client supporting the old transport method and the new transport method. But one of the big benefits of deploying your MCP servers on CloudFlare is that you don't need to worry about implementing these transport methods at all.

Um, I just gave you a lot of context around what they are. Um, but realistically you don't really have to know the ins and outs. And a big part of that is because the boiler plate that we deployed earlier, um, is built on top of our agents SDK, which takes. Scare of all of the routing, uh, for the transport layer.

And, uh, we built it out in a way that allows you to future proof your setup. So it automatically supports the streamable HCDP transport method, but it also maintains backwards compatibility for any MCP clients that support SSC. Um, and like I said, this is going to be important since we are going to be in the state where there's going to be a mix of the two transport [00:22:00] methods being used.

And so right now the CloudFlare implementation, it mostly for streamable, HTDP. It mostly just has feature parody across the two transports. But one of the things that we are working on is supporting the new features, uh, that come with streamable HTP. So the first one is Resum ability. Resum ability is really helpful for long running operations.

So if a connection drops during, uh, a long running task, then clients are able to resume exactly where they left off without missing any of the responses. And so this is really helpful because it removes the need to keep connections open continuously. It is ideal for any AI agents that may be running tasks for hours.

So, um, if you are processing a large data set or maybe performing some complex analysis or doing some multi-step workflow, uh, this is really [00:23:00] great in all of those. Cases. The next one is cancel ability. This means that clients will have, um, explicit mechanisms to be able to cancel operations. And so this is just going to enable cleaner termination of long running processes essentially just means that they can shut things down gracefully.

And then finally, a session management, which means that, um. Clients and servers will have a better way to maintain state across multiple connections. And so that means that if an MCP client disconnects and then reconnects, uh, the server is going to remember what was happening before, um, any of the conversation, history or context that was shared across the connections, uh, will be maintained.

And so this is really ideal when you have multiple agents connecting over the same session that may need to share the same state. And so that is all the transport method. But like I said, uh, if you're building on [00:24:00] CloudFlare, uh, this is just, uh, this is just more for you to know about. Um, but you don't necessarily actually have to know the in ins and outs because we handle all of that for you.

Um, but the next big. Components are authentication and authorization. When you are building a remote MCP server, uh, we talked about that login experience. And so what you need to build out is a way for users to be able to log in and to prove who they are that is authentication. And then you also need a way for users to control what their AI agent is able to access, and that is authorization.

And so. One thing to keep in mind, and I'll talk about this a bit more later on, is that the auth, um, specification for MCP is going to be evolving a bit. Uh, these changes have not landed in the official spec yet. They're still in draft. Um, but I'll mostly be talking about how auth works in the state today since this is what MCP clients support.

Um, but of course we as [00:25:00] the same with transport, we will. Take on the work to make sure that you are future proofed and ready for, uh, when the new auth changes spec. But, um, off for MCP has three main parties, one which is the client, the MCP server, and then of course the user. So let's say that I go to cloud.ai and I want to connect it to an MCP server for CloudFlare, for example.

Um. The first time that the client connects to the server, uh, it's not going to have an access token, and so the server is going to return a 4 0 1 error and it's going to tell it, this is where my auth server is located. Go grab an access token and then come back and make a request once you have it. And so the MCP client is going to redirect the user to this page.

Um, it is the user's then going to be able to log in. Let's say I log into CloudFlare. It is then going to tell me, do you consent to give permission for it to maybe view account information or maybe be able to [00:26:00] deploy workers. Um, and so once I consent and authorize that access, the author. Server is going to generate a token, an access token, and it is going to return that to the client.

And then once the client has that token, it can now make request to the MCP server with that token, and that's what's going to allow it to make that request. And so what we wanted to do at CloudFlare, uh, same as with jansport, is abstract all of the complexity that comes with auth for MCP away from you.

And so when you deploy your MCP server on CloudFlare, the MCP server, uh. Automatically supports OAuth 2.1 out of the box. That is what is required by the spec. Um, and so that means that when MCP select Cloud connect to your server, OAuth 2.1 is automatically used. And so you might be wondering. Well, my MCP server is currently, um, currently talks to some upstream.

It might be an API [00:27:00] endpoint. It might be my existing service. Does that mean that my existing service has to support OAuth? Uh, no, it does not. We kept that in mind. We know that realistically, your upstream service may be an API endpoint that uses tokens or you might already have an off provider that you use or some kind of login password.

And so, uh, we allow you to bring in any of the current auth methods that you currently have. That is what's going to be presented to the user. Um, but, uh, the actual MCP server itself will, um, be compatible with the spec and will itself act as an OAuth server to the client. One of the key advantages with building your MCP server on CloudFlare is that we actually never expose the access tokens to the MCP client.

Instead, we generate and issue our own MCP tokens, uh, which the client will use. And so that ensures that if the MCP client gets this access token, let's say maybe it is a malicious client that it's only ever able to [00:28:00] make requests to the MCB server. To call the tools and it is not actually able to make requests to the upstream to all of a sudden be able to have full access to your service.

And so, um, even though we keep the access tokens that are issued from the upstream, we keep those encrypted on CloudFlare, we don't expose those to the developer either. Um, and we wanted to do that, especially because right now there's a lot of developers building third party MCP servers for services they don't own.

Um, and of course some of them could be misused, um, but even though those are stored in an encrypted form and you can't access that. Access token itself, we still give you a way, um, to have a mapping between the different session IDs or users and the tokens so that you can still track the MCP request, history, user preferences, uh, without getting access to that token itself.

But like I mentioned earlier, the odd spec is going to be changing. Uh, some changes that are going to be coming [00:29:00] in are around better security, so making sure there's new protections around common attacks or malicious redirects or unauthorized access. Um, it's going to now begin enforcing encrypted connections, identity verification.

Implementing industry best practices. It's also adding support for multiple auth servers. Um, ensuring that you no longer are just restricted to one per MCP server. Uh, there's also now going to be strict token validation. To make sure that access tokens can only be used by the intended recipient and to prevent any credential reuse across different services.

Um, but like I said, the really good news is that Cloudflare's off library for MCP was built with all of these, uh, with a lot of these security considerations in mind. And so most of the improvements that are going to be coming are actually already implemented. Uh, we're keeping a very close eye on the spec.

Um. And even though there are going to be [00:30:00] some changes coming that we have not yet implemented yet, we're going to make sure that we build it out in a way that, uh, requires very minimal effort for you to upgrade and have support for the new standard, but also continue to have that backwards compatibility.

And so lastly, I wanna talk through some best practices, uh, for building MCP servers. At CloudFlare, we have actually built out 13 remote MCP servers for CloudFlare services. We've also been working with different customers to help them build out their own MCP servers, and so. What are some things that we've learned?

Uh, the first thing is around tool design. Um, when MCP first came out, a lot of people were taking existing API endpoints and putting MCP as more of a proxy in front of those endpoints, uh, and having that one-to-one mapping between a tool and an API. But what we've actually found is this does not work really well.

Um, a lot of times there's way too many API endpoints and so. One, it just overwhelms [00:31:00] the client. It doesn't give it great context. Um, it's um. Essentially, it does not create the most optimized experience. And so what we recommend doing is not treating this as a wrap around your API schema, um, but instead building out tools that are optimized for specific user goals and um, specific outcomes.

And. By having fewer well-designed tools, you can usually get, um, much better, uh, performance, much better interactions than having a ton of granular ones, especially for any agents that might have small context windows, uh, or maybe tight. Latency budgets. Uh, next is scoped permissions. Uh, what we have found is that deploying several scoped MCP servers each with, uh, narrowly defined permissions, is much better than having one MCP server.

That covers a wide variety of [00:32:00] tools that I'll have. Different scopes and permissions that they map to. Um, this just in general reduces the risk of over privileging access and just makes it easier to manage and audit what every server is allowed to do. Next is tool descriptions. Um, highly recommend having detailed parameter descriptions that is going to help your agent understand how to use your tools correctly.

And so, um, make sure to include what values are expected, um, how they affect different behavior, and any important constraints that your agent may need to know about. In general, this helps reduce errors and improves reliability. And then finally, um, one thing that we found incredibly helpful is running evaluation tests or evals, uh, to make sure that the agent's ability to, that to make sure that your agent is using the tools, uh, correctly.

And these evals really help you, give you insight into how the tools are working [00:33:00] out, what is working better, uh, so that you can constantly improve it. And so recommend running these updates. Uh, running the evals after any updates to your MCP server or any tool descriptions, um, so that you can catch any regressions early, um, but also be able to track any improvements over time.

And so finally, one thing I wanna leave you with is, um, please go and build your MCP servers. This is such an exciting time, um, even if it is not for your actual company or service provider. Um, one thing that's really great about MCP is that it allows you to build your own MCP server and bring whatever functionality that you want to directly into your AI agent.

If you dunno where to start, um, make sure to screenshot this page. Uh, we have our documentation, which allows you to deploy the remote MCP server in one click. That's what we did earlier. We also have our GitHub repo that has a ton of different examples of different kinds of remote MCP servers with different types of auth that they use.

Um, [00:34:00] and then finally, if you're looking for some inspiration, um, or you want to know what MCP servers already exist out there, um, I recommend that you go and watch a demo day that we hosted with Atlassian Asana. Um, century. Uh, I know Cody's going to be talking later today about the Century MCP server and just building that out.

Um, but that demo day showcases how these companies build their MCP servers, what it enables their users to do. Um, and we are planning on hosting another one, um, in the next month. And so if you end up building out your remote MCP server and you see something about another demo day, please make sure to apply.

We would love to host you for it.

**Sean C Davis:** Thanks Dina. That was a great, and props also successful live demo. Love it. Love it. Alright, we've got, uh, we've got about eight minutes for questions here and if we have one and for you folks out in, uh. In the chat, use the q and a button on the right side of the screen. Add your question there. I'll keep an eye on it.

This one [00:35:00] comes to us from Brian and Brian asks, um, not sure if it was answered, but do clients like Cursor or vs. Code support remote MCP servers?

**Dina Kozlov:** So I think VS. Code as a very recently supports remote MCP, uh, cursors supports, uh, server sent events, but they. It does not send you through the authentication flow, but actually if you do use a local MCP client and you want it to connect to a remote CP server, we have built out a package.

Uh, you can look it up, NPM, uh, CP dash remote. And so by using this package, you can connect any local client to any. Remote MCP server and it will take you through the authentication flow. It automatically supports the new transport method. Um, and so that is one great way that you can test, um, what it would be like to use this client to the server once the client natively [00:36:00] supports remote MCP.

**Sean C Davis:** Have you found that you, because I, I noticed with the, with the demo and the, the early part of the presentation that you talked about, Claude Desktop, um, is there a reason that you've picked that one over? Yeah. Code, windsurf, et cetera.

**Dina Kozlov:** Uh, I would say the main reason is because, uh, philanthropic developed, uh, MCP and so they've just been a bit, um, they've been the earliest one to support, uh.

The latest standards and the latest updates to the MCP spec. Um, but actually absolutely love using, uh, cursor or the Windsurf MCP clients. Uh, there's also AI agents that are currently being built that are a, that are MCP clients themselves. Um, and so. Have been using those as well. It's more that to have those upgrade to, to connect to remote MCP servers, you then do have to use this connector package.

[00:37:00] And so in some cases, it's better to just use a remote MCP client to connect to their remote MCP server, but very hopeful that these MCP clients support remote natively very soon. So, uh, we can deprecate that package and no longer have to use it.

**Sean C Davis:** Uh, that makes sense. Okay. And you, you talked a lot about security because you, these, these servers have, they have a lot of power and a lot of capabilities.

Um, can you, can you talk maybe a little bit about the steps that someone should take to have confidence that a server is safe to use and install at first, and then once they. Has passed that test. Uh, then what practices that you recommend, you know me as your interacting with the server, through the client, um, that you would suggest that someone, you know, kind of like what are, what are the red flags or, or what should be on folks' mind to make sure that they're operating safely?[00:38:00]

**Dina Kozlov:** Um, I would honestly say the most secure way that you can use MCP servers is if you are using. If you are deploying the MCV server locally and you're getting it from a GitHub repo, get it from the official service provider, or honestly look through all of the code that's in the GitHub repo. That's the only way that you can really ensure that it is safe to use.

Um, but that is actually one of the reasons why I'm really excited for us to move to remote MCP servers where it is no longer the responsibility of the user. To have to run that check. But instead, every service provider, um, takes on that responsibility themselves and, uh, has an official MCP server that you connect to as if you're connecting to, uh, their dashboard or their API endpoint.

All of their controls are already in place. The auth, um, connected to it, and so. [00:39:00] Uh, really the, the main ways that you can insure it is either getting it from the company's official, uh, website, reviewing the code, uh, building your own MCP server, or waiting until, uh, these companies release their remote MCP server.

Uh, which, uh, we already showed that list of companies. There's more than 10 of the biggest SaaS providers already have this out there. I know many more are working on theirs right now. Um, and so, um, soon it will be coming.

**Sean C Davis:** Okay. Okay. So that's, um, you know what, what I was starting to think about while you were talking was, um, and, and during the middle of the talk was, is, you know, which, which direction are we going with this?

Is this more like we're going to have this. Um, safe and verified community of developer driven MCP servers, or is it, does it go the other direction and it's more like, well, the provider is also just, it's gonna be kind of a table stakes thing as the provider needs to [00:40:00] also offer, uh, an MCP server. And it sounds like it's more like the latter, like it's just gonna become a normal thing for, um,

**Dina Kozlov:** yes.

**Sean C Davis:** Providers and platforms to, to build.

**Dina Kozlov:** Exactly. Um, remote solves a lot of the challenges, a lot of these security considerations, and so we're. What we're seeing from talking to companies, but also developers, is they want those official remote MCP servers and companies are building those out. Um, there's also liability in, um, you know, we have the CloudFlare MCP server, but if somebody builds out.

Their own implementation of a CloudFlare MCP server and maybe it's insecure. Um, I definitely would not want my customers connecting to that. Um, but developers can also build out their own MCP servers. But I think especially, uh, if you see the Claude ai, uh, how they now show MCP is very much centered around integrations where you paste in a [00:41:00] URL.

And so I think that already is an indicator that we're very much moving towards remote and I think local MCP is only going to be used in cases where you actually do need to tie to a specific device. You might wanna get terminal logs, um, or something that is device specific. But other than that, really every MCP server has the ability to be remote and should be remote, even if it is not.

Oh, okay. Even if it is off list, for example.

**Sean C Davis:** Yeah, this makes sense. Yes. Okay. And so when folks are interacting with the server through a client, you know, I've, I've, I've seen some crazy things already. Like if they have API access, you know, they, they can take down a production instance of, of whatever they, and to be using, um, you know, for a number of different reasons.

And it just, in my very light tinkering, um, I've noticed that it. It, it generally will [00:42:00] respond by saying, this thing I'm going to do next. Um, yes. I think what my question is, what, what are some tips or advice you have for folks to, um, to kinda like check themselves and immediately go to the like, well, the, the thing responded with what it thinks it wants to do, so that's probably correct.

**Dina Kozlov:** Uh, definitely check every interaction. Um, you can, it depends on the clients. Some clients don't even ask you to consent before calling the tool. Um, but if you do have the ability to do that, then you should. Um, the other thing I would say is, especially if you're connecting to an off. Off service. Um, then it will take you to a consent page and there you will view all of the permissions that you're going to be granting to it.

And, um, I know a lot of CP servers right now are being built with read only permissions just because there is a bit of risk and uh, a bit of skepticism. [00:43:00] But if, for example, you do have the option to, uh, take read. And write permissions and maybe scope it down to just read. Um, I'd recommend starting with that, using the tools, just verifying that they are doing in fact, what they're, um, meant to do.

Um, and then, and then granting it the right permission. And even if you granted the right permission, um, you know, maybe still test it out with a staging environment or a project that is not, uh, critical, that, you know, you cannot accidentally take your website down, um, just because. These tools are also themselves being developed.

Um, so it's, it's going to take a bit of time to adjust, but uh, I think just paying attention to what you're consenting to and if you have the ability to scope down the permission, I would recommend doing that to start.

**Sean C Davis:** That's great. Great advice and, and great talk, Dina. Thank you so much for your time today.