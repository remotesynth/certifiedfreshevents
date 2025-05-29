---
_build:
  list: false
  render: never
---

**Joanne Skiles:** [00:00:00] Very excited to be here and I really wanna talk about something that actually I am passionate about. Uh, I'm passionate about a lot of things, but I'm ve very passionate actually about. Event driven architecture, which is, I know, kind of weird, but I just had like a conversation this morning with some of my engineers trying to explain why it would be really good to fix our problem that we're having right now.

Um, so as life is always live, right, things are happening real time. So I'm really wanna talk about just modern event driven architectures that you can do within the cloud. And, um, I have experience with. The three major cloud providers, AWS, Azure, and Google Cloud. So this, this talk is around all three of those and what, uh, services you can use in each one.[00:01:00]

So first thing first is like, let's have a little bit of a refresher on what event-driven architecture is. It's a software architecture paradigm that focuses on producing, detecting, consuming, and reacting to events. So really in simple terms, it's about designing systems. We're components communicate asynchronously by emitting.

And responding to events rather than just making direct requests to each other. Um, and the benefits to this is that you have a decoupled system that can be highly scalable, especially within the cloud that can process real time and is fault tolerant. Um, and we'll go into that within our, um, within like why our event driven architectures work within the cloud is.

Because, um, it's, it's such a powerful approach when you're deploying within the cloud because in our traditional systems you have to deal with [00:02:00] scaling and everything. And that's why we're here, like at the serverless, uh, event, is because we don't want to deal with managing or, uh, doing any of the expenses tasks.

We're gonna like leave that to our cloud provider and let it be their problem. So you use these, uh. The being able to scale without your infrastructure management, along with being able to process real time within the cloud. So within, uh, within. AWS, you have your AWS Lambda or GCP, you have cloud functions, or Azure is your Azure functions.

And with that, you can respond immediately to the events as they occur. And that's really, as soon as something happens, the user clicks, you know, buy, and then we handle all the processing with inventory management and everything that comes along with it. Uh, and then along with that, if you're having a Black Friday sale and now there's a bunch of people clicking by, your system can then scale automatically because you're using auto scaling.

And so [00:03:00] that infrastructure management is being handled by your serverless components and with your cloud providers instead of you having to do it yourself. Also another reason to do event driven architectures within the cloud is that you actually get some cost cloud, uh, flexibility and resilience. Uh, so cloud providers give us an ability to integrate services not with.

Just within our own ecosystem, but also we can actually do it across multiple clouds. Um, and it's kind of fun to think about it. You go like, why would I wanna deal with more than one cloud? Or, you've already lived with this problem and you do deal with more than one cloud. I, uh, think more often than not, I have had to deal with a multi-cloud setup, whether or not it was just a symptom of our own.

Uh. Problems with these that way. Uh, but it helps you bring more resilient systems so you can move across the crowd, be able to utilize, uh, bonuses within AWS like maybe you're using, uh, open AI [00:04:00] within a, uh, within Azure, and then AWS you can actually use your event bus and route to it. So you do have this cross cloud capability and that also gives you resilience.

By being able to handle this, uh, event driven system within a multi-cloud environment in place. So basically to sum it up, our cloud native event driven architectures not only allow us to process events in real time with automatic scaling, but they also provide the flexibility to build this resilient cross cloud systems that can handle failures and scale to meet all the demands without the heavy lifting of our infrastructure management.

So let's talk through the event driven model. There are basically three fundamental steps within our event driven system, and that forms the event flow. And those three steps are our event sources, our our producer, our event R routing, which is our event bus and our event consumption. So, uh. [00:05:00] Within our first step, we have our event sources.

This is where our event is created and emitted by our event producer. And the producer is typically that service or component that detects a significant change in our state or action. So like this would be, uh, the user clicking a button, uploading a file, or maybe there's an internal system change or the databases update it.

Um, the next step is our routed, where our event gets routed. It goes to the event bus, and this is our intermediately intermediary, um, system where we receive events from our producers and then we route them to the appropriate consumers. So our cloud providers actually provide specific, uh, services for this.

So in AWS you're gonna have something called Event Bridge within, um. GCP, you'll have event arc and within Azure you'll have event grid. And this serves as our routing messages. And this is really important. It is what's going to be able to make [00:06:00] you stand up to make it more scalable and flexible. Because if you handle this within here, you don't, the producers do not need to be aware of what consumers are taking anything.

They just throw it over the fence. Okay? So we're just throwing it over the fence and the producer goes, not my problem. Handle it. Um, and that's where finally after our consumers that are listening for events, um, they are going to consume, consume the event from the event bus. And this can be any service or function that you want.

So, uh, you could have an AWS Lambda function or some step functions or um, or GCP cloud function or an Azure function. So. This is high level, the event driven model. And as I mentioned when we were talking through it, is like there are different sources and things that we can use. So going back to this multi-cloud talk, right, is there [00:07:00] are different sources depending on which cloud provider that you're using.

So within AWS, uh, you have your API gateway, uh, that's where your, um. That's where if your user is on the front end, they're gonna end up calling API gateway. And that's going to trigger an event. Or it could be an upload to an S3 bucket. It could be another Lambda function or a Dynamo DB Stream, GC Cloud storage.

Uh, you upload a file, it's gonna trigger an event or a pub sub, the cloud functions or maybe our Firebase real-time database. And in Azure, similarly, we have an event hub. Or a blob storage. These are what's going to trigger our events. And there could be more event sources, like there are many more services.

These are just the most common ones that you're gonna run across when you're designing your event driven solution. What becomes a little less, um, little less, uh, optional is [00:08:00] when we talk about event buses and rowdy, right? So there are. Basically two ways to do it within each system. So like within any AWS, you have a Amazon event bridge and that allows you to ingest your events from AWS services or your custom applications or even third party services.

And then it routes to lambda step functions SMS. Um, so event bridge is ideal when you wanna centralize. Your event bus. Um, but you can also use SNS and that's great when you wanna broadcast events. And that's where you would use something called like a fan out scenario. You don't really, you don't really need any complex routing.

You're just pushing the information out. And that's where SNS would come in. Uh, within Google Cloud we have event arc similar to event bridge. It provides the ability to trigger our cloud functions and cloud run. Um, but if you were looking for a more high throughput, low latency messaging system, and this would be really useful for like streaming data [00:09:00] or use cases that require a very reliable message delivery, then you're gonna use something like a pub sub within Google Cloud.

And then finally for Azure, uh. Event grid is similar to our event bridge and event arc. Um, and that's what's going to be the consumption of our Azure events. And then that would route out to our different, um, different, uh, consumers. But they also have a service bus, which is a messaging system that enables.

Event delivery. And that's more of like a message queue service. And it includes some like, uh, dead letter queuing and things that we can handle to, uh, handle some air handling there. So that's suited for those scenarios where you need more of an advanced messaging pattern.

So, uh, finally. We kind of dealt through the examples, but finally the last thing to talk about is like what our [00:10:00] multi-cloud, uh, event consumers and handlers are, and so. This, again, is just a small list, but we have our AWS can be lambda functions or step functions, dynamo db, uh, GCP. We have our cloud functions or cloud run kind of similar to the uh, step functions.

And then Azure, we have our Azure functions or our logic apps. So these are the services that we would use when we're gonna talk now about EDA design patterns. Um, so EDA has four, four very specific design patterns that I really wanna get into is one, the most common is a simple event processing. So like in this pattern you have an event, uh, producer that em admits an event to event bus and then it roots it.

And I'm going to actually break down each one of these in an example, specific to one of our cloud providers. So, uh. [00:11:00] So don't worry, there'll be some fun diagrams in a second. Uh, then we also have event chaining, and that would be something like if you're using AWS step functions or workflows or uh, logic apps, and that's gonna coordinate in multi driven function or microservices.

And then we have our pub sub messaging. Uh, where we're gonna decouple components using our SNS, our, our pub sub or service bus, and that's where we wanna maybe mul notify multiple services with a single event. And finally, there's event sourcing, and that's how we're gonna handle event logs and state changes.

And we use this for actually replaying events for consistency and traceability. And I almost would say that event sourcing is something that you should utilize. When you're doing simple event processing or uh, event chaining as well. So it's something to keep in mind. You're gonna be logging these type of events.[00:12:00]

So let's pretend that we have a site, 'cause I'm gonna talk about ordering, right? So let's pretend that we have a site that is around a user. A user or a company that sells items, right? So, um, not naming any names here, okay, but something that where you're a user can upload an image and that's something that they want to sell.

Maybe that user is a little mini company and that mini company's gonna upload an image. Um, what can happen is we can have a very simple process for a file upload. So in this case, for GCP, when a file is uploaded to our Google Cloud storage, um. We would emit the Google Cloud storage when the file gets uploaded, actually emits an event called Google Storage Object, finalize.

And this event [00:13:00] gets emitted. Um, and that would be sent, uh, to our event arc. Our event ARC is listening for this event that's being generated from a Google Cloud storage, and it's responsible for routing that event to our Google Cloud function. So it's actually routing the event with some metadata. Like the file name, the file size, where it is in the bucket, and passes that information to the consumer.

In this case, a cloud function. And this cloud function maybe is gonna perform various tasks, right? So a user uploads a file to sell an item. Um, maybe we only work with. Um, square images. So we need to resize the, you know, change the file dimensions, uh, resize image, convert the file format, maybe we're gonna offer filters for them, things like that.

Those could be other things that come along with it. And then we store the results and trigger notification back. [00:14:00] So this is a simple event processing that's our simple flow from our first design pattern.

Vent chaining event chaining, again, where multiple events come out of this one process. So in this case, let's say someone wanted to buy one of those items that a user uploaded. Uh, they're going to place an order, uh, that order gets placed, it's gonna go through, in this case an example being AWS, uh. They place, they order, it goes through our API gateway, uh, that actually ends up calling an an Order Lambda that is going to publish an event to a w um, Amazon Event Bridge.

Uh. And Event Bridge has a rule on it for like an order placed event. And that is gonna trigger our step functions because when someone buys something, there's multiple things that we need to do. [00:15:00] It's not just, okay, you bought it. We need to process their payment, we need to update the inventory. We need to make sure that we get ready to ship the item.

Uh, all these items, all these have to happen in a specific order. And then along with these. They could be calling out and sending notifications around the payment, sending notifications around, uh, the inventory, updating our inventory, and then along with that, uh, uh, shipping. And then maybe there's another step that you wanna add, which is at the very end of this, we do a confirmation email.

Actually, that would be a pretty nice thing to add here. So add a little confirmation email as well. So this event chaining pattern is using our AWS step functions. You could use a logic app if it was like Azure, and that allows you to orchestrate complex multi-step workflows in a fully serverless way, um, and that now you can use your best of event routing as well as a stateful orchestration.

This is a [00:16:00] stateful orchestration and it matters on each event being done with minimal infrastructure to manage.

So the third design pattern we had was a pub sub messaging. So we talked about a user uploading, a user, uploading to resize their, their image. They're gonna sell this item. We've talked about users buying items. Um. Maybe, you know, at the end we're assuming that there's users, users do need to sign up, right?

So when a user signs up to your platform, uh, there might be a function that you would have. In this case, this example is Azure. 'cause really wanna drive home. Here. You can do this in any cloud provider. You just, uh, I guess. I'm in the mood here to say it. Pick your poison, pick your poison on your cloud [00:17:00] provider, right?

Uh, you can do this any flavor, any way that you want. It's just thinking in this architecture. So user signs up. We have a function that triggers this user sign up and that goes to our Azure service, uh, bus topic and or this is our pub sub messaging, which is just gonna fan out. Um. Where, where we want to go.

So it sends our SMS verification right here. It's going to email out to the user as well as the welcome email. And then, um, you know, we wanna notify, we need to notify our marketing system. Um, marketing really loves making sure that they know stuff, so we gotta put it in either HubSpot or Salesforce, or maybe it's just Azure Cosmos or event hubs, and that's gonna be utilized for our downstream analytics.

Um, what, what a hub sub messaging system is gonna offer to you is like, make sure that you have your proper air handling and resiliency. Uh, this goes [00:18:00] into your, your topic that will be able to handle dead letter queues. Um, if the SMS service is down, it's gonna end up going into a dead letter queue, and then later on you can manually handle that issue.

Or do, uh, an inspection. And then we also have some retries that are built into our topic.

So last but not least, and I say not least, because technically event sourcing is something that you can build on to your other design patterns. So that's what I say is the core concept. Of, um, of event sourcing is to be able to kind of have audit to be able to audit. Okay. And event sourcing. Basically you have your event that occurred, so let's say this is a transactions, right?

We were talking about our payments. Our payment processing some that other user [00:19:00] got paid when someone bought their item. So we have transactions going back and forth. Maybe they have a balance that's being built up, almost working like a, a bank in a sense as well. Uh, you need to record the fact that someone got paid, someone paid them back and forth.

So we have our API gateway, the trigger of our event. We would log this transaction. Then the transaction, we store that event log and so that event log goes into, in this case, dynamo db, it acts as our event store. Each item is represented as one immutable event. So, um, and Dynamo DB is a very, like, simple solution.

If you wanted to, um. Similarly, you could use like Amazon Kinesis or uh, Kafka. Uh, those are different solutions that you can use as well. The idea here for event sourcing is really coming back to, um, when things go wrong because things do go wrong, right? [00:20:00] And now you can always replay or reconstruct your state.

Uh, you can easily use it to go as far as to always just calculating the current balance without ever actually having the. Current balance is being kept tracked. And, um, I think that was a very common whiteboard interview topic like 10 years ago. So it's not a, a very, uh, unique, uh, a unique, uh, problem. And so this is how we would do it so that we can build and store information and then replay events based on that.

And this is going to help you actually debug a lot of problems that can occur when. We'll talk about within best practices and everything, but when things get out of order.

So I talked through the four design patterns and, and really want to, uh, close up on the idea of like, I. [00:21:00] Okay. We talk about event driven architecture, we can see where it can hit, you can solve a lot of problems. There are different, you know, different solutions for different problems that you have. Um, but let's think overall what the best practices are.

And I've kind of hit on 'em during this talk, but. Best practices is you want to detox, couple your services, make them loosely coupled between the producer and your consumer. Uh, that's why we use in most of those, most of the design pattern examples. We were using something like Event Bridge or Event Arc, or Event Grid, because they're rooting the events.

The producer doesn't need to know who it's going to. It's not their problem. Um, it's probably the only time, uh, in your life that you would just say like, let the producer not own anything. Okay? They don't need to own the rest of it. They just need to know whether or not the item [00:22:00] was bought. Um. Next. The next item is that we need to ensure that we have a safe and repeatable processing of our events.

So we need to ensure that our event handlers can process the same event multiple times and it's not going to cause adverse effects. Um, the word that we use every day in our lives is, I, I, I can't even say it half the time, so I didn't post C. So that is really what we're gonna drive home here, is make sure that you write.

Your functions, your consumers in a way that you can handle an event if it got sent to more than once. You also need to think about scalability, um, in these examples. Um, I didn't actually show much of a database other than Dynamo db If you were going to, uh. If you were going to have this all right to a eight gigabyte, eight gigabyte RDS database, you're going to have a really bad time because [00:23:00] your downstream system is not scalable.

So, um, especially if you have a bunch of users coming in and they're just hitting it nonstop, it's going to crash. So you. One, wanna make sure that you use SQS or pub sub or service bus to scale out for high volume events, but you also need to make sure your downstream systems can handle high volume events, especially when you're writing in a serverless environment, right?

Um, you also need to manage for concurrency, ensure that you can perform under load. Make sure you're not riding anything around adding some extra race conditions or anywhere. The most, the last two are the most important. You need to monitor and have observability. Uh, don't let things just disappear in the hole.

It's very easy to say, well, this is just a function or this, I can't actually monitor or see what's going on. Use your cloud native logging, [00:24:00] use x-ray. If you're in AWS use your, uh, cloud monitoring and cloud trace within GCP. Use application insights in Azure. Those are what's going to help you. And then finally.

Write for errors. Errors do happen. So utilize your dead letter queues or UM, or in GCP as a dead letter topics and then Azure. It's a dead letter queues as well. And you define clear retry policies and you have a fallback strategy. And for another talk of another day, you would think about chaos engineering.

Um. To, to finally add is, uh, we, we have challenges that we need to think about, so. You need to handle for latency. Um, you probably have heard a lot about cold starts for your serverless functions. Uh, you can [00:25:00] handle that with provision concurrency in AWS You can optimize your event payloads for delivery delays.

Uh, there are network hops that occur between services, uh, and you need to be able to handle that as well. So utilize event arc or event grid where it's faster than a queuing system. And then, uh. There's also batching, like if you wrote batching, then you have the internal polling intervals that are occurring.

That's gonna introduce latency as well. Um, I've touched a little bit on this is going back to things do not always arrive in order. So you need to ensure, if you need to ensure that your events are in the same order, you need to handle specific ways to do that. So either you use like an SQS. First in first out queue, or you can embed sequence numbers in your events in order to enforce your consumer logic.

My [00:26:00] favorite solution is actually to design for eventual consistency, which is actually a weird way to like abstract stuff, but you have to just, basically, you're loosely strict with your ordering constraints and you know that eventually the system will reconcile over time. I'm not gonna touch too much on it, but you know, we have free tiers, we have things that are here.

But, um, event driven, can, event driven architecture can be very cost effective, right? Our serverless solutions can be cost effective if you design for scale, but they're very expensive if you don't think about it. So make sure that you have alerts on your budgets. You're utilizing lightweight consumers, you're being thoughtful about how you bra, um, batch and throttle your events.

And the last thing to touch Cho on touch on is that when you are utilizing any of, you know, picking your poison, um, you get locked into a vendor and that means that [00:27:00] you're tightly. Specific to that cloud provider, and it's hard to move or extend. And it's kind of funny where people go, when would I actually wanna migrate, uh, my cloud provider?

But I've, uh, dealt with migrating a cloud provider more times than I can count at this point. So there are moments where you are going to wanna move, basically, if they're giving you more credits and more money and things to that effect, especially in a startup world. So, uh. Think about that. Um, you can always abstract, you can define messages, things outside as much as possible so that you're ready to move or just know that that is a risk that you are taking on as well.

So to end on this, I'll just give some key takeaways is that event driven architecture enables flexibility and scalability. Um. You need to make sure that they're highly [00:28:00] de decoupled and you can handle, and that now you can focus more on better fault tolerance and more easier scaling. Um, our cloud native services make eventing accessible, so all of our major cloud providers offer powerful building blocks for this.

There's not just, there's no. I mean, I'm, I'm an AWS community builder. I have a bias towards AWS, but I'm in GCP every day as well. They all solve problems. Um, so with your tools, you can go and you can prototype protect to production faster without manage your infrastructure, and that's going to help. Make sure that you, uh, your design patterns, those matter.

They are reusable patterns to help solve common problems. So choose the right pro, the right pattern for your use case. And uh, then you're going to have a more, uh, safer performance for reliability. And it's also simple [00:29:00] and. Finally, architecture requires thoughtful trade-offs. So every architecture you choose, you're going to either be taking on latency or reliability or cost focus that way.

So, um, yeah, and my final note is just pick a provider that fits your needs or abstract away to stay flexible.

So, uh, yes, I, uh, think I raced through the end of the slides, but I was, uh, thank you all. I, I really appreciate talking. If there's any questions.

**Sean C Davis:** Alright, thanks Joanne. That was great. Yeah. For you out there in the audience in the chat, uh, use the q and a button on the right side of your screen and drop a question in there.

We have one question ready for us to go. And I think you, you had touched on this, but maybe we can dig a little bit deeper. Question comes to us from Jared and says, what are some of the ways you can handle potential out of order events?

**Joanne Skiles:** Yeah. So some of the ways, uh, is. [00:30:00] Uh, if you really have to have everything in order, then either you use something within, um, within like AWS or Azure or Google.

You can like force a first in, first out within your Queing system. Or you can do a sequencing of events. So you can add like a sequence number and then your downstream consumer can handle then the sequencing. Um, and then as I mentioned before, or. Eventual consistency designed for eventual consistency.

**Sean C Davis:** All right, great. Yes. And, and, um, so in one of the last slides you had mentioned. Vendor lock-in, and I know it can be a really, it's a, it's a tricky topic to navigate. And so I'm, I'm wondering, um, if you can, can talk a little bit more about maybe some of the things that you've done from experience to minimize vendor lock-in or, or maybe more about just the thought process that you go through.

To kind of, to make that decision [00:31:00] of, yes, I'm okay, I'm taking on the risk because of A, B, and C, or I am, I tend to avoid it for, for these reasons.

**Joanne Skiles:** Yeah. Um. For the most part, I've accepted the risk. I know that's, you accept the risk of a vendor lock-in. I've, uh, until the day that I get burned. But I do, I do think about ways that we can like, use more open standards.

So, uh, you could use things like Kafka as like a cross, uh, a cross platform event broker. So you don't need to use an AWS specific event broker. Uh, and. Or you can use open standards like cloud events. Cloud events is adopted by A-W-S-G-C-P and Azure. So you can use all those things and kind of abstract away.

Um, for the most part, for the most part, majority of my life has been where a company has been bought by. Another, [00:32:00] and then we have to move over to their new platform, right? So either me being the buyer or me being the person who was forced to move. Um, and in those parts you go, gee, I really wish that we thought about that so that we didn't have a multi-year long project.

**Sean C Davis:** Uh, this makes sense. But do you think that, or, or have, have you found that generally when you're, when you're making that decision, it seems like. You, is it, does it end up being more cost effective? Be to allow yourself to get locked in because you can build faster upfront?

**Joanne Skiles:** I, and, and that is a good question.

So it actually goes back to where do you stand in your maturity of a company, right? If I was at, at the beginning stages of my startup, um, of the startup name that I'm not gonna give, right? If I was the beginning stages of that, then. I, I'm accepting the risk of vendor [00:33:00] lock-in because I can quickly deliver what I need to pull out this proof of concept.

If I was today like director, I'm going to think a little bit more, take a little bit less of that risk, especially knowing that maybe, maybe we might move. So let's design something that can be a little more abstracted. So I guess the answer really is, it depends on your situation.

**Sean C Davis:** Yes. This makes, I mean, and, and that's the, that's the perfect, um, answer to most programming questions, right?

It, it depends. It depends. Um, and, and speaking of that, you, um, you spent some time talking about cost considerations and how you kinda like cross this threshold at some point where at first it's super cost effective. That it can really get out of control pretty quickly, um, especially when, when, uh, I think a lot of these services deal with that usage based pricing.

So can you, can you spend a, a minute going [00:34:00] into a little more detail on maybe some considerations, uh, based on your experience that have helped you manage the cost and, and some of the actions you've taken that have helped you manage the cost of these services over time?

**Joanne Skiles:** Yeah. When if you don't properly design, you can explode in cost.

And actually sometimes your proper design isn't good because one day someone determines that you're like, I guess, do we still use the word viral? Um, someone deserves you went viral and then all of a sudden now you're getting a lot more attention that you're used to. Right? Um, and that can explode in costs.

So, uh. Really, there's like a few common cost drivers. Like you either have a high frequency trigger, so if people are like uploading a bunch of files that's thousands and thousands of maybe lambda executions, um, or you have that chained event that we've done. Um, and now we have long [00:35:00] invocations and then there's retries and that spirals and spirals and spirals.

So, um. Or you overuse your dead letter cues as well. So like every one event triggers a bunch of downstream events that cause a bunch of problems. So when those moments come, sometimes it's not always gonna be that you can tell in the future. So if you look at it and you go, okay, this is a potential that it could explode, think about how you could batch it, how you can throttle it.

So can you put, put it behind a queue? Can you maybe batch these images? Every 10 minutes or something and then they get processed because it's gonna be a little asynchronous and wait for it. Um, actually if you, anybody uses like chat GPT and it takes a while to like make your image. They're not really like doing everything at the same time, but kind of batching as well, believe it or not.

So those are the ways that they're saving money. Those are the same methods that you can use to save money. [00:36:00] Um. Also utilize the, believe it or not, AWS Google Azure, do wanna help you not spend so much money. I know that they like to make money off of you, but they do give you tools to help you determine how to make something better.

So utilize their tools as well where they advise you to, uh, like they'll give you some advice of maybe this is actually provision too high. You don't need that much concurrency, provisioned, and things like that.

**Sean C Davis:** Yeah, that, that makes sense. And so I really like that you, you brought the three big providers up and, and kind of, um, talked about them all kind of in relation to one another.

I, I imagine for someone who is new to this world, that that can be a lot to take in. There are a lot of considerations when trying to figure, you know, I'm spinning up a new startup. Where, where do I invest my money and my time? Um, for someone who is relatively new, there. Is there advice you would give them [00:37:00] in.

The, you know, the di or like the, the type of research that they should do? Or is it more like, eh, just pick, pick and, and you know, they're, they're kind of interchangeable a little bit more about it. They're the

**Joanne Skiles:** same. I, I know that's gonna sound crazy. They're kind of the same. Just pick one. Like it's, it's not gonna hurt too much.

Um, obviously I have a bias towards AWS not that I would ever work for AWS but I'm gonna get myself in trouble there. But I have a bias towards using their systems. But I mean, like. I started off my career in Azure, so you just pick one and, and go with it. And I guess it's like, um, the, the second half of disagree and commit.

So just go for it and do it a hundred percent and, and you'll just be happier. Don't overanalyze it.

**Sean C Davis:** Love that. Love that. Alright, one, one last question and because I know that the theme for today is definitely going to be all around AI and, um, and you're working in an AI company, is there, [00:38:00] is there something in this pattern that is particularly attractive to AI companies or some way that, um, that it might benefit ai, uh, folks building AI tooling?

**Joanne Skiles:** Yeah. Um. I think the, the event sourcing really is something that kind of does hit back to when you're building ai, especially when you're building more of your, um, you wanna retry, maybe you're making a new model. Okay, so you would like to retry and redo what people have been doing and see if it's gonna change the answer.

So doing event sourcing, keeping track of, of. Of those events and being able to replay it to see what would happen to another newer user on your newer model, that's going to help you a lot. Um, as for overall just calling out Yes. Like simple, just that simple event processing, that's majority what, like if you're calling out to, to your LLM, that's what you're gonna use.[00:39:00]

**Sean C Davis:** So love that. Love that.

