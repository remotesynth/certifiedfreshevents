---
_build:
  list: false
  render: never
---

**Adrienne Braganza Tacke:** [00:00:00] Hi everyone. Thank you for joining me. I can't wait to get started with this talk and I'm gonna go right into it, cuz there's a lot to cover. So this talk all started as a lot of my talks do. And that's when I talk to my husband my husband's also a developer. He's actually an architect at Amazon.

And when we get to talking about all kinds of nerdy things we talk. Problems at work. And one of the things that really struck me was the sheer number of transactions that he actually gets to work with every day. Not everyone gets to work with that kind of skill when we're talking about like hundreds of thousands of transactions.

So fast forward to all of the things that we talk about that related with that. And one of the. Biggest things that came out of that conversation was how, if you're running at that kind of scale or you have that [00:01:00] many concurrent requests running at one time, you definitely have to think about idempotency.

That is the one serverless principle to rule them. All and so a lot of people, including myself, had trouble. When we first heard this, I'm like, I don't want, first of all, you're like, how do you pronounce this? Is it a de patency item? It's item potency. And by the end of this, I'm pretty sure you will know how to say it and know what it means.

So super quick agenda. We're gonna go item. What, because there's a really interesting background behind where this word actually comes from. And then we're going to talk about why this principle idempotency actually works really well. Hand in hand with serverless architecture in particular.

Good serverless architecture. Then we're gonna go into something that's very common and very related with this and that's doing safe retries. And finally, we'll look at a couple tools and libraries that I [00:02:00] think are pretty cool that either help you achieve icy or have it built in, or really encourage icy when you're building things.

So item what . So if you look at the word idempotency this is actually not a real word, at least according to Miriam Webster. In fact, when I Googled it, the word that actually shows up in the dictionary is. IEM potent. And according to Maram Webster, their official definition is relating to, or being a mathematical quantity, which when applied to itself under a given binary operation equals itself.

But in the great words of Kevin from the office, why waste time, say lot word when few word do trick. I did not like that definition. It got me a lot more confused, just trying to go through it. So I actually like a random house. Webster's definition, much better. It's much more succinct and that's.

Unchanged [00:03:00] when multiplied by itself. So ed and potent is really a mathematical definition. It's a property that exists and it's usually used to describe multiplication, right? Whenever you multiply something the same two parameters. You usually get the same result. And so when you keep that in the back of your mind, and you understand this definition, it's now easy to see the co-opted tech definition of item potency.

So in it, we describe item potency as a characteristic that ensures when running an operation over and given the same input, which that part maps to when multiplied by itself. that the same output is achieved every single time that it's unchanged. And so as almost all things, it has a math background.

When we have used this to describe how we build our applications or how we should build our [00:04:00] functions or write our code in an ident way, this is what we mean. That no matter how many times we run it, even if it's an infinite. Of times, as long as we are using the same inputs, we should be able to reliably get the same output.

We should get the same result. Every time it is run. So iden potency, that's what this means. It's this characteristic that allows us to get unchanged results. No matter how many times we run it, every single time we run it with the same input. So at this point, you're like, great, Adrian, what does iden patency have to do with good serverless architecture?

And I'm gonna be one of those people that answers the question with another question. And I'm gonna say, have you heard about the seven design principles of well architected applications? So for some of you that have great, you're gonna see where this talk is heading towards, but if not, that's okay.

I'm gonna talk to you about it super quickly, because that's not the focus of this talk.[00:05:00] But we'll do, we'll get just enough so that you understand why it's important to IDEM patency. so these seven design principles of all architected applications, they're not from me. They are shamelessly stolen or borrowed from AWS's architecture guides and in particular they have a lot of really good guides that have these kinds of things in play best practices, principles, and the ones I'm about to share with you are the ones that are.

Through a serverless lens. So they actually have different sets of principles based on the context or lens with which you're looking at it through. And so super fast, the seven are speedy, simple singular. So it's following the single responsibility principle, right? You make things focused. You do things one at a time you minimize execution time, you do additional processing through a queue instead of waiting.

Second one is share nothing. So unless you're using a specific [00:06:00] library that does this for you, you have to assume that your functions in this case, when we think about serverless, that they're stateless. So just assume that they're brand new, that you have to explicitly state and load everything that you may need to every single time.

Assume, no hardware affinity. So there's a reason a lot of people choose serverless. And that's because you ne don't necessarily want to deal with all of the hardware configurations that may come with that kind of granular configuration. So when you try to use dependencies or even write your code, you wanna try to do it in a hardware agnostic way.

And then you want to use events to trigger transactions. So again, you want to get more comfortable with asynchronous operations. A lot of us are used to very synchronous operations, where we do something. We wait for the server to give us back a response, and then that whole action is done within one specific amount of time.

But we want to try [00:07:00] to. Think around that and use events to trigger transactions, to help us facilitate asynchronous asynchronous actions where we don't necessarily have to wait for everything to be done right at that moment. And we also want to think of concurrent requests, not to total requests.

So a lot of people try to. The amount of total requests that are being done when really, if we wanna take advantage of the skill that's given to us, if we use something like serverless services, then we want to think about concurrent requests. We want to make the work that we're spreading apart and fanning out to be as agnostic as possible so that we can take advantage of that and have multiple computers, multiple servers work on it at the same time.

We went to orchestrate our application with state machines, not functions. So this is particularly talking about not wanting to invoke functions from other functions. You want to use something like step functions or even Jonah's durable [00:08:00] functions to do this for you. and last but not least is designed for failures and duplicates.

So as we've quickly gone through these seven, almost all of them are affected by IDEM patency, this characteristic that you want to make sure that no matter how many times you run a piece of code, you send a request that the result that you get is the same, but while almost all of them. Are somewhat related to IDEM patency.

The most important one is this one right here. That's designing for failures and duplicates. To me, it's the most important one, because this is the one that's impossible to do without idempotency. And so we'll talk about that. Why that is. . So when we're designing for failures and duplicates, when you think about this principle, it's peculiar that there's one that's completely dedicated to both, right?

This kind of acknowledges that failures are going to [00:09:00] happen. Anomalies are going to happen. Even Verna Fogal said himself, things always feel all the time. Paraphrasing, but failure is acknowledged it's going to happen. So that's why it's especially important that if we're aware of this, if we know that this is going to be a constant in building applications, that we need to design a system that incorporates ID for these two things.

This is because failures almost often lead to retries. So sometimes the SST of edge cases, they're usually solved by just rerunning the thing. We retry a lot of things. We recompile, we turn it on and off again. A lot of the weirdness or the transient errors that we get that we can otherwise not debug are usually.

By just retrying it and there's nothing wrong with this solution. In fact, it's been solved or it's solved so many issues before, [00:10:00] and it's been a proven effective solution to so many of these random errors and transient issues that. A lot of SDKs have started to build it in by default. They have a lot of default retry behavior.

That's a part of the SDK. So we can go down like an even more granular rabbit hole of things like exponential back off, which is depending on how many times you retry, you wait a little bit before doing it again. You can talk about jitter rates which is something similar and all of that.

There's a lot of different things that you can reconfigure. With retries, but we won't go down that rabbit hole. But the point to remember here is because we know failures will occur. And because we know retries are something that is a possible effective solution, we're gonna have them. And so now that we know we're going to have retries in our toolbox, implementing retries means.

Duplicates can and will occur. We're the [00:11:00] ones that are telling our code explicitly to reinvoke an event we're rerunning it we're explicit for or we're explicitly telling it to try again. And we are responsible for introducing the duplicates into this system. If we implement some sort of retry behavior.

So no matter how many tower depending how many. That we configure this retry behavior. We can retry a reasonable amount of time all the way to an infinite amount of times, but let's not do that. So understanding that we're gonna retry means who we are going to introduce duplicates. So again, holding onto that fact that we know duplicates are going to occur.

If we. Duplicates exist then idempotency is the key. We need to mitigate side effects. So we've introduced these duplicates. It's now our duty to make sure that we pair it with [00:12:00] idempotency to make sure these duplicates are not leading to these side effects. Take a little break here.

What are these side effects? What are these things that I'm talking about? Let's take a look and see what happens without idempotency.

Tell you a quick story. My husband and I are driving home from a road trip. And while in transit, I want to order a cake because if there's anything I want people to know about me, it's that I love desserts and cake is awesome. So why not? So I open up my trusted cake shops, website. It's called freed bakery.

It's a really popular cake shop here in Las Vegas. And I start browsing. So I'm looking through all of them look really awesome and delicious, but who am I kidding? I'm gonna get the same thing. I'm gonna get the world [00:13:00] famous strawberry shortcake. So that's when I start to fill in my order details.

So when we think about the. Workflow. That's about to happen here. Just set some baselines here. There's me, Adrian. The person's gonna place the order. And then we have where the workflow really begins, which is the website, the client in this case. And let's say an API. This is where the rest of the services may be.

Maybe there's an ordering service and invoice service, et cetera. But for the purposes of the story this is what we're going to deal with. And what's important. And as you can see by the downward moving arrow time is flowing in that direction. So we have the typical setup here. I'm gonna order my cake.

And once I submit my order, it's going to place that order. The website's going to say invoke an order placed event. Now, if you remember a little bit before, when we were driving [00:14:00] home, we were about to approach a tunnel. And so it's right about at this moment where I actually enter the tunnel and not too long after I lose signal, I.

Not uncommon. This happens all the time, but unbeknownst to me, my order actually reached the server. It actually got to frees. They're actually processing that order and they're making that world famous strawberry short cake. Because I'm still going through the tunnel though. I don't know this. I don't have a signal.

All that's waiting. All that's happening right now is me looking at my phone, waiting to see if my order has processed. Now this tunnel's finally coming to an end. And so we exit out the other side. once this happens, presumably I regain my signal. And then at this point, the most likely thing that will happen in the scenario is that I'm gonna see some sort of [00:15:00] error, I'll regain connection. And we're hoping that the website either says the order wasn't placed or. Sometimes I'll just see, there's kinda connection time out or socket error or some sort of error that pretty much tells me, Hey, the order that I just placed it actually didn't go through like you thought.

And so when this happens, I'll see that error and I'm going to resubmit that order because I'm gonna get my cake. So same thing happens. I order that cake, the order is placed. Frees processes. It confirms that it's being processed and awesome cake is on the way. but let's hold on a minute. Let's zoom out in this particular workflow.

If you remember earlier this order, the one we placed before entering the tunnel, because the requests are not item potent, that order actually got placed as well. And [00:16:00] so surprise. I'm not getting one cake, I'm getting two cakes and this is exactly one of the biggest side effects. One. Biggest problems of duplicates in a system that are not item potent in this scenario, the intent of the requests that I'm making, they're not captured anywhere.

So because it's not captured anywhere. When these requests reach the API, they have to take it at face value. The server has to take it at face value. It doesn't know that I mistakenly ordered two. It thinks I really wanna order two. And depending on how you look at it, that could be a good thing or a bad thing that I'm now getting to.

But the intent, my original intent was that I wanted to order a single cake and. even if we had retry behaviors in place, let's say I didn't manually resubmit and manually do this retry operation. All of those subsequent requests that are made fall to [00:17:00] the same side effect that they are not capturing the intent.

And so that's the biggest side effect to remember here is that duplicate requests are considered valid requests. If the requests are not item potent,

So now that we see why this is a problem, again, we can continue to argue that it may not be a problem you can think of it. If it's easier to think about paying twice or three times or four times for a bill, maybe that's easier to see that it's a problem. Cuz multiple cakes are never a problem for me.

But if we. Now, see the problem here, we're now probably thinking, how do we then apply idempotency? How do we make sure those requests are item potent? And so there's a few elements that we're missing from that previous workflow that are now needed in if we want to make these requests item potent. So to me, I think it comes down to three things.

The first thing is [00:18:00] something called an idempotency key. So this is the unique identifier that's usually generated by the caller, the person making the requests, the thing that is invoking an event everything that everything that we want to be known about that request, the intent that I keep talking about of what that request actually means.

This is the idempotency key. So this unique identifier could be an event ID. It could be a client ID, it could be a client token. It could be a hash of parameters. It could be a whole bunch of things, but generally it is some sort of UU ID. It's a unique identifier. Tells us, this is a very specific request.

The next part is an idempotency layer. So now that we've captured the intent of the request with our idempotency key, we need to do something with that intent. We need to do something with these requests. And so this [00:19:00] idempotency layer is what. Like a filter. It decides what to do with our requests once it receives it.

So in a web request scenario, like the one that I've shown that could be sitting on an API layer, for example, some sort of middleware on the API if it's on some kind of messaging queue, it could be on the consumer of those messages where again, it's deciding what to. So we need some sort of idempotency layer that does something with these idempotency keys.

And the last part is some sort of persistent storage. So in order for the idempotency layer to work and in order for the keys to make any sense, we need to store all of the things that have been happening with our application somewhere. So usually this persistent storage is some kind of immutable log of events or not immutable, but a log of events.

Sometimes it's append only is what I meant. and it keeps the current state of things. [00:20:00] It acts as the source of truth for all of the ID cues that we have seen. And it also, depending on how we implement it can be a list of checkpoints in the retry mechanisms that occur. So in for example, the durable functions that Jonah spoke about before me.

The orchestrator actually checks against an Azure storage table. And even if something fails in between what it does is it goes back and replays all of the events that have happened up to the point of failure. So that is the persistent storage part. It stores the state, it's the source of truth for the keys.

And it can act as a list of checkpoints in tries. So these are the elements of idempotency. So how do we now include this? How do we add that? As part of, let's say our last workflow so that we can make those requests more item potent. Let's go back and see what that would look like. [00:21:00] So there's me, Adrian.

And we're going to order some cake from Fris not a, and as our first step, the application needs to generate some sort of unique identifier for our request. So again, this could be anything, but generally it's some form of UU ID. So let's say this has been generated frees has helped generate this U I D it's now going.

Place it in my order. So just as a sample place order. call, that's going to be made. And we're going to add that icy key as part of my order details. And now we're going to go ahead and place that order with my icy key and send and invoked invoke that event, basically. Now in our new idempotent workflow, we have our idempotency layers sitting in our API, and we also now have some persistent store that keeps track of our state of [00:22:00] all of the orders that are happening with frees.

So now instead of just directly going to process the order, the first thing that's going to happen is we're gonna check our persistent store to see if there is that key there. It says, Hey, I got this new request. There's this idempotency key in here? Do we have this? Have we seen this one before? , if nothing is found, then we can more safely proceed and then go ahead and run that place order handler.

So at this point, this can continue on to go over to the order processing. They can accept it, they can confirm it, go on the Merry way. And once that has been completed, we then now set that idempotency key, as well as the result of either that confirmation or whatever has happened at the handler and.

That. That's that. And if you take a second and look at this quite basic workflow, [00:23:00] but ident workflow, you can already see that this is far better than the workflow that we had previously, where there was no idempotency built in. In fact, if we just assume, let's say we go back in time and this was the workflow that we did.

And this was that initial request that I placed when ordering in the tunnel. At this point, we don't receive a response, right? Because I'm in the tunnel and I have lost a signal. At this point, it's going to be okay because now that we make any subsequent requests, let's say I resubmit, or let's say it's even better.

And there is some default retry behavior and the application is making those subsequent requests for me. We go through the same process. All of the subsequent requests are going to go through the same thing and go ahead and place that order. It's gonna have that same idempotency key though, because it's me still ordering it.

And then it's going to check that idempotency key in our persistent store [00:24:00] except this time now, because we have stored that key in our persistent store and we actually have a result. We're gonna know that it exists. It is something that we have seen before and instead of going through and running another place, order handler event and giving me more cakes than I bargained for, we're just gonna return the initial result from the initial request.

And then that response is going to be sent over to me. And that's gonna be great because. That's what's most important here is that the original intent has been captured that even though there may have been two or more subsequent requests that our ency layer and our persistent store was able to determine that, Hey, these are actually duplicate requests.

We don't want to continue and place all of these different orders. We just want to do this one, the one that we have successfully run, and the one that we have. Before. And so in this way, you can see [00:25:00] an idempotent workflow is far greater and very much mitigates the side effects that result as of duplicate requests.

So the last thing I wanna talk about now that we're all excited about icy. Maybe you can see that I really like this principle is I wanna talk to you about a couple libraries and tools specifically. I'm gonna go very in depth in one, because I think they have a lot of really cool features.

And then I'm just gonna list some of the other ones that are worth looking into on, at your own leisure. If you want to learn a little bit more. So the first thing I want to show you is the Aw. Lambda power tools. Rupo so this is a really awesome library that actually implements an IEM patency module.

Now, unfortunately they only have an IEM patency mod module for Java and Python. They do have a, a. Type script one, but they're just starting out with that. And the [00:26:00] type script one does not have the icy module, but keep an eye out for it. So this one does have the icy module in Java and Python, and it's really neat to see that a lot of the things that I've talked about here can be easily seen here.

So for example, the IDET. Idempotency key that they use here is actually a hash representation of either the entire event that you may be sending with your Lambda or a specific configured subset of the event. So you can configure just a few portions of the payload to be your idempotency key. and of course the persistent storage that they use is Amazon DynamoDB right now.

It's the only supported one. Hopefully they change that, but don't bet on it. And as an example, you can start quickly initializing or you can start quickly using this by initializing a DynamoDB persistence layer. This is a Python example. So you'll see here that you can use it with an idempotent decorator on your lamb [00:27:00] Lambda handler.

You can see that. Eight Some of the cool features. I want to tell you about that. This library helps you specifically, the icy module helps you prevent multiple Lambda handler function executions on the same payload during a time window. So you can set a period of time that says a, Hey, consider these as duplicates or not.

And depending on if it has the same payload, it will. Take care of it for you, the way that we did in our workflow and say, oh, these are actually the same requests. We're not gonna continue further. This ensures that the Lambda handler returns the same result when the when it's called with the same payload.

So very similar to the workflow I showed. If it's see, has seen it before, it's just going to return the. Result. If it's the same payload, you can reuse the same dynamo DB table to store icy state that's because it stores the function name. In addition to the icy key for you as a hash key, [00:28:00] and you can do something like set expiration periods for idempotency records.

So all of those records are keys that we're storing in that persistent storage in the dynamo DB in our persistent storage layer. Sometimes you don't wanna keep all of those records, right? Sometimes you just want to keep them for a period of time. So by default, this library expires those after 3,600 seconds or that's an hour.

But you can configure that time. And so sometimes you just want to keep that there for the time that you need it and then get rid of them. Otherwise, if you keep all of those records that can grow very. . And so this is one of those that I highly encourage you to check out because the documentation is on point.

It's very thorough. It has a lot of examples, both in Java and Python and it's the most fleshed out that I've. Some other great tools in libraries that are worth mentioning. The first one is the Stripe API. So they support item potent requests and it implements item, potency keys. So if you look at a lot [00:29:00] of APIs or even a lot of blog posts of people who try to implement item potency, they always refer back to stripes, API, because they've just done it so well.

And so these are two really awesome. Resources, both their docs and a blog talking way more in depth about icy that I highly recommend you check out. There's something called the item potent API that performs additional icy checks. It's a new get package specifically for asp.net core. It implements this filter that you can use on some HTTP requests or HTTP verbs.

And you can get that as a new get package. And this blog post talks way more about it. There's obviously step functions now while they're not ENT in nature, they help. Build ID potency in with the way that they are built. And they're very similar to durable functions, which with deterministic orchestrators, which make them item potent you can [00:30:00] easily build item potent requests.

With this. And so again, check out the docs on both AWS step functions and Azure durable functions. If you want to learn more and you can obviously ask some questions too. So thank you more serverless. That is everything that I have. There's so much more I could talk about. I'm happy. Hopefully I can extend this talk.

But happy to answer any questions.

**Brian Rinaldi:** Thank you. The Adrian. That was fantastic. And first of all, I'm hungry. I was already hungry and you made me really super hungry and , I definitely want some cake right now. Second of all, your slide design is amazing. I love the way you, it really simplified the concepts. You could teach a class on slide design, honestly.

Thank you. So we do have a couple questions from the audience, but everyone feel free. We've got like about seven minutes to go. So feel free just to ask your questions and we [00:31:00] will try to get to all of them. So Jack asked, what would the be the difference between using persistence storage for a icy and the app being stateful?

**Adrienne Braganza Tacke:** App being persistent lawyer and the app being stateful. To me, when I hear stateful the, at a very generic level, that just means you are storing some sort of information about it. So they work together hand in hand. But if you wanna talk about the persistent storage layer as being idempotent or being used in an idempotent way, Pretty much using that storage layer as that log of requests that are being done.

So if you don't have this storage layer, for example, there's no way for you to know, what requests have gone through what actions have taken place. And to me, as in the way that I understand stateful, that would be the biggest difference. So it's not to say that they're completely different.

They play with each [00:32:00] other nicely. And there may be not too different, but if you wanna look very specifically at idempotency, that's what the persistent storage layer would be used for.

**Brian Rinaldi:** Yeah. And I'm new to this concept somewhat, so but it would seem to me in some ways this I competency would be.

A very, could be a very simple version of sta in the way that like, it's not meant to like per, like I, I was thinking, okay, we have these SDKs for instance, that constantly tracking events. And I don't wanna duplicate events, but that I'm not really, it's not really sta full. I just wanna make sure that this event doesn't get tracked twice.

So I'm not like using any kind of sta in the function other than just verifying. Duplicating a course.

**Adrienne Braganza Tacke:** That's a really good point. The other thing I'll add now that you've actually said that is this store, right? This is not just a single store either. Sometimes you have state that's kept for the entire application and every single.

Part about it [00:33:00] for this persistent storage layer. Let's say you have a microservices architecture. You may actually have a persistent storage layer per service or per event that you're trying to keep track of. And that's absolutely necessary. You don't want one really large one that holds all events.

You want to hold one. Per event that is happening. So for example, you would have that one just for all the orders placed, and that would be its own persistent storage layer. If you had, let's say assigning cooks or invoices, and you're keeping track of those services, that would be a separate persistent storage layer that you would keep because it needs to know at every step of the way, what events have occurred.

And so in, in that way, like you said, it's a very simple stateful. Machine that very much is narrowly focused on doing just that keeping track of all of the things that have passed through.

**Brian Rinaldi:** Okay. Excellent. So ICA asks if a backend returns an error for request, should you also store the failure result with the [00:34:00] idempotency key?

I'll get that pronunciation right before this we're done. I.

**Adrienne Braganza Tacke:** No worries. It started it's it became one of those. It's weird to me because I was working on these slides for so long. So that's a great question. You can store the failure depending on what you're trying to do for the most part. You usually wouldn't store the failure because when it does fail you probably have some default retried behavior.

That's going to send sub subsequent request. In and you usually mitigate that failure, but let's say you've retry it multiple times and it just always fails or something bad. Always happens at random pieces of the request. You can store that failure. And then it is up to your application to now say, Hey we have a valid failure on here.

You want to deal with that on the application so you can absolutely. You just need to make sure to take care of it, if you do store it and have a reason for storing it.

**Brian Rinaldi:** Okay. And I [00:35:00] guess how much information do you typically recommend storing with each of these keys? If, what if the response is large?

It seems like you could easily just get. really, build up your database and your, the charges associated with it. Very quickly do you, would you have the data, some data stored somewhere else that somehow this is connected to, or you just dump everything in this dynamo DB or whatever key value story you.

You put it,

**Adrienne Braganza Tacke:** that's a great, that's a really great question at a minimum, what you want to store in these persistent storage layers are the things that you need to be able to redo the request in an ident way. So absolutely. You're gonna have the key in there. That's for sure. And at the very minimum, that's probably the only thing you can store.

If you have the results in. Persistent storage layer, then that is okay. But one thing that you can exercise here again, are those [00:36:00] expiration timeouts. So in those power tools that I mentioned, you can set an expiration time because. Exactly like your question. Those are gonna grow astronomically. If you continue to store them and depending on the size of your payload, they're just gonna grow.

So if you know that you don't need to decide whether any subsequent requests are duplicates, then you can say, Hey, I don't need these records anymore. They've been processed. You can delete them. And then that's another way to make sure that those don't grow. So at a minimum, keep what you need in there.

Enables you to rerun the request in an ident manner at the very minimum, that's at least the idempotency key. And then absolutely make sure you use these expiration timeout, windows, if you have them

**Brian Rinaldi:** that's yeah. Okay. That's a great answer.
