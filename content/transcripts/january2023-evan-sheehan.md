---
_build:
  list: false
  render: never
---

# Framework Agnostic Web Components with Evan Sheehan

**Sean C Davis:** [00:00:00] Hey everybody. Welcome to the first Uptime FM episode of 2023. I'm your host, Chauncey Davis, and today I am joined by Evan Sheehan to talk about web components. Now, I'm not sure how deep we'll get in this short time that we have today, but I'm really excited about this topic because I've noticed this resurgent of web components, which is an idea that's been around for more than 10 years.

There's been a little bit more chatter on it that, at least that I've noticed in the last year or so, and some people have some interesting predictions on where it might go, what we might see throughout 2023. And so that's what I really wanna explore today with Evan. And so with that, let's bring Evan in.

Welcome to the show, Evan. 

**Evan Davis:** Hey Sean. Thanks for having me. 

**Sean C Davis:** Hey, thanks for joining us. And I know I've got a ton of questions for you all really surrounding web components. But first we have to start with that classic uptime fm question, which is, what is [00:01:00] the best sandwich? 

**Evan Davis:** Let's.

There's almost, there's two answers for me because there's the answer from before I was vegan, which would've been cheeses steak from Pat's in Philly. Okay. But obviously a cheese steak with cheese whizz is off the table now that I'm vegan. Yeah. Yeah, I think probably I'd actually go with Kim Bop okay.

Which is, I, we might get some flack for whether or not that constitutes a sandwich because there's no bread. . It's a Korean thing where you take rice and a sheet of seaweed and then, some like sauteed mushrooms and carrots and things like that. And it gets folded up into this little handheld sandwich, I think.

And those. 

**Sean C Davis:** The substitute for the bread, is it the seaweed or is it the, it is the seaweed. Okay. Yeah. I 

**Evan Davis:** It's a little bit like a giant sushi roll, except it's not a roll. It's flat and square like a 

**Sean C Davis:** sandwich. Ah, interesting. Okay. Folks who, who are listening in on the show know that I have a very loose and liberal definition for sandwich, very inclusive of all [00:02:00] sandwiches.

So I feel like that's a great and unique answer. Now do you have to go to a. Restaurant to get this type of sandwich, or is this something you'll make at home as 

**Evan Davis:** well? You can actually, they're pretty easy to make at home. Folding them takes a little bit of practice. But if you have a short grain sticky rice and you can get big sheets of nori from the store and I'm sure if you did a web search for Kimba, you'd find plenty of recipes.

I'm not sure where my wife found this one, but it's something we do for lunch all the time. Oh, 

**Sean C Davis:** interesting. Okay. So you're basically just buying the same ingredients that you. That you would buy for a sushi bro? Yeah, 

**Evan Davis:** pretty much. And then it is just a little bit of practice to fold the seaweed. 

**Sean C Davis:** Okay.

Okay. Very cool. I like it. I like it . All right. With that, let's shift over to web components. So now they've had a really interesting history over the last decade, and I only have just a kind of a small amount of experience, and most of that is concentrated. Five years ago when I felt like they weren't really super popular at that time, but, oh, for context I did some digging [00:03:00] earlier today and saw that.

The idea was first, maybe the idea is older, but that they were first presented in 2011 and then polymer one of the bigger libraries early on, or frameworks early on came around in 2013, which is right around the time that react also has its re initial release. And I'm sure we'll dive into all that, but I wanted to set that context first.

overall in the space. But thought Evan, you could start with where did you come in and like what initially got you interested in web components? What drew you to them? 

**Evan Davis:** Yeah. So my, I think my experience tracks it tracks a lot with a lot of the people that I talk to about these things.

So I probably came across polymer in like 2015. Okay. And was interested in it, but I didn't really understand that it was building on platform stuff. I thought it was just like another JavaScript framework. . It wasn't until a year or two later that I understood that there were, that web components were like a native web thing, like this wasn't React or view or something like [00:04:00] that.

And I got really excited because I liked the idea of I've always liked the idea of fewer depend. In the software that I build. So I, I got sold on React in 2015 by someone I was working with. And so I've been working with her for a couple years and the appeal of just getting away from Webpac and react in all of this and just being able to go back to writing HTML and JavaScript and C CSS was really nice.

And I think like a lot of people. I was disappointed because I thought, like when you said component to me at that time, I was thinking React component or view component, angular component. And web components don't. , they're not really a drop-in replacement for those most of the time. And so it was frustrating. And shadow Dom was like wait, you mean if I put, if I have a component that builds a form, none of the inputs in my form are gonna pick up the styles on my page. That really sucks. I didn't really I wanted them to be great, and they just weren't doing the things that I needed, and so I didn't really touch [00:05:00] 'em again until last year.

I think was it maybe a little bit before last year. And what got me back into them was two things. Like you said, there was an uptick. People were starting to talk about it again. Dave Rupert did his course on web components for, I think it was front end Masters. . . he was talking about it a lot.

If you listen to a shop talk show or something like that you heard him talking about it a lot. And I was really, Looking for something for a project at work that really minimized dependencies. One, one of the organizational problems we face at work is that a project will get funded for 9, 12, 15 months, and then at the end of that project, there's no more funding.

You're not really supposed to be working on it, but people are still using it. And then, , and this happened to me last year. You'll get an email from the Department of Homeland Security telling you that there is a security vulnerability because you're running some wicked old version of jQuery on this application that nobody has touched [00:06:00] in six years.

And you sit down and you try to spin up the development environment to deal with this problem, and you can't even get the dev environment running because it's built using g. and Ruby SaaS. And you don't have Ruby installing, right? Yeah. Anymore cause it's 22 and we're all using Dart SAS now . So I was really trying to avoid having that happen again cuz I did not want another one of those fire drills.

And so I started looking really hard at web components and found that at least for this particular project, there are several use cases that they fit really well for me. And so that's when I started to get really excited and really back. 

**Sean C Davis:** Okay. Okay. Super. So I want to, I wanna spend some time with that, but first to, to back up a little bit, so you said that you were using React around 2015, but that's right around the time that you also discovered polymer as well.

So were you using these concurrently or did you find one first and then replace it with the other, 

**Evan Davis:** Polymer I was just reading about? We hadn't actually tried it. Gotcha. Okay. It was just a. because, cuz [00:07:00] 2015, I, at least in my recollection, and certainly for me personally, 2015 was the year that React really took off.

, that was the year I started using it. I, up until that point, it felt like there were 600 different JavaScript frameworks that were all e everybody was, there was Angular, angular had been around for a little while. You. probably nobody remembers flight js, which was Twitter's JavaScript framework.

I built a project in that Oh , which had some nice qualities. And I was also very early on the on view I think might even have been pre 1.0 and that was a mistake cuz we hit some performance issues. not. Not, that was not view's fault. It was my fault for jumping on the bandwagon too early in production.

But So that it was at that point that someone I worked with was like react is pretty solid. Maybe we should switch to that. And so we did. And that's what kind of took off. But yeah, polymer was, it was one of those things where I was just like casting around for tools for building web applications.

And it was one of the [00:08:00] ones that came on my radar cuz it was from Google. And and the web components thing was interest. 

**Sean C Davis:** Yeah. Yeah. And I had a similar sort of journey maybe shifted slightly, but in those, yeah, right around that year, 20 15, 20 16. Spent a lot of time with Angular, which wasn't, it really wasn't a super pleasant experience cuz that was when they transitioned from, Angular js to Angular two.

They were like, they were, yeah. We were right in the middle of that. And it was all just a messy time for components, but it led to what we have today. And so yeah. You said you've been using web components for about a year now in more in the traditional sense, or are you using.

Like completely using the native APIs just completely by themselves or are you using any tooling around them? 

**Evan Davis:** So for the web components, we're not using it's not built with lit or anything like that. Okay. They're really just web component. I I have I'm using libraries in them cuz one of the use cases that I have found that they work really nicely for, at least for me, is data visualization.

Which I do a lot of at work. [00:09:00] And so I used D 3 for handling the rendering of the component of the visualization either on a canvas or in an svg. So I am using libraries in them, but otherwise I'm not using any particular tooling for. . What I found that works really nicely is using them in conjunction with a JavaScript framework like view or spelt that plays really well with web components.

, I don't know if React still has problems with web components. I believe they used to have a lot of problems with them, but yeah, like using, so I am using some tooling for selt and I'm using SELT to. Organize and coordinate the beha, the business logic in the application for the component.

**Sean C Davis:** Yeah. So it's all your routing and everything like that is, is throughout, 

**Evan Davis:** yeah. And state management and that kind of thing. Ah, 

**Sean C Davis:** okay. Okay. So what yeah, if that, that's actually really interesting. So if you have an application using that, that Yeah. You're using spelt for everything else.

What is. , what's the argument or the use case for [00:10:00] when you would break out and adopt a web component? 

**Evan Davis:** So the first thing is I do as many things as are appropriate in a web component. I will choose to do as a web component first. Okay. The, the things people run into sticking problems, like we mentioned before with shadow dom and how things in the shadow dom won't pick up your global styles.

And so one epiphany I had very early on that led me to this hybrid approach was if you want it to pick up your app's styles globally, don't put it in shadow dump. It doesn't belong there. That's the whole point of shadow DOM is to keep styles from leaking in and out. So if you want the styles to leak in it's something that probably shouldn't go in shadow down, at least until there's a solution for that.

And I know that there are open proposals for I, I forget what it's called open Styl or something like that, that would allow styles to leak into the shadow dom, but not out, which would allow buttons to pick up your button styles and things like that. 

**Sean C Davis:** and right now there's no option to if you're going to have a build a web component, it is going to get rendered [00:11:00] into the chato dom.

You can't opt in or out of 

**Evan Davis:** that, correct? You? No, you can totally opt out of shadow dom. Okay. Okay. If you read the lit documentation, they tell you not to do that, and I think that's a little heavy handed. I think if you wanted to build a a web component that writes to the light dom.

there's no reason not to. Okay. It's not, at that point, it's not doing anything really significantly different than your JavaScript framework like Felt or React is doing. Like they get a handle on some element in the dom and then they write a bunch of stuff inside of it, and then that stuff is all there and something else can, like jQuery can come along and grab those elements and mess.

And so using a web component that way, I don't see what the problem is. Shadow dump gives you added protection because if there are implementation details that sh people shouldn't be messing with, which I find is often true for if I'm building a visualization in S V G, there's a ton of elements in there for the ax season and the titles and things like this.

And people just don't [00:12:00] need to know about them. So stuffing them in shadow dam is nice. Cause it keeps them outta the way. , and then I only have to expose parts that need to be configured, like the tick labels so that you can set the font size and things on your tick labels. But so yeah I'll put as much as I can into a web component, but they end up being one of two kinds of components.

Then I end up either with a, basically a leaf node. This is not a thing that is doing any kind of orchestration between components. It is a thing that is orchestrated like a line chart or an app or something like that, , if you compare that to. A form you might have a form that provides a bunch of inputs where you're selecting what data is being displayed right?

Yeah. Some of those form fields might be synchronized and whenever they get updated, you need to fetch different data, like that's an orchestration task. I wouldn't use a web component for that probably, yes. Okay. So if it's some kind of a leaf node in my application, it'll often end up being a web component.

The other thing that they work really nicely [00:13:00] for is some kind of a container. The example that I came up with for this project that I'm working on is I want my visualizations to resize with, the browser window, right? Like I use the I use a lot of the responsive layouts from every layout that Andy Bell and Hayden Pickering wrote and so it's, it responds really nicely to the size of the browser, and I want the SVGs in there to scale with them. You can't attach mutation observer to an svg. . Ah, okay. If you want to use mutation observer to detect a change in the size of the S V G and update the view box, you have to put the SVG in a diviv.

And I had messed around with like class hierarchies and things to make this work. And the solution I ended up with was just a chart container web component that has a diviv and a default slot. . And so whatever you put inside of it ends up in the default slot. And as long as the thing inside of it has a width and height property then it will work.

There's a mutation observer that gets hooked up to the diviv. And whenever [00:14:00] the size changes sorry, not mutation, I keep saying mutation. It's a resize observer. Doesn't work with S V G. . So whenever the resize Oh fires, okay. , it will set the width and height on whatever is in the default slot 

**Sean C Davis:** because you Yeah.

Cuz then you have to target all the children in there. And Yep. And resize them. 

**Evan Davis:** Okay. But, so it doesn't do any real rendering. And all it does is set up this situation where I have a div that will fill whatever is containing it and then, , I have a resize observer watching that diviv. And then whenever the resize event happens, I just take all of the contents of that default slot and tell them what their width and height is, and that's all the component does.

Interesting. Okay. And it work, it works great. It's so nice to just be able to slap that around whatever I need and it'll get those resizes. And it's the same kind of thing that is land does. That. Oh, yes. Leatherman's. , Zach Leatherman's island partial hydration web component. Again, it's another container.

It doesn't have any ui but you can stick [00:15:00] stuff inside of it and you can give it some attributes and it will load your JavaScript and hydrate your web component for you. 

**Sean C Davis:** That's basically all, it's just, it is a component, right? But it's just, yeah. Watching on behalf of your component on yeah.

Whether or not to hydrate.

**Evan Davis:** So that's when I use 'em. Those are basically the two use cases is visualizations right now and containers that have JavaScript behavior associated with them. 

**Sean C Davis:** Okay. That makes sense. And actually the last point about hydration is something I've been interested in as well because if we go, again, go back to that 20 15, 16, 17, that we have React as s spas are really big in, in those days.

And so we I felt like we still had, we had the Jekyll of the world where yes, we're gonna put everything we're gonna render everything, pre-render everything, it's gonna be. , we'll just use jQuery or whatever to add our limited interactivity s spas are getting getting more popular. But that's [00:16:00] when then we start to see the emergence of next and Gatsby and this kind of this approach where we can take these JavaScript.

Frameworks, component frameworks, and then we can still pre-render them. So we get the best of both worlds. And I felt like in tho when we were making that transition, there was still a big criticism for traditional web components in that you need to use JavaScript. It didn't seem like anyone had solved the the pre-render.

Issue. And so I, and that could be wrong, that could have just been my perception, but I'm curious, is that accurate? Is that still the case today? Or are, do we have some solutions out there for being able to build web components but also pre-render them? Or is that not, that's not what they're for, so we shouldn't worry about 

**Evan Davis:** So are you talking about being able to progressively enhance your web component so that you don't get just a blank page If JavaScript falls.

Or I think I'm, 

**Sean C Davis:** I'm touching on maybe there's two different ideas baked in [00:17:00] here. One is that Yes, absolutely. So when you land on the page, there's something there, and then I can hydrate that after the page has loaded. But the, maybe the secondary question that I'm asking here is there any value in using web components when I don't need any interactivity for that component?

**Evan Davis:** So the second question, is there any value in web components? If there's no interactivity is a big maybe ? I probably should, I should have gone back and reread Nolan Lawson has done some really great investigation into performance with shadow Dom, and I haven't, it's been months since I read this particular article.

I seem to remember. . In very extreme cases, there can be some performance benefits from having styles encapsulated in the shadow dom because it's y you just have like lots of little small doms and you don't have one gigantic dom that the browser needs to to resolve all of the CSS against.[00:18:00] 

I think I might be misremembering this. And so maybe there's a good reason to do stuff like that. , but for me, most of the time I probably wouldn't use a web component if there wasn't some element of interactivity. 

**Sean C Davis:** That's fair. And I guess that's, you're also pairing it with another component framework that Yeah.

Has that ability to do to, 

**Evan Davis:** to do that. My, my project, the projects I'm working on at work basically is just not gonna work if JavaScript falls over and it's for a very limited audience of people. So I feel fairly confident telling people like, you have to be on an Evergreen browser and you have to have JavaScript enabled.

And I'll do my best to keep the JavaScript payloads down because I don't know what their connection's gonna be like, but, , I mean I've used, so I I did a couple months ago, I think I did a stream with Ben Meyers who does semantics Twitch Stream. And we built some things with web C that We had some web components that used Chato Dam and [00:19:00] didn't have any interactivity.

We built a card component and okay, the only real advantage to that, and this I, it's of trite cuz I designed it specifically to be this way, but I designed the card so that it had a border around the end of the card. , there was a little tag at the top of the card and the border went through the middle of it.

, like if you, the default styling on a field set with a legend in a form it was basically that styling. And so what, okay. What shadow DOM let me do was hide the div that was used to create that border, and it allowed me to create an extra grid. So that I could use grid to place that vertical line going through the center of that text.

So the text was spanning two rows and then the border only came up to the middle row that it was spanning. And so I hid those details in the shadow dom, but realistically there's 600 different ways that you could have built [00:20:00] that same design without shadowed on and it would've been fine.

**Sean C Davis:** Yeah. Fair. Okay. Okay. . So you've mentioned CSS S a number of times. Is the approach today generally to just write the raw c s or do you usually are is SAS still relevant in the web component world? How does yeah how do you do your styling 

**Evan Davis:** today? For web components, I just write css.

You just write the plain css? Yeah. Okay. I still use SAS for a project. because usually what I find is that I have design tokens and I want those tokens. I need to write out utility functions for, setting margins and padding font sizes. I want to write out c s properties that contain those tokens so that I can use those in places.

And that's for me a big part of where the value of SaaS comes in is that I can just write a couple of four loops over my tokens and then generate whatever I need to generate without having to figure out how to configure some other tool. . So for [00:21:00] project, I'll usually have sas, but when it comes to the web components, I usually just put a style tag inside of the template and and just write vanilla css, cuz Vanilla CSS is pretty awesome in 2020.

**Sean C Davis:** It's gotten really powerful. And also with the way you've described using components as leaf nodes and that they're generally not orchestrating, they're simple. That your styles, I imagine end up being fairly simple as a result 

**Evan Davis:** usually. Yeah. Yeah. It's, I like a three quarters of a screen of CSS would be a lot in most of the web components that I've written.

Okay. Okay. Most of them are much smaller than. 

**Sean C Davis:** Interesting. Interesting. Okay. So I with just a few minutes left before we transition to this last segment here, I thought we should spend some time on the future. Where are web components going? And oddly enough this morning just catching up, reading a couple different articles.

I came across two predictions. One said that what did they say? They said Remix is going to go all in on web components and [00:22:00] ditch react in 2023. I was like, that's a bold prediction. That's, yeah. We could unpack that for sure. And then I read another prediction that said oh, I did, I wrote the quote down cuz I thought it was funny.

20 20, 23 being the year of web C. Is about as likely as 2023 being the year for the Linux desktop. I 

**Evan Davis:** knew you were gonna say that. . 

**Sean C Davis:** So definitely lovers and haters, believers and doubters. Where do you fall? What do you think is happening this year with with web components? 

**Evan Davis:** Full disclosure, I'm currently talking to you from a Linux desktop, fantastic. That might tip my hand. That's perfect. . I actually, I don't, my predictions for it are not nearly that bold. I hope that we will see increased usage with people like Dave Rupert advocating for them. And last fall, Brad Frost wrote a really great article on. Web components and the role they can play design systems.

Oh yeah, I read that one. That was great. And like everything he talks about in there is a [00:23:00] really great articulation of everything I had been thinking for the last year. The only difference is that I'm not working with design systems. But Okay. He makes, he has a whole section in there on it's not either view or web components.

It's view and web components and there's value there. . So I think it's probably mostly gonna stay the same. Maybe if. So like I know that 11 t is really fond of web components. , the creator of LE 11 D Zack Leatherman created the is land web component that we were talking about earlier.

And he also created the web c compiler, which is a way of writing web components as single file components, view single file components or spelt single file components. Really nice authoring experience. I. . There's a lot more to it than that, but that's the main thing that people see with it.

If Astro starts really leaning into web components too, I don't, I have no idea if they are planning to or not. We could maybe see more adoption. But I also think that part of the reason why people really don't like web components quite often, at least the [00:24:00] people I talk to, is because web components quite often solve problems.

Most developers don't have. 

**Sean C Davis:** Interesting. 

**Evan Davis:** Interesting. Because most developers are, when you're writing an application, what you're doing is that kind of orchestration thing that I was talking about earlier. , you have state and business logic and you just need to. Map that into existing elements and map inputs from users through those existing elements back into your logic and your state.

, and you can do that, like using them as containers and things like that. Web components as containers, but I'm not sure there's much value there. And you still don't get things like your two-way bindings and you're nice templating. , unless you're doing something with with lit, but again, lit tells you not to do things in the light do.

And so then you run into the styling issues of shadow dom. And I think the reason shadow dom styling is such an issue for people is because most of the time it's not what they want. The reason it exists is to solve a problem you don't [00:25:00] have. So it's a struggle to force it into that. So I'm not sure we're gonna see huge movements.

, would be great to see the platform doing more things to, to lighten the load of something like spelt or view so that they don't have to ship as much JavaScript. But I think those things need to be like, we need native dom dipping in the browser. It's bonkers to me that the easiest way to update your UI is to just write a big string to enter html.

and the browser's not smart enough to just update the bits that need updating. It just blows away the whole tree and rear-ends it, 

**Sean C Davis:** right? Yes. 

**Evan Davis:** We need stuff like that. We need a way of creating bindings between JavaScript objects and. Form inputs and things like that.

Because even if you're using web components, you still have to do all that yourself. And so those are value that the JavaScript frameworks have that web components still don't, and I don't think they're on the horizon. We have, so [00:26:00] there's open declarative shadow. Is implemented by Google.

I think it's proposed, but I don't think it's been accepted. That would be a way to handle the server side rendering you were talking about before. Okay. Yes. I'm not in love with it the way that it works, it, you end up shipping quite a lot of copies of your shadow templates which seems unfortunate because we don't have HTML imports.

**Sean C Davis:** But so it's every instance you're 

**Evan Davis:** bringing the whole Yep. You create a copy of the exactly. The template you want in the shadow. Do. So if you have a card, a page with 50 cards that all have the same shadow, do, you've got 50 copies of that template. Yeah. Which means 

**Sean C Davis:** bring the files each time too, right?

Yep. 

**Evan Davis:** And but that helps with the with the server side rendering. That's how Lit handles server side render. Okay. And then like I said, Nolan Lawson I don't remember if I mentioned this earlier. I've talked about him several times. He just launched yesterday a proof of concept for a polyfill for openable web components, and that's where your [00:27:00] global c s will leak into the shadow dom.

But the shadow dom styles don't leak. Interesting. Okay. And so that solves the problem of, I put a button in my shadow down and it doesn't look like the rest of my buttons. So that's a problem that we are solving hopefully in the next couple years. But that might increase adoption of web components, but 

**Sean C Davis:** I don't know.

Interesting. Interesting. Yeah. And so it's okay. I, it could go a number of different ways. One of the ways it almost sounded like you were suggesting that these various other site frameworks and component frameworks can also push the browser to make some of these native APIs little simpler, which could be really really beneficial for everyone.

**Evan Davis:** Yeah. Yeah, I think so. I think Google driving the open chat or. declarative shadow DOM stuff is a big part of why it's there. And you can see the value, like Lit has a plugin for 11 that I think that will, I, if you have lit components, it'll basically [00:28:00] server side render them for you or statically render them ahead of time.

Okay. Okay. And that, that kind of stuff helps. that helps deal with people's issues around progressive enhancement of web components. I don't want an empty page because JavaScript fell over kinds of things, but Exactly. Yeah, I dunno. I would love, I'd love to see them get used more though, cuz I, I really do think they're great and I think there is a place for them in most people's toolkits.

It's just, it's probably not gonna replace everything. 

**Sean C Davis:** Yeah it's not gonna replace it in it. And I feel like one thing, one of the biggest things I took away from this conversation that they're, they can be a compliment to these other these other tools that are out there. And they can be really valuable in those in those, in, in those particular use cases.

So it sounds like we just need to keep pushing and see what other use cases we can come up with and Make it, yeah, make it all stronger. Improve the developer experience. So it'll be interesting to, to follow and see if that momentum sticks around so that those improvements happen. 

**Evan Davis:** Yeah, and I think for anyone that's curious and [00:29:00] wanting to try 'em out, like you're probably gonna bump into things that uh, you feel like you're banging your head against a wall cuz you're used to doing things a certain way.

The thing that got me over that was instead. grumbling about how you can't do something with web components. Try to think about okay, forget everything else I knew. How would I solve this problem with this tool? And sometimes what you'll find is that it's not a good tool to solve this problem, so you should use something else.

But sometimes what you'll find is there's actually a good way to solve the problem. It's just not the way you're used to doing it. 

**Sean C Davis:** Interesting. Interesting. All right. Thanks Evan. This has been, it's been really interesting so far. And before we wrap it up, I've got a series of nine quick questions that will hopefully produce somewhat short answers and and then we'll wrap it up.

Ready? Okay. All right. Here we go. Number one, what is your favorite open source product? 

**Evan Davis:** Ooh, that's tough. My favorite one.[00:30:00] 

Would. The one that I use, there's two that I use basically every single day. If we set aside the Lennox kernel I thought you might say Lennox . I I can't really say that it's my favorite is the problem. Okay. Fair. I think I, I'd probably go with. Okay. It's the text editor that I use and have used for 20 years now, and it's old and it's, I think it's really, I think it's great that it's still going that strong and I know that VIN fans can be insufferable and I try really hard not to be insufferable about it.

But I think it's cool that it's been around for that long. Absolutely. Yes. And that it's still going this strong. , 

**Sean C Davis:** have you even noticed that? Some developers I've talked to will take the, I think there's like a, is there a vem mode in VS code where you can, you basically can have all the same key bindings and all of that.

**Evan Davis:** There's there's a vi plugin for VS. Code that is pretty good. [00:31:00] It's gotten pretty good, but it's not them. It's still not, yeah. You. When you start getting really deep into the kinds of things you can do with them, is when you start figuring out the kinds of things that they haven't implemented in that plugin.

But it's really good. Okay. Okay. I used it for a while and I was impressed at how much of the interface they had built into that plugin. 

Very cool. Look into that. Okay, number two. This one requires a little bit of background because I felt like we have, we tend to have folks on the show who are working at either developer focused startups or bigger tech companies.

And your resume is quite different and I think that's super interesting. So I, so making this into a short question what is the most interesting thing about working for the National Oceanic and Atmospheric Adminis? 

I, the most interesting thing for me is working with the scientists. So the work I'm doing now, like the project I've been talking about, the whole show is to visualize model output [00:32:00] from several of the climate models that, or weather models that that we produce.

I don't work in the part of NOAA that does climate prediction. We do short term weather prediction. And just like even just learning about the basics of what goes into numerical weather prediction, like a thing that we take for granted. Talking about the weather is considered boring, , right?

Yes. It's something we've only been able to do for the last 50 years, but Noah started in the seventies under a different name. I. . Okay. And it, it exists because at that point, computing power, we had enough computing power to actually do it. It's not right. It's not an old thing. Weather forecasting.

And so you need all of that data. Yeah. And we have my understanding was that we, NOAA has more data. To work with than any company that you can think of, like Facebook and Netflix, and they think they have big data, but [00:33:00] apparently the amount of data that Noah processes is just, it's enormous. 

**Sean C Davis:** Wow.

Hadn't even considered that. That's, yeah. That's super interesting. . Okay. Number three and four go together. So let's start with number three. If you had to choose between spending your time with a book, a TV show, or a feature length film, which one are you gonna choose?

**Evan Davis:** Probably the book. 

**Sean C Davis:** Okay. So then, oh yeah, and you can elaborate here in number four. So number four. now this time of year, tons of lists out there of this is the best of 2022, so best books of 2022. And so this question is what was your best book of 2022? 

**Evan Davis:** Boy, that's a tough question because I'm not sure I did that much reading in 2022. 

I have a toddler, and so often I end up just going to Bed straight.

**Sean C Davis:** Yes, that's fair. That's fair. Or you can you go back a couple of years? What, let's say just recent memory, what's one of the best books that you've read? 

**Evan Davis:** Let's see. There's a number of books I've been [00:34:00] reading in the last couple of years that are just really remarkable.

I think I might for this, I might say let's, I have to get the title cuz it's long, A Long Way to a Small Angry Planet by Becky Chambers. Okay. It's not it, I, it's her first book, so it's not that new now. It's the first book of the Wayfair series, which was a four book series.

And she's now two books into her new Monk and Robot series. The long way to a small, angry Planet. It surprised me and it was fun, and it was one of those books where I was like halfway through it and I was still waiting for it to start , and sometimes interesting. Sometimes that's really bad.

Like I've had that vibe with Neil Stevenson before and I just end up hating the book. But with Becky Chambers, what I realized was like I was waiting for it to start. But I was I still couldn't put it down. Like I was so interested in what was happening and it's just because the way she creates tension and handles drama and stuff [00:35:00] is not typical.

And so what it felt like was, it felt set up, but it wasn't set up. It was the actual story and it was wonderful. 

**Sean C Davis:** Oh, so it didn't and so you didn't feel like it actually ever really started, there wasn't a moment where it was like, oh, This is a, it just keeps going. 

**Evan Davis:** Yeah. And once I had the realization that, wait, this is what's going on and this is the drama and this is the tension.

And it was just so fun. And it's so much more relaxing than than so many science fiction books that interesting. There's so much dystopian science fiction around now and I don't think I can tolerate it anymore. And her books are a breath of fresh. . Okay. 

**Sean C Davis:** I don't read much science fiction, so I feel like I'm gonna check this out.

I like the way that you described it. 

**Evan Davis:** If you want a fantasy novel, that's also really quite good. It's very old, so maybe you've read it. Assassin's Apprentice would've been my second choice. Okay. For best books. It's old it's from, I think the mid nineties. Okay. And it's, . I really love that book.

I actually just sent it to a friend because I think they'll really like it too. But if you love fantasy, I highly recommend the [00:36:00] Farer trilogy. 

**Sean C Davis:** I'm gonna, I'm gonna check this out. like adding to my list, so yes, this is great. This is great, . Okay, number five. I realize this might be an extension or the same answer as number one, which is totally fine, but I.

Looking for the most valuable tool or that Yeah. The tool that you find to be the most valuable in the process of building websites. 

**Evan Davis:** Ooh, tool that's most valuable.

Honestly, it's gotta be, this feels like a little bit of a cop out, but the web. 

**Sean C Davis:** Fair. That's fair. 

**Evan Davis:** I, I don't, I wouldn't even be doing what the website without it. Yeah. But I wouldn't even be able to do what I do if there hadn't been so many resources, like the Mozilla Developer Network and now there's web.dev from Google and even Stack Overflow if you're careful. I don't know. I. , I have a CS degree, but we didn't, they weren't teaching web development [00:37:00] when I was in school okay. I had to learn all of it on my own after I graduated and got saddled with a web dev job, . And I don't know, just I know that people think that things are getting out of hand and they're too complicated and there's too much stuff now, but there's also just so many ways to learn.

**Sean C Davis:** Yes. 

Yeah. So not the existence of the web, but you're talking more of like the accessibility to Yeah. Information and resources. 

**Evan Davis:** Yeah. And there's, there's so many people out there writing courses that are being given away for free and so many reference material and I don't know, if you were trying to learn to program c plus in the nineties, you went and bought a book and possibly bought yourself a c plus compiler and sat down in your room alone. And that's how you learned. And now there are forums and there's discords, and there's all of these resources that are available because of the web, and they're built on the web and the people on them build the web. And it's it's so easy to learn.

**Sean C Davis:** That's a [00:38:00] yes. Yes. That's a great way to put that. I love that. Okay, number six is where is the most interesting place you've traveled? 

**Evan Davis:** Most interesting was probably Nigeria. Oh, okay. I could spend a week there for work. We were doing a project with UNICEF on polio eradication and spent a week with their polio eradication initiative in Nigeria. I missed the trip to Afghanistan. , which doesn't sound like it was too much of a miss, cuz they never left the compound.

And I think there was a suicide bombing the day they left. Yeah. 

**Sean C Davis:** Okay. So yeah, not that was good. What in Nigeria, were you in Lagos or were you all over the place or? 

**Evan Davis:** We were in, let's see we were not in, wait, no we were not in Lagos. We were in the capitol. And the name now escapes me, parenthood.

And then we spent a few days up north in a province called, I think Sococo. Okay. So yeah we could to see a little bit of the capitol and then we went up north, which was a lot more rural and spent some time in some of the villages. They use a lot of locals to help manage the [00:39:00] vaccination process, and so we were meeting with some of them to talk about like how they go around doing vaccinations and how they track data of who's vaccinated.

**Sean C Davis:** Interesting. 

Interesting. Yeah. It sounds, yeah, sounds like a fascinating trip. . 

**Evan Davis:** Yeah, it was neat. It's an unusual experience for a white person to, to be the minority. And it's the kind of thing I think I wish more people could experience or I wish that, like it was less of a thing. But yeah, we I was traveling with one guy who was six foot tall.

We're both. Irish heritage, so we're both pale as paper . And then we were also traveling with a Korean woman. And a Chinese man. And so we were all curiosities to every single kid in all of these s 

**Sean C Davis:** Ah, yes. Okay. 

**Evan Davis:** And they were all just, I don't know how much of it was just because they wanted to get a look at the weird looking people and how much of it was, cuz they're, they are just nice people, but everybody was super nice and wanted to take lots of pictures and 

**Sean C Davis:** that's fantastic.

Oh yeah. That's great. Okay. I [00:40:00] feel like I could keep going on there, but Yeah. gotta keep going. Okay, so number seven is what's the best career advice that you've received? , 

**Evan Davis:** I'm not an ambitious person, so I don't know that I've received that much career advice cuz I don't think I've sought it. Okay.

Okay. Part of that is almost certainly a function of the privilege of being a white man in the software industry, and people just assume that you know what you're doing. . , but I think. I can't remember if this is something I figured out on my own or if someone told me this, but the one thing I always keep in mind is try not to become good at something you hate doing

**Sean C Davis:** I, that's yeah, that's, it's funny, but that's great. That's, I it's really good advice. . 

**Evan Davis:** It's a great way to just make you hate your job because if , if it's something you hate doing and you're good at it, and especially if you're the only person who's good at it, you're gonna get stuck doing it all the time.

So you gotta be careful about drawing boundaries with people if they're asking you to do stuff that you just really don't enjoy. . . . 

**Sean C Davis:** I love that. Yeah. That's unique. But that's so valuable. 

**Evan Davis:** Or use it to make more money if that's, ah, right. Yes, you can then you can be a mercenary.[00:41:00] 

**Sean C Davis:** Yes. Number eight. Your oh yes. This is we were talking backstage about this before the show. You're going to participate in the bring back blogging project this month. And for those of you out there who don't know what, Google it. It's it's very interesting. You can read about it, but Evan, I'm curious, what is the thing what about it is gets you really excited?

**Evan Davis:** Yeah, so the, if anyone wants to find it, the URL is just bring back.blog oh, great. Perfect. And I'm excited about it just because I really I like the idea of blogs. I like the idea of. Longer form writing, even though I often don't quite have time to sit down and read quite so many long form posts.

But I just, I think unless people be more thoughtful and I think having a place where you can just, write your thoughts down, express yourself is a nice thing. And I think if. The indie web is not exactly accessible. People being able to web mention each other and communicate through blog posts is not exactly gonna ever be mainstream.

But I [00:42:00] just, I like the idea that people could write essays and respond to each other the way that, scientists and philosophers did a couple hundred years ago. It's slower than social media and I think that, I think that. , 

**Sean C Davis:** yeah. More time. You can have to form a full thought and all of that.

Yeah. 

**Evan Davis:** Yeah. And you're not just if I wanna write a response to something somebody else wrote the affordances for doing that are not, on that person's blog. I have to go back to my website and write the thing and it, it just . I think that a little bit of friction can help make people a little more thoughtful.

And I would just, I would love to see a place where people are talking more about the things that interest them and the things that are important to them and not so much of the like back and forth that you get in social media. , we're people are jumping on each other and stuff like that.

If you don't wanna read someone's blog, just don't read it. Yes. If you don't like it, you don't have to read it. And if you do like it, then you keep reading it and that's great. And you don't have to correct someone just because you don't like the same movies or something. [00:43:00] Exactly.

**Sean C Davis:** Exactly. 

Okay. Last one, number nine. You can host a lunch with anyone alive or not. One person, who would that person be? 

**Evan Davis:** For me it would be very, personally, it would be my grandfather, my mom's dad because he died when I was a teenager and I don't think. I don't think I was fully old enough to appreciate all of the stories he had to tell when he died.

. He had been he'd been in World War ii, but he had, when he en enlisted in the Army, they put him in the Army Corps of Engineers. So he was digging trenches and the thing about my grandfather was he spoke French. like a Frenchman. When he, okay. When he would be in France, people would think he was like Canadian or Swiss or something, if they detected an accent at all.

. And it wasn't until At some point his co figured out that he could speak French and he was like, Wally, what are you doing here? And they sent him off and he ended up being a translator in World War ii. Oh, interesting. But he's, he, I'm, he had lots of stories like that and I [00:44:00] only got a few of them cuz I was, 15 and I wasn't interested.

So I feel like a lunch to get to catch up with him and find out a lot more about that. The time he spent teaching. At the military, I Cole in Paris for a year. I think my mom was like 10, maybe five. She was little. So it'd be great to catch up with him again. Yeah, that would 

be, that would be an amazing conversation.

**Sean C Davis:** All right. Thank you very much, Evan. This has been just a really great show, really excited to have you on. Now, b before we officially sign off feel free to plug anything else that you're working on and tell folks how to get in touch with you if they have further questions. 

**Evan Davis:** Sure.

So the easiest way to figure out how to get ahold of me, would be my website, which is just Darth Mall dot. It's mall, like the shopping mall, not the actual Star Wars character . And that should have links to things like my Mastodon account and things like that. I don't really have anything I want to plug.

I don't think. 

**Sean C Davis:** Okay. 

Not a problem. Yeah. Great. Just for the rest of you, quick [00:45:00] reminder that these shows are now recorded. Live on the first and third Tuesdays of each month at 1:00 PM Eastern Time in the United States. W United States, which is 5:00 PM gmt. The live shows then get syndicated on cfe.dev.

And YouTube is videos and also wherever you get your podcasts. And we'll be back on January 17 with Mark Newnan from Cyprus. We're gonna talk about practical testing approaches for modern websites. Until then, from all of us at cfe.dev, thank you for joining us for this show, and we'll see you next time.