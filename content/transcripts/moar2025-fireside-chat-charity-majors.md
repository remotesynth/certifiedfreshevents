---
_build:
  list: false
  render: never
---

**Brian Rinaldi:** [00:00:00] I am really excited about. Our final speaker is Charity Majors. Charity is co-founder and CTO at Honeycomb. Uh, she pioneered the concept of modern observability, drawing on her years of experience building and managing. Uh, massive distributed systems at Pars, which was acquired by Facebook. Facebook and Linden Lab Building Second Life. Oh God, I remember Second Life. I, it's been a long time since I've heard that, about that. Um, I. She's co-author of Observability Engineering and Database Reliability Engineering from O'Reilly. She loves free speech, free software and single malt scotch. I am with you on all three of those, um, and we are beyond thrilled to have her with us today for this fireside chat.

Please welcome Charity Majors. [00:01:00]

**Charity Majors:** Thanks for having me. I'm.

**Brian Rinaldi:** Right. I'm really excited about this conversation 'cause I, I, I mentioned on like, on uh, blue Sky that I, I've been following you like for, for a while. I think you and I met, got to meet, luckily like year was now a few years ago and it, uh, AWS reinvent. Um, but yeah, it's like I've been a fan of your work. Um, so I'm really excited to have you here.

Uh. For those people who don't know, I am, you know, know you very well, like you're co-founder, CTO of Honeycomb, which, uh, as we mentioned is an observability platform. But I'd love for you to share a little bit more about your journey and how you ended up founding the company and like, what problems did you see that prompted you to build Honeycomb?

**Charity Majors:** Oh, it was such a series of accidents and unexpected events. I have, you know, there's a kind of a, I don't know if you've never, ever noticed this, but. Ops engineers and I very much identify as an [00:02:00] operations engineer. We can call it DevOps, we can call it SRE platform, whatever. But like, I am not a creator. I don't come up with great ideas.

I, I implement and I execute them. And people like me don't typically start companies and don't get funded for starting companies if we try. And I think there's a reason for that because you really want. Founder to have like this sort of reality distortion field of like, I see this vision of the future.

It's glorious. And people like me are like, I see your glorious vision of the future here. All the ways it's gonna fail and fuck and screw up and. Be very unlikely to ever succeed. And this is just not the kind of vibe that you wanna give tens of millions of dollars to. Uh, so, and as a serial dropout, you know, woman queer, I just, you know, but when I was leaving Facebook for the first time in my life, I had a pedigree and VCs were willing to give me money.

And I was kind of like, well. [00:03:00] I on, on behalf of all dropouts everywhere. I accept, like I have a moral obligation to take this money and do something with it. Uh, but like the, the, the, like the story behind Honeycomb the product is, you know, I, I was working at Parse. My co-founder Christine worked there too.

It was mobile backend as a service, massive multi-tenant system, mobile million mobile apps running on it. And so this was around. 20 14, 20 15, and we were encountering, basically, I feel like the center of gravity of technology right now is where we were. We were doing microservices before there were microservices, we were dealing with, you know, we were dealing with these massively multi-tenant systems and everyday parts would go down because some new app would hit the top 10 or something and we'd be like trying to figure out from scratch.

And it turns out that like. Fixed dashboards, metrics, log lines. They're really good at no unknowns. The problems, you know, you're gonna have the problems you see over and over again, [00:04:00] but they're really not good at helping you cope with unknown unknowns. And, you know, we, we use this tool, it's, it's called scuba, like you do high cardinality, slicing and dicing, and near real time rest is history Anyway.

Over the past almost 10 years, like I feel like the entire industry has just been like moving complexity, like is going like this with no end in sight. And so it's a really exciting time to be building developer tools, I think.

**Brian Rinaldi:** Yeah, that's, that's really interesting. I mean, I, I, I hear you on the, they're gonna give me millions of dollars.

I gotta come up with something to do with it. Um, but, uh, so, so, you know, given that background, like obviously as you mentioned, you at Pars, you were doing kind of like, or services before microservices. Um, and now like Whitney, you, you founded, uh, honeycomb around 2016, right? So like, so it's been, it's a lot has changed, as you said.

It's got more complex. [00:05:00] But what other, like, what are other changes you've seen over the years, especially like, um, about. Around, uh, you know, the concept of serverless architectures and, and, and things.

**Charity Majors:** Ooh. You know, I just finished writing. It took me three months to research and I wrote this like almost 7,000, 8,000 words about cost in observing complex systems because Gartner published a bunch of research recently and, and one of their like sort of model customers in 2009 was spending $50,000 a year on observability, and 2024, they spent $24 million a year on observability.

I'm like. Why this is a 40% year over year growth for 15 years. Right. And I think a lot of it comes down to the complexity of systems and serverless I think was a very interesting sort of harbinger of a lot of these changes. And, and in fact, when I was rewriting this cost thing, I was, the last cost blog post I wrote was in 2018 and it's like 500 words.

And I'm like, well. [00:06:00] People keep asking me how much they should be spending on cost and I have no data. Let's be clear. I'm pulling this out of my ass. But observationally, it feels to me like people tend to spend 20 to 30% of their infrastructure budget on good observability. And I've gotten a lot of heat for this over the years.

Like I see, I see these press releases now. Wow. Experts say that infrastructure that that like observability cut 30% of your but, and I'm just like. I pulled it outta my ass and I told you I was pulling it outta my ass. Okay? But also, I was so mentally pegged at that time to this emerging wave of pure serverless infrastructures, right?

That were supposed to save all this money. And really what it did was it moved a lot of money around, right? And so I was seeing these companies, fender famous guitar company, right? Had this pure serverless architecture where they were spending 50% of their infrastructure budget on observability. And it was still like really cheap, but it wasn't really cheap to run Fender, the guitar show company 'cause they [00:07:00] moved all that money to other places.

So like really I think that like dynamism is the theme of the day when it comes to infrastructure. When it comes to observability, there are places where there's just no more monolithic solution. You know, there are no monolithic problems. There are no monolithic solutions. And so again, I think it's an interesting time to be building infrastructures.

**Brian Rinaldi:** Absolutely. And I mean, I agree with you. Like the, the complexity has, it's gotten complex, right? Like, um, and it ultimately, okay, so we move money around things didn't really get cheaper, so I. What, is there still like a, a strong argument? I mean, I've seen people even go so far as to say, you know what? We're going back to, you know, forget serverless.

We're gonna move everything back to on-premise, like in, you know, host our servers and et cetera. And I mean, I. Having been there for that, there was a reason we made this change. So going back [00:08:00] doesn't seem to me to make a lot of sense, but so, but it's harder to sell the benefits. So how do you sell the benefits,

**Charity Majors:** like d hh, like we're going back to on-prem, you know, and what I would say is this.

There is no substitute for knowing your use case. You've gotta know your use case. You've gotta know your business case, your use case. You've gotta, you've gotta understand the range of options whenever we're talking. Also, increasingly. These are data problems, right? And when it comes to data, you gotta know your use case, or like data has gravity.

The decisions you make have ripple effects. They become very difficult to undo. We have more options, more choices than ever. But also I think it's very important for. Technologies to keep in mind, there was almost never just one way to do something right? There are a bunch of different ways to, to skin a cat, to use a terrible metaphor.

Uh, there are a lot of different [00:09:00] ways you look at the tools you have, where you're starting from, you. You make a plausible case, right? And you implement it. And I think the more you understand what your business is trying to do, the more awareness you have of the range of tools available to you and the people and resources and expertise that you already have on your team, uh, and then you try to make a good decision.

And serverless is an incredibly powerful. Tool to have in your toolbox, right? It is like an order of magnitude or two orders of magnitude cheaper to, you know, like we couldn't, we. Here's something people might not know. We use Lambda jobs basically as a query planner for our database. Our self written, self self-hosted database.

We run our query planner lives in Lambda jobs, and it would not be financially possible to run a system like Honeycomb in a cost effective way if it wasn't for that. So we find a use case and, and use it, um, and it's, it's [00:10:00] magic.

**Brian Rinaldi:** Yeah, that, um, I think that that makes so sense. I, it's just, it goes against the, uh, you know, the way the, the industry works, where it's like we're always selling you on the, the latest and greatest thing.

Um, and this is this thing that's gonna solve all your problems. So you need to throw all your money into it. On that note. I wanna talk a little bit about edge computing, because it seemed like a couple years ago we were like, everybody was like, oh, every, we're gonna move everything to the edge and serverless on the edge, et cetera.

Um, and then, you know, I, I, I just like, have we hit that trough of disillusionment around edge or is it really people have finally figured out like what works on the edge versus what doesn't?

**Charity Majors:** I'm probably not the best person to speak to this. This is one of these arguments that I very much observed from afar, and I'm like, boy, this sounds like familiar.

So I love the term trough of delusion, disillusionment. Um, I don't know. Uh, it, it seems to me like a very powerful tool. And again, you [00:11:00] know, the hype cycle, it's our job, you know, as people who start companies, people who try to get new users to give. The optimist's take on how good a technology or a solution could be.

And for most people, it never lives up to that hype, but it doesn't mean there's nothing there. Right. Which is something I think about a lot every time we get these really big hype cycles for ai, for example. Um, but yeah, no, I, I, I think that we are, I think that we're in the dip that you, that you referenced.

**Brian Rinaldi:** Yeah. Yeah. And, and it is, it is hard to kind of, I think, separate out the, the, from the hype from what is useful. I, you know, part of me gets frustrated with the.

**Charity Majors:** Nobody's lying, right? It's our job to be like, here's what's possible. Right? And it takes a while to sort [00:12:00] out what is possible from what is viable, right?

And what is of enough net benefit to adopt something new with all the friction and the learning that that entails. And. As much as we may try, there's some things you just don't know until you've tried, and this is why I really love the sort of like the framework of early adopters and early majority and stuff, because you can learn from your mistakes and you can learn from other people's mistakes, but somebody's gotta be out there making the mistakes or we're never gonna progress.

**Brian Rinaldi:** Yeah. Yeah, true. I mean, I, I think like, for instance, for me, like speaking on the edge computing, I think it is super useful. It's just we, we've, it wasn't super useful for everything. Moving everything to the edge never made any sense. It was always like, okay, there are things, going back to your point earlier, I.

That make a lot of sense to move to the edge, right? Like, like figuring out the use case. Um, uh, you know, but you know, something where my database is sitting in a [00:13:00] region here and, and I'm, I'm deploying stuff to an edge all the way out in Japan and my region is in US East, like, doesn't make any sense. Like you're doing, you're just actually making things slower, inadvertently.

Um, but it took a while for people to kind of figure this out.

**Charity Majors:** This is why if I could be the surgeon General and slap warning labels and everything, I would make it a mandatory disclosure of context. This is the context in which I'm giving this advice. This is the context in which it worked for me, right?

Because I feel like absent that context. It's, it's not very useful, right? Nobody's lying again. Uh, but like the, the situation and the specification, the more detail you can give about in what situ what situation, what context did this work for you? Ugh, the better.

**Brian Rinaldi:** Yeah. Speaking of the hype cycles, uh, let's talk about AI a little bit.

So, um, you know, [00:14:00] mostly we've seen a big transition from like a lot of cloud services now becoming very AI centric, where like, you know, people are, are now deploying these AI workflows and everything. Uh. How do you see that playing out in terms of both, like, you know, everything you deal with at Honeycomb with just like observing these, these tools that are now relying heavily on AI kind of to, to do, to run like kind of typical serverless workflows.

Like, oh hey, now it's gonna run through this AI service that's gonna process things. And um, is it, is, is it making things more difficult to monitor? Is it making it harder to debug these issues? Uh.

**Charity Majors:** Oh yes, immensely. Uh, and I love this topic because it really kind of speaks to the origin story of, of Honeycomb.

Um, you know, we were, I'm working at this massive, you know, uh, developer platform, million mobile apps hosted on it, and every day developers all over the world are just writing snippets of JavaScript and MongoDB [00:15:00] queries and uploading them, and we just had to receive them and make 'em work. You know, we have no relationship with these developers.

Some of them are. New grads, interns. Marketing people, whatever, just we didn't make it work. And I feel like this is what the entire industry is going through right now, is this unprecedented influx of software of a known origin. You know, and this is a problem because historically the way we've learned to debug and re react to problems in these systems is by finding the expert, right?

An alarm goes off, you go and you look, you figure out who made the change or what the change was, and then you find the person who did it, who's an expert. This, well, what happens when there are no experts? 'cause nobody actually deeply understood it to begin with. Uh, great question. I think this is what the entire industry is dealing with.

I also feel like one of the problems with AI is that you say AI and it, it could be anyone from like an so many different things, right? The way you generate the code, the way you [00:16:00] generate the instrumentation, the way you ingest the, the software, the way you ex, the way you export the, the telemetry, the way that you, I.

Do anomaly detection. The way you surface that, the way that developers are you on their workstations. There are so many places where ai, you know, enabled, assisted tools are, are injecting change and chaos and complexity and. One thing I will say is that when you're trying to have observability for AI problems, first of all, I don't think you can have good observability for AI unless it's first embedded in a context of good software observability, right?

Uh, I also think that, that these are trace shaped problems. So many things about understanding and observing software in the future really is. It comes down to the stuff we've been talking about is Observability 2.0 for years, right? High cardinality. High dimensionality. Everything is a, from the moment that you get the user's inputs, you know, you call out to various backends and APIs, you call [00:17:00] out to the model, the model does something, it comes back to the user.

The user gets feedback. That's one giant trace, right? And I feel like. We're moving from a world where all of these different signal types are siloed off into pillars, right? There are three pillars of observability. Metrics, logs and traces. Oh, and profiling and exceptions and errors. And you know, how many pillars do you have?

Like 10, 20, you know, which is absurdly expensive and. We're needing to move away from that world to one where you have a unified source of truth. And I think AI is really accelerating that transformation because Yeah,

**Brian Rinaldi:** yeah, yeah. That makes, that makes a lot of sense. And you know, I think in terms of, of actually in, in observability, I mean like I've seen like people trying to come up with tools that hey, you know, can now it's gonna do it for me.

It's all automated [00:18:00] in that. Okay. And be blunt seems problematic. Um, because, you know, it just doesn't seem, again, you're, you're eliminating not only like then become so dependent on this tool, but you know, that is prone to potential mistakes, but you've also now eliminated the expertise within the company to solve the problem.

And if this tool can't solve it, I mean, where do you, I mean, but at the same time, I can see where, you know, um. Say, sometimes people miss things because they're focused, they're not, their focus isn't there, and AI doesn't have the problem of like not being focused on the right. You know, like it, it sees everything.

So there's benefits, but also I, you know, there's, where do you see the mix being, right? Like you

**Charity Majors:** don't know the future. Yeah. There are a lot of possi. There are more possible futures than normal right now, I think you could say in the fu in the field of technology. Um, uh. I'll say, I [00:19:00] feel like the world of code is on the precipice of, let's say, bifurcating into.

Disposable software that gets generated that we never really expect to understand. We just does it deliver to spec. These specs get increasingly complex, you know, and if we don't like it, we discard it. We generate 10,000 more, let God sort them out. You know, like we figure out some, there's gonna be, I mean, it's just so powerful, right.

Uh. Yeah. General code is gonna become the, it's almost like, you know, minified JavaScript. Nobody expects to read that, right? It's it, it's a one way street. But I do think there's always going to be. The code that runs the world, the transactions, the, the, your bank, I hope your delivery company, right, your things where, from a risk management perspective, [00:20:00] someone's gotta be able to figure it out.

What happened? Where did the money go? Where did the package go? Where did you know? We, we. And, and where, you know, I, I feel like it's telling that we started AI and software with generating new code. As an ops engineer of longstanding, I have long been saying that writing code is the easiest part of software engineering.

Right? It might not be easy, easy, but it's the easy, it only gets harder from there, right? The, whether it's, you know, maintaining, extending. Performance tuning, you know, profiling, uh, you know, migrating, uh, you know, rewrite, like all the other things are harder. So like, it makes total sense to, we started with.

The easiest part, I, I could get up on my soapbox and talk about how much we've been paying software engineers more than we pay operations engineers and how devalued operations has been in a skillset. But I won't, I trust you all get the point. Um, but I feel like we're more, more. Ops [00:21:00] engineers in this sense in the future than software engineers because we, we, our relationship with writing lines of code shifts, we start to realize that, you know, the time we spend understanding the business problem, breaking it down, iterating on it, make, you know, I, I, I think you know, all right, your question was a few hops back from all this, but I think you understand where I'm going.

It's just like. The ownership, right? We can use AI in ways not to just generate lots of shitty code, which is a great use case. God bless. But we can use AI to, one of the most exciting things I saw folks do recently was Slack or Stripe or someone. Had to basically convert all of this JavaScript code into TypeScript and instead of doing a laborious rewrite, which I don't know if y'all have done Giant API rewrites, but it is nasty.

Then instead they spent a couple of mo a month training a [00:22:00] model, and then they basically took it off for like an hour, regenerated the entire code base and flipped it over and went to town, and I'm just like. God damn. That is great. That is great. Now, this is still code that they mean to iterate on. They need to own by humans.

People need to understand it like that is such an amazing use case.

**Brian Rinaldi:** Yeah. Yeah, I mean, I think it's one of those same thing as, as we were talking about, it's one of those things where I feel like we, it's definitely useful. We just have to refine down to what's what, which things it's useful for. Um, and yeah, and you know, we

**Charity Majors:** don't know what the ceiling is going to be and some of these technologies, you know, and we're very bad at guessing.

It's like some of the people who have been like, ah, a GI is just around the corner for the past, like three years and really freaking out about it. Maybe, you know, and some people, and then some things we thought were gonna keep going really kind of seemed to have tapped out. We don't know. I'll say there was this great [00:23:00] essay that was written by Annie Bell, which was about just like the changing, you know, and, and she, which many people made this point, but just like the only constant in engineering careers is that curiosity, wanting to learn, feeling like.

Interested in like upgrading your tools. AI is not going to replace software engineers as long as software engineers don't reject the new generation of tools, you know?

**Brian Rinaldi:** Yeah, yeah. I agree. And I mean, I've made the point. Um, I. And some recent discussions I've had that I think right now AI is like a junior developer who never matures into anything more than junior developers.

So I'm like, if you think AI is gonna replace your developers, it's 'cause you have super low expectations of them. Right. It's 'cause it's, it's always a junior developer. It's like, it never learns. It's never, you know, it's never gonna get any better than it was. Today, like they [00:24:00] released new versions. Yes.

It's slightly better, but like, it's not really learning, it's just, you know, giving you slightly improved responses. So. Um, you know, that's not what you expect of a senior. I agree with you that it's not the code, it's the code is the easy part, but you expect that a senior developer isn't that they've memorized the, the syntax, right?

You expect them just to be able to solve pro like, identify problems. And I've seen this before and I, I know how to do these things and you know that that's what makes you senior is not like knowing code better.

**Charity Majors:** Yeah. And, and I think more. Relevant, or near by analogy, would be the shift away from hardware, right?

Like I'm old enough, I'm just old enough to be like, when I was coming up through the ranks as a baby ops engineer, I would get paid in the middle of the night that. Our primary MySQL had gone down and I had to call a taxi [00:25:00] on the telephone and get a cab downtown to the colo where I would go and push the power button.

Right. And if you were a software engineer, all of the metrics that you had were like, okay, CPU load. How much of my memory, like you, you had to know how to replace hard drives by hand and. That is, it's not a skillset set that's gone away, but all of my ops people in that sense now work for AWS or Google Cloud or something.

And like there's been a generational shift. I, I still feel like the best debuggers I've ever met have had some exposure to hardware and to the Linux command line and to slash proc and all the things under there. But there's a whole generation or two generations of engineers who have come up since then who don't have it, who somehow managed to get by.

**Brian Rinaldi:** Yeah. God, I, you know, bring, you were bringing back memories. I, I remember the, the first, uh, dot com startup, I, I worked for, like, we literally had [00:26:00] like our whole, I, there was a little room in the office and that's where the whole everything ran on. Like, oh, there's all our servers. It was, it wasn't even that big.

Um, but. It's kind of crazy to think, you know, you don't, you don't really have that anymore. I'm, you're, you're kind of disconnected from the hardware where everything's running on at this point.

**Charity Majors:** Maybe die out there somewhere.

**Brian Rinaldi:** Exactly. Yeah. Uh, you know, it's, but then again, you know, when, when you get to, to my age, you start to reminisce a lot.

Um, speak on that note. I actually like, I want to kind of turn, turn the topic a little bit. 'cause you're very outspoken on, on social and everything else about topics, both on tech and not on tech. But I think, you know, related to, you know, coming back, coming from starting in, I, I got my first job in tech around 97.

Right. Um, and it was filled with so much hope [00:27:00] for the industry and just like we were, we, we were gonna build. Great things that were gonna change the world for the better and make, you know, and then, and then somewhere in the two thousands, like, okay. Yeah, we definitely, I could see it's changing the world now.

I think we're at the point where we've, we're like, okay, we did change the world. Um, and, and, and I don't think what's for the better in many cases. I mean, it's not like universally bad, right? But like we, how do we. I feel like as an industry, regain our footing and, and find, find a path towards building technology that's, is really improving people's lives.

Um, I dunno, it's, it's very open-ended there. Take, take it wherever you want to go with it.

**Charity Majors:** Brian, I didn't know I was gonna try and solve all the world's problems in this fireside chat. Please. You're like, you don't, you don't have to make slides no big, you know. I am just kidding. It's such a great [00:28:00] question.

You know, the Cory Doctoral concept of in acidification,

I, I am sure most of the people listening to us, it's, it's sucks to, you can't see a room of people that you're talking with, you know, but like, I bet a lot of people here are ing and sort of, if you ha, if you don't know what I'm talking about, Cory Doctora and ification, um. Such a hard problem. Um. I should recap in ification basically, if I can encapsulate, he's like, look, uh, these, these big companies, correct me if I don't get this right, right, Brian, but he's like these big companies, they start off giving the excess value that they generate back to users, uh, like Amazon, right?

All cheapest. You could possibly get, went to the customers and then it incentivizes a little bit and all that excess value that you capture, uh, goes to the sellers and then it incentivizes a little more. And all that excess value that you generate goes to [00:29:00] the investors and the experience gets worse and worse and worse and worse for the customers and then for the sell.

And you can see this happen, Amazon, Etsy. Google, you know, Facebook, Twitter experience gets worse and worse as soon as you've got these like monopolistic big companies and they're subject to market pressures. And you know, and I'll add one, which is, there was this great publication by, oh, I'm crazy. I like brain.

Brain freezing on their names, but like this, this husband and wife team who run like a people consulting agency. They were like, and then there's the ification of work and like, look, okay, so like three years ago the job market, uh, you know, employers felt like they had to. Woo. You know, uh, to like compete for employees.

And so they were so like good to them and perks and stuff. And now, a few years later, like how has your recruitment pipeline changed? How has the way you treat your prospects [00:30:00] changed? How has the way you treat your employees changed and 'cause I think that really speaks to your ethics, right? How much of this is situational and how much of, and the point that one of the points that they made was that.

First, the point that Corey made is this is not inevitable, right? This is a, this is sort of a gravitational force, but the good people do battle against every single day at their jobs. You know, people inside Google Engineers, PMs, pushing back against these forces. But there are times when. They lose right?

Sometimes. And a lot of this has to do with lack of regulation, lack of guardrails. You know, LA when budgets squeeze people, you know, and, and, and the point that this, this pair of folks made was that when it comes to being an employer, managers can bring discipline to your org to resist in acidification, or they can just go with the flow and inify away, you know?

And I. Love [00:31:00] that framing. It's not inevitable. Right? Yeah. Which is not to say that when marketing conditions change, you don't have to tighten your belt. Sometimes lay people off. Sometimes you make harder choices. But like, is the way you treat your employees, does it come from a place of deep, you know, caring?

Or is it just you treat them only as well as circumstances? Absolutely. Force you to treat them. And I think that's a really, like, I can't. I can't impact the world, but I can take whatever power and authority I do have and make sure that I am treating people as well as I possibly can. And if you have to lay people off, if you have to let good people go, there is such a wide variation in how you can do that, right?

How ethical you can be, how considerate you can be, how much you can do the work to try and look for other options. Severance, you know, there are so many places where. We we're always so much more conscious of what is out of our control than [00:32:00] what is under our control.

**Brian Rinaldi:** Yeah. Yeah. And no, I I, I'm, I'm like nodding at throughout that saying like, yeah, totally.

I agree. And it's part of even what's, what's driven me like in terms of finding places that it's gotten harder and harder to find places that do believe in that, like that, that are, treat their employees right. Um, that, you know, care about them. 'cause I think there was a lot of, like a lot of We care signs put up.

Not a lot of women care. Part of

**Charity Majors:** that is because it's not enough to just care about your employees. You also have to. Run a business that succeeds, that grows, that wins. You earn the right to lavish perks on your employees. You earn the right to hire bigger teams. You earn the right, you know, like you can't just do one or the other.

It's not enough to just care about people. You also have to build a fucking business that really [00:33:00] excels, you know?

**Brian Rinaldi:** Yeah. Yeah. No, it's a difficult challenge. I mean, I think, you know, I think the, and the easy route is, is ultimately like just the easier route is, is just to kind of take those resources and drain them for everything they have when you don't have the right answers for building the business.

Right? Like, it's like, okay, well I don't know what the solution is, but I know I can get more out of these people and, and, you know, yeah.

**Charity Majors:** And in engineering, like small startups, the default, the easiest route is usually to do whatever your investors want and they have an interest and they're not always cons conscious of the downstream ripple effects of some of their, their decisions.

But you can certainly, yeah, yeah. You can make many people happy and live to fight another day, you know?

**Brian Rinaldi:** Yeah. I mean, I, I, I've seen that before. Like I didn't work for startups for a long time and have been now in the past years, like at more at startups, and one of the things that I, you know, is that.

There is that pressure. Yeah. I think, [00:34:00] um, what I've seen is investors aren't trying, obviously they have a vested interest in this business doing well, right? Like, and, and you know, it's not that they have necessarily bad advice, but it tends to be like one size fits all advice, you know, because it's like, I've seen this in these 10 different companies that I've helped and, and it generally, some, it mostly worked.

Here's the, my advice to you, founder, this, this is what you should do. Um, but think, you know, I don't know. I've never been in that, those shoes. You, you have been, but there's, there's a part of you, like, you can take that and say, okay, now I can, how do I apply that here in a way that works for us? It's not, it doesn't necessarily mean you just do what they say.

You just, you take it and say, you know, okay, this is a, a kind of. Best practice, but it's not necessarily in a structured manual. Right. It's broad and I can do with it what I need to. [00:35:00]

**Charity Majors:** Exactly. Yeah.

**Brian Rinaldi:** Yeah. Okay. Well I will, I will tell my bosses and I'm right about that.

**Charity Majors:** Good to go.

**Brian Rinaldi:** Yeah. And so, you know, speaking on, on that note, um, you know, the last topic I wanted to go is, you know.

We were talking a lot about careers in tech, uh, where, what do you like, what would be your advice if you were giving advice to people kind of starting out? 'cause now's a really tough time to get break into the industry. Um, you know, not just, not just because of layoffs. The layoffs are one thing, but then the, the interview is a nightmare.

Um, and so like, what, what would, I've, I've talked to a lot of people trying to break in or just even. Get back in on the Jo, like had been laid off and trying to get a job. Like, where would you invest your time? What are the things that you think that they would be valuable that might make them marketable, [00:36:00] um, in investing their time in learning at this point?

**Charity Majors:** This is such a hard problem. It's such a hard question, and the first point that I wanna make is that. There are systemic reasons for this. I feel so fucking lucky that I got into tech when I did, when we were all like you. Everyone was just kind of figuring stuff out together. And so if you could find your way around the Linux command line, you could swing some web code, you could figure stuff out, you could get a job, right?

And I think the first thing, I honestly don't know how to give advice to up and comers. So the advice that I wanna give is to people like us is recognize how hard it is. Recognize that the juniors that are approaching you today are actually way more skilled, more educated, more experienced than juniors have.

Ever been. Any new hire, whether it's junior or senior, is not gonna be productive immediately. It's gonna [00:37:00] take 'em a few months. You have to invest in them before they become productive. Juniors are an essential part of the ecosystem. You can't have a staff plus or a principal engineer without a lot of juniors for them to like orchestrate and stuff like that.

That work doesn't exist without lower levels. Some of the most productive people I have ever worked with have been intermediate engineers because they're not constantly getting pulled around in this meeting or that meeting or this coordinate. They just put their headphones on in the morning, they go down and they just crank.

They crank features, they crank diffs, they, they're writing. They're just cranking shit out and most, let me be honest, most of the problems. Engineering wise, we have to solve in this industry are not that hard. They just need someone to really own the consequences, to really care, you know, to, and it's an ecosystem, right?

We need fresh blood coming in. We need, we need people keeping us honest about how complex are these [00:38:00] systems. The questions that Juniors ask are. The work that you do to answer those questions gets reused over and over and over and over again. And so if you're a junior, oh my God, my, my little sister graduated with an engineering degree about seven years ago, and that's when I became sensitive to just how difficult this is.

I wish I knew what to say, that the advice that I would like to give is I wrote a long. Piece in, uh, stack Overflow, uh, year ago, God, about how, uh, AI is not going to build your engineering team for you. And, and towards the end of that piece, I point out that I know of a lot of places that have, in recent years begun a new program to hire and onboard and train junior engineers.

Every single one of them is so glad that they did it, and every single time. This was not driven by managers. It came from engineers [00:39:00] because so many things about running a high performing engineering org sound absolutely counterintuitive to higher level managers, and this trickles down. Engineers know what builds a high performing engineering team, and this starts with having a pipeline of fresh blood.

Engineers know this. Every place that I know of that has brought up a new program for is because engineers. Fought for it and made it happen.

**Brian Rinaldi:** Yeah. I, I, you know, it, I wanna follow on two points you made. First of all that I started my career at a time when, I mean, like, honestly, I, I, I can't give advice because I, I, I barely knew what I was talking about.

I, I, I could build a website 'cause I taught myself more or less and like, you know, I didn't even go to school for it. And, but they were so desperate. It was like, well, you wait, you built this hired. Done. So it's hard for me, like people ask like, well, what advice would you give? It's like, I mean, [00:40:00] I, you know, it's hard for me.

I it was super easy about you

**Charity Majors:** drop that. Yeah.

**Brian Rinaldi:** It's so easy. Yeah, yeah, totally. And, you know, and, and also to, to your point, um, you know, I ran this organization when I was living in Orlando called Orlando Devs, which is like the biggest like. Group there for, you know, we ran a lot of programming and stuff for developers and people, like, I remember people coming up to me, these guys, you know, we're trying, we've been trying to hire a senior engineer for like two years and we can't find anybody.

And I'm like, I. I'm like, do you could've done in two many years that time? I know. I'm like, and, but then you tell them like, you know, okay, well why don't you look at, I've got a lot of like junior folks who, you know, oh, we just don't have time to ramp them up, and like, it's been two years. Thank you. I see this

**Charity Majors:** too.

**Brian Rinaldi:** There's this, this

**Charity Majors:** big impression, it's like when you say junior, they hear incompetent can't contribute. Yeah. Yeah. [00:41:00] And the thing is, Brian, when you and I were juniors, that was true.

**Brian Rinaldi:** Good point. But it's not

**Charity Majors:** now.

**Brian Rinaldi:** Yeah. No. Absolutely. Um, so, okay, well, um, I, I've really enjoyed this conversation. I wish, I wish I could keep it going, but unfortunately we are out of time, uh, charity.

This is, was so great and, um, you know, hopefully I can, we can keep talking about this down the road sometime in the future. Um, I really appreciate you coming out and, and sharing all your thoughts and I hope everybody enjoyed it as much as I did.