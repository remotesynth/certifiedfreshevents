---
_build:
  list: false
  render: never
---

**Nick Taylor:** [00:00:00] Hey everybody. Welcome back to another Twofold two stack. I'm your host, Nick Taylor. Uh, today we are gonna be talking about, uh, using and securing, sorry, running and securing local lms. So let's kind of just jump right into it. Um, so, uh. I'm sure people are familiar, even if you're not like deep into ai, you've probably heard of stuff like chat, GBT and like Claude probably.

And [00:01:00] there there's a few other services, um, like ral. Um, anyways, I think everybody at this point is probably at least use some kind of chat interface to, uh, ask AI questions. And those are typically cloud services and you pay for them. And what we're gonna look at today is we're gonna look at, uh, being able to run, uh, large language models locally.

So let's just, uh, let me bring my screen in here. Two seconds here. Share screen, make sure I'm on the right one. Okay, cool. So. Let me make this bigger. There's this project called Ollama and it's from the folks over at Meta, AKA, Facebook. And what this does is it allows you to run large language models on your local machine.

So essentially [00:02:00] you're not paying for it, it's just, you know, you're just using your CPU and your RAM locally, but that's about it. You know, maybe your electricity bill, but you're, you're not, it's not hosted anywhere in the cloud. Uh, and it's not a service you need to pay for. So we're gonna be looking at this and I'm on a Mac, so you can install it and you might not be able to see it here, but I'm gonna restart it to update.

Looks like there was an update, uh, but, um. You can go ahead and download it. It's available for Mac, Linux, and Windows. And let's see. Okay, that's up and running now. So, uh, Ollama what it gives you is you can hit it via an endpoint, but you can also, uh, you know, ask questions in like the terminal. So if we come over here, let's zoom this in a bit.

Let's get this really big. So, uh, let's see here. Control r ol Lama. So let's just say [00:03:00] I, I've pulled down some, uh, LLMs already, so like, but if you did wanna pull one down or if you wanna list what you have, you can run alma list. This is assuming you've installed Alma. Uh, so I have the deep seek, uh, installed code lama, which is good for code Lama 3.2 is kind of like another one.

And, uh, just one sec here. Just gonna make sure I have the chat open. Is that right? Okay, cool. Yeah. Okay, cool.

So we can see, I have a few here, and if I run this again, I can say like, oh Lama, let's run it with version. Uh uh, let's run it with Lama 3.2 and that's gonna start. And then all of a sudden, and I'll zoom this in some more just so people can see, but you can basically ask questions from the CLI. So like in your terminal.

So I could say something like, [00:04:00] I don't know, I. What is a doubly linked list, and it's gonna gimme an answer in the terminal. And that that's, you know, that's handy. And if you're comfortable in the terminal, that's, that's great. Um, so that's one way you can access it. The other way you can access it is through an endpoint and, uh, the default endpoint is, uh, I'm trying to remember here.

Let's see here. Docs, uh, let's see here. API reference. And actually I'm gonna just go ahead and drop this in the chat

and let's just go ahead and show that for anybody wants to go ahead and grab that. And I'm gonna zoom this in so we can say, like, generate a completion. So you say you're gonna post to slash API generate. [00:05:00] And there's a few parameters and stuff. Uh, I'm not gonna go ahead and do, well, we could do it here I guess.

Here. Let's do, let's do it through curl. Um, you could do this in an API tester like, uh, postman or, uh, thunder client and if you're in VS code, but let's just go ahead and run this in the terminal again, but we're, this time, we're actually, um, using, uh, we're, we're calling the API. So we're gonna go ahead and paste this.

So why is the sky blue? And you're gonna notice the URL there, that's the default. URL and port, or, well, it's running local host obviously, but the default port is 1 1 4. Three four. So let's go ahead and answer that. And you're gonna see here it's streaming. Okay? Uh, let's see what's going on here. Okay, so you can see here it's streamed out the response like, uh, I dunno if I can go all the way up here, but you're gonna see here the.

For example, reason why the [00:06:00] sky appears blue, et cetera. I'm not gonna go through all of it, but basically it's streamed in a response. And so like typically, uh, if you haven't built a chat UI before, essentially you usually get a a readable stream that comes in. And this is kind of what's happening here.

So, uh, this is just giving you a bit by bit and you put it together and that'll give you a full sentence. And that would be the same thing as, uh, whoops. If we ran this again, uh, where is it? Uh, oh Lama Run, run. And then I said, why is the sky blue? So here you see it's streaming it out. So it's the same idea.

The API is streaming it out as well. So you, you're just putting all those pieces together. So those are two ways that you can access alama. So that's great. Um, so you could use Llama to build your own chat UI if you [00:07:00] want to. Um, you could use the CLI here like I was showing you, um, or you could also just wire it into an existing, uh, web ui.

So there's something called Open Web ui.

And let's just go ahead, I'll go ahead and drop that in the chat. And there we go. I'll go ahead and show that.

So what is Open Web ui? Well, it's open source and essentially it's a chat interface and it hooks up really well with Llama. So then basically you can be running your own kind of chat GPT on your local host, or you could even host it somewhere, uh, with llama and download models. And, and then essentially you have your own chat, GPT.

Uh, if you were to host it somewhere, like put it on digital ocean or something, obviously you're gonna have to pay for, you know, [00:08:00] uh, hosting it there, like, uh, even though you set it up, but you're gonna pay for your droplet or, or however you set it up. But this is a nice, uh, I really like having this as an option because for a couple reasons.

One, if maybe you're like on the plane or you're somewhere just without internet, like typically if you're at your desk, you're probably gonna have internet. Um, but even if you did have internet, this is just another option that you can use to, you know, ask, um, a large language model questions. And this is something that's really nice, uh, on a, like in a home network, because, for example, if you have a family or, or even if it's just you and friends, roommates, whatever, you could install this on a machine and then you could have it exposed on the local.

Intranet, like your, your wifi network, uh, or if you had like a, just any kind of LAN and then everybody could access this. So [00:09:00] that's kind of what we're gonna do today, I think. So, um, first of all, we're gonna go ahead and set up Open Web ui. So let's just go and get started here. Now, there's many ways you can do this.

I'm just gonna go with setting it up, uh, with Docker. Uh, let's see here. Quick start. Yeah, so this is all we're gonna do. Uh, I'm just making this a minimal setup. There's, there's other ways you can do it. Feel free to read through the docs and I'll go ahead and pull these down just off the jumbotron. So let's go ahead in here and let's clear.

Let's go get it. I might already have it 'cause I've done this before. Okay. No, maybe I clean things up to just do this demo. It's pulling down the Docker images right now While that's doing, doing its thing, I'm gonna go ahead and copy this and this is gonna run the container with the default settings. Um, and it's also gonna [00:10:00] just set up like a, a volume where you can store data on your local or wherever it's hosted.

So, okay, so that's done. Let's go ahead and clear that.

Okay. So we should have something running now. So if we do Docker PS we can see that open web UI is running. So let's go ahead and let's go to local host 3000. And then I have this zoomed in quite a bit right now, but this is essentially the welcome screen. And we'll say like, let's get started. Uh, I'm gonna enter my name.

Then we'll do nick@nikkit.co. Uh, password. I'll go ahead and just hide my screen for a sec. Uh, just 'cause my one password's gonna pop up and it's gonna show other things on my screen. So one second here. Um,[00:11:00]

cool. Uh, let's see here. Chat, login. Okay, there we go. Autofill. Okay, cool. And let's bring back the screen share screen. Boom, boom, boom. Okay, so I'm gonna go ahead and create this admin account now. And so now I'm logged in, in, I gonna zoom out a bit here. Um, but basically there's some release notes. You can read through those if you'd like to, but now all of a sudden I have access to all the models I have installed that.

Uh, so we see Deepsea code, Lama, Phi, et cetera, and those are the same models. If I run a Lama list here, so five Lama, 3.2 code lama, and deep CR one. And that's what you get there. So now I essentially am logged in, I have access to a chat interface and I can ask questions. [00:12:00] So, uh, sure, let's use deep seek, why not?

So let's see here. Um, and it also has some nice features like you can record your voice. Uh, I'm not sure what the call is, but, uh, I haven't tried that yet. But, uh, anyways, uh, let's ask a question. So let's see. Why is the deep ocean black?

And again, just to reiterate, so this is all open source, so is ol lama, and so are the models that have downloaded. So we basically have a full, uh, you know, chat ai solution running locally right now. This might take a bit longer. I don't know. It's on my local, but, um, that's the other thing to take note of this though, is like, I think maybe the deep seeks a little bigger, but Okay.

So it's answering now.

Okay. Well it's, [00:13:00] it's answering and we could do new chats and stuff. Um, you can give it a thumbs up. Sure. Whatever. Yeah, let's give it a 10. Why not? Okay. It's, it's just pretty big right now. 'cause I have it zoomed in so people can see it. But, uh, all right, save. There we go. Okay. And we also have workspaces. I haven't used this, but I think this is maybe kind of like, um, I wonder if it's like cloud workspaces.

Anyways, that's not really the point of, of today, today's stream. Uh, but you can see here, I can go back to my existing chats so those get persisted and so on. So that's great. So what we wanna do now is we wanna be able to secure this. So, well, there's a couple things like, uh, so I work at a company called Erum.

Uh, I'm a developer adv advocate over there. And, um, I've been [00:14:00] working at open source since pretty much like, like getting paid to work in open source since 2020. And when this new opportunity came up. Cross my, I don't wanna say desk, but when I was approached about this role potentially, uh, it is, there, there is like an enterprise offering and there is paid offerings of it, but at its core it is open source.

So, um, that's, that's kind of what drew me to the role and it's also a interesting solution. Um, so, uh, we're gonna talk about that a bit and then what we're gonna do is we're gonna set up Permium and I'm gonna explain what Permium is. And by the end of the stream, we should be able to access, like I, I'm running this on my local, like we ideally, like if I was setting up this for real on my local like network, I have a raspberry pie.

I just haven't done it yet, but I was looking to get some stuff set up on there or a dedicated machine. But [00:15:00] regardless, the idea is still the same. Uh, we wanna secure. Uh, you know, this, uh, this chat interface so we can access these LLMs locally. And the neat thing about using something like Permium is, uh, and I'll load that up here, is we'll be able to access the, this locally running, uh, LLM and chat interface from the internet and it'll be secure.

And we're gonna talk a bit about that now. So let's go here.

Uh, quick Start Guide. Is that okay? That's there. Let's look up Zero Trust

ba We're still working on our, our docs a bit. There's some cleanup to do, I think, but I'm just gonna go ahead and drop this in the chat.[00:16:00]

Ba. Okay, cool. And let's look at internals. Okay, yeah, so this is a good place to kind of explain things. So, so why would, so we wanna secure these LL this LM and chat interface and I mean, we can secure anything, but like today, like I was doing something AI related because like obviously everybody's kind of been exposed to AI recently.

So, uh, let's see here, just one sec. Okay. Just making sure my mic's okay. So, uh, you know, using a solution like, uh, rum, which is a zero trust security solution, you can secure pretty much anything. But I'm going to kind of walk us through securing this today. So I just kind of wanna break down what it is exactly.

So, and like why would you use [00:17:00] something like this? So. If you've ever worked at a larger company, or it doesn't even have to be a large company necessarily, a lot of times, or probably most of the time, if you need to connect to the internal network, you're gonna connect through a virtual private network using A VPN, like A-A-V-P-N client.

So you'll typically have a piece of software on your computer and you're gonna go ahead and you're gonna connect and then you know it's gonna check, okay? Uh, okay, Nick's logged in. Okay, now you're on the internal network. And then at that point, you're just considered a trusted person because you've logged in.

So this is something called perimeter based security. And the check really is, okay, you log in through the VPN client, they verified that that was you who logged in, and then at that point you're just literally considered trusted. And that was kind of okay years ago. Uh, but. It's not really great now [00:18:00] 'cause you kind of have to assume that your network is probably always compromised.

I don't mean like people are just trying to destroy your internal network, but there's, there's probably people always poking around. You just kind of have to assume that could be white hats, black hats, uh, could be state actors, who knows, depending on, on what you do. Um, so Zero Trust, uh, is a little different.

And this comes out of something called the Beyond Corp. White Papers from Google. So Google internally uses Zero Trust. They implemented this whole thing, uh, but it only runs within Google. They also have something, uh, that is a zero trust solution, but it only runs on GCP Google Cloud. Um, so what Poer is, is it's an open core version.

So like I was saying, it is open source, but there are. Uh, there are premium features like for enterprise or if you wanna pay for support and stuff, but at its [00:19:00] core it is open source. And I kind of wanna break down how it works compared to the perimeter based security, which I was just mentioning. So what happens is, like, so if we go back to the perimeter base, like, so if you worked in an office, you'd be on the internal network, so you'd be a on-prem user, like on-premises.

But when you connect through the VPN, you're a remote user. And even in both those scenarios, you're still just considered trusted because you're in the network. And that's not good enough these days. There's uh, there was a recent, uh, uh, breach, uh, I'd have to find it. Um, but basically like people are just hammering VPNs and trying to break into stuff.

And so. What Zero Trust gives you is it's really like, it's not just you log in once and then it's like, okay, you're trusted. The way it works is you go ahead and you try to access some, uh, [00:20:00] some internal apps. So let, let's say these gray boxes. Here are the chat interface that we have open over here. Uh, so what happens is, whether I'm on premise or I'm a remote user, like literally wherever I am, I'm gonna say I want to go access, you know, like my local chat there, you have to go through an identity where a proxy, and this is the, the logos outta date here where updating the docs.

But, uh, this is er here, this, this purple circle with the, uh, uh, with it, it looks like the, the Muppets beginning there. But basically it's the, this is the new logo. But anyways, uh, so what happens is it's like. You want to go access any of these internal apps, the first thing you're always gonna hit is this Identity Aware proxy, which is premar.

And what happens is it goes, okay, you're not logged in. Okay, let's redirect you to the login. So you have, as part of the Identity Aware proxy, you're gonna have an identity [00:21:00] provider connected to it. So the identity provider could be something like, you know, Google Login, your GitHub login. It could be, uh, your single sign on at work.

Um, regardless of what it is, it basically redirects you to a login and then you log in and assuming you log in successfully, uh, you're, you're gonna be a user in the system now. But that's, that's not enough to get you through. It's gonna be like, okay, so we're here now, it's gonna be like, okay. Nick is a user of, uh, like there'll be policies set up, uh, but it'll be like, okay, Nick's logged in, but can Nick access that, uh, you know, chat interface?

And so we might check stuff like, does Nick have the role that he's a, a chat user? If he isn't, then he's automatically rejected. Um, there could be other things like, uh, in this particular case, we'd probably allow people to use the chat interface anytime 'cause it's on my local network. But think of the context of like, [00:22:00] say you're on call for work and you need to have access to production if in case something goes wrong while you're on call.

So you're gonna log in and it's gonna get go. Okay. You're, that's Nick. Yeah. Okay. Does he have the on-call role? Yes, he does. Okay. Is he on his work computer? Oh no he is not. Okay, that's, sorry. Can't let you through. Um, okay. He is on his work computer. Okay, that's great. Um, that checks out. Um, but he's not on call or it's like he's on call, but the time isn't right.

Or like he's, he's in a, he's like, yeah, he's, he, he's on his phone maybe. Basically there's all these checks, which basically at a high level you would just say policies that are in place. So if those policies get applied and you don't pass those policy checks, then you just don't have access to the thing [00:23:00] and.

So essentially you won't get access to the chat, for example. Uh, but the other thing is this is not a one-time check, like the perimeter based security, like I was telling you, when you first log in with A VPN, it's gonna be like, okay, you're Nick. Okay? You're logged in, so we trust you. This is gonna constantly verify.

So every time I go to make a request to the chat application or whatever internal app I'm trying, I have secured it's going to do all those checks again. Is this Nick? Yes. Okay. Does he pass the policy check? Uh, you know, does he, you know, the policy check could also include device that they're on and stuff.

So it's literally like always be verifying is kind of the mantra versus the perimeter based security, which is like. One time check and not necessarily even a thorough check, just like you're who you are. That's it. And then you're in, and then it's like, go for it. So that's, that's kind [00:24:00] of the general idea of what Zero Trust is.

I'm, I'm still new at permium, so like, I'm a literally wrapping up month two today, so I'm still working on the messaging here, which is part of the reason why I'm doing this stream too, but that's kind of the idea. So, uh, and for this particular thing, we have a blog post about it. So, uh, in our, sorry, A guide in our doc.

Secure LLM LLMs, or let's just look up LLMs. There we go. Let's go there. I'm gonna drop this in the chat. Cool. Let's just show that. Okay, so essentially we've gone through part of this already, so this talks about using Open Web UI and Llama and it, you know, uh, just to reiterate, why Open Web ui, like [00:25:00] it says here in the guide, and I'll zoom this in just so we get a better view of stuff.

So it's a self-hosted interface for interacting with local or remote LLMs. We're only using local ones today, but you could, you could have remote ones too. But basically the nice thing about having just local ones is, you know, it's private, uh, and you get full control over the data and the configuration.

And then there's some other features you could integrate. Then getting back to, you know, why use Premar to secure this? Um, you can exist your, you can your users with your existing identity provider, your IDP. And this is something like, even if you don't completely understand everything about premar yet, or you don't wanna leverage everything about permium, is by just putting permium in front of your internal apps, you automatically improve your security [00:26:00] posture because you could have legacy applications or, or like, uh, like this app for example, the Open Web ui.

Um, oh, hey Nana. Nice to see you. Yeah, yeah, definitely check it out. Um, and yeah, if you wanna check out the Prime docs, go for it and, uh, happy to answer any questions you have. Um, but the nice thing about this is like, uh, I, I've worked at places before where I. There's like internal apps or legacy apps that they don't even have single sign on.

And what you can do by just putting Permium in front of this is you can automatically make everything have single sign on. So like, it might not, like you'll have single sign on when you say like, I want to go access my Legacy app. It's always gonna go through merrim and it's gonna go, oh, you're not logged in.

It's gonna force you to go to your corporate, uh, you know, single sign on. And then you can access the app. And even though if the Legacy app doesn't have single sign on [00:27:00] built into it itself, like maybe it just has regular auth and stuff, you know, that's something you can migrate eventually. But even just putting Primarium in front of it, you'll get that single sign on and then it could be annoying temporarily where it gives you access to the Legacy app and then you log in the old way in your legacy app.

But it's the only way you can access that legacy app now. So part of the thing with. Putting erum in front of stuff is all those internal apps. This is the only way you can access them so you don't expose them any other way. Everything always goes through er and uh, and again, like I was saying, it's an I identity aware proxy.

And I'll, uh, let me open up another window and let's go back to the docs. Uh, let's just type in proxy here. Uh, identity aware proxy. Let's [00:28:00] see. Where's it, do we not have this in here? Maybe this isn't, it's a zero trust, uh, principle, but let's see here. Identity aware proxy erum. We are still reworking the docs a bit, but I'm trying to see where did we.

Does it talk about it here? Identity

aware.

Okay. Yeah. Open source identity aware proxy. Yeah. Okay, so I'll drop this here just to give the explainer, but, but like I was saying, it's an identity aware proxy and, and it's, yeah, it even links here, so to the Beyond Corp docs and stuff. Um, I'll drop this here. And let's pop that back up there. And [00:29:00] uh, yeah, so it's based on Zero Trust, like I was saying.

And I kind of just walked through that. So like the main difference with Zero Trust is like always be verifying that if, if you take anything away from this about zero trust, it's just you're always verifying like, is this the right person? Is this the right con? It's, it's really like context to find access.

'cause it's not just a person, it's like are they on the right device? Is it the right time of day? Depending on whatever the action is. Like if you're on call, do they have the right roles? You know, like there, there's all all kinds of stuff. So it's not just role based access, which uh, you know, in terms of differentiating between like what's like regular single sign on with application logic that you have the role-based access.

Uh, okay. So let's just go back to where we were. Baba. Yeah. So we're already running open web UI in Docker. Uh, but now what we need to do is we need to configure, uh, prem Zero to secure it. [00:30:00] And just gimme one second here. I was on a long flight yesterday. I took a red eye. I've been, it's a, it's a busy month for me, just taking a, uh, Tylenol.

Um, yeah, I've been pretty busy. I've been cooking. I was in Portland for a few days recording something. Flew back last night. Got back this morning at 7:00 AM my time. Slept on the plane, so I had a good sleep. But lots going on. Um, I'm actually like, speak, we're talking about AI stuff today. Uh, I'm actually going to all things open AI in North Carolina on Sunday.

So if anybody in the chat is there, come say, Hey, uh, if you see me. Okay, so like I said, we have, uh, open web UI running. We have llama running. Um, so, uh, we're gonna go ahead and use rum zero. This is [00:31:00] a, an easy way to set things up and I'm gonna explain what this is in a second. Let's open up a new tab. I should be logged in already.

Yes, I am. Okay. So I'm just gonna create a new cluster just to manage clusters, add cluster. We'll call this C-F-E-L-L-M demo. Okay. I'm gonna go ahead and create that. Think of the cluster as just kind of like your workspace environment. Um, there's this token here that is gonna be available. Uh, let me redo that so that you don't see that.

Uh, there's a. In the next version of this, this is not gonna be showing the token. So let me just finish this here. Uh, actually let me copy this. Let me add this to my notes. One sec. And [00:32:00] let's pop this over here. And let me just paste the configuration. Oh, that's not even the right configuration. I want the docker one.

Okay. So let's copy that. Okay. Uh, it's got the token there, so I'm just gonna say finish and I'm gonna rotate that token. So gimme a second here. Uh, let's see. Rotate token. Okay, I'm gonna just hide my screen for a second and we can take this down to, okay. And if anybody's curious about the, uh, beyond Corp Docs, you can check this out.

Cool. Uh, all right, so let me hide my screen for a second. Gonna rotate my token?

Yes. Okay. There's my new one. Okay. And let me not make the mistake of showing my screen with the new token. [00:33:00] Okay. There we go. All right. And then we're gonna have a token.

Cool. All right. I'll explain this in a second here, but let's share the screen again. Okay.

Let's go to this one. Uh, let's go to routes, and let's go to the LLM demo. Okay, cool. Let me share my screen again.

Okay, there we go.

Okay. So the first thing we need to do is we need to set up pom marium. So, like I was saying, uh, polymer is an identity aware proxy and there's many ways you can install it. I'm gonna go with a [00:34:00] Docker install just 'cause it's, uh, it's the quick way to do things, uh, especially for demo. If you were deploying this production, you know, maybe you just deploy it, uh, the Linux way or maybe you host this in Kubernetes.

But for the size, what we're doing and the fact that it's demo purposes, I think docker's a, a good option. So let's just open up, uh, cursor here for a second. Do I already have it open? Okay, there we go. Cool. And, uh, let's just go and close this close folder. Okay, cool. And let's make this big. Okay. And then I'm gonna go to my dev folder, and then we'll do, do I have streams?

No, I don't. Okay. Uh, let's see, what do we have here? Oh, it says work. Okay, let's do, make their streams. And let's go on there. And we'll just [00:35:00] call this, uh, make C-F-E-L-L-M demo. Okay. And then let's just go there. And then, um, let's make a composed at yaml.

And then let's just do a, we're gonna open up that folder. So we got this composed at yaml. I'm gonna go ahead and paste, oh, that's not what I wanted to paste it. Ah, I gotta rotate the token again. Uh, not that I think anybody's gonna hammer this, but uh, it's just better to, uh, make sure that the token isn't being used.

So lemme go ahead and rotate that again. I'll just do that off screen so we can keep my screen up. Okay. And let's go back here. Let's manage [00:36:00] clusters. Let's rotate token. Confirm. Okay, I got my new token. Just gimme a second here.

Okay, now let's go ahead and copy what I actually wanted to copy. So, uh, essentially in the composed yaml. I'm pacing in this, this is straight out of the PRUM zero docs. So we're basically loading up the Pum image. Uh, the latest version is do 2.8. We do have a new version coming out in, I believe, end of March, early April.

Not that that's not confirmed yet, but there is a new version coming out soon, I'll say. So essentially what this is gonna do is this is gonna run Permium. Uh, and so the way Permium runs is so like, uh, if you're a web dev, this is not something you put on like [00:37:00] Versal or Netlify. This is really if you're managing your own infrastructure.

So this is something you put at the network edge, so like it's literally in front of all your internal apps. And so. Basically this is gonna run in front and it's gonna proxy all the requests. So if I say go to, you know, like my, uh, my chat interface, it's always gonna go through Poer first. That's at your network's edge in your infrastructure, and then it will go into the internal app.

I'm on my local machine, so this is all just my local machine, but the same principle applies. Um, so, and some things to explain too. So if we, um, I'm gonna go ahead and put in the, uh, the actual token. 'cause I do need that. So let me take this off the screen for a sec.

And do, do, let's zoom that out [00:38:00] since nobody needs to see that right now. Uh, I just wanted to show the. Composed yaml 'cause that'll get that up and running. Um, but lemme go ahead and put the token in where Token, okay, perfect. Paste that in. Save w Okay, so let's go ahead and bring this back. Not exposing my token.

Okay. Let's zoom this in here. And so I'm in the C-F-E-L-L-M demo folder and we can see that I've got my composed ya mls so we can do docker, compose up, and we're gonna do dash D. So it just, it's not logging at all, is it? Oh D okay, so it's pulling down permium and it's gonna start running it. I'll give that a second.

Okay, so now if we run Docker PS we should see that polymer's running. We've also got open web UI running, so that's [00:39:00] great. So let's get rid of that for a second. And what we're gonna do is, and, and I'll explain this. So we have routes. So let's create a route, for example, let's do a new route. Uh, we're just gonna say a custom route.

We don't need a Kubernetes Jenkins or no JS one. And I'm gonna call this chat. This is just like a name to see for the route. This is not the actual route. And we'll call it, I don't know, uh, I don't know. Just for fun. We'll call it chat. Nikki t Okay. Oh, that's not the logo. Sorry. Logo is optional and so is the description.

Uh, but we're gonna say it's from. Chat, Nikki t and then you're gonna see here, it adds this, uh, the rest of the domain. This domain is what's associated to the cluster. Think of the cluster as just your whole setup. So this is the URL that we [00:40:00] can go to. And then basically we want it to hit the, um, open web UI locally.

So like, local host 3000 isn't gonna work. And like, I'm just gonna go ahead and save this and like, let's just try and go to it. Okay. It is gonna say forbidden. Uh, so there's a couple reasons here. One, uh, it's not me. So the policy's already taking effect and I'll explain what that means. So, uh, I'm logged in as me, uh, this is just my, it's my Pomar account.

Yeah. Okay. So we need to actually create a policy. So let's say let's create a new policy and then we'll just call this Nick only. I am gonna say it's optional. Enforce means it's applied all the time to all the routes. Uh, I'm just gonna do this, uh, at a more granular level. So I'm gonna add an allow block.

And so essentially this is kind of like [00:41:00] a, a policy query builder. So let's just say allow, so, um, I'm gonna say allow, I'm gonna click on the plus here and I'm gonna say, and domain is uh, poer.com. So let's save that policy. Or actually it's not Nick only, let's change it to email and we'll say nTaylor@poer.com.

I'm just gonna go ahead and check the chat real quick here 'cause I just realized I've been talking to myself. Hey Daniel, thanks for joining us. Uh, good to see you here. Thanks for joining us on YouTube. Okay, so I'm gonna create this policy. It's not applied anywhere, but this policy just says. Wherever this is applied, the policy is if the email is then tailor@merrim.com, which is my work email.

So now we're gonna come back to the route and we're gonna see, [00:42:00] uh, if we just edit this route's a section, I'll put a policy now. So like, if we go back, actually, uh, real quick, if I click on this right now, it just says forbidden and that's, and I'll zoom that in. Uh, and that's because I literally don't have access to this right now.

So let's go ahead and apply a policy to this route to, and let's say the policy is Nick only now, and I'm gonna say save route and I'm gonna click on this now. Okay. Uh, am I logged in as me? Let's see. User info. Oh, I haven't signed in yet. Maybe. Okay. Hold on a sec. User. Hold on a sec. Let me log out. I might have been logged into somebody else.

Okay, let's go ahead and

let's log in with my [00:43:00] work email. Okay, so you can see I'm logged in here. And if we look at, these are the claims. So this is what you'd see in the Jot, the Gwt. So you can see I'm nTaylor@erum.com. So let's go back to erum.com.

I'm already logged in. Okay, so let's come here. Let's just make sure I did the policy right. It is a demo, so you know, maybe something goes wrong. Email is nTaylor@prime.com. That's good. Okay. No, that's right. Okay. We need to add, oh, wait, I think we need to edit some things here. Edit. Uh, we need to General events?

No. Where is it? No. Oh, [00:44:00] I'm in the policy. So I meant to go to the route. So let's edit the route and general's good headers. We want to pass the identity headers, so let's save the route. So the identity headers are gonna add those claims, which are me. It should work now. It, it, it's still not gonna work. But what I mean is it should say, I'm not forbidden.

Okay. So this is good. So I'm authenticated now, like it's let, and, and it's, it's actually the policy is applying and letting me through. It's saying the web server is down because if we go to the route. And, and I did this on purpose, but um, we're trying to access local host and Cerium can't access local host.

It needs an IP or an address. So let me get my ip. So just one sec here.[00:45:00]

Okay. Why is that taking so long? Uh, what is, okay, so let me get an IP address. So this is my publicly available IP address. Uh, that should be it. And. We want Port 3000. Is that right? I think we might want the internal Actually I think we want the internal one, but let's try this. Yeah. Okay. Yeah, we do need the internal one.

So I need my IP from, uh, my internal network. So let me get that. I know there is a, uh, there is a command to get the IP address. I always just forget what it is and why can't I copy this? There we go. IP address. Okay, and let's go ahead and paste that in there. Okay. Save route. [00:46:00] Okay. What did, actually, let's test to make sure that I can access it through the ip.

So let's go here. Also a demo. So, you know, things don't always go as planned, but. So that's right, 3000. Okay. Let's just make sure.

Okay, let's save that route. Okay, so you can see here now, and I'm gonna paste this in the chat just to prove I'm not just talking outta my butt here. Um, I'm gonna go ahead and drop this in the chat, and if you're in the chat, just let me know if you can access that.

Uh, I'll give a, a second there. But, [00:47:00] um, you should be able to access this and then like, I can log in because I have my credentials and I'm logged in, so. Just to, to reiterate, this is, uh, I can't zoom it in, but this is the URL I'm going to. So this is a publicly exposed and secure URL now that is allowing me to access my, uh, chat and the LLM that's running on my local and I'M act, I'm able to access it securely through the internet.

So that's, that's pretty neat. I think we still have some configuration to do here, but, um, a couple things I do wanna mention though is, uh, Premar. Yeah. Okay. So you got the Permium login. That's great. Um, mark also, if, if you're cool with, uh, sharing your email address, mark or uh, an email address, I can create a policy to allow you [00:48:00] to access it and log in if you're cool with that.

If you're not, don't worry about it. Um, but, uh. Anyways. Um, so this is great. So again, just to reiterate, we've configured permium, uh, we're using Permium Zero. I'll explain what that is versus, uh, permium without Zero. Um, but basically we've secured this local running app, like so Assume like it's internal network.

App that has been secured and publicly available through the internet as long as you are able to log in and you pass all the context to find access, like based on the policies defined. So I think that's on its own. I think that's pretty neat. And this is, this is the thing I was saying about you automatically upgrade your security posture.

'cause like if I come back here, I'm logged in right now, but like there's no single sign on for open web ui. Like if I sign out and then I just go [00:49:00] to, uh, the chat URL, again, I'm not automatically logged into Open Web ui, although I am able to access the login page. So what we wanna do next is, um, we wanna be able to, there, there's a way we can configure open web ui, um, to allow it to.

To use the user that gets logged in through Permium to use that user as the user for Open Web ui. And then that will kind of give you that whole single sign-on flow. And even though this isn't like a, a work app or something, it, the, the, the premise still is the same. You have an internal app, it could be a legacy app.

It doesn't have single sign on and automatically putting permium in front of it just increase the security posture because all of a sudden you have single sign on. And then not only that, you can apply every, all your policies and security that you have [00:50:00] configured and Premier to apply to any internal app.

So I think that's pretty cool. And obviously I'm a bit biased 'cause I do work there now. But, uh, I honestly, one of the reasons why I joined the company was I thought this was a, a, a pretty cool solution. I. Okay, just gonna get some water here. Um, and yeah, no, that's cool. If you don't wanna share your email, uh, mark, don't worry about it.

But, uh, but Mark was able to get to, uh, the permium login. So, uh, and actually let's do that whole flow. So let's, let's go to, uh, let's see here. I gotta be able to log out. We're, we're gonna add another route, actually. Um, gimme one second here.

And I'll just take this off Jumbotron. Okay. Uh, I'm gonna go to another one just to make, yeah. So we're gonna create this verify endpoint and Yeah. Okay. It's just verify 8,000. I'll [00:51:00] explain what this is in a second. Uh, let's go to here and let's add a new route.

And we'll just call this verify and it's gonna go from verify. And again, it is just concatenating the uh. The wild card domain, I have conf that's associated with my cluster. Um, you can also use a custom domain, like you don't have to have these permium ones. I'm just using this because it's the, uh, a demo.

But there is a whole section where you could configure your own, uh, domain. Uh, and we're gonna say go to verify 8,000. And we're gonna save that. We're gonna add a policy to it too in a second. But essentially verify 8,000 is something that, uh, comes with the, uh, Docker composed file. And it's just gonna be a service that shows you what your credentials are.

And [00:52:00] out of the box, we're just using the built in identity provider, which is Premar, which is why Mark in Chat got the permium login. But you could configure this for other identity providers like Google, uh, GitHub, et cetera. Your your work one. So let's go ahead and save this route, and we're gonna go create another policy and let's create a new policy here.

And we'll just call this any authenticated user. And we're gonna add, uh, we're just, we don't even need to add on a allow box. We're a block. We're gonna say any authenticated user. And I'm gonna go ahead and save the policy. And then we're gonna go back to the routes. We're gonna edit the verify route, and we're gonna add that policy, any authenticated user.

And let's save that. And [00:53:00] let actually forgot to add headers. We wanna make sure that we're passing the identity headers. And the identity headers are what are in the jot, the GWT. So if we go to verify now. Okay, I'm gonna zoom in here. And so this is just a page where you can see some user information and it verifies that your identity was found and, and it's been verified.

So you can see here the claims I have in my Jot are, andTaylor@erum.com. It was issued by the verify service. And, uh, the, you know, there's a few other things in here, but, um, we can definitely see that this is me now. And so like, if anybody wants to go ahead and head to this URL, uh, I'll just drop it there.

You do have to sign up to Programum, so if you don't want to, that's cool. Don't worry about it. But basically, if you sign up and log in, you should be able to hit this page. Then if you do happen to sign [00:54:00] up, let me know. I can change the policy for the local chat so that anybody in the chat who wants to share their email can actually access the chat that's running on my local host.

Um, but again, that's, you don't have to if you don't want to. I just, I just thought it'd be cool to show somebody else being able to get in, but, um, cool. I'm gonna go ahead and hide that. Okay. So, uh, just wanted to explain a couple other things here. So we have two routes to find now. We have the verify route, which just shows you information about the user that's logged in for any authenticated user.

And then we have this chat route. And again, right now it's only allowing, uh, the policy is only if your email is nTaylor@rum.com, which is me. So, and I can access this if I click on it and I logged out before. So I'm gonna log back in and I'm back here. And. Uh, also I'll ask a question because like, uh, I just wanna show that [00:55:00] we're go accessing this through a public URL, and then I'm actually hitting stuff on my local host to ask a question and stuff.

So let's, I just picked one of the stock questions or prompts I should say. So deep seeks gonna answer. Deep seeks seems to be the one that runs the slowest for me on my local, but, um, llama 3.2 and Code Lama are pretty good. Anyways, this will answer in a second. I probably should have used the other one, but, um, anyways, we'll let that go.

But, um, while that's going on, uh, I wanna come back and talk about how this works. So the first thing is like, if you're hosting this on AWS or like Digital Ocean or wherever, uh, you know, uh. You have to be able to access Port 4, 4, 3, uh, to, because that's what, uh, Premar runs on. So on my, [00:56:00] like, on my local internet, uh, I've, I've opened up port 4, 4, 3, so that, uh, trafficking come in to my machine and, and get processed.

Um, the other thing to mention is, so like everything that is prum is actually running on your network's edge. Like right now, I'm logged into this product called, uh, PRUM Zero. Uh, and you might think that, okay, this, this must mean that Permium is running in the cloud, and that's not the case. What's happening here is, uh, what PERMIUM Zero is, is it's um, it's what's called a managed control plane.

So like you're able to use. Uh, a user interface in the cloud, like hosted by prem here, where you can create your routes, your policies, and whatever other configuration you you wanna do, uh, whether that's like adding custom certificates, custom domain name, et cetera. [00:57:00] But once you make these changes, what happens is Permium actually applies all those changes and they get cashed on your network's edge.

So like this is, think of this as just as a tool to configure it, but all that configuration actually ends up on your network's edge. And this is important because like, uh, you might be asking yourself like, if everything's going through permium, like, doesn't that make it super slow? And the answer is no.

And uh, you know, there is a little hit of latency, but it's like, honestly like negligible. So, because Permium iss running at your network edge. It's literally right beside where all your apps are. So, and the fact that all that configuration that we have here, like the routes and the policies I created, that those get cached at the network edge as well.

That means that there's nothing going back to [00:58:00] permium.com to check configuration and stuff. What's happening is people hit your traffic. So they would go to chat Nikki t that hits my network's edge. The network edge goes, okay, are you logged in? Yes or no? That will redirect you to an identity provider.

The identity provider might not be in a. Part of your internal network. That could be like a Google or GitHub. So that is somewhere else. But regardless, uh, you do your login, but then after that, all your policy checks and your routes, that's all running on your network edge. So the policy gets checked there and anytime you change a policy, it's gonna apply it and cache it immediately on your network's edge.

And that's why it's able to run fast, because it's literally go to some URL, hit your network's Edge. Permium is there. Oops. Dismiss. Um, not sure what I had blocked. I think that's my lunch. Um, and so it hits the network edge. [00:59:00] Assuming you're logged in at this point, then it checks the policies, the policy checks are all like local in the sense that it's literally right at your NEXTWork edge, so that that check is super fast and then it, if you're allowed in, you go to your internal app, which is in the same network.

So that's why it's fast. Um, so that's, that's kind of that in a nutshell. And I don't know if this ever answered or not. Uh, not there. Okay. Maybe something died with my deep seek, but, um, anyways, um, okay, so let's go back. I'm gonna close a few things here.

Uh, let's close this. So again, we're able to access it if I go here and then I hit the interface and boom, we're in business. Let's try, I'm just curious. Just try, uh, let's do code Lama latest, gimme ideas. Sure. I feel like that one's gonna [01:00:00] answer quicker, but anyways, or maybe I broke something. But, uh, regardless, we don't, we don't really care about this part right now.

What we wanna do is we wanna finish securing this. So if we come back to the self-hosting docs for, uh, securing an LLM, I'm gonna drop that in the chat again. N

let's go ahead and show that. Cool. So we did everything there. And if, I'm just curious if, if anybody's, if it's unclear to people, uh, what zero is and if it's, you know. And that you know, that it's not clear that it's not running in the cloud. Once you've configured things, let me know. But I think I explained that clearly.

If you're not using something, if you're not using rum zero, you can still do all that config. It's just you would be doing that in a YAML file instead. So, which you can totally do like in, and the complete open source offering [01:01:00] is that's how you do it. Uh, but Xero is like a really great way to get up and running really quick.

And this is great for, it's not just great for hobbyists, like, uh, like as an individual you can just go ahead and set up your own internal network and secure it this way. But even, even if you're a company, this is a great way to go ahead and secure things. And, um, anyways, so. We configured permium. So this is going through creating the route.

Uh, they set it up for anyone, but, uh, I just want it to be for me right now, but I can add it to like, you could basically say the entire domain of permium.com could access it. Um, okay, so this is just going through the routes and the policy configuration. Oh, I think this is why the, the chat wasn't working.

Maybe I need to allow web sockets. That's a step I missed. I guess. Let's go back here. Let's edit This's. Uh, [01:02:00] where is that?

Allow web sockets, save route. Cool. All right. Um, helps to read the ducks. So, okay. We've configured that, um, and we already did this. We've passed the identity headers, and this is so you can get those. Those claims that we saw at Verify. Uh, actually lemme go to the route again 'cause I have, I've had a few demos here.

So routes, if we go to the verify, that's just, this is the header here. It's, it's looking for, okay. Let's get back to the docs here. So, like I was saying. You increase your security posture for like, say, legacy apps or any apps you have, but there's this disconnect right now. Like there's the single sign-on that happens through the identity provider and the identity wear proxy, which is pre merrim, but your internal app might not have single sign-on enabled.[01:03:00]

Um, so that's something you can configure or like migrate to after. Uh, so like it just knows when those claims come in to, you know, uh, basically take the claims from the single sign-on that happens through the identity provider. Uh, that's wired up to Pomar. But uh, in the case of a, uh, open web ui, you can actually use, uh, some claims.

So. What we need to do here is we basically want to create a JWT claims header. We're just gonna call it X dash permium dash claim dash email, and the value's gonna be an email, and then we're gonna configure open web UI to actually allow your login to happen based on this Poer claim email. So let's just make sure I'm not missing anything here.

So, uh, let me, I gotta zoom out for a second here just to make sure. I just wanna make sure I didn't [01:04:00] miss anything. X dash poer. Okay. Yeah, so we, yeah, exactly. So we wanna pass the identity headers to the upstream app, which is Open Web ui, in this case, letting it personalize experience without a separate login.

That's, that's definitely what we want to get rid of. We want, we wanna avoid that double login even though you're secured into the second login. All right. Uh, there. Okay. So. Uh, is this in, where is this? Like in settings? Okay. Yeah, claims map. Okay, so we're gonna call it this. Let me just go ahead and use capture text.

OCR if, if you haven't used Clean Shot, I think it's only for Mac. It's really good at copying text. So let's go to settings and where was it? Headers, past identity headers. We wanna enable that and we wanna add [01:05:00] this new claim. And the value is gonna be the email. Let's just double check. Alright there.

Um, okay, that looks good. Okay, let's go ahead and save that. Add property. Let's save settings. Then, okay, let's continue on here. And so now we just need to, uh, change how we run. Um, open Web ui. We need to pass in web UI off false. So this is a setting of, this is an Aerium specific thing. This is, uh, something specific to open web ui.

So we can say, allow us to trust who the person is by receiving this claim, which is the x dash claims dash, uh, premier email, this guy here. [01:06:00] Cool. And I'll zoom that back in. So we've got all that. Um, so we need to basically add these two things here and web ui URL. Okay. So let's go and go back to here.

All right, so we've got open web UI running already. So if we do open, so I've gotta run this, but I gotta pass in. It's gonna say it's already running. That's fine. Uh, so I'm just gonna actually ask how I pass it in. So let's just go to, actually, I could probably go to local host 3000. Um, [01:07:00] how do I pass environment variables to,

and let's go ahead and use Code Lama. I'm just on the local host right now. Um.

I could do a Dov, or, let me zoom this out for a second, because the way, the way my, uh, CEO set this up, it's different. He has open web UI directly there. So, uh, I'm just doing it a different way 'cause I use the Docker setup. Um, gimme one second here. Let's go ahead and take that down.

Uh, where [01:08:00] did that answer go?

Oh, that's not what I wanted to do. Uh, did I just close? Oh, it's down here. Yeah. Okay. Docker on This will set the, okay. So we could pass the dash e NV file. Okay, we could do that NFU bar to load or we could do this. Okay. Path to file. Okay. So let's try that. Okay. So let's go back to cursor and let's just do, um, cursor nv, or let's actually touch NV

ls. We've got Why did it not? Oh, 'cause it's [01:09:00] invisible. Yeah. Okay, so it, let's do cursor nv. Okay. And then let's go get those two variables that were over here.

And just come back here

and this should just be,

I think that should be okay.

Looks good. False. Okay. And then we want to stop that container. So let's go back to Ghosty Docker. PS Docker, stop. Okay. And let's see, Docker [01:10:00] PS Okay, so open web UI isn't running now, which is what we were expecting. And then let's just do, uh, Docker. Okay. And then we wanna add the rest there, which was, uh, blah blah.

Yeah, there.

And then we need to get the exact path. So let's do slash users and then we can do dev streams, cfe dot env. Okay. Let's see if that works.

Okay, so let's see here. This is me, just, uh, I'm still, I, I use Docker for basic stuff, but, uh, [01:11:00] clearly I gotta check something. It's still being used somewhere else. So hold on a second here. I'll let that fail again. Docker ps uh,

okay, I know I have to delete it. Um, the container name open is used by container, blah, blah, blah. You have to remove, or a name that container. I'm just gonna go add this to chat

'cause this is what I would do in real life, so I restart it. It, but get this error. I know. I just don't know the syntax to, uh, delete it.

Code lama don't let me down. Oh, I killed it. I stopped it. This, I'm gonna have to ask [01:12:00] Claude. Hold on a sec. Uh,

okay. Uh, let's copy this. Let's go to Claude.

Uh, get this error.

I basically just need the command to say how do I kill it? So, yeah. Okay. I knew it was rm. I didn't know if I had to use the container id. And then that's, it's saying force it as well, maybe. Okay. No container. That's fine. I think we're good now. Failed. OCI runtime failed to create, enables start container process to file not found.

Okay. That's better than, okay. That worked, I think. But I get, uh, [01:13:00] file not found for the ENV file, even though the path is right.

Okay, so not your Yeah, it's, it's not the host. Yeah. So I've gotta map it, I think. Oh, okay. Pwd, Dov sharp, let's try that.

Well, that isn't really right. And then mounting environment file.

Okay, I just need to change it there and okay, let's copy that. Okay, let's try this now. Clear. Just 'cause it's, gotta map it internally to conflict. Okay. Yeah. Now we gotta [01:14:00] do the Docker rm. This is not PAM stuff at this point. This is just me. Uh, okay. Struggling with Docker. Okay. Uh, let's go ahead and run that.

Okay, so now it's running open web UI back. Okay, now let's see if this all works. Now. So we've set the Permium claim email and we've got our routes still. So if we go to the verify, we still got email, that's skid. Let's try this. Okay. You don't have permissions to access the resource. Please contact your administrator.

Okay. Maybe I skipped something. Let's see here. Let's check,

uh, name, open web ui. [01:15:00] Uh, I'm just gonna make sure that this should be fine for the env. Is this format in the NV file correct? I'm not, never actually sure when you need quotes and when you don't. 'cause I remember when I worked at dev two, we had strings that didn't have quotes, and sometimes we did. So I'm just seeing what it's gonna tell me.

Yes, the format is correct. Okay.

There are no spaces, this format should work properly. Okay. So that should be good. Uh oh. Maybe it's the backend data folder. I'll delete that. Uh, let's see here. Slash app, backend data. No, that all looks good. Okay. Yeah, [01:16:00] that's already running. That I get, let's go to, if I go to local host 3000 now this should fail.

Yeah, that is normal. 'cause I can't log in the normal way anymore.

And let's just try this way again.

Let's go here. Okay, so we're still accessing it. I think I just have misconfigured something in open web ui. Maybe I. Oh, I need the web ui. URL maybe. Let's try that.

Uh, that's not the URL. We want this URL, which is here.

And let's go [01:17:00] ahead and got in the weeds there and forgot about chat. All right. Okay. Cool. That's all good. All right. Okay, let's go ahead and save that. And let's come back here to Ghostie and Docker rm and then Docker. Let's run it again. Okay. Docker ps Let's see if that does it. You don't have permission to access the resource.

Okay, so clearly something I've misconfigured, this is not, uh, at the, maybe I forgot something in the permium config. Let me just see here. Let's pull this out and let's just make sure I'm reading the docs properly. I'm gonna zoom the docs out just so I can actually read it all. [01:18:00] I know people won't be able to read the thing on the left for the moment, but, uh, I just want to make sure I got everything right here.

So, and just to be clear, we've already configured Premar and we saw that we were able to, uh, protect the, uh. The chat UI through Permium and we set a policy and we saw that working. What we're doing right now is we're just trying to configure Open Web UI to receive that X permium claim, email, uh, claim to treat that as the login.

So I just wanna make sure I, I probably missed a step. It's probably me. So, um, okay. So yeah, we're running that. We've configured Premier Zero access, the URLs, the LM through URL. We've got zero set up. Okay. We've got that. Um, yeah, that's [01:19:00] cool. And the zero console go to routes, new route. Yeah, we've done that.

Um, ba ba ba. Let's just go edit. I know it's different. I'm using 3000. They're using, um, they're using the internal URL in, uh, in docker there, in the compose file. But that doesn't really change much, although I should probably switch to that. Um, okay. We've enabled web sockets, let me just say this route again.

And if we go to settings, uh, under timeouts, or let me just bring this here. Uh, timeouts. [01:20:00] Timeouts. Where was the timeouts? Oh, that's under the route. Yeah, sorry. So if we just, uh, I'll double check that, but we'd already set the. Allow web sockets is not save route. Why did that not apply? Did I maybe change it on the wrong route?

Oh, I enabled it on the wrong route. Save route. Okay, there's that. Okay, let's just see if that is what it was. No, that's not, I didn't think that would be what it is, but um, okay. Now we want to preserve the host header and pass identity. Oh, that's what I missed. Sorry. So if we come back to headers, we did pass identities, but I forgot to preserve it.

Save rep now. Let's try it. Okay. That's not it. We'll go [01:21:00] through all the things just to make sure. Um, edit headers, pass identity headers. Pass, preserve, host header. That's good. Uh, nothing else in there. And pass. Yeah, those two are on. Okay. And then this is under settings now. So like if we come here.

Okay. Uh,

settings. Identity provider. Yeah. Uh, getting, uh, mentioning about the identity provider. We're using the host data authenticate. That's why you log in through Permium, but you can configure your own here if you wanted to. All right. So let's just go. We wanna pass identity headers, X dash [01:22:00] permium dash claim dash email, email.

Uh, that all looks good with these settings. Open web UI, trust the identity header, and can attribute actions to the authenticated user. I'm just gonna

save that again. Okay. That's all good. Okay. And then

I guess I could, let's see here. Web ui. Oh, maybe do I, do I need to specify the Alama host? No, I don't think so. Backend data. Okay. Run and access test. The LLM.[01:23:00]

Let's see. You know what, I'll just copy all these things to the env.

Actually just need those, I'm sure these are fine already, but let's just go ahead and put all the settings they had. Okay. Chat, uh, permium claim, email. False. Yeah.

And we'll say equals.

And if this doesn't work, I'm not too stressed out about it. Uh, we, we've already shown that you can secure it with Premar. I'm just. Generally curious why that wasn't kicking in. So then we're gonna, okay. Yeah, I [01:24:00] think that should be it. So let's go ahead and do Docker. RM

Docker, not f uh, although that's funny. Movie meet the Fs, but, uh, Docker. PS we got Prime Premier.

Okay. That's all good. And then let's just do our docker again. So we're gonna, we've got the backend data. We've got my DO NV is, uh, pointing to App env and the name is Open Web ui GRC. Okay. That all looks good. Uh, I'm just gonna ask Claude again one question. Is this right? Um, [01:25:00] I get to the open web UI interface, but it says I do not have access.

I have a feeling the ENV might not be being passed. Let's just see here.

Uh, right, I'm just here. I can bring this over. Actually. This is just what I'm reading.

All right. Try mounting the backend directory. Let's try a few approaches. Backend data.

Use the direct [01:26:00] environment availables. Okay, I see. Yeah, let's just do, yeah, let's do it that way because I have a feeling it's just something silly. Actually, let's just go ahead and just copy this. Okay. Clear Docker ps Okay, let's run this. Okay, it's running. Alright, we've got open web UI running. Fingers crossed.

Now let's just close this. Uh, let's come back here. Let's go to the route.

Okay. I'm not sure why it's not getting it and I'm not sure if we can see here. I'm gonna check the logs. Hold on a sec.

Routes policies. So reports, traffic, [01:27:00] uh, status deployments, settings four minutes ago. That's checks out. Um, let's see here. What else could it be? Gimme one sec. Gonna check my slack.

Okay. Nothing there. All right, cool. Um, trying to think what else. It could be edit. I still need the policy, but let, let's just see. Oh, I wonder if it's the policy. Maybe. Let's see, because like I initially set that up for my, I. Uh, for my email, own email only. So maybe I missed something about the policy.

Let's just see. Okay. Create a policy, uh, name it LLM access. Add an allow [01:28:00] condition domain equals. Okay. So it's just saying anybody from premier.com. Uh, that looks good. Web sockets is enabled. All right. So the policy, yeah. Okay. That shouldn't change anything. I'll, I'll, I'll change it to go with what's in the tutorial, but uh, I'm pretty sure that's not gonna change anything i's go to policies and let's go create a new policy.

Any Pomeranian? Uh, no, we are not dogs. Okay. Uh, let's just do this and domain is prum.com. Save that policy. I really don't think this is gonna change anything, but, uh, since it [01:29:00] is a tutorial on that page, I will go ahead and try that, but I don't see why that would change anything. Let's get rid of this policy and let's put the, any pomeranians savor out and, okay, there's something else that's going on, so I'm not sure what, but.

I'll figure that out. But we're, we've been going for like an hour and a half, but I just want to recap. Uh, so this part here isn't, uh, it doesn't appear to be a, uh, pum issue. I think for some reason, I don't think it's picking up my config for open web UI that made the changes to allow that claim email.

But, uh, but let's just kind of cover what we did. So we went through, uh, I showed you what Ulama was. Uh, you can download that, you can run that on your local machine. You can use it in the terminal. You can [01:30:00] also access it via API. And then we looked at open web ui, which is an open source chat interface that you can wire up to models via o lama, or you could use remote ones too.

We only went with local models and then we set up prum. So Prum is, uh, zero trust, security, uh. Offering And, uh, the core of it is an identity aware proxy. So basically everything goes through POER to access your internal apps and that identity aware proxy is connected to an identity provider. So like if you need to log in, whether that's through GitHub, Google, or your own, uh, works identity provider.

And you can also configure routes and policies like we saw. So we access the internal chat by going to chat Nikki t United Bluebird 5 1 2 5 Doer Map. Uh, we set some policy, so I initially set it to only allow me to access it. [01:31:00] Uh, I made it a little more broad at the end by allowing anybody with a premar.com email and then basically, uh, p.

Sits at your network's edge. So we were using Poer zero, which is a way to configure your, what's called the control plane. Um, and basically when you make your changes there, those policies get applied and cached at the network edge where Poer is running. So that's why it's fast. Nothing is ever running in the cloud aside from the site to do your configuration.

But it, like I said, it gets cached at your network's edge. And then when things try to access your internal apps, it always goes through Promar. And as long as you're logged in and you're, you have the right context, you can access the thing you're trying to access. And that's pretty much it. Um, I'm pretty sure this last bit here where I was trying to just get rid of the login in, [01:32:00] um, open Web UIs, just it's demo time and, you know, things go wrong sometimes, but, but we still secured it with Permium.

So anyways, I hope you found that, uh. Interesting. Uh, I'm basically configuring my local network with Premar partially 'cause I work there to dog food it, but also it actually is a really good solution. So hopefully you found that helpful. And uh, thanks again for hanging, um, next month 'cause we do these every month.

Um, we've been doing a couple episodes on Tant Stack start. I think we're gonna continue on Tant Stack start. There's been a lot of of demand and like people were pretty engaged with it. Uh, I'm gonna see if I can get somebody from the team on Tanner's. Been in the chat pretty much every time we've done it.

Who knows, maybe I could get Tanner to hang with me if folks find that interesting. Uh, I can reach out to 'em. Um, and yeah, that's probably what we'll be looking at next month. So that'll probably be, [01:33:00] it'll probably be like April, mid-April when we do the next one. So anyways, thanks everybody for hanging and we'll see you in the next one.