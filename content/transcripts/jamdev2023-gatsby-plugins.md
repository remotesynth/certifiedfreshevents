---
_build:
  list: false
  render: never
---

**Queen Raae:** [00:00:00] Thank you. Greetings is the jam. I'm here to talk about Gatsby plugins. I titled my co talk Keep co keep com and Code Your Own Gatsby plugin. There's a plugin for that and you might have heard that terminology quite a lot. Gatsby's been pushing it. And if you've ever been into the WordPress community that was also a big deal.

You. Oh how am I supposed to do this thing or that thing? I'll, just check out this plugin. Let's see if I can get my navigation going. There you go. And in both cases you could say that there's an ocean of plugins out there, and some of them are, full steam of head. Some are pretty much out of the count and some are straight up res and

Personally I've experienced some of those latitudes and maybe you have as well. [00:01:00] And to that, I say my keyboard isn't working. Let's me see if I can figure this out. There we go. Today I say, keep calm and code your own gats. B plug. So greetings. I'm Queen Ray and I'm here to give you a head start on your Gatsby plugin journey.

When I'm not in doing webinars or talks like this, you'll find me maintaining Gatsby plugins. I'll help you navigate the shark waters around the Gatsby Islands every Thursday and jamming together side projects for fun and profit, as Brian Magic mentioned, and I do all of this together with my Pard family.

And in our family, G is for Gatsby. And what you see there is an illustration is a sticker that my daughter Lillian made because when she learned Alphabet G was for Gatsby. And Gatsby is one of the many Java Kid rep frameworks out there. And it supports all of the acronyms that you want.

And if I was [00:02:00] employed by Gatsby, I would probably be obliged to say that it's blazing fast. I don't really know what that means anymore, but that's what they all say. But to me, what has always set Gatsby apart is the data layer. And with the data layer, and that it's different from a lot of the other frameworks is that we initially do a lot of sourcing and transforming of data into a database, actually.

And then that database is used when we build out the site. And the, it's a graphic it's a graphical interface to that data layer and where the . And as I mentioned here on this slide da Gatsby has ripped out their data layer and created it into its own offering called Val Haa, where you'll be able to source and transform a lot of data into this data layer.

And then you can use whatever framework you want. So before on the, for you side or left, for you side where it says web, you would only have ga. For, but now you can change that out [00:03:00] and use any framework you want and call the data layer, as you would call any other serverless back.

And where do the Gatsby plugins fit in? They, the kind of the most powerful ones, especially when it now comes to Valhalla, are the ones that source and transform your data. But you can also h hook into how the pages are built out and also even what is happening on in the client when it's rendering in the client.

And we'll be going through three example samples. We'll actually move backwards. We'll look at something we're looking into hooking into the client side. We're gonna look into how to hook into the build side. And then we'll finish off by sourcing some data from from Crowdcast that doesn't have an api, which is cool.

So why code your own gas speed plugins when there are so many out there? I mentioned that, some of them are not full steam of head, so you might need to go in and fix some things, or you might have to make a copy of a plugin and then fix things. The best thing, of course, [00:04:00] many of these are open source is to fix it and then submit.

Your submit your changes to to the actual repo. A lot of these are abandoned. But even I think that even if the plugins you are using are working really well, I think it is interesting to learn how to code your own framework because with. Working with any framework gets a lot more joyful when you actually understand the underlying magic.

And one of the ways I've learned the kind of underlying magic of GA space by coding my own plugins, even if I'm the only one using them, I still learned a lot from digging into The underlying things. And I would say that using badly documented third party plugins is also a lot easier when you made some of your own, because you understand, how they're supposed to work and how Gaby wants them to work.

So even when there's missing documentation, you can probably figure a lot of it out on your own. And then you'll also be much better at spotting the plugins that are really good and work in the way that Works in the way that fits together with [00:05:00] all of the other plugins, and you won't get run into a pro, run into problems.

After using the plugin for a while.

So last time, or before Christmas, a couple of years back, I got really nostalgic for the whimsical web of my youth. If you've been around the WordPress space, you might remember some snow falling on WordPress sites during the Christmas holidays, and I really missed that and I wanted something like that for my own blog.

My. Blog of course no plugin no snow plugin was available. So I kept calm and coded my own. One solution I found for that was canvas confetti. It looks like it can only do confetti, but if you dig into their examples a little bit, it actually has a snow falling effect. Conf. and to manage to use that, we have to hook into what is happening in the browser.

We, there's no point in, throwing confetti while we're building out the site building out the sites [00:06:00] on the server. This is something we want to happen in the browser when the user or the visitor initially lands on the page. And what you're seeing here are all the ways you can hook into the kind of the client side of Gatsby, and you'll do that.

Creating a fol or file called Gatsby browser js and then export one of these hooks here. And the one we want for our snow falling is on initial client render cuz it will only happen that one time because Gatsby rehydrates into a single page application. So the first time you land on a page, you get served, the H M L.

The server, but then it hydrates into a single page application. And after that it behaves as such. And when you are changing, going from one page to another only, it's only asking for the data changes. It's not calling out and getting a full server render again. By hook into on initial client render, we only get the snow falling for that initial hit to the page.

Cause we [00:07:00] don't want the snow to, keep on falling or falling. Gets annoying. And also my old fan at my computer just keeps spinning out of hand if the snow keeps falling. But if you look at all the hooks that you can hook into, we could have done on route update, which would then.

Triggered snow falling every time you change the page. And that could be interesting for you might wanna make a and you can check the path there, so it only happens on one path. So if you want some confetti to happen on the thank you page, instead of calling that in the react code on the thank you page, you could create a plugin that would shoot some confetti at different paths in your in your gas v site.

If that's what you. Another thing that I keep doing again and again is use an emoji as a favicon fab icon. I was very blown away when I saw this because it's always, especially when you're doing demos or little projects, you don't wanna build out a full kind of design system and, or, logos and stuff like that.

But you want a nice fab icon, and you can actually, in most modern [00:08:00] browsers, using emoji acid, Fab icon pretty easily. So I kept copy pasting this little s vg snippet here to get a fab an emoji as fab, fab icon. But then I thought why copy paste, even if it's just a little bit like why keep copy pasting this from page to page project or from project to project?

And I couldn't find a plugin for that. There, there are plugins for regular five accounts, but I couldn't find one for using an S V G or an emoji inside an S V G as the five account. So I kept co, kept calm and coded my own. And for this type of plugin, we need to h hook into kind of the build system when the pages are built out.

As I said, Gatsby rehydrates into a single page application, but it actually creates a separate entry point for every page so that first hit, you're actually getting a proper page served from your server, a full h m L page with all the content under, and then it rehydrates into a page. So to be able to hook into that H M L.

Will be [00:09:00] generated for every page. Then we are not generated forever. Page when you hit the server because this is the kind of legacy. So the file is called at Gatsby, s r, but it should be called Gatsby, s g. For this, it's not particularly service side, it's server side generated. So all of the pages are generated ahead of time when you're building and to be able to hook into the H M L that surrounds the little React app.

That Gatsby actually is we need to hook into then on render body and inside of there we get a little set head components Gatsby utility and we can set we can use that to set extra stuff in the HTML head and we'll grab the emoji from our plugin options.

I'm just gonna have a drink.

and then to the really fun part and the most powerful part, as I said, is the sourcing and transforming of data. Again, Gatsby, you source all the data and you create nodes that are then served by a graphical [00:10:00] interface. And and there are a lot of really good source plugins, but sometimes you need to source things or source things in a way that there are no support for.

And one of these things for, in my case, is that I wanted to get the webinars from Crowdcast and Crowdcast doesn't really, doesn't even have an api. So they actually, I had a lot of fun today because I added them already. But Crowdcast has changed how they look and they still don't have an I p I.

And the way that I've decided to solve that is to use something called scraping Bee that let's describe and the website, a good friend of my Pierre has the startup and, or it's not a startup anymore, but this company. And you can then scrape any. . And that in, in a way, like really truly makes you be able to source anything from anywhere on the web.

But if there is an api I of course do suggest that you use the api. And if there is an official plugin, some of these plugins are officially made by Gatsby or supported by Gatsby, then I would [00:11:00] use those. There are also some really good third party search plugins. But if you have some special needs or some weird needs like I do with sourcing from something that doesn't have an api, then you can create your own social plug.

And how we do that is that we hook into the kind of source process that happens before we're building out all the pages. And of course, before anybody hap ha does anything in the client, and to do we use the Gatsby no JS file. And in there you can see there. Bunch of things that you can hook into, but the one that we use the most is the source nodes.

And here again, we're using different Gatsby util function functions. And then we're also grabbing some information from our plugin options and then we scrape using Crowdcast, and then we are creating nodes for this Gatsby data layer. We're going into more detail when we're gonna do some live coding of this later.

And then. Second part is that okay, we are, we're grabbing all this data and we are grabbing the URL to the cover image [00:12:00] for these Crowdcast webinars. , and those are in Crowdcast domain, right? So if Crowdcast then changes up, we are building the site, we're grabbing these URLs, and then if Crowdcast for some reason, changes these URLs while between our builds, then we will get broken images.

So a way we can handle that is that every time we create a webinar node, we can also then grab that image and create a file node and we actually download. This file into kind of our local system. And then we have that file, and then we know that we'll always have access to that file. As for as long as our build lives.

And you can see here lots of code to make that happen and this, but this is where the Gatsby plugin system really shines because this is something people do again and again. So they wanna source their data in some specific way and from some weird API or like I'm doing using scraping B. But then we also wanna grab these remote [00:13:00] images and instead of doing this code again and again, we can use Gatsby plug-in remote images.

And by using that we eliminate all of that. . So why make it a plugin? If you are into Gatsby, you'll recognize that you could have done all of this code inside of your kind of Main Gatsby project. The only difference is when you're in your Main Gatsby project, you would not get these kind of plugin options.

But otherwise, all of this could happen within your Root Gatsby project. But I really like this standardized approach of configuring kind of the different functionality of your site. So instead of, if we had these different examples as just code in our root Gatsby project.

We wouldn't have been able to easily see here that we're having the party popper emoji for our emoji. We are enabling the snow from November 1st to January 15th. We are using, we're sourcing from Crowdcast and we're sourcing the user named Ray. [00:14:00] And then we are using Gatsby plugin remote images to grab the images into our.

And in this way, especially when I'm doing Gatsby reviews, when I do code reviews of Gatsby sites, like this is a really good way for me to get an overview of what is happening in these sites. But if they are not configured as plugins, you'll have to go and dig in and see, what all the settings are that are often hard coded in the in, in the code and also, Your Gatsby node, especially file usually grows out of hand because you're pushing a lot of functionality in there.

Another reason to make it a plugin is that you can also then validate these configurations. Gatsby is joy under the hood. I know I, everybody is into what's it called, SOD these days. But a Gatsby's been around for a while. So we use joy to validate all of the plugin options, which makes it so much easier to give good feedback to the.[00:15:00] 

A user of our plugin if we make it a publicly available plugin. But even if a project where we just have local plugins, it's still cool to be able to validate this. If somebody else is taking over our project and start changing some of this configurations, they will get immediate feedback. Oh, sorry, that was the wrong way.

But what is really a and yeah, and the third thing is that we have these standardized modules, which you understand from what I was saying with the standardized configuration and then also the standardized validation of these configurations. And then from that we also get modularization because all the code that is , all the code for one feature is then in one place instead of all of the features being branched together in the GA node.

and I Gatsby plugin. Then it is a folder with a PA package, Jason, and then your code. It took me a really long time to understand this. I was like, how do you make plug-ins? Like it's so hard. Like I thought these were like magical things, but it's just a folder and there's a package. [00:16:00] Jason in there and you put your code in there.

You picture Gatsby node, your Gatsby browser, Gatsby, SSR. in there and that, and then it becomes a plugin. But where does it live? So it could either be a local plugin, you put the folder under the plugins folder in your root project, or you could use, for instance, yarn workspace and then have them in the same repo.

Separate route folders and then hook it up that way. Or you can go all the way and create npm packages that are then publicly available for everyone to use. I like to go the route of creating them as local plugins. and use them in the one project that I started having the needs. And then go into creating a demo where the plugin is in a yarn workspace.

And then I take that plugin code and and then publish it as an npm package. [00:17:00] And that's what we're gonna do right now. We're gonna do the Crowdcast example live coded as a local plug.

So here we are with the kind of the finished project that we're gonna be making. We're gonna see, we have a little demo here where we have all of the webinars that I've done on Crowdcast, and I also wanted to showcase the data layer here. I love the Graphical Explorer in Gatsby. I often start out my projects with making sure I source all the data into the data layer and that all the data that I need is there before I start building out the front end.

So here we can query. We've seen, we've sourced a lot of Crowdcast webinars. We can see. The, all of the information we have on a node, I'm just asking for the title and the URL here, and then we can see the results over [00:18:00] here with the data that we actually have. We can see all the webinars and in our index js file, then we hook into the data layer and we're asking for all of the webinars.

We're doing the title, we're doing the url, we're also asking for the cover, and it's been downloaded, as we said, as a file into the gasp data layer. And then we can do ga, we can use the Gatsby image component and use all of the Gatsby. Plugins on it so that we get optimized images for our website.

So we're asking for the I gpi image data. We're saying that the max width we wanna have is 400, so we get the size down and then we can say that we have the placeholder is blurred. And that gives us that like nice blur up effect on the page that you could hopefully see. So let's see how we would go about creating that.

So I started us off a little bit. So we're starting out just [00:19:00] using, just creating it inside of our Root Gatsby project. So we'll go into our Gatsby node file, we'll source the nodes and then we'll do some stuff on create node. So the first thing we wanna do is source the sourced the webinar. It's gonna have my cheat sheet up here as well.

So we get through this pretty fast, , hopefully. So the first thing we wanna do then, and at this point we don't have any this could be good cause we don't have any we have no plug-in configuration cuz we're inside of our kind of regular gas speed project. And then we'll create it here and then we'll move it into plug-in and create schema or plug-in options validation.

So we will start by, grabbing all of our webinars. If I can spell and we'll scrape Crowdcast and it needs the username and my username is Ray and then it needs the scraping, the a p i key, and then we'll do [00:20:00] process and what did I call it?

Scraping bee api.

That should give us all of our webinars. We can quickly look at the script code. What we're doing is that we're heading over to the scraping, we're using the scraping b a p I and then we're asking it to do some, because it's all Java. It's next application now, I think. So when you're landing on it, it takes a while to load.

So we're waiting until there's an H two on the page, and then we'll scroll down to make sure all the images are loaded. And then we say, go into the main and grab all of the links and make a list out of those. And then our title should be the H four inside side of that A that link. And then URL should be the href coming from it.

And then the ti daytime is a paragraph in the second Diviv . And then the cover source is from our span image. . [00:21:00] And then the output is the source data attribute on the image tag. But that's not Gatsby specific. So let's just jump back into our Gaby code. And then for every webinar we wanna create a Gatsby node.

So those are the data showing up in the Gatsby data layer.

So for every one of these webinars, For every one of these webinars we wanna create a node and we'll grab that from, or we can find the node creation helper function on the actions. So we'll do actions, create node, oh my God. Create node. And a note always has to have an ID that is unique and it has to be unique within our universe.

So when we're using it in the Gatsby, know that in our Gatsby project, it needs to be unique for all of the things we are doing in our Gatsby. Note all of the data that we are [00:22:00] sourcing when we are putting this into a plug-in, it has to be unique for the plug-ins. If you're sourcing several things in one plug-in.

We need to make sure that our IDs are unique for within kind of what we control because Gatsby will add stuff onto this ID if we are good citizens of Gatsby and used to create note id. And then it will add on kind of some information about the plugin so that it is, it makes sure that it is unique.

So we'll do webinar r url cause they will all be unique within Crowdcast. And then they will all be unique within r l. and then the title is webinar title. And then we'll just do a little bit of copy pasting so that you don't have to look at me code, all of that. We'll grab the url, we'll cut the, grab the cover source.

And something I like to do when sourcing with GA space that I also like to have a kind of raw attribute where I just dump everything that I source from the [00:23:00] api or in this case I scraped cuz it makes debugging easier. I can be able to look at that. And if you're creating a public. A public a public plugin and somebody wants to maybe use something that you didn't intend.

They could then grab it from this kind of raw version of the data. And then we have to give it a type. So we're gonna give it a type of Crowdcast webinar. And it's a Jason type of data. And then the second really important thing is this content digest. So we're using a create content digest helper function here.

And that essentially creates a hash of the content. So whenever we source, if this hasn't changed, GA people not jump on and do the onCreate node stuff. So you wanna source as little information as possible. And then if that has changed, we can download images or do a lot of transformations, like intensive stuff, we can do that inside of onCreate node because that will only [00:24:00] be called if the data has changed.

So data will look into its cache and see does this node already exist? And if it exists, it doesn't need to do the uncreate node stuff, but if it doesn't exist, it'll have to do the uncreate node stuff. And its actions, not de conservative actions here from the gets detail. And then we can do a, it can do a reporter, that's a cons log.

Cons log from Gatsby as well. And we could do created webinar. Web with, and then we could do webinar URL for instance.

And if we run this code now, we should be seeing some of this, we should see this data showing up in our data layer. And while we do that, we could continue. Oh, look at this webinars.[00:25:00] 

Webinars. Did I forget to await? I always do that. So let's do that again.

So we are sourcing this data and then you can see here Gaby will tell us a lot of interesting information about where we are in the process. It's also warning me that some of my own plug-ins are not compatible with get version five of Gaby because it's pretty new, but they usually work anyway because most of these plug-ins are backwards or our forward compatible but they just haven't Been updated to mention that they are.

And we'll keep sourcing and transforming. But so while we wait, what we wanna do on the on create node then is to download these images. And we only wanna do that if, if the data. If the node that is being created is the Crowdcast [00:26:00] webinar, we don't wanna do this for every node, we only wanna do it for Crowdcast webinars.

And what we wanna do is that we wanna create a remote file node. And what that means is should actually be a name download, remote file node, but it creates a node with the content of the image found at node cover source. Which we scrape from Crowdcast with our scraping bee call. And then we are not allowed to change nodes anymore.

We used to be allowed to change nodes, but we're only allowed to append information on the node fields. So we'll add the We'll add some information onto the node that can, that references this new node that we created the image node that we have created. And then later on down here, when we are creating the schema for our Crowdcast webinars, we are saying that our cover should be a link.

It should be a file, and it should be [00:27:00] linked by Fields cover file id. So let's see if we have some data here.

Yep. So we have all of that data. We haven't run it with that image information yet. So that will all be empty. It's there because it's defined in the schema, but there is no data anymore yet. And then we could see the raw scrape here if we wanna see what we, actually scraped. But as I said, we can just skip all, we can just delete all of this.

And then configure the Gatsby plugin remote code instead node instead, and then use all of our image helper plugins as well.

And that will do all of that code. So we don't need it anymore. So we're just deleted all of that code. And then to make this into a local plugin. We'll move all of that [00:28:00] code into our plugin. And then underneath plugins, there's a local source Crowdcast folder. It only needs an empty package, Jason, when it's a local folder.

When we are creating a creating a plugin that will be published on the M P M registry, we need to fold this, fill this in, but for a local plugin, it can be empty. And we'll just grab all of that Gatsby node file over there. We'll take the scrape file. That was our helpful function, move it into there, and then we can do the magic of doing plugin validation, which is my favorite part.

We can do the plugin validation and we'll say we want a Crowdcast username and we want the scraping b a p i key. and we can then go into our Gatsby config and actually configure [00:29:00] dysfunctionality instead of just having the, instead of having my username and the API key kind of right there in the code, we can configure it straight in, in our config.

So we can add the. Searching here. So we say that we wanna use the local source Crowdcast, and I like to name these local cuz it makes it easier for somebody looking at this file to see, okay, this is a local plug-in. I can go and look in the local plug-ins fuller instead of thinking, oh, this is a publicly available plug-in and go and search for it on the MPM registry to see the documentation.

It's oh, this is local. So I, this is not something that Gatsby, I. Officially, but I recommend it. And then I can then, instead of having the code kind of hardcode or having these things hardcoded in here, I can grab the plug-in options, which is now available as the [00:30:00] second prem here, and I can destructure those things from the plugin option, the Crowdcast username, and then the Scraping Bay API key.

and we'll use those instead of having them hard coded.

And hopefully all of this will work now. But I could also show you if we un, if we make this a bad configuration, if this is empty, for instance, and we try to develop now. We should be getting an error messages pretty soon, and it's always good to give users error messages sooner rather than later. So instead of just the scraping failing, we can actually see here that Crowdcast username is not allowed to be empty.

So we can we can edit and then we'll do a develop and we'll see how we go.

And, [00:31:00] Since we now call, have all of the images and everything on our, in our data layer, we can use that inside of the inside of the page. So we'll get all of the, we'll get the cover image properly and then we can use Gatsby image to get. Denies get Tobe image functionality. We'll grab the cover. Cover.

And then we also need to import the Gatsby image to use it. Just trying to do two things that at once so that this build is not gonna, with Zoom running the build is taking a very long time. I'm pretty, pretty fast. We're gonna be done. I'm hoping this will run and if it doesn't , you can read about it on my website.

I was, and here we go. Let's see if we have it running now. At [00:32:00] least we got the titles running. We'll see what's wrong. Why don't we have a cover image? We can go here and look at the cover. We do have child image sharp. We do have Gatsby. Did I just forget to, let's say they want 500, no, 400 is what we said we should be getting. Okay. It should be working. So let's just see if we can get it to, to run. So we have the coverage, the child gets the image data, and we are getting the image from the cover.

And there we go. There they are in the wrong location. Let's grab it and put it up there. There we go. And what's really nice now is that if we would've wanted to change something, we could just if we wanted to get the the ones that are, from another user, like the one we are looking at right now.

We could change the [00:33:00] configuration without having to, go into the code. So I'll try and have that running in the background while I do my wrap up and see if that works. So for you see FITC here instead of my own. We should be saying, seeing the webinars from this event. . And that's it for me.

If you wanna do your own Gatsby plugins, I do have a starter that you can find on GitHub slash queen Ray and there is a starter here for creating plugins that should be available on the npm registry. It sets up a lot of boiler plate for you and. Makes, it also sets up SEMA semantic release so that releases are deployed automatically or released automatically to the npm registry.

And S E C Ashare really enjoyed using it. So if you wanna create a plugin, you can check that out and ask me any questions [00:34:00] you might have while using it. And let's see if it has built. So let's see if we now can get the, Somebody else's webinar. Look at that. We got all of here. We have the gem.dev and all of the other webinars that is found on their page.

So I guess that's it. If you wanna know more about me, you can head on over to Queen ray.codes. I write a daily email about Gatsby and the Gem Sec. That's.

**Brian Rinaldi:** Thank you, queen. That was great. I can admit I like I've done some Gaby work, but I have not written a plugin and it's, but it looks pretty impressive, the number of like plugin points you have and different things you can do. Is it like, is it your recommendation that.

Because it seems like you say if you're writing some of this code, it's better to often to consider maybe moving it to a plugin, even if it's just a local [00:35:00] plugin because you get some benefits of out of it as, as opposed to just letting, mixing it in with your regular code. Is that kind of your recommendation?

**Queen Raae:** I don't see many people doing it , but I would like to see more people doing it because I, I see a lot of the complaints often is that your gaps be no for. File just gets really large because you're sourcing from multiple places or you're doing multiple transformations and you are trying to do all of that.

And some people then create a a gats beef kind of folder and then imports from there to try to organize it. But if you're a little mindful about it, you can actually do some of the stuff as local plug-ins and until. I think it was a guy called Cameron that made it so that the validation of the configuration also runs when it's a local plug-in, which may I think makes it really nice cuz if you're going back to a project after, it is couple of weeks and you're like or a couple of months and you're like, what?

Where are, where is he grabbing this inf, [00:36:00] grabbing this? Is he grabbing it from the end variables or grabbing it from there? What's up? It's nice to be able to see those configurations and be like, oh, and now I remember it's like it's an emoji and then it's the a p i key from there.

And if, if I now wanna change the name, my name on Crowdcast, , I can go and change the configurations instead configuration instead of going into the code and being like, where did I put that username? So I think that's a good way, but I do like to start I didn't. I didn't think about how slow the computer would be now, but

But, so that's why I was trying to show, like I would develop it in the Gatsby route project first, because it's easier. It's when you're doing the local, when you're doing them as plugins, Gatsby, don't really recognize that the files have changed and start the development stuff for you.

It's nice to do the initial development in the gas project and then move them into a local a local. Local plugin. And then if you see yourself using it again and again, like I have with [00:37:00] a fab icon, with my Fathom Analytics with the Snow then it's nice that you can put them on the MPA registry and suddenly people start using it and start contributing to it.

But that doesn't have to be your kind of, your goal, but it's nice to have them. . 

**Brian Rinaldi:** Yeah. Yeah. So you can use it to organize your code a little nicer and not have that. File. So this makes it a little easier for people to come in and understand. Makes sense. I get that. Anri has a question.

He says WordPress has classically had issues with plugins as they've been known to slow down sites. Something that the WordPress core performance team has discussed. Has Gaby had any issues with devs using too many plugins? Is there an overall performance impact 

**Queen Raae:** with the. I, since most of the plugins are most of the plugins people use, are in the source and transform step, which is grabbing all that [00:38:00] data into the project and then it builds out the site from that data.

It leaves all the data that isn't requested by the pages. So I wouldn't say that it creates kind of client side problems, but it can create if the source plugin you're using. Like the crowd Cat's plug gonna be made now, doesn't do. Extra caching, like it hits that p i point every time.

And in development, you might not wanna hit that end point every time. And then you can look, you can you can use Gatsby's internal cash to help you out. And if the plug-ins aren't using all of those things. And you pop in some, grab my YouTubes or whatever, and you have 10,000 YouTubes YouTube or, but probably don't have 10,000 YouTube videos, but, and you don't configure it so that it's less like the build time will, spend a lot of time getting all of that data.

And also if the plugin. Plugin has done a lot of intensive stuff inside of the sourcing and not inside of the transforming, like you should [00:39:00] be doing an onCreate node then even if the data hasn't changed, you're doing a lot of work. So that's one of the things that you might wanna look out for when you're looking at plugins.

And then of course, as with WordPress, I mean you can put all kinds of things. You don't have WordPress, don't do inequality insurance really. And Gatsby don't do inequality insurance except for their official plugins. The same thing with WordPress and it's always coming from the word, encoding for 20 years now, I guess 17, something like that.

Oh my god, even. I'm getting so old. Anyway. feeling. It's been 27, there's been seven. Okay. Anyway, coming from the WordPress community, like you do know that these things need you need to be a little bit vigilant and you also need to understand that these things aren't so hard to make when, once you start, learning to code more.

But I think that it's really cool that people can slap together. Webpages using just random plugins. And then when starting [00:40:00] start, things start to break or it's not doing exactly what they want, then they can dig in more and then maybe make their own little plugin and then learn more. And I think that was through true for Bird Press, and I think it's true for Gatsby as well.

and I'm not so much into the other frameworks. I just know them from afar. And I feel like not having a very consistent way of making plugin makes it even more messy cuz people then just start making packages and they're all configured in different ways and they're all like there is no consistency.

And some people love that because then they can do whatever they want. And some of us like to have a little bit more guardrails and so that things are a little bit more consistent and we don't have to. get, I can stay in the Gatsby frame of mind and not in everyone's third party's frame of mind. 

**Brian Rinaldi:** I, we only have a couple minutes left, but I am really curious about Valhalla cuz I I've read about it, but I didn't really dig into it much. So it's effectively separates out the data layer of Gatsby [00:41:00] without the front end of Gatsby. So you could put whatever front end site you want built-in.

Astro or what? Or 11 even, is that kind of what I'm understanding of the basics of . 

**Queen Raae:** Yeah. So they're taking and it's not fully there yet. Like at the moment you can only use the approved sourcing source and transformer or data plugins. But I think moving forward their plan, and I don't work for Gatsby, , I think moving forward their plan is that, Any kind of source and transformer plugin should be able to go into this.

And so it's essentially, I guess what they call a content hub. Now, there are other offerings doing similar things where you you can grab data from a multiply. Multitude of places and then you can connect them together. And we didn't go into the that since this was more of a plug-in talk.

But if you go more deeply into sourcing and transforming, it gets really interesting because you could have a markdown file with some front matter referencing a YouTube video, and then you can source YouTube video. . [00:42:00] And if those match, they're like ID matched, then you can connect them together and you can get that YouTube video.

You can query that YouTube video on kind of your blog post or whatever markdown file you have here, or your sanity post or data sim, whatever you're sourcing. Some content from that is referencing that video. And I think that is really interesting. At least me, like one of the things that have annoyed me always is you know, you make a YouTube video and then you like copy paste the title and the thumbnail into your content management system, but then you change the thumbnail.

And then you forget to change the thumbnail in your content management system. And if you use this correctly, you can then, search your content and you can search your YouTube and then you can connect them together and you don't have to double up on that data or that content information. So it's gonna be a really interesting to see when it goes like in fully into public availability to see if people like it.

I feel like the data layer is one of those things that people complain about because you then [00:43:00] have to. Very vigilant about grabbing the data again, when you wanna use it in your front end. But I see people complaining about it, but then when they start building more real projects, They start trying to put those guardrails in place and then they come back to, oh, the data layer's pretty nice.

Cuz you know exactly what you have in your data layer and exactly the shape of that data. So I think some of us has been in the Gatsby game for a while, was a little, when Esther announced yesterday now you have, You're sure that your author front matter is not an object. I'm like, yeah, that has never been a problem because when you source the data and ITFers from the data you have, or you can explicitly type it and you know how the data shape is before you're using it in your front end because it's all in the data layer.

Yeah. And 

**Brian Rinaldi:** I thought that was interesting that, that is a good point. That Astro is trying to deal with that. And it's always been. Part of GA speed, take one. But yeah and again [00:44:00] lots of companies, even a company I've worked for was trying to build this like consolidated data layer.

I think it is a problem for a lot of companies where they're get, they're sourcing data from all kinds of places, but don't have a way to, a central way to do that. So you're always hooking in multiple. Data calls in the single file, trying to pull all kinds of sources. Yeah I'm curious to see where that goes.