---
_build:
  list: false
  render: never
---

**Jeremy Daly:** [00:00:00] All right, so let's let's get going here. So we're gonna talk about the past present and future of serverless today. So in a little bit more detail about what we're gonna talk about, we're gonna look at how serverless has evolved over the last seven plus years. We were gonna look at how developer workflows and responsibilities have changed.

Now that we've got serverless as part of. We'll look at the tools, services, and patterns that we've adopted. And then we're gonna look ahead at the future of modern application development and where serverless is going and some of the other sort of companion tools and and systems that are being built that help us get there.

Quickly about myself as Brian said, I'm the GM of serverless cloud at serverless, Inc. I do a lot of consulting with companies building in the cloud, although I haven't been doing that in the last year or so, cause I've been very busy with serverless cloud. I've been doing this for a very [00:01:00] long time, worked with a number of startup.

I started working with AWS back in 2009. So this is well before most of this, serverless stuff existed doing EC two S and all that kind of stuff. And then when Lambda went GA in 2015 that's when I I started really getting into serverless. I have my blog I do a bunch of OSS and a lot of speaking, and then my newsletter, my podcast, and I also have a dynamo DB modeling course that I'm working on.

So if you're interested in no SQL modeling, check that out. And then again, I'm a serverless hero. Great program that AWS does that allows us to to help get early on products and give feedback and things like that. So a lot of fun to be part of that program. Okay. So I love to start all of my talks with a quote from Verner Vogels.

Usually I use the quote, everything fails all the time because it gets us in the right head space when we're thinking about serverless applications and distributed systems in the cloud. But I actually had Verner on my podcast, not too long. And he, he said, I still get annoyed by every piece of AWS that is not serverless.

And it was [00:02:00] funny because our conversation went a little bit further and he has a very different definition of serverless, I think, than I do than probably most of you do and so forth. So I know we've been at a serverless conference all day. There's been some amazing talks here. But I wanted to just start this off by setting a little bit of a mindset set of what it means to be serverless.

These are things we've already heard, no server management, flexible scaling pay for value, high availability. These are the sort of the standard things, but I think a very important thing. And some of the talks mentioned this. If you're gonna be serverless, you really have to think about being event driven, right?

So most of most serverless services run on demand when you need 'em there's some exception. Sure. But the idea is that event driven applications, are prime to be or are prime things to be serverless. So we really try to build our applications that way. I wanna talk a little bit about going back and where we were in the BA in the past.

So I wanna get in our time machine, jump back and look at where it started before we came up with this term serverless in [00:03:00] 2014 when Lambda came out. So before serverless. AWS had S3 back in 2006 SQS was there CloudWatch in 2009, SNS in 2010 cloud front in 2010, route 53 in 2010.

Then we got cloud formation. And again, before we had cloud formation, if anybody was deploying apps on AWS, you were using the CLI, it was a pain. And then dynamo DB came along in 2012 and then finally Kinesis in 2013. And again, the reason why I mention all of these service. Is because these are core serverless services, at least in the AWS ecosystem.

We, we think of these as these core serverless services. And this happened well before. AWS even came out with AWS Lambda. So when we get to 2014, that's when AWS Lambda is introduced by AWS. And this is this new service that probably most of you are familiar with it now, but back then it was this new thing that was like what can we do with this thing?

You can run certain things on demand that you don't have to have servers set up and you don't have any [00:04:00] C two instance you don't need to use containers. It was really interesting. So for the next couple of years, I called these the wonder years. Cause we were really wondering what it is that we could do with this.

Over the course of this, we got things like API gateway. Now this wasn't until July of 2015. So when Lambda first came out, you couldn't make an HDP request to it and respond. You could do things like S you could do three excuse me, things from S3. You could do things from events, from Essis and stuff like that, but you didn't have API gateway.

So this was a big advancement. And when this came out that opened the door for the serverless framework that was launched in October of 2015. And then shortly after that jams stack was coined by Matt Billman. We had VPC support added in 2016. So for over a year, from when Lambda was launched, you couldn't even connect to an RDS cluster or an elastic cash server or anything like that because you didn't have that VPC support.

And then other providers started getting into the game. So Azure functions in March of 2016, Athena, which is a great service from [00:05:00] AWS. Came out in 2016. Then Sam came along to try to have another way to build serverless applications without needing to do all the complexities of cloud formation directly.

Step functions came out in 2016, which gave us the way to do serverless state machines. And then the server application lens was published at the end of 2016, which was the first time AWS tried to codify. The best way to build serverless applications and what was the right way to do it.

And we'll see this sort of pattern repeats itself over. So we had a bunch of really cool things added in these first two years. You could build some really nice things. We had some frameworks develop around that. But then there was a lack of or certain use cases you couldn't do. So in 2017 not only did Google cloud functions come onto the scene, as well as fauna to do like a serverless database, there was a little bit beyond just DynamoDB, trying to do a little bit more.

You also had the architect framework that came out, you had Google fire store that came out. And then AWS Fargate came out, which was this first sort of look at serverless containers. We're gonna talk [00:06:00] about that a little bit more. Then you get app sync, which was the GraphQL managed GraphQL serverless service.

And then the AWS amplify framework that was built around app sync in order to make it easier to build applications GraphQL applications. With a whole bunch of great features and making it easier to do that. So a little bit of codifying there in terms of how that would work.

And then we got Aurora serverless in December of 2017, and then AWS tried again to codify how to build serverless applications and how to stitch things together by launching the serverless application repository. Which was supposed to be people sharing, how they were building certain things and they were reusable and so forth.

But even with all these new things that came out, there's a lot of interesting things happening. There was still missing a number of features. So in 2018, We got CloudFlare workers that came out, which is again another service competing. This was more at the edge, but again, serverless services or serverless functions.

Then we got SQLs as an event trigger, and this was actually really big because for most applications, [00:07:00] there wasn't event bridge yet. So we were using SQLs as an event bus. And the only way to access. Access anything that was, or record that was on the queue was to pull it from the Lambda function, which was not a very efficient thing to do.

So when this came along, this opened up a whole bunch of use cases. Google cloud run came along later that year which was another serverless another serverless container. And this is a really interesting pro product. We'll talk about that a little bit. Ella, which did another sort of serverless container thing.

Lambda got 15 minute timeout. So people were able to start doing bigger things rather than just, so they would be able to do ETL tasks, even if they had to split them up 15 minutes was still not a ton of time for certain things, but certainly open the possibilities up. They added web sockets.

They added Lambda layers in the runtime API. So this opened up the ability to do PHP on Lambda, which gave us things like breath and some other frameworks that popped up around that. And then one of the really big things they did in 2018 was they added application, load balancer support so that you could actually trigger.

A Lambda [00:08:00] function from an application load balancer. And at the time I was working with a lot of customers that had existing applications on AWS and they wanted to start moving things over to serverless, but the only way to do that and split the traffic was to put an API gateway in front. And that just added a whole bunch of latency and so forth.

So a lot of people started moving to that strangler fig pattern and started routing certain routes over to Lambda functions and taking that workload off of their existing existing workloads. This was a pretty big advancement when this came out. But we were still missing things. There's still a few pieces that we didn't have in 2019.

They added the AWS data API and I added AWS in front of this because MongoDB just came up with a data API. Recently we got Amazon event bridge, which was one of those missing pieces there. In order to do an enterprise event bus, which Amazon event bridge does quite brilliantly and has a lot of really great features that have been added to it.

And then in July we also got the AWS CDK and then landed destinations came along just before reinvent in 2019. [00:09:00] And what was interesting about landed destinations is AWS usually doesn. Sort of sunset products. They keep developing and so forth. Lin destinations was one of those times where they gave you an alternate way to do certain things.

And you could actually do dead letter queues a little bit differently using lambed destinations as opposed to as opposed to just using standard dead letter queues. And they actually advise you to use these instead. And the same thing was true for HTB API APIs for API gateway.

So API gateway rest APIs were a little bit slower latency. Was there a little bit more expensive? HTV APIs came out as a way to reduce that cost and speed up that latency. And then if anyone's familiar with the con concurrent pooling issue that is with Lambda functions, connecting to databases, you can't really do connection pooling, cuz you can only, have, at one connection for every concurrent connection to a lamb function, they came up with RDS proxy.

Which is a service that allows you to now scale connections to a relational database from your Lambda functions and do that a little bit more smoothly. So these things came along, this was great. This [00:10:00] got a bunch of a, a rid of a bunch of problems that we were having and things that you couldn't do.

And then 2020 rolled around. There were even more things that came forward that kind of just got rid of all the restraints or all the constraints that were there. Lambda EFS integration was available so that you could start doing stateful applications and connect to, shared drives Lambda extensions came out, which was really great for observability companies, cuz they could now look into the Lambda life cycle and understand better parts of that container image support came.

So people who were. Using container packaging solutions. It was easy for them to go ahead and just deploy those now to a Lambda function and take advantage of that. You got 10 gigs of memory. Auroras V2 came out. Unfortunately it wasn't it's not as serverless as I had hoped it would be, it was a, it was another attempt to to make another serverless relational database.

But then early 2001, essentially, this is what we. And this is, not an overly complex architecture, if you understand serverless and you understand how to glue things together this should make a lot of [00:11:00] sense to you. But if you look at it, there are a lot of primitives that are all tied together that all have to be wired together via cloud formation or some other some other infrastructures code program.

And it just gets complicated. And this is something where if you look at let's take the Seus framework, for example you very much so have to know what primitives you're dealing with and know how to configure those primitives. So serverless framework, for example, you map functions those go directly to Lambda.

And then your events map to whatever the primitive is. So if you're pulling off anQ sq or Essis or whatever, those map to those specific primitives and then in, if you want to, do a dynamo DB table or something like that, you have to define that separately. Now architect came along and they had a, a better abstraction layer here where they, it was a little bit higher level, a little bit easier, I think, to process.

But again, it was mapping to specific. Primitives now this isn't necessarily a problem. Cause again, you have a lot of control, what you need to do. And then the cloud development kit came around the AWS CDK. And you still had to define primitives in [00:12:00] what those did, but you could use constructs to, to basically stitch a bunch of primitives together to develop a use case.

And the same thing is true with paloy. You have component resources where you can group these abstractions to a higher level abstraction. But the problem is that the developer still needs to understand all of that infrastructure and they're still responsible for it. So not only for the infrastructure itself, but also for that configuration.

And knowing the the nuances of how those things have to work. So as serverless developers over the last seven years, we've developed in almost eight years. At this point, we've developed a lot more responsibilities than we used to have. So business logic was something that us as developers, we used to do all the time.

Then suddenly infrastructure and cloud architecture became an integral part of our development process. Because we had to write codes specifically for the infrastructure that we were deploying it to. And we had to understand the infrastructure itself so that we could make sure that our code worked correctly and that we were interfacing with the right things build and deployment pipelines became more complex because now we were no [00:13:00] longer just checking in code.

We are actually responsible for making sure that code gets compiled correctly, gets deployed to the right resources or the right resources are deploy. And then monitoring and observability. It's no longer, throw it over the wall, and then somebody else is responsible for monitoring it.

This is, this is change for containers and other things as well. But essentially now we have to build we have to build observability into our applications. We should be instrumenting our code because the developers, the best person to know if a piece of their code isn't working correctly.

So we need to be part of that. And then something that a lot of people don't talk about all the time, unfortunately, is security and compliance. There are a lot of things now that a developer has to think about when it comes to security and compliance, especially with serverless because you don't necessarily have those higher level systems that are protecting the individual services.

So application security is a very important piece of building these. Now another thing that has happened, and this was AWS has been doing this for quite some time is this idea of configuration over code. And that means that rather than you writing [00:14:00] things in your Lambda functions or in any of your handlers, that sort of process some of these errors, the cloud is actually much better than you are at handling errors and retrying failures.

So if your Lambda function fails, some. During the processing of it. You might not be able to catch that error because the function itself fails, the whole container fails, but the cloud can catch that they can retry it. They can do some of that stuff. They're also much better at handling failover and redundancy and then transporting and sometimes even trans transforming data.

If you need to move something from S3 to somewhere else, rather than you using a lamb to function to do that, there's a service that will do that better for you. And that's all built into into infrastructure's code. And then even things like orchestrating workflows I, somebody earlier today was talking about durable functions, which is really great way to, specify or define workflows in.

But in AWS, you don't want to do anything like that. You want to use state machines in order to do that. You don't wanna be writing those that orchestration within a single [00:15:00] Lambda function. Cuz again, if that fails, then the, you need to manage the state somehow. It's just easier to use a service that does that better for you.

And this is great in the sense that it reduces the amount of code that you might have to write in a Lambda function, but code is a liability. So even if it's infrastructure is code that's still code that your team or you have to maintain and be responsible for. So now the interesting thing is back in 2000, I think this was 2018.

I put up this post serverless microservice patterns for AWS. And in this, what I did was I was just building applications, using serverless, and I essentially found. I was doing the same things over and over again. We just had these patterns that kept on emerging. And I talked to other people and they were saying, yeah, this is what I do and so forth.

So I put together this list of 18 or 19 patterns. And as soon as I put this out there, it got a lot of really great feedback. People like, oh, that's how I'm doing it. Or, oh, I didn't even think about doing it that way and so forth. And so we started to develop. These really good patterns of how this stuff was supposed to work.

[00:16:00] And shortly thereafter, I think this was in March of 20, 20, 20, something like that. The CDK pattern site launched this was this was from the from Matt Colter at at Liberty mutual. And he was codifying again, these. These patterns using the CDK and tying them back to the well architected framework was really interesting.

And then in 2021, the serverless advocate team at AWS came up with the serverless pattern site. And now I think there's 300 and some odd templates in there. But the point of this is we've come up and decided on what the right patterns are. We we've agreed on this. People have been doing this for a while.

We know the right way to handle a particular workload. But we essentially force you to create these things every time. Unless you're codifying them some way yourself. And so if you look at larger companies like Liberty mutual, for example, they have something called the serverless enablement team with the goal of being, essentially codifying these patterns and enabling it so that when a new team member joins, they can [00:17:00] deploy a new API or a new route or something like that.

Now they don't understand exactly what's happening underneath it because they're, built in with the CDK. But the point is that they're able to get productive very quickly. And those best practices are already built in and Lego has something called the platform squad that does something very similar as well where they actually use this to maintain standards and compliance, shared code observability and things like that.

Now, the problem is that not everybody though has teams that can go and research this stuff and become experts on this. There's a limited number of cloud gurus or cloud experts out there right now. And and there's more and more demand. If you're a company just trying to move to the cloud, it's very hard.

Or even if you're in the cloud and trying to move to serverless, understanding these patterns and implementing them can become quite diff quite difficult. So in 2001, a whole bunch of companies, a bunch of people in the space got together and they started doing these things to try to combine these primitives into codify them in a way that these were like services that were built.

So AWS app runner came. This is something from AWS. Very [00:18:00] good service similar to similar to cloud run, Google cloud run, for example step functions added the integration with all thes SDKs. So you didn't necessarily have to now write code to do the interactions. Now you could just use like a drag drop a workflow editor amplify studio came out, which has some cool integrations with Figma.

They added things like partial batch responses and event filtering some other ways to make it a little easier to build some of these apps. And then they added a whole bunch more serverless services, especially around SageMaker and SIS and Redshift. And then lambed to function. URLs came out to simplify the fact that you didn't have to create an API gateway for certain use cases.

And then we get 10 gigs of the femoral storage, which allowed us to now not need a VPC. To connect to EFS so that we could do more work just within the Lambda function itself. And then you got the server of stack. You got IBM cloud code engine, you got planet scale, which is. As server as my SQL service ACA serverless, which is now KX came out, the company that I've been working on, or the product that I've been working on serverless cloud came out, Zada came [00:19:00] out, which is a which is another sort of Postgres elastic search elastic cash type or Redis mix to do data.

And then nimble was actually bought by digital ocean. Point. And just recently digital ocean has launched their their serverless functions or their digital ocean function stuff. So this is where we're at now. So this is now, so serverless now 2020. This is really the error of modern applications.

And I think if you've been listening to this today, listening to all the different talks today there's really not a lot of things you can't do with serverless anymore. There's a few limitations here and there, and a couple of rough edges for the, but for the most. There's a lot that you can do. And where we are now is this ecosystem has expanded dramatically, right?

So we now have these things called serverless containers, and it's gotten to a point where the ma mature, the maturity is almost there now. I'm I was not a big fan of this term. I had some I had some concerns and like, how can containers be serverless because you're packaging so much in there. But.

Google cloud run and app runner really have [00:20:00] changed. My changed my opinion of this, but I do have some caveats and I do have some sort of conditions that in order to be a service container, it has to fit these fit these roles. So one, it has to be a standard container image. It can't be something special that has to be able to run.

It should be somewhat portable. They have to be able to handle multiple concurrent connections. These shouldn't be land of functions or spinning up a single container in order to handle, one request. And then the load balancing and the auto scaling has to be built. And it has to be configurable.

So you shouldn't have to be setting up a, some sort of a load balance or in front of this and managing that yourself. And then this kind of, scales to zero thing. It's good if it happens in development environments for production, I have no problem. Pre-provisioning things not only to.

Minimize cold starts, but also to make sure that that it can scale up. That totally makes sense. But using these, unfortunately, as your container instances, don't quite fit this bill and neither does ECS, cuz again, ECS, you have to put, or even EK, I should have to put a load balancer in front of it.

So these other three, I think, cloud run and app under definitely IBM cloud code engine looks like it's getting there as well. [00:21:00] But there's more, we go, beyond serverless containers, we have serverless app platforms now. So a bunch of these new ones have came out. So CoEB, and calx railway fly.io demo, and catalyst by Zoho.

So these all use a different combination of packaging formats. So some of them use source code. Some of them support containers directly. I say proprietary ish hosting environments, because some of them are optimized for certain run times and so forth, but interesting. And they all do load balancing auto scaling resource provisioning, discovery, it's all built in.

So these are very cool platforms. For particular type of workloads server as databases is something that has come a really long way. If we start over on the left hand side with no sequel, we get that granddaddy, which is dynamo DB. But with fire store, fire base far fauna Azure cosmos DB has a serverless piece now MongoDB launched Atlas serverless a couple of months ago.

So there's a lot of really interesting, no SQL options when it comes to the serveral side on the other side of this. So you have these sort of sequel or already BMS. And this is not [00:22:00] quite as easy. It's not like it's easy to build a no SQL database. That's serverless, but the SQL one seems to be a little bit harder.

So Aurora serverless again, that is something that I at least V1 I say not V2 because again, I have I have some, Twitter threads on this. But like these other ones that came out cockroach and planet scale and Zada, Azure SQL neon is raising money like crazy. I think they just raised $56 million total or something like that to build a new way to do server.

Postgres. Really cool stuff happening there. Some people talked about some of these edge platforms, so CloudFlare workers is amazing Fastly Amazon cloud front functions. These are great cuz they're low latency. They're globally distributed. CloudFlare has a whole bunch of KV capabilities now.

There's limited execution time. CloudFlare does better depending on I think, how you provision and so forth. But they're generally lightweight workloads, redirect, header, manipulation, authentication, things like that. But there's a whole bunch of cool things that are happening there and they're all getting better and they're all getting more powerful jam stack.

It's another super exciting thing. And I say that, meet serverless meets the edge because these things are doing [00:23:00] a lot. So Versace Netlify CloudFlare PLA pages, AWS amplify, for example, they do all these really cool things like static site, regeneration and static, or yeah, static site, generation and ISR, and these other things.

They all do framework detection, deployment management, serverless, and edge functions. Versale has this thing. I'm not sure it's out yet, but I know they're working on something. So basically you can say. It'll automatically deploy to the edge, if it can or fall back to a region, if it needs to, access data or something like that.

So some really cool things happening there. They all have integrated backends to some degree, Netlify has Netlify graph AWS amplify. You can basically tie into any AWS service you want. And CloudFlare pages now has access of course, to workers and a bunch of other things that are happening there, which gives you a lot of extensibility.

And lets you do, you build pretty powerful apps, combining all these different services, but now we also have this. So this is the cloud native computing foundations, cloud native landscape. And there are thousand I think there's over a thousand different different. I dunno, [00:24:00] product services platforms, you name it, they're all on here.

And while this is great that we have a thriving ecosystem around there, it does become very difficult for you to wrap your head around what are the different things that I need now, of course not everything on here is serverless. There's a lot of things that are built for Kubernetes and these other things, but it just does, becomes really confusing.

The question is with thousands of these sort of what's next? What is serverless gonna look like? 20, 22 and beyond. And if you're familiar with Sean SWS Wang, he actually put out an article back in September of last year. I think that talked about this idea of saying, programming languages and cloud infrastructure.

Are two fields that essentially need to converge into a single paradigm. And this is his prediction that, any resource required by a program will be automatically provisioned and optimized by the environment that runs it. Now, when he wrote this, Sean actually didn't know that there were a bunch of people already doing this.

But the idea of the self provisioning run time that he talks about is that you have the language that you're writing in, whatever that is, PHP or Java or [00:25:00] go or rust or type script or whatever. And then you have all the infrastructure that you need. If that can come together and actually have a system that understands what you've written, then that'll go ahead and just deploy the infrastructure that you need behind the scenes.

And you won't have to do all that configuration yourself. So I put this in quote, self-provisioning not all of these are self-provisioning, but these are all services. Quite a few of them that are pushing the boundaries and going there. So things like lamb, dragon, and Clotho, dark, if people are familiar with dark, that's been around for quite some time.

Encore is a sort of go based approach to this shuttle is a rust based approach to this nitric uses type script. Chaos is another example of that, but you've got wasp playing and so forth and then serverless cloud, which we're working on, which is JavaScript and type. So Sean calls it, the self provisioning run time.

We actually call it infrastructure from code. And the idea here is that essentially you only have to write application code, so there's no yam or configuration files, no CDK, none of the stuff that you that you normally have to do to provision to the cloud. And this [00:26:00] focuses on use cases and outcomes versus those primitives.

We talked about. Where you have to say, I want a lamb to function, or I want an sq and so forth. And then you just use familiar patterns to define your business logic. And then it will automatically deploy and manage the infrastructure, sorry, the infras structure to support that app. And then you get things like simple workflows for development, testing, and deployments, all out of the box.

And then as Sean mentioned, and this is really the coolest thing about. Is that infrastructure can then be optimized over time based on the actual usage. So one of the things that we're doing in serverless cloud right now, If your HT DP traffic actually gets to be too high. And that it's starting to cost more money because again, serving up, HTP requests via land functions can get a little bit of exp a little expensive if you're serving up a ton of them.

Cuz you do have that sort of linear growth and cost. We actually can switch you over to app runner, repackage your app into a container for you completely transparent right up behind the scenes. And now you can start serving up on more optimized infrastructure for that. [00:27:00] But the really cool thing about the optimization.

Over time. We can watch the memory usage. We can watch, how long it takes to respond, what the optimal timeout is and so forth, and actually start adjusting those levers for you automatically, the platform can start doing that. So it's a really interesting space long way to go. But it is you.

It's the grumblings of this are happening. There's a lot of people that are working on this and it's pretty exciting. So the last thing I do wanna mention before I, I go is this idea of own, the base rent, the spike. And I was trying to find out who originally said this, and I found something in an article from 2014.

I know Corey Quinn says this as well. But this was more about hybrid clouds. And this is the idea of saying you own your own data center. And that can get you to a certain capacity. And then if you went over that capacity we'll shift that traffic to the cloud and rent the spike in our traffic that didn't work out for a number of different companies, Zingo being one of those.

And essentially now everybody is in the cloud, or most of these companies are moving into the cloud entirely. And so you're renting everything, but there's [00:28:00] something with serverless applications that as you get more traffic, the cost goes up in a linear fashion. If you have 10,000 requests, 20,000 requests so forth, it's gonna keep costing more and more.

Now there's all kinds of benefits to TCO, total cost of ownership and things like that. But one thing that Mongo DB did recently, which was really interest. As they started bending the curve. And the way that they did this was they said that once you get over a certain amount of requests, read requests, excuse me, in a given day, we'll drop the price by 50%.

And then once you get over another level of request per day, we'll drop the request, by 90% or the cost by 90%. And that allows you to bend the curve. And it doesn't take a lot of money. I think it's like $35 a day. If you're spending on read requests, it'll start to drop that curb. And this is something that would be really interesting if serverless went down.

Path for pricing, because I think when you're building on C infrastructure, it is really hard. It's super easy to do to build the initial stuff, but then as it starts to get more traffic. Optimizing that cost. Especially when you start getting a lot of workloads that's [00:29:00] something that we, that I know I've been thinking about because again, costs start to get a little bit more expensive.

So anyways Lambda functions just announced their price discounts, which are like 10% and 20%. If you have like a. Gajillion minutes of space. That's not quite where we wanna be interesting approach, but not quite what Mongo's doing. So I would love to see more of this type of stuff. Anyways, so some key takeaways here serverless has evolved tremendously.

There's so many amazing things that have happened over the last seven years. Pretty much anything that you had an objection to in the past has been addressed. Yeah, there's still complexity. There's still some things. And like I said, rough edges, but for the most part, these objections have been.

If you are building anything for a company you're working for, or a startup you're building or whatever, if this is not absolutely core to your business then there's most likely a primitive or a managed service don't build your own authentication service. Don't try to build your own queuing system.

Don't try to build, something that that, that manages data or whatever, that just all that stuff is there for you. There's something there for every.[00:30:00] Configuration over code. So I like what this does, cause I do think the cloud should do the heavy lifting for you, but just remember the more you put into your configuration code or the configuration, that's still a liability that you have to deal with.

And again, just stressing the fact that event driven applications are back. If you have not heard of eventual consistency or not sure what that. Go learn about that because most of these events driven apps are going to be eventually consistent. Just something that you deal with. I know somebody's talking about item potency and things like that.

Those all come into play here, but just something to know and learn. And then for me, at least complexity is still a major concern. And again, I ask the question is another abstraction, the future. Just like C and C plus did for machine code can infrastructure from code, do the same thing for complex configurations via, cloud formation or Terraform or one of these things?

I think it can, that's a bet that I'm making. So anyways, thank you so much for having me here. You can take a look at my blog podcast newsletter, the course I have a couple of open source projects. You can look at, follow me on Twitter and [00:31:00] definitely check out serverless.com/cloud and try out this try out this service and see if it's something that that excites you.

Wow. Thank

**Brian Rinaldi:** you, Jeremy. I'm like still digesting. You had so much information in that slide deck. That was amazing. And you covered so many topics that I'm trying to like, figure out where to start, but folks, if you have questions, we've got Jeremy here for. For just a handful more minutes, but but please ask them and ask a question model and we'll definitely try to get to them so we can get them answered.

Okay. You talked a lot about a lot of different things. One of the things you talked about with this self, like self-provisioning and I had never, hadn't heard it put that way before. But it's really interesting. I, it reminded me I feel like for somebody who's been more of a front end of and doing jams, stacks things.

This to me felt like what companies like Netlify and then frameworks, N JS started doing for web [00:32:00] developers was like, I don't even need to know like about where this gets deployed the different pieces. Cuz like we, even the last session we talked about next JS, right? As an example but it's not the only one that does it.

Some of the pieces get deployed to S3 and some of the pieces get deployed to Lambda. And then some of the pieces are deployed. Even if you're talking about first cell, like some of the pieces are deployed to AWS and then others are deployed to CloudFlare. If you're doing the edge stuff.

And I don't know where any of this infrastructure is being set up or how it works, but it's just. It's done for me and managed properly for me. Yeah. So it so we were talking about these self proofing apps. This is like taking that to a much more like beyond web, like this is larger enterprise application scale.

Is that. Am I understanding that

**Jeremy Daly:** correctly. Yeah. And like Versace and Netlify, certainly next JS is is brilliant. The way that it, creates the routes, even like static site or what's it called? Server side rendering and the incremental site regeneration, [00:33:00] things like that, that it does.

It just does these things very smartly and you're right for a developer. That's trying to build a backend for a front end. They work really well. And, but when you start looking at more complex applications, there is a lot happening, ETL tasks, there's complex workflows that are being processed and things like that.

A lot of data flying around and so forth. That's you can tell that, Netlify and Versace are heavily invested in companies like Zeta. And the other companies that are doing these different services behind the scenes to provide more capabilities to these front end developers.

I think. Certainly there's trailblazing there that's happening. And I think what we're trying to look at, from a, from an infrastructure from code standpoint is even using and again, this is, I think what did, germo call it the other day infrastructure from file system, right?

That idea of putting things into a pages folder, and then having that kind of go that way and so forth. There's also this interesting concept of, shared code or code splitting, right? So if you think about the ability to take even a next JS app and say if I've got a heavy processing thing that's running or maybe next JS [00:34:00] would.

Be better served from app runner or from Google cloud run or something like that. But maybe I have some processing tasks that run, somebody signs up, I build a user signup endpoint, then I wanna fire off an event. And then I need four or five other systems to pick that up. Where do those events go to?

Do I write that in next JS? Or is there something else that I can do to do that processing? Maybe you can write in the next JS, but you need. 15 minutes of processing on the back end to do it, or you need to tie into an event bus or something like that. So the idea is to, take the basic use cases.

I think that next JS and Netlify provide for you. And again, those use cases are expanding all the time. Netlify does schedule tasks now. But then take all of those and just allow you to write those and just drop 'em in never even worry about the infrastructure at all and have it, do all these really amazing things behind the scenes for.

Yeah, absolutely.

**Brian Rinaldi:** It's amazing to me, how in your presentation did a great job of showing this, how things, this started out with a few simple things and then expanded to the point where [00:35:00] it's like, it got so complex and now it seems like we're just yeah. Tying all the pieces together, just because.

Having a whole team dedicated to managing all those pieces is not something most companies beyond the largest enterprises can really afford. And it's important, not just from okay, this is the stuff running our mission critical applications, but it's also important to something else you brought up, which is the billing.

Because without that team, oftentimes you end up with it's I've heard of people end up with these bills, that scale outta control. Largely cuz they don't quite understand all the pieces that are running in the background, some of which they may not even need. Yeah. I'm gonna try and get there's a couple of questions here from the audience.

Jack has one, a long one in the chat. Hopefully we can get to, but Amy first Amy asked opinions on use cases for DEC liver. Declarative IAC configs versus imperative, IAC code based. I get asked all [00:36:00] the time and my answer is usually whatever your DevOps team tells you to

**Jeremy Daly:** use. Yeah. I think that whether it's declarative or imperative, you've got the same thing.

You've got double you're double writing your application, right? So you have your application code on one side, and then you have your infrastructure as code on another side. Where you're telling it, I need to spin up these resources so that I can connect my code to this particular thing. And so I like declarative.

If I'm using infrastructure's code now, I wanna get away from infrastructure's code. I wanna do infrastructure from code. So essentially only write the one side, just your application, have the system be smart enough to figure out what services I need behind the scene behind the scenes. But if I'm writing infrastructure as code, I prefer declarative because I think it's a little bit more.

I think it's easier to reason about and I know that people love the CDK. My concern about the CDK is that there's a lot of spaghetti that you can write in there. And multiple people can write it multiple different ways. You can, it's just code so you can, query some other place to get identifiers or names or things like that.

So [00:37:00] I'm always concerned that with something like the CDK, you're not always getting A deterministic deployment, because things could change as part of that, in part of that imperative loop. Whereas with a more declarative approach, you might be a little bit more limited and yes, I know there's like custom resources now and some of these other things.

But I feel a little more comfortable in that land than I do in the CDK land. Saying that whatever your. Whatever your DevOps team wants to use is fine. I think one of the things we have to be very careful of in the course, if you've ever listened to Simon Wardley, DevOps is gone, right?

It's just sort. Dev now, dev and ops are so mixed together that, we've blurred the line so much that it's really developers who are doing the whole thing. And if you used to be an ops person, you're likely writing code, that takes you all the way through the pipeline, into production and devs now are doing the same exact thing.

I think it's I think it's whatever you think will be the most maintainable over time. And I have concerns about CDK being maintainable over. That's

**Brian Rinaldi:** interesting. I've talked to a lot of people who are like, passionate about oh, [00:38:00] just use the CDK. It makes it so much easier.

I'll admit I haven't used it yet, but even my own ideas, I could see cuz working at launch darkly, I'm like, oh I could flip flags here and then change how this deployment gets and then yeah. But that's not no longer really deterministic in the way you'd want it to be. So yeah, that could be problem.

Okay. Makes sense. Okay. I got one. We're gonna try and get to Jack's question here. Sure. It's a little. If you've got a couple more, I know we're running a little behind, but that's fine. So Jack asked, okay. He says, it's probably too long to ask the question, but we're asking anyway, seems like frameworks.

With frameworks serverless or SST, they start off being pretty simple, straightforward, but then you start getting more advanced and want to modify the behavior in the config. Start getting crazy. I find it hard to imagine complexity of infrastructure code, but such an awesome idea. It's not really a question, but I guess is what are your thoughts on that?

In terms of that kind of growing complexity that, that you deal with like where you, you try to make it [00:39:00] fit. You end up with these frameworks where you're trying to make it fit your specific needs and it gets more complex than you would've thought. Everything seemed easy at the start.

But now to configure it my way it has ends up, not that. .

**Jeremy Daly:** Yeah. Hello. Worlds are very easy in serverless. And one of the things that I loved about the serverless framework when I first started using it way back in the beginning, I think it was right after 2015 or in 2015, I was using it before they made the jump diversion one was the fact that It was very easy to do these things and you just wrote some code and then you put in this other file, you said, oh, just point to this code.

And then it magically spun up. But then as soon as you started needing a, a database, you're like, okay, now I have to write this as cloud formation. So that become a little bit more complex. And then I had to put in my IM permissions and then you're like, okay. And then you're like wait a minute.

Now I have to have a retain policy on the database. And then you're like now I wanna have this queue. So now I got attached to the queue, but then I. Get the permissions, for that. I also have to, either create the queue separately or do this, and there just became so many knobs and levers that [00:40:00] it does, it becomes very complex.

To do some of these things. And that's one of the things that I think is the biggest benefit of the CDK is people take the, all this complexity and they wrap 'em into constructs. I think they're level three constructs at that point, but they wrap 'em into constructs. So they make it really easy for you to do something complicated with just a line or two of code.

But then you have that issue behind the scenes where essentially it's okay, what's happening in that construct and how many things are happening? And. Am I responsible for those things, right? Because somebody has to be responsible. So even though AWS or Azure or whoever else might be maintaining the service like what happens when, the queue backs up or, when you get some poison pill in there and you haven't dealt with it correctly, it gets very complex.

So the idea of what we're trying to do with infrastructure from code is this idea to say, look, you wanna create an API that, or, let's say a web hook that then is processed in batches. In a listener as some sort of a vent handler listener or whatever. Now, the semantics of that should be pretty clear.

This is [00:41:00] what I wanna do. This is what I wanna process. So normally if you wrote that in the CDK or in cloud formation or or SST or any of these other ones, You would have to say, okay, now if this fails, I want it to put into a dead letter queue and then I wanna process off the dead letter queue, and then I want it, if it fails multiple times, then I wanna clear it away or send a message somewhere.

So the idea of infrastructure from code is say, look, let's take those best practices. All those patterns we've already come up with. And let's say that if you're reading off of a, if you're requesting to read an. In batches. Then we know we have to spin up a cube behind the scenes for you.

We know that there should be some semantics around the batching size and things like that. And then we should build in things like failover and dead letter queues and some of that stuff. And then we're going to provide we already provide a feature in APIs in CE Scott right now, where you can add another another configuration object to your API dot get slash whatever handler.

And you can specify the timeout. So it's just a, just JavaScript object. This is time. 30 seconds or whatever it is. So I think that you're gonna see some of that in [00:42:00] the beginning where we're gonna have to say yeah, we are gonna need to control the batch size, or we are gonna need to control some of these things.

But a lot of those use cases can happen, entirely behind the scenes for you. And then what's really great is you're not saying I need a Lambda function and SQS Q event bridge, SNS, whatever. You're just saying. I wanna process this. Record the event or, persist the event. And then I wanna, do something with the event afterwards based off of, some batching or whatever.

And then that could be deployed to, GCP. It could be deployed to AWS. It could go to CloudFlare. Part of it could run on Versace and next JS and and then the background processing part could happen on AWS. So there's a lot of really interesting things you can do when you disconnect infrastructure from the code.

And then you basically say, if I'm writing infrastructure from code I'm, writing comp control, plane, specific instructions for a certain provider, if you can separate your code and think of code more like a even a hexagonal architecture, then your code is just runs in isolation.

And then when you process [00:43:00] that code, the system figures out what it needs to actually, run that most optimally. Yeah.

**Brian Rinaldi:** That's really interesting to me, it sounds almost like. Like one of the things that, that serverless solved and you discussed this a little bit was just that ability initially to scale up with your application based on the needs.

So if you need started small, then your needs got more comp, like you suddenly traffic spikes and, or you get popular and it's scaled up. This to me sounds almost like doing that from the we're not gonna scale the Infor, like if your application only needs certain things we provision those pieces for you automatically based on the code.

But as your application gets more complex, you don't need to think about it. You're it's scaling up the complexity of your infrastructure as needed. Is that, am I thinking about this, right? Or,

**Jeremy Daly:** yeah. Yeah. We look at it as we look at it as point a is writing your application point B is having that application running Optim, optimally in production and serving your traffic.

In order to get from point a to point B, there are a million developer tools over a thousand at this [00:44:00] point, but there are thousands of developer tools to try to get you from point a to point B. And there are a lot of bumps along the way. And we think we can just cut out most of that middleman.

Now that again, there's gonna be, there's gonna be challenges here. This isn't a hundred percent figured out but this is what you know, we're working on. And we think it'll be pretty exciting that I can go in and just write a line of code and I never have to worry about, what happens to actually run that code in the back.

Amazing.

**Brian Rinaldi:** Yeah. I'm looking forward to seeing how all this happens, Jeremy. I literally could probably keep you here all afternoon, but because there's so much interesting stuff, so thank you so much for being here and really this talk was amazing and I learned a ton from it, so really appreciate

**Jeremy Daly:** it.

Thank you so much for having me. It was great to be here.
