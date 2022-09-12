---
_build:
  list: false
  render: never
---

**Håkon Gullord Krogh:** [00:00:00] I agree with you from also in Norway where we were having it's it's obviously it's a wintery time. The winter's not harsh as it usually is, but definitely winter. And I am let me, yeah, so I'm horo head of engineering exercise, and we figured that why not do a talk on how to do. A conference website on jams stack, it's really fits the theme of this conference, I think now using next tos and and crystallize. So let me get started. You might be thinking why a conference website sounds like a narrow concept, but there's a lot. Stuff that goes into a conference website that can apply to a lot of other different websites.

So if you're looking to build a new website today conference or not, I think there's gonna be a lot of tips and tricks within this that you can use and [00:01:00] apply to other areas too. Now that being said, we have our own motivation for doing a conference website at crystalize that's cuz we're doing our own conferences specifically on react.

So as a, not a, as broad as a jams stack conference as this today, but we have a react day, New York and a react, a Norway conference. We like to tailor, make things for the web, which is why we. Made the website for these these conferences from scratch every time and last time we did not just did we do it from scratch.

We did it on a stream as well. So this is the video recording from last summer where we, during two sessions, I believe created the react Norway website. And now that included a live stream showing off the, how we did the concept. How we designed it. So we designed it within the stream and then implemented it later and finally [00:02:00] deployed it live.

So very fun to do lots of cool sharing, lots of cool comments that we got back from that. And it's live on YouTube if you wanna see it. I can share the link later as that was fun, doing. And the end result was really nice as well. Hell, least I think it was, nice looking.

There's a, there's some, there's things that you cannot yeah. There's things you just can't complete within a limited timeframe, starting from scratch. So we did a lighthouse score after we deployed neural realizing that. And meet the ultimate scores for lighthouse.

And for those of you who doesn't know lighthouse, it's a measurement tool from Google that can audit your webpage and give you some back some scores from zero to a hundred zero being the worst, a hundred being the best on different categories. And for these particular three, we would like to score a hundred, like a perfect score.

Which we [00:03:00] were just UN unable to do in a short time with the websites. The same story goes for the other conference that we did reacting day, New York online. And the design ended up really nice. I like the hot dog in the, on the subway here, but we were not, able to fulfill the, the perfect score here either.

So it decided. Because we're doing the conferences again. This year, we've been doing them since 2019, and we want to do them every year. So we figure we're gonna make a whole lot of conference websites in the futures. So why not make a jam stack conference, boil the plate? Yeah, that's what we did. When I say we that's in fact, a bit of a lie because our designer, Laura she made a design My colleague that actually did the front end and the backend for it.

And I am just taking all the credit. I didn't really do much anyways. It, [00:04:00] the boiler plate, I'm gonna show it real soon. The boiler plate. Purpose is really just to get you off to a flying start. So you don't have to do all that boring work of setting up a project, creating the data source and all that, just gives you a baseline, a really good one.

So you can just go ahead and create the content that you want and make it look like the, your brand, your conference and make it beautiful. Goal number one for the bullet pit was to make it nice looking and it's deployed today on a URL. So it's available now. I'm gonna switch tabs.

It's here. If you go to conference, that's super fast.shop, you can do that during my talk. You can Browe around and see the See the actual deployed version of the boiler plate. It sparks a, quite a neutral, but still nice looking design in my opinion, which can be easily tuned and themed to your purpose.

So we intend to use this for our conferences. This is the baseline, apply our [00:05:00] own flavor to it, and that's should be easy enough to. So it features stuff like, a hero on top there's sponsorings some general content in the middle here and some speakers in the schedule at the end.

Oh, job boards and conference pictures from before as well. There's stuff here. And

the boiler pipe comes. A set of features from the get go that we think is relevant. For most conferences, schedule speakers is job board and to run it off as a ticket and me shop too, you probably wanna sell stuff. If you wanna sell stuff, let me put it that way. If you wanna sell stuff, then this boil plate gives you that that opportunity, the The boil plate comes with a set of data where you can, sell some physical stuff, as well as the actual admission to [00:06:00] the conference itself.

The jam to have this conference here is free. But maybe if this was a physical conference still free, you would, might wanna limit the amount of people that could come. Chris, maybe the venue took so and so many, then you can control that with the stock options for products that we have anyway.

Let me get going. So these are the biggest features. I want the boiler plate also to, by dynamic to have a dynamic in multilingual content, specifically dynamic which means I don't want, like this source of data here to be marked down or other static assets, because you would like to at least be personally, I like to change content on the fly.

So let's say that I build our website. And I I go for a trip, right? And on the bus, I realize, oh, I need to change that thing. It's easy to do that on the fly with a dynamic source, [00:07:00] which is why we're powering this with crystallize, if this was marked down files and controlled by the repo makes for a bit of a more difficult journey to control the content.

So all of the content here is being fed by crystalized. I'm gonna show a bit more of this later just a sneak peek, but the idea is really just, you have a place to store the date and the images and everything really, and you can just control it from there. And of course, another goal equally important as the rest here is to show some more love to users.

And that means the boiler plate. After some good work from our side, from there the oil pit now support a perfect score out of the box for accessibility and best practices in SEO stuff like scheme attacks as well to mark up the, the speakers and their creative artwork and all that.

That should be part of the boiler plates, stuff like that is often overlooked. You. [00:08:00] Looking from our own experiences, but typically that's, it's easy to forget. We also wanted the developer experience to be topnotch. Which is why we built it in next. And for those of you who know that is an excellent way to enable a lot of cool developer tools.

It's, very friendly framework. It's fully written in type script. You get all that love from types. And another bonus is that you get your getting the graph Q LCO is typed, which is not always the case. Even though you have type scraped, you need an additional step here to get that those graph Q L core is typed.

It's a, it helps you massively when talking to external services, like the boil pet is doing. I'm gonna show off that later, too. We're using stitches for the visuals here. For those of you who doesn't know it's as a similar to emotion and stock components, [00:09:00] this will this is a way to control the CSS site that goes out.

It comes with a design system that has a storybook too. So you can, if you want to grow this size and distribute a design system based on. Conference if you want to. And of course this being a next JS project, it's easy to host remotely fine or sell and all of the other places for next JS supply, which is yeah.

A lot of places. All right. Yeah. Show me the code now. Yeah. So I'm gonna take you through how to set up. New boiler plate. I'm sorry, new website based on the boiler plate. I'm gonna show a bit. Bit of the code how things are being pulled. Like the data sources are being pulled, how you can theme it to match your styles.

And if we have time in the end, I'll show you how to deploy this thing and get this live. So in order to get started you need to have node install [00:10:00] on your machine and then run this command on screen here. You'll be greeted by. This little prompt here where you would need to select the boiler plate of your choice in which case, what you wanna have is the next JS conference website, boiler plate.

There's a few other ones, too. This is the one you want. It's gonna ask you if you wanna bootstrap a tenant and crystallize with example data. And it's probably a good idea to say. Yeah, I would like that because. This boil bit hair is tailor made to work with tenants that have been set up with all that stuff like speakers and schedule and all of that stuff.

So it's a good idea to just say yeah, to that option and you will get a tenant with all those, that data bootstrapped. And it's just a matter of deleting it. If don't want it afterwards. I chose to do that. I just did this just half an hour [00:11:00] before the talk. So I bootstrap a new tenant for myself and crystallized.

I called it my awesome conference. And I'm gonna show you a bit how the code looks once you've bootstrap on your project. Let me just let me just do another share here. Code coming up, beware. Okay, cool. So this is how it looks like zoom in a bit. So the boil plate comes with two projects.

There's a front end and there's a back end. Now I'm gonna go, we could go into details of why it's two projects, because in theory could just be one now the front end and the backend and do different things. Of course. And you only need the back end if you want to do a shop. If you don't wanna do a shop, don't worry about that.

You, all you need is the website and the website for those of you familiar with next JS will recognize and be, feel right at home here. Let me just [00:12:00] show you how the front page, for instance has been set up. Oh, nice. It scroll down here as well. Perfect. So as you can see here, we try to, we tried to be good with naming.

So every section should feel intuitive sort of, so there's a hero on the top. I'm sure if you ever remember the bullet plate, there's a hero here and there's some sponsor section front page, body, and there's speakers and so on and so forth. This has been rendered based on the data that comes from crystally.

I'm gonna show you quickly. How that looks like. So the. As you can see here there's obviously, files are in TSX indicating type script. And indeed you can see that on, the type declarations here. So the get static props hook, which next JS provides is not fully typed with the actual props.

That are being pulled from crystallized based on a [00:13:00] query that you did. So this is the typed query that I talked about. Now, if you check out the source here, you'll find that it's really daunting and feels weird now that you're not supposed to be looking much at these. The point is really to look at the actual graph fuel query that happens in behind.

And for those of you who doesn't know. Graph scale. Don't worry. It's something that you can easily learn. And we have from our side of least, there's we have a bunch of articles showing you how to compose parties. And for those of you who haven't seen crystallize. Don't worry about this stuff. It looks weird maybe and very unfamiliar and scary.

Don't worry about it. This is just the way that you can pull data out. So this is just, pulling out tile description, hero, and CDA and so on and so forth. We're not gonna look much at this. I just wanted to show you. And this is essentially how you pull it in it. Brenda's nice. I'm gonna actually switch screenshot again.

I wait can show you as well. You can navigate into the [00:14:00] website and do ya do open this up in the local one? Let's just do that quick. There we go. That would be a local here. Let's just see if this's same working. I should be expecting to see, yeah, exactly the same as the deployed version.

Cool. So this point you're ready maybe to do your own your own themeing, maybe. What we can do Maybe we'll do that later. Actually, what I wanted to show you since I'm already in Chrome is I wanna show you the data source. That's backing this. So earlier, when I told you about the CLI and you chose the boil plate and it was asking you if you wanted to bootstrap data, if you said, yeah, to that question, you would get a tenant.

Like I have hair, an awesome conference that looks like this. I've got. [00:15:00] Let's see it's a bit, can I zoom it? I can do this, it has a front page. And you can see, you can recognize these images and the text. So if you wanna change this to your own flavor awesome conference. Here change the tiles.

You just publish your changes and that is reflected immediately, locally, just reload. And you see the tile is already changed. This goes for everything down here. So the sponsors you see here are defined as here we go. Just referencing some organizations that you were defining crystallize. If there's things within this interface, you don't get, cuz you're new to crystalize don't worry about it.

That's not a, not an issue at this point at all. We this is not the video. We're gonna talk about that and explain [00:16:00] everything. Let go down to speakers for instance. Seriously. We got some speakers here, so I, for instance, I don't know pet was not attending anyways. We could remove him. Let just publish that and see if Pedro should be there.

Yeah. Pedro's re following this page should make him go away. And , that's really how the data's been pulled and having this dynamic source as the truth of your data. It's really powerful in in, in lot of different ways. But for me, the solving point is that you can always change this on the fly, regardless of where you are.

You can also delegate this to other people say, Hey, please, can you change this content for me at this page, please? And you don't have to know anything about code or get or whatnot to make any changes. I find that really helpful. So that's how the that's how that content is being pulled.

If you go to the merch section and it's see the products, for instance, the [00:17:00] tickets. There's some early bird and there's regular tickets available here. So if I go back here and go to merch and check out the ticket, I can I can raise the price or I can lower the price for the conference, slice that.

So it's really cheap now. And I'm gonna up the up the amount of tickets that I had. Cause I had a large venue. It's gotta be a fiscal conference. So doing so will obviously then change the prices here. Now, if you did configure a back end, oh, there we go. Just buy tickets, take it. Then you can, didn't also do a checkout and this is using strip for payments.

I haven't tested this locally, so I'm not sure if it's gonna work right now, cause I haven't done the backend yet, but that's a thing we can you can all try out here on the bullet itself, the one that's been deployed. But [00:18:00] essentially that's the way that the content is being set up.

So everything that you see on page here is pulled from crystal slides apart from obviously a few minor things in the front end, which I'd like to show you. Now, let me see your share will do back to code. So how am I on time, by the way, I forgot to start my time.

14 and half minutes I can hear. Perfect. So I'm going way faster than I expected. Of course. Cool. These as again, the front page as I mentioned, there's a design system embedded in the appropriate, which you can find here. Let's go ahead here and change some stuff. Let's make some adjustments to the boiler plate to make some visual things happen.

And I have to warn you. I'm not a visual person. So there might [00:19:00] be some designers, some people with a visual eye that will cringe here and say, oh, it's bad. And yeah, it probably will. So there's a theme folder and it's the colors. And I like, like that we can probably change the primary color, and I want my conference to be really cool.

So I'm gonna do a really badass color yeah, something like that. If I save, I'm curious to see what happens. I'm gonna have to do.

I'm not sure what happens. I can, I haven't actually tried this one. I really don't know what happens when I do nothing happened. Oh there we go. Things that I, haven't not been tested anyways, go back to code. And essentially all of the things on code is something you can change here.

I didn't prepare a cheat sheet of pre-made [00:20:00] you. Colors. And what would, work here. So I'm not gonna touch more of this, but essentially that's how you can tune everything. And if you go back to back to the front page I wanted to show you a bit about how things are being composed here. So for those of you who have not used stitches before you might find this way of writing writing.

The CSS a bit awkward. It's a, it's inline styling from the looks of it. And it's referencing weird names, but these are referencing variables within your design system. And it's really powerful. So for instance, this one here B P three is a reference to a media query. So you don't have to write it out by hand every time essentially where can I find that?

Here we go. So B BP three means a max width of 10 24 pixels. And I just [00:21:00] love having that shorthand so that I don't have to write. Media queries from scratch every time. I never remember how to do that. In fact, I don't, it's hard. So just doing B P three, like this, oh, it makes so much sense. And you can see her padding zero and then dollar sign four.

And that means dollar sign four. It's a size and sizes are defined whereas sizes. From spacing, there it is. Or defined here. So dollar sign four would be one RM.

So again, you're not typically not operating in pixel server, but you're just referring to variables that are already designed. And this is really powerful because it helps you compose a really consistent and. Set up. So there's not gonna be a whole lot of [00:22:00] mixed values for spacing and for sizes and all that.

It's gonna be really strict all the way to the end. So this might be a little, a bit of a hurdle for people like a learning stuff, but from our experience, when we've tried out. Boiled plate on people. It's not that big of a hurdle and you get so much benefit, so much speed once you get over that initial learning.

It's a really nice addition. If you ask me cool. I also wanted to show you how oh, I forgot to mention that essentially how I connect this boiler plate to my tenant. Sorry, I skipped that part. There's an ENV file that comes coupled with a project. And in here you define your tenant specifically crystallize.

So this will pull the tenant in or reference that one and use that for everything. So if I go back to Chrome, [00:23:00] you set, here we go. This is what makes. Makes this title change from the one that's being live, which is this one. It's cool. All right. So let's say that you got your boil plate or your website configured, and you want to deploy this somewhere, right?

I suggest you do one of the bigger hosting platforms. This is a next JS project, so it's only natural that we would try at Al first. So the steps to do that is first off to kick off a new kit repository. I've done. Not this one. Wait, I'm got.

Got this one here. I'm gonna go my own. I did a personal project just now. It was done 36 minutes ago. And this is the boil plate as you [00:24:00] saw my vs code. Just pushed here, both the front and backend as you can see. And then the steps to take here to deploy. It's essentially got into, if you wanna do this on Versace it's creating a new project on Versace and hook that into your, connect it with your your GitHub and select the repo.

And you need to do one project for the website and then another one for the backend, if you want that. And that gives me. As you can see here, Spain deployed an awesome conference at bar solid app, which is a URL that's available for all of you all watching this talk. And as you can see here it's already available.

And the yeah, and obviously the the builds are, and this is one minute build thing. So it's really fast. Having this on versa, coupled with GitHub gives you all those benefits of branches and individual deployments per branch commit. So it's really [00:25:00] easy to do integrations on designs or, whatnot that you might have.

Cool. So I think since I have a bit of more time I wanna see if I can go through with the purchase. In fact, I want to do that since I haven't checked out my own one. I wanted just do the one on the boil itself. What happens when you pay for a a ticket. Or admission this Stripe and test mode.

You can just do 4, 4, 4, I'm sorry, 4, 2, 4, 2, all the way. And that should be do good. And this is gonna create a payment on Stripe and it's gonna also create a order and crystally. So if you go here, I'm gonna select The boy, like the tenant that this order comes in and you'll see here, this order just came in now.

This is the local time for me. So it's the right time.[00:26:00] And you can see here that I bought the intra galactic ticket for 345 years. D so coupling a conference website with a project, like a service, like crystalize gives you the possibility, not just to. Rich storytelling like we're doing here.

Like it's a fully fledged CMS. That's powering as well as a proper eCommerce platform. So you can do order intake. Like we're doing right now and record all the tickets being sold, all the potential customers on your conference. And You can do this to, there's plenty of opportunities here and I can talk a lot about the details of what the possibilities of what you can do.

But something that I think it's also worth mentioning as once you've got something like this set up, let's just see here. As I mentioned in the beginning speed science. We wanted to give you a flying start with the [00:27:00] boiled plates. So I wanted to end with a live audit of my newly deployed website, which I have no idea I was performing all. I have a hunch, but I haven't actually done an analysis on it beforehand. And as we can see here, My performance is this is pretty much something that has to do with a runtime JavaScript framework, like next JS.

And the only penalty we get is indeed there's some stuff around video loading and stuff, but the framework also typically takes it's tall here. We've done a couple of videos in the past of how to do performance optimizations on a next year website. I'm not going to details about that right now, but it's definitely possible to do.

If you want to run the previous audit that I did, I'm gonna go here. So if you wanna do stuff like check out the accessibility, SEO, and all [00:28:00] that, it's a good idea to open your dev tools in Chrome, click a lighthouse and check the things you would like to test. So we did performance right now using page speed insight so we can do best practices accessibility and SEO.

And we could do that for mobile. I assume I don't know how the split is, but gonna be plenty of people using their cell phones too. On on this website, this takes about a half a minute or so to run and we're getting, I was hoping for a hundred all the way around. Anyways we're getting close.

Seems like something slipped through our cracks. one thing anyways, that's something we will resolve believe me. But the scores we got are pretty, pretty good. If you look aside from that, Which is really nice for me. So if this was my conference, it's really easy for me now to tune this and to apply my own branding my own stuff on top and to [00:29:00] run a really cool conference, but without spending a lot of time and effort on the basics of the website yes, I think I am through so thank you for tuning in.

And if there's any questions I would be happy to answer.

**Brian Rinaldi:** Thank you so much ACON. That was really interesting. I think, having built my own conference website I think this would've been a huge help for me had I had it available to me or known about it anyway. But yeah, it looks really cool. We did have a few audience questions.

I have a few questions on my own so we'll start the chat here and. And I suggest to anybody in the audience, if you still have questions, feel free to just ask them now and we'll get to them. Getting to the audience questions first one user asks, can you, so obviously you're using crystallize both as the CMS and as the eCommerce solution, it looks like for this [00:30:00] particular site, can you.

If you wanted to hook a different CMS instead of crystallize there and then use crystal, use crystallize for the shopping cart and stuff like that. You can do that.

**Håkon Gullord Krogh:** Definitely. Yes. Yeah. Yeah. You do compose your own stack for anything, which is. We also built crystalize to do so it's totally possible to run your own CMS, your different brand and alongside crystalize and only use that for instance, order intake and product information, stuff like that.

If totally possible the power of gem SAK,

**Brian Rinaldi:** that's true. Yeah. That is one of the benefits. Another question was does crystallize offer cart functionality similar to snip.

**Håkon Gullord Krogh:** Not currently though, but it's totally something that we're looking into as one of the new, one of the things we're gonna potentially add in the future, although you can totally do carts today.

, which at least in the sense that most people would like it. The example that I showed you, the boil pet comes with a client side cart that can talk to gross size and validate cart on the server. [00:31:00] Using the the backend that we ship with it. It's yes. So the ther actually is, yes, you can do that.

And you can do your own version of it.

**Brian Rinaldi:** So this is basically crystallized offers like an API based function, eCommerce functionality. And like I, snip card is like your drop. It's cart functionality. So this is like a, okay. Okay. That makes sense. So you can build the cart, you just have to do the implementation details yourself, like in terms of the, build it, the

**Håkon Gullord Krogh:** UI, sorry.

Yeah, exactly. And just to mention this, you can also use the cart alongside that works as fine possible to do that. Possibilities are endless actually on that. Excellent. Okay.

**Brian Rinaldi:** That makes a lot of sense. I think this question was actually answered in the chat, but I'll ask you as well.

So it said the the usage of CSS variables are native to CSS. Thus the CSS in JS for the stitches isn't obligatory,

**Håkon Gullord Krogh:** right? No [00:32:00] exactly. So you can mix and match here. And I am a huge fan of sea's variables. It is truly a lifesaver. In many projects the boil pipe comes with a different kind essentially the user, like the developer experience is closely the same, although.

I prefer not having to write VAR and then call on and then dash and so on every time. It makes for a bit of a speedier development flow with stitches, the way we set it up. Okay. But yes, is this generally see it's as variables for the wind. Yeah.

**Brian Rinaldi:** And is this kind of a, your typical setup of stitches or?

I've never, I had actually, until you presented it here, never even heard of stitches before. So what would be your kind of rundown of what stitches does for you at, as a library?

**Håkon Gullord Krogh:** Oh, stitches is a library that is truly wonderful for composing design systems, as well as for having a [00:33:00] really tiny run time on a website.

So compared to solutions like style components and emotion such as typically have a lower footprint. on client side. Although I'm not entirely sure of the latest benchmarks with the latest versions. But that is also one of the choices why we chose stitches over style components or emotion or CS modules for that matter.

So it's that sort of good balance between developer speed. Yeah. And customer sort of user and performance client performance. Yeah.

**Brian Rinaldi:** Okay. That makes sense. I'll have to check that library out. Cause I had not heard of it. Granted my CSS skills are limited to say the least . So I'm curious in terms of you're how you chose to architect this application.

First of all, what made you specifically choose next JS word? Is it like, [00:34:00] what is it? Can you tell us, what decisions you made, like in terms of that led you to choose next JS?

**Håkon Gullord Krogh:** There are a lot of great options today for websites like that. Next JS is simply the one that is being most used.

Currently, and that most people would be familiar with. So we decided since we went with stitches, which is a fairly unknown library, we figured let's go with next J as at least. So that's not new . So we could have done this in Gatsby. It would pretty much be the same. Totally possible to do.

You can do this in 11 T you would've to do some backend stuff as well. And you could do this in a lot of frameworks, obviously. It doesn't really doesn't really matter. We we in crystallize, we try to have boil plates for the most popular frameworks. The idea is that you choose whichever framework that you are comfortable with and you run with.

**Brian Rinaldi:** That makes sense. I it does seem like next JS is hits your, the broadest number of people already familiar with [00:35:00] it. So at this point and is there anything, you talked a little bit about some of the stuff. You performance things you could do to improve an next JS site.

Is there anything you can share now that, I, to me, that's a, I think a hot topic right now is what can we do to make this the site perform better?

**Håkon Gullord Krogh:** Okay. So there are many things you can do. So one drastic option that we've been doing some live streams on it's simply to to turn off all runtime, JavaScript, remove it.

Now. That's a really drastic step and not for everybody. So next to us 12 introduced or was it yeah introduced a a beta version of the server components, which is. Very helpful for reducing client side. The framework one time there are parts of crystallize that are heavy on the client side, which are like stuff like videos that could really loaded.

There's also like all of the rich text crystallized comes in a really structured AST. So it's a bit of work for the browser to chew through all [00:36:00] that and render it on screen. So that could be a potential for a server component, which could help the client side rendering. So those are the typical things I would look into if I were to optimize the performance even more.

Okay.

**Brian Rinaldi:** And so I'm curious, are you server rendering all the pages on this particular site or is it kind of building and pre rendering? A lot of it.

**Håkon Gullord Krogh:** yeah, most of this is just pre-run ring. I think all of the pages, except for checkout are statically generated. With incremental static regeneration as an advantage, for if you host this on Versace.

It's all prebuilt and then rebuilt every time a visit the user visits, the page.

**Brian Rinaldi:** So you, you have them all pre-built use, but you're using the incremental static regeneration on all the pages or this is on just the product pages

**Håkon Gullord Krogh:** or I think it's on all the pages. Remember there's not a lot of pages in the boiler page.

It's one page there's The individual product pages and that's pretty much it. And then there's [00:37:00] checkout, but checkout this individual tailored anyways, it's all a client side.

**Brian Rinaldi:** Okay. And the incremental static regeneration you're using to. So if I make a change, it doesn't have to, we don't have to rebuild the whole thing and send it up.

Or is that what you're.

**Håkon Gullord Krogh:** Yeah. Using it for exactly. Exactly. So if you make a change to a product, let's say that you update the price of a product and you would like that to real effect this as quickly as possible, then you will you will get that help with the incremental static regeneration and so long.

Okay. So yes, essentially, you wouldn't wait for the whole site to rebuild. It will just be that one product page. Yep.

**Brian Rinaldi:** Okay. Okay. And. It just as a note for the audience, like you can actually get that across other platforms. So they just don't call it the same thing. Yeah. So Netlify calls it deferred static generation or no deferred.

Oh my God. DPR. So it's not something else. So too many acronyms, honestly, there's too many [00:38:00] distributed persistent rendering. It's Gatsby that calls it deferred static generation. And this is why I. Like to use any of those terms. We got one more audience question. Are there any plugins available to source crystallized data into gas?

GA speed,

**Håkon Gullord Krogh:** right? Yeah. We're we have a boil pipe for Gaspe. And so you can boost up that today, if you want. There's a different tenant, different setup. It's not for the conference, but it's a more like a traditional eCommerce setup. It's not using a specific source plugin, which I know the question was about.

And, but we have that on the radar. And so keep your keep your eyes out because it will, we will. Probably be something that we will realize quite soon. Okay.

**Brian Rinaldi:** So at this point it's just calling the API. It's not, but it's not a plugin they can add to their

**Håkon Gullord Krogh:** existing site. No, it's not. But it will be so we're using the source graph kill right now, I think plugin just extending that and then, but yes, its own source plugin would be definitely beyond the.[00:39:00]

**Brian Rinaldi:** Yep. And I agree with Sean and Ray and I'll yes. Too many acronyms to remember at this point, this I'm trying to, I know, to have to like, yeah. It's well, and all those acronyms refer to basically the same thing with slight differences. Between the implementations. I just call it deferred rendering, and it's just much, much easier

**Håkon Gullord Krogh:** for me.

Yeah. I guess this is the stuff that makes WebDev so hard today. It got a lot of cool tools and frameworks and all that. A whole lot of acronyms.

**Brian Rinaldi:** Yeah. We love to throw new terms out there all the time. Don't we granted, I guess jams stack would be one of those terms, but which I'm a fan of that, sometimes I like some terms are great.

Sometimes some terms are confusing, thank you. Hook on. This was a really great presentation. I think hopefully some folks will actually take that and go build another jams stack event. I'm happy we're running this one and Netlify has theirs, but I, and Versal has theirs, but like I think more community [00:40:00] events like this would be great or on I assume it doesn't have to be jam sack.

It could be any kind of conference. So yeah, that'd be great. I hope, hope folks go and do that.
