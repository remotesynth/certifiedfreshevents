---
_build:
  list: false
  render: never
---

**Erin Mikail Staples:** [00:00:00] Thanks for having me. Um, and I wish I could have provided you a soundtrack, but we're gonna be talking all about that, of how to make noise and making noise on purpose on the internet, which feels like these days when we think about noise on the internet, I don't know that that's necessarily a. Good things.

Um, when we think about noise on the internet, I think we're all kind of reminiscent of those MySpace pages. Like what, what song did you have in the background? What makes sense? So we're gonna be diving into making noise on the internet, kind of the history of the laugh track and what it can teach us about developing with sound on the internet today.

And we'll even be getting our hands dirty. If you want to follow along. There will be an opportunity for a hands-on keyboard here and for some interactions. So keep it going. Um, and we'll have questions at the end and time for building together. So. As [00:01:00] always, let's have some fun. Um, as Sean said, my name is Erin McHale Staples.

I do a lot of things. Um, most I spend my day kind of as a developer, experience engineer, helping make better experiences on the internet, but making experiences on the internet is a two-way street, so to speak. Meaning, first off, let's start with some sound.

**Sean C Davis:** Oh, hey. Hey. It's time to Groove. Funky Beat Make Move, 1970s Heat Disco Street Sitcom Life with Funky Beat.

**Erin Mikail Staples:** When we think about what you've just heard, that's kind of what you would think of as your standard laugh track. Now that standard Laugh Track is one of the most influential and controversial designs in history.

It tells us everything that we need to know about feedback, signifiers, mapping [00:02:00] constraints, and emotional tone. So when we think a lot about sound on the internet, I don't know if many people like you, but we, I'm one of those people who keep their phone on do not disturb probably all the time we think about these things and we'll be diving more into these concepts of feedback, signifiers, bing, and constraints, as well as emotional tone.

But we need to be thinking about like. The experience as a whole. Now we have sounds in our phone apps, we have sounds, a lot of us are working with those Google or Alexa devices. Uh, we have sounds in our music, our headphones. These are all different ways of building and more often we're seeing building with sound in mind on the web.

So yes, it's gone out of style, but I think if you do it right, it can really elevate quality in the context of your presentation or whatever you might be building, whether it is. That email stint button or the kind of the signifier that says, Hey, this UI doesn't work. These are all the little things that can really add and elevate the development of our [00:03:00] app.

So when is the last time that technology played a song that we actually wanted to hear and or like I said, are we all just running around on do not disturb? Um, I keep my phone on Do Not Disturb all the time. Most of the time when we think about sound on the internet, it's annoying. We have our browsers on mute.

Um, many monitors don't even have speakers into 'em. I remember as a kid having the speakers on the old school family computers, but that's not a thing anymore. I don't know many people, but actually keep that on. Um, I even listen to music separately when I'm off online. I'm like, I'll turn on sound separately because I don't want to hear sound in my business.

We've really gotten out of fashion of running with sound on the internet, and it's no surprise because a lot of the sound has been done so poorly, a lot of the sound has been thinking about how loud or obnoxious or annoying can it be. How we're out of the autoplay [00:04:00] has become the defacto norm, and the way that sound is handled across different browsers is like a messy playing field.

It is handled differently across, uh, safari or Firefox or whether you're on mobile. Or if you're on a different one. I know Reddit has like sound like on their ads now and it's really annoying, but it's all coming from a place of history. And if we're looking at historical trends, this is not a new problem we're facing.

So let's flash back. The year is 1948. We have the first Laugh Track is ever invented. So the first Laugh Track was created actually by Bing Crosby. The reason it was created is because he got so sick and tired of having to record multiple shows time and time again for different codes with the same material every single time.

It became annoying. And I do standup comedy on the side, and sometimes you can write, you can say the same joke and you can feel like you're saying it [00:05:00] at the same time. And sometimes it'll land and sometimes it won't. Bing Crosby actually was the one who come up with the idea. So he came up with the idea, he was one of the first to actually start playing around with the magnetic tape.

And he also was an investor in that at the time. Um, he worked actually with Frank Sinatra, believe it or not. Um, and it was, they were discussing in the era they had gotten laughter from a comedian that was just not quite appropriate to air. So this was already a laugh track. The original first laugh track was.

A laugh track developed from a comedian that was too, a little bit on the edge to air. They couldn't use the jokes, but they just saved the laughs. So Jack Mullen, who is an early recording engineer for Ampex, said, you know, he had a couple shows, they didn't get that many laughs, and what they did is they took the recording of the show and they spliced it with this off color comedy track and putting it in and salvaging it [00:06:00] and allowing it to continue on.

A lot of this has given us the future that we think then the Laugh Track was born and many designers think that this Laugh track helped create and like led to the live studio audience, which helped create this vicarious sense of shared audience. It created humorous experiences. It allowed us to know when do we need a laugh and why, which when we think about it, I think of something we need more than ever.

Right now on the internet, it can be a pretty dark and scary place.

That being said, it's been working, but why don't we see really more of it now?

And the reason we're not seeing more of it is because it doesn't follow these same design principles. Where at the time it was really dynamic. You weren't having to worry about so many moving parts. It was just one tape. Play the single tape that's spliced together and it flows. It was a [00:07:00] single type of reaction.

It was the great, well, we know that someone is supposed to laugh, but as we all know, there's a lot of different types of laughters. There's a lot of different types of audio that we can see. So let's break down some basic design principles of what to think about. When you're adding audio to your track and how can we even think about audio on the web and how to process it?

So I love, he is a UX designer, pretty famous UX designer. He is really famous for his book Design of Everyday Things, but he thinks a lot about human centered design. So how do we think about how humans interact with design and human interact in the world around us? So let's kick it back to Don's Norman's UX principles and break down.

How can they be applied to the world of audio and design? So first off, we, let's touch on that first point. It's feedback. So we need to know that gives us a signal and that gives us a signal immediately. So when we think of typing on our phone, those little key button presses that we have on our phone, the fake key clicks, even though it's a [00:08:00] a physical flat surface, does that, that giving us immediate feedback, letting us know a button was clicked, even if it doesn't, it's not a physical button.

The same as kind of a little click button on if you have a mechanical keyboard. People will spend a lot of money to perfect and modulate. And I guess definitely I'm one of those people that I like the certain sound that a feedback provides, but simply it gives your viewers a signal. In this case, in many cases, with your standard laugh track that's did the joke land, now it's one thing for it to land, but we need to make sure how did it land.

So in many cases with comedy, that's thinking about it is, is this funny or not? And one of the things that I'm thinking about is how do we kind of approach the different levels? The other kind of thing to think about when we talk about the signifier concept is how does this indicate the mood at the moment?

So are you supposed to be laughing or are you not? Like does it signify that it is okay to [00:09:00] laugh? Again, thinking about the shared experiences mapping, um, this is a concept when we think about how should it feel. So context and intensity. There's always the awkward chuckle. Um, if we think about where it's like someone just has to break the silence.

That's a form of mapping. So how do we think about that awkward chuckle? It's a pause moment, right? Are we supposed to be feeling a hesitant online? And finally, our last one is constraints. So when we think about it is that is the how should we react? Are we giggling under kind of our tone and our breath and funerals?

Are we allowed to do a full gfa, a big belied laugh? Are we, what is the appropriate level of reaction? And can we even keep a choir? Are we gonna be giggling on a hot mic? Probably not. Are we going to be, you know, using the same language we use? Different sound effects might apply to different context. So you're not gonna necessarily want your banking app to be sad.

Tromboning, it's gonna be a little bit weird, but we might want to [00:10:00] signify some sort of celebration when we complete a Jira ticket. My all very level based on the level in the context. So let's kind of dive into the specifics when it comes to developer purposes and how they can be used within kind of our application context.

So feedback, this is kind of the one that we see probably the most often and is, is the most finicky one we see online. So when we think about feedback, it immediately is confirming that system state. So again, that's something like a success, a failure. Loading start, stop. Um, and it has some sort of differentiator.

So instead of like your email and your inbox, it's just a ding. This is going to give a positive or a negative or some kind of context behind us. The next one is our signifiers. They're telling us where to look or what to happened. So I think about this one a lot of the times is. Email [00:11:00] sent. We're all kind of familiar with that whoosh sound that comes default.

If we can think about it together, we can all think about that email sent sound and how it kind of comes together. In a world like that, upload completed is another one. So when we think about that, ding, actions complete, that's something that we need to kind of talk about an that perspective. Now, mapping.

Mapping I think is one of the most difficult ones, I think for the internet. The reason why is because a lot of this is contextual. So when we think about design, we need to think about the context of the situation that the design is given in. Meaning this one is thinking about how do we think about the shape of the sound is mapping to its meaning.

Things like rising of the pitch means that things are going faster if there's a dissonance or an error, um, where we see this going wrong a lot. Um, when I was doing research for this talk is actually, it was in the original Jurassic Park movies. There is a lot of just random beeps for the sake of random beeps.[00:12:00]

And if you can't figure out, we've all probably been on our computer and we keep getting that random notification and you're like, what the hell is this notification coming from? Where can I find this? What app do I have open? Um, that is something that's really coming from where we're not mapping the problem correctly, it's giving you in a signal, but it's like that really pesky mis feet over your shoulder.

And then what our last one is kind of that constraint. So again. What is appropriate for our stake of times? And again, that is telling you what is unavailable. So a lot of times I always think about is that funk sound when it tells you, when you click on something and it's a window that's grayed out, think about the sounds that can be played there and how those sounds can be leveled in that funk sounds, can tell you a little bit, um, equivalent to maybe like an error sound or that kind of, it's the.

Like it's the woodblock click that you would assume of in a kind of an apple environment. When we think about sounds, it's about [00:13:00] thinking about these design for both visceral behavioral or reflective instances. And so when we think about this, this goes beyond just our binary. Does it work and does it not work?

We're thinking about it of the meaning and the consistency that it provided us. Like, ooh, that click just sounds good. So whether it's a click of a pen or a pencil or we're thinking about different items or how things react, that visceral, like what is that perfect chime that lets us know something successful?

Behavioral is kind of what is the sound we're listening for that tells us something's working. They've actually done studies on the internet. They've adding audio to learning and development programs that helped retain the information. 'cause people were able to associate the right patterns with the right sound.

So very much that Pavlovian type of response. Like next, we have the reflective and the reflective side of it. So over time users, were really judging the quality and the experience of it based on the [00:14:00] audio consistency and honesty of the application. So sometimes we've all kind of been there when it was like over the top sound and it fell out of pace because it didn't really match with the exact sound that was coming in or the exact audio that's coming in.

We didn't make sure that the experience is matching up with consistency in the honesty of our actions. But again, like we're living now, we're seeing a lot of these are falling outta favor and even the laugh track itself fell out of flavor in the world. So before we kind of dive into building these sounds ourselves and how to use some tools online to think about through these sounds, you can make your own experiences, let's dive into thinking about how it fell out of favor.

First off, the laugh track originally fell out of flavor, especially in. We actually saw a de decline in during live TV when we were talking about late night TV shows during 2020 when COVID, because you couldn't have a live studio audiences. And there was this air of like uncertainty or realness, and it felt a little bit manipulative to have a full blown laugh, track playing when you knew there was an empty [00:15:00] audience.

Manipulating the user does not feel great. So when we're thinking about audio online, let's make sure we're not doing it to manipulate. Additionally if it messes with the pacing. So we've all been part of those videos that you can't fast forward or you're like, please let me click pass this sound. This is really annoying.

I don't want this video to play out making and providing accommodations so that you can keep that pacing natural and consistent. Um, we have natural pauses and conversation and I think this is a really difficult thing about giving, taking a meta moment here about giving an odd presentation about sound on the internet is you don't know when to pause to do that natural feedback with sound.

But those are the natural reactions. We talk in a way or we present in a way that allows for natural reactions and pacing and the internet doesn't always kind of blend a favor to it. And that leads us to our final one, which is, it's unnatural or it's uneasy. If I put a really, like at the beginning of this presentation, you saw a really cheesy laugh track that I generated, and that is something I Par particularly told it to make it super cheesy, super [00:16:00] awkward, very band show type.

So much of it is unnatural. We don't wanna be thinking about these situations where everything is at full blast, at full length, at kind of the full whatever side of it. A lot of the AI voices or AI music we're seeing coming out is, again, unnatural, uneasy. It feels eerie. We don't like that. It's not cool.

And so when we think about it, we need to make sure that we're taking these considerations into. Particular. So like when we think about sound on the web one, we need to make sure, and we can go into a whole nother presentation on this, but I know we're coming up here on time, a whole other presentation on just thinking about it from like a latency perspective or how do we think about it.

So making sure that we're not just playing audio without a user gesture. So how do we make sure that we're thinking about it, of it is ready to go on the first time that that audio is home, you're not waiting for a load button. It's like the button clicked. Oh, audio has to load. So really thinking about.

Where [00:17:00] it's playing in, in the browser, or if it's playing locally, where's, where is that happening and how is that happening at speed? Um, thinking about how you're preloading it, how you're thinking about the latency of it. So again, we don't wanna wait for something to buffer thinking about the different file format.

So like, how is it coming across in a good way? Like, oh my goodness, your sound sounds amazing, but it's buffering every 15 seconds. We don't necessarily want that. Um, right now, previously and historically you didn't have to think about TV and audio. It didn't have to worry about it. 'cause when the laugh track was created back in the forties, you didn't really have a whole lot of different ways of listening to music.

But now it's, we have to think about things like different browsers from safari to laptop speakers. It's gonna sound very different outta a phone speakers. It's gonna sound very different on low end earbuds. It's gonna sound very different on those high-end earbuds. So it's thinking about all of those different things.

Even in rehearsing for this talk with the sound that I thought sounded normal on my machine. Came out and blew out the test speakers. So thank you so much [00:18:00] for Matthew kind of hanging in there as I'm blowing out his ears behind the scenes here. These are all things we need to consider when we're diving into it.

But now I'm gonna go ahead and show, stop this screen, and we've got about 10 minutes if I'm correcting right before things. Awesome. And I'm gonna go ahead and show one of my favorite tools for creating sound effects. So I'm actually gonna be pulling it up through Goose, which is a. Coding tool. So I use 11 labs a lot when I think about sound effects and grading their own sound effects.

They have a great API and they have a great tool set up. Um, and they actually have an MCP service. I'm actually gonna pull up, I realize their website might be a better way to look at it, this, but they have a great way of presenting. Do, do, do, do, do. Go ahead and share. So this is what it looks like here.

It's gonna give you a realistic voice platform. I actually just read that like Matthew McConaughey is gonna be on here. So a lot of celebrities are able [00:19:00] to call their voice and actually get payment for it. So it does voice cloning, it does different narrating, it does speech to text, it does reader. A lot of like your narration that you're hearing on the website, on the web these days is probably using 11 labs.

But for the sake of today, we're just gonna kind of play around with this and show how to kind of explore and start testing around different ways of doing it. It's like, yes, this is an API, but you can also create sound effects. You can download it and can be really constrictive on how to create them.

You can even use it for, if you want to do that dynamic live feedback, voice agent type work. And that is something that you can also do in there. But that again, whole nother presentation in a whole nother 45 minutes that we can jump into here. So I'm gonna go ahead, switch my screen, pull up my BFF Goose, which is again an agentic coding platform.

I've got it plugged into. Um, I've got it plugged into 11 labs, MCP. So there is an MCP server and I can share all that in the comments after this. But on the MCP server, we can just dump into [00:20:00] different soundscapes. So think if we were presenting and thinking about a different type of website and the different types of tool we are using, we can actually just create these live soundscapes and play them.

And I wanna confirm that I shared my screen with audio all within this beautiful little platform. My apologies for that little screen share craziness here. There we go. Now that I've had my sound screen, so we can dive in and we can be like, let's wrap this up. Put a nice little bow on it and let's come up with a nice closing and a round of applause for this presentation.

And a round applause for all the sponsors and people who put together. So create using, I'm just typing this here. The 11 labs, CP server. Let's create a closing soundtrack for soundscape to wrap up this presentation [00:21:00] that features Applause and who Raws. Be excited. People worked hard for this.

I'm gonna just press enter and it's gonna go ahead. You can see those loading those extensions and it's gonna generate those sound effects. And the cool part about this is, again, this is using AI generated, but it is tuned off of different, so it's using time series kind of based or um, time series based data.

So it's gonna be using that unstructured data, which is that audio. It's gonna be creating a new model. It's created three different ones, which is. Great start here. Um, it saved them there. That's awesome. I want them to be combined together. And the cool thing is, is we can all do this again by just simply prompting now, which I think is allowing for a lot more opportunities.

And again, this is a little more in depth. I don't know how many times we'll be creating an end of presentation applause, but like, it's always fun to have a little fun with audio in this case. Um, I [00:22:00] want to layer them together, so let's.

And then play final audio. So it's gonna splice these together, which is nice. It's using,

this is what I, I thought it was installed. I literally was using it yesterday. So let's see what's going. It's gonna go ahead. It's installing from Homebrew

and the cool thing is, is you can use this for your simple knock sounds as well. I've seen people use, um, I'm personally playing around building a, like a little streaming tool with this. So I've been playing around building, um, like trying to solve the problem of like, you're giving a live presentation or you're live streaming and like you don't have those audio reactions.

So I've [00:23:00] been playing around with the different kind of experiences, building a live user feedback reaction tool. So when you are giving a presentation, you don't have to be like, okay, let's awkwardly fill this space with sound because no one wants to stare at my computer loading. And so I've been thinking about what are the sounds that we want to hear during that timeframe?

What do we want to, how do we wanna approach that? And then the consideration, that's really interesting. And the biggest problem I've been running into as I've been playing around with it is. The model in the AI space is moving so quickly that it's always constantly changing. But the second problem is it, it's not only having to just play the audio, it's having to spit it out, and it's having to listen to what's happening and have contextual relevance.

And right now I haven't quite nailed exactly how fast it is. That real time is a really hard problem, which is again, it's having to listen, listen the robots, um, and spit it out at the same time.[00:24:00]

It's gonna take its little moments here and if it takes too long, we'll just play it from our desktop. Oh, perfect. It's gonna splice that together. I always love how it does tell you where everything that's happening.

It's a lot more like, again, we thought when we were testing the slide, we thought we could be like, amazing. Gonna play it.

And I dunno if that's.

All right. I am not sure if that came through on y'all's end, but I'm gonna get a thumbs up. Awesome. There we go. And it tells us that final thing. It tells us the total duration of our [00:25:00] time and it tells us exactly. Um, it's an absolutely fantastic closing soundscape that captured the excitement and appreciation for all the hard work.

So again, very cheesy, but we did that in what, about two minutes, three minutes. So I'll take it for about two minutes of work, but. That is what we'll end on today, and unless there's anything else, we can go ahead and polish that up. Let's go ahead and build

**Sean C Davis:** All right.

Thanks so much, Aaron. That was, uh, that, that was great. Um, I have so many questions, but you really got the audience chatting here so selfishly I wanna ask all my questions, but I, I don't know if we're gonna get to 'em 'cause we got, we got a long list here, so I'm just gonna start at the top here. I first question coming to us from Danielle is how do you keep accessibility in mind when playing with sound on the internet?

**Erin Mikail Staples:** So great question. And this is actually something that I was initially [00:26:00] very concerned of because I was like, there's so many different ways of doing it. Um, I wanna give a lot of shoutout. I took, one of the best classes I took in grad school was actually UX for accessibility. And it was a great way of learning, and it was one of the days in class we had to completely operate.

We were not allowed to use a monitor and we had to operate entirely by screen reader. So there is actually studies that have showed that sound can actually make the internet more accessible and thinking about sound on the internet, because some people, that's all they have to internet like interact with the internet is that, well, you're working with sound and a lot of websites don't work performantly with screen readers or they don't offer it.

So what we're seeing a lot is kind of the, I've seen a lot of the, like, what is it, the Notebook lm, which is creating podcasts out of articles. That's a really kind of great way of increasing accessibility and offering different ways of doing it. But again, it's really, I don't think all the tools are there yet, and I won't put myself out there as an accessibility pro that's just being real and honest and all that stuff.

But [00:27:00] that is all to say how do we really kind of like, without thinking about it together, we don't have anything as a whole.

**Sean C Davis:** So, so does that mean that, uh, I mean, are, do, are there times where you would use that? Visual or if there's an option, tactical feedback, and other times you would use sound or are you more getting at, it's kind of better to have all of those things when you need to provide feedback in some way.

**Erin Mikail Staples:** Pro use kind of a combination. Don't just rely on one different type of advice or don't rely on just one. And if you are relying on something that doesn't have anything, make sure you're really building those good practices, whether it's like using good headings, not just having 10,000 divs on your site.

Um, that is, and like, honestly, I, I do think more people should probably build with a screen reader or just like take, go try using a screen reader yourself. Mm-hmm. Like there's a way of just doing it. Go use it yourself. Um, it's [00:28:00] really wild. Uh, it's like you don't realize how bad sub websites are until you actually try to navigate them with the screen reader and then it makes you really feel cringey.

**Sean C Davis:** Yeah. Interesting, interesting. I mean, that's, that's great advice also. I highly recommend that for you folks. Alright, moving on to David. David asks, um, is there a case where audio works besides the UX components? So maybe just talking more about like the implementation of it on the front end.

**Erin Mikail Staples:** Yeah. Um, so besides UX components, I think a lot of the times like we see it, that's probably the most common place we're seeing it right now.

I've been playing around with it just in streaming just because it's a area that I'm super interested in. And so how are we thinking about the streaming sides, um, and how do we think about that real time? So I think we see a lot in, um, podcasting as well. So like how are you converting media to different types?

Um, we're thinking about it on the front end interface. I'm not seeing it so much as [00:29:00] being used. I think like the old flash games have kind of died out. That was kind of a big way. Or MySpace page's way just were a big way of seeing it out. It's kind of died out. Um, which makes sense. Most people, I mean, I don't know how many people leave their sound on in their browser window.

I know I'm probably the worst. I, I did a presentation on sound and I'm like, let's, let's, I, I'm the person who has sound off all the time. Um, so I'm probably not the person to necessarily talk to about that. However, um, it does kind of increase the different participations, but, uh, one of the ways that they do think about that is actually children's or educational software.

It's a lot of different ways of using it or teaching platforms has a lot.

**Sean C Davis:** That's interesting. I, and um, you know, I, I think that that concept you were talking about is, you know, generating it on the fly on, um, when, when you're live streaming is really interesting. If we go back to our first presentation today, we're talking about the, the ability to, um, transcribe and work with audio and on Cloudflare's platform.

And it's just like. [00:30:00] I think things are changing so rapidly, but uh, yeah, that idea of like, well we can just have super unique audio that is generated. I don't know, based on whatever sort of feedback it seems.

**Erin Mikail Staples:** It's been, yeah. Something that I've been playing around with. It doesn't work quite yet, now it's got a really awkward delay, so that's, we haven't got around that yet.

Yeah. But I think a lot of that is, it's almost, it's, it's interesting 'cause it's part models, it's part also like the structure. So how are you flowing the stuff internally and like part. Just the pure latency. Um, so like the other day my husband was like, you know, the standard like, oh, my partner was on a zoom call.

Let's watch how slow things take the buffer, um, on the internet.

**Sean C Davis:** Yeah. That latency is, I mean, that, that's kind of crucial, right? 'cause like the sound is, is kinda like the, it's that, that human reaction. And if you're in a conversation and somebody's. Too slow to react. You're like, no, I'm onto the next thing already.

It's gotta probably be like right there. Right,

**Erin Mikail Staples:** exactly. And I think that's part of the reason that we think about [00:31:00] struggling with, um, there's a lot of, I've been kind of following like how it's being used for multimodal languages. So, um, I don't know if anybody like voice notes, right? It's like I have a couple friends who live overseas and voice notes.

Uh, I have a close friend who's Pakistani and her, well, she always sends me voice notes and I always laugh 'cause the transcription is totally butchered. And it's like, hasn't quite like, nailed different dialects or accents or that yet. But also in the same time, like what it was Apple that had the new ear pod, like translate live now.

And that's like super cool. But are we all just, what is the natural behavior that's gonna come from this? Like unless we can speed up our latency, are we all just gonna naturally develop a pause? Like, is, are we gonna be millennial pausing on conversations now? Um, interesting things to think about.

**Sean C Davis:** Yeah, that is, that's fascinating that, that has me going down this whole other rabbit hole of like the you, because you talked a lot about laugh tracks and I've seen the videos where you can remove the laugh track from a and and, and show an [00:32:00] episode, you know, just like a little scene.

Yeah. And it's super awkward because they're just like sitting there in silence for an extended period of time.

**Erin Mikail Staples:** It's the laugh tracks. Or if you go and look up like silent movies, um, and go and like where they would play the live audio behind it. I know they do, um, different, like if you've ever been of, there's a couple of different plays that they do with like a live band and the audio's off on that you'll tell, which is the very interesting things that you'll kind of appear outta that world.

**Sean C Davis:** Yes, exactly. Okay, back to audience questions. David asks, uh, how do we consider licensing in such a case? And I, and I, I believe they were, they were referring to when you had pulled up. The 11 labs. So as you're generating, uh, audio with that service, is there a, um, what do you know about the licensing there?

**Erin Mikail Staples:** So, licensing, and don't quote me on that. Go check out their pricing and their whatnot. Um, I like personally use like their creator plan, and so a lot of it is very much thinking about they [00:33:00] have licensing that does even like HIPAA customers and compliance. So that's always a great one to kind of think about.

They have multilingual, they are being used in enterprises, so they do have licensing, and they also have, one of the things that I actually really like about them, I know there's a lot of heat on the AI space and like the creator's rights, and don't get me wrong, like I do value that. But one of the things that I actually really appreciate is when they do the voice cloning.

So you can actually get paid as a creator, as like a voice actor for cloning your voice on 11 labs, and then every time you use it, when you pay your credits. That credit goes directly to the creator, which I think is ah, of like, if you're going to do it, like let's be real, like it's not going anywhere.

We're gonna have like, I'd rather have that in like the series like series Voice has been cloned and that was, yes. And originally a voice actor. And I have friends who are voice actors and I know people who are voice actors on love labs and like being able to get some sort of compensation for that, but also like increasing the access of it.

Like I know 11 Labs is working with like other organizations or gaming organizations to create sound effects. Having that small bit of compensation [00:34:00] for your, like, voice data is very important. It's a little more fair of a model.

**Sean C Davis:** Yeah. Yeah. I mean there's just across the, the world, so much to consider in terms of, um, yeah.

Licensing, but really just compensating the, the source material that AI is using. Right?

**Erin Mikail Staples:** Yeah. And it's like, I don't know anybody's, like, I'm not an expert. I don't know that there's any, like, what is the fair rate of that? 'cause I don't know that we can define that yet. I think so much of it, we can't go.

Yes, I do believe it should be compensated, but what do we compensate for the going back in time? Because like, we have to be realistic. Some of this data was collected in the nineties and the early two thousands during the.com boom. Um, where like you can't necessarily, there's no track record. How do you go back and compensate those people that develop the underlying technologies behind that?

Yes, and that's. A whole other ethical argument we can get into. That's another 45 minute or an hour long presentation, right? Like Yeah,

**Sean C Davis:** exactly. Okay. So, uh, Tony has been, um, asking about. The process of [00:35:00] cleaning audio. And I, and I think that's interesting. You know, I, as I, actually, I do, I, I produced a video about a month ago where I took a bunch of different interviews and I put 'em all together and it's like, they're different volumes, there's different levels of noise and all of that.

And I've got programs that I've had for a while and kind of a process where you can clean that up, um, normalize it, compress it, et cetera. Um, but it's all very manual and I know those tools that I use will continue to get better. Um, probably through AI and, but they're specific for that. But, um, have you found anything in your workflows or with 11 Labs in particular where it can do some cleaning or is it really just focused on the generation?

**Erin Mikail Staples:** Not so much. Like 11 Labs is really focused on the generation. I've played around with other tools that kind of like, they claim to like. Automate the leveling and all that stuff, but I don't think I've found anything as good as just using good old fashioned audacity and doing it manually. So much, much, much to my demises.

Um, so if anybody finds out one, please let me know [00:36:00] because I hate editing audio with a passion. Like, and so, but I, and that's something I like noticed is like, also like, um, the mono stereo becomes really more noticeable in that AI generated content. 'cause some of it comes across as very flat. And so for those of you who aren't aware, like when you're thinking about audio, it comes through mono, which just means it's coming through like the headphones, both headphones at the same time.

Left, right, flat, pretty flat. And then when you think about like stereos, you've got like some coming out the left or right or like you can think about that binaural type of audio, which is more that spatial or surround sounds, so to speak, of like, how does sound interact in a room or like soundscapes and technology really hasn't gotten there yet.

Like that's something that we, the kind of the AI generated audio hasn't. Quite figure it out and still is coming across pretty flat. And I'll totally admit I'm probably tone deaf. I can't do karaoke, can't sing, I'm, I don't have a musical bone in my body. So I'm looking at it purely from a sound effect perspective.

So someone with a better ear for that would probably be, I would love [00:37:00] to hear their thoughts on that because. That's not me.

**Sean C Davis:** Yeah. And I assume this will get better over time. I mean, I've used, there was a tool I was using for a little while called CRISP with a K, which was a, oh,

**Erin Mikail Staples:** yeah, yeah.

**Sean C Davis:** It's like a, a virtual microphone that the audio passes through and it removes the noise on the fly, which, um, you know, it can be useful.

But I have found that, and, and maybe it's gotten better since I stopped using it. But like when you, when you have control, especially if you're doing a recording versus something live, when you have more control over it, you can kind of find that natural level of doctoring where it still feels like it's natural and it's cleaned up slightly.

Versus if you rely on this tool, you, you don't know if it's gonna go too far. And then you're gonna start, you know, missing part of what you're actually trying to say too.

**Erin Mikail Staples:** Yeah, it's, and it's those little things like. Can make a big difference when it comes to like how people are interpreting it. I'm even curious, like [00:38:00] you're gonna have like AI generated audio translated to a different language, translated to a different language, translated to a different language, and how does, what context is gonna be lost as we do that in the future.

**Sean C Davis:** Yes. Yes, absolutely. Um, the last thing I wanted to ask you, we had, we had a couple folks, um, asking for some references to some of the research that you had done. So maybe you can, uh, jump in chat after this and, and

**Erin Mikail Staples:** talk. Yeah, yeah, definitely. Happy to do so. A lot of it is from Don Norman's books, so go, always go check out from him.

So he's a good reference if you just Google Don Norman, um, design of Every, he thinks is like most popular book. Um, but also, yeah, happy to send out the other links in the chat.

**Sean C Davis:** Wonderful. Well, thanks for being here, Aaron.

**Erin Mikail Staples:** Awesome. Thank you for having me. Have a good one.
