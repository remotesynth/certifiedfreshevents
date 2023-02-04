---
_build:
  list: false
  render: never
---

**Simon MacDonald:** [00:00:00] So I'm here today to talk to you about server side rendering web components and we're gonna get into that. Unfortunately, we're gonna have to do some background information first in order to get to there, but we'll build up to it. As John said, I'm Simon McDonald. I am the head of developer experience at Begin.

If you need to get in touch with me after this talk please hit me up at Mastodon. That's the the link for my Mastodon account. You could probably find me on Twitter. I still have a Twitter account, but it's getting scary over there, so Mastodons probably the best way to get ahold of me.

Anyhow, I'm gonna start off my talk by asking a very silly question. Have you ever had a dependency break on. Okay. Yeah it's a stupid question. Dependencies are unstable and they could be a time sink, and this kind of unplanned work keeps you from iterating on your product and it's really frustrating.

I realized when I was putting together this slide that I was thinking in, that office space came out in 2006 or 2007. But in actuality it was [00:01:00] 1999 and that was. Check my math 23 years ago, which is scary. So some of you may not know about this movie or may not even been born then, which is scary to me.

But it's a classic movie about tech workers and a cube farm. And if you get nothing else outta this talk, at least you got one really good movie recommendation. So try and remember that. There's a really good quote here from Jeff Bezos and people ask him all the time, what's gonna change in the next 10 years?

How do we prepare for this stuff? But the thing that they rarely ask is, what's not gonna change in 10 years? What's gonna be stable? and he thinks that the second question is way more important because the things that are stable, you can build a business, you can build a strategy around, and I would argue the same thing.

It's way easier to predict the things that aren't gonna change over the next couple of years. And that's what you can really use to build your business on top of. Why do we want to build businesses ontop on top of things that don't change? It's because, software is really complicated and it is certainly [00:02:00] not made less complicated by adding a lot of dependencies to your software.

Arguably it's made way worse because these dependencies often conflict with one another, and that can be a huge pain. Now we've seen this kind of thrash before. Web browsers used to be very broken. The browser ecosystem used to change all of the time. It was not uncommon for these different browsers to interpret capabilities differently.

And therefore they would break different websites. You know what I'm looking at this slide here. It's a little bit outta date, so lemme just fix it really quick. Yeah, okay. That's a little bit more accurate. Even though Apple is making a lot of noise about 2023 being the year of Safari, and I really hope that they do fix a lot of things in their browser.

But I'm a little skeptical because they do have a, a monetary reason not to make their web browser better, but, we have hope. But. Why browsers really don't break. When it comes down to it, the web standards that we have evolved to now give [00:03:00] you consistent behavior right across a bunch of different browsers, as long as you, those standards are implemented in which they are in most cases and the browsers automatically update themselves so that they are evergreen.

You never have to worry about them being like terribly be behind. And in order to remain competitive in the browser marketplace, they have to maintain this backwards compatibility. So you know that these things are gonna be working at all times. So web browsers are backwards compatible. A so yeah, in case you didn't notice, I'm Canadian.

I was really gonna prove it. I think there's a lot of Canadians here today, which is great. We are infiltrating everywhere anyway. What we really mean by this backwards compatibility is that if you look at sites and code that were written over 25 years ago, you'll see that they still work perfectly well in today's modern browsers.

One example of this is jQuery. So jQuery was used in many sites in order to, Smooth over a lot of the differences that existed in these browsers. And over time as the browsers became more [00:04:00] and more standard compliant, we didn't really need jQuery anymore. So we were able to drop that functionality and use what was in the platform.

But if you have a site that was written in 2003, it'll still work even with an old version of jQuery, cuz the browsers will take care of that for. So we have to ask ourselves if the browsers can be that stable, can our own source code be that stable as well? And I would posit that breaking changes are optional.

Unfortunately, we tend to eagerly opt into them. Just because, you're picking a framework that compiles to a web standard, it doesn't mean that you're enjoying those web standards. So you might wanna think about that just a little bit more. So when it comes to changes, there's, two kinds of change.

And of course the answer to my previous question is, yeah, of course we can opt into things so that our service code doesn't break and it's very stable. But there are two kinds of changes that we have to look out for. The first, the bad one is breaking changes. That's [00:05:00] when we see the removal of APIs or interfaces or behaviors.

And of course, in some cases if you are removing something because it's a security issue, then that makes perfect sense to get rid of it. But some, a lot of times there's. Breaking changes are for the sake of being a breaking change. Many times the package is handling things using sim correctly.

Updating a major, introducing breaking changes is good. Updating a minor or a patch and introducing major changes is bad. Cuz that is not the way that is supposed to work. Those of us that had been around long enough, probably remember the giant breaking change from going from Angular one to two was a complete rewrite of your application.

And then they did it to us again in a later version of Angular. And I think a lot of people were, burnt too many times there and moved on to other platforms. React 18 has some breaking changes in it as well. It's handling it quite well because it's breaking things on a major. One of these things includes the way that they do updates.

They're batched. And of course TypeScript 4.8, which is a minor update, also included [00:06:00] breaking changes, which is not really what you wanna see. You want those changes to be introduced on majors. So if you're generally following SIM and you're seeing like, oh, TypeScript 4.8 is out, I'll just upgrade it because.

It's only a minor change. It shouldn't have any breaking issues. And there you go. It introduces breaking changes on you and you've got a whole bunch of unplanned work because of it. So you really wanna pick dependencies and frameworks that properly handle these changes for you and make sure that they're using SIM properly.

The other kind of change or the good change as the additive change, and it's just that it adds any, it adds new functionality without removing any of the old stuff. So the change from HDP one to two is, is great. It gives us new capabilities, but doesn't break any of the old protocol. When we were back doing XML HTP requests, our AJA stuff and that was like a pretty good API I to start with, but we've refined it into fetch and that's a much better a p i for developer ergonomics.

And of course, we've added things like a [00:07:00] sync of weight which you can use or not use. You can. Still do callbacks if you want to. You can still use promises, but if you want to write kind of code that is using a sync await, you can do that. When we're adding the module type of a script in as well, instead of just using the old standard script tag, we're able to tell people that this is like a new Es module instead of the standard JavaScript thing.

Anyway. . These are all examples of additive changes that have been added into the platform without breaking anything else, and that's just. . Now, the front end itself is also very complicated. . Yeah, it's a, the front end is this vast ecosystem that has many compatibility problems, so it's very common for you to transpire code.

But those subtle differences between the code that you write and the code that is actually run can cause unexpected breakages, which is very frustrat. taking a look at these templating systems. [00:08:00] So earlier versions of JavaScripts didn't have the, the string template, literal concept. So we took a page from other run times like Java or Rebi or Python, and we created these templating languages.

So it's like embedding a smaller language into your bigger language. And sometimes that makes the syntax really hard to read because it's not very standard. It's not actually, JavaScript in this situ. . And then we have other things like non-standard dialects. JSX is not JavaScript. It looks like JavaScript.

It acts like JavaScript, but you can't run that directly in a browser. You have to do a transf step in order for JSX to actually be executed in the browser. So the code that you write and the code that you're running, this situation is very different again. And then another way of doing things is introducing a completely new programming language and then using it to compile down to web standards.

So that's the thinking behind Svet, and it has all the [00:09:00] same problems with a contemplating language. It's like HTML, it's like JavaScript, but it really isn't. Now you have to give credit to Svet because they are very upfront with this being a non-standard dialect. And they stand by the idea that a compiler is a better solution because it can admit more efficient.

Okay, let's take a look at some of the compilers. All right. The problem with ERs is that the obfuscated, the runtime code it's bad and it gets worse. You take a look at this code example that's not very readable. Any kind of bugging in this will be extremely hard to diagnose, and you're not sure where things are coming from because this isn't the code you wrote.

It has no bearing on the code that you actually wrote. now a 12,000 line of code. File is totally normal for a trivial bundle, and that's not very efficient and it's really terrible developer experience for you to debug. Lots of people will think that, object source maps will fix this problem, but quite often they don't work.

And [00:10:00] especially when you're, doing things in an environment like no js, which is not filled for this type of thing. And then of course when you introduce something like a transf step, do you even really know what your tools are doing? You're really just counting on them to do the right thing for you.

So let me give you an example of something that I recently came across when inspecting an application. This one liner, which I think was like something like 295 or 296 bites, very small completely separate JavaScript file and. As best as I can tell, what it does is adds in this method called to lower, which just calls to lower.

How is that optimizing code for you? How, why is that better? I don't understand. It saves me typing for characters, but I would argue that having to go through this every time I need to call something that is in the platform is probably a bad idea that's gonna add overhead anyway. So [00:11:00] check what your tools are doing folks.

Now static is not equal to dynamic. Earlier today, Anri talked about, some metrics like first Contentful paint and time to interactive. And some of these metrics can be absolutely terrible when we're using our giant frameworks because what's happening is we're having to send JavaScript down to the browser in order to be able to create the user interface, which then makes API calls to the backend in order to populate the interface with the data.

And so that's really gonna impact your first content full paint, your, your time to interaction. So you really wanna look at something like that. Is that really the right way to do things? I would argue that in today's modern JavaScript environment, we have way too many moving parts.

What can we get rid of? , can we simplify this situation? What are the root causes of the complexity? How do we avoid this kind of stuff? And one of the ways that we can avoid this [00:12:00] is by going back to the way webpages and websites were previously written. We have a new case for progressive enhancement.

Progressive enhancement is not new. People have been doing it for a very long time. At some point in time, it ran out of fashion. And, I love the JavaScript community. It helped me not buy this house, but put a pretty good down payment on it. But it does get to be a bit fashiony sometimes.

And progressive enhancement went outta style. But we really should bring it back and think about it more because there are many reasons. First, the ethical reason. For inclusivity, we want as many people as possible to be using our websites and applications. And when you build with progressive enhancement, when you start with a working HTML format, it is the most accessible application that you could start with.

Now, of course, there's also business reasons as well if you need to make that argument. The bigger your audience the more devices, the more people who can use it, the more money that they will generally spend on your products or services. And then there's the selfish [00:13:00] developer reason as well.

I hate fixing broken stuff. I like it when stuff works. So if I have some way that it's gonna work for, screen readers, it's gonna work for old web browsers, it's gonna work for the evergreen web browsers, it's gonna work, on some sort of new device that's coming out that is a virtual voice assistant or something like that.

All because we're using progressive enhancement technique. , that's what I want because I will be able to spend more time working on the product, adding new functionality that makes my customers happy instead of chasing a bunch of breaking changes. So with progressive enhancement, you start with working HTML using, standard anchors forms, and then you make it better by adding JavaScript.

It's not the other way around. It's not. You start with a bunch of JavaScript and you see where the JavaScript fails, and then you make sure that the failure cases can, is still workable. That's graceful degradation. Progressive enhancement, in my [00:14:00] opinion, is way better than graceful degradation.

And also when we talk about doing HTML first, we're not talking about HTML only. It means that the JavaScript comes second in your application because that's how web browsers actually work. If open up any site and you grab your inspector and go to the network tab, the first thing that's load.

Is your JavaScript and your JavaScript gets, or sorry, , I really screwed up there. The first thing that gets loaded is your HTML and then your HTML is used to structure the page. And then after your HTML and your c s are loaded, then the JavaScript is loaded. And that just makes your page better, it gives it more interactivity, but it should be a sprinkling of JavaScript, not a tsunami of JavaScript.

That will make your life a lot better. Now there's a lot of next generation front-end frameworks that are HTML first 11, which I think there is a talk on tomorrow remix Astro. All of these[00:15:00] these frameworks are looking at doing HTML first. And I would say that HT m L first is the new marketing way of saying progressive enhancement because as I mentioned earlier, somehow progressive enhancement.

Bad reputation that went out of style, not that it ever should have. So you could look at any of these frameworks and see how they're doing things as well. For us at begin we've had this opensource project since 2017. We've had, tens of thousands of apps built on top of it and.

Enhance, or sorry, architect has always been HTML first. So we were building our applications just using cloud functions to output HTML coming in directly from the server. So everything that came down from the server was working H G M L, and then we would enhance it with JavaScript on the client side.

We've been doing this for at least five, almost six years now, and some of the things that we learned about that and inferred what we would be doing later with the enhanced framework, which I will talk about shortly. [00:16:00] So what if the entire backend was just pure cloud functions?

So architect, the opensource project is mostly concerned with the backend. So it's responsible for saying instead of balancing or low balancing a whole bunch of web servers, let's just make all of the backend things like small cloud functions that we can manage using architect.

It's been working pretty amazing so far. . Now with the modern JS ecosystem, we've got some major problems. First it's brittle. The, it's, you got these ecosystems that are incompatible with each other and they often are failing. We also had these non-standard template libraries or worse, and opaque programming languages that we have to add on top of things.

Adding more complexity onto building web applications. And quite often they are static, so not dynamic. You're not getting the content that the user is wanting for right from the very beginning. [00:17:00] And it results in all of these kind of, spinners and skeleton screens and really bad metrics on your time to first interaction.

So can our front end source be pure standard based HTML C SS and JavaScripts? So what if instead of learning a non-standard programing language I don't know, JSX and compiling it into JavaScript, we start it with web standards. Let's start with some very basic primitives and get things working incrementally.

Let's pick HTML and CSS. We'll start with that from the very beginning. And then we take those Legos and we stack them up and we build bigger and better things. And once we've got it all working we can start to add client side JavaScript for the more enhanced browser behavior. In other words, what I'm really trying to say.

Use the platform . Like I said earlier, back in the day we used to use jQuery for everything. But now we rarely need to reach for it since the most important parts [00:18:00] of jQuery have become part of the platform. I mean it made it so much easier to do query selectors in jQuery. But now we have query selector all built into the platform and it is because of the popularity of jQuery that we have those things.

So it's the same thing with some of our modern JavaScript frameworks that we use to build reusable component user interfaces. We've popularized a lot of them, but is there something in the platform that we can use today that will reduce our dependencies on some of those frameworks? And you know the answer is yes, of course there is.

We have web components and web components is a suite of different technologies that allows you to create reasonable custom elements and utilize them in your web applications. So these. Custom elements are all encapsulated away from the rest of your code. So all of the styling and the behavior can be, just encapsulated into a single file so that you can reuse it in different projects and it doesn't affect other parts of your application as well.

There's three main [00:19:00] specifications that are used when you're building web components. The first is the custom elements. It basically allows you to define a new tag that represents your reusable component. We have the shadow dom, which allows you to encapsulate your styles and your dom away from the rest of your application so that it doesn't affect things.

And we use things like slots and templates in order to be able to compose components out of other components. So you can really get granular and have some very small leaf components that you build up together into a giant tree. So web components are, amazingly enough. I think somebody said earlier today that, react is about to have its 10th birthday in or late 20 or mid 2023.

Web components has already had its 10th birthday because it's been out since 2012. The difference is it was an evolving standard and for many years I. Wouldn't say that it was ready for primetime, but we've really reached a point now where web components are available across all of the [00:20:00] effort green browsers, and there's no reason not to use them right now.

So if you can use a web component and get rid of some of the large JavaScript frameworks that you're using in order to build UI right now, you should probably take a look at doing something like that.

Now the thing is, it, they have problems. All solutions, have problems. And a couple of the things that you will notice with web components if you are starting to use them, is that they break progressive enhancement. Unfortunately when you set up a web component, You're using JavaScript to define it, you have to call the custom element define in order to register your component with the browser.

So if JavaScript fails for any reason, and believe me, there's a lot of reasons that JavaScript may fail and it's not because somebody has just decided to turn it off because they feel like being a jerk and breaking the world. There's lots of network issues. There's d n s things. There's, ever been in a network and try sorry.

Ever been in an airport [00:21:00] and try to do anything with the way that everything runs. Captive portal, just messing stuff up. There's lots of good reasons why JavaScript may run into issues. So this is a problem with web components because if you don't have JavaScript, you're not gonna be able to instantiate that web component and the browser won't know what to do with the custom tag that it you're giving at.

And the other thing, Is again, the way that browsers work is first you load the html, you'll load the css, then the JavaScript. So if you have a tag there, that is your custom element, it is your web component. Until that JavaScript is loaded and pared and executed, it won't know how to de it won't know how to display.

That custom element. So you'll get this kind of white box and then it will flash into what it actually should look like. And that's called the flash of one style. Custom element. So those are a couple of things that you have to be aware of when you're dealing with web components that there are common problems.

So I wouldn't bring these up [00:22:00] if I didn't have a solution for them. . So enhance is an HTML framework. It's one of our it's another open source project that we work on and begin. It allows you to author your pages in HTML use generally available web standards oh, I don't know, web components in order to build your UIs and then progressively enhance that working HT m html with some clients at JavaScript to make everything.

So the fun thing about Enhance is that we're gonna be able to, you write your web component as a pure cloud function using enhance, and then it is expanded on the server. So we are actually will go through and figure out what actually needs to be as part of the web component, send it down the wire so that when the initial H G M L is loaded, For the browser, that, that custom element, we don't have to worry about the defined thing because all of the all of the HTML insider has already expanded.

So it gets rid of that issue. If JavaScript fails you, you don't have the custom element defined. It also gets rid of the flash of on style custom element because [00:23:00] your initial. HTML is already there for you. It also allows you to do that personalization on the server where you send all of the data down immediately so that, hey, if I'm logging in, it's Simon McDonald, I'm gonna see what my to-dos are.

I'm gonna see what, the weather is for my particular area because I already know that stuff before it gets to the server. And that's also gonna help your metrics for your time to first. Interactive is gonna be a lot quicker. Your time to first. Content full paint is gonna be better as well because the data is already there in the HTML.

We're not waiting for the JavaScript later to be loaded. We're not waiting for that API call to be made after the page is loaded. We've already got that in there for you. So how does that all look? Alright, we're gonna try to do a demo here. So let's see what happens. Let me just switch over here to the screen.

All right. I have already created a sample enhanced application, and I've done that because nobody wants to see N P M install running. That's not a good use of your [00:24:00] time. In the enhanced application, we have a couple of things. Under the app folder, we have our APIs, our elements, our models, and our pages.

So basically anytime that you hit a page For instance, the conferences page, it will look for a corresponding api to call as well. So it will call the conferences API wrote, get the data for you, pass it onto your page, which can then be used in your elements, which are part of your page. I think the really, the best way to show this kind of stuff is to start with building up a page.

All right, so let's just start with let's call it about html. And so we have our brand new page here, and let me just grab some code from the other side of my screen because I am one of the world's worst typers. I will spend I think 33% of my time hitting the backspace key alright. So we're just gonna have this HTML fragment.

We have a section, we have a header one we've got a boat, me, and then we've got this custom element called social link. So if we take a [00:25:00] look at that in the browser. . If we go to our about page we can see that we have that title is there, and if we open up that section, we can see there is social links.

Hey the browser knows that there's a custom element, but since there's no definition for it, it's just not showing anything at all. All right, so let's fix that. We're gonna go over into our elements folder and we're gonna create a new a new file. And it's, see how I can't type, always call it social links.

Mjs. And one of the things to note here is that your custom element should have a dash in it. Basically the way that web components work is you can't give it a one word name because that could conflict with the tags that are already registered in the browser. So that is a requirement when you're naming your tags.

All right, so I'm just gonna like copy in this pure cloud function here. What is happening? Is when this function gets called we're gonna take a look in our state to grab our store in our store to [00:26:00] grab our socials, and then we have an unordered list and we're just gonna map through that unordered list printing out some list items with all of the different socials that we have programmed.

So if we refresh the page right now you'll see that. Okay. Social links, which used to be completely empty, has an unordered list tag in it because what's coming down from the browser is already expanded for us. That's great. So even if JavaScript wasn't working, we'd still be able to see our social links.

But the problem that we have right now is we have no data. So if we flip over to our API folder and we create a new one called about mjs, so this is our API I route that is gonna be run. When we hit the about HTML page and in this case we can use any of the verbs that we want to since we are gonna be getting the page, we'll use the get verb, but we support post, put patch, delete, et cetera for your API routes as well.

So we are just gonna return some, Jason [00:27:00] gonna have a socials array, which has all of my different socials. And if I go back over here the hot reload is already taken care of it. So our unordered list is populated with all of the different allies, which is all of the different places you can find me on the interwebs.

Not super sexy, but it works. And the nice thing is this, if I, turn off JavaScript here and I refresh that page, it still works because all of that data is coming down from the server already. It won't break. One of the other fun bits that we should would mention if we go into our social links side of things we can also add some styling in here as well.

and I am terrible at c s, so I'm gonna do something like incredibly ugly. So for our let's see, for our honor list component, let's just make the background color red because I am terrible at c s s. [00:28:00] And there we go. One of the things that you'll notice, With Enhance is that we are hoisting those styles up to the header for you?

No. That's our default. Enhanced styles. Yeah. Where is my styles? Yeah. Oh, sorry. It's right here. It was already expanded. So our social links component, anytime there's a UL in it, make the background color red. You're able to start building up your components using html, CS and JavaScript in this single file component type of thing.

And we will worry about hoisting your CSS into the head so that it can be used and also any kind of JavaScript that you add in there as well. The other thing that we should take a look at is something I've run before. This talk and then this is this conferences thing. I have this conference coming up in Montreal.

It's called K Fu, and that's the date. But I realized that, oh yeah, I should probably [00:29:00] add this conference in as well. So let's just put in the jam dev and let's see. It's today. And there we go. All right. So we have these things in, and basically what's happening is using Enhance, we have run the Scaffold generator, which is a lot like, what you would see in Rubion Rails.

And we've created this, CRUD interface for you so that you can create, read, update, delete list your objects, and we're having all this into a backend database. And in this case, we're using DynamoDB in order to store all of this data. . So I'm like, oh, actually the date on K Fu is wrong. So let me just go ahead and, whoops.

I'll just change that to my presentations on the 22nd. So it's all well and good. And then of course if we turn off JavaScript, the page still loads and let's just get rid of the jam dev because we're already doing that talk today. And there you go. You have, working HTML that can be [00:30:00] progressively enhanced to add more functionality to it.

But in a lot of cases you may find that you don't even need to progressively enhance these things. And a lot of cases, especially if you're working for a large multinational corporation and you need to like do these kind of one-off things, you may want something like this instead of having to get into way more complicated code.

All right. Let me turn JavaScript back on before I break everything else in my browser. All right. All right. Now some of the key concepts around enhance is that, we have file-based routing. So anything that you put into that pages folder and you can nest it as deeply as you want to that will show up as a page in our enhanced application.

Any kind of reusable components you want could be done using custom elements, using your web components. We have this built in c s utility class thing called enhanced styles. You can use it you can pull in your own type of c s if you want, or you can even add tailwind in.

But we give you a default way of doing utility based CSS to start with. I know that [00:31:00] is. A topic that not everybody loves. And then of course the API route that I showed you you don't have to worry about passing in these props to ivory component any, anything that is at that route. In this case, we use the about page.

So anything that is like. In the about page, all of the child elements to it would get all of the props in the store so they'd be able to pull it off there. You don't have to worry about doing any kind of crazy prop drilling or manually wiring of these things. . And then of course, all of this is done using progressive enhancement in standard JavaScript.

There's no special syntax. If you are going to do some in client side JavaScript for things you would just end up adding a script tag into what you send down to the client, and that's where you would instantiate your your web component on the client side and, register your event listeners and do all your other normal JavaScript.

And underneath the hood we're using architect to deploy this thing. We're using AW s to run your cloud functions [00:32:00] DynamoDB in order to be able to do your database. So it's a fully functional web app. So it has your infrastructure as code. It has your cloud database that is completely managed.

Everything is pretty much being done for you. So with enhanced.dev, we are doing a pretty good job of bringing together both the front end and the back end. They can really agree upon things in this situ. Now if you want some more information on this, I think the best thing to do is to check out, enhance you can read the docs at enhance dot dev slash docs.

You can join our Discord and ask us questions. We're happy to hear from them. And of course, follow us on Mastodon not Twitter because it's a terrible accessible now. So anyway, that's that's pretty much where I've got on this talk. Please let me know what questions you.

**Sean C Davis:** Thanks Simon. I love that presentation. I have so many questions and we really only have a few minutes, and so just a reminder to you folks in the audience, if you do have a question, click [00:33:00] that, add a question link at the bottom of your screen, add your question there, and we will try to get to it in the next few minutes.

Now, I've got this long list, so I'm gonna jump right in. So at the, at JM Dev we're often talking about JAMstack and different trends and JAMstack, and I know that folks are generally we're still holding on in some ways to the more traditional static site generators, but we're seeing more server side rendered content.

And so I imagine a lot of folks are watching your presentation and thinking, is it just, is it like exclusively ssr. Are, can, do you have an option to pre-runner content with enhance is that in the works or you've solely focused on the server? . 

**Simon MacDonald:** Yeah we're exclusively focused on the server side rendering piece.

One of the things that I neglected to show is that there is a public bucket, which basically ends up mapping to an N S3 bucket. So if you wanted to run a process outside of enhanced that would populate that bucket with your static site generated content, you can definitely do that. One of the [00:34:00] traditional.

Things that I've seen people use JAMstack for is reading a bunch of markdown files and converting them into HTML and storing that in your bucket. We've had a lot of success with actually. Just automatically generating that HTML on the fly. It does not take very long at all. Enhanced.dev itself is done using that.

All of the documentation it's an open service project. You can see how we did it. We've written articles on it. Before as well. There's not really a performance penalty on that. And one of the nice things about rendering things this way is that if you have to insert any kind of dynamic content or personalization based upon the user that's logged in you can query that on the server side and send it down the wire with the initial page load and not have to wait for another API call to be done after the fact.

And, It's where this stuff fits into the new definition of JAMstack because there's no one right way to do it anymore, eh? 

**Sean C Davis:** Exactly. So I imagine that you're gonna be able to [00:35:00] use this in conjunction with begin, but what about a lot of those other cloud providers? Can you pretty much deploy an enhance application anywhere?

**Simon MacDonald:** Right now the enhanced applications are deployable to aws. It's based upon architect is the underlying functionality for it. So we're gonna give you the best experience possible on begin to be able to deploy to our infrastructure. But. If you do not feel like using begin, you can use architect to deploy directly to aws.

And of course, if you are really feeling like you wanna manage it all yourself, you can eject from architect and deploy directly to AWS as well. In that case, you've gotta manage a lot of, cloud, cloud formation stuff yourself. And I do not recommend that. You definitely wanna use a tool to do your infrastructure as code because you.

10, 10 lines in an architect file where you have a maybe five API calls, a static bucket ends up being Yeah. 1400 lines of cloud formation. And you don't wanna write that. That's just terrible. 

**Sean C Davis:** Yeah. A case where the using the [00:36:00] abstraction layer Totally. Okay. Yeah, 

**Simon MacDonald:** exactly. 

**Sean C Davis:** Okay, so I also noticed that there were a handful of mjs files in the project.

And I know this is very, , very polarizing topic, but I'm curious about your opinion and enhances opinion on type script. Is that something that you have native support for? Do you feel like that kind of goes against the idea of getting back to the basics using native libraries, 

**Simon MacDonald:** et cetera?

Yeah I'm not personally a fan of TypeScript. You can use TypeScript with enhance and begin but you're basically adding a transation step to your code. So the TypeScript code that you write is not the JavaScript code that gets executed on your browser, and we're trying to stay away from that.

It makes it. More difficult to debug. I know that people love a lot of typescripts functionality. I'm very excited about one of the proposals at TC 39, which is to add types to JavaScript at [00:37:00] least in order to be able to say that. In this method signature, this ID is a quid, and this is a string, and this is an integer, so that kind of static type checking can be done at development time and it just disappears at runtime.

And so you don't have to worry about doing all the translation and stuff like that. 

**Sean C Davis:** That makes sense. Yeah. Yeah. Now in the chat a little while ago we had a message looking back here from Anri, and he mentioned that he profiled the, oh, it was the CBS sports website and said that they're currently running Jary version 1.8 0.3, which was launched all the way back in November, 2012.

And I, I really loved the beginning of your, where you had the quote from Jeff Bezos on, what isn't going to change in the next 10 years? And getting back to, what really focusing on what is going to be stable. And so I'm just curious kind of from a general perspective, do you see it as bad [00:38:00] practice to use old libraries?

If jQuery still works, is that okay to still use, how do we balance that with all the new shiny stuff that's. . 

**Simon MacDonald:** Yeah I don't have any problem with using jQuery. My recommendation in that particular qua case would be to stop using it because a lot of the things that were in jQuery have ended up in the platform.

So you can reduce the amount of JavaScript that you send to your client by using the platform directly. And that's one of my arguments with a lot of the other UI frameworks. is that they were around when we didn't really have a good component model in the browser. But now that we do, they should be starting to remove some of their complexity in favor of web components, but we're really not seeing that right now.

We'll see what happens. But the nice thing is like if started a business 10 years ago building WordPress and using jQuery you're still making a lot of money doing that right now. It may not be sexy. It may not be the most technically difficult thing, but you're still making a living [00:39:00] on it because, The platform isn't breaking on you.

And if you started five years ago or seven years ago using React, and you decided that you went from create element to JSX, to hooks, to whatever is the new thing, like every, every 18 months or so, react kind of reinvents itself and you're chasing those changes nonstop and you have to ask yourself.

Did I just waste a lot of time that I could have been, building functionality for my customers and making money instead of just chasing these unplanned outages. Anyway, I try not to slack and react too much. I used it for many years, but I think I have seen the light. 

**Sean C Davis:** Yes to. Totally fair.

Totally fair. Now there are mixed opinions on this, but you mentioned web components had their 10th birthday already. And I felt like there was a lot of noise in the first couple years and then, fell off for a while. React got super popular and really still is, but really within the [00:40:00] last six to 12 months, personally, I have seen a lot more noise around web components in this space.

And and I know that you are betting on it. I think I'm curious on your perspective of, so you're, you seeing some trend that. I guess what I'm trying to ask is are you seeing this approach resonate with folks? Do you feel like we're gonna start to see some other frameworks pop up as well?

Is this a trend that we're seeing getting back to the basics? 

**Simon MacDonald:** I totally believe that. We see things like not just enhance, but astro 11 with Web C also using web components. You've got major companies like Google has built YouTube using web components. Adobe has built all of their creative cloud web stuff using web components.

It's ready for primetime right now. When it was initially. The problem is when it was initially announced, it was a spec that was still evolving and it wasn't quite ready yet. And when it comes to the evolution of specs, it takes a while before these [00:41:00] things actually solidify and get all of the use cases.

That's where client side libraries are super useful because. They're able to iterate rather quickly. So jQuery is an example. It iterated quickly and eventually those things added up in the platform. Phone gap, Apache Cordova on the mobile side, they implemented a bunch of the the APIs for connecting to the camera and other mobile APIs that eventually made their way into the platform.

And why. Some of the things that react and view and Angular are done migrating into the platform or being replaced with what the platform already has available, and that's web components. So I think you'll see a lot of people starting to switch in that direction. 

**Sean C Davis:** That makes a lot of sense.

Yeah. I'm gonna keep an eye on it cuz this is I just, I love the concept of getting back to the basics using native libraries and I'm really excited for what you've got going on at Enhance. Now, one last kind of off topic question from the audience before we wrap up. It's from Brian and says, when will the [00:42:00] HEBs finally, when another Stanley.

**Simon MacDonald:** I feel and I know this is coming from Brian LaRue, so the Habs will defeat the hapless Vancouver Connects in 2027. That's my rock solid guarantee. Okay. That's, 

**Sean C Davis:** that's the prediction for you folks. So yeah, , keep keep it ben eye. I can't, 

**Simon MacDonald:** I can't back that up. . 

**Sean C Davis:** That's all right. I love it.