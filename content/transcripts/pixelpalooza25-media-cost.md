---
_build:
  list: false
  render: never
---

**Sean C Davis:** [00:00:00] Welcome back to the final session of Pixel Palooza 2025. Now joining me for a fireside chat. We have Tammy Everett. Tammy has spent the past two decades studying how people use the web, and since 2009, she's focused on the intersection between site speed, user experience, and business metrics, and she has a book on the topic.

It's called, time Is Money, the Business Value of Web Performance published by O'Reilly. It distills a lot of that research, so recommend you all check that out. And Tammy today is the Senior Director of Community at Embrace, and she's also the co-chair of the world's only web develop or web performance Conference Performance Do Now, which is held every year in Amsterdam.

Also, Tammy is a fun fact. She's the first owner of uber.com. [00:01:00] Unfortunately didn't make her rich. And so because we're doing this, uh, fireside chat style, I've got a ton of questions, uh, queued up already for Tammy, but I wanna hear from you all out there as well. So I'm gonna keep an eye on the chat as, uh, Tammy and I are talking.

So if you have questions, just drop 'em in there and I'll find a way to work them into our conversation. So thanks for being with me today, Tammy.

**Tammy Everts:** Yeah, my pleasure. Thanks for inviting me.

**Sean C Davis:** Absolutely. So I think the, um, the most natural place to start is to, uh, you know, give us a, a little bit of a background on the work that you've done and, uh, also I'll, I'll drop in here.

I would love to hear a little bit more about this uber.com story.

**Tammy Everts:** Well, I won't leave you in suspense. The Uber thing was, uh, way back in the early nineties, me and my husband and a friend of ours from university, we started a zine on paper that we called Uber. And then it was, it's really inexpensive to print on paper.

So we, we started publishing it online. We had a website back when websites were gray [00:02:00] and had black text. Um, and, uh, we called it uber.com because I think I mentioned that's the name. That was the name of ine. And so, yeah, we were the first people to buy the domain and we published the zine for a while.

Can't find it on the way back machine because it. Predates the way back machine, but I wish that I could have some screenshots to show you. 'cause uh, yeah, we, it was, it was fun times. We sold it when, uh, when we kind of, uh, decided to, you know, disband the magazine and we made tens of hundreds of dollars.

And then, you know, like years later we're like, Uber, what's this? So yeah, it's, uh, it's kind of funny.

**Sean C Davis:** That's amazing. That's amazing. And so you've had a, you've had a recent change. 'cause I mean, when we were first talking about, um, this chat today, you'd worked at Speed Curve and now you technically work at Embrace.

So can you tell us a little bit about, um, your recent history?

**Tammy Everts:** This is my first time doing a talk [00:03:00] as officially as an embracing as I'm told we call ourselves. So, uh, embrace Acquired Speed Curve. It was just announced, you know, a week ago. Um, it's been in the works for a little while, so it's exciting to, to finally be able to announce it.

And so embraces, um, platform is an observability platform, so they do, uh, they focus on user, uh, I should say we focus on user centered observability. Speaker Curve does web monitoring, which is very much like kind of front end and web. So it's kind of a really great joining of forces because, um, the goal is that, um, people who use our tools will be able to monitor and understand the performance of their site and their native app, um, on.

All, all different platforms. So it's, it's pretty exciting. So,

**Sean C Davis:** yes. That's great. So do you, do you see yourself doing something similar, uh, at Embrace as you've been doing at Speed Curve, or do you, you feel like it will, [00:04:00] uh, change a bit?

**Tammy Everts:** Uh, hopefully just like more and even better because in, like, I've been at speaker for eight and a half years and, um, like I said before, focus is on front end web performance monitoring and, um, you know, kind of providing optimizations, suggestions and things like that for, uh, for, for, for web-based properties.

So being able to, and we, so we, we. I would always get the question from our customers. We have like lots of customers 'cause we've ramp been around for a while. Um, and I would always get this question, oh, but you do native apps. And I'd always have to say like, no, sorry, we don't. Um, so now I don't have to say that anymore.

So, um, I'm really looking forward to, um, digging into embrace. Data and like kind of understanding what performance means and what kind of metrics that you track on native apps. 'cause it's not apples for apples, it's a little bit of apples and oranges. So I'm, I'm really looking forward to that. [00:05:00]

**Sean C Davis:** Oh yeah, that's, that's a, that's a really good point.

It's a, it's a totally different platform, right. You gotta, you gotta look at it differently. Yeah.

**Tammy Everts:** Yeah.

**Sean C Davis:** So, so we wanna talk about web performance and primarily on the front end. And, um, so usually when I'm, I'm chatting with folks about this, one of the first questions I ask them is, why does it matter? Or, you know, just very broadly speaking, why should folks care about web performance, particularly as it affects the user experience?

**Tammy Everts:** Yeah. So, um, I. I mean, it's so funny because I've been doing this for so long. I take it for granted and then I'm like, oh no, wait. I wrote a book about this so that, because I want people to know that, that, that these issues, you know, are, are, are kind of real and they tie back to, um, your business and your and user behavior.

Um, so. It kind of varies from site to site. There's a, you know, lots of different studies out there that kind of dig into this, but what it boils down [00:06:00] to is that after many years of studying many different websites, what we know is that as pages slow down from a user perceived. Perspective, it affects business metrics, like, um, bounce rate, cart size, conversion rate, um, all kinds of things.

So, um, it, it, it stands in your best interest to make your pages appear as quickly as. They can to your users, because ultimately it, it hurts them. I mean, a crappy user experience is a crappy user experience, and we all know what slowness feels like. Mm-hmm. And how awful it is. Mm-hmm. Um, but it also hurts your business.

So, um, yeah, that's, that's kind of it in a nutshell.

**Sean C Davis:** And is there today, is there kind of a, a golden rule? Like if a page takes this long to load? You know, you're gonna lose some percentage of your, um, user base. [00:07:00]

**Tammy Everts:** Um, I wish it were that easy. I get asked all the time if there's like a kind of a, a, a, a bit of a unicorn metric to chase or, you know mm-hmm.

Some kind of, of, of universal threshold. I mean, I did a talk at, at, you mentioned per performance.now, um, the conference that I, that I helped chair, um, I just did a keynote there, a couple. Three weeks ago where I focused on getting people to think about bridging the gap between pragmatic goals, for example, like, oh, if we make for our particular site, we've done the research and we know that.

We'll have peak conversion. So basic, basically best possible conversion rate if pages render in two seconds. So that might be the number for your, for your particular site at this particular moment in time. And so two seconds kind of feels like, okay, that's your goal. Then there's also a user experience goal, which is that really [00:08:00] to deliver a beautiful, seamless user experience that makes people feel like, oh, this is lovely.

I'm just flicking through like pages on a book. Like just, it's as seamless as anything else that I do in life that is lovely and enjoyable. Um, for that you are kind of aiming at a hundred milliseconds, which gives you that illusion of, of instantaneously. So I kind of made up this term like between the, like bridging the gap between pragmatic, which is that two second business goal and a hundred milliseconds, which is kind of like your magical, seamless goal.

And I came up with the, the, the term pragmatical. So hashtag um, so, so that's kind of a long answer to your question. You know, you have to look at your own data to figure out, well, what's your threshold? What shouldn't you be worse than? But ideally, from my perspective, I think you should be better than just good enough.

You should kind of aim for as close as possible to that a hundred millisecond point.

And what type

**Sean C Davis:** of, um, metric like for, for companies that are [00:09:00] trying to study that and, and like get their kind of sweet spot or set their own, um, organizational goal, what are they really looking for? What are those, those key signals?

**Tammy Everts:** So there's a, in performance, there are. Dozens and dozens and even hundreds of metrics that you can track that are relative to different things that are happening on the page. Um, Google did, uh, a really helpful thing a few years ago where they coined three metrics that. Kind of correlate with different elements of the user experience.

Um, they call 'em core web vitals. So the first one is largest Contentful paint, which is, um, when the main kind of you, the hero image renders in the browser. So that's really helpful because it tell, it gives you the message that the page is responding and you're getting meaningful content back. Um, the second metric is cumulative layout shift, [00:10:00] which kind of tells you how janky the page is, like how much our images and texts and things like that kind of moving around the page because that's very, very irritating and it can be really problematic, especially on mobile.

And so cumulative layout shift is, is the second metric. And then the third one is called interaction to next paint, which tells you how responsive the page is. To any user interaction. So whether you're clicking or tapping or, or, or doing a keystroke, whatever it might be. So those are three kind of good metrics to start with.

Um, Google cares about them for SEO reasons, so it's really, you know, if you, if you're not familiar with these metrics and you care about. User experience and SEO, which hopefully you do. Um, learning more about core web vitals is really, really important. And then there's kind of like a couple of other metrics that people, you know, in addition to core web vitals that I would always recommend people familiarize themselves with.

And one is just backend time or time to first bite, which lets you know, is it a server issue? So it's not on the front end, [00:11:00] but you should know what that backend problems as well, because if backend times are slow, they're gonna push out all of your front end metrics. Um, and then start render, which is kind of like, is anything happening in the browser?

So start render can be a really, a helpful metric because, um, it's supported across all browsers. It's very, it's, it's, it's, it's, um, supported by synthetic MO testing tools. It's supported in really user monitoring tools. So it's fairly universal. It's like the o positive of, of performance metrics.

**Sean C Davis:** And do you feel like if, um, or I should say, have you found that if, you know, you look at all of those metrics and you land, uh, maybe I can ask this in two ways.

If you land in the green, are you typically in a good spot versus if you land in the yellow, are you typically not in a good spot or is there, um, is there more nuance that you should consider with those results that you give back?

**Tammy Everts:** So if you're thinking about core web vitals, for example, because [00:12:00] Google does have recommended thresholds for each of each web, vital.

So thinking about largest Contentful paint, for example. So when the hero IMI image renders, so Google considers anything good that is faster than 2.5 seconds, and then that's, so that's green. And then, uh, yellow or orange is 2.52. I should know this. Four seconds. Um, that's kind of the needs improvement area.

And then anything worse than four seconds is in the red. It's poor. And that's where, you know, according to Google it, you're kind of in the problem zone. So, um, those are helpful as a place to get started, but they're really just a starting point because, um. Their Google threshold's based on aggregating a lot of data.

Mm-hmm. Like that they're capturing via Chrome. Um, but it's not specific to your site. So for example, um, like at speed curve, we, when there's a new metric, we like [00:13:00] to, um, do some investigation using our own customer's data and see, well, how does this metric actually correlate to user behavior? Or how does it actually correlate to.

Like conversion rate or business metrics. And we found in, in looking at, um, data for a lot of different sites and how they performed on core web vitals, that actually for, for a surprising number of sites that I'm trying to think about how to express this. Um. If under 2.5 seconds is considered good, according to Google, you would think that, oh, okay.

Well so long as my pages, um, have an LCP time of 2.5 seconds, I'm fine. But when we actually look at real user data, we found that for quite a large number of sites. They needed to be actually faster than 2.5 seconds to have that peak conversion rate. So, you know, [00:14:00] it could vary. It could be 1.1 second or 1.5 seconds or whatever.

But having pages that's ju that are just 2.5 seconds for LCP, you could be losing conversions because. Because really your peak conversion rate is gonna happen if you make people's experience faster than that. So the Google, as I said, the Google, um, recommendations are helpful, but I wouldn't use them as your, your, your Bible.

You really need to look at your own data and figure out what your own goal should be.

**Sean C Davis:** Yes. That's, that's, uh, I mean, it's, it's such a good point because you, I, I don't know, I feel like there's that, that kinda like. Human reaction where we see green and we're like, cool, we're good to go. Right? Like, this is amazing.

And the thing that can be misleading or, or maybe a misconception. I wonder if there, are there other, uh, glaring misconceptions that you've come across in recent years, uh, that folks have around, I mean like maybe it's users or even businesses that, that they have [00:15:00] around, um, performance in general.

**Tammy Everts:** So glaring misconceptions, well.

I mean, kind of on on point with the topic of like image weight, for example. Mm-hmm. I think there's, you know, thinking about that, um, there's. A lot of misconception around whether or not excessive image weight is still even a problem on the web and, um, how much our various tools are doing to help or hurt.

So, you know, the web is. How we build pages is always in flux. And how we monitor pages is always changing because, you know, all the tools and the vendors and the browsers are kind of trying to keep up. So, uh, just as a for instance, um, which I can pull up a slide here that I [00:16:00] made.

**Sean C Davis:** Great. Yeah, it's

**Tammy Everts:** okay. Um,

can you see that?

**Sean C Davis:** Yes.

**Tammy Everts:** All right, so this is data from the HTTP archive and what it shows is that, uh, so HTTP archive looks at like. Million plus pages on the web and it crawls, uh, twice a month. And it comes up with a lot of really interesting page related data. And so, according to the latest crawl of the HTTP Archive, um, the median page, um, serves like o over a meg of just image weight.

To desktop users and you could think like, oh, that's not so bad, you know? But actually when you look at the 75th percentile and 90th percentile, it's getting up to like close to seven megs of just image weight that's being served.

**Sean C Davis:** Wow.

**Tammy Everts:** And then. For mobile, it's almost as [00:17:00] bad. So think about it like serving more than six megs of data just in images to your well mobile device, which you know, you can have Yeah, all kinds of different connectivity problems, CPU issues if you're using an older device.

All kinds of, all kinds of issues. And a few years ago, um, I did, I was invited to participate in a Google machine learning study that looked at like. Like many millions of, uh, sessions, user sessions. And what we found when we looked at all that data was that the number of images on the page was the second greatest predictive conversions.

So the sessions that didn't convert on average had 31 images on the page. The sessions that did convert had less than half that, or sorry, just, just over half that. So 19 images on the page. So like quite a lot. And the total number of page elements was the first. Greatest predictor of conversions. So image weight [00:18:00] really does matter.

It's a, it's a, it's a, it's a powerful indicator. Oh, and then one other thing actually I wanted to, to mention is that excessive image weight, like 26% of uh, searches are Google image searches and excessive image weight hurts your SEO ranking in Google image search. So that's something that people might not be aware of or realize.

And. What can, what can cause problems is that people might not have visibility into how they're building their pages and what that is doing in terms of, uh, resizing or optimizing images. So a lot of people think that resizing is the same as optimizing. And it is not, it's, um, you, so when whatever tool you're using your CMS or, or what have you, might be resizing your images, you're throwing like a three meg image into the, the CMS.

And it might be resizing it to fit the page, but it's not necessarily [00:19:00] optimizing it to make it small. So there's a, there's a, there's a, a distinction there that some people might not realize, especially as you have more and more teams. More and more people touching the page who might not understand the performance implications of what they're they're doing.

They're just grabbing an image from a, a database in your company and just slamming it into your CMS. So, so those are, are, are very real problems. Um. Sorry, I'll stop for a second. Did that kind of answer your question?

**Sean C Davis:** Absolutely. And those, those numbers are kind of astounding 'cause you're, you're really talking about like, some of those sites are like 30 images times seven megs per image.

It's like that's a massive, massive page. And I could see, I could see how Yeah, that's, that's not going to convert. Um, it made me curious as, as you have chatted with your clients over the years, um. I'll kind of ask this in two parts in my part. Does [00:20:00] your recommendation usually come from, or, or does it, is it that you put the optimization onus on the content editors before they're putting it in the CMS?

Um, or do you usually recommend that they talk to their developers and based on that, like, or, or if you've done both, have you? The second part is, um. Have you seen more or less success based on like where that optimization is happening, you know, programmatically versus, uh, maybe more process based?

**Tammy Everts:** Yeah, there's not really a single answer to that because teams are, can be so different.

Like, you know, ideally if a company has like a really healthy usability and performance culture, which is. Not maybe as common as I would like to see. They're educating everybody across the board, whether they're content creators, site editors, their dev team, their engineering team, about the implication of of everything that they build on the [00:21:00] page.

Um. So I guess the, like a simple way to kind of put it is if you're using a CDN content delivery network, which a lot of bigger sites are, but smaller sites don't use CDNs. Mm-hmm. So if you're using a CDN, you wanna make sure that your CDN is actually turned on, or that you've, you've enabled image compression and other image optimization strategies with your CDN.

So, um, you know, ideally your CDN suggesting it to you, but you wanna make sure that you're, you're doing that. And if you don't use a CDN, then you absolutely do need to make sure that anybody who is uploading images to your site understands that the images need to be the correct size. They need to understand that responsive imagery sizing is not the same as optimization.

Um, and, and there's a lot of good resources online. I'm, I'm not a developer myself. I'm, I'm a UX person, so I kind of just know enough to kind of say like, do that, don't do that. Um, but then getting into the nuts [00:22:00] and bolts of how it's done, there are people who have a lot more expertise in actual strategies than I do.

Um, but yeah, so I. Another couple of strategies that, um, are get used, but then also, I mean, there's no bad strategies really. It's more just their application. And so as an example of this, um, we talk about lazy loading. So lazy loading is a really great opt like page optimization strategy. What it does is, um, when used well, non-essential images, so images outside kind of the viewport get lazy loaded, and so they're not blocking what we call the, the critical rendering path.

So the critical rendering path is basically ideally the shortest possible line between that first HTML call of the page and your meaningful content. And the fastest sites typically have a really short critical rendering path. [00:23:00] If a page takes a long time to render, um, and it's not a backend issue, it's often because there's a lot of stuff in that critical rendering path, it's just kind of getting in the way.

So that could be JavaScript, it could be image files that aren't your main image. It, it's just a kind of a, a bit of a, a messy page. So. Lazy loading is a really great strategy. The problem is if people implement it too aggressively, and then you get issues like this where you're lazy loading the main image, which you don't wanna do, and then that hurts your largest Contentful paint time because your, your important image is being called way, way, way too late.

Um. Yes. And I and the other, sorry, go on. Let's

**Sean C Davis:** Oh, oh yeah. So I, I, um, I think that kind of bringing it back to, um, you know, where, whose responsibility it is. I, I like that you were, it seemed like you were really getting at, you know, everybody has to, every, every, everyone who plays a role in bringing this content or this code to this particular [00:24:00] page has some level of responsibility and needs to consider.

Performance in that way. 'cause you know, like you said, there's, there are a lot of different ways to implement what that performance might look like. And I think that's, uh, you know, that, that, that makes a lot of sense. It's, we have a, um, a note in the chat here, um, where Courtney said, uh, they have to send reminders to their team often, and like, yes.

It's a, it's a thing that we have to constantly talk about, right?

**Tammy Everts:** Yeah. And, and it's understandable. I mean. These days, it feels like teams are smaller. Everybody's asked to do more. Um, things are happening fast. You know, it's, it's really easy to intentionally or unintentionally skip a step that doesn't feel necessary because, you know, you're on your local and the image pulls up quickly for you, so you don't think of it as being this huge image.

Um, so it's, you don't recognize that it's a usability problem. I mean, this is why, and this isn't a plug [00:25:00] for speed curve specifically, it's more just a plug for monitoring in general. Like you need to, you do some form of external monitoring. Doing synthetic testing on your pages, doing real user monitoring of how your site actually performs for real users out in the, out in the wild, so that you have that visibility because your own visibility does not equal your user's visibility.

Your experience is not your user's experience. So, um, so I'm, I'm a huge advocate of like, just always be testing. Always be monitoring.

**Sean C Davis:** I love that. And you know, what's, what's interesting to me is these. Tools in both hardware and software that, um, continue to advance, give us the ability to create things that are even bigger and bigger constantly.

Um, have you, have you also found that, so we were talking about kind of like at like Yeah. That two seconds to two and a half seconds is usually that cutoff for Yeah, it's okay. A hundred milliseconds is instant for those [00:26:00] metrics. I mean, have our. Have our at have, has the user's attention span gone down over time?

So do we see like creators creating bigger things and people getting more impatient? Or has that, has the user experience, uh, or user expectations remained, um, relatively stable.

**Tammy Everts:** I think user expectations are really, it's a really, that's a really good question. I think user expectations are really hard to pin down because they're so contextual.

Okay. Um, so just as an example, um. Think about how you might engage with like a travel booking site. So when you are at home and you're planning a vacation, you're using the booking site, you're researching, you're enjoying poking around and you know, you're kind of going down this rabbit hole and you don't mind spending a lot of time on this site to do, to do that research.

'cause it's fun and it's interesting. Mm-hmm. Um, and so if pages are a little bit slower, you're probably not gonna feel any sense of [00:27:00] urgency around that because you're like, oh, well, it's just pulling up more media information for me to look at. Um, but then say you're in the middle of your trip and something goes wrong with your booking, you need to rebook something.

Or, you know, you're kind of in one of those like semi crisis things that can happen when you're on vacation. You're going back to the same site and maybe this time you're on your phone. You're, maybe you're at the resort that you're staying at and hotel wifi is usually terrible and you're just trying to like make some change and the site isn't responding or it feels really janky 'cause you're on your phone and things are moving around and suddenly everything just feels much more irritating and annoying.

So you might be, the site might be the same. The thing that's changed is you and the context that you're, you're approaching it with. So I would say that the one thing we can't. Rely on as developers, engineers, usability people, is this idea that there's like a set, [00:28:00] um, expectation that users have. And it's kind of why I feel like that goal has to be kind of, make it as fast as you can.

Like don't just meet expectations, exceed expectations. 'cause you just don't know what those really terrible experiences are gonna feel like. And people, when they suffer a really bad experience. Even if it's, and, and they're, they're stressed out. They kind of, they, you know, people blame the messenger, you know, like mm-hmm.

If the site's not really, like, they're angry, they're annoyed, they're maybe thinking, I'm not gonna use this site again. And that's their last impression of your brand. Mm-hmm. So, um, and that's maybe what they might tell people about, they might leave a review for, for you on, you know, whatever, whatever review.

Tools they're using. So, you know, you really just need to always think, like, don't think about what your user expects on their best day. Think about what your user expects on their worst day.

**Sean C Davis:** Yes, it is such a great point because I, what I started thinking about was [00:29:00] what the, the industry that you're in or the type of user that you're trying to serve.

Would, you know, kind of change your benchmark just across the board, but you, I mean, even that example was like, it's the same website, it's just the user in a different scenario has a completely different expectation. And that's, yeah. That's fascinating. So I, I really like that. Yeah. Make it as fast as you can.

And so, you know, something else that, um. I know we had been, we had been chatting about previously was kind of around, but the accessibility and sustainability of images because it's, and, and, and I think this topic has really, it's surfaced quite a bit recently in this age of ai because we're like creating so much, so fast and we do it on this little tiny screen and we're so many layers of abstraction away from like.

The thing that's actually making all of this work. [00:30:00] Um, and so, I mean, what, you know, what should folks consider, um, and, you know, not just to make, uh, the pages faster for users, but there are, are there other implications in terms of accessibility or sustainability that, um, that, uh, developers and, uh, web stakeholders should consider?

**Tammy Everts:** Yeah, the, well, there's. It's interesting 'cause I, I kind of mentally went down this rabbit hole a while ago where I was, I was thinking about knock on effects for things. So, and starting with, starting with ai, and again, keeping in mind, this is a very sort of hand wavy sort of scenario I'm gonna walk through, but my understanding of how ai, when people use AI to build pages is that, or even just tools like, like Next or React like those platforms is.

They're making a lot of things easier, which is very, very appealing. And they're making, and making things faster, which is, feels increasingly necessary in the [00:31:00] world that we all live in today. Um, but what they're doing that can be a problem is really relying on a lot of JavaScript and kind of like sloppily executed JavaScript on the pages.

So, um. The, the effect there is that when we look at sites that have, going back to LCP, like that largest Contentful paint a metric, when we look at sites that have really poor LCP times, what we see more and more of is that these are on pages where the critical rendering path is really long because there's a lot of JavaScript and, and other elements of the page that are being.

Kind of just flying around, blocking the main thread before that LCP image can be called. So that's a user experience problem because it's making the page feel slow, but it's also an accessibility problem because screen readers are just trying like a screen. Like I, I've only have kind of a [00:32:00] passing experience with trying screen readers, so I'm very, very novice to, to doing this.

But, um, a screen reader's just trying to read. The code, like the underlying code in the page so that they can give a working idea to the person who's using the screen reader and give them kind of a working model of like. What is on this page? How do I use this page? What am I meant to do on this page and how do I do it?

And if you've got a lot of just kind of junk and opt and optimized content, um, it's, I mean, you could tell yourself, well, oh, I put alt texts on my images, so I've dealt done everything that I need to do. But if that image is, you know, the hundredth resource that's called on the page, and a screen reader has to sort through a whole bunch of other things before it can even read that alt text, that's an accessibility problem as well as a user experience problem.

And just as an, uh, as far as that affects your business. It's maybe really helpful to keep in mind [00:33:00] that people who use assistive tech to use the web actually shop online much more and much more often than people who don't use assistive tech. So there might be fewer people, but their, but their, their use is.

Much more consistent. And they tend to be really, really loyal to sites that do accessibility, right? So if you can nail accessibility for your site and you provide any kind of service or any kind of product, you know, you have a, a great potential to kinda lock in a really, really loyal user base. I found this really interesting stat.

I'm gonna pull it up, um,

which is, uh.

Um, from a UK study, a recent UK study, basically, um, found that accessibility issues. Cost UK companies, this is UK companies, [00:34:00] over $17 billion in lost revenue per year. And just over Black Friday and Cyber Monday, which are coming up, that's like over 445 million, four 46 million, um, pounds. So it's, it's a lot of money being lost.

That is kind of needless. So. Kind of pulling things back full circle. This is to me where yeah, we have like these performance and accessibility metrics over here. We have, you know, we, we wanna help our users. So there's, you know, a a just like, I think a heartfelt human centered kind of goal, but ultimately it ties back to your business as, you know, things typically do.

User experience is not divorced from the business. It's crucial to the business.

**Sean C Davis:** Yes, we had a, we had a talk earlier today where, uh, the presenter had said, we, we were talking about, uh, screen readers as well, and they said, if you haven't, you should use a screen reader to interact with your website. And I think that is [00:35:00] fantastic advice.

Uh, aside from that, are there other tools that you recommend that folks employ to, um, to make sure that they are accessible to, to that crowd?

**Tammy Everts:** I think the first step is, um, finding is, is having an accessibility audit done for your site. So you can, if you wanna do something that's free, is you can use a synthetic testing tool like, like speed Curb does this, but any synthetic testing tool, lighthouse, which is basically.

A free tool from Google will give you an accessibility score and it'll give you a list of audits for things that you need to fix on your page that will make it better. So that's a really helpful first place to start with. But if you wanna go deeper and kind of get, I think, more nuanced and maybe a little bit more helpful and specific advice you should consider, and I think this is gonna be around the corner.

Probably eventually, um, the same way that, you know, [00:36:00] uh, a lot of companies, a lot of businesses have to do like SOC two audits and, and show that they're SOC two compliant, um, on an annual basis. Accessibility is probably going to become, you know, kind of have, follow that same rigor. I know there are people who are championing that really, really hard, um, in the uk or sorry, in the, in the eu.

Not sure if it, this is the UK as well, but in the eu, um, it's definitely, um, a, a bigger deal than it is in the rest of the world. But typically, you know, e the e eu devs and that kind of community are, they kind of lead in. A lot of the good ethical ways, so we should pretty much look to the EU for, and if what they're doing there will probably trickle over to the rest of us eventually.

So getting ahead of it and, and, and getting a company. Um, and there's a number of good ones, like DEQ is one, one. Um. You can look around and getting annual accessibility audit done to see what [00:37:00] you need to fix on your pages, and you know, kind of just trying to be transparent with your customers and, and the rest of your team about that.

And then not introducing more usability, pro problems or accessibility problems. So is, you know, there's an education piece there, but it's gonna become essential, so get ahead of it.

**Sean C Davis:** Yes. And, and so, okay, so let's say, uh, a company has done that and, and you know, we've. You've jampacked a, a ton of great advice into this short period of time, but let's, let's take that hypothetical situation and say, yeah, okay.

So company's super diligent and they're doing an annual accessibility audit. They prioritize the things they need to hand 'em off to their engineering teams, et cetera. Um, there's, you know, until they get to next year's audit, um, I suspect it's more than just. Having the engineers address this year's audit, what are some other, um, I mean maybe they're tools, maybe their, their practices or processes that you feel like [00:38:00] folks should put in place to kind of, you know, maintain it as a, maintain, um, the importance of performance as a priority every day.

**Tammy Everts:** Yeah. So, um. I think fighting regressions is really like wherever you're at, if you need to get a lot better or if you just need to get a little better. Or if you're already really good, nobody wants to get worse. So for that, I always advocate that folks, um, explore the idea of creating performance.

Budgets. So what a performance budget is, is something that you implement in whatever your testing tool is, your monitoring tool. Um, this is this, uh, there's a link to this guide that people can find on this B curve site to what a performance budget is and, and how to create them. But really what it is pragmatically.

Is you looking at whatever metric you care about. So in this case, [00:39:00] um, I've pulled up, uh, image size, total image size for a specific page. And you can see that typically it's kind of down here in the green, but the, uh, the budget is, I think it's 500 kilobytes for this particular page. And you can see anytime the page.

Exceeded that budget. So you can quickly drill down into the, the, the page diagnostics and see, oh my gosh, why, why did images explode on this page all of a sudden? So, performance budget is, performance budgets are really, really helpful for fighting regressions and for from an accessibility perspective, you can set a performance budget for your lighthouse accessibility score.

So even if lighthouse isn't what you're using. As your auditing tool to kind of see where you're in and out of compliance. At the very least, you know that if your lighthouse accessibility score gets worse, you, there's something you might need to investigate, like something was introduced that made things worse, so you can start to explore there.[00:40:00]

**Sean C Davis:** That's great. Well, I've really appreciated this time and, and this chat. Tammy, um, do you have any closing thoughts or, you know, if you want to let folks know how they can get in touch if they have further questions for you?

**Tammy Everts:** So I am, uh, pretty easy to find. I'm on LinkedIn just, um, at Tammy Everetts on LinkedIn or BlueSky.

Um, you can also email me at tammy@speedcurve.com. And I don't know if, um, uh, folks can't see this 'cause I, I haven't shared it. I kind of put together this last slide of just. I dunno if people wanna do a screenshot or not. Um, these are kind of just the 10 things that I think people should be paying attention to when it comes to optimizing images on their pages, managing image, weight, and complexity on their pages.

I won't read them all here, but um, if anybody has any questions about these, definitely reach out to me on [00:41:00] LinkedIn or BlueSky or via email and I will be happy to chat more. I can talk about this all day long. Probably guest.

**Sean C Davis:** Well, thank you very much, Tammy.

**Tammy Everts:** Thank you, Sean.
