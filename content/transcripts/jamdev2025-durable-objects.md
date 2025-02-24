---
_build:
  list: false
  render: never
---

**Lizzie Siegle:** [00:00:00] so much. I'm so excited to be here. Uh, today I will be talking about Cloudflare durable objects, but in my honest opinion are the most underrated compute and storage option offered by Cloudflare. Uh, this talk will not really focus on how you use durable objects in code so much, but explain why you need durable objects in your developer tool belt.

Toolkit, tool belt, same thing. Our order of operations for this session, What is the Cloudflare Developer Platform? I was just in Stockholm giving a pretty much very similar [00:01:00] talk there and people Do not know the developer platform. I'm based in San Francisco. Drop in the chat to where you're coming from because, uh, people in San Francisco tend to know the developer platform, uh, in Stockholm, not as much so quick overview.

They'll go over what are durable objects, what problem do they solve, why should you use them, why do developers love them, and don't get me started on the name, we'll go over the name soon. Uh, we will also go over the actor programming model, very fun. Uh, there'll be not one, but there'll be two demos, and, uh, I really wanted to live code one of them, but last time I live coded it, like, it did not work.

But, I swear the code was right, because it worked that morning and the night before. And that's the thing with live demos, where you would not give it if it did not work. But then it doesn't work. Okay. I digress. [00:02:00] How do durable objects work? We'll also touch on. And why they're better than traditional serverless approaches for stateful applications.

And then we'll go over durable objects versus key value storage, which is another Cloudflare developer storage offering. Very fun. A lot happening. So I'm Libby. I'm a developer advocate at Cloudflare. And I play around with a lot of libraries and tools. I build a lot of hacks, demos. Very fun. And I am online too much.

So I know

about a lot of different I played around with a lot of different databases, storage offerings, and I used Cloudflare before I joined. So that's kind of cool. The Cloudflare developer platform offers everything you need to build serverless applications. From global compute, uh, storage, and some bulk stack services, like image optimization and video [00:03:00] streaming.

A network infrastructure that scales globally on demand. Cloudflare covers security, which We're mainly known for configuration and maintaining infrastructure with APIs, so you can easily integrate with your existing tech stacks and focus on writing code. Who here has used Cloudflare Workers? Well, it is a serverless platform where you write a fetch handler that processes requests and returns responses.

It offers JavaScript, TypeScript, Python support. You upload your cloud, your code to CloudFlare and they handle the deployment and execution. Unlike traditional serverless platforms, Workers uses a unique runtime and operates globally across all of CloudFlare's data centers, effectively making planet Earth, the only region.

When you deploy a worker, it runs from the nearest Cloudflare data center to the user. So this global distribution [00:04:00] around the globe ensures global agency. Very important. Developers host and build a lot of serverless apps and tools on Cloudflare workers. However, hmm, it is stateless. In the handler, there's nowhere to add to store global state.

You could throw things in global scope. Usually that's not what you want because workers run in so many places all around the world and each of these locations has hundreds of servers. Cool workers app that I am itching to get back to once this talk is over, but I stayed up late working on. If you're a fan of March Madness, basketball, kind of like data visualization of college basketball data for men and women and some AI like analysis.

I've been playing around with a lot of AI and Cloudflare also hosts open source models. So you can [00:05:00] run imprints on models, data models are free. So I'm like, I use Llama 3. 2, Llama 3. 3, and I'm like, here's this data, analyze it, give me some feedback, give me some analysis. And I also use a lot of Cloudflare storage options.

There's the DWAT, which lets you build natively serverless relational, it's a serverless relational SQL database with point in time recovery, uh. Durable objects, which we will be talking a lot about today, helps you maintain strong consistency of state across multiple clients, events, and connections.

Hyperdrive is a service that accelerates queries you make to existing databases, making it faster to access your data from all over the globe. Uh, KB, key value, lets you store, modify, and query non dynamic key [00:06:00] value data. And R2 is a zero egress free object storage. Yeah, a lot of options. Sometimes I misuse these because I use one when I could probably use another, but I'm like, it's storage.

Oh, probably shouldn't have said that on a recording, but I'm like, sometimes I forget which one to use because there's so many. And like some are faster, some are like more dynamic. Anyways, moving on. Yeah, DurableObjects, main point of this talk.

Now, we all know that there are two hard problems in computer science. You have cache invalidation, naming things, and off by one errors.

A lot of people on Twitter, online, think that DurableObjects is not the best name.

Yeah, some like John would say it's a really bad name for something that is actually [00:07:00] really cool. And durable objects is a lot of things. So it's kind of like, complicated to explain. Like, it's a computer, it's a server. It does a lot. A lot of people have thoughts on them. They need a rebrand. We're working on that.

Actually, we're not. I don't know why I just said that. It just seemed like the right thing to say offhand.

Could be renamed, something like worker container, container,

remote machine you can assign work to, however, the name sticks, and so does developer love, Valentine's Day was last week, but still, the problem with state, it's kind of like. Painful to manage it. [00:08:00] You could just throw everything into a database, but then every time you need data, you have to ask politely, wait for the database to respond, it could be slow or overloaded, and then your app is just sitting there, awkwardly staring into the void.

You have some latency issues, like, imagine you have a multiplayer game, where every move has to go to a central database, Before anyone sees it, by the time your move registers, your character is already dead, or maybe they're stuck in some, like, quantum superposition of moving and not moving, and if you've ever dealt with multiple servers, trying to update the same data at the same time, you know the horror, two people edit the same document, and suddenly half the text disappears, the other half is who knows where, and you're apologizing to the database, it should be apologizing to me, [00:09:00] chaos, not chaos.

Here, we have chaos and inefficiency. Users and requests are being scattered across multiple servers and databases, leading to disconnects and complex architectures, which is typical of a traditional serverless system, though they struggle with real time, long running, or multiplayer apps due to their request response model and lack of proper WebSocket support.

So, solution. A more streamlined approach using durable objects. Each chat room, for example, could be managed by a single durable object, with users connecting to it via WebSocket. This eliminates, disconnects, and simplifies the architecture, making it ideal for real time, multiplayer chat systems and also games.

Durable objects provide strong consistency, low latency, and seamless state management, following the limitations of serverless systems and avoiding [00:10:00] database bottlenecks are durable objects. Each durable object is a globally consistent distributed instance that can maintain in memory state across requests.

And coordinate across multiple instances. This is particularly powerful for building stateful applications at the edge, which makes sense. It's built atop Klavler Workers, which is edge compute. Each durable object instance has its own durable storage, like a key value store persisted across requests in memory state, and it executes in a single threaded fashion.

Also, you get to decide the location, so you could be like, Bay Area, or you could be like, my users are. On the East Coast, but somewhere there. Very cool. Objects maintain their state in memory for fast access, like computer RAM, while also persisting to disk. And multiple requests to the same object are serialized, [00:11:00] preventing race conditions.

Each durable object can handle complex business. Logic and state mutations workers can send messages to a durable object by its unique name and sharing all requests to that name are routed to the same instance, their support for WebSocket connections and long live sessions. You can coordinate between multiple clients and requests, and of course, there's automatic distribution across cloud.

There's global network and objects are created on demand where needed or scale actual programming model is a framework for concurrent and distributed computing where actors are the basic units of computation. Each actor is an independent entity operating asynchronously, enabling with others. Or enabling them to run in parallel across multiple [00:12:00] multiple machines with its own state and behavior community communicating with others by creating other actors, and it can also send and receive messages

and decide what to do with the next 1.

In response to incoming messages, actress process messages 1 at a time. And so sequential execution and avoiding shared state concurrency issues like race conditions. Each actor, let's say, has its own private state and can decide how to process the next message based on that state. If this actor holds a balance, 5, why not?

It gets message and updates state. Now for the next message, the actor has this new state. Now it's not 5, now it's 7! Actors don't share memory and they interact only through immutable messages. This is widely used in systems using concurrency, distribution, and real time [00:13:00] communication, like Erlang. And durable objects for stateful globally distributed workflows.

So each durable object runs in exactly one location, in one single thread, at a time. So they're single threaded. Each object has its own private on disk storage, which is a very different situation from a typical database, where many clients may be accessing the same data. In durable objects, any particular piece of data belongs to exactly one thread at a time.

And I could tell you, but I'm gonna Show you we're going to move on to a demo and you can, uh, and it's QR code. And you should, because we're going to have some fun collectively. It's also this URL, [00:14:00] drawtest. lizziepeka. workers. gov. And let's say,

refresh. Look, that's still there. Someone is drawing, that is not me, but we can also open it in a new tab and see it. I will also write something. I wrote hi mom before. I can also erase smiley face. You can also clear all. We all have that power. You can also erase. Oops, I didn't erase all of that. That was a big eraser.

Yeah. So while they're playing around with that, let's look at the code. And I'm going to be completely honest. Who here has been using AI to write code?

I use Cloud to write most of this,[00:15:00]

not Cloud, uh, Cursor. I guess Cursor uses Cloud and it's been getting better. Like for a while, I had to like tell it more, took more time to get what I wanted. We have a Cloudflare warper with index. ts that has our fetch request. And there is a path name draw that we're going to hit the, uh, this file. We get the drawing room durable object and send request to the durable object to handle all drawing related logic.

And we display HTML, which is a static file. This 1, uh, that spacing could be better anyways,

so drawing room logic,

We have our. Sessions [00:16:00] array, croaks, session for WebSocket, croaks for like crawling, and keep track of state with durable object state.

Block concurrency while ensures that initialization happens immediately and no requests are delivered until initialization complete upon initialization. We load the existing strokes from storage. We retrieve if strokes exist, we only get the most recent. 1000, otherwise it got kind of confused with kind of like, slow down.

We limit the short strokes to prevent unbounded growth.

Handle WebSocket upgrades. WebSocket pair is provided by Cloudflare that helps us work with WebSockets.

Uh, we accept the [00:17:00] WebSocket connection, add that session to our array, and send the current state to the new client with the strokes and the messages from this WebSocket. We save the stroke with different, um, coordinate data. And the color, the size. Also a timestamp,

save to the durable storage with a specific key. There's our key, and that put. I think it's very intuitive. We save with a dot put call. And if we clear, then clear on strokes array, and persistent strokes is also now an empty array. And then this is broadcasted to all the connected clients, everyone who joined, everyone who views that web page.

And we remove the session upon [00:18:00] close. And then send that message to all connected clients.

I think it's not bad. Like, I feel like when I was doing college hackathons, I had a team once that wanted to build something similar, like Google Docs collaborative. And we had to, like, it took a lot more code than that. Yeah.

Yes. And then another app. This is the one that I wanted to do, um, live. But we all know sometimes doing it live does not work. But here's the coffee counter. Coffee pole. What do you prefer? I personally prefer latte. Yeah. Maintain state.

Latte winners are winning, and I will drop that, uh, in the chat,

I'll drop it in the chat now.

Eight minutes. Just kidding, I'm going to move faster. Okay, um, [00:19:00] and I'll share this code after, but this code is on GitHub, and you can view it at your own peril, on your own. Okay, back to slides. Eight minutes. I think eight minutes is fine, but the durable object solution, how durable objects work. Every durable object is tied to a unique key.

Or defines its scope and identity. This key determines the specific durable object instance that processes requests, as well as the persistent state storage associated with the instance. A use case, like, let's say, in a multiplayer game, each game room could be represented by a unique key, such as game room 1, 2, 3, and requests targeting this key are always routed to the same durable object instance.

Maintaining a consistent view of the state, like player position, player [00:20:00] scores, and Cloudflare ensures that requests are routed to the nearest durable object instance, reducing latency, when users from different regions access the same instance, Cloudflare intelligently routes traffic without duplicating state.

And each chat session is a durable object, you can just forget about it, let it go.

Durable objects in Cloudflare can be thought of as virtual cloud based computers that persist state across requests. They function similarly to early gen servers, maintaining long lived processes. That handle input perform computations and return output while keeping some in memory and persistent state the computers as a model a computer physical or virtual processes input performs operations and returns output durable objects follow this model, but they exist in the cloud stateful [00:21:00] session instead of treating each request in isolation.

Durable objects allow for stateful interaction, making them ideal for, uh, scenarios like user sessions, like shopping carts, profiles, or collaborative applications, like multiplayer document editing. They offer WebSocket support, unlike traditional serverless functions, durable objects support long lived WebSocket connections, enabling real time updates in apps like collaborative editors.

You can coordinate multiple sessions. And for persistence and scalability, while they go to sleep, when idle to conserve resources, they persist state via storage and can be distributed across means. You can also build game engines and run AI models from a durable object. The sky is the limit of [00:22:00] why they're better than traditional serverless approaches for stateful apps.

Traditional serverless requires more steps. I think I like how durable objects, uh, you get consistency without complexity. A key advantage. Of our traditional serverless approaches is that they provide a much simpler programming model for building stateful apps instead of managing complex distributed systems with external databases, message queues, cache layers, developers can write code that looks and feels like regular object oriented programming while getting the benefit of distributed computing.

For example, implementing a distributed counter traditionally might require. A database for persistence, cache layer for performance, block management for consistency, key systems for coordination. Ah, my counter code did not have any of that.

[00:23:00] Uh, there's no need to connect to or maintain external databases. State is maintained, close to where it's needed, and there's automatic coordination between instances. You only pay for actual compute and storage used. No need to provision or maintain database instances and automatic scaling without over provisioning and reduced bandwidth costs due to edge locality.

We love that. Optics can be created anywhere in Cloudflare's network and to use durable optics, real time applications. We have chat systems, collaborative editing, live dashboards, which I'm excited for with like the basketball data. Uh, I think it'd be cool to look at like. Twitter sentiment, like, what are people tweeting about in real time?

Uh, not a fan of the Twitter API now, but I guess, like, you can also [00:24:00] scrape the web. So, like, you can still get the data. I think data's cool. So, like, real time data, especially, uh, like, during a basketball game. You can also, like, visualize that. Okay. You can also use durable objects for session management, shopping cart, off stage, user sessions, coordination like event ordering, view management, versatile and simple IoT device synchronization.

Durable objects versus KB key value. This slide is mainly for me, because I often use one of these products when I should use the others. Durable objects offer low latency, but higher latency than KB, because they provide strong consistency and stateful computation, ideal for stateful, real time workloads.

Where consistency and coordination are critical, like user sessions, real time collaboration, or [00:25:00] multiplayer games. Cloudflare KB, ultra low, insanely low latency, like sub millisecond reads, because they're globally distributed, eventually consistent, p value store. This is ideal for read heavy, stateless workloads, where strong consistency is not required.

Like caching, configuration data, KB is low latency. Low consistency. Durable objects are high latency, high consistency, fast in real time. Yeah, what is next? What comes next? Durable objects enable stateful edge computing by allowing developers to maintain state. User sessions, real time data directly on cloud players.

Global edge network, reducing latency, eliminating the need for centralized servers. Uh, you can run SQL [00:26:00] light and durable optics, which provides a familiar. Lightweight solution, but the added benefit of global distribution and stable persistence. It simplifies building apps that require low latency, durable data storage without the complexity of managing servers or infrastructure.

Durable objects enhance scalability with automatic scaling. Instances scale horizontally across Cloudflare's network. Latency state is kept close to users, reducing round trips to centralized databases, and each object is independent, improving fault tolerance, because you can interact with durable objects via HTTP requests, WebSockets, or plain functions, they'll keep running, maintaining their state, and performing tasks, and this makes them perfect for AI agents.

That need to perform long running job like researching data, sending email or scheduling reminders. [00:27:00] But that requires complex infrastructure like Kubernetes or virtual machines. And this is what I'm most excited for about Durable Objects and the Cloud Platform. I think AI agents are, they've been having a moment.

I think this is the year of AI agents. And we're hosting AI agent hackathon is AI agent meetups. It's like, I feel like it's big. I'm excited. And I can't wait to see what people build, what agents people build with durable objects. And that's in general, there's some good ones. A quick overview. Don't tempt fate, maintain state.

Whenever a quest comes in, Cloudflare either spins up a new. Instance of a durable object or routes traffic to an existing one. Each object processes one request at a time, preventing race conditions. Each instance of a durable object is tied to a specific key, ensuring that all requests for that key go to the same instance.

It provides super [00:28:00] fast temporary storage that stays in memory. As long as the object is active, this is faster than disk, perfect for active game states, user sessions, or real time counters, but it is volatile. And goes away if the object is evicted from memory and only 1 piece of code runs at a time and each durable optics, making it much easier to reason about state changes and you don't have to worry about multiple requests changing data.

Simultaneously, this is a cool app that lets you track that durable optics are made. Uh, so, when you load a durable, this website, where durable optics live a worker. And San Jose, I believe, credit this. A durable object there, and when I was in Stockholm, there was 1 in Stockholm, who, uh, further resources, and I will be sharing these slides after the talk so.

You can [00:29:00] look at the slides and these further resources. Thank you. We are at time.

**Brian Rinaldi:** Great timing. All right. So like we did have a handful of questions from the audience. Um, so I'm going to get to those in a second. I think one of the things that, that you, you kind of brought up, which I think is, I remember was one of the things I struggled with when, um, moving from cloud to, to Cloudflare, some of the work that I was doing in Cloudflare, um, was this idea that, It's different than say, you know, if you're going from like a typical AWS or Azure kind of model where you're, you're in a region.

And you're pushing code, like workers are not sitting in a single region. Workers are distributed globally. And so like your thinking has to change. Right. And I think that's part of where, like, you know, the confusion comes. Cause if I deploy a Lambda on AWS, I might say like, Oh, I deployed that Lambda to US East one.

It lives in the US East one always, but the workers are [00:30:00] distributed, which I think is where some of this idea of like. Come in, right? Because you have you have workers basically everywhere in the globe, but somehow the KV, which is, as you mentioned, is like, distributed across the globe. Right? So, so eventually consistent.

Right? Because, um, whereas like this, it sounds like it sits in a single place. You in the world, right? Like, it is sitting essentially like a region. Am I understanding that correctly?

**Lizzie Siegle:** I think that's a good. Explanation of it.

**Brian Rinaldi:** Okay. Yeah. Yeah. Yeah. So, I mean, um, I want to get to, to the questions. So, um, Estelle asks, is this part of an official spec?

Is there like a durable objects API that is in the browser? Or is this just a Cloudflare thing?

**Lizzie Siegle:** Uh, you can think of it like an API, like a cloudflare product that you can use or store it in your web applications. [00:31:00]

**Brian Rinaldi:** So, it is, it's just, it is not like, um, some kind of, like, public API. It's just, it is a cloudflare only, like, durable objects are a cloudflare thing. Okay. Okay. Um, so what are the cases, uh, Alexander asked, what are the cases that you would not recommend using a durable object?

**Lizzie Siegle:** This is interesting because I use it when I really like shunt. Um, I have. One app where I use it for, like, a leaderboard, and I don't think that a leaderboard is necessary, um, for durable objects, but I just, like, I think that's a good code or, like, it was kind of intuitive to use.

**Brian Rinaldi:** Okay, I guess my question is, if I recall correctly, durable, like, the KV up to a certain point is free, um, but durable objects was always, like, had a [00:32:00] cost associated with them.

Am I correct? Okay, I guess 1 of the factors to consider. Right? Yeah. Okay.

**Lizzie Siegle:** Payment. I think, like, I, I thorough put low latency global grade. Like, um, if you need, like, really fast distributed read, like, a CDN, like, caching layer, uh, maybe durable objects aren't. Ideal for that, because each object lives in a single location, global grade latency could be high.

Um,

**Brian Rinaldi:** right. So you, you sacrificed a little bit of performance for the sake of consistency is basically the idea.

**Lizzie Siegle:** Yeah.

**Brian Rinaldi:** Okay.

**Lizzie Siegle:** Or like maybe like extremely large data sets.

**Brian Rinaldi:** Okay. That makes sense. That'd

**Lizzie Siegle:** be slower. And like,

**Brian Rinaldi:** uh, the

**Lizzie Siegle:** leaderboard that I use durable objects for, like I could use it, but I probably shouldn't be used, uh, D1, the SQL database.[00:33:00]

**Brian Rinaldi:** Yeah. And that, that, I guess, because one of the things that I found tough is like to kind of wrap my head around is, is Cloudflare, which one of the great things, but also one of the tough things when you're trying to choose is like, you have, you have D1, you have KV, you have durable objects. I think there's even a couple other options in there.

Like, how do you, how do you decide in any particular case? Like, okay, this is the right solution for that particular, um, use case.

**Lizzie Siegle:** I'm on a durable optics kick. So, like, for the later part, I was like, I'm just going to use it. I was using it already for state, uh, for a game. I was like, I'll just add another 1 because, like, you can make them on demand.

Uh, but sometimes I use 1 of them. Like, I should probably switch to D1 or something for, like, speed or, like, handling larger [00:34:00] files or more data. So,

yeah, like, I like durable optics. I think it's kind of intuitive, but. I use them often, but I shouldn't.

**Brian Rinaldi:** So, I mean, it sounds like, like, shouldn't be is more like a preference as opposed, like, it's not a hard and fast rule. Like, I shouldn't use it. Right? Like, I mean,

**Lizzie Siegle:** it's like, it's better options, but, like, I'm like, it works.

Yeah.

**Brian Rinaldi:** So, Nick asks, it's still not clear to me how it's durable everywhere, no matter where you are on the planet. It's always synced with latest changes. I get that cloud first network is all over the world, but still not completely clear to me. So that, I think that gets at that idea that that actually the durable object exists in a single location.

All right, I

can

**Lizzie Siegle:** spin different ones up in different locations and you can say, like, put it. All right. In a [00:35:00] certain area, I think, but this is where, like, the naming comes in. That could be a better name durable. I think here refers more to consistency and persistence. As opposed to high availability across multiple regions.

**Brian Rinaldi:** So, so would you, in the case of, like, say, let's say you have. Let's say we're talking about a game, like, and you have users around the globe. Would you actually try, maybe set up multiple durable objects for, for different regions, or would you have a single one sitting in a particular region? I mean, I'd, I'd assume say you had it sitting in the U S some latency from Asia might be, might be an issue.

So you'd recommend sending up multiples or, or, or, or just, just one.

**Lizzie Siegle:** I would spin up multiple.

**Brian Rinaldi:** Okay, okay. Can, and is there a way to like sync those multiples or is it really just like they, the state only exists in that particular instance [00:36:00] of the durable object?

**Lizzie Siegle:** You could sync. Them all together, and each of the object lives in that, like, 1 single location.

You wouldn't want all people worldwide connecting to the same object. You could share via that ID or, like, a key.

Okay, yeah, I think like, like, 1 per continent. 1 per area.

**Brian Rinaldi:** Okay. Um, and then Alexander asked, do you know any, a backend full stack frameworks that integrate with durable objects already? Backend? Like, backend, like any, any frameworks, frameworks that, that are kind of built in integration with durable objects.

**Lizzie Siegle:** We recommend HONO, uh, which is, was a framework created by someone on my team. Well, he created it, then he joined the team. [00:37:00] Durable objects does work, is designed to work seamlessly with workers. Uh,

Express, Fastify.

**Brian Rinaldi:** So, yeah, I mean, essentially it can work with anything, but it's, there's not like, like, does Hono have something built into the framework that allows you to kind of easily leverage durable objects or is it kind of the, um, the same, like I could use an Express, but it's, doesn't this, it's not necessarily like built into the framework to connect to a durable object, correct?

**Lizzie Siegle:** Okay. Okay.
