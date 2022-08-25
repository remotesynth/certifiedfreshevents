---
_build:
  list: false
  render: never
---

**Brian Leroux:** [00:00:00] Thanks for having me. I'm very stoked to be here and really appreciate the chance to talk about this stuff. This is. My favorite topic by far. I love talking about building web apps. I love how the art has changed and Mo modified over the years and how it's grown. The original title for this was, is functional web apps, the revenge of dynamic apps, but the process of writing this talk, I realized.

There's no intervention. This is just the future of something we're already doing. So with that we'll start digging in. Oh, a little bit about me. You've already said all these things, so I don't need to reiterate them too hard. I've been doing web development for a very long time. And if you wanna rant at me, you can find me in these places.

So before we get into what a functional web app is, let's talk about what a dynamic web app is. The. Considerations, the dynamic web app is not static. It's rendered on demand and it's not just HTML that gets rendered on demand. It's also JS O [00:01:00] and we do this all the time. Every API that gets built out there is probably a dynamic app it's gonna be talking to a database will be full stack it'll return data.

Immediately. And this doesn't mean it can't participate in things like caching. This is CDNs were originally for this use case. So this is something we're still doing very common. And typically we call this a three tier architecture. The reason we call it a three tier architecture, cause we're breaking up our concerns into three different parts.

Sometimes people call this NBC for model view controller. I like talking about it in terms of presentation, logic, application, logic and data access logic. The presentation is your view code. You wanna have that separate from your application or your business logic, cuz in theory the business isn't gonna change as much as the UI and then your data access layer is gonna hide your database internals from your business logic, layers implementation.

So if you have an entity, for example, Shopping cart would be a good one. Shopping cart might be a [00:02:00] table and it might have another table called shopping cart items or something inside your business logic layer. You wanna have a completely shopping cart centric experience. You wanna be query and joining tables and stuff.

So that's why we separate those concerns and the traditional dynamic app ACAP ecosystem's huge. A any runtime or popular language or library place is gonna have one of these. I like talking about rails in this world specifically because rails is probably the cleanest implementation of NBC out there.

It's literally NBC. So they have a action view is their presentation layer, their view layer action controller, or the routing layer is their controller layer and active record is their database access Slayer their data layer. And that's a logical architecture. So this is how we organize the code on our disc in our source.

The physical architecture of deploying a three tier application turns out to be a little different than the reality in your source code. And [00:03:00] this is probably actually a very generous way of looking at it. If you've built one of these before in the past, there's a few more boxes and a few more arrows, but this is roughly what ends up happening.

We'll load balance, the suite of web servers so that we can handle the traffic that they. And they'll typically be talking to a database server and a cashing server of some kind to keep things fast. All points of this themselves can scale horizontally. And where this got messed up is when we were deploying, because our logical architecture is really only going into one of these web servers.

And then we repeat it for every web server. And if we're taking on more and more traffic, we're gonna have to have more and more web servers. Which means that we're gonna have more and more places to deploy to. And if something goes wrong, we'll have to roll back each one of these web server one by one.

And so that's a big problem. The other big problem in here, there's lots of stuff that isn't inversion control. And so originally places like Heroku said, Hey, we'll take care of that part for you. It's [00:04:00] infrastructure is no code. You write your application in a certain way and all these other magic parts will happen for you.

Over time that didn't really scale. And so tools like Ansible puppet chef came around and they were called configuration management tools at that time. And those would let us check in some kind of manifest or artifact that would describe the infrastructure dependencies we had. Eventually that evolved into a concept.

We call infrastructures code where we're declaring our dependencies the same way we declare our code dependencies and package JS on. We would declare our cloud dependencies in something like Terra form, cloud formation. And that way, every time we deploy, we get the thing we want. We're not having to like, wonder about how these things get provisioned or how we reproduce this environment.

When we deploy. Like that's a whole bunch of problems, right? Like we got this three tier logical architecture. It has nothing to do with the physical architecture. So this makes deploying hard. Stuff's not versioned slow. It's difficult to scale horizontally [00:05:00] HTML from traditional databases.

Rendering can be slow. It's not always slow, but it can be. Maintenance cost is huge. Each one of those servers needs to be patched. You have to update it. You have to debug it when things go wrong. Not if things go wrong, when things go wrong. and that's always been the. The other part about this is there's a lot of tasks that have to happen in the background.

When you're building these types of applications, you're gonna need primitives for doing queuing venting, like pubsub or tasks that run on a regular schedule. And none of these three tier architectures really take that into account. And so you end up bolting this stuff on the side and it gets clunky.

And this is where the jams stack came in. And the idea here is that we're gonna build a totally static artifact by pre rendering everyth. And then we serve it via CDN and any JavaScript or any dynamic functionality is gonna be done by JavaScript at runtime, which is great. Cause we all love JavaScript and it's cool.

Cuz the deployment is mutable. Nothing's really changing. [00:06:00] We're just gonna mash all our code into this one artifact and it's gonna be the same everywhere. And this is also great. Cause we get to outsource undifferentiated, heavy lifting to a provider that does something that we maybe don't do as a unique offering for our business.

A typical example would be like O zero for my authentication. I don't want to handle that someone else should O zero does that for a job. So we can just outsource as much of that dynamic functionality as possible. And that comes out to be a pretty clean architecture fact. If you look at this closely, you'll notice it's a two-tier architecture, which is really interesting because that was the original kind of architecture client server for all of our logic and clients.

And then we talked to servers for our data. So that's pretty cool. The gem stack, physical architecture turns out to be a little bit different, but pretty close. So we end up mixing our presentation and our business logic in one artifact, and that goes to the client. And then we use the network to talk to these other services for our [00:07:00] back end and that's okay.

We are just deploying this part here, which means that these parts aren't in our version control or in our controlled. So that's a little bit problematic. We might have seen that story before in early rails. So these are just trade offs. This isn't a judgment of good or bad. This might be fine in your case.

So I'm not admonishing anyone. We build this way sometimes ourselves, but. You first problem is you'll have slow builds and the builds are not gonna get faster. As you add more code, the build gets slower. And so if you're starting off with hello world, and it's quick, that's great. You add a thousand pages stuff gets slower.

There's not much you can do about that because more codes just gonna take longer to compile that one artifact. The bigger issue for me is that you end up having dynamic functionality hide behind a spinner. So anytime we gotta do something dynamically or personalize the experience for anyone, it's gonna be a second class citizen to that initial load.

And so that's a bit [00:08:00] problematic. The final sort of problem is that a lot of this stuff is being glued together in an ad hoc fashion. There isn't one single. Distribution of the system that we're building and there's asymmetry between the code and the infrastructure. It depends on we're outsourcing a whole bunch of work, which is great, but we're still responsible for it.

Our customers, aren't gonna call us zero something wrong. They're gonna call us. So that's just worth noting. They're just trade offs. So the functional web app is a different approach to this idea. It's HTML first, which is saying that we will do dynamic personalization with progressive enhance. Making accessibility, the priority.

It's a cloud function centric model, which is a way of saying that the entire system is composed of pure functions from front end to back end the entire thing. This is nice cuz now your whole system is full stack. You can do everything that the functions can do, which is most things. Another component of this is databases are on demand.

We don't need to deploy RDS [00:09:00] instances if we don't want to, we can auto scale. We can guarantee millisecond latency and that's pretty nice. So we don't have the database bottleneck and that's the final thing is declared a deployment where we're using infrastructures code to explicitly define what our cloud infrastructure resources are when we deploy them.

So the logical architecture of what I just described looks like this. We're putting our view in our control logic and cloud functions, and they're talking to a data access there. The physical architecture of a functional web app comes out very simple. There's a high degree of symmetry. There's still CDN.

There's still static assets. You can still Babb our web packs if we want to. But you probably don't need to, and all this functionality can scale that horizontally beside it and talk to a managed database. The real beauty is your deployment is the entire thing. So you get one declarative, fully deterministic artifact, which is really nice.[00:10:00]

If you look at these side by side, you can see which parts are being deployed, which parts are talking to a database. You're just gonna get a better initial experience with this kind of architecture. Functional web app has a few key advantages. So the first big advantage is this is more powerful.

You have the full stack available to you and it's all in one place. The second thing that I think is probably the most important is it's more fun. I believed rails when they said it would make me happier and I was happier riding rail. But it wasn't fun. and when we're building applications and focused on unique business logic and not maintaining a bunch of dependencies all over the place, it turns out to be way more fun.

You're just moving faster and you're shipping. You're not treading water, trying to keep things up to date. You're not dealing with breaking changes. You're not dealing with unplanned work due to breaking changes. You're just shipping and the final bit here, probably the most important part to me.

Truly is that this is an inclusive, [00:11:00] fast, accessible web consumer experience. By default, we're not gonna hide dynamic content behind spinner that may or may not load. When I'm talking about this architecture to people, I get a few common sort of points brought up. And so I want to address those of the gate.

First one's always cold. Start about cold start cloud functions. We've known this since 2015 or so correlate to the cold start correlates to payload. Bigger, the cloud function longer, it takes to start up. And so the solution to cold start is to write small functions, small single responsibility functions.

You really don't want to have more than five megabytes in a Lambda function. It'll keep it subsecond. And usually it'll actually load in around 200 milliseconds, which is completely acceptable performance. You have cold starts going over a second. Your line. Function's probably just too big. If that doesn't help you can.

Pre-provision. It's defeating the purpose of being stateless on demand. There are solutions for this[00:12:00] and chances are the problem is self-inflicted. If you have a cold start, the database story is still emergent. There are only a handful of on-demand auto scaling databases. I'm gonna have to modify this slide.

I forgot to put Fama DB in here, which is bad, cuz they were just gave a great presentation, but fauna, dynamo, cosmos, planet scale. These are all great options. They're all guaranteeing great performance, no matter how many rows they have they're all. Multi-tenant you don't have to think about your data lit anymore.

And I don't want to, I just wanna write it. Declarative infrastructure's code can be accused of being complex. I fully agree with that assertion. I think cloud formation is a bit of a nightmare to write. We've written our own declarative infrastructures code thing called arc codes where we get the complexity really bit back to, a 10th of what you would see cloud formation sometimes even better.

The last point is salient and it's, I. If you're gonna go all in [00:13:00] with a cloud functions provider that means you're going all in with that provider. These things are not very portable yet. The standards are still new and Azure function is not a fire based function is not a Lambda function.

It's not a CloudFlare function. And maybe that's bad if you're a primary goal is to be portable. You may want to consider running your workloads on Kubernetes and deploying rails instead. If you want to jump into the future here, though, this is definitely the way to go and it will require you to pick a vendor and go with them.

Choose wisely for my money. Amazon's pretty good. Appear to be around for a while, seem to know what they're doing. Good SLAs. So we're not really worried about them disappearing or raising prices or pulling the rug on me with breaking changes. Those are things that will not happen. So I don't think it's a very rational argument to say, it's bad to walk into a vendor.

This is a growing ecosystem and it's new. But there are probably hundred. Of providers, if I'm being really honest, these are the ones that we hear about all the time. If I'm missing someone,[00:14:00] let me know, but there's lots of ways to go about doing this kind of architecture. The big key is that we're starting with cloud functions and we're progressive enhancing on demand.

HTML. It's not just me saying this either. This is happening all over the place. These are links. I will be sharing this presentation so you can check this stuff. Whoops. Hey BBC's built this way. Cloud grow is built this way. They're pretty interesting. They just had a huge exit bustle magazines built this way.

begin.com is built this way. So it's very doable with huge workloads and quite fun. The static app thing has been great. I love it. I think it's fine for inert content, but as soon as you're starting to go dynamic it's time to take a look at this type of architecture. I believe personally that we should be looking more closely at HTL first in progressive enhancement.

For the most accessible experience. I think a cloud function centric model is well overdue. I think managed [00:15:00] databases have proven themselves to be very good and useful. And infrastructure is code is just table stakes to me if you're working with the cloud at this point. So these are the key points and practices.

If you wanna try this out pick your providers and give it a hack. And I would love to talk about it. If you do I work on an open source project called architect. You can find that on GitHub. We deploy architect apps@begin.com. So check that out and yeah, follow me and rant at me if you'd like on the Twitters.

Wow. That went really fast. That was it. Thanks,

Brian.

**Brian Rinaldi:** Waiting for the screen to update. Now I see Brian twice. there we go. Oh, wait. Now you see Brian twice. Anyway, before I saw you twice now. Still too Brian's but can't have enough Brians. This is true, unless it's with a, why? No, Brian's with a

**Brian Leroux:** why?

Sorry, those ones are evil. I've heard

**Brian Rinaldi:** oh, that was really interesting. I will admit as you and [00:16:00] I have chatted before I've been in the jam sack space for a while. I. my feeling was like some of your, the difficulties you mentioned are legitimate.

I know, like for instance, we were talking about build times in the chat here and build times. It's such it's one of those issues that is so glaring in a way. As JAMstack has expanded out beyond say just your kind of hobbyist audience and things like that to like really big companies building, enormous sites that it's become such an issue that like we have now competing solutions out there trying to fix this like incre Incremental builds and DPR, which is Nety and ISR, which is

**Brian Leroux:** next J distributed, static render and incremental static render.

Yeah. Yeah.

**Brian Rinaldi:** Yeah. I think that's legit. But I guess I'm curious kenny, can you gimme like a brief, how would it the difference between like building, am I still say using next JS or what am I, how am I building the [00:17:00] front end? Is that, is it like completely different and is, am I think that's up to

**Brian Leroux:** you.

I don't know that next JS is capable of progressive enhancement, but I imagine react is, and. And I don't think it's an either or right. If you're building an API, you're not pre rendering anything. Very large portion of your functionality is already being built this way. Even if you wanna just still pre render your whole front end and all your presentation and business logic into one thing, that's fine.

I, what I'm advocating for though is we should. Start considering that a lot of the solution that we have right now, or for problems we no longer have. So the jam stack approach is good. It works. It's great, especially for a Merc content, but for personalized content, it's not very good. And it's okay to say that We can do better. And I think from an accessibility standpoint, we have a responsibility to do better. We're all pretty much in agreement out there that the web is not improving so much as we thought it might. Payloads are getting bigger. Accessibility is not the [00:18:00] primary concern that it used to be. So yeah, the developer experience is getting worse.

We're slower and slower builds, but even more important than that the accessibility of our sites is not as good as it could be being greeted with 10 spinners while suspense renders itself out is. Is not preferable to getting the experience that you could get immediately with HTML first. And it's not just it's not just one way of doing things.

Astro is a new static site generator. That's pushing this idea of progressive enhancement in islands architecture. Similar thing. I'm just looking at it in compute, dropping to zero cold starts dropping to zero. Why am I running a build? What is that getting me exactly. It's getting me an artifact that has no relationship to the way it's being deployed.

So that's a thing, and it's okay. I'm not saying there's one way to do things. I'm suggesting though that there are other ways and that we should explore those.

**Brian Rinaldi:** And so in this case, like my serverless function is returning.[00:19:00] Is it at some point it's returning HTML back and then hydrating the that's what we're.

So instead of basically being an API returning JSUN, and then we're doing this on the front end, we're doing it on the server and then pushing.

**Brian Leroux:** yeah. And even reacts moving this way with its server components and I'm glad it is, I think that's how it should work. We, we don't have to have perfect symmetry necessarily between client and server components.

The server. Doesn't have click events or load events or touch events. The server does have data and it could load that initial render a lot faster. And we'd been doing this for a very long time. Lots of application architectures still do this day, github.com for example, was it progressively enhanced application?

So why not take those ideas now and apply that to cloud functions is the question. I'm putting forward with evidence and other people who are already doing it. So that makes sense. It's yeah. And it's not an either, or I think a lot of apps are gonna have a lot of [00:20:00] static content.

You know what? You should use a static generator for that stuff. If it has a lot of dynamic con like, imagine if GitHub is pre rendered, it wouldn't make much sense. We would just have spin around everywhere. No. Yeah. And that's okay. So it's not neither, or it's more of like a use case specific thing.

If you're building something dynamic, you should probably consider, an HTL first progressive enhancement kind of thing. Argument against that would be well, servers are slow or whatever, and good news. We don't need servers anymore, so it's fine. Yeah. That makes sense. And databases are slow.

Good news. They're not anymore. Dynamo DB. We can get 300 megabytes of throughput per second. And the free tier. It's a, the future is here. It's just not evenly distributed yet. Yeah.

**Brian Rinaldi:** And I've toyed with some ideas around this and I guess I haven't really dug into it enough.

One of the things I still think, a lot of content ends up being like, it doesn't change that often, honestly. And in those cases, I think you, you would re pre render that regardless, like there's no point hydrating the contents of [00:21:00] your, of a blog post or an about page or, any of this stuff, box site. Yeah, totally. Yeah. So a lot of the web still ends up being but I do feel. Like I toyed with a, say something like a CloudFlare functions can then alter at the edge, right? Like I can actually add your login information, your personalized information.

I'll handle that in a CloudFlare function. That's run at the edge that you totally, so you don't even net notice any difference, right? Like in, as far as you're concerned, this didn't wait to the client to get loaded in. It got loaded in before it ever. Is that kinda

**Brian Leroux:** consistent wishes and can talk to totally.

Yeah. So like a CloudFlare function talking to durable objects. Is that what they call 'em? I, yeah, I don't Booker objects. I can't remember. so they have a database solution or key value store. Yeah. They have a functions solution. I don't think they have an in infrastructures code solution, but I know Terraform supports them.

So you could build a functional web app that way, you could sure. User Terraform to deploy your edge functions, to talk to their edge database and. [00:22:00] Off the races. And depending on the use case, that might make a lot of sense, especially if it's layering in a shopping cart on top of your statically rendered shopping website.

Yeah. That would be a great use case. And it doesn't have to be in either or, the CDNs probably gonna sit in front of any of these things anyhow, so we can tune it. And the the CDN can, it's almost more powerful with cloud function cuz we can set the headers on the way out so we can give the casher, some kind of intelligence if we wanted to, instead of just cashing things forever.

**Brian Rinaldi:** And I only brought up cloud for functions in particular because I think when I've toyed with AWS, it doesn't actually allow you to modify the Dom. If I remember on the way.

**Brian Leroux:** Oh, they're it depends. They have a few ways of playing with the do. their new cloud front functions.

Can't they can only modify headers, right? Lambed edge. You could write a whole, do thing you want. The lambed edge is running the Lambda [00:23:00] function at one of the points. One of the cloud front points of presence, which is supposed to be faster if you have a function in a region and then it's behind a CD.

That's still gonna be really fast. It's, we're talking hundreds of milliseconds difference. And I don't think in many of these static apps, we're building a real time MMO. So like a hundred milliseconds. Isn't really gonna matter that much, but I see that it isn't four or five milliseconds, which you can see right at the edge.

As a human, I, I. See you think or read that fast personally, but yeah. Pick your poison, and this is also the good news. There are lots of ways to do this. This isn't like a particular vendor. If you're in the Azure ecosystem, there are very good options. Now there, if you're in the AWS ecosystem, obviously that the market leader, cloud flares turn into gears on all these guys and they're like a nichey player.

Who's. Kind of leading the product charge in a lot of this thinking and there's outliers coming up now, too demo [00:24:00] deploy. I would be remiss not to mention that which is like CloudFlare workers, except for it's the new demo run time. That is extremely compelling to me because it's basically a browser that runs in your terminal.

So this dream of having this code that runs both in my browser in my back end is rapidly coming. And yeah, I think there's gonna be a whole variety of these things bef we're not gonna see a consolidation down the one run time. There's gonna be bunch of these things before. There's a few of these things and that diversity is a strength.

People can choose the providers that make sense for them and build the app that best works for them. Yeah. Just violate this and underscore it. The first thing that's most important is we gotta get back to accessibility and back to rendering HTML first, like this client render spin around the thing is it's not cool.

Yeah. And

**Brian Rinaldi:** actually getting to the questions from our audience here. One of them was on accessibility, says, Nick says, in terms of accessibility and making it progressive in the context of [00:25:00] JAMstack would use a serverless function for a normal form post. JS disabled. If so, how does that work since it's JS stack and you can't really do a full round trip with a page refresh?

So I'm not sure. Does that

**Brian Leroux:** make sense to you? It's no, but I'm in the AWS ecosystem. So let me tell you how I would do this. I would set up an endpoint behind API gateway that responds to a post and. That's how I would do that. And it can come back to the client. I don't know. I thoughty supported all the verbs.

It should, if it doesn't, they do, I assume you could post to your own function. I know that they give you weird URLs. So you're not provisioning with in first codes. So you get these. Compiled out URLs that are strange, but you could use redirects dot Tomo. I think it is to reap things back to the human readable things.

And yeah, I acknowledge a lot of the current generation tools [00:26:00] have lost the plot a little bit, and aren't really designed for progressive enhancement of the gate. That is a fact. And I think once you get into doing progressive enhancement, you'll quickly realize that it was a lot easier to do a form post and a redirect than it was to try and build all that logic into your client.

and you can still build all that logic into your client, right? There's no, this isn't in a mutually exclusive situation. In fact, this is a more resilient one. So JavaScript's gonna fail. There's an accessibility argument, but fuck that. Let's just talk about like when your JavaScript fails, cuz it's going to fail when it fails.

If you're relying on client render, that's it game over your user experience is done. If you progressive enhance. Your whole app works. And then if the JavaScript works cool, you just took over the experience and you can do whatever behavior, client side that you want. So it's not an either, or it's an end also.

Whereas if you go fully client side render route then it is mutually exclusive. You've opted to have a less accessible experience.

**Brian Rinaldi:** [00:27:00] Okay. That makes sense. So Nick also asked, I've never used arc.codes, but curious what the differentiating factor is from other competitors. Is it DX or more than that?

**Brian Leroux:** The first thing is it works locally. So for us, that was really key for our iteration speed. So anything you can do with arc, you can do it locally. So you don't need to deploy to Amazon or have an AWS account to give it a try. Architect is designed for building web apps where a lot of Sur stuff that's out there has been designed for building for the cloud.

And there's a lot of use cases for the cloud that have nothing to do with web apps. So if you're building a web app, you're gonna want things like middleware in session and Blanking like eventing needs to be built in first class. It can't be something that's on the side. You're gonna want to have access to, the key primitives that you're gonna need to build that web app, which is gonna be static assets, cloud functions, and some kind of managed [00:28:00] database deployed by infrastructure is code.

And that's really what architect is. And. You can do a lot of this stuff with other tools, but because they're not designed for the use case of a web app, you're not gonna have a local development experience and you're not gonna have these affordances for web developers, like session and stuff built in necessarily.

**Brian Rinaldi:** Cool. Yeah. I re you know, that reminds me about four years ago, you came and spoke about architect on CFE. I did. Yeah. Yeah.

**Brian Leroux:** Yeah. This has been a long journey back then. Serverless was crazy. Yeah.

**Brian Rinaldi:** yeah, I know things changed quick. So Paul asks, if you're trying to create a web app running from scratch today, let's say it starts off as a form.

Calls external APIs for topics and create form says threads from what new solution would be fun for you to try out. Okay. I guess he's just looking for ideas on to help him build out his form or. [00:29:00] Yeah,

**Brian Leroux:** I always like to take these types of things for a spin with a credit app.

My, my classic is right now we're working really hard on trying to figure out how to do server render for web components. And our first stab at this was to build like just a single page app and it worked, it was great. We were really excited and we're like I guess we're gonna have to try and talk to some data now with this thing.

So we built a credit app on top of that, and we learned a whole bunch about like web components in that process because of, our credit, app's really gonna show where the seams are. So we built like a to-do list type of thing. And then we were like okay, we got web components figured out we got the rendering client server.

That's great. But a lot of what we do in our app is web socket based. And so we're streaming events and then we're rendering the UI based on those events. And so we've been experimenting by building something that does that, and it's changed our perspective a fair bit, but mostly on the data management side.

And so this is a bit of a ly answer, but I think you wanna pick use [00:30:00] cases that are gonna really exercise the types of functionality that you want to try and achieve. If you're building a contact form, I have no idea why you're using react. Just, post write that to a database like, like users don't care.

And, if you're building an interactive space war game that's rendering mostly to the canvas. and yeah, web sockets are gonna be a thing for that. And how are you gonna orchestrate the data events between those things? And those are entirely separate use cases. So it's worth giving yourself some tough problems to work through.

HTML forms are really powerful, and I think they're underappreciated for what they allow you to do. Yeah, I would just build something. Yeah, I agree with you and,

**Brian Rinaldi:** See how it goes. Like on that note we, the, the other day I saw an article that had made really dismayed.

It was talking about taking your static, HTML, and converting it to a react app. And I'm like, but why.

**Brian Leroux:** Maybe there's a good, if you're, unique interactivity,[00:31:00] wanna

**Brian Rinaldi:** learn, react. I'm just like, but I do think some of the basics just work and I'm not dissing react.

I just, I feel like we just have lost that differentiation between when it's a good idea. And when it's not a good idea, it just becomes oh, I'm starting a site. Let me bring all this.

**Brian Leroux:** Yeah. And not to Dogpile that idea too much, but like some of the new stuff that I've been playing around with seems a little better for reactivity in particular SELT.

It's really nice. And like the programming model for sculpt is really fun. They've thought of things like animation and transitions at first class into the framework. And, if you do have one of those UIs, it needs to do, heavy transitions and animations and a lot of client interactivity yeah, build it that way.

But if you're building a form blog doc site or landing page, You probably don't need to need JavaScript and why opt into work? We all want to go home at five and we don't want to [00:32:00] spin our tires, maintaining a type script config for something that has no client interactivity doesn't make any sense at all.

Yeah. So it's to choose your battles kind of thing. Yep. Absolutely.

**Brian Rinaldi:** This was a really fun conversation. I am. I'm curious to try this out, your kind of concept of this and see how this works. In actually building something with it. Thank you for inspiring me there and hopefully everybody else in the audience was inspired to, to go give this idea.

Try. So thanks. Thanks for coming out, Brian.

**Brian Leroux:** Thanks for having me. And yeah, let me know how functional web app building goes through now. I'd love to hear all the good, bad and ugly.
