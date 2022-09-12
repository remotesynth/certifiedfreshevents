---
_build:
  list: false
  render: never
---

**Colby Fayock:** [00:00:00] Images video and media are part of our everyday web experience. How can we take advantage of from an e-commerce perspective, make sure that we're delivering it the best we can. So who am I? I'm Colby FAOC I'm the one hugging BB and Kyla ran over there. I work as a dev experience engineer over at cloud.

You can find me pretty much anywhere on the web by just Googling my name as I'm the only one in the world. So we're gonna start at the top with the king of eCommerce, Amazon. And the first thing we see when we load this page is it's covered in media. It's a good way to showcase available products. So it makes a lot of sense.

This is the landing page of their fashion store, which probably looks similar for a lot of their top level landing pages. We have a large image that's intended to be showcasing a lot of available products. As we scroll down, we also have the ability to shop specific categories with images that represent that category.

Once we dive in, we start to see a grid of images [00:01:00] like here on the product listing page, the easiest way to browse a large amount of products is to put them in a list. So we put them in a grid and we can scroll through that. Once we're on our product details page, we wanna get a closer look and choose our options.

Ideally, this also means having several photos that show different angles of our product. Now not to pick on Amazon here, but they're not really doing anything necessarily innovative. I'm sure they AB test every minute detail of that page to make sure that it's not hurting conversion, which we'll get to later, but it's all very practical and fun, functional.

So how can we take our media to another experience level? Here we have star cadet, which I'm a big fan of their final space merch. They take advantage of gifts to display video, like category and product images. It's a little bit more of a creative approach, taking a typically very static, medium, and making it exciting glasses.

USA allows potential customers to get a firsthand look at what [00:02:00] glasses would look like on somebody's face. Buying glasses is hard. You want a pair that you're going to feel confident in traditionally you'd have to hope for the best and see what you, what they fit with a good return policy. But this gets us a step closer to making us actually feel like we're in a.

Or better yet I buy direct actually gives you a real time feed using your webcam. So you can try on a virtual pair of glasses moving around with you, just like you're looking at a mirror inside of the store. As far as the product page goes, you still need to have the ability to showcase your product.

People need to buy something and it needs to be very clear. So you don't wanna be over creative, but like Nike here, we can use embedded video as part of the experience to give people a better idea of what the fit of the product. As creative as some of that is, it's still fitting into that traditional medium, the wet is changing.

So what does the future of eCommerce look like? Nike recently acquired architect, studios, artifact, studios, rather a team who creates [00:03:00] shoes and collectibles ready for the metaverse. It's similar to the collectibles game that Nike has always been a part of, but now as an investment into the digital.

And that wasn't, Nike's only foray into the digital world. Nike launched Nike land for Roblox. It's an experience that allows you to connect to a digital version of Nike HQ. They also have deans sports and community oriented features. But they also have a showroom that lets you check out special Nike products, giving you the ability to deck out your roadblocks have avatar with exclusive gear.

While we still have a lot of time before this kind of thing actually becomes mainstream. We're already starting to see some really creative solutions. There's a lot of change happening and it's happening really fast. Let's talk about some of the more practical ways that we can look at our media today while the metaverse is likely coming at as fast, we still need to maintain an effective web two point.

For some of you, this might seem like an easy one. It's super important to make sure you're providing large and clear images and video to showcase your product. [00:04:00] It's especially helpful to make sure that you have more than just a single wide shot of that product. People care deeply about the products that they're trying to buy.

So being able to have a clear look up close, helps them to be sure that they're getting the quality that they. And we can't have e-commerce reference shots without apple. Apple does a really great job at showcasing large detailed imagery, but that's not always enough to make sure that we're always showing the CLE the features nice and clear.

They make the extra point to highlight the features, diagramming different points for the products such as they're potentially confusing use of three lenses on a single iPhone, where they point out the differences between the three different lense. And while it's important to have those big, clear images, which wise does a really great job at lifestyle photos are a way to place your product in people's everyday lives.

Whether they actually know what's happening or not subconsciously, this helps them imagine how that product is actually going to fit into their own lives. How could these wise headphones actually help you out while maybe they're enjoying some music in bed they're so comfortable that you might [00:05:00] actually forget that you're wearing.

Think geek, a company that I worked for used to sell really cool things from all your favorite fandoms. And they took this a step further. Not only did they show the products in a real life scenario, they showed it with a fun twist. So you can fully imagine yourself as Darth Vader, baking it with your R two D two measuring cups, but it makes a difference going this extra step, helping to make a stronger connection to your audience.

Upgrading media from static images, we have video which can help drive more context between our visuals and a short period of time, along with audio to help provide more verbal descriptions, but we can do better than a video embedded inside of a pop. Like my examples earlier, we can use video in ways that will add to the experience without actually taking away from the existing one under armor instantly sets the tone with the video on their homepage.

Their audience is full of athletes. So this is a really good way to take somebody right into the gym and get them super hyped up. We can also make our video shoppable as the video [00:06:00] plays like anything else we can make it interactive, allowing visitors to actually check out what that product is without having to actually scavenge through the site.

Only to find it on the very last page. We all know how that goes. So NFO looking at a bunch of pictures, see what I did there. How can we actually take advantage of this and see how it works from a developer perspective? In reality, some of these answers may not include technical solutions, like in order to show large clear images, the first thing you actually need is large clear images, but make sure that you're actually showing these images large and clear on the page and make sure that you're not over compressing them or only showing them as tiny little thumbs.

People need to be able to have a clear look at what that product is. Take advantage of those big, beautiful image. But you can take that a step further. You can allow people to zoom in on those images, right? As they're on your page, avoiding unnecessary steps, taking them off that page. There are a lot of great zoom based libraries that can help us out with this react, inner zoom image, zoom, cuz this is a similar experience to what [00:07:00] onlo or there are a lot of other traditional modal zooms, but they might not necessarily provide the zoom like experience that's actually going to help you zoom in on a product.

You could also try to replicate this on your. For example, once zoom is enabled, we can dynamically grab the cursor position and update the images position relative to the container. While this is just a simple example of how this might look, it shows what the basics of how we can actually start to imagine this UX providing point based details is both a little easier and a little bit trickier, adding some text overlaid on an image isn't really too bad.

But each one of those points are pointing precisely to that lens. While we can do this pretty easily for one viewport size. Realistically, a lot of us are really trying to build out responsive experiences. Again, this is a simple and incomplete representation, but we can start to see that by using the resize listener, we can set the coordinates based on the original width and height, where here it's a percentage [00:08:00] base and we can dynamically update the position as it resize.

Lifestyle imagery is one of the things where, unless you're a photographer, we need creative support in imagery, but we can still see how we can provide nice banners like this without having to embed the text inside of the image, by including the text on the page, we're helping both search engines, read the text and accessibility.

Also it's easier to make responsive so that your text is actually readable everywhere rather than it getting super tiny and crunched. As far as video's concerned. Yeah. I would imagine that you might be thinking and probably just slap a gift in there and yeah, you could, but guests could be huge, especially if you want them to be big and high quality.

We can instead take advantage of actual video on the page, which depending on your use case might provide better file results. Using thel video element. We can actually hide the controls in all of the player UI, and we can also set it to automatically play and loop that way you it's actually going to just look like it's just a video playing inside of the page, [00:09:00] just to make sure that your app is actually seeing these results and you're providing the best solution based on your use case.

Now when leveling up our video and making a shoppable, this part starts to get a little bit more complex. You're likely using a custom player for this kind of thing. But again, we can start to think about how we can solve this. Something like this. Maybe we have a custom video component where we define our products and where we want those products to actually be clickable, those nodes link to a specific product that open up inside of a new UI.

Ultimately, it's creating a more interactive experience for your potential customer. Now we have a lot of awesome tools at our disposal, but it's not as easy as just dumping a bunch of images and video on a page. There are some serious considerations on how we actually deploy these experiences without considering the impact.

We could be putting a lot of unnecessary load on people's devices and bandwidth severely slowing down their page loads, hurting their experience or worse killing our conversion rates. If you're not familiar, conversion rate is the percentage [00:10:00] of your traffic. That's actually buying something. There are a ton of studies on how website speed directly correlates to conversion rate eBay.

For instance, found a half percent increase in their conversion rate with a 100 millisecond, low time improvement. Now that might not sound like a lot, but eBay is worth over $10 billion. So just as a quick example, 0.5% of 1 billion is 5 million. So that adds up pretty quickly. So that means that while all our video and imagery might help build a good user experience, that media is going to make up the vast majority of the size of the page.

So if we don't pay attention to how we're actually delivering, we're going to B blow our pages and destroy our conversion rates. So what can we actually do to help that Del the optimize the delivery? Let's look at some examples of images to start off while JPEG is a great option. There are more modern formats that can help deliver high quality images at reduce sizes, WebP, and a, I are two great options and depending on the image can bring some drastic reductions in size.[00:11:00]

We can also compress our images to the point where we're not actually impacting the visual quality. Maybe it won't matter for this tiny little thumbnail, but we've learned that we wanna display these images nice and big. We wanna be able to display them in all their beautiful glory. So learning, letting tech actually automatically decide how much to optimize helps us can do this without much of a visual difference.

We're not over optimizing, but we're also not wasting precious KB and download. If you're working with high quality imagery, your size source files might be huge if you serve them as is in the browser, it has to resize them anyways. So you're just wasting bandwidth resize to the sizes that you actually need.

And don't try to crunch the image just to a, get a smaller file size. You'll end up with a super blurry or pixelated image, modern delivery image delivery can give you the exact dimensions that you need for the sizes on the fly. So take advantage of. Bringing this all together, we have pretty amazing results using modern formats, letting tech handle automatically optimizing our [00:12:00] images for us and serving the image and sizes that make sense for our web apps.

We were able to slash this particular example down from 652 to 143 kilobytes all without sacrificing the quality. Now, these are all great options, but how can we actually make sure that we're doing everything we can. Luckily there are a lot of great tools out there to help us out from inspecting our sites, to actually helping them build them.

You may already heard of web.dev, but it's a Google it's from Google with a ton of educational resources for dev, for web developers. And on top of that, they have a tool to actually help measure your website, including things like SEO, accessibility, and what we're talking about today. Performance. While this is just a sample of the results.

We can see that when they inspect the media on the page and see if we're actually conforming to the best practices. If we're not, they let us know what's actually wrong. Like here, we're not taking advantage of our modern formats. And we're serving our images way too big. A similar tool meant specifically for media is cloud area's website image analysis tool, [00:13:00] like web dot devs measure tool.

It will review your site and check out how you're actually serving your. It will show you exactly what media is costing you, precious resources and what opportunities that you actually have to fix it. Like here, we can see the benefits that we would get from serving our images with modern formats. Like we saw in my example earlier for actually trying to implement some of these tips, we have responsive grade point generator.

This was a project that was created by media experts. That was actually sponsored by Cloudinary. Not only does it generate code snippets that you can use in practice. It serves as an educational resource for how you actually can use responsive imagery. So enough of looking a bunch of pictures, wait, I already used that joke.

Didn't I let's dive into some actual real code and see how some of this works. First we'll check out some of the benefits of real world image optimization. It's pretty common for user content or media managed by non-technical people to upload full size images without knowing the [00:14:00] impact. So we can safeguard this by automating the optimization of our media on our site.

So here we'll see how we can do that with the Cloudinary Netlify plugin that we can actually do. From a UX perspective. If we don't have a dedicated team putting together the resources for every single product, we may not have all the imagery for all those products. This hurts. People's a avail ability to actually preview those images.

So one way we can do this is by programmatically generating all those images based off of a template. And some art, you might have seen some things similar like this on red bubble for custom apparel sites, but we'll see how we can do this with some space jelly gear. All right. Let's dive. All right. So to get started, we're going to use this simple Astro based image gallery that I created, where if we actually look at the page, it's just a bunch of images dumped on, on the page.

We can inspect each of, and every one of those images. And we can see that they're just simply locally sourced images and they're getting deployed. Using Netlify so they're available on their CDN. [00:15:00] And what we wanna see is how can we actually optimize these images in a way that's going to happen automatically?

Where right now they're just getting served as is, which is expected because we're not doing anything, but how can we optimize it automatically? Now to do this, we're going to first spin this up as a new project, and I'm going to use Astros NPM in knit and pass it in as a template. So I can use my username and my repo name and have this all ready to go.

So I'm gonna copy this head over to my terminal. I'm gonna make a new directory, my opt Astro. How about that inside of my opt Astro, I'm gonna pace in the NPM in it with a template, but I'm also going to copy my username and the repository name. And what that's going to do is it's going to go out. It's going to fetch this template.

It's going to pull it down into my local directory. So now I see that I have my next steps, which is first running NPM install. Then I can actually initialize my get repository and then I can even run NPM run dev just to see how it works locally. So I'm gonna go [00:16:00] ahead and run NPM. This is going to get started, actually managing and pulling down all those dependencies for us so that we can actually use them locally inside of our project.

Now, once we actually get through this, it might take a second. We're gonna see how we can easily get this up onto GitHub, and then we're going to deploy the Netlify just to make sure we have our base site before we actually try to add our image optimization for.

But once it's ready, we can run, get in it, which is going to initialize for us. We can add all the files, get commit minus M and let's just say in nit, and now we can actually push it up, but let's run MPM, run dev so we can see what that looks like locally first, where it's going to start up my local server and I can open it up.

And we can see that it looks exactly like what we expected. So now let's get it up into a new GitHub repository. We're over on GitHub, let's create a new repository tab. I'm going to grab that project name that I did [00:17:00] locally. I'm gonna set that as my PO my name, then I'm going to initialize, or I'm going to add my origin and push this up into my remote, where now it's writing on GitHub that I can actually start to deploy this on nullify.

So let's head over to net. I'll close my network tab, where I'm gonna log in. And once here I'm going to want to create a new site. So I'm gonna click add new site and I'm going to import an existing project where, because we use GitHub, I'm gonna select Gith. And I'm actually authorized, but typically you would have to authorize if this is your first time and I'm going to actually remove the rest of that string so that I can actually search for my get repository that I just created.

But once that loads and finds it in my GitHub account, I can select it and we can see that. Now, if I actually already know is that we're trying to deploy an Astro site. So it already preconfigured this for us. So I'm just gonna hit deploy site and it's going to go out and do its work and deploy the site to unruffled.

Gold was. [00:18:00] So that's going to take a second as it actually builds the site and deploys it for us. But in the meantime, we can start to actually look at the Netlify plugin to see what's going to happen. Once we get to that step. Now, the way that this is going to actually work is you gotta have a Cloudinary plugin ahead of time, because it's actually going to use your account.

But the first thing we're going to do is we're going to install the dependency for the L five plug-in cloud area, as it's not currently available on the actual Netlify plug-ins directory, but then we're going to. Add it into our Netlify config or the Netlify Tomo, if that's what you're using. And then we're going to configure our cloud name.

Once we do that, we just simply push out that configuration file and the dependency. And that's literally all we have to do. So let's check back and see if we're actually deployed yet. And we can see that we already are because it deploys so quickly, especially with Astro. And we can see that we have our new site and we can see just like that demo site that we saw that we're serving the images locally.

And we're ready to go. [00:19:00] So let's actually see how we can use this automatic image optimization and what actual benefits we get. So I'm gonna leave this up in a new tab while we actually make the changes, but I'm going to open up my code locally if I spell that inside my editor, as I mentioned, I wanna actually edit my Netlify config and I don't have one in this project yet.

So I'm gonna create my Netlify dot Tomo. I'm gonna head over into that Netlify pluggin cloud area, and we can see that what I wanna actually grab is this bottom configuration. That includes everything. So I'm gonna take that. I'm gonna paste that right in. No, I don't need the extension right now, but I'm gonna say I want my cloud name for me particularly.

I'm going to use Colby demo and that's it. So I'm going to go back to my terminal. Say, get, and then I need to actually install the NPM dependency before I forget. And so I'm gonna run NPM install, Netlify plug and Cloudinary, where it's going to take a second to actually install that. Just like we saw when I was initializing the as Azure project to begin.[00:20:00]

But now we're ready to go. So I'm going to get ad Mya, get committed MYM, and let's call this Netlify plugin Cloudinary, and I'm going to push up those changes. Now the cool thing about Netlify. If this is your first time seeing this is once it actually sees that, get commit, pushed out into the origin, it's automatically going to start building, and it's going to do that fast because everything's going to be cashed that part of the bill that's actually able to be cashed.

That is so we're gonna see that in a second. This is going to be ready to go. But we can even click into this and we can see the lines for everything that's actually happening inside. Now, the way that this works is Nefi has different stages that's happening during this build process. And the way that we're able to use this plugin is we're able to hook into the process after build so that once the build is complete, we're saying we wanna take all of the images and we wanna change them to Cloudinary links, because we know that we're going to use the auto optimization features for that.

And we can even see that's exactly what it. Has done. We already see that our site's ready [00:21:00] to preview again. So I'm gonna head back over here. I'm going to open this sip in a new tab so we can see the differences and we can see that the site looks exactly the same, which is expected, but let's open up our network.

Console again, or I'm gonna refresh the page so we can see all those images, but we can see the very first thing that we might be noticing. If you remember for the other one is all these say Avi for the actual file tape, we can go back and forth. If you catch that here, we can see that this is JPEG.

And this is Avi. And another thing that you can see is you're noticing that we're having about half of the transferred megabytes, where on the original it was, the total was about 5.2. We can see that's 4.5 out of 5.2, but now we're only transferring 2.0 out of 2.6. All these files let's take the beach for example.

Oops. Didn't mean to click in 186 kilobytes where before. It was 500 clicked, again, 566 kilobytes. So we were able to see that by just installing that plugin and serving it from cloud on air. We're [00:22:00] now able to get both that automatic optimization and the automatic format change, which is helping to drastically re reduce the size of these pictures where we're doing this automatically.

So even if our ma content management team is uploading these pictures full size that they got from them splash, we're still going to optimize these automatically for all those images. Cool. So now that we have the optimization part of this, let's actually take a look at the other side of things. So this time, we're going to actually look at this from a UX perspective.

Now, if we have a store where we have a ton of different products and maybe those products are generated by the users themselves, so we don't actually have the support of a creative team creating custom Photoshops for every single product. Like something like red bull bubble. As I mentioned before, what we can do is we can automatically generate these images so that we can still get a look at what our product is going to look like, but we're doing so in a programmatic way.

And while it's not going to be as good as a custom product [00:23:00] shot, it's still going to look pretty good and close to what you're gonna get. So we're gonna start off with this demo application. And this time I'm going to walk through an existing demo as it's a little bit more trickier to try to do on the fly, but we have this basic template of a t-shirt where it's just hanging on a little rack here where what we're currently using is a next JS application.

We can see there's nothing really fancy going on here. It's really just yarn create next app. And what I'm doing is I'm importing cloud area. So the cloud area, SDK V2 of it. But then we have our homepage next JS application, where I'm taking these images and I'm just dumping them on the page. We'll see here in a second, what this array of images is, where we're gonna show those variations that we're creating.

But really all we're doing is displaying those in a grid of images, just so that we can see what they look like. So again, nothing special is actually going on inside of the, at least the react part of this. Let's scroll down to the bottom here. And we see, we have Gett static props where the very first thing we're doing is where we're configuring our cloud area account.

So I'm passing in my [00:24:00] cloud name, my API key, and my API secret, just to make sure that we're able to have access to the media inside of my library, which we'll see in a second, but we're going to use this hanging t-shirt that I already uploaded into my media library. And we can see that if we head over to my Cloudinary console, we can see that in my account.

I have my hanging white t-shirt. I have. T-shirt that's on some person and we're going to be able to see that this is the art that we're going to try to place. We have Cosmo your friendly space friend from space jelly.dev, but we're going to be able to generate t-shirts with each. And one of these pieces of art programmatically.

Now, again, looking back into the source code, we have this hanging t-shirt. And what we're trying to do is generate this cloud narrow URL, where we're applying some basic transformations, including the fetch format of auto and the quality of OTO. Now, if we remember from the Netlify plugin that we just installed in the previous example, it's basically doing the same exact thing where if [00:25:00] we look inside of the network, This time we can refresh the page and we can look at the image and this time it's actually serving it as WebP.

The interesting thing about cloud area is what it'll do is it'll try to determine the best results for the different formats and it'll return that version. So whether it happens to be the original JPEG or if it's WebP or a, I whatever's going to provide the best results without actually. Compromising the integrity of the image, it's going to return that.

So the same thing goes for the actual quality set as auto it's going to try to figure out the best quality it can do, where it's going to compress it, but enough, so that it's not actually going to ruin the visual aspect of the image. But then we have this resulting image, which is only 13.6 kilobytes in size.

And we're ready to go with our template where we wanna start to display. Now, as I mentioned, we have those three different pieces of art that we want to use. And I already created this images array, so we can see what this is going to look like. We'll be able to play around with it in a second, but I'm going to UN [00:26:00] comment that out where we have those three IDs and I'll show you again, inside of the Cloudinary library, we have all these different cosmos.

And once we have this array, we're going to map through each and everyone where we're going to again, build a cloud narrow URL, but this time we're going to pass in the ID as the base image. But what we're going to do is we're going to provide an underlay where we're going to, if you try to think about it in a stack of images, we're going to put an image underneath.

Where traditionally, you can also put an image on top, but we're doing the underneath so that we can make sure that our artwork is on top, but we're going to use that hanging t-shirt that we just saw in the previous example. But all we're doing at that point is we're trying to resize our art. To fit that hanging t-shirt we're going to set the capacity down to 80, just so that it looks a little bit more realistic than the very crisp art sitting on top of a realistic t-shirt and we're setting the crop at scale so that we make sure that we're doing so in a way that's going to create keep the consistent ratio.

So I'm gonna go [00:27:00] ahead and save this file with that new mapping actually set. And if we refresh the page here or probably refreshed already for us, we can scroll down and we can see Taha. We have our new pieces of art on every single one of our t-shirts. And we can open one of these up in a new tab so that we can see it a little bit bigger, but we can see that it's looking great.

And this is what it could actually look like. If we're printing it on a t-shirt, you should go. Just kidding, but we can see that for each one of these, no matter which one it is, we're able to programmatically generate. Now maybe we think that looks a little bit too low on the t-shirt. I don't know.

Maybe they have different sizing for this, but we can also do things like move around where that's going to be, where maybe I can say, why equals negative 20? And what that's going to do is it's going to shift it up. And then once I refresh the page to actually regenerate that Ry URL, it's going to shift up a little bit for us.

Now the cool thing is because of how dynamic this is. If you remember in the Cloudinary management console, [00:28:00] I also had this model, t-shirt where this is just some random person wearing a white t-shirt, but we can see what it's actually gonna look like on the person this time, where we have those different product shots, showing different scenarios of how this is going to look.

So I'm going to grab that public ID, which is the shirt only. I'm going to first change that top one, just to make sure that it. We can see that we now have that product model at the top, but now let's replace the ID for the actual images that we're programmatically generating. Now, once we save that and it reloads, we can see that's not actually looking great.

We need to. Kind of configure what this is going to look like and move things around so that we can have our image where it's supposed to be back on the top of the t-shirt. So if we look back at our page, how about we need this to be a little bit wider, right? So let's set this to 250 instead. I'm gonna refresh the page and we can see that it's already a little bit wider and maybe we need it to be up more.

So I'm going to set the [00:29:00] why to, how about let's just try 100. This. And if I read the page that didn't help it yet, maybe I put it in the wrong spots. Let's try putting it in the upper transformation or even in the underlay. And yep. That way the underlay is actually working, but we can see that I went in the opposite direction, but if I refresh the page, we can see that we're getting closer to where that actually should be.

We can see that now it's looking great. It's looking just like our template t-shirts before, but now we're actually able to show it on a real model and see how that could actually look on a person that's actually wearing the shirt. The idea though, is that we're able to programmatically generate these images and still provide as great of a UX as we can, even if we don't have the resources to actually provide all those real custom images ourselves.

And the cool thing is we can even take this to another. But with the cloud on APIs, we can even use displacement [00:30:00] mappings where we can add texture to the images to make it look even more realistic, or we can skew it so that if somebody's turned around, like you might have seen a red bull, but we can actually make the image distort so that it looks realistically like somebody on the model.

The cool thing is we have a lot of options for this. And ultimately the goal is to create that better UX and provide the experience for our customer. All right. So just to quickly recap here, we saw how we were able to easily optimize all of our OnPage images. We also saw that how much that actually impacts the OnPage load.

Then from a UX perspective, we were able to see that how we could programmatically generate product images, giving our potential customers a great way to see how their products actually look. If we pay more attention to our media, not only will we be able to responsibly build great experiences for the web, we'll be able to help ourselves providing the best opportunity and conversion.

Speaking of e-commerce, if you wanna learn more about how you can build your online store, you can check out my course. E-commerce on the [00:31:00] jams stack on love tutorials, where we'll walk through building a shop with snip cart next JS and headless WordPress. I'll include a link, my talk notes, but you can find it over at LevelUp tutorials dot.

And that's it. If you wanna learn more chat about the talk, you can find me everywhere at Colby FAOC and also tweet out a link to some of the stuff you've seen here today. Thanks everybody.

**Brian Rinaldi:** And we're back Colby went and did a quick costume change here. So that was a great presentation Colby. Thank you really cool. We're gonna get to some audience questions. I know we did have one, but it as always that, people can feel free to add questions right now and we will get them to you live here.

So if anybody has any questions that weren't answered, although you were pretty thorough there, Kobe. But yeah, if you have any questions, please ask them and we'll get them answered for you. First of all, let's see the audience question. There was one about the music. I don't think you can answer that for us Colby.

I know there's the F I T C team does actually pick a lot of great music in between these [00:32:00] breaks. But the question we had was how about accessibility in these images and videos, visually impaired persons? I would like to provide a decent shopping experience as well. Any.

**Colby Fayock:** So I'm not going to try to claim that I'm some, that an ex a I can't talk accessibility expert.

But generally speaking for images, I try to be very thorough with providing alt values. And if there's anything, if I'm using a background image that has actual context in the meeting to the page, I make sure that I include that. And I would think that it's a similar thing with video and trying to provide captions whenever you can, or subtitles.

Again, I'm not. I'm not an expert in the field, so I don't wanna steer the wrong way, but I think those practices are generally what people suggest and recommend though. There could be better options. Yep.

**Brian Rinaldi:** Cool. All right. Do you know does cloud area have anything specifically for these types of things or you're not fully aware.

**Colby Fayock:** That's a great question. I think like embedding an image on the page I would think that [00:33:00] you'd still need to do that manually unless one of the like react SKS or something has the ability to actually still pen that maybe you can grab it from the metadata inside of the. Cloudinary medium library, something like that.

But generally speaking, I think you'll still need to be able to put that content somewhere. Though, that being said, I did just put out a Stu tutorial where you can use Google, AI tagging to automatically create tags for an image, which is pretty cool. And I think you can do the same thing with video.

So maybe you can do it programmatically if you don't have it mainly done, but that's a totally different. Yeah maybe we'll

**Brian Rinaldi:** have you come back and speak about that next time. there we go. Alright, so I have some questions actually myself, about the first of all the plug-in you were using. Can you explain cuz obviously you had the images sitting on your repo in your site that were deployed to net Lai and all of a sudden they're being served by Cloudinary, like kind of auto magically in a different format and everything else.

How does that actually happen? Like how did those images get [00:34:00] into cloudy?

**Colby Fayock:** sure. So at the core of it, in terms of the Cloudinary for the Cloudinary API, what I'm using is the fetch feature where what I can do is I can provide a remote URL to that Cloudinary API, where Cloudinary will then fetch that image before it serves it, where then it would then store it in cash and deliver it from the CDN.

Now. In terms of the actual plugin, what I'm doing is going through this the HTML that was built through the Netlify process. And I'm looking for all the images and I'm trying to piece together, even if it like, whether it's a CDN an image being served from another CDN or from Netlify I'll grab and construct that final remote origin or URL, and I'll pass it into the Cloudinary URL.

Now that said the plugin can also upload the images. If that's. The person prefers to do, you would just need to, in addition to the cloud name, provide your API key and secret so that option's in there. But because the fetch is just so easy to just put up there with the cloud name, I'm just doing that by default.[00:35:00]

Okay.

**Brian Rinaldi:** So you don't even have to do anything as soon as it's deployed, it starts pulling all the images over.

**Colby Fayock:** Yep. It replaces the on page HTML. And. Just to make sure that's clear it's the OnPage HTL as opposed to some frameworks where they'll do client side of rendering. So once it hydrates, if it wipes out everything, like it might not be there anymore.

We're still trying to work on that limitation. And figuring out solutions around that, but trying to figure out something practical, but all those on page images, like in that example will be replaced with the Cloudinary URLs. That's pretty awesome.

**Brian Rinaldi:** Wow. Okay. Very cool. So I have a.

Another question actually about how, so some, obviously some frameworks have a built in asset pump pipeline into the static site generator. How does this compare to say using the built in assets pipeline within the static site generator and or can you combine.

**Colby Fayock:** Yeah. So that's a great question.

I like to think [00:36:00] of X JS, cause that's what I'm most familiar with right now where I believe like the process is what they have a surface function, where it will generate the images for the actual site when it's getting built or rendered. Now you can definitely use this right alongside the next JS image component and it works perfectly fine.

I prefer when I have the ability to actually. Directly add the Cloudinary image. And the reason is because then if you're using Cloudinary, you can provide a lot more features on top of that. Such as like the transformations and such. When I have the option, I go straight there, but if you're just trying to grab content from a headless source and put it into your page and you're already using the next JS image C.

That's completely fine. And similar with Gaby. I believe there's actually a plugin. That'll do something similar to the nullify plugin I created where it'll replace all the images in the node tree. I don't know too much about that. I haven't used the Gaby plugin yet. I but it's not some option if you're on the Gaby side of things.

**Brian Rinaldi:** Okay. That's really cool. All right. And.[00:37:00] I had a, another question just actually completely unrelated to, to images specifically, but I noticed you used Astro. What is, what made you choose Astro to build

**Colby Fayock:** that demo? Brian, we need to stay on topic. No I don't know. I think one of the reasons is because I wanted to have something that would be quick to demo and I knew that I could ship like the no JS version of that image gallery without having to worry about the framework inside.

And plus I like to try to just wiggle in newer frameworks or tools when I can. So I thought it was a good opportunity. No, no huge method of that thinking beyond.

**Brian Rinaldi:** Yeah, I, Astro looks really cool. I know we're gonna have some talks about it here, so I'm really curious about it. And in case, you hear that I, we are live, my dog is behind me whining.

Cuz of course that's what they do, especially when you go live. So alright and then. Can you tell me like a little bit more about say this web you [00:38:00] mentioned the web.dev page quality tool. So what exactly does that measure? What does this show.

**Colby Fayock:** sure. So it's, it shows a ton of stuff.

It's amazing. So not only will it show how you're loading your media in the performance impact of the media, you are loading, but it'll show the same thing for all of your aesthetic assets, your JavaScript. Are you loading too much? JavaScript? Are your pages too big? It'll also do SEO accessibility.

It'll try to just generally come up. I believe it uses lighthouse now under the hood to actually come up with some of the stores, but your core web vital. and trying to see how you can actually resolve some of those issues to better provide a, to provide a better user experience as well is providing a better way for Google to find that page.

**Brian Rinaldi:** Nice. Yeah, I had I've used the lighthouse scores obviously, but I have never done that particular test. I know for instance, Yeah, images are always like a big effect on cfe.dev for a while. Like I was just serving up the same banner images all over the place, [00:39:00] and sometimes they were smaller and I got dinged big time by because they weren't properly sized for the spot that they were in.

In particular I was serving large images and small. Areas. And I know that was a real hit on my lighthouse performance scores. Something like cloud Mary, or even the, like the asset management within this SSG allows you to just issue solved. And I don't need to regenerate all the images manually

**Colby Fayock:** or anything like.

for sure. And there's a lot of implications around that, right? So it's not only just serving huge humans, cuz it's gonna take more bandwidth, especially when people are on slower devices, slower internet. But also Google takes those, the performance into consideration when it's actually trying to provide your ranking.

So you're also impacting your SEO. If you have a, if you don't have a performance page,

**Brian Rinaldi:** Okay. And one last question. So do you, when you do something like this, are you actually pulling the images from the remote cloud area URL? Or do you actually pull them down into, in, from cloud area, into the build? Or can you do either.[00:40:00]

**Colby Fayock:** Are you can you which

**Brian Rinaldi:** like, so if I had images in, in, in my cloud area library, can I actually pull them down when the build process goes on? So like some of those load locally, as opposed to calling out to Cloudinary for that, or would it,

would

**Colby Fayock:** you re mean absolutely. Just call out the Cloudinary. I would recommend just clouding calling onto Cloudinary, cuz they're completely optimized for image delivery as opposed to serving it locally.

Not that all those amazing providers CDNs aren't doing well, but the Cloudinary CDN is like specifically geared towards that as well as like the optimizations that you get automatically on top of that with those parameters I showed earlier. So I would definitely, if you have the capability of serving from Cloudinary, I would do that.

Or else you might be missing out on some. True. You

**Brian Rinaldi:** couldn't do the auto resizing or the format different formats for depending on the browser. True. True. Definitely. All right, Kobe. This was awesome. It was great seeing you again. I really enjoyed the presentation and I hope to see you again soon.

Thanks [00:41:00] for joining us. Yep. You

**Colby Fayock:** as well. Thanks so much for having me.
