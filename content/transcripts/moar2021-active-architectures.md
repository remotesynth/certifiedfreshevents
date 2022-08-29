---
_build:
  list: false
  render: never
---

**Rob Sutter:** [00:00:00] Thanks, Brian, thanks for having us here to, or for having me here today. And yeah, as you point out previously on the developer advocate team for serverless at AWS, not with serverless the company but happy to be joining you here today to talk about active architectures, and thank you to everyone out there in the audience for joining us.

Here's what I hope you learn today. I hope you learn how active architectures are different when you're building serverless applications from when you build traditional applications. I hope you learn some use cases that they're good for and some use cases that you might not want to consider them.

And then I hope you walk away with a framework for how to decide if. Good for you because there is some extra effort involved with serverless we don't wanna be doing on differentiated, heavy lifting. So I hope that you can decide at the end of the day if this is something that is gonna give you a competitive advantage, give your customers a better experience.[00:01:00]

And then as with all the other sessions at the end, we're gonna take some time for a Q and a please go ahead and drop your se your questions in the chat as we go. And I look forward to addressing them then. So this is what we wanna learn. This is how we're gonna get through it. We're gonna give an introduction to active architectures.

We're gonna talk about some of the challenges when building active architectures specifically for serverless. I don't wanna go back and say that sentence again. That was exceptionally hard to pronounce correctly. Those challenges are what I call the three DS your data layer, option your deployment options and your DN.

Some are more difficult than others. And we're gonna talk a little bit about log aggregation with active architectures and some generic solutions that you can provide or implement. And then again, at the end, we're gonna go over some generic solutions that will give you a starting point to go build your own active architectures using major cloud service providers up and coming cloud service providers and naturally fauna.

Quick introduction here. Who am [00:02:00] I and why am I talking to you about this? As Brian pointed out, I'm currently the head of da at fauna previously on the serverless da team at AWS. So I've been pretty deep in these topics throughout my career. I'm also previously a co-founder of a software as a service startup work phone that provided virtual mobile devices.

And this was 2015 when we started and we had an active architecture, and we had it the traditional way, which was extremely difficult. So I've lived through a lot of this pain and I would've been very grateful to have the options that we have today when we were building at work foam. If you're not familiar, what is an active architecture?

An active architecture is a disaster recovery. Traditionally it's a disaster recovery strategy that involves taking your entire application and making another hot or fully provisioned, fully running copy of it. In a different location. Since we're talking about the cloud, of course, then that becomes another region for your service [00:03:00] provider.

It could be another availability zone, but today we're gonna be focusing on cross region active architectures. And why would you choose an active architecture? Traditionally you would choose one. If you had mission critical systems that could not tolerate downtime that had real time RPO and RTO require.

RPO of course is your recovery point objective. So it's the point in time at which all of your data is recovered to and RTOs recovery time, objective how long it takes you to restore service. So if you needed no loss data and a, an RTO of zero, an active architecture is really your only choice. The benefit is that it's little to no data loss.

One of the downsides is that it's pretty much a cost center. Traditionally active architectures were designed to protect against infrequently occurring risks, which meant that most of the time you were running hot versions of your app that were either unused or at least 50% over provisioned.[00:04:00]

That meant you were spending twice as much money as you needed to. If you're looking at this slide and seeing some of these classical benefits, you're probably figuring out that these are already benefits of serverless applications, cloud service providers. When you deploy serverless applications, offer these as characteristics of a serverless app.

They offer high availability, redundancy, automatic failover, little to no data loss. So this is a portion of active benefit. You get right outta the box with serverless applications. That's the good news. But it's also important to know that's restricted to the region where you're deploying your application and that's gonna come into consideration.

When you think about, should you build an active cross region architecture. So if you already get all of those benefits for free, why would you do this with a serverless application? What use cases might you. Where a cross region active architecture makes [00:05:00] sense. The first one and it's not gonna be, what we talk about today is to satisfy compliance requirements.

Some industries in some locations require you to demonstrate that you have full active failover across either multiple cloud providers or multiple regions, or what have you, if you have these requirements, either based on law or based on your industry, then this is a good choice. For implementing that architecture.

And the reason you would do this with serverless instead of a traditional architecture, is that your costs are split. So instead of doubling the cost to run your infrastructure, you're just dispersing the cost to run your infrastructure between the two regions as they run actively. Another reason is to reduce late.

And this is the most compelling reason to run a multi region active architecture in a serverless application. Increasingly latency is becoming more important. There's the common study that Amazon did where they discovered that for every hundred [00:06:00] milliseconds of additional load time, they lost 1% of sales.

That's a pretty big impact when you're thinking. Customer performance and how impatient customers are. 2019 port tent study. Also showed that the highest e-commerce conversion rates occurred on pages with load times between zero and two seconds with zero to one being the highest. So you've got very little time to get the information you need, get it to your customers.

You don't wanna be wasting that time on speed of light, just traveling around the world. If you can get them that information from a physically closer location. And that's probably the biggest benefit. Of a serverless multi-region active architecture is bringing the compute and beta closer to your users.

So you reduce the latency and increase conversion or purchase rates. And again, I touched on this briefly, but one great function of pardon? The pun of serverless applications [00:07:00] is that a multi-region active arch. Only results in a minimal increase in spending. It's just the overhead and orchestration layer.

That's different from deploying your application in one region. And for a lot of those pieces, that difference is insignificant, especially compared to things like compute cost, data storage and network transfer costs that you would pay in any case. So it's a very insignificant portion of your spending that comes when you build an a multi-region active architecture with a serverless application.

So you might be saying to yourself this sounds great. I should just build all my applications as multi-region active architectures. And of course would that not were the case, but there are some challenges that we need to address that we talked about up front. Those challenges, mainly regard the data layer you need to get consistent.

Data at every point where your users are accessing your application, and you can typically think of this as replication. We'll go the deepest into some strategies for this in this [00:08:00] talk, but you want that consistent data, especially in e-commerce applications so that customers aren't attempting to purchase items that are out of stock.

If you have a hot a run on a hot, it. PlayStation fives, et cetera. You want a strong, consistent data model and there's deployment deploying to multiple regions. Unsurprisingly is more challenging than deploying to a single region. A lot of tools are built under the assumption that you're deploying into a single region.

So what are some strategies that you can explore? For getting the same version or for orchestrating multiple versions of your application across regions. And finally, because it's the internet, you can't get away from DNS. There's a good news story there. We'll spend the least amount of our time on DNS, but it's still important because it's still requires some work from you as you built.

So what are some of the data layer options that you can choose to build? MultiGen app [00:09:00] active architecture app. The first choice is a relational database management system, and it should be no surprise to anyone who's ever met me. How I feel about that solution. It is a ticking time bomb. Please don't do this.

You are entering a world of pain. You are taking on all of the complexity that you've let go of. When you build with a serverless application, you. Connecting VPCs over VPN connections. You're dealing with firewall rules, NA rules, security groups, all these things that you've gotten rid of. And by the way active replication on relational database servers is not very performant.

It requires multi-phase locking in most cases, which means you have to make one round trip to say, Hey, we're gonna update. Get the consensus, make the update, get the confirmation that it was done. And you're talking about speed of light issues again at this point where if you're doing that across continent or around the world, those multiple locks add up, especially if there's a dropped packet or a conflict when you're trying to create the [00:10:00] lock.

And at the scale that you wanna be operating. It's not whether that will happen. It's when, so if you don't listen to anything else I say today please don't try to build your active architectures on top of relational database servers as serverless builders. Hopefully we're not doing that in the first place, but especially for multi-region apps, please don't do that.

The next option is the no sequel that you'll get from your cloud service provider at Aw. This option would be DynamoDB global tables, which was recently released. There's also cosmos DB fire base, other options on other cloud service providers. I'll talk about DynamoDB and this talk because as a former S D a it's the one I know the best DynamoDB global tables are great because it allows you to just keep your tables in sync across multiple regions.

If you're already in DynamoDB, if you already understand the complexities of data modeling and single table, If your data access patterns are stable. And if you've already built your application to deal with eventual [00:11:00] consistency, then DynamoDB might be a good option for you. DynamoDB does offer transactions now, but it's important to understand that those transactions are only in the region where the right occurs.

So on the slide we have us east two and us west two. If you make that right in us, east two, you only have an atomic transaction. In that region, you can still get consistency errors if you have a get from another region. So when you make an. In the east, someone requests that item in the west, there's a period of time where they might be getting the old item and that can create issues in your application.

If you haven't planned for it in advance to learn more about transactions with DynamoDB, specifically their their capabilities and their limitations. Check out the link that we've provided here on this. fauna.link slash dynamo slash DDB dash acid. And again, the same principles. Hold when you're looking at cosmos DB with global access on Azure fire [00:12:00] base GCP, all of these same capabilities are available.

Now, of course, the one I probably know the most about is fauna and obviously biased, but it's a great application, a great choice for cross region active arch. Fauna is built on the Calvin paper that will go back to in a little bit. And the unique capability for fauna is that rights occur as acid transactions, multi regionally with a single face commit.

So let's break that down a little. There's no lock. You don't have the multiple round trips that you have with other databases. You just say, I'm going to. You get consensus among the cluster. You write into your end point, that's referred to by host name and then fauna takes care of writing that across all the regions that you're participating in.

This is called OCC. That's in the paper. You can look into that. An important point to note here is that because [00:13:00] you're only writing to that single endpoint yourself, you're not paying the network transfer cost for replication, and as your application grows, that's gonna become a significant expense that you no longer have to worry about.

To learn more about fauna specifically, there's a link here on the slide to fauna.link/more server. Les, do you think that this is magic? This is the status page. As of this morning, you can go to status.fauna.com and see this for yourself. In the us region on average rights are occurring at 64 milliseconds.

So well under a hundred milliseconds for complete, strongly consistent acid transactions across all the nodes in the cluster. Again, that's under that a hundred millisecond. Bar that AWS discovered can cost them, or I'm sorry that Amazon discovered can cost them 1% of their sales. So that's a really fast, bright.

And at the same time, you're getting single digit millisecond reads from the endpoint. That's closer to you or that's closest to you. So again, if you wanna learn [00:14:00] about the science, the theory behind how all of this actually works. fauna.link/calvin will take you straight to the original paper outta Yale, a 2012 paper.

Really fascinating. Of course, fauna is an implementation of it. It's not the paper itself. But the the Calvin protocol is a fascinating read if you're into architecture and algorithms, especially for databases and distributed systems. So once you've chosen. A data layer that's appropriate for your application.

You're going to need to consider deployment. How do you get your application into a consistent managed state across multiple regions? And this is an interesting challenge because in serverless development, we always talk about. Or we frequently talk about, always use a framework and this is a really good principle for serverless development.

There's so much going on that it's less important, which framework you choose, whether that's the serverless framework, AWS, Sam, or something else, it's more important that you choose a framework work within it and [00:15:00] take advantage of what it offers you simplification of development and deployment.

The ability to think about your application or your service as a single entity, even though you've decomposed it into functions and. This advice runs into some challenges when you realize that none of these frameworks, at least that I've been able to discover natively support multi region deployments.

So they're very good at doing deployments onto that assumed single region, but they have no consideration. No no capability for doing multi-region deployments. Now you don't have to go. If you take your Sam out and make it cloud formation, then you can use stack sets and use stack sets to deploy a consistent version of your application across multiple regions on AWS.

There's a serverless framework plugin that allows you to manage multi-region deployments. Terraform offers support for multiple instances of the same cloud service provider. So you can deploy to multiple regions that way. But again, it [00:16:00] does require a little bit of work now. Now that we're adding some arguably undifferentiated heavy lifting into our serverless deployment, which we typically try to avoid.

We need to think about what tooling we can employ to make that easier. Now, each of the cloud service providers, again, has their own offering for defining C I C D pipelines, less important than. The tool that you choose is choosing a tool much like choosing a framework. I mentioned circle CI in this slide because I've had very good experiences with it across multiple providers.

They offer orbs, which are predefined functionality for Terraform, for the serverless framework for AWS, Sam CLI, and more that allow you to quickly do deployments based on variables that you specify. You can make your circle CI workflows as complex and powerful as you. Or you can make them as simple as just pulling your repo building and [00:17:00] deploying to a single region.

So if you don't yet have a choice for your C I C D pipeline, I highly recommend you take a look at it. There, it's not a partner, it's not a sponsor, but it's just a tool that I've had very good experience with. Again, if you're already in your cloud service provider's ecosystem and you're familiar with their tools and already using code pipeline or Azure DevOps it's probably best to stick with what you.

So that's tooling, but there are different ways that we can, or different strategies that we can use to do these deployments. I like to call them C I C. Why, where you just Yolo everything into production, a regional Canary a Canary region and inter regional canaries. So let's break each of these down with some example.

Again, let's say we're in us, east two in Ohio and us west two in Oregon. CIC Yolo is the worst of all possible choices where you make a change. You look at it and you just throw everything into both regions. The [00:18:00] problems with this approach are the same as the problems with Yolo in your code, into production in a single region.

First you're introducing. Any errors that are in your code to a hundred percent of your traffic concurrently. So if you've got a problem that you're only gonna discover in production, you're gonna discover it with every single user, whereas a Canary deployment or a linear deployment allows you to observe your monitoring both automated using alarms and manual using dashboards and make sure that everything is okay bit by bit.

CIC Yolo is probably the. Easiest to implement because you just walk through deploying into every region. But let's not do that one. Okay. Let's talk about regional canaries, which I will argue is the easiest way to get started because we're all using frameworks again, right? In a regional Canary, you pick one region out of your.

Architecture [00:19:00] and you do a Canary deployment within that region. So your other regions remain untouched. And the advantage here is you have a subset of your application. With a subset of a region that's modified. And you can scale that up as you gain confidence from your monitoring and alarms. And then once you have the confidence that is functioning correctly, you can deploy it throughout the rest of your applications.

If you do a Canary style, then for example, you could say 10% of Ohio once that's good deploy all of it. If you do it linear, then you can build. Every 15 minutes with another 10% until eventually you've gone through all of your regions and have rolled out your deployment across your entire architecture.

All of this is gonna depend on the sophistication of your team, how much experience you have and how comfortable you are in your application requirements. So that's the regional Canary. When you start within one region and grow out. A Canary region, conversely may seem [00:20:00] simpler because it's just taking one region out of your application and deploying into there doing your monitoring, and then once you're comfortable cutting over but there's a couple problems or challenges with this that makes it more complex.

One you're not guaranteed to have even traffic distribution across your region. Whereas you can more closely. Or more effectively expect that within a single region. So you may do a Canary region. That's serving 90% of your traffic because no one on the west coast has woken up yet. And that.

Defeats the purpose of managing your risk here. You're also not taking advantage of the tools that are already provided to you, such as the Canary deployments and linear deployments that are built into code build in AWS, Sam CLI. So this is an approach that can be tempting, but in general, I would not suggest that you do the Canary region approach.

Now if you're extremely sophisticated, what you'll probably want to do is the final approach with interregional canaries blend, the two where you use the built in [00:21:00] characteristics of your cloud service provider to do Canary region Canary deployments across multiple regions. At the same time, this allows you to observe inter region.

That wouldn't necessarily come up from a Canary deployment in a single region, but it still allows you to manage risk in the amount of traffic that you're exposing to the new deployment. Once you're comfortable with your monitoring, your observation, then you complete the deployment across all other regions.

This is probably your desired in-state over time. As you build your sophistication with C I C D and active architectures. This is where you want to get to is your interregional Canary. Now DNS great news. It's built into all the major cloud service providers it's built into the next generation cloud service providers.

This is pretty much as simple as choosing. Regional latency configuration. On the screen here, a screenshot from route 53 in the AWS management console, where we're enabling latency for this new record that we're going to [00:22:00] create. Again, it's simple, but it's a thing that you need to take care to do if you don't do it.

And you've deployed a massive active architecture, but only point your DNS record to one region. You don't really have an active architecture. So remember to include this in your templates, in your C I CD pipeline, and to manage this record, if you use it as the basis for your Canary deployments, a quick word on logs.

When you have your application deployed across multiple regions by default on AWS, you're going to be writing your Lambda function logs to CloudWatch. This means that those logs are all going into different locations. So you'll want to do something like KHA data, fire hose. To aggregate those logs and put them in the S3 where you can query them.

If you already have a log aggregator that you're using, of course you wanna send your logs there, but just be aware that you're gonna have this growth of logs. If you don't disable it, or if you're sending it to multiple destinations that can make it more difficult to diagnose your application's performance and any anomalies.

[00:23:00] There was a really great Twitter thread on this. A few days back, got a screenshot from Aiden steel here. The link to that thread is here on the slide fauna.link/aa-logs. Go check that out. If you're interested in a few more details on how to handle this with AWS telemetry distribution. And so as promised a few solutions.

For you to implement active architectures. And I apologize for throwing this up here. It's all the stuff that we don't have to think about anymore, people have talked about the complexity of serverless applications on diagrams, but they also don't talk about all of these things that you see here that you no longer have to deal with when you're building with serverless.

So it's nice. Isn't it to forget about all of this stuff. This is from the AWS active blog post that you see on the link there to recreate it with a serverless applic. Just give yourself a couple of regions. Add route 53 with latency based, routing above it. An API gateway in each region, AWS Lambda functions to handle your business logic [00:24:00] and a data layer underneath like fauna or DynamoDB with global tables.

I like this application so much that I call it the serverless heart. My heart is in this architecture. Now this I'm gonna get a lot of flack for saying this, but you can almost call this a legacy serverless architecture here. Legacy follows the Corey Quinn definition of deployed almost everywhere and making a lot of businesses, a bunch of money.

But it's a well known pattern. People are familiar with this next generation serverless providers like CloudFlare workers. Make this even simpler. There's not really the concept of a region with CloudFlare workers. You deploy your functions to every point of presence in Cloudflare's CDN around the globe.

Those are naturally closer to your users. They hit the closest endpoint and then CloudFlare workers can hit that data layer itself, such as fauna database, partner of CloudFlare workers. There are also other options for such as CloudFlare workers, KV for key value stores. When you have less complex data requirements.

But the speed on this [00:25:00] is incredible. Building some sample apps with this. I typically see three to four millisecond response times as my default for cash misses, meaning it has to go out to the database, do the look up and get the data back. So if you're starting out with a Greenfield app and you're not tied to a large CSP, I really encourage you to give CloudFlare workers a look.

If you have multi-region active requirements, or in this case, global active requirements. And then one last architecture that works well. If you have IOT devices or jam stack applications is the client serverless model where you bypass all of this and the client just calls your database directly.

In the old days, we never would've done this. We never would've exposed our database to the internet. But because something like fauna integrates with third party service providers, like alt zero to do identity, you can safely expose anonymous routes and rely on the iden identity provider. Their claims for what these applications can access.

And because it's a direct connection to the client, you get [00:26:00] even lower latency. So quick review of what we've gone through today. We did an introduction to active architectures, how they're different with serverless applications. We talked about the challenges in building active architectures for serverless applications, specifically the three DS data layer, deployment, and DNS.

And we talked about aggregating log. And reviewed some solutions that you might implement. If you're looking to build an active, serverless architecture. I wanna thank you for joining us today. At this time, I'm gonna hand it back over to Brian so that we can address some of your questions from the chat.

**Brian Rinaldi:** Thanks, Rob. Thank you, Rob. That was fabulous. And give you credit for not stumbling on active architectures once. I don't think I caught that once. And, you I think if you do reuse this presentation, I think we can even do it like drinking D game. Every time you say active architectures,

**Rob Sutter:** it's I got all the stumbles out in the rehearsals.

**Brian Rinaldi:** Yeah. And I need to have rehearsed my little discussions here, cuz I stumble quite a. [00:27:00] Anyway alright. We do have a few questions from the audience I'm gonna tackle. If y'all have any more questions, please go ahead and post them and I will get to them. But Nick asked, he says, I haven't read the Calvin paper yet.

He will, but he's curious how it differs from a transaction slash prop getting changes in other vendors and how it's faster, maybe a TLDR. If we don't have time to go into all the technical.

**Rob Sutter:** Yeah, let's see if I can do the TLDR here. Fauna propagates, deterministic applications, rather than propagating effects.

So essentially you could think of what's propagated is the the rights or the functions that are going to occur. And it looks for conflicts. That's the OCC, the optimistic it's contention checker. Now I'm embarrassed, cuz I forgot that part of the TLDR, but because of the serialization layer, they get agreement on what can be done without conflict.

And every non conflicting action is applied [00:28:00] because they can be applied in parallel as part of one transaction without overriding anything. Part of the OCC is also delaying reads on the affected documents so that those reads don't occur until after. So all of that is batched together at the serialization layer dispatched, and then the details on how that is agreed and consensus and all of that are in the paper, but it's essentially a, rather than agreeing, Hey don't do anything to this.

I'm gonna change it. Okay. Here's what I changed. It's Hey, we're all gonna do this together and then they do it and move on.

**Brian Rinaldi:** Okay. Wow. That's cool. I, hopefully. Sounds like it would be an interesting paper, maybe a bit above my head,

**Rob Sutter:** but , I, it I'd really suggest it's only 12 pages only. It is dense if you're interested and don't wanna read the whole thing.

Section one is enough to really get a good understanding and it's one page front and back. So it's that part in particular is worth the time mono.link/calvin. [00:29:00] Cool.

**Brian Rinaldi:** All right. So Michael S what's your recommendation when you have a multi-region Canary deploy, but are forced to make a change to your data layer that is not compatible with the previous code.

Are there any other options than just a Yolo deploy?

**Rob Sutter:** Huh? There's always an option besides a Yolo deploy. This depends on your data layer. If you're doing it in fauna, we did a series recently on data migrations that talks about this. If you extend that you can do versioning where you have a layer in between that takes new requests, passes them through and returns.

The results takes old requests. Mus them to the new format, passes that through, receives it, transforms it back to the old format and sends it back. There's a couple different strategies you can approach. But again, it's heavily dependent on your who your data layer is, how you're accessing it. That becomes much more difficult with something like GraphQL, where you only have one schema and one allowed shape.

The benefit of that is that you only have one schema and one allowed shape. But it typically will involve some sort of [00:30:00] proxy layer in the middle, whether it's temporary or permanent with something like fauna, because all these accesses are functions. You can apply that function on. And then do the migration and always return the new type, but it's really gonna be use case dependent.

**Brian Rinaldi:** Okay. Arters ask, are fauna endpoints distributed to be physically close to CDN endpoints of providers like AWS NiFi or

**Rob Sutter:** Versal L.

Fauna endpoints are not publicly disclosed, but if you're building for a mission critical purpose and you need to know what they are open to support request, then we will help you build effectively. They are distributed on the major cloud service providers. And it's different depending on which region you take.

I would say that if you are. If you don't have a particular reason to be with one cloud service provider of an over another being on AWS gives you the best chance of landing on a fauna endpoint. Okay, good to know. I don't wanna Dodge that question. So yeah, again, if this [00:31:00] is something that's critical to you as a builder, contact us and we'll work with you, but it is not something that we published because we're adding regions in all the time.

And if I say. Us east one and you're oh, I'm in us east two. I don't use that. Maybe it's also in us east two and I'm not gonna sit here and list them. All right. Okay.

**Brian Rinaldi:** Yeah. Makes sense. So Tebow says, how do you handle code DSY when doing Canary

**Rob Sutter:** deploys, how do you handle code DSY yes. I'm gonna need a clarification on code DSY I'm gonna be honest with you.

Do you mean if another change happens in the pipeline, as that change is deploy.

**Brian Rinaldi:** I'll give him a moment to to respond. Cause I actually don't know myself. Sorry. Just relaying the questions. That's that? One's again, like a little, I've done a lot in my career, but thankfully managing.

these kind of large scale deployment issues are, it's not one of them, but I do have actually along that line while we wait for Tebow to clarify. So when you were talking about like these different [00:32:00] kind of strategies, the C I C Y regional Canary, and so on and so forth that, so you suggested like the regional Canary or the interregional Canary what?

So is that something like that's handled by tooling or is this something you have to set up yourself? I'm asking as somebody who really doesn't know a lot about how this all gets.

**Rob Sutter:** Yeah. The best part of both of those approaches is a lot of tooling handles it already. So if you're using something like AWS, Sam, it has built in Canary deployments and that's for your regional canaries.

It, you specify either, linear 10%, every 10 minutes or 15% then cut over, et cetera, and code. Behind the scenes is spun up and handles setting these checking the alarm states, et cetera. You specify the alarms. It's not trivial. You still have to specify all this stuff declaratively, but the managed services do all of this for you.

So a lot of that is there. Ultimately you're gonna be writing pipeline code for all. [00:33:00] No matter what you do. And that's where we go back to. You have to have an economic benefit that outweighs the economic cost of creating and maintaining that pipeline code so that it's not just undifferentiated heavy lifting for its own sake.

If you don't have revenue or if 100 versus 200 milliseconds doesn't cause any drop off in users, if you have captive users, like this is an application for your company. And it's, it's not sales, probably not the best use case for you to do this because that additional complexity doesn't get you anything meaningful.

**Brian Rinaldi:** That makes sense. So Tebow clarify that says like when you route some part of your traffic to your new code version, you might have behavior that might be different from one request to another. So how do you make sure your code will work? Whether it hits the new or old code? .

**Rob Sutter:** Yeah. That's a deployment question for the ages, right?

And again, it's, this is versioning. This is SIM this is everything trying to attempt that or attempting to discuss [00:34:00] that. If you have versions in your API, In theory, all of your newer calls should work with older events, right? So if you have the 3.2 version of the service, it gets a request from a 3.1 client.

It should be able to handle that in return a response that's meaningful, not necessarily the other way around. It goes to your pipeline. Do you pause your routing and do some sort of Muning like with CloudFlare, you can look at the headers and look at the version that's in the header and determine that you only send it to precisely that endpoint as you're in the middle of the deployment.

Again, it's really gonna go back to the specific choices that you've made around tooling and providers, what they offer but versioning. And proper versioning. I'm gonna offend a lot of people here for a second use SIM ver I've seen a lot of hating on it, but use it. If you're using versioning in your client and in your API, you'll be able to tie those two together.

And at some point only route the right request to the version that can handle them.[00:35:00]
