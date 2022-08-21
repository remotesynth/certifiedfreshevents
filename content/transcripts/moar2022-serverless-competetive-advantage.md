---
_build:
  list: false
  render: never
---

# Serverless Advantage

**Ben Read:** [00:00:00] Hi, nice to be able to talk to you today. I'm here to talk to you about serverless as a competitive advantage for your business, for your developers, for your workflow. But hang on a minute. This is the serverless conference. I know you probably all use serverless and really can see the benefits that it brings, but no doubt, people who don't.

How can you convince them? How can you have good discussions with them that will maybe lead them to checking out and trying it? I hope that this talk will give you some things to talk about some different use cases, because even though serverless has been around for a while now, hasn't it.

We still face things like this tweet. I am developer parody account, which says serverless is just someone else's servers. Oh, isn't that so annoying.[00:01:00] So how do we counter that? What are the counter arguments? How do we convince people that it's okay. That it's a paradigm they might wanna try?

There are four things that people can check out. The fact that there is no silver management, I'm gonna focus on the management bit. how it's scales up and down, but it's based on your usage, how pricing model is very different and how it can help your developers go faster. Let's go into the first.

There are no servers to manage. Have you ever had this happen? I got an error at a company I worked for before the application has failed to deploy because this version of a Buntu is no longer supported. Yes. All of our containers were on a fixed version of a Buntu and that had certain dependencies within it that allowed the application to run.

And then we had to upgrade all of it. It took us a long time, but four of my colleagues and I. About a week, just under a week to fix it, we had to update every application, every dock container, every pipeline. [00:02:00] And it, it took a while because the applications were a little bit broken because of that.

Now, of course, in server, you don't have this layer to worry about you. Don't worry about the container layer. You just worry about your. And so there's no service to manage. You don't need to worry about this kind of issue when you're coming to serverless. Now that's a good benefit.

Isn't it? That can obviously help people to go faster. Surely I wouldn't have spent four days on it. And when I had that problem here's the second one. Automatic scaling. So in a traditional application, of course, you've got your Kubernetes pods, your replica sets in it. So you might have two as a base are already on already ready to accept traffic.

And maybe you can set it to scale to four if things get especially busy, but then all of a sudden you hit the big time and you're getting this error four error message. 4 29 means too many requests now. This can be a big problem. Of course, you've suddenly got loads of traffic and your hypervisor is trying to F [00:03:00] funnel traffic to your different instances, but it can't, they're all blocked with serverless.

This doesn't happen because your functions scale with the requests that they get. infinitely. So you will, what do you do if you see loads of traffic suddenly flood into your network? Oh, look at all these dumpers. Oh, isn't that great. We're gonna make some money here. You just said watch happen because your applications can scale and that you don't need to worry about it.

that's brilliant. Isn't it? That's a really good benefit. I'm sure. You'll agree. The next one is consumption based pricing. Now I've got two figures on the screen. I dunno if you can guess where this is gonna go, but the first one is $2,000 per month. The second one is 86 cents. $2,000 is what I was guessing that a company I worked for once was paying for each application that they were.

So they had a very simple application. It was doing some authenticating on the server, [00:04:00] rendering a UI and sending data back to an API two K for their base for sets that they were waiting for traffic every month. And then they had four in different environments, so staging and pro and those kind of things.

And they also had 13 of these applications, 13. Can you see the dollars rolling up in your mind? Yeah the other figure is 86 cents and that was my first AWS bill that I got last month after using AWS for three years or so. Okay. It's not a light for flight comparison here. My, my applications are really small.

I've got four instances of web E that are serving little blogs here and there it's just me using it. It's not really a fair comparison. Okay. But look at that. Look at the difference. I'm doing a lot of stuff on those applications. There's a lot of things going on there. There's a database, there's the functions.

There's the cloud watch logs, there's storage, all kinds of things. And I'm barely paying a thing for it. Of [00:05:00] course things do get started to get expensive. Don't they, with serverless once you've got a certain amount of traffic, a certain amount of things going on, that $2,000 per month, it was just gonna sit there every month.

It was, they knew it was gonna cost that much money, how better it is to scale things as you grow much better. Isn't it. That's good ammunition for people that are maybe thinking about serverless to try to figure. okay. Now the fourth one faster product iteration. Now this is an interesting one because you've got, obviously you've got your business logically and the things that your company is interested in delivering, this new feature or whatever it is. And that is abstracted away. All the rest of the stuff. Sorry, is abstracted away for you? So you don't need to worry about things going wrong in the API layer, the storage layer or the notifications crashing. It's just your. That you worry about now as a developer, that's obviously a massive benefit because you don't need to worry about all this other stuff that might be going on and it's could be a huge headache.

If you worry just about your concern of what you're doing [00:06:00] now, that allows you greater focus, you can iterate of your product faster. And because you're also saving money because you're using serverless, you can get ahead of the competition and you can beat them to market with things, which is a great thing to, to have in your toolbox.

Isn't it be able. Okay. Great. So we haven't, we seen that there are four good things that we can use to help convince people that serverless is a great paradigm to try. There's no server management to worry about. You've got autoscaling consumption based pricing and faster product iteration, all of these things that are gonna help a business to succeed and grow, but it's not all a rose garden.

Is it? There's a lot less to worry about in this chart. I've got the different concerns that you have to worry about in different instances. So if you've got physical on-prem hardware, you've obviously gotta worry about the full stack. Haven't you, the hardware, the OS, the guest OS the container.

And on the other hand, you've got service where you only worry about your application. But there's a bit of a hidden story. Isn't there? The [00:07:00] applications that you run on physical or VM or on a container they, that application can stay the same in those three environments, but it can't for serverless.

So people need to start with serverless. They need to start using it from the beginning, which is obviously a problem. I think that's one of the biggest blockers for people. Isn't it. So how do you get started with serverless? How do you get into it? How do you start building your applications with serverless?

Why not take something that's already been built? Put it up there and start tinkering. I happen to work for web. We is it started life as a serverless application framework, in fact. So it comes with all the tools and infrastructure that you might support that you might expect from a tool like that.

But it is we've repositioned just a CMS because that's what our users were mostly using it for and the potential that that they saw in it. But it. Scale really well, of course being serverless, but also it's been built to be tinkered with and rebuilt and [00:08:00] repurposed. It's built to be extensible.

There's a plug-in ecosystem it's built on composable react components. So there's a lot of potential there for your business to be able to build something on top of webinar and grow your business. Exponentially. So do check it out. I hope that's helped you to see some of the benefits of serverless and I hope you have fun at the rest of the conference.
