---
_build:
  list: false
  render: never
---

**Sean C Davis:** [00:00:00] Everyone. I'm Shawn c Davis, and I am super excited to kickstart another season of Live Talk shows coming to us from the Certified Fresh Events community. Now, after a really fun first season, we've decided to do a little bit of shift, a little bit of rebranding. What was formally Code Sandwich Hour is now Uptime fm.

Super serious. Five nine s guaranteed, or I don't know, something like that. But don't worry we're going to carry over some of the fun traditions we had with the code sandwich hour. It's just the main shift here is that we're gonna try to focus each episode on one particular topic.

And I'm really excited for this first episode and to welcome our special guest on stage in just a minute. His name is Kanu Malva, who is the head of developer relations at Sanity. I think I totally butchered his name. You can correct me in a moment, but I'm super excited to chat with Kanu today because I feel like we've been running in similar spaces for the last several years, but really haven't had the [00:01:00] opportunity to officially meet until about 10 minutes ago, backstage or so.

Like I mentioned, canoe Works for Sanity, which is working hard to solve both developers and editors problems in the content space. And I'm currently working for Stack Bit that is trying to do much of the same in a slightly different way. And in fact, right now, stack Bit has this really tight integration with sanity, and we may or may not get into that.

I don't know. We'll see where this goes. We'll have some fun with the conversation, but first, let's get canoe on stage. Here we go. And welcome to the show. Thanks for having me. Thanks for being here. Yes. Very excited. And now I want to let you do a formal introduction and all of that, but first in the spirit of carry over from the code sandwich hours season, I thought we would start with my favorite icebreaker question, which.

What is the best sandwich? 

**Knut Melvær:** What is the best sandwich? Like universally? Not in my opinion. Just like 

**Sean C Davis:** No, in your opinion. In my opinion. Okay. If you feel like you have an [00:02:00] objective answer, I'll take that too, but no. Yeah, 

**Knut Melvær:** I do that certainly. Actually, no. , I want to start off by being controversial.

I would say a hot dog. Hot dog. It's a hot dog. A sandwich. A hot dog. Yes, it is a hot 

**Sean C Davis:** dog. . I think that if we're going by the I don't have it in front of me, but if we're going by that, like official Miriam Webster's dictionary, I believe it says a sandwich is between two slices of bread or a split roll.

And I feel like you could call a bun a split roll, and I feel like. My personal opinion is I am more inclusive of what if something wants to be a sandwich? It can be a sandwich. That's fine. All right. That's fine. So hotdog. Now two questions for you. One is do is there like a specific brand or type of hotdog?

And two is do you dress or top it with. 

**Knut Melvær:** It might become more obvious along this episode. I'm not from the us I'm from this little place called Norway. And Norway. There's [00:03:00] this kind tradition of gas station hotdogs, sounds horrible. Maybe amazing , but those, yeah. And yeah you do address it with I think the the standard is ketchup and mustard.

Maybe if you're feeling adventurous. Some onion on there. Yeah. 

**Sean C Davis:** Okay. All right. So not altogether different than the US version of a hotdog. Probably not, but yeah. Great. Great. Okay. With with that controversial start to the season, let's let's move on now I want to talk content editing and like the whole content editing experience in, in we'll get into the weeds there, but I thought it would probably make sense to first start with a little bit of introductions so folks can get to know you.

So can you. Tell us a little bit about yeah. Who you are, where and the work you do, and then specifically what where did you begin to get interested in or start working on content management for the web? 

**Knut Melvær:** Ooh. Yeah. I think we have to go back a while. I'm starting to get old now, I feel [00:04:00] like, but yeah, I think it was like, Around 15 this is early two thousands.

We had stuff like Pentium computers and Windows 98, oh no, windows 2000 actually xp v like FTP was a thing. And for some reason I fell into this like HTML market language kind of thing, and I. Websites on the internet. I think that's kinda like the interest of content on the web started there by hand typing stuff in Notepad or something.

Actually, it was front page. Interesting. Yeah. 

**Sean C Davis:** Amazing. Okay. I think I used, yeah, front page around there. Around that same time. It's we've come a long way, I'd say. 

**Knut Melvær:** or have we, I don't know. 

**Sean C Davis:** Yeah. Or have we, okay. Segue super open-ended question here. What if we now fast forward to today, what do you feel like is either the biggest or at least one of the biggest challenges that we have with managing [00:05:00] content for the web today?

**Knut Melvær:** Yeah, I think like we can continue kinda like I started with the handwriting, HTML and so on. I think a lot of. Also found this CMS thing called WordPress also 10, 15 years ago maybe. And that really paved the way of letting people kinda publish stuff themselves on the web without having to code.

And I think that shaped a lot of, How we think about content on the web still today. Sometimes maybe it hold us back. And I think kinda what we see now, especially with new front end tools like the next jss and the get speeds and next and so on, is that we have this decoupling of presentation.

, but they still haven't figured out how to, what to do with that content and how to fit this nicely together in a way that makes sense and doesn't have HTML flying through the buyers and stuff. So I would say kinda figuring out like, how [00:06:00] should this presentation and. Content storage stuff actually work, like you're doing that to yourself at Stack bit.

So it's conundrum still to many of us. 

**Sean C Davis:** Yeah. Yeah, totally. I think and one thing that I'm really interested in and why I joined Stack Bit is because I felt like we, I, first of all, I think that the way you positioned it in, so yeah. WordPress dates back to, yeah, I don't know, oh 4, 0 6, something like that.

And that that in large part, defined this pattern for content management that we still use today. Even though we have decoupled the. From the back. But I think what was really interesting in this move to JAMstack, so to speak or this decoupled composable architecture, is that we kinda left the the, like the preview ability out of the experience and all of that.

It seemed like this decoupling [00:07:00] had served. Developers first in content editors second. And that's something that I was curious to get your perspective on is that we had a lot of that. Preview ability of content in the WordPress days, ruby, on real estate. Those are still tools very much in use and the whole monolithic server side rendered approach, like still very much a pattern used by many today.

But in this composable and decoupled world How can, like how are we solving preview ability and making content editing easy for folks, non-technical folks, particularly today, like the true 

**Knut Melvær:** answer is I don't know. To give it a bit more context, I think so what WordPress and similar tools did was to have this like super clear content model but was also super constraint.

So like basically posts and pages and posts is kinda it's a heading. It's on body text. Maybe you have having a bed of a YouTube video or [00:08:00] something, but it is kinda like, Constrained and kind like easy to reason about for most people. The same with pages. It's kinda yeah you put some stuff on it.

In, in Repress it was mostly like article stuff, but it wasn't kinda like in this channel like structure and you could have hierarchies and so on, and then kinda at some point we started to have this pattern where with like block content and every landing page looked like a section thing.

And still do, yeah. And we got tools like Squarespace and widths and stuff that kind of catered around that. That kind, like way of presenting stuff. And what they let you do was to just edit content, kind like in, in the page, what is what you get. Which also makes intuitive sense for most people, like a change of thing.

I know the thing changed. And the trouble is or the challenge, I don't know, the problem challenge is as the web matured and became more kinda like omnipresent in our lives. Also, the like [00:09:00] requirements for it changed. Like now we expect kind these immersive experiences with a lot of like state and carts and whatnot, and the content should kinda get the same content should appear across different kinda like views and in boxes sometimes and sometimes not.

And it's responsive and maybe it's in an app, like the requirements change so much. And the digital experience like popped out of the post on the page. And what now? What doesn't it even mean to preview something that can appear multiple places? That's kinda like a hard problem. Very exciting problem, but a hard problem.

**Sean C Davis:** Yeah. And I think it, building on that scenario a bit, there's this concept of how far. Okay, so I let me back up a minute. You're setting us up to say the content editors continue to want more and more generally, and I think that more is more flexibility and at a faster speed and all of that.

But [00:10:00] do you do you feel like there's a, is there a point there because or a limit. The reason I ask that is I today have a lot of conversations around this idea of guardrails, of trying to find this balance between for less technical editors to be able to move quickly. Something tends to need a little bit more structure for but then there's also that they need that flexibility as well.

Yeah. How are you thinking about that? 

**Knut Melvær:** Yeah. It's funny that to say that because I rarely, believe it or not, I rarely choose to go into discussions on this Bluebird site called Twitter. But , yesterday I saw someone on post on an update to WordPress. Yeah, here's the new things the knobs and buttons and stuff.

I was triggered because I saw kinda like this model with kinda like radius. Pixel controls for border radius. Oh yeah. Yep. I saw this. I was like, why on earth [00:11:00] should we like, like require editors to make decisions about pixel pixels in 2022 when we have like design systems and tailwind and whatnot?

That seems like a concern that should be in code in the front end because it's impossible to take those decisions when you don't know all the screen sizes and stuff. It seems. , yeah. The wrong place to have it. To, to my naive mind. So I kinda told Twitter and I got all of these reactions, of course.

And, but most of them yeah, like this feels wrong. When I do WordPress sites I do a lot to remove those controls because it makes it super easy to just break the design because you don't understand what you're changing or like implication of it. And that takes us back to this question do what kind of flexibility do editors actually need versus they feel they need or.

Maybe it's more about the feeling of having control [00:12:00] than actually solving business needs or whatever. That is kinda the question for me and I think you can do both. I think you can give editors kinda like flexibility in kinda like expressing. Stuff they need to express, but have kinda like the hard decisions been taken in code because we have all of these great tools not to do.

So we, yeah. That is kinda it's interesting to see WordPress going more and more into becoming like this very bespoke page pillar thing for a, that side. It's great for us. Yeah. But it's super interesting to see it, 

**Sean C Davis:** see that happen. Now with all the front end tooling that we have today.

You could drive every single design decision or yeah. Now we can write CSS and JavaScript. So technically you, all of your styles could live in your content management system. At sanity, are you seeing are you seeing some folks store. Like [00:13:00] traditional like style based values in the CMS or mostly keeping that in their design system and.

**Knut Melvær:** Yeah. We see both. And every time you see someone make essentially the same controls as this WordPress example, we are like, should you be doing that? And the reason is like there are ways of doing that isn't, that is like sustainable. But where you tread into dangerous territory is where you start to kinda Blend your content, which is kinda like the meaning and descriptions and all of that stuff with this presentation concerns because when you are redesigning your website, it's not an if it's a one and when you need that content elsewhere in an app or something, you are in trouble.

If you have mixed those things too tightly, and that matters for kinda like the customers and businesses we work with our typically large, complex things where the content is so close to the value change chain. You want to be very intentional with how you structure that stuff [00:14:00] so you don't shoot yourself in the foot.

Regret it later. So 

**Sean C Davis:** yeah. Yeah. Okay. That makes a ton of sense. But And I think in theory, it's you say, okay, keep all of that out of the cms. But as a for, for overly complex sites, or even just as sites continue to grow, we say, Hey, we've got this hero component and now we need this variation where the image is on the left.

And so maybe I'm not controlling border radius. But I'm controlling layouts and permutations of a component. And so how do you generally recommend that folks structure? Variations like 

**Knut Melvær:** that? Yeah. It's if you want to be super dogmatic, it's no, you shouldn't be. Like, that should be a front end concern and you should ask the designer to be allowed to do that.

And maybe the front end should just make that decision based on data and stuff like that. That would be the ideal work world. Interesting. But we also know that it doesn't work like that Sometimes people just need to do stuff . So I would [00:15:00] recommend most okay, make a, like a variation.

If you need that control, maybe add a control as like primary and secondary try to make it a more general the cost is, it's less obvious for people what is going to happen if they use the one or other setting. And that is where preview, for example, comes in.

. And not to be very product pitchy, but like what sanity allows is to basically build in any type of preview or previews in the tool. So you can have multiple previews that shows you different settings or context for the content you are controlling. Or you can do stuff like just helpful labels on the fields to kinda explain the implications of something.

They're like, all of these UX things you can do to just help editors make great decisions. 

**Sean C Davis:** Yeah. Really interesting. And also . So at Stack doing something similar, we have the, the tool is a big portion of the tool is that in context editing and all of that. So yeah, you can [00:16:00] it's almost because of that, that we have the flexibility is unlimited and then it's up to the developer to find those right permutations and I.

It's really interesting that you take the perspective of need to lean on design, analytics, feedback and a little bit more and, be. The ideal state is could we be less concerned about which side the image is on and just put it somewhere and then see what happens and evolve over time.

**Knut Melvær:** Yeah, and I also think it's may maybe also matters like what the content is. So think about a product title or description. For a lot of eCommerce sites like that ends up in a lot of places. So editing that on the marketing landing page might have all these implications you don't see if you do it kinda like in, in place.

So maybe that belongs to kinda like a boring text form thing and then give, and I then have some like previous or whatever to understand the implications. And then you have.[00:17:00] The marketing landing page where you iterate quickly and you learn and you need like different ways of expressing layouts and so on.

Maybe it matters less that, that is not kind like an evergreen thing and you can throw it away and make a new and so on, and then we can allow yourself for more. Controls like that because like it's not meant to live in a lot of places and so on. So there might be these like different decisions depending on what content it is you are actually editing.

**Sean C Davis:** That's a great point. And I hadn't, I don't feel like I had necessarily verbalize this before, but you almost just suggesting that the tools. Tools like Stack Bit and these and we're playing in a different space, but just to lump everybody together in in say the site builder type tools that, if we go back to the earlier part of our chat that WordPress had set this foundation for structured content.

And in those days, in those early days, it was people were starting [00:18:00] blog sites, so you didn't need. Control you just needed, you needed to have a, be able to have a title and you had a body field, which could add some, an image or a little bit of media in there. And and that pattern is definitely still relevant for you suggest product pages or things that can be really structured and content editors.

Even non-technical people really understand, like it's, I feel like it's a lot easier for people to map in their mind. They're like, I changed this price, this thing on the website changes. But somewhere in the middle there we evolve to say, Okay, now we're gonna take this like super structured thing and we're going to apply it to this super fluid and flexible system.

And now you've got non-technical people who have to work in that system and they're totally lost because they're like what is, how am, if I do this, what happens over here? Yeah. Yeah. 

**Knut Melvær:** And it's and it's it is because content has become like a complex field. And this is why I also react to should content [00:19:00] editors make decisions about pixels, because just writing content for the web in itself is super hard.

And it requires a lot of your brain space to kinda make great decisions. So like how much should we kinda expect from these people? And they might feel that they want to change the pixels because that's kinda like a creative outlet, but like in a modern business. Is, should it be like that?

**Sean C Davis:** Yeah. Fair question. For sure. Okay, so I want to transition in about 10 minutes or so. So with these, the 10 minutes we have left to to talk content, I wanted to shift and focus from. Like the more traditional marketer or non-technical person editing content to how developers have edited content for the web.

And let me just start here. So if you're gonna spin up your own website today, or you have your own website today, so how do you store content for that website? 

**Knut Melvær:** I'll give you one. 

**Sean C Davis:** It's, I I [00:20:00] was, okay. I have two guesses. I'm like, which one should I guess first?

All right. My, I'll just, I'll say, is it insanity? Of course it is. Okay. Okay. . Cause I, that and which makes sense. You're using the product that you work for. I what I've seen. And I think we've seen for years is that developers had have really attached themselves to markdown since we were talking about okay, you writing is a whole thing.

You wanna focus on the writing. And that kind of got the, it got all the weird curly braces and everything out of the way. And so you could just write and keep it simple, but. We've also seen the the needs for developers to be fluid as we've built out these front end systems that are component based and they're super rich.

And so we've had, MDX come in and solve that problem. But yeah I think that what I'm trying to get at here is, so do you feel like we are now Okay. You can [00:21:00] answer this as sanity, but also interested in your perspective and the ecosystem as a whole. Should we be solving content editing for developers in the same way that we're solving content editing for the traditional marketer or less technical person?

**Knut Melvær:** In a lot of ways, probably. I think the hallmark down thing is super interesting. Full disclaimer, I wrote a lot about it in Smashing Magazine. I think it takes 30 minutes to get through that article. I'm sorry, , I'm not sorry. But yeah. I can very much relate to this. I was so deep into the markdown overs.

A couple years ago I had this I used to be in the academy doing like research in humanities. So I wrote a lot and I had this whole pipeline while I wrote in markdown, sub blame text remembers the blame text. And it was translated to La Tesh with a live PDF preview. Was pretty great.

Two weeks it actually worked. So I collect, I had, I have so much muscle [00:22:00] memory when it comes to markdown. I can actually remember how to insert an image. And so it's very natural for me to do it. When I started working for an agency who permanently did like websites focused on new X and so on, I saw that People whose job it is to work with content.

Don't want to learn your markdown thing, especially not your specific kind of markdown implementation. They want, don't want to learn The bespoke tags we have to make to kinda like actually make something more. Beyond kinda like an article with strong and its and I want to go home from work and be a better families and stuff.

And then we made kinda like editors that you kinda like type. And that became marked down. But then now we have the problem of getting marked down for the virus. And then you have to break it down with ATSs and kinda have this weird pipeline into your next site or whatever.

And it's super brittle. And it breaks and you can't really do stuff like controlling for lost links unless you crawl the whole site and stuff. [00:23:00] There's a lot of things that Markdown isn't designed for that we are need to solve. That has like huge implications for developer experience, but it's it's so beloved for us that we kinda oh, but I wanted it work.

We will do all of this engineering to, to break down MDX to, to this Jason structure and so on, which is, it's fantastic. It's I'm super impressed by that work, but it's are we solving the right problem here and are we building tools using Mark on as default? And how is that kinda like affecting editors and so on in second place, and how is that, what is that doing to our empathy with the people we are solving problems for?

That is my question when it comes to this, but I'm like, if you like markdown, like for sure whatever flows you wrote . 

**Sean C Davis:** Sure. Yeah. I feel like you, yeah, you articulated that. Much, much better than I could, but. I like what you said about Yeah, we have a tendency to hang on to markdown and I feel [00:24:00] very much that same way.

It does feel good in some cases, but I think, and disclaimer, I do, I think MDX is a very cool piece of technology. It also feels like you're suggesting, we wanted to hang on to markdown. We need to have this. Rich editing, or it's not even an editing experience, it's just now I need to add interactivity in between and I need all this flexibility.

And okay. I have a theory that I want to get your take on, which is I think this is why this problem that we're suggesting is why. Developers don't mind working with Notion in particular the application notion. And it's like, it feels, and I think this is probably similar to Sanity's Rich text editor, you can tell me.

I don't have a ton of experience with that, but that I can move really fast. I've got keyboard shortcuts. But in the end, everything is, and and I can add these [00:25:00] interactive elements or different components and they're limited and that's a different topic and a different challenge. But under the hood, behind the scenes, we not, now we get all that content from the API and it's already structured, so we don't need curly braces or anything like that.

We can work in. Wie Wig Rich environment. And it just it didn't start as a tool for developers and it's feeling like it's like a great CMS alternative and I think it has something to do with that structured content, but that's just my theory now. What's your what's your take on it?

**Knut Melvær:** Yeah, it's so interesting, like notion like if you actually if you actually write a lot, like Notion is like , like it has become better. It's not the 

**Sean C Davis:** greatest for authoring. 

**Knut Melvær:** Yes. Yeah. And I have to like it's so fantastically incredibly hard to make a text editor. It is. It's so complex and let alone a real time text editor.

It's having been privy to, like watching that work internally here, I'm like in awe of anyone. Trying that it's [00:26:00] incredibly hard. So yeah, we can complain about kinda like these tools not being feeling super smooth and so on. But yeah, that being said I think Notion brought in this or really popularized this block content.

Paradigm and it leverages markdown as shortcuts. So if you have that muscle memory, it's super easy to kinda format your article and it becomes translated to kinda underhood like adjacent based format which is still a bit. It's a bit easier to kinda integrate that in modern tools.

Even on notions. API is a bit kinda convoluted when it comes to like blocks and fetching them and so on. But the API might, might also be developed but yeah. And, but another thing I think also developers, Tend to have a bit less patience when stuff doesn't work. And your code editor is probably something that you can mostly trust.

Whim won't quote on you. Actually it's super hard to quote it. no and [00:27:00] vs. Code is actually a decent electro. Electro, right? So I think we gravitate towards things we know we can trust and work and doesn't get in your way. 

**Sean C Davis:** Yeah. Interesting. Okay. I like that take as well. Okay. One I'll just, let's let's ask one more open ended question, and that is what's the what is the future of content on the web?

Where do you think. Where do you think we're going as an ecosystem? What's the next big discovery? Or again, if you wanna contextualize it to sanity, like what is, what does sanity see as the future of content on the web? 

**Knut Melvær:** Ooh. I would probably say something cliche, but.

It's probably some different things. So what we see at sanity is kinda like this increased desire to, to get control. And kinda like wherever you control your content, it should come with intentionality. That's that's why people gravitate towards structure content philosophy because like they want to have that control because they need this content to do a lot of different things and you [00:28:00] don't want your copy editors or editors to copy paste the same type of content everywhere and have all of these issues that comes from that.

So that's kinda like one thing. One thing. And that alliance super well with our strategy. Of course. While this is going on there are some computer scientists in Google and other places who are working on these pretty incredible machine learning models that are able to produce fairly convincing texts from prompts.

And I think that whole paradigm is now starting to kinda hit. That I think that will become, Be a lot of the conversation going forward and how to reason about it. Like it's, I don't think it's clear to anyone. My colleague said it feels like the time when they introduced the camera and you could take photos.

It feels like that because these models are so incredible in making stuff that is like how . [00:29:00] And 

**Sean C Davis:** is this real? Did I create this cuz I didn't create it? Can I take credit for it? 

**Knut Melvær:** It is kinda like a synthesis of everything that was available from humanity to these models, what they're trained on, which is it own interesting subject. But yeah. This will for sure. Enter like marketing and all of these things. If you can just prompt and get a, like fairly reasonable copy for your landing page, your SEO landing page, who knows what, where SEO is heading, like why should you spend all of those hours if you can just do this.

And I think maybe we will see that humans and machines will collaborate more together. In this way. Two. So yeah, let's see. Exciting times ahead. 

**Sean C Davis:** Yeah. That's terrifying. Yes. Yes. And yeah, and it's not just the it's not even really just about ownership for me. It's two things that I'm interested in are.

One, just like how long is not, how long will we [00:30:00] get to a point where we can prompt a machine and not, and be satisfied, like a hundred percent satisfied with the output, where that's what we publish. But I'm, at the same time I'm thinking okay, I, one of the things I really like to do on the web is write and teach people solutions to technical problems.

Is that going away or is it just the skill becomes. Prompting the machine and I don't know. 

**Knut Melvær:** I'm super satisfied with the ad to function that co pilot can write for me. . Yeah. I won't change it. But yeah, that's true. It's it's almost the same thing as with should we give pixel control to editors is who am I to to question the great machine.

When it comes to the optimal way of describing my bike that I want to sell I don't know. I think it would probably be kinda like I can get all of this stuff from the machine and then I will just revise it and call it a day. And for my like creative like [00:31:00] outlet and the continued exploration of what it means to be alive, that might be fully brain tissue.

Produced content. It's like we have a photocopier, but we still paint images or photos or, so yeah, I think we will continue to kinda straddle along and figure it out. But but yeah, I think there's a lot of day jobs that will be very dramatically changed by this. That's like that's I'm in San Francisco now.

I can already feel that. The, for leadership, the LinkedIn forklift ships SE in, I'm sorry. Happening. Strike last sentence. . 

**Sean C Davis:** This was And so it's amazing. We went all the way from Microsoft front page to what does it mean to be alive? So I feel like we, we had a successful deep dive there into content.

But before, before we go, I wanted to to pull in kind of a, an alternate version of the last segment that we had in the previous season in coat sandwich hour. And that was, These [00:32:00] really quick questions that generally produce quick answers. Now I fell I hadn't quite figured out last season how to actually answer, ask questions that wouldn't prompt long answers.

So I'm taking a new approach here and I've redesigned some of these questions, but I have nine of them. You can pass on any of them. But yeah, let's give it a shot. You ready, 

**Knut Melvær:** right? I think so. 

**Sean C Davis:** Okay. Question number one, tabs or spaces. Spaces. Okay. How many spaces? 

**Knut Melvær:** Depends on the program language, but JavaScript I guess 

**Sean C Davis:** two.

Okay. Okay. I'll, yeah. Split screen . Question number two. The most interesting location you've been when you've been writing code in a. Okay. Did you have I guess you can you, you can, no. Yeah. Alternate or follow up question. Were you connected [00:33:00] to wifi at the time or were you doing this all Barely

Okay. I feel like that is a huge accomplishment because I feel like I'm between Google and the code all the time. That's great. Okay, question number three. The, what is the open source produ project that you either use the most or that you appreciate the most? 

**Knut Melvær:** Ex like outside of our own stuff?

Yeah. Yeah. I think the the honest answer is probably next Js. Okay. 

**Sean C Davis:** I'll take it. Number four. What was the, I can't remember if we, did we touch on this, the first programming language that you learned? I 

**Knut Melvær:** will say html, 

**Sean C Davis:** yes. I was hoping that's, that would be your answer, , 

**Knut Melvær:** but it's not true. It's probably basic.

Okay. I felt back. Yeah. . 

**Sean C Davis:** All right. Number five, or number five? Yes. Okay. The, now[00:34:00] switching from technical questions. We'll be back. Question number five is, what was the last musical album you listened to? All the way through, front to back? 

**Knut Melvær:** It was Artist called Varuna, which I was at the concert on Tuesday.

It's kinda it's the folks behind the serious Vikings of the folks who made the music for Vikings. Oh, okay. So yeah. Varuna, check it out. 

**Sean C Davis:** What style is it? Is it like 

**Knut Melvær:** How to guess? It's like quotation marks. W Music, . Oh, 

**Sean C Davis:** okay. Okay. . All right. Number six. What's your most enjoyable non-tech activity?

What are you doing when you're not writing code? 

**Knut Melvær:** It's probably hiking out outdoors. Okay. 

**Sean C Davis:** Number seven. I just wrote React or literally anything else. React is a hot button topic right now. Are [00:35:00] you on the React Train or are you not on the React Train? 

**Knut Melvær:** It's my job to be on the React train, but also things, it's like, it's all JavaScript.

Like I tend to say it is all vanilla JavaScript at the end of it, right? It's yes it is. Or assembly. I don't know. Whatever it gets compiled to, doesn't matter, right? Sure. Yes. Yeah. 

**Sean C Davis:** Okay. I like how you turned that one around. That's good. All right. Number eight is, what is the best career advice or best the best advice you have received throughout your career?

**Knut Melvær:** The best advice

I guess take the job that I have now. Yeah. . 

**Sean C Davis:** That's great. That's why 

**Knut Melvær:** you are where you are. Not very useful progress, but. 

**Sean C Davis:** That's okay. Okay, last one, number nine. And this is a shorter version of the one that I one that I loved to ask that, that people really enjoyed last year, which was, you can have [00:36:00] lunch with anybody, any human who is alive or not alive who would it be?

**Knut Melvær:** That's incredibly hard. Yes, it is. 

**Sean C Davis:** I used to, I, last year I asked this as a four part question and it got really intricate and it took a lot of time. So it's let's just name the person and we'll stop, 

**Knut Melvær:** we'll stop there. You can change history literally with this, or can you, is it if a, if it take like a late person am I going back or are they coming?

**Sean C Davis:** They're coming forward. Yeah. So we're not, okay. This is just like a moment in current time. We're not we can resurrect people, but we're, we can't change history in this scenario, 

**Knut Melvær:** but to stay a bit on, on brand, I think I would love to have a luncheon with John Grubber, the creator of Markdown, and have a serious conversation.

**Sean C Davis:** That's a great choice. I love that. I love that. Okay. Thanks Kanu. This was amazing and being a great sport on these these quick questions. Yeah. But really, I really loved going deep on [00:37:00] content editing. This was, yeah. I feel like we talked about a lot. Of course. So much more to To continue these conversations with.

Now, before you go please tell listeners and viewers how to get in touch with you and feel free to take a minute to plug anything else that you're currently working on. For 

**Knut Melvær:** sure. I don't know how long, it was like 27, like I chose to, like I was early on Twitter chose the most useless handle There is, like K M E L V E try and.

Do try and find me. I like, who knows how long we are all going to be on Twitter, but but yeah. You can also go to sanity.io. And find us there. Try it out. It's great and we are working on a really cool update for the Santa Studio. It's out in a release candidate now, and it will change your life.

So try it out. 

I'm 

**Sean C Davis:** sold. I'm sold . Okay, that's it for this show. Thank you all for your support for being here. These shows are recorded live on the first and [00:38:00] third Thursdays of each month at 1:00 PM Eastern Time in the United States, which is 5:00 PM gmt. The shows are then later syndicated on cfe.dev and YouTube as videos, and then also in audio format wherever you happen to find your podcast.

We'll be back in two weeks with Stephanie Les, and we're gonna be talking about modern CSS and how. Not really as scary as it might seem. That'll be a fun chat. But until then, from all of us@cfe.dev, thank you for joining us for this show and we will see you next time.

