---
_build:
  list: false
  render: never
---

**Henri Helvetica:** [00:00:00] My name's Henri and I'm here to speak about it performance. So since my clicker's not working, I'm gonna go straight with the keyboard, which I don't like using, but that's not working. Now it is. Okay. So do I have a, oh my clicker's working man. I've just wasted a bit of time. So we are back online.

As much as I've been doing a little bit of traveling, I am actually more than happy to do online presentations cuz I. It provides the reach and not everyone is ready to travel again, so I totally get it. So welcome to today's presentation. And I do want to thank the good people.

The good person that is Brian. Hannah's whole team over at C F E and today's event, jam.dev. I've participated in the past. I'm really delighted to be back. And I guess the subtitle is that [00:01:00] it came from the Edge. I come from Toronto, as he mentioned earlier. The greatest city on the planet.

My name is Avi Veka on the Twittersphere and actually on Master Dun as well if you hang out there. You could also find me and my team over at real webpage test the venerable webpage test. It's the place I work at and it's the tool that I'll talk about a little later as well because we are gonna be talking about performance today.

And as Brian mention, #devswhorun because I am a bit of a distance runner. I like to encourage people to stay active and running is how I stay active. The other thing that I did wanna mention is in Toronto, I do run this thing called the JAMstack Toronto Meetup. It's been a little dormant, but shh, don't tell anyone I'm coming back.

And Yeah, I also run the Toronto Web Performance Group. And again, performance is something that we're gonna talk about today. I've been delighted [00:02:00] running that group. I've had great presentations. You can look both up on the internet, or on meetup. Joined because I do online streams as well as our will progress at some point back to in person sometime very soon for the Toronto people out there now a few months ago, or no, not even this month, earlier this month the state of JavaScript volume 2022 was released.

And like everyone else, I scanned through it, read it. I thought it was super interesting. But you. We didn't really cover some of the areas that I like to talk about, which is performance. So yes, it was all about JavaScript because the importance of JavaScript right now to the the web cannot be understated.

I think the web would not be where it is today without JavaScript because. Guess what? We do everything online. You're probably sitting at home and you may have bought a coffee on your sort of mobile device and went and picked it up because you don't wanna sit in line. [00:03:00] Last night, you're man, I'm hungry.

Got nothing in the fridge. You probably, looked up Uber Eats, ordered something online and how to. Thank you JavaScript. We literally do everything online. In fact, on Monday, in a few days, I guess four or five days, I'm actually gonna buy my ticket to the Boston Marathon. That's gonna be happening mid-April.

I'm gonna be running the 5K there, but I will be buying my ticket online. Super duper important, but you might ask yourself, how did we get here? I'll tell you, it started with a little bit of html. Then it moved to a little bit more c s, and then we added a bunch of JavaScript. Honestly, we added a ton of JavaScript but we needed it because JavaScript provided the interactivity that we needed to get where we are today to be able to order stuff online.

All the other things that we take care of online. I am gonna [00:04:00] be here today, or I am here today, pardon me, to talk about JavaScript and its impact on performance. And to do I'm going to look at JavaScript and the data that's out there online for us to consume. So welcome to the state of JavaScript addition 2022.

And it's a performance profile. A performance profile. I couldn't fit that in, but I thought it was cool. So let's go. One of the opening lines, if not the opening line in the state of JavaScript 2022 is this one right here. After years of relative stability, many are now beginning to question the status quo.

What is the status quo? That, you could dump a bunch of JavaScript online and it's no big deal. It is becoming a bit of a big deal actually earlier or late last year at the JAMstack conference in the Bay, which I was supposed to be at. But I could make [00:05:00] Jessica from the Angular team mentioned this right here.

It's the natural evolution of the ecosystem of. Yes, the web has gotten a bit more detailed and we could do so much more with it. It's actually almost an essential service, so it should be very robust. But she also added that's why a lot of people are thinking about performance now. I personally believe that you should never have not thought about performance, but I'm happy people are considering it.

Something else that was mentioned in that same panel that she was speaking in during that conference. Fred from Astro mentioned the following. Everyone sees now that performance is important and you can't avoid it anymore. Again, I don't believe you should have avoided it in the first place, but I understand times changed.

Something else that was mentioned in the JavaScript survey. The state of JavaScript front end frameworks like solid and quick are suggesting that React might not have all the answers after all,[00:06:00] I'm gonna wedge in, enhance in there as well. But that those, that, that's certainly something that you want to think about because we're gonna look at some data a little later.

And speaking of frameworks they also mentioned that some are making us reconsider how much code we really need to ship to the client. Again, a very important statement right there because we are shipping a lot of code to the clients and it's having detrimental effects. So let's start to look at some of the.

Things that we're gonna look at today or talk about. If you look at this screenshot right here that is from the state of JavaScript 2021. I took a screenshot here because I love this layout. Reminds me of a subway map. I'm a subway type. You can see that, say from 2018 onwards, or even 2019, things really exploded in terms of the frameworks that are available to us to use everyone's own, opinion on how, a framework should operate, [00:07:00] et cetera, et cetera, et cetera.

The point is here that you know, there are a lot of choices and you. It kept going on and on because you can see some of the more familiar names here as well. So what I'd like to do today is we're gonna look at some data with regards to JavaScript in general, and then we're gonna dive into some of the more, I'd say, popular frameworks and see what their data is like online.

There's so much that we can cover, but I've honed in on some areas that I think you might find interesting. Let's look at this data now as a little disclaimer, everything that I do talk about is on mobile. Why is that? You have to realize that mobile is pretty much the client of choice at this point.

And we're also, you have to, if you start to look at the data, Current, which is about 66% of. [00:08:00] The web is being accessed on mobile right now. And this turn took place probably around 2016, I think the fall of 2016. So we're at a point right now where this is never, ever going to change.

All right? So you have to remember that. And in fact, I'll hit you with some more data since I have it in my head. Once you get into some of the top sites, so say top 100,000, top 10,000, top 1000, the percentage of access. Around 80 to 88% all on mobile. So you have to keep this kind of data in mind.

So let's start to talk about JavaScript and the web Now at the median. At the median P 50 we are on average sending about 461 kilobytes of JavaScript down the wire. Alright? It's not the best, but it is what it is. Now, if you start to look at the data year over year, we are [00:09:00] up 8% from the previous year.

All right that's not the best news, but whatever, we'll work with it, right? But at P 75, We are sending 850 cent, seven kilobytes of JavaScript down the wire. I'll spare you the news about P 90 because it's basically a Meg, but we are in that kind of territory where, hey, a bit of an amber alert, because that's a lot of JavaScript.

Here's why, because there's also unused JavaScript that we have to take a look. And this is something that is also growing in importance. Because at P 50 we are leaving 162 kilobytes of unused JavaScript. You got pars and all, but it's not being used. Now that turns into 35% of unused JavaScript at P 50, [00:10:00] and that's just at P 50.

At P 75, we are up to 40% of unused JavaScript, and at P 90. We're at 40. 0.2%. And in fact the numbers indicate that at P 90 we are leaving behind over 600 kilobytes of JavaScript. Some of this data that I'm using today is accessible and available, pardon me, from the web almanac by the HTTP archive, A fantastic trove of data that comes out once a year.

Shout outs to Rick Bisi and the entire team over there. This is very important data because once again, we are seeing at the very start of this conversation that there's a lot of JavaScript being used, sent down the wire, but also a lot of JavaScript that's left unused. Very important detail. Now, something that I wanted to mention about the Web Almanac.

all that [00:11:00] data, all that information as comes from the HTTP archive, which by the way, uses web page test under the hood. I just had to add that. We'll get into that a little later. Now, something else that's pretty important in JavaScript or on the web in general first and third party JavaScript.

Now, the importance there is that you have to realize that third party JavaScript is something that you. Pretty much little control over outside of not using it or using it. Everything else is pretty much outta your hands. So let's take a look at some data around third and first party JavaScript. And it's, in fact, it's gonna be mostly third at the median P 50.

292 kilobytes of the JavaScript that you're using, or 63% is third party. So over half of the JavaScript that you're sending down the wire, you actually have no control over [00:12:00] and sometimes you have no realization of what's going on. Hello Ad networks. All right. I jumped over P 75. I went straight to P 90 to give you the real deal.

The 90th percentile. We have one over a ho, pardon me, over a thousand kilobytes of JavaScript, or 73%. That's third party. Again, we're talking about a lot of JavaScript that you may not have control over. These are important details because again, it adds to the fact that JavaScript, which is important to the interactivity of your.

Which is also potentially toxic to your site. A lot of it you have no control over. So these are things that you wanna keep in mind and sometimes just simply investigate. Now I'm mentioning here long tasks and I, this is like a massive one of data [00:13:00] that I picked here and there to paint the picture.

Long tasks, which are very important to mobile especially are essentially tasks that are longer than 50 millisecond. All right. And they're all added up and they're part of the TBT index, or at least metric that you might know if you pop the hood of or if you use Lighthouse, and you'll see the six metrics that are involved.

Tb, t's one of them, and long tasks. The long tasks are absolutely correlated with the to the TBT. Now on mobile, they tend to be two and a half to three. Worse on your device. Alright. And worse than a desktop, obviously. So this is to again, illustrate the following. We are mostly using the web on our mobile device.

We are sending a lot of JavaScript [00:14:00] down the wire through the web to this mobile device and long tasks and eventually, TBT by the way, which is total blocking time, are two and a half to three times worse on mobile. And I'm gonna add this little bit as well that I probably should have slid in on a slide total blocking time.

One of the six metrics that are well known. Again, if you do some testing. Is worth, pardon me, 30% of your Lighthouse score. So again, I'm bringing all this together to show you that JavaScript and the mishandling of JavaScript is very important to the user experience. I, let's move on. Let's look at some more data.

Now, as I mentioned, there's a lot of data that I could go through. Some of it you might be familiar with, some of it not. But the one thing you must be familiar with [00:15:00] and in, in all likelihood, from developers, to marketing people, to CMOs, to SEO people, to technical SEO people, the core web vitals. Now the core of vitals are going to turn, I think three later on this year in.

and they basically were able to introduce a lot of people to the idea of good user experience the health and wellness of a site through the LCP, which is largest content for paint through the CLS, which is cumulative layout. Is the page, Jan or not, and through FID, which is first input delay.

Now, FID is the interactivity metric, which essentially means where JavaScript is involved. Now I'm gonna talk about [00:16:00] it however it is. Possibly going to be replaced and to be very frank in all likelihood will be replaced. I think they're working out the details because through the research over time since it was introduced, it was seen as potentially not the best metric to discuss interactivity, i n p which is being.

Discuss more and more is likely going to be the metric to replace it. i n P, which means interaction to next paint. So that being said, I talked about core vitals. Let's look at core vitals. And what we're gonna do right now is look at core vitals and specifically, Some of the more popular frameworks that are out there and see what they're saying.

See what their [00:17:00] presence online is all about. Let's look at Gatsby. Most of you may be familiar with Gatsby, like the darling for a minute. Over, especially on the sort of JAMstack side of. May have fallen slightly out of favor. All good. But let's look at some of the data. So Gatsby sites.

Per the web right now, and the data coming from the Crux, which is the Chrome User Experience Report says the following 37 or 38% of Gatsby sites have good core web vitals. What does that mean, Ari? It means that they have good rcp, they have good CLS, and they have good FID. All right, so just about a.

Not the best. The point of this moment right here is to connect some dots because [00:18:00] I'm gonna now tell you that Gatsby sites per the Crux report per what's available to look at on the web right now are shipping 881 kilobytes of JavaScript at the median. Remember now, I talked earlier, I mentioned earlier today that at the median, right now, the web is shipping 461 kilobytes.

Do the math, I we're talking almost twice as much at the median. Now it's impossible to talk about web, the web performance JavaScript without talking about scores, specifically lighthouse scores. Do you know what the lighthouse score of Gatsby sites are online? I'll tell you 34. Okay. So what do we have now?

We have a lot of JavaScript being sent down the wire [00:19:00] at the median, and we have a lighthouse score that is below 50. Not a huge deal, but I want you to think about. . By the way, the median lighthouse score across the web right now is 31, so they're above average, but there's still room to improve. No big deal.

But again, this is what is being this is a snapshot of the web as we speak. Speaking of another darling of the internet, next Js. Let's look at next sites. All right, shall we? We shall good Core vitals of next JS sites across the web. Again, a snapshot of what we're seeing via the Chrome user experience report.

27% of next GS sites have good [00:20:00] core vitals. Again, good CLS. Good LCP and good FID could be a little better. Now. Let's see what kind of JavaScript. They're shipping down the wire at the median. At the median. Next sites are shipping 940 14 kilobytes of JavaScript. All right, you do the math lighthouse score.

Next jazz sites across the web at the median is 31. You ever see that meme where that dude who's got glasses? He's just I don't know. You tell me. I don't know. You tell me. Okay I'm having fun right here. Finally, we're gonna look at react sites. Of course, you cannot talk about this without talking about react.

React by the way, which I. Will turn 10 [00:21:00] sometime in May. I gotta double check that. But react ye of, many developers online has just under 33% of good core web vitals. Okay. However, we're, again, it gets a bit more alarming in a kind of like amber. At the median React sites are sending just over a thousand kilobytes or basically a meg of JavaScript down the wire.

And again, folks, this is at the median and I, again, get you to think and do the math because, what did I say in terms of unused JavaScript at the median, the web is more or less shipping. About 30 some percent of unused JavaScript. Okay. This would not be amazing news for people running gas sites, but again, there are ways of dealing with this, but this is a general snapshot of what's [00:22:00] going on and they are ye of lighthouse score of 20.

All right. Again, not amazing the median's 31. They're not off far, that far off the median, but it's still not a great user experience so far. And finally, we're gonna look at view u g s only 20 per 27% about have good core vitals. At the median, they're sending 853 kilobytes down the wire, and their lighthouse score is 20.

Okay. Not amazing. And again, these are not crimes. This is just about letting you know what is actually out there on the web. I've always said that web performance is an investigative process. You have to dig into the details and find out what's going on. All right, I'm gonna round this off real quickly.

So let's talk about opportunities because. . We may sit there and [00:23:00] point out what's wrong, we need to talk about what could be what could be done differently, where some of the challenges are. What are the P one, P two s, P three s in terms of like emergencies? So when it comes to N Cs sites, actually before I get into that, the opportunities bit.

We at webpage tests have a great relationship with the people at HTTP Archive. I talked about it before. They are the authors or responsible for the Almanac. They use webpage tests on the hood, but we also have these conversations and we dig up more data that may not be published, but, we keep it on hand so that we know, where to lean in, we'll say.

So when it comes to NextGen, We actually, or sites in general. We recently, or I know Rick Biko did a talk on this, but he recently did this sort of audit and looked at some of the pain points and where some of the greatest improvements can be done. [00:24:00] And I'm gonna go through a few of the frameworks again, because it didn't have data for everything.

But let's look at NextGen sites now out of the five top issue. Four were FID related, meaning they were interactivity related, meaning JavaScript was involved. So for example, the fourth top issue when it came to n year sites is were related to the main threat. All right? So 87% of pages.

Web, oh, shouldn't say pages. NextGen sites had main thread issues. 77% of them had Bud Boot up time issues, and that was the number two issue on per the sort of query that we did. and as well later on down the sort of like list of priorities, but 81% of [00:25:00] pages or next year sites had issues with unused JavaScript.

Let's look at some of the same data would react. Again, four out of the top five issues had FID slash interactivity related challenge. Number one was BootUp time and that's React sites. 83% of sites had BootUp time issues. 89% of sites had main thread issues. And again, top five, this one was number four.

And as well further down the page, they had unused JavaScript issues 84% of their sites did. And I think to close that out, I'm gonna talk about view three of the top. were FID related again, interactivity, JavaScript being in focus when it came to failed audits. So for example third in their challenges Bud up time at 73%.[00:26:00] 

Much later down the page I think it was issued, 1180 4% had unused JavaScript challenge. And that's not to say that this is, the biggest challenge for them, but these are things that were correlated in terms of okay, the search, the audit was done and we saw where we were able to create the biggest change in terms of user experience.

So in rounding now, . Some of you may have seen this tweet came out a couple days ago. I had to add it to the deck, talk about if you use React you should be using a React framework, et cetera, et cetera, et cetera. Andrew's on the core team,

my personal belief, whether you use React, whether you use React framework or any other framework for that matter. I think testing is all you really need to. All right. [00:27:00] It's unfortunate because a lot of people just go live and they don't do enough testing. Certainly not enough performance testing, and some of these issues would've come up if you had done a couple, audits.

And in fact, I'm a big believer of the falling. There are no mistakes in when it comes to web performance. They're really just over. You didn't understand something or you didn't take a closer look, and that may have just gone by. So again, I mentioned earlier today I work at webpage test.

I used it before I start to work here webpage test by Catchpoint. It is a fantastic tool. We're just there. It's a free tool by the way. We're just there to help you try to understand web performance. Try to take a closer look at the details because the web, like we are not in Kansas anymore, this is not what do you call that thing?

Like early K Gigi or if you're American, what's that one where you, the classified, I don't know. I [00:28:00] forgot what it's called, but either way. , the web is complicated, and today's web certainly very detailed, but it's very important that you know what's going on as a web developer, and I'm gonna close it out like this.

We released a free course earlier this, or earlier this year, late last year. Lightning Fast Web performance by none other that. Scott Gel an amazing performance engineer teammate of mine. And it's really. Leveling up, getting people to understand performance how it's changed over time.

Again, we are not in Kansas anymore and it's an absolutely free course, and this is something that you can bang out on the weekend. Like the library or whatever, wherever you go. But you can scan the qr. and and check it out, man. I guess I should have had a link as well. But I'll probably post a link somewhere in the chat or something like that.

That being said that's it. I hope I was able to paint the picture for you in terms of the importance of web performance. What is actually [00:29:00] happening on the web right now? A snapshot of the resources that are out there on the web, and especially JavaScript because it is a very important resource when it comes.

Everything that we need to do. However, it is also a little toxic and is contributing to some of the challenges that we're seeing right now, which is why there are some great people out there, like the good people at Enhance that are trying to make a change there. And others you've seen like Astro and people like, oh my God, quake, et cetera, et cetera.

Anyways, that's it for me. Mercy, thank you very much for your time. we like to say. And that's the end of the show. I,

**Brian Rinaldi:** thanks, Ari. That was that was great. I'm, I think I didn't see any questions yet because I think two people are just too busy nodding going yes. I, yes, I know . 

**Henri Helvetica:** I mean that, I can go to lunch early. I don't know. 

**Brian Rinaldi:** No[00:30:00] I got questions. I got questions. I'm just saying sure, dude.

Everybody's just you can see in the chat, people are like yep. This is me. Okay. Yeah so you had some really great data and I was asking people if they were surprised by any of it and I guess fortunately or unfortunately, I guess fortunately a sense that they're aware, unfortunately, in the sense that that, they.

it's not they know that the problem is bad. So like none of them, everybody was just Nope, not surprised by any of this data. . And I think you get it, something we've been already been talking about a lot today, which is that that's something I harp on. I have nothing against React.

I actually think React is a. Framework and it's done a lot. But we, you, it's not just React, right? React has gotten, we blame react, I guess because, it, it represents so much, like it's become the dominant framework by far, right? Yeah. Yeah. But we threw it at lots of problems that react isn't intended to solve, right?

That isn't that, do you think that's part of the problem? We just threw [00:31:00] it at everything. 

**Henri Helvetica:** I'm gonna make a very like part of. Discussion. I try to, make it as simple as possible to onboard you into the conversation. And the one thing I mentioned once in a sort of chat during a podcast is that I find that the React developer today, alright Who's been told like, Hey, this is, how you do the web now, you're being taught React in boot camps, et cetera, et cetera.

I think the web the React developer of today is the WordPress developer of Yes to year. All right. In a sense that this is being described as like the sort of like framework of. Just like a few years ago, several, in fact, people jumped on WordPress for whatever reason and they stuck with it.

And right now what's happening is that, just like WordPress is having, performance [00:32:00] challenges may be reacted as well. And this is not to pick on React. It's the point that people are just being, taught how to use react in its simplest form, but not deal with the details of modern development.

All right. Modern development is requiring more like the minutia of sending something online now is not what it used to be, right? The details have to be looked after and which is why, and again, I'm throwing in WordPress, don't, have to apologize to that, they have a performance team.

Looking after Word Press, react may or may not, I'm not sure, but there's generally a sort of like intelligentsia of people looking at performance at every step. And right now the web is showing us that the majority of developers are not paying attention. And with that being said, [00:33:00] react is expressing itself in full Bloom and Blossom as a framework that ships a lot of JavaScript. All right? And that also comes down to people potentially not having performance built into their workflow, right? And these are things that you'll notice only when you get into the details. It's like driving a.

A to B, everything's good. But some cars blow blues, blue smoke. All right? And if you pay attention, you'll see that blue smoke. Right now, people are potentially not paying attention at the blue smoke or whatever you wanna call it. That's coming out of the web. And we are here to like highlight that and hopefully educate you on how to have create like leaner sites and create better user experiences.

Yeah. 

**Brian Rinaldi:** Yeah. And I think you, that amongst a lot of the new tools [00:34:00] and even react themselves with the server component seems to be headed in the direction. Like we need to start to find ways to ship less JavaScript. But I do wanna get to, we got a couple questions and we got five minutes left, so I wanna make sure we get to the Chris asked, why do you think the go-to metric will, what, why do you think the go-to metric will be changing?

When, what's been the standard for a while has been the mobile first environment, and that hasn't changed. So I think he was talking about, you mentioned that the go-to metric, the I N P and N 

**Henri Helvetica:** FID. Yeah. Is that the one? Yeah. . Yeah. When you look back at things like co web vitals and even prior to that, just say when Lighthouse was introduced there are some metrics that were around when Lighthouse were introduced, it was introduced that are not around today.

All right. So for example, largest Contentful paint, which is seen as probably the number two metric beside behind TBT was once experi. It was like, eh, we're not sure what we're gonna do [00:35:00] about this, but we think, it should be mentioned because there was this thing called F C P and then there was first meaningful paint and largest Contentful paint was like an experiment.

They found out through research, meaningful paint was meaningless. Drip and FID over time has been regarded now as probably not the best metric. Why? Because. They were noticing that sites, poor sites with poor user experiences were still getting good FID scores. So they had to go back to the lab and figure out like what to look at and really try to understand the.

Just again, the enormous challenge that is, processing JavaScript and what is happening during an interaction, and they found out that interaction to next paint was likely the [00:36:00] successor and FID would have to be sunsetted. It's not official yet, but it's likely going to be the case. And this is just classic research coming to, to to fruit.

That makes 

**Brian Rinaldi:** sense. I think, metrics are always important, but in any situation, once you create the metric, people start, basically trying to work towards that metric and work often create workaround. So you end up having to change the metric. It's normal. Okay. Yep. So Eric asks wondering how you feel about partial hydration as a tactic to reju reduce unused js and expensive main 

**Henri Helvetica:** threats.

Now you. I was gonna say I think I mentioned it at the start, there are a lot of solutions that are being proposed right now and bandied around and. We are still, I personally believe in an experimental phase, right? I say experimental, but we're in a phase where people are trying different techniques, I think, yeah, I think there's [00:37:00] gonna be an enhanced talk a little later today. Is that correct? Yeah. , , you're going to hear how they are tackling this issue of hydration. Because it was, there's partial, there's I think it was, is it astral or quick? That's doing, something around it's less than partial hydration and I forget they have a name for it.

But again, I think the islands, 

**Brian Rinaldi:** pardon? Islands architecture, I think is what you're 

**Henri Helvetica:** referring to. Like that. Yeah. There's a bunch right now. Yeah. And they're all competing for our attention, but the point is to me also, and something that I also want to mention is that we know we have a race.

Since I run, we have an A to B race, right? Start line, finish line. The finish line is a good user experience. You know what you do between now and that finish line. More or less up to you, but hopefully you're not cheating. You're doing something that makes some sense and then, we look at the result at the [00:38:00] end, right?

I was talking to someone else about this. You could have five people lining up and for a track meet. One's in spikes, one's in running shoes, one's in heels, one's in Kodiak. All right, so they're gonna make it to the end first, how fast they're gonna get there, and b, was it like a proper experience?

And that's what I think happens in the end. The last thing I wanna say is this. I think it's important to get into a particular framework. Whatever technologies they employ under the hood and deep dive all. I think one of the challenges right now is that there's so much being introduced, so many new techniques.

People are like hopping around like it's musical chairs and they don't really get to really really master the framework and the sort of like little intricacies that they're like, oh, I know how to fix this. Boom boom. And they're off and running, running again. I'm sorry about that.

The point of the matter is partial hydration [00:39:00] has a use case. That's without doubt. All right? When you start to look at the data, what is happening in your particular use case, if it makes sense, run with it. Again, apologies about the running . But but yeah that, that's like my answer that I wanna provide because I think that a lot of people are like I hear this is better.

So they suddenly jump over to this next framework without. Really exploring the details of one they may have been using for a little while. I know people who use web webpage chest I know a lot of people use webpage chest. I know people who use WordPress and they can provide a really good experience performing experience with WordPress.

The data shows that the majority of people don't. All right, so that's why I think that the technology you pick to work with, Really get into the details and find out why it's good or why it's not amazing, and then you can move on that way. But again, there are use cases out there for par partial hydrations, and they're all over the net where they're like, yo, it's [00:40:00] working for me.

So it's I think that's partly the challenge. I hope that answers the question. I know it's a little long-winded, but, this is this is my little get off my lawn. 

**Brian Rinaldi:** Yeah, no problem with the long winded. So we got one last question and it's a let's go. It's from Bley says, where'd you get your cat?

**Henri Helvetica:** Like this? Yeah. Oh man. Yeah. Thanks for asking. Those are flamingos, by the way. And palm trees. It was a birthday gift actually years ago, yeah. Thank you very much, man. I haven't worn it in a while, so thanks for noticing 

**Brian Rinaldi:** Flamingos and palm trees. That's supposed to be me, like I'm the one in Florida, 

**Henri Helvetica:** pump trees in Florida.

If you wanna wear ATU in Florida, go ahead, dude. . 

**Brian Rinaldi:** That's true. I wouldn't be wearing. All right, thanks Anri. This was amazing. I really appreciate, I learned a lot and I think everybody, I saw just so many comments going on in the chat, so people really, [00:41:00] thanks so much. Hey 

**Henri Helvetica:** man, appreciate it.

If you have any questions, folks find me on the Twitter sphere. I'd be happy to kick it. Banter, tweet you back What?