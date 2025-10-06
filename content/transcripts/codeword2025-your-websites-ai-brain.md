---
_build:
  list: false
  render: never
---

**Joel Varty:** [00:00:00] So really excited today to talk about a bunch of stuff. But, uh, first a little bit about me. I'm Joel. I like musical theater. As Sean saying, I like football too and other stuff like coding sometimes. Um, I don't take myself too seriously. I like to be on stage and it's fun. This was me and spam a lot. This was me.

This was super fun. It's Frankenstein, but just in case you're worried about me being super serious, I'm super not. Um, I'm mostly a dad and there's my son playing football and that's my daughter. She came from Halifax, so that was great. And I wish I was doing that right now, but this is fun too. Okay. What do I believe?

I believe agents are the next frontier and front end development. In case you haven't noticed, I think this has pretty much already happened. Um, and there's more and more places where I think as developers or just technical leaders, we can [00:01:00] find use cases for agents that are really cool. Um, and I was thinking about this the other day.

A lot of us use CMS in our job to like create websites, and we're pretty good at doing that. We're pretty good at getting them indexed, um, with tools like that Do search. Um, things like Algolia. I'm gonna show Algolia today, but not very many of us are using agents as part of our workflow in terms of what we're coding, like creating an agent.

Um, some of you might have played around with it. I'm gonna show you today how to do some really cool stuff. The first thing we're gonna show is how to do, well, I'll get to it in a second, but like. Everyone uses Google and we all have like that search summary that's up there and that's in ai. We're gonna show how to do that, but on your own website.

So it's pretty cool. The tools I'm gonna be using today, um, I'm using agility for the headless CMS. You can use pretty much any CMS for this. Next JS is the front end framework. The reason for that is we're using an AI toolkit that's based on next JS or built for like React in next js. So that just makes it easy for that.

We're using [00:02:00] Algolia for the search. Um, I'm actually using a free version of Algolia. You can use pretty much any search for this though. Um, and for our AI agent, um, I've got the, I'm gonna give away this code and show you the code later, but you can either use your open AI key if you have like a chat GPT, um, or if you're using Azure, you can use an Azure AI backend too, obviously.

There's lots of other ones you can use. Those are the two that I have examples for. So let's look at this actual use case here. A lot of people have search on their website where you just get like boom, boom, boom, you know, search results, which is great. But having that, I think the expectation from users now is that you'll have some kind of search summary that'll do a little bit more for them.

So we'll show you how to actually create that. And it, and it has a couple of side benefits because right now when your query, if someone writes a big question on your website in your in your search query, it's really hard to get a good result from that. And our AI tooling can help us even get better results for those longer queries, which we actually want our customers typing in.

Right. So let's look at, you know, normally we're gonna get a search results like this. And the, [00:03:00] if we're looking at the architecture for that, it's pretty simple. We're gonna have, you know, a search component, like a React component. It's gonna call into like a, uh, an AI sort, an API endpoint here to do our search.

And that's gonna call into Algolia. So like super basic. Um, in fact, Algolia might even have a drop in component that you don't even need to create anything. It's just drop in some JavaScript. So. Search components are super basic. I couldn't find one. Now let me know if you know of one I couldn't find of a search component that automatically does, or like even um, a search vendor that even does that automated search summary at the top.

Um, but if you know, one, throw that in the chat and let me know, although I can't see the chat from where I am, but I'll look at it later. We wanna do that search summary, so we're gonna show you actually how to do that. What's the architecture for that? It's a little more complicated than what the other architecture is.

First of all, we're, we're gonna use agility here to basically configure the search. As a developer. The whole reason to use CMS here is so that we don't have to hard code everything. We could absolutely hard code [00:04:00] everything that's going on in here. But then as a developer, every time you know the client that you built this for, or anyone needs to make a change to it, then you've gotta go change your code.

And one of those major things is the system prompt. And that is gonna completely change how this agent works. Um, I, I'm calling this an agent, even though it's only like a one shot agent, we're not gonna, um, have a chat with it yet. Right. So we have a little, kind of like a chat component here. But is just, that's just pulling down that one, that summary.

We're gonna call into our AI search, which I've got here through the AI SDK. So we're using the Versel ai, SDK, um, which is free. It's gonna call into, uh, our open ai. Or Azure AI that is going to use what's called a search tool, which is gonna do this. It's gonna go search the website and come back and summarize that for us.

And then in our component, we're actually also gonna call our search as well. So we're gonna see the summary at the top and then the list of of searches at the bottom. And the only thing we're using agility for, I mean agility is [00:05:00] populating the search index that Algolia is using. We'll show you how to do that in a second too, but also it's gonna give us things like, what's your system prompt?

Is AI even enabled? Maybe we wanna turn it off and turn it on, like without having to redeploy and what is the, you know, the temperature and the, how many tokens are allowed, things like that. You could configure anything. Um, and I just wanted to show how, how that can kind of power your, your search configuration.

But as a developer, you're in charge of all this code. So I'm gonna switch real quick, uh, and just show you that code and then we're gonna come back to this to show even a deeper architecture for like the second part of this, which is why I'm talking really fast. Okay. So jumping in, let's actually show in our web browser first.

Um, I'm gonna show out Algolia. So I just have a regular Algolia index here. And if I ask it, this is the index that's, that's created. If I ask it a long question, like I don't get anything, right? And I don't have a huge site, this is just a demo site. But if I just do a thing like the word, I don't know, galaxy, I'm gonna get lots of stuff.

Okay? Like keywords. So these, these engines are really good at doing keyword searches, not so great by default. For [00:06:00] viewing like long searches, but I can create this index for free using Algolia, and it's a great tool. So when you create your free Algolia account. You can set this up, choose the free account and you can set up a free crawler.

It doesn't let you crawl very often or very much, uh, like 10,000, but it does 10,000 crawls per month. So that's pretty good. And then you can configure that after. So I'm not gonna go through all of the steps, but once you have your website built, you can really easily add a search index to it. And if you just wanna do basic search, that's cool too.

Um, you learned how to do that today if you didn't already know how to do it. There are tons of search, um, tooling out there. There's ones that are specialized for different things. I'm not advertising for Algolia. It just happens to be free, and that's really great when you're learning stuff. Okay. This is our demo site that we're working with.

It is just a basic site that I created for proof of concepts to, to kind of give away that code. I will show at the end. That's for this. It's a, it's a gi uh, public get repo. Show you how to do that. Uh, of what's going on. But let's just demo [00:07:00] real quick what this looks like so we can kind of know what we're trying to shoot to.

I, I triggered the thing you can do Command K. Uh, so we've got these three default. This is from coming from the CMS as well. I'll show you how that is configured, but we can also type whatever we want, but it's just like, go ahead and try this and see how it works. So we have our AI summary that that streams in and it didn't find anything.

So that's great. Thanks for the demo. Uh, let's try a different one. Okay, here we go. So it gives, it gives us a summary here and it streams it in, which is pretty nice. It's actually kind of a hard thing to do that the AI toolkit does for us. And then it shows us the related searches that it found. It doesn't look like it was a great search, but it shows you the idea.

Okay, so we're gonna look at this locally in a second to see how all the code is kind of wired up. But first all I'll jump into this is agility. And I'm gonna look, look at the model that I set up here for this. So I want a bunch of general settings, like, you know, what is the, the input prompt? Are we gonna even show this ai?

Um, we're gonna have this full agent mode, which I'm gonna show after this. So I'm gonna try to keep, um, that's why I'm going so fast. Um, what's our system prompt? What's the Mac to [00:08:00] max tokens, things like that. And what are our three default prompts? It's like three fields. So like pretty basic modeling here.

That sets us up so that a non-developer can then go and like do this. Um, and they might know, not know how to do a system prompt, but if you give them an example, one, they might know how to change it or you can, even just being able to change this without having to go into the code is really, really useful.

Um, and then have these kind of things. So I really, really recommend for anyone who's coding out there, especially if you're doing stuff for customers, for clients. Use a CMS. Um, there's lots of them out there with different licensing models and whatever, um, that is going to help you in your life kind of level up, um, what you do.

So like no sales pitch on CMS except for the fact that it helps you as a developer. There's lots of them out there. Okay, cool. So we set up a golia, we set up our search indexer, we set up our CMS to give us a bunch of like, content that we can work with. Let's see how that is all tied together with the code.

So I'm in my next JS project here, and I'm not gonna go through the whole thing. There's a [00:09:00] lot of different components in there, but I'm gonna zone in directly on what we talked about here. So we have our, our search route, uh, the AI search route. I'm gonna look at that first and is using our ai SDK. So it's just a post request.

Uh, so like we're in our API and an app router for next js. Here we have our, in our API folder, we have a sub folder called ai. And then this is the search, the AI search route that's here. Okay. So we'll set up a few things to start. First I have like, I'm gonna need all the environment variables that I need.

Um, so I just validate that we set up, make sure we have all the environment variables we have for Algolia. That's just like, you should always do that. We have the messages that are coming in from the request. Okay. So that these UI messages are set up as part of the, uh, AI toolkit that is so, like this is, uh, so like the MPM package is literally called ai.

Um, that's here. Okay. That, that is created by, I think cel. It's an open source project though, so you can use it anywhere. We're gonna call get search config. This is [00:10:00] from, this is from Agility. Okay. So this is actually calling into the agility, SDK, and we have some default values in case like someone doesn't set something up, um, if it's not configured.

And then we actually call, you know, get content item, get content list to go grab that from agility. So that would be like from whatever CMS or other backend. You could use a database if you want. Um. To, to do that. We are hard coding it with English right now, but you could also not hard code that if you wanted to.

Okay. And then we have, and, and so like this is how we say, hey, it's turned off potentially right. We're also gonna set up our search tool. So the way agents work is you. If you've all used, used, uh, uh, any AI tool, when you type something in, that gives it context, right? And the system prompt is also part of that context.

And so that's why the system prompt is so important. It's gonna tell this your particular agent, how it's supposed to work. Um, but then we can add more context to that by doing searches. So this is our search tool that the AI agent will call in the background when it decides it [00:11:00] needs to, and part of our system prompt should say.

Call this every time. We really just want you to search. So when we create this search tool, again, this tool is, is part of the AI toolkit, uh, this tool method that will give us this object that can be called. And essentially we give it an, uh, description of like what it does. We can say what the inputs are.

So that inputs here are literally just our query and our limit. And it uses Zod to describe that. And this is the key because this is also part of the context. So this is gonna tell. The AI agent that you're hooking up, how to, how to interact with this tool that you've created and the tools can be pretty much anything you want to do, and in this case.

We're gonna do an Algolia search and I've, and I've console log these out so we can actually see what it's doing in the background as we're testing this out. Okay. So we've got our search parameters and literally we're gonna just use the Algolia STK to do our search for us, and then we're gonna loop through these.

And I've done a little bit of like mishmash of this content to kind of make it come out easier. Um, I actually vibe coded this a little bit. [00:12:00] So this was Claude that helped me kind of like get these, get these in in a little bit nicer format, um, to return and also did some substring on here so that we don't have a huge search result.

Um, and this is something you can kind of tweak as you go, but you don't wanna return too much from your tool calls 'cause you don't wanna blow up your context. Let's call the context window in your agent. And that is where you start to run into like agents not performing as well or hallucinating. When you return too much from a tool call, they start to get like bogged down with that.

It uses a lot more tokens and it's expensive and it doesn't work as well. So we want to return fewer things. I think my limit here of stuff to, to return, I think it's five. We're gonna return the top five things to use and, and AI is gonna summarize that for us. Um, in our thing. Let's, let's see how that works.

So that's our tool. That's all set up. Um, we're gonna, as, again, we're gonna get the system prompt, the temperature and the max output tokens from our CMS. We're gonna get our AI model. Okay? And this, this is normally in a lot of the [00:13:00] examples, this is done like in line. But since I'm actually sharing this code between another agent that I'll show in a minute, I put this in its own spot and it's good to have its own files for things.

So I've got the ability we're gonna either use open ai. Itself. So like your chat, GPT. So if you, if you want to use this code and you have like a chat GPT key set up, then go ahead and that will work here. The other thing you can do is use Azure, Azure ai, which I use for work all the time. So I already had an account that was set up for that.

So I have both of these. It also has tooling for other, like other AI backends that you can hook into. Um, I haven't experimented with any of those yet, but everyone's got their favorite AI tool. So this GET AI model just does that. It's essentially just reading your config and, and, and initializing stuff there.

Okay? Now this is where we get to the part that is, does all the work, this stream text, this is coming from that AI library as well. Okay? If I scroll around really fast and be annoying. Alright, so this, by the way, streaming text from, uh, from an road handler is actually really hard if you're gonna do it [00:14:00] yourself, especially in TypeScript.

I find it easier in like c but this is taken care of for you. You don't have to go ahead and do that. All right, and let's just go through this setup for this. We've got our model and our system, so that, that's the model that we created here. So that's, this is the, like the backend that it's gonna talk to, which is, I think in the, the one I've set up here, I think it's GPT-4 oh mini, um, from open ai.

Um, through Azure, uh, and the system prompts coming from our CMS, so that's really important. Then these messages, this is the input from the user, okay? And we're gonna, this, this convert to model messages is also part of the AI toolkit, but it's gonna take those messages in and, and then, uh, which is this one message's, essentially our search query, it's gonna decide.

How to call our tool and I've got the tool choice set to auto, there's a bunch of different things you can do there. Um, and I allow it, I actually gave it five steps. It only needs to have one extra step. If you don't have this set up, it won't actually call your tool. Um, so that's just, there's, there's some gotchas in, in this API.

But this [00:15:00] is great because literally like not for many lines of code, like we, this, this is our agent, this is it. All we need to do now. It's a one shot agent. We don't have multiple messages coming into here. We're gonna get to that in a minute. So let's just see how this works locally. Okay, so I think I have a local host window here.

Yeah, go ahead. Let's just actually refresh this. And I'm on the blog page here so I can kind of get a hint of what to search for. Um, but uh, so let's bring up, bring this thing up here and when we click on one of these guys here, so let's, and this is nice to have the, by the way, anytime you're building an AI agent, I, I suggest having suggestions 'cause people are super lazy and if you give them something to click on.

Like, Hey, that's your search. They'll just do it. So if, if you're building a site and you want to like, make somebody search for something, you can absolutely set that up by doing those default queries. So this is what we got back. We actually didn't get any search results back. Um, let's see what it did from the tool call.

So the actual search query, it didn't, it didn't figure out a good search query, which is brutal. So that's not so great. Um, let's see if, let's try one of the other [00:16:00] ones. And I've noticed that different models are like. Somewhat better or worse than at, at building these queries out and only, of course is not green.

Great. Let's build one ourselves. Actually look at the content. Okay. Let's talk about, let's ask about like info sweep, which I've, this is by the way, all AI generated content too. Tell me about, oops, I can't type info sweep.

So here we go. So it actually gives us some search results. Looks like it gave us in English and French. Probably should have thought about that before I translated it. But then it gives us this nice. Um, summary up here. Okay, so you can see here the, the Algolia search query was just the word info sweep.

So it generated a keyword query for me based on, you know, when we set up this tool. Okay. We set up our tool up there and gave it, you know, a bunch of, uh, instructions. So, as a developer, if I was gonna go back and fix those other queries, I would go into my system prompt, but then I would also go into my tool prompt.

So if I [00:17:00] just back up here and find it where I created my tool right here, I would go into my tool prompt and maybe even have this come from my CMS as well, so that I could tweak that without having to redeploy my code. Um, so we've got the tool call the description as well as the, the description of the query.

And I, you know, I've just like come up with some basic stuff here, but based on your content index, you could probably, you know, fine tune these exactly for what you want. And by the way. AI is really great at building these for you and tweaking them. So I highly recommend, you know, if you were gonna like improve upon.

What I've done here is to take these pieces of description, pull them out into your CMS, model those into just like set up fields for them and then literally pull them in. Uh, for here. So in my tool call, I could have been passing that description of for these two things and as parameters and then. You know, I already have my AI config here, which is coming from the CMS.

Those are just new, new properties that I could pass into here. Okay. So you can kind of use that to just like grab your, grab your [00:18:00] setup, your configuration with CMS, and then pass it everywhere. What I don't recommend. Do not put your keys in the CMS. I see that a lot. Keep your keys in your environment file.

Um, that is a thing, like if you change your, your keys that you're using for back ai backend tools, um, or AI models, that is a thing that you probably want to have set up in your environment file and not in the CMS because some other developer could use that and expose that somewhere, um, in, in the front end.

Okay? We don't want that to, to happen. Okay. Hopefully that clears up how the route works. That's the, that's the backend. Let's look at the front end now. And part of the thing with the front end is we have a, a, a component here, and you can see here we're passing into the properties of this component. Our default prompts.

Where did they come from? Um, I'm going, I. There's a bunch of prop drilling that happens in here. Probably could have done it with a context to make it a little easier. Um, so in this next JS project, if you understand next js, we've got a layout file. Lemme just search for this here. Gimme two seconds.

Layout [00:19:00] TSX, which is I think right here at the top of this. This is a react server component. So what's calling this exact same, Hey, get my search config that we did in our other route. Okay? So it's calling, it's making a server to server call, not a client to server call because this is a rack server component, but.

The component this, the search modal is a client component. So anything that I have in here, I have to be very careful about what I decide to pass in, because there might be some stuff in my CMS that I don't want to expose, like if I had keys in there. Which you don't want to, but this is, it's really important to understand that like anything that goes from a server component to a client component is gonna be exposed into, into the source of that webpage that you have.

Okay. So that's how that gets in there. There's a bunch of prop drilling. I can't remember where it is. Oh yeah. So we have this floating AI search thing and then it's all sub components of that. I'm not gonna go through all the React stuff. 'cause you know, if you want to, you can figure that out. Let's just dig into the actual ai.

Um. Part of this. And, and the biggest part of it is this used [00:20:00] chat hook. That hook comes from the AI SDK and they've got a bunch of react components. I haven't looked at the other frameworks. I'm more of a reactive developer myself. But you can, um, do this in things like, uh, I'm pretty sure they do view and um, vet maybe, I'm not sure what other frameworks they use.

Probably Angular. Um, anyway, let's look at how I'm using this. 'cause there's a couple interesting things that we're doing here and. If we look back here, we wanna show our summary, so there's a component for that. But we also wanna show these nice search results, right? The actual search results that are coming back.

And you've got like, you know, kind of look like a Google search result. Then you can, you can tweak those yourself. So we're, we're basically selling it, talent, telling it to. Use the AI search backend that's here. Okay. So that's, that's calling into our search component and it's expecting a post and that's, and it's gonna post at these messages.

Okay. That it is coming through from right here. Okay. From the request at js ON, so that we don't have a choice about how that's implemented. Um. And how that works. Okay. But then we've got this cool [00:21:00] thing on tool call. So it will tell us when the backend, um, made a tool call and we can actually grab the query here.

So what we're doing is when it makes a tool call, we're gonna make a second call just, just to call the search directly, because if you wanna do the old school search below it, so this top part is like, that's the only thing that AI is doing and the bottom part's coming directly from Algolia. So we're kind of hacking into.

The, this used chat to get it to tell us what it called and, and when it called into our, our search tool. Okay. And I know it's, I, I only, I know I only have one tool in here, so I didn't have to check, hey, what tool actually got called? But if you had multiple tools as part of your AI for whatever reason, then you'd probably wanna do a little bit more logic into here.

Okay, so now we just need to, uh, this is, this is all being shown in the dialogue and we've got components that are set up for rendering all of this stuff. If we look at the search summary component, we're using this response component, and that response component is [00:22:00] super important because, and you can see we're list, we're looping through these assistant messages.

Okay? So those messages are getting passed in, uh, into here. The, all the messages that came back from that, uh, from that, um, from that used chat hook, we're saying we only want the ones that are assistant. So I just want the, like the message that came back from the, uh, the assistant is like the ai, and then what happens is, is this response.

Handles like markdown and it handles the streaming of this, of this text changing and it re renders it nicely. So we don't have to do that. That component is, uh, coming from, uh, I actually had to pull it in. It's using Shad cn, uh, I'm not actually sure how to pronounce Sha cn, but that's a really cool component that essentially you install their, uh, it's called versel elements or AI elements that they've done.

And you can see it's using the stream down thing. So that great. Um, uh. Like if I just do this again, hopefully it'll, you can see this actually streams in, as I said, that's not easy to do in a nice [00:23:00] way. They figure that out for you. So if you use in React, this is an awesome, awesome way to do that. Okay. So super cool, but.

What next? Like, okay, this is this and that might be great for your use case, but what if we wanted to do more? What if we wanted a full agent experience? Okay, and hope I don't run outta time here, but I do wanna show this. So we, so I enabled in my CMS the idea to turn on full agent mode. And you can see here I actually get another, another tab that shows up.

'cause I've got like a hide one on here. And in here we're also going to, we're also gonna try and capture a contact on here. So this is great for lead generation on your site. And I've just said, Hey, my post URL is like, I'm pretty sure this is just, uh, an Azure workflow or something like that. I can't remember what it is.

It's a Zapier. You could use anything, um, for that. Okay, so we've got that turned on. I'm actually gonna publish this, uh, push it out. So we turned on full agent mode. I'm not gonna change the system prompt. I did hard code, my system prompt 'cause I didn't have time to change it all. But again, we're gonna use, now let's look at our architecture.

It gets even a little more fun. [00:24:00] So for full agent mode, we wanna do something like this, right? Like you want to have, Hey, well I'm selling you some car insurance and it'll ask you some stuff or whatever. Like you can set all that up. Um, and it's actually not that hard. It's actually a little easier than what we did before in terms of the number of things involved.

But there's the, the way we actually have the chat, uh, UI is a little more complex. Okay. So we've got a more complex chat component and a, and we've got an extra tool in a new AI chat backend. So let's actually go in, I dunno if I have any more on this. Oh, just the, uh, I do, I will leave this up. I'll put this up at the end.

Um, okay. So let's look at that, the, those extra things there. So I'm gonna close a few of these guys. We'll look at this route. So this, this route is underneath, so we have API slash AI slash agent dash route. So this is more of a full featured agent now. Okay. Similar kind of stuff. We're gonna validate our environments, we're gonna get the messages from the backend, that's ORs from the front end, I should say that.

We're gonna set up our search tooling. [00:25:00] That's all good. We're getting 'em to get the, everything from the, from the CMS. Set the search tooling. We're also gonna set up a contact ca, a contact capture tool, which I don't know if I'll have time to go into that, but that's very similar. I will go into it very similar.

It's just basically gonna give us like some messaging and some stuff that we output here. Okay. We've got our system prompt, which I said I did hard code this, sorry. Um, 'cause it is, it is a lot different, a different system prompt when we're going full agent mode, but we're using the same stream text, a call from the AI toolkit.

We've got our model again, here's our system prompt and then we have an extra tool now. So we've got our content, a contact capture tool and that's it. That's all we gotta do. And so it's like very similar backend. Okay. Now on the front end, there's a little bit more going on. We have our used chat, which is similar 'cause we don't have to hook into the tool calls, but where we're showing our messages now we are actually sending these messages if I can find it into, so we have, uh, like again, [00:26:00] those versal elements give you a whole bunch of stuff.

Like, and I, so I literally just went to their, um, it's on the AI agent. Uh, toolkit that they've got there. I literally just copy and pasted one of those, their examples, and then modified it for how I wanted it to look. So let's actually see how this looks locally. Still on local host here saw if I refresh this, it should now since I turned on full agent mode, which will literally just have like if full agent mode, then show this other, like this, this AI chat component instead of the other one.

So here we go. A slightly different thing. Now we've got more of a conversation window when, and of course we've got some more. Our default prompts are always nice. So how can I make more money from ai? You can see. We're streaming in all this stuff, and it's a, because our system prompt is slightly different, we get some different stuff.

I don't think this actually did a search for us, but let's actually see, uh, the search. Oh, we got, we did get two. Oh, no, we didn't, uh, it didn't do a search, so it decided it's, we got auto on, on our search, on our, our tool decision. So it decides when it wants to do anything. [00:27:00] Okay. So let's do the, tell me about info sweep, which is like one of the made up words that was in there.

Now it should do a search result. And you can see here we're using what's called generative ui, which is a fancy term for saying when we get a tool call, when it finds a tool call, it's going to output that differently. So you can see here, if it's a reg, if it's just a text, then we are going to just do that regular response, which we saw right here.

This is just text. But when we get a search result. From the tool, we now are gonna actually output those search results directly in our chat, which is wild. So that's why we get this great, uh, UI that's here. Okay. And now let's do one more thing. Let's just force it. It's like, I wanna talk to sales, which no one ever says, but talk to.

Well, just someone, people type that a lot into agents, by the way, I wanna talk to a human. And here you go. So now we're gonna actually output our components so you can see down below. Someone if, if we call [00:28:00] tool content capture, contact capture, we're going to actually, it's got a bunch of like states in here.

I also vibe coded this by the way. So, uh, most of your coding agents are actually really good at coding this stuff up. But you can see here if we actually get that post URL that comes back, it tells us where to post it. Um, which I don't love. But, um, probably don't wanna expose that, but it's okay. We don't care for this demo.

We're gonna actually run, this is just this. It's just a react component to like, do this and, you know, these are pretty good. Let's do, uh, you know, let's do that actual email. Com, blah, blah, blah. Like this actually works. So you can actually put full ui uh, components inside your agent. And then that's why I think this is the, this is the new front end.

Um, because people expect this now on a lot of places, and you could almost replace your entire website. Because a lot of websites are just meant to capture contact info. They're meant to convert users. Well, there's no better way to convert users than if you have this kind of agent that does it. And it's so much [00:29:00] more, uh, capable than a lot of even the, uh, tools that you buy out there.

So like, there's a lot of good agents and you know, I worked with a lot of those, but you can code up something that's really, really good. Just by doing this yourself. So, uh, hopefully you learned a lot. I think I'm actually kind of on time. I'm not sure. Uh, I lost, totally lost track of time there, which is happens all the time when I'm coding.

But that pretty much takes us through everything I wanted to show. I'm gonna put this on the screen if you want to look at this code, it's here. Um, I'm not sure if I have a way of sharing this link. Um, outside of this, I don't know if these slides will get shared. This is being recorded. Um, but essentially if you go to like github.com/agility.

It is one of the public repos that's up there. Um, if you look there, so it's our, this is the demo site that I, that I do as, uh, for a lot of folks. There's a ton of code in here if you wanna see this with agility. Like if you wanna run this full site locally, just gimme, just gimme a shout and I will set it up for you.

Um, happy to do that. We have free trials of agility. Happy to show [00:30:00] you like how all that works, um, in a, in a full demo because I, I think it's really important for developers to kind of understand how to really build their careers, not only with CMS, but now with AI and building agents that run on top of those websites.

Um, I really believe that's the future. So Right on. Hopefully you guys enjoyed what you saw, and I hope there's some question.

**Sean C Davis:** Joel, that was, that was amazing. Yeah. If you all have questions, drop 'em in the chat. Um, I did see we just had a, someone dropped a link in there, so folks in the chat now have a link to that repo.

Oh, cool. Which is great. Right on. Okay. Uh, Joel, so. That, first of all, I was, I, I love that pattern at the end of like, when, when you recognize a particular tool call that you can then, you know, you can funnel people to the right, uh, place. I've been playing around with that quite a bit at Netlify, but what I, I wanted to start with was, um, you know, you started with kind of that classic search pattern and evolved into an agent mode.

In a really kind of a fluid way. Do you, do you [00:31:00] have a recommendation on when someone uses that classic search versus the more interactive chat? Do you feel like everything is going toward the direction of chat? What? What do you recommend there?

**Joel Varty:** I've been doing so much thinking about AI and. How do you get people to trust something, um, whether that's good or bad, no matter how you feel about it, but it's called cognitive offload where people decide that, you know what, I do trust this thing.

And I think the, the Google search summary is the perfect kind of gateway to that for ai. Mm-hmm. So I would say. I think people are ready for it because it's on so much, so many Google Re responses. So I, I would recommend if you're implementing site search, either find a tool that does that automatically or build something like this yourself.

It's worth it. It's not gonna cost that much from in, in token costs because it's just a one shot deal and you could cash the responses of that. Um, just like we cash search results and things like that. I didn't put that in this demo, but I think it's [00:32:00] almost essential people are expecting this now. I don't know if they're expecting a full featured agent yet.

I think that's like a little bit future thinking, but I think it's, it's possible you can do it. It's not easy, um, to get it to be like production ready. Uh, like that's, it takes a lot of time and, and kind of care. But the search summary is pretty easy. And if you have a full website, like it works really, really well, kind of out of the box, even with the cheaper models.

So I highly recommend doing it.

**Sean C Davis:** Yeah. Have you, have you played around with the caching at all, at all? I haven't gotten that far yet.

**Joel Varty:** Ah, caching in next JS is not the easiest to do. Um, so I wouldn't use the next JS caching. I would use like a Redis cache or something like that. Or like, for instance, uh, uh, like I, our site's deployed on Netlify.

Netlify has a blob storage that you can use that's perfect for caching, stuff like this. Um, now the difference is there's when they sort of the, when the cash, when the response is cached. You're not streaming it out or you could stream it. I'm not even sure exactly how to do that. Like that's a bit of a pain, but you just have the cash [00:33:00] response and you just like send that it straight out.

So it is a slightly different potential response. So there's little tricks there, but that means that if you, for instance, for that same query, if someone types in the same thing, you don't have to call into your AI agent again.

**Sean C Davis:** That's a good point about the streaming 'cause you probably would have to vectorize it in some way to do that.

Yeah. Really interesting. Okay, we've got a question coming in from Michael. Michael asks, is the agent in full mode doing the ui? Uh, or is the front end doing the UI based on the agent response?

**Joel Varty:** Yeah, great. Great question. So when you have those tool calls in your agent, what they, what that tool call allows you to do is to have like JSON, literally A-J-S-O-N object that's respon in part of that response.

So as opposed to just, so you can have text responses to a portion of your, of your agent response, but then when you have a tool call, it can return like literally raw json. Um, and then. Your front end is responsible for generating the UI for that [00:34:00] JSON, so we call it generative ui. You, you could use agents to like, you know, generate the UI at like, at runtime, which I've never seen, but like, no, you have to have a React component or some way of handling that.

Um, tool calls response. And what's great is that, you know, the schema of its data, because there's a, the, the response of it is always is determined by like literally what you return from that tool called. And in this case, like for the, um, contact us, we returned like the prompt at the top it says, Hey, you know, what we think is gonna help convert that user as well as the post URL, which probably we shouldn't have returned.

The post URL there, um, probably should have been done like as part of a server component or something, um, in there. But those and those components are client components only. Even in the next JS project, they're not server components as far as I know. There's no way to do the server component from that.

Um, it would be cool to stream the whole UI outta the agent, but that's not how that this example is working yet.

**Sean C Davis:** Interesting. Okay. And, and then earlier in the presentation you showed that the Ai [00:35:00] SDK can wrap different model providers. Yes. Have you, and, and you, you said you've had or alluded to having different experiences with different providers.

Can you maybe share a little bit more detail there and, and what you've found, at least within the context of search some that work particularly well, or, or where you've struggled?

**Joel Varty:** The two providers I've used. So I've used the open ai, sort of like I have a chat GPT Pro license, and it, it allows you to give you, like, to get an open AI key.

So I've, I've worked with that, um, that is limited to a few different models. I've worked with GPT, so I, I worked with GPT five and it's like GPT five and GPT-4 and their variants. Um, five is actually not as great for this because it's considered a thinking model. Um, so I'm hoping that the tooling gets better at working with it, but like there's thinking models and like.

Doing models. The doing models tend to be better for this kind of stuff to making tool calls and whatnot. Um, now I would love to learn more about how to build agents that have like a thinking portion of what they're doing and then they do stuff so they [00:36:00] to be better for, for the to chat CPT models. I think that expectation of what an AI agent can do is going up and up as people use like better tools.

Um, our expectations of them being smarter are really good. So. I find that it's, it's not the, the provider as much that makes as much difference. It's the model itself. Um, so like GT five served up from like Azure AI versus CHATT T'S backend is probably gonna work pretty much the same, um, in my experience.

But changing things like the temperature and the token, like the max tokens and things like that as a big deal. By the way, if your max tokens are set too low, you will get the, you will be so frustrated because it will just stop. Because it'll reach the max output tokens as it's generating its stuff. Or if your context gets too big, it's generating, it's, it's maxing out on the tokens as part of the input, and then you just get nothing.

And it's really hard if as a developer it's like, ah, I, nothing streamed back. And your users are like, uh, like, or a demo that you're doing for a [00:37:00] customer, which happened to me, and I'm like, this is embarrassing. No. Um, okay. I promise you that it doesn't always do that, but. Again, models are a little bit unpredictable as well, so that's tough because the same input can give you a different output.

That technology is called evals, um, which is starting to become more of a thing. And I noticed that, um, chat GPTs, like their tooling has like an evals. Playground kind of a thing, which I haven't used very much. That is the, one of the next frontiers in, in agent development is getting, is working with evals to try and get system prompts and, and filtering input prompts from users so that they are more predictable.

Um, yeah, tough. It's that, that's tough when it, when you get differences there.

**Sean C Davis:** Yeah, that's super interesting. There's so much nuance to and, and knobs. You gotta twist and turn to get it just right. Yeah. Um, okay. One, one last question. 'cause you're, you're spending, you know, most of your time in the content management world, and I know there's, there's been a lot of talk of, well, with all of this, I mean, essentially features like what you've showed [00:38:00] here, is that the, the death of the CMS or is there, what, what is the future of the CMS and, and really curious to hear your take on that.

**Joel Varty:** Yeah. So to me, agents are the new front end and every front end needs a backend and CMS is like, at the very least, it's like a repo for all of the, the settings and the content that drives that content is still driving what is in your agents. In fact, text-based content is more important than ever before.

Um, and it's. One of the things that tends to happen is with a new, um, with a new technologies, we tend to hard code a lot of stuff in our code. And then eventually it's like, oh, that system prompt should not be in there. Hmm. Should it be a markdown file in my git? Probably not there either. Um, pull the sy.

So just having your system prompt in the CMS is huge. Um, again, it could just be in your database, but like your database doesn't have all the workflow stuff that A CMS has. So I still, we still see like. The biggest competitor to headless CMS out there is the developer who says, I can build my own CMS and by, by all means, [00:39:00] go ahead and do that.

I did that. That was my career. Um, I built a CMS and 20 years later, I'm still working on it. Um, I don't think it's going anywhere. I do think like we're, we have an MCP server for, for agility, um, that is like, uh, like hosted CMSI think is, is. Going to kill or like the, i, the, the needs that people need from that are going to make it really hard to justify self-hosting A CMS, um, because it, it is really hard to self-host A CMS and then adding all the AI tooling and all that other stuff is probably gonna be an upgrade.

Also really hard with self-hosted stuff. Whereas like with, with, with, uh, had the CMS that SaaS, Hey, hey, we've, we've A MCP, here's the URL you go call it. Just like Figma came in with theirs, you know, Figma is this hosted service. New, new MCP server. Go ahead. You don't, you don't have to upgrade. You just get it.

Um, so providing that and those, those kind of AI type features that people are asking for now, you just get it outta the box and it's great and happens fast. So, um, I think, I think it's sticking around for a [00:40:00] while. I've kind of staked my career on it, but, um, I can't wait to see what the future holds.

'cause AI is changing it for everybody.

**Sean C Davis:** A hundred percent. Yeah, that's super interesting perspective and, and makes a lot of sense to me. And yeah, uh, CMS has been a lot of my career, so I want to definitely see it stick around. Joel, thank you so much for your time and for the conversation. Yeah. Appreciate you man.

Take care.
