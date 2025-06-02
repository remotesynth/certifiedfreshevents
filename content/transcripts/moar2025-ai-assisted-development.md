---
_build:
  list: false
  render: never
---

**Taylor Barnett-Torabi:** [00:00:00] And we will jump right in. So one thing I wanna say is. This is not the kind of talk where I'm gonna tell you like, AI assisted development is gonna somehow like 10 x your productivity. But I do find it useful to chat about the ways that myself and other developers I talk with have been finding it useful.

So I really wanna get into it. And I'm kind of curious, so I'm gonna have this question. There's gonna be a poll. Um, have you had a tool powered by a large language model, you know. Write code for you, generate code for you. Whether that be, you know, something as simple as like GitHub, copilot, uh, chat, GBT, any of the new ides, all those things.

I'd just be curious to hear from you, um, to kind of see where folks are. Um, because not everybody has had time and that's. Understandable. [00:01:00] 74% of developers report that they plan on actively upskilling in AI assisted coding tools and technologies. This was from the Developer Success Lab more than a year ago.

So I imagine this number has probably actually changed since then. Um, so there, there's a lot of folks out there that are. Actively looking to learn more and, you know, collaborate and, and learn from each other and on these things. So I think this is a great time to start getting into it. Um, but first I'll introduce myself.

Um, I'm a product manager at Netlify. Um, Netlify. You can deploy any modern front end stack, um, from static marketing sites to full stack API apps, you know, nullify. Got it. Start and JAMstack, but also really serverless. Um, when I first started using serverless technologies, it really unlocked a new way to build for me.

I did not want to run an Apache server just to call like the Twilio API, which was like one of the first like roadblocks I had kind of hit when I was first developing because I, I was a Java. Developer [00:02:00] and I didn't wanna have to like, spit up the server and like all that stuff and, and found it just really easy to start using serverless technologies.

Then, um, I'm seeing similar things for me with ai, but if you would've asked me 12 months ago if I would've allow an AI tool to write. Any large amount of code for me, I probably would've said, hell no. Um, but this change really came for me last year. Towards the end of the summer, I started seeing more use of, you know, chat GPT.

It actually helped me think through different code problems I was having and stuff like that. Um, but computers writing code for us is not really a new thing. I, I, I come from also like an APIs background, so, you know, we had SDKs being auto-generated. Um. For over a decade ago, um, you know, GitHub copilot, I te I was playing around with it in 2020 1, 22, but it wasn't really like fitting the need I had.

So I kind of set all that stuff like aside. But I've had this struggle last year. Um, I was feeling like stagnant in the projects that I was working on, [00:03:00] um, but also kind of my own like creativity. Like I had ideas, but it just felt like such a slog to building. It took me long to, too long to build those ideas and I would lose steam, um, when I would try to work on them.

And so first though, you know, I was talking about creativity and I, I think like what is creativity? I think that's u useful to like root it in like a definition. Creativity. By this one definition, there's many out there is the ability to produce work that is both novel, um, original and unexpected and appropriate, you know, useful using, you know, the different constraints that you have.

There's a lot different models of creativity out there. Um, one that I really like is this one called the four C Model of Creativity. It's a framework. That kind of recognizes it across different levels of impact and recognition. And I think that's really valuable because it recognizes all forms of creativity, not just like groundbreaking, like achievements.

So there's like everyday creativity in the form of creative problem solving helps, um, resolve challenges that come up when you're writing [00:04:00] software. Um, debugging, refactoring, just coding a, a small new feature or there's the more infrequent, what they call big bang or big C creativity. That helps resolve challenges that arise in, you know, bigger problems, major innovations, or just even larger things like re-architecting an application or, you know, figuring out new product features that would delight customers.

And, but all these forms both require, you know, humans and collaborative teams and supportive environments and, and using appropriate techniques. And I also think it's important to think of it both like. We do in our code at work, but also like outside of work. Um, and most of the research though, generally focuses on those creative muscles like in work.

Um, I. You know, they find that it's crucial for sustaining like long-term engagement. So if you like, want to be writing code for many years to come. Um, and it doesn't just improve the outputs of programming, the, like, what the code actually does, but it also enriches like our [00:05:00] lives as developers and like our experience of the work when we get to be creative.

Um. There's occasionally references in broader software engineering research and practitioner surveys suggesting that things like hobby programming, open source hackathons can boost engagement and reduce stress. But it's really only been studied from like a in-work context. Um, and then the last thing, last bit of little research, um, there's actually.

Very little research that exists that directly examines like the impact of, you know, generative AI on creativity and software development. There is this one really useful, like this is the name of it. It's a, a research agenda. And so they look at, you know, how would we approach the research for this. Um, one point, a few points they made was that like, too much of the research is on, uh, productivity and, you know.

They actually think that understanding like the short, medium, and long-term impacts on like creativity [00:06:00] is just as important, if not more important than studying productivity, which is like often what economic and like, um, software engineering research focuses on because I guess, you know, it impact, they feel like it impacts the bottom line more.

Um, but also, you know. Thinks about what are the risks and the benefits that we should explore. Um, that like human creativity is still like a powerful differentiator. And there, you know, there's the possibility that if we stop, like considering alternatives when we're like approaching a problem that we could lose certain problem solving skills critical to software development.

And, and their whole point, which I really appreciate is people are using these tools. So we need to understand it so we can figure out how to shape it better.

I can't talk about this topic without like, touching on like the, some of the negative impacts. Like I feel like the can is open. Um, what is the future of work for all? The [00:07:00] cost is not cheap for a lot of these tools. Uh, climate impact, um, the training data, the bias, it's often trained on large amounts of unlicensed data.

Um, if someone can't use 'em for those reasons, like I can respect that. But if your criticism is about the quality, I beg like please get to know it. Get your hands on it. Talk about this. I think it's really important right now to have these conversations. Um, people care about. Uh, people's opinions who are really deep and knowledgeable on something, like if you're gonna critique it, um, and you have like all these experiences to share of where it was good and bad.

Like people really respect that. And so I think it's a really interesting time to, to explore it. And where all this lands, like it's who knows, we're, we're all of this lands. But this idea of being like this human in the loop, being like a human who intersects at critical decision points when building something, it's, it's been a thing that automation researchers have looked at since like the eighties.

Um, so it's [00:08:00] not really entirely this like new idea. I really love this quote from this paper called Ironies of Automation. In the eighties. And it's that the more advanced a control system is, the more important, or the more crucial may be the contribution of the human operator. So definitely think it's good to have a conversation of like, what, what do we do as humans and interplay with these systems.

And then a very quick aside that I, I love to point out, um. This is one of my favorite charts. I love, I love charts. It comes from the Federal Reserve economic data, um, of software development, job postings on Indeed in the us. Um, you know, we hear a lot of things when it comes to like AI and layoffs. Um, I just want people to remember correlation is not causation.

Um. It's important to remember that when, just like hearing that a lot has happened in the last five years. Be smart, be curious, ask question, um, about people's assumptions. Don't always take them on face value. And, [00:09:00] um, yeah, so I just want, I want people to approach some of these things with that like curiosity lens.

And, you know, a lot of people are feeling like, you know, anxiety and fear and worry related to this. Um, the developer Success Lab, which I referenced earlier, has this idea of AI skill threat occurs when developers feel that their skills have. That have contributed to their success as code writers may be obsolete, um, and threatening their ident identities as like software practitioners.

They, they found, and again, this is a little bit old, so you know, I don't know if the data's potentially changed, but 45% of developers experience some of these feelings. Um, doing something out of fear is not an enjoyable motivator. It's not fun to be forced to learn to something. So I think we need to find a way that like we can learn it.

In our own way that makes it fun and interesting. And, um, yeah, so that we, we experienced less of that, like being forced. One tiny other thing [00:10:00] they, they found was that like AI skill threat. Um, it's higher for racially minoritized developers, both female developers and lgbtq plus developers actually were significantly less likely to report plans to upskill.

Um, so, you know, just something to think about. Uh, it's concerning to me. And, um, yeah, I just hope we can have a good way of approaching this. So with that. In mind. I wanna dig into some of my experiences and experiences. Uh, I have a few things from developers too that, that I've been talking to. Um, I just wanna say there's many different names for this.

I may use them somewhat interchangeably. Um, AI assisted programming, development, you know, auto generate, you know, just AI, auto generate it. Like all this, we could have a whole talk probably, and just like, what, what should we name things? Um, and I'm, I'm pretty sure then like. 20 different standards will come from it.

But, you know, generally I'm just meaning like using a tool that somehow uses LLMs to generate code. [00:11:00] So this, this, my example list is actually a little bit dated. Um, 'cause I wrote it maybe like a month or two ago. But, um, just some of the things that I've used it both. Personal and in work context. Um, so I've been doing some things with like site map data and Google Analytics data at work.

And so like, I used to be a Python developer many years ago and I rarely touch Python now. So like, just remembering how do I even like set up a Python environment, um, with so much faster I found, uh, than me having to go through all the different docs. Um, and it triggered things that I already knew in my brain, but it like helped me retrieve.

I. Them. Um, so doing things like that, um, testing out different JavaScript framework features, like there's so many frameworks and different features, like being able to spin up little samples really quickly has, has been great. I like to build sometimes, um, outside of work, little goofy games. I have this one where you [00:12:00] touch a blade of grass with your mouse to like.

Simulate touching grass. Um, iNaturalist, it's like a site to observe different things out in nature. I build like fun sites with their API 'cause it. The API works great with LLMs. Um, different things for myself. Custom all text image. Generation, um, a site to tell you if it's like patio weather, um, where you live.

'cause I love working outside, um, migration. So like migrating from one framework to another framework I found can be really great. It would've taken me so much more time outside of it building things on data, especially when you're, you know, you are. Data familiar ish, but you know, just need to go a little bit faster.

I found it, um, really helpful using, um, different tooling for that. And yeah, just things that are very, like custom to me. I've always seen coding as a means to get to something bicker. It's a lot of why I often [00:13:00] chose to not just be a full-time software developer despite also writing code. Um. And it's part of why I'm less interested in the code itself, but more what I can build and it, these tools have helped me so much get past like my blank page.

Like I have an idea, how do I get to that next step? I don't have to do all the toil and like annoying setup things. It's, it's just helps me jump to go to like step two basically when I'm building. It's, it's helped me do more ambitious projects. Um, and what's ambitious for me might look different than someone else.

And so like, don't it, you can, you can choose like what that is for you. Um, one example of that is like front end developers using it to help them more with the backend to build things so that they can do more full stack type applications or vice versa. Like me more a backend developer who. Doesn't exactly love doing front end but needs it for my ideas, like it helping me do that.

I think there's like the cool party tricks and the demos that like look really cool in like a [00:14:00] small little bubble. But I think, you know, it's really important that we're leaning more into like the bigger projects and more where that can go there. 'cause there's still like a lot of like. Not always working great, but we need to see like what will it and won't it work for.

But really it's just spending less time on toil mundane things, the things we hate, um, and building tools for yourself, exploring new ideas that you may have that you just don't have the time to build from scratch. I think, you know, we should be doubling down on one of the most human aspects about us, which is creativity.

In order to do that in a sustainable way, we, we need help. We can't do it on our own. Um, and that, and that's where this AI assisted programming really comes in. So I think there's always room for humans. I feel strongly that, that the core ideas, um, are still coming from humans. We should lean more into that.

Um, effective AI tooling is about. Amplifying human capabilities, not like trying to reduce them. Um, and AI tooling [00:15:00] just helps me move faster, my creative ideas, so then I can do build more things and it makes it more sustainable to me. Um, and while, you know, it might be able to help me do debugging and I see an error message and it helps me out with that, I still can't trust it.

Um, there's many times where I see it trying to go off and like it's checking like. Node versions or it's just like doing these weird things and I'm like, no, that's not how this problem needs to be fixed. Like it just needs to be like MVM use 23 to get me to like the right node version. And it's like trying to see if it shouldn't start install things and or should it use yarn and like all these different things, like I still need to, it still needs that like human to often step in.

What I'm often hearing is that the tools act like junior developers. People want them to work like senior engineers, but it's just not often there yet. Um, it's making excessive changes. It's overcomplicating simple decisions, and so it's important that we, uh, [00:16:00] take our, you know, software knowledge and try to like, interact with it and guide it.

In a better direction. Um, another reference, um, that Hazel Weekly wrote in a blog post a couple weeks ago is that imagine AI as the absent-minded instructor, not a coworker. It's prone to forgetting details, but ultimately it's there to guide you. Um, most importantly, the goal of the instructor is to make you make sure you learn, but also you learned how to learn and that I think this is really important detail.

So from talking to developers, it's a lot of, it's doing great at like zero to a thousand, but less a thousand to like a million user kind of thing. It's, you know, side projects, early stage startups versus heavy later stage heavy infrastructure systems type stuff. The use cases really change between those, you know, like there are people at those later stage who are using it for.

Migrating some internal tooling from one [00:17:00] language to another or things like that. But it is a little bit different when you know they're trying to do some bigger systems type work. Um, rapid prototyping, scaffolding, you know, these are things we're seeing. Frequently and, and that people are heavily using it for planning features, um, helping debugging deployment support.

So like deploying Annel, I like helping getting help deployed annel I or Docker or setting up GitHub actions, things like that. Um, for static sites, people have often found that has better performance 'cause it chooses more modern, um, choices. So like Astro instead of WordPress. Um. Just that speed to time to push to live site, to be able to iterate faster.

It's just like everyone comments on that. And I think a lot of that is also playing on this idea that like we get, um, like dopamine basically, I think from like publishing something publicly, like it works, it's running on the web. We have a URL that we can actually share and it's giving people that like instant gratification.

And then lastly like. [00:18:00] Just helping non coders build things too. That's been really interesting. Um, some of the tooling, I don't think it's necessarily like where it needs to be for that, but it, it's starting to get there. And important for me is like what I'm doing. I don't see as vibe coating and like Andre car's, like original definition of it was, you know.

That it's like, part of it was like he said that like he accepts all, he doesn't read diffs anymore. There's an error message. He does straight copies, paste, like, doesn't even try. Um, and you know, often though the code would grow beyond his even usual comprehension, it would really require a lot of reading to understand what was going on.

Um, sometimes they could fix a bug, sometimes they would just make random changes until the bug went away and it was great for, you know, thorough we weekend. Projects. Um, but it doesn't really feel like to someone who has like that person, like having a [00:19:00] lot of like traditional computer science background.

It's not really coding. It's just like they see stuff, they say stuff, they run stuff, copy paste mostly works. Like it's not, you know, really thinking through design of things. And so I even try really to like, think things through a little bit and I can show a small example and a little bit of that. And so let's get into some of the tools.

Um, they have many different form factors. Um, so you have your normal IDE with like a plugin. Um, you have people keeping AI separate and like just having it in chat and they're not letting it touch the code. You have, you know, that coming together in an IDE, you have cloud-based type, you know, code environments and then also things in the terminal itself.

I'm not gonna go through the full timeline in, in exact, and even this hasn't even been updated in the last, uh, in a little bit. But, um, a lot changed like last fall. Part of that was [00:20:00] different cloud models coming out that were just so much better, um, at writing code. Um, and then part of that was also just IDs and, and other tooling coming out too.

So the first one I just wanna touch a little bit on is, is Bolt new. So what does Bolt Bolt allows users to prompt, run and edit and deploy full select web applications from their browser. So it's all incorporated in the browser. Um, there is a somewhat kind of like cloud ID ish environment in there. Um, one thing with Bolt, it's really important to have really, and this is true for a lot of them, but I've noticed it even more with bolt more descriptive prompts.

Um. If you have a specific framework you want to use, you know you need to say it. It's really important also to keep the backend simple. You don't have it like actually start using the database right off the bat. In my opinion, I've, I get myself in weird situations where just things aren't working. I think it's easier to use like dummy data in an API endpoints initially, and then like implement the [00:21:00] actual database connections later.

Once you realize, you know, you get. The dummy data working, um, and have a clear idea of when maybe it's time to take that code out of Bolt and go use like an editor, an IDE. There's other similar ones like Lovable. Um, and at nullify we're seeing a lot of referral traffic from AI generators like these. Um, and they really took off, uh, towards the end of last year.

The next one, um, is windsurf. And I will switch to the next slide in a second to show just a tiny demo, um, that I recorded. But Cursor is another example of, of a similar one. Or you could use, uh, vs code with agent mode. Um, so what is windsurf? It's ID with the agent built inside of it. Um, it uses a fork of VS codes.

It may look very similar to, to anyone who has used VS. Code. Um. It's good for more complex projects. Um, planning projects in these feel even more important because things can really get away from you really fast. Um, and I feel like it's [00:22:00] opened up like a creative project wormhole for me in a way. Um, I also think.

They have this idea of you can either have it in write mode or chat mode, and so in write mode, it's not actually writing the code, um, into your project. I find that really useful when I'm trying to learn something and I'm really trying to force myself to like, understand things rather than kind of letting it just go off and me reviewing it.

Um, so you can kind of alternate between those based on like what you're doing or, or your familiarity with something or unfamiliarity with something. Um, so. I'm gonna run, I think. Awesome. So I, I'm like scared to do these live 'cause I don't trust, uh, these things live yet. Maybe one day we'll get there, but I don't feel like I'm there.

'cause every day things start breaking. But what you can see is like, I've given it like a prompt. I even give it like how I want it to test something. I think that's really important. We'll talk about that. And at first, like tries to understand what is the project structure, [00:23:00] like, how does things work. Um. I specifically told it what, like JavaScript, uh, library I wanted to use for the feature and different things like that.

And so, and it's gonna speed up just a little bit here so I can get to the point that I wanna make is sometimes it'll just give you a giant block of code and it can be very tempting just to hit like, except on that, um, like this block here. Um. I try not to do that. You can ask it to break up the changes.

It's much easier when it gives you just a line or two at a time. 'cause then you can really like absorb what that line of code is doing and you're like, okay, yes, this is good. Um, but yeah, that I just wanted to give like somewhat of a visual, um, something I'll have a ton time to demo and this would, you could probably spend the whole time demoing.

Um, but yeah, so that's just like one example of another kind of IDE type environment. Um. If there's many tools out [00:24:00] there, it's gonna be overwhelming. My recommendation is pick one tool, stick with it for a bit. I mean, two of these in this li no, maybe three of these in this list literally came out in like the last week.

So I mean, things are changing. I feel like Don't try not to get too overwhelmed by that and just like pick something and stick with it, and then if it really isn't working for you. Move on. Um, other general tips. If you put bad prompts in, you're gonna get not good. Code out planning's really important.

Prepare the prompts like outside of the environment may, whether that just be a text editor, um, whether that be, maybe you wanna use like I. In some kind of AI chat, refine them, copy and paste that, then back into it. Um, testing's really important, both functionality and performance. You can tell it to help you, uh, with that.

So you can speed that up too, and you can then have it like forced to run the test when it makes changes. Um, ask it for example, code prototypes, [00:25:00] library options. It's like, if you're unsure about something, say it. Make it explain things to you. Um, don't just accept the library that it chooses. Like, like try to still have that critical thinking of like, should I use this library or should I use that library?

Because that's like, you know, there's always pros and cons. Um, and lastly, model choices is crucial. Um, this has changed a little bit, if you've heard any of the earlier talks with MCP servers about getting more like, um, and just like context files and other things. But I've had, um, one, I. I actually think it was tragedy.

GBT like a month or two ago tried to tell me that like a library was not on its next version. And it had been on that next version for a while. So like I knew that was like cut off, um, data issue. Um, but yeah. Where do they struggle? Um, elements are really bad at precise things. Um, so overcomplicating simple tasks sometimes, but better at fuzzy [00:26:00] things.

Um, which is kind of hard because that's like the inverse of what we're used to computers doing. Like we're used to computers being really good at math. Um, but we couldn't give them like a fuzzy set of things to do. Um. It's really important to stage and track your changes because it can just make change.

Like I don't love writing CSS, so I often help have it help me some with C success, and I'll tell it to change this one small thing and it changes three other things. Like, and you need to be able to be like, no, that's wrong. Um, or like, give it better guidelines for how it should make changes. Um. Extra code.

Um, it's a, it's a big thing. Sometimes it'll like create two things that are very similarly named and have very similarly like functions when you should, you know, probably like combine them together. You know, just these different things that are just not good design choices and would make the code like really hard to read down the road.

Um, I've seen issues with just versioning. Um, it's still got a lot of bias in the data. My [00:27:00] example of that is like. When I could tell one of these to create a personal site for me and it would stop calling like, uh, stop. Adding an image for a, a male person, um, just because my name is Taylor. 'cause I'll tell it like, here's my name, create the site.

Um, when, when we fix that, we know some of the bias might be fixed. Um, and it's also just this like echo chamber of design. I have this worry that's. Like cyclical of like the designs created by LLMs, then get fed into the data of LLMs and then we're just creating the same designs over and over again. So it's like a creativity piece is still really important.

Um, they still struggle with drawing hands, and you can tell that my slides are not AI generated because there's no weird AI graphics. They're just my weird hand drawn ones. But yes, it, this is for my touching grass game. It, I could never get it to do a hand properly, and I just had to use the mouse instead.

And part of the [00:28:00] struggle is that the agent isn't just like working well with our existing products and platforms and systems. Um, you know what? That experience of like how do these work together is something that we're really on the frontier of, I feel. And so what is agent experience? It's the holistic experience of AI agents have when interacting with a product or platform or system, this idea that, um, the CEO of Netlify DAAs came up with.

And as you go through these tools, you start to see it everywhere. Um, but also one thing I found interesting is that. Good developer experience often translates a good agent experience. One example of that is Bolt had mentioned that they work really well with vet, um, versus next js. Um, and that is because just like the way to set up a vet project is just less complicated these days.

And, and so like some of these things translate. Um, there's still a lot for this to be worked on in this space. Another one example is like, I had, I had never experienced this, but. A [00:29:00] few months ago, apparently one of the tools was just taking screenshots of error logs and then like translating what it was actually saying instead of just like having the error logs feed into the agent to see when something broke.

Like that is like a weird thing of like, it doesn't make sense, but it's just like how the systems we're working together were just not well integrated. And I think, you know, we're working towards that as, as an industry as a whole. Um. It takes a good amount of time to really get good at this. Do you need new skills, existing skills?

I think it's new skills plus some of our same skills. Um. There's this idea of like Picasso's progressive refinement of a bowl from realistic sketch to a few sweeping lines. It's this like classic example of like iterative creativity. He was really great actually at, at drawing lifelike pictures, but if he could have never drawn that lifelike picture, he could have never done the abstract work that Picasso's actually known for.

And so this idea is like we need to get good [00:30:00] at really being able to know the details and stuff before we can abstract that out. To, to prompt, you know, agents. A more technical example of that is you can often write database craze that, um, have decent performance at a smaller scale. But when things scale, if you don't understand how the ORM works, things may suffer.

I see this with AI assisted programming. If you don't understand the internals, there's a good chance that some design choices might perform worse at scale. And so like. Being able to actually understand this stuff is still important. Um, knowing how to fix software isn't going anywhere. If anything, it might increase sometimes with bad design choices that these tools make.

Um, you need to be able to look at code and know if it's good. This, I think, is one of the most important skills you could learn right now. Um, honing in verification skills to understand if like. The generated code is actually valid and good. Um, knowing and understanding common security problems are really important when this [00:31:00] code is being written.

You know, not making yourself more vulnerable because you just didn't understand low level systems engineering, it's probably not going anywhere soon. Um, and just knowing how to technically scale a system I still think will be useful for many years to come. 'cause there might be things that it can work in like lower scale environments, but it's not gonna work.

On a larger scale and just like, how did you bug with and without the tooling, like having, you know how to get the tooling out of a hole that it's gone down. You know, if I didn't know about the node thing, version thing, I would've let it just go, like install yarn. When I was using MPM in a pro, it would've just gone off in a whole other direction, um, and wasted a ton of my time.

And, um, yeah, just knowing how to ask the right questions. 'cause sometimes you can ask it those questions then too. My last, uh, slide on, on skills. I think there's a lot of skills that people don't always think of as like technical skills, but I, I think they're [00:32:00] technical skills. Um, being able to write code is not software development.

There's so much more to it. Um. It's important to view coding, not as just engineering or development, but as like this creative craft and code is just a medium for ideas. So, so where do ideas come from? You know, and I think most developers need to learn more product skills. Um, it's the more human part of the job that parts of it will not be able to be automated.

So what should we build? You know, how do we get good at defining scope, um, understanding what people want versus what people need. Having human taste and not just like the taste that the LLM has, how to understand and connect with humans. I think that's, that helps us get those right. Questions to how do we articulate what we want to build?

Like requirements gathering and writing, uh, written communication is now more important than ever before. Um, explicit instructions, you know, start with that use case and work from there. [00:33:00] Um, and you have to be able to articulate all of this to the tooling in a way that works good for it. And then how to grow.

Um, not just technical scaling, but like go to market perspective and operations. Like, these are things that I still think. We very much need humans for it, and it, it helped Celine more into 'em and makes us even stronger as developers. Oh, and oh, I just missed one thing. Um, and then how to create learning cultures.

That's like a big thing, especially when we're experimenting with this tooling. Um, developer Success Lab talks about this more too, but creating an environment where it's like safe to try things out, be wrong, be right, and like fail and like have good days and bad days with these, with tooling, if you don't have an environment that allows you to do that, it's just really hard to, to be able to learn and upskill.

So I just wanna end on. Fostering creativity and programming about, it's really about creating that space for the experimentation, encouraging [00:34:00] diverse influences and using this tooling to like expand what we can do and what, how we think the payoff for these efforts is. Like sustained engagement, helping us do this for many years to come.

Um, more interesting solutions and just like a overall more healthy, more fulfilling life. And, and by viewing coding, not just as engineering, but as like this creative craft, I think we unlock. Like new levels of what we can do and, and help us keep passion for, for many years to come and it. You know, if we're thinking about timelines, like if we look at history, um, if we look at the move from steam engines to electricity, it took factories like several decades to figure out how to reorganize like the humans and the literal like floor plan of how to take advantage of electricity as a technology.

Um, I think we're still in the really early stages of figuring out, um. How, how teams actually interact with this stuff. It's a lot easier when it's just like one-on-one, but like how does a team work with it? [00:35:00] Um, how do you have consistency across these experiences? Um, and I think it's just gonna take more time than, than people realize.

Um, I think the first thing was getting the quality up, which is still got, you know, a little bit, you know, has more to go. But then like, how do we actually like collaborate and engage? Um, so go out and try them. Um, serverless gave me this feeling before I hope ai, you know, brings it back again, a little bit of just feeling a little bit more powerful.

Um, go out and build and remember. Um, this stuff is exhausting. If you wanna have a long career in tech, I think we need to remember to touch grass sometime. And, um, if you wanna learn more about agent experience, I've included that link. And then, sorry I didn't put this into a short link, but I added on my.

Uh, site, um, some links and resources and stuff. I have a lot more I want to add. So the list is still kind of small, but you can find it there. Um, yeah, thanks so much for having me and um, hopefully this was useful and give you some things to think [00:36:00] about.

**Sean C Davis:** Thanks so much, Taylor. Yeah, for useful. In fact, uh, what I was getting ready to say is what Brian just typed in the chat, which is love this talk.

Very practical without just blanket hype. And I, uh, so I could definitely relate to almost everything you said. In fact, while you were, while you were talking, I was like, I was writing down, okay, this, I'm gonna ask this question. I'm gonna ask this question, I'm gonna ask this question. And then you answered all of them one after another.

Um, but I have, I, I have a few, I have a few left. And because one of the questions that I wrote was gonna be about. How do we navigate this constant changing environment of tools? There's a new tool every week, just like it's 2020 with JavaScript frameworks, and you, you hit on that with the advice of just pick one and try it until it isn't working for you.

So that's where I wanted to dig in a little bit and say, you know, the, another thing that you had said was, um. It's, it might, it, it might be you, right? Like it might be [00:37:00] that you're not prompting or using the tool as effectively as you can. And so it's kinda a two part question here. You know, how, how do you know when it's the tool that is the problem and it's time to switch?

Um, and, and then at that point, what logic do you use to explore the, the new tools that are around?

**Taylor Barnett-Torabi:** Yeah. Yeah. I think it's, I. I think it's hard, partially because some of these tools are being put out there with this expectation that it's still like frontier and that the experience is not gonna be great for everyone.

Like I think there's like some acceptance of like, things will break and sometimes things are bad, so it's sometimes hard to be like, um, well. It's the tool or it's me. It's like hard to know, like things I don't know. I mean, honestly I think just like talking with people is the best way. I mean, 'cause like there could also be like you decide that it's [00:38:00] not for you and it may be you or it may be the tool, but like.

If you're feeling frustrated, don't just keep feeling frustrated. Go try something else. I mean, and maybe you'll come back to it. I know I've seen this multiple times, like people coming back to tools that are like, oh, it's gotten better. Um, I think it's, I think it's just, I. It's like a feeling. I don't know.

It's hard because I, and I also, it's really frustrating when you do see people having that. Like, um, they'll be, you know, somebody will have like a criticism and somebody will be like, oh, but that's the model you're using. And it's like, that may be true, but also that like really sucks to hear. Like, it's like, well you made bad choices, is what that's like saying kind of in a way.

Um, and so I think. Sometimes we do have to recognize that it is the model, potentially. But I mean, generally I think when, uh, the larger community is like, oh, I really like this model, there usually haven't been [00:39:00] super wrong about it. And you know, people still have personal preferences though. But I, one thing to draw that back to is like programming languages.

So when I was first like. First few languages I didn't really get to pick. Those were just like pushed onto me. But when I was like doing my own thing and I didn't know, I remember actually it, I was trying to decide between Ruby and Python, uh, Austin. I live in Austin, Texas. Ruby on Rails in Austin was like really big, um, in the early days.

And so like, I was like, well, you know, it seems like there's this really good community, but Python was also really popular too, and like, so I was like, okay, like. Can't decide just based on like community support. And somebody just told me like, just start doing it and if you like it, keep doing it. If you don't like it, switch.

Like, it, it just like, and I think that's still the thing we need to follow. Um, yeah, you should put a little time in trying to like hold it right, I guess. But [00:40:00] like, don't, don't let it suck. Like don't. Like, get too stress out, I guess, about it. Um, and just try something else.

**Sean C Davis:** I like that. I like that. Now another thing that you had said, um, was that you can use AI to do the things you don't want to do.

And that's something that I've been saying for a while too. Like, yeah, make it do the boring stuff and make it do the chores and it, and it's like. It's a nice story and you can say, you know, keep, keep the fun stuff for you. Keep the stuff that, um, the test that you really enjoy and you know, that's what we can use the human for.

And I think it at, there was a point in time where AI was good at the boring stuff and not as good at the more complex stuff, but it's getting better at that. And so. My question is how today and, and even looking in the future, how do we make working with AI fun? Does it mean like, [00:41:00] well, we use it for side projects and we explore some creativity?

Um, or do we use the side projects to write our, is that the space where we write our code and we use it

**Taylor Barnett-Torabi:** Yeah. For

**Sean C Davis:** everything at work? How, how, where do you find that balance?

**Taylor Barnett-Torabi:** Yeah. I mean, I think the, the side. Projects, creativity piece. I think it's really important. I know I've gone in phases of my life where that just wasn't an option, um, to have that outlet.

And that's kind of like with this is where it's changed, like I need less time to have that outlet. So I think it's still important to have that. I mean, the work piece, um.

You know, for any developers that really like, you know, coming up with like the design, like the technical design of something, I think you should still really hold onto that. Like, I think that is a thing that you, you, you just shouldn't let go. Um, and then, you know, if you're less into the [00:42:00] implementation piece, um, then, then you know, it's easier to let that part go.

I think the other thing is, um. I mean also like. I don't know it, it's tricky because it's like, I think that's like on a, it depends, I guess that's really what I'm trying to get to is like, it depends on what you as a human developer likes to do and you have to figure out like, oh no, this is like it doing this part for me.

I feel significantly less fulfilled and like find ways that maybe you can still hold on to some of that or maybe exercise those same things into like a different. Way or something. I don't know. Um, I mean, we could get really philosophical on like, you know, should we be deriving like too much of our happiness from like, the things that we do from like nine to five.

But um, uh, I think you have to kind of find like. Where, what, what are the deal breakers? And I, I [00:43:00] don't really see teams like telling a developer yet. That's like, um, and I don't know, maybe, maybe at some large places there's like, you know, these letters and stuff being written that might be different. But like, um, telling someone that no, you can no longer hand write this like one part, you know, you have to use the ai.

You know, I think, um, there's, most of what we do as software developers is toil. So I think there will always be lots of things that we're comfortable with automating away. That's, I guess the, my, my personal feeling on it. Um, but yeah.

**Sean C Davis:** That's, that's great. Well, thank you Taylor. Appreciate you sharing the talk and, and sharing your thoughts.