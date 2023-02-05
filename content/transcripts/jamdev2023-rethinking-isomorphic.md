---
_build:
  list: false
  render: never
---

**Ryan Carniato:** [00:00:00] Hello. Thank you. I'm very excited to be here today and to talk about this. I guess I shall get started. All right as he said, I'm Ryan Carniato. I'm the critter of the JavaScript framework, SolidJS, and today we're gonna look at a recently beta released meta framework Solid. Solid start is the equivalent to things like SvelteKit or Remix , Nuxt or Next js.

It's a more opinionated framework to make it easier to do server rendered applications with solid, really to make it easier to make any sort of application with solid. Today isn't gonna be an introduction to , though. But it does build on my learnings from working on it for the past six years.

If you aren't super familiar with , that's okay. All you need to know is that it, it introduces using reactive primitives to rethink the component model, popularized widely by react and dominates most frameworks in the ecosystem in the last decade or so. The key takeaway is that for [00:01:00] all the good component architectures abroad, and I mean they are everywhere.

In modern front-end development, we've conflated code organization with execution life cycles in pretty much every framework. Components have runtime considerations. They are a primary state. Our renderer really are everything. And that isn't limited to the virtual dom. It's true for compiled solutions as non-com compiled tag template literals to virtual doms, single file components for the hottest DSLs, everything kind of running top down.

And I get there's a bit of who cares? , it informs every subsequent question what do I memorize? When do I memorize? What do I use for global state? How do I share reactivity between files? When to use effect? What's the difference between reux and context? Why does this log twice?

Why does this stupid thing keep rebranding? These are topics that dominate the conversation. And really I'd rather be talking about pretty much anything else. There are a lot of things that are just unlocked when you change your perspective a little bit. [00:02:00] Now, I could wax poetic about the power of reactivity.

I could go on about how it's declarative and composable, how it helps produce well-structured code that's re reusable independent of any component system. And even how with a few basic primitives, you can do everything you could ever wish for, including rendering and with performance. We haven't seen since hand optimized vanilla JavaScript, that's , but that's not really why I'm here.

There's a different recalibration going on, and that is around the role of the browsing the server and how we build applications. To appreciate this, we need to look back at our history. From my perspective, the history of web development has been a game of hot potato to see. Who's left holding the state?

The web started on the backend. We served static HTML files from File Server on request. Soon these pages became more dynamic and generated via code on these requests. And state was owned by the server. Change of piece of ui. The whole page reloads. [00:03:00] These days. We call this approach multiage. Apps are MPA for short, but nothing's more distinctive to me of this time than going to a travel booking.

Going through some cascading dropdowns. You'd choose your country reload, select the city, reload, choose your dates, reload, and so on. But that wasn't really the only thing. As our apps got more interactive and JavaScript grew, we started seeing a lot of duplication between backend and front end, which are typically written in different languages.

I'm talking about things like templating, business logic in ui. , I don't know how many of you had the pleasure of layering your front end logic on top of Ruby's erb templates, but I have, here's a little knockout js. On top of erb. You can see the duplication. And honestly, this approach is still around today in form of things like alpine js and petite view.

Now using knockout instead of jQuery. In the last example, may have been jumping a ahead a bit, but the real unlock we saw was around 2010 in the wake of Ajax making to the browser back in 2 0 [00:04:00] 5, and the browser engines drastically improving JavaScript performance. More sophisticated JavaScript frameworks appeared making it feasible to build complete applications in the browser.

With an api. In many ways this was a drastic simplification. Client owned state communicates with a stateless backend. We could author UI in a single code base,

but there was a problem. Wait for it. Okay, I'm kidding. This was the problem. Being rendered in the browser meant we loaded blank pages, then loaded JavaScript, then rendered the page as we fetch the data. That all happened after the JavaScript was loaded. This is mostly fine for apps, but with a burst of popularity, things like React, we want to bring that developer experience to a wider range of sites.

Let's server render it initially. Get the fast page and the benefits of our single page app. And that basically brings us to today Next.js, Nuxt, SvelteKit, Remix. Like I've already mentioned, for the most part, the authoring experience stays the same as it did with client rendering, but [00:05:00] now everything is isomorphic.

It runs both in the browser and the server, and this has largely been seen as the pinnacle of WebDev for the past seven to eight years. However, during the same period, I'd be remiss not to mention a different model developed. And that was pioneered by eBay's Marko Framework as early as 2014.

And popularized more recently by things like Astro islands or partial Hydration, are an updated take on the Multipage app that have emerged. The concept is simple. Author declarative JavaScript code, and through the identification of specific components that are interactive, we can only send those to the browser.

The key is that since these pages are always server rendered, we never need the JavaScript for the components that don't need to update. The benefit is that we return to a web webpages starting at zero kilobytes of JavaScript baseline and growing as needed while retaining our declarative views and single language mindset.

The negative is we are back to full page loads and most frameworks don't have a means to support this.

So why does this matter? [00:06:00] Even the server render page time it takes to become interactive isn't free, right? We still need to fetch and start at the JavaScript in the browser. As it turns out, not everyone enjoys this gigabit internet that I have here sitting in San Jose, and not everyone's running their site on the latest MacBook Pro.

The truth is, the numbers I'm showing on the screen are from 2017 and things have only grown since.

I am sure what you're thinking is, aren't there ways to address this? What about code splitting? What about streaming responses? The ladder actually probably helps MPAs more than s spas, as now they can respond immediately on navigation instead of waiting for data while still giving nice loading indicator feel.

What about progressive enhancement? What about using smaller or faster JavaScript libraries? What about you? Just do it all. Put that all together. . Yeah, that does solve some stuff, but it doesn't completely solve the problem. What we are dealing with here, for anyone who has stared at the problem long enough is a self-fulfilling prophecy.

What can be sent to the browser [00:07:00] shall be sent to the browser. That's the adjustment we need to think about. So we have two solutions that benefits over each other, but don't do everything we want in one package. Do we go with a better page load at the cost of future navigation, or do we go with our slower?

Loading isomorphic approaches that feel more apt, like after initial load. Can we somehow do both? Does that even make sense? What I've actually noticed is server and client-centric approaches almost mirror each other. In a client-centric approach, the vast majority of your app is believed to be isomorphic.

And we define patterns to denote things like that are only server only things like get server side props or loaders in a server centric approach like islands, we do the opposite and denote the code that is required to be ran on the client. To be at interactive, each starts with a different base assumptions and comes at the problem from the opposite.

So [00:08:00] let's use that to start our conversation about solid start. And look at how we can build the client-centric isomorphic side. So I'll start very much as I said, categorized with remix and SvelteKit and offering an approachable experience to building that provides you with all the tools you need to load and mutate data in your JavaScript applications.

Of course, we can do this in a very solid way. If you are already use solid, what you'll find is that we aren't introducing a new router or new libraries. It's all the ones already in the ecosystem. We are building upon what's already there and providing tools that can help every library in our ecosystem feel like it's first.

As you can imagine, that means this is all about primitives.

We want things like get cide props in next or loaders like remix, but we didn't want to compromise and we want to keep the benefits. We have come to desire from being modular and composable. The pattern solid for the past several years has been to define data functions that attach to each nested route section, and it runs in parallel to code [00:09:00] splitting while setting up our resources for data fetching.

It doesn't care whether it is on the server or the browser. It runs the same way. If left alone, it will fetch on the server during initial s r, and then on the browser and subsequent navigation. That's what we have here. If we're exporting this route data function, it creates a resource, which is basically a reactive primitive that will fetch the data from that URL and put it in our story signal.

But what if I want to always fetch on the server? We had an idea what, if any function could be ran on the. , right? We immediately saw that this meant we could preserve types across the boundary. And this is really quite nice. All we'd have to do is wrap it in the server function. And this way we could tell the library that, Hey, the code inside this function always runs on the server.

And the thing is, if you still want a url, it's [00:10:00] available. still as a property on that function. So we've used this, the design, interesting APIs. We've used this with web sockets or server scent events. But the takeaway is suddenly we had a primitive to do network communication in a type safe way.

So it turns out we can just plug this into our resource and while suddenly we have a function that always runs on the server, see server fetch story. Now that could hit the database directly. And we can write a wrapper to clean it up a bit. And we're in business a little bulkier than maybe a simple async function.

We get to have the cool things like invalidation by key so we can granular, invalidate these things the same way we would in libraries like TanStack Query,

and. Speaking of TanStack Query, the community has already jumped into using our PIBs Solids Port of TanStack Query uses our resources under the hood, which means suspense, streaming, [00:11:00] hydration, and even server functions. All just work out of the box with zero configuration picture. Just drop into create, query, call and querying your database your component.

That's what you can do with this approach.

There's the mutation side of the equation. On the other side, we have actions. They can be defined in any JavaScript file, and they allow us to track progress of mutations and manage optimistic updates. By default, they'll refresh the data for the current route, but we, they can also granularly trigger invalidation on key.

And did I mention they export progressively enhanced forms that work with no JavaScript.

This all just piles on top of each other. You can define as many of these actions as you'd want in a file as they're just server functions and don't feel that restriction having adhered to a file-based a p I for local mutations or worrying about over re fetching on invalid. , we took, a lot of the ideas have come up with loaders and actions and data fetching and almost, and some [00:12:00] inspiration from things like GraphQL, of separating the concept of mutations as RPCs versus loaders being like the graph or the page structure.

But let me show you an example of this in action. I've remade our classic todo nbc, and this is a very simple example. It, it is just all in one file. Just for our sake here, because it's funny the simple examples are almost always the. The they're reused over time for a reason.

They handle a lot of really basic use cases. So I'm just gonna fire this up here. So we can see this, I'm gonna be using not dev mode mostly today because I want to focus on size and performance. But let me see if I can get to do mdg. So do, excuse me if there's sometimes longer build.

but he, here we go. This is a solid start app. We have our route where we kinda come in, of set up, with a HTML structure, suspends boundaries, [00:13:00] routes, and then there's a file routes that indicates this is where in the route structure you want to inject the file system running. You could always just not use the file system running.

I just wanted show this and in our routes folder, our main index here is just our to-do. We are exporting a route data, and as I showed before, it's just a server data that calls our database to-dos with an initial value here, right? So just sets an empty list while, suspense is loading.

But generally speaking, we've defined our data. And then when we go into our to-do app, we use route data to get those, the set of to-dos. We use the location to get the location from the router. And then what you're gonna see here is a bunch of these server. and these are all just the typical verbs. You see when doing a create to do a to do NBC app, adding, to do, removing to do toggling to-dos.

And we've used those actions both to do calculations like the remaining count where we use them to looking at the pending to show optimistic [00:14:00] updates. And they also are used as forms. So here we wrap a few inputs. Maybe a hidden input to pass, some special information through. But essentially this is made off a bunch of forms that are exported from those actions.

And in fact, we even can nest actions inside each list item. We also have actions for toggling the to-dos and editing them and how the show the pending state. What do I mean by pending state? Let me show you here. Here's our to-do NBC application. Okay. And this is pretty typical. I'm just gonna add a to-do.

Hello, and it probably happened a little bit fast. I do have a slowdown here, but before it toggles, you'll see it flash purple for a second before it turns gray. This is showing the optimistic updates and we can run as many of these as we want in parallel, and race conditions and stuff are automatically handled for us, and this has this kind of nicety here of being able to [00:15:00] seamlessly work and handle this mutation story.

And obviously the reason why we get excited about this is if I go into the sources here and do something like this, which is what? Disable JavaScript. I refresh the page. You're not gonna see those nice optimistic updates anymore. You're gonna see the whole page flicker when I update. But obviously this p, this page still works.

See, I'm refreshing showing that it actually saves the data still works the way you would expect it to, even without the JavaScript turned on. Sorry, wrong one. It's funny. Press command P in the wrong place. You end up for the print module instead of instead of the panel. Anyways, I'm an enabled JavaScript again, so we won't mess with ourselves later, and we're back to having our optimistic update.

and nice interaction points. And what's cool about this approach is so it's taken into consider [00:16:00] things like that. Some actions are multi umit versus single submit. So you might see stuff like up here, create server multi actions. And this is really powerful cuz now we get an array and this means that while the main list is shown as a for loop, while we're pending, we can iterate over that array.

Of pending actions and basically feed that form data back through and draw that optimistic api, and each submission has its own error. State. Has its own submission state, and this way we can granularly handle errors and submissions and race conditions all automatically with these permits. Of course, if you don't like using forms, don't care about progressive enhancement.

Don't worry about it. The ad the like. This here that's returned. The add to do or removed to do is also just a function you can call. It's just a server function. The form is just kinda nice, add-on. So we can do progressive enhancement, but you can always just call add to do directly, not use forms and do everything the way you'd want to [00:17:00] otherwise.

All right. Sorry, it's this way. So that's all fine and good, but what you might be asking, what about service centric view of things? Nothing you've seen so far. Is that different than other frameworks? Except maybe a focus on primitives. The fact that you could literally just slide in, solid query from TanStackand it will work first class with, server functions.

I have good news on that front as well. I wanna share with something that we've been working on. It's still experimental, but I think it's something that worth getting excited about. I'm gonna use a demo app that I'm all too familiar with. Hacker News. Again, this is a classic example. There's a reason why we keep on going to these classics.

Hacker News PWA was a site that collected hacker news implementations in every framework. It's no longer really maintained and most links are dead. But I myself have gone and taken old View two version and remade it in every framework pretty much that I can find. And so it's kinda like the perfect example, the demo.

What I want to show here [00:18:00] today. Okay, so I'm gonna go back to our code, sorry, not that way. And we're going to take a look at our Hacker News example. And this one's a little bit more complicated, but all that happens now is we have three routes. We have a route where we grab all the stories. And you can see we've of fetched based on the query parameter and we create a resource for that or the user and the individual stories.

I'm just going to what is it? I'm just going to build

and start this app so we can just look around and you can see what we're dealing with. Okay. All right. So done with that refresh. Okay, so here we go. Hacker news example, listing of stories navigate based on pages. [00:19:00] Different story types. Click into story. See it, there's some comments. These comments are collapsible.

So there's minimal interaction with this page. There isn't like heavy mutations like TodoMVC but you can see data fetching patterns. You can see interactivity, and that's why people look at this example. And if you're wondering, like this is pretty typical kind of scenario for these kind of frameworks.

If I refresh the page, And look, you'll see the solid hack news examples about 19 kilobytes of JavaScript. To put that in perspective for you, cause I know, cause I've rebuilt this in most frameworks, SvelteKit's about 22 kilobytes. Next is about 80 kilobytes remix, 74 kilobytes. Just get the range of things and.

You know this is perfectly fine. We made things small fast, relatively, you could be pretty happy with this. And what you'll see is a pretty typical thing with this is in your framework is you'll see all the like index, I think it's called Next data. You'll see this big blob of json, which [00:20:00] contains all the story information here for the comments and stuff so that we can hydrate it, so that we can get that interactivity so we can collapse those comment.

This is pretty, pretty typical stuff. I'm just refresh on this page to make sure I've got everything. Yeah, perfect. But what can we do with a server centric view? How does this change? Something that we've been playing with was we, I worked on Marko at eBay, which I mentioned had these islands and things like Astro and Fresh have been popularizing them.

Now again, and we wanted to kinda experiment with that. So what we thought was like, okay, cool, let's just go in here into our config and just go islands. True. , sweet. Easy done. No, not quite. This turns our app into an mpa. But we wanted that co comment toggle to still be interactive. If we just went right now, essentially the, we just have no JavaScript and nothing would happen.

So what we can do is we can break our toggle out from our comment component. So if you, just to kinda get the flow for this so you understand when you load a story, it shows the information about the story. And then he goes through each [00:21:00] story and shows all the comments, but each comment recursively can have its own comments in four loops and, but they're toggle bulls.

So what we did was we wrapped each branch of comment components, it's recursive comment and comment with a toggle component to extract out the state here. So what's a toggle component? It just has a signal, which is re solids reactivity to open and close it. And then all we do is update some classes based on the, that signal state.

Pretty simple. And then we insert the props children, which is a child list of. Comments, but now we want this component to be an island. So what we ended up doing, and this API will change, this is experimental right now, is we're like, okay, let's just do this. Cons. Toggle equals unstable island.

Import, let's import from toggle. So this is. Let's just do this. As I said, this is not gonna be the final api, but I just wanna show [00:22:00] now our toggle is imported as an island, and with that and setting it to islands true, we should be able to just build our example again and start, and we're gonna see a little bit of a different story happen when we refreshed the.

Our comment still collapse, so this still all still works, but what you're gonna notice is that suddenly we've only got seven kilobytes of JavaScript. The other 12 disappeared. And actually this page is a little bigger cuz it has the toggle on it, right? If we navigate over here, you'll see it's actually 6.7 kilobytes of JavaScript.

Not splitting hairs here, but my point is, what you'll notice is that we're actually reloading the app, the browser as we navigate around. This is an mpa. We, this is essentially the astro style experience. You get small JavaScript. Small hydration and to can emphasize that small hydration that giant script tag that had all the comment data serialization it's gone.

All that we have here is this little script for islands map. The reason is [00:23:00] we don't need any of this JSON data anymore because it never hydrates, so there's no reason to send to the client. So not only is there less JavaScript, we remove data duplication and we. Run less code. So this is just win-win across the board from that side.

So service-centric here showed you the client-centric approach. You can kinda see the world's kind of combining, all right, sorry, this way. But as cool as that is, they have the ability of MPAs or S spas that we each bring fully optimized for the use case. About a year ago, I realized we could do.

What if we didn't need to choose? I realized that combining three existing technologies, we could get it all. And those technologies are nested routing, which as I said, we've been using for years now. Pretty much since Solid was first created Islands, which I just showed you, and [00:24:00] HTML over api, something popularized by turbo.

But also thanks to our good friends over at Astro have been playing with their HMR solution. See, the realization struck that I noticed what happens when we combine these technologies and change the size of our islands. . The trick to island's savings is that you only need to serialize the data that's passed down as props, which is why we didn't need to serialize all that comments data, because technically speaking, the only data we needed to we didn't need to pass that in as props.

The toggle component had no props. So typically with this architecture, as you navigate, you'd be just sending, HTML over the wire for the page and the json for the props. So picture something li like what I just showed you, but it s renders each page. But what if the whole nested section, like what if the island actually took up the whole page?

In that case, we wouldn't need to send any html. That's the white part out here. [00:25:00] We just need to send the prop. In a sense, this approach scales from ultra minimal JavaScript islands with HTML over the wire, as I said, an astro to a spa or s p, sorry, with a JSON api, right? If you look at the extreme cases, there's not really much overhead.

There's a small router that you need on the MPA side, but on the single page app side, if you actually treat it like a single page app, Your server rendering basically just turns into JSON APIs like you do today. You don't need two modes or switch, it's a continuous range. You just use what makes sense for the application.

And for me, this is a game changer. So we built it, we were like, okay, let's add a nested router that does server rendering as well. And the cool thing is you just go islands, right? Or true. Our current. Islands are already have everything you need, right? You have to attack this from a server centric view if you want to get the full benefits.

But what's cool [00:26:00] about this is, look, I'm gonna refresh and yeah, clearly this still works and clearly we don't need that script tag anymore and serialization. But the difference now is watch, this is not spinning up. This is full client side navigation here, right? as we move around, go through these stories, do this stuff.

It feels just like the single page app, except, can you guess? Ding ding. We're still only sending six kilobytes of JavaScript. It's like the mpa, but the experience of a single page app. And you, if we looked at the output, we'd see that we're actually swapping out sections of the app and not re rendering the whole thing.

but I think this is actually best exemplified in another app. And I want, if you all check it out sometime solid dash movies. Dot app. We remade the TA taste movies demo, which is really cool. They have demos in every framework. Next Angular Nuxt Astro [00:27:00] Solid, which is this one SvelteKit Lit quick. And what's really cool about this demo, We built this on the same technology.

You can see all the interaction. You can see this. This feels like a single page app. In fact, you'd be pretty hard to tell the difference between this version. Oh, this one seems to be down, my bad. And I was gonna say in the next version. Okay. But es essentially you, you can navigate, you can search, you can, what was it?

Dragon House of Dragons. What you end up with, the input never lost focus. Even though we're using this technology, this feels like a single page app, and yet, as we navigate around, I'm gonna refresh the page and show you the network. 13.5 kilobytes of JavaScript. It's the experience of a single page app, but without the JavaScript and without the hydration.

and I think that's really cool.[00:28:00] 

And just to emphasize how big of a of a thing this is, I read those demos I showed you at Taste Movie app, navigating you around a few pages. This is the kind of size 190 kilobytes, 90 kilobytes from next 121. Even spell kit is about 34 kilobytes and that's probably where SA start would be.

Normally this approach is. Whole different dimension on reducing size well without losing those benefits that we've come to love from single page apps. Anyway, I think that's pretty cool. If you wanna get started with solid start yourself. You can just run m p m and Knit solid at latest and you're ready to go and you'll be o on your way to creating the next generation of solid websites and applic.

Anyways, like what you heard today, you can find out all the resources you need off .com. You can find me on Twitter and if you really like nerding out JS frameworks and the future of JavaScript, I stream weekly on YouTube and twi. So thank you.

Thanks 

**Brian Rinaldi:** [00:29:00] Ryan. Oh my gosh that was, that. You got my mind spinning. I'm like, I'm not sure. I a hundred percent got everything, but I like, I, I. I'm impressed by what I saw. So I got some questions, but I think Pete some folks in the audience I'm sure must have questions. So one, one question from the audience was sell the start V1 and stable items.

When are these, when do you expect these to be fully released? 

**Ryan Carniato:** Yeah. And those are two different initiatives. I'm gonna be clear v. In my scope of things, at least today, I don't wanna pull the island stuff in because I don't want to delay it further needs to right now the state of V1 is, we have mostly API APIs and the beta launch.

Right now we're just, we're working on stabilization. This is just the part where we are working with all the adapters. That's where we're having the pain. This doesn't work on herself, this doesn't work on netlify, and we're just, going through like, how do you do this in CloudFlare? I'm not gonna make any promises here.

If you've seen any of the other meta frameworks, this stuff takes a long time and every time someone tries to make a promise here, they're usually months [00:30:00] off. So I'm not gonna give that to you. Unfortunately, right now we are just going through a stabilization period and I'm hoping that it will not take too long, but it really comes down to How much feedback and how much, we can work through stuff with the community.

**Brian Rinaldi:** Sure. Makes sense. And so just to clarify for, cause I haven't tried solid yet, or I obviously solid starts new So is solid start does, is it fully s sr like a remix model or is it like some combo like Astros, like especially now with Astro two can mix static and ssr? Are we So you're fully sr, right?

**Ryan Carniato:** Yeah, I, there's a static adapter. The funny thing about these libraries that they can, a lot of them can do a lot of the same things, but they're preconfigured to work a certain way, right? Like the Astro is an MPA framework and it does, it's really good set up for STA static, but you could always like stick a full single page app on an astro page if you want to.

Solid [00:31:00] is much more on the spell kit remix side of things where it's configured to set up to build applications. And in our case, like fki, we have the option to say, Hey, let's do a static page or whatnot. But Yeah, I'd say we're more on the felt kit remix side of the things. Okay. 

**Brian Rinaldi:** That makes sense.

So can do static, but it would, it's probably like a all or nothing I'm assuming, or, 

**Ryan Carniato:** yeah, that's generally the approach we've taken to date. I, we have talked about doing it on a page level, but as you can see, I'm very interested on. How things can scale without having modes or switches, like just simply on what you write.

So w I will say for V1 it will be just per page level. Similar to S kit. . Okay, 

**Brian Rinaldi:** that makes sense. So let me ask you like this approach you talked about at the end and where it's like the feel of an S p a, but the benefit of an MPA M p A in terms of like how it's rendered and stuff is this an approach you think is, it's like can be universally applied or is this, are there specific scenarios where this works [00:32:00] or it doesn't work? Or is that something you still 

**Ryan Carniato:** experiment? My hope, yeah. My hope is that this can be universally applied. And obviously even working beyond frameworks like solid. It's a tr tricky thing. My biggest concern right now is actually developer experience concerns.

I think that it's hard to know the boundaries between server and client if it's not handled right and when you're dis, I showed in this example, like I literally switched the modes by just like toggling a switch or like changing something and all the existing code works. That seems really good in theory, but it gets confusing as you scale things.

So that's the largest reason why I've kept that in experimental because. I think the place we need to figure out next for this is how to make that experience really feel natural and not confusing. And, but yeah, so I, that's why it's where it is, if that makes any sense. But in general I'm very hopeful as I was pointing out that this actually.

Scales across the whole spectrum. There's a little bit of overhead that comes with doing it over a [00:33:00] pure MPA islands approach, but it's like fractions of kilobytes, so to speak. Like it's not a huge thing on size. There is some consideration that certain types of components now become islands that went before, things like anchors, cuz you need to, update the style of an anchor selected where an M P A.

It, you wouldn't need that. So there are considerations, but I think that like it covers the 90% range so well that this could be the future. Yeah. 

**Brian Rinaldi:** Okay. That makes sense. And, but and you're getting a lot of yeah, people understand the DX concerns. I know for myself, like even from a simplistic standpoint I'm often like, sometimes this isn't working and I'm looking for the error in the wrong place.

And it's because, oh, that's right. That one's on the server, not on the client. And it's not always like that obvious where that's where that script is running. Yeah. So I totally get. 

**Ryan Carniato:** Yeah, and this is gonna be something that we have to consider across the whole ecosystem for the next couple years.

The, you're, this is the challenge on the DX side for everything [00:34:00] honestly, the, you're suddenly like aware of certain, it's not just the boundaries of where the code runs, but boundaries on data serialization. Like what needs to be serializable over the wire and what doesn't. You could try and hide that, but then you're gonna get hit some point.

You and I think that's, That has now entered our mindset and we need to figure out a way to com combat this complexity or otherwise. Developers are not gonna adopt this. 

**Brian Rinaldi:** Makes sense. And do you, are you all exploring cause I know one of the things remix pushes is okay we do a lot of this rendering at the edge kind of thing.

Is that, I'm assuming this would be entirely possible with this. 

**Ryan Carniato:** Yeah. I didn't even talk about this. Solid has been on the solid start, started on the edge. We made our first demo on CloudFlare Workers March, 2021 with streaming from the. If you've recently seen that defer feature that remix has that's something that we've had from Sol with solid start, right from the creation that was like offset it was it, this is how one of the things that Marko introduced back in 2014 and we I immediately was like, yes, we need [00:35:00] out of order streaming.

We need to be able to deploy to the edge. So yeah. As of today, solids supports Edge on CloudFlare, on Netlify, on Versace. Y Yeah, yeah, I, if people follow me, you though, I've been jumping in on that one for sale released next 12 a year ago, within 24 hours we had streaming solid to start on the edge.

That's what it, that's what I'm all about here. Yeah. And 

**Brian Rinaldi:** it's really interesting cuz here we are there at a, what's basically a JAMstack conference, right? And I was thinking back it wasn't too long ago, we were really. Almost entirely in static with some client side, interactivity and maybe some hydration, but seems like now we're moving, A lot of frameworks are moving to where it's only an s r solution.

I, I know Enhance, which will be talked about later today. That's their approach as well, and something they've pushed as, Do you think is that, do you think this is headed in general? We're gonna be, we're we've now dropped, Okay. There's not a lot of benefit to pushing stuff, to pre rendering stuff.

We're just gonna go with server 

**Ryan Carniato:** ending. [00:36:00] It's a challenge because here, there's two things going on. We obviously, the interactivity and the expectations of interactivity in our applications have gone up over time. And as a result, single page apps have gone bigger and more bloated, and that's been the whole problem.

And no one wants to sacrifice that. At the same time, we all recognize, as I was mentioning, like if you build with that mentality, you're just gonna have the whole, you're gonna pull the whole in, internet onto your webpage and. We know that we have to delegate more to the server and we have to change that balance.

That's what we've been doing. But now you've got this push happening on both sides, right? Because the, those complicated front ends are like, no server do more stuff. Like something has to give. And the timing with edge functions is just great because now we're bringing that processing, closer to the end user.

And I think that this is why you're seeing it. It's just. Some of that demand and expectation that we were like it's okay. We can do that in the browser. We're like saying, no, it's not okay. Don't do that in the browser. So it's just natural that you are gonna have more stuff running [00:37:00] on these server list environments compared to, maybe a couple years ago.

That being said this is why. The net Laies and Versace and everyone in the world are so focused on cashing solutions and stuff at the edge, cuz there's still a cost going back to your data centers. This whole world is now, instead of looking at a CDN as a single, like here's your static files.

It's looking at even parts of individual pages as like static chunks that can be stitched together. That's the world we're heading into. 

**Brian Rinaldi:** Yeah, I think that makes sense. And I think, it's good. It's, it becomes really difficult to even think about this mentally when you're like, some things are rendering, where is, are, is my rendering happening?

Where is my data coming from? Where is and how much. This is where I get into the edges. I'm a firm believer in the edge, but it's adds a whole layer of complexity to your application development when you're thinking about, like, when you're trying to think about, okay, it doesn't immediately solve latency.

If I'm trying, if I'm then going, having to go back three [00:38:00] times. To, to my, server to get data kinda thing, yeah. 

**Ryan Carniato:** It's amusing to me, and I'll ex I'll explain why if I got a second. It's that. Yeah. The rise of single page apps came up around the same times and the rise of microservices and, wanted to give like stateless, and these things aligned and that kind of like really went hand in hand and.

Now we're seeing a return. People are like, oh, that's too complicated. I need monoliths. But we know that we still need to solve the distribution problem, so to speak. So my, my expectation here is you're gonna see more and more tooling that lets people author as monoliths, but then handles the distribution details in the background for them.

Semi-automated or half manual or whatever. But that's where the, you're gonna see the development in this space because as I said, the pressure's kind of pushing from all sides. And it's getting compressed right around these serverless and edge technologies. 

**Brian Rinaldi:** Yeah. And I'd say like my, the last thing I mentioned, not really a question, but it's just I think it's funny because I've been doing this super.

Long time of 20 something years and it's[00:39:00] I've gone from okay, we're doing everything on the server to none. Let's push everything to the client. And it's no, this is not working. Let's push it back to the server. Back to the client. It's just like a continuous continuum, as a back and forth as technologies.

Change and we can we adjust our expectations. But anyway it's fun. It's fun 

**Ryan Carniato:** to watch. Yeah. Hot potato. Who's left holding the bag? I don't know. It's some of it, some we take it on by choice because new opportunities always emerge every time we move the, move this around. So yeah, I think it's exciting cuz each iteration gets a little bit better, gets a little bit more, Nuanced gets a little bit more powerful, and of course that opens up new possibilities, which send us back to the drawing board a few years later.

So yeah it's really exciting to see this evolve over time as myself, also a very long time person in web dev.

