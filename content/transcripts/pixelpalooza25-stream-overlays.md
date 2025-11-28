---
_build:
  list: false
  render: never
---

**Nick Taylor:** [00:00:00] Hey, everybody. Welcome. My name's Nick Taylor. I'm a developer advocate at a company called Pomerium, and today we're gonna be looking into building overlays with web tech. So for anybody that live streams or have seen live streams, you might notice on some live streams that, uh, there's like cool backgrounds or maybe some kind of interactions sometimes, and you know, other info pulled in and stuff.

And you can do all of that with the existing web tech that you know. So let's go ahead and take a peek here over at, uh, this is a live stream recording that I did with Andy Bell, who's awesome. And let's just look at a few elements on the page here. So I do have some static stuff. Like this is literally just an image here that is [00:01:00] pulled in, in OBS, which is what I stream with.

But there's some other stuff that we will see shortly, but like this alpaca, which, uh, I'll get into why there's an alpaca at some point. Um, there's some other info like, uh, Andy's title and the title of the live stream, the logo, and we can see the chat and even the videos, uh, feeds that you see here of me and Andy.

Those are two actual URLs that are pulled in using something called Video Ninja. I'm not gonna go deep into Video Ninja today, but all I'll say about it is it's, it's a really great open source project. You can use it to bring in guests onto a live stream. Uh, alright, cool. So we've got all these pieces in here.

Let's, let's go break this all down. So like I mentioned, I use Airtable, uh, or I use Airtable to pull in data. So here I have an example of me, Nick Taylor, my title, and like Pixel Palooza. Now we're just gonna look at a [00:02:00] few things here. So I have a site, Nikki T Live. This is where I post my schedule and stuff.

And you can see here it says Pixel Palooza. You know, and then it says the guest, me and my title, and that's being pulled in literally from here. This isn't used on the live stream, obviously, but this is where, how I get my, uh, schedule to just show up as I update Airtable. But it, what I do wanna show is that overlay, that use.

Saw with Andy's livestream, you could see here's the livestream overlay for today's guest info. And it's the same info being pulled in from uh, Airtable. So it says Pixel Palooza for the title, my name, and my title. And if we come over to OBS, we're not gonna live stream, obviously. But you can see that that info is pulled in here and that is basically.

An overlay here that I have pulled in, and if we look at it, we can see here's the URL. It's overlays, nicotine live slash guest [00:03:00] info. And so that's one piece of the puzzle. Let's come back to here now. Uh, this is an Astro site, so that page that's showing the guest info, here's the astro file for it. And again, we're just leaning into web tech here.

So I've got a guest stream info function that I created. This is pulling the information from Airtable. Uh, I've got some good old HCTP caching happening. I cash it for I think, uh, 600 is just five minutes, I believe. Uh, 'cause sometimes I have to change the guest info on the fly, but I just want it cached anyways.

Um, and then you can see here just regular stuff outside of the, uh, the code fences just astro with good old HTML. In here. I have a bit of. Scope style here, and you can see I'm pulling in all the info and stuff here, so that's pretty cool. Now there's another thing here, which if we come back to [00:04:00] OBS, we can see I have this alpaca here and I'm gonna run a command here.

So let's switch here. And I'm gonna say Alpaca Hyde. And. You're gonna see that the alpaca hides. Now this is just to bring it home here. This is like the live stream is not running right now, but if it was running, if I was in Twitch and I used the command alpaca hide, it would do what you just saw there.

And you can see it just keeps changing hats or sometimes these drinking something and let's just do it again for 'cause. It's just fun to do. And you're gonna see hides again and then pops back up. Uh, where'd you go? Alpaca. There you go. Okay. Hello King and. There's other things you can do here. So like we can add some other interactions, like I can say add a donut and then I can actually start moving the donut.

So I can say donut dash, right? [00:05:00] And you can see it moves and stuff and that's just fun, silly interactivity. But I just wanna show where that's coming from so, uh, we can see it here and uh, can come back here if I was in the chat and I could do other stuff, like, I think it's, uh, unicorn. There we go. And then I can do unicorn up, for example.

And so how is this all possible? So this is using a project called Comfy js. Uh, this is open source. This is used specifically for Twitch. So Twitch has commands. So like if we come back here. If you wanna use a command and twitch, it always has to be prefixed with, uh, exclamation mark. And then you can basically put a command.

So here's Todd. Uh, uh, you know, shout out to Todd Libby. He's a big fan of lobsters. So then I can do like Todd again. Let's go. Down this time, and this is all possible because of comfy js. [00:06:00] Uh, I won't go into all the details of the project here, but essentially you can intercept the commands and then you can have it do whatever you want that command to do.

And that's basically, this one is an astro site. I should probably update this one. This is just, uh, raw HTML, and then I've. I've got a inline, I'm importing a script here with just type module, and then if we come here, we can go see all that stuff. So like I have like some emojis and other stuff, and then there's like the pieces like Todd and like there's a poop emoji, donut, et cetera.

And then basically I have commands, like I can move it, I can create the pieces. And then you can see here it is just basically parsing that command that comes in from Twitch. And that's how you're able to do those things. And let's see here. Let's do one that's a little more fun. So if we come over here, or actually let's go straight into OBS.

I'm going to say confetti. [00:07:00] And then all of a sudden it just throws a bunch of stuff at emojis that causes, uh, chaos. And that's literally just all the chat interactions here. So I can hide that. I can show it. And this is just showing how, it doesn't have to be this one massive overlay either. So literally you can just hide the chat here.

Um, the Restream chat. That is what I use for, uh, live streaming. Again, this is just A-U-R-L-I get from Restream, but I can paste it in as an overlay as well. You can customize it and so that's pretty cool too. Alright, nice. So. All these pieces together just allow you to have like something super interactive, or even if it's not super interactive, you can just pull in stuff leveraging the existing web tech that you know.

And I think that's really cool. And I'm curious if folks do, do live streaming, or even if [00:08:00] you haven't, uh, I encourage you to just try out these things and give it a go. It's, it's a lot of fun and, uh, sure. It's a little silly. I'll, I'll throw in one more there. I think, uh. Curl 'cause I'm Canadian. Uh, and then I can just do curl left here.

Now, uh, this won't come across on the, uh, in the talk here, but when it moves the curling, uh. Rock. It says sweep, so it's, I just go sweep, sweep. Anyways, fun stuff. Uh, you know, WebTech isn't going away. Uh, you know, there's just so many places you can use it and overlays and live streaming is one of the places.

And that's it. Thanks everybody.
