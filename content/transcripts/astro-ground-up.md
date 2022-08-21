---
_build:
  list: false
  render: never
---

**Cassidy Williams:** [00:00:00] Hello everybody. Thank you for the intro Bryant. I am excited to show you everything that I can show you about Astro in the time that we have as an introduction to myself my name is Cassidy Williams.

You can find me at @Cassidoo on most things you could also Google Cassidy Williams and you'll find me and a Scooby doo character, and I'm not the Scooby doo character. And currently I work at nullify and it's a very fun place to work. And I mostly focus on new frameworks, open source stuff and a lot of react things.

And Astro is something that kind of came on my radar somewhat recently. And when I saw that it was announced, it seemed like something I would solve a lot of problems that I had. And so I'm excited to talk about it. And I also am excited to show you that I totally know how to use PowerPoint, because whenever someone tells me how to use slides, I'm like, oh yeah, I can totally.

Do all kinds of cool stuff with slides. I know how to use slides a ton. And I love doing [00:01:00] presentations with slides. Check that out. Yeah. Anyway, this is a presentation about Astro and those are all the slides that I have. I'm not very good at using slides. Tricked you. Ha. So I'm going to be showing you some code instead, because that makes more sense to me.

So I'm going to be pulling up a starter project that I made for Astro. It is based on the actual Astro starter project that comes with the framework with a few other little things built in. And so if you'd like to actually check out Astro for yourself, you can go to astro.build and astro.build is something that I will plop in the chat.

And once again, if you have questions throughout the presentation, please feel free to ask them and I will try to answer all of them. But if you would like to actually see the starter project that I'm using, it's under my GitHub, which once again, it's github.com/casado. Casado is my handle for all the things.[00:02:00]

And then I made sure that I, oh, I tried to make updates to it so that it could be the most recently updated repo. Let me just go Astro in here. It is not that one. It is Astro nullify starter. And so if you go to Astron, I starter on my GitHub github.com/caou Astron I starter that is the project that it will be based on.

And also this isn't updated. Oh, it is. Okay. It's fine. It's just some of the files haven't been updated. We're gonna just roll with this because I'm not sure what's happening there anyway. Okay. So Astra, if I starter this this project it is a Astro starter project. And all it is it shows you this plane page right here.

And so this plane page right here, it has a simple react counter that goes up and down, and it shows you the folder structure. And that is it. And so I wanted to talk [00:03:00] through all of the different parts of this project, as well as just Astro in general. The current version of Astro is point it's zero point 20 point 11.

And it's still very early. We haven't hit V1 yet, but I do think V1 is coming out very soon. And it's really like a hot new framework where it's all about shipping, less client side, JavaScript and. When it comes to shipping less client side, JavaScript, this is something near and dear to my heart, because as much as I love react again, I talk about how I really like using react.

If you ever wanna make like a react single page application, that is a lot of JavaScript that has to run into the run in the browser and to make a page function. And then it's like a diviv that is loaded and then JavaScript that populates it. And then if you use a framework like next, for example, next is very cool.

You can generate some really great static sites with it. And some more enhanced sites with it, but it ships a lot of JavaScript to the browser by default and Astro ships, no [00:04:00] JavaScript to the browser by default, which is something that kind of threw me off as I was experimenting with it. But it'll make sense a little bit as we continue to go on.

So for what comes out of the box, Actually comes with quite a bit without you having to install anything. And the first thing that I wanna talk about is Astro style components. And so Astro style components, I'm actually going to make a new one in here just to explain it. And I'm gonna call this demo dot Astro because I am not creative apparently.

Okay. So there are two areas of an Astro component. I like to call them just area a and area B to keep it clean. So area a starts with just this little bit of front matter, like in a lot of markdown files where you might have some front matter to explain what type of blog post you have or something.

You have a front matter section. And in here you could do something like import my component from, [00:05:00] and then I don't know. My component dot Astro. I don't know something like that. I'm making this up. And then I could say, let name is equal to Cassidy. Let food is some kind of array and we'll just say pizza and cake, cuz what other food is there.

And so anyway, in this front matter area, a you put your JavaScript and you can run all kinds of neat JavaScript expressions. And it's pretty nice area B after this is the HTML. And so you can have a plain HTML file where inside of here, you could say like you wanna have ahead and inside of the head, you'll have your title.

And then I'll just say, hello world like this. And I just saw that the IDE is a little slated. Let me know if I should make my font a little bit bigger or anything I am happy to. Okay. So anyway you have [00:06:00] all of this HTML in here and what's cool about it is you can actually use the JavaScript that you've CA that you've created up here.

And because I have named Cassidy, I could say I have an H one in here and say name, and then Cassidy was here. We'll render on the page. And actually I'm gonna comment this import out. So that way we can show this page and I'm gonna go to slash demo. Look at that, it works. It's exciting. Ah, okay. So it is just, it's just HTML enhanced with some JavaScript expressions.

So it's a lot like JSX, it's not exactly JSX, but it's like JSX and I can do more stuff. That's Javascripty as well where or JSX E as well, where let's just say, I want to make some kind of list. And then inside of this list, I'm going to have food dot map and then inside of here, I'm gonna [00:07:00] render, oh, look at that.

Thanks GitHub. Co-pilot here are the best. Okay. And then look at that pizza and cake. That's not, what's supposed to happen. We wanna have, this is why AI isn't that good? Okay. There we go, pizza and cake voila. So anyway, you can render your JavaScript expressions and it will work on the page and it will be beautiful.

And once again, you can import different components as well. And so I mentioned that I have a counter component I can import counter from counter like that. Oh, got JSX.

Why are you yelling at me? Because I didn't name you. Okay. Stop yelling. This should work, never do anything live kids. Okay. I'm just gonna copy this. I'm gonna do this. Let me make sure that the tour works. Okay. The tour works. This is my fault. Then I'm gonna try counter one more time. [00:08:00] Sorry.

counter. And then JSX. That should just work. It does, it was just mad. Okay. And so then I can put the counter on the page and look at that it's a simple react counter. So pizza cake does sound intriguing. You're right. Echo and I am interested in it, but we don't have time. So like you've seen right here, there's area a and area B area a is your JavaScript where any kinds of scripts can happen.

And then area B is your HTML. What renders on the page. And the front matter up here is fully compatible with both JavaScript and type script. And so you can import any components, any Astro components, any JSX components, view components, react, components felt components. It's all just built in. And that part is really cool.

And this is run at builds time. And so when you are, if you deploy this. And your site is building anything that runs in here is [00:09:00] going to be run as the site is building it doesn't run when the user hits your page. And so if you want to query an API, let's just say you wanna get a list of Pokemon from the Pokemon API.

You can do it inside of this front matter. It'll happen at build time, and it'll already be rendered to the page whenever your users hit the page. So they don't have to query that API either, which is great. And so lots of very cool stuff built in D directly into that area. A and once again, area B it's HTML until it's not, you can add in any components that you import.

Once again, I did a react counter here, but let's just say I did do that tour, or I did import tour from, and then my Components and then tour dot Astro like this tour like this, these are just side by side, Astro and react are completely different things. And yet these components can work together. And so if I wanted to do view, which [00:10:00] I'm not going to right now, cuz I'm not confident in my abilities with view, I could have view and react living side by side in the exact same page, which is very neat.

And you can think about how you can hydrate pages with all kinds of really interesting concepts by having these frameworks live side by side. And so I think that's very cool. I'll get into more of this later, but Astro components can also take in props. They can pay attention to what the URL is.

There's a lot of really interesting things that happen here. Now, one thing that I'd like to touch on is how it actually renders things on the page because it. Showing this react counter, but I haven't clicked the buttons yet. And when I click the buttons, nothing works. And that is because once again, react or Astro ships, no JavaScript by default.

So react is rendering this component, but it's not actually interactive because there's not JavaScript here. It's just showing the HTML. [00:11:00] And so you have to hydrate it and you have to make it happen. There's a few different ways that you can do that. And I'm gonna make this a little bigger and show you all the different ways.

So with this counter, you have a prop called client. And with this client, it can take in different types or modes, of rendering. And so I could do client load. And if I do client load, then when I load the page, it will work. And so this renders this component on page load and that is it.

It's Kind of plain and simple there, there's also idle. And if you want to render this page and then, and once the main thread is free in the browser, then this loads, or this works, it's very simple. There's also client visible. And what's cool about this one is that the JavaScript doesn't load until it's actually visible on the page.

Now, in this particular instance, it doesn't really matter because [00:12:00] it's visible on the page because it's a very short page, but let's just say I added fish and carrot and actually let's not make an entire list of food. I'll just zoom in on the page. Oh, I can't zoom in that much. Okay. Start naming foods.

Ah okay. Let me say it's pineapple and. Co, and this is definitely an a plus demo. I'm glad you're all still here with me. Okay. Is this a long enough thing? You know what? I'll just add more words somewhere else. I'm going to make this a very big thing. Casty was here again. Okay. So we have all these headings.

This is not on the page. I'm going to show you the network tab here. Okay. So as I load this, did you see that? Did you see that I'm gonna do it one more time. Okay. Let [00:13:00] reload the page. We you're not seeing the counter on the page at all, but then it's on the page in the JavaScript loaded. Ah, Okay. So that is what the visible part does is when the actual counter is visible on the page, when the JavaScript enabled thing is visible on the page, then the JavaScript actually loads.

I think that is so neat. I, when I first discovered that I was like, oh, it's like mysteries hidden. It's so exciting. So anyway, that was a lot of me talking about food. But at least you got at least some of that working. Okay. I'm gonna take out these names. Okay. So you have load idle, invisible, and I'm going to mark those here in case you missed them, load idle, visible.

Okay. The next one is client media [00:14:00] equals and then some query. Like this. And so I'm gonna do media and then is query. I'm not going to demo this right now because you just saw me trying to come up with food names. You get it with this client media query. It will hydrate the component and let the, his grip load when the browser meets a certain media query.

And this part I think is particularly cool. So let's just say instead of a counter, you have some kind of sidebar on your application and in your sidebar with all of the rest of your layouts, you might be pulling for data every few seconds. Let's just say you're pulling in a new Pokemon every single time in your sidebar.

If your page is nice and big and wide, you have that data loading. And you're just like, ah, great. That's excellent. I love my beautiful sidebar, but let's just say you're on your phone and you can't actually see the sidebar. You're just scrolling through the page. You don't actually [00:15:00] want. That component in the sidebar to keep loading a bunch of different Pokemon that you're not even seeing.

You're not looking at the sidebar. You're looking at the content on the page. This is where the media query can come in. You could say, okay, I only want the JavaScript to load for this particular component. If a certain MIRI media query is hit. And so now you can have much faster and smoother layouts depending on the size of your browser or the content of your browser.

All that media queries are able to be. And I think this is particularly powerful because Media queries. They're very powerful in CSS, but they were made for a different time where you were dealing with kind of just layouts and not all of the hydration that JavaScript does on a given page at any given time.

And so by having media queries done on the JavaScript level, outside of the CSS, you can do a lot of really interesting things with it. So anyway, that is what media query does. Is it hydrates [00:16:00] the component when you have a certain media query that you pass in to this component. And then finally, the last one here is called only.

Only is something that isn't actually recommended in the docs to use very much it's, it should be avoided, but it skips rendering at builds time entirely. And so that means that the typical rendering at of HTML, which again, like this whole thing happens at builds time and the HTML is loaded.

And then the JavaScript is hydrated at any given point. That doesn't happen when you have only all of it happens at run time, not at builds time. Sometimes that might be necessary where you just want it to run at build time. Let's just say you want to have an Astra component that has an entire single page application in that you might want that type of only thing to occur.

I think it's a good thing that it exists as an option, [00:17:00] but I wouldn't necessarily recommend it, especially if you're building a mostly static site, but it's a possibility. Okay to review. Oh, I know. Query isn't defined calm down. Okay. I'm just going to comment this better as a group. Okay. It's because it's HTML and I was doing this in a Javascripty way.

Okay. So I'm going to walk through each of these one last time. And again, let me know if you have any questions. So load, it means it runs on page load. I means that it runs as soon as the main thread is free. Visible means once again, when the component is visible media, when it matches. Oh, look at when the media is loaded.

No GitHub. when the given query matches. So like when the given media query [00:18:00] matches and then only means that it only runs. At run time, not at build time, not at builds time. Okay. Come back. You're okay. Errors. Am I right? So anyway, these are the different times when components can be loaded with JavaScript on the page.

I think that this is so cool because it just means that your bundles are so small when they actually go to your users. And I think that's just such, such a powerful thing and it's. It's so simple to make it just conditional like this. I love it. Okay. So anyway, that is how the rendering works in those in in Astro for loading JavaScript.

Now, once again, it renders react, view, spelts react, and I think a few other things to it it does a lot under the hood and it does that by default, if you don't want it to, you can say, Hey, only work with react. And that [00:19:00] is totally fine because as you do run an Astro site at build time, it'll check, okay.

Are there any spelt things, are there any view things and it will load those renderers in your bundle at least to, to make it work. And so you can say I'm not using view, I'm not using fault. I'm only using react and you can tell it to there's a configuration for that. Or you could just use all of the frameworks, your, the world's, your always the, okay.

Also. It comes with a component that I think is incredible. And honestly I'm very excited about it because it's so simple. And that is a markdown component because how many times have you tried to configure markdown in again, react and in view and all this stuff where you have to add all kinds of different loaders and stuff built into Astro is import markdown.

I think it's just Astro slash components. [00:20:00] We'll see if he yells at me, seems to be working great. That's it. Now you can use markdown. And so let's just say, I want to have inside of my body here a bunch of markdown now I can be just like, but was she really here? Nobody knows this. Is list. Look at that.

It's the exact same thing as the HTML, except it's marked down how neat is that? And it can render all kinds of really cool things. And so if I wanted to do, for example, a code sample, it could do, I'll do console the log. Hello world. I'll look at you once again, GitHub, you're trying to make be helpful, but you're not look at that.

It renders it. It's just done. I think that is so neat because it. You can just use markdown and it'll [00:21:00] once again, run at build time, not at run time. And so it'll just render the HTML. And so you can import all kinds of markdown content. Let's just say you get markdown from a CMS that you're using it just rendered it.

And it's great. And I can't tell you, this is really saved my bacon a few times to be able to just write stuff and not have to format everything. I think that's so powerful. So anyway that's the markdown component that I think that is very cool. So I've talked a lot about what Astro can render, but you might have noticed I made a demo page and all of this has been living in a demo page.

Also folks have said that the stream has paused. Let me know if it has UN paused because I'm sorry to hear that. Okay. Reload in his back. Okay. Sorry about that, everybody. We're now going to be talking about row. Okay. I made this demo file it's in the pages directory, and it's just demo dot Astro in there [00:22:00] that creates a page and it's done.

You don't have to have Astro in here if you wanted, you could actually do. Let's just say I'm gonna call it pizza cake. We're already doing this pizza cake.md. You can have a fully marked down page, Harrah like that. And now if I were to go to slash pizza cake,

supposedly it'll work, it's being a little slow that's okay. But know that it should be a fully marked down page named pizza. There it is. Okay. Sorry about that. That's just my browser. Okay. So Hey, pizza cake, it's done. You have a fully marked down page. And so you don't have to use Astro components if you don't want to.

Inside of the pages directory, anytime you put a [00:23:00] dot Astro or a.md file, that automatically becomes a route. And so you can have fully marked down pages. You can do some styling and stuff if you'd like to make it all pretty, but it just works. And that is pretty nice. And if you wanna point your routes at a different directory, you can, it's fully configurable.

But I just think that part is really neat. And also I'm going to change this pizza cake.md to a pizza cake dot Astro for a second. And I wanna show something where let's just say, I wanna do HTML and then I'll do my head again and I'll do. A body and be like, wait, this is just area B that's right now.

This is just area B with Astro. Everything is optional. And so if I wanted to just do plain HTML and a dot Astro file, I can, and it just works. If I [00:24:00] wanted to do just area a for whatever reason where I just do the front matter of let pizza cake equal forever. If I wanted to get rid of all of this and just have the JavaScript run, that is allowed too.

Everything is optional. Everything is configurable. It's very exciting. It's it just works. And that part is really neat. So you might be wondering. What if I don't know all of my route names, because right now I have index Astro demo, Astro pizza cake dot Astro. But what if I want to, for example, have a folder in here called posts.

And I wanna host my blog in here, but I don't wanna name every single one of my blog posts in here. I could, if I don't wanna pull from a CMS, I could just put markdown files in there and have it work. But what if I want to pull it from a CMS and I don't know all the route names or anything, don't worry it's covered for you.

I'm going to [00:25:00] call it blog dot JS, but it's going to be in brackets. And so in case you didn't see that I'm actually going to just put it in here so you can see it loud and proud. It's going to be blog JS and the brackets here. It's a funky, it's a funky name for a file. If you have used next JS before you might recognize this, cuz this is how next JS does their dynamic routes, where they name it inside of these brackets here.

So now when I go to slash posts and then slash whatever the title is, it will match it. And I'm just gonna keep typing inside of this doc. So that way you can see nice and clearly what I'm talking about. So with this blog dot JS and actually I'm going to do, oh, cancel. It's going to be blog dot Astro.

I think JS works, but I'm gonna stick with the thing with the theme blog Astro, it will just [00:26:00] work. And so let's be by saying that you have a dot slash pages slash post slash and then this again, blogs dot Astro. Look at that. It's trying to make me do pizza cake. Job GitHub calm down. Okay. So by doing that, the types of routes that this matches is let's just say it's pizza cake.com.

This is my brand. Now you have pizza cake.com/posts, and then anything in here, it could be one or pizza cake slash posts slash my great blog or whatever. It line break. It's going to match all of these different URLs based on this dynamic route name. And so it, it generates that at this path, [00:27:00] whenever you create the folder and then the dynamic route name.

And so it's neat. And yes I see that. There's a question. Does it have catchall routes like in next JS? Yes, it does. Good question. Okay. So I'm going to go into this blog dot Astro thing in here. And let's just say, okay, I'm going to say, this is a great blog post or something. So inside of here, you could also create components within components.

And so I could make a layout component that does some of this for me, but I'm busy talking too fast. And so I'm not doing that right now. And so inside of here, title, and I'm gonna say my blog for now, and I'm gonna say this is a blog. Okay, cute. It works. So if I were to go to local host 3000 slash posts slash whatever.

It says that we need to actually populate this with data, which we expected. That's fine. This function gets static paths. Believe it or not. I did [00:28:00] wanna show this to you is gets static. Paths is a function, which you might recognize from next JS as well. It's a function that you run to generate the routes that you want to populate with your Astro applications.

And this actually changed. And I actually don't know I'm gonna go to the docs really quick just because I'm curious now, and again, we're doing this live. It should be fine. Totally. So with with Astro, as it has been changing and morphing, there have been a lot of changes. It has definitely gotten much more steady over time where there's not as many giant changes.

They used to have a really cool collections API where you would generate a collections of pages. And voila. That's how it worked. Then they renamed it to get static pads and it makes a lot more sense. and it's something that I think it makes a lot more sense at least to someone like me coming from next and coming from other frameworks it's just better named and everything, but this is relatively new [00:29:00] compared to what used to be.

But anyway, with tic pads, you export a function. Hey, I'm just gonna copy this here because I can try to stop me. You can't, you won't. So you have all of these different parameters that you can pass into this URL and those parameters, it takes in some kind of ID. And you can then use that to define your routes inside of here.

And so let's just say that I want I, what were the pages that I defined? I think the pages I defined was like pizza cake and my cool blog. I don't know. Let's just say we'll do an ID of one for now and then props I'll pass to the page. Cuz I wanna show you how that works.

Props I'll pass the page and I'll do pizza cake is true or something like that? No I'll do pizza cake is forever. Okay. So this is confusing in how it's nested. So let me clean this up for you for a second. [00:30:00] Okay. That stop it. Okay. So why are you yelling at me? I'm just gonna take this away. We've got our para and our props.

It's an array because it expects more than one. Let me close that and it's fine. Okay. So now when I go in here, this page is not found because it has an idea of one. What if I did.

Caity. Why do you ever do anything live? That's what I'm saying. Okay. So I'm gonna just do a little bit of live coding, where I pretend to know what I'm doing. And I promise I prepared for this talk. I'm going to pull in the ID from here and I'll do the ID is equal to Astro dot request dot programs. And in theory, I should be able to just get [00:31:00] whatever from here.

And so I'll do this as a blog ID. Thank you all so much for bearing with me. Cool. That's fine. What did I miss? This is, let's see, this is a array of objects to determine which path will be predetermined by Astro. I already did that. This should be fine. I have a feeling that I am missing something dumb.

And once again, I'm doing this live, so I'm sorry. Let me try one. Cool. And what am I missing? Astro function, Dekar static site builder. I know that pers is required props. Yes, totally did that too. To return to array of objects, to determine which paths will be in there. Yeah. Did that great. pizza cake.com is already registered.

Oh, that is a shame. Ah also [00:32:00] ICA Astro only has static site generation, not SSR. So all routing and routing related data happens at build time. Is that correct? That is correct. Yes. That, yes, that is absolutely correct. Should the pers be blog, whatever. Yeah, it should. That's absolutely what it should be because I'm a fool.

Thank you so much. Okay. Look at that. That's definitely what it is. Thank you PR. You're great. Okay. So that was just a file naming issue of my own issue. Okay. So cool. This is a blog. The blog's name is whatever I'll do my blog named blog. And then be just like, this is a blog named blog in here. So much fun that look at that.

Okay. This is a blog doing whatever so much fun, loving it. And so I can do [00:33:00] this again, where I could add another one in here. And so instead of the blog being named, whatever. Then I could say the blog is being named something that matters.

And then pizza cake is here, is questionable. Okay. And so now if I go to the route, something that matters, this is a blog name, something that matters so much fun. A okay. Once again, thank you so much for saying blog because that's definitely what it was supposed to be my bad. I apologize. Okay. So anyway, that is how you do dynamic routes with Astro.

And I promise it's the, if you actually know what you're doing and you're not live coding, it will be much easier for you than it was for me just now. But you can also take in parameters as well. And so notice how I did Astro dot request dot pers. I could also pull in pizza cake from [00:34:00] Astro dot request dot props.

Okay. And then we could get pizza cake doesn't like that. Does it once again really proven to you that live demoing is not my expertise. Okay. It should be though. Also all of my docs are in Spanish. That's fun. I'm going to pull in props one more time because I could have sworn that's all you do.

Prop with props. It's just Astrid up props. That's my bad cool props. Hey, questionable. This is so much fun and it's questionable. I'm glad you think so. And then again, if I go to whatever now pizza cake is forever. So anyway, that's how you pull in the request parameters. And that's how you pull in the props to get dynamic data.

And yes, there are catchall routes as well. So woo. Okay. [00:35:00] Those are the main features that I wanted to talk about outside of styling and state management. And I don't wanna get too deep into that just because of time constraints. And I wanna make sure that I answer a bunch of your questions, but styling and state management, I think it's still relatively early in the implementation of Astro, but there's quite a bit supported already, which is exciting out of the box.

Global CSS is supported and there's some limits around scoped CSS and CSS modules, but it works. And the fact that I can just use my CSS modules. It's great. And for example, I have my counter dot JSX that I showed you before back when I wasn't on a dynamic route down here, a and then also in demo, I'll go to that one.

Is she really here? Nobody knows. Okay. So we have our simple react counter that we showed before. That's this, but you'll notice that we have our styles coming from a CSS module. It's very basic. I added margins. I could [00:36:00] do something like color is green. And look at that the color is green.

It does some nice hot module. Rero super, super fast. But yeah, CSS modules supported outta the box. There are other styling things that are also supported outta the box. I personally, almost always just use CSS modules anyway. And so I'm happy to see it supported and it works. In terms of state management, it'll depend on the library that you're using.

The context API for react works totally fine. Recoil works. Joe Ty works. I last, I checked, I think Redux was only partially supported, but maybe it's fully supported. Now. View has UX support, spelt has full SEL stores support. All of those state management things are either supported, partially supported or will be fully supported very soon.

Which is really exciting to see now. Once again, on my GitHub, you saw the Astro, I starter [00:37:00] that's what I've been working with right here, but I also did a little Astro react and view demo in here, which I'm not going to, you can try to look it up if you want to. I mostly just wanna show you the components.

I made a view counter. See, I know how to use some view where it's very simple. You do plus and minus subtract and add, and it's a view component. And then I also did a react component, which is pretty much what you see here. Very simple react component. And then inside of the pages, I was able to make the view and react components live side by side, and because they can take in props, I could create a variable that passes something to view and react.

So you could actually share state amongst view and react and have a full on application that uses both. I think that is so cool because. [00:38:00] There are some things that just each framework does a little bit better. The answer will always be, it depends for what should I use for a particular thing. But for example, the way event bubbling works and how props are moved around and changed in the different frameworks and libraries, the, it sometimes makes for a better mentality to use one over the other.

For example, if I'm making a to-do list, if you'll forgive the very simple explanation, I might want a to-do list item to be able to delete itself and react. You can't do that, but in view you can, but overall, let's just say, I want the entire to-do app to be in react in theory, with Astro, depending on how I structure stuff, I could have an Astro component that has a react to-do list that utilizes view to-do items that can delete themselves.

It's probably gonna be messy. That's probably, definitely not recommended, [00:39:00] but you can and because you can, you definitely should. That's how Jurassic park worked, it applies. Do you want to use reacts filter view? Yes, exactly. And it's really exciting to see and Astro's built on this concept of islands architecture, where you have different islands of information that kind of talk to each other, but sometimes they don't and that's really where it shines.

And I think it, it does a great job and it renders very fast. And again, because there's not JavaScript by default on the client. It's just a really nice and speedy framework now with the latest version of Astro coming out soon, it's, I'm particularly excited because. If you don't know, Astros created by the creators of snowpack great bundling tool.

It's awesome. They're switching it Tove next. And if you've used VE it's, I used to think it was pronounced, right? It is Veet because of French words for fast It [00:40:00] bundles so fast and I've only played around with it a little bit with that, with the, not even beta alpha, extra early experimentations with the new VE stuff, but it bundles so fast that it won't feel like your site has to do a really long build time that it feels like it doesn't have to be a concern just because it goes so fast.

And overall I'm particularly happy with Astro. I think that it's something where it allows you to be very flexible, very configurable. Let's just say you wanna add support for another framework that I haven't mentioned yet. You can it, it adds all kinds of options for configuration and escape patches for pulling in other options where the world's your oyster and I'm really excited about that.

And so I'm going to talk about one more example that I'm not going to build because we don't have time, but I want to. Explain. So let's just say you have some application where you have a marketing site for your [00:41:00] website, and then you want to have a fully dynamic application once a user logs in, and you want the user to be able to log in, log out all that jazz with Astro.

That can all be one gigantic site, which is cool while still having this Island's architecture. So it feels like microservices or micro sites, but it's still monolithic, which is mind bendy, but particularly cool where let's just say nullify as an example, I work. I'll be a shell for a second. If you go to nullify.com, you'll run into our marketing site.

Our marketing site is actually its own repo. It's built with I think, 11 T in view. And then when you log in, you go to the nullify app and that's its own separate repo, and that is using react and it's using react and a lot of SSPA and react router St style of application. And we have all of these different repos for managing different [00:42:00] parts of the marketing site of the of the react app the actual nullify app, as well as the doc site.

And that site is built in something else, too. Lots of different frameworks and everything with Astro that could all live in one place if you wanted it to. And that part is particularly neat. And so I could make my marketing site again. Let's just say I have a very simple application. Let's just say I have a marketing page.

I could create my login page, where someone logs in. I could have someone log in and I could have a full react application on a single route or make multiple routes. And I could have my log out page. I could have my docs page and it could all live in one application if I wanted it to. And the flexibility there, I think is very neat because I could use view for my marketing site.

I could use react for another one and I'm starting to repeat myself, but the, I think that power and emphasizing it is particularly important because it's just neat. This is the type of stuff that I've been [00:43:00] looking for in a framework for a long time. And so I'm excited about it, but I see that there are questions and there are 10 of them.

And so I'm going to start going through a bunch of them and. Hello, Brian, welcome back. Hey.

**Brian Rinaldi:** Yeah, I was gonna help you go do that, but you, you could do it yourself if you want. . Yeah. Yeah. So first of all, I'm that was awesome. I think everybody in the chat is like, they're all some of them might have left to go start coding their site in Astro right now.

So what, let's see, I'm gonna go through the questions with you if you don't mind. Sure. Does Astro yet have the functionality needed for on first visit rebuilding a pages that then becomes static? I think he's talking about that they're talking about like DPR type thing.

**Cassidy Williams:** Yeah. For that kind of, yeah.

Distributed persistent rendering dis distributed static generation and all of those things where you can build like part of a static site without deploying the whole thing. It does not have that at this time. It just serves everything [00:44:00] static. Okay.

**Brian Rinaldi:** But you could use on-demand filter

**Cassidy Williams:** still.

Yes, that's true. You could use an on-demand builder on nullify. And I think that CloudFlare is starting to implement something like that too, but I'm not sure where you could implement something like that. A, an OnDemand builder function that would build a page separately.

Yeah.

**Brian Rinaldi:** Okay, cool. I wonder, everybody seems to be adding this, so it seems to be like something that we can probably expect to come becoming soon. Yeah. I would be surprising. It's a common, we just need to agree on a term because now we're DPR DSG and ISR, right?

**Cassidy Williams:** Yeah. I think I, we've definitely been talking about combining the D the DPR and DSG once and just going in that direction,

**Brian Rinaldi:** but I've started just calling it deferred rendering.

Which is yeah. That's to me is okay, all of them are just like, render it later. So anyway, okay oh, should have done this [00:45:00] and I didn't why would I use this over 11? What are the benefits compared to other aesthetic site

**Cassidy Williams:** generators? So I think the I emphasize this more towards the end here where there's there's no need to configure any frameworks that you might want to use with it.

So you don't need to configure view or react or SEL or Preact or anything with it. It just automatically works and you can just run with it. You can add whatever opinions you want to it, and it will work. And so that, that is what's cool about it is it's both lets you have opinions or it could have opinions for you.

And I think that's great. And using something like this over 11, it really does come down to. If you wanna use 70, go for it. It's a great framework. I have no qualms with it, but I like that so much is built in that. I, if anything, I can just take things away from it and add stuff as needed.

**Brian Rinaldi:** There's that, what's that project for 11. That kind of is like an Astro

**Cassidy Williams:** It's it's got a [00:46:00] funny name. Yes. It's like spraying or something. It's not, but it's a funny name like that.

**Brian Rinaldi:** Yeah. Yeah. The guy who created it was even speaking at gems stack CIN. Now I'm totally blank. It was Ben, right?

I think. Yes it is Ben hoes, right?

**Cassidy Williams:** Yep. Yeah. Then we're gonna homes and then I'm just gonna find it right now. Might as well Slinkity somebody put it on

**Brian Rinaldi:** Slinkity. That's what it's Slinkity . So I guess if you wanna use 11, you could use Slinkity. Yes. Okay. So next question is. How does this compare to something like SELT

**Cassidy Williams:** once again?

And this might have been a question earlier because I've touched on it, but basically and also all the people in the chat are like, come on it's Slinkity. Thank you. Comparing it to something like spelt it lets you use SFT if you wanna just use spelt, you can, and that would be totally cool.

But then you're just using spelts this lets you use anything that you want,

**Brian Rinaldi:** right. How does astrol work with [00:47:00] GATS be in the next, I'm guess. Really separate. It's a different, it's a different, it's a different

**Cassidy Williams:** approach. Yeah. It's you wouldn't combine it right? You wouldn't combine it Gatsby and next are specifically react frameworks.

Astro is a framework that can use react or any of these other frameworks or libraries. Yeah.

**Brian Rinaldi:** I'm super excited that cuz I've stuck with. Some of the more I still use Hugo a lot. In fact, the sites built on with Hugo, but partly because I just didn't wanna shove a JavaScript framework down people's throats when I didn't really need it.

It, there's only a minimal amount of JavaScript going on. There's a login and some other stuff it's I don't need a whole framework for that. So this is really exciting for me. Does Astro work with react components that use context?

**Cassidy Williams:** Yes. It fully supports the context API and state sharing with context.

**Brian Rinaldi:** Awesome. Easy answer. Yeah. Can we use an on-demand builders with Astro? Yeah we answered that. [00:48:00] Yes, you can. It's not, there's nothing built in.

**Cassidy Williams:** I, yeah, I was gonna say it's not built in, but maybe that could be a feature request for the team.

**Brian Rinaldi:** awesome. Yeah. Does markdown the component. Okay. So highlight the programming language.

Yeah. So I think it does, I mention it.

**Cassidy Williams:** It does. I probably should have demoed that. I'm pretty sure that it does. And then I think you can customize that as well. Yeah.

**Brian Rinaldi:** I think somebody mentioned it uses the code covering that I usually use when I'm blanking on it, but clearly I'm blanking on everything.

I can't remember names of anything today.

**Cassidy Williams:** That's what happens when you're in front of people.

**Brian Rinaldi:** good thing. I remembered your name, cuz I had to introduce you in everything,

**Cassidy Williams:** Yeah. I guess it's a very good comment. Not managing a web pack. Config is an incentive, correct? Yes. Like you can set up a config that does a bunch of stuff.

I love not having to . Yes.

**Brian Rinaldi:** Yeah. I think just even being able to use markdown without having to modify a config and create a loader and all this other stuff is just. The number [00:49:00] of times I've done that. It's like why do I have to do this? It seems like boilerplate. It's a pain in the butt.

Yeah. Oh, prism is the CSS.

**Cassidy Williams:** Oh yeah. And there's also sh cheeky. I think there's one and there's highlighter anyway. Yeah. Yeah. Oh, there you go. Sarah says prism, just be sure to add a theme.

**Brian Rinaldi:** So it is built in, how would you make an API request to iterate over your blogs?

Use fetch in the front

**Cassidy Williams:** matter? Yes. Fetch in the front matter. Done.

**Brian Rinaldi:** Okay. So the front matter you can put whatever JavaScript does and there's no like limitations

**Cassidy Williams:** on what you can full JavaScript expressions. Totally work. Yeah. That's

**Brian Rinaldi:** that's super cool.

**Cassidy Williams:** Yeah. It's it's so nice and simple or rather intuitive for anyone who has done WebDev.

Right.

**Brian Rinaldi:** Nick S is there any image optimization or compression at built com.

**Cassidy Williams:** I don't think so built in no, but what I would suggest to you, Nick is to check out something like cloud area. I appreciate the concept of image optimization, [00:50:00] compression and stuff at build time. But if you use something like cloud area, as a service that does that as their jobs, then you don't have to manage your own images.

They do all of the compression and optimization. You just query it from their APIs. That's my personal preference, but that's all about the decoupling of it all. Yep. Yep.

**Brian Rinaldi:** I've used cloud area myself. I actually do use on this side I use Hugo's like asset management for all the images just cause I used to have to resize everything and it's easy enough.

I don't have, yeah, I don't have most images. Like it's just one, the banner. So it just does all the different sizes for me.

**Cassidy Williams:** Yeah. And now if I does have a build plugin for that kind of stuff, thank you, Lindsay. For the plug, cuz. Probably should have mentioned that one too. But then also like with some other frameworks where it's built in, I won't throw shade at specific names.

I don't particularly like their implementations of it out of the box where it it works for developers mostly, but then [00:51:00] if JavaScript is disabled for some reason or something like that it falls apart. And yeah, that's why I like not doing it in my own code base.

**Brian Rinaldi:** Yeah. I've tried to get it working in next in constant.

I felt like I'm banging. I'm like, what am I doing wrong? I'm like looking at the directions. I'm like, it just errors out every freaking time. Yeah. So anyway, anyway, . Is it possible to do cross component props, communication, say between a react and a spelt component?

**Cassidy Williams:** So you couldn't do a react component inside of SEL at this point, but what I showed with my view and react demo.

You can have an Astro component that passes variables to each of those components and they live inside of the Astro page or the Astro component. And yes, it's funky, but it's possible.

**Brian Rinaldi:** Okay. That's that should be in maybe Deepak, you can do a blog post about this. I'd love to hear somebody experiment with this.

[00:52:00] Sorry. I, like I said, I know you said earlier, but what is the Rebo link type? So I can see a few with Astron the title.

**Cassidy Williams:** Oh yes. The it's the net, the Netlify start is what I've been working with. Yeah. Okay. And the reason why it's the starter is if you go into the read me, it has a command where you can use this as a template.

And the reason why you could use it as a template is if you click deployed to nullify, or if you run it for whatever reason, it has the nullify.com built in, which has the automatic build commands that make it just work without any config on nullify to run.

**Brian Rinaldi:** Okay. And we are down to the last question.

Does Astro write inline style or ship external CSS file?

**Cassidy Williams:** I always just use CSS modules for pretty much everything, but Hey, look at that, there's a guide on styling that talks about this and the Astro docs. If you go to docs dot Astro dot builds, that will dive into that a bit deeper, but it, it supports [00:53:00] lots of things.

And I think that it ships external CSS files if I'm thinking correctly. Okay.

**Brian Rinaldi:** All right. So that's all the questions that was awesome. I think I clearly, I'm excited to, to try it. Everybody in the chat seems excited to try it, so I think we're all just very excited now. Yeah.

**Cassidy Williams:** It's just so fun.

**Brian Rinaldi:** It does seem fun. I have like my personally I'm like, okay, first I'm gonna redo my crappy old Jeal blog, nothing against JCO. I still think JE is great, but my it's just that my blog is old and crappy.

**Cassidy Williams:** Yeah. I get it. My, I have an old blog in Jeal. That's sorely neglected.

**Brian Rinaldi:** Yes. And then I was thinking like on a bigger can I redo c.dev with it?

It would be awesome. So yeah, I think, it seems like a perfect kind of fit for what that site does. Yeah. Anyway, when I find

**Cassidy Williams:** all that free time, one who, yeah, everyone, all [00:54:00] that free time. All of my friends that I've. Shared Astro with, or who I've seen play with Astro has just completely fallen in love with it because it's, it just works and is so simple.

And I think on my team, a grand majority of my team's demos are just using Astro now because some do specialize in react, some specialize in view and stuff like that, but they can say, oh, I'll just whip this up here. And then they can share the repo with the team and they can just use the same code base and write in what they're comfortable in.

And it's great.

**Brian Rinaldi:** Yeah. That's awesome. Okay. Thank you, Cassidy.
