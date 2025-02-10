---
_build:
  list: false
  render: never
---

**Nick Taylor:** [00:00:00] Hey friends, welcome back to another twofold two stack. I'm your host, Nick Taylor. Uh, this is the first one of the year. So welcome back. Good to have everybody here. Uh, okay. Let me just, uh, check something really quick. Okay. We'll get over there. Cool, cool, cool. So yeah. So what are we talking about today?

So let's just. Bring this to the stage here. So we're going to be talking about something called TanStack Start. And you may or may not have heard of this, but this is a project from Tanner [00:01:00] Linsley and all the TanStack crew. Um, basically my understanding, and I actually got to see a sneak peek of all this.

I was at Netlify Compose last year. I gave a talk there and Tanner gave a talk about TanStack Start. So, uh, he was, Excited to demo it and also talk about it. Obviously. Uh, it looks really cool, uh, under the hood. Uh, and we're going to dig into it, but the core of like any framework is a router and it's using tat and stack router, uh, which is a type safe router.

And it's not just for like, you know, you have a link and it's the URL. It's, it's everything query params, the whole gamut from what I've understood. So that's kind of a one piece of it and then you can obviously leverage anything TanStack in it. Um, we're gonna kind of just go through the docs and get up and running.

I've never actually started a project with TanStack Start yet. The only thing I'll [00:02:00] mention is it's still in beta, but, uh, I remember Tanner, I think he mentioned it at Netlify composer, or maybe he's mentioned it in, uh, when I was at open sauce on one of our, uh, uh, Twitter spaces, but, uh, it's in beta right now, but, uh, nozzles been using it in production, I think for like a year now, so nozzle.

io, which is where, uh, uh, basically all things TAN stack was born.

Just taking a sip of water, which I just spilled over my sweater. Also, it's kind of funny, I'm, uh, wearing a Remix shirt, but we're a sweater, um, but we're doing TanStack, but it's all good, it's all good. This is honestly, shout out to Remix, this is one of the best hoodies I've ever had.

Cool, cool. All right. I think I might have water on my face still, but that's all good. That's all good. So we're just going to get started [00:03:00] and that's, that's just kind of what we're going to do. Um, we've got, I've got about an hour here, so we're going to see if we can go through as much as possible. And if we can't get through it all, we'll just do another stream.

No biggie. So I'm going to, I got my terminal over here on the right. So VS code open, just going to make that a little bigger. Okay, I think, yeah, that's good. I think everybody should be able to see that. So we're literally just going to go through the get started and, and just see where we end up. Again, I've never used hand stack start aside from just hearing about it.

So, uh, I know they have great docs in general, so I feel like this should be smooth sailing. Um, Also, I know Tanner mentioned, if I just go on X for a second here, uh, yeah. So Tanner was saying there was a bug in the latest version. So I was like, okay, I'll use that version, but then it looks like they fixed it.

[00:04:00] So we're just going to grab latest. So let's go for that. Cool. Cool. And let's just take this down. Awesome. Cool. So, yeah, so. I'm not going to read like literally all the docs, but like I was saying, it's a full stack react framework powered by 10 stack router. And so stuff that that gives you is you get full documents, server side rendering, streaming, you get server functions, uh, bundling, uh, and lots of, this is just built on open source, right?

Uh, so V and nitro, and I'm not positive. But I think they might've pulled out Vinci, which is another open source project that like a solid start uses from Nikhil. Not positive about that, but, uh, we'll, we'll find out, or maybe we don't need to dig into that. Um, so like I was saying, the router is type safe and I'm going to bump this up a bit, just so [00:05:00] people can see that a little better, except I'm zooming in the stream yard window, not this one.

Uh, cool. So, yeah, so like we'll, we'll see this as we create an example, but basically once you have the router in place and then use the link component, if we put an invalid route, you're going to see it right away. It's just like, it literally won't compile. So that's pretty cool. Um, there's a bunch of other things here, nested routing, layout routes, uh, built in SWR caching.

So stale while we validate. And it looks like it's built to handle client side data caches. Yeah, 10 stack query. Cool. Um, okay. Route prefetching. All kinds of goodies in here. So, uh, let's see here. Yeah, so Nitro and Veep bundle the app. And you get a unified API for server side rendering, streaming, and hydration.

That sounds good. Um, Again, I'm not going to read literally everything here, but, [00:06:00] um, basically here's the why should you use it. So full doc, uh, SSR and hydration streaming, server functions, type safety, robust routing and rich client side interactivity. Yeah. I like that. He's saying like, why wouldn't you use this?

Cause not. Every tool is meant for everything. And if your site's completely static, just don't use this as basically what I'm, I'm hearing. Uh, and obviously how it's funded. He's got a lot of awesome sponsors here. So give a shout out to them. Netlify, Clerk, Convex, Century, et cetera. All right, let's get started.

Set up a TASDAQ start project. You can use the quick example to rapidly learn as you go. Let's do that. Okay. So maybe, oh, I see. Okay. So that's the examples. Okay. Yeah. I think we want to build from scratch. If you choose quick start with an example or a template, you can skip this guide and move on to learn the basics guide.[00:07:00]

This guide will help you with a very basic 10 stack. Okay. PM in it. Why? Okay. This is like. Going full on like, like literally installing all the pieces and then update can fix. Okay. So maybe that's not what we want. So like, let's go back to the quick start. Um, okay. Play with examples in the embedded stack blitz to find the one that feels like a good starting point.

Okay. Got it. Got it. Okay, cool. So we could do basic and then. Other router examples, kitchen sink. Hmm. Wondering where should we start? Well, not start specific examples. These may help understand more about how TanStack router works. Let's see here. Play with the example embedded StackBlitz preview. Okay, yeah.

Once you've done this, [00:08:00] head back to the learning basics guide to learn how to use TanStack start. Okay, so first thing is, I'm just going to take note of this. Uh, this is more for the TanStack crew, but, uh, going to this 404s, just going to save that. And we'll just save this to desktop. Uh, issues. md. Uh, yes, sure.

Okay, so all right. Let's see. Maybe let's just go with a basic. Okay, so we can play the site is built. Let's see what's going on in here.

Okay, let's zoom this out. Maybe. [00:09:00] Okay, let's see here. Hey, how's it going Tanner? I was just mentioning, I took note of it, but there's a 404 for one of the links here. So if you go to where was it? So the learn the basics link gives a 404. I took note of it. I can open up an issue or if you squash it before I even get to it, go for it.

Um, so yeah. Okay. Cool. Cool. Yeah. I'm just wondering, uh, what do you think's the best place to get started since you're in the chat? Like I'm totally fine going bare bones. Um, yeah. Okay. Cool. Yeah. Thanks, man. Yeah. So I'm wondering if I should just like, I'm comfortable going literally. Bare bones, but can I still do the learn the basics with that?

Um, let's see here. Let's go back to getting started. Um. Yeah, you know what I'll do build from scratch. Why not? [00:10:00] Okay, if you chose a quick start, okay Yeah, so you want to build it from scratch even with type safe? Routing dynamics flat routes like those for markdowns and external source can still produce floral forest.

Yeah. Well Still salute salute to you for type safe router. Okay, cool. Yeah, I think I'm gonna go from scratch here So let's just do Make their 10 stack, uh, router stream kit. It's going there and let's just do NPM init Y cool. And all right. So we highly recommend using TypeScript. Yes, definitely. So let's do this.

Let's bring this up. a bit. Okay, let's close that. Cool. Let's do code TS config dot JSON. [00:11:00] Okay, let's just go ahead, copy this. All right, cool. And let's see, can I can't remember if I can move my console over to the right? No, I can't. Cool. And let's go ahead and install the dependencies. So it's all boilerplate stuff.

Uh, good old restarting TypeScript server. Okay. Let's clear this. That's saved. Okay, cool. Let's go ahead and copy this. So, uh, basically we're installing, uh, 10 stack start, uh, 10 stack react router and Vinci. So that answers my question that, uh, you are still using Vinci. I could have sworn. And I saw there was a.

Could have sworn you mentioned you were looking at maybe pulling out Vinci. I might have, maybe I'm hallucinating that.[00:12:00]

All right, cool. Uh, let's go ahead and copy this one. My internet's pretty fast, so this should go pretty quickly. Cool. Uh, all right, so now we're just doing ReactDOM and we're also installing the Vite plugin. Okay, gotcha. Cool. Thanks, man. Cool. All right. And let's add a little TypeScript. So we're just adding Type script to the project types for react and react on here.

And then I think we're going to update the V config or not package. Jason. Okay, cool. So let's just do that. Uh, let's hide this and let's do package. Jason. Oh, wait. I think I know what the problem is. I opened up my whole dev folder before. Hold on one sec. Let's just reopen code with just this project. Cool.

And we don't need that, so let's do package. json. [00:13:00] Cool. 10 stack router. Cool, there we go. Okay, so we just gotta update a few things. So, it's type module, we don't have that. And, let's see what else. Hopefully the former, okay. Okay, so you're slowly removing it from the inside out. Very soon you'll likely just use a vplugin or an official TSSCLA.

Okay, cool. Gotcha. Nice. All right, cool. So let's just go ahead here. So the package has to be a type module and we're just adding some scripts here. This is to just start things. And what did I miss? Oh, I already have scripts. Okay.

Where is the script? Oh, yeah. There we go. So basically using Vinci for Word. Just building and running the dev server. Okay, cool. So that's good. [00:14:00] And then we're going to configure the app config. So that can fit. Why am I seeing all these files?

Okay. Anyways, let's create an app config. So just over here. Close that code app dot config dot ts. Now you don't necessarily have to go through all these these steps I'm doing. Like he said, uh, in the docs, you can start off with the stack blitz thing. I'm just doing this for, uh, you know, learning. So basically you got the app config, which basically looks, uh, pretty much like the V config to some degree.

So, um, let's restart this. TypeScript server. Maybe that's why those dependencies. Okay, so we got to install VTS config pass. So, uh, if you're still in the chat, uh, Tanner, it looks like in the, [00:15:00] the guide I'm going through right now, you probably just need to add a NPM install the VTS config pass.

There we go. That should be good now. Yeah. Okay. So we got everything there. Cool. And then we're going to go ahead and add basic templating. So let me just close a few things here. And let's just look at this for a sec here. So basically, um, we're going to have some routes here. So you've got your app, and then you got your routes.

So like the route one, so this will be like your route layout. And then you got some other ones here, the, uh, we'll go through all these, um, These things are pretty obvious, I think, but, uh, I guess these, uh, this should be what we have. So let's see here. Let's go. So there are four required files for tenant stack start usage, the router config, the server entry point, the client entry point in the Ruby app application.

Okay. [00:16:00] So we're just going to go through all those. Okay. I think it's. It's good to just kind of go through this to just learn. So, uh, first we've got the app, so let's just do code app outer TSX and let me make sure is, uh, let's just save that. I just want to make sure that's the right structure. Yeah. Okay.

It's not under source. Okay, cool. All right. Awesome. Okay. So we're just going to come here and I'm just going to copy paste stuff and just going to kind of read through things. So, okay, ratertree. gen doesn't exist yet. Um, but essentially, I believe this is, uh, that will, when you're running the dev server, add routes as you add them.

Uh, I know like when, uh, when I've worked with Fresh, the Deno, uh, full stack framework, they have like a [00:17:00] gen folder to, um, but anyways, we'll get to that, um, essentially we have a route tree, so like that's the. I guess the starting point of the TanStack router. And then we've got some things here where we're just, uh, declaring, uh, there's a, a register type here with a router and we infer the type based on what the router is here.

And I think that's where a lot of the magic happens to get the, uh, Type safe routes.

Okay. We're going to go ahead here. We're just going to go ahead and copy these, uh, verbatim here. So let's just do code app SSR dot TSX. I know how to type. Cool. And let's just paste this in here and okay, so. Okay, can't find that module. Let's see here. So let me restart the TypeScript server to see. Okay.

So that's [00:18:00] missing. Maybe I'm going to add all the files in first, but I, I think this might be missing, but we'll see. Um, okay. So the router file doesn't exist yet. But essentially this is on the server side. So we're going to create the router. We're going to get the router manifest, which is all the routes, I guess.

And then we have this stream handler, which will allow us to stream it in from SSR. I'm guessing could be talking out of my butt here. Okay. So now we've got the client entry point. And so let's just do app client. tsx. Whoops. I mean, code, code.

There we go. Okay. Let's paste that in. So this is the client one. Um, and then basically, uh, I'm pretty sure we installed the react dom. So I'm not sure why it's complaining about that. And we did install [00:19:00] test stack. Start, but anyways, we'll see. Um, okay. So basically this is just going to hydrate the root. So this will be the starting point for your client app or the client side of the app, I should say.

Okay. Now we need the root. Um, and let's just copy this in. And so this is just app slash. So roots or routes? Yeah. Okay. Yeah. I'll add the types. Yeah. It's just TypeScript complaining, not the actual package. Weird. I did add those, but I'll double check though. I'll check the package in a sec. Um, so yeah, so we just need to create the root.

Um, so here slash that's underscore two root dot TSX. Okay. Let's paste that in. And okay. So we'll take a peek at that in a sec. I just want to. Check the types and stuff. Okay. Yeah, [00:20:00] so those okay, the types are right. Maybe it was okay. It's just I hadn't saved the file That's why okay weird. Um, I think my autosave features off.

Okay, so that seems all good. Okay, cool That's yeah. No, it's yeah, it's been near I mean, I know it's cuz initially it was on flow but like I feel like at this point like The types are pretty mature and definitely typed, like why not just, yeah, take them over. Uh, I definitely agree, um, but yeah, that's the, that's the way we roll, I guess.

Um, still thankful, uh, big, big shout out to the definitely type project. Uh, uh, definitely one of the things that definitely accelerated TypeScript adoption, I would say, but, okay, cool. So we got the root document. Okay, so, okay, I think we have everything set up here now. So I'm going to. Zoom out a little bit just so I can actually read some stuff here and let's look at the side here now [00:21:00] Not that not my docs.

I feel like my shortcuts or something got wonky. Okay, so Okay, route tree gen doesn't exist. I think that'll get generated maybe when we start the dev server, but let me check the topics

Yeah, so creating your first route. Yeah, I think once we create this it should do that Let's see here. Let's create the first route anyways, so we're just gonna add this in app routes index So let's just do that index dot TSX Let's paste that in Now we still don't have the route tree gen, but I believe as soon as we run it it should do it now Yeah, so right now it's trying to create a file route and I think it's complaining about the index because we don't have the route tree gen yet.

That's my [00:22:00] guess, because this is type safety kicking in here. So let's just go ahead and, uh, what's the command again? I think it's just dev. Yeah, okay. Alright, so let's just do, uh, my shortcut for npm run is just nr, so let's just do dev. Okay, now, yeah, okay. That's what I thought. So running the dev server the first time it generates the the route tree gen I don't know if that's something you want to call out in the docs Tanner cuz like as people paste stuff in you could end up with like, oh, why is that file not exist?

So yeah, so this is auto generated. So this is definitely similar to what I saw in fresh Not not exactly the same thing, but you can see here This just got auto generated and now if we come back to where was it? Which file was it? Uh, oh, I think it was in the index. Yeah. Okay. So all of a sudden Where the heck was that?

Let me look for [00:23:00] not that one I just want to show where the type route was

Too many anything i'm going to zoom out for a sec. Sorry Uh, just so I can find it just because I want to show the type router already working route region. Okay. Yeah, here. Sorry. Let's close that. Boom, boom, boom, boom. Okay, so you can see here that creating the file route. It's type safe now because if we look at the route region, so like, let's just say I changed this for a second here.

If we come back over here, it should. Oh, did I not save that? That's a bad example. Maybe, uh, maybe because it's auto generated. But let's, let's say I do this. All of a sudden it's complaining because this route doesn't exist. So this is like [00:24:00] already a preview of just showing you that, uh, you know, stuff is type safe in terms of routing.

So. We've got the dev server running. I'm gonna open up localhost here. And okay, so we have an image, but it's not loading. Let's just see what loaded button add to one state. Weird. What is that?

Okay, the logo is not showing up. Why is that weird? That's the get, uh, let's see here. Where is the logo? Home, router, okay. Let's go back to the docs for a second. Okay, so this is the index. tsx.

Okay, so we're reading the file. Okay, that's getting the value, and then that, and then this is the home route, and we got the button. Why am I [00:25:00] seeing, if I come back here, localhost 3000.

Oh, I know what it is. Sorry. That's a, that's something else I'm running. That's a open web UI. That's, that's my bad. Uh, I think I might have to stop a container. Hold on a sec. Let me just check. Uh, yeah. Cause it started up. Yeah. Okay. That's exactly what it is. So let's do port. Uh, yeah, I've got to stop something in Docker.

Sorry. Uh, the Docker PS. Yeah. All right. Got to stop that. So open web UI

Docker stop. It's kind of reminds me of not the same thing, but like when you had, um, uh, service workers and you have it in development environment and then you switch to a different development project and it's the same port, you would get something [00:26:00] similar to that. So, uh, okay. Now that we've stopped that port.

Uh, in Docker, let's get back up and running. I was like, why am I seeing an image instead of a counter? Okay. That makes a little more sense. Okay, cool. So it's a button here and I can click and then, you know, classic counter here. Okay, cool. Awesome. We are good there. I'm just going to go ahead and close that and let's just go, keep going through stuff here.

So, yeah. So essentially, uh, if we look here, we've got this loader where we await the initial count and that's coming from the get here and we have this count, which should be in this count dot text file. So let's go ahead and count. We've got this count text file. Okay. It's at nine right now. So that's persisted.

And now like if I come back here, let's just go ahead and refresh. You're going to see it initially loads to nine, and then we can continue. And you can see the text [00:27:00] file on the right is just going up. So this is just Obviously a somewhat trivial example, but it's, it's showing you how it's grabbing a value from the backend in this text file.

And then that gets sent to the front end. And if we just look at that code again, let's go back to the client. Or where was it? The route index routes. Let's close all these others. Let's zoom this back in. Okay, so we can see here. Um, and just to be clear. So we're loading this route. Some server stuff is happening server side stuff where we have this.

Uh, there's also this get to read the count. That's the server function, which is going to call this read count, which is actually going to read that text file that we had open a second ago, and it's going to return the value in there. And then, um, I haven't worked with server functions too much myself yet.

So, uh, but basically they, [00:28:00] I think the general idea is like, This looks like it's client side, uh, but it's actually going to end up creating a server side function. Um, and you can see here the handler for that function. So we're calling the function update count. Uh, there's some validation. So like, just make sure it's a number, I guess.

And then we get the data. Uh, we read the initial count from the file and then we're basically adding the current count. Uh, like the increment. So up by one to the account that's in the file, and then we're just writing it back. So that's the posting to it. Uh, this is just loading the route. And we have this loader where we get the count.

And then, um, this is the client side here. Uh, well, it's both, I guess, but so we're using the router. Uh, we use the loader data, which is this loader information here. And then we also have access to that server, [00:29:00] uh, function here. So we can just say, you know, increment by one is basically what's happening.

And then router invalidate, I'm guessing that's invalidating the cache for it, because we've incremented the count. Um, we could actually see if I comment this out for a second. And let's refresh this. And yeah, you see now I keep pressing the button. The text file is actually updating. Uh, like if we open up the count here, uh, count.

So you can see here, I'm updating it, but the client, uh, the UI is not updating and that's because we haven't invalidated the route. So if we bring this back, all of a sudden you see it updates. So, um, that's kind of nice. Um, so like. Trying to think, you know, there could be use cases where you want to invalidate it.

Like you want, just want to keep it cached for a while. So anyways, literally kind of [00:30:00] just. Doing this ad hoc as we go through the docs. But, uh, I think all of that makes sense here. So yeah, so it says, that's it. You've now set up 10 stack, start project, and we've got everything going. Okay. So let's move on to learning the basics.

Uh, I'm actually glad we built. The beginning part just from scratch like that, because we did find a few issues in the docs. Um, like I said, the TanStack docs are, are really great. So happy to just point out a few things that need some updating. So, uh, just doing a time check. We got about 30 minutes here.

Um, so this will help you go through how TanStack works, regardless of how you set up the project. So, yeah, so like at the core, we've got the router, the TypeSafe router, TanStack router. Um, Nitro, it helps, uh, uh, I'm pretty sure they started off in Nuxland, Nitro. And then I think it's under UnJS now, like Patak and like AntFu and all that crew.

Uh, but basically a lot of the [00:31:00] frameworks leverage that including solid, solid. Solid start. Um, not sure what else I think probably most frameworks aside from maybe next JS, uh, leverages, I'm not sure if remixed it at the time when I was working at Netlify, they weren't using nitro. I don't, I don't think.

Um, and something like Redwood JS. I'm not sure if they use. Nitro. So, cause, um, Redwood JS was on web pack at the time when I had last looked at it. I think they were in the process of just moving to VEET. So who knows, maybe they are leveraging Nitro too. Um, so yeah, so it all starts with the router. So let's just make this a little bigger.

All right, so we create the router, we, uh, so basically you have this router here and it's got the whole route tree and this is how we're going to get our type safe routes. [00:32:00] And that's what this also helps with. So like we're going to register this router and it's going to be the type of this router that got created.

So we should have a list of all the routes and stuff. Um, and if we hover over that actually, uh, which file is that in? Yeah, router. So let's go to router. tsx. And if I hover over this, okay, maybe I can't see it fully, but basically, yeah, I won't be able to expose it, but like basically that handles all the type safety.

Um, okay, cool. Let's keep moving. Yeah. So the route tree generation, like I mentioned, is we didn't have this file when I first like bootstrapped the project with the necessary files just to get up and running. Uh, yeah. Okay. So basically they already have this in the docs, I think. Um, yeah. I wonder if it's worth mentioning the route generation in that bare bones setup at the beginning too, because, uh, that [00:33:00] file shows as not being found initially.

Um, but anyways, yeah. So like it says here, if you run npm run dev or start for the first time, this is when it generates it. This is also when it adds to it. So just to show you here. So like, let's go ahead and. Uh, let's shrink this over here and let's just bring this over here. Um, I'm going to add another route here.

So let's open up the, actually I'll, I'll make it easier this way. So we've got the routes here. I'm going to literally just copy the index. And copy and I'm going to paste it in here and I just really want to show the route gen on its own. There we go. Cool. Uh, there. Okay. So if I copy this and I'm going to paste it in just, uh, and actually let me move this up a bit.

Pay attention to the file on the right. So I'm going to [00:34:00] copy this. Again, and I'm going to paste it in and we should see the route gen update. So you see the file changed and all of a sudden we have this index copy now. So basically as you build the routes, the dev server is going to just keep updating this route tree dot gen file.

Uh, as far as I know, my, my best guess is this keeps getting regenerated. And the reason being is this is how a tan stack router is able to leverage type safety in the router because it literally has a list of all the possible routes. Cool. Let's go ahead and just delete that and we should see it update again.

Yeah. So now there's only, we're back, back in business with just the one route, I believe. Yeah. Cool. So anyways, just wanted to show that in action. Cool. Let's get back to the docs here. So, um, the server entry point. So, um, [00:35:00] yeah, so it's, uh, this is something I've heard Tanner talk about before in terms of tan stack, but like, uh, it's focused more on client side first.

Yeah. TS doesn't know about file systems. Yeah, correct. Um, but, um, so like typically the kinds of apps that Tanner has built, like the stuff at nozzle, it's, it's really like single page applications typically. So that's why the client first APIs, but it is a full stack framework, uh, 10 stack start. So, um, yeah, that's pretty cool stuff so far.

Also, if, uh, if you look up Netlify compose, uh, and Tanner, uh, for 2024, it's, uh, Uh, yeah, yeah, exactly. It's a it's a it's about teaching the file structure. Yeah, the rest. Yeah, the rest I figured was native generics in action. Yeah, generics are are so cool. Um, yeah, but Tanner has a really great slide deck about TanStack [00:36:00] start from Netlify Compose.

Um, so if you want to check that out, I'll try and drop a link to that after. But Googling just Netlify Compose Tanner should bring it up. Um, Yeah, so if we're looking at the SSR side of things here, so we're getting, we have this function to create the router. We get the route manifest, which is like a list all the routes and this default stream handler, which streams it in.

Um, okay. So whether we are statically generating our app or serene dynamically, the SSR TSX file is the entry point for doing all things SSR. Okay, that makes sense. Okay, yeah, yeah, so the getRouterManifest generates that, the routerManifest obviously, and yeah, so It renders our application to a stream. Now there's a default one.

I guess you could do a custom one, but for now we're just going to keep it simple because we're just literally going through the basics today. And yeah, the client side entry point. So like we hydrate the route. This, uh, this looks familiar for when [00:37:00] I worked on a remix. Uh, they had the client and the server and you had the hydrate route.

Um, so basically. You're bootstrapping it into DOM and, uh, you've got this component that will just mount it up. Um, and if we were to look at that, if we view page source here, not view, uh, the, the DOM, but the page source, if I wrap this and zoom this out a bit, we should see here. So like, basically it got bootstrapped pretty much right here.

And get, I'm getting into the weeds here a bit, but, uh, these dollar sign things here, uh, this looks to me like similar, uh, uh, whatchamacallit, uh, fresh from Dino, uh, they use similar things to put in, uh, islands. And I think that's what's happening here. And then here. You can see that. I guess the dollar [00:38:00] maybe means the root.

I'm not sure about that. But, uh, and then you can see here these HTML conditional comments. If I zoom it in a bit. Um, basically, this is the value that came from the get count, which was from the server function that got loaded, but it. This got rendered in on the SSR side, uh, because, uh, this is, uh, SSR, uh, and we can see here TSR once.

I'm not sure I I'm probably going too much into the weeds here, but you can see basically there's some bootstrap stuff. Um, yeah, there's a few things in here. I'm probably going too deep in here right now, but, uh, I was just more curious. Okay, so let's get back to it. Um, so yeah, so the, this basically, like it says, kicks off the client side routing once the user's initial server, uh, server request has been fulfilled.

And let's just kind of look at the root of the app. So this is in the root TSX. So we can kind of look through here. And so we've got some [00:39:00] metadata. So this is stuff that you would typically find in the head of your document, get that SEO juice and whatever else you need in there. And then we've got this component, the root component, and then this root component has the root doc.

And then the outlet is where your, your routes are going to start inserting themselves. So if we look at the root doc here, so this is generally, uh, uh, just, you know, literally the start of an HTML page. Um, one thing I mentioned, I don't know if you're still listening Tanner, but uh, it'd be good to, uh, set a language on in the root document.

Um, Like for now, I don't know what the whole, uh, i18n story is, or if there is one or not, but like maybe either maybe specifying the docs to set a lang, because just from an accessibility standpoint, you could default to lang equals en for now and maybe just mention. [00:40:00] Setting a language, but, uh, anyways, just, uh, just observations as I go through things here.

Um, okay. There's scroll restoration. Uh, I'm guessing that brings us back to you. Okay. So, sorry. I'm just reading your, your comment now. So that generated file is. Uh, literally only there to teach to you. Okay. Gotcha. The rest. Oh no, that's the last one. Yeah. There's a lot of that missing from the tutor. Okay.

Yeah, cool. No, that's fine. Tanner. I mean, the, the docs are great. Uh, not, not trash talking. Um, uh, just observations. Um, Okay, cool. Yeah. All right. Um, this layout may change as we roll out spa mode. Okay. Yeah. Scroll position. That's restoring scroll position is a really nice. That's, that's cool to see that in there.

And then it just loads the scripts that you need. And then we got the routes. So we're just looking at the main index one. We kind of went through this already. So like, we've got [00:41:00] that server function and then like, uh, We're just reading the count from that file, uh, pretty much went through this whole part already.

Let's look at the navigation. So yeah, so this is where it starts to get important is using the link component to navigate to a new route. So why don't we go ahead and go from here? So, uh, here's a quick example. Okay. So let's just copy that and let's come back here. And is this the home component? Yeah.

Okay. Uh, let's just move this up.

Okay, so we've got the link component. Uh, for what it's worth, more of that is covered if you start from an example or in the future. Okay, cool. Yeah, yeah, this is, this is me just trying to be a bit of a, a, a, a nerd and just trying to just kind of see everything in action first, I guess. Um, so. Let's go ahead here and let's just [00:42:00] for now.

Let's just do this. Let's add a link And let's close this Okay, what did I leave out function? Oh, yeah. Whoops. Oh, I see what I did wrong. There we go. Cool. Okay, so Right away here, we're going to see our first, like, type safety in action here. So, it's not assignable to the route. And that's because we don't have an about route.

So, if I go ahead and copy this now, and let's just call this, like, about. And then we come back here. All of a sudden, you see that route's good now. If I switch it to something else, boom, it's going to complain. There we go. So, let's just come in here. We don't need All this in the about so, uh, so we don't need server function.

Don't need file system. Okay, I [00:43:00] took out too much. Maybe, uh,

Oh, no, that's right. Oh, I see what I did wrong. Okay, let's just put this should be about

and then we don't have a loader. I don't think we need one. Let's just call this about. I probably should just do this. Leverage TypeScript. There we go. So, now we just got an about page, and we don't need any of this.

There, and we could just do like a, I don't know, h1, about, and we could say, 10 stack router is dope. Okay, cool. And then we got the links here and then I could obviously put another one. This, this would make more sense as like some kind of header component, but, uh, let's just put in [00:44:00] there and we can see that that.

It's safe. Now if we go back to the router gen again, you'll see there's the about now in there, which is what we expect. And let's come back here. Okay, server unavailable. What did I do wrong? Is it still running? Oh, whoops, I might have broken something.

What did I do? It's definitely me. Okay, string literal. Okay, yeah, it's me. Let's see here. What did I forget? Um, we don't need the loader data. This file is all good. We don't need use router.

Okay, let's see, something in here that I messed up, I think. Where did I break it? Let's see here. That seems okay. What have I [00:45:00] done? Uh, let's see here. I should have Git and knitted it, but Okay, everything seems okay in that file. Let's go to see what it said. Okay, import route. Okay, I see. This is in routes about.

Okay, it's in the tree gen. I think that's because I might have broke something. I think I might have accidentally. What did I do here? You know what, let's just I'm going to delete the tree gen. And I'm going to start it again. There we go regenerated it when in doubt it's a regenerated file. So okay, so I'm gonna go to the about and Yeah, and restart.

Yeah, exactly. So we got the about here [00:46:00] Cool. Let's just clean this up a bit Just because it's bugging me but we could put this in a nav or whatever.

You need some more robust handling of weird file names Yeah It's all good though. Uh, it's just fun messing around with. So, um, okay, cool. And you can just, uh, about now I'm duplicating this for now, just, but, uh, it's all good. And let's just copy this. Let's go to index and let's do the same thing over here.

I should have put some spacing, so don't have tailwind installed, but let's just go old school Scott style and let's just do, uh, flex, uh,

flex, and then just [00:47:00] do gap, uh, four pixels. Sure. That looks good. And let's just do that over here. This really should be in its own component, but whatever. Okay. So we can see here, go back to home. That's all good about. So, and again, just want to stress how, How nice it is to have type safe routes. Cause like, uh, you know, I can't tell you how many times I've accidentally put the wrong thing and like it would compile, but then you might've ended up with a four Oh four.

Like obviously you could do end to end tests and stuff, but I think having this at the development level or the build step where you just literally can't. Build it like I'm pretty sure it won't build like here. Let's actually test that theory But because because it's a typescript typescript error, it should fail.

So I've got this link. It's complaining that doesn't exist So if we do npm run build this should [00:48:00] fail.

I'm hoping it'll fail. Okay, or maybe or is it only at the uh, At the development stage. I'm not sure. Let's see here That still complaining Okay. Yeah. Let me just check the package. Jason.

Okay. So it's doing the built. I think if we did a, you could do a pre build where you do a TSC. So like, maybe that's why I'm not sure. Um, let's see here. We could do TSC. What is it? I'm just going to run that, but I forget what it is for just types, but let's go ahead here. Now, if I run this, Okay. Did it do the pre build?

Am I imagining things? [00:49:00] Pre Oh, whoops. Pre build. There we go. This should fail at the TSC level now. Okay, so maybe there's a flag when you build it. Uh, I'm not sure about that Tanner, but, uh, like, obviously the type safety is kicking in. Um, I'm just wondering if that's considered only at the development level right now, or is there a flag you pass to the build?

Anyways, I'll just comment that out. Okay, and so now if I go here, did I undo it? Oh yeah, no, here it should fail. Did I put it back? About, that's on the about page. Yeah, okay, it didn't rebuild because it failed. Okay, I got it. Yeah, okay, cool. So we're good there. Um, we've got about 10 minutes here left. I think we could probably Do a couple streams on this because like even digging into server functions So this is something I [00:50:00] really haven't worked with.

I know there's server functions in Next. js. There's some in Solid start and now in here. I'm, not sure if uh, I can't remember if Daniel Rowe and crew put this server functions into Nuxt or not yet, but okay, so yes, we created the above using create server function. This is one of the powerful features and they're created using that function and they can be called both server during server and SSR

guessing when this gets bundled, you end up with a client bundle with The proper thing to call and then on the server side, uh, the proper thing, uh, that's, that's what I'm guessing. Um, still haven't really worked with server functions myself, really should probably, uh, get, uh, [00:51:00] maybe, maybe get, uh, what's his name?

Devon, chat about some of that stuff. He's done a lot of async stuff recently, or if you want to hang some time on the CFE dev channel, Tanner, uh, you're totally welcome to come join me and dig into some of this stuff even more. Um, okay. So, yeah, so we were just. doing this server function here. So this is using, uh, a get so like good old rest.

And then there's some validation Keras Zod. So we're just making sure it's a string. And then basically, we're saying fine, where the user's ID equals like user, whatever the data was passed in like Nicky T online. And then So here, get, or, okay, or in this case it's a string, but, uh, like a one. So get the user by their ID, and then we can get the user.

Um, okay, cool. Just gonna do a quick check, just gotta check my work slack real quickly.[00:52:00]

Started a new gig last week at, uh, Pomerium, which has been a lot of fun. Um, so just making sure nothing's on fire, but nothing's on fire. Cool. Okay, so Yeah, again, like I said, just be completely transparent. I haven't really worked with server functions, but, um, it makes sense to me so far. Um, so you can use them to perform mutations, which we did see that before when we were doing the post where.

We incremented the counter. It posted like one, um, you could change that number, I guess, but basically it posts that we were getting the file contents of count dot TXT, and then we were updating it and then we basically created a mutation and, uh. I don't know if folks remember earlier on in the stream, I commented out the router.

invalidate and you can see even though I was [00:53:00] clicking the counter and we saw the count. txt file update, the page wasn't updating and then when I put router. invalidate back we saw the actual value. Yeah. And this is saying, if you're using TanStack router only, uh, to invalidate all the router data. Also, if you're using TanStack query, which we aren't at the moment, you can just do query client and validate queries.

Um, big fan of, uh, TanStack query as well. Yeah. Yeah. Okay. I figured it was just like, I know it's just REST calls. Uh, I guess, I guess the main thing with the mutation is kind of, kind of like with. Just like I guess the one thing to be aware of is if you need to invalidate it or not But yeah, no, that's cool.

Yeah, it's I have a general understanding of server functions It's just I haven't built anything like for production with it or any kind of serious project yet So that's something on my to do But, uh, [00:54:00] so yeah, so here we can just see here. So like there's a Zod schema here just so we can do some validation client side and server side.

So we validate that it's an action. It's a valid user. Then we're just saying, okay, let's update the user with that name and that ID. Um, sorry, update that the name for the user that matches that ID. And then basically that's the mutation that, uh, Tanner was talking about. And I'm not going to go through the mutations guide right now, but, um, We got about five minutes left here and I don't want to rush through other stuff.

So I think I'm definitely going to do a second stream on this. Uh, but we can just talk about the data loading and we can probably stop here at this point. Um, but first of all, this is just. This looks really exciting. Uh, I, I'm excited to try and build something with this. Uh, not sure what yet, but, uh, definitely think of [00:55:00] something.

Um, so another thing with the TanSAC router is saying is there's the data loading. And so. Saying if you fetch the data for SSR and preload route data before it's rendered, this is done in the loader function of the route. We saw that over here, and we've got the loader down here.

And then, so data loading is done using the loader function for a route. It's also isomorphic, so we can do that server end client, which is great. Um, for performing server only logic, call a server function from within the loader. Okay, that's interesting. I guess because you put the server function in the loader, there's something in the compiler.

That will know because you're doing a server function that it'll know that that function just automatically has to become [00:56:00] a server side only and then similar to test that query data loaders are cash on the client and are used and yeah, so. Uh, I think I remember you mentioning this at Netlify Compose Tanner, but I think you said there's like a mini TANstack query built into TANstack router, but you can still leverage full TANstack.

Um, cool. Um, yeah, and then there's the data loading guide and we can kind of go through all that. I think, I think what I'll do is I'm going to pause here for today, but there's a lot of soak, soak up in here. Um, but this has been really great. And, uh, Tanner, thanks so much for actually hanging out in the chat.

Um, just, uh, as, as I talk through stuff here, uh, super appreciate it. Uh, it looks like a great project and, um, Okay. So you can set stale time and familiar concepts right on the route for the loader. Okay, cool. Yeah. So, uh, anyways, [00:57:00] 10 stack, uh, 10 stack start looks like a really great project. We're going to do a second stream on this.

Uh, so I'll be back next month, uh, to do another one with this and, uh, just want to give a shout out to, uh, I don't know all the. Contributors and maintainers to, to the TAN stack. But, uh, I do know Kevin and I know Orben, uh, Crutchley. So just big shout out to them. And also thanks for all the work you've done in OSS Tanner and really great stuff.

And, uh, yeah, I think we'll end there folks. Thanks again for hanging and we'll see you in the next one.
