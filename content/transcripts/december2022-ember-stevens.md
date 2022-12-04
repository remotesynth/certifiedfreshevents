---
_build:
  list: false
  render: never
---


**Sean C Davis:** [00:00:00] Hello, and welcome to another Uptime FM episode. I'm your host, Sean C Davis, and today I am joined by Ember Stevens to explore documentation for developers. Now, writing and maintaining documentation can be a crucial part of delivering a successful product to your users. And given that it's a good portion of the work I do for Stack Bit today and something I think about every day and it's where Ember spends most of the her time for LaunchDarkly I'm really looking forward to digging into some of the most challenging aspects of that process today, cuz I particularly find it pretty challenging.

So with that, let's bring Ember on stage. Thanks for joining the show, Ember. 

**Ember Stevens:** Hi. Thanks 

**Sean C Davis:** for having. really excited for this talk, but before we get into the shop talk, I need to start with our everyone's favorite question on the show, which is, what is the best sandwich? 

**Ember Stevens:** I'm a sucker for a classic cold cheese sandwich, just bread, mayo, cheese, some pickles, lettuce, maybe some tomato.

Like [00:01:00] I could eat that every day. 

**Sean C Davis:** Ooh, interesting. Okay. So you have a lot of toppings, but you're, you call it a cheese sandwich, so I feel like the cheese is very important then. So what do you have a go-to type of cheese or do you switch this in and out? 

**Ember Stevens:** Ooh. If you just if it's like a mellow day, then a good monster is nice, just, it's easy.

If you're feeling like a little spicier, some pepper jack also very nice. 

**Sean C Davis:** I like that. Okay. And so the cheese is cold, but the, is the bread toasted or is there a specific type of bread? 

**Ember Stevens:** No I would say, I don't go over the toasted cuz it hurts the top of my mouth.

Okay. 

**Sean C Davis:** Yeah. Okay. And, alright, so last sandwich question then is I've come to in, in the last couple years, get more. As we talk more about sandwiches, I get more opinionated about sandwiches and the, I found the pickle to be very important and there's a wide range of pickles. So now is there a specific pickle that goes on this sandwich as well?

**Ember Stevens:** I would say the standard, of course, is dill, but I love pickles. If you get something, like pickled carrots, [00:02:00] pickled cauliflower when you start, even the pickled beets, like those other vegetables that are also a little bit sweet. Those are really nice too. 

**Sean C Davis:** That's interesting.

And then you can you can just pile on the veggies and it's still like a little salty, little sweet. Yeah. That's, , this sounds like an amazing sandwich. All right. Try it. All right. Bye. Bye. . I'm gonna try it. Okay. So with that, let's yeah. I wanted to spend most of our time today on documentation and I think specifically documentation for developers or for products that have at least an aspect that caters to developers.

And I have, of course, because I think about this every day. I have tons and tons of questions, but I thought it would be good to probably just let's set the context first. And you're a technical writer and spend most of your day writing documentation for LaunchDarkly. So can you tell us a little bit about what is a day in the life of Ember like at.

**Ember Stevens:** Yeah. I I work on a team of three, so there's two other technical writers and we manage all of the technical documentation for the product. We spend a [00:03:00] lot of our time working directly with the engineers. Tracking new features that are coming out and keeping up with changes to current features or current functionality.

We're talking with folks to make sure we know what's coming down the pipe with the product. And we also manage our API documentation. We work with the engineering teams typically. They'll, pr in their changes to endpoints and then we'll review them and make sure it's up to standards and meets our style guide and that sort of thing.

So it's really a mix of, just sitting down and in front of our editor and writing as well as the, larger just project management, making sure that we know where everything is at in the in the development cycle and making sure that we have documentation ready by the time the future's ready to.

Okay, so 

**Sean C Davis:** You are talking with engineering team way before anything is ready to release. Are you are you having to sit in meetings with the engineering teams or are you, like how are you making sure that you stay up to date? . 

**Ember Stevens:** Yeah, so [00:04:00] in the beginning we ask that the engineering teams invite us to kickoff meetings.

So whenever there's, a large new feature that we're planning, we wanna know about it ahead of time, have an idea of what it might look like. And then we ask if it's a brand new functionality. We do ask the engineers provide just some first draft documentation. So they let us know, what is this functionality?

What does it do? How does it help the customer? What does it look like, that sort of thing. And so we're not necessarily involved in every single meeting, every step of the way. Cause that would be overwhelming. But we near the beginning and then as the project is getting near to completion.

So ideally about two weeks before the features being released, we like to have that first draft to, to get an idea of where we're at and start refining it so it's ready to go for the release. 

**Sean C Davis:** Okay, so you're able to play around in some staging environment 

**Ember Stevens:** or something like that?

Yeah. Okay. Yeah, so that's really important. It's. It's nice to be able to get our hands on the feature and test it before it goes out. For sure. 

**Sean C Davis:** Definitely. Okay. Now you also mentioned [00:05:00] API documentation, and that's it's a very different type of documentation and I you said adhering to standard, you wanna make sure that the engineers are adhering to standards.

What did you mean by that? 

**Ember Stevens:** Even just Even small things to start out with. So making sure that certain the way that we describe certain endpoints, do you use punctuation at the end or not? If they're, all are our error messages consistent? Do we use the same tents?

We're using singular, plural, just things like that, that they're small and most folks don't really, don't think about them cuz they don't have to. But it just makes for a better polished. Final product to have that sort of thing consistent. And we also, there's different engineering teams that are working on different end points, so they're not necessarily looking at the API documentation as a whole all the time like we are.

So we have a little bit better idea of, the tone and what sort of fits with what we have already. 

**Sean C Davis:** That's super interesting. So you're not physically writing the code, but you have or you're at least [00:06:00] reviewing and helping folks let the folks who are writing the code to make sure that yeah.

That the content that is embedded in the code is it's consistent throughout your organization. Exactly. Yeah. Interesting. Okay. And the other question I had on API documentation was that I've seen some some startups will automate that, like the, that the documentation will get pulled from comments in the code or what have you.

Do you keep these things entirely separate so your documentation is just written and managed by your team? Or do you pull actually any any content from the code base into your. 

**Ember Stevens:** Yeah, so for, we manage our product documentation and our ipa API documentation differently. So for the API docs we use an open API spec and then we publish it with redly.

It is all of the all of the endpoints are in our code base, and then they're automatically pulled in and published through Redly for our product docs. It's managed a little bit differently. We have a little bit more I would say a little bit [00:07:00] more control over that in the sense that repo is ours and ours alone, and we own that.

And we're we make sure that we approve anything, any changes or anything that gets PRD into that repo. So that's our own little domain for our product docs. 

**Sean C Davis:** Okay. Okay. Super interesting. All right, now taking a step back for a minute I, I know. A writer and I'm a team of one or one and a half at my job.

But that there's so much to write about and there's way more to write about than there is time. So I'm curious, how do you how do you prioritize, how do you decide where to spend your time? 

**Ember Stevens:** Yeah, that's a, that's the ongoing challenge, right? We always have to balance writing about new features and getting excited about stuff that's, coming out.

And then also maintaining what we have and making sure that the documentation that we have already published is still accurate and updating it when the UI changes, that sort of thing. Our, so our manager she does a lot of work [00:08:00] to make sure that she is aware of all of the projects that are coming down the pipeline.

And she's our first line of defense in prioritization and delegation. And so that's helpful to have someone who's. Part of her primary role is to make sure that she's on top of everything that's going on. And then it helps a little bit, for the two, the other writer and myself, we kinda have our own areas.

We, for the most part share documentation and we're not too siloed, but we have a few things that we focus on. My colleague actually, she focuses on the API documentation a lot more than I do and she really manages that and. I I write about our experimentation product a little bit more and have more focus on that product, which has a lot of changes and is developing pretty quickly.

Having the divide and conquer helps us manage a little bit as well. 

**Sean C Davis:** That makes a lot of sense. Okay. And so when you're writing a new piece of documentation I know there part of the question there. Where what exactly is it? But [00:09:00] also where does it go? How is it organized?

And I know your product is definitely established. And so you've, you have a structure in your documentation. But curious if you could talk a little bit about that to folks. Like how have, how has your team thought about the actual structure and organization of the content?

**Ember Stevens:** Yeah. Thinking about structure and organization is almost as big of a job as the writing itself. And , since I've been with LaunchDarkly, we've had a few sort of large overhauls in the way that we present some of our documentation, particularly around our SDK documentation.

We had a big overhaul in the way that, that we organized it about a year or so ago. And, it's tough. It's hard. It takes some time and thought. And we, often the three of us will get together and we'll say, okay, we know that maybe this structure isn't working quite right, or maybe this isn't quite the flow that the reader normally goes through whenever they're using this part of the product.

We'll get together and sometimes we'll just try different things and we'll say what if we move this section over here? Or what if we organized it this way? And then we'll look at it and say, oh [00:10:00] no, nevermind. That doesn't make sense . So some of it's trial and error and some of it is talking with the engineers and getting an idea of, the flow that they're envisioning when we're looking at how the customer might use the product.

But then also looking at What our readers, what are they searching for? What are they clicking on? If they're searching for certain terms a lot, where do they end up And using that data to inform how we organize things as well. 

**Sean C Davis:** Yeah, exactly. Exactly. Okay. So I was thinking about this as you were saying that it's like how do you pinpoint.

When something isn't right, and it seems like it's part, partly that you're talking to users, but also there's just a feeling. I don't know. Can you describe that feeling of when something, something's wrong? 

**Ember Stevens:** Yeah, I actually, I just had a sort of an example of this the other day when we're working on a big project right now and I was doing a lot of re reviewing of the work we'd done so far and I was getting a little bit tripped up with how we were labeling things and then I [00:11:00] stopped and I said, okay.

If I don't understand this, if this is giving me trouble, it's definitely giving our readers trouble, right? Because I look at this all the time and if I'm thinking, oh, this isn't quite right, so just because it makes sense to me doesn't mean it'll. To the reader, but if it doesn't make sense to me that's a big warning flag.

Interesting. Yep. Yeah, and we also, we look at the opposite. If there's topics or pages that no one ever goes to and no one looks at, then we have to think about either it's in the wrong place or it's information that nobody's finding helpful. And then we think then too about what we might wanna do with.

**Sean C Davis:** What's your timeframe on that to, to like how much time has to go by with nobody really using the content before you say this isn't right. 

**Ember Stevens:** I don't really have a number for that. We tend to look at our stats about once a month. We'll do a check in and see where things are at.

Okay. It's certainly not something where if we say, oh, nobody looked at it this month, pull it down. But we put it on the docket. So let's think about this and over the next few months let's, continue to watch it and see if there's any trends one way or another. And if not, then we really need to start thinking [00:12:00] about what to do with that inform.

**Sean C Davis:** That makes sense. And I would say like another another aspect of getting, or like organ, another aspect of organization I think is discoverability. That it's not just having the right. Content necessarily structured or organized in the right way, but also built in such a way that that developers can find what they're looking for.

And so what strategies do you put in place to maximize the discoverability of that 

**Ember Stevens:** content? Yeah, that, that's a great point. We spend a lot of time thinking about organization, but the reality is people just search for things, they just go up to the search bar on their . Within the last year we added a tagging system.

Previously, it was just doing like content searches on the doc site, but now we add tags to every topic, which really helps with search results. And And we test that. So we add tags and then we go and, we do a bunch of searches and see what comes up and see if the things that we're searching [00:13:00] for actually the results make sense.

So I think that's probably the biggest help is really to not necessarily spend so much time thinking about organization that you forget that, even engineers, they just Google things , . 

**Sean C Davis:** Yeah. But at the same time, I think that we take or maybe it's that we tend to lean really hard on Google to say Google's doing all this work.

I told them what this content is. So if somebody's looking for the right thing, they're probably going to find it. And I imagine that's true, but I also think that what I've seen is that if develop, that might be the front door for a developer, but then they're still interacting with your product. I imagine some developers go back to Google, but I think a lot also stay on the site.

And so then we think about like different navigation strategies that we might have to, once the user's in, how do we help them navigate the site? And I can think there's tree navigation and there's the main header navigation, and you can have their insight search or your. You mentioned [00:14:00] tags or recommended articles or, something like that.

So I was curious because you also, or at least what I should say is, what I found is I also don't wanna be overwhelmed as someone who's reading documentation of clicking all over the place and not being able to focus on the thing I'm trying to find. So I How do you how do you, maybe the question I should ask is, how do you help developers or readers find the second piece of content that they're looking.

**Ember Stevens:** Yeah. Like you said, I think it's a balance between we, we like to add a lot of links, contextual links saying, if you wanna learn more about this, go here. If you wanna learn more about that, go there. But it is a balance to not overwhelm the reader with just too much stuff and too many directions to go in.

We do, we have a set of guides that are. A little, they're longer form so you're wanting to learn how to do this well, let us take you through that process step by step. And so we try to link to guides where appropriate, where hopefully that will help them. If they're really just trying to accomplish a specific task that requires a series of steps and is more than maybe just, [00:15:00] here's how you create a new flag.

Here's how you save it, here's how you know. But okay, now you've got this end goal. Linking the readers to these guides. Hopefully, helps them get the answers that they need and get the help that they need. But otherwise yeah, I think just finding the balance between linking enough but not too much to other documentation.

When we're guiding readers through procedures, we try not to put a lot of links within the procedure itself. When we say step one, do this, step two go here. We don't wanna interrupt the reader going through the procedure and have them, wander off to this other topic. Trying to streamline it that way is helpful.

And we're also. Working on connecting the search within the product itself. So we get the product and then the product docs. And so if they're in the UI of the product and they're searching to also bring up results not only from the UI itself, but from the documentation. So hopefully as they're in the product, maybe they're frustrated, maybe they're trying to figure out how to do something.

They can be brought right to the docs and get their answer more [00:16:00] quickly that way as. 

**Sean C Davis:** Interesting. Interesting. Okay. So now back to the procedural content. I think that's really interesting of you. You don't wanna pull somebody out of a flow that they're in. So it sounds like you, you're also in a way, you're making a, an assumption for the user that they, if they're going through this process, you have to say I, I should say, would it be fair to say, , you have to assume the reader knows certain foundational aspects of your product, so you don't have to be like, oh yeah, and go here for configuration reference and go here for this other reference, but just stay focused.

**Ember Stevens:** Yeah, and we, we try to say before a procedure starts, if there is prerequisite knowledge or prerequisite steps that you need to take before doing this, here's what they are. Again, with the goal that, like you said, the developer flow so that they can say, yes, I have met these prerequisites and now I'm accomplishing the task and nothing is gonna interrupt me.

And when I'm done with these, with this procedure, My goal will be accomplished. And that's what we're going [00:17:00] for. Yeah, just being really clear about here's what you need to know, here's what you need to have done already. And hopefully this will finish it out for you. 

**Sean C Davis:** Okay. That makes a lot of sense.

Okay. I wanna jump over to, for a minute, to to the maintenance side of things, cuz I think it can be fun foot to, to add new stuff, but it's like something that's very frustrating to me as a developer is. You land on a piece of documentation that's out of date, and so it just it doesn't work.

It hurts me more than it helps me and breaks trust and all of that. You mentioned that your manager is helping to figure out the right priorities and all of that, but can you talk a little bit about the process of making sure that everything is staying up to date in your documentation?

**Ember Stevens:** Yeah. We were live really heavily on our engineering teams to let us know when something is changing and with existing functionality. So not necessarily, not something new, but and I. One of the ways that [00:18:00] we do that is we've got what we call blitzes, where we go in and everybody kind of tests something as it's being developed all at once.

So we can really quickly see where the bugs and where the areas that need to be improved on. And we ask that that all the engineering teams invite us, the writers to these blitzes. And that's a really good way to stay on top of changes in the UI or changes in functionality because, it gets, its in there, gets us using it, clicking around, seeing what's going on.

And sometimes maybe we'll notice things, even if it's not directly related to what's being updated. We'll see, oh actually this button is over here now. And that. Is really helpful to just continually be in the UI to see what's going on. And we're also familiar now with what's in the docs and what's in the ui.

We usually recognize pretty quickly when something doesn't look quite right. . And we're also, we're really judicious about how we use like, screenshots in the docs because it's not helpful. Have outdated screenshots because those are confusing and it's also not helpful to the reader to just show this [00:19:00] big, screenshot of the UI over and over again.

We try to be really specific about what we're showing the reader and making sure that it's actually relevant to what we're talking about. And so that helps us not show visually outdated content at because we're we're just, having really focused screenshots on. What's being updated?

Otherwise, sometimes I admit sometimes things do slip through the cracks and we'll notice later we'll be learning about something else or using something and say, oh, hey, actually I think this flow is a little bit different now . So it happens and that's just inevitable whenever you've got a small team that's supporting a lot of engineers.

But I think. I feel like we keep up with it fairly well considering. And, and sometimes another way that we help stay on top of that is our revenue team. The folks who are actually working with customers every day, they're really great about coming back to us and letting us know, Hey, this doesn't quite make sense.

Hey, I don't think it quite looks like this anymore. So they're a really great resource as. 

**Sean C Davis:** Okay. [00:20:00] Okay. That's, so it's great to have so many so many other team members who are also using the documentation. It's it's another form of user that can give almost faster feedback to you, which is great.

Yeah. Yeah. So now you can. You could theoretically write forever on a particular topic and say, all I'm just, I'm digging and digging into the details. How do you know when to stop on any particular guide or, even, honestly, even just like an API reference. How do you know when the you've hit the right amount of content?

**Ember Stevens:** Yeah. I think that's that's a common. Thing to do when you're first writing about something is you just write everything you know about it. You think this is everything I know and I'm gonna put it all out there. But as more experienced writers move along in their career, they write less and less, because you realize, you start to recognize that the reader doesn't necessarily need to know all of that. So I personally approach it by thinking about not what [00:21:00] does this feature do? But thinking about how does this help the reader? What goal is the reader trying to accomplish? And then really focus on that because that's what they care about, right?

Like they don't necessarily care about what's going on behind the scenes. In some cases maybe, but for the most part, they just wanna know how to accomplish the tasks. So thinking about it from the reader perspective is really helpful, rather than your own perspective of what you know. And.

Getting I'm really fortunate to have a team that can edit my writing. We review and edit each other's writing. And having been a solo writer in the past I just, I can't say how valuable it is to have someone else that's able to look at what you write and said you could probably just lose this whole paragraph.

Or, this actually could be condensed down quite a bit. So having that second set of eyes is really helpful to, to help curve that as. 

**Sean C Davis:** And sometimes it can hurt cuz it's a half of what you wrote needs to go away. But if it makes the, if it makes the end content better, if it helps the reader, that's [00:22:00] the point.

Exactly. Okay. Now you mentioned screenshots a little bit ago. And this is a topic that is super interesting to me because I've found them to be like it's like you said, it's really obvious when they're wrong. But they're also, it's not just a few words that you can change and then they're correct.

It's often a process to get them updated. And so you talked about And finding the right moments to introduce screenshots. And I was curious to ask a little bit more about that. Do you find yourself using fewer screenshots because it's difficult to maintain, or, how do you determine when you need a screenshot versus when it could prob it's probably okay to just keep the text there.

**Ember Stevens:** Yeah. We we start from a place of thinking about Ideally our documentation would be usable and readable without any screenshots at all, because some of our readers aren't cited. And so we have to make sure that what we're concluding in the documentation is accessible to everyone.

So thinking about it from that perspective [00:23:00] helps us keep them to a minimum because we wanna make sure that we're not overly relying on screenshots to explain how to do something. We really need to make sure we're explaining it in text. Screenshots are expensive to maintain, but that's not the only reason that we wanna keep them to a minimum.

Of course we're, also think a lot about alt text and making sure that we're describing really well what's going on. Generally if you approach screenshots not as Not as something that is the basis of your explanation, but is always supplementary. That helps keep them to a minimum and helps you think about your writing in a way that doesn't rely on them so much.

**Sean C Davis:** Makes sense. Okay. And do you work with videos at all? 

**Ember Stevens:** Not really. There are folks in other parts of the company that will make videos and sometimes we'll link to them from the docs. We simply, we just don't have the team to be able to create and maintain them. They're, extremely time intensive and they go out of date very quickly.

And so by the time you're done making them, something's already changed. And so no, we shy [00:24:00] away from those unless they're being provided by somebody else. 

**Sean C Davis:** Interesting. Interesting. So it's yeah. What I've found is if you make a a video on one particular topic or even a doc and then you're like, oh, I got, I have to change this one thing in the middle.

Okay, I guess I need to make the whole video over again. Yeah. Or it's really choppy and messy okay. Yeah. That, that, that makes a lot of sense. This has been super interesting and so let's stop there and transition into the last segment of the show today where I have nine quick questions and we'll still touch on a few documentation focused questions and writing focused questions throughout here.

And then we'll round out this episode. Does that sound good? Yeah, sounds great. Fantastic. Okay, here we go. Question number one, what is your biggest grammatical pet peeve? Something that every time you see it, you have to change it immediately. Oh, 

**Ember Stevens:** This is unpopular opinion, but the split infinitive.[00:25:00] 

**Sean C Davis:** Okay. Okay. All right. Fair. Question number two. What's been a what, a tool that you use in your writing that has been super helpful to you? It could be a concept but I also thinking more like an actual piece of software that is really helpful to you. 

**Ember Stevens:** I write in Adam every day and it's not necessarily the most exciting answer, but it's trusty and it works.

And so that's, I would say that's what I probably rely the most on day to day. Okay. 

**Sean C Davis:** Question number three. What is shifting shift, shifting here Slightly. What's a a book that you have read or I, okay, here's how I wanna. You can pick one of two, two approaches. One, what is a book that you've read the most number of times, or if there's not one that stands out, maybe what's what's the best book that you've read?

Oh, 

**Ember Stevens:** Wow. Let's see. Honestly, probably. The book that I've read the most number of [00:26:00] times was probably Lord of the Rings. That was you read to me by my dad when I was a kid and I just, it got, it, got stuck in there somewhere. I've probably read that more than any other book. How many times?

Oh gosh, not, probably not that many. Probably three or four maybe. I don't reread a whole lot of books, but that's, it's, 

**Sean C Davis:** That's amazing. That's a lot of 4, 3, 4 times over. That's a lot of pages. That's that's, yeah, it is. Okay. Do you how old were you when you went through it the first time?

Or when your dad read it to you? 

**Ember Stevens:** Oh, he read it to us really young, like way before, not the age group I imagined it's geared towards elementary school. So I was probably seven, maybe seven or eight. I didn't know what was going on half the time, but I loved it. So 

**Sean C Davis:** amazing.

Amazing. Okay. Number four. What is the thing that you're most proud of in your career? 

**Ember Stevens:** Oh I I've changed career trajectories a few times and I was in higher ed for a long time and one of the things that I've been [00:27:00] really happy with is I really enjoyed working in higher ed, but there were some drawbacks too.

And so being able to really think about and find the parts of that career that I enjoyed, which was writing educational material and then being able to focus in on that and turn that into a career. It was really satisfying for me to be able to find exactly what I liked about that and then iterate on it.

That's 

**Sean C Davis:** a, that's a really interesting answer to me because I have, at various times thought maybe I would do well in a higher education cuz I like writing con educational content. . . Yeah. Maybe. I don't know. Okay. Number five. What's the, your favorite. Music to listen to while writing if you have one, can also be no music.

**Ember Stevens:** I have to say, I I struggle to focus on writing while listening to music. If I listen to anything, it has to be without lyrics. But I'm typically just a quiet writer because I can't focus 

**Sean C Davis:** otherwise. I do the same thing. Do you find yourself, if there's lyrics, you just start typing [00:28:00] the lyrics?

**Ember Stevens:** I'm like singing along, and it's oh, no, wait, I'm not doing what I'm 

**Sean C Davis:** supposed to be doing. No. I have to and I'm the same way. And I don't know why it works this way, but if I'm writing code, it doesn't matter what music is on. In fact usually the more music that's going on, the better.

Sometimes I have to get really deep. But with writing, it's just something that like takes over the brain. And everything else just seems distracting. Yeah, I agree. Interesting. Okay. Number six, your, what's your most enjoyable non-tech and non-writing activity? 

**Ember Stevens:** I I, I enjoy a few different things.

I enjoy doing some cross stitch some other art stuff, but I've gotten in the last couple of years I've gotten into competitive jigsaw puzzling. And so that's something that I've been into lately. And it's really fun and interesting . Yeah. 

**Sean C Davis:** How does that work? Are you in, are you physically in a room with other books?

**Ember Stevens:** Pre Covid, that's how it worked. And then during Covid there was a couple of years where there was Zoom competitions. So you had your puzzle out, but your camera was on, and then they would [00:29:00] record and, watches you and finish the puzzle and record the times. But now it's moving back to in person.

Very 

**Sean C Davis:** cool. So everyone is presumably doing the same puzzle. At the same time. Yeah. All right. Now, how this is really interesting, so I'm digging into this, how how many pieces are you typically working with? 

**Ember Stevens:** So I've only done it as part of a pair, and it's 500 pieces for that.

Okay. And 

**Sean C Davis:** how about how long does that take? 

**Ember Stevens:** Depends how good you are. So really fast. Pairs can do a 500 piece puzzle in something like 40, 45 minutes, which is amazing to me. It's so fast and it just watching it is mind blowing. I think the fastest that my puzzling partner and I have done is during a competition we did about an hour 20.

Wow. Not during a competition. We've done a little quick. More quickly, maybe an hour 10. But it's tough. It's tough to go down 

**Sean C Davis:** time. That's amazing. So you probably have to have a whole strategy and who's doing what Or does it just work? 

**Ember Stevens:** In theory we have a strategy. And there are, puzzling principles [00:30:00] that I actually, I've talked about at a couple conferences and how that applies to tech writing.

But when it comes down to it and the clock is running and you're panicking a little bit, sometimes those just go out the window. . 

**Sean C Davis:** That's amazing. Okay. I have, I need to stop. I have so many more questions. Moving on. Number seven. What's the biggest mistake that you've made in your career? 

**Ember Stevens:** Oh

Probably I went to grad school during the, like the 2008 recession or, a little bit after that. And probably the biggest mistake that I made was coming out of grad school, which was I loved, and it was a great experience, but I thought oh, the recession will be over by the time I'm done with this.

And I'll just glide into a job. And I had a kind of a tough time leaving grad school, finding my footing. And I think I just made some assumptions about what kinds of jobs would be available to me at that time. And it took me a while to figure out that I needed to find a little bit different path for myself.

**Sean C Davis:** were you graduating in oh eight or were you graduating a 

**Ember Stevens:** couple years after that? Two years after that. Yeah. Yeah. It was like, oh, we're in a recession. I think I'll go to school [00:31:00] like everybody else. And and then when everybody else who also made that decision gets outta school at the same time as you, then you're all competing for the same job.

So it was still tough then. 

**Sean C Davis:** Exactly. I had a I was in undergrad around the same time and had very similar experience. Like really? I got lucky in the internship I found. But then landing a job afterwards was like I was forced to go af go to stay at that company that I had interned cuz there was just.

There was nowhere else to go at that time. Yeah. Okay. Number eight. This was kinda like flipping number seven around in saying what is the, what's the best career advice that, that you've received and been able to make use of? 

**Ember Stevens:** I've always struggled with promoting myself and putting myself out there and.

Folks have told me, no one is gonna advocate for you but you. Which may or may not be true, but there have been a few times that I've really gone out of a limb and made myself uncomfortable with my own self-promotion and said, Hey, I'm interested in working for your company. And that worked out really [00:32:00] well for me.

And even though it still feels uncomfortable to me, being able to reach out and just let people know what you're looking for and what you want has been really advantageous. 

**Sean C Davis:** Great. Okay. That's great advice. And I'm glad you threw in the uncomfortable part cuz it's it can be super uncomfortable.

Yeah. Okay, last one, number nine. And my one, my, my second favorite question behind the sandwich question is it you, the scenarios that you can host a lunch with anyone, one person, a person can be alive or not. Hypothetical situation who would. 

**Ember Stevens:** Oh my gosh. I think

I think it would be really interesting to sit down and have a conversation with Marie Cury. Okay. 

**Sean C Davis:** Abso, absolutely. Yes. , definitely. Okay. Thanks em, this was this was a ton of fun. I really enjoyed talking Shop and going through these last quick questions. Thanks to thanks for joining us for this show.

**Ember Stevens:** Yeah, thanks so much for having me. It was great. . [00:33:00] 

**Sean C Davis:** Absolutely. Now last thing before we go is you can tell listeners and viewers how to get in touch with you if they have any more questions. When it talks to more shop or competitive jigsaw puzzling. How can they, yeah. So how can they get in touch with you?

And then if you have anything else that you're working on that you'd like to plug take it away. 

**Ember Stevens:** Okay. Yeah. Nothing in particular to plug, but I'm always interested in connecting with other writers and developers and folks that are interested in it. I'm on Twitter. I'm at Ember Stevens, and I'm also on Mastodon at emberStevens@hackeydurham.io.

So finally either of those places and I'd love to chat. 

**Sean C Davis:** Fantastic. All right, thank you. Now, to the audience here, a quick reminder that these shows are recorded live on the first and third Thursdays of each month at 1:00 PM Eastern Time in the us, which is 5:00 PM gmt. The live shows are then later syndicated on cfe.dev and YouTube as videos, and also in audio format wherever you get your podcasts.

We'll be back on December 15th with Salma from Netlify as we explore identifying or maybe even building [00:34:00] the perfect JavaScript framework. So until then, from all of us at cfe.dev, thank you for joining us for this show and we'll see you next time.

