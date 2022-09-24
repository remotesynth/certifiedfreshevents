---
_build:
  list: false
  render: never
---

**Sean C. Davis:** [00:00:00] Welcome to code sandwich hour, a certified fresh event where we talk code and sandwiches, and it takes about an hour. This week's special guest is Eduardo bouças a senior staff engineer over at Netlify. Thanks for joining us, Eduardo. Great to be here. All right. So before we really get into the main part of this show, we have to start with what is the best sandwich, right?

So

**Eduardo Bouças:** I knew you were gonna ask me this. And so I thought a bit maybe I should be, maybe I should have a controversial answer and maybe I'm gonna go with something like, oh, my favorite sandwich is a hot dog. And then we go into this whole conversation about whether it classifies as a sandwich and will open this Pandora box.

But no, I'm not gonna, I'm not gonna go there. I will have to say a burger. I love a good burger. And so that will have to be [00:01:00] my choice. It was difficult because there's a lot of great sandwiches, but it has to be a burger.

**Sean C. Davis:** Okay. Okay. So there are yeah lots of detail we can go into here first.

I, I love the hot dog thing cuz we got into it in a previous show and I think that's part of the reason why I love this subject is because the people feel very passionate about where the line is. But let's just start here. What are the toppings like go-to set of toppings or do you like to switch it up?

**Eduardo Bouças:** I actually like it simple. Like I, I don't usually go overboard, although there's a place nearby that does a great burger, but it's like huge. And so I don't have it often because it's, I need to prepare mentally and physically to eat that burger and I can only do it so many times. And it has like everything that it could possibly imagine.

Obviously cheese and bacon and egg. And it like so many things. And, but I also like like a simpler [00:02:00] version where it's just, really good meat, a vegetarian version is also good. I've had like really good veggie burgers. But usually, yeah, a really good bun and very simple ingredients will usually do it for.

**Sean C. Davis:** Okay. So you're yeah. You're like, you're relying on the core ingredients being exactly. Really sad. Exactly. Yeah. So do you know, do you have a what is it that the fat percentage in the meat that is optimal? Cuz I know it's, it can range from like here's this super lean Patty to some restaurants will do 50, 50 almost.

I think

**Eduardo Bouças:** here's the thing. So I chose a burger, but I'm not exactly a burger connoisseur. Like I won't. Okay. Okay. , I'm just really good at eating them. I'm not so good as like knowing how to, categorize them or I'm just really good at, I land at a place I'll order the burger and I'll, I'm good at judging it and eating it essentially.

But I won't know the [00:03:00] details of like fat percentage and things like that.

**Sean C. Davis:** Okay. That's, the most important part or like the best part is the eating it part. Yeah. That's where so now, and you talked about a place you like to go locally. Is that, do you feel like that is the best burger or have you traveled and had something better in a different place?

**Eduardo Bouças:** I've had a few. When I was so I lived in I lived in London for a while and I, my absolute favorite burger there was in a place called honest burger. And it was really good since I've moved back to Portugal. There are a few places that I like this one place that I mentioned locally is that kind of holy grail pulling all the stops, big burger.

But I like to try it's because it's such like a universal. Language, like everyone knows what's a burger. So I like to try it everywhere I go and collect my, my my travel log of good burgers. So yeah. I like try [00:04:00] whenever I go, wherever I go. I like to try burger.

Yeah.

**Sean C. Davis:** Yeah. Cause you can find 'em a lot of places like where's the farthest that you've farthest away from Portugal that you've found burger.

**Eduardo Bouças:** That's a good question. Maybe somewhere in the us, although I won't, I'm not really sure. Like I can't pinpoint like a specific place that I had it, but probably the fur, the furthest from home was probably somewhere in the us.

I'm sure. I had plenty of burgers when it was, when I was in the us, so

**Sean C. Davis:** yeah, I know they are all over. They're all over the place there. Yeah. there's you can have a restaurant that has I don't know, like some. Different types of food where you wouldn't associate them or expect them to have a burger and they still have

**Eduardo Bouças:** a burger.

Yeah. Yeah. I wanna, I feel like building like a world map of burgers like this. I had a great burger here. Pin it on a map. Oh yes. That would be a cool project.

**Sean C. Davis:** I, I saw a project that was more about I, I might be [00:05:00] confusing projects. I was, I wanted to say sandwiches, but it might just be food, but it was, yeah, it was like this interactive map.

It was really cool, but yeah. Yeah. Mike, instead, I'm gonna put the pins, not in where I've traveled, but in where I've actually eaten a burger. That's I love that idea. Yeah. Nice. All right. With that once again, I make myself hungry and for me it's right after lunch. I'm like, I, yeah, maybe I don't, I shouldn't F well, I just won't fixate on it.

It'll be fine. It'll be fine. Okay. So with that, I will. Step back and give a, give an outline of this show for those of you who are new for those of you who have been around it's probably starting to feel a little familiar, but the way this works is that we'll fit the rest of the show into three segments.

That we're typically a really bad pun name associated with them. I'll still try to do that today, but gonna take it in a slightly different direction. And what we'll do is today, we're just gonna call the theme. I suppose we'll just call the theme jams stack. I feel like that's gonna that'll [00:06:00] tie our segments together.

And for those of you viewing live, if you have any questions for Eduardo along the way, you can drop 'em into the chat and I'll get to what I can and try to sprinkle them in throughout the convers. And just a reminder that these shows are syndicated on cfe.dev and YouTube in a video format, and you can also get them in just audio format, wherever you choose to get your podcast.

And last for those of you who are listening to a recording, you can please feel free to join us for future events. So you can sneak those questions into the show. We record on the first and third Thursdays of every month at 1:00 PM Eastern us time, which is 5:00 PM GMT time. And what time do we say it is for you right now?

**Eduardo Bouças:** Eduardo, it's six over, just over six

**Sean C. Davis:** PM for me six. Okay, fantastic. And with that, let's let's jump into the first segment today. I'm gonna call the first segment static. Don't really have a great great, a great pun. I think I'm gonna save my pun for the last [00:07:00] one, but. In the first few shows, I spent a lot of time in the early days of our guest careers, but Nardo, I feel like you and I have a lot of parallel paths over the last maybe five or six years, so gonna spend majority of the time there, but I still feel like we owe some some respect or that we can also get some foundation from learning a little bit about where you came and where you spent your first few years in your career.

Yeah, I guess with that, maybe just give us a little bit of an outline. What were the first few jobs you had in tech? How did you get started? What languages were you working in, et cetera? Sure.

**Eduardo Bouças:** Yeah, so I, when I got into tech, I quickly realized that the web was the thing that really interested me, I wanted to build for the web.

And so the first jobs that I had were. I suppose you'd call full stack development. I was doing a bit of everything. I was working on like a PHP site and [00:08:00] working on the back end, but also doing a little bit on, on the front end. And I was, I guess I was like exploring the parts of the stack that were more interesting to me.

And at some point in my career I had a job that was like less about building solutions for for end customers and more about enabling my team to build those solutions and like creating tools that allow them to ship better and to ship faster and more reliably. And I think that was another kind of pivoting point for me because I learned that I was really passionate about.

Building for developers and building, helping developers build. And so that's where I, decided that I wanted to focus on developer tooling. And I started creating some, [00:09:00] exploring some projects in that space. I created a few open source projects and not long after that, I came across the jams stack movement, which didn't have a name at the time.

It was this idea of kind of building things with a slightly different paradigm where you would you know, rather than rendering everything at requesting you would pre rebuild some things. And it got introduced into static site generators and things like that. And. And that became really interested in that philosophy.

And I think that point, like from that point on it informed all the steps that I took in my career and how I ended up where I am today. So that's yeah, that's the, an overview of like where I started and how we ended up where I am.

**Sean C. Davis:** That's a great it's. I find it so interesting cuz there's there's so many parallels.

I pulled it out. I feel [00:10:00] like I followed a similar path as you, but always a couple years behind in fact what you had mentioned on, in terms of recognizing that you really liked building things for developers. I did the same thing. I, but I spent almost 8, 8, 9 years, I think in in the agency in freelance world.

And it was my last job in agency. Where I really, I was managing a team and I discovered that I was, there was a lot that was the HR side of management and all of that. But the other piece more than usually what I tried to do was more than building websites for clients.

I was trying to build tooling so that my engineers could build websites quicker and more, more pleasantly. And I love that, but it was the agency world. So I like kept getting, be down in Nope, we gotta ship this to the client. We can't focus on, we can't step back and focus on the system and I get it.

It makes [00:11:00] sense. But that's definitely what kind of nudged me in the, I wanna go to products and I'm specifically products that are building things for developers. And so in that note, I wanna talk a little bit about a couple. You mentioned a couple of the tools that open source tools that you have built for for developers.

And I have a story usually, or I have a story. I think that parallels to each one of them. And but I'll save my stories till after I let you talk a little bit about them, but I wanted to start with the project that's called static API generator. And so could you tell us just yeah, a little bit about what it is, what point in your career were you making this?

What what problem was it solving for you and for the community at that time?

**Eduardo Bouças:** Sure. I should start by saying that I'm really bad. At at ensuring that those projects that I've created were sustainable in the long term. So at the moment I have a bit of a graveyard of projects that I started because I wanted to explore new things,[00:12:00] into, to get into new technologies.

And whenever I did that I wanted to, there was a part that was for myself because I wanted to learn these things, but it was also, there was also a part of sharing it with others. So every single project that I've worked on, I made sure to make it public and to write about it whenever I could so that others could beNetlifyt from that.

And yeah, I had a few like those, the one that you are talking about, the idea was taking aesthetic site generator and applying that same principle. To an API. So in the same way that you that you push a markdown file to your GitHub, repo and magically, it there's a static site generated that will pick it up, it'll build a new version of your site and it will deliver that content N HTML to, to your visitors.

I was [00:13:00] toying with the same idea, but for delivering like adjacent API. Let's say that you wanna build an API for listing. I don't know, movies, and you'd be able to add a markdown file to your repo that kind of captures some information about a movie. And then that would automatically be translated into a into a rest API a limited rest API, because it's inherently static, but for consuming the content, you would expose the same interface that you would get from a typical API.

And to be honest with you, I've never used that on a real project that was purely out of curiosity of what if I do this? Would this be useful for anyone? And so I just had a lot of fun and like exploring that idea and building it out and then writing about it. And every once in a while I get like an issue or like a feature request on that project in other projects.

And then I feel super guilty because [00:14:00] I don't have the bandwidth to yeah. To work on those projects. But yeah, I guess that's, that's the beauty of open source.

**Sean C. Davis:** Yeah, that's right. That's right. So is this trying to get the context here is this in is Netlify already a tool by the time that you started this project,

**Eduardo Bouças:** so I'm not sure exactly.

I'm trying to remember when exactly this specific project happened, but I know that when I was first exposed to what is now the jams stack or to this, the idea of building Static sites in a modern way, the first tools that I've used were Jack and GitHub pages. Those were the things that I was working with.

Not long after that I started using Netlify and it opened up a whole universe of things because I was not constrained by this one specific tool and I could [00:15:00] explore different static site generators, which was great. And so now that I say this, the static API thing was very likely after I've discovered.

I because I don't think I've used like to to build this. OK. Yeah but that was my initial tool set. And in fact, the. Some of the other projects that, that I built that were prior to this one I created a project called static, man. And at that time that project was built specifically for that stack.

You were using J and you were using GitHub pages in this project was targeting that combination of tools specifically, not because like purely, because that was my knowledge at the time. What were the tools that I was kinda exposed to? And then obviously the E system evolved a lot and then I explored other things, but that's, that was a, the tool set that I started with.

**Sean C. Davis:** But at that time, you mean you couldn't even, even in the early days of [00:16:00] Netlify, I feel like they, they had more capabilities than, cuz the origination of, or I, maybe I should say the static site generators is, as I know them, Really began like in 2008 with that JCO and GitHub pages.

And so that had been around for many years, but that service is super limited. So that is it cuz that's static man, right? Didn't that bring some was, is it like dynamic capabilities to static

**Eduardo Bouças:** sites? Yeah. So that's the story of that project is interesting and I I think it had a big role in, in how I ended up investing personally in this space, cuz right about the time where I've discovered this new paradigm in this new tool set.

I remember watching a, an online conference called Jack econ and there was a talk by Tom presser Warner. And he was like giving [00:17:00] this talk about his predictions for where the space might evolve in, in the near future. And he was talking about this idea of having of having a service, some kind of a service that would receive dynamic data.

It would then push it to your version controlled repository, and that would trigger a new version of your site. And that really resonated with me. And from that moment, I was like, I'm gonna, I'm gonna build this. I'm I wanna explore this. And that's really what static man is it? It's a, it's an API that can.

Receive your dynamic content, whether it's like processing a form or sending like an HX call or or an API call that you make from anywhere really. And you, you tell static [00:18:00] man, how you want that data to be translated into static files. So you can say, I want this to be like adjacent file or a markdown file with some front matter.

And I want these properties. And so static man will take that. It'll write a file to your repository. It can create a poor request. So you decide whether to approve it or not. And then that's it. And then you merge it and it will trigger, the CI process that will rebuild your site. And then you have suddenly have that dynamic content being part of your static site.

And the original use case was really about kind of comments on a blog because I was, I had just rebuilt my blog using Jack at the time. And I was really enjoying the experience of kind of building my site using this new paradigm. But I didn't really know what to do with the comments.

Like how do I [00:19:00] wanted to have people adding comments to my post, but how does that work? If everything is just a static page and there were like solutions that it could use, like pulling a third party library that you would include which JavaScript, but I, it just never,

**Sean C. Davis:** it never feels quite right.

Yeah. Like you gotta do all this work on the client. Yeah. Yeah, exactly.

**Eduardo Bouças:** And so that's why I decided to explore that idea and it was great because it ended up exposing me to a lot. People in the space in a lot of projects. I remember talking with with Mattias from NAFI very early on when I started the project and I became like much more invested in, in, in this space.

Okay. And so I like to, I like to think back as, as the, really the beginning of my journey into the jams tech was creating that project and trying to solve that particular problem in the ecosystem.

**Sean C. Davis:** Yeah. And that's interesting cuz you had the, you had like the first pieces of [00:20:00] Netlify like the, you focused on the hook and triggering the build and all of that.

And and then Netlify comes along and they UN it's like the that last maybe not the last missing piece, but a big piece of the puzzle was the whole, how do we. I really think it's almost the core of it is cash invalidation at this CDN level, cuz that was such a complicated thing to solve if you were gonna deploy.

Iteratively like that. Yeah, definitely. Okay. So I, this is probably a good time to transition. I feel like we're, you're talking about yeah, you're getting into the kind of the shape of what JAMstack eventually became. And so yeah let's kick off segment number two and segment number two, again, without a pun today, I'll just call it dynamic and I'm like maybe dynamic isn't the right term, but there's so many terms for everything you can do with the jams stack today.

ISR, DPR, SSR, DSG, all these things, all these wild patterns. But I think before we get too far wanted to talk to you about the project that you did [00:21:00] while working or built while working at stack bit called source bit. And I have a I have a parallel story here.

Oh, in fact, I should, I'll go back in, in a few minutes of, and tell you my static static. Yeah. The static API story. But but yeah let's jump into source bit. So can you tell us a little bit about your move to stack bit and the work that you did on the source bit project?

Yeah,

**Eduardo Bouças:** sure. Yeah. So I think one of the, one of the challenges that that I felt when I was exploring the space was that. There's so many, there are a lot of different ways of doing similar things. You can, you have a lot of, luckily you have a lot of choice for tooling. These days, you have a lot of, static side generators and frameworks and the headless CMSs and deployment platforms.

And it, it can sometimes feel a little bit [00:22:00] intimidating if you're new and you just want to build something, it may be a little intimidating to figure out how do you connect all these pieces. And I think stacked took a really important step in that space because it allowed you to select I want to.

This static edge generator. I wanna pick this theme. I wanna use this CMS, do it for me. And that I found really exciting and I was excited to be, to be involved with that project and source bit was I think another step in that direction, because the idea behind source bit was to create a, like a pipeline of content, if you will.

So the idea of you want to retrieve content from somewhere likely a headless CMS, and you wanted to[00:23:00] you, you probably wanna manipulate it or transform it somehow, and then you want it to end as part of your static side generator or framework that, that you're using. And. Again, connecting those dots is not always easy.

You need to, to figure out how to talk to this restful API that your headless CMS exposes. And what is the format that you get that data? Do I get like an object? Do I get like an array of objects that like, how does, what are the properties? And if, what happens if you decide to migrate to a new CMS, because maybe this one doesn't work for you anymore, you wanna move?

Does that mean that I will have to change all of my templates because now the data is different or the, or similarly, if I want to use I don't know, next JS, instead of Gatsby, what do I do with my data? Do I still get the data in the right [00:24:00] format? And so the idea behind source bit was to create A unified format where that, that data would use.

And you would just choose your adapters, like in, in a plugin ecosystem. So if I wanna use let's say Hugo as my aesthetic set generator, and I wanna pull data from Contentful, then I will go to this library of plugins. I'm gonna pick a Contentful plugin and I'm going to pick a Hugo content.

And all of those dots are connected for me. And if on then move to a different headless CMS, I can just swap the CMS plugin and the data will come in the exact same format because it's like this unified data format. And. And then there were other tooling around it that allowed you to have a CLI that you can just type a command that it guides you into configuring all of that process.

So you don't have to learn this really complicated [00:25:00] syntax. You can just, we can ask you questions. What is your data coming from? What is this model for? And you do some magic and we create all the configuration for you. So I think you, I see it as another step in that path, that stack bit took of like connecting all of these dots.

And I think that was, yeah, I was super excited to, to collaborate on.

**Sean C. Davis:** Yeah, thanks for that. It's a super interesting project. And I ask I, I brought it up for two reasons. One I work at stack bit today and we didn't overlap at all and, and stack bit looks, looks very different today than it than stack bit did the, or the stack that you're describing did.

But still even today, as different as stack ITT is I'm working with this tool almost daily. And we're thinking about what's the future. What's the next iteration on that, but it's just it's such a powerful concept that. It has stuck around and secondly a related story.

[00:26:00] And similar to my static API story, I, in the, for me, I think it was the early days of the pandemic was on, I remember just being on a call with CTO of the agency I was working on at the time. And another engineer and what we had done is we had been in the jams stack space for I think a, probably about two years at that point, it was like 20 17, 20 18.

We, we dove all in. And so we had felt out and tested a lot of these tools. And at this time it's you're seeing a new headless CMS every week. You're seeing a new front end framework every month or so. And so we settled in on Gatsby and then we picked a couple D. CMSs that would they catered to our typical client.

So if a client came in, depending on their budget or the size of their site, we'd pick a different we'd pick a different CMS. And so like you mentioned some, you said what if you wanna move CMS is in our case, we had settled on Gatsby. [00:27:00] So we were confident in the front end code but we said but our back end might be one of these different sources.

There's gotta be like, we need to build this thing that can pull from all these different places. But the front end code never has to change. And the very next day, I'm not kidding you. Like the very next day I, I was looking around for something and I found source bit and I was like, ah, somebody has done it.

So I was yeah, it was. Amazing. And that's the parallel to the static API story was that a similar sort of thing I was playing around in the space and I didn't have a real need to build a static API, but I was like this concept of static, API all these things that we can do now that we have nullify is it's amazing.

They have unlocked this world of possibilities. And so I was like, I am gonna, I'm gonna invent a term called static API, and I'm gonna write about it. And and then I think that an article even got picked up by Chris Coyer he wrote something, it commented on it. And I was like, yes, this is [00:28:00] amazing.

I have found something. And then only a little bit after that, did I discover your static API project, which is had been around for years. And so anyways, this is I think that the parallels are super interesting and yeah, love, love the source bit project. Yeah. Anyways, enough about me.

I should stop talking about me on this interview show, but anyway okay. So after STBI you, you moved on to Netlify and early on in your time at Netlify you wrote a little bit about how there's a lot going behind the scenes are going on behind the scenes, on the team who are working on all these node-based projects.

A lot of them being open source and run by a small team. And I'm sure you're much bigger team now, but curious for you, if you can give us like a look behind the curtain in those, in your early Netlify days and what your team was working on.

**Eduardo Bouças:** Yeah, sure. So yeah when I joined Netlify, as a [00:29:00] continuation of that drive that I talked about earlier of.

Building tools for developers and that's exactly what I what I started working on when I joined the company I was working mostly around our node services. So like the CLI, which is a very important interface into our product. The our build system itself is an open source node project that that everyone can contribute to and a bunch of other node projects that, that we use at Netlify.

And I think you're, yeah, I think you're referring to an article that I wrote about how we ship those projects. And indeed it was It was a very small team compared to to the, compared to the scope of those projects and how broad they are in, in, in how they kinda interact with our [00:30:00] product.

And there was a, I think the, one of the key things that I would, that I tried to portray in that article was that we were only able to do that because we were super well organized in terms of automating as much as possible. We had we had people on our team who were really good at creating robots for everything that you could possibly imagine that was a bot that would handle all of that.

And. And,

**Sean C. Davis:** What's a, what's an example there of something that you wouldn't have thought you might use a bot for, that you were, that your team was

**Eduardo Bouças:** For example, when it comes to and these tools are widely known and I'm not gonna, tell you something that, that is super innovative, but things like deploy anything that we deploy to NPM that we published to NPM that is [00:31:00] fully automated.

We never go in and type NPM published. There's a process that like I can guide you to the process. So when you create a PR, you always use a it's called a conventional commit. I think it's the name of the project. It's like this prefix in the PR title that allows you to say is this.

Feature is this a patch? And so that prefix would automatically inform the type of send change that we're about to ship. And then once that PR is reviewed and merged, then there will, there's a tool called release please. And that will automatically create a release PR that says you've merged these PRS into the main branch based on the prefixes that you've used.

You're going to release version 1.2 0.3 of your project. And once you merge [00:32:00] that PR, then there's an action that will automatically run all the tests. And then once that's done, it'll do the publishing to N PM. And this might seem like the basic concept, but. When you add it up, the amount of time that you save by optimizing all of these things.

And by not kinda worrying about the grunt work, it does allow you to spend more time on a, doing the things that matter the most. And we do have a bunch of things like that. And that's that, that's one of the key things that, that I think helped us ship so many things with such a small team.

Fortunately we've we did grow the teams since then. And so we're able to do more things, but we, yeah, we still live by that principle of trying to streamline our processes as, as much as possible. [00:33:00]

**Sean C. Davis:** So with so much of that work being open source. I know it's, it can be really the tendency is it's.

I, I think for a lot of people or a lot of groups is that the work, the code may be open, but it's still the goal is still selfserving obviously like it's you have to serve your project. Are, were you getting active involvement from the community either? What was it?

Mostly issues? Were you getting real contributions from

**Eduardo Bouças:** community members? No, we do. We do get meaningful and useful and great contributions from the community, like all the time and, oh, great. Okay. Yeah, definitely. I, I see it as as a two way. Relationship in that we have I, I think it's great for the people that use our product, that the code bases are open and that we're, working in the open and it's, there's a sense of transparency[00:34:00] that we like to promote.

And what we get back is this involvement from the community. And I think that synergy works, works really well. And we've had lots of great examples in our CLI for example, we have entire commands that were contributed by someone in the community. That's amazing. That's yeah that's great.

And all across our repos, I do feel really lucky to have constant input from the community because. You certainly have a ton of feedback that will let you make your product better. And that feedback is coming at you. Like you don't have to find it anywhere. You don't have to, it's coming at you and I think that's great.

And yeah, that is, and I think that extends beyond the projects that I [00:35:00] was telling you about. I think it really is a company philosophy of kind of doing things in the open and working towards like a, an open web ecosystem. I think an example, a good example of that is we recently launched edge functions and everything about that.

Product was built with the open web in mind, like everything is open source. Everything is built on open standards. So I think this is a pattern that we have at Netlify. And I think, I like to think that it beNetlifyts our customers and the community, and it also beNetlifyts us massively.

**Sean C. Davis:** Yeah.

Can you I was actually, it's a great segue. I was gonna ask you about edge functions next. So can you give the folks listening and watching in just like a maybe a quick overview on what exactly are edge [00:36:00] functions for nullify? Sure.

**Eduardo Bouças:** So maybe it's worth going back a little bit and talk about kind of serverless functions.

Sure. For anyone who might not be familiar with that. And the idea is that And I'm gonna be talking about Netlify functions, but the same principle applies if you're using, other providers and the idea behind a Netlify function is that you can write a piece of backend logic of self-contained backend logic that you push to our platform.

And you don't ever need to go anywhere near, like configuring a server or worrying about scaling up that server or kind of adding security patches to the server. Like it's like a managed backend for your code, with the beNetlifyt of it being deployed. And built [00:37:00] in versioned alongside your front end application.

So you don't have to go into this other platform and create a service that somehow connects with your front end application. It, they all live under the same roof and they're all deployed in versioned at the same time. It's just a way for you to write your server code without kind of, without worrying about a server.

So that's the general idea behind a serverless function and an edge function is a a next step where it's a it's evolution of that concept in that you still have the same mental model, but you are that code that we're talking about is running in multiple locations around the world.

It's running closer to your users and therefore. You're able to create like faster experiences with a different level of interactivity, [00:38:00] because the code is running where users are. So it's a similar concept, but distributed in more locations around the world, essentially.

There are other, yeah,

**Sean C. Davis:** sorry. So I was gonna say what's a to contextualize that a common use case where someone might use a, an edge function on their site.

**Eduardo Bouças:** Yeah. So it's worth I wanna do another comparison because I think it's interesting and useful to make that comparison with a typical serverless function.

When you write a ified function, you are always. Terminating a request. And what I mean by this is you're going to create a function file. That function will be assigned a URL on your live site. And when someone hits that URL, they will get the whatever response you've created in that backend code.

And that's the end of the [00:39:00] request. And you can typically use that for, for creating an API or for rendering a page or any dynamic backend code. You can use a server assumption for that and edge function. You can also do that, but it has a middleware pattern that is also possible. And what I mean by this is you can create a net function that.

Can intercept a request as it comes in or intercept a response as it comes back out. And to answer your question about example, use cases, you could do things like for example, internationalization, you can have an edge function that sits at the very beginning of your request chain. You can configure the paths that function will run on and that function can look at [00:40:00] the geolocation because we we inject the information about where the user is.

Uming the function from, and then based on that, you can write dynamic code that says if this person is coming from. This country, then I want them to be redirected to this route because maybe there's some I don't know, country specific content that you wanna render. And that allows you to do things, at the beginning of the request chain, so that you're not like reloading a page on the client.

You're not gonna see like a flash of content because you're doing things after the page has started to be rendered. You're doing it at the very beginning of the request chain. So that's an interesting example of things that you could do when you process the request as it comes in.

Another interesting example is you can modify the response as it comes back out. So you could have you could have a page and you can replace [00:41:00] all the instance, all the instances of a certain word with another word and do any type of manipulation or change like the source of an image, for example, on that page as before it's rendered to the client.

And so I think having that level of control, having that power of intercepting every single one of your requests and modifying the response gives you like a whole universe of use cases that were not possible or were not as easy to do with previous primitives.

**Sean C. Davis:** That makes sense.

And I know we're at the very beginning of this world of yeah, di dynamic work being done on the edge. I, with a lot of folks that I have talked to. Who are familiar with the traditional jam stack pattern of delivering static content from the edge. And not quite here, I feel like a topic that comes up a lot is if I know, like inter internationalization, great.

But if all of that, if I know all of that [00:42:00] content ahead of time, shouldn't I just statically generate all of that content. And so where do you personally, where do you find the line between I should use an edge function or I should pre render all of that content?

**Eduardo Bouças:** Yeah, I think I think it really depends.

When you're building an application, there, there are a lot of things that will inform that decision, a lot of constraints. And I don't think that edge functions will be. A magical solution that will, that should be used for everything. I like to see serverless functions and now edge functions as different items that you have in your toolbox as a developer.

And rather than these solutions like prescribing a certain way of doing things, they will remove any constraints and they will kinda allow you to decide on a case by case. [00:43:00] What is the thing that makes the most sense for this particular project, with these constraints that I have and based on the things that are optimizing for because I do see this as giving developers.

More control and a rather advanced control over the platform that they're deploying their sites to, because you can do pretty powerful things with an edge function, things that, you can start manipulating your cash headers. You can start completely changing how the browser interacts with your content.

And, I don't think everyone will want to use these patterns for everything, but I do like the idea of giving people that control and opening up those possibilities. I, that, that's what I'm super excited about with edge functions in.

**Sean C. Davis:** I love that. And I really like the way that you phrased that this is not a prescription, it's another tool in your toolbox.

Yeah. And you have to[00:44:00] yeah, you have to approach every scenario and every challenge uniquely and solve it with the tools you have. Yeah. That's yeah. That's great. On that note, let's let's segue into our third and final segment for this show. And for this segment, I'm going to call it on the edge because why not?

We're right there. I'm not creative. No, but also here's all right. Here's the pun I've got it. These are short questions and should elicit mostly short responses and I'll be on the edge of my seat waiting for the answer. There we go. Cool. There we go. Did it, got it. Snug it in nice. Okay, quick or quick quick questions feel free to pass on any of these.

I have nine today. Okay, here we go. Question number one. What is your favorite open source project?

**Eduardo Bouças:** Prettier. A hundred percent. Oh yes. Great. Do you want me to expand on that or are we doing like really quick answers? Oh,

**Sean C. Davis:** here I'll ask one follow up question. Okay. And [00:45:00] that is, do you use the default configuration or do you have, do you override it?

**Eduardo Bouças:** I think we override a couple of things. I'm not sure to be honest, like we have the shared prettier configuration that we use in our projects. I honestly don't know what that config is changing off the top of my head, but that is the great thing about prettier in my opinion, is that it. And that's why I had to choose it because it was the project that completely changed the way I work, because you don't have to think about how you write the thing.

Yes. It just does it for you. And it removes that from conversations on PR reviews, because that is not what it should be spending your mental energy on. You should be spending it on building things and let the machines do the grunt work of moving spaces around and curly braces around. I don't wanna worry about that.

So that's why I had to choose grittier.

**Sean C. Davis:** Yes, I okay. I love it. [00:46:00] And I love it for those same reasons. I ask my follow-up question. Cuz one of the things I find really funny is that some of the time we had spent doing that, we now spend arguing over what the configuration should be, which is great.

Okay. All right. Number two. What is something that most people don't know about Portugal? Huh?

**Eduardo Bouças:** Great question. I'm on the spot right now. It's not as sunny as some people advertise it, it rains quite a bit.

**Sean C. Davis:** And just in, in your area or like throughout the entire country

**Eduardo Bouças:** in my area, I think in the south it is really sunny. In my area we get a fair bit of rain in the winter. And I realize that I'm not doing a good job of selling Portugal.

So if you're listening, you should come to poetry, go, it has a great food. It's a good country. But yeah, that's the one thing I could think of.

**Sean C. Davis:** Okay. I'll take it. I'll take it. all right. Number three. Okay. Yeah, ran random bit of advice here. So if [00:47:00] I'm a new JavaScript developer What's one piece of advice you would give me to make the most out of Twitter.

**Eduardo Bouças:** Try to follow diverse CT. Like it, I think there's a bit of a trap in finding people like following people on Twitter that have a huge number of followers and that have a great presence online, but you wanna make sure that you are not following people that I'll look the same. If that makes sense.

Try to find, try to, to learn from different people. And I think One of the values that, that we have inify is that diversity equals intelligence. And I really believe in that. So try to follow different people and you will learn a lot from that and getting those different perspectives [00:48:00] about how to approach things in tech and beyond will make you a better developer in my opinion,

**Sean C. Davis:** that I love that answer so much.

It's the thought that it brings to mind is or the visualization that it brings to mind is I should see competing opinions on my timeline, because then I've gotta look in, I have to learn what both of these people are saying, and then make the the conclusion for myself.

Absolutely. Yeah. I love that. Okay. Number four what tech talk, meet, meet up. Talk conference talk. What talk had the most so far has had the most impact on your career?

**Eduardo Bouças:** So this is gonna be a a bit of a boring answer because I already talked to you about it, but it, I, if I look back, I have to choose that one talk in that Jackal con very early on, because it just opened up a whole universe of things [00:49:00] that I hadn't considered.

I was just not thinking in that direction and watching that talk really made me yeah. It kinda, it created a world of possibilities for me and I'm really glad that I did that. And yeah. I'm gonna have to choose that one.

**Sean C. Davis:** Okay. That's great. Yeah. Number, my number five is

I don't know how this happened, but it ties into to one of your earlier answers. And so what I wrote was not including sandwiches. What is the best food you can get in Portugal and ties in? Cause you said Portugal has great food. So now I feel like this is this is a

**Eduardo Bouças:** heated question. Yeah. So I would have to choose what will probably be a really boring thing for it's not a super exciting thing, but it's just fresh fish, like grilled fish or seafood, or sorry, shellfish [00:50:00] with no sauces.

It's just plain in some boring potatoes in some boring vegetables. it's just eating that in a restaurant by the ocean. I think that's what food in Portugal is about. It's not exciting. It's not like extravagant, but it's really tasty. It's really good. That would be my

**Sean C. Davis:** Really fresh probably.

Yeah. Yeah. Is there are is Portugal or maybe even just your area, is it known for a particular types of fish or or shellfish?

**Eduardo Bouças:** Yeah. So this area there's there's a type of of shellfish that looks really strange. I think the name is barnacle. I'll need to look that up.

I think it's called Barel and it's, it looks really scary. Like it looks awful. You look at it, it like, do you eat this? It looks like a club, an animal. But it's super tasty. It's like your. Eating it, the piece of ocean. And yeah, that [00:51:00] would be, if you have to have one thing in this area where I live, that would have to be that.

Wow.

**Sean C. Davis:** Okay. Yep. And I just looked up a, an image of it and it doesn't look like something

**Eduardo Bouças:** that you would wanna eat. Yeah, yeah. Yeah. It looks awful, but trust me, it's it's good. That's great.

**Sean C. Davis:** Okay. Okay. So I felt since the, here's my super controversial question, more than the food, and I felt because we made the theme JAMstack we had to touch on it.

So somebody asks you since it's been a hot topic over the last 18 months or so what is jams stack? How do you answer that today?

**Eduardo Bouças:** That is really interesting. That's an interesting question. I think it's an evolving term and. I think so first of all, when it compares to other acronyms or similar acronyms that we had, like there was sorry, someone's ringing the door so there was like the mean [00:52:00] stack and every each one of those letters meant something.

So you were like prescribing a set of technologies. The jams tech is not about that. I think it's a principle of kinda how you approach building an application for the web. And we're constantly learning how to evolve that we started from a place that was predominantly static. And we're now finding ways to extend that we introduced, we, we started using things like serverless functions and now different patterns are made possible by, by, by those primitives and.

I think it's, I think it's yeah, I think it's an evolving term. I think it's a way of structuring things and thinking about what you're optimizing for. Do what kind of experiences do I wanna deliver? Do I wanna optimize for a real response fast response? What is my build time?

It's a difficult answer. But it's it's still evolving. We're still [00:53:00] learning. How do we extend it further? I think

**Sean C. Davis:** I like that. I really like that as as an answer because it's it's not avoiding, it's not avoiding a definition. It's saying that the definition is actually actively evolution, which is yeah.

Which is okay. Yeah. Okay. Number seven. I've done this one in the last couple shows. I didn't think it would stick around, but I've gotten really interesting answers. So I'm gonna, I'm gonna do it again. And this is a big one. Here's my, it's a four parter question. Okay. All right. So the scenario is you get to take anybody to lunch and it's lunch and that they can be living or not.

And so the four parts are, who is it? Where are you taking them? What do you order? What are you gonna eat and what topic do you bring up first?

**Eduardo Bouças:** Wow. That's a really elaborate question.

**Sean C. Davis:** yeah, it's the, it has no [00:54:00] place on this really like fast. It's not a fast question yet.

**Eduardo Bouças:** Yeah. Okay. So let me think about the who.

I think so I'm torn between two people. I'm torn between Steven Fry and Neil Degrass Tyson, because there are two people that I would, I would just pay money to just sit and watch them talk about anything. Like they're I'm fascinated by whatever they say. But I think I will go with Steven and the next question was where we're gonna go.

So I think I would just, I think I would just take them to just, just one of those. Really simple restaurants here in Portugal, by the sea with some really flame fresh seafood but fresh seafood. And that's probably where where it would go. And that's probably what it would order, like some really fresh [00:55:00] seafood.

And the other one was the topic, right? The,

**Sean C. Davis:** The, yeah, what's the first question. You're gonna ask them.

**Eduardo Bouças:** Yeah. So Stephen Fry had this fascinating series of books about Greek Greek mythology. So I would probably ask him something about the book, like something about, tell me more about this kind of this character or this kind of myth, because I'm really fascinated by that.

So I would probably ask him a question around, around those lines.

**Sean C. Davis:** Interesting. Is it one book or do you say a series

**Eduardo Bouças:** of books? I think it has. I think it has at least two books about, about that, about Greek mythology. Wow.

**Sean C. Davis:** Okay. That's great. That loved how you pieced that all together.

**Eduardo Bouças:** That was good.

That was a bit of a random answer. Not remotely related to the jam stack, but it was it was, yeah, it was honest.

**Sean C. Davis:** It's not like it was [00:56:00] a random question or anything. okay. Two more, two more. And then we will, we'll wrap this up. So number eight, the pen, ultimate question. What is something?

I back up, so you've we talked a lot today about building open source tools, building tools for developers. Do you have. A thing that you wish you would've built and either you never did, or you haven't, or somebody got to it first, is there just is there one that got away or just hasn't gotten to yet?

**Eduardo Bouças:** That's a great question. So at some point in my career, I think even before I started getting into the jam stack, I was really interested by the idea of building API first applications, which was actually a really good segue into the gems tech because the gems techs a lot about that.

And [00:57:00] there was a time where I was really invested in building a, an open source. Headless CMS that was fully programmable and fully like customizable. And I did start building something like that, but, then other kind of players in the space were building such amazing solutions that I could never, compete with in, in any shape or form.

And so I just abandon that. And so I guess that falls into the category of things. I wish I got that first or at least I wish I got there, at a time that I could build something and contribute something meaningful to the ecosystem. And then whenever I see someone building like this amazing project I get jealous and I'm like, ah, yeah, I hate you.

You built something amazing. I wish I had done that. That happens every day. Yeah.

**Sean C. Davis:** Every day. There's all, it's you can, every day you can discover. And you're like, [00:58:00] I would've liked to. I wish I would've built that. That'd be great. And then the reality is I, but if I would've built one or even two of these things the maintenance and the yeah, it's just, it's a whole thing.

It's, I have to continue to tell myself actually for a lot of these things, it's better to use them than worry about building them, which is okay. Okay. definitely too. Okay. Last question. My favorite, my second. It's gotta be second favorite question cuz the sandwich question, right? So yes.

Number nine, what is the worst mistake that you've made as a developer?

**Eduardo Bouças:** So I have I don't have any of those like epic stories of and delete a one worth of data yeah. Wiping like the production database or something. I don't have any epic stories like that to share, but I make mistakes all the time.

Like I've caused because of my mistakes, I've caused incidents that [00:59:00] affected customers in production and that happened multiple times and it will happen again. So I guess, so I don't have a fun answer to give you, so I will give you an answer of whoever's listening. It's okay. To.

Mess things up it's important that you'll learn from the mistakes that you make and try to, to be better, but you will make plenty of mistakes. You will mess things up, you will introduce bugs, you will think poorly about how to, build the solution. That will happen a lot.

And I think it, we need to live with that, learn from that and move on.

**Sean C. Davis:** I think that's a such a great message because it's like when you do something that affects production, , , you learn not to do that thing again, and maybe. maybe some other related things that could also hurt production, but what you're saying, which is a message.

I don't, [01:00:00] I, I don't give when I'm talking about this very much that I really is that just because you learn those things doesn't mean you're not gonna bring down production again. Oh yeah. In the future. There's always something new to learn the hard way

**Eduardo Bouças:** so to speak. Yeah. Yeah. Yeah. And I think there's a lot of things that you can do, as an organization or as a company to, to make the best out of those incidents.

If you have a culture where you promote like a learning exercise, where everyone gets together and discusses what happened, not to put blame on anyone, not to say, you've done this, you've caused this because you've done this and that. No. It's about getting together as a group, figuring out what happened.

What could have we done differently? What can we do now to prevent this from happening in the future? And I think you get out, you come out stronger out of that exercise, as opposed to feeling oh, I've messed up. Someone's gonna fire me or [01:01:00] I'm, I'm a terrible developer.

That's not the goal. And I think, yeah, I think there's a lot in, at the organization level that should promote that sort of mentality, I think. Yes.

**Sean C. Davis:** Yes. That's great. Great. Add on there. Okay. whoa, excuse me. That, that's it for today. So Eduardo, thank you. Thank you so much for being here.

This has been a ton of fun. Thank you. Yeah. Thanks for having me. Absolutely last thing before we go. Why don't you can tell listeners how to get in touch with you and and feel free to plug whatever you're working on now or your next thing.

**Eduardo Bouças:** Yeah. So you can reach me on Twitter.

The handle is Eduardo Bouças and my site is ERO bookers.com. Yeah, my DMS are open. Feel free to chat to me about anything I'll, I'll enjoy geeking out about building whatever it is you're building and what I'm working on. [01:02:00] Yeah. Check out edge functions. It's something that I'm super excited about.

I was super happy to be involved in that project. I would love to hear people's feedback on it and I would love to make it better because of your feedback. Yeah. Give it a try and tell me how it goes.

**Sean C. Davis:** Fantastic. All right. And for everybody in the audience, thank you for being here. We will be back live again on June 2nd with our guest Kelly Moore.

So from all of us at cfe.dev, thank you for joining us for this show.
