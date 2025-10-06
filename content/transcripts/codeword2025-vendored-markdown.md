---
_build:
  list: false
  render: never
---

**Kian Newman-Hazel:** [00:00:00] Thank you everyone. Um, my name is Kian. I'm a documentation platform engineer, uh, cloud floor. We going over something we call markdown, which is. Our way of making sure that kind of all our content is consumable, obviously for humans who we write it for first and foremost, but also that all our nice little interactive experiences, our tabs and everything like that, our code blocks makes sense in Tex Mac down for LMS as well.

So we'll go over kind of the three kind of distinct types of users that we're kind of aiming to have our content work for. We have humans, you know, everyone watching this when you visit our documentation, what you see, you know, you see our color scheme, our gray, [00:01:00] our. You know, orange are blue. You see all our components, you see our tabs where you can click between them.

Maybe it's instructions for the dashboard versus the API versus Terraform. We have external bots, you know, everyone wanna, things like Google Bot, um, being where, this is how we get onto Googles is how we get into search engines. And so we need it to be accessible to them. We don't want to block them. We want them to be able to pick up the, you know, kind of.

Meaning of the content in the HDML, so that if you search for Crowdfire docs, how do I do this? Google has a rough idea of, you know, which pages contain that content and it can, you know, rank it so. And obviously internal bots is kinda our third sort of niche. This is sort of internal customer use cases where they want to consume our content.

And so there's sort of three distinct groupings I suppose. Dashboard, obviously, you know, kind of our single pane of glass for if you need to configure anything, here's where you go. [00:02:00] They want to point our Mac down and display it in line. Obviously it's great if you have documentation. It's better if users don't have to, you know, stop what they're doing.

Go find the documentation, dig it out, and then, you know, keep swapping tabs. In this case, they pull in some of our markdown content that we're offering and display it in line, and so obviously the benefit here is that they don't have to write their own. And it'll get, you know, they'll drift away. There'll be a typo in both hours, but we only fix it in hours and you know, it just stays in sync quite nicely if they can pull from hours as a source of truth.

We have a business intelligence team and for them, they have lots of projects around, you know. Big data workloads and part of it is a content warehouse. And so what is all of cloud fire's content? You know, our data of documentation, our API site, our learning center, ingesting all of that in a single place, you know, with kind of a, a nice sort of structured format is super useful for all projects.

And so we want to make sure that they can grab our content quickly, [00:03:00] seamlessly. They don't have to do a lot of, you know, custom business logic for us. It should just work. And so we have customer support, uh, on a similar sort of angle where, you know, we're looking into AI powered chat solutions. So, you know, if you're a customer, you want to make a ticket, we wanna see if we can, based off what you're telling us, and based on the information, our documentation, can we help you without you having to, you know, create a ticket and kind of wait for a human to, uh, be able to assist you.

And so. Here lies the problem. The developer documentation is a very big project. We have about 6,680 markdown files, which result in 5,617 pages of content, so that's 5,600 plus, you know, unique HTML pages with their own paths that are in our site map. Within these, we have about 124 astro components.

These are sometimes interactive, but typically not. [00:04:00] And obviously we have the React components where we've done these because it needs to be filterable, it needs to be searchable, and so we have a lot of components and we also have a lot of usages of those. We have one component called render, which is for including reusable mac down snippets.

That one is used probably 2000, 3000 times in our documentation. And so diary lies one of our problems with. The raw content that we're writing. So when we're writing MDX, we see that turns into HTML. And you can see on the left here our tabs component. It's written with accessibility in mind by the astro team.

We use Starlight, which is a kind of off the shelf documentation theme by them. And you know, you have the role attributes, you have the ARIA attributes, it's accessible. Screen readers can use it. And so it makes sense not only to the human who might be pressing on a tab. For the browser to understand it as well.

The issue is that there is no plain text [00:05:00] representation of an interactive experience. You know, the whole point of plain text is that you can't really click on anything here. And so on the right you can see this is what you would get if you took this Starlight Tabs custom element HTML and ran it through something like Turn Down or N Hitch on Markdown.

You know, there's lots of battle tested markdown HTML converters. Typically you do have to do some legwork when you are doing these custom elements and you know, kind of custom CSS and js. And so you can see here we get an audit list with tab panel six and tab panel seven as the link targets. These are usually intercepted by JavaScripts.

You know, we prevent the default event and we un we share the tab. Not very useful here, you know, there's not really any kind of linking between the two. If my one content wasn't literally one content, you'd have nothing linking it to that first option, and so. We see custom elements [00:06:00] is the main part there.

So you see Starlight tabs, you see ASRA hyphen breadcrumbs. You see Starlight hyphen Image, hyphen zoom. These are all custom elements, and so they have no meaning to off the shelf kind of libraries. They know what a diviv is. They know what a hitch wants. Hitch six is. They dunno what these are. And so we have to write our own custom rules to kind of inform it, Hey, here's a structure of it, here's what it means.

In some cases, we just remove them, like obviously there's no plain text representation of an image. So Starlight Image Zoom is a cool little plugin by the Starlight Maintainers, so any image you can click on and it'll zoom it to full screen and show you a caption. Not useful for markdown, so we just remove that one.

Um, the other issue that you kind of can run into HTL we'll touch on a little bit later is just that it's a lot of tokens. You know, kind of the opening and closing tags are great for programmatic passing in. Like at X ML library, for example. Not so great when you're trying to save on costs with lms. [00:07:00] Do one below.

You can see here is an example of the MDX hour writing. So you can see the render component and the package managers component render. Here is our kind of trans exclusion. It is our blocks of markdown that we reused in several places. What you see on the page will be nicely rendered, but obviously what you see in the Mac down, it's missing the content.

If A LLM or if Google bot saw render file equals prereqs. It means nothing. You know, you don't have the context to know where that file is, where to look for it. And so what we've done is. We're already in the unified JS ecosystem. Uh, if you dunno what it is, unified is a abstract syntax tree, uh, sort of library set for markdown and HDML.

And so you see here, obviously, you know, we have an element that has a tag name property. A property is property, a children property. It just takes that HTML and markdown that we're used to and tends it interest a nice structured [00:08:00] sort of definition effectively, that we can transform in JavaScript and then we can reify that into our markdown.

And so in our case, our pipeline effectively is that we write MDX, we have Astra render that into HTML with the resulting HTML we. Run that through our re hype plugin, and then we run that through a remark string of fire. So effectively we could up the HDML and then take our clean HTML and turn that into markdown.

And so you can see in the top image here where we have Starlight tabs. You know, a markdown library doesn't know how to string a fire, an element called starlight tabs because it means nothing. We turn it into an auto list in this case. And so we have probably four or five in here that we handle specially.

And there is a certain an allow in here. So, you know, we don't include scripts, we don't include, uh, images, stuff like that. Obviously one of the biggest benefits of doing this in kind of being [00:09:00] a, uh, kind of AI world effectively is input tokens. Obviously, you know, if you're not running it locally with something like, oh, ime, you are paying for input and output tokens.

And so with our Q Workers get started guide, it's not super long, but let's say there's, I dunno, probably 12 to 15 paragraphs in there. There's some code blocks in there. It is, you know, kind of a, your new user. It takes you all the way towards the end of having a deployed application that you can visit.

If you just took the HTML just out of the page and put that into, let's say open AI's tokenize, you would get about 15,200 tokens. That in itself isn't like an absolutely great number, but when you look at kind of vendor Mac Down, which is our name for this kind of MDX to HTML to Mac down solution, it reduces it by seven times.

Obviously this is for a given page. When you think about how, you know, we have like 5,600 pages. That adds up quite quickly. If your goal is, you know, hey, I want to feed pretty much all of the documentation that CloudFlare has into [00:10:00] your, you know, kind of LOM or rag chat bot of choice and have it trained on it, when you are doing retrieval, augmented generation, you have a trunk size, you can now fit more content in per trunk, and so it kind of works out gray in.

Pretty much everywhere. There's not really a downside to doing this. Obviously. It is optional. You do do it. We surface it at least, is in the top right of every page, you'll see a copy page of markdown. So this is, let's say you are on our Get Started guide. But you are using something like a er windsurf quad code.

You just wanna paste it in. You can copy that page as markdown, paste it into your AI tool of choice. And there it is. Obviously the view pages marked down. That will take you to the exact same URL with Index MD added to the end of it. So every single page we have, or 5,600 of them, we'll have a Index MD page at the end.

You can see here on the left, this is kind of an example of [00:11:00] how we display it and you'll see where you see the unaudited list with the asterisk. It says N-P-M-P-N-P-M and yang. That is actually, you see that package manager's component, uh, in the bottom image here is that, and so where we're kind of relying on these components to validate, okay, we support N-P-M-P-N-P-M and these different, you know, package managing the chair ecosystem.

It is great for reducing our tech writers burden. You know, it's a lot more productive for them if they don't have to, you know, remember all these and keep copy pasting it, and so it helps our humans write for humans, and then we can turn it almost for free into a nicely machine digestible. Solution. A lot of the goal for us was that we don't want it to be more of a burden on our technical writers.

It shouldn't be more difficult for a technical writer. It should be more difficult for us as an engineering team to support, [00:12:00] you know, these kind of machine readable ones. And so the way that we've done it here is that. We only write the component once we write it for a human. We make it look nice in the browser.

We make sure it follows sematic, HDML, make sure it's accessible, all those, you know, kind of key stars to aim for. And then this kind of vendor markdown solution that we wrote with our plugin. It's free effectively for us. You know, this isn't like something that adds time into our build process. It's not something that we have to fix quite regularly.

We do have some tests in our CI to make sure that this works. Those haven't broken since we added them. We have checked out their work. It's always been suspicious that they haven't broken, but they do indeed still work. Um, on the right you can see this is our past 30 days of traffic for those paths. Um, and whenever there are, um, these sort of proposals, like everyone is likely seen LMS text, there's lms full text, there's also proposals, which in [00:13:00] theory sound great, but are they being adopted?

You know, is chat GPT actually going to train on these or is it just going to fetch my browser, fetch my page with puppeteer? Read it as if it was, you know, a normal human. They are gaining quite a bit of adoption, uh, in this case. On this graph, Claude is the second highest user agent that we see for these paths generically.

And so we are seeing some increased adoption of this index to md the kind of facts we've chosen. Isn't necessarily a standard. And so we do have a link real alternative in our HT ML as a meta tag just to say, if you would prefer a MAC down variation good here. And we're not alone. There are kind of other folks who have, who have offering in MDX and want to create a Mac markdown version of it.

Uh, Josh lasso an engineer on the uh, Shopify side who works on their documentation architecture. Has done something pretty similar where you can just add, do text to the end of any of [00:14:00] their URLs, and you will get in effect the vendor markdown experience. Um, one thing that they're doing, which I forgot to mention that we, we also do is the.

Making sure that links are absolute rather relative. And so you'll see there every link has HTPs, Shopify Dev. We do the same with hs developers cloud.com just to make sure that the links, you know, work. 'cause if it's a Mac down file, you don't really have the context of where you are. But, um, as you can see in the, uh, image on the right, it's all open source.

Everything that we do in CloudFlare Docs is open source on GitHub, in CloudFlare slash CloudFlare, hyen docs, all of our content, all of those markdown pages that I mentioned, all of those components, how we render all this into markdown, how our CI works with Astra, it's all completely open source. If you spot some on our docs that you'd like to do.

Go take a look at how we do it, go copy it and uh, add it into your own site. We have also [00:15:00] started, uh, how we docs section of our style guide where it talks about kinda our AI consumability a lot about what I've just spoken out here. And so, um, yeah, you know, we've been open source since the beginning, but we're, uh, still making good headway on our.

Sharing our patterns, sharing, you know, here's why we do this. Obviously you can see the code that we do it. We're also trying to share why we do it, what lessons we've learned from it, and, uh, kind of give back to the open source community who have given so much to us. You know, we have folks who, they see some things wrong in the docs.

Maybe it's a type or maybe it's a wrong command. They come and make a PR to us and, you know, kind of our way of giving back is, you know, we don't wanna just take, take, take. We want to make sure we're benefiting open source as well.

And that is everything from me on Vendor Markdown.

**Sean C Davis:** Fantastic. Thanks, Kian. All right, folks. If you have any questions for Kian, drop them [00:16:00] in the chat Now. Kian, I, I, this is, this is really cool and we're doing something really similar at Netlify and also built the docs on top of, uh. Starlight. And what I'm curious to learn more about is the process that you went through in terms of, um, considering build or yeah, buying a tool or, or plugging a tool in that might give you the same effect versus building it on your own.

You mentioned performance and fewer tokens. Is, is that kind of like, was that the main deciding factor or were there other points of consideration?

**Kian Newman-Hazel:** I think for us, part of the, like the technology choice of using Reh and Remark is that obviously when you're using Astra, you are already in that kind of re hype and remark ecosystem.

You just, you know, open ASRA config ts. There's a markdown re hype plugins and reac plugins are rare. And so we were already writing plugins to transform our HTML. And so the natural kind of progression [00:17:00] of that was sticking with re hype, um, to kind of create our filters here in terms of why we didn't. Do use, you know, something like turn down or something like no HR markdown, which obviously off the shelf, you know, don't test some of our components.

But it's not like re hype does either. You know, we still have to write our own rules and in this case, you know, we still have to write these conditions here to say, when you hit this unknown component, here's how you should transform it. You can do that in turn down with their rules. API. But for us, you know, since Astro is already all in on Reh and Remark, we just kind of extended our usage there.

We did written a few of our plugins in there. We'd already been pretty used to how kind of Reh and remark is structured, and so for us it was just kind of the most productive for our team. But yeah, you know, if you're already using 10 now and stuff, you can port 99% of this to their rules [00:18:00] API, and it'll be pretty similar.

**Sean C Davis:** That makes sense. So there's, there's a component to it that is definitely control base that you, you've got your own custom components that you'll probably ship alongside Starlight components and how those translate into, um, yeah. Markdown or the text that an LLM is gonna consume. You felt like if you take this approach, you get a little bit more control over that?

**Kian Newman-Hazel:** Yeah. With our components. As well. Like I say, in the Astro file for example, we only write the HTML for human. You know, we don't write like a second representation for lms. We don't export like a markdown version of it. We do try and write our components exclusively for, okay, run astro dev, open the browser.

How does it look? Does it look good? Awesome. And then, you know, we'd do any follow work if we need to. Ideally there's not much in this re hype plug, like, you know, you see the quite in depth handling of Starlight tabs. That's probably the biggest one. Just 'cause you know, it is that interactive [00:19:00] experience, which doesn't exist in, um, in plain text in the first place.

'cause it's interactive, but also 'cause it's the custom element. You know, it's, you know, it's not a H five element, it's not a div, it's not a pre, it is, you know, Starlight tabs, which is custom and so. That is probably one of four or five elements that we have to handle specifically. Everything else, assuming that we're sticking with, you know, good semantic.

HTML translates over pretty good by remark. You know, we remark have a library called Remax Ring I, which is basically with this remark, a SD, turn it into markdown text. Obviously it knows how to handle code, it knows how to handle a list, and so we get. Almost everything for free and we have this little scare patch for our customer elements.

**Sean C Davis:** Ah, very cool. Okay. And you know what? I was just thinking, I think at this conference last year, um. [00:20:00] It. I had a, uh, I had a similar question that I also wanted to ask you, which was, you know, I think a lot of these tools like Starlight that are just so easy to use out of the box and so like, so quick to just stand up for really small sites that it can be.

Uh, it can be hard to see that they can scale to support enterprise level sites, you know, sites with you. You have thousands of pages that you're managing. So can you, can you share a little bit about, um, just, you know, what you've, what you've learned, or where you feel like Starlight has. Uh, done particularly well or where you've had challenges as you've scaled up to thousands of pages?

**Kian Newman-Hazel:** Starlight has a really good system for it called overrides, and so obviously Starlight has its own components that come with everything. It, the header is a component, the footer is a component. The sidebar is a component. All of those, you know, building blocks of a documentation site are components and you can override them.

In a very nice way is obviously it is built into it [00:21:00] in astro config. You just say, Hey, for sidebar, render my sidebar component, which on the face value sounds like, okay, I have to write the entire sidebar myself now. Mm-hmm. You don't have to do that. You can just import their default component. You can add a wrapper around it, you can add some CSS to it.

You can do quite a lot. Um, when we first moved to Starlight, you know, when we did a migration in August last year, we did have one or two patches with patch package. For some kind of edge case things, but you know, part of the benefit of Starlight is not just the design of overrides, which make it super easy, the Starlight and the Astro team, which just super nice to work with.

And so all our patches, we made an issue for it. They made a pr, they merged it, we removed them within the space of a month or two, to be honest. Um, obviously they've made some good strides in that aspect too, where. The model used to be, let's say for the table of contents on the right, you would [00:22:00] override the table of contents and you would modify the props.

What one of them is literally called table of contents in there. And so your override would literally only exist to modify props. You wouldn't actually be rendering any different HT ml there. And that pattern worked, but it could feel a little clunky at times. Without any input from us, we were happy with it.

They did something called route the uh, middleware. And so you can just write a TypeScript astro middleware and transform all those yourself. And so you don't actually have to override many things anymore. If you do want to write your own HTML, sure go for overrides. But for most use cases, like, okay, add a prefix into the title.

So instead of it being overview, you want it to be CloudFlare Docs slash overview. You can do that in route data. You know, it's quite easy to do the sort of, Hey, add this into the sidebar, hide this into the sidebar. You can say, Hey, this page in the sidebar, it was lasted, did in the [00:23:00] past week. So add a recently updated badge to it.

All those things where you want to, you know, write your own sort of business logic effectively is just some TypeScript code in the middleware, and so obviously. They do have a lot of plugins, but their escape patches are very, very clean. They're, you know, there's no rough edges around them. It's not like a foot gun by any means.

As soon as you need to reach for overrides or route data, it all has types. It's all documented. It all has examples. It's a very nice thing to use where when you are starting to patch things and you have to update your patch, every version, it feels fragile. Overrides, obviously satellite's still in, you know, pre zero, pre 1.0 and so they do, you know, have breaking changes here and there, but when those changes where they've, you know, redesigned something, we don't do our overrides, which satellite give it a quick spot check that still builds and the preview looks good, but we have [00:24:00] total confidence in their team and their overrides to just keep working.

**Sean C Davis:** I love that and my team has had a, a very similar experience. All, all positive for sure. Alright, the last question I have for you is, I think it's very cool that your entire documentation site is public and I, you know, know folks really like to. Um, put that content out there in an open source way, but there are, there are challenges, particularly with docs and, and other product related code where you might not want to give away content that is upcoming or features that are going to get released.

Um, so maybe can you talk just a little bit about, you know, some of the experience of, uh, and, and how you work with an open source repo, uh, in an effective way for a CloudFlare.

**Kian Newman-Hazel:** Yeah, it obviously does have some considerations where a pattern that we've tried to adopt recently is generating documentation from other sources of truth.

If you have an API for your product, like let's say we ai, they [00:25:00] have an API that lists all of their models, what the schemas are, and so rather than having to hand write, you know, probably close to 50, 60 pages now of pretty verbose documentation about everything it supports, they give us API, we save it as Jason, and we render it out.

Obviously that does come with the caveat that if we're an open source reaper, the data you are giving us has to be okay that anybody can see it. You know, we don't have password protected sections of our site. Everything is open source. GitHub, there isn't like a, you know, we don't merge it with a private reaper that we have.

If you see something on developers cloudflare.com, it's going to be in the CloudFlare Docs Reaper somewhere. You know, it may be loaded from API where, you know, we do have some components like GitHub code. Where we pull from other CloudFlare repositories. If you want to, you know, have your workers example in your project so you can test it.

Sure. We can pull it in if you need. Don't need to duplicate it. But yeah, obviously, you know, [00:26:00] currently it's quite, uh, a birthday a week for us, one of our renovation weeks. And, you know, we don't want docs to go live too early. We don't wanna ruin the surprise. We want the blog and the docs to go out about roughly the same time.

Luckily for us, since, you know, we are a astatic site, we're a large one, but we are kinda an ascetic site. Our CI tends to run to completion from merge to Docs being live in about 12 to 15 minutes currently. And so for most launches, it's happy just enough that you can work from a fork, you can work from a local branch, and then just push it up at the last minute when you're happy for it.

If it is a live piece of work, you know, go for forks, go for private ones where, you know, our technical writing team can still review the content. But generally, because our CI is so quick and losser, we do deploy with each med. You know, we don't buffer it up and say, okay, we'll do a weekly release, everything on Tuesday.

As soon as you merge it, it'll be live within 15 minutes. You know, it is just something that runs [00:27:00] on every production commit. And so yeah, it does come up obviously during these innovation weeks where we want to kind of keep the announcement aligned with the blog, aligned with a change log in dev docs.

It tends to just be push it up and merge it around about when you want it to go live. Um, but yeah, we are trying to go a lot for if it is something that you're having to update quite regularly. Based on something else, like let's say Wrangler for example, is our CLI, having to maintain the commands page was probably 1,500 lines of pretty verbose MDX and it was just basically transplanting the documentation of Wrangler.

So you know, you run NPX Wrangler help, you're basically just kind of translating that into MDX. Now, obviously the Wrangler team have given us an API where we can just. Effectively import their command structure, you know, all their namespace, all their help text, and we [00:28:00] generate that now. And so obviously that if it pulls from an API is updated, let's say 30 to 35 times a day, it's probably how, how often we merge into the production ranch on a day.

So if it's from an API. There'll be a source of truth. No one can typo it. It gets updated several times a day. And so, you know, that is probably what we push folks towards if they can. Where, you know, we don't want folks to have to come in weekly and say, okay, each choose there, go copy this. Go make a pr, ask someone to review it.

If we can automate and get rid of that tile, great. If not the emergency, I should be pretty quick.

**Sean C Davis:** Love that. Yes. That's, that's wonderful. Well, Ian, thank you very much for the talk and for your time today.

**Kian Newman-Hazel:** Awesome. Thank you very much.

