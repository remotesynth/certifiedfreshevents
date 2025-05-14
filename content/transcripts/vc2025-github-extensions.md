---
_build:
  list: false
  render: never
---

**Nick Taylor:** [00:00:00] Nod. Cool. So, yeah, so, uh, like Bekah was saying, we're gonna learn how to create a GitHub co-pilot extension today. Um. Like Bekah was saying, I'm a dev advocate over at a company called Erum. I'm from Montreal, Quebec, Canada. So if you like poutine, that's, that's a, that's a plus in my books. Uh, I'm pretty much Nikki t online everywhere.

Um, and you can find me everywhere@nikkit.online. And I'm also not a big fan of spiders, although the little ones now smaller than a quarter. I'm generally okay with these days. I know they're eating bugs, so, um, yeah. So what are we gonna cover? Um. We're gonna talk about what is GitHub co-pilot, GitHub co-pilot.

What is GitHub? Co-pilot extension, the anatomy of a co-pilot extension. And then we're gonna build, [00:01:00] uh, there is this co-pilot extension template that I created. There'll, there'll be a QR code, uh, if you wanna snap that during the live stream, uh, or you can just go to that URL now. Um, we're also gonna be using, uh, the GitHub co-pilot extension SDK preview, and we're gonna go through just kind of setting up your development environment, uh, and then we're gonna wrap things up.

I did have two slides to show that I've been part of virtual coffee for five years now, but I think my slide deck did an update. So, uh, I had this nice picture of showing, uh, my initial convo with, uh, Bekah and dms on Twitter back in 2020 saying, Hey, is there a slot free? And everything's like super automated now, uh, at virtual coffee, but at the time it was literally like, copy paste.

Here's a Zoom link. So anyways, shout out to vc. Um, so before we get started, so like, why are we even talking about copilot extensions? Well, like Bekah says, and my old [00:02:00] CEOB Dougie says, you know, you gotta have a story. So here's a bit of story time. So I did work at a company called Open Source prior to where I'm at.

Um, think of it as like GitHub Analytics on steroids. And we built some cool stuff there, including a AI feature called Star Search. And this is something that you could just use to ask stuff about repositories and projects. Um, so like you can see here, uh, Brandon Roberts, who's an old coworker of mine who you might know from analog js.

Uh, I'm just asking what he's worked on here. And there's some information that popped up and that was just like a classical just chat interface for, you know, ai uh, that brought me to like, uh, talking at work. Like there's these things called co-pilot extensions. Maybe we can build one for open source. So I got a chance to hang out with a couple engineers from GitHub, and that's what we did on a live stream and.

Basically, I ended up making this proof of concept for, uh, [00:03:00] star search, which was open source AI offering as a copilot extension. Um, so that's, that's kind of how we got here and how I got into all this. Um, there is that template that I mentioned. Um. Today, I, uh, I kind of went YOLO last night and I vibe coded a copilot extension that we're gonna look at.

This is what I'm gonna walk through in terms of like the, the demo and stuff, but it's based off of the copilot extension template I created. So, uh, if you wanna grab a snap of that QR code, you can, I'll leave that up for a second. Um, if you wanna follow along, uh, if not, you know, feel free to take a peek at it later.

Give it a star if you like. So let's kind of dig into things. So, uh, we're definitely gonna talk about copilot extensions, but what is GitHub copilot? I feel like most people probably have an idea, but, uh, I'm gonna just kind of give a rundown of what I. I think copilot is, so it's a coding assistant. It's kinda like your pair [00:04:00] programming buddy.

Um, you can perform inline code completions, you know, there's capabilities to ask questions, get answers, refactor files, um, and it can be extended via GitHub copilot extensions, which will dig into shortly. And it also has a new agent mode as of early February 20. 25. So like if you used like cursor or windsurf, something like that, it's like it can just keep working on stuff.

So like you ask a question, it fixes something and it keeps going on its own. Um, aside from that, um, GitHub copilot can now be used in any editor if they leverage the recently released copilot language server, SDK, so you're not just limited to Microsoft properties now. So, speaking of which, so where can you use it?

So you can use it on github.com, uh, visual Studio, if you're a.net developer, visual studio code, GitHub, code spaces, uh, JetBrains, IDs, even [00:05:00] Xcode if you're, uh. An iOS developer, and you can even use it in Vim and Neo Vim. 'cause there's always somebody that says, by the way, I use Neo Vim. Um, and you can, like I mentioned, there's any editor that leverages the copilot language server, SDK.

You can actually even use GitHub copilot on the command line now. So, uh, you need to install it in the command line, but you can ask questions like that, uh, in the CLI and you'll get answers. So here I'm asking, how do you set permissions on a script? And it's gonna think about it and then it's gonna give some examples and neither explain it.

Copy the command. Uh, so that's just another way you can leverage copilot. So what is a GitHub copilot extension? I think the name kind of says it all, but you know, 'cause it literally extends GitHub copilot. So what does that mean? You can create a custom AI powered tool, uh, integrate with third party services and, uh.

[00:06:00] As of recently, I think a couple months ago, you can now access files and the editor context. So like if, if you've used GitHub copilot and you're asking questions about a file, you'll see the file in the UI there of copilot. Um, you can actually get access to that in a copilot extension too. Now. Now there's two types of copilot extensions, and I'm gonna take a sip of water here 'cause my mouth is very dry for some reason.

Cool. So there's two types of extensions. There's a skillset, and this makes it easy to connect third party services and custom APIs into the GitHub copilot workflow. Uh, you know, uh, give a trivial example. Like you might have things like you ask, what is the weather? And this skillset might have a weather tool in it.

Uh, so. That being installed on your account for GitHub, you would be able to say, what's the weather like? And you would get an answer in copilot. Um, [00:07:00] and the other mode is you could be an agent. So that gives you complete control over, uh, handling the request and copilot. Um, and it also enables custom workflows through integrations with large language models and APIs while managing conversation, text and user interactions in copilot.

If that sounds like a mouthful, we'll, we'll get into it. We'll see it in practical use, uh, shortly. Um, and the only other thing I'll say about a GitHub copilot extension is it works anywhere. GitHub copilot is available except for the command line. At least for now. Maybe in future it will. So, uh, what, uh, what does it look like?

So. Here I am in GitHub copilot, and I'm asking this, uh, copilot extension I created called O Lama copilot. I'm just saying memorize this function and I have a particular file here. Um, this just screenshot obviously. But, uh, the thing that you need to know [00:08:00] about using a copilot extension is you always have to start your prompt if you're using that extension with the prompt's name.

So you have to say at name of your extension or the extension you installed, and then your. Question if you add it later, like if you say like, Hey, copilot, um, can at O Lama copilot memorize this function? It's not gonna use your copilot extension. It's actually just gonna use GitHub copilot. Alright, so let's talk about the anatomy of a co-pilot extension.

So, uh, there's a few things here. So. Basically you need a publicly accessible web application. Uh, so, you know, just has to be available on the internet. And the other thing is you need to have a registered GitHub application. And we're gonna go through all this. Um, there are, uh. Copilot extensions just for vs.

Code that doesn't require a GitHub application, but I'm not going through that whole [00:09:00] flow. But, uh, there should be links to, if you wanna look into just a vs. Code specific one. Uh, I'm going for the more general purpose. So this kind of extension would work on github.com vs code, GitHub code spaces, wherever.

Now the other things you need is, uh, in the GitHub app, you need to set the permissions for the GitHub app. Uh, these are the minimal ones you need. So if you wanna use an extension, you have to have copilot chat read only, uh, permissions. There is no right. Permission for this. It's literally just read only, but that is like the bare minimum that you need to use a copilot extension.

If you wanna have access to files, like I was mentioning before, there's also a context, uh, permission, and that's read only as well. Uh, that one is optional, but if you do want to do something with files that you're asking questions about, you'll need that enabled. Um, you know, security is important so.[00:10:00]

Here in this example here, I'm asking my co ulama copilot extension, can you improve, uh, get Ulama response, which is a function in that copilot extension, and I. Initially you're gonna see it fails. And the GitHub copilot interface actually asks me, do I wanna allow Alama copilot to actually read files?

And so you have to explicitly allow that. Uh, you can allow it just for that particular project you're in using it. Or you can say, allow it for everywhere. Okay, so let's do some demo time here. I am gonna switch over to Coding View, and we're gonna talk about a few things here. Um, the, the main thing is it's a web app, uh, so you can literally write this in whatever you want.

I happen to be a fan of JavaScript, so I'm doing this with HNO js, but literally, if you can create. [00:11:00] Web application that can be publicly accessible on the internet. It literally does not matter what language it's built in. Um, the only thing I'll say is we're, we're gonna be using the copilot extensions preview here.

Um, at the moment, this is only available for JavaScript and TypeScript projects. Uh, it is open source though, so like if you are interested in using this in your language, like whether that's Go or like Elixir. I know Brian Meer is probably in the chat from Virtual Coffee. He's a big fan of Elixir. You know, you could always port it to that.

Uh, I feel like at some point other languages will be available, but, uh, I guess maybe. JavaScript's pretty ubiquitous these days. So I think that's probably why they went with that, uh, language for the SDK to begin with at least. Um, and essentially it really is just a web app and, uh, here I'm using hano, so like, if you've never used Hano, that's okay.

Uh, I'll zoom in a bit here. Uh, if you've used [00:12:00] Express, it's similar. So you basically have like your app and then you can say like, get, so like this gets like the, uh, the route, uh, route or, or you can post et cetera. Uh, goal is not really to dig into what Hano is today, but, um, we have this application running right now, so I'm gonna actually open up another.

Browser window. So gimme a sec here. Yeah. Okay, cool. Let's go there. Okay. And this should be running, so if I go to local host 3000. Cool. So we can see here. Welcome to the copilot extension template. So this is the web app that is gonna be the copilot extension. And the other thing is we do need to make this publicly available.

So, um, you can do this many ways, but I, I use VS. Code every day. So basically they have something called Port Forwarding where you can actually just say like, pick a particular [00:13:00] port. And make it publicly accessible on the internet. This is similar to tools like N Rock or, uh, if you've used Cloud flared, which is Cloudflare's version of this.

Uh, but because I'm in VS code, uh, I just, it's in here already, so I just happen to use this. The one thing you need to know is. Uh, initially when you open this port, it's private, so you have to set, I can't zoom this part in here 'cause it's the native Os, but you basically have to change the port visibility to public and that's what it is right now.

So I'm gonna go ahead and copy this URL uh, here. And if we come back here, I'm gonna paste it in. So you can see here, this is a publicly available internet address and you're gonna see it's available. Uh, I'm gonna drop it in the chat. Um. Bekah, if you wanna drop that in the YouTube chat, maybe no biggie if you don't.

Uh, but people can go click on that and you should be able to see, this is my actual computer running. This is local host 3000 on my [00:14:00] computer. So if people go to that address, you should be able to access it. So that's the one part of the copilot extension that I mentioned. The other part is let's go to GitHub and we need to configure a GitHub app.

So, uh, basically you go to your settings and then developer settings. I'll zoom in here a bit. I have a few. Already. Um, so, um, this is the one we're gonna be looking at after the product manager, but um, for now we can, yeah, I guess we can look there. It's fine. Um, okay. Thank you, security. One second. Cool.

Pass keys for the win. Okay, so. There's a few things here in terms of, so this is, we have the running web app right now for copilot, the copilot extension. The other thing we need is to create this GitHub app. I already have one created here, but I'm just gonna go through the settings that you need to add.

And if you don't remember all these [00:15:00] settings, don't worry about it. In the, uh, copilot extension template, I have, I have a whole guide on how to set all this up. And also shout out to, uh, Mika, who gave a talk. Or is giving a talk. She, uh, helped integrate that docs into my, uh, copilot extension template. Um, so the first thing is you need a name.

And aside from that, like I. We're just using in a development environment right now. So like if this was like getting ready for production, you'd have like, you know, more details, like what is this app and stuff. Um, but for now, uh, you know, you would have a branded homepage and stuff. Um, but for now I'm using the URL of the exposed on my computer just 'cause this is a required field.

Um. This part here, and I'll zoom in a bit. Sorry, I'm just looking. Uh, okay. Uh, there's this callback URL, and it's not necessary for a copilot extension to work, but, um, it's required [00:16:00] to create the GitHub app right now. So when I was hanging with Gregor and, uh, Francis from GitHub, they just said, put one in for now.

Uh, I think later on, once they refine this, maybe they'll just make it optional. If you're creating a GitHub copilot extension. Um, aside from that, uh, this will be checked off by default, a web hook. You don't need that. And that's pretty much it there for settings. And then the other thing is the permissions, like I was saying.

So, uh, this one, I was testing something yesterday. We actually don't need this, so I'm just gonna go and remove it and let's just save that. I'm gonna show you what the literal permissions you need just to get things working. So you have to go to account permissions in the GitHub co-pilot app here. Um, and then down here you're gonna see there's this co-pilot chat permission By default, it's set to no access.

We need to have it set to [00:17:00] read only. The other thing is, um, I have this enabled right now, but, um, this is if you wanna have access to the editor context, like open files and stuff, so you can actually send those files to your co-pilot extension to maybe do additional processing that co-pilot doesn't do.

And so just to reiterate, the co-pilot editor context permission, that's optional, but you always need the copilot chat one. Cool. Cool. Let's, uh, close that and let's, uh, move back over here. So let me just close that. Okay. So essentially let's just talk about, uh, bit of best practices. So we're using the copilot extension, uh, preview, SDK, uh, when you make a request.

To the copilot extension, it's gonna post to this address here, uh, which is just the slash like, so like the root route. And there's some headers that the GitHub copilot chat, uh, is gonna send to [00:18:00] you. And basically we just kind of validate this to make sure that it's a valid request. And aside from that, uh, there's some nice helper functions that we can use too.

Uh, but essentially, you know, if it's not valid, we return, uh, you know, you're not authorized. Uh, if other errors occur, there's helper functions like create errors, event and so on. And there, there's a bunch of things here, but, um, just doing a time check here. We're, uh, we're gonna go into like, this is the code here right now, but let's go into demo mode.

So. I'll put a break point anyways just so we can see part of this and, okay, so I made this extension, it's called the product manager. And a bit of context here. Uh, I gave this talk at all things Open ai. It was well received and uh, for folks who know Gantt Leor, he's an awesome speaker and he gave me some great feedback.

He said he loved to talk, but you know. It'd be fun if you made some kind of wacky extension instead just to [00:19:00] showcase things. So I created the product manager copilot extension. So what does this do? Well, basically I've created some commands you can do here, and I'm gonna say at the product manager, give me a feature and I'll shrink this down a bit.

Whoops. Uh, there. Okay. So you're gonna see here it comes in and we've got some, this is just talking about the validation. So we can see here we've got a payload coming in from the copilot extension. Uh, we can see here, we got the stuff that we need to validate the request to make sure everything's good.

And then I'm just gonna go ahead and let it run. Uh. So now we come over here and the product manager is working, hopefully, uh, giving me a new feature. So, uh, the idea of the product manager is just to give me a wacky feature. So it's saying, introducing the mood food, blue tooth Toaster. It's, I, I don't even know what it's gonna give.

So I basically, okay, that's cool. Um, I'm gonna [00:20:00] say let's improve it. Um, let's say support, uh. I dunno. Uh, mice driven development. I dunno. I'm just putting something wacky. It's gonna take my advice and it's gonna incorporate it into its idea here and. Point to mention here is like GitHub copilot can do a lot of stuff, but here I'm just interacting with something like this is not something that copilot out of the box itself could do, which is having a conversation about brainstorming a wacky idea.

So it goes, okay. Yeah. All right. So, uh, it added now with mouse motivation. So I'm like, cool, all right. I'm like, okay, I'm done. So, and these commands, these slash commands, these are just something I put into my extension. Um, uh, so now I'm gonna say done. And, uh, so some things I wanna mention here is these helper functions from the preview SDK allow me to actually have some ui.

So like I'm able to create this dialogue to say, do [00:21:00] I want to create, uh, a markdown product requirements document from the ideas we've been brainstorming? I can say dismiss, and it goes, okay, that's cool. Glad you're happy. But I could also do it again and say slash feature and we'll let this go. Cool. It's uh, big into mood features for some reason.

Okay. I'll just say sounds good. So I'm not gonna give any feedback this time. I'm gonna say done, and I'm gonna say, cool. That sounds good. Let's generate a document that we can actually start to implement. So I'm gonna say accept, and the copilot extension goes ahead and creates this markdown of a product requirements document.

And then I'm like, okay, good, let's bring that to the team. And then now I can just come over here and I can say a new document. And we're good to go. And we've got our wacky product idea that's about to be productized. So silly extension, I know. But just to kind of showcase some of the stuff you [00:22:00] can do with co-pilot extensions.

So let's just move back to the slide deck. Um, if you want to, you can pull down this product manager co-pilot extension. It's based off of the co-pilot, uh, extension template I created. Um, and here's the preview. SDK, if you want to grab that too. And if we just move on here, I'll let people take a snap of that if they want to.

Um, yeah. Uh, we basically went through this about, you know, setting up the local development server and configuring the GitHub app. I just got too excited about the demo, so I was supposed to show this first. Um, yeah, so we've done all that. I. Basically, so wrapping up, um, it's still early days for copilot extensions, and I'm expecting kind of like a Cambrian explosion of copilot extensions, and everybody keeps saying this, and I, I do believe it.

I think 2025 is the year of agents. So if you wanna go give these two [00:23:00] repos a star, I won't say no. If you do, and I'll leave you with, go ahead and build your own copilot extension and here's a few resources. Uh, you can check that out. Here's the slide deck. If you want to grab, I'm sure it'll be available after two, but I'll just leave that for a second.

Cool. And that's it. Thanks everybody.

**Bekah Hawrot Weigel:** All right. Thanks Nick. That was fantastic. You did a wonderful job. I, thanks.

**Nick Taylor:** Um, I'm definitely very thirsty for some reason. I have no idea why, right.

**Bekah Hawrot Weigel:** So I know that you talked a a bit about, this is still early days, um, and you built this, like, I don't even know if it was generally available when you started building your extension, right?

**Nick Taylor:** Yeah. Yeah, I think, yeah, this, I built it like last summer and that SDK had just come out, I think, 'cause we knew [00:24:00] Gregor from, uh, GitHub because we, we did some work with them, uh, at Open Source. But, uh, yeah, it's still early days and I honestly don't hear a lot of. Talk about them right now. Uh, I, I really haven't seen much content about it.

Like there's a lot of talk about model context protocol, MCP, which everybody's heard about, I'm sure. But I think this is just another thing you can put in your AI arsenal tool belt, if that makes sense. So,

**Bekah Hawrot Weigel:** so if you were gonna build something else, um, or you're like, Hey, I've got a week to build something really cool.

Uh, GitHub extension. Copilot extension, what would your idea be?

**Nick Taylor:** Yeah, it's uh, it depends where you use it, I guess. 'cause like you can use it on like github.com like I was mentioning. You can also use it in the mobile app. But I think if I was in the editor, I. Like I said, I kind of vibe coded that, uh, extension last night.

Uh, I do feel like it would be a great way to generate [00:25:00] some documents for things as a starting point. Uh, like, obviously this was a silly example, but I can see like, like LLMs are really good with texts. So like, you know, just getting all your ideas together and then like riffing on an idea or like even having it suggest ideas like.

I think, I think what I have there right now, but in a less wacky way. Like what the way it would work maybe more is like, maybe it analyzes your code base and goes like, Hmm, what are some features? Or like maybe pull in some information about your product to see like what are, what are some, you know, potential features I could suggest.

And just as starting points, not as like take it as verbatim and roll with it, but um, you know, just, just to be able to riff on something because. I dunno about yourself, Bekah, but I, I, I tend to use copilot or like chat, GPT or Claude, really like a pairing buddy. And a lot of times it's just. Having a conversation [00:26:00] as opposed to just gimme an answer.

And I find that super helpful. And just generating docs like that document I generated at the end of the demo. Um, that was just a template. Uh, so you like, like I said, AI is really good with stuff. So if you have like a, at your work, you have a specific template for some kind of document and you can just kind of chat.

Uh, I think that's just a quick way to just move a. Move a little faster in terms of certain workflows, and I think documents would be a, a good one. The, the other thing I'd say is I didn't have time to do this. Uh, I was, I was a bit off too much, uh, last night, but, uh, more than I could chew. But, uh, creating issues straight from copilot, I.

With an extension. So like, Hey, I found a bug. Create an issue for me. You know, it could send a line or even the chunk of code, uh, and then just create an issue, like you might refine it after and stuff. But that I think would be, you know, just another, you know, 'cause when you're in the context of something, you don't wanna be pulled outta [00:27:00] that context.

So I, I think stuff like that would be super useful too.

**Bekah Hawrot Weigel:** I love that kind of streamlining that workflow. So just like powering up what your, your existing tool set is so great. Yeah,

**Nick Taylor:** yeah, exactly. Yeah.