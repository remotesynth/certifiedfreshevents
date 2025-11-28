---
_build:
  list: false
  render: never
---

**Nireka Dalwadi:** [00:00:00] Um, so, so, so glad to be here. I'm Ika very excited to be here, be talking about how to make, uh, your life a little easier when it comes to building real time audio and video workloads. Um, so let's start by. Understanding where, uh, real time audio and video is, right. It's, it's across every place. Real time communication is everywhere.

It powers your video calls, like FaceTime, this zoom meeting your telehealth sessions. It begins, uh, with broadcast and interactive entertainment, like online classes, gaming sessions, or TikTok, live shopping, everything. Um, it's also. A lot of people miss this, but it's also the same technology that, uh, powers your devices like [00:01:00] security camera, uh, baby monitors, drones, and even voice assistance, right?

Um, realtime tech is essentially what makes these responses instant responsive across any platform, across any device, across multiple, uh, industries, right? Um, so what is real time? Right? It's basically, uh, delivering information like audio and video as it happens with virtually no noticeable delay. The goal is to make the experience as natural and immediate as a face-to-face conversation, uh, when you want that to happen.

Uh. There are certain defining traits that you have to look for when, uh, looking for a real time solution. One is low latency for us humans. Any information that you receive in, uh, under 10, in hundred, 250 millisecond range feels like it's been received in real time. So any latency below this, uh, threshold is perceived by us as real time.

Um, second is intelligent [00:02:00] media handling, uh, in an ideal real time solution. You would, uh, also look for Intel intelligent media handling to effectively route and manage the streams to make sure that, uh, the routing essentially happens, right? Um, and finally, network resilience. A good real-time experience must adapt on the fly to network issues like bandwidth, jitter, uh, packet loss, et cetera.

Uh, this is to ensure that the smooth experience persists even on, uh, shaky connections. Now, how did we, how did we get to, uh, real time becoming the baseline where everything is instant? And you would need, uh, responses as soon as possible in, in a hundred, under a hundred milliseconds. Um, back in 1990s, uh, communication was mostly async, where e we all survived on emails.

Emails went out, replies came days later, and instant replies weren't expected. A part of me also feels that I want that back, but anyways, I, I'll put my flight [00:03:00] mode on when that happens. Uh, in two thousands things picked up, uh, messaging apps, smartphones, and affordable internet made real time. Um, uh, text the norm.

Now this text then became, uh, this, this text then, uh, moved to more richer formats like audio and video driven by platforms like Snapchat and Instagram. And then the pandemic hit not too long ago, and this was the turning point. Suddenly realtime communication became essential from work to school to just staying connected with your friends and family.

Realtime audio video communication was everywhere. And now we've entered a new era where realtime powers the next generation of experiences from AI assistance and voice agents to immersive, uh, uh, augmented reality experiences and multimodal inferences in this world. Real time isn't optional, it's kind of expected.

And, um, [00:04:00] the users demand life feedback, intelligent and intelligence and presence directly built into every interaction. So let's see what goes on behind the scenes when you're building, uh, experiences like these from scratch. So if you're building a real time app from scratch, where all the components, uh, you, here are all the components that you'll have to take care of.

Starting, uh, with the protocol of FE RTZ, which is usually considered the backbone of, uh, realtime communication. And, uh, it also, uh, works with, uh, web sockets, which is the signaling that powers the communication, uh, set of the realtime experience to power the communication. You would also need infrastructure that supports it.

That's the SFU intern. We, we will come to that in a bit. And then ensure it, ensuring that it is usable on user side, which involves handling, uh, client side logic. And [00:05:00] most probably if you're building all of this, you would also want to add media capabilities like recording, transcription and making user, making it user friendly with, uh, very, very, very good ui.

So when you start building this from scratch, um, this is what it looks like, right? As if this wasn't scary enough. Imagine you have to add basic features like chatter regarding which ideally you would. Um, this becomes the headache that you'll have to deal with, which, uh, brings us to the roadblocks that you have to overcome when you're building a real time app.

So first, if you're building anything from scratch on real time, uh, on for real time applications, uh, that's the architecture that you have to look for. And most likely this is what you'll bump into. This is what developers usually bump into. Number one, developing and maintaining the infrastructure from scratch.[00:06:00]

This would require, um, web RTC expertise and will cost you both time and resources to ensure that SFU and turn and Signaling network, uh, is, is established correctly. You understand you have the deep, complex expertise to understand how it works. Then once you have the infrastructure ready, it's time to scale while managing the latency.

And for anyone who's attempted to, uh, work with Web R in the past knows that web rtc, web RTC is notorious for edge cases, especially as you scale. Um, now to be able to solve these edge cases, uh, getting performance insights is also required. So Web RTC offers little to no visibility into what's going on under the hood.

Um, so that's something that we'll also have to solve for. Now the next hurdle would be establishing secure connection. When you add tools and services to make experiences richer, [00:07:00] let's say for example, transcription or recording capabilities, the security aspect comes in because with every added layer of interaction that you add, it creates a potential entry point for bad actors.

So that gets you, you'll have to deal with security gaps as well. Then comes customizing immersive experiences because why are we building it if it's not as, uh, pretty and easy to use? Right? So finally customizing the, uh, immersive experiences. Now, when you're trying to do that, most platforms, uh, today usually lock you into a rigid template.

And if you want to not stick with that and build something on your own, um, beyond whatever the standard offering is, you would end up building everything from scratch and, uh. How do you solve for this? And that's where CloudFare real time comes in.

CloudFlare real Time is a complete toolkit to help you build and scale any audio, [00:08:00] video, real time experience with different levels of abstraction. It allows you to select the precise level of control you need. So from foundational infrastructure, primitives like SFU, and on to fully managed end-to-end services, like real-time kit and stream.

We will talk about them a little bit more in detail. So yeah, here it is. So let's break down all the four core building blocks of realtime, the realtime kit, SFU turn stream, each serving a different use case and requires a different, uh, sort of engineering effort. Now real time kit is a plug and play, SDK for mobile and web.

You developers usually use it when you want to build something fast without diving into the web party. Integrities, it's high level, minimal setup and great for quick time to market. Whereas SFU helps you scale multi-party calls effectively. It routes media smartly to optimize performance. You'll need more [00:09:00] engineering effort, but it gives you, uh, more control and scalability.

Uh, whereas turn, turn also ensures turn is also a low level, uh, product requiring, requiring low engineering effort. But, uh, you would ideally need turn when you're building, uh, whereby your real time applications from scratch, not it's, uh, not something otherwise. So turn ensures connectivity when peer-to-peer connection feels like, for example, if someone is behind a firewall or not, it, uh, it's essentially as a fallback to something you build on, but critical it's, it's sort of critical for reliability.

And Stream Clouds Stream is a managed platform that abstracts with the complexity of video on demand and livestream delivery. It's designed for developers who need to incorporate video without becoming video engineers. That's basically, uh, what Stream and Realtime Kit does. It's, those are our managed solutions.

Let's talk a little bit more about SFU. [00:10:00] SFU plays a critical role in managing the web RTC connections. It's called the Select forwarding, uh, unit. Uh, the way it does is by selectively forwarding media streams to participants in a serverless setup. However, due to the centralized nature of SFU, it introduces inherent limitations like managing regional dependencies or handling scalability concerns, and it sort of only gets more and more complex as you scale.

Unlike traditional SFUs, the CloudFlare SFU operates on a global scale without regional constraints. The way we are able to do that is by leveraging Cloudflare's, any cast network that spans across 3 35 locations, and it helps us ensure low latency forward, a low latency forwarding globally, making it far more efficient than the traditional SFUs.

Uh, let's talk about turn now. When direct peer to peer [00:11:00] connection fail, usually due to Nats or firewall, a turn usually steps in. It relays traffic through middleman server to maintain connectivity. A typical turn introduces additional latency since it's a relay, right? So relay needs to be geographically close to the peer to ensure that latency is as minimal as possible.

But because it's a relay, uh, these relays are usually on unicast. It makes them vulnerable to DDoS attacks. Cloud return, however, ensures packet that the packets are routed to the nearest service automatically via the Anycast network, minimizing the latency while ensuring privacy and protection. Now, we spoke about SFU, we spoke about turn, let's talk about the time kit.

Right? Um, so SFU basically is. It's the brain of the realtime, uh, infrastructure, right? [00:12:00] It's the server architecture that effectively, uh, manages realtime kit, uh, realtime media streams in multi-party video calls and turn. It acts as a relay, which ensures reliable connection for participants. But even after, um, these managed services, when you're building things from scratch, you would end up bumping into some speed breaker.

And the way we are able, uh, the way we sort of solve for that is through realtime kit. So realtime kit is sits on top of SFU and turn CloudFlare, SFU and turn, and it has two components, core, S, t, K, and UI kit. Let me actually walk you through that.

I hope my screen is visible[00:13:00]

and I'm gonna take this as a yes. Alright, so yes. Um. Real time Kit, like I mentioned, has two components, core and UI kit. Uh, we offer SDKs for both mobile and web. On web. We offer SDK for, uh, all major JavaScript frameworks and we support all JavaScript frameworks and React. And for mobile, we have, uh, all for major frameworks, which is React Native, flutter, and right.

And iOS. Um, now Core, uh, now Core, SDK. Uh, now the core SDK is the client library that provides a business logic of real time feature. It's a data only library that handles the complex media and networking basis that we spoke about, whereas real time kit, uh, whereas the UI kit, my bad, uh, is a library of prebuilt components.

Which is customizable with customizable UI [00:14:00] components that sit on top of the core SDK. It provides the fastest and the simplest way to integrate a complete video and voice call interface into an application. Let me show you how we can actually do that. So the way, so building something with a UI kit is as simple as installing the SDK initializing the meeting and starting the meeting.

Which is basically using the real time kit component, right? And now this parent level component essentially gives you this entire meeting experience out of the box. I can play around with this in the meeting to show you how the tile would react. Yep. I have already given permission to, uh, the audio and video, so it's not asking again, but if I hadn't, it would've.

So this single line of code essentially. Uh, this single integration component gives you the entire experience after the box. And besides all of this, it's extremely [00:15:00] responsive. So, for instance, let me do six 20, sorry. Yeah, so it's entirely responsive, so you can use, uh, UI components to, uh, get everything up and running very quickly.

The upside here is that, okay, let me actually close this. Yeah. So the upside here is that you get the client side, SDK client side UI library, where everything is taken care of. We handle UI components, edge cases, and the devices sizing for you. But where it gets even better is that you can actually strip out these individual components.

You can strip out all of these individual components. For example, if you're bo uh, building a voice interaction where you don't need video, just voice, you probably just want the visualizer. In that case, you can simply use the visualizer component. [00:16:00] We let you pick and choose these individual components from this entire gallery.

And club them with your own. So for instance, you might want to use your own grid, uh, but you want to use our bottom bar. You can do that too. And it's all context aware. Now you might ask why not use a basic out of the box UI library that gives meeting components, right. Well, you still need to do the entire state management in that case.

When we talk about making this easier, one part is a server side, uh, complexity around web RTC that we spoke about, that, uh, diagram and then scaling peer to peer pro protocol using SFU. The other part. Uh, with the UI kit that we solve for is the, uh, client side. Now, how you handle, uh, device management, active speakers, or state management, when the user drops and rejoins our client side, SDK takes care of that.

[00:17:00] Versus in a traditional setup, uh, with an audio visualizer, you'll have to put a listener on the indicator and update the state locally every time the user mutes. Now, today with Real Time Kit, you can do that just by passing the participant, uh, reference something like this here, right? And it listens to the entire state.

And you can do this for all the components that's available. Now, if you love the simplicity, uh, of, uh, the core SDK, but you don't like our, uh, UI as much, in that case, you can just use the core SDK. So yeah, in that case you can just deal the code. SDK. So it's again, as simple as installing the SDK initializing, the SDK, and the meeting join call, and behind the scenes, simple call does a bunch [00:18:00] of things, getting the user track, setting up the right code deck.

Publishing the SFU and subscribing to the other participant tracks. All of this is abstracted away into a simple call. Now, once you sign up, let me show you, uh, what you also go through. So this is the dashboard, the real time dashboard.

Yeah. So you also get the matrix we spoke about, uh, when you build on web, when you build on top of web artist directly, you'll have to. Take care of the analytics and you don't have enough visibility. That's something that we solve for too. And the way we do that is by call stats. When you log into the dashboard, uh, you have matrix, you get real-time matrix into usage.

Total sessions, total minutes recorded, and transcripts. And one of the key things that we also offer is something called presets Here.[00:19:00]

Now presets are the easiest way to configure the ui, ux, and the permission for each user. Think of it as a reusable config. A preset is. Yeah, A preset is a template that defines the participant's role, permission, and UI experience within the session. Beyond controlling the permissions for actions like producing video and audio, uh, sharing screen, creating polls, uh, allowing use, uh, allowing you to customize how the look and feel would be under on the branding, you can make it, uh, uh, along the lines of your, uh, brand language.

Uh, basically presets help you define on the fly what each user's experience would be. So let's say for example, if you are doing ed tech session, you would want the teacher to have the ability to. Um, share audio, share video, share your screen for the students. You would just want to get, uh, give them the [00:20:00] ability to, um, share the audio, whereas you would have a teaching assistants, for instance, who would have the ability to kick participants out as well.

So you can pick and choose what permissions each, uh, audience or each participant would get. So yeah, that's a real time kit for you. And let's say for example, if you want to. Uh, share If you want to stream this to a broader audience, uh, you would also be able to do that with Stream, which is Cloud Fres Stream and realtime Kit integrates very seamlessly with Cloud Fres teams in case you want to, uh, stream to a much, much, much larger audience.

Coming back to the slides.

If you are not convinced yet, uh, about building on CloudFlare, let me. [00:21:00] Talk to you a little bit more about all the other capabilities and why it might be a good idea to build on CloudFlare. Uh, with CloudFlare realtime, you get low latency at scale, which is under fully, uh, 50 milliseconds globally. We spoke about earlier that anything under a hundred milliseconds is what humans consider realtime.

Uh, CloudFlare can give you under 50 milliseconds, which is real time guarantee. And, um. Audio, real time audio video as a service because you get managed platforms and you with the flexibility of adding media capabilities, customizing, uh, and using customizing with pre-built UI components and or using your com uh, custom components as you want.

And finally, and, and you get, uh, observability, um. The real time call stats you can access through the dashboard like we just saw all through APIs to easily spot AI issues like latency pack laws and diva faster. [00:22:00] And, uh, it's, it's extremely easy to integrate ai. You can build custom AI functionalities on top of a media streams.

You can connect to LMS running directly on CloudFlare, or use AI Gateway to integrate with popular providers.

Now you've heard men us mention about CloudFlare Anycast network and here's why it matters. It's the backbone of the realtime, uh, infrastructure built on built to deliver the realtime audio video in under 15 milliseconds. We often managed turn SFU realtime STK, so you can build real time apps fast without worrying about scaling, routing or performance.

With CloudFlare network, uh, it's not just that the users stay connected worldwide, it's that they stay in sync in real time and no matter where they are across the region, earth. Now, what can you build with, uh, CloudFlare real time right [00:23:00] out of everything that we spoke about? Uh. Voice agents is emerging as one of the most popular use cases, and to make it even easier to build voice, ai, or voice agents, we bring to you some of the best speech models like Deep Graham that you can use to transcribe your audio process it, uh, using model host, hosted on workers AI or proxy via AI gateway and orchestrate everything on real time agents.

Apart from voice agents, you can build so many other use cases like immersive gaming, building, meeting agents, proctoring app, live shopping, and so, so, so much more. And whatever you want to build, we've got your back. CloudFlare, uh, provides you the building blocks to help you develop full stack applications with our developer platform.

And I'm gonna leave you with one small stat. Uh. It's fun and it's true. Uh, one of the top, uh, [00:24:00] 10 messaging services in the app store recently left a large hyperscaler for CloudFlare saving one and is already saving $1 million and seeing significant performance improvement while eliminating their, uh, developer overhead DevOps overhead.

So, yeah, that's it from me. Thank you.

**Sean C Davis:** Uh, my, my mind is spinning with, uh, so many different ideas and wanting to really dig in and, and, uh, learn more. It's, it's, it's, it's really exciting. So folks out there in the audience, if you have any questions, uh, add 'em to the chat and YouTube and, um, and I can pass them on here. Now I have a few, um, that, that I was thinking of while you were giving that presentation.

And, and one of the first things that came to mind was wanting to learn a little bit more. About the backend. So if you're trying to, um, you know, if you're, you're storing or changing data in real time, um, you've made those connections. Like do you, are you bringing your own backend or are there [00:25:00] various services that CloudFlare is also providing you that kind of helps that store that data, whether it's a database or some other storage device?

**Nireka Dalwadi:** Um, okay, so if you're talking about storage, there's already, uh, CloudFlare R two. Which helps you, which is a, a storage bucket so you can store everything there. Uh, when you talk about more low level backend, uh, infrastructure changes, there is SFU and real time. So for instance, uh, if you're, uh, building something at scale and want the flexibility to, uh, have your own in on, have your own infrastructure, uh, that's when we have managed services like SFU and turn.

Whereas if you are building something which is fairly quicker, uh, something like a telemedicine or an EdTech platform or proctoring for instance, where you don't want to deep dive into all of those smaller nitty, you can use a real time kit.

**Sean C Davis:** Mm gotcha. Okay. So essentially, um, CloudFlare is gonna give you the, you, you also have the tools available to you if you need to [00:26:00] store.

Data in, in any way. Absolutely. Okay. That's, yeah, that's, that's great. Um, we've got a question from the audience from, from Courtney. And Courtney asks, can you explain what a voice agent is a little bit more?

**Nireka Dalwadi:** Okay. So, uh, voice agent, um, have you interacted with an LLM using on the voice mode? That's, that's basically, uh, what a voice is.

Let's say, for example, if I, uh. Uh, okay. Let's say for example if I'm asking Claude, Hey Claude, what's the weather like today? Uh, and Claude responds to me in an audio format. That's what a wise agent agent would be. The way that sort of works is, um, traditionally. Uh, so there are a few ways. One of the most popular ways, uh, or one of the most used ways, uh, is text to speech and te uh, speech to text.

Uh, the speech, I would say something, uh, there would be, my speech would be converted to text. [00:27:00] That text would be, uh, run, would be processed through LLM or a model, and then that text would be, again, converted to speech. So that's usually the workflow for text, to speech and text, uh, speech to text. That's one of the formats that, uh.

Uh, that's how they use real time. And the way real time would be plugged into that would be on capturing the, uh, audio and also delivering the audio and the processing. So the processing always also something that we, uh, support through agents. So, yeah.

**Sean C Davis:** So it can originate from text, but it could also originate from audio.

**Nireka Dalwadi:** Yeah. So it. Yes. So, uh, the entire pipeline that it would look like if I'm, when I ask a question, my speech would be converted to text. That text would be processed and the output would also be in text. The LLM or the bot on the other side would be, uh, converting that text to speech. So the entire [00:28:00] experience from, uh, in a, in a end-to-end voice interaction would be voice.

Would be that. Does that make sense? Oh, yes,

**Sean C Davis:** yes. Yep, yep. That, that makes sense. So you are, yeah. So you're leading with that voice. And then does, um, do you then provide the ability to, to choose the model that you're going to use? Or is, um, is CloudFlare kind of managing and setting that behind the scenes?

**Nireka Dalwadi:** Uh, you have the freedom to do select whichever model you want, if you want to delegate that, uh, uh. If you want to select. Okay. So the way you can do that is we already have partnership with a few, uh, great, uh, folks who do that. For example, deep Gram, uh, which can convert speech to text and text, text, speech.

So we have that integration directly built into CloudFlare through, uh, AI gateway workers ai, so that that integration is much, much easier if you want to build directly on cloud play. If you don't, you have other options, but it, the process just gets more [00:29:00] simpler if you build on that. Yeah.

**Sean C Davis:** Yes. That makes sense.

Okay. And, uh, another question coming to us from Tony. So Tony is asking about add-ons and wanting to know, are there any more examples, um, when the AI agents have traditional training features? Um, so my, I'm gonna say mine is running some examples of add-ons, so I, I'm not totally sure. Maybe you can clarify in the chat there, Tony, but, um.

Looking to, yeah, maybe you can talk a little bit like the, are, are there, are, is there the concept of, of add-ons to these features?

**Nireka Dalwadi:** Uh, for real time? Yes. So, okay. Uh, for real time kit, like I mentioned, there are components, the core SDK, which handles the business logic. Then there is UI kit, which is, uh, the UI component.

If there are other add-ons, add-ons, like transcription and uh, recording that you can, uh, take if you want. So, for instance, most. [00:30:00] Of the EdTech sessions or live proctoring sessions that happen, uh, the audience would want, uh, the host would want that to be recorded for future purposes. So, uh, they can directly, uh, record on, uh, through that.

So it's just a function of a couple of lines of code. All of that details are available in the doc. Does that make sense?

**Sean C Davis:** Yes. Yeah, it does to me. Yeah. Um. Tony, let me know, let let us know if that, if that doesn't answer your question and I can, I can come back to that as well. Now, um, one, one other thing that, uh, caught my attention.

So you, I think quickly showed a few, uh, use cases on screen. There was a new site and, and a couple other examples and yeah, that's why I was curious of, you know, what are, what are some of the. The uses or, or like the, yeah, the, the examples that you have particularly found most interesting. I mean, maybe something where, um, we haven't really seen folks use a realtime feature for it in the past where it's been more [00:31:00] like pulling or, um, or just like, uh, on demand and, and that sort of thing.

You know? Where do you see people kind of pushing this in, in new places?

**Nireka Dalwadi:** Okay. Um, one of the use cases that I, not so long ago found out, uh, was a big, big use case was, uh, uh, security cameras. You need live. I mean, it, it's so apparent, but I, I just did not click to me when, until I heard that from the product team.

So that was something very, uh, cool. The other one that comes to me is, uh, uh, dash cams.

**Sean C Davis:** Hmm. Interesting.

**Nireka Dalwadi:** Then. Yeah, so those are slightly more low level if you're thinking about something, which is more day-to-day. The most popular use cases right now are emerging to be, uh, voice agents. But some of the most, uh, a lot of our customers are also building proctoring, uh, apps.

Proctoring [00:32:00] apps? Uh, yeah, I think proctoring apps, then EdTech. So a lot of those are, uh, very new, emerging, not new, but they're, they're more popular use cases,

**Sean C Davis:** I would say. Are those proctor apps still, are they using the, the voice agent as well?

**Nireka Dalwadi:** Uh, they have, uh, interesting AI functionalities, yes. Okay. Uh, not voice agents directly, but uh.

Support automation is something that is being used for voice ai, uh, is a used for voice ai, so automating the entire call center or support agents. So that's something that voice AI does.

**Sean C Davis:** Yes, this makes sense. And yeah, I could see, um, others. Yeah, there just lots of different use cases with that. When, when you have that.

A capability to have a essentially real time transcription Yeah. Of audio. There's like an, an endless number of possibilities there. Yeah. So what, like with the, what have you seen folks do with, um, dash cams? Is it, is it just streaming or have you seen anybody do anything interesting [00:33:00]

**Nireka Dalwadi:** like

**Sean C Davis:** adding to that?

**Nireka Dalwadi:** No, it's, it's mostly recording. There are media transformation capabilities that there are, for instance, detecting this is like in self-driving cars that might have happened where, uh, you see if there's a object there, you would detect that. So that's along with a lot of media capabilities that are, but, uh, the real time technology that we spoke about would be one of the basis for that.

**Sean C Davis:** Oh, that's interesting. Okay. So yeah, you're streaming it, but you're also analyzing it at the, at the same time. Yeah. Which is very cool. Okay. Um. So the, uh, let's see what, well, the other thing that I was um, wondering was, uh, you know, so those are, I think those are really interesting use cases. I could see a lot of folks, um.

You know, hearing this presentation being like, wow, this is amazing. It's so powerful and I'm super intimidated. How do I get started? So, I'm, I'm curious if you have recommendations on, you know, [00:34:00] what, what would somebody, how, how should somebody spend their first hour with these, getting comfortable with these features?

And if there's, you know, maybe like a specific example or use case that you might pair with that process to, for people to kinda like get comfortable.

**Nireka Dalwadi:** Yeah. Just build your own zoom. Uh, that's, that's the easiest way. Uh, there are a lot of presets available. So like we mentioned, the host, the participants, those are the, uh, logic that you would not have to take care of.

That's something that's already available. You still have the freedom from, uh, yes. No. Yes, no. And, uh, tick marks that you can decide if you want that or not. Um. You can play around with branding, you can use the dashboard also to get started. Um, there are docs that are out there, there are a few demo apps that's there.

We also have a very active Discord community, so if anyone feels stuck at any given point in time, just feel free to, uh, drop a message there and we will make sure that. Ev everyone is on, uh, super, super [00:35:00] active there. And our, uh, our entire team is, uh, always active there. They look forward to spending their few hours, few minutes a day on the Discord, so we'll make sure it's answered.

**Sean C Davis:** That's great. And are the, the demos available on the dock site or should people find 'em in a,

**Nireka Dalwadi:** on the, yeah, on the doc side.

**Sean C Davis:** On the doc side, yeah. Okay, great. Yeah, this is, this is really interesting. So I, I love that you. You led with, uh, yeah, just build Zoom. That's, that's, that's how it's been my first hour.

And I know that's one of the examples you have, but I think what it, in that response, what's really interesting is it, it, um, you know, really opens up like how powerful this, these, these sets of tools are. And just like how fast technology is moving right now. And, um, so yeah. I'm, I'm curious, does that, I mean, because you answered in that way, are you feeling like.

You know, tools like Zoom are essentially going to become, um, commoditized more or less where people can just, they, they can [00:36:00] duplicate essentially the core features that have been really hard to achieve in the past. Do they now become somewhat trivial? And so people will start just like jam packing more features on top of that kinda like core video streaming capability.

**Nireka Dalwadi:** Um, so. All of these features, um, are, are super easy to add, uh, especially with, uh, everything that's pre-built. Um, to your question around, um. W Okay. So I feel that, I think that it's, it's already out there. It's super powerful. It's just that, uh, the scale of what we are now going to see with, or we've already started seeing is, uh, going to be.

Uh, more and more interactive form of communication because everyone is moving, or everyone eventually would want to, and starting, starting to, and is eventually wanting to move towards more natural form of communication. And nothing, I feel right now is more [00:37:00] natural as, uh, audio and video combined into, uh, apps.

Uh, that is the start. It, it's just the beginning. There's so much more potential, uh, with, with all the different capabilities and AI capabilities that are being, uh, added every day.

**Sean C Davis:** Yes. I, I 100% agree with that. In fact, uh, over the last couple weeks I've been kind of playing around with, um, and just a, a new way to develop blog posts that in the past, for me, it's always been like very much kinda like in my head and at the keyboard.

And I'm trying to shift into more of like a, a voice driven, um, blog where I can, I can just take a walk around the neighborhood. Yeah. Talk to my phone, uh, and then come back and a few minutes later have, you know, something that's at least close to my voice and then I've got a starting point and I can move a lot faster.

And I think that's the, the. Really interesting thing that caught my attention of what you said there was that it's just kinda like a, it's becoming a [00:38:00] more natural way to communicate, um, but on the web and on, on the internet. And um, so do you, do you foresee that I, I don't, I don't know. Do you, do you foresee any change in the way, uh, that we're handling video today?

So, you know, a lot of times today we're, we have to, um. We're setting up meetings and then we're, we're jumping on a zoom, like we're actually walking into, uh, like we used to walk into conference rooms when we, we worked in the same spaces. Do you see this evolving, uh, further? Like, do, are people gonna use video in, in new and interesting ways just for everyday communication?

**Nireka Dalwadi:** Um, I, I believe so. Um, I think we saw the, uh, meta re band classes, so that's also one of the forms where, uh, this entire technology powers through it. So I think totally, um, it's just. [00:39:00] It's just everywhere. I think what would be also interesting, which I've seen in one of the presentations, I don't remember which one, where, um, the entire presentation was by, uh, avatar.

So instead of me, it would be my avatar, which would maybe stemless for instance. Uh, so yeah, that would be, that's, that's something that, uh, is not so far away.

**Sean C Davis:** That's super interesting. Well, thank you so much. It was great to have you Reka.

**Nireka Dalwadi:** Thank you so much.
