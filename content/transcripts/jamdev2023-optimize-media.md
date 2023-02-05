---
_build:
  list: false
  render: never
---

**Colby Fayock:** [00:00:00] Performance is a super important part of any web or mobile application, and it's not just something we wanna check a box for. It's something that helps everyone from maybe somebody trying to browse your app or maybe just how much we're actually going to pay to allow somebody to so let's see what we can do from a media perspective.

I'm Colby Fayock. I'm the one hugging BB and Kylo Ren. Over there, I help others get the tech out of the way to solve real challenges with the web, I work with the dev community by building educational content and working with the dev community as a developer, experience engineer with cloudinary. You can find me pretty much anywhere on the web by just googling my name as I'm the only one in the world.

So starting off, let's take a look at a few examples of media and everyday websites where we can kick it off with Amazon King of e-commerce, where they use images to showcase available products and categor. Here we have Star Cadet, where I'm a big fan of their final space merch. They take advantage of gifts to display video like category and product images.

It's a [00:01:00] bit more of a creative approach, taking a very static medium and making it exciting. Hashtag renew final space, or NASA exploring places that are out this world where we can get high resolution images from space, which is just mind blowing. Or something fun like Giffy, where we can share our reactions with an animated image who can't express themselves with Michael.

Now, as you might imagine given this talk, we're focusing on media for this kind of thing. We're images and videos, and let's not forget about our audio friend. That gets left out quite often. It's awesome to be able to enjoy these large images and gifts on sites. It comes at a cost, which we'll talk about soon here.

So what can we do to help reduce that cost? You might be wondering where does media fit into my applic? Everywhere. Of course, it's part of the web, whether it's a simple profile, avatar and embedded video or an interactive experience, you're likely using media in some way. But we're here talking about the JAMstack, so let's see how it fits in there.

Starting off with your web app, we have some crucial components like the page itself, which is [00:02:00] ultimately HTML rendered in the browser that might or may not be built by a framework. But then we likely need some kind of dynamic data where we could use SSR. I like to deploy pages statically to reduce the overhead improved performance, so we can make any API request to the browsers that need to hydrate any kind of personalized information for our visitors.

Or better yet, maybe we can do that in an edge function. And then we have our media, which plays an important role in providing visual context, helping people better understand what you're talking about or what you're trying to sell, but also as a way to be creative, creating engaging experiences rather than just a bunch of text on a page.

but okay. That's pretty basic. I've seen images and videos on a page before. Why should I care? This is where we come back to the cost that we talked about earlier. Let's take e-commerce for example, where it's one of my favorite types of sites to work with. Conversion rate is the percentage of your traffic that actually buys something.

There's a ton of studies about how websites be directly correlate to conversion rate. eBay, for instance, found that a half a [00:03:00] percent increase in their conversion rate with a 100 millisecond low time improve. And Port found the same correlation with their data, where they have a site that loads one second, has a conversion rate of three times higher than a site that loads in five seconds.

Or a site that loads in one seconds has a conversion rate five times higher than a site that loads in 10 seconds. So that means that while a bunch of images and videos are going to be great for our user experience, that media is going to take up the vast majority of that size. So if we don't pay attention to how we're delivering it, we're going to bloat our p our pages, and des and destroy conversion rate.

So what can we do to help actually optimize our delivery? Let's look at some examples of images to start off. While JPEG is a great option, there's mo more modern formats that can help us deliver high quality images that reduce sizes. WEP and AIF are two great options, and depending on that image can bring some drastic reductions in size.

We can also compress our images to a point where we're not actually impacting the visual quality. Maybe it won't matter for this tiny little [00:04:00] thumbnail we see here, but we wanna display our images big and clear. We can let tech automatically decide how much to actually optimize it. That way we can optimize it as much as we can without a visual difference, and we're not over optimizing and we're not wasting precious kilobytes and downloads.

If you're working with high quality imagery, your source files might be huge. If you serve them as is, the browser has to resize them down anyways, so you're just re, you're just wasting bandwidth, resize only to the images sizes that you need. And don't try to just crunch an image just so that it's smaller with a file size, you'll end up with super blurry images or pixelated images.

Modern image delivery can give you the exact SA sizes you need on the fly. So take advantage of. Bring this all together. We have some pretty amazing results using modern formats, letting tech automatically optimize our images and serving our images and sizes that make sense for our web apps. We were able to slash this particular example from Unsplash down from 4.3 megabytes to 51.2 kilobytes, all without sacrificing quality.[00:05:00] 

So hopefully I have you convinced now that this is actually pretty important, but how can we work with this in our JAMstack application and how can we actually improve our developer experience and ultimately delivering better experiences to our visitors? This shouldn't be new to anybody, but regardless of which framework you use except njs, who actually yells at you inside the linter, that you can actually use HTML image tags inside your framework, importantly, including a wet height and an alt in addition to the location of the image.

Not too different is the basic video tag, which has a lot more options that we can get into, but ultimately you need your source and a width, a height. The more interesting thing is sourcing these images and videos where this could come from a variety of sources. Could be a headless C m s or a database.

Maybe all your data is pulled together in a single data layer, but ultimately the image and video tags you're using dynamically get their sources from the. Where now maybe those images are videos and wrapped in a component. This is JSX, which you might be feeling familiar with in the React world.

We're passing that data right into our video and [00:06:00] image tags, but when does this happen? What's connecting the dots? This is where we start to think about the framework or library where we have a ton of options available to use, and it doesn't have to be a fancy one. We don't need to ship a huge bundle of JavaScript to the browser, especially if we're just dumping static.

But we start to see the higher level flow, where we have the location, we're storing the media references, we have the framework that's doing the hard work of pulling that data into the application. Then ultimately using the H tml, we know and love to take that data and put it on a page. Now, this is a pretty linear solution, but it's only one solution.

We could alternatively build our site by using local files from our project. We don't necessarily need a database to do that, but then once we deploy to Netlify or something, we can install the Cloudinary plugin, which auto uploads on that build. Or we could even orchestrate whatever external data we have, whether it's Cloudinary in a database where five other services, pulling that all together in our services or data layer and having a singular connector into the framework of our [00:07:00] choice, where the point is, we have a lot of options about how we pull this all together depending on our needs.

But all this is making a big assumption that somebody somewhere in these solutions thought about optimizing your images and video. But as we all know, it's not safe to make those kind of assumptions. So peeling the back, the la, the layers of our stack a little bit, we can start to think about our optimization needs starting off.

We can do this manually as much time as it takes. We can work through our folder of a hundred images and be happy with our results. This is where this is going. This isn't going to scale and beyond all the work that actually needs to be. We're back to assuming that everyone who adds an image to our project is actually going to do this.

Maybe they're assuming that you're going to do this. Either way, this doesn't actually fare well. A better solution is to start to automate this. There's a lot of great cls and libraries out there to help out with this. Some that you can run on the same directory of images on your computer. Some you can actually pull in and script to run during your build and deployment process.

This works fairly well. You're [00:08:00] able to work through all the images, store them somewhere, and reference the optimized versions wherever that may be. You can even get smart with this. Generate a few sizes. You don't wanna go overboard, but at least you have. You don't have to serve the same high resolution image everywhere.

But again, this doesn't scale. Oh, your thumbnail size changed. You have to regenerate all the sizes again. What if you have two use cases where that the too small for the original? You can generate a new size within that mix, or you can sacrifice the quality with a small image or sacrifice the bandwidth with a big image.

None are great options, but you make do or do you make, do I see you over there serving blurry images to your visitors and icu? You over there serving bi images that are way too big for your visitor? But guess what? We can do better and we should do better. Let's again, start to list out some of our images where these are the source images and they're never going to change.

Someone can certainly upload more, someone can even delete them, but we're not gonna modify them instead of manually creating [00:09:00] new versions, whether that's by using some kind of gooey or by running a script manual, as in we're managing creating those different vari. Let's just throw a little URL parameter on there where we have Q Wato or automatically figure out the best way to compress this thing.

We're not touching our source file, but now we're saying let's serve an optimized version of this, and instead of creating those different sizes that we may not know what they'll actually be a week from now. Let's again just add some parameters. Setting W or width to 800 or H or height to 600. We're getting the exact size that we specify.

Again, not touching the source file, but serving an optimized resize version of it. Technically, we don't even need the height. It will automatically scale to the original aspect ratio. We can of course, crop it to a different size, but keeping it simple is always a. And we saw earlier that by using a modern format that on top of optimizing our image and on top of resizing it to a responsible size, we can drastically cut down the size of that image.

This is something that's [00:10:00] especially tricky to deal with at scale. So let's just tack on another parameter. Here's F Auto or format of auto where we're going to see that we're gonna get the most efficient format for that particular asset. On top of that, we're going to automatically detect what formats can visit for your actual supported browser.

Not all browsers can support every modern format, and we want our brow images to work on all browsers. So this is important to make sure that we're actually being able to do what we can where we. We're checking all the boxes, delivering in modern formats, compressing as much as we can without distorting the image, and we're serving in responsible sizes.

Now, the nice thing about all these controls right inside the URL is you can swap them out, particularly the width or other transformations on the fly because the URL is our headless a p i. So the developer or implementer can control these sizes and use exactly what's needed for the applic. And for the record, all this works with video as well, or animated images, which can potentially have huge savings given they're naturally usually going to be bigger file [00:11:00] sizes.

So how does all this work? Expanding on our example here, surprise, I'm using Cloudinary for all of this, but when we serve the image on this page, it may or may not actually exist yet. So first Cloudinary checks to see if the image. If it does exist, cloudinary retrieves that from cash. We don't have to wait for any processing.

It gets served fast from the cdn, but if it doesn't exist, Cloudinary processes it to generate that asset. It uses those parameters that we talked about as instructions for how to actually build that image or video, but once it completes, it stores it in cash for later use, and then it delivers it similarly from the Cloudinary cdn, meaning this only happens the first time, so all your assets will be served nice and fast for the vast majority of your visitor.

Now practically, we wouldn't expect you to manually construct that url, even though I know some of you cool cats out there are doing just that. Yeah, I'm looking at you, but we can use SDKs and integrations to make this much easier. For instance, we recently launched Next Cloudinary as an easy way to work with [00:12:00] Cloudinary and an Xjs project to start instead of billing H tml image component or the built-in next image C.

We'll use the CLD image component where we can pass in the width height and the alt, but now our source is going to be the Cloudinary image id, which will give us an image RO url that looks something like this. We're breaking this down. We see the width and the source where the alt gets used in the resulting image tag itself, so we wouldn't actually see that in the url.

But if you're wondering what's up with the height, Cloudinary will actually preserve the aspect ratio by default as that parameter. So we don't need to pass it into the url, but we still need it to prevent layout shift in the image tag, which is super important. Layout shift is when something like an image or a video is loading, but the browser doesn't know the size of it before it actually loads.

If you don't add the height, it doesn't know how much space to save for that particular area. So before your image is load, you might see some content that gets shifted down as your images start to. Now, you've likely [00:13:00] seen this happen in the past on websites due to ads, which is pretty annoying. So we can avoid this by adding our height.

Next, we can start to add some more interesting features. Say I have a bunch of images. Images and different wits and heights, like this space jellyfish here, that's 800 by 600. What if I want them all square? That's yet another crop that I would have to manually add or script, or I can dynamically crop. By setting my dimensions in a square, setting my crop to fill, meaning it'll only take up all the space inside of the square, similar to a css, background size cover, and a gravity center, meaning will just anchor to the center of it.

I can now easily get a crop in my image and to the scalability factor, likely you're looping through a bunch of your data to show these images. So this just works with all of your image. And this works similarly, if I want a smaller image such as if I wanna show a thumbnail of this image. This doesn't just resize it in the browser.

This delivers a smaller image. This extends to responsive sizing as well, which using the next JS image API will automatically [00:14:00] generate responsive sizes based off of your configuration. And honestly, there's a lot of other things here that I can talk about. A lot of cool, interesting features like color replacement and background removal.

How I just. So we're gonna check out some benefits of real world image optimization. We'll serve this image up exported straight from Illustrator inside of a new next ass application. As you can imagine, it won't be the most optimized image in the world, but we'll see how we can optimize it, crop it, and resize it, and even give it a little bit further and have some fun with it.

Let's dig in. All right, so digging in. I did a little bit of prep work for this where I ran npx create Next Application, where really this is going to give us a fresh start for a new next JS app where we can see, now I'm running npm Rund dev. We have my local server, which has my next JS application.

And if we start to look inside of the code, , we can see that I have my index js page and really nothing fancy is going on here. It's really just the standard next JS page. So what I'm gonna [00:15:00] first start off by doing is I'm gonna just clear out all the content inside of the page here as I really don't need any of this and it's just gonna get in our way as a distraction.

So first I'm gonna clean that out. But now let's head back over to our browser, where, what I ultimately wanna do is I wanna load up this poster, and this is the jam dev poster image. Brian and the team were gracious enough to send this over to me so that I can use it as part of my demo. But what I ultimately wanna do is I wanna load this in my application.

I'm gonna load it in raw. We can see that it's 1.35 megabytes is a png, and we're gonna see what that looks like when we're actually loading into the page. But then we're gonna see what we can do to optimize that. Now, as we talked, Images can come in from a variety of sources. We never know what we're gonna actually get.

So realistically, we might get raw, huge images like this coming into our application. So what can we do to automatically make sure that we're always optimizing? So first, let's actually get this in the application. Now, heading back over to N AEs, the first thing I want to do is just simply load this on the page.[00:16:00] 

So I'm gonna copy the url, and to start off, I'm gonna use a simple image. So let's add my image and let's say the source. I'm gonna add it on a new line and bear with me. My computer is a little bit slow right now, but let's say my image source is that my width, I'm gonna get my width and my height in a second here.

But just adding the parameters and let's say the ALT is a robot fighting off airplanes in a city with our closing tag. Now let's get that within the height. We have 1638 by 8 49, and now at this point, all this is going to do is load that image on the page. Now let's see what that looks like.

Already done it. Loaded up. We have our image. Now what I wanna do is open up the network tab so we can see realistically what's happening here and looks like One other thing I wanna do is by default it's going to just expand the size of the image. So I wanna just add a quick style to [00:17:00] my global style sheet.

I'm gonna say image where I want a max width of 100%. And I'm gonna set a height to auto just so that we can see the entire image the entire time we're working with. Perfect. So we can see what it looks like. And if I open up that network tab, let's see if it came in or if I'm gonna need to refresh. Yeah, I'm gonna need to refresh.

I'm gonna refresh the page so that we can actually get that image request in there.

Now we can already see that when that image is actually loaded on the page, we're already getting that size, even though we don't see it yet. We see we're getting that size of 1.4 megabytes. Now that's because we're just loading the image raw. It's just. Straight from Cloudinary. It's the png. We're not doing anything to it.

We're just delivering it as is uploaded into the account. And that's fine. Maybe that's the specific use case. But when we're building for the web or for really any application, we wanna make sure we're delivering as optimized of the [00:18:00] experience as we can, because usually people don't care about seeing pixels that they can't actually visually perceive.

So we wanna make sure that we. Reducing that bandwidth in the actual page load as much as we can to deliver a nice snappy performance application. So what can we do to reduce this? Let's check out next Cloudinary. So to start, I'm gonna need to install next Cloudinary, and it's available on npm where I can now run in my terminal npm install next Cloudinary.

What that's going to do is go and install the next Cloudinary package from M P M. Now let's let that run in the background, but in the meantime, for configuration, there's only One other thing I need to do is an and that's set up my Cloudinary Cloud name as an environment for able, so I'm going to open back up my code editor and in the root of the project I'm going to add a new file dot ENV Local, and this is going to be my environment variables.

Where once that's up, I can run next or add next [00:19:00] public Cloudinary cloud name, where I'm saying that I want this to be a publicly available environment variable, and it's going to be my cloud name. So that's gonna be, in this instance, I set up the jam dev, but ultimately the next Cloudinary library is going to look for this environment variable so it knows where to grab the referenced images from.

Otherwise it won't know where to grab those images from. So this is all we. But now I can head back to my terminal, which hopefully by now it's now installed. So I'm gonna spin back up my development server and pm run dev. And now let's see what we can do to actually load in our CLD image component, which is going to help us load our poster.

So back inside the Next.js application. Let's check the terminal out to see if it's still loading. We're good. Gotta refresh the page. But back in the actual code, what we can now. Is I'm going to replace the next image [00:20:00] with a des structured C L D image from next Cloudinary. . Then I'm going to scroll back down to my image tag, and I'm gonna simply replace the image tag with C L D image.

And then I have one more thing I wanna do to the image tag is I'm gonna remove all the URL parts from this actual address. Now the next library, next Cloudinary library can parse some URLs. It needs to get a little bit better at that, but ultimately being able to pass in our public ID is the most confident way that we can be sure that we can construct the image URLs.

To point to the right image. So we're gonna pass in that public id. I'm gonna hit save and let's head back over to our account or to the next as application. But let's see what happens when it reloads. I'm gonna actually force the reload to make sure that I get the image request popping up inside the network tab.

Now it might take a second here, but what's happening in the background? Is while n js is building that page, the c l d image component is now going to [00:21:00] construct the cloudinary URL all happening in the background. So we don't even need to think about that, but it's going to do so with the optimization parameters that we need, like we saw earlier in the talk, in order to deliver this image as performant as we can.

Now, as soon as we see that load, we notice two big things. Instead of the 1.4 megabytes we're now delivering. 119 kilobytes. That's a drastic difference. And the primary reason is because we're now delivering this as an avi. AVI is just such a more efficient format than PNG. And on top of it, we're just getting a lot of optimization efficiencies in here because we're using the quality compression as well, which is going to compress it to a point that it's not going to be perceivably different.

Now, this is without doing anything else. All we're doing at this point is serving it at its original size and we're serving. With the Optim automatic optimizations. Now that means that we could probably get even more benefit out of this. Now if we go back and we can see that we have 16 by 38 by [00:22:00] eight by 49.

Now let's try to do some math. I'm gonna just get a serve it at half, cuz I don't wanna try to do some fractional math on there. But let's see. 8 49, divide by two. Not going to add that half percent. I think a half pixel isn't going to break the bank here, but we can see. Let's see when that reloads. We can now cut that down by serving a reduced file size, which we didn't even notice a difference because of the view port that we're seeing in the browser.

We now cut that down even further to 35 kilobytes, and that's all because we were able to dynamically serve it at a smaller size than we were actually doing before. Now let's do some more interesting things with this. How about if I'm actually working with this image? I don't wanna show the entire thing.

Maybe I just wanna show the little robot, maybe just half of it. I need it to be in a square format. Maybe I'm posting it to Instagram, though. I think they take different. Dimensions now anyways, we want it to be a square, and I just want it to be focused on that robot. So what can we do to crop this in a way that's going to give us the best result?

So I'm gonna [00:23:00] head back over. I'm going to add my crop of fill like we saw earlier in the talk. And what I'm gonna actually do is take the same height parameter and add it as my width now. I can actually just make this whatever I want at this point, since it's gonna be a smaller and then cropped version of this.

But then I'm gonna also add my gravity. Now, if we saw before, we were talking about how we can center that gravity to be in the actual middle. But since our robot is on the far left side, we wanna set it to west. Hopefully the camera, if you're looking at this, doing the right hand signals. But our gravity, let's set it to the west because we want it to be on the West compass direction side of our image.

So we're gonna set that parameter and now let's look back inside of the browser. And as soon as that reloads, we can see that, first of all, because we're still now serving ultimately a smaller image, we're now down to 27 kilobytes. But we could see that we were able to just that easily crop it down to that square.

[00:24:00] That's the whole image. That's not just a visual. Impact of it. That's the image that's getting delivered. Oops. I don't know what I just clicked, but we were able to do that dynamically with Joe So's few parameters. That's what I clicked. So we need to get rid of that. So what else can we do with this now this is where we start getting into some of the fun stuff.

Now how about, I wanna add some text on this. Maybe I want to add the jam dev at the top of here. So I'm going to now go here and let's just add a property of the jam dot Dov, and let's see what. Let's get a load in the background, but as soon as that loads, we can't quite see it. We can see that it says something.

Now, by default, the text property we need to know where the text is going to be on the image, right? So at this point, it's really just going to slap some text on there and hope for the best. But the point is now we can control that and actually configure it to something that we're going to use. Now, I don't know all these parameters by heart, so what I'm gonna do is I'm gonna head over to the documentation where I'm going to [00:25:00] grab the text overlays.

I'm gonna grab an example of this where we're gonna use the overlays prop so that we can have a custom configuration of what this looks like. So back in my editor, I'm going to replace this text prop with the overlays. Now I'm gonna change cool beans with the jam.dev. We can probably get rid of some of this letter spacing and text decoration, though.

Those are certainly options that we can use. Let's change the color of the font to white since it's gonna be on a black background. I think. Now gravity, again, this is gonna be where we. Positioned in relation to the anchor. So the gravity in this case. How about we put it at the top of the image? I'm gonna say north.

And then for now, I don't need it to shift by the X-axis, but let's just bump it off. 50 pixels off at the top. I can get rid of the angle and we probably don't need this width either, so I'm gonna get rid of that. But let's just load this up and see what it looks like. And hopefully this font size is about the size we.

Now [00:26:00] once we head back over to the application, it's a little bit big, but now we can actually start to see the text and we can see how it's start loading. So let's just have this font size that didn't select for me. And once it reloads,

Let's ship it. This is our new poster image for the jam.dev. I think we can call this a day's Work Done, right? But no, let's do something else and let's do something a little bit more fun. So we of course could add a ton of different texts. We can add as many overlays as we want. Adding different kind of descriptions.

And this can be all dynamic. Maybe you have some different, you wanna create a bunch of variations for this for ads, or maybe you want to just create this dynamically based off of, maybe you can have some, whoever's attending the, as a virtual ticket conference here, you can add it there. But let's just do something different at this point.

How about, let's try to remove the background from this. So the cool thing is I can go back, I can set up a new prop where I'm just gonna say, remove background. . [00:27:00] Now when I go to. When this is actually starts to load. The tricky thing is usually if this is the very first time that you're loading an image without a background or removing the background, it's going to throw a 4 23 response, meaning that it's processing in the background.

So that's only gonna be the first time. But we can see that I did try to do this demo before, so it's re, it was able to reload based off of the version I created before. But now we can see that by just using that simple prop, we were able to easily remove the background from that. So let's add something else.

Now it just so happens that I have another familiar image inside of my account where I have this bliss background. Let's add this as a background behind our robot. So I'm gonna add an underlay, or I'm gonna specify my underlay as bliss, and that's all I need to do. And let's see what happens when it reloads.

We can see that my robot is fighting right in front of a field [00:28:00] graciously, and we're all the better for it. But we can see this is gonna be our new, the jammed out dev poster. We were able to do a lot of. Practical things such as crop, it, resize it just to the spec specific dimensions we need, but we're able to do some more interesting dynamic things like add the text to it.

We were able to remove the background. Now, practically speaking, this is amazing for e-commerce. Imagine if you have shoes or the shots of models where you want to be able to have control of the background completely unrelated to what the photographer is actually build being able to do for you. So this gives you a lot of options for how you can dynamically work with your images.

And video may I add when you're actually trying to work in these different projects?

All right, so this isn't likely the exact same image that you saw, but this is what I was originally going for when I created this slide deck. The cool thing is we saw the real world impact of loading our unoptimized images. We saw how easily we could optimize it with cloudinary and we, you can take it to an [00:29:00] XP level with some fun transformation.

If you wanna learn more about how to work with next cloudinary, check out the docs at cld.media/njs and it's also available on my GitHub. If you head over to space jelly.dev or youtube.com/colby faoc and search for Cloudinary. I have a ton of use case driven examples as well as a repository of straight up code examples using cloudinary and projects.

There's more to come and I'm also taking. And that's it. If you wanna learn more, chat about the talk as usual, I'm everywhere at Colby Fay. Also, keep an eye out for Twitter where I'll post some resources. Thanks everybody.

All right. That was 

**Brian Rinaldi:** a, that was great as always. Kobe's always so entertaining in his, the level of polish in his presentations is it's, it upsets me. I wish I was. Damn it, . I next year, I'm gonna have col back to do a presentation about how to pre-record your presentations , because he's, that's a great idea.

Yeah. And [00:30:00] on top of that, he'll, I'll also just hire him to create the assets cuz he'll just code it and generate it . So yeah. 

**Sean C Davis:** Put a Windows XP background on everything. 

**Brian Rinaldi:** Sure. Yes, exactly. Who wouldn't love that. So as we mentioned before Colby couldn't be here to answer questions, so we are just gonna do our best to like answer anybody's questions.

We're also just gonna talk about some of those things that like struck. From the presentation. And one of the things that initially struck me was, we've talked, we had a presentation yesterday about, about using bad images as well we're talking about today. Obviously it. . I know it's a big deal.

Like I run into this in my site. I've, I once upon a time when I did see a fe I actually had to pre generate, like I was spit out all the variations of the images, like you mentioned. That worked when I didn't have that many. But then as I started to do more, it just was a nightmare. And then I used the kind of pre-built pipes in Hugo, cuz the site's built in Hugo next he mentioned has that as well.

[00:31:00] But I think you. One of the things you notice is you hit that boundary of what does that image component do? Like mine doesn't like it serves up everything as a p and g, cuz that's what I told it to. It doesn't know that it should serve a different file format cuz your browser supports it.

Is this your experience. 

**Sean C Davis:** I've had a really similar experience. Yeah. In that you, it's like even and probably most of my experiences with next GS as well, and their image component is really powerful and it will process the images just like Hugo does and try to present them in a nice and efficient way.

But there's, there are a couple problems. One is that you. It might not be everything you need. Like for example, with Next, if you want to have that blur up effect, then you also have to have a base 64 reference to that representation of that image. But I think for me personally, the. The bigger problem is that you have to store all those images in [00:32:00] your repository.

And we've got a lot of developers here probably working on a lot of independent projects where you want all your content, including your assets, are probably just living in the repository. And that can, like I said Brian, it's like you, it's fine at first, and then you add the image every week for years and all of a sudden you've got all these images to the point where on a, I'm working on the.

Documentation site, it was like, okay, we don't want to store all these images or we don't wanna store all, we don't want to take up this much storage. Cuz then working with Git gets really slow. So now we're running them in these external processors before we're even bringing them in and letting next work with them and then doing this other stuff on top.

So yeah, just having a service, like a Cloudinary or an Image XX or whatever service that might be to . Yeah. To do all of that work for you. Sounds amazing. 

**Brian Rinaldi:** Yeah. And if you think about it, my brain initially is Stupid. Like in, in the sense of okay, don't, wouldn't I want those files local?

Isn't that gonna be better, like faster? But except that in the end, when you're actually getting [00:33:00] it in the browser, every one of these images is a request that needs to be fulfilled. That whether it's going to cloudinary or going to my, my, my netlify cdn, like it's, whether it's hitting their CDN or the Netlify CDN or wherever you're hosting your site, like it doesn't really matter where it's coming.

And it's, based on what Kobe said it's going to cash it anyway. So like really that whole processing stuff is like a first time hit, which. If I think about next, for instance, next, I I don't know all of the internals, but I know it's like all of that is done server side as well.

Anyway, like you have to actually push to a provider that supports next image like Versace, and I think Neti also supports Next Image and all that processing is done server side. So you're not like, you're not losing really anything. I'd almost probably guess that you're gonna actually gonna get faster images from a cloud area than you are gonna get from next SSR processing.

But I haven't done any testing of that. What's your experience with, cuz you, you have more experience with Next Image than I do. Have [00:34:00] you found it? Is there any initial like delay when you get that image and you have said you've used Cloudinary and other services. Do you find that's faster?

**Sean C Davis:** Yeah, there's definitely been a delay and I, you're saying you're talking about like caching the caching level and that's one of the beauties of a cloudinary is. You hit it the one time and unless you change that source, which I'm not even sure you're able to do that, the cash version is there.

I don't know this for sure, but I'm thinking that cash will regenerate in, in some build processes. Next may not do it, but I'm guessing other frameworks do as well. But yeah, Cloudinary has definitely sped up our process of delivery. And so good for the user, also great for the developers cuz we don't have to care.

The size of the image, we just take the screenshot, throw it in cloudinary, grab the dimensions, and then yeah, put it on the page and we're done. 

**Brian Rinaldi:** Yeah. Yeah. And I even now I use cf e as an example cuz it's like the [00:35:00] one, my one bigger side project and I've been, it's been running on Hugo forever.

And Hugo Pipes can process images. Obviously given the nature of Hugo, that's. It's all build time. It processes build time. It spits out variations of those images as needed for, however you specify them in the site. But it only does a single format. I don't know if you can actually specify different formats now.

I haven't tried it. This is, it's been a little while. But at least one of the things that I get ding done, like the web performance, like the lighthouse stuff, is oh, use newer. Newer image file formats because, and I can't easily do that if I'm right even this way.

Like it's a big process to go through and change all of that. While also supporting people who are on a browser that may not be able to support somebody's file formats. And, I don't know all the ins and outs of what browser supports what format. . It's, it is a big deal.

I think, this at least is an easy solution to say okay, I don't need to worry about it cuz [00:36:00] I'll let Cloudinary deal with it and like it'll serve up whatever image format it, it should that's best in this situation. And I don't even need to think about it. 

**Sean C Davis:** Exactly. I think that's one of the beauties of these, the, like this modern architectural patterns.

Everything's composable and stitched together. It's if you choose to bring this thing into your application, then it's your responsibility to do all this work and understand. So it's if you want to optimize images and you're responsible for it, you have to deeply understand how images work.

Where in this way, we can rely on a third party service, take advantage of all the work that they're doing, and those folks focusing exclusively on that. . And the other thing it made me think of, which it came up in a talk yesterday is that there's more you can do just in terms of what these images can become.

And it's not just about performance. And I thought Colby showed an example really great where he's at. He added the text, he added the background, and I'm, I got really excited later [00:37:00] in 2022 and next announced that. , they had this service to be able to more easily generate SEO meta images for your sites.

And it's a cool feature. But now seeing this presentation from Colby, I'm like but maybe we don't actually have to do all of that work. Maybe we can rely also on these services and give it some template and then let it generate these unique images for every page on our sites.

**Brian Rinaldi:** Yeah, I know. It's definitely something I've thought about. I actually want to go back and take the scraping process that , that queen ratioed in the prior one with because for instance, like I, I do a lot of Crowdcast and things like that, and they don't, so I was like, oh, this is, this would be really cool.

You could combine that with a cloudinary okay, I'm pulling all those files local and then actually push it out, use that net. Plugin where it automatically pushes them all to cloud area and then it's boom, image problems solved. I only have to upload them once. [00:38:00] Cuz right now it's okay, upload it to Crowdcast, upload it to the site, upload.

And yeah, so it, I think there's even more than just oh, hey I'm probably not the ideal person for dealing with optimizing images anyway. I know enough to like get them down. Something reasonable, but I don't, I'm not an expert on it. And then on top of that, I have to I don't even, once you add on the fact that I have to then upload this image here, upload the image there, when you're combining all these services, if you just have a single source of truth for your images, it can really improve your whole developer 

**Sean C Davis:** workflow.

Exactly. And they're, I think they're also thinking about, Again, not just the performance or the way that you can manipulate the image itself, but then how does that get presented and passed on to the user? And I loved the example and I think you made a comment right after with the layout shift.

It's you hear layout shift, you think oh, recipe, website or news site, and I'm just cringe. I'm like I hate this experience and I click on the [00:39:00] wrong thing. Oh, yeah. So I love that they're thinking about that as well. It's yeah, put. Image on the screen, and we know immediately it's gonna take up this amount of height and your stuff's not gonna move all.

**Brian Rinaldi:** Oh yeah. I can go on a rant about the, in the layout shift. Oh, I don't know how many times. And I get stuck in this perpetual loop where it's like I go back to click on the link. I tend to, and then I try to click on it and as soon as I do layout shifts, I'm like, again, got me again. How many times am I gonna do this?

Anyway yeah, I, I. These are all great and I, we obviously talking about images. Yesterday we talked a lot about video. And even he mentioned audio being in there is I think something, not everybody's dealing with audio that much. Some people are doing podcasts.

You might know some of these people doing podcasts, so maybe that's an option for podcasting and things like that. But just handling all your media in a central location to me makes a lot of sense. And it's been one of those things on my, like to-do list for cfe , let's get this all done.

So I stopped [00:40:00] trying to deal with it and not, I not dealing with it correctly. I think these are. It's not JAMstack per se, but it is, it's part of what we've been focused on here is part of what makes JAMstack like one of the things we're trying to do is deliver the fastest possible site that we can, using the tool, all these tools and services.

So images and media play a huge role in that.