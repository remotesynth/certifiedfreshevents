---
_build:
  list: false
  render: never
---

**Sean C. Davis:** [00:00:00] Welcome to code sandwich hour, a certified fresh event where we talk code and sandwiches, and we do it all in about an hour. This week's special guest is Peter Cooper. Who's the founder and publisher in chief at Cooper press. Now Cooper press. You may not know, but it's this somewhat hidden engine behind, or maybe you can consider the publisher of several email newsletters, including JavaScript weekly front end focus node, weekly jams stack, which you might know is also edited by CFE founder, Brian Aldi, and several other newsletters as well.

Each of these together, they reach the inbox of more than 500,000 developers. Every. With that. Let's welcome Peter, to the show. Welcome to the show, Peter.

**Peter Cooper:** There I am. Hi, how's it going?

**Sean C. Davis:** [00:01:00] Good. Good. Great to have you

**Peter Cooper:** on. No, it's going good. It's good to turn up.

**Sean C. Davis:** All right. Let's dive right in and start with, the most important question first.

Oh yeah. And that is what is the best sandwich?

**Peter Cooper:** See, I can prepare for this because it's the only thing that I know you're definitely gonna ask me. But it was a very simple thing to prepare for cuz it is obviously the bacon sandwich. I don't really know how much of a thing. This is across the the pond in the states, but in the UK, it's pretty much a.

It's almost a religious part of a, weekend experience is to have a bacon sandwich at some point or another. I've had to start eating a lot fewer of them since cholesterol and things became something doctors start talking about, but it's still obviously, gotta be out there.

But I will echo the words of another guest you had, which was Sue Charlow where she said the best sandwich is the one that someone else has made. That is a good fallback answer for me. If it's someone else has made it then great. I love it.

**Sean C. Davis:** And then it's generally good. Okay. So tell us [00:02:00] about the, what is the makeup of a bacon sandwich aside from bacon?

**Peter Cooper:** This is a game where it's gonna be controversial because when you make a sandwich in England and you have bread, but you put butter in it, which I know, I didn't even realize this was such a controversial thing, but this whole debates online as to whether you should put butter in sandwich or not, but English people do.

And I never did with bacon sandwiches until oh, about 10 years ago. So it's actually a newish thing for me to do this, but yeah, you put some butter in bread, bacon done. It's as simple as that. It's okay. Yeah, it literally is. It's just a way of eating bacon and having an excuse to do there's nothing Nate about this, not even in source.

**Sean C. Davis:** You're like I'm classing up. The I'm not just gonna shove bacon in my mouth. This is more elegant. I'm wrapping it in exactly bread and

**Peter Cooper:** butter. Yes. The fact is if you're gonna eat bacon on its own, which I'm perfectly happy to do it, it's not very filling on its own. So you could literally a whole, you could just keep going and you're just gonna cholesterol through the roof.[00:03:00]

So you need some padding, but rice doesn't really go with bacon and past. It's not a breakfast. It, so bread. It's the way to go. I guess you could probably have like pop tarts or something, but that's not my style, pop tart bacon. That could be interesting or pancakes. And that's quite,

**Sean C. Davis:** there was this trend in the states probably.

Bacon's always amazing, but like maybe 8, 10, 8 years ago, or so I feel like bacon got I. It was super trendy and people were putting bacon in everything. And what I came to realize was that. It's because it's so super salty that you can pair it with something that is traditionally really sweet and they just work together.

There's this there's two things that I think of there's a local donut shop and a local ice cream shop and they both put bacon, and ice cream, bacon and donuts. And that's disgusting. Not gonna try that. Yeah. And then eventually did, and it worked cuz it they each offset each other compliment each other.

I don't know.

**Peter Cooper:** It worked, you might remember the [00:04:00] fad. There was a few years back around sorted caramel as well. That was a big thing. So they, you mix sort and caramel together and then you can put it on anything and it's just like that. It is it's again the contrast of sweetness and, sweet and sour type things going on.

But yeah, I'll tell you the weirdest thing I ever heard of it's I was driving around California a few years ago and I went through an area that grows garlic. Very heavily, like literally the air smells of garlic and they sell garlic ice cream. That's just wrong. I don't, I, I don't get it.

**Sean C. Davis:** that? Yeah, that doesn't seem right. So yeah. Oh, okay. So when now, when you said bacon sandwich, my mind immediately goes to, and it might just be a thing in the states, but the BLT where it's the bacon is forward, but we also have mayonnaise, lettuce and tomato. Now, have you had one of these sandwiches?

**Peter Cooper:** Yes. BLTs, reasonably common here. I think they're the sort of thing you'd get. If you went to say like a Starbucks and you've got a sandwich, I think that's quite a common thing to get there. I don't think the BLT is really [00:05:00] part of. British culinary kind of history as such.

It's definitely an import from the us, but yeah, you could make it that way. I'm just not a big fan of fresh tomato in anything it's got this weird kind of taste that I just don't like, but lettuce is fine. So yeah. If we wanna, up our vegetable intake, then that's a good way to do it, yeah. I'm gonna

**Sean C. Davis:** class up the bacon sandwich even more. Okay. Before we move on. So we have to clarify here for Brian has commented. Okay. He's wondering if salted caramel was just a fed or is it always a thing.

**Peter Cooper:** I don't mind it, but there definitely was a fad of them shoehorning it into every type of candy or, cake or all types of things.

And that's not it's and again, Paul pork was another one of these, great, barbecue stuff is great. If you go to Texas, it's there all the time. But Paul port was a fad as well, and it's, gone up and it's going down, and we used to this stuff, it's in tech, does this all the time, everyone's using GraphQL or no, one's using graph.

It's it's just like all over the [00:06:00] place, it's

**Sean C. Davis:** oh, that's a great comparison because I. . I've done it too. If graph specifically, we're like, this is revolutionary. You can make one request and it's you get everything you need at one endpoint. It's amazing.

And I, I just had a conversation last week where we're like, what's this tool it's literally just a GraphQL endpoint. Can it do something more? you're like, okay.

**Peter Cooper:** All right. Yeah. Yeah. GraphQL is Paul pork. It's the Paul pork programming. It's tasty. Everyone loves it, but I dunno, I just couldn't eat it every day.

Every for every meal, it's it doesn't suit everything. , that's a

**Sean C. Davis:** Great analogy, but there you go. Okay. So that's the, I feel like that's the perfect time to transition into the next part of our show, where we'd usually dig. More technical topics. And I think we'll get there tangentially, but okay.

You Peter being the founder of Cooper press, I wanted to spend a good portion of this time, kinda talking about Cooper press and I gave a very brief intro at the top of the show. But [00:07:00] curious can you take us back to the, so we know it's a, we know it's a publishing engine largely for email newsletters, but can you take us back to the early days?

So how did Cooper press become a thing?

**Peter Cooper:** It's a bit like a fractal. I can go back and then I can go back and I can go back and I can zoom in and zoom out. It's always getting the right level of depth on this is the tricky thing for me. So you could go back to 2010 when I began Ruby weekly and the whole idea.

Came around Cooper press, wasn't the thing then. But Ruby weekly began as a newsletter and took off quite quickly within a year, once I'd launched other kind of I basically think of it as like dominoes, so I always Ruby developers and I was like, what else do they do?

Are they do JavaScript? So you just knocked these dominoes over content wise. So we moved to JavaScript, post grads and so on. And once we had a few of those and it was doing well, I was like let's turn this into a business. And that's where Cooper press came from. But then of course your next question might be why did you even begin, Ruby [00:08:00] weekly in the first place.

And that allows me to go back a bit further in that I launched a blog. In about 2005, I think 2006 to promote a Ruby book. I was writing called beginning Ruby, which is now on its like third or fourth edition. I'm not as involved with as I was. Someone else actually did most of the writing for the newest one.

But I created the blog to promote that book, but it ended up becoming a bigger thing. It became basically like the main way for people to get Ruby and rails news for, a good few years. And I saw what was happening with Groupon and living social and a lot of the email lists and email related businesses around 2009, 2010, and was like, I like this idea.

It works really well from a publishing point of view, to be able to push things to people. And the idea came from there. So I already had this audience of rubs and, I was heavily involved in Ruby in the rail scenes. Anyway, I basically just took an audience that I already had and then moved it into something else and then [00:09:00] built it and then moved them into something else and just kept growing and growing like that.

It's been a constant accretion over like the last, 10, 15, 20 years. However far you wanna go back in the projects I've done. Gotcha.

**Sean C. Davis:** Okay. So in the early days when you are running just Ruby weekly, was it were you doing it mostly to share what you had written or you're just you're in Ruby all the time.

So you're following the news and you're like, this is just was it, has it always been a synthesis and syndication of what's happening across the industry? Yeah,

**Peter Cooper:** cause there's only so much I can do. As an individual, even if I was, the most prolific person ever, like I dunno, a C saw who's or something of, of Ruby the most I can do is develop some code and write some articles.

There's so much more going on out there. And one of my, I assumed everyone could do this, but I've since kind of realized it's probably a little bit of a special talent, at least in that I can, I seem to have a good appetite for just endlessly absorbing information from all over the place.

And as you say, synthesizing it into something [00:10:00] else, other people find useful, which you know is it's fits very well with my line of business. And it's pretty much what it's all about for me. So when

**Sean C. Davis:** you so rub and let's, if we stay on Ruby weekly for a minute, since that's still a newsletter today.

Yeah. How has the. the way that you source content, has it changed over the last 15 years, or do you, where you get the content from today, is it from different sources in a different way than you did 15 years ago,

**Peter Cooper:** in terms of the tools and techniques underlying all of it, there has been a gradual kind of evolution over time, but the general approach hasn't significantly changed.

We get more submissions now than we ever did. So I would say, perhaps about a third of the items that we run our submissions in some form or another cause, okay. People can just hit reply to any of our emails and we get it it's that simple or there, on Twitter or DMing me or whatever.

So I get a lot of submissions not all of which make it in, they tend to be reasonably good if they're submitted [00:11:00] directly. Other than that, I've built over the years, all of these different kind of intelligence tools just to look at numerous different places and analyze certain types of signals that are going on.

Of course I follow a whole bunch of feeds through RSS. I have some external curators as well who have their own ways of finding things. We have various ways of hooking into package systems and stuff like that to monitor for updates to popular packages. So we have all these different elements, but there's no rank.

I can't have there's no one individual way that I can say, oh yeah, this is the main way that we do it. , it's more that there's 10, 20 different approaches and systems and sources that kind of again, to use your word, to synthesize everything into what we produce. Like it's, it really is, I'm a bit like an octopus when it comes to content, like I've got.

Arms in every single direction doing various different things. And sometimes, it can be a bad thing because sometimes we end up with blind spots where,[00:12:00] I've focused on certain sources or certain, things, and then I've forgotten to check something. And then it's been like, oh, I've missed this story about, whatever.

And we experienced that quite a lot in the JavaScript world, cuz it's so diverse and different, I've had emails from people from certain, reasonably popular projects projects, sorry, saying, oh, you haven't covered us for a few months and we've done this and this.

And it's I have to just be really careful all the time, not to have too many blind spots going on, but that's part of the

**Sean C. Davis:** So it, it makes a lot of sense that it evolved and you've got this kind of engine and other folks involved now. But in those early days, was it just you on cuz that's probably still the early days of Twitter.

Was it just like a series of RSS feeds at that point that you were listening to and reading

**Peter Cooper:** back then we've Ruby and in particular, so Ruby was a little bit different to all the others that have come after in that with Ruby, I was so heavily into the scene. I was on IRC, like all of the time with people.

There's yeah, I was for a good three or four years. I was in this [00:13:00] situation. I was in this channel on IRC called Cabo on free. The story I always like to tell is that I was basically in a channel with a bunch of people who will become billionaires. And I haven't which totally fine by me.

I don't wanna be a billionaire, but DHH was there Toby from Shopify was there. There were just all these different people that were like, the amazing people of the early days of rails were there. So if something came up or there was a topic of, contention in the community or whatever, I could pretty much go to an authority source about something and find out what I needed to.

That's not so true now. I'm a little bit more detached. I have a bit more of a, what I like to think is more be like an industry analyst role in that I really am looking from the outside and trying to, join dots together. So it was very different in the early days I did fix, start off with exactly what I knew and what I was doing day to day and that's different now.

So I've turned into a. Analyst job, but from being an actual practitioner at the start, and that hasn't really changed the [00:14:00] quality, but it's changed the, I dunno, it's changed the, how broad I can be and stuff like that is good to be on the outside, looking in sometimes. Cause I can see trends and not be quite so influenced by my own personal opinion about them.

Because I'm not necessarily building Josh apps like every single day.

**Sean C. Davis:** That makes sense. Yeah. Yeah. Yeah. And so to put one of these together you gave us a hint at, finding the content and then yes you have to synthesize it. But I as as somebody who's both produced content, but also then we should, we could say tried and failed at newsletters that it's it's a lot of work to put them together to, to manage the lists, to, everything that's involved in it.

And I'm curious, but I think other folks who have had a slight peak behind the curtain might have a similar question, which is how just generally speaking, how long, or how much effort does it take to put one of these pieces of one of [00:15:00] these publications together at, on any given

**Peter Cooper:** week? It's one of the most commonly asked questions, I think.

And it's one that I can't really give a precise answer on because I don't really track it. And B I tend to just work until I get something done. And then, if I'm overloaded or whatever, I'll scale back my work over time, but I'm quite flexible in how I work. I tend to get, make sure everything gets done no matter how little or how much time I've got.

But I think this is true of anyone that works like independently or is somewhat in charge of their own work, in that you're always working at it. I'm always, hitting up, hacking news and Reddit and, even my friends, I talk to, generally all developers as well.

So there's always this undercurrent of that. I'm keeping up with things and monitoring things. And so on as many of us do in terms of the actual process of me sitting down saying I'm doing issue X of Ruby, weekly, Joshua weekly, or whatever, and I'm gonna put stuff together. Then that's a completely different thing.

It might only take, a couple of [00:16:00] hours start to finish, but I've done all of this kind of work kind of composting content in various systems where I can say, oh yeah, I wanted to include that. I wanted to include that. And I've clearly already fought about what I was gonna do before I even got to that point.

So I can't give you a precise number on how long it takes, but it's pretty much just my work life. Like it just, everything goes into it. Which I know sounds a bit artisty and it's it's like saying to, Damien Hurst or I know Picasso or someone I'm not comparing myself to Picasso here, but going to an artist, the Picasso of news then exactly.

It's like saying, how long did it take you or actually Pete Mon and really good option here because it's very basic it's lines, it's bold colors. And you think I could do that in 20 minutes and you go to them and you say, how long did it take you to make that painting? And they'll say it's taken me 50 years to get here.

So I feel like that. It's that type of

**Sean C. Davis:** thing. It's it's so fluid, like it's so ingrained in everything else that you do that you can't to you, you just can't [00:17:00] extract it into some quantifiable thing. You're like yeah. Make it your, like your main mission in your career , and then that's how you do it, it's hard to, yeah.

And that,

**Peter Cooper:** that sucks as well because it makes it really hard to outsource stuff. Interesting. We've had quite poor luck outsourcing. So we have, we have some people that we work with and they're great. But in terms of saying someone right, can you just run the whole of, I dunno, just it weekly.

Like it doesn't work that well. Just because it does seem like you do need to live and breathe this stuff and also have a certain mindset and there's a whole bunch of different, personality kind of things and work ethic things that need to all come together to make this work. And I'm not saying anyone else is worse, cuz other people are much better at other jobs than, I couldn't do other people's jobs, but being running a publication is, does take a weird combination of skills that not everyone has.

And that's why, when we've had successful Kind of outsourcing of things. It's generally been to people that already have that kind of [00:18:00] mindset. So Brian, for example, we've doing the the jams stack newsletter. We do very little to direct that. Like we, clean it up and check things and fix, typos and stuff.

But in terms of actually directing it, he's very much in charge. He's like the independent artist, putting together that thing and. That works quite well, but there's very few people that can do that. And of course that's why, Brian has CFE dot and, runs all these things. And so on there's people that are good at that type of thing.

And there's people that are not good at that type of thing. I couldn't sit every day looking at, ju tickets, working on a single app every day and some people can, and that's very profitable for them. So yeah, it's, and when, so when I've come onto shows and people have been like, oh, how can I do X, Y, and Z?

It's yeah. It's a bit like, asking Moham Ali oh, how do I be become a boxer? It's so yeah, I'll stop rambling, but it's, again, I'm very conscious that I'm trying to compare myself to Moham Ali and Picasso and people like that. I'm just using these examples cuz they're people that, [00:19:00] you know, but yeah,

**Sean C. Davis:** Yeah.

And I think that what you're saying and reiterating through that point is like, even with the jams stack newsletter that you've got Brian and can rely on Brian, but Brian has also ingrained himself in his career in this space that is jams stack. And so we probably, I we'll see a few comments here, but that he's prob he probably can't even really quantify what it would take for him to do his part on a newsletter because it's, again, it's it's always there.

It's always paying attention to everything that's happening in the space. That's just part of life. Part of part of his job.

**Peter Cooper:** I think, dev res probably have a lot of. Sympathy with this whole idea, because I think there's a lot of developers who simply could not be devel people just because they don't have perhaps the interest in talking to people who don't understand certain concepts or they don't have a way of getting into the beginner's mindset or a way of getting into, so there's people that can do devil there's people that can do sales and there's people that absolutely cannot do sales.[00:20:00]

So there is an element of, okay. Yeah. You might be able to take on some of these jobs and get better at them, but I think you you already know whether or not you're probably gonna be good at sales or not. Cause you're gonna have tried it, something relating to it. At some point it will click or it won't have click your personality.

So I'm a big believer in doubling down. The skills and the natural tendencies that I have rather than working on the ones I'm weak at, which is counter to a lot of, self-help knowledge out there. But it's I only got one life. Why spend time doing something that I'm gonna struggle with learning how to do I focus on what I'm good at and that's, why I do what I do.

**Sean C. Davis:** Exactly. Exactly. And so you've been and you've been doing this for 10, 15 years or longer. And now you've got this suite of publications underneath Cooper press. What are your goals? Do you wanna keep doing this? Do you wanna keep growing it? Where do you see the next five, 10 end years of

**Peter Cooper:** Cooper press?

I have absolutely zero idea. So [00:21:00] again, this is a very common question because I don't know, people seem very interested in this type of thing and I am not because I have a really weird. Just in discussions from people, I seem to have a very weird sense of time and I'm very bad at planning anything more than like 10 seconds in the future.

I'm very good at adapting and changing and dealing with what's happening right now, but I'm not and I'm good at preparing for the future, but I'm not very good at saying I wanna be X in 10 years time. I couldn't answer that question in a job interview. Like where do you see yourself in five years time?

It's I have no idea cuz five years isn't here yet. So why really, my main goal is keeping the show on the road. That's the day to day goal is keep everything running, keep everything, going along, not decreasing or declining or getting worse, slight improvements over time.

Keep measuring things and. If magically one day, some angel falls from out of the sky and says, I'm gonna give [00:22:00] you tons of money for your business. Then I might go, whoa, that's a nice idea. Let's do that. But it has not yet happened. People have tried, but it just doesn't, hasn't been for me, but yeah, I'm just happy keep doing things.

And one of the things I do is I just constantly, I'm a bit like a magpie. I see things that are shiny and they're like, oh, let's focus on that. And then. If a nice little project comes out of it, I'll double down on it and see if it works and see if it turns into a thing. And if it does I'm up and running and I'm going, if it doesn't work, I kill it off.

It goes. And that's pretty much all the different projects that I've got going on. All the hobbies that I've got that people see it's just me playing about that is my entire life it's just playing about. And that's amazing. That's amazing. Some, yeah, someone my playing about makes money. So I feel to a certain extent I'm retired already in the, I just mess around, do what I like.

Yeah. It's well,

**Sean C. Davis:** You actually, that's a great segue into another topic that I wanted to discuss, which I think I found it on maybe the Cooper press website that it, it said something like.[00:23:00] You've had many experiments that you've run over the years. Some have worked some haven't worked and yeah I'm curious.

So it sounds like you're spinning things up quickly, testing quickly, they work, or they don't work and you make these decisions fast and kill 'em or keep going. I'm just curious to know what's maybe one experiment that has has led to something really good. And then on the other side of that, what's an experiment that was an absolute failure that you had to throw away, but maybe you learned something from it.

**Peter Cooper:** I'll probably pick a couple examples. Cause some of 'em are a little bit tenuous. But doing, just running my personal blog in about 20 years ago I was blogging really early on from like about 1999 through about 2006, personal blogging until Twitter come over and ruined everything. I had so many things come out of that.

Like the book deal, the publishers just said, oh, we've noticed you've posted about Ruby a few times. Do you wanna write a book? Okay. And so that's probably analogous now to being mildly successful on Instagram or TikTok in the, all these brands will come out [00:24:00] and say, oh, can you model our clothes and stuff?

Obviously not to me, but it's the modern kid way of doing everything. But I had that experience and I also had people from arid media reach out and were like, oh, can you chair a conference that we're doing? Okay. So I ended up chair a conference for five or six years and ended up helping them launch OSCON Europe as well, which, was quite a big thing at the time.

Sadly O'Reilly are no longer doing events like that, but, it was a fun period of time. So just running a personal blog and constantly. Saying stuff in public just worked to a certain extent. But then, I've had numerous other projects as well that have led into various things.

I launched a like a code snippets website about in about 2005, 2006. And then, after a couple years I sold it not for a lot of money, I think it was about $30,000 or something, but it, paid down the deposit on my house and then, that gave me a place to live and, so that's a successful

**Sean C. Davis:** project.

**Peter Cooper:** Yeah. Yeah. It's just always been these little things that just, I just think as long as you don't stand still, and as you constantly just try little random things[00:25:00] something turns into something good, of course. Now you're gonna ask me what is something that completely bombed or, that's what I messed my life up, which again, as I say, I'm my memory, I have a very odd autobiographical memory and sense of time.

So I don't tend to think about fades or linger on them. I don't tend to haunt me very much. Or you

**Sean C. Davis:** just, you are you like, you're so quick to dump something to the side, cuz you, you just have this innate sense like this isn't working. I'm not gonna let it affect my life anymore. I'm moving on.

Is that more of yeah,

**Peter Cooper:** think there's an element of that, but I'm also quite philosophical in the sense that. If I do something and I put earnest effort into it and people don't connect to it or vibe with it, I, I assume I got it wrong. This isn't that I've tried really hard and failed it's that I had a bad idea or it just wasn't, the right thing, the market didn't fit.

The thing I dunno, I have a very. Mechanical kind [00:26:00] of business, like way of looking at failure in the, yeah, like not every, new Pepsi didn't work, but Pepsi don't sit around, new Cokes, sorry, not new Pepsi. Pepsi was the new Coke kind of but yeah when companies launch these different brands or products or whatever, they don't sit around for years afterwards going, oh remember we did that.

Oh, it's really bad. The public does that for them. That's it's the public's job, but the companies themselves don't sit around worrying about stuff like that. And so I try to be like that. So I can't think of anything that's really played on me that I've really failed at.

I've, I guess a lot of people would say that I've wasted a lot of time on things. And so that's a form of failure, I've there was a whole period of my life where I was trying to get to the us to work, cuz there was a company that really wanted to employ me there. And just, none of it ended up coming together a whole bunch of, technical and legal reasons.

But again, it's something I've not even thought about that for like years and years, it doesn't play on me. , I'm enjoying what I'm doing now and I'm here. Like [00:27:00] I always think, and this has happened a few times, like when I've been buying when I've bought properties with my wife to, as we move up the property ladder, as we call it.

There've been places where we are like, oh, we really wanna buy that house. And then you start doing it. And then it all falls through and it fails and people get really sad. Oh no, I've lost that house. I've already, it's the dream house, blah, blah, blah. Every time that's happened to us, we found someone that's even better and ended up moving there instead.

So that seems to be the way that I go with projects. I might have had a good idea once and then been really keen to see it work, but something else has worked. I'm happy with that. And that's

**Sean C. Davis:** a, that's a good way to put it. Like the, you eventually fall into something that's gonna feel better than the thing that you lost in the past.

So that's yes. I love the looking through looking at life career houses in that lens, for sure. Wanted to step back to the to, to the book a minute, you've mentioned a few times that you wrote the book beginning Ruby. And you got approach to it to write it because of the work you were doing on the blog.

Let, [00:28:00] I, I think. To set the context for folks, a lot of folks who are creating content, whether it's for their job or on their personal site. I think that the idea of a book writing a book sounds really glamorous. Like I get to be the author of this book. Maybe I make some money from it, it's, oh, you won't make any money.

Or it could be a huge accomplishment what, whatever it might be. But just curious what is the here's the question I should ask, I guess that would summarize my thoughts are or is yeah. Would you do it again?

**Peter Cooper:** The fact that I pretty much handed over the writing of the fourth edition in my book to a co-author probably tells you a lot about the experience there yeah, I fell out with the publisher slightly.

Things have changed enough that. Writing books now is a very different proposition than it was in 2005, 2006. When I began doing it the amount of, what they call gatekeepers and, all that type of stuff and the technology and the licensing, and, the idea, even back then of someone [00:29:00] just writing something and just sticking it on the web as a, as a book and kind of saying, oh, this is licensed in a certain way, very unusual back then.

Whereas now, everyone's doing it. In fact, it's our most technical documentation is shared now. So yes, I would. The only problem is that, I spend so much time doing. My main job that I just don't have the time to do it. But if, for some reason that all disappeared, then you know, I, yeah, I'd be very happy to do it again because it is very nice to spend that amount of time just focusing on one particular topic and digging in deep.

I am really good at the broad stuff, but at the same time, it can be fun to, dig deep into something. And I tend to have to withdraw from that very quickly because of my job. Cause I just don't have the time to go deep on things. It would be nice to do that again, but yeah maybe if, I don't need to run these newsletters one day I'll do that, but it's not on the, it's not in the plans.

**Sean C. Davis:** Does it get really tedious prior to publishing? Do you have to go through the thing several [00:30:00] times before you get to a a published version? Oh

**Peter Cooper:** yeah. Yeah. I review it there's other people on the team review it. And even then, certain weird mistakes and things can get out is just a nature of the business.

Pretty much like anything, but yeah, I can't really, I can't think there's probably some nuance to your question that I'm missing, but

**Sean C. Davis:** no, that's fair. Is when, so you said you handed off the writing of the fourth edition elsewhere. So you assume you, you ran the first three. I'm also curious as the, to put out a new edition.

Is it, are you starting from scratch? Are you just like reading and making some changes or is it all starting over?

**Peter Cooper:** So I would probably say, 90%, this is for my part 90% of the writing occurred on the first edition. A reasonable amount occurred on the second. The third was pretty much just fixes and, Arata and just making sure that all the examples are up to date and using, modern versions of Ruby, essentially.

Yeah. Okay. [00:31:00] The. Addition that was released last year, which was more targeted at Ruby free. There was somewhat more changes made just cuz there were some additions to the language and stuff like that, but the broad, so basically they give you the original files. Like every time there's a new addition and you work from them and improve it, you might delete entire sections, but at the same time you've got those files and the structure is already there and everything.

Ah, okay. The co-author basically took what I'd created, which is why, I'm technically still, a co-author of the book, even though I did nothing because they took all of my, work essentially and then just, spruce it all up, brought up speed, added some bits and that's how it works.

**Sean C. Davis:** Oh, fantastic. Okay. With that I think we're at time where we can shift into what we'll call the we'll call it the speed round. Sure. I will. I'm gonna put out there a series of five quick questions and okay. You can [00:32:00] pass and we'll just, we'll see how it goes, like the rest

**Peter Cooper:** of this.

Sure. All right. Yeah. Let's just go for it. I have I've I bear in mind, everyone. I have no idea what's gonna happen, Nell. So this is

**Sean C. Davis:** it's. It's gonna be wild. Okay, so question number one. You, we didn't talk much about it, but you're based in the UK. And so I'm curious if your favorite place to visit.

If I'm going over the UK, for whatever reason, and I end up with a couple free days, what would you tell me to do?

**Peter Cooper:** If you're in London, just stay there because literally the whole world is in London. , but London is not England. Just to let you know London, you might think London is in England.

London is its old own magical, weird place. As soon as you step 20, 30 miles out of London, you're in a totally different country. So yeah, if you're gonna pick something, then pick somewhere like bar or Oxford or Cambridge or anywhere it's, there's history everywhere. You're surrounded by it.

**Sean C. Davis:** So can't really go wrong. Pick a city, go to it, explore it. Mean,

**Peter Cooper:** heck I live in a really tiny place. No one's ever heard of. And the high school that my daughter [00:33:00] goes to is celebrating its 750th anniversary soon oh wow. There's history like that everywhere. It's you know. Oh, okay. Yeah.

It's it's weird, but it's good. Love that.

**Sean C. Davis:** Okay. All right. Question number two. What is we talked a little bit. Mistakes earlier. And so may, maybe you'll tell me you don't have an answer for this, but the way I was framing this or thinking about this was to tell us about a mistake you've made in your career.

That turned something that turned into something positive for you. So maybe not a failure could just be like one, one particular mistake within a project or something like that. But that, that turned around.

**Peter Cooper:** Okay, let me start with something more general and then maybe that'll work down to an example.

So I think, a common mistake I've had over the years is to Listen to what people say rather than look at what they do, which don't always line up. So when someone's giving you advice and they say, oh yeah, I would do X, Y, and Z. And then actually when you look at them doing their actual work, they do something else completely [00:34:00] differently.

Yeah, like how good was their advice then? Should you really be doing what they do and not doing what they say? That's a very vague kind of general principle I can't actually think of a really good example of it, but I know it's something that I've run into over the years, whether it's been in, chairing events or whatever, there's certain ways that people say, oh yeah, you should do such and such, but then actually people don't like you, when you do such and such and it's oh, no one does that.

And it's someone told me to do that. And I think a lot of that exists in programming. There's, I think the word cargo cult gets thrown around a lot, especially used to in the Ruby space in particular, like people would see things like TDD and they'd say, oh there's always blog posts about TDD.

So I'm gonna do TDD and I'm gonna do it in such and such a way because Dave Thomas said, so in a book I'm wearing, he said this and this and then you go onto a real project. And with real people in a real company, in a real place, in a real town. And everyone stood around just, oh, just, do this and do that.

And you're like where's the test. I wouldn't doing tests today. That's but I'm not saying that's necessarily. But [00:35:00] what I'm saying is that it doesn't necessarily pay for you to then come in and say, no, we must do it the absolutely correct way because you're gonna get ostracized very quickly.

So yeah,

**Sean C. Davis:** no, that's actually, I love the TDD example as like framing that up for you. In fact, that was, it was such a point of contention for me learning in, in my early days of Ruby because the. the book. I think it was the, was, is it Mike Hardell? Was that was the book that the rail tutorial.

Yeah. That's what I read to get started. And that was very much TDD focused. And so I'm like, okay, we have to write tests. I found that it was slowing me down, so slowing my learning down. And so over the years, as I mentored other folks who were learning rails, I was like, we're gonna talk about tests later.

We're gonna learn Ruby and we're gonna learn rails first. And then it morphed into this. I then got burnt a few times by not writing tests. Yeah. And so we're like, okay, let's find a a very, like a, let's find a more practical approach. Let's we don't need a hundred percent coverage. We need [00:36:00] some percentage and cover our most vulnerable parts.

And yeah I feel like the way I translate that for you is or I guess to say that to, to bring it back to say, Looking at how maybe not just taking what one person says. But looking at and not even necessarily what they're doing, but maybe what everybody across the industry is doing, or what seems to

**Peter Cooper:** work.

There is so much valuable institutional knowledge out there that exists in numerous different silos in whatever profession you are in. Whenever you go into a new job or with a new group of people, there are there's wisdom that's been built up in that group of people in tho in those teams.

That really makes sense for that context that isn't written down anywhere that isn't, isn't necessarily the correct way of doing something, but it works for that team or that, use case or scenario that you're in , , and it really pays to be accepting of that. And to really understand that.

I do think I'm not a big fan of the whole imposter syndrome thing. [00:37:00] I think a lot of what imposter syndrome comes down to is that when you think, something the, for, the formalities of something and you end up in a situation where those formalities, aren't always there, you think, oh, I'm obviously not that smart.

I'm not seeing where, all this formality and structure exists, but actually a lot of the time, it just doesn't, the world is messier than what a textbook says. And I've realized this isn't, this is, that's not a very quick fire answer, but yeah.

**Sean C. Davis:** no, but it's great. It's great. I'll take it.

I'll take it. Answer accepting

**Peter Cooper:** Age gives you this. And this is the thing, when people, when even my dad was, giving me advice or telling me stories over the years and I'd be like, oh yeah, just an old fart telling me all this stuff. and then eventually you become old and you're like, oh yeah, I remember what my dad said about X, Y, and Z.

So if I could just go back and say oh, There is some, listen to it. You don't have to do what someone says, but just listen to it and really absorb it and see where it applies to your life. It can be valuable.

**Sean C. Davis:** Yeah. You're like, I'm never gonna, I'm never gonna do what my parents did and then you do it and you're like, yeah.

Oh God, I'm, my parents are like, [00:38:00] but also I get why they did it back then. Yeah.

**Peter Cooper:** And now I'm my dad. So it's weird, but yeah. Yeah.

**Sean C. Davis:** Okay. Moving on. Number three is, so what is one piece of advice you would give someone who is looking to start their own content thing? So a public like an email newsletter, a blog conference, a meetup, any sort of, long running thing.

What's this foundational piece of advice you would give that person,

**Peter Cooper:** ask yourself why you're doing. Cause the key thing about anything like that, unless you're literally saying this is gonna be a one off meetup I'm gonna do all, this is gonna be a one off book that I write or a one off piece of content is the consistency really will matter.

So with a newsletter, it's not something you can do for a few weeks and go, oh, it didn't work, cancel it. Like you need to do it for a long time. And I know plenty of people that have been in this space and done it for years and years, and then eventually like the hockey stick starts to grow and [00:39:00] it's.

It really does take that amount of time. So you need to know why you're doing it, because if you don't know why you're doing it, or you dunno what your motivation is, then you're not gonna keep doing it week after week. This is even true with me. I'm, as I say, I think I have natural kind of, personality and tendencies and skills that kind of lead me towards doing publishing.

But even I, in the early days of doing Ruby weekly were like, oh, like I just, yeah, I don't have to do it this week. It's just, I'm, I don't wanna do it this week. Let's do something else. One way of getting around that problem is to turn it into a business because when you turn into a business and you have customers, you can't do that anymore.

You can't just say, oh, ah, we're gonna take a week off. Cause then you gotta refund them or they're gonna complain or, blah, blah, blah, blah. I've always found that actually turning things into a, basically a business or some kind of transaction for me works very well.

It doesn't Sue everyone. Other people have other forms of motivation, whether that's, they've got guilt [00:40:00] over giving up with something or, they're just sheer tenacious people. Some people know they're tenacious and some people know they're not you need to figure out what the psychology of it is.

That means that you doing this thing, doing this event, doing this newsletter or whatever in a year's time, you might not have done super well at it, but it's working. What is it about you? That means you're gonna keep doing it and not just say, ah, I'm bored. Yeah.

**Sean C. Davis:** Finding your accountability

**Peter Cooper:** mechanism.

Yeah. Look back at what you've been like with hobbies. Do you just pick up things and think, oh, I'm really eager about this. And then three weeks later, it's ah, I'm bored now I'll do something else. Yeah. If that's you need to figure out what extra thing is about this new project.

That's not gonna cause that to happen. And that is a real piece. Like soul searching, talk to your therapist type stuff. That's and again, it's like with age that you really figure out about yourself when you're 18 or 20, you just think you're gonna do everything and be a fantastic, but that's not the case.

What is it that's gonna keep you going. And I know, especially for [00:41:00] people who are a little bit older a lot of it comes down to responsibilities. The fact is there's a lot of people in their sort of thirties and forties older as well that, have kids have partners or other sort of family obligations.

And the fact is they have to keep going to work every day, otherwise they don't eat. And so that's what keeps them motivated. That's it's as simple as that. Now, when you start a. A newsletter or something on the side or a YouTube channel or whatever. If it's not making money, you don't have the motivation anymore.

So it takes a bit more, unless you really are saying I'm gonna make this my entire business, which is what I've done and why I can do it as a side project. It's a lot harder to figure out that out. You really need to be into it

**Sean C. Davis:** a hundred percent and other things get in the way. Yep. Yep. Absolutely.

Okay. Number four. So aside from your own publications, what is your favorite or most revered and you can have two answers here. One email newsletter and two just broadly digital publications. So like blog side, [00:42:00] YouTube channel,

**Peter Cooper:** whatever. Okay, so this is very specific, but I guess slightly related to what we're doing now.

A newsletter that I do admire is called pod news. I can't remember what the name of the domain is, but you search for pod news, all one word, it comes up and it's actually a daily podcasting newsletter. And you think that's a bit weird. Like I don't even have a podcast. But it's just so well formatted as a daily thing of like keeping up to date with.

Topic and a space. I can literally look at it for 20 seconds and be like, okay, I'll get a feel for what's going on in that space. Now I know the main players are the main launches that have happened. And I really just get this kind of really cool summary of it. And the guy that puts together is just does a fantastic job and I've been, inspired by him in various ways.

He also was one of the earliest people in email newsletters to put paid classifieds in, which is now a really popular way of monetizing particularly indie kind of newsletters. He's done some interesting stuff there. Guy's name is James Cridland, actually, he's a very much an expert on podcasting or radio generally, so [00:43:00] he's a good one to follow.

And so as you can see, it's actually not just about topic for me. It's also about format is very, that's my publisher hat on it's format is very key for me. I can read publications about things that I have no. Real skill or talent or particular interest in, but if they're formatted in a certain way, I'm happy.

Makes sense. I'm just trying to remember the name of another one that I read. Like every single day, I'm really bad with names. Now, so now, is a email newsletter about random stories that teach you something. So it'll be like just random things from like history or random, quirky, funny stories that have like a piece of trivia or interesting knowledge about them.

Oh, why did you know, why did such and such happen? And it'll be the story of that. So that's a really good daily newsletter and I really enjoy that one as well, just because it's the sort of thing you read and you think, oh, I've learned something interesting. It kind of pushes that do from being kind of button in your head.

So that's cool. Okay. So number two point YouTube channels. [00:44:00] He is very up and down and very inconsistent, but it's a guy called bisque, which is B I S Q w I T. He is my favorite YouTube kind of developer kind of screen caster, whatever you wanna call it. He began over 10 years ago, he's been on there a long time building like 3d engines in Q basic and stuff like it's really weird arcane stuff that he does.

He did a whole series on hacking the, so you remember games from the eighties and nineties because you couldn't have a save game progress thing. You would get these passwords at the end of levels. And you would type the password in when you came back to the game and it would put you back to the level.

Okay. And he has gone through like old Nintendo ROMs and all kinds of things and disassembles them and works out what the password scheme was for these different games. And does these amazing. Screencast about them. And it's just fascinating as a developer, really just again, pushes the dopamine button.

That's what, good content is all about for me. So [00:45:00] it's technical, but it's whimsical and fun. And I guess that is, what I, the publications I do, aren't whimsical and fun. I'm not trying to be funny or entertaining. I'm trying to summarize an entire area and make you feel up to date about it.

But because perhaps cuz I do that, I like my content that I consume to be whimsical funny. And maybe it's the other people way around, maybe people who are into funny stuff for their work probably prefer more serious stuff, but I don't know. Yeah. But those

**Sean C. Davis:** are things makes sense. And now I have a couple more newsletters to look at, which I just Googled them and they look super interesting.

So yes. Thank you for that. okay. Number five. Last question of the day. We'll make it a hard one. It's our, it's a four parter. So I say nine, here we go. We go, this is nine. Actually five's the last two. Yeah. If we had the five questions turned into 10 very quickly. Wow. This is

**Peter Cooper:** inflation. I know we're suffering from inflation right now, but yeah.

**Sean C. Davis:** Okay. And I've this one was funny because I asked it, I think on the, maybe [00:46:00] the second episode and the answer was so interesting to me that I was like, oh, I'll ask it again. And then I got another good. And I was like, oh, I'll ask it again. No pressure at all. Yeah. Yeah. okay. So the the scenario is this, you can take anyone you want to lunch, that person can be living or not living.

This is a very hypothetical scenario. So taking this person to lunch and the four things that or the four questions are one who is the person to, where are you going to. Three, what are you going to eat? Or what are you gonna order for food if you're gonna to a restaurant and for what is the first topic that you're going to discuss?

Oh no.

**Peter Cooper:** Oh, this is it's elaborate. This is a bad question for me. Cause I am pathologically a social. I tell you, I, I am not the sort of person that enjoys going out and meeting people and eating meals and things. Which is why I'm basically a very online person, cuz I quite like that. So if [00:47:00] I could actually go somewhere with someone and eat something

**Sean C. Davis:** or maybe it's virtual lunch, I don't know we can be creative with this.

**Peter Cooper:** I think because I'm a little bit of an opportunist in many ways. It'd probably be someone and again, I can't think exactly who this would be at the moment, but it would be someone who. Whose experiences are beneficial for me to learn from in some way or another. I'm not gonna pick someone like, Richard Branson or someone like that, that who is interesting, but I have no like connection with, I'm not, I don't wanna run an airline or this, that, and the other.

And it's, his life is very different to mine. So it might be someone who has built up something very similar to, a similar business to me. But who has then gone on to have, significant success with it in the developer space, that's actually quite tricky because there's not a lot of people who've really built newsletter companies up and sold them.

It might be someone.[00:48:00] So there's a guy called I think his name, Sean Griffy. I follow him on Twitter. He just sold a company called industry dive, which is very similar to my company, except the fact as they make hundreds of millions of dollars and they do newsletters in areas like retail and mining and like just other random topics of that nature.

So obviously someone like that would be fantastic to catch up with and talk, shop about because I might learn a lot from what they have to say, but is it the most interesting conversation, perhaps? Not. So I'm almost feeling like I should backtrack and say, oh, it would be, someone who's experiences are so different to mine that I couldn't help, but had my mind open by speaking to them.

So I've gone very meta on this already. Which

**Sean C. Davis:** is, this is great. I like that. We're analyzing the question.

**Peter Cooper:** Yeah. Yeah. This is I, this is me all over. I am very meta. This is why I do the job I do, because I think on a higher order of. Things rather than the concrete things that a practitioner.

Yeah. Yeah. So I don't know. I'm trying to think of a really [00:49:00] nice example that I can say it, everyone would be like, oh yeah, I know that person. It Def, oh, I'm start thinking about people. It definitely wouldn't be, but , it definitely wouldn't be Boris Johnson. I can tell you that. Actually I guess, act, this is gonna be a very unpopular answer.

I'm ready. I'm ready. This is gonna be a very unpopular answer and I do not like this person. It would possibly Donald Trump, let's say Donald Trump because okay. Because I has been the president, no one can argue about that point. And I still thinks he's the president. B, he would've had access to lots of different information and I don't think he's probably proprietary enough to keep it all under wraps.

So I think it would be interesting. He seems like the sort of person that you could get along with in small doses on a personal level, even if you don't politically agree with anything that he stands for. Which I don't. So I think it would be entertaining. And I think for, for a couple of hours, if, as long as he's guaranteed to stay there, I could grill him on all types of stuff and have a go at him and whatever.

And, he could tell me all these secrets about [00:50:00] the world and whatever, I think it would be very entertaining. So there you go. There's my fun answer. You

**Sean C. Davis:** know amazing. We have Andre commented in the chat. He just says, wow. Which I feel like. Yeah.

**Peter Cooper:** I know, obviously the thing I'm gonna completely acknowledge here as well is that there will be plenty of people probably, maybe not watching.

I don't know. There be plenty. There's plenty of people out there that think Donald Trump is fantastic and, politically aligned with him and everything, which is fine. I don't, but that's fine as well, but I do think that as a person. Historical significance to a certain extent. It would be interesting.

And that is true probably of pretty much anyone that has been a president or, parti particularly well known in the world. I'm sure Marilyn Mon Monroe would be fun to talk to as well, but I wouldn't know what to talk to her about, but at least Trump, I could talk about recent history and find out, some weird stuff I suspect

**Sean C. Davis:** yes.

Weird stuff. So we're the a, I'll say one thing that's true. You could probably get the answer to that question. Cannot argue

**Peter Cooper:** with find [00:51:00] interesting. He would've let that go. He would've let that go. Wouldn't he, if

**Sean C. Davis:** that's a, you know what, that's a, that's interesting. That's a whole different, we could do a whole episode on speculating on that question.

I hope the yeahs are real okay. This was great. Thanks for being a good sport, Peter. This was a ton of fun, really enjoyed having you on the show today.

**Peter Cooper:** Yeah, no, it's been been interesting. You've throw me some curve balls there. That's

**Sean C. Davis:** That's my favorite part.

You handled them very well and I love the dissecting the questions and all that, but before we go once you take a minute and if there's any any, anything else that you wanted to plug anything you're working on or sharing links to your company or social profiles? What, whatever you wanna plug go ahead and take a minute to do

**Peter Cooper:** that.

Not in particular, like if people wanna follow me on Twitter, I'm on there as Cooper X 86. If people wanna, subscribe to stuff, Java weekly is a good place to start, but then of course, there's, Brian's gem stack as well. Which I always forget if it's jam stack or gem stack. I think it's jam stack gems stack with

**Sean C. Davis:** the ends with a D right.[00:52:00]

**Peter Cooper:** It's called gem stack with an ed, but the domain name is gem stack.email. That was very clever early on. And that that seems to work quite well. But I must, I don't see many do email domains around no, it worked for us. So yeah, so if you go in, at that point or draft it weekly or Ruby weekly, or even postgrads weekly, you just put something in weekly on the end, you hopefully find something cool and fun.

And that's pretty much all I'm doing. The main, other thing that I'm doing at the moment, I'm probably, making everyone on my Twitter account, sick of this because I'm playing with mid journey and dally and doing, all of the the generative art stuff. I never got into NFTs.

I can't stand all that NFT crypto stuff. It just does my head in. But this art stuff is really just blowing me away and I'm just, having so much fun creating stuff including illustrations for the newsletters as well. It's, it definitely has good commercial, uses to it as well.

If anyone's ever interested in chatting about that type of stuff definitely follow me and I'm very keen and into that, that's my Paul pork of right now, I'm to bring it back to the Paul, it's my [00:53:00] fad at the moment,

**Sean C. Davis:** It's fun. We've got full circle.

I saw something you posted the other day was was it middle-aged men holding mechanical keyboards when that was collage of them? Yeah, that was great.

**Peter Cooper:** Yeah. All right. That's I should recreate this. Here we go.

**Sean C. Davis:** there you go. Love that. All right. So that's it for the show for those of you listening into the recording, these shows are recorded.

Live on the first and third Thursdays of each month at 1:00 PM Eastern time in the us 5:00 PM, G GMT, the live shows we then later syndicate on cfe.dev and YouTube. Video format and as audio, wherever you get your podcast, now we're coming back in two weeks. That's August 18th with, for the final episode of season one.

And we're gonna have CFE, founder, Brian Aldi on, and we'll do a little bit of a deconstructed episode while we celebrate the fifth anniversary of certified fresh events, which is super exciting for me is fun. Five years, five years. Yeah, lots to lots to discuss there. [00:54:00] It's gonna be a lot of fun.

Hey folks, one quick, last thing, before we go now, after we recorded the show, Peter was thinking a little bit more about his answer to that last question and sent a revised answer. And then, and usually I would poke a little bit of fun at Peter, but after last episode and gift through that question back at me, I.

This is a really difficult question to answer, especially on the spot, especially when you don't know that it's coming. And so I wanted to read, Peter's revised answer for you. Peter says I've been thinking about the last question a little and have decided to amend my answer. I'm prone to missing the spirit of a question and saying which person dead or alive, you'd go to lunch with.

Isn't really about who you'd want to grill or chastise and chastise him. I would, but it's about who you would find to be interesting or amusing company for an hour or. so I'm gonna go with Felix, Dennis. He was a quite eccentric British guy who founded Dennis publishing, which pretty much single handedly pioneered the computer [00:55:00] enthusiast magazine scene in the UK, in the nineties, plus the week and maximum here later on, he financially did really well because of it, but ended up having a rather colorful life of drugs, Deb poetry and buying large amounts of Woodland.

So I'd be able to get my fill of funny and bizarre stories, useful publishing industry info and green and eco stuff all in one. Go, thanks for that note, Peter, and thank you all for listening. We'll see you next time.
