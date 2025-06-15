---
_build:
  list: false
  render: never
---

**Cody De Arkland:** [00:00:00] Really excited to be here. Excited to talk with everyone today. So, again, my name's Cody. I, I get the privilege of looking after developer experience at Sentry. Uh, and today we're gonna talk a little bit about, uh, building MCP servers that, that work for you. And, and the idea here is, I, I. When I first started looking at MCP, I felt very confused by how this was all going to work and, and how to actually build things in there.

And when I started jumping in and helping build the Sentry MCP server, um, I found that it was really a lot easier than I thought it was gonna be. And so what I, when Brian and I talked about doing a session here, what I really wanted to do was do one that we would build live together, and that people could see what it's like to actually build one and how it comes together and how you can use it to do stuff.

So we're gonna build a little bit live. We're gonna see how far we can get. We should be able to get through all of it, um, and get to a place where we're [00:01:00] actually, uh, actually have a, a working MCP server, but we might not, and that's part of the fun of it. So let's jump in and get started. So I'm in my terminal now, but first I'm gonna hop over into my browser.

Now I've got this little tool that I kind of wired up earlier today that collects just a bunch of snippets that I'm gonna use along the way just to make things speed up a little bit. Some of this has the Sentry configs for MCP, so we built a bunch of monitoring for that, but that's really on the more in the background.

What we're gonna more so use is some of these configuration snippets. We're gonna build an MCP server that helps stage out like web projects. I use drizzle in pretty much every project I do, and so it gets tedious to go in and configure that over time. And, and when I try to use AI for it, it's not that great right now because it tends to use older data.

So MCP is really the right way to pull better context into LLM. So we're gonna use MCP server to actually pull better context of set up instructions, and then we're gonna do the same thing for a better off too. So it'll be a fun little, fun little, uh, project to jump into. I use CloudFlare a lot for, for my [00:02:00] MCP work mostly 'cause they've really put in the work to make this very easy for people to jump into.

They have an awesome free tier around all the MCP stuff that can, you can actually get started building something real like we built the first versions of the Sentry MCP server on there and it's still on, still on CloudFlare now. So we're gonna jump in, we're gonna grab this and this is gonna help us stage out that the beginnings of an MCP server.

So I'm gonna go and paste this. Go ahead and rename it so we're not using the existing name. We'll do, we're gonna go serverless, proj, MCP, really ugly name. That won't last forever, but we can use it in here just for testing sake. Now this is the basic, uh, the basic MCP Cloudflare's, a bunch of ones that have like additional authentication on there so you can do all auth again.

That's what we use in the Sentry one. But this one is just very basic. It's just a straight up MCP server. We're gonna run it in remote mode locally, which is definitely kind of, I, I'd definitely say an pattern and more of like a, something you would do in Dev and practice. Uh, but we're gonna run it that way because I want you to see what it's like [00:03:00] when you would want to run it, uh, if it was hosted remotely also.

So I'm gonna hit in here. And this is gonna start, uh, building out all the configurations for, uh, for this MCP server. So what's gonna end up happening is we'll have this, uh, just baseline MCP server that has like a math function in it, uh, that will, uh, work if we were to add it to our, to our ID or into like the philanthropic client or anywhere that you would use an MCP server.

So I'm gonna jump into Serverless Pro MCP and I'm gonna open it up in cursor. We do love cursor and, cool. So quick anatomy of an MCP server. Uh, just 'cause I think it's really useful for folks to know about, uh, in this case, specifically with the CloudFlare one. There's a couple of extra layers, but nothing, nothing too crazy.

Uh, we come in and we set up our initial server object. So we're gonna call this, we're gonna rename it here to serverless. Project [00:04:00] just for fun. We'll leave it as version one and then we move into the tool calls. So these are all the different interactions that the MCP server supports. And so when you go in, you add an MCP server to, uh, to your IDE.

So like I have in cursor right here, I. These are all the tools that ultimately get exposed. Uh, this part here is where we're bringing the parameters. Now these are collected from the natural query that's coming in through the IDE. So if you said, I dunno what the weather is in Sacramento, right? And we had a weather parameter in here, we would pull that out and use that, uh, within the actual function.

Call below. Not gonna use these in the first version that we're gonna do, so I'm gonna clear that out entirely. Do for this one is, call it set up drizzle. Now a really smart uh, best practice is to come down and do another section where you're gonna feed in a description field and what this description field is gonna add more context to the initial query.

And it's gonna make it a lot easier for the ID to discover what we're trying to do here. So if I come in here and say, this tool is used to set [00:05:00] up drizzle as an ORM, the dual should respond to.

And we can set in a couple examples to set up drizzle in my project. Set up drizzle more drizzle. Now, this isn't a perfect science today. This is something that the teams building this are, are working a lot on. Uh, we're trying to give the tool calls more, more, uh, context here to help drive in. It doesn't always work and so it's a little, little hit or miss sometimes.

Um, but these do definitely help in making sure, understands like the different ways that you're gonna interact and things that should be able to pull out. So this basic version of it, I'm gonna come in and clear out these two parameters from here. And now, uh, this is just a.

Simple tool call that is gonna be [00:06:00] called setup Drizzle. It's not gonna actually do anything yet. It's just gonna return. Hello. Now you won't actually see that return happen because it's a tool call behind the scenes. So the LLM is gonna process that and do something with it, and hello's not gonna be much that it's gonna be able to do.

What we're gonna do instead now is pull in, uh, with one of the examples that I have of. Bringing in that Drizzle, that Drizzle content. So in this case, I have an API call that I wanna make, right? So I'm gonna go and bounce into that, uh, back into the snippets tool that I, that I had set up and showed earlier.

And here I have this whole drizzle setup guide, right? So all of this is, uh, configurations to stage out the first version of drizzle in my environment and I have this little copy, API URL. And when I plug this in, it's gonna turn back a JSON field or a JSON blob of the different config items.

We're gonna go back into cursor, and I'm gonna use this as kind of the input for that functionality. Now, if I actually go into that, uh, back into the snippet tool, I believe that I actually [00:07:00] copied one. I did, and so we'll just use this one to speed things up. These talks always go much shorter than you expect them to.

And so what I've done here is I've brought in that API URL, it's gonna go ahead and do some work around parsing out the information that matters to it. It's going to return back that content as marked down and give me that object back. If something goes wrong, it's gonna throw an error. So all of that set up, I'm gonna go close.

Uh, get rid of all this content. We don't need this tool in there anymore. I need to properly close out the brackets.

This will really run drizzle now or run the setup for drizzle if I wanted to. So I want to go ahead and hop into here and I'm gonna go npm run dev. And this is gonna fire up a local version of the MCP server. So I'll go into cursor now. [00:08:00] Edit cursor. Go into MCP. You can see this old one that I had in here.

We will edit this one. We'll leave this one actually alone 'cause it's the same port. We'll save it again. We can see that tool calls available now, and when I highlight it, we're seeing all that description text that we saw before. So there's no parameters required on this. And so now if I was to come in and create a new project entirely, we'll go.

We'll call this app. Brian is cool because we do like Brian. This is gonna stage out just a a, a blank next JS project. And what I'm gonna do is go into here and I'm gonna call that call to set up drizzle and you'll see it actually start to run through the, run through the overall process. So we'll go into buying this cool app, we'll pop once again into cursor for that.[00:09:00]

So this is the next JS app. I can come in, make this a little bit bigger for us, and what I'll do is go in and say, I want to use the setup drizzle, or I want to set up drizzle using the MCP server. And the should grab it and we can see it starting to in the thinking call. So I'm using Cloud three seven, uh, and it's a thinking model.

So it goes through and thinks about what it's gonna do and it's gonna do, it's gonna go and make this call. Now it's really important to think about these returns back from, uh, from the MCP server. They're not instruction sets. Right, and that, and that's one of the things I think people get hung up on a lot is when they think about these MCP servers, they think about them as, oh, I can go write the steps that it takes to go and install this.

It's not an automation tool in that way. What it is, is better context. If I was to go into my LLM right now and say, Hey, I wanna set up drizzle, go and configure it for me, and the agent went off and started firing it would use [00:10:00] outdated information. I've done this a bunch of times. We'll use outdated information.

And so what MCP lets us do is grab the most current context and the most current things that you want it to know about. So things like project structure that you care about, things like, uh, parameters that you might want configured inside of the application or coding patterns, error handling patterns, logging patterns.

All of these things you can define out in, uh, in like an MCP server and bring it in as context. Some of that you could create as rules inside of the app or inside of the directory if you wanted to. Uh, but ultimately the MCP server gives better context to the LLM calls. The LLM still has to process it and do what, what it's going to do with it, which sometimes is unpredictable.

So in this case, I told it what I wanted to do and it looked through everything, but then came back and said, here's all the steps that I could take. So it didn't even go and actually execute it. Right Now. Go ahead and move through the setup process, and it should start firing off and going through all those individual steps.

[00:11:00] So it's gonna look through the project, it's gonna bring in the install information, and it's gonna start running through, uh, it's gonna check where it's installed already, and then it's gonna start setting up, but it's gonna use that context from the MCP server, the return that it got to help make sure that it's doing the right, the right calls along the way.

So we'll let this get kicked off and then we'll jump back in and we'll start to instrument Sentry on it just so we have some good error monitoring around what's happening inside of that application. Now, why does error monitoring matter inside of MCP? And no, this is not a sponsored session, and I'm not shilling product.

It's more just talking about why we're doing it this way. Because when you start looking at things like LLMs, a lot of times you don't see the error that's actually happening when you're interacting with it inside of like an IDE. What you'll see is it'll say. I'm having trouble doing this or I can't find an answer to that.

A lot of times these are errors behind the scenes and so like if you've written a tool call that's maybe calling a wrong property on, on a file, or it's looking at the wrong API or [00:12:00] it's not returning anything, a lot of times it'll be masked behind kind of a natural language answer. And so having something in place to be able to monitor this from an error standpoint is.

Is actually really, really useful, especially when you're debugging things like agents inside of environments where it's really trying not to show you when things are, when things are going wrong, because it's trying to figure out the problem for you.

So I'm gonna pop back into that real quick and we're gonna go set up, uh, how we would set up Sentry on this. Now we've built out some really specific Sentry monitoring on for MCP servers just to make it a lot easier. Uh, a lot of it is based off of the work we did for CloudFlare workers, but before, so it's pretty useful stuff.

So to get started, I'm gonna come in and I'm gonna do an NPM install for the Sentry Cloud Floor packages, and I'm gonna head back into that snippets tool that I talked about before where I've set up some of the initial Sentry setup in here. [00:13:00] Now I've got a project already set up, but getting a project in Sentry is pretty easy.

If I go into Sentry, I come up here into my projects view. And create additional ones. We have pretty generous, free tier, so go check it out. But I have, uh, I'm in, uh, a project that I already started wiring up for my MCP builds already. And so I have the DSN already configured all the stuff's available. I can come in here, I can see the error message that was actually coming through from an, from an earlier test.

I can run auto fixes against it. I can see tracing. So there's a lot of helpful pull stuff for, for debugging, uh, MCP specifically in here. But what I'm gonna do. Is I'm gonna go in and start bringing these configs now into this. So first off, I have this helper function. This helper function is really just gonna focus on bringing in all of the baseline sent configs that I want.

So I turn on tracing so that I can see that communication trace of the individual tool calls. I'm enabling logs. We just rolled out, uh, the logs open beta, so go check that out if you [00:14:00] haven't. Uh, but I'm enabling that there because it just makes it easier to troubleshoot from. Adding a couple of integrations.

There's a Zod Airs integration, as well as the console logging integration. What this one does is take all of your console logs and feed them into Sentry's uh, logging, and then I'm setting up some of my environments. So come up here and we will import. We're not gonna import Sentry Node, we're gonna import Sentry CloudFlare.

And so now that I have this helper function set up that's gonna pull down the Sentry config, I can start to bring in the other parts of, uh, Sentry monitoring. Now in production environments, there's two parts to, uh, to what we're doing inside of MCP servers. There's durable objects in CloudFlare when you're using it.

And then there's the, um, and then there's the actual CloudFlare worker functionality itself. And so I scaffolded out snippets for both of these just to speed things up along the way. And so I'll pop in here and I'm gonna grab this durable object set up.

So I've got two things [00:15:00] in here. One is my, uh, I'm extending out the existing MCP durable class, which is the one that's gonna actually run, uh, the durable object. And then I'm extending out the MCP base. I need to rename this appear to MCP base. This is the base, uh, the base MCP function, and then we're wrapping Sentry around it basically, so we can monitor everything about it.

So this is the, uh, durable object storage instrument instrumentation. We're getting the configs in here for that. And then I'm gonna do the same thing for this function down here that's actually running the real, the real server. Let's go and plug all of that in. And that is pretty much it for getting Sentry integrated inside, inside of this.

And so now I'm gonna get traces off of this. I'll be able to get logs if I set up, if I started bringing console logs and console errors in, those will start showing up in the logging interface. So all of this is available and we're doing a lot of work to extend this more and to actually make a better [00:16:00] first class wrapper for for MCP servers.

But this will get us started at least having some good error checking and uh, um, some of these basic, uh, the basic logs integrations. So let's go pop over and check back out our app. It's gonna go do a generate now, so it's got, uh, it's adding a new table. So, so far drizzle appears to be working. It did use the configs that I wanted it to.

So it's set up, uh, everything inside of the configs here. It's brought in a few of the migrations. It's set up a very basic schema. It is creating an API route now that's gonna use that information and so we should be able to get to a place where we can actually validate that it fully set up. We might probably not gonna get through the better off setup unfortunately, because we are running short on time, but we'll see.

I.

This continued rise building out more of the application. Now to use this, and this is kind of what I was talking about when, like I said, that it's not an [00:17:00] instruction set, if we go in and we look at what's actually in that configuration. So we'll go in and we'll take a look directly at, uh, the drizzle setup here.

You can see. I do have kind of an overall guide of how I want it set up, right? So I go in, I do install dependencies. I initialize drizzle kit. I define out a basic schema. But if you look at the schema that I defined in here, I. It is a very basic schema with just two properties. The LLM still made some assumptions and went and did more with it.

Um, we then go in and do migration, generate migrations, apply those migrations, and then we have a sample quarry set up now inside of the sample quarry. What's interesting about this is the sample quarry down here. Does reference a user one. So the context of of this call told the LLM that it should go ahead and just create, uh, well didn't tell it to create, it brought context in of a user's example.

And so the LLM saw that and said, okay, I'm gonna continue down with this example because it's part of the context window that's come in. And so again, like it's [00:18:00] interesting to keep an eye out on how like. How these things do start to run loose because obviously there's a lot more, a lot more inside of the schema than was originally was originally, uh, planned to be.

So we should be getting near the point where this is done.

So it's up to you. Read me, we're gonna go ahead and try to go give it a run and see what happens. So we'll go into the, Brian is Cool project, we'll fire it up.

We go to manage users. Ooh, we got a nice little error loading users with a gnarly little error in there. We're not using Sentry in this project yet. I'm not entirely sure why it failed there. Um, we can go look at the logs real quick. Just 500 errors. It's probably because we haven't put anything in the database yet.

Ultimately, it was just a very basic, a very basic run. Oh, we had to run the migration still. [00:19:00] So we can go in and cancel this. We can do NPX drizzle kit migrate. Oh, we didn't even wire up a database yet. So that's part of the problem.

We'll use this junk database that I have. Everyone's gonna see credentials for a second, and you can go and insert things into the database if you want to.

Let's do a generate

and let's do a migrate.

Alright, so it already had the user's table in place when it tried to do the migration, but there's a database there now. So let's see what happens when we run this. If we actually get anything back out, there's not really any users in it, so it shouldn't be [00:20:00] air loading users. Yeah, so you can see we're getting some gnarly, gnarly stuff here where we can't really see what text is because the LLM didn't know what was doing.

There we go. Let's see. Ah, so it's failing to create users, so there's something wrong with the actual setup, but it did go through and obviously was able to connect and do the initial, the initial drizzle config. So pretty, pretty happy about that. Um, so yeah, in just a few minutes here, we were able to go from absolutely nothing to having a.

Full MCP server built that had at least, uh, scaffolding out the drizzle configs. If I was hosting this out in the wild, uh, you could be able to pull these down just as easily. You can also do 'em just as like markdown files alongside and have those pull in. Uh, in testing this, when I first built it, I also had a better off setup.

And what's really cool is when you build out these different tool calls, how they chain off of each other, and so being able to have one tool call say, Hey, I'm gonna, I need to set up better off, but as part of better off, I need to have drizzle [00:21:00] running also. So I need to go and pull down. Content from configuring drizzle to make sure it's set up right and then pull that schema in.

Like these things will chain off of each other in, in really interesting ways. It makes it a lot, uh, a lot easier to start to get closer to like a workflow driven, driven thing. Uh, what I found with MCP services, it's really easy to get started once you just jump in and start building in them. And so that, that is the best suggestion that I have, is do something like this where you have these repeatable tasks that you want to do inside of an environment, uh, that you want to bring better context.

In on and start wiring those up as individual actions. They're just functions at the end of the day. Like if you look at how this one works, it's a tool call. It's a name of a tool, a description for it, and then a function below. And so you can do anything you want inside of that actual function, and you can drive any sort of results outta that, that you want.

Uh, ultimately what we're returning back is, is text at the end of it all. But like that could be as simple as, hey, the light switch turned on when, if you were integrating with [00:22:00] something like a, like a home automation kit, for example. Uh, so there's a lot of options in there and it's really easy to get started with.

Ultimately, what I wanted people to walk out of this with was not feeling as worried about building these, like, or as, as, uh, maybe intimidated as building these and that you can build these that are really useful for you. I'll use this one a ton. Uh, obviously it didn't work right now because I sped through it so much, but, uh.

I'll use this a ton now because I set up better off and drizzle on pretty much every project I work on. And so it'll be a repeatable task that I can call into and I can add additional things onto it. Also, my favorite one is using like fire crawls and API. And so having a fire crawl tool to go out and pull down markdown from, from pages is, uh, is super, super useful.

Well, I think I am just about, uh, running up on time, so I think I'd open it up for questions now, if that is the, if that's the right move.

**Brian Rinaldi:** That is the brand.

**Cody De Arkland:** I

**Brian Rinaldi:** love it. I love it. Welcome back, Brian. Yes. That is the right move. Yes. Uh, [00:23:00] so yeah, that was, uh, you know, I, I, I credit you for actually trying to use AI to live code because I mean, live coding is fraught to begin with, and then using AI to live code, it's like, yeah. Um, but yeah, I, I think.

The point still remains that you, I mean it wasn't really like the, what the MCP server was outputting. It was that you built the MCP server in just a matter of minutes here.

**Cody De Arkland:** Yeah, and ultimately like it did what it was supposed to, it brought the context in. It's the other app build that wasn't like if I had scaffolded up like a login system ahead of time, for example, and it was just bolting onto that, we would've seen something very different.

**Brian Rinaldi:** Yeah, absolutely. And, and I do, I actually was thinking, I love the idea you have here of, of basically using MCP as a way to build your own little tools for how you build stuff. Um, so that, that's a really interesting concept. I haven't seen anybody really talk about, Hey. Hey, I'm just gonna build custom MCP servers for the way I like to build [00:24:00] things.

**Cody De Arkland:** Yeah. Or like I was talking with people, uh, uh, at work around like some of the tool, some of the like processes that they run, just building these small MCP servers for like repeatable tasks that they have that are, that they can automate around. Right. Like posting a blogs and, and, uh, different research items and stuff like that.

So. Yeah, I love that idea. Maybe we get stuck thinking about these big, we get stuck thinking about these big like enterprise enterprise versions of what MCP servers look like, but like ultimately they're just small API tools. Like there's a lot, a lot of flexibility there.

**Brian Rinaldi:** Yeah. No, I love that idea. I mean, I could even see like I.

Kind of companies creating internal, like a team MCP server, that, that's just like, helps, helps onboard people who like this, okay, here's all of the way we do things and this tool kind of helps you get started doing it.

**Cody De Arkland:** I started writing one for, um, uh, MCP, for for new hire onboarding to be able to ask questions around like, who should I meet with about this?

Right? And it just brings more context in just. [00:25:00] Fun. Little fun little tools. Yeah. Fun little toys.

**Brian Rinaldi:** Yeah. Yeah. Lots of possibilities there. I um, so one question I had was, as I was watching this, and if anybody has questions, please put them in the chat or in the QA module there, um, is, I didn't quite get where durable objects plays into the Sentry integration.

**Cody De Arkland:** It's less, it's less on the Sentry integration side, and it's more on like the continuous state of the MCP server side. Now we can monitor it. It's, it's a little tricky because like in my demo here, I'm running it locally, so it's all simulated anyways, and like it's not really, it's not, there's not really a durable object there.

It's. Just all running locally on my system. But when it is running in like proper cloud flare, like durable objects are keeping a bunch of the state for the interactions and like making it a more stateful, stateful service overall. And so, like, it's a different system than the worker itself. And so we have to monitor that one and manage that one a little bit different and be able to watch for things going wrong and that one, uh, a little bit differently.

So. [00:26:00]

**Brian Rinaldi:** Okay. That makes sense. So it's, it's, it's a little

**Cody De Arkland:** campy on local, on local dev.

**Brian Rinaldi:** Right. Okay. But I, okay, so what it is, is basically the framework that CloudFlare built for building these MCP servers relies on workers and durable objects, and you're just monitoring, making sure you're monitoring both,

**Cody De Arkland:** correct?

Yeah. And you don't have to use the durable object, but if you want to be able to like, have these things be like long lived and stay, and you're gonna want, you're gonna want the durable objects there.

**Brian Rinaldi:** Okay. All right. That makes sense. And, um, I'm curious, uh, I'm curious about your. Obviously even came up during the CloudFlare presentation earlier that Sentry has built on one, you know, a remote MCP server using, uh, Cloudflare's tools.

Um, and, and just to be clear, CloudFlare didn't pay, this isn't like a sponsored presentation for cloud. Somehow it ended up being isn't the Sentry. I know, right? Uh, you know, getting the bang for their buck here, but, um, but I was just curious because, um. [00:27:00] One of the things I've struggled with when we've talked about say, doing this in term like, like for local stack is, is how do we what?

How do we design something that's actually useful? Like what was your approach at Sentry in terms of how you actually figured out what are useful? You know, things that this MCP server could do.

**Cody De Arkland:** You know, it's, it's funny, um, I built the, like the first prototype, uh, of it and just like more of a, as a fun experiment.

And I shared it with, uh, with DA David Kramer, the co-founder who, um, I. He had some, like, some good opinions around like, hey, like let's narrow down the tool scope to like, really the things people are actually going to do. Like, very few people are gonna go in and query things like replays from, from that interface, right?

Like what, what, uh, value really comes out of like querying, if there's a, if there's a replay available in, in that interface. Not, not a lot, but when you look at something like errors. Okay, now we're, now we're, now we're talking and when you pair up the, like a [00:28:00] rules file inside of an IDE to tell it, to check for errors inside of Sentry at, at certain periodic mo moments, it starts to get interesting.

And so like there's some obvious workflow things that make a lot of sense. For example, like errors is a good one. If people wanna be able to find out what's going wrong inside of their applications and when it's running in production, being able to say, Hey, what, what's the error here? Uh, finding in file was another one that was like, super useful.

Hey, I'm having a problem inside of this file. And being able to search that and find any issues in Sentry related to that, I. Um, and then there was things that were like more, um, actions that we would take. Like we have this AutoFi thing inside of Sentry. It's, it's called seer. It's a AI agent that'll go and like take an error and then all the stuff about it.

Well, we wanted to be able to run that also. So if you were in your IDE working and you wanted to be able to say, cool, go fix this. Having that agent go and run from inside of Sentry and it's like. Those three interactions were like the ones that I think were like the biggest hit for us. And really the errors one is the one that lands the most because it, it's a very context sensitive thing and if you go and pull down an error [00:29:00] out of it, you get a lot of information.

You get information about what's happening in the stack trace, what's happening in the actual traces. You get the error message. There's a lot of context that comes down as part of it. It's, I think a lot of it is just taking, taking a shot and like. What makes the most sense workflow wise, but behind that, there's a bunch of stuff that needed to be in place to make that work.

Like you can't just go in and query an error straight up. You have to be a user. So we need to know what orgs you have available. So we had to write a tool for calling orgs. What project is that error happening in? We have to write a tool for calling projects, but like what environment is it happening in with, right.

What we're calling environments. And so like, it's the whole like, uh, tool calls all the way down. It's like turtles all the way down, right?

**Brian Rinaldi:** Yeah, that does sound complex. So, so inside, inside these, these functions, you're like, I guess in some ways what, what is the role? Like where does the AI piece come in?

Like where, where's the generative part? Is it just taking like, 'cause obviously you're [00:30:00] feeding it this error, are you then feeding it into say, uh, A GPT or something else to like actually. Do something or is a lot of this actually just functions you wrote that are returning things in a different manner.

**Cody De Arkland:** So it's, it's, it's a little bit interesting to think through because the generative comes inbound as you ask the question. So like, tell me about the errors in Cody's project. Right. There's a, uh, LLM parsing that takes place inside of that phrase where it's gonna say, cool, I'd like. I'm identifying that this tool call is gonna be useful for that.

This, this question that was asked, and I'm gonna pull out Cody's project from here. Now I also need to know what org he's in, so I'm gonna reply back to him as an LLM and say, I need to know the org to find what project you're in. And then I respond with that and it adds that to the context, but then it goes and runs that tool call function, which really that tool call is just a function.

Like there's nothing more complex inside of that, that actual part of it. As [00:31:00] far as being an LLM goes, but what the LLM does do is parse the response and make decisions on what to do with that response and how it's presented to you. So for example, if I go and I run the Sentry MCP server and I say, tell me about this error inside of an environment, we construct like a big old piece of markdown that gets sent back, but you don't see that markdown.

The LLM intercepts that markdown and says, okay, how do I structure this in the flow of the conversation because I might have said earlier. I only want, um, I want short responses only titles of titles of errors. And that context is gonna be part of what the LLM uses to parse responses. So you don't ever see, it's interesting because like you don't ever see the actual return, you see.

What the LLM parses as the return. You can see it in, like some of the clients will expose it to you, and so you can expand out the tool call and you'll see like the actual raw return. But most of the time it ingests and returns it in like natural language, which is usually like the better, the better path to go.[00:32:00]

**Brian Rinaldi:** Okay. That's cool. 'cause I, I, you know, I, I guess one of the things that I, I've noticed is when you use these MCP servers, they help. To reduce the hallucinations that like, and I think, I suspect that's part of why, right? Yeah. Because it's actually, you know, it's a somewhat of a controlled response. So it's a, even, you know, your, your demo issue is tied, like it's more reliable response, right?

Like, uh, it's generally is gonna work is, um, the way that you intended it to.

**Cody De Arkland:** I mean like inside of the demo itself, it pulled down the right, the right drizzle, config, and used the right drizzle. The right drizzle, config. The rest of it going and building the application was well, had, had none of that extra context.

So it didn't, it didn't land right inside there. But like MCP is by far the best way to pull better context in. And like when I say, when I say that in a relation to what you said, I mean it in the sense of, um. Hallucinations come when the LLM has to try to figure out a problem that it's not really that [00:33:00] sure about.

And so it makes, it's be, it's best guess at, at at, at an answer. And it usually is hall hallucination. But if you're using MCP server to pull in this context, let's use drizzle as an example. It might not know the exact config stanzas for drizzle, I don't know, 7.2 or whatever, whatever version doesn't exist yet.

Uh, and so it's gonna guess. That it's probably one of the old ones. It's probably not, it's probably a different set of config parameters. But when I'm feeding that in as part of the MCP server, I'm giving it that context and saying, this is the known config. Use this instead. And then it uses that to go and make, take, take its actions.

Um, and so it's really good for bringing context, for bringing better, better context in, more control to response, more control of over what it does and what's like a fun experiment to do. Is to, don't do any parsing of the response at all. Go do like an API call and just return the JSON and um, tell it to parse, parse this response back and tell me the important [00:34:00] things.

And you can see like how useful it becomes. 'cause it'll go through and chew, chew down that entire JSO blob and return back to you nicely formatted information about what's inside of it, right? It's like. The, the do nothing version of this is still massively useful. Um, as far as like making it human readable, maybe not from a system perspective, like trying to chain that into other stuff, but as far as like raw queries, it's super useful.

**Brian Rinaldi:** Yeah, that's, that's really cool. I mean, one of the things I, I've thought about is just what, what I'd love to do with it, um, from our, our perspective is that I find. A lot of our tool relies on A-W-S-C-L-I and a Ws CLI tends to have very verbose, like oh dash, dash this, dash, dash, that dash, and then you have to put stuff in some weird data format.

And it's like, and it, I, I, I never remember. I have to spend a lot of time figuring it out. Um, and it's just, but most of the time it's just like, I want say, you know, run this Lambda with this data. Um, [00:35:00] and, and I, that's what I want, like that MCP server to be able to do. It's just like, Hey, you know, run and.

Seems like it should be capable of doing things like that. So I've even seen some that actually would, obviously not remote MCP, um, but like I've seen some that will work with your local system. So like they'll, if you have like say Postgres running, it'll actually know that Postgres is running on your local machine and, and be able to do things with it.

**Cody De Arkland:** Those are the really cool ones. I'll tell you like the ones that I think are like super useful are like some of the database, the database based. Mcps where it's just like natural questions to it of like, show me all the users in ascending order and it constructs the query behind it for, for it and just returns you back the data.

Like it's, I um, there's like this phrase that goes around a lot of, like, our mcps gonna replace rest APIs. I think that's silly. Like, no, I don't, I don't think that's the case, but I do think there's a lot of really interesting parallels between like. Interfaces and like how MCP is [00:36:00] gonna become this like more, uh, conversational interface or more direct like.

Question and answer, answer interface behind the scenes. Um, I mean, there's definitely places, like if you think of like chat bot interactions or you think about agent interactions like Linear just had their, their big announcement of, uh, of agents coming out. I want to pump all of that through, through an MCP and be able to write, return back more conversational, uh, conversational responses in, in agent interactions.

So.

**Brian Rinaldi:** I, I mean, it's MCP. I think the reason it's kind of, I mean, just the adoption has. Gone. Like, uh, not even, it wasn't even a hockey stick 'cause there was no, it was just like released and whoop, straight up. Um, and, and I think part of that is because it, it addresses a number of issues, like with not only the hallucinations, but also like, um, some, you know, and, and predictability of the responses, but also giving, I think where I found AI tends to struggle is when [00:37:00] it's too open-ended.

Like the, the narrower you can make it, the better response you get. Um, and so like this, but it's hard to really give that, especially given chat interfaces, people tend to give very broad, like, Hey, just, I want you to do this and, and this MCP helps kind of narrow it down and you can define these steps and things like that to eliminate some of those issues.

**Cody De Arkland:** Well, and the alternatives are really hard. I, I know we're almost outta time, like alternatives are really hard. Building rag on your own. So retrieval, augmented generation. Yeah, super, super hard and a lot of considerations on it. Um, trying to do better guardrails, very flaky, very hard to like, be predictable around, uh, building tool calls, raw tool calls were really hard to build against.

MCP made it very easy to prototype a lot of this stuff out and get useful stuff quick. So.

**Brian Rinaldi:** Yeah, absolutely. Well, Cody, this was awesome. Um, and, and it was just really, really amazing to me, especially considering I'm, I have plans to build an MCP server to see you build it [00:38:00] so quickly and so easily. Um, so, uh, you've inspired me to do that, so thank you.

You thank you guys. Good. Get good getting to hang out again. Yeah, absolutely.