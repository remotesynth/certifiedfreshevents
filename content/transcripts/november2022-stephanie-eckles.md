---
_build:
  list: false
  render: never
---

**Sean C Davis:** [00:00:00] Hello and welcome to another Uptime FM episode. I'm your host Sean C Davis, and I am super excited to talk with Stephanie Echos today on a topic that developers kind of love to hate and that is css. So Stephanie works during her day as a software engineer, but also has a number of super interesting side projects to be, to benefit the developer community.

And I'm sure we'll touch. On at least several of those projects. But first, let's get Stephanie on stage. Welcome to the show, 

**Stephanie Eckles:** Stephanie. Hello. Thanks for having me. 

**Sean C Davis:** Thanks for joining us. I'm really excited to have you here. And I feel like we, or at least on this show, we haven't talked a lot about csf, so this is gonna be really interesting and fun for me.

But before we get into that, let's ask the question that I love to start with to break the ice, and that is what is the best sandwich? All 

**Stephanie Eckles:** right. My go-to that got me through the first several months of the pandemic when I wasn't sure how long I'd be home until going fully remote is the apple [00:01:00] planter sandwich, which comes from a local cafe near where I grew up.

You got you wanna spread dejon, mustard and honey on both sides of your bread. Usually with Turkey slices of apple. That seemed key ingredient there. Wow. Okay. And some sort of light cheese, like a haard or provolone. 

**Sean C Davis:** Interesting. So is that, is it tied to one specific deli or restaurant, or is it just a generic sandwich in the region?

**Stephanie Eckles:** One specific, I think, and ideally you do some sort of like a cheese sourdough bread. I don't usually have that on hand unfortunately, but that's the ideal . 

**Sean C Davis:** Okay. It sounds really good. It sounds like. A fall sort of sandwich. But can you get it all year round? Is it the same, the quality doesn't really 

**Stephanie Eckles:** change.

I think they serve it all year round. Yeah. I'm about four hours away from that sandwich currently, so I just have to make it at home, but 

**Sean C Davis:** Okay. Okay. That's interesting. That's a new one that I haven't heard and I guess a good reason to visit Nebraska have this new and interesting. There you [00:02:00] go.

Yep. . Okay. All right. Yes, thanks for that. And let's so let's jump into css. And as I mentioned in the intro, I've been trying to be a little facetious and saying developers love to hate css. But I think that maybe to be a little bit more accurate, I've noticed that CSS tends to be fairly polarizing in the development community in the sense that it can feel.

Really scary to some developers or really hard to developers who are otherwise really skilled at other other languages and other tasks. And so let's just start there and I'll ask you why do you from your perspective, why do you think that so many developers are afraid of or maybe dislike css?

Just generally? . 

**Stephanie Eckles:** Yeah, there's multiple contributing factors that I have observed through just watching community discussions, but also throughout my 15 years of being in the industry and growing up with the language growing up as well. So [00:03:00] a lot of that stems from. In the years past and no longer the case, which I'm sure we'll talk about, but in years past, a quite a big discrepancy between compatibility cross browser.

So that right there, of course, that's gonna be a source of frustration and that's a fair source of frustration. There's also so many ways to do something, especially as the language has evolved. So something that we recommended a few years ago is not the same. That one I like to toss back at folks.

That's the same in JavaScript too, right? That's an okay. Exactly. We expect that. We should want that. We should want to see that maturity and growth. We desire, usually that's a big splash in, languages or frameworks outside with css. I hope to see sentiment changing as folks realize that yes, there's multiple ways.

Also, let's talk about the benefits of these more modern ways, which is my niche. But also just the general sentiment around the language being. [00:04:00] Some maybe stereotypes that have crept in over the years where maybe it's, front end just isn't as valued, front of the front end.

And so we see that in job postings. So a, if you're specializing in css, there wasn't a lot of. Solid, job descriptions that seemed made for those folks. I also see that changing I credit design systems for helping change that. There's titles like UI engineer, like I personally my degree's in advertising, I spent.

Eight years of my career and an in-house ad agency, that's a wonderful environment for folks that are creative, like to write css, like to live a little bit closer to the design language. But when you don't have, or I should say you don't feel as comfortable with the design or style that can also falsely make CSS seem intimidating.

And so that's where I encourage folks to.[00:05:00] You'll talk about going back to the fundamentals, learning about the box model. If we peel back some of those layers, some of that intimidation can come off when you start to realize it's less about. Or it's not wholly about design and style, but also we're placing boxes on the page, right?

So peeling it back and trying to understand from that level. But usually we just get those kind of surface level protests against the language until you can convince folks to start learning about it a little deeper. 

**Sean C Davis:** Okay, great. Great answer. And you touched on several things and I want to, I wanna come back to the last point and also the work you're doing to push this Yeah.

Modern CSS approach. But first quick question is cuz I don't stay totally up to date and that is the browser compatibility issues you were talking about of, 10, 15, 5, 10, 15 years ago, which I felt very much. Are those, are they gone completely or are there still lingering issues that we're trying to solve there?[00:06:00] 

**Stephanie Eckles:** The big ticket issues, I would say have been addressed not just recently. Although we've seen a lot of movement recently, by which I mean the last few months. But most of the things. Ease. A lot of the frustrations have been stable for two plus years in our evergreen browsers. Now we also, I should mention we all had a shared enemy number one right of i e 11 and earlier.

So that was really transformative this year in particular to have Microsoft start moving towards. The end of life process for that. It's not completely gone. It depends on your industry. Folks always speak up ugh, they still have to deal with it. But it's usually niche industry environments.

Unfortunately those niche industry environments are sometimes very critical, like healthcare or education. So everything comes with caveats again, and that's not exclusive to css, but when I think of problems that have [00:07:00] been solved, I'm thinking of stability of grid flex box as we move away from floats, which caused a lot of frustration.

, where we're just basically trying to make the language do something that wasn't designed for now. That feedback has been received and these features have been evolved to handle those scenarios that just simply were imagined at the start of the language or weren't possible in browsers.

Another big thing that happened was Chrome rewriting their layout engine. That improved efficiency of the language. Some of our fears about. Selectors performance those are not probably the source of your performance issues anymore. So just a lot of evolution in that space. 

**Sean C Davis:** Okay. That makes a lot of sense.

And and then you talked about some, yeah. Having a background in advertising and also like the and so like the importa of importance of visuals, but the emergence of design systems and. How there still [00:08:00] tends to be this kind of, for lack of a better term, like a lack of respect for the UI engineers or the front of the front engineers.

And I've seen that even in some of the circles that I've run in where folks that specialize in those capabilities, it's harder to get their voice heard and can be harder to find jobs and et cetera. And so I guess to my I'm wondering how you counter that. Like what. How do you describe to somebody who doesn't respect that role or those capabilities, the importance of CSS and the importance of having people who can focus on just semantic markup and the styles that go along with the, that market?

**Stephanie Eckles:** Yeah. There's a few different angles I think you can use, and it depends on context, what you're trying to build. Who your stakeholders are, all those good factors? One thing I'll say is that folks that I've seen care about CSS or care about some of those really front of the front end [00:09:00] features, they also really are the folks who care the most about accessibility.

They're the folks who are caring about performance. And they're the folks that care about usability. And all three of those things are important for your actual users coming to your site or application, but they also make business sense. And so I think that we might be starting to see a little more turnover of those roles being more valued.

And when you can show. The benefits of, how those interplay and prove out the benefits. And I think we're gonna see that more valued. But at the time we see a lot of, the joke is full stack. Is also expected to do css? And, yes. Yeah. And not happy about that sometimes.

And I think what also happens is you develop a lot of tech debt when you're not able to [00:10:00] consider the factors I just mentioned . And a lot of those can be addressed through CSS or at least caring about how the front end comes together. But it feels the perception is. There, there's some strange loss of perception that part doesn't make the money.

And that's what it boils down to, right? In terms of when they're, when a company's trying to hire for positions they want the most bang for their buck. Yeah. So they might realize they need a designer or they might realize they need a User researcher or something, they start to get at some of those roles.

But I think until their existing engineers in some cases can push back and say, we just really don't have the skill set, those roles may not become available. And I don't think that really happens . So 

**Sean C Davis:** That's really interesting. Do you saying, yeah, so I'm probably jumping ahead too far, but I, this is really interesting.

So like the. saying like the companies want the [00:11:00] most bang for their buck, so they're gonna take somebody who can handle some of the backend logic, who can be a really strong, maybe JavaScript developer in today's age. And then they can do some css, but that if they're not proficient in the front of the front, that might slow them down.

What do you feel like you've been able to make the argument. It's actually more, is it? Yeah. Maybe I should ask this more generically. Is it more generally more productive for a team to have someone who's focused more on the logic and than someone who's focused more on the presentation of that logic?

Or to have somebody who's two people who can do both of those things pretty. 

**Stephanie Eckles:** Yeah, best case scenario is those folks are talking to each other. . I think there's definitely benefits in allowing for specialization. Like I said, if you are for anybody even if a lot about all of these areas, it's still really hard [00:12:00] in an enterprise environment to.

Continuously keep on top of the quality of each of these areas as just a handful of full stack folks. So definitely that collaboration would is my ideal world, right? , again, I think it's unfortunately a little bit rare that is happens or maybe it's not always feasible. Yeah, so I'm definitely speaking of an ideal world that I'd like to see us move towards.

But. Yeah, so they are, talking to each other, but also considering that wider ecosystem, like I mentioned, accessibility performance. I think, I'm hoping that is the area where we're realizing that those need to be larger focus areas regardless of what you're building. So I'm hopeful that those areas are where we can start to see Front of the fronted folks, a little more respected and, considered key members and paid appropriately on their teams.

**Sean C Davis:** Absolutely. Coming back [00:13:00] to what you had said about, you talked about it's easier for folks to learn once you start peeling back the layers. Like a CSS can look scary from the outside. If you give it a little bit of time and you learn the modern patterns that you can you can be pretty effective with it.

Pretty, with timing being relative there. So can let's just start with can you tell us a little bit about your, the side projects or the work you're doing in the community to make that transition easier for develop? 

**Stephanie Eckles:** Yeah I started producing some educational materials, coincidentally, Fall right before the pandemic.

So I was already starting to create something and I started by creating a course for beginner developers, folks that have zero experience and trying to give them just this video slash written tutorial course completely free that they could take and. I've learned a lot since then [00:14:00] in terms of how to produce educational content.

I do stand by the overall course materials. But that kind of evolved into, I was, at a particular point in my career, I was working in design systems leading the development of a multi-platform design system. And through that work realizing that CSS was, had grown up a lot, but also was still yeah, something that frustrated a lot of developers.

And I had started boosting my own, going back and reexamining some things. I thought I knew about it as well in order to make our design system the best it could be. That was also about the time where some of these initiatives to focus on cross browser compatibility, stability of existing features started taking off.

So that was just all good timing. But I shortly rolled out modern css.dev so that. My tagline there is Modern CSS Solutions for old CSS problems. So pretty point blank addressing [00:15:00] that niche. And again, I had some evolution of that project. The early ones were truly very literally Problems that I remember solving and now had a much more simplistic native CSS way to solve things that I remember using j qu as a polyfil that now landed, for example.

And then that kind of evolved to trying to not only tell folks how to solve a particular problem, but also just try to more holistically give them tools. Where even if they came to the site from whatever search term about a specific problem that they're, hopefully try to give them additional information about features, accessibility also being an emphasis for me.

Include throughout my solutions and just prompt them to look at the wider implications of the choices they're making, the solutions that they're developing, and maybe stick some of those facts in their brain along the way. And a [00:16:00] companion project to that is small css.dev sm o l, and that addresses the crowd.

Is just trying to get in, get out with a solution but give them just a shorter reason of why that solution might be what it's doing for you and. Again, any accessibility or other sorts of concerns you may still need to be aware of, but it shows a gallery of a lot of things that are stable today.

So it's not just like this ideal thing, you also have to have a poly fill. You also need to do this or that. , they are stable things which is pretty exciting. And I think just a, quick scroll through that shows you the breadth of what is now in the language and addresses. Some old hacks that we used to do.

**Sean C Davis:** So what are some of your favorite? Yeah the transformations that have happened and the Or, yeah. What's the most drastic example you can think of something that was so [00:17:00] painful to do 10 years ago and now it's super easy with modern c. 

**Stephanie Eckles:** Yeah, so I have, I'll give you three really quick hitting examples.

So the first one is I also focus on really practical stuff, right? So I'm not gonna really talk about animations and whatnot. And even though there's been movement in those areas on a really practical level aspect ratio has been just. Wildly important property to come to css. So if you think of some folks might be familiar with what's called the padding hack, where you used a zero high element and padding bottom to of, what was it, 56.25% to get.

That's it. Yeah. High ratio of video to prop open that space for an eye frame and keep your 16 by nine ratio. Now we have aspect dash ratio. That's a property. Very well supported at this point in time. And you just provide your ratio in there. So you do aspect dash ratio [00:18:00] 16 slash nine. There you go, or whatever other, or just put wood and then you have a perfect square.

Pretty magical stuff from just that one property. Another one is the marker, pseudo selector. So that's going to be the pseudo selector. So it's colon marker. And that lets you style the bullet points or the numerics in lists. It has a limited set of properties. Who among us hasn't tried to change just the color of bullets in a list, right?

Yeah. Now you can do it with the marker property rather than trying to have these extra wrapping elements, which you some folks may be familiar with trying to do. 

**Sean C Davis:** What were we doing previously? Was it like hiding the bullet and then having A bef before element, something like that.

**Stephanie Eckles:** You might do it before. You might try to give the list one color and then wrap each element, [00:19:00] each contents of the list in a span to give it the different color . Okay? Those are two that I remember doing in different contexts. But yeah, the last one that kind of has really been revolutionary is the math function clamp.

So might ring a bell if you've heard of fluid typography. That's like the most popular context that folks like to demonstrate the use of clamp. So in other words, instead of using media queries to say, here's my. Font size at a small size, and then at my next break point a little bit larger, my next break point may be a little bit larger.

You can assign that all within clamp. It accepts three values, a minimum and ideal value, and a maximum value. And so you can, in that ideal, Space, it's a dynamic unit or if you use a dynamic unit like view width, or now we have container query units, which is even more exciting. You essentially are asking the [00:20:00] browser to compute the value based on that dynamic width.

If we say a view width unit, so if it's for view widths, Now that's gonna change as the viewport size changes. And so the clamp function basically will allow the browser to go as small as that first value or as large as the higher end of that range, but not break out of that range. And so that reduces all those media queries you may have had down to one property to define those values.

**Sean C Davis:** Amazing. I remember not even using media queries, but also then writing these crazy complex JavaScript functions. Oh yes. How wide did the screen, how big should my font, how much text do I have? Yeah. 

**Stephanie Eckles:** Yes. Yep. So those are my kind of quick hitting ones. There's been quite a few just this year that have made quite a pretty big splash and got folks excited for them to begin to land in browsers as well.

Those ones that I just mentioned have actually been around for a little bit longer. By which I mean. One or two years . Yeah. So [00:21:00] 

**Sean C Davis:** that's still, that was actually going to be my next question, whi, which is like, what are the hot proposals now, or what is the next revolutionary thing or set of things that, that is gonna come to css?

**Stephanie Eckles:** Yeah, so not just going to come, but in in Evergreen. I'm double checking one to make sure I'm right, that's evergreen almost. Okay. So probably the most recent one to. Gets , most of our evergreen browsers. Firefox is the holdout at the moment, but the has pseudo class, so that's the parent selector, but it's much more than that.

So using has, you can check if a parent element has a particular child. So if I wanna check if a Particular Diviv has a image child. I would literally put the image inside of the has and I actually can use that to style the parent itself, or I can expand off of that. So I can say a div that has an image, a space,[00:22:00] Okay.

And then style the image itself in a particular way. And it's just, I'm super excited for it increasing our ability to preplan these scenarios. Again, a design system context. It makes me really excited to have as and it kind of ship these pre-planned features rather than having to override or, just different frustrations down the road, or give extra implementation details.

Like instead of saying if you have an image at the top, add this class. If it's at the bottom, add this. Now we can say, if it has an image as the first child or, different arrangements, then I can affect not just the image, but anything after it. Just the whole entire component using has 

**Sean C Davis:** it's super interesting and it makes me think that, okay, so all of these advancements in CSS are, they're actually one maybe another argument for why you should love CSS is that the more.

That we work into [00:23:00] CSS capabilities, the easier the JavaScript and the markup becomes, you don't need as much. Logic is, do you feel like that's true? 

**Stephanie Eckles:** Yes. It I think I had a tweet a few months ago that when has and container quarry lands, I will be removing it. Everyone will theoretically be able to remove probably a significant amount of JavaScript that you have.

Not only that you bring up just a kind of related note to that. The better that you understand CSS selectors, the more efficient you can select things in JavaScript. That's a very direct correlation. True. Yes. And so has, just like any other CSS feature, it's available to you to use in a selector in JavaScript okay.

Yeah definitely a strong reason to brush up on selectors, in particular in css. 

**Sean C Davis:** Interesting. Okay. Yeah, this is I love this and I want to transition to the last segment of the show in a minute or two, but before we did that, I thought it would [00:24:00] be interesting right before we transition to talk about a few just specific pieces of technology and to get your take on relevancy and usefulness in, in the broad context of css.

And so the first one is, Sas. So as CSS has evolves and continues to evolve what's your take on the relevancy or role that SAS plays today and or will play in the future? 

**Stephanie Eckles:** Yeah, so this is something I'm particularly still using. I actually wrote a post in defense SAS a few months ago. But yeah, it's.

It depends on your context, right? You might feel that it's a little heavy handed if you're doing a single use small project. In my context that I work in of an enterprise. Design systems or any other context where you are maybe sharing styles among the A team, you, and not only sharing them, but have a need to maybe rebrand [00:25:00] or re theme, re-skin, whatever term you wanna use.

We can get a long way today. Custom properties having full support. Again, i E 11 was the sticking point previously for that. But otherwise they're extremely well supported. And those are great for in browser dynamic properties. So the difference just real quick between a custom property and maybe using SaaS or less or other pre-processor with variables is that SaaS is gonna compute that.

It's gonna be static in your style sheet. And custom properties you are going to be able to change. Client side, if you will, if you have a need to, which is great if you're switching between like a light theme and dark theme, right? . . But they can work together and that's why I still am a proponent of using sas.

If your only thought there is, we have variables in css I still use SAS for the function, so each function to loop over maybe my color tokens and spit out different versions of my buttons. I [00:26:00] still find a lot of value in that because it means, I can share styles across even just my personal projects in addition to the context I mentioned before.

And I'm just supplying a new list of colors, right? And then I also find value still in some of the features that aren't quite in css, even though they're coming nesting is coming to css. But that's still gonna be a ways down the road. And some folks, throw back at me why not use post css?

And that is definitely another option. It really depends which features you find useful for either personal projects or in a team context. And I definitely encourage actually having the discussion with your team on how you feel you want to best maintain your styles and design your style sheets.

I also appreciate for sass. Putting my, breaking up my styles into different style sheets. I, that's probably my very top feature that [00:27:00] I will continue to use SAS for is that organization. 

**Sean C Davis:** Ah, that's great. Yeah. That makes, it makes a lot of sense. Okay, last one then is tailwind has been making a ton of noise recently and gained a lot of popularity and I know this idea.

Like a utility driven CSS library is not a new concept, but tailwind has done some things really well and caught a lot of folks attention yeah. How do you feel about Tailwind and do you feel like, how does it help or hurt the perception of css or what role does it play in your view of.

**Stephanie Eckles:** Yeah, I definitely always get asked this question, . 

**Sean C Davis:** I figured . 

**Stephanie Eckles:** I don't feel it's the right tool for me. I don't necessarily advocate or propose it in team situations that I'm a part of. I'm probably a little bit biased because I do feel the design system context meshes more, and I know some folks still use it for the design system context.[00:28:00] 

And I know that it can also be broken up. Maybe you're just using it to help process and generate tokens. I know Andy Bell actually uses that despite not using other features. I think that it all comes down to. I keep saying this, but it's because it's what's really most important is, what it, what makes sense to your team?

I know it's attractive as different frameworks are as well in the sense of it already has documentation created, and that alone can be huge for teams to not have to manage and maintain their own documentation. But that said, not every team is using the React or other such framework where you're creating a component.

and you're setting it and forget it, in that context. The list of classes probably isn't as impactful as folks who are developing WordPress themes or, there's so many different contexts and I think that the bubble around tailwind is assuming that [00:29:00] you do it and you don't really have to think about it.

Or maybe you have other tooling supporting the tokens. But that's just not every project and it's definitely not It's also probably easier to implement on something greenfield than to go back into a legacy project and implement, whereas you can still get some gains in maybe moving your styles to SaaS and slowly migrating over and, working through things that way.

But maintainability documentation and. I, another caution I have just really quick is, being aware that you may not be getting the new features. A few that we didn't get to talk about today are container queries. I think I saw that they're trying to add that in. I don't know how that is.

I. Maybe you enjoy that authoring experience, that's another consideration too. , I think a lot about accessibility features. I think about preference media queries these other things that it's not just about the style that you present in the moment, but it's also how is this style, how is this [00:30:00] element adapting across a view ports, across zoom sizes.

In different color modes. And if all those are new terms to you, definitely look that up. I'm not hand of tail and addresses it or whatever framework you're choosing, but there's just a lot more to consider and I would encourage you to not just assume it's available in the framework and to look a little beyond.

**Sean C Davis:** It's a great point and I think that you really touched on something that. I say a lot, which is that it's really great to keep a pulse on what's happening in the industry and it's really fun to tinker with new things, but choosing the thing that's been around isn't necessarily bad and that the most important thing is that you.

I like to say you, you picked the right tool for the job and Yes. I think you said, yeah. Do what suits your team the best. I like that for sure. Okay, so with that, let's let's transition into this final round of nine questions. This new tradition with this newly designed show. These questions will be, they'll [00:31:00] be part tech and part not tech, okay. You ready? Yes. Here we go. Question number one. When a we'll start like with a formatting question. When a CSS rule has multiple selectors or set of rules do they go on the same line or do they go on separate lines? 

**Stephanie Eckles:** This is a little muddied. . But , I'll just give you two, two things to go look up if you haven't heard of them yet.

The is and where Selectors, which kind of muddies it a little bit. . 

**Sean C Davis:** Okay. Okay. We'll leave it at that for some research. I like that. Okay. Number two, where's the most interesting location? Where you, in which you've written a line of code 

**Stephanie Eckles:** Ooh. Like environment or a project? Either or ? 

**Sean C Davis:** I would say physical location.

Where have you been? Oh, that, that is most interesting. Yeah. While writing code. 

**Stephanie Eckles:** Yes. I do a fairly good job of leaving [00:32:00] my laptop behind when I do vacations and things . But yeah, so I don't know if I have anything super interesting. I. I feel like I did take it on one Florida vacation, but that was a long time ago and I don't even think it was like fun by the beach or anything.

**Sean C Davis:** How would you answer it if the way you interpreted the question originally? Like inside of I think you said in a project or, yeah. 

**Stephanie Eckles:** Yeah, I would say that makes, if I pick that angle, it makes me think of maybe the most frustrating place, which would be inside. A SharePoint site like a decade ago,

**Sean C Davis:** Okay. Okay. Yes. Okay. Funny, quick sidebar is that I have been blogging on and off for the last decade or so, and I think one of, one of the things that pushed me to. Continue to blog and to like really focus the the goal of this site was that by far the most popular post I had for, from [00:33:00] like 2011 to 2016 was.

How to add JavaScript to a SharePoint page, . Cause I had, I figured it, but it took me a long time to figure it out and there's just no information. It can that, 

**Stephanie Eckles:** yeah. I don't know. , , 

**Sean C Davis:** So I like that. I like that. Okay. Number three. What's your favorite open source project that that you didn't personally create?

**Stephanie Eckles:** Yeah, great question. I think. I don't tend to use very many, like actually use very many. I try to keep my build pretty slim. I appreciate probably more resources than, projects to bring in. Although I guess the one that's coming to mind right now is newer. Is Lightning css just because I have a lot of practical use for it in my projects.

. Ok. The real quick summary on that is it smashes together auto prefix. It, they've created their own menier, so it replaces like CSS nano, it's a lot more efficient. And so it took away, I eliminated I [00:34:00] think four different packages to just slim down to that one. Wow. Which is really nice. 

**Sean C Davis:** So is that kind of a, is it a replacement for post CSS as well or something totally different?

**Stephanie Eckles:** For me it was just because I only use post CSS for Auto Predix. . Ok. Ok. But, and it does help transform. A few other things. I think like range syntax, I can't remember right offhand. It's been a few weeks since I looked at it, but I think they are having a few different things it'll do. 

**Sean C Davis:** Interesting. I hadn't heard of that one.

I'll have to look into that. Cool. Okay, number four. What is a a movie that you could watch every day for the rest of your life? . 

**Stephanie Eckles:** Oh goodness. That is an excellent question. I'm sure most people have an answer. Ready to go. All that's coming up for me is mostly childhood ones. Oh, you know what?

Actually probably a Knight's Tale. . I recently remembered that was a thing. 

**Sean C Davis:** that [00:35:00] Yeah that's one of, I feel like there's, it has to be a certain type of movie, right? Like it can't. It can't be super dramatic, otherwise you're just like it's gonna get tiring. Yes. It's gonna get tiring. . Yeah, that's, yeah, that's a nice, you got a nice balance there,

Okay. Number five might be the answer might be it depends and that's fine. But I was curious, what's your favorite CSS class naming convention? Yeah, 

**Stephanie Eckles:** so I. Usually end up with BIM styled classes when I am developing utility classes or component classes. But I'm also I don't prescribe exactly to Andy Bell's Cube css, but when I read it I was like, oh yeah, this pretty much matches with how I'm writing stuff to where you focus on global styles.

You. Allow yourself to use element styles when it makes sense. Possibly use data attributes. So again, looking more [00:36:00] holistically, looking beyond a certain methodology and what makes sense for the project and is gonna help scale it to the future too. Okay. 

**Sean C Davis:** Okay. Is Cube like a, an evolution of them or is it just 

**Stephanie Eckles:** it's a quote unquote methodology. I would just encourage folks to look that up. It might mesh with how you like to think about or structure styles as well, or at least spark some new ideas on how that can be done. But yeah, I think if I'm naming classes, BEM seems to suit my projects best, not just personally, but in a team environment.

**Sean C Davis:** Number, where are we? Number six. What is your most enjoyable non-tech activity? ? 

**Stephanie Eckles:** I watch probably every baking show that has to do with friendly British people. Specifically or the here in the States food network. Holiday baking shows. But also I am a mom. I have two little girls, [00:37:00] so a lot of my time goes to them as well.

which is usually 

**Sean C Davis:** understandable. Yes. And definitely not tech related cause it's just not tech related. Probably. Chaos all the time, right? 

**Stephanie Eckles:** Yeah. My five year old delivered a pretty sick bird on accident the other day. I ended up tweeting about it. She came, she happened to be home from school.

She came over, watched me for a little bit and was like, as she said, asked me to do something like, not right now. I was like in the middle of a train of thought. I'm like, not right now. I'm a little busy. I'll can do it when I'm done with this. You're not busy, you're just making letters. 

**Sean C Davis:** Okay. . 

**Stephanie Eckles:** Yeah, that may be true. 

**Sean C Davis:** amazing. I feel like my I have a four year old and it's, instead of telling me that I'm not working like that, she usually turn it around on me the other way where I'll. Yeah. Wait a few minutes and then when I then address her, she's I'm busy.

You need to wait a few minutes. fair. [00:38:00] Okay, number seven. Our pop culture question for the day. Taylor Swift? Yes. No. Or it depends. 

**Stephanie Eckles:** It depends. Yeah. That depends, is a good answer. Not a 50. Definitely wasn't in line for tickets. , yeah. 

**Sean C Davis:** Didn't spend six hours on my computer on intent in line on the computer.

Okay, great. Number eight, what is the best or most useful career advice that you've received so far? 

**Stephanie Eckles:** Great question. Oh gosh. Probably is a sign that I need to find more mentors. But , I dunno, I've gotten any super advice lately, but I think that I will flip that just a tiny bit and say that, not necessarily advice that I've been given, but. What has helped in my career is landing in environments where you have.

[00:39:00] The support that you need, whether that's space to have autonomy over your projects, space to learn, and of course space to have a voice. So I think that's something that's a gift that I've been given in a lot of my per a lot of my positions, which I know is a blessing doesn't happen. So I. Instead of advice, I would say seek that out for yourself.

It does exist, . 

**Sean C Davis:** Okay. Okay. I like that. All right. Number nine, last one today. So the scenario is that you can host a lunch with anyone alive or not. Who would you, who would it be? One person. 

**Stephanie Eckles:** One person, oof. Alive or not? I think I'd have to go back to somebody, like a touring or oh gosh, I feel bad. I'm blanking on her name, but the. In a Loveless, Loveless or somebody like that, just get inside their mind of what they were [00:40:00] thinking. about computing in the early days would be fascinating. 

**Sean C Davis:** That would be super interesting.

Yes, . And probably if we could say hypothetically that that the lunch would take place in current times that you'd also then get to bring them up to speed in everything that's happened, like totally 

**Stephanie Eckles:** blow their mind. Yes. That'd be pretty cool. , for 

**Sean C Davis:** sure. Thank you very much, Stephanie. This has been a ton of fun.

Really enjoyed having you on the show. 

**Stephanie Eckles:** Yeah, thank you so much for inviting me. 

**Sean C Davis:** Sure. So before we go give you a second to tell listeners and viewers one, how to get in touch with you and then feel free to plug anything else that you might be working 

**Stephanie Eckles:** on today. Yeah, I'm still on the syncing ship that is Twitter

You can find me there as well as a lot of other places as five T three pH. From there, you can get to my links page that has my portfolio and links to pretty much all my resources. The one I'll plug that I am going to refocus my energy on in the new year [00:41:00] is I'm building a companion to modern css, which will actually help guide you through building some projects and be more of a learning path.

That is video and gives you challenges to build out. And so you can find that on modern css.dev, which is also where you can sign up for my newsletter which has been on a hiatus. But I'll probably start publishing that a bit more. And until I find a new home beyond Twitter, , where you can find me.

**Sean C Davis:** Great. Okay. And for all of those who are watching and listening in, just a quick reminder that these shows are recorded live on the first and third Thursdays of each month at 1:00 PM Eastern Time in the us, which is 5:00 PM gmt. The shows are then later syndicated on cfe.dev and YouTube in video form and also in audio format wherever you get your podcast.

Until then, from all of us@cfe.dev, thank you for joining us for this show, and I'll see you.

