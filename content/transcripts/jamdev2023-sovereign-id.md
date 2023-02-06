---
_build:
  list: false
  render: never
---

**Chris Anderson:** [00:00:00] Joining this session about the paradigm shifts in computing and the move to cloudless, I'm gonna talk a little bit about why I'm excited about what's happening in web three, and then I'm gonna show you how easy it is to get involved. So my name is J Chris. I'm working on product at Web three Storage, and I've been doing peer-to-peer.

Since about 2008. So I'm super excited to see the growth in these new protocols and the way that they're being used in real life these days. I'm gonna talk about the paradigm shift from the cloud to protocol networks. I'm gonna talk a little bit about what those cloudless protocols look like. . I'll talk some about the real world implications of the old way of doing things and how we can improve it by moving from bear tokens [00:01:00] to signed you cans, and then I'll show you how you can get started building your own apps in just a few minutes.

So paradigm shifts and computing happen all the time. We moved from servers to the cloud by commoditizing servers and making it so you could just create one with a command. And the cloud itself has problems because it's location dependent and vendor specific. So there's a new breed of protocols that run across the entire network.

And you are familiar with Ethereum, probably file coin. These have real economic growth. You could see by the fees the users pay to use them, that people at least find them valuable. What's cool about these is anybody can join and provide services. So with Filecoin, anyone can hook up their computers and be part of the Filecoin storage network.

This makes them incredibly robust infrastructure [00:02:00] failure, and it makes it easy for workloads to move to the service providers with the best reputation or the best performance, or the best price. So let's talk about how we do things today and how we might change that. If you're familiar with bar tokens, API secrets, it's a common way that your application is gonna be coded to connect to some other service or microservice that you're.

So your front end might have a session like a J W T or something into your server tier. Your server tier might have multiple back ends that it connects to, like a search or a database, et cetera. And each one of those is gonna have a secret, and then those may themselves be configured. So that they write to particular infrastructure using secrets that they control.

And all this proxy adds up. It creates security holes. If any of those tokens get loose, then you can have replay attacks. And there's just all kinds of problems with the bearer token architecture. [00:03:00] So there's this new standard called U can N, which is better because everything is signed by the user. So it's a capability model where your grand capabilities, you could delegate them to your other devices, to your friends, and then anyone who issues an invocation signs that, which means everything is safe to forward, and that gives you all kinds of cool properties.

One of the neat ones is compute over data where you can push a computation to the data rather than having to fetch the data to the comput. . And so that's giving us these big data processing capabilities, but even for interactive user applications. So I talked a lot about theory. Let's talk about how it's super easy.

We've been building I P F S for, know, almost a decade, and it's getting to be easy enough to where you can just jump right in and use these components for react or view or the framework of your choice. And. You can go [00:04:00] to beta dot ui, web three.storage to get started on these or go look on our GitHub to get under the hood here.

So if I look at the uploader, I can see the code, example of what it looks like in place, and then I can go to the Code sandbox and you'll see the experience here it asks me to put in my email address. I've already done that, so I'll go ahead and jump to the other. once you're in, and the reason I wanna show this to you as developers is this is all you need to do in order to show your team what it would be like to use these tools in your app.

So you can see you're just wrapping stuff in a provider and dropping in a form with your interaction in it. So what I'll do is choose a file and upload it. And you can see how easy it is to add uploads to your application.

So [00:05:00] if you want to get started again, go check out beta dot ui web three storage. Thanks a lot y'all.