---
_build:
  list: false
  render: never
---

# JamDev - What is Jamstack

**Fred K. Schott:** [00:00:00] I'm really excited to be closing out this conference. I'm really thrilled to be here. Thank you for putting on such a great conference and yeah, let's get into it. My first basically confession here where I wanna start out as is that I had planned to get a completely different talk today to close this out.

If you don't know my work, I'm Fred K shot on Twitter. And I am most known right now for helping to create Astro. So Astro is this really cool site builder. If you haven't checked it out, go and check it out. It's basically less than a year old, but it won the ecosystem innovation award at last year's Jamstack conference.

It is essentially what if react server components, but available today and for any framework. So service side render your. Inject cool react components or view, and don't pay the cost of anything that isn't dynamic on the client. It's super cool. It's super exciting. It's a really interesting take on web development [00:01:00] and it's getting a lot of buzz and we're really excited to keep working on this and growing up.

That was gonna be my talk. I was gonna walk through Astro show all these cool features for now. Just go to.build to check that out, cuz we have something much more important to talk about. While I was doing research for this talk. I was, I love Jamstack. It's modern web development. It sounds great.

It feels great. You go to jams, stack.org, the modern way to build websites and apps that delivers better performance, sign me up. That's awesome. And I thought I knew what Jamstack was. I, J Java script APIs, markup J a M that's the jam and jam stack. And as I started researching this talk topic, I realized something very weird and scary and odd, and I threw out my talk and now this is an intervention.

So I'm here to start an intervention. What I learned was that no one is on the same page about what JAMstack means today. I think we all think we are, but I don't think anyone would actually agree on the definition of Jamstack. [00:02:00] It's a term from 2016, it made a lot of sense. It was pretty literal then.

And now today, I think there's this open question of what is Jamstack, where some people are really clinging to the old definition and others are super ready to open that definition up for a much larger, bigger tent, right? Modern way websites and apps, better performance. Some people very strict on the definition, others.

If it does these things, maybe it's stamps. And I think this is important because it seems really critical that we figure out what Jamstack is. Maybe we won't all agree, but if this is a really big thing about Jamstack right now, for example, there is the unofficial Jamstack.wtf, and it's also an explainer for what Jamstack is really cool guide.

Also very interesting. It does a good job of explaining it the way they sum up the last year of Jamstack. And this is the site that explains what Jamstack is while Jamstack continues to expand confusion about what it really means has become a common theme. [00:03:00] And yet Redwood JS and blitz JS show us that Jamstack.

Isn't sewing down both of these tools. Aren't really traditional Jamstack by that traditional definition. And yet here they are showing that Jamstack continues to evolve. And as I was doing this research, I saw this common theme of every article about Jamstack had to start. No one can agree on what Jamstack is.

Dot. And so I wanna have this conversation. I can't think of a better platform than the closing keynote of a Jamstack conference to let's start an intervention. Let's start a conversation. I don't have all the answers. I'm just a fan of the web. I am not a thought leader. Hashtag thought leader in the Jamstack community.

Astro is a site builder. So naturally we wanna support Jamstack sites. I just, this feels really interesting, really relevant to where jam stack is today. And so I wanna talk about it and I have some thoughts. I definitely have some thoughts here, but I'm also really interested to hear what everyone else has to say.

I think there'll be a fireside chat after this or Q and a so plenty to get into here, but if this can start [00:04:00] the conversation about what Jamstack is today, then I'll be happy. So as I did the research here, I think what first took me off again, there's a lot of good stuff to like on jams, stack.org about a really flexible definition.

But if you go back to the talk that Matt gave in 2016, and this is Matt who founded Netlify that like original definition of Jamstack has its kinda origin in this talk. If you go back and watch it, it's super interesting cuz it has, I don't know if anyone's watched the react like Facebook explaining react for the first time at JS comp.

This was maybe. Almost 10 years ago. Now, eight years ago, it has the same thing where today we see these things as like givens, right? React component UI. It all makes sense. It spell view. We're all doing different iterations on that same concept, but that talk where Facebook had to pitch the idea of a component written in JavaScript and to an audience of people only doing model view controller, which was this older way of thinking of your front end.

You can see it's like you're talking to a totally different audience that has D. Conceptions [00:05:00] about what web development is and isn't, and this talk that Matt gives is very similar. It's an audience that is maybe working with PHP, maybe, rails where they have this idea of what web development is as this relationship between a server and a front end.

And Matt is explaining no, there's actually a different way of doing things. And that's what became JAMstack go watch the talk. It's really interesting to go and look back at what this looked like in 2016, I took some notes here. I basically pulled out the main themes from this talk. So this is what I'd call the like maximalist jam stack, like definition.

This is the original definition was actually pretty strict about what Jamstack was and wasn't so JavaScript APIs marked down. That's a really loose definition of what it like any site has some combination of those generally today, at least. There were actual real definitions in that talk that Matt went into.

And so there were some themes around how Jamstack was more secure by pre-building your site ahead of time. There was no [00:06:00] WP admin to hack into, right? Your admin console was separate from your main production site that you were sending to users. The reliability of building your site ahead of time meant that you were essentially just serving static assets.

There was no. Every user hitting the same API, doing the same amount of work, you could basically preload all that work and then ship that to the user. So almost never going down, if you imagine back, at 2016, that like hug of death was a thing where if you got popular on hacker news or Reddit, all of a sudden your site just went down, couldn't handle the fact that you went from one user a day to one user, a second.

It would just die. And that was something the Jamstack was like if you pre-build it, the user's loading the static content. That's not so much. You can scale that. Especially when you start to bring in a CDN, you can scale that all over the globe and that scaling performance CDN, all of that spoke to a story of performance where if it's static, it can load really quickly.

Now that's the main definition here. And it was tied to this idea that you could build your [00:07:00] site ahead of. Use a CDN in front of it. So it would go around the globe faster. And then there was all these cool features around that around deployments, caching, how your builds were managed and automated, but that pre-building of markup is the one that seems to be the most interesting today, because at the time it was basically saying don't use rails and PHP used a site builder like 11 D or Hugo or J or really create react app could even be tied back to that.

It doesn't matter what you're shipping to the user. It's just the idea that it's not generated dynamically. So create react app is a great example of something that is essentially just an empty HTML page. You're shipping, JavaScript, static for every user, the exact same. And then it's running on the client to hydrate that site, build that site, generate it.

That was a jams deck site and some of the first or especially around that time past companies I've worked at, we used create react. It gave you this really nice, like I'm thinking of my website as an application that I'm building, I'm talking to [00:08:00] APIs, I'm using react. It was like this really happy place for a developer to live the big problem.

And I think why JAMstack is having this sort of crisis right now around this definition is. It was very easy to build a slow Jamstack site. Again, create react. App was really great developer experience, pretty poor user experience because there was no sort of pre rendering built in. So your whole site was shipped to the user's JavaScript, essentially a blank page, and then they would have to render it with JavaScript.

So you're waiting for that JavaScript to load. You're waiting for it to run. You're waiting for it to parse. JavaScript's a really expensive asset. And if you're putting it in a blocking place and your whole app is built with that, you really quickly run into performance problems. So that was the kind of problem.

It was like okay, I'm following jams. Like I have this great deployment scalability, but I'm still able to build a slow site. And that's really tough to get around if it's, one of the, easiest ways in that, it's just anyone can use, create react app it's really popular, but is it making it easy [00:09:00] for me to build a fast site?

The other thing that came along then is this idea of next JS. So next JS all of a sudden brought in some ideas from the non jam stack world. I wanna actually render this dynamic. That's you know, huge no-no in the definition of Jamstack at that time, we wanna render ahead of time so that there's no server running to render the page that could go down or be hacked.

And next J us was like no we'll do this rendering ahead of time. And maybe it is tied to the user. Maybe it is dynamic, but this is gonna help the user get a fast site. So they get pre rendered HTML. And then yeah, we have to do a lot of JavaScript loading the same way react app does, but at least the user can see.

So all of a sudden they added that idea of let's dynamically run to this page, maybe based on what the user sent, maybe each request is different, it's dynamic, but we'll still have all the other benefits of Jamstack. So next year I think there's probably the most, lots of different site builders started to next was around the same time Gatsby around the same time.

[00:10:00] But next year's, I think push that definition, the furthest, where all of a sudden is is that model necessarily. if you're looking at it purely from, is it meaning the definition of Jamstack, then the answer is no, that's not Jamstack, but if you start to be a little flexible with a how and start to just look back at the definition of why Jamstack is great.

I don't think it's that far off from Matt's original intention. And again, I can't speak to the original, what it was like to be in 2016, what their original intention was, but watching that talk and judging the values that were seen in it really, I think it was this fourth one that seemed to be taking up the.

Interest from why Jamstack was great. That was the decoupling of the front end and the back end. And this is something that no matter what you're using, whether it's a static site builder or a dynamic, N XGS felt kit, something that's building your front end and has some dynamic capabilities in either case.

That's a really important thing that we didn't have 10 years ago was this [00:11:00] idea that a front end website is actually different from your backend API. You can give a front end team the website and then have it talk to the back end team through an API and all of a sudden there's that really nice decoupling where I worked, I won't say the name of the company, but one of my first jobs was at a company.

And I think three separate instances of realizing that there was a really critical security bug that if you just click this one page and then that page, you could trick the site into thinking you were an admin and get to a page that you weren't supposed to and see data you weren't supposed to. And it was a nightmare because the like UI could take you into some path that you weren't meant to be in.

Versus if you decouple the two and have a really strong contract of API, the front end and the back end can talk across that API. You can secure that API. There's no, if I'm on this page, I can get to something that I'm not supposed to. You just have an API that's much more strictly. Written and behavioral, and really much easier to reason about versus all the complexity of the front end, taking you in all these different paths that doesn't have to impact your business [00:12:00] logic.

And so I personally feel like this was like, I cannot think this movement enough for pushing that. Funny enough. I'll just bring up this old article. This is from almost 10 years ago now on a team that I worked on with Nicholas seis, who, if you don't know him created Lin does a lot of writing. Super smart.

This is one of the first projects I ever worked on, which was this idea of at box. At the time we were going through a similar kind of crisis, which is what is the front end and a world where node exists box had tradit traditionally been PHP. There's this idea of the UI kind of being this separation between back end and front end and the front end, essentially being a way to modify.

The back end that had generated the HTML. So like that traditional PHP generating HTML your front, end's just making it interactive, but not doing any sort of generation real old school stuff before react was really a thing that we could use. And this is gonna feel really old school. No one thinks about it this way now, but we [00:13:00] essentially, and Nicholas really started to reason about this idea of no JS being the presentation layer and all of a sudden the front end developer.

Using a back end server to reason about their front end. Again, this is still talking about no generating UI and the front end hydrating it versus again, react didn't really exist, but even now we're starting to see what it meant to decouple the back end from the front end and really business logic lives on the server API website owns the front end and that's all well and good.

And. I don't think that this is too different and too far off from where JAMstack is starting to be pushed now where that decoupling and that simplicity that comes from that is really where I see the value in. When I think of what a modern web app is, or a modern website is it's that you can own a full experience from server to front end.

And you get that decoupling so that you're not worrying about how does this backend get powered? What is the business? I can talk to APIs. I can leverage AWS or Versace and all these great things. And I can just think about building [00:14:00] the best website possible and what didn't exist back in 2016, net five Versace.

These were much simpler ideas around really like deploying a server somewhere. But this idea of letting the platform that gets built, honestly take on that responsibility. Anyone using one of the Netlify Versace or CloudFlare you're giving the CDN for free, right? Regardless of what you're building, the CDN is not tied to it being Jamstack or not.

It's there for you to use atomic deploys, automating your builds using GI like all these great powers aren't actually tied to the, is this static or dynamic? I think that is the one thing that we seem to be holding onto the. But it really doesn't feel like it's actually giving us as much as we thought, if we can trust our platform to scale for us.

If I can trust that Brisel or nullify is gonna scale that work across thousands of different cloud workers or CloudFlare workers, if you're using CloudFlare land as if you're using AWS, right? All of a sudden the platform's taking on the scalability concerns. [00:15:00] So the static first dynamic becomes less about me needing to scale, right?

The hug of. Is not gonna be impacted by my cloud functions. If they're running on AWS, you still have the database to worry about. But I would argue that usually would be hit anyway by something that was dynamic. Anyway. So if the content was, loading that e-commerce store Jamstack would say that should be loaded and fetched client side by, I need to know the stock.

The stock is dynamic. Is this in stock or out of stock? Let me make an API call. We're just moving that work onto the server. Instead of only on the front end, but it's still happening. So I think there's this really interesting question. If you need something dynamic, is it breaking the Jamstack contract to move that work to a server?

If we can trust that server can scale. And that's where I think we need to expand the Jamstack definition. I think that's where Jamstack means a lot more today in terms of what it used to, where there wasn't really this platform you could depend on to. The security, the reliability and the [00:16:00] performance.

Instead, you really had to make this dramatic static or dynamic choose one. And that's it. I really love these new platforms like net Laine, Versace that allow you to not really think about the scaling, let them handle it. And then you can run logic on the server without worrying about it, breaking your site.

As long as you're thinking of your site, as a single thing, a single website, it's. Actually shipping off a product. If you click the buy button, it's not sending an email. Those can be handled by backend services, as long as I just think of this website as a single thing that I'm building, and it can talk to APIs, then whether it's running on a server or only in the client becomes a lot less of an issue for whether I'm doing something good or bad.

In a architectural sense instead, I can really align that with the use case. Am I trying to build something that needs to be dynamic? Then I'll run it on the server, right? So that users always get really up to date information and they don't have to render it themselves. And if it's static, I can build it ahead of time.

Great. I'll build it ahead of time. That's something I can do [00:17:00] because this is a marketing site and it's not changing. And I think that freedom isn't actually at odds with what Jamstack means in 2022. And that's where I'd like to see the web go. And I'd like to see this definition grow a bit. So if I could sum this take up and where I would love to see us open our minds a bit, it's the Jamstack.

I don't think needs to be this rigid definition that only a certain statically generated site fits. I think that really pushed us way further back in 2016. Into this new world that we felt like we have so much to thank for that definition to push our idea of what a website is and isn't, but at the same time, now that we have more technology, more power at our fingertips, I think we can take on that growing definition and not sacrifice too much.

I think next JS salt kit Astro is currently static, but we're definitely exploring SS. All these ideas about running a server to power your site. I don't think are at odds with, again, going back to what Jamstack really seems to be pushing is this idea of [00:18:00] better performance, this idea of maintainability, of decoupling.

These are the things that I love about Jamstack. These are the things that I wanna see continue to grow, and I don't think we should limit ourselves to this really rigid definition that can't change over time and evolve over time as the web grows. That's my take. I, obviously, again, I'm not an authority.

I'm not telling you to change your mind. But if you were someone who is thinking of Jamstack as a really rigid thing, that was a definition created seven years ago. Now, is that right? 5, 7, 6, either way. That's fine. But also, maybe not so much. Maybe there's a benefit to opening this definition up to the people who are using tools.

Challenge that really early rigid construction. And instead, what are they trying to get out of Jamstack? What do we get when we bring a new tool in, can we grow this tent without losing anything that we really care about when we talk about what makes Jamstack great. I think [00:19:00] we can, and that's my pitch.

And hopefully this has been entertaining and hopefully you all have enjoyed this and thank you for the time. And thank you for everyone who gave a great talk and for the conference in. thank you very much.

**Sean C. Davis:** Thank you so much, Fred. That was great. Super thought provoking. I have so many questions I wanna ask.

And for all of you attendees, if you have any questions you can hit the ask question button at the bottom of your screen, Adam, and we'll keep an eye on them. But first I wanna bring Brian back on stage and we'll put Fred in the hot seat to answer some of these questions.

Brian recently wrote he wrote a great article that is really right in line with or at least in the same topic of this last talk. And so I wanna hand it over and let Brian kick things off with the first question.

**Brian Rinaldi:** Thanks for that was amazing. Very thought provoking.

I think, I. Your talk of [00:20:00] expanding the definition reminds me a little bit of, if you've seen, like Brian, Laro talk about functional web apps and other folks have brought the, like even the remix folks are going down this route of it doesn't matter if it's static, we're basically achieving the same result.

And I, I do think there's a, like a strong. There's a lot of value in that. At the same time, like I also feel like, okay, then what is JAMstack anyway, it's just web development in general. It's okay. So that's where I kind of struggle. Like where do you feel like, do you feel like if you go that route, are we, should we, is the jam sack term even useful anymore?

**Fred K. Schott:** Yeah. I really struggled with not coming up with my own dumb acronym, which would've just been really, I think, fallen flat. So I didn't even go down that route. Yeah, I think we get so like we lose sight of what we're building a lot in down of the larger sense. I at least personally do. And I think it's fairly unique and fairly new still [00:21:00] to think of the website as the thing.

I have a get repo that is the website or the web app. If I'm building something more dynamic, And that again, going back through these old talks and through articles about what people love about Jamstack, that seems to give us everything around the simplicity and the ability to reason of the front end as a thing that I can own as a developer.

And so I'm not having to go and. Talk to the backend team to generate my API. I'm not having to learn rails Ruby and JavaScript. Like it's that idea that I can just work in my own world and have a lot more autonomy over what the website is as a friend and developer. So it's that mix of like empowerment, but also simplicity.

I think we get lost in the this technical thing versus this other technical thing. And instead I think the ideas behind it are still pretty solid. Even if you challenge. So how a little bit more

**Brian Rinaldi:** that, yeah, that's great. Sean, are you [00:22:00] there? Did I seem to have lost the feet?

**Sean C. Davis:** Yeah I think so. Yeah. Okay. Here I'm okay. All so switching gears slightly you mentioned gly coining another term or coming up with an acronym. Question what do we do about all of the acronyms?

It's every framework or company that pops up has their own take in like the, their methodology of the way they're solving their, the problem. But it's led to A lot of overlapping concepts and now somebody coming into the industry has given like just loads and loads of acronym and has to acronyms and has to make sense of that.

So like what do we do about that? Yeah.

**Fred K. Schott:** What do we have? We have SSR ISR. DS. PSR.

**Sean C. Davis:** Yeah. Yeah, there is DSG.

**Brian Rinaldi:** Yeah.

**Fred K. Schott:** It's a lot. Yeah, I think it definitely shows that no, one's on the same, like it's not a solve problem.[00:23:00] About which of these is best. I think maybe everyone wants to have their own unique take because everyone else has their own unique take.

So it makes you feel special, right? No. That's all flawed. And ours is the best and what's that XK C D like 15 standards. We're gonna create the other final standard and another's just 16. You've only just created another option. I don't know. I think that it's tough. It's a lot of what it means to statically build a site versus dynamically building a site.

We think of it, these two very different things we need to bridge them so that you can do each one when you need it. I would love to see the web and just the way these platform works, if I can make one kind of appeal would be and I don't know which this is probably one of the acronyms already.

So maybe this is me just pushing for one acronym over another. But there's this really nice thing. If you can just think of the whole thing is when do I build this page? You get a really nice simplicity to that where it's not do I build it and then revalidate it, do I build it ahead of time? But then what happens if that data changes?

If you can just think of it all as like a build of a [00:24:00] page. And maybe I build that page in the server and by a user hitting it. So it gets hit and then it gets cashed for later. Or maybe I build it ahead of time. These feel like different camps and really it's just everyone having different answers to when do I build this page ahead of time dynamically?

When every user comes in, do I cash? It, they're all just different takes. And I think that's why there are so many is cuz different options in this space have different pros and cons. There's not really a one size fits all. I think the acronyms make it all seem more complicated than it needs to be at the end of the day.

Everyone's just trying to answer that. Like when do I build this thing? And then once I built it, how long can I keep it? That really depends a lot on your use case. And there is no one good answer.

**Brian Rinaldi:** Yeah, this is where I ended up writing the, a post about this as well and presenting about all the different running type.

It all ends up being like, do I do it beforehand? Do it. Pre-render do I do it like on the server? Do I do it? Obviously you can then refresh it, invalidate the cash, or [00:25:00] even do I modify the rendering on the edge and like an edge function or something like that and it get, it does get complicated, more options, more power, more complications.

Yeah. So let me ask you this. So in this going back to this discussion of how we define it is. If do you still feel there's value in pre rendering parts? Obviously. I feel like you do cuz Astro is like basically all pre rendered at this point. Is there even if you're, cuz this is the argument I hear from folks is if you're server side rendering stuff and you can add a cash to that, is there any value at all in pre

**Fred K. Schott:** rendering stuff?

There's definitely value in the simplicity of like here's some assets you host them and put 'em up there, like giving any one of your posts, whether it's for sale or Netlify, or like an S3 bucket. A set of static assets is a lot easier than giving it a server that has to be run in a certain [00:26:00] environment.

And are your secrets working? Is it distributed? Is it fast? There's a really nice simplicity story. The problem is. It has trouble scaling to some use cases, especially as a site gets big. So Astro is a static site builder. It's clearly a case that I really care about, but also it's really hard to have an answer for someone who says great.

I have a hundred thousand markdown pages and Astro is taking a long time to build how do I fix those? And that's a really thing that hard problem to have an answer for. I think 11 is actually probably the best example of a stack site builder that realized it needed some answer. If you have a hundred thousand pages, unless you're one of the most popular sites in the world, probably not.

Everyone's viewing those pages. So you're doing a lot of unnecessary work if you're building them all ahead of time. There's good options for each use case where if you have a simple dev blog, I love building a static site for that. Like I think astro.build our homepage is a static site. It makes a ton of sense, but it's really hard to choose something that's one size fits all.

That's so limited. I think a lot of the best tools in the space are doing something, lets you start there, but [00:27:00] then add some dynamic ability when you need it. Others, I think spate is just Nope, it's all dynamic and you can opt out in certain cases, but I think starting simple and static and then expanding more is definitely the way I'd like to see other sites go.

The one thing that exists that is really interesting. And this is I wonder if the platforms like nullify and Versace are thinking about this when you deploy something to Versace. The first thing is a screenshot of that site. So they're doing it as a feature. Look, here's your homepage.

Like you can now click it. Like when you see us in the dashboard, you're gonna know which site this is because it's a screenshot of your homepage. What that's doing behind the scenes is also like building that page. So you've essentially the platform has automatically pre-rendered that homepage because it needed to create the screenshot.

So regardless of whether it was built statically or generated at runtime, the first thing Versale did was run and build that home. And so I wonder if there's some idea that hasn't been explored that involves the platform being the static builder, where could you deploy it as a [00:28:00] runtime and a dynamic thing that then the platform, the first thing it does, maybe even as a part of your build is go and warm up the cash on all those pages.

And instead of that being a tooling problem, like the tool has to be built ahead of time. It's like a deployment problem. I go to deploy it. The platform warms these pages up. If any of them fail, then the whole build fails cuz they own that kind of deployment. I would love to see more experimentation in that because it would just simplify a lot.

Again, this is me as a tooling off they're talking, but if I could trust that the platform would warm up these pages for me. All of a sudden you have a dynamic site builder that can handle a lot of static things and it could be smart. It could say, all right, what are the 10 most popular pages, a hundred most popular pages.

I'm gonna warm those up. There's a lot of simplicity in that model as well, where it might not be as easy to deploy as a static site, but at least you can stop thinking about this pre rendering verse building and running it dynamically and let the platform just do its best to optimize your site for you without you worrying about.

**Brian Rinaldi:** We do have a couple of audience questions. If. [00:29:00] I don't know if you were gonna get to those Sean. I didn't mean to interrupt yeah, no,

**Sean C. Davis:** that's it. Yeah, I was gonna say that's super interesting. I wanna dig into it, but we have a couple questions, so I'll read the first one and and you can take a second one, Brian.

So the first one comes to us from. Chris. And he says, if the definition is growing and expanding, then maybe it's not a stack anymore. And just a piece of web development or a platform overall. Now

**Fred K. Schott:** Do you agree? Yeah. Yeah. I think there was more behind the, so I don't remember when this happened, but like JM were all capitals and then all of a sudden they weren't like, it went from jam stack the acronym to just like jam stack the word.

And I think that could just be like a little editorial style change, but maybe there are people thinking about this even within I don't know who owns the word Jamstack if anyone does, but I think Netlify probably, yeah, if that's a Netlify project, maybe Netlify is already thinking in this way can we stop thinking of as an explicit stack and start [00:30:00] thinking of it more as a brand and ideal, and instead of the, how we can focus on the, if it's these things, then no matter how you built it, we want to think of that as the modern.

The other problem is just, there's a lot of like companies involved. There's a lot of options. Now, if I'm building a company, I wanna be the best X for Jamstack. I want that to mean a lot of things. I want everyone to think. Great. I'm gonna pay this company money. So there's also like weird incentives around how big Jamstack has gotten.

Where you wanted to be a big tent. If you were someone who was trying to build a tool for this audience, like if you're an analytics provider for Jamstack, you don't really care if it's a static site or a dynamic site, at least I don't think you do. So I think a lot of people want this definition to grow.

I think it's just a question of does that sacrifice anything? And can we think of jam tech as an ideal and not an explicit, these three things. For

**Brian Rinaldi:** what it's worth. I remember the conversation around that getting rid of the capital JM. And it was like, there was a lot of thought put into [00:31:00] why they were doing that.

And because as a stack, like the JM part, looking at the time, it made sense now it's okay, what site doesn't use JavaScript APIs. So it doesn't make a lot of sense and it's not. A stack is usually prescriptive and this is not at all prescriptive. Yeah, but let me get to the next question.

So the question is Shakespeare's jab quote, what's in a name, a rose by any other name would smell a sweet, could be read literally or understood as the rose. Competing theater to Shakespeare's the globe, they smell sweet. As well, poop hygiene was early bad. Do you see a point of inclusion of concepts, elements where the name isn't true to its core meaning anymore?

That's a very deep question.

**Fred K. Schott:** I, but I lo I think it might be the first question ever quoting Shakespeare that I've ever had the answer I'm honored. Yeah. Yeah. I [00:32:00] think that's, I think I've agree with that main point. It's I think a question, are we getting as much out of the limitations, the strict definition of Jamstack as we are out of a more loose definition.

And that's, I think my argument is that the real benefits, at least that I see in Jamstack in my own work. And then, and when I read about what other people love about it, it's this idea of simplicity, decoupling, and performance. And yeah I just don't see the value in being so strict about it anymore.

I don't. Especially given where Jamstack has led us in a strict definition. If the definition doesn't help you build a fast site, or if the definition limits you where I have to feel like I'm, breaking the rules of Jamstack to build eCommerce site, because I want it to be dynamically loading, some sort of dynamic data about stock and what sizes are available.

If we can still offer the same user experience or maybe even a better user experience. And if we can offer the same developer experience and maybe even a better developer experience, then I think that the new definition just has more use [00:33:00] and doesn't have to be as restrictive. But I don't know. I think you could go either way.

It's a philosophical question for sure.

**Sean C. Davis:** On, yeah, on that note, I if we go back again to the beginning days of JAMstack, it felt like it. It was created almost in response to like the WordPresses and the monoliths that at the time, and almost felt like an opposite sort of pattern.

And even yesterday we heard a talk where someone was building a site with a WordPress backend and it gets be front end. And is, WordPress used to be the enemy is what you're suggesting. Would you say, does WordPress fit into your definition? Is can WordPress be JAMstack or maybe if not, what is it about WordPress that makes it not able to be JAMstack or in what

**Fred K. Schott:** situations?

Yeah. Yeah. It's the funniest thing. Maybe not funny, maybe it's that in our own web analytics for basically [00:34:00] every project I've ever worked. There is like one of the most popular URLs that gets hit is slash WP engine. And I haven't built any of those as WordPress sites in, or sorry, slash WP admin.

I think that's the one. The one that's everyone's trying to hack it. They're trying to see if you have it available and then they're gonna try every password and they're gonna try and hack you and. Again, I think that's where the coupling definition does most of the work where if your site is only, let's say it's dynamic, let's say it is similar to where person that it is a living breathing thing.

But if it's talking to an API, you're still getting a lot of that security, right? Like at that point, what are you doing? Hacking the front end and hitting an endpoint because at the end of the day, it's gonna have to go through the API. The security story there ends up being a lot stronger, even if it is dynamic.

I think what WordPress and I don't mean to use them as a punching back here. I think you could say it for anything like rails or a PHP where the business logic, which encompasses a lot of the security aspects of your site is tied to the UI generation. [00:35:00] And, I hit this URL and something happens like that can be really dangerous, or I hit this URL and I end up, getting access to something I shouldn't, and then I can perform actions and maybe I didn't add the right checking there.

Cause I assumed that I was gonna build this only for an admin. You end up your error or surface just becomes as complex as your UI instead of being as complex as the functionality, which is what an API provides more it's Hey, here are the 10 things you can do. And we'll just put a check for authentication in front of each of those.

That's where I think the definition really gets me. Excited about the value that I'm getting by just following these rules. I get that for free. On top of the fact that team, as I grow might end up being a large team that needs all this complexity. They're trying out a new database. They're trying out some new technology behind the scenes that API doesn't have to change.

That API stays. They're doing that invisibly. I'll never even notice. It's this really nice, like contract layer between two different types of develop. And that's, I think the real benefit that a WordPress or a rails or a PHP app doesn't traditionally give you, it [00:36:00] certainly can, but WordPress, especially, it's all one big mixed up thing that can be really risky.

**Brian Rinaldi:** Yeah. I think that's a really good point. Also think it's interesting. The, what you mentioned about the, once the businesses got into jam and everybody's got a business around Jamstack then I don't wanna limit my audience to just companies or people who want to pre-render most of their pages.

And so the broader definit, the definition of Jamstack, the better. For us to sell to JAMstack folks. And there's a good point in that. And at the same time for me as a developer, I think may I, hopefully, I don't know if you got to read my post, but my feeling as a developer is there was a kind of.

I hate this kind of maybe bad way to put it, but a glorious simplicity to James stack that drew me to it, like early on and it, and I knew it didn't fit every single kind of site. And I could build [00:37:00] lots of kinds of sites with it, but there may be cases where Hey, I, that's probably not a good fit for Jamstack and you know what, that's fine.

I know other things I can build using other, ways of building. And so part of me feels like if we could, we restricted the definition, but said, Hey, what, if you need to add in SSR, we're not saying Hey, you're still using some JAMstack principles, maybe pre rendering, a bunch of your site and doing this stuff.

But that doesn't mean you've broken some kind of contract. You're just, there's lots of tools and this is just a kind of set of concepts that. Drive, push you to pre render as much as you can and build things as simple as possible and stuff like that. Like the smaller definition to me feels more comfortable, but that's just I feel like I'm fighting against the current

**Fred K. Schott:** here.

Yeah. It's we see that all the time with static sites being built with Astro where it's, I think that's a promise if a methodology doesn't scale. With your, with whatever it is you're building, right? So from one page to 10, to a hundred, to a thousand, [00:38:00] to a hundred thousand to a million it means you're buying into sign.

And then you're all of a sudden fighting with your own definition. You're fighting with the tools you've chosen a good methodology, I think should scale with whatever it is you're building and keep helping you versus something. Oh, this is only for simple, like simplicity as a thing that only exists for simple sites versus, Hey, here's a method.

That will keep your development simple, no matter how big it is. I think that's the thing that's missing in the like static part of of what Jamstack is, where if I can use a tool that maybe lets me start static and simple and then can evolve over time. I think that's a much better Way to help users feel like they can bet on this thing and that it'll scale as they grow versus feeling like they're making decision on day one that maybe is gonna bite them, on day 1000.

Yeah. Growing with you just feels like this really important part of what jams deck should be to help as many users as possible.

**Brian Rinaldi:** Yeah. I would agree with that. I think we've gotten there to the point where like you could do. I could use like [00:39:00] next JS and build a, I could, it could be all static, but then I can also start to add in SSR.

Yeah. But I think that's where I, I'm like, I worry, we get away to like where, okay, everything's should sort rendered and like we've, is that like in, and maybe that's okay. For everything I just feel like there's still value in pre rendering stuff and even the simplicity of deployment and all that other stuff, like really.

That there's value in that, but yeah. Yeah.

**Fred K. Schott:** I think that's the dream scenario for me is if you can start with the tool it's static, it lets you get started. And then if that's as big as your set ever is, that's great. And then if you need to grow, it can still kinda shepherd you through that transition, I think.

And maybe this is where some of the kind of push pull comes is because Jamstack's so firmly that the original definition of this is static. That then. To break free of that. We had to not only break that, but say it's dynamic is good. If we had never talked about static first dynamic, if that had never been a part of the definition, I don't think we'd be talking about it as much today either.

I think it's almost in response to that, that we feel like it's something we need to address, [00:40:00] versus if we're just agnostic to that question, let different tools solve it in different ways. Then I feel like one that helps you go from one to the other, as you scale would win out. Ultimately.

**Brian Rinaldi:** Absolutely. We used to call it static sites the way that's right. That's right. Yeah. Yeah. Where that comes from, that debate comes from. Cause it was literally, I wrote a book called working with static sites, so

**Fred K. Schott:** no, we fall into that trap all the time. So much of an Astro's original, like what is an Astro site?

We had to say it's not an SBA, even though we let you use your favorite F. Okay, then we have to call ourselves an MPA and it's is that acronym even helping anyone, like all of a sudden you're being defined by the thing that you are trying to move past? Yes. I think that happens to a lot of different things, but we've definitely seen that in Astra where we're trying to pitch.

What's so great about Astra. And I think people are trying to slot us into what are you the opposite of in a way that and remix, I think remix is having this trouble with next, where they're trying to define themselves. As everyone is asking, how is this different from next? And they get stuck. I think in that [00:41:00] trap.

They end up trying to tell a performance story and it's similar. They're telling a usability story. It's really, it's still react but there's all this cool stuff they're doing about form components and the fact you can deploy to the edge that next year's can't even do. And that's where I get excited about tools and technology like that.

If they're doing something totally new, that's pushing the bar. It's a much more fun way to look at the tool and kind of evaluate it on its own.

**Brian Rinaldi:** Absolutely Fred. Really good. I know we're at a time. I honestly, I think Sean would agree with me. I could keep this conversation going for a long time, a very long

**Fred K. Schott:** time.

I was gonna say you wrote the article before the talk, so you get along the for kicking this out. You beat me.

**Brian Rinaldi:** Yeah. I didn't even know we were gonna do that talk at the time. So yeah, it worked out. Thanks for joining us. Thank you. Great. Yeah,

**Fred K. Schott:** I really appreciate. Yeah. Thank you, brother.
