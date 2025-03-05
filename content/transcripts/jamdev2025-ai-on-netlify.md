---
_build:
  list: false
  render: never
---

**Domitrius Clark:** [00:00:00] I'm going to dive right into it. It's been a while since I've given a talk, so I'm super excited to be here today. Uh, I think everything that CFE does, the jam does, like what a spectacular community. Thank you so much for having me today. Um, we're going to talk about building AI on Netlify. Um, I'll just quickly go over who the heck I am for people that don't know me.

Uh, I'm a nerd. Like many of you, uh, maybe not many of you. I'm a nerd, uh, former retail worker turned engineer for about eight years now, give or take. Um, that's insane to me, but yeah, career transitioner, bootcamp graduate, all of those. Horrible, horrible things. Um, I am tech's unofficial, official hype man.

If you see me out in public, you will hear me screaming. Let's go often and loudly. [00:01:00] Um, I'm an excellent dancer. If you've ever been to render ATL, you've seen me in action. I. Cut a rug, I absolutely rip up the floor. You will see it at a conference near you soon, I'm sure. Uh, I'm taller than you think.

Everybody that meets me always says they think I'm like 5'5 5'6 Nothing wrong with being those heights, but I'm like 6'4 So, when you see me sitting down, I totally understand that. I'm taller than you think, I promise. Um, I'm from New Jersey. I lived in Philly for a handful of years. A lot of people know me in the community as like, the Philly guy.

I'm really a New Jersey guy. I'm just like, kind of a A secret Philadelphia and I'm back in New Jersey again. So a little bit about myself. Um, so I'm going to start this off with the idea that like AI can be really overwhelming and yet also at the same time, very underwhelming. Uh, like many of you in, in the industry, uh, I've been through a job search, a really long job search recently, um, after a layoff.

And I can tell you right now, a lot of that job search came with how good are you with AI? What can you do with AI? What have you built with AI and how well do you know it? Um, I ended up shout out to scrimba. They have an [00:02:00] AI engineering course that I took that really helped me to kind of build up my, my knowledge, but there's still so much more to explore.

And, you know, on my return to Netlify, uh, one of the big things that I wanted to do was, you know, what does that look like under the Netlify primitives? What does that look like to build with Netlify? Um, so what did I build? Um, thankfully, Sean C. Davis, I will never refer to him as just Sean, because now I know that's just, we have to go full name.

Sean C. Davis was, was nice enough to hand over a, a basic AI chatbot built with our primitive streaming from serverless functions, uh, right before this talk. And so I kind of thought like, what would it be like to build on top of that? What would it be like to add features, uh, utilizing Netlify primitives?

And, and so I, I did just that. Uh, I have a regular AI chat. Uh, it's, uh, it's linked in the slides. You'll be able to, to, to go ahead over to the repo. Um, I built a DALI, uh, image generator that also allows you to still chat. So it kind of has a two way pathway to, uh, kind of regex check what. The, the prompt is, and make [00:03:00] a decision based off that.

And then I realized as I was talking to this AI chatbot that it had no idea what I was talking about after I had sent the message. Uh, so then I was like, how do we keep the context? How do we make sure that the bot is educated on what it's told me so far and what I've asked of it? Uh, so those three things will be available after the talk.

They're available right now, but if you already have the slides, you're amazing on how you got there. But they're available. You can go check out the code whenever, and we may do a little bit depending on how much time we have. So how I built them, uh, I typically reach for Astro nowadays. Uh, I think it's just such a phenomenal starting point.

I think a lot of you agree. Um, it's just one of those things that I love to start minimally. And, uh, as a former Netlifier, I, you know, dabbled heavily in 11D and built a lot of things in 11D. So I kind of come from that. That pulled back, uh, don't be wrong, over a lot of my jobs I've used Next. js and Next.

js also has a lot of its power, but I think it has a little bit too much power for some of the things that I'm building, and so Astro is [00:04:00] typically my starting point, and I'm a React engineer have been for a while, so I always start with Astro and React. Uh, the backend is obviously going to be Netlify functions, um, We can dig a little bit into what that looks like.

And then on the AI side, uh, one of the cool things that I'll be able to show off today a little bit of and talk about is, uh, the recent release of Netlify's context file. Uh, so I actually used, uh, cursor, um, and in cursor, I was using Cloud 3, um, for the agent, and then we're using OpenAI APIs inside of the backend functions.

Um, and so I kind of got to pair program, and I think this is where we start to think about, like, Underwhelming and overwhelming, right? Like when you're pair programming with an AI agent, you have so much that you want to do with it. And it really does a job, sometimes a good one, sometimes a bad one does a job of trying to find and get you that information in the best way that it knows how to, uh, and as experienced engineers, and sometimes as inexperienced engineers, uh, we get code that we are just disappointed with.

Uh, the [00:05:00] context files that we released recently really helped me on this journey. It really helped me to. Talk about what code we were generating, talk about the types of things that the project is doing right and wrong, and I don't know, it just really helped me to have that rubber duck, and I think that's one of the things that I like to look at AI as, is a rubber duck, it's not something to replace me, it's something to empower me, uh, and, you know, I think that there's a lot of really bad, controversial things that AI does, but there are pieces of AI that are, um, You're definitely going to be ingratiated into the work that you do.

And I think that finding a way to work with it and around is probably the best way forward. And hopefully after this, you'll, you'll feel the same. Uh, the basic chat bot, all it does is stream content, stream text content to your UI. Um, it doesn't hold context. So again, if you're messaging back and forth with it, uh, you're going to realize that it has no idea what you said before, and it just gave you an answer and moved on.

Um, the Dally Images Generator generates images using Dally 3. Uh, you can chat with GPT as [00:06:00] well. Um, funny enough, when I, when I first built it, uh, I'd started trying to talk to it, and it was just sending me back URL strings trying to make images of whatever I sent to it. So I was like, oh, okay, cool. So you do actually have to When you're, when you're dealing with a chatbot and you want to have multi faceted features in the chatbot, uh, you have to make sure that you're handling all of those, um, those routes as, as you build into them.

And then still the bot holds no context. It, it only knows message to message what it's talking to you about. Uh, so from there I was like, okay, well, I wanted to know what the heck I talked about before. So like, let's Let's try out Netlify Blob Storage, which is basically just a KB store, really easy kind of in and out for data flows that aren't large and even sometimes larger data sets, like holding on to conversation sessions.

Uh, so we added a button in the UI and, and we'll, we'll talk about that in a little bit, but we added a button that allows you to create new conversations with the AI that completely clear the context from Netlify Blob Storage. Uh, it also makes it so that you're [00:07:00] not like. Putting tons of information in a blob and then forgetting that it's there.

And then, you know, you're like, what the heck happened? Why do I have all these, uh, these storage files in my account? Um, contextual sessions to maintain through your chat. And you'll see, like, we come in here and I'm like, Hey, my name is Dom. It's like, Hey Dom. And I'm like, who am I? Oh, let me, who am I? It knows who I am.

So it's, it's holding onto that context throughout this entire conversation. If I were to go to a new conversation and say, what is my name? It doesn't know my name. Thankfully, if it did, I'd be a little bit worried. Um, so yeah, it's holding context. It's leading context throughout that. Uh, and then again, utilizing Netlify blob storage.

Um, I think we can actually just pop in real quick and let's look at what that looks like. Nullify, chat, let's get rid of this. And so you'll see here we are checking for new conversations, um, setting some cookies so that we can have session IDs inside [00:08:00] of it. Uh, and then you'll see here we're getting some chat history.

Uh, and streaming that output back in through a controller. Uh, and then up here, you'll see where we have our store. gets, our store. set. jsons. Like, this is how you interact with Netlify Blob and Honestly, again, utilizing this here, uh, Netlify, it's an MDC file. This is basically what you give to your agents now to allow it to have a better understanding of the architecture for Netlify functions and all types of different primitives so that You know, the, one of the big problems is, is that agents have cutoff points.

They don't always grab the right data, right? They sometimes come back with old styles of functions or ways that you are not typically building in today. Uh, and so our team, uh, shout out to, to the Netlify team, Sean Roberts puts together this fantastic. Super long context document to allow us to have a better starting point when building with Netlify, uh, inside of these agent based platforms.

Um, [00:09:00] and we can go a little bit of depending on where we have time and go a little bit back into the code if anybody's interested. Um, so some of the useful Netlify primitives that I'm looking to build with going forward. Obviously, we have serverless functions and blob storage, but edge functions for that fast near you, uh, kind of download of data, especially when we're using blob storage.

Uh, the intelligent cache being able to really, uh, Dig deep into how cash is going to be handled across these sessions when you're dealing with multiple agents on then being able to order your function invocation so that when you have multiple actions that an agent needs to take, you can actually go into the time will file and tell it.

I wanted to. I wanted to order and invoke in these, uh, these exact orders so that you can have it able to ingest the data that needs to before going to the next step.

Um, so development with Cursor AI and the agent rules, uh, using the new context file, which we just showed off, you can build alongside your preferred agent with confidence, uh, generates, generates Netlify specific code, uh, leverages Netlify context for solutions, uh, [00:10:00] and it enforces optimal configurations.

I can tell you as somebody who recently returned to Netlify and is building heavily with Netlify, um, using these agents has not been phenomenal. Uh, it has generated me code that I've sent over to Sean C. Davis, and he's been like, we should probably update this function signature because this is how we used to write them.

Um, so I realized quickly, like, uh, I started writing out my own rules and, and kind of trying to teach it myself. Uh, before we got the context file. And so a lot of these agents don't have access to web searches. Uh, you can do that inside of cursor where you can add web and it'll start to look into current documentation.

But there's a lot of other information that it takes in. An agent crawls across many different sources and it could be a stack overflow post from, you know, years ago. Uh, that it's like, yeah, this is the one. This is actually right. And I'm going to use this. Here it is in your code. Uh, so that's where it can be underwhelming.

And so. You know, we have to understand that as, as smart as, as AI can be, uh, we still have to help it and we still have to have the knowledge to be able to bring it across the finish line in [00:11:00] a way that people are going to be comfortable with and, uh, and be able to understand and grok. Um, so super thankful.

I think one of the big helpers of Netlify in this AI space is going to be this, this, uh, context file. And I'll link out to where you can download this, make it a part of your projects. Uh, I think if you're building with Netlify, this is something that you definitely need in your project. Um, I'm gonna, like, quickly go through towards the end.

Uh, where can you find me? I'm on X sometimes, I'm on BlueSky sometimes. I feel like social media has become a very scary place lately. And so, please DM me if you have any questions about this, if you have any questions that you don't feel comfortable asking, uh, in a public setting. Talk about my career and things that I've done, or about projects on your Netlify account.

I am open, I'm an open book. Anybody that He does know me, knows that I'm a very kind of approachable individual, uh, even if I'm a 6'5 giant and, and loud and obnoxious. Um [00:12:00] Let's head right into the Q&amp; A. Thank you so much for coming to my talk. Thank you so much, uh, to The Jam for having me today. Um, what an important community to have, uh, I think in today's climate.

So thank you so much and, and, um, thank you all for listening and hearing me out.

**Sean C Davis:** Thanks, Dom. That was great. Um, for all of you out there in the audience, drop your questions in the chat. I'll keep an eye on them and we'll pass them on to Dom. I have to start with the most recent chat message that we have.

It says, uh, I want to ask him what mic he uses.

**Domitrius Clark:** This is a Shure SM7B. I'm using an Elgato low profile mount so that it goes under my, uh, it goes under my, I have three monitors. So it goes right under my third monitor. Um, and then I'm hooking it into a road streamer X, uh, that it's a kind of an all in one.

A lot of people use the Scarlett, uh, the two in one, I was using the Scarlett two in one for a while. I [00:13:00] just recently got the streamer X, uh, loving it, crisp sound quality. Thank you for asking. Uh, I should totally put together a user section, but I haven't yet.

**Sean C Davis:** In other words, you're a pro. You've, you've been doing this.

You've been doing this for a bit.

**Domitrius Clark:** I've worked with so many people. Uh, so I used to be an egghead instructor and Joel Hooks is like a master when it comes to understanding all of this setup. I can tell you right now, I am not a pro. I'm, I'm the farthest thing from it. I have friends who are really educated on this.

Chris Biscardi, Jason Langsdorf, Joel Hooks, they have, if I own it, uh, it probably came as a recommendation from them.

**Sean C Davis:** Fair, fair. Yes. Okay. So, um, I want to get into a little bit of the, the tech that you were using first and, um, you, you showed us cursor and that MDC file, and there's some, there's some chatter in, um, in the chat about using copilot, VS [00:14:00] code and all of that, but let's, let's talk about cursor for a minute for folks who might not know as much about, and, um.

Specifically, can you talk a little bit more about your experience using, uh, I guess I should say not having that MDC file in the project versus having it in there? And, um. Yeah, because some, some of like the things that went wrong and maybe some of the benefits that you got with it.

**Domitrius Clark:** Yeah, I think it's, it's hard to because like, especially when I was on my job search, uh, and, and this was over a good five month span.

I was really digging into AI. I wanted to skill up. This was one of those things that, you know, like when react. You had to know React. React was a big part of the job ecosystem in Philadelphia. I knew that if I was going to get employed, it was something that I was going to have to skill up on. Um, I felt the same way with AI.

And so I started digging into it. I dug into it in my last job while I was working at clerk. Um, but I hadn't gotten an opportunity to build a ton with it. Uh, and so I started building with it. I, I [00:15:00] kind of jumped on the cursor bandwagon as soon as it came out just to try it out. Uh, it's gotten way better over time and I can tell you right now as somebody who constantly kind of just interacts with ai, uh, conversationally, it is really hard.

to grok sometimes the output that you're getting from AI as a trustable source, right? Like, I think as somebody who's been doing front end engineering for a long time, I have a good grasp on the types of things that can output for the front end, and I've built my fair share of back end services throughout my time even doing front end.

Um, and so, Even knowing all of that information, I always don't feel super confident about the output. I want to make sure that if I'm, especially in an education, you know, in an area of education, I don't want to be putting things out that are inefficient or, I think one of the things that starts to happen in the current day that we're in is that.

AI is in everything. AI is in blog posts you read, [00:16:00] slides that you see, projects that you learn from, um, and it gets really hard to trust the information that's out there. And so, you know, for me, I think that this just makes me more confident that the code that I'm outputting from Netlify is going to be the best that it can be and the most correct that it can be coming from a file like that.

And, and beforehand I, I consistently had to check back into the docs. I consistently checked with our team, uh, before putting any like educational output. Um, just to make sure that like, you know, coming back, uh, it had been a while since I had heavily used Netlify and I think coming back to working with Netlify, I'm so happy to see all of the changes that have happened and, and some of the ways that we interact with the primitives, um, and it can get really hard sometimes and daunting to go through the docs and start to memorize all of the pieces of every single primitive that exists, uh, and this file, working with an agent who has access to these things quickly, uh, it makes me so much faster and more productive.

**Sean C Davis:** Yeah. And you, so you touched [00:17:00] on, uh, a part of the process of working with AI that I've been talking about a lot recently, which is you can't really just have this inherent trust of the output. It's, it's not, it can, it can work fast, but not necessarily smarter than you in some cases. I mean, it's all, it's all really about that context.

So what, you know, aside from maybe asking colleagues and, and reviewing that, that code output that you, that, that AI gives you what, um, what are some of the practices or tips or tricks that you have to help ensure that the code is good enough to ship and to teach about?

**Domitrius Clark:** To be honest, I started, I started really grilling the agent.

If it put something into my code base, uh, I don't have it auto, uh, writing code for me, I, I make sure that it generates it, uh, before I have it, it put it into the code, I. Try to have it explain to me what changes it's making to what already exists and why. [00:18:00] Um, and a lot of the times it'll be like, Ooh, I'm sorry, you're right.

Like, I shouldn't be changing this. I don't know why I did. Um, and I think that's where you start to get the, the lack of confidence. And I think that that's okay. I think that You know, you have to learn how to train your agent to work well with you and the projects that you do. And so, uh, even before I got the MDC file from Netlify, the context file from Netlify, I started writing my own rules and how I wanted it to talk to me.

Uh, I felt like sometimes it would tell me things to like make me feel better about the thing that I was building. And I was like, stop making me feel better. Give me the raw truth about the things that I'm writing. Tell me what's inefficient and what, what is efficient. Um, and just starting to kind of work with the agent to understand how I want to work with it.

Cause it's the same way as education, right? Like seven people can talk about the same topic. And I think this is something that scares people from making content. Sometimes is that, Oh, well, people make everyone makes react content. Why would I make it? Uh, it took me so long to find somebody that I learned from.

In a way that answered to [00:19:00] me that made sense to me and how I think, uh, and I think it could be the same way with agents where, you know, different agents are going to speak in different ways and they're going to approach you in different ways and approach problems in different ways. And so just getting in there and kind of getting your hands dirty and having these conversations and seeing how they interact with you, I think is, is, is the right way to do things.

But, um. It's, it's gonna get things wrong and I think that's a part of the, the learning process as well as it's like, if you are as good of an engineer as you think you are, uh, you should be able to grok through some of the things that are wrong and if you can't, I am somebody who can't often, right? If you can't, ask it questions, ask it to clarify why it's making decisions that it's making, ask it to explain to you like you're five.

Why are these things happening often I I'm having it help me to generate educational content and I make it step back and think okay Hey, this is for an educational piece. I totally understand all of the extra checking that we're adding. That's right That's robust, but I want to make sure [00:20:00] that this is concise and sometimes it'll be like, you know what you're right I'm I'm adding a little bit too much.

I'm trying to be cheeky Let me dial it back a little bit. Like it's, it's again, it's like, it's this interaction that you have with it, that you start to learn how you want it to work and it starts to learn over time how you, you want it to work.

**Sean C Davis:** Essentially, if you, if you keep pushing and pushing, eventually you'll, you'll figure out you're either in a loop or you've got the answer correct. Essentially

**Domitrius Clark:** yeah, I've had it re recommend me things that it knows is wrong in the same conversation. Uh, and I've had to in its rules. I had to say, hey, before answering me, go and check back on the context of the conversation and make sure you're not repeating to me mistakes that you've already made.

Uh, and when I added that rule in, I then asked him, I'm like, do you know what you said five message ago? And it was like, yeah, I do. I know I, I'm not going to add it back into the context of the conversation. Like it's, it's, again, it's not a real human. Um, but I almost kind of treat it as such when I'm talking to it.

[00:21:00] Like, I, I, I just understand that it. It's factual. It thinks in facts. It thinks in what it knows to be facts, which are sometimes hallucinations. Sometimes they're wrong, right? And so you kind of have to be the guidance that it needs to make sure that it's getting to the right answers. And that can feel counterintuitive because you're like, I'm going to this thing for the answers.

But I think at the same time, it's empowering once you start to have that, that control over it.

**Sean C Davis:** Yes, absolutely. And, um, so You, you mentioned you're familiar with react. Um, it's kind of your, it's your go to UI framework. Um, Alexander has a question, which is, do you think AI will pull more people towards react than other frameworks due to its huge amount of training data and possibly better output?

**Domitrius Clark:** Yeah, I, I probably think that that's true. Um, but I think that there is also like. As somebody who's been in react for a while, um, I only see what content is given to me based on [00:22:00] what I already engage with, right? Like a lot of these things and, and obviously the The funding in the space like react makes it so that there's a lot more people talking about it, writing about it, you know, putting it into the other.

Um, but again, I think you just, it goes back to how you control the, the agent that you're working with. And so if you go to the agent that you're working with and you realize it continues to try and put. React code or React adjacent code into what you're writing. Um, and by the way, I've written Angular with this and I'd never written Angular before.

I was able to grok through Angular because of an engineer, an AI agent that I was using inside a cursor. Um, and so I think that it's still very viable that all of these things are, are, Able to be learned and and taught more through an agent. I just think you have to explain to it up front Hey, I do not write react code.

I want everything to be written from this standpoint and I if Say view or angular hasn't put together these context documents yet that make it a little bit [00:23:00] easier to work with these things again There's agents that have access to the web so you can point them to docs and say hey I want to use the latest version of view for instance.

I'm in a late version of a nuxt project I want to make sure that all the code that's going in is current You can start feeding it your own Sort of MDC file, which is what I was doing before I got the Netlify file. Uh, I just let it know what I wanted, how I wanted my functions to look, uh, you know, stop assigning variables.

I want functional, uh, you know, named functions over anonymous functions, like stuff like that. Like, but that's all specific to me, right? That's how I like to write code. That's how I want to write code. So it doesn't know that it has no idea how I feel about those things. And so I just started to, to work with it to get to that space.

And I think that you would do the same with, with your framework of choice. That's, that's really interesting to me. So you're, you're kind of separating the process of, of working with AI to generate code in sort of two different ways. You, you, you're making your tech [00:24:00] decisions first and, and maybe you chat with AI for that.

Maybe you do separate research, but then separately, you want to come to opening your project with. Kind of it sounds like you're usually bringing specific instructions about the stack and the tools that you're that you want to use Yeah, like when I first started trying to build astro projects, it was just generating me anything It wasn't generating the astro files.

It was like do I generate you basic HTML? Like what do I do? And then I was like, okay. Well I'm obviously stuck. I can't get any further with this, this, uh, the agent and the capacity that it has. So before I start a new project, I always like to go in and say, Hey, uh, I'm going to be working on it. Cause you can also do cursor rules files is again for cursor.

I don't, I don't know windsurf or any of these other, uh, IDs just yet, but in cursor, I can have a per project cursor file, uh, that I can include as a document when it's making decisions. And so. If I'm in an Astro [00:25:00] project, maybe in my general rules, I say, Hey, I work in Astro often, please optimize the code that I write in Astro, make sure that it's, you know, up to standard.

And then I go and write non Astro, Next. js specific code, and it's like, you're not in Astro, what do I do here? I can go into that, write a cursor rules file that says, Hey, this is a next JS project. Here are the versions that I'm on for the, you know, libraries that I'm using, uh, make sure that you have this context when you're generating answers for me.

And it immediately flips script and is able to utilize that new context, uh, in helping you.

**Sean C Davis:** And you. So in, uh, you, you just mentioned that you've, you've really, you've used Cursor. You haven't used Windsurf as much. I'm going to read this question from Alexander, which is, have you tried various AI IDs like Cursor, Windsurf, uh, VS code, et cetera, and, um, had a favorite or recommendation.

I want to kind of open that up to the chat and, and you folks kind of, if, you know, let's, let's chat about some of your experiences that you've [00:26:00] had with various IDEs, but for you, Dom, um, Maybe if you haven't worked with some of those other IDEs, can you talk a little bit about what drew you to Cursor?

**Domitrius Clark:** Yeah, um, to be honest, I'm going to give kind of a lame answer there.

Um, Cursor was one, so I had used Copilot inside of VS Code. And I'd actually had free access to co pilot for a while. So I was using co pilot, uh, while I had a free access. And when I lost free access, I thought, let me reevaluate. Should I, should I try something else? And cursor had kind of blown up as like the next thing to try out.

So I was like, I actually put it off for quite some time before I'd even picked up the, I didn't want to switch over. My ID, I didn't know what things I was going to lose in the process, but, uh, it's built on top of VS code anyway. So I actually didn't really lose much on the process. Moving over any of the VS code options that I specifically set, I actually could export from VS code right into a cursor.

So that's actually why I did it is, is specifically because I was already using VS code and it was a comfortable IDE to me. Um, I [00:27:00] have no, like. Specific hold to only using cursor. Uh, I would try out windsurf. I, I love trying out new tools. I, I think as long as it doesn't stop me in my tracks of the types of things that I'm working on, I think that that's fine.

Um, to be honest with you, I've never been a real deep opinionated person on any of the tools that are used. I use react because in Philadelphia, that's how I got a job. That was the job market in Philly. And, and so I kind of, you know, threw all of my, my eggs in a basket there and learn react. But, uh, it could have been view, it could be angular.

I don't think any tool, uh, choice specifically makes the, the output of what you do any better, uh, I think it's, it's your opinions and, and how you hold them and, and the way that you work that, that makes that. So I think you use whatever the heck, uh, works for you. And, you know, listen to people's opinion you respect, try, try out the things that they like to try. And if you don't like it, I don't think that's weird either. I think. You're going to like what you're going to like. That's what I've learned in this career. And, uh, yeah, so cursor was just [00:28:00] an, an easy option for me from being a VS code user.

**Sean C Davis:** And, and speaking of the, so if it kind of drew you there from the, or if it drew you to react, um, the job search drew you to react, um, you mentioned this, this most recent job search, uh, really involving a lot of questions and, and experience around AI.

And so you had to dig in. Early, you had to go super deep, um, now with, with where you are today, what advice do you have for folks who are either, who are, who are just starting out, don't have a ton of experience working with AI tools, whether or not they're, they're looking for a job?

**Domitrius Clark:** Yeah. Um, listen, I, I've been in the DevRel space for a long time now, right?

I've worked as an IC, I've led teams at two different companies. Um, you would think that that makes me a shoo in to, to getting a job. It did not. It was [00:29:00] a very grueling process. And so the one thing that I want to put out there first is that, um, it's, it's tough and you're going to deal with a lot of emotions through the process that you're going through.

And so I think one of the things that I want to give advice for first is to just be kind to yourself. I can tell you right now is a huge hit to my ego. Uh, to, to not be able to even get follow up sometimes, right? Like you, you think you're on top of the world. You think you've done enough to prove your, your worth inside of an ecosystem that is a really hard place to prove inside of right now.

And so whether you're new, uh, whether you've been in it for years, I've seen some of the people that I respect the most have, you know, their own struggles with, with a new job search. So what I can say is, is that, you know, be nice to yourself and, and, uh, surround yourself. I mean, I. Uh, Will Johnson, shout out to Will Johnson, uh, shout out to Nat Ebrahimi, still works as a support engineer over at Clerk.

Uh, these are people that checked in on me. Daily, uh, just to see how my interviews were going to, to check on me. And so, uh, create a circle around you of, of [00:30:00] others that are possibly in the same search. Uh, if there's anything that I can talk to you about, feel free to reach out to me. It's a, it's a tough time.

It's a, it's a tough ecosystem right now. And so I think being nice to yourself, being kind to yourself and forgiving of some of the things that you may have assumed in this. Job search. Um, that's number one. Number two, uh, specifically to your question. So sorry for sidetracking. Um, when it comes to like AI in the space, I think you are going to see two very distinct things.

And again, this is from a developer relations perspective, not strictly an engineering perspective. So if you're running into engineering interviews, I think you're still going to be put into a position where they're going to ask you about AI tooling. Um, but when you're in DevRel. The, the questions that are asked in the way that you are engaged in an interview, I think is a little bit, uh, let's just say weirder.

And so I think a lot of the time I would interview with companies that aren't AI focused, and there would still be such a large focus on what I've built, what I've written about things like that and in the AI space. And then specifically for AI work, they're just looking for [00:31:00] people who are building and building and building.

So one of my biggest. Kind of pieces of advice there is like, um, I think a lot of people are, especially in, in the communities that I'm around and have been around since kind of my first time at Netlify, um, are, you know, nervous about AI and what. It brings and, you know, working at Netlify, we just talked about agent experience and we've got this, this new term.

And I think that can make people feel uncomfortable. Cause they're like, man, like everything is moving so fast and you know, we have the Jamstack now we've got AX. I totally sympathize with those feelings, but I also think that like we are moving fast and it's not going to slow down. And I think one of the realities is that we have to get in front of it.

And so if there's ways that what my goal is, and I'm taking over a lot of the AI education at Netlify is, you know, let's Let's start tackling it from, from a community perspective, right? Let's, let's, let's find the things that suck and [00:32:00] call them out. Let's find the things that are good and call them out.

Let's, let's start to work together. And so I think in your job search, do that, be curious, find the things you don't like and see how you could fix them and what solutions you can bring to the table and. Uh, get involved with the communities that, you know, you respect that, that are looking in that direction.

And I think one of the things that Sean C. Davis and myself and the rest of the education team at Netlify and Netlify themselves is like, How do we work inside of this really fast paced, Area without completely rug pulling trust from any of the developers that may be afraid of AI. Um, and so, you know, feel free to reach out to me and, and, and or Sean, uh, you know, our whole team is kind of open.

I think that's one of the coolest things about working at Netlify is we're pretty open to feedback. Um, reach out and let us know, you know, that, that you watch this talk and you're like, I hate this. I hate that Netlify is, is, is, you know, going so deeply into AI. Let's talk about it. Let's let's discuss those those opinions and those [00:33:00] points and and I'm a really honest person I have a hard time, you know being dishonest and I think that that's kind of followed me through my career and I think just getting involved as soon as possible and pushing yourself to through the uncomfortable feeling of working with AI and and Just start working with it in a way that suits you and your needs, right?

Don't don't just do it because everyone else is doing it in this specific way Like I'm using AI in a way that fits my needs and it's been great for me It's been really helpful and it's because it's like this really great rubber duck for me Like it's just it just you know, it helps me to know when I'm wrong.

It helps me to know when I'm right it helps me to better explain and understand how things need to be broken down for people educationally and It's been a real, you know, positive impact, I think on the things that I'll be putting out going forward. And so I, I highly recommend, uh, just giving it a go and, and, and putting your best foot forward with it and using your community to, to, to build alongside them.

**Sean C Davis:** Thank you so much, Dom. I really [00:34:00] appreciate that, uh, that perspective, appreciate the talk and, uh, and this conversation. Uh, this, it was, it was really great. Thanks for being here. Thank you all so much. Thank you, Sean. Thank you team at Jam Dev and, uh, have fun. I'll see you guys tomorrow.

