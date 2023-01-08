---
_build:
  list: false
  render: never
---

# Solving Search for Static Sites

[00:00:00] 

**Liam Bigelow:** fantastic. Thank you for the intro. Happy to be here. Happy to wake up for this. The time could be worse. . Cool. So I'm here to talk about Page Find it's an open source search solution for static websites. We'll dig into all of those terms soon, but I guess I should start with something about me and about the company I work for.

So all of my slides are on this website behind a search, cuz that seemed on brand. So will, we'll pull that up. So I'm Liam, I'm a software engineer and I work here at Cloud Cannon somewhere there's a logo. And so we are a GI powered cms and our bread and butter is definitely static websites. So things like Hugo 11 t Jekyll, or anything that can build a static website.

Like Next or Astro or NT or mc docs or on and on. Anything that sort of ends up as a static directory of files at the end that you can [00:01:00] host is something that we love. And anything where the content lives and get, and you get version control and you can give that to your editors. That's all of the sort of thing we love.

And I lead this all as a preamble of why we build the open source tools that we do and Page find as a sort of open source tool released by us as a company backed by us, maintained by us, et cetera. And we've got a few of those. So if we pull up our open source we've got a range here.

So here today we are here to talk about Page Find our search solution. We also have Rosie, which can translate websites reseed, which can help. Base path configurations on complicated sites where you don't want to make that part of your SSG itself. And likewise, page break is a different way to page eight websites.

Actually a common thread between all of these is that it's static site post processing. So if you imagine post CSS lets you change things about your CSS file after you've [00:02:00] written it without writing it into the CSS file, this is post SS g if that were a term, maybe we'll coin it.

We haven't yet. I think we, we mostly call this something like SSG chaining. But the general idea is keep your static site simpler. This simple core that does what it needs to do, manages your content. And then off the back of that you can add all of these things. They're all SSG agnostic, so you're not building a search plugin for 10 different SSGs.

You get to, to share that work across the whole ecosystem. The general idea of why we choose these things to build and why we build things at all is to reduce the barriers both for static websites and for get based content. Because those are our bread and butter. We think they're fantastic workflows.

We really enjoy working in that way and we enjoy other people working in that way. Some of these things, for example, search can be a sticking point [00:03:00] for static websites. And it can be a sticking point for your content stored and gi. And so anything we can do to reduce the barriers for a person or a team or a company or a project to adopt that workflow and really go all in without without caveats around their setup we find that valuable to build and put out into the world and maintain.

When we're talking about these tools or when we are thinking about what tools to build normally comes from, I'd say a pain point that we directly hit. So one, we have a lot of customers building websites on us and partners. And two, we have a team within our company that builds websites for partners.

So it's almost like a little internal agency. And as a result, we hit a lot of the pain points directly ourselves, both on our platform and in the ecosystem around the sites that we need to build or ship. And similarly we consult on sites and help people [00:04:00] build out their platforms.

And so we hear a lot of feedback from them as well. So when we talk about the pain point of search we'll first cover what a search index is. . So at a high level, at a really high level, a search index is just all the content of your website in one place that you can search through.

It, it depends on what you're using with how true that is. Most backend hosted platforms won't be storing this in one giant glob but most front end search libraries that you might have seen will be storing this in some sort of giant glob. And there's some amount of post processing you can do.

It can be index based on the word to pages, all of that sort of thing. But the general idea, the general concept is that to search a site you need to have this. So for example, if you are using a [00:05:00] client site search an existing client side JavaScript search, you've. Pretty much got JavaScript loading in that whole index into the browser and searching through it and finding the page that you need.

And that's one way to do it. The other way is you can ask someone else who has the search index. So some third party has done all of that work. It's maintaining what I'm calling the giant glob of files. And you ask them to run a search for you and return a file. And those are really the only two possible paradigms that are very common.

There's a lot of hosted third party search solutions or service that you can self-host yourself that are still external to your website. And there are a lot of JavaScript libraries that can be on your website and allow you to search your content in line instantly, near instantly, depends how big it gets.

[00:06:00] And. . I guess my first clarification is that both of these are good workflows. I like both of these. They both have many use cases. But the pain point that we see saw often would run into is what I've called the gully between these solutions. And that gully really comes from handing over sites.

We build a lot of sites. We hand off a lot of sites and one of the best things about handing off a site is that you are done with the site, you're not building it anymore. Ideally you're not maintaining it as much. It's a big reason that a lot of people will choose a static platform is, H T M L doesn't change a lot.

You can upgrade it sure but it doesn't get security vulnerabilities. It doesn't need maintenance down the road. . In many cases you can set and forget which we love. And that's where neither of these quite fit the bill. So[00:07:00] the holy grail of static sites that we see is the truly portable, truly self-contained static website.

So that's static website built into flat files, no fancy hosting. You can chuck it behind any engine X server, any web server. You can host it straight out of an S3 bucket. There's nothing, there's no extras. It's just a get repo. And that's it. And that's where client side search is fantastic.

It's fully self-contained. It runs in the browser. It's all bundled in. You don't need to maintain anything. It doesn't have security updates, it doesn't go out of business. So on those. Fronts. It's a great choice for us, and we'd often dabble on a site with adding this kind of search. The main pain point with that search and often people's gut reaction to these front end searches is the scale problem.

And [00:08:00] so that's this glob of files, giant glob of files is in the name. It's a giant glob of files. As your site grows and grows, that can get bigger and bigger. There's a certain scale where loading in dozens and dozens of megabytes into your site just to search your site isn't a great experience.

You've got both your own bandwidth costs for serving that. You've got people on bad internet connections or just areas that don't have good internet. They're either gonna have a really poor search experience or they're just not gonna be able to search. or it'll be really slow just to get the ball rolling.

And so for those reasons I, there are definitely a lot of sites where that still makes sense if you know that you're not gonna grow past a certain point or if you're just making the choice for now and you're happy to upgrade it down the road. And that's where this concept of handing off sites for as the spanner in the works, [00:09:00] which is if we hand off this site, there's some scale where it's no longer going to be feasible.

There's some amount of content that the client can add to this website where it will pass that threshold and their search won't be great anymore. And we're not in control of that. We might know the order of magnitude of content that someone's likely to add, but it doesn't take long for these to become unacceptably big, at which point.

you're gonna have to jump back into that old project, move to some other search solution that's gonna be non-trivial. And because there's such a future migration path there, often we'd rule this entire choice out. And that's where we look at some sort of third party search. The solves a lot of our issues around size.

There's no real upper bound, as long as you've picked a good platform to how big it gets, how much content it returns, it'll always be fast, as [00:10:00] long as you've picked a good platform. Or you can self-host it if you want to retain control, if you want to not be relying on a third party to stay in business.

But we lose a lot of those attributes of what I call the holy grail of aesthetic site, which is that. This site is no longer a fully self-contained static site. You can't host a search server out of an S3 bucket. And so with this it's more complicated to hand off. You're either handing off both a static site and a server to host, or you are handing off a static site and setting up billing for a third party and handing over an account there and making sure that they keep that online.

This choice is also not great. So we went back and forth between both of these. We've built a lot of things on both. And then recently ish earlier this year we hit a point where, once again, we had about three different things fall [00:11:00] on our lap. They all needed search. And so we, we started building something that sort of fills this middle ground of a fully static search on.

Static sites of really reasonably any realistic size. And that's maybe a bold claim. It might not be entirely true today, but we're still talking tens and tens of thousands of files working perfectly fine. So with that's pretty much all my slides and we'll be hopping over into a demo.

As with any live demo, I'm hoping that this will mostly go well. They tend to, I say optimistically . And for this demo, we're gonna add it to the 11 website which some of you may have seen. For anyone who hasn't eleventy the static site generator, JavaScript based builds lovely static sites, builds them really quickly.

And [00:12:00] importantly for this search this talk has a big documentation site. And a search page that we can improve. So I've got some steps here. I'll mention that the site, if you go to my GitHub, which I'll pull up at the end it'll be in my recent repos. There's a link to browse the site or you can pull it down.

And these demo steps here are pretty generic steps for adding page find to any website and the handy steps that you can do to start configuring your search experience. So I've cloned the git repo because we don't want to have to do that on the call and we will start following it. So page find is page find.app.

We've got a whole documentation site, and we'll start with the getting started. . And I guess the preface to this whole section, it's gonna go pretty quick. Page find, is intended to be very low config. We don't have a config file.[00:13:00] Very easy to set up. Sorry, we do have a config file, but we're not gonna use it today.

Clarification. So we'll start off with this lump of html and if we drop to our search page in 11 t we're just gonna replace the entirety of the search page with this script. This script is loading some assets that don't yet exist, CSEs and Java script tracking a search element, and it's calling some JavaScript to initialize this based on those assets that of course don't yet exist in a proper setup.

You'd move these around, you'd put your JavaScript with the rest of your JavaScript, you'd move your CSS up to the top of your page, et cetera. for the purposes of this, I'm just gonna keep them all as one little lump in line on the search page. So we'll save that and our site will not really do much.

But we'll [00:14:00] run an 11 T build. So as I said, page find is a post processor on a site. So the first step to indexing a site for search is to build that site into static H T M L. And that's important because Page find reads the output of your site rather than the input of your site. So we're not indexing the markdown, we're not indexing data files.

We're indexing static H T M L files that you've built. This is great because it's completely agnostic of ssg. We don't mind what you write it in as long as you output html. And HTML is this great middleman format that's stable and been around for a long time that. all websites have to go through.

So we really like hooking into that cuz it gives us the broadest market for any tool. So with that we've got our site, static site. I will pull up just a normal static server so that we can have a look at that [00:15:00] and hopefully that opens in the right browser, but we'll make sure that it does. And here's our same site locally, all of our docs and a search page that strangely is working.

I think that's an old test. We delete the site directory, we'll run our build again and try that again. Old artifacts note 11 T I'd love it if you cleaned the build directory anyway. So we'll pull up our site and now we should see a correctly broken search page. Those assets that we added aren't doing anything cuz we've just referenced some files and we need to make those files.

Thankfully, we don't actually have to make those files. That's all done by page fund. So we'll kill this and we'll run page find. So page find is a binary arrest binary. You can install it through cargo, you can download it straight from GitHub actions. Or the easiest way is [00:16:00] we publish an n px wrapper like NPM wrapper that you can run through npx.

If we run NPX page find dash S for source and we run it on our site, it will go and modify our site. Then we'll see that run. It'll run really quick. So that was 149 pages for the 11 site 0.3 seconds could be worse. And we are done. It's modified our site on disk and we can rerun our static web server from before.

This is just the Python built-in server. I'm using it to show that page find isn't doing any magic here. There's no server backing the search. And if we pull this up and reload, we now have a search input. Now I know that one step we're gonna have to do that, that it will look quite bad if we don't, is that page find is not styled for the site.

We can see that it's dark on dark isn't great. I've got a step for that here, which is just copying in a little [00:17:00] theme. So page find, exposes everything through. That's the wrong file. Ah, what's our css? The page fund exposes everything through c s custom properties. So there's a range more than this.

You can change sizing et cetera. But in this case, we're just gonna go through and replace all of our styles. Since Page finds a post protestor, whenever we make changes to the site, we need to rerun hour build command, sorry. This build command, I'm deleting the site directory running 11 ties built-in build and then I'm running page find.

This time I added dash dasher to page find. That just shortcuts creating a static web server over your site page. Phone's not running anything on that web server. It is just a static pass through to the files, but it saves a command. So we'll pop that open and [00:18:00] now if we go to our search, we can search for a thing.

and we've got results. And that's really the page find installation. It's add the search input to your page and run page find over your site. And that created the assets that we needed to load. It's stashed away some indexing stuff that will get to soon and it plugged it all together.

Lets the UI access it and we've got a search on the page. One reason we made it this easy to set up is that just personally I always greatly disliked having to re-put my content in two different ways is always how it felt. I'd have all of this templating on my s to write all of the content into H T M L and then some other template to write the content into adjacent file or to write the content into some third party service.

And that always felt redundant. So instead we just hook into all of the work that you've done to output the content in some place. So there's a few things [00:19:00] that we can customize and I've got them listed on the guide. I'll just close our redundant pages there so we have some issues on our search results.

So one you can see is that a lot of these have the title Eleventy documentation. And that's because of the way Page find pulls titles. And I'd say because of a quirk on the eleventy site, every page has an H one at the top here that says 11 documentation and Page find uses H one s for its titles. There's a few ways that we could tackle this.

We could specifically tag the other H one as our metadata, or we could ignore this top H one and we're gonna ignore the top H one. , everything in page find is controlled through data attributes or nearly everything. It's definitely the preferred way to do things cuz it means you just get to little bits of config around your template and build your search experience up around that.

So in this [00:20:00] case we've got the data page, find ignore attribute, which just tells page find dom wise, everything in this element, skip it and ignore all means. Also skip pulling things like titles out. So there's a distinction there between indexing things for search and pulling out rich information about the page to show.

And we want to skip the rich information about this page. I'm remembering where everything is in the site, but I believe in the header we have. Yep, this looks like us. And so just around this whole header, we'll drop in a data page finder. Ignore and ignore everything in there. We will once again run our little build command

and we are back online. If we pull that up and we now search for, I guess thing is the search of the day, we can see a big improvement. We've got relevant titles, each page, [00:21:00] and now we notice again, we've got these jump to heading things littered in there or new in littered in there. And again, it's because Page Find is pulling your H one on the site.

We've got little labels in our H one. We've got links that can jump down the page in our H one. But as we've just found, it's very easy to pu punch things out of the index. So if we pull up, find these, so there should be a new in there. It is. That has an element that's output by some JavaScript. It doesn't matter how it's output on it, we can just put data page, find, ignore, and then similarly, we can find out where they've got jump to heading and we can put that in.

There are other ways you could do this. If you add a page, find config file to your repo, you can specify selectors to ignore. That could also be a good path. Here we've got little things like [00:22:00] screen reader only. If we just wanted to cut out all screen reader content from our search index, that'd be a way or Aria hidden content.

You can pass in any c s selected there. But for this example, we'll just use these data attributes again in explaining let's every time up rebuild our site, re-index it with page, find rehost the files, and we'll run another search.

Fantastic. So now we've just got the titles of our pages. We've got the content pulled out automatically. We could customize it further if we want to, we won't for today. And all of our search terms are highlighted, which is lovely. So there's a few places we can go here. One feature that I usually add on a demo of this is around the filtering and tagging.

Because that's such a rich workflow, that's really easy to add. I'll also [00:23:00] cover a few things around some new features as well as we'll just discuss the roadmap, a little bit of page find and where we might go to start with what else have we got here? Yeah, so one other good step that's definitely a good one to do on any site that you're setting page find up for is to use the data page, find body tag.

So this one, it does two things. One on a page, it tells page find. Instead of indexing the whole body, just index this bit. That's useful if you've got columns around your content or CTAs at the end. If you're indexing something like an article, it's useful to wrap just that article content in the data page, find body tag.

The other thing that this does is that if you've added this anywhere on your site, page find will just wholesale ignore any pages that don't have this tag. And so what that means is it's a really [00:24:00] easy way to, to exclude a lot of your pages say the search page itself or your homepage that isn't that useful of a search result, et cetera.

11 t quite helpfully already has an exclude from search attribute in its front matter. So all we need to do is wire that up to the main layout. So we'll pull our main layout up and yeah, we'll grab our main class here and if there isn't an exclude from search, then say that we want it to be another page fund body, and that'll exclude our homepage and a few other pages on the 11 site and just make our results that much more relevant.

And then while we're here, we'll also add a filter. So like everything in page find filters are just tagged on your page. Most likely you've already got [00:25:00] some things on your page that are useful. Filters or metadata. If you've written a blog post, you've likely got the author on the page Some.

For page find, you can just tag that element as a filter or metadata and that'll pull it through, show that metadata and the search results allow you to filter on those things. For this one, we're just going to ack into 11 t's Breadcrumb and use that as a filter. It won't look perfect, but that's this little breadcrumb up here, but it's a handy thing they've got on the page, so we'll grab that.

And I guess we'll also need to find exactly where that is cuz I've forgotten. We hunt down our breadcrumb.

This looks like us. So the breadcrumb goes through the 11 team navigation plugin. Rather than edit that, we'll just cheekly wrap this whole thing in a span glass with a [00:26:00] page find filter. Page fine filter in this syntax, just catches everything in this element and uses it as a filter for the section key.

You can have multiple sections that all plug together. That's pretty simple. So we will do our little thing,

how we've broken it, in our main. Interesting, and this is why live demos are great. I've probably messed up my non jokes in some way. That's always fun, isn't it? It's not the right spot.

See if that works and if it doesn't, we'll just flag this one because it's not a page fund issue. It's just a me writing code live issue. And I'm sure people are screaming at me about that one, but that's how you'd do it if you were good at writing Nu Juts.[00:27:00] 

So with this we should have a filter set up and ready to look at, and if we jump back on it, I was on the site and we search again for thing. This time you'll notice that we've got a little section filter that's automatically being pulled up in our sidebar, and in that we've got all of the different breadcrumbs.

I said this wouldn't look great because it's a big element. Capturing data page finds turned those into little sentences. Ideally you'd tag just the element itself, which wouldn't do that. I didn't want to delve too deep into a plugin to do that. So we've done the cheat for today.

But we can tick any of these and pull up their things. I can see that there are no results for that. And that's as easy as it is to set up filtering in page find. And one thing I didn't mention is the images are all being pulled through. That's of course configurable. There's definitely a lot of configuration available, but there is almost no configuration required, which [00:28:00] is the way I like things to be which is honestly very true to the way 11 works.

I approve, so to show something new for people that have seen me run through page five before one of the new features that we've got is multi-site search. So if you've got multiple websites in an online presence or any, anything along those lines, page fund will now let you search across those live in the browser.

For example, if you've got a marketing site and a blog and a docs site that are all separate sites, you can use one logical client side search without any funky server side bundling steps as long as you've got some cross origin headers set. So to do that we will jump down to searching multiple sites on the page fund docs, and we can see that it is just this little extra line of config when we initialize our page find UI that we're using here.

One thing I didn't mention [00:29:00] for anyone that's actually going to go and dabble in page find and build something out, . There's also an underlying JavaScript API that the UI uses that you can import directly. So if you are building out your own search component in your own framework, a lot of people might just build a little search and put an alpine and dump the results out.

That API is really easy to use and is also a great choice if you don't like exactly how the page find UI renders on the page. So we will pull up our search page with our config for our ui. We'll come in here and add the merge index settings and for our index, that will merge. We'll say that we also want to search the page, find documentation and here you point to what we call the bundle directory for page find.

By default it's underscore page find in the directory that it indexes. But you can change [00:30:00] what that is. For example, some platforms don't like hosting with the leading underscore ahead of time. I've configured page fine.app to have cross origin headers. So the allow access, control the forwards that I always have to Google.

It's got those headers on it, which means we can load its files dynamically in the browser as we are searching. So we'll pull all of that up, rebuild, just so that we can get that new configuration into our template. Re-index the site, though indexing the site is no different. The indexes don't contain multiple sites.

And if we open our website again this time, if we search for something say if we search for search, then you'll see that we've got an interleaving here of. Page, find results from the page, find documentation and 11 two results from the site that we're actually searching on. And if we look at our [00:31:00] network, you'll see a lot of requests for various things.

But importantly, I guess if we filter this down to page find, and you'll see that we load this page, find entry, Jason is our initial hook into searching a site. And we've loaded one here for the local host site that we're on. And we've loaded one here directly from page find.app. And then whenever we're running a search, we're loading all of these little index bits from each site.

And this is a probably a good time to talk about what these index bits. To do. So I'll jump off to a bigger example. This one is available for anyone to come look@xkcd.page, find.app. I've used this in a previous talk. Thankfully all of XKCD is creative Commons by attribution. So here is some attribution because it's a fantastic data set to search through.

It's got transcriptions, et cetera, et [00:32:00] cetera. And we'll do a search and walk through what's happening in the network tab because the entire premise of page find is that it's a fully client site search that doesn't use a lot of bandwidth and remains really fast. And this site is a good one to test that on.

We've got two and a half thousand comics. They're not particularly long, but it is a data set that's starting to get to a size that would be, I would judge as prohibitive for a fully bundled client side search. When we focus the search input, we load a few dependencies. We load page find's JavaScript.

We load some entry json that's a tiny index that just says what are the pages that exist. We've got the metadata index, a similar thing and we've got the web assembly and a filter file. So page find is running in, we assembly in the browser compiled from a similar code base to the main binary.

This is partially for the speed of we [00:33:00] assembly but also partially just to ensure that we're using the same code to index and search to make sure that things are consistent and run well. This is also a very small it's cash, so that doesn't help for my demo. It's a very small file if I do a hard reload.

Hopefully that'll do it for us. Ah, disabled cash. All righty. There we go. So that web assembly file is 50 kilobytes. The little, all of these little indexes, very small. So we've initialized our search and about 90 kilobytes on this site. If we then search for something like the, we'll see that we load a few little index chunks, some result fragments and we can ignore that image because that's not actually part of page find.

So now we've done a search in 200 kilobytes, and this is a pretty steady level of bandwidth usage for searching with [00:34:00] page find. That's maybe 300 kilobytes was when I tested it on ndn, just the entirety of the Mozilla documentation networks. Documentation. Because of the way that page find fragments, everything.

So the key idea behind page find is that these indexes are chunks generally arranged alphabetically mapping to a set of pages. And so what that means is if I've come in here and I've typed the, there's some little portion of the index statically built that contains words starting with the or something along those lines, and we just need to load that index and search through the pages within that and find them and pull them up.

And those indexes as your site grows and grows. Page five just outputs more and more indexes not a prohibitive amount of indexes. You know that the big O notation wouldn't be anything more than Ian, I'd [00:35:00] say. . So what that means is just you've got a few more files to host each time, but if your site's growing and growing, it's got more files to host anyway.

One way to think of this is like you are pre-building the actual searches ahead of time to a degree. And so as a result in the browser, we can dynamically pick and choose what searches we need to actually load but in reasonable chunks, that means you're not outputting 20,000 tiny little search indexes every time.

So that's what's going on behind the scenes. Additionally to actually load things like the title and the content, we have these little fragment files just so that the index doesn't have to contain all of the content of every file. In general page find. More requests than other services, but they're all really small.

They're all static, and it means that everything remains really fast. Modern browser HTTP two [00:36:00] standards make these requests a breeze. They're parallelizable and they're small. Everything's small. Everything loads quick. So that's a little look behind the curtain, not too deep, but just so you understand why Page finds doing what it does and why we can claim that it scales two thousands, tens of thousands of files.

We're seeing a few people out there up at the a hundred thousand file mark that are finding success with Page Find It. Honestly, frankly works better than I thought it would for something that, that hasn't been optimized entirely for speed, just for bandwidth. But. As a result of the low bandwidth and how little that we are pulling into a browser, the speed is actually really good compared to loading a hundred thousand files search index in its entirety into the browser.

So that's about all from the demo. There's a few more [00:37:00] things actually on that multi-site. We won't implement them, but you can come in here and you can wait indexes above one another. You can say that the 11 t site's more important than the page find site. You can add filters to each index so that in the sidebar you can tick which one you'd like to search through.

And a few other things. And there's a few other new features. A good way to find those would just be to check out the release notes on GitHub in here. and I guess I will somewhat wrap this up with some discussion around what future features might be in the roadmap of Page find. So if anyone has any questions, now's a good time to drop them in the chat and I'll see them at the time that they come through.

If you've got any feature requests or concerns about Page fund or anything that you want to know, anything that'd love it to do anything that you're wondering [00:38:00] whether it does just ask me. And I'll talk through this on, I believe I've got a fifth slide. I do the roadmap. So there's a few things that we are definitely gonna build.

One of those is going to be some sort of spell checking or fuzzy search. This one is probably the hardest thing on this list to implement, but we've got some ideas. Hard specifically for us because of the way that we fragment our indexes. So since everything is chunked by word if you've typed the t h e and we've loaded the indexes that start with th but your typo is in those first two characters, we don't actually have any of the content that we'd need to do a fuzzy search on.

So there'll be some tricks under the hood to implement that. The general idea of any feature that we will or won't implement it is whether we can add it in without really increasing the bandwidth. Usage. Bandwidth is the number one goal for page [00:39:00] find. We don't want to use people's bandwidth. Contextual ranking is something that's already partially in, but will be improved on.

So things like searching long sentences and ranking results better based on word proximity on the pages. We already have some degree of that. And actually one thing that we have that I haven't shown is hearsay. We can search for 11 Edge, we get a bunch of results. It's pretty well ranked. This one's up here probably cuz there's 11 and Edge.

Both there. Page find actually supports full text, exact searches, so it's similar to how you do it in Google. You can come in here and wrap quotes around the whole thing and pull out individual pages. And that's a good example of the sort of rich search experiences that we can deliver through loading.

Essentially what is a lot of content in a really small way. It lets us actually search full text [00:40:00] really fast. Really simply, you're not gonna find a full exact text search in the browser, this small at least in the current landscape. And then this is a big one. This one will definitely come soon, which is some way to wait some elements above another.

So for example, make searches that match the H one on a page, bump that result much further up the list. Then searches that match just the body text on a page. And that'll be customizable. There'll be something like a data page, find weight attribute that you can litter around your site just to really improve your own search relevancy.

And then there's a few things that we are maybe gonna do. One thing I'm keen to look at is some sort of library of UI widgets. What we've been using here is the built-in page find ui. It's built to be pretty simple and work anywhere. And the goal I'd say for it is to keep it simple enough that it doesn't become the one mega component that can do [00:41:00] everything.

And so what I'm looking to do is provide multiple versions of these. So for example, one thing a lot of people want and love is something like a search button in the menu bar that pops up in a modal that you can search in, or even a little inline dropdown you will have seen around the place. I've seen actually a lot of people managed to build this exact page, find UI widget into those use cases.

And it's really awesome to see that, but it would definitely be an easier world if Page Find just gave you a way to do that out of the box. And I think the way that we'll do that is some sort of library around. You can grab the menu bar widget or you can grab the page widget. Some things along those lines.

Since everything sits above the stable JavaScript API that you can call to search, it means that anyone could build these widgets. They're all there's no secret source between Widget and the page find. It is just a generic wrapper over top of a stable. Documented change logged API for [00:42:00] searching a site, local API to be clear.

And then a few little things that have come up. And I think if we get more attention might get built. It's a high good looking on them maybe for at some point. So one is incrementally regenerating this index especially for some of those pages I talked about that are up in the hundreds of thousands of files mark.

Once it's indexed the search and the browser works remarkably well. Indexing it can take a little while generally still as faster as or faster than your static site generator build. As a good benchmark page find runs about as fast as Hugo on a set of content. So if Hugo took two seconds to build your site, it will probably take page, find about two seconds to index your site.

Unless Hugo's doing any data things, which will make it take longer, page finders is fully static. And a node API just to help integrate it. If anyone's used ES build, you'll know that it's got a great sort of [00:43:00] node API that lets you hook into the process and control things. This sort of thing would let you build page, find into static site generators easier and hook into files that have changed and that sort of thing.

But even without this, we've noticed that Loom the new SSG built-in, Dino actually has a built-in page find plugin that you can just turn on and that'll handle downloading everything for you and running it, and you can just drop the UI widget somewhere. So those are things on the maybe list. And if there's anything else, the GitHub issues are a great place to reach me.

So I try to be pretty responsive in here. I'd say I hold true to that. So if you've got anything you want to know about Page find open a discussion. If you've got any bug or any feature that you'd like for page find, Open an issue and those will ping me in at least three different places so that they definitely won't be ignored.

And I guess with that, I'll open to any anything that's come up in the chat. [00:44:00] Any, anything specifically from you, Brian, that you've got queries about. Any discussion points. Happy to chat. 

**Brian Rinaldi:** Sure. Yeah. We've got a few minutes left for chat. I, we did get a question. I was really impressed with how easy that was to get going.

I remember, I think I remember sending up lunar, which was what I used at one point was a bit of a pain to get going at first. So yeah, I was really impressed with how quickly that set up and how quickly the index ran. So really nice. So thank you. That was great. We did get a question from Brian.

Is there a way to make the index more granular so that each hit is something like the title of a heading down to level H five and the content when the, within just a section of the document between the heading and the next one. Sounds it sounds like what he's saying is basically, can you index [00:45:00] like these, it sounds like these are pages that probably have some kind of cert navigation across a single long page.

And he'd want to have a hit be a subsection of the page, if I'm understanding correctly. Yeah. 

**Liam Bigelow:** Not yet. , just thinking through the internals, that would not be particularly hard to resolve. So currently we've got the data page fund body tag that I talked about that can tag a body of a page. It's definitely reasonable that you could put, so currently if you put multiple of those on one page it will index each section separately.

But as one document still it's definitely reasonable that you could add an attribute into that tag to say, index this part as this hit index, this part as this hit. It doesn't exist yet, but that's it's the sort of thing that if you open an issue with a few details about exactly how you'd love to see it work it'll probably happen sooner than you might think.

Yeah, that's, 

**Brian Rinaldi:** I can, it does seem like I could see [00:46:00] that being useful cause a lot of particularly documentation sites where I could see this being ex in a, like a kind of, Common solution for documentation site, which are often static most of the time. Have that like sidebar menu that's okay, we got to the page, but now we have the probably a bunch of different pieces on the same long page.

**Liam Bigelow:** Yeah, for sure. No, that makes, yeah, a lot of sense. 

**Brian Rinaldi:** Excellent. Okay. So in, I had a question. So you said that you basically have had pages, sites that had like up to a hundred thousand pages indexing here and is still worked really quickly. So is there, sounded like you were surprised about that.

Is there an upper bound limit that you're like, okay, your site probably shouldn't be you should find a different solution? 

**Liam Bigelow:** I'll say, Definitely there is, but I dunno what it is. , I haven't fuzzed those upper ranges yet. I'd say definitely 10, 20,000 files is [00:47:00] completely fine. We haven't seen a big issue.

Really the one index that will grow somewhat linearly with your site is that little metadata index that I showed it loading initially. And that always stays really small for mdn. I think that was still at 30 or 40 kilobytes sort of thing. . But at some scale that might become really big.

I think currently the main thing you hit is page find starts to take longer and longer to index it on the back end. But yes I don't particularly know yet. My main surprise with it running so well at that size is just that all of the development till now has been focused on this bandwidth constraint that's been the one line in the sand of let's make it work and let's make it not use a lot of bandwidth.

So there hasn't been a particularly big amount of work on optimizing the speed of the search or the memory usage or any of those things in the browser. But just as a result of the architecture of it all it happens to work quite well at that scale. And I've got some work [00:48:00] planned to make it even better at that scale.

So I can't say what the upper bound is yet, maybe around a hundred thousand pages. But generally, if you are building a website for a client, you are gonna know the order of magnitude that they're likely to add content in. And so it's very unlikely that they'll go from 500 pages to a hundred thousand without significant changes to the website anyway.

So we find it gives you a lot of confidence you can. Yeah, we're very confident shipping sites with us on it and not worrying about how big they get. Yeah. 

**Brian Rinaldi:** And I can imagine As an alternative, if you had to use something like Alia, once you reach that, those, once you're in the tens of thousands, you're probably having to pay, I don't know what their fees are cuz I'm on the free plan, but 

**Liam Bigelow:** yeah.

You don't have to pay, which is nuts. You've gotta pay your own hosting bill, but that's just static files. It's pretty easy.