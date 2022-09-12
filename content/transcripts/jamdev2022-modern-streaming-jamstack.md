---
_build:
  list: false
  render: never
---

**Tom Dale:** [00:00:00] Hello, and welcome to my talk on modern streaming video for the jams stack. My name's Tom Dale and video is dominating content on the web right now. Estimates say we're watching between 90 minutes and two and a half hours of video content a day. And obviously here we all are watching video, right? But still most viewers want to see more videos from brands and business.

Three quarters of marketers actually believe that videos have a better ROI than static imagery. That's a lot of indicators saying that we need to focus more on videos. Here at TheJam.dev, we're learning about an amazing ecosystem. That's growing support day by day. So I want to take a look at some modern methods for streaming video right now.

And then I wanna show easy. It could be to take those videos and put 'em on the jams. I'm gonna focus on YouTube, MP4 and [00:01:00] HLS. Talk about how each case works with different industries and show examples of how to implement them in the jams stack. So let's start with YouTube first, YouTube, obviously a leading social media video platform.

We all know, and it's freeish to use. It's easy to embed on your site and it's got a great distribution. So let's actually look at an actual real example. I have. So on a site I'm working on I'm actually doing a bunch of tutorials and have videos and lo and behold, here I am doing videos, right?

These are YouTube videos. This site is actually on next, and I think it's a really good example for why you would use YouTube videos. Because I want to get these videos out into a great distribution platform. I want more people to see them and I need to get the word out about them. So I think this is a great example for why you would wanna use YouTube.

And it's really easy to put 'em on next. Looking at what I did, you can look at my, my here we go. My video's view, [00:02:00] I actually have then a component called YouTube and above it. I'm just doing a V4. For videos of videos and then just doing a key off the slug. So essentially every instance I have of a different video it's gonna actually create one of these sections.

So let me first look at the section and then I'll talk about how I identified each one. So looking in the component, the YouTube dot. I'm using tailwinds. So you just might know these might look familiar to you here, right? And then for YouTube, real easy, just an eye frame. And I can embed it right here.

I can just do a vine on the source, do youtube.com embed and then refer to the actual video. You. Then I can just throw on a bunch of other items here. Maybe I don't wanna mute it. I don't wanna auto play so on, so forth. So in this example I'm actually using next content. So I actually have built [00:03:00] into mark down all my different instances and which was a great example for JAMstack.

Obviously you might be using a headless CMS connecting and getting each content that way. All of those are great examples. But like we know I'm just V binding and looking@thisitem.video, so if you look into my markdown here, right in the video, just have this number is what I'm bringing in. And that's, what's generating this right here.

So for every single markdown file I have, I'm bringing in the text and then accessing this video and doing it all via. So they think that's a really good use case for how how you would do YouTube for JAMstack. Now let's think about you can't always use YouTube, right? Sure. That was a really good experience.

And when you're on my site, the videos are working YouTube's performance. And when you're someone else's, you don't know about my site, you have a better chance of finding my articles, because. [00:04:00] YouTube is really good at distributing all this content, but that may not be the thing, the reason you need video.

So here are some reasons why maybe you shouldn't use YouTube ads. Ads is just humongous, right? Like at the end of a video, you get this thing where it's showing all these different recommended places to go. And boy, oh boy. If one of your competitors shows up, if you are something, if you're something competing in Ikea and Ikea's right here, that's a real bummer to have literally a suggestion to leave your site and go to competitor's site happening right on your website.

That's a really tough thing to have to go through for your product or for your site. Also let's think about media sites make money off of ads. If you're using YouTube, then YouTube is using your video to make money off of ads. You're not getting the money from the ads. So if your a media site and your main business is getting a ad revenue, you [00:05:00] can't be doing YouTube.

You gotta do another kind of video solution. That's gonna allow you to put on your own ads and make money or distribution platform or something. YouTube has a lot of good benefits, but it's gonna give ads. It's gonna point away from your website. It's gonna take risks to, to have people go down the rabbit hole, go to the U YouTube rabbit hole, leave your site, go to other places.

They won't see more of your ads are watching your videos. Maybe they'll leave your product. They won't purchase it. And cuz they forgot about it. When somewhere else, these are all big pitfalls of maybe not using YouTube for your. and then the last one, just not matching the site design. I just drew up a quick example here.

If you have a product section and down here, maybe you have an explainer, this video will work and here we are seeing it. It's just the way it's designed and it looks may look maybe a little cheap for the e-commerce. , it may not match your branding versus if you just want and then you're risking that redirect at the end, it might take you away from the site versus if you were serving something else you [00:06:00] just have you, you have a lot more control over the player and maybe why you shouldn't use YouTube in some instances.

So I think that really clarifies. A bit of YouTube and how you could use it in the JAMEX really easy just to embed to take that video ID and just V by and switch it away to whatever markdown, CMS content platform, whatever it is you're using. It's real simple. The next method for serving video is the tried and true, simple method of using an MP4.

MP4. Poor videos are supported in every browser. Even I E I cannot believe it, right? You don't even need a third party player. You can just use a default player in a browser. If you like, you would need to serve the MP4 via a CDN though. Like these are jam stack sites and they are statics. So we do need to be serve things, serving things through CDN for them to be performant.

But so let's go back to that sample site. I was showing here we go. So [00:07:00] simple product idea down here. This is playing. Via MP four URL. No no player, no nothing. So if I show this example, here we go. It's literally just a video tag, some tailwind CSS I'm show controls, loop it, make it the fold D and here we go.

Just simple URL. And then you identify the type video and. You can see if I had it over here same video just working right. This that's what's sitting right here and the process to, up to get a video online in front of a CDN. And then before video, super, super easy. S3. It ain't pretty, but it's gonna work right.

If I just take this video in here. Upload, here we go. Upload. There we go. [00:08:00] It'll just take a moment. It's 20 seconds, no big deal. And then you'll get a URL. And if you're using S3, you can put it in front of cloud front. In, in this example I actually have my images account hooked up to S3.

So everything that goes through my, my S3 just goes to image X. So that puts it on a CDN as well. There we go.

Yeah. See, there it is. New one just came already. So super easy way just to upload images and get them on MP four S and you could just have, 'em working really easy here. Thinking of another really good use case. I don't know if I, I love the idea of background videos, but people do background video.

And MP four is a great example for a background video. Cause the background video shouldn't be too long. So MP four is it can be good for that format. You wouldn't wanna do YouTube. That's just gonna look insane and ridiculous, right? That's not, it's not what you want. [00:09:00] But it's a real simple idea.

I'm just auto playing it, getting rid of the controls. Here, lemme bring up the code again to show that example. Here we go. So just on the homepage, same thing video. This time I've muted an auto play. This is just all native inside the video tag and HTML or, yeah. Perfect. Real simple. So when does MP4 have any pitfalls?

When is that a problem? There becomes this issue of how high of a quality should I make my MP four people with with good internet 4g 5g. They'd be able to download my higher quality video and see a nice video. But if I do that, then I've got people that might be taking a train, Bart, whatever.

I don't know. And, or maybe they're in a bad service area. Maybe they're on fast 3g. [00:10:00] Those people are gonna be having a heck of a time watching that video and you're gonna lose those users. I think some of the numbers I saw were around 20% of users could be on fast 3g at some time. Then do you just lower the quality of your video?

Cause if you do that, then the other users that have the good internet are gonna notice the degradation, the video and the low quality you could generate. several different video sizes to match every format. And now you're just managing this big serverless thing that has nothing to do with what you wanna do.

And now you're having to manage all these other things. So I think that kind of becomes a problem and you have to debate this idea of whether or not you want to build out something like that to have several different resolutions. And just to prove. Point in this idea, but for for 3g and not.

So here we go again, I'm just got a code pen with a simple idea. Video tag got an MP four in here. Oh, maybe we can [00:11:00] refresh it. So we start a new

here. We.

Good old and before working, playing. Absolutely no problem. What if we wanna pretend that we're in a 3g environment, so you can just open your network tab and actually throttle yourself to fast 3g, go back over here. Let me do another refresh.

Here we go. Things are okay. Run through. Oh wait. Oh no. Oh no. Here we are buffering here. It was thought you were rolling around in the future, but Nope. And back to [00:12:00] 2002, can't even watch my video without it buffering. I'm outta here. Hate this. So that, that I think really identifies that there could be some pitfalls for MP four.

And again, only certain scenarios that I think you should really use MP four S those shorter background videos. Maybe just shorter videos in general, that you just wanna auto loop and make 'em look like an animation. And maybe some product videos that aren't too long are fine to do, especially if you expect them to be purely in a higher performant environment.

But if not, then think we need to look into some other options to serve our modern video on the web. Let's look at HLS now, HLS isn't necessarily a new protocol. It was created by apple, I think 2000. IHLs stands for HTTP live streaming. Now, even though the word live is in the name, it's actually really good at on-demand video.

It works by breaking down MP4 videos, [00:13:00] into small chunks that are then indexed by the web server, depending on the target device, the size of the video player, a good solution should really transcode and adjust the resolution to fit in that device. And that. but now enter the real magic, adaptive bit rate streaming.

It modifies those video chunks every few seconds, based on the end user's bandwidth, if all of a sudden you hit that bad area of bandwidth on your phone at home, wherever it'll actually decrease the quality of that video to make sure that playback isn't interrupted. I'm sure we've all experienced this on Netflix or something.

It lowers in quality goes back. You keep watching that show, but if it's just buffering and spinning, especially if you're shopping or something like that, you're definitely gonna abandon and go away. You don't want the playback interrupted. It checks about every five to eight seconds typically to see when the bandwidth changes.

So it's doing it pretty [00:14:00] frequently. One immediate item that stands out in different stand four. It's only supported natively in some situations. So you need to use a player with HLS. luckily, there are a lot of great ones out there that are open source, like video JS. It's honestly a good thing to be flexible with your video player, cuz then you can customize your branding.

You can find add-ons that you need. Maybe you need to add advertising. Maybe you want the end cap to be videos. You can choose that'll come up next. It's a good thing. Now let's look at a side by side example of MP four and. I'm actually going to go to an app that was created not by me, but by Jamie Dawson.

And he did it in react and the idea is just using an HRS player and a regular react player. And you can actually just put in URLs here and then play them and see them side by side. And I'm still on my fast 3g right here. So let's [00:15:00] go back to our game of Thrones. That we were looking at before. Let me adjust this as well.

Perfect. All right, so let's play them now play both and then let's do the mutes. Here we go. So this bottom one is MP four. It's already buffering already having issues. So I think that it's a pretty good example, and this is a great app to show this side by side. so you actually might have noticed that some of these URLs I was putting in here, they're actually image X URLs for the HRS.

It's true. Just last week we launched a new video API. It connects to your storage, just like we connect with your images. It has a video management dashboard where you can see all of your actual media. So maybe videos that word, media images, video, other [00:16:00] items. And if you remember before I had uploaded something to S3 and I said, my image X account was connected to S3.

We can go ahead and pull it up. It was that unwrapping thing here. It is on my dashboard. It's already here on video, right? It's processed. Here's the link for it. I can just take that link. I could put it in some HLS player. We know it's here and I'll just put FM equals HLS. and then that's all you need to have it running it.

It's it's actually gonna get served on then a CDN. The CDN is a multi CDN setup. Right now it's using Fasti and CloudFlare. So it's gonna detect the fastest CDN to use. And there it is just a real simple setup. Again, just, you could upload to, to S three or GCs it's connected image X.

just use the API FM equals HLS, real simple, even have a dashboard to search to modify your categories. There's [00:17:00] an API connected to this dashboard. So you could actually even do uploads to image X and, we have your S3 credentials were used for the setup of images. So when you actually use that upload API, it's actually uploading to your S three to image X, right?

So it's a really useful item and. I would love it for all of you to go out, try to use it, check it out, mention that you saw on this talk, the new image X video API from Tom. We would love to get you set up to start using it. Okay. We have just a couple minutes left and I just wanna quickly throw onto the end and actual tutorial of making a react app and putting an HRS player in and trust me.

It's simple, easy and quick. So let's just get started in the terminal here. I'm gonna go to my folder of choice here, and then I'm gonna do a MPX create react tailend app. So [00:18:00] MPX create react, tailwind and up video the jam. CD into it.

And we also wanna install an H HLS player, right? MPM install, react, HLS player. Don't get mad at me. I'm gonna force it.

And then I'll run MPM stall and the rest of it. And while I'll wait for the rest of it to install, I'm just gonna bring up the code editor as well.

And the nice thing about this tailwind starters, it's gonna have the tailwind config already set up and the tail and CSS as well. So here we go. All right. So while this all goes, [00:19:00] I'm gonna bring a new bring the old, the editor here, throw this in here and we can have a look. So in the source, I mentioned we have the tailwind CSS, so you're bringing in the base and the components and the utilities.

That's nice. And they configs already made there's a post CSS file. Everything's set up to start using tailwind. While it's still installing, we can't look at it yet. But you can imagine a react logo here and then some words below, right? So I'm gonna replace that react logo and actually put the video player right in here.

That means we don't need to import the logo, but we do need to import react HLS player from react, HLS player. Cool. So right here is where I'm gonna put the player and I'm gonna borrow again from Jamie Dawson. So if you're out there, [00:20:00] thank you very much. Here we go. So react to inters player's source.

And then I have a URL here. It's in the image X one with FM equals hos. I'm gonna set the width that a hundred percent and the. Auto. So that'll just fit nicely in there. And let's go ahead and run this. See what we can see. We can also add a a second video or three or who knows? So lemme just grab this diviv right here.

Go down to here and let's go ahead and duplicate right. so we're duplicating, but let's switch out this URL for another one. So I can go here and again, get my game of Thrones one if I want, and we're gonna leave the the FM HLS. So let's see how we're doing now. Local [00:21:00] host 3000. Perfect. So this one, I think.

Yep. Hello, the explainer video. Next one.

man. That was easy. That was great. We already have the two videos up. They're looking fine in their little cards here and it's tailwinds so we can go anywhere from here and just super modify it, make it real easy. Maybe use tailwind UI, if you want to be lazy about CSS, who knows possibilities are endless.

So just again, just looking back, it's a real simple addition of the HLS player. Source putting in some sizing and you're just importing it right here. That's all I had to do. Made different scratch. No funny editing, no cutting out nothing. Working. Doing great. Thank you so much for taking the time [00:22:00] to attend my.

And I hope I brought in some good info about YouTube MP4, HLS. I'm not saying any of them are bad solutions. They're actually all good solutions to use in JAMstack sites. Just, they all have their own purpose and time to be used. So to recap, YouTube, if you want that distribution platform, if you wanna get out there, pushed out there, you don't need the ad revenue.

It's fine with you that the branding's off. It's a good one to embed and put in. If you're doing a shorter form video MP4 real easy, simple to do. Maybe even if you're doing like a background auto playing video, that's a good one to do as well for MP4. But just watch out once it gets a little bit longer, you don't want to be using it.

Because either a you're gonna have to create a complex setup to build several different resolutions and something serverless probably to actually make sure to cover yourself for the people in the higher bandwidth and lower B. so [00:23:00] enter the HLS solution. HLS solutions have been come a long way.

There's a lot of platforms now that's starting to support it. Image X, brand new one to the game also to be sporting it. It's a really good, simple solution. Just connecting to S three Google cloud storage, whatever it is gives you the URL for the video API. Works in any HRS player that quick you saw it working.

Thanks so much, everyone. I really hope you learned something about video for modern jams stack and look forward to talking to you all.

**Brian Rinaldi:** Thanks, Tom. That was great. I think. Personally I end up including a lot of video of my projects, but sometimes I think it's so easy. Just do YouTube or something like that, even when I probably shouldn't for the reasons that you listed, you had some legit reasons and it's been problematic for me before, just that I think the issue you discuss of I needed to work for everybody.

And so [00:24:00] sometimes it, the. Cheat ways just uploaded to YouTube, even if you probably shouldn't cuz yes, it has ads. Yes. It will. Could com you know, promote your competitor, et cetera. I think that's that was some really good points there.

**Tom Dale:** Yeah. Yeah. IHLs is not that new of a thought, but just hasn't been that prevalent in platforms to be available to people.

And I think it's just getting. Way more accessible now. And I think it's something people need to understand. It's not that hard to do. And just like JAMstack right. People are always, maybe worried about switching a JAMstack, but once you start looking into it, it's not that hard to make a JAMstack site.

And it's not that hard to make a really good video on a JAMstack site.

**Brian Rinaldi:** So let me ask you a little bit about how HLS works on, you talked a little bit about it, but I noticed, first of all, that, like you were uploading an MP four and does, is image X doing some conversion there to make it work for HLS?

How does that all [00:25:00] happen?

**Tom Dale:** Yeah it transcodes it to HLS. And then HLS really is just making a ton of, and before chunks, but it's just making all the different size options, right? Like it's if there's six different resolutions, it's gonna make all of 'em for every five second chunk. And then as it detects your bandwidth, as it goes every five seconds, it's just gonna switch it up and down, depending what your bandwidth is to make sure.

That the video always keeps playing and the goal is to have the highest quality video possible and not have any buffering, right? Achieve both those items and let you go up and down. And it's a really interesting time cuz Google isn't really pressuring you a ton on performance of videos.

If you look at. Page speed dev sites and those kind of places they'll hit you hard on images, but they're never gonna hit you hard on the video. So it's really way more on you to try to bring that great experience to the end user.

**Brian Rinaldi:** Yeah, that is a surprising thing. I hadn't thought about the fact that they do hit you for [00:26:00] images, but.

But if you have a really terrible video, I, I suppose if you're embedding in MP4 or something like that, and it's really heavy they'll they might hit you for that specifically, as a background or something. I don't know. I haven't, yeah, haven't really tested.

**Tom Dale:** Usually they hit you if you do like gifts, cause they want the gifts to be an MP4.

Just make the MP4 an auto loop and look like a gift. Because, most websites now you think like Giffy, it isn't actually gifts. It's MB four S but they just make, 'em look like gifts. Cause the gifts are too heavy. Yeah. But yeah, so we're not seeing a lot of that thought of them saying, oh, you should have lower resolution video for users on lower connections.

That's not happening yet. So it's just something that again is kind. You really need to take the charge on yourself to realize I need to serve all different types of users in all different situations. And I don't want them to leave. That's the other tough thing on YouTube. You don't know if they left early or not versus the other video solutions.

You can really actually get some better [00:27:00] analytics and understand if they left too early or not.

**Brian Rinaldi:** And you're a good point about the gifts, cuz even. If you upload a gift to add like a literal gift to say Twitter and it's, and it actually plays in MP4.

**Tom Dale:** Oh yeah.

I've been on this crusade of getting rid of gifts, but that's like a whole nother persona of my life. yeah.

**Brian Rinaldi:** Yeah. They, they are heavy. I don't know. I think a lot of us don't you. Haven't gotten used to just replacing them, which we probably should, but so on the, so you said, okay, so you said it chops it into five second chunk.

And each chunk, depending on how so do you set, like how many different qualities you want or is this some kind of default or how does that work? Yeah,

**Tom Dale:** it just, it's just a default with a ton of different resolutions. I can't remember what they're maybe 365, 47, 20, 10, 80, like a bunch of different sizes.

And it takes two ways to think about what size you need, a, it takes the CSS sizing you did on the video [00:28:00] player, and then also your your bandwidth, right? So it's doing a decision on both. So it goes, oh, you're doing a really small video and your video player. They do have good bandwidth.

Let's give them a slightly higher one to make sure it looks good versus giving the humongous one. And so it will switch around in two different ways, but the thought is. You don't want to think about it too much, right? Like you just want a video to play for your users. And so this helps you not think, okay.

I need to build a serverless thing and generate five sizes and put 'em all in there and have it choose the right one. Like again, you don't really wanna think about it that much. You just want to at least know that you're playing all users.

**Brian Rinaldi:** And so yes, absolutely. So question you were using the react HLS player.

So is this different, like than the regular video tag player? Or is this I, what is that doing under the covers?

**Tom Dale:** Yeah. So one, one dilemma I mentioned about HLS is you need a player that actually supports hos. And the reason is because of. Idea of [00:29:00] adapting the video size based on your bit rate, if you just use the basic HTML five video tag it, it's not gonna support that.

Some browsers do, but not all of them. And if all of 'em don't do it, then you need to do something that'll work on all of 'em. So there's a lot of different players that like, like video JS is an extremely popular player or HRS JS, or then they all have. Conversions in react and NX and AUL and all those.

So my react HLS player was just another free example for react. And the reason I had to use that one was just because then it will actually understand the bandwidth and adapt based on your bandwidth. And are there

**Brian Rinaldi:** any do these players just work in every browser? Just the same.

Are there any considerations I need for like mobile versus desktop on those kind of things?

**Tom Dale:** Oh yeah. Tho those are all those players work on all browsers. And if you're actually just building a mobile app and no browsers then you can actually [00:30:00] just use the video and it will work.

So they, so all HLS works on mobile. But again, that was just my dilemma of if you're actually building a site that's desktop and mobile and multiple browsers, you need to find something that'll work in all of 'em. So does video JS. Whatever it is sure will work all of them fine. But if you are making a pure mobile app yeah.

You don't need the player that you could just do natively in the mobile app.

**Brian Rinaldi:** Okay. And for one thing you mentioned was background video. Can you do a background video that's HLS or is it kind of thing you have to use?

**Tom Dale:** You can the guess the debate is most background videos. Aren't too long, and and if you aren't doing too long of a video, if you're doing a five second, eight, second video, And before is fine. Just do it before. And it's fine. It's more the idea of when you have something a little bit longer, you have 20 seconds, 30 seconds, five minutes, whatever. You have 30 minutes, then you want to be focusing more on the HRS idea. So it's more it really isn't. It's not bad [00:31:00] to use HLS as a background video, but it maybe it's bad to put a minute long video as a background video is the better answer.

**Brian Rinaldi:** That makes sense. True. True. And I suppose if in this case, if it's just.

As far as I'm concerned as a developer, I'm just including an MP4, right? Like in either putting in an HLS player or putting in a background, video tag, like as, the URL from your, from image X is just an MP four and yeah. Am I

**Tom Dale:** right? Yeah. Yeah. You could just drop that FMS and work as an MP form.

**Brian Rinaldi:** Okay. So the difference. The player is what determines whether it gets served as an HLS versus not. If it's in the regular video player, it's gonna be, it could be just a regular MP four. If it's in the HLS player, it's gonna

**Tom Dale:** use HLS. Yeah. But, and the one thing is just at the end of the URL, you'd put FM equals HLS to choose.

I get, have us change the format. Yeah.

**Brian Rinaldi:** Ah, okay. Okay. I missed [00:32:00] that, that

**Tom Dale:** little URL print. Yeah. So image is like API driven and at the end of the URL is like how you make changes to it. So you can do all kinds of things at the end of the URL to change up images and videos. And that kind of practice works super well in jams stack sites just to, to pin things at the end.

Yeah.

**Brian Rinaldi:** And

**Tom Dale:** go ahead. Go ahead. When Google is, Google gets upset about putting things in the middle of a URL, cuz then it confuses it with the name and then SEO and that kind of thing, putting it after the dot JPEG or do and before, whatever in a question, mark, Google understands that stuff is API not name.

**Brian Rinaldi:** Sure. That makes sense. And so to, to, even though it says like adaptive bit rate streaming, right? This is. This is different from like regular video streaming. This is not a streamed video. It still plays like an MP4 still download. It's just downloading in

**Tom Dale:** chunk. That correct? Yeah.

Cause traditional video streaming, an [00:33:00] MP4 is it's playing and it's still downloading the rest of it. That's why you buffer. Cuz if you're on a bad bandwidth, it could be downloading too slow and you catch up to that point. But in an ideal world, streaming is. You don't have to wait for the whole video to play.

You can start watching it while you're downloading it and theoretical, hopefully not catch up to that point versus thes streaming. It is again downloading as you watch, but it's also has several different versions. So that way, if it starts getting too close to catching up, it's gonna adjust and go to those low resolution.

And start downloading lower resolutions. So it can make sure to get too far ahead of you again.

**Brian Rinaldi:** But it's also different. Say say Crowdcast right now is literally a stream where I'm not necessarily downloading the video, the full video in the it's pushing a stream down that's different.

**Tom Dale:** The HLS is also a stream too. Like it, it won't push the whole thing. If you leave early, you haven't downloaded the whole.

**Brian Rinaldi:** Ah, [00:34:00] okay. Wow. Okay. Good to know. I didn't realize so, so yeah. That makes a lot

**Tom Dale:** of sense. Yeah. One of those ideas of not making people download unnecessary bandwidth,

**Brian Rinaldi:** yep. Yep. For sure. And so you said within image X, I can, it's not, obviously not just videos. This is a whole, like you can upload images and do the do transformations on images as well through your system.

**Tom Dale:** Totally. Yeah. Yeah. Image X has been doing images for a long time. And you can optimize images and we have this same idea of like intelligently thinking of serving the right format.

So again JPEG is like the tried and true format. But in every browser has like an image type they think is better and is better than JPEG, but none of them agree on the same one. Of course. Why would. No, why would they, so we intelligently detect what browser you're on.

So you serve a if for Chrome is like a really new popular format that's quick or WebP then would be like in Firefox and so [00:35:00] on, so forth. So it's continuing that same idea of serving your content and doing it like intelligently to make sure it's like the fastest possible thing. And it's, we're creating this platform where you can bring all of your media and, the most important thing we think for the performance of your site is optimizing your media.

So that's what we're really focusing on. Definitely.

**Brian Rinaldi:** It's, and it's amazing, how that's becoming a bigger and bigger chunk of the, site, page, weight as we move forward. And yeah, so it's definitely something folks have to take care of. That in not too much Java script, no can be totally.

And

**Tom Dale:** That's a whole world too like JavaScript, you should be G zipping it, but again, there are other algorithms to make it more encoded. And if you put it on image X, it'll be smart and switch it up to like broadly and other things, depending on the browser. So it's just keeping up this idea of whatever you're serving, let's do it and let's optimize it and [00:36:00] make it quicker.

**Brian Rinaldi:** Yeah, absolutely. One of the, one of the attendees mentioned that I think she saying HLS versus just regular MP4 is a bit like UDP versus TCP, different protocols in a way. Yeah.

**Tom Dale:** I do not know. Yeah. I . Yeah. That's I don't know if that's a comparison I've heard or.

That quite makes sense to me, but

**Brian Rinaldi:** Yeah. It's, I think it's interesting that I hadn't really, watched video all the time and, I did notice that, when it drops quality, it'll drop for like a certain particular period of seconds and then go back. I never really thought about how it was doing that.

I thought it was, I didn't, I hadn't thought that it was actually. Chopping the video up like that. But that makes a lot of sense. Yeah,

**Tom Dale:** you could kinda see that secret thing behind my screen to the bottom, just like a network tag left, open, it was like a a happy accident. You could just see it actually generating these files and [00:37:00] theoretically, if you like open them or even look at the names, it says what sizes they are.

So you can see it actually choose the different resolutions. So it's pretty neat seeing it go into

**Brian Rinaldi:** action. Yeah. Okay. And I see our video guy Potter in the back he's nodding. Like he's all into this. This is his topic. Yeah. Awesome. That's really cool. I definitely I definitely wanna check that out because obviously, even on, on CFE dev, I do a ton of video, but right now, like I've been.

Cheating purposes he's been on YouTube or Vimeo. Mostly because YouTube, I didn't allow me to control. You can pay a little bit for Vimeo to give you private stuff. Without the ads and all that stuff. But

**Tom Dale:** yeah. The nice thing too, about those like players you can bring for HLS, like video JS, for example, there's so many plug-ins that are free to like, do your own ads to do your own bookends at the back.

Like all the stuff that you would need to actually like generate revenue and. I think you're just [00:38:00] starting to see more and more of this battle against these bigger platforms that you don't need to pay a ton of money for these big platforms that you can really do extremely perform videos yourself, and actually generate revenue for your, for yourself as well.

**Brian Rinaldi:** And so somebody was asking, is it what's the lost behavior? Can you lose packages? Can you actually like. Maybe skip ahead in the video. If a package, one of those little

**Tom Dale:** bits is lost, you can absolutely skip ahead. But I've never seen a situation where it's like losing a package in there where like a part of the video is missing or gone.

Okay. But it absolutely supports the idea of jumping ahead. Yeah.

**Brian Rinaldi:** Okay. And one, one last quick question. We're running outta time, but somebody asked is ImageX also supporting R TMP ingest or is it ingesting from bucket? Do you know what that means? I don't.

**Tom Dale:** So we are ingesting, there's like a list of 15 different like video formats that you can ingest and it just goes through the, your S3 bucket and we'll ingest it and then [00:39:00] transcode it for you.

If there are other images, people on the chat, maybe confirm the idea. I don't know about if it's RTMP or not. It's a good question. Okay. And I think the biggest thing I know running a time is like I threw in that last five. Tutorial at the end. It's just that quick, build something yourself and just get the feeling of it and see yourself.

It'll just take you like five minutes and then you could really see it in action yourself. I think that's the most important thing about JAMstack just build it's so quick to deploy something and do it and feel it yourself and learn that way.
