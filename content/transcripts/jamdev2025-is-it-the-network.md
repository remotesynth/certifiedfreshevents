---
_build:
  list: false
  render: never
---

**Rob Schneider:** [00:00:00] Hello, everyone. Thanks for joining me. My name is Rob. I am Rob SCHN on pretty much any social media. Uh, and I work on the traffic engineering team at GitHub. So today we're here to talk about practical troubleshooting for public facing network applications. Uh, basically how to tell if your issue is the network.

And I have a little bit of a Rorschach test for you. I want you to look at this and tell me And think to yourself, like, how does it make you feel? So, yeah. So if you have been working in this industry, uh, for any amount of time, uh, like me, this is probably the most frustrating part or frustrating error that you'll see for me, it's kind of paradoxical because a four, four means, [00:01:00] okay, I messed up the page.

Wasn't found a network connection error. You know, the page is not loading. That's kind of easy to troubleshoot. A 500 is weird because. It means the request got through, right? Like it means something somewhere along the way said, Hey, I can't serve your requests right where that is, is the real meat of what we're going to talk about today, because inevitably you'll go to your networking team and say, Hey, I think the network's down and then they will tell you and kind of get a little spicy, right?

I can tell you from experience, um, when you get those types of requests, that the network is an issue. It's kind of, um, hard to believe it at first because if the network was the issue, it's usually more encompassing than just like one service or one product. Right. It's usually the entire application that's having an issue.

So with this talk, I just kind of want to, uh, peek into the black box of like [00:02:00] what sits in front of a lot of these applications that you're responsible for. And, um, to give you kind of an insight of like what. Uh, those your teams at your work are doing and troubleshooting and looking into, um, now, a lot of this is very complex.

So I don't want you to be upset if you don't understand a lot of it. Um, maybe just make a note and see if something you want to look into later. Um, like I said, this is a black box. We're going to be looking into, but hopefully I want you to leave with some sort of insight. As to the tools and infrastructure that sit in front of your applications.

So in order to do that, we're going to go through like a very basic setup. Um, it's gonna include, you know, your DNS, your CDN and two regions. Um, and I think this will help illustrate kind of where we are looking for when we see those 500 errors, right? So if you look at the, uh, arrows, that's actually like, we're gonna look at where the breaks are in those errors, right?

So from like, uh, [00:03:00] CDN to the load balancer, we want to see like, what is the relationship between and, uh, where that 500 could have been served from. Right. So first off, I did want to touch on the client browser relationships. Now browsers are, their only responsibility is trying to make their user happy.

Right. So in order to do that, they can actually serve. Most of, if not the entire application without ever having to interface with any sort of the, any sort of infrastructure that we're going to talk about today. Uh, meaning you really want to check when, when there is an issue, you really want to look at the host cache, right?

So your index. html, any of your JavaScript bundles. If you ship a broken JavaScript bundle and you're trying to replace it. The browser is more than happy to hang on to that. So the issue might have already been fixed, but your local browser might be actually hanging on to the bad code, right? So I just want to make sure that we're aware of what is caching [00:04:00] and, uh, how long, for how long it's caching.

So, go, you know, try to open your browsers in incognito, look at the network tab and understand where the requests are going. And if you have anything that's like particularly sticky, you can use the net internals page in Chrome. To kind of clear out any sort of a host caching that's happening. Now, the next one we want to talk about is, uh, the client to your DNS.

Now, DNS is not specifically part of the network flow, but when there's an issue, more often than not, it's always DNS, right? Like you've heard this. And DNS is one of those tools and one of those infrastructure pieces that kind of works and up until the point it doesn't. Right. So most likely this is not going to be your issue, but we do want to check it to make sure that it's not something that we need to look into.

So very easy to check DNS [00:05:00] using the dig command mainly. Um, and the biggest thing is you want to check to see, okay, am I getting the record I'm expecting? Or is this unexpected or something's missing? Those are really the only things you want to look into when you're, you're doing a dig on your hosting.

The next part of the chain is, uh, not again, not necessarily part of the network flow, but it's the mapping, right? So your DNS to your CDN configuration. Now, you might have said when we're looking that up, okay, what, what does that edge key? Right? So a lot of ways we, one of the main ways we can get DNS to sit in front of the client interaction.

Uh, one of the ways we can get CDN to sit in front of the client interaction. Is to map it to DNS. So the client will ask for an, uh, we'll, we'll ask for your host name IP and it will get back a CDN hosting. And that's the way that we can put, we'd sit in front of it. Right. So you have like Akamai, CloudFront, Fastly.

[00:06:00] Um, these are like common DNS providers that we can look for in those requests, uh, in those responses. And if you have a, like a multi CDN setup, this is going to be a lot more useful. Um, but in short, you just want to make sure that you can hit the, um, IP that you're being provided by the CDN directly. Um, so curl has a resolve flag that lets you map the host name to an actual IP and send it through.

Uh, if you get a 200 on that, then that means your CDN is probably working well. If you try it on a different IP and you get a 500, that might be something to look into. So actual infrastructure side, we're getting closer. We're getting to act the actual, like infrastructure hosted in the cloud. This is your CDN to your external load balancer.

So we call this mapping origins. So a CDN is actually, uh, instead of not just caching things, what it can provide for your application is like load balancing between regions, right? So. If you have [00:07:00] a datacenter in us east 1, you have another datacenter in us east 2, your CDN can map to that. And when there is an issue between this layer, you'll start to see things like, Oh, I have customers that are cleared, uh, no, uh, closer to us east 2 that are experiencing issues, but us east 1 is not.

Or maybe the, the issues that they're experiencing are admittant. So that might be hint that there's some kind of issue with the origin. Now, this one's like super simple to check. You just want to hit your application using the origin hostname. So in this example, I have a us east 1 external load balancer and us east 2.

Uh, the us east 1 is passing just fine. The us east 2 is failing. This is actually probably the best scenario you can find because you can set your CDN to only route traffic to us east 1 now, as you're trying to fix your us east 2. So actually on to AWS, AWS infrastructure [00:08:00] or Google cloud infrastructure, um, is your external to internal load balancer set up, right?

So this is from your load balancer that sits on the edge of your infrastructure, uh, communicating with the load balancer that sits actually in your infrastructure. Now we call this sort of traffic that's occurring here, uh, north south. And really you just want to make sure that like, is, is everything configured correctly?

Um, if you're having an issue at this level. So if we're getting a 500 at the external load balancer that I have here, um, but you got a 200 when you hit the internal one directly, that might hint to some kind of, uh, misconfiguration issue, right? Um, and this is sort of where we get into the unknown and uncomfortableness cause you could start to deal with port numbers.

Um, but the, the main thing to keep in mind is we're just looking between. The, the, the connection. So, uh, externally it doesn't work, but [00:09:00] internally it does. Okay. Last one is, uh, the connection between your internal load balancer and your service. So we call this sort of traffic East West, um, because it deals with intranet stuff.

So, uh, services that work between and inside your infrastructure. And really, uh, you just want to make sure that you have a good idea of what your application is expecting at this layer. So really the, the best thing I can suggest is to hop onto the local host of whatever your service is running on. So that could be like Docker or if it's a Linux box and run the coral locally and get an idea of like how the request wants to be structured.

So you might have, uh, Your application at a V1 somewhere that you weren't aware of. Um, but if you can get a 200 here, it's easier for you to communicate out to, uh, the layers above what your application is expecting. [00:10:00] So that's a lot to throw at you. Um, like I said, if this is confusing, uh, you're, you're in good company.

This is, uh, uh, very much a black box for a lot of developers. Um, and if it interests you, it's something that you, that is really fulfilling in my, in my experience to work on, but it's, uh, I hope that I was able to at least give you some tools, like, you know, uh, different ways to do a curl and different ways to dig kind of the insight to some of the applications that sit in front of your application.

Thanks so much.
