---
_build:
  list: false
  render: never
---

**Natalia Venditto:** [00:00:00] Thank you so much, Louis. Thank you. And thank you everyone for having me here. I'm super excited because yeah, this is the conference all about the JAMstack and the JAMstack is what I'm most interested in at the moment, but also other technologies that I would like to. Talk to you about like cloud native, what is cloud native, what is serverless?

How everything connects together. So again my name is nato. I work as a JavaScript developer experience lead in Azure. And, yes and let's do this So it shouldn't be a surprise for you that I was around doing web development in 2 20 15 because I've been doing this for a quite a very long time.

And at that time, that year there was, or we saw the emergence of a new architecture trend that now we're all familiar with and we all love the [00:01:00] JAMstack, JavaScript, APIs and Martin. It was part of this trend of going back to the roots of front and code, and delivering static again after many years of shipping megabytes of front and code to the clients with the consequent performance degradation that we have been experiences and particularly our users have been experiencing.

So when JAMstack sites first came to light, we saw a lot of personal websites and a lot of documentation sites built on top of it. But a lot of water has ran under that bridge, and this data comes from the results of the JAMstack community serving 2022. We see a 45% of use cases still being personal.

We also see 17 other use cases including B2B software, e-commerce, enterprise software, retail games. So we see business being built on top of the jam, slack. And what is this? The result of [00:02:00] this is the result of. Decoupling systems in many cases and deploying workloads in more effective ways. So much of these workloads were once part of a large monolithic application, and now they're deployed as an independent unit on a stack that has even evolved to be more than what the Jam Stack first proposed.

And why don't we decouple , you can find tons of information on around motivations for decoupling a large tightly coupled application online. So I'm not gonna go over all the different reasons that may lead us to it. And I don't want to extend much on it, but the main reason. It's an organizational reason, or it should be an organizational reason.

If you are decoupling a monolith for reasons that are more technical than organizational, you may need to reconsider your drive. So of course, we may have [00:03:00] also some non-functional requirements that are harder to meet in the context of a monolith. And there are also some specific reasons. Are more connected to the application or why we want to decouple the application layer itself, more business requirements or even functional requirements.

The whole, again, the whole model story, right? Those usually legacy applications that have become so massive and so tightly, couple that give us nothing but problems and pain. And typically we also have very large teams that have no sense of being a team anymore because they never work together anymore.

They go to do their own tasks and they don't talk to each other. And then we have knowledge silos. We're dealing with it with technical debt. We're dealing with the inability to introduce innovation. We are like having to work every day in this loaded mess of interdependencies.

And I'm sure [00:04:00] many of you know the story, right? You've been there, you've been fighting with one of these monster. and we all dream about decoupling it and tearing it to pieces basically. So the result or what we want to actually deal with are more manageable components, and we want to do so because we want also more independent.

We want independent teams that are mapping to independent. To solve business problems, making their own independent, again tech stack and architecture decisions. And ideally, we want those components that we get after decoupling. And I'm not talking about front end components, I'm talking about components of a decoupled system of our distributed system to.

Developed on their own and to be deployed on their own with their own C I C D models and their own schedules. And we want them also to fail in isolation. [00:05:00] But decoupling a large application is not a trivial task. We have that big cake and now how do we split it in pieces that everybody's happy with right to begin with.

It helps to understand the infrastructure opportunities and the current LA landscape today, and probably many of you working in the front lines are saying like, I don't wanna know anything about infrastructure. It's like a scary word. It's probably very complex. I really prefer the provider. Abstracting away all that complexity for me.

So who wants to know? But we're moving from a world where the default for most legacy monoliths out there was the list on the left, and then there were people in every team that were very skilled with infrastructure and systems. And now we're moving to the right, and when we're moving to the right, we're moving to a world where the norm is.

Teams that may not have [00:06:00] to deal with managing infrastructure at all and that have all of that dealt for them, they only have to work and concentrate on the application. But usually when we know. , those options that we have, those platforms as a service, those software as a service, all those headless c m s and multiple choices of frameworks it's easier to grab the application and decou it in an approach or using an approach similar to the one we just have seen animated.

When the decoupling is done by packing architects, it is usually done by grabbing this application. Like all the layers of it and splitting it first into mic, like the backend logic into microservices. And then designing the APIs and then putting the front end on top, like again, another monolithic or perhaps in some cases [00:07:00] Modular system.

So we, we could argue that at this point when we are decoupling into microservices, we usually have a modular front end system on top. And that's the result of having many tools that. Help us with that. Like mono, mono repositories, dependency managers like npm workspaces that have just become a thing about a year or two ago.

And the many bundlers and the many other tools that allow us to modularize our front and code so we can request chunks or bundles or more, more manageable kind of um, code packages to. Put together right in and sometimes request that in a synchronous ways that help us with performance. But if we go back to thinking how architects and developers usually think about monolith, decoupling, or modularization in general, it [00:08:00] tends to be application centric.

So again, they think about the application. How do I split it? There comes to services, and then we're going to present all that with the same front and layer. What I propose is to replace an application centric approach with the api. First or a p i centric approach. And when I say a p I first design, I don't mean designing the a p I only, and then designing the front end and then implementing the a p I and then whatever else I propose that we start looking at the use case, designing the ui.

and then specifying and executing yet the API based on our use case. So we want to consider solving each use case [00:09:00] as an independent problem or a problem on its own. And that will make, or that will really make possible for independent teams to make their own architecture decisions, their own tech stack definitions and make them end to end from one end to the other of the development cycle and of the stack.

So we also will have a different development cycle. We also will have a different deployment option and that will make us put. That will result in really independent teams. But then those independent teams will have to put that development back together. And this is what we're going to explore later with this approach.

We think about the user experience. First the API and the user experience. First, we architect for the user and we specify interactions. We build the A API and then we code the front end that [00:10:00] enables those interactions for, again, a specific use case. This is basically the principle behind innovative experiences like chatGPT and be chatGPT or be co-pilot or any other of those experiences.

What we see is an API that connects to a very dynamic and reactive as well experience in the front end. That is the key. A API serving data to micro front ends, but. I have some hots in my talk and this is, I guess the first one. I'm not very happy with that term. I'm not very happy with the term micro front end.

And I don't have any idea who came up with it or why. I think it's the result of trying to align micro front ends with microservices. But in reality, what we know as a micro front end may not be micro at all. It may [00:11:00] be a very large scope of dec couple user interfaces that range from a tiny button, making a request to a server to a fully fledged JAMstack application.

And even. So we're going to erase the term micro front end, and we're going to start talking about decoupled compostable front ends. Because a fully fledged application, like a full deployment that is part of a larger platform, could be considered a decoupled front end as part of a distributed system.

That in this case, if we have a or several applications that are connected together through an API that is called a vertical split. . But as you can see here in this picture we may also have a user interface where we find a composition of independent modules developed also by independent teams displayed in one [00:12:00] single page or page view or load of the, of that page.

And that is called a horizontal state. And it can indeed be composed by very tiny micro parts. So we. Both a full application maybe and a tiny button being in the same cult with the same name, a micro frontend. So we're going to forget about micro frontends and start thinking about units that can be composed and probably the key characteristics of a decoupled unit of any distributed system is.

It is again, independently deployable, managed by a single team and mapping into a unique business unit. So if you're wondering is my application, the application I'm working on, even if it's just a button in the front end, is it a decouple front end? If it's completely independent in those dimensions, then we can think [00:13:00] of it as a decouple front end.

So remember that if we use system distribution or micro architectures, we do it to solve organizational problems. As I say earlier in the talk and not technical issues may get solved as a happy consequence, but should never be the goal of. Distributing a system. This is a typical development cycle that we are all used to.

And when we design our system, we make our arch architectural decisions again, based on the specific designer specification. Then we do our front end development set up. Then we start implementing, then we start integrating. We start building, we start deploying and finally, we. Can publish our website in the context of the JAMstack.

Many of those of those aspects or those steps of the development cycle get a little bit abstracted away, right? We don't know [00:14:00] when those happens, or we may, don't may not need to know. When they happen, we just click a button and we know that the application somehow builds. And suddenly it's magically.

Online, but this, if we are aware of each one of those steps of the cycle, this is where we can make decisions to ensure that our development experience is just as good as the user experience that we are architecting for. Because we cannot architect for the user experience. If we don't know the user, we are going to have to.

Some questions and what are those questions that we wanna ask for a good developer experience and a good user experience? Is something like for what are we for what are we designing this application? What is the purpose of this application? Where in are going to be. wherein we are going to be de developing this application.

And this is when we may come up [00:15:00] with a setup with the i d with the development environment, with what, and this is what is going to answer the question. What is the language or what is the framework that our team feels more most comfortable with? And to what? To what are we going to be integrating?

This application to a database, to a n SDK, to another service that is going to be in charge of a certain task and how we are going to be making sure that this application integrates with all those services we mentioned before. How is it going to be tested? How we're going to make sure that in the end it, it gets deployed to where.

Finally, again, for whom? So we make a lot of questions that we will answer. What we're, why, what is the purpose of the application we are developing? And then again, all those aspects in the center we're in with [00:16:00] what to what and how that will answer many questions that will guarantee a great developer experience.

And finally, for whom the most important. For whom that is where and processes how and for what reason, which is the, basically the foundation of an architecture that is dedicated or has the user in mind. Because when we design for the user, we make decisions for user interfaces for people that we don't know, that we are.

We may be, or we may need to satisfy different needs and abilities and even people that are on different locations, as we are going to see, we're designing for people who use a diversity of devices and have different preferences or they use a device because they cannot afford any other device.

We have very different capacities and even screen sizes and resolutions. And not only [00:17:00] that, These people, this user base is probably scattered around the world with different internet access rates and different constraints. And one of the best strategies to un understand the needs of a diverse user base is to have a diverse team as well.

This is not only my take Harvard. The same. And they have a great academic paper that I am including the link to. So having a diverse team will help us think about user base that is also more diverse and distributed. And unfortunately, I have heard sometimes people say something like our user base in particular is only in Europe or EMEA and the States.

So we are not considering all these constraints that you are speaking about. But we also see more providers insisting on the importance of global distribution, and this is because they have data that proves that your applications [00:18:00] are accessed from many different points in the world. And there are variables unknown as we have seen.

We don't know the abilities of our our users. We don't know the devices they may be browsing with, but what we do know is that many of them over the years have. Moved to smartphones and tablets. So there is a lot more browsing from mobile devices than there was before. Flipping by 1000, from 2007 to two 2021.

but what you may not be considering when you think about mobile phones, or it may be a surprise to you, is that only 28% of the global population browses in an iPhone, which means that. Those phones or those labs that we have as developers test our applications may not correspond with the reality of the devices that our users are actually browsing our [00:19:00] applications with.

And also our connection speed may be the best one can get. But those results we attain when testing our development on these super fast machines and connected to 5g. Or fiber are not going to be the same than the ones the end user is going to be getting. The average low end phone for most of your users will be a $200 device, hundred device, and most of those are, 5G compatible.

So why those numbers matter? They matter because most of the super cool and dynamic websites of today are probably experimenting a bounce rate increase of between 32% and 90%, and that's a lot of money loss, right? Interesting enough, sync with goo. Google tells us that this lowest industry to load pages are also financial institutions, so maybe we should go [00:20:00] and propose to them to build their websites on the jump site.

Consciously Delan, our front end allows us also to abide by certain best practices. For example, keeping request count or weight of assets under control that is below 50 and three megabytes respectively. And now that we have, in theory we have been through the decoupling process that I was proposing, right?

With this scheme, we have understood that we need to architect for the user. and we need to know our users a little bit better and their constraints so we can start designing how to compose back. Also what we have decoupled, right? We need to consolidate whatever user experience and user interfaces we have broken apart in a way that doesn't damage that the experience for users that may not be on a super [00:21:00] fast device and connect.

And with that I mean that we can choose different stacks depending on the type of page or view that the user is visiting and what they come to do at a particular section of a distributed platform or application we're building. So this is a vertical split representation and frankly, in my opinion, the most efficient weight of laying out micro front end.

In the past, no matter what the type of content we were shipping to the user across a very large deployment, we were using the same front end technologies. But today, we can certainly make distinctions and say, for example, if we are doing online banking and the user is in the online banking side of the website, we may have a certain type of.

Stack or maybe using certain technology and maybe [00:22:00] that platform also has a blogging capability. And we may have that as a Jamstack site and maybe it has an e-commerce capability where people can go and buy something at a shop, and that may be a different technical stack.

Again, the stack determines the type of composition. So depending on what we are creating for each one of those vertical splits and how we're building it, we can then decide how we're going to put things back together. . But for some reason, like I said, that for me the most effective split is the vertical.

But for some reason, web developers, we have been obsessed with horizontal splits over the year. We have tried to make them work in different ways that allow us to mix and match technologies. And we have been using iframes, we have been using, I don't knowlet micros. , we have [00:23:00] tried really hard to compose pages like jigsaws.

And with the popularity of modern frameworks, the wish to use different technologies by developers to solve different problems in the same page has become more intense, right? And it has taken unprecedented dimensions, in my opinion. So that process, Incredible challenges. Imagine shipping three or four of the latest frameworks to the user in the same go, or several versions of the same framework.

That's a lot of JavaScript over the wire and JavaScript. The user never requested, never asked for, and their devices or their connections as we have seen before, may not be able to deal with. So vertical split composition. Also poses. Problems and some of the ones that we are listing here but the likelihood of gaining those problems with horizontal splits is much larger.

So we're gonna have governance, we're gonna have to [00:24:00] have governance and enforcement. On the same context the knowledge ramp is going to be higher. The orchestration is going to be much more difficult. Dependency management, state management, UX consistency, routing, version skew data architecture are all going to become much more complex in this type of split.

And this is when we have to resort to tools that. Optimize code and optimize orchestration and dependency management like tree shaking the code elimination bundle, compressing everything to ship better code and put it together or compose. Better, more efficiently. When it comes to code optimization for bundles, they're going to be loaded in composition.

Most bundlers can only perform static analysis at build time, and that makes it impossible to optimize. The code of bundles that are independently and remotely deployed [00:25:00] at runtime. So if we deploy one component of a page in one cloud and another one to another because they are not aware of the, at the at build time of one another, there's not going to be a way to optimize the code for those.

In 2020, however, Webpack releases version five and the stable version of a module that is called, or a plugin that is called Module Federation, to enable independent teams to that are orchestrating independently, couple and remotely deployed components. Build with Webpack of course to analyze them at run.

and I was experimenting with it for, I don't know, the period or space of three years. My conclusion is that even when it may be a good solution for certain cases, it requires very strict and well-defined governance and communication between teams. So if we're talking about. [00:26:00] Complete independence.

When we're using a tool like this, it may not be possible to be completely independent. We're gonna have to have some governance, enforcing certain aspects like, I don't know the framework we're going to be using or the version of the framework we're going to be using. So in essence, module federation mechanics are based on great concepts.

Sharing scope between a host and a remote container that have those roles interchangeable. To expose and provide and consume dependencies, but if there is no pre agreement between teams on what we're going to use, it may become really challenging to preserve the performance and the user experience, which makes it evident that independent deployability with no rules.

Behind it. No. Governance may be very difficult to accomplish, end to end, and to offer a cohesive and coherent user. User experience may be the most [00:27:00] challenging part. It may also have you ship loads of JavaScript. To the end user, like we said, and that would completely ruin their performance and the experience of the applications you're delivering.

And again, boosting the balance rate as we saw before. So basically, yes, I work in the JavaScript developer experience, and I am not telling you that JavaScript is bad. What I'm telling you is. JavaScript is spot that suboptimal JavaScript is spot that no coverage in your JavaScript IS pad, and that using JavaScript where you can use HTML or CSS or Web APIs like having your own custom JavaScript where you could be using the web platform APIs.

It's definitely bad. And here are my recommendations for designing distributed JavaScript systems or decouple compostable front ends with UX in mind and in my [00:28:00] opinion, great DX as well. So you should try to use HTML first frameworks when possible, stick to web platform and APIs and web standards.

You. Try to resort to loading JavaScript in a sync or deferred way. Particularly in the critical path. You should use code optimization where possible, and you should also de define and respect a performance budget when you are designing and developing your application. And what are. New generation of frameworks that I am talking about over there in the previous slide, while those frameworks that come equipped with mechanisms to leverage modern rendering patterns and architectures, like for example, the island architecture promoted by many of them based on the concept of partial hydration is a completely Innovative, let's say mechanism, but it's been here for a [00:29:00] while.

That takes a co, a static page, a static HTML render page and bootstraps JavaScript to it at runtime on the client side. When we are doing partial at hydration, what we're doing is we are. Targeting certain parts of the application or the components that are, that have the need to become the dynamic.

And we're bootstrapping JavaScript only to them. So there is also partial and progressive. Progressive. It's a little bit more advanced because it doesn't require a shell to propagate the state, for example, but uses the page as the contain. And frameworks like 11 T Astro or Fresh are some of those frameworks that are promoting those mechanics.

One other framework I really like lately is enhanced that dev is a web standard based HTML first framework that goes [00:30:00] far from. From the concept of progressive enhancement because it says, let's use HTML where possible and just inject hav JavaScript whenever strictly necessary. And let's try to also use the F W A or functional web application approach.

To upload any JavaScript or actually execute any JavaScript in pure serverless functions. Then we have also. Quick, which is a another HTML first framework, but proposes that instead of hydration that we explained before, let's do REMA re mobility. So re mobility is basically, if we. Before we're serializing only the state and shipping it and bootstrapping it.

After we have loaded the full page, what we're going to do now is we're going to serialize much more. We're going to serialize also the handlers and basically any JavaScript that we can execute. On [00:31:00] the server side. We're going to execute on the server side, and we're going to send the results of that execution, also serialized over the wire and pick up where the server left.

Implementing these patterns requires a shift of our mind completely. If we have been front end developers for many years and we're thinking client side exclusively, now we're going to have to start thinking more about server side execution, server side patterns and servers in general. And the idea is that we optimize.

The performance in the front end side as much as possible by, for example, moving all compute and composition to the cloud. We have the possibility to do it on edge functions, for example, or on origin functions. We have to also be careful. because there is a lot of hype and not all [00:32:00] our application workloads require execution at the edge.

Some are perfectly fine executing, even with a little bit of call start. So this is something that when we are designing how we're going to solve our particular use case, we also need to keep in mind. And why? Because while. Again, some countries have already deployed availability for protocols fast enough to handle execution at the edge and composition and very fast incremental deployments.

Many of your users want have the ability to. Benefit from these type of architectures and these super fast protocols. What we know is that the coverage for 4G will be one at a hundred percent only in 2027. And the 5G is globally available only in a 25% of the countries of the world. [00:33:00] Again, I think I'm a little bit over time.

I don't know if. If I can go on for another five minutes, but basically leveraging what platform APIs that have a correspondence in the realms of cloud, cloud native technologies like for example with patterns that implement publication and subscription or streams of data is the way to make your applications much more efficient and have.

Not only but maintain less code on on the application side. And this is another prediction, hot take I'm going to make very quickly. That front end will be a lot more short-lived in the future, and this is going to be the result of. Faster iteration cycles for teams and ever-changing dynamic tooling and infrastructure support that are going to make front ends become a more, much more dynamic [00:34:00] and living thing.

In the past we were for months perhaps developing applications until they saw the light of the day. Right now, we know that we are going to be deploying an mvp. Fastly iterating over it and that front end may. Completely mutate in shape, in functionality over months to become something completely different.

But what is not going to be ephemeral, like this is going to be the APIs. APIs are going to become robust and the key element to enable this distribution and this composability. and we have to be really careful on choosing the right a p a pattern to specify before executing, reducing payloads using headers for caching, and in general, learning to benefit from the infrastructure because we can use a API gateways, for example, to consolidate our API strategies and have a [00:35:00] much similar way of composing.

Micro front ends or compostable front ends. And very quickly the data modeling that this is something that we're also going to have to learn to have a, an end-to-end unique solution because it may be that. One of your compostable front ends, the data model that is using may be more compatible with a database model than another one.

And because we can, again, consolidate at an API gateway level, our APIs, we may want to have. Different types of of databases mapping to a different front end and being consolidated at the endpoint level, much lower in the infrastructure. So let me put everything together in a slide for you to make a photo, and this is the end of the presentation today.

If we are building composable architectures [00:36:00] we know that the APIs are the core of our system and users are our number one priority, and we need to start thinking about delivering solutions that may be completely decoupled. May be completely managed, developed, and deployed by different teams, and then re orchestrated or composed on top of the many.

New infrastructure solutions that are emerging. If you are worried about putting all that in place in your local development environment you also have to know that there are many solutions that allow you to develop in the cloud or even containerized everything in a very simple way. So you can have all those pieces working functionally in your local environment and.

and basically all you have to do is again, make sure that you code your application and then with the click, you're probably going to be able to publish it [00:37:00] in the cloud. So this is everything I have right now, but if you want to know more, again Luis mentioned, you can visit micro front ends at Dev and.

More about composability, micro front dance and cloud Native and serverless. Thank you 

**Brian Rinaldi:** thanks, Natalia. That was amazing. You covered so much. That was a note. Yeah. I think it was a perfect start to this conference because be, because you introduced a lot of things. We're gonna be talking in more detail about over the next couple days. You brought it all together and I think.

One of the things that struck me, I dunno if you're like, remember sometime, or I think it was around July, the official JAMstack definition got reworked. And I think it, it's much more in line with what you're presenting here, which was like we got rid of a lot of the talk of about just pre rendering and that kind, and a lot of the things that were tied to pre rendering and talking about this [00:38:00] decoupling.

So I think it really fits with that new definition of what JAMstack is. 

**Natalia Venditto:** Yeah, absolutely. And I think this, oh yeah go ahead. Sorry. No, go ahead. 

**Brian Rinaldi:** Go please. I wanna hear 

**Natalia Venditto:** this is, yeah this talk comes from an actual experience back in the day when the jam stack was not really a thing yet.

But we have the. More modern frameworks, and we were working in the context of a very monolithic application. And I always bring this example one of the project owners, they said oh, have to have a landing page and we have to have a block capability, and we need to have it.

Tomorrow and we didn't have all this infrastructure, we didn't have this static side generator. So well developed yet, and we came up with some custom solution that very much resembled this. But this definitely was an experience that, that, that told me, okay, when you, even if you are working [00:39:00] in enterprise, when you have to solve a very specific use case, you don't really need to.

To feel limited and constrained by the more massive application that you're dealing with. And that's what happened. We had a dedicated team that put that together. And we back in the day deployed it to object storage, and it was a little bit of a workaround with it, but it worked. And now we do have the dedicated infrastructure to, to bring these solutions to life.

So I hope that everybody's is learning to leverage them. Yeah. 

**Brian Rinaldi:** I just wanna remind folks that like you can, we still have a few minutes, so if you have questions for Natalia, please post them and ask a question module and we will try to get to them before we finish. I have a follow up question, which is okay.

You mentioned things like Astro Eleventy fresh Enhance. Edge functions, like Okay. Where it's a lot, I think, and I can, I feel like some developers might get overwhelmed by the, [00:40:00] this, the amount of new tools and things that they have to look at. Where would you, if you were telling somebody, okay, where would, how do I choose, where should I focus my time right now?

Like where would 

**Natalia Venditto:** you.

I think that I would start by looking precisely at frameworks. Have folks behind that have been for a very long time trying to solve this user experience problem that we've been creating ourselves as front end developers for many years. And that's those are those frameworks that are very HTML first oriented and that try to really connect the dots between your own custom development and all that is available.

In the ecosystem, in the browser itself, right? There are so many APIs that many front-end developers have no idea about because they basically don't use them. So now we have frameworks that really [00:41:00] promote the idea of let's use web platform APIs and let's try to reduce the amount of JavaScript we. To the customer, to the end user in this case.

And I think that I would start there by trying to be efficient at the time of using whatever is in the context where my application will be consumed by the users and what do I have there to make my code more slim and more perform. . Yeah. I think 

**Brian Rinaldi:** This is in line. Yeah. This is in line with something I've been pushing myself, I think.

And I, it's exciting to see a lot of new tools offer this because, like Astro felt kit, enhanced or going in a very new direction where I felt like we, we threw, not to throw react under the bus, but like we threw react at every problem. for a while, and I, it runs into some of these problems that you brought up about does [00:42:00] that application perform on the devices that people are connecting with?

And it's, it may be good for certain use cases, but these tools, I think what you're saying is, yeah, definitely take this and apply it to small section. We don't have, it doesn't have to be the solution for the entire site. . 

**Natalia Venditto:** Absolutely not. This is what I'm also promoting that you try to solve each problem independently.

If. Possible there are new patterns and new mechanisms to them. Bring it all together. And it's by no means simple, right? I'm not saying it's simple, but there are other aspects of complexity that are removed and maybe you want to focus more on trying to, again, architect for the user and learn these new ways of satisfying the, whatever per performance budget you have.

Establi. in your team. 

**Brian Rinaldi:** Absolutely. So we did have a question from the audience and I think it fits with what we were talking about that it doesn't have to solve for [00:43:00] everything at once. So does decoupling also work for existing systems? So I think if yeah, definitely saying yeah, for an existing application, 

**Natalia Venditto:** Yeah, definitely.

You can either start from scratch with the idea of decoupling, like creating from zero, a decouple system. But I think where we see the most decoupling is where we already have an application, like a legacy monolithic system, and we say let's sit down and identify what are those. Parts of the UI that could be separated and still consumed from one api, that it has an endpoint that may also be consumed by other parts of the application.

But if we have this deployment exist independently, it won't it won't cost like the whole application to fall down. So we start identifying these stream. Inside of our application and we start [00:44:00] separating them. And obviously it'll require that you have some form of AB testing or that you may have both applica, both, the coupled and the couple part coexist for a while until you finally shut down a capability in the context of the monolith.

But it's definitely possible and it's something that we see very. Yeah, for 

**Brian Rinaldi:** sure. I think a lot of teams are doing this. I know even at LaunchDarkly our blog is one application. The front end website is a different application. The actual dashboard is a different application docs.

So like all of those pieces are different applications that Some of them use the similar tools and others actually use different tools to be built. So I don't think it, I won't be curious to know maybe people can comment in the chat like, is this something you all are doing now? Cuz I think it's becoming 

**Natalia Venditto:** more common.

Yeah I don't work right now in application development. But I [00:45:00] did so until 2021 or so, and we were already doing or practicing heavily this kind of vertical split. And this is because again, the ways we used to, for example, do authentication. Or identity of users and services in the past was very much coupled with the business logic and now it's typically also another service.

And when we start removing services from the core of an application and going in the microservices direction, it allows us to decouple with a lot more freedom and a lot more flexibility as well. Yeah.