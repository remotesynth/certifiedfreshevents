---
_build:
  list: false
  render: never
---

**Luis Ball:** [00:00:00] Hey Jam Dev. My name is Luis Bong and I'm a software engineer with Image xx. Today we're gonna talk about building a kickass video player using the Image X Video api. So what are we gonna talk about? We're gonna talk about why we want to build a custom player using the Image X Video api. What do users expect out of a modern player?

And then we're gonna go ahead and build that player together using the ImageX video api. Finally, We're gonna look at IX Player, an ImageX player. They let you get all the features we've built together out of the box. So first things first. Why build a custom player? There's a lot of reasons why you might want to build one, but one of the top reasons is to reduce viewer abandonment.

About 39% of your viewers were abandoned watching your videos. If there's even one second of buffering, which is. We recommend obviously using a CDN like images [00:01:00] to host and process and encode your videos. Another reason is to keep control of your content. Some of these third party players will give you a player that shows a lot of ads unrelated to your content, or even from a competitor, and sometimes shows content that will lead viewers away from your page and someone else's page.

And that's pretty. , but what the users want in a player. They have high expectations set by people like Netflix, Hulu, and YouTube. They expect fast playback, high definition, no interruptions. So let's build a modern player using the Image XX Video api. What are we gonna build? We're gonna add automatic poster generation to our player.

So no matter what images video we give it, it'll grab a thumbnail from a certain time in the. And then we're gonna add poster transformations. We're gonna use the image rendering API to transform the posters to do things like add a watermark or blur the image, or add a title to our [00:02:00] posters. And then we're gonna add gif on hover previews.

So we're gonna add functionality that gives user a preview of what they're gonna watch by displaying a GIF when the mouse hovers over the video. First, let's talk about automatic post generat. , let's build it together. So on this H gmail page, we have a video tag, and the source of that video tag is an ImageX video.

We're giving it a type of mp4 since that's the video type. A width of a hundred percent. We're saying show us some controls and we're saying start muted. And if you press play, you can see the video plays now what we wanna do is have the poster for this video be generated automatically from the video.

So we're gonna use the video generate equals thumbnail parameter. So let's go ahead and do that. We're gonna copy this URL and then we're going to say poster equals, and we're going to pace the URL in there. Remove the format parameter and add the video [00:03:00] generate thumbnail parameter. So video generate equals thumbnail.

and it'll automatically pick a couple seconds into the video for us and set that as the video poster. And there it is. Now the video poster is automatically generated from the video itself. If you had a different timeline in mind where you wanted to pull the thumbnail from a different part of the video, you can use the video thumb.

Time parameter. So for example, it equals video gener equals thumbnail, we'll say. And video. Video thumbnail time equals let's say, I don't know, five seconds. And now the poster should update to reflect the different timestamp that we've said to select the video poster from. and we can do more with this.

We can leverage image X's image rendering API to [00:04:00] add watermarks add blurs. So for example, let's just say I wanted to blur the poster for whatever reason I could say, and blur equals, I don't know, 90. And now our poster should be blurred. And you can do this with any of the imaging s rendering api.

Parameters, but it can be pretty cumbersome to have to do this for every single video on our page by hand, right? Copy the source, paste it into the poster, change the format parameter, add the video gen generate parameter. So why don't we do a little bit of trickery with JavaScript to have this done automatically for this?

Let's take a look at how that works. So we're gonna go ahead and remove this and save, and we're gonna go to this index JS file that gets imported into our HTL file. In here, all that we're doing is storing a reference to the diviv that holds the video tag, adding a resized observer to that tag. And inside our observer, we're going to store a reference to the player store, the current source, and [00:05:00] then do some fun stuff.

All right, so let's write that helper function to automatically generate images, thumbnails for us. I've got one whipped up here for the sake of time it's ready to go. Let's run through how this works. It, the function accepts a source and a string of parameters. And so if the source argument is defined, we're going to store the url, delete the format parameter, set the video generate thumbnail parameter set.

The auto format parameter out of format is an image rendering API perimeter that will pick the best image format for the browser in question. And then we'll check, Hey, are there any extra parameters that we wanna append to this imaging rendering API parameters, like that blur parameter. And if there aren't then we'll just return the string.

But if there are, we'll append them to the string. And so that's how we are going to do, go ahead and generate that thumbnail url. Now all we need to do is go into our resize observer and say player dot poster is equal [00:06:00] to generate. URL source. We don't have any pers to use questions that still will save.

And we refresh. We should be able to see that poster automatically generated. But what about this pers argument? What about those images rendering API parameters? We could define them in this JavaScript file and have them apply to all our video. I think ideally what we'd want is to set them on the video themselves.

So for example, let's imagine that this was a blog post and we wanted the blog post title to be on the video. Each indivi individual video should be referencing its own parameter at that point not one shared parameter configuration. So maybe the best way to do this is just to say posts on here and define some poster parameters.

So we've got some saved. Let's. what we can use. Let's go ahead and use these now. These poster pers are going to change the video thumbnail. Time to be two seconds. Two seconds. It's going to add [00:07:00] a watermark to the top right, and it's gonna set that watermark to be a base 64 encoded URL of an image which is the images logo.

So right now, this shouldn't do anything because the video tag doesn't know what to do with this attribute. It's a custom. You, we need to go in here and tell her what to do with that attribute. We'll store a reference to it, let say cons, poster brands, the sequence to GLA attributes, and we need to access the poster brands and store the value.

So now we can pass these post brands to our function and hopefully if we've done everything correctly, they'll get applied to our poster and we should see that images watermark. There it is on the top right hand. With that two seconds video from the video. So like that as thumbnail. So that's a really quick way to use the Image XX Video API to automatically generate posters for your videos and layer those posters with the Image XX Rendering [00:08:00] API to do some neat things like adding water marks.

Alright, now let's take a look at how we can use the Image X Video API to generate a gift from the video and have that gift play on mouse. Hover over the. So we're gonna use a custom attribute, just like last time we'll say gift preview. And obviously the player doesn't know what to do with that yet.

But that's okay. We're about the tell it what to do with that. So just like before, let's use a little helper function here to generate our gift url. And now all this is gonna do is take that source, delete the format parameter, and add the video generate gif parameter. This is what's gonna tell it to generate that gift for.

And then we're gonna use the video gif end parameter to tell it about how many seconds of playback to end after. And use the video gif f ps to give it a frame, right? And then we're gonna return the string five euro off. We need two more helper functions. These are gonna help us determine whether or not the GIF should be shown.

So if the videos been played, or the video gif video generate gift per parameter has been, We [00:09:00] shouldn't display the gift, so we'll use two hopper functions to help us establish that. So gift should play. He's gonna check for the presence of the attribute, and it's gonna check if the video hasn't played at all, and it will say false if the video hasn't been played Otherwise, it'll say, Hey, yeah, go ahead.

You can definitely play the gift. G should end. It's gonna check if the attribute has been removed or if the video generate gif part of the poster, the parameter has been removed by some other side effect, and it's gonna tell us, Hey yeah, the giv the gift should definitely end in these cases.

Otherwise none, no, the gift can continue to play. So we use these two hyper functions to attach this functionality to our player. So we'll define one more helper function. Called Attach gift to player. Now all this is going to do is it's gonna check if the gift should end or the gift should play.

So if the gift shouldn't end and the gift should play, go ahead and update that poster. Otherwise set the poster to what it was before, which was generate image. Thumb are u r l. The last thing we need to [00:10:00] do is use this function in our event listeners. So we're gonna go in here mostly player at event, listen.

And say mouse winter. And we'll say attach the player and we'll say player at event listener, and we'll say, mouse leave. And we'll get, say, attach the player here. Cool. Now, unfortunately, the simple browser isn't going to show us the mouse events. So if we hover over stuff, you won't see anything happen.

But that's a limitation of the simple browser. Why don't we just open this up in a different browser and see what that looks like. So we're going here, put this on the right hand side, hover over the video, and there's our gift playback. And if we press play, it won't rep show that gift over the video.

If we refresh and we hover over again, there's. That's just a quick demo of how we can use the images video API to generate gifts on the fly and set them as the poster [00:11:00] on mouse hover. And there's a lot more we can do with this api. And there's also a lot of ways that we can plug in this functionality, not with just our little custom player here, but with most of the players.

That you know of, you can use the ImageX video API with almost any player you can think of and are already used to. So here, for example, is video js. Video js has been around for a long time. It's a popular player. And what we've done is we've used those same haler functions we defined before and attached them to this player.

So now when you hover over the video, you should see the GIF on hover bringing to play, and you also have that watermark on the top right hand side corner. Of course, you can play the video and you'll. It plays just like it did in our little custom player. And you can also use this in something like the UX player.

This is a newer player but it's future rich and we've hooked it up with the same helper functions to get that give and hover, to get that thumbnail generation and again, It's pretty similar experience, but on a player that maybe you are more comfortable or familiar [00:12:00] with. All right, so let's take a look at what we can get out of the box using IX Player.

So you'll remember that we had the gift preview functionality. We had that auto postal generation done using the ImageX video api. IX player brings it to you out of the box here. We've set the gift preview attribute. We have that poster automatically generated to that two second mark. And when we have hover over where you get.

But we have some other neat tricks under the hood When we press play and you hover over the timeline, you'll see that the thumbnails get generated for a timeline. So the imaging video API is automatically generating those. That v t filed those thumbnails for us. We can also do some other neat things with the player.

So the player comes with a lot of customization out of the box. We can, for example, play with the primary and secondary colors. So the primary color is the control colors. I wanna change those to be an images orange. Let's make sure to add that hashtag in there. And when we say we should see that update to be orange, we can also set the secondary color.

Let's say an image X blue, and we'll see the hashtag. And we should [00:13:00] see the control bar turn blue. We can do even more customization. So if we head on over to the IX player CSS file, we can actually, for example, hide all controls. And we do this using a CSS variable. When we press save, the controls are gone.

And obviously you can still press the video and have it start, but now the controls are gone. We want them back. We just save that and the controls come right back. And there's a lot of targeting we can do here. For example, we could say, think it's bottom play button, for example. And you said that to none.

So this will only hide that button, play button on the left hand side. You can see it's gone now and if we comment this out, it should come right back. And you can do that with pretty much any of the controls that come with the player out of the box. So that's some of the stabilization you can do. You can do a lot more.

But IX player also has some very neat web performance focused features. And let's cover those right now. So let's talk about lazy loading. Lazy loading is when you want [00:14:00] your package or your JavaScript bundle in question to defer some of the execution until. The browser's ready for it or until it affect the user experience the least?

There's a lot of tricks you can do this you can use to make video very responsive. But one of the neat ones is to defer requesting any of the video assets until it's a certain percentage into the view port. And we actually export a lazy version of our component to make that really easy for you.

So if you import iPlay lazy,

From 

next play, react lazy.

Then you can use that component and lazy load it to only when it's in the view port. So we can do that now. And we'll just cheat a little bit. We'll say, imagine there's a layout where this player in question was way down on the bottom of the page. We wouldn't want that to request video. Away. We want that to wait until it's [00:15:00] in the view port to make that expensive file request.

So we'll say style and we'll say high tier of 500. That should push the second player way down. And we also want to give this a different source, so that's not requesting some cashed file. It's requesting a whole different video. Which should trigger a separate network request. So now when we save the page and we scroll down, you should be able to see, and I'll refresh just to make sure that only the top video actually gets loaded.

And when we scroll all the way down is when the second video will get loaded. , and there it is. You it's light, but you could see it, right? There was a square black box. And not until it was in the viewport did it request the poster and actually make that first metadata request and that first video chunk segment request.

And there's even more optimizations we could do here. For example, it loaded the metadata, let the video, so it loaded the video length. It loaded some information about the aspect ratio. It loaded all kinds of information from the [00:16:00] Maita. And that's a pretty inexpensive request. But if you have a bunch of videos on the page let's say a hundred, right?

All those made of data files could become a little expensive. See, what you could say here is change preload behavior. You could say preload, and we'll set this to none. And so now what happens is when the page refreshes, you'll notice if we scroll all the way to the bottom, you won't even have information about the aspect ratio or the video time or length.

So we scroll the way down. You'll notice it says zero. And we also don't have any of the aspect ratio information. So we have that, some of that funny letter boxing happening because what we're doing here to avoid the letter boxing on this talk video is saying, Hey, we expect the video to be this aspect ratio.

Go ahead and size yourself appropriately. We do this using css. But since we don't have that metadata, we can't do that. So that's a little bit of the payoff, right? There's some. Funny business going on in terms of behavior before you press play. But once you press play, everything adjusts. But again, the trade off is better page low times, especially if you have a lot of players on the page.[00:17:00] 

And that's just scratching the surface with what IX player can do. And ESP especially want to give a shout out here though, to the folks who built MO'S Player. We built a ton of this player on top of Mo's Player and Media Chrome and without their having. It would've been impossible to do it.

Also, what I biggest shout out to the folks at video js, who, way back in the day made players be as good as they were and set the standard for the rest of us. If you wanna play with this, go ahead and check it out on mpm ImageX IX Player, feeding the React Player it's images ix, play to react.

You can check us out on GitHub. We're open source and always looking for contribu. So thanks so much for listening. Appreciate your time and if you got any questions, stick around. We'll be around for a little bit for questions and answers. 

**Brian Rinaldi:** Thanks Luis for that great presentation. And we are here now live to, to chat about and answer any questions the audience might have.

Actually, we did get a question in the chat, so I'll get to that. They were also [00:18:00] very fascinated by your tooling and the zooming in and out. That was very cool. So a lot of discussion about that. And that was actually, was that the simple browsing thing? Just to answer that is somebody mentioned the simple brow?

Okay. 

**Luis Ball:** Check that out. So that's, it's built into vs code at this point, but yeah, definitely check it out. It's a lot of fun when you're prototyping and stuff to, not to switch back and forth context. Yeah. 

**Brian Rinaldi:** Nice. Okay. Eric was asking, okay, so he said what he was gonna ask about lazy loading.

Does this help avoid using a media facade wrapper for media embeds? What vitals ask about this for YouTube video embeds 

and the like. 

**Luis Ball:** Okay, so media facade. I'm not familiar with what he's getting at there. I'm not too sure. But what was the second part of that? 

He said that like for web vitals, they ask about this for YouTube video embeds that that you avoid using a media facade wrapper.

I don't, I'm not exa, excuse me. He put facade in quotes. 

**Brian Rinaldi:** Oh, okay.[00:19:00] . I think I understand. I'm gonna guess what they're asking here. What I think they're asking is for YouTube and embeds, because that usually comes with its own ui. Like you don't wanna rewrap that with another ui.

Yeah. The use case for this 

**Luis Ball:** player is very much not like YouTube embeds. If you're trying to shift the YouTube UI. Stuff is gonna break. But if you're more concerned about performance in terms of those YouTube embeds are quite heavy. And you don't want to have to, serve all that stuff on your page because it can hurt your pa your page scores.

Like part of the idea behind the lazy loading is exactly that, right? To help you avoid the page court hit by loading all these embedded players all over the page, right? Only loaded when the view port is there only loaded on click. That's the kind of stuff we want to enable for people.

With the lazy loading. Yeah, hopefully that answers that. 

**Brian Rinaldi:** Okay. If Eric's in the chat and he wants to follow up on that question, we have some time to answer questions. We got, we, we got a little bit of time here, so I wanted to get into, okay. We actually talked about this a little bit at the last jam [00:20:00] dev, but there's, Typically as developers, I think a lot of us are used to your typical mp4 and coding.

But obviously there's a H L S, which, can you get into a little bit about the difference between H L S and MP4 and why H L S is better? 

Definitely and 

**Luis Ball:** HLS is better for a lot, if not the majority of use cases, but not all of them. If you're very concerned about initial quality and you have a short video, you probably wanna do mp4.

But for just about everybody else, you most definitely wanna do HLS because of something called adaptive bit rate streaming or abs, right? So what that allows you to do is have your video. Adapt to the network conditions while it's displaying. So if you have somebody like, taking the ferry on the way to work, they start your video with a really good connection about halfway on the ferry.

Their connection gets really slow. Your video can change the resolution on the fly to make sure that there's no buffering. It just continuously plays. And then, we will upscale again when they get a good connection. That's the kind of the stuff that ABS allows you to [00:21:00] do, but encoding your videos for that manually can be cumber.

expensive and difficult. Which is ultimately why we've enabled HLS encoding essentially by default to any video you upload 

to images. And so when you request your video, it will default to HLS unless you add that format parameter and say, you know what? I really want that mp4 actually. And, the player has LS support.

And the same thing with the the IX video, which is essentially just a very simple video tag with LS support built in. Sohl s is important if you care about minimizing the amount of data that has to be sent to the user to watch the video. And you, if you wanna optimize for, unstable connections or weaker connections or connections, that can change over time.

And that can really help keep people engaged. Did a great study about, what happens when there's even just. Additional buffering event. It doesn't even have to be a second, it's just a buffering event. So a single buffering event is, can lead to something like, I think top of my head is like 49% abandonment on a video.

HLS will help you cut that down. Yeah. 

**Brian Rinaldi:** Yeah, I can see that. I know myself, like even when I do get that framework the [00:22:00] drop in quality, I'm, I get frustrated. I'm like, what? My connection's fine, and often quitting the app and stuff like that. So I can see yeah, the buffering is even worse.

It's just like a okay, I'm not gonna watch. You also talked about, , obviously you the player being available as a web component. Now, the, one of the things we're coming that's coming up repeatedly, I think in this conference is like the ability to drop those web components like a web component into other frameworks like Like 11 has Web C and other tools like Enhance, that we're gonna talk about later is all based on using web components.

Does that is I haven't obviously tried the player with those things. Does that make it easy to drop in there for those things? Have you tested it that out with any of these newer frameworks? 

**Luis Ball:** Yeah, so I can answer in the definitive for part of the question and for the other part of the question.

Yeah, it's a web component and it should work in pretty much all the major or popular frameworks right now. So react spell kit [00:23:00] view and next js. And the way we do that, the not to get too technical, but is. Building off of a lot of the thinking around shimming, the window for server side rendering.

A lot of the thinking around how to do that without breaking other packages, we have to do the same thing. So like that allows us to do the server side rendering frameworks, if you will. And then as far as the other popular frameworks, it's just the web component using web APIs, right?

So as long as. , they don't mess with that. Then there's no reason why it should break in these newer frameworks. We're obviously still testing out in frameworks that we haven't had a chance to test them out in, but we pretty thoroughly tested this out and what we thought were the most popular frameworks right now.

We'd love to continue doing that for every framework that comes along. If it's a, if it's a web, a api, it should work. That's the. 

**Brian Rinaldi:** Okay. Yeah, that, that makes sense. Actually, I hadn't really even thought about the server side rendering part. So you said you didn't wanna get into technical details but tell me like a little bit.

Oh no, 

**Luis Ball:** I'm happy judge. Don't wanna, yeah, tell me. Don't wanna go too deep into that rabbit hole. Yeah, for sure. There's been some really cool and I'm this a talk actually today today or tomorrow [00:24:00] coming up about SSR and and web components which I'm very much looking forward to. But there's been some really cool innovation in that space about, making web components work on server site rendering.

Cause that's been a barrier to adoption for a lot of folks. Essentially what it comes down to is the window doesn't exist on the on. server, right? And so you can't, how do you build a web component out without window APIs or with, without the APIs on the client. And so some people will ship them, so it's just a no up, right?

You reach for, defined custom element and it just doesn't do anything. You have that, that that placeholder html if you will, just on the page, but it's not upgraded. Some people have gone even further and actually built. Those APIs into node itself. Like the package comes with a way to have that h acml be all parsed out for you.

So on the server, like you get the full like shadow dom, like everything in there, this things like the declarative shadow do API they're trying to come out with. But the simpler explanation here is I think the simplest person everybody's shooting for right now is a combination of templating and [00:25:00] shimming.

The shimming is essentially if the window isn't available to you on the server, if some of these APIs that web components need to exist aren't available, shim them and make them into the bare bones, even just no ops, so that you don't have any errors that will break the execution of the code.

The templating is a way to generate as much of the HTML as you can prior to any job script execution. So you can avoid things like content layout shifting and. GitHub template parts is one of the, one of the packages that does this really well. And what you can do there is essentially you feed it your template tag or your web component.

How do I say it? How to not say components. Your web component template, right? Your html and it will generate. An actual HTML tag for you from that. Sometimes they, a bunch of libraries do it differently. Sometimes it's a string. Sometimes it like actually shoots the stuff into whatever framework is outputting to the client an actual html.

But the idea is to render as much html as possible without [00:26:00] having to wait for the whole, the JavaScript bundle to execute, to even get those placeholder. Elements inside your world component. So for example with the lazy loading stuff one of the reasons that works is because even though the jobs script that has to execute to upgrade that custom element to be an actual player hasn't actually executed because it's right at the bottom of the viewport, like it's lazy loading.

You still have dom nodes. That you can style, you can still give them backgrounds, you can still give them any, pretty much any CSS property you can think of. And so that's like the bare minimum for SSR is at least when the H CML gets sent from the server to the client, it knows what to do with that.

With that part of your webpage so you don't have that nasty content layout shifting. You can give it aspect ratios, you can give it minimum heights. And so that's the starting point now where things are going in the future is really exciting. Like you hinted at there's a lot of tooling coming out that will make the templating a lot better, and especially as that spec starts to stabilize a little bit[00:27:00] I said a lot of 

**Brian Rinaldi:** words.

Hopefully some of that was clear. No, yeah that, that makes a lot of sense. And even though it's probably like way over my head in terms of, I haven't done a lot of web component development, but I think the talk you're referring to is actually today, at the end of the day Simon McDonald's doing the, that's the enhanced framework that came up earlier.

it's gonna be talking about like the ssr with web components, which, cuz I think that's all very new. I think I haven't, it seems like not a lot of frame frameworks necessarily handle web components in ssr, which is one of the things that makes that one unique. So it's interesting that you all have already optimized for that aspect of it.

Pretty cool. And I guess, Another question I had was you talked a lot about video, but obviously you all do images too. So all of those, like those image manipulation things that you're showing for video, I can, I could probably, I can use those for images as well. I'm certain like [00:28:00] the being able to do layover a graphic or add text to an image to like generate banners, for instance, on the fly or things like,

**Luis Ball:** Yeah. So anything that's that you saw there, you can definitely do to your images as well, right? So if you, anything that lives in your asset bucket, if we will, right? Video or image will get consumed by us. And so if it's a video, you can use the video api. But if you're generating a poster using the video api, then you can use the same APIs you've been using with images to do things like add watermarks, superimposed and layer images.

Change the color, use the auto. Parameter to like, make your collars pop, things like that. There's a lot of really powerful parameters that are accessible to you through the rendering api. And I can give you some examples of the crazy things that people do with it.

Like some people have rolled their own, like OG image generation, the OG image being the image that like social generates when you share URLs, right? Some people have rolled like an automatic OG image generation. all by just layering our prams a certain way. And some [00:29:00] people have done things like swap out car colors on the fly by, using masks and watermarks correctly on our end rate stack.

And so if you get a creative out, you can, you creatively that you can do some really interesting stuff, which I think if you have ever had their hand roll your own like YouTube thumbnails or try to ab test click through rates for your videos, I think you'll appreciate how nice it is to be able to, on the.

Update those posters in response to that kind of information that you're getting, whether they're having to bring that thing back to Photoshop or something and update your poster image. 

**Brian Rinaldi:** Yeah, absolutely. I, I mentioned on the chat that like, one of the reasons I'm really interested in this is just because, technically I, so I've been running CFE Dev for five and a half years now.

It's been online the whole time. So like I have this fairly significant archive of videos. I think now 200, maybe 250 videos. And this is one of the things I, I think about, because right now I serve them all up as YouTube and embeds, or I have some older ones that are still sitting in video [00:30:00] that I need to move over and and I deal with some of the problems you brought up, which is okay, so my viewer comes and sees my video, but then they're actually pushed into a video by somebody else that has nothing to do with my site that I gain nothing out of.

It's is definitely an issue. I think a lot of us were trying to create content like this deal with. Anyway, that, that was, I didn't have a question there per se, , but just more of a comment, like I, I know the pain of dealing with the YouTube embed and and the Crowdcast in bed and all these other embeds.

Actually, if I get any complaints, When I run the lighthouse on my site, it's usually has to do with video player embeds. Is that something like, how does your player actually, now that brings me to a question. How does your player deal? Is it, is, how does it stand up if I do like a lighthouse or on, on that player?

Sounds like with the lazy loading, it should do really well. 

**Luis Ball:** Yeah I think it depends on how you configure it and what your [00:31:00] priorities are because sometimes taking a hit, and I know I'm got a hot take here, but sometimes taking a hit on a Lighthouse score is worth it if you really care about certain content coming first.

And so if you defer the first image on your page that everyone's going to see. To load and instead they see like a black box. That's not a great experience. So of course you want that to come first. So it depends on, and depends on how you configure stuff, right? If you wanna optimize for the, your page speed scores this player will let you do that to your hots Hearts content, right?

Load nothing until there's user interaction, essentially just a diviv tag with some css. But if you want to load just the metadata, the length of the video, the aspect ratio, and the poster you can do that as well and wait for the on click to actually load the video. . It all depends on what you're optimizing for.

Ultimately we wanted to put as many tools in your hand to optimize your hands, to optimize as much as you wanted for p page speed. But also, leave those escape hatches for folks who want that content there as fast as possible. So Makes sense. I think that people who are coming from things like YouTube embeds, people who are coming from things like video embeds will be really pleased with [00:32:00] just.

Customizable, that aspect of things are cuz I, 

I've done my fair share of video embedding and video creation in the past, and that's been one of my biggest frustrations too, is do I really need to go and wrap this in some kind of event listener for like on click to make sure it doesn't load right away because it's killing my page PETE scores, 

**Brian Rinaldi:** and actually I'm assuming same with the images, like you serve up. , like the format that, that the viewer can see. You use newer image formats if they're on a modern browser, but you can def fall back to older image formats or do you know, 

**Luis Ball:** so you're talking about auto formatting, right?

Yeah, for images, we do that with the format equals auto, but. And not for video. For video we default to hls, which has great support on mobile, not so great support on some of the desktop browsers. Which is why our player and our video component both roll with that support in case your browser doesn't have it built in.

But if you need a different format right now we support mp4, which. Pretty much, if not, I think we're almost certainly universally supported. In [00:33:00] terms of like newer formats. There's a lot going out there, right? You've got like dash and all this stuff and always keep an eye on that and try to expose as many as we can.

But for now we're LS in it before. 

**Brian Rinaldi:** Yeah, I was actually That's good to know. I was actually thinking that on the image side, because it is another thing that I get dinged for. It's oh, use WebP instead of jpeg. But, or ping. So I'm assuming it's just, it'll automatically switch that if you set it?

Oh, yeah. 

**Luis Ball:** Okay. On the image side, if you do the, if you do the format equals auto parameter it we'll intelligently decide, okay, what browser are you on? What's the best format to serve that browser and give that to the browser? 

**Brian Rinaldi:** Excellent. That's good to know. And it's, this is.

Keeping in mind this is it's a side project for me. So often this is my weekends is trying to figure out okay, what's the next issue I'm gonna upgrade on this site? This has been one that, okay, I, I know I need to do, I probably need to deal with it, the video, and I need to deal with the images.

And trying to solve that problem.[00:34:00] When you. Five and a half years worth of content to go back on to. It's not an easy thing to solve. But yeah, it sounds like this would be a way for me to do it. , 

**Luis Ball:** definitely. Yeah. And side projects usually bring the best feedback cuz people care a lot about 'em.

So if you run into any problems, definitely finish up on GitHub, always looking at issues for pull requests. . 

**Brian Rinaldi:** Awesome. That's great. I didn't see any more questions from from the audience I know it's, we're just a few minutes early here, but we are gonna go ahead and take a short break.

So thank you, Luis, for your presentation. I look forward to trying this out and seeing if it works for cfe. And I think, it looked like there was a lot of people asking questions about. About the player and such. So definitely it's something that's important to them as well.

**Luis Ball:** Yeah. Thanks so much for having me. I'm excited to, to hear more about what components Sr. And everything else. Happy to be here.

