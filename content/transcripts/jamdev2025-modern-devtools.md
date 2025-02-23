---
_build:
  list: false
  render: never
---

# Advancements in Modern DevTools To Gain Performance Insights

**Henri Helvetica:** [00:00:00] All right. Thank you very much. Hey, it's good to be back. Uh, you know, I haven't done anything online in a while. And in fact, I haven't done a presentation in a minute. I couldn't find my clicker. I was all confused and I have this new setup I was trying to get used to. So, um, the setup is actually getting, this is like a baptismal talk, I guess, right?

Something like that. Someone splash some water on me, please. All right, so, um, we're going to talk about, um, DevTools today, specifically, um, sort of like the modernization of DevTools, uh, with respect to performance. Um, there's a ton to cover, so I'm going to get right into it. Um, I mean, I can't see the chat or anything like that, but, uh, if anyone out there, if you see this plant, uh, on my [00:01:00] screen, if you'd let me know what that is, um, or if you could put in the chat what that plant is, uh, we are now besties.

So, that being said, whoa, what's going on here? Come on. Uh, my clicker should be working. There we go. Um, I'm going to do it like I always do, which is good morning, Dom, for everyone that's out in the West Coast right now. You know, I should say good afternoon, but everyone who's ever seen any of my talks, um, I like to greet, uh, everyone with, uh, or the Dom anyways, each and every morning.

Let's dive right into it. You know, there are 5. 5 billion internet users. That's kind of a lot, you know, considering we're somewhere around like 7 to 8 billion people on the planet. It's kind of a. Good percentage, you know, but you know what that means. It also means that there are 5. 5 billion Browser users in a planet and the stat that I'm using actually, um, differentiates, uh, differentiates between browsers [00:02:00] and apps.

So these are actual, uh, device users and users of browsers. And so 5. 5 billion browser users and so few developers. That's a lot of people to serve good user experience to, good performance to. So we do definitely have a lot of work to do. And if you start to think about it, you know, once upon a time when we deployed our first site, you know, we actually thought that was kind of amazing.

But today, at this very moment, we have 1. 2 billion websites on the planet. Now, The word is that, apparently, the most, most of them are sort of like built with PHP, but that's a different story. Uh, But that's also 250, 000 websites per day that are deployed. That's kind of crazy. [00:03:00] Um, some people at Vercel will tell you that most of them are being deployed on Vercel, but I don't know about that either.

But either way, that's a lot of websites, and, um, that's a lot of sort of debugging to do. In fact, that's probably like a metric ton of debugging. As we had, uh, websites online and debugging to do debugging, we did. And you know, we were talking about this recently, a group of us, uh, online and, you know, talking about, um, debugging and, you know, dev tools and some of the original dev tools.

You know, I personally think that the original, original, original dev tool was probably view source. You know, hands up if you remember the days when there was not that much tooling out there and the first thing you did was go to Vue Source and look at the code and see if you could figure out what was going on.

I don't know. I know I did. Um, but then around 95, you know, um, things [00:04:00] start to change and, uh, Brendan Eich Uh, sort of invented JavaScript and shortly after that, um, debugging turned into a lot of this console logging. Uh, I've been, uh, a culprit there and some people still console log a whole lot, but I remember also coming from this era, uh, does anyone remember just throwing a red border around anything or everything?

Really trying to figure out what was going on. And I remember, um. This instructor I had years ago was like, yeah, you know. So I did now that was then. But we are now in 2025 and things are a lot different. Um, there are things about the Internet, um, that we look after today or websites. Should I say that we look after today that we didn't look after?

[00:05:00] Uh, and certainly one of them is user experience or a few of them, user experience and performance. Uh, both are extremely important. Uh, both sort of like came about, um, over the years, once you start, we start to understand, you know, user behavior, uh, and things that are happening that are sort of like frustrating users or whatnot.

So we're going to talk about that in the realms of DevTools. All right. So that being said, um, I want to, uh, invite everyone to, uh, listen in on this presentation, which I'm calling Advancements in Modern DevTools to Gain Performance Insights. Um, what we've been able to do with DevTools today, we were not able to do back then.

Um, and user experience and performance, uh, both a bit like dark arts, really. So we're going to talk about that and talk about specifically what has been happening on [00:06:00] the DevTools side, uh, that we as developers can use to better the user experience and of course, the performance. So, that being said, I'd like to introduce myself.

My name's Henri. Um, you can find me on Blue Sky. Yes, I said that. On Blue Sky at Henri Helvetica. Um, I got this little situation called Command H. I mean, I could talk about that another day. And I'm from the fantastic city of C A Central 1 Y T O 1 A, better known as Toronto. And I got this little thing going on called Runners in Tech.

Formerly Hashtag runners in tech, formerly devs who run, but I wanted to make it a little bit more inclusive. All right, let's really get down to it. So we're here to talk about, um, developer tooling with respect to user experience and performance and, you know, pretty much dev tools. And in 2007, [00:07:00] um, amongst all the sort of like apps that are coming out, you know, there are some that You know, preceded, uh, Firebug, but Firebug, uh, v1.

0 was significant, as, um, a lot of people will tell you, this is how they really got into the web. Um, and this was important because the web was also changing, some consider it the whole web 2. 0 developer tooling, uh, beginning. And. I want to play this clip for you real quick.

One is to show you what's going on on the page when it loads. The other is to show you what happens after the page loads. Uh, how things change, events that come in, so on. So So right there, that was Joe Hewitt, uh, launching Firebug 1. 0 over at Yahoo, uh, in the, [00:08:00] uh, Bay Area. And that was 2007, January, in fact.

That was a significant moment because, again, we had re we were recognizing that the web was changing and it wasn't the classic, I don't know, uh, first website that was deployed in, I think it was like, 91, it was, over at CERN. Um, uh, The web, there was a lot going on under the hood and these are things that you absolutely needed to track to have a better understanding of your application of your site.

So what we're going to do today is run through, um, some of the sort of like features and. some innovation that's been taking place over in the DevTools space, browser DevTools specifically. And, um, for our conversation, we're going to talk about Chrome specifically because, uh, the team over there has been doing fantastic work.

And, um, also decided to make sure we just talked about Chrome because for the most part, you know, two thirds of [00:09:00] the planet is on Chrome. And likely includes developers, maybe taking a little higher. And, um, yeah. And that's where a lot of the sort of like innovation has been taking place. So, um, that's why we're going to be looking at Chrome today.

So, that being said, we're going to start by talking about, uh, the performance panel. And, um, if you go into browser dev tools, I think if you go, let me see, option command I. When you're, you're on, um, on Chrome and actually most browsers, to tell the truth, the performance panel has been sort of like a redesign, uh, given a fresh coat of paint and we're going to spend a lot of time in that panel talking about it because a lot of the significant, um, changes took place there and a lot of the information that we need is going to be in that panel.

And you'll hear sometimes, uh, Chrome engineers or maybe others, they're going to call also call it the Official landing page, you [00:10:00] know, so that when you go into, uh, you drop in, I don't know, ESPN. com. And you, um, you go into browser dev tools in the panel, you'll see this landing page. In fact, it looks just like this.

So you'll see right here, I have ironically ESPN loaded up and you see a bunch of details. So right away you see the Core Web Vitals, which are pretty much, they're not a standard yet. All right. But an accepted, uh, set of, uh, sort of values to give, uh, you an opportunity to see whether or not your site is doing all right on a user experience and performance level.

So anyhow, you see, we have the largest contentful paint, CLS, cumulative layout shift, and the interaction to next paint. All right. So these are the. Lab. This is the lab data. This is what you're loading up onto your [00:11:00] device and, you know, you can see some of the readings. So you'll be able to figure out whether or not you have a well performing, um, Site or application.

You'll see right here that, um, like I said, I have the largest contentful paint. You know, we have it set up at 6. 4 6. 47 6. 47 seconds, which is not that good, but we'll talk about that after. Uh, we also have the cumulative layout shift, uh, the CLS there, pardon me, cumulative layout shift, and we also have the INP.

Now, one thing that, um, one of the changes, oh, first of all, among the changes, you can see the design and the layout's a lot different, it's a little cleaner so that people can kind of see immediately what they're, um, dealing with. Now, one of the, uh, changes that they've also made is, um, incorporate RUM data.

Um, the idea was You know, how do you [00:12:00] get people to understand the fact that you have synthetic data, local data, um, which is basically your device, your environment, and but you also need to keep an eye or pay attention to RUM data. Now, what is RUM data? Real user monitoring data or what they're going to call as well, field metrics.

Um, essentially this is data coming from the field. This is data that they collect and this is how users are experiencing the site. You know, So, the real data that's out there from me, you, and everyone else. And what they're going to do now is juxtapose the two data points to give you an idea of how you, how well your development is going, how the performance is doing, etc, etc.

And that's what we're ends up looking like this. We have the [00:13:00] LCP, on the left we have the lab or local data, and on the right we have the field data. And here what we're seeing is that, okay, our development numbers aren't that great, but our field data is better, but Still, that's not even that awesome. So you can start to sort of process the information and kind of understand that there's some changes that need to take place.

And we again can see that with the CLS and we can also see that with the IMP. Now, part of understanding what RUM data is all about is knowing that not everyone is on a high powered device, whether it be a handheld or. By the way, I have this M1 Max, 64 gigabytes of RAM, 2 terabytes of space. I love it, but that's not the kind of device that people are walking around with.

What you'll end up having, and this is a quick flash, um, I was looking at some, uh, RAM data from Akamai. They have [00:14:00] this amazing, um, Archive called the RUM Archive, where you can sort of pull some of their data to see what kind of information, uh, you can, um, pull out. And I can actually, uh, find out what kind of devices that, um, the Akamai network sees, right?

And, um, this, I pulled this out from about four or five months ago, so I just used the slide again. Uh, there are devices here that I've never heard of. And, you know, this is one. You know, you sort of like take out like the Apple devices and some of the high end Samsung's, but these devices actually show up on networks.

And if you start to look at their specs on these devices, you'll see that they're lower spec devices and they end up struggling sometimes loading some of the assets that we send down the pipe. So once you understand this. you'll realize that you have to kind of like double your efforts to make sure that you are being responsible.

Now, a lot of that, um, the RUM data that we're using is coming [00:15:00] from CRUX. Now, CRUX has been around for a while, which really stands for Chrome User Experience Report. And That's a data set where we can sort of like, again, pull the network, you know, chrome, uh, people have to sort of like opt in, but they can see how people are experiencing websites.

So we're now essentially aligning chrome, um, pardon me, local data. From when you're developing, developing to the Chrome user experience data or report so that you have a good understanding of where you need to be. Um, something else I want to mention is if you look at the top right here, you can actually set up the, um, how you want the report to show up.

Now you'll see, uh, specifically if I zoom in. Okay. Another screenshot. [00:16:00] Um, the Chrome experience, the crux of data is pulled, uh, basically on a monthly basis. So here for this ESPN site, we're pulling from January 21 to February 17th, which is very recently. All right. Now, um, Mistakenly, I used the auto setting, which is the desktop.

I should have done mobile, but I wasn't thinking, but you can see as well that, um, on the right hand side, you could actually look at all devices. You can look at desktop and you collect, look at mobile as well. Now that's super important information because once again, you know, you could sort of like figure out your own test, but generally you want to test on mobile while Why?

Because that's what the data is saying. For the most part, people are on mobile most of the time, so you want to make sure that you're able to test on mobile. [00:17:00] But the key is here that all this information is within this panel. All right? Let's keep it moving. Um, also, below that section, you're now going to see a place where you can make some environment settings.

So, locally, You know, you may want to make sure that you can mimic as much as possible what is happening in the wild, in the field. So, you can see on the right hand side, I have, uh, this environment setting, um, highlighted. And if I zoom in, it looks just like this. Once again, you have some settings where you can do some throttling, and you can sort of like pick and choose the network that you'd like to use.

Now. No throttling, obviously. Not saying that I don't recommend it, but you want to make sure that you have options here. You can have a 4x slowdown, all the way up to uh, 20x slowdown. And then, we will also tell [00:18:00] you, um, to an extent, where you want to be in terms of just calibration of the presets. So, you can go to a low tier mobile, pretty good because there's a ton of that out there.

You can go to a mid tier mobile, And then you could actually start to pick some other settings, some that you can set on your own. So again, this is very important so that you can try to mimic what happens in the field as much as possible. And, um, let's keep it moving. So, Getting back to the panel again, and again, there's a lot of work that went in there to make sure that we have the information available to us that we can start to make some decisions and dig into some code if we need to.

LCP is one of the core vitals that is. I don't want to say the most challenging, but can be challenging. Um, once upon a time, we believed that, you know, since LCP and image loading were very [00:19:00] highly coupled, we figured that, oh, you know what? If we fix the images, you know, uh, optimize them as much as possible, we should be fine.

But that is not the case, because the image load process is a multi tiered, uh, event. And, um, You know, in fact, shout out to Philip Walton over at Google. I believe there's this thing called the Walton breakdown, as I've been told. Um, as he basically was able to show that the image loading process and other assets in particular, but again, I mentioned images because they're tightly, tightly coupled with the, um, uh, the LCP score.

Um, There's a four part event in loading the images, and as such, the LCP has been broken up into four parts. Now, um, In this case, we're calling it phases, which is [00:20:00] what you'll see in DevTools, Chrome DevTools anyways. And here, once, when you hover over the local and or field data, you're going to get this tooltip that's going to tell you exactly what's happening in your four phases.

TTFB phase, time to first byte, resource load delay, resource load duration, element render delay. So you know where specifically you want to do some of the work. In this case right here, the resource load duration is almost six seconds. So chances are, This is where you're going to want to spend a lot of your time.

All right, let's move on to the next slide. Uh, once again, I'm back with the LCP score now. Uh, what did I want to say on this page right here? Oh, yes now If you look closely, you'll see you'll have your content for paint, local and field data. Then below [00:21:00] that, you'll also see this area where it says LCP element.

We will, DevTools will tell you the element that is responsible. I'm looking at the wrong camera. I feel like Marco Rubio right there, uh, responsible for the, um, the LCP. In this case, it was an image. And if you click on that link, you'll see specifically the source of the LCP. So once again, You look at the element, LCP element, you click on it, it'll take you right down to your code to tell you and to show you exactly the item responsible for this um, LCP and then you'll be able to start to make some correlations, make some changes need be, whatever.

But the point is that they lay out the information for you, which is amazing by the way. And again, this is pretty much all [00:22:00] happening in that panel that I introduced. So, let's look at some more panel updates. Um, or again, what is being called the landing page. Now, something that's been, uh, very much occurring throughout some of these updates is, um, improve tooltips.

You know, there's a lot of snow out here in Toronto. Here's another tip for you. Uh, do not eat yellow snow, but we're going to talk about tool tips. Now, one of the things that's been, one of the things that have, that's been, um, sort of like implemented is pretty much hovering. You're going to see. So in particular, if you go into your waterfall, um, sort of, uh, the waterfall.

is what I want to say, pardon me. Once you get into the waterfall view, any segment of the waterfall you hover will give you some [00:23:00] information specifically, like I said, we're going to work in this area right here that you see sort of, um, encircled. Now, um, I have chosen three resources here, and you'll see just on hover, if you look at the top left, um, I was hovering over a CSS resource, and I got a ton of information just on hover alone.

Because once upon a time you had to click on it, then you had to go down below and just kind of look at the information there. We've taken or they've taken that info and made it. a tooltip on Hover. And again, you'll see that you have a priority, highest CSS, cool, and you see some of the information that, again, can possibly help you in your debugging process.

Also, you know, you can hover over images, again, [00:24:00] any resource that's in the waterfall, you'll get some information. You'll also get that very important information, say like an image going from low to high priority. All right. And again, this is the kind of information you want to process in your debugging.

And here we'll see at the top right, um, a JavaScript resource on Hover. We were reminded that it was render blocking and we also have some information there. So again, these are things that you want to sort of at least know about so that you can process and make some changes needed be. And, you know, you could sort of pick.

and choose, you know, whichever, um, uh, resource there. And again, find out what is happening with that resource. And that's not to say that some of that information wasn't available before, but now it's readily available so that you can make some quicker decisions and not have to dig around left and right to figure out like where this information [00:25:00] lies.

Just a note, um, if you remember. Previously, and it's still there, uh, top right, you'll see that JavaScript resource still had that corner red flag, which has been always, for years now, an indication that this was a, a, a, um, problematic resource, specifically a long task. Now, um, let's look at some more, um, changes that have taken place.

Annotations. Um, this is actually really cool, uh, because now what happens is that Again, let's look at a part of a waterfall here and just say for a quick second, I was like, okay, I hovered over an image, a resource, I saw that the priority was going from low to high, et cetera, et cetera. But something didn't make sense.

So what happens now is that you can double click that resource and leave yourself a note. Like, [00:26:00] can we take a closer look at this, you know, at this file, like. I'm speaking to myself. I'm like, okay, I need to take a closer look at it later as I'm making some notes along the way. Because again, performance debugging has always been sort of like this, uh, how can I put it?

Um, I don't know, like investigative work, right? And you have to figure out exactly what's going on and leaving a note is actually really good. Now, you can see at the bottom right, I zoomed in so you can kind of get a hold, uh, I mean, get a sense of the information that you can leave. And you know, I don't know how many characters you could put there, but you know, you can leave yourself some notes either way.

Another thing that's really cool is after you've left a note, or even before you leave a note. You can start to, um, again, annotate with some arrows. So here, if I double click the resource, a little arrow shows up at the, on the right, and I can start to draw lines between resources. And again, maybe to [00:27:00] indicate to myself, like, hey, I think these two are connected for a reason.

Again, part of my investigation as to what is going on with the application, right? Now, something else that takes place is that once you start to. You know, put notes in and around your, um, your waterfall, you actually have a section that will show you all the annotations that have been made. And assuming that you have multiple annotations, you can actually start clicking on them and it'll take you right to the sections.

Uh, where the annotations were made. So again, basically like bookmarks. So once again, you can start to appreciate the idea of this sort of like newfound and improved developer experience so that, okay, I'm going to go back to that section where, you know, this image was acting up and I don't know what's going on.

Let me just remind myself. Oh, Okay, there it [00:28:00] is. Okay. Oh, I see what happened. It's the wrong file, whatever, who knows. But again, these are part of this investigative process that's now improved so that you could make these discoveries faster and have a better understanding of how to make some changes. Now, what if you want to do some pair programming kind of happens, you know, but what about pair performance auditing or debugging?

Or team telemetry. I don't know, that doesn't sound right, right? But either way, this is actually really cool. Because now, after you make all these sort of annotations, and, and, you know, drawing some arrows left and right, you could actually save a trace, alright? Like we had and by default now traces are saved with these annotations and why is that important?

Well, what if you know, I'm pretty good at performance, you know, [00:29:00] I kind of know my way around but you know The lead the I don't know of my team who's really good at performance He knows how to figure it out. Well, I can start to make, again, these annotations and leave these notes, save the trace and send it to that person by email, Slack, WhatsApp, I don't know, whatever it is that you use, but.

You can start to share the details of the trace with someone else on your team, and it could be multiple people. Alright, so again, this collaborative environment now that's possible and sort of like figuring out the user experience and performance, I think is super duper awesome. Alright, let's keep it moving.

Now, um, something else that's, uh, also taking place is improved CLS debugging. All right. Now, for those who need a little reminder, CLS is, uh, cumulative [00:30:00] layout shift, multi syllabic phrase, CLS for short. And, you know, I had to go find a site that had some semi poor CLS. And then they're out there, but believe me when, you know, it's not always easy to find like really obvious ones now on this side right here, which is not the ESPN site that I had before, which is this one's auto trader one that I actually spent a little bit of time on, which is why I remember to go here.

Horrible, generally horrible. CLS, like I literally load that page and put the phone down for a second and just wait for the page to calm down because it's like a rodeo. Now, um, what happens here is, uh, what I wanted to point out, um, you have the score of 0. 47, which is in red, so it's not that good. And, um, you could actually, first of all, you'll see right below it, it says, uh, worst cluster.

There are four shifts. And if you click on that, you'll see below, you'll get [00:31:00] a layout. I mean, a list, pardon me, of some of the problematic, um, uh, resources, or at least, uh, you'll get a list of the scores and the problematic areas of your, your app. All right. Let's keep that moving. Let's go to the, uh, waterfall.

And get some more details. Now, when it comes to the CLS, one of the changes that took place is that the layout shift is going to be represented in this sort of like line that has a diamond maybe at the end or throughout this little line. Here it's purple. As you can tell, I'm sorry, it's uh, it's a little small.

Um, what then happens is that the diamond is actual layout shift and the size of the diamond will also indicate how bad the layout or how large the layout shift is. So what now [00:32:00] happens is that if you hover over the diamond you'll actually get a short animation of the actual layout shift that takes place.

And, you know, it'll be subtle, you know, or it could be pretty violent. Who knows? Uh, you'll see where the shift takes place and you could probably start to in your head, Oh. I know what element that is and start to make the edits, right? And it'll be sort of like overlaid in this lilac purple, whatever it is.

But either way, this is a huge improvement because you can visually see what exactly is going on. And you may have a cluster with like multiple diamonds across it. So you can see each and every time where the layout shift takes place. All right, we got a few minutes left. So this is almost perfect timing.

There's so much, you know, Going on in these improvements that, you know, I had to pick and choose the ones I wanted to talk about. [00:33:00] Now, um, I know that, um, there's a lot of discussions around, you know, a particular topic and, you know, we'll get into it right now. But the first thing I want to find out if, if anyone's seen this film, uh, this is actually kind of cool.

I remember this very well. I always loved this poster, by the way. But, you know, This was definitely about artificial intelligence. And that's what we're going to talk about. Because believe it or not, I mean believe it, um, we are going to talk about DevTools and Yes, that is happening, folks. But specifically, it's being called AI assistance in our case.

So let's take a look at our DevTools panel. Now here we're in the waterfall view once again. And now if [00:34:00] you start to poke around and you'll look at the bottom, you'll see that There is a space for AI assistance. Now, uh, I believe it's still in the experimental phase. So behind a flag, um, you're actually going to have to, um, be logged in, first of all, and you're also going to have to, um, also opt in.

You're going to see this little panel like that looks like this, you know, console insights. AI insights, et cetera, et cetera. Now, what ends up happening is that now once you have that, you know, you've signed in, et cetera, et cetera, once you right click all right, uh, in, I don't know whether it be a, uh, resource in the waterfall or a function in the, um, what do you call it?

Flame charts, you'll be able to ask ai. All right. Now, also, [00:35:00] you're also going to have a set of, uh, in a different panel, uh, if you actually sort of like, it's going to be at the bottom, by the way, I was going to do a bunch of animations for this, but it was going to be so crazy, but you'll be able to also ask with these sort of preset questions, you know, identify performance issues in this call tree and or whatever.

You'll be able to ask a question about the selected item and its culture on your own. So, phrase it yourself. And, um, You know, the answers have been pretty good. You know, this is still, you know, not stable yet. So it is an experiment. But this is also to sort of indicate to you that this is where sort of like the debugging is, is leaning towards, you know, having some AI Having some, um, insights sort of like shared with you.

So you can start to again, dive into areas quicker, [00:36:00] faster. So you can end up with a site that's quicker and faster. Now, I sort of like want to run through what I thought was like a significant, you know, Or significant updates, but there are definitely some more out there that, you know, I, I wanted to cover, but, you know, it would have taken a bit longer, but either way, um, again, the, the ability to, um, gain performance insights earlier, faster.

Super awesome. Because again, part of the challenge with DevTools sometimes is sort of digging through all that information, um, trying to find out where the data is because it does feel like a bit of a fire hose at times. But now with, you know, with the tooltip, uh, updates, uh, now with the ability to sort of like, You know, hit a site and immediately have data ready for you to sort of look at, you know, the Core Web Vitals and some other [00:37:00] details here and there.

Um, I think it's been a fantastic way to get people a bit more engaged and more in. tuned with some of the changes that have to be made, or at least areas of their app that they need to take a closer look at so that they can start to make better decisions in terms of, um, yeah, creating a faster site. And with that being said, um, I want to thank everyone for listening, um, and Make sure you go into your DevTools, play around, look around, get familiar with the new panel, um, see what's going on with the tooltips.

And, you know, you can also, like I said, opt in and mess around with the, um, AI assistants to see how that goes. And, yeah, happy, uh, debugging. All right, cheers. I think I guess I should stop this. Or should I just keep this going? Oh, no, I can't. [00:38:00]

**Brian Rinaldi:** Hey, Henri, that was, that was awesome. You had a lot of like, uh, uh, really great comments in, in the chat here.

Linda says that it's just like, she's struggled with dev tools and there's very neat to see all the improvements. So like, yeah, that was, I didn't know most of this stuff to be quite honest. Um, question for you, uh, that I had while I was watching is. Is there any point to the lighthouse report anymore if you get all this stuff in the performance tab?

**Henri Helvetica:** That is a fantastic question, sir. Uh, I didn't get into that because I feel that would have taken a little longer. But, um, it's actually going nowhere. And so, uh, there's going to be, from what I understand, um, a bit of a sort of like integration, um, that's going to take place where it's going to be subtle enough where it's going to be like, oh, wait.

Is Lighthouse disappearing? No, it's not. But, um, the information will be there and [00:39:00] it's all going to be kind of like, um, merged to an extent. So I think there's going to be some details about that coming soon. Uh, I could probably drop a, uh, a link to a blog post where they actually talk about that because, uh, for all the changes that are taking place, it does feel like, you know, suddenly Lighthouse is not going to be around, but it will be.

Um, A lot of this stuff is sort of, well, yeah, I'll just leave it at that because that'll take like forever.

**Brian Rinaldi:** Um, I do have one audience question here from Charles. Uh, where should we expect AI or LLM to have the biggest impact on website inspection and performance tools?

**Henri Helvetica:** You know, that's a good question.

And so I remember last fall, no. Late last summer, I think, anyways, uh, I saw a demo of the same kind of work, uh, being sort of done, you know, I, I do believe that, um, there's some obvious stuff that's going to be, um, [00:40:00] highlighted, but, you know, I say obvious simply because, um, you know, these are things that sometimes like I know that sort of target early, but, you know, I, I think the key is that you're always going to be ideally pointed to the right direction, you know what I mean?

And, Part of it is also the idea that you don't necessarily have to do the digging that, you know, people have done in the past. Uh, and again, one of the things that I've always, you know, alluded to in the last few years is that, you know, this is investigative work and sometimes that's just not fun. You know, it's, it's, you know, I, I hate to be macabre, but, you know, I've always sort of described it as a, you know, a little crime scene, you know, it's like, can I, you know, if I see a knife on the ground and 20 meters later, I see like a blood splatter, splatter on the wall, can I find out if they're connected?

You know, that's part of the process of doing performance work sometimes, [00:41:00] and ideally, I think a I will be there to sort of, like, bring that up, uh, or at least present that case so that you don't have to do the digging that, say, has been Required in the past, you know, um, so a good, a great engineer by the name of Ed Davies, uh, once said years ago in a podcast, it's like sometimes when you hire independent, uh, or performance people, you're really hiring the experience, you know, you're getting people who have seen scenarios so much that they can start to make very educated guesses and, you know, guesses that For the average developer may not have made sense, but they can be like, here's why this is happening X, Y, and Z and ideally AI will be, um, the sort of tool to sort of bring that up immediately, make the case, and then you can move on faster.[00:42:00]

**Brian Rinaldi:** Um, and, uh, just in 30 seconds, can you say, Alexander asks, do you think web performance will get worse or better in total in the next five years?

**Henri Helvetica:** Fantastic question, Alexander. Um, hard to say because I think the challenge has always been getting people to tackle it earlier than later. And for the most part, it's slightly improving because we're starting to finally get that literacy through, but depends at the same rate, we're also dumping more out in the net because the net has been, you know, resilient enough to like handle it, but it's not always the best thing to do.

**Brian Rinaldi:** Okay, I think that's a great answer. All right. So we are out of time on re that was fantastic. Thank you, man Thank you very much
