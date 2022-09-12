---
_build:
  list: false
  render: never
---

**Tim Benniks:** [00:00:00] What is up. My name is Tim Benniks and I am very excited to speak at this conference. Thank you for that lovely intro. And so before we dive in to what cable management for the gem tech actually is, let's talk a bit about me and where I work, because actually this is a sponsored spot. So I get to speak about where I work and why you.

Probably have a look at it as a developer. So first things first I am Tim minutes. You can find me here or maybe here. I don't know how I edit this yet. On Twitter. My accent is probably quite strange. That's because I'm Dutch, but I live in France and I work in English. So that's where, that is what that is coming from.

And like I said this is a sponsored. I work at uniform where I am the principal developer advocate. And at uniform, we work in that space of making things composable and cable, managing everything [00:01:00] behind your digital experience platform before it becomes a website. And in this case, the JAMstack.

And so I'll weave in uniform at one point into the talk. So you can see where that fits. So let's get down to. When you build the Jamstack websites nowadays there's a lot of things going on before it's actually built, right? All these connections and different things and different sources. And so I wanna talk about how you can cable manage that in a nice way.

So it looks neat and it's maintainable. And also if you do it well, you never have to do like a big re-platform when your next design comes along or when you wanna do a mobile app or something else. And so I wanna start this talk by talking about sandwiches. I know that's quite strange. But it actually makes sense.

I just wanna explain some things according to the sandwich analogy. And then once those basics are. We're gonna go into the code and I'm gonna give you some examples. So first things first, what we used to work with and they're still around [00:02:00] are monolithic suites. And a monolithic suite is basically a suite of software that has everything inside of this one bucket from web servers to front end, to backend, to database, user and management.

Everything. And we can actually think about these as a prepackaged sandwich, because a prepackaged sandwich that you buy at, let's say a bakery kind of fits 80, 90% of the people because why would a baker make something that doesn't fit for everybody, but it's not fully like what you would want always, but it's good enough.

And that's why I wanna talk about the sandwiches. Because when you look at the modern times where we are now, the tools that. Probably are using it's much more of a composed architecture where you don't have one suite with everything in it, but you probably have CMMS comes from here. My hosting comes from there.

My CDN comes from there. My front and [00:03:00] framework is this one you choose. And so basically you are making composed architectures and composed architectures are more like sandwiches that you make yourself. You choose how much cheese you want. And you choose different things that probably fit well together and other things that you don't need, you just don't put it on your sandwich.

And so basically what we used to have is these suites, right? So if you see here on the screen, we have like front end hosting API. I, CMS commerce, everything is bundled together into one big box and then over time, and this is a couple of years ago where we saw oh yeah, but we. Freedom as frontend developers, right?

We want to code our own stuff with our own standards. Let's get away from this big suite that it's there. And so you saw that like things like CDN hosting or front end frameworks or APIs were extracted from it. Now getting closer to where we are now, you can see that only the CMS remains, and the CMS is now actually also [00:04:00] standalone thing. So that suite no longer really exists. And so where is Jamstack in this story? Jamstack is actually playing a vital role. If you actually work with a system that is no longer one suite, but has all these separate blocks. And so there is no more origin server. And what I mean by origin is there's not one place where at runtime, you connect to that knows everyth.

That is this big suite or this one monolith system. It doesn't really exist anymore. And so all the magic is starting to happen on the CDN closer to the user. And with that in mind, that Jamstack works really well on the CDN, because it's just a bunch of static files with a little bit of dynamicism in ax calls and maybe edge Handl.

And so gems like really works well for a system that has no origin. Everything is separated, everything is decentralized. And so it becomes API. First. If you go to have a look at [00:05:00] any sort of hatless CMS or hatless commerce, it's all API first, that's their output. With this, because everything is API first.

There's not really a blueprint for what is the best way to build your website. So you have to be smarter as a technical stakeholder to choose which things go together well, but there's not one way to do it the right way. And because of this new products categories are starting to emerge and uniform is one of.

Uniform offers you painkillers to deal with this, all these different systems and how do we orchestrate them? How do you scale one part and how do you change other things and make it easy for developers, but also content editors, because you might not wanna log in into 15 systems to make one page. Right?

And these new product categories emerge because even if we have these super fancy new de structured the decentralized systems, you still have issues because architectures can really Bo down your digital pipeline and a digital [00:06:00] pipeline is not only just owned by the developers. It's also owned by content editors, marketers, researchers, data analysts, right?

It's a bigger picture. And so the problem we see all the time and I used to work at agencies, my whole career, and I've always had these issues where you build a new thing. The developers are happy. Everybody's cool. The client is happy and then a month in the marketing department of your client wants to make a new.

And then you build this like super fancy Jamstack front end with all these hatless sources. And they all come together in the Jamstack. Then this marketer tells you or calls you up. Yeah. Can you just make me a new page in that Jamstack site that then connects all the things from. Two different instances for fire hatless CMS, like some global data and some local data.

I want some business things like, I want maybe some personalization, but I also want products to sell. And suddenly you're telling this developer, yeah, give me those five connections, put them on. And then the [00:07:00] developer's Nope. I don't have that time. I mid sprint, what are you asking me? It's not gonna happen.

And so that's a feeling we always had. And then the developer is unhappy because they didn't build something that's flexible enough. Even though they did a great job at the code, it's not really usable. And. The marketer or the content editor is upset because they want to do their job, which is tell a story to sell something or to be awesome about whatever thing they want to be doing.

And so there's a little bit of frustration, and this is also why marketers and developers don't really go well together because they both have their needs and wants, and it doesn't really fit. And so uniform is there to help you solve that problem. And what we see is there, there's a couple of problems and let's highlight them here.

And then I'll show you a bit of uniform and a bit of code to actually figure out what these differences are and how we can solve them. And so composing pages with different hatless sources is generally complex for both developers and content editors that goes to that. [00:08:00] That example that I just gave.

How do you compose with all these different sources? And then have freedom and flexibility in the power of choice of how you do that. And then on top of that, if you have this big system, how do you make it? Let's say has a great developer experience, great maintainability, and how do you future prove it?

So you don't have to. Platform or Recode everything. When a new thing appears like when you switch your commerce provider, when you switch your CMS, you don't want to be recoding the whole. And so these are two big problems that we see as developers. What tends to happen is if you look at this really fun image here of Homer, where basically websites could look amazing on the front, they might even perform pretty well, but on the backside of it, if you don't have a good tool to. Cable manage. You just tie your back fat and neck fat together. And it's little dirty in the backside, but it looks really good on the front end, but this is not really maintainable. And the developers in it are not super happy, but content editors the [00:09:00] same.

And you end up with this, if you have all these different sources, so we need to cable manage. But so was, we wanna do is begin, wanna go from this because over time it will just look like this. There's just so much new features and things like that. We wanna go to this. This is what we like. And so in the past I worked on this website and these people had a big budget. We were allowed to build a new team to completely rebuild their front end of their eCommerce from scratch. We had an older backend system, but the front end was completely clean. And this project looked like this. Oh boy, it was.

The thing is we were able to say, look, ma we cable managed. But like at what cost, because I actually hired a full team for this and it took us six months to have the first component on the pitch. That's how much DX we had to do, how much architecture and thinking. And so it was an extremely expensive process [00:10:00] for a website that is now super.

Let's be honest. It's great to have worked on this, but we need to normalize how to do this for everybody. If you in the audience want to start this tomorrow, you should have a way to cable manage things. Super nice. So they're super maintainable and they work really well. And it's easy also for content editors.

So let's reiterate a little bit because in these architectures now everything is API first. There's no more origin. There's no architecture blueprint and we have these new categories. And so an ideal scenario would be that there is a platform that has no center of the universe. It just helps putting things together.

Like you can see here on the screen, there's multiple different things going on and they all live alongside each other. It's no longer stacked on top of each other, like in the older systems. And so what we need is a platform that is completely opinion list, right? Because there's the one thing we can do is tell everybody in this audience, you can only use angular or only [00:11:00] use J to.

Use our tools. Nobody would use it, or you would, some of you would probably use it, but the others would be just upset with me. So you don't wanna fend or lock in. You don't want roadmap constraints. You want total freedom and you want an SDK. That's awesome. And so this sounds a little magical, right?

But what you wanna be doing actually is look at it like this, right? You have some CMS, you have some comers, you wanna compose pages with the different things from these sources. Then you wanna actually. Put that in the framework of your choice, would that be spelled kit or next or anything goes right.

Remix run, whatever. And then you want to have instant preview of your light website or your live website when you're putting these sources in and then you hit run and it goes to your CDN or everybody's happy, and it can be different things, right? It, you should be able to switch it up and do whatever you want.

And so that sounds really fancy and magical. Just like this image. [00:12:00] And so let's have a look at how you can compose with different hatless sources using uniform, and also how that will keep developers and content editors happy. Working together. And then also let's have a look at that replatforming.

So this kind of goes back to these problems I had described earlier. And so how I want to show you, this is by showing you my personal site. I always rebuilt my site just to try new tech. And in this case I joined uniform, looked at the tech okay. I'm gonna have to try this. How else can I do this conference talk?

And so let's dive in with the first problem is, okay, how can we work with these multiple sources and put it together. I'll show you in the interface, then I'll show you some code. And then we show like how this preview works and how that looks. All right. We are in the browser. And today I want to show you my own website and how I build it and what kind of different sources it use to then cable manage these and then [00:13:00] go into the Jamstack and let's focus on the homepage for a second.

And so what you can see here, I, of course I have a header. And a foot or below, and there is a hero here and I have some highlighted videos of the videos I've made that I chose to highlight. Then I have an image and some rich texts about the work I do. And then I have my latest talk and latest block posts.

And you can see the damn death is here. It's actually today for you. But when I recorded it, it was still up and coming. Anyways, so this is the page and it has been composed with different sources from uniform. My website is using Contentful BigCommerce, Google analytics union from canvas itself. And SMIC I'm using SMIC for my blog post because I really like their They're a rich text editor and what comes out of it, how to deal with that content for the similar things.

And so I use Contentful for my videos, my talks, and some components here and there. And then I also have some fake products to show you some stuff, and that comes from BigCommerce and [00:14:00] I'm actually using the analytics integration to make sure that once I do personalization across all these sources, or I do an AB test that I know which one is more, is used more than the other anyways.

So let's look. To that canvas thing that I'm talking about. So uniform canvas is basically offering you a canvas in which you can make compositions with different sources, and then you can basically drag and drop your page together. And so this is no code yet. We're gonna get there. I promise. So let's have a look at that homepage, right?

And so what we just looked at is basically that hero, these video highlights my rich text stuff and my latest talks and latest blog posts. And that is basically what and a composition in uniform doesn't have to be a page. It can also be a chunk on our website, somewhere with a bunch of components.

In my case, I made it a page. So I gave it a slug of slash home. And I actually made a composition that is, or like a component that is a composition [00:15:00] component. And in this case, I called that the page and it has a slot called component where we inject all our components and. Everything that you put in here, all these components, they have specific types of parameters.

You can choose them. And so my hero, for example, has multiple parameters. One is for afer end, cuz I also want a hero without an image sometimes, and that Farian sits in uniform. You can choose that property there, but the entry of the content is actually coming from content. So a uniform doesn't own that at all.

It just points to it. So if I want to edit this hero, actually go to Contentful like this. So it loads in the interface, and then you can actually edit here because uniform is not a CMS, right? It's not a commerce engine. It's none of that. It's actually, it just points two sources for you. So you can compose with them in an easy way.

So content editing should be in the CMS. And what is cool about how uniform [00:16:00] does this is that your content entry lives inside a CMS somewhere or in an eCommerce system. But how in context that looks to your front end, that sits in uniform. For example, when you click on this video highlights here, I've added a property called background color, dark, or light or little title here, but nothing more.

Normally, if you didn't have this system, the fact that the background color is dark, you would put that in your CMS. But that actually makes little sense because I only want video highlights to be dark at this component in this page, not somewhere else. And so you want to separate concerns a little bit where you have layouting data that fits in your composition, that goes into uniform and then the real clean data for the future that you might want to use.

Come from your CMS or your e-commerce. So if you can look at [00:17:00] this, you'll basically see that everything is actually a Contentful entry because I build the basics of the content from there. But you could argue like, Dude, you're just selling us this super fancy system that looks like basically a wrap around the Contentful API.

Right now that's what it looks like, but it's actually a bit more because what happens if I now wanted to add these products? So let's add some products. Where is it? There it is. And so this product thing, let's say light background, let's call it products. Now you can see that it looks for a big commerce item rather than a content item.

That's how I configured it. We'll have a look at that in a sec when we show a bit more code as well. And so let's just find some Tim Benex products and. I'm not actually selling these are fake, but I just want to be able to show you this stuff, right? So let's do core web vitals consulting, maybe some next, because I enjoy using few and next and maybe tips and tricks on recording yourself.

Let's accept and let's [00:18:00] save and publish. So now we've actually used the same interface, the Contentful system. Products from BigCommerce. So let's have a preview and let's have a look. What just happened to the website. So it's going to local host and beam here are my products. And so it was actually really easy to just grab something from a different source without actually knowing how that source works at all.

And just showing the you this. This is a lovely demo. It's all good. But you haven't seen any code, right? So let's get into that and see how that actually works. Cuz there's a couple of things that are also amazing for developers and not just for content editors like this. So let's how about we just remove all this stuff and we just keep the hero.

and I know there's a little button here. You've seen it, that's because I'm on the Canary branch, it's in the back lock. So basically let's also remove this. Safe. And so we just keep [00:19:00] the hero component. And before we have a look at how that works, let's actually have a look at how we com define these components.

Like here's my hero component. And so what I've done here, I can, I see here, there's that variant thing. And there's a default variant and a no image variant, and I have also added a barter and that barter is actually a Contentful entry and. You are able to actually select Contentful here because that's one of the integrations.

And so actually there it is. So I selected my default environment for Contentful and it found all the types that I have and that's actually the hero type. And so now the system knows, okay. It needs to be something for Contentful. And so now let's have a look. If we go back to that page and see if we're now safe, how that looks.

So I'm gonna be able to click few source here. Let's zoom that in a little. And so basically you have a page, there's a [00:20:00] slot for components in that page and insight, we have a hero that is then connected to an entry ID in content form, which is actually this entry. You see that's that same ID there.

And. What is super important about this is the fact that uniform, we don't store all that information. Uniform does only knows I'm pointing to this thing, that's it? Cuz if you have some sensitive information in there, you don't want that in different systems or if you change maybe the publishing state of a component on your end, in the CMS or you change something that would mean that uniform has to then purchases cash and do stuff.

It's just very complicated and it introduces opinion on how it should work. So what we do is we just store that ID and that's. Now when we have a look at the website, I have my SEO text had run food or a static in my side. So they just come with the front end. There's only my hero. And now that we've seen that it's [00:21:00] literally only that ID.

How do we then actually get that real information in there? And so how we do that in uniform, we call this enhancers. And so let's have a look at my code, how I did this. And so I've built my website in next because I'm a few person I enjoy working with few and kn a lot. And so in my AIC data function, which is like the get static props variant end of next.

What I have done is I've created a used composition, composable and compostables are new things in few or not that new, but to be able to compose your page with, and my composable actually is called used composition. It has a couple of properties to it. So I'm asking this luck. Am I draft state, or is it my published state in this case?

It's draft and some context for next. So if we have a look at that use composition function, in my case, I have decided to put [00:22:00] all the knowledge of how to grab the information from the CMSs on a different project. And in this case, that's a URL. Points to a, for sale project, with serverless functions, where I have a composition API, where I give the slug and all the stuff, all the fancy stuff on how to actually go from a uniform composition to actual data happens there.

And I'm gonna show you in a sec, and it basically just returns the composition and the composition is actually a whole bunch of data with everything in it. And the magic happens in this API here. So let's have a look at that API. And so I've built that here. And so before we go into what that code is, let's have a look at what comes out of it.

So I'm actually asking for slug slash right. And so if you compare it to the previous one where type Contentful entry only had an ID before now, it. TIAL subtitle image description, and a whole bunch of other things. [00:23:00] And so this one, the one that I'm querying with my code is actually rich. And then this one doesn't have all that richness.

It only has the pointer. So there's some magic in between here and that magic we call enhancers. So when you have a look at that API slash composition, what I'm doing is let me zoom in a little bit more. We're actually using the union from campus NPM package. And what this MPM package offers you is a canvas client and I'm using a whole bunch of stuff from my environment's variables.

So I, I basically set up a new constructor off the uniform canvas client, and then here's a whole bunch of stuff to figure out what kind of query parameters I've given, because I might wanna fetch only the draft state, or I wanna fetch the published state and things like that. And so what we do. My canvas client, the one we just made here, uniform canvas can do get composition by [00:24:00] slug.

And that SL we just gave is actually here in the URL URLs just slash, and so for the slash composition, give me all the information. And so what this thing does on its own is actually giving you this. It gives you this data with this entry ID. And so what then happens is we actually have a function called enhance and you give it the composition and you give it the enhancers.

And so this composition or whatever came back from here will now be enhanced or enriched with all the data that you need and then it's returned. So it's relatively simple, but the magic happens in the enhanced function. So when we have a look at these Enhancers. Let's have a look first at the index.

And so we have an enhancer builder and a composed function, and there's a whole bunch of parameter types. Let's have a look at that one for Contentful. So the can Contentful parameter types. If they have anything to do with. Contentful, [00:25:00] then I will compose based on whatever barter I have for Contentful, I use the Contentful enhancer and I do multiple things with that.

And the interesting thing is that this Contentful enhancer, when we go, where can we? Yes. This thing basically just uses the content client from NPM. It sets up its clients and it uses the code that uniform gave you out of the box. Like the Contentful enhancer creator, you give it the client and you can also have a client list.

You can have multiple Contentful clients for different sources in content for itself. And what it would then do is actually just query for you. And so you. For each thing that it downloads. So it gets this guy, it finds the ID, then it queries that for you through this one. And then it returns that here.

And so this now has all the information for that hero component, just [00:26:00] like normally querying content form. And then what we've built is that's what makes this so powerful. We don't actually want all that data from content because it has all these CS blocks and a whole bunch of other things that we might.

Be interested in. And so we also have another enhancer that you can put behind it as a chain, which can then look at that model that you gave back and just clean it up a little bit. And so you can change these enhancer. So you can see that I'm doing the same things for other types of thi of other types of Contentful queries and stuff like that.

And so what this means is I can get data from Contentful with let's say there's 20 fields in a certain structure. I came with the normal enhancer query that, and then I can chain other enhancers to change it up. If I got my rich text from Contentful, what I could do is I get the Jason from the rich text, the enhancer would actually change it into an HTML string, and then I can remove all the CS fields and all the other stuff that I [00:27:00] don't need in yet another converter, which is let's.

Let's have a look at the Contentful model converter here. This one, for example. This just loops over. It changes some fields, maps it to different data. For example, the image is much simpler now. And so what you can do is you can have a bunch of existing components that have a certain amount of props that they need, but when you just query a new CMS, The props don't align.

But these enhancers they can actually align it for you. And so that's how I do it. And so my component itself, when we have a look at my component here, let's say my hero doesn't actually know a lot. About uniform or Contentful at all. It just needs fields, image, and just deals with it. So if I now want to change the CMS from content full to Prismic or content stack or whatever, I just change my enhancer and this component doesn't have to change at all.[00:28:00]

And so that's how that kind of works and how you can go from a simple just IDs to a much richer thing here. And this, you can now give to a page render components on the fly. Look at that type let's render a hero component, put the props in and you're off to the races. And that's how that works.

And the interesting bit here is that I chose to make a team Benex compositions. Project where these enhancers lift somewhere else. This means my front end has zero idea of what CMS is or whatever is there. And that helps you a lot with making sure that if I want to change the CMS, you just go to these enhancers, you change it here a little bit.

You map the data and the front end has no idea that something changed and it just works. So this allows you to not really re-platform. Like bigger projects anymore because you have CMSs or commerce tools or things like that. You just change one thing, remove something, add [00:29:00] something, you change an enhancer and your front end is the same and everything works.

And so this is what I wanted to show you today. And there's lots more we could dive into, but it's probably getting a little long. And Yeah, that's it. I wanna thank you very much for watching and taking the time. And if you like this, feel free to reach out on Twitter at thes or have a look at my YouTube page.

If that feels like something you might wanna do lots of content like this there, and you can also go to uniform dot death to find out more about uniform. That was

**Brian Rinaldi:** a great presentation, Tim. I'm particularly fascinated by this whole concept because I think people, as they build JAMstack apps, they tend to bring in more sources and sometimes it's a problem that they don't necessarily recognize right away.

But then as the application starts to expand, then all of a sudden this. Whole level of complexity comes into it. And then [00:30:00] it's how do I manage all these different sources and make this easy? So yeah, that, that was really cool. We do have, sorry, go ahead. Go ahead please. Oh no.

I just

**Tim Benniks:** wanted to say thanks because I feel the same and the interesting bit here is that not every developer has had this problem, but lots of them have, and I've worked at agency for many years, doing all these kind of big projects and we always build uniform ourselves a little bit, but then it wasn't the time yet to have a startup to actually pull it off.

And so I'm pretty happy that it's working out.

**Brian Rinaldi:** Yeah. I've talked to developers who have this problem. And oftentimes, like I said it's when you talk to a developer, like before they run into this problem, they're like, yeah I, I know how to manage sources. It's fine. I'll just do another API call, no big deal.

And then when you talk to the later, after they have this, they're like, oh my God, it's such a mess. And I don't know how to clean up that whole cable management analogy you use. It's so hard to clean. After the fact. Yeah, definitely something [00:31:00] to, I think most modern developers are, for modern web applications are gonna have to deal with, at some point as we start to pull in so many different sources for our data.

So we did have one audience question and then I have some other questions, but I also wanna just remind folks that you can feel free to throw more questions in. We'll get them answered here with Tim. So feel free to ask your questions right now. But I will ask Sean's question. Does uniform also write back to the data source?

It seems like it'd be confusing to ask a content editor to go to three different product data sources to adjust content on a single page.

**Tim Benniks:** This is actually a great question. And we have these questions internally as well. Like how far do we go? How close do we integrate with these sources? And so we have some proof of concepts where we are trying this out with systems that have APIs that are super rich.

Like with Contentful, we could do it, but you might see some issues where data models might change. On the other [00:32:00] side. And then how do we know about it? And the more we integrate, the more opinion you introduce and the more complex it gets, and this is also the reason why we don't actually store the data on our platform.

Because what if it's sensitive data or what if something changes on, let's say the publication of a certain component. In a CMS. We don't want to have to deal with all that caching and purging it. And actually the fact that it's all completely separated allows you to also maybe do it without Jamstack and maybe with SSR and you put these enhancers, I spoke about somewhere else in some serverless function or something else like that.

And so we might do it if there's lots of people asking, Hey, can you just, I'm always making this hero and I have to do it five times a. Maybe we can figure it out and do it for now not. Okay. And what we're trying to do is make it as easy as possible to work with, right? So you can click on, let's say that here on you see the icon for Contentful and you just click and run.[00:33:00]

And so you just click and you go on and if you dance, change something and save inside Contentful, we're listening to that connection. So your preview is automatically updated. .

**Brian Rinaldi:** Okay. That makes sense. Cuz I, I would feel like the concern would be, if you start to, once you start to bring some of those pieces in you in effect have to rebuild a CMS to be to land live over top of the CMS that you're connecting to.

Exactly.

**Tim Benniks:** And that's not the point. We are only pointing and composing. We're literally saying these are the things you used, but we don't own any of the. Okay.

**Brian Rinaldi:** But let's say my application, like I don't know. I'm I'm storing comments, user comments in the scene. Can, would I have to go around uniform to be able to write back to it or I can actually do the post into uniform and that will be passed along.

**Tim Benniks:** Ooh. Right now you would have to go get alongside of uniform because we don't, you cannot really post to us unless you wanna use the CLI there's all [00:34:00] APIs for everything, but it's more of a composition related tool rather than holding data tool. And It is actually quite an interesting subject to have something with comments.

And so what I, what you could see is uniform is really great. If you have, let's say a bunch of pages that you have to compose together by hand, right? To really make them like a nice campaign page or a landing page or a home page. But what if you have a hundred thousand product pages, you don't wanna make another composition for every a hundred thousand pages.

So we have some sort of tools to have some dynamic compositions to fill the data later, but you can also just say, okay, I'm gonna make uniforms slightly smaller. And I will still connect to my CMS and to my commerce systems separately later. That's the whole point of being completely opinion list and agnostic.

You can make pages, but you can also make it much smaller and only get one or two components from uniform. Put that on a page that already exists. Okay.

**Brian Rinaldi:** And so when you were talking, I noticed, for instance, you had the logos and stuff inside [00:35:00] uniform. So I was wondering like, speaking of it being opinion list, like it doesn.

You don't have to use like a predefined set of data source. You can define like a custom source of your own. Am I right? Yes.

**Tim Benniks:** Yeah, you can. Okay. Like we know that when you're a little bit in that enterprise world and people wanna know the. Yeah. The usual suspects have to be in there. Yeah.

And we integrate with that really well, but we are now releasing something called the mesh SDK and mesh is our name for all these integrations. And that SDK allows you to do it yourself. Okay. And so we wouldn't have cloud area in there, for example. And so we have this SK that came out in our Canary branch and last week I just built a Cloudinary integration and use it on my website.

Now it just happened right after I recorded this talk. But that means if you have some sort of CRM somewhere or some sort of old school thing that might have an API. Or anything like maybe you want to use STR that we don't have an official integration for, [00:36:00] you can either make it yourself or you can ask us, Hey, do you have something?

And then we can give you an example. So yes, you can go crazy if you want.

**Brian Rinaldi:** Okay. And so those enhancers are they like, are there. If I use con Contentful, I look like you were showing is that something that's preset or you have example code, like I can use for Contentful or do I have to write those every time that I'm using?

**Tim Benniks:** There's a bit of a mix going on here. So we have a couple of functions that help you to actually make it something that isn't enhancer to instantiate it. That comes from our MPM packages that are specifically for Contentful, however, you can also just make your own and on our documentation, you can see we have a whole bunch of like integrate with Contentful or content stack or BigCommerce.

And there we explain how these enhancers work, which parts you get from NPM, from us and which parts you do yourself. Because for example, you can connect to multiple different Contentful spaces, cuz you might have a global space [00:37:00] for your legal data and a local space for something else. We do not tell you how to connect to Contentful.

We only tell you what to query and then we help you to query it. And that's what these enhancers do. So you make two different Contentful clients in your code and then you just give these clients to uniform function that will then query for. Sure. Okay. Does

**Brian Rinaldi:** it make sense like that? That makes sense.

And I know you didn't really get into it in the presentation, but I know I've looked at uniform for that you do things like AB testing and personalization. Yes. That you can, so those are like, you get the cable management piece and then you add those pieces on top. And that kind of exactly like it.

**Tim Benniks:** Cool. So what the excellent interesting bit here is that we are dealing with the digital experience platform here in this world. And the digital experience platform is not just your website, your mobile app, and a CMS. There's much more in the context of it to make it great for marketers or end users.

For example. And that's where personalization comes in. I think literally [00:38:00] every client I've worked for in my career wanted it, but it was too hard to do. And now we have all this new technology and it's even harder because how can you personalize across a Contentful item and then a commerce tools product, right?

Yeah. You, You want to have to be in one place. And so we add these extra contextual bits around AB testing and personalization on top of all the stuff I was.

**Brian Rinaldi:** Okay. That's cool. I haven't, I have to definitely check it out again, cuz this is a problem I've seen, like I said so many times, so it looks like you have a really cool solution to it.
