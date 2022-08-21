---
_build:
  list: false
  render: never
---

**Monarch Wadia:** [00:00:00] Awesome. Thanks Brian, for having me over here, I'm really excited to present what I think is a slightly a slightly fresh view on this and the more you for the audience, the more you watch this, the more you stick with me the more fresh it's gonna get, because towards the end I'm gonna be looking more and more towards the future in the end.

And there are a few really interesting perspectives and takes on this that I wanted to share with you all. But let's start with who I am, people always start with this. I'm just gonna follow the crowd here. I'm a senior web developer. I mostly do Java JavaScript and rails.

More and more JavaScript. These. To be honest. So I don't remember the last time I touched Java actually. I'm a CEO at two companies. One is MinPin and MinPin is a developer community full of full stack web developers. And I'm also CEO at zero projects where I built [00:01:00] software and new architecture consulting for other C.

I'm also a star Trek fan and I'm an overall geek. So if anybody wants to talk about the new dude movie I'm geeking out about it and I'm looking forward to that. I'll be taking questions on all things, Java, JavaScript, rails, developer, communities software management, star Trek, science fiction, anything y'all want and of course, backend development.

So let's start with Let's talk about developers, right? I wanna start with the whole premise over here starts with developers and it is really important to note that developers are a really high value audience. In 2019, there were almost 3 million programmers in the us. This is according to the bureau of labor statistics and.

It's that's a lot of programmers. That's a lot of professionals working as coders in the us. And 57% of those people [00:02:00] have purchasing power in their companies in some fashion or the other, which means they can, they have a spend of at least $1. A lot of them have a much higher spend. And the median salary is about $91,000.

Give or take is growing at 22% per year, according to BLS. Obviously very rich, very powerful. It's a very powerful segment. We don't often think about ourselves as powerful in software development, but we really are. We have about $264 billion of personal purchasing power in the us alone that.

Probably bigger than the GDP of several countries perhaps combined. We also have purchasing power in companies, like I mentioned before. So developers are extremely high value and companies have not Left this fact unnoticed. If you have any questions about this if you wanna challenge me on any of the stats I think the first number, the 2.9 million programmers might be slightly off the sounds a bit high to me.

So if anybody's doing research in the back and doing [00:03:00] fact checking, drop your comments, and I would love to go back and forth with you on this, but however you slice it it, it is a powerful enrich audience. What does this mean? Yeah, they're rich. They buy tools for work and they buy tools for personal projects.

All of us have bought some sort of subscription or the other be it GitHub GitHub's premium or be it hosting for our personal projects. All of us as developers. We've bought something or the other for personal projects. Definitely. And maybe even for work I've recommended many different subscription services to clients.

I continue recommending subscription services to clients like API access and various different infrastructure pieces like Amazon or a database that sits on. On Amazon RDS or uh, digital ocean droplet whatever have you. So you might be asking, okay what does this have to do with backend bear with me for a second?

Because this is important. Money is the lifeblood of of our economy, [00:04:00] as you all know it's the primary impulse of companies. And I've assembled a list of acquired companies between 2018 and 2021. All of whom sell to developers, whether they sell to developers for both personal and professional projects.

like GitHub or if they only sell to developers for professional projects doesn't matter. All of these all of these are recent mergers and acquisitions. These are millions of dollars. So that GitHub is seven and a half billion dollars odd zero six and a half billion dollars. MuleSoft for six and a half billion dollars and so on and so forth.

Stack overflow is recent acquisition of $1.8 billion. Also, just made the list. I just didn't added to this yet. So developers clearly are targeted by companies and. They're targeted by serverless companies. Definitely. So let's start getting into the trends. The all four trends that I'm gonna be talking about are commercial trends and [00:05:00] all four trends sell to developers.

And that's a really interesting fact that we should keep in mind. So I have I'll go over the four trends really quickly. So they're serverless they're API companies. They're C I C D as a service. And there's the one stop shop IAS companies and all four of those trends. All four of those trends, charge developers for providing service to developers.

And that's really interesting to note I think this is probably the first time that commercial services are. Starting to eclipse open source as a source of value for the average developer commercial services have always been something that enterprise companies look at something that medium sized or small startups look at just to quickly quickly build something and get it out of the way.

Let's just buy it instead of building it. This is, I think the first time, this in these past 10, 5, 10 years, this is the first time that we are actually able to provide key [00:06:00] components of of the stack to the average developer. Serverless is a massive example and serverless doesn't mean there's no server.

As you all know, what serverless means is somebody else is managing servers. And why would he manage your own servers when you can have somebody else manage them? it means their scalability, their secret management, everything is provided by the by the serverless provider. And examples of this are net five Versace, Amazon Lambda, and there are other ones that are coming up as well.

Serverless is really cool serverless for those of you who may not be fully familiar with serverless is to serverless is to infrastructure, to servers, to your Linux OS your one, two OS or whatever OS you're running on your. On your actual machine, it is to infrastructure.

What WordPress is the front end in a way serverless lets you use web UIs to manage your servers essentially and not just web [00:07:00] UIs, but also code, but it gives you an extracted away layer that. That manages all the low level details for you, and that can glue together various different services for you in a way that you don't have to really worry about much like WordPress glues together, the do and various different plugins for you in the front end.

Serverless does that for you on the server layer and. Scalability becomes really easy because in many of these offerings, like AWS Lambda, you don't actually have to worry about scalability because it's scalable by default or so they claim it definitely enables architecture. That's scalable by default because it'll just spin up as many server instances as you need on demand.

Which is really cool. From a backend developer's perspective. Cause now you don't have to worry about scaling issues, which is if anybody's ever been in a. That's been scaling that has scaled you, how painful that can be. You don't really like to do secrets management. That's abstracted away as well in many ways and more and more of these things are gonna be managed by the serverless provider [00:08:00] as we go ahead and.

That has a really interesting implication about what skillsets are going to be valuable in the future. The core skillset of the developer has always been managing machines. And then only as a, almost as an afterthought, creating value for the company. This trend serverless shifts away from actually managing machines and shifts towards writing logic and making business value.

And the software engineer's job is. More and more moving away from managing low level details and more and more moving towards business logic and application development rather than managing invisible boxes in the sky. And I think this is gonna be. A massive trend going the next five or 10 years into the future.

I think it's gonna be a really massive trend. And I really wonder what this is gonna mean for various different is providers. There's more on that in, in the next couple [00:09:00] of slides, but let's let's move on to the next topic and I'll circle back and synthesize all of these four trends together towards the end.

The next trend over here is API companies. API companies, I need no introduction. They provide various different capabilities through through exposing, exposing a function or service or data over a restful or otherwise API. And. I don't I'm not gonna go into defining what an API is because I think everybody probably knows over here, but there are two types of.

So there are outward facing APIs and there are inward facing APIs and inward facing APIs are APIs that let you control a certain service. But do not give you anything extra that you, they're not a building block. They're more like a remote control. For example, Shopify's API. The last time I checked last year, roughly Shopify's API, let you control your store [00:10:00] using APIs, but they didn't really expose any valuable data from their large database of of shops online that would let you search those shops, or that would let you run reports on all of the shops out there.

So they're really inward facing APIs and they don't really expose any data to you. Now outward facing APIs. That, that second sentence over here should say outward, not upward outward facing APIs. They're different outward facing APIs, give you data and they give you value rather than allowing you to control a piece of machine a piece of machinery.

They outward facing APIs offer a capacity that you didn't have. And outward facing APIs are for example any data set based APIs like the Twitter and Facebook APIs that let you search and filter through their data set. That's a classic example of an API. You can access, you can tap into a large data set just by using rest or GraphQL.

That's that? That's awesome. And that's the classic example of APIs. I think the [00:11:00] first APIs were data set based APIs. The second type of the other types of APIs are coming out though are really interesting. And. I've listed down a couple of examples of these APIs over here. One of them is I think slightly more interesting than the rest, which is open AI open AI offers a bunch of AI capabilities.

And this is an algorithm based API where they expose an algorithm that they run on your data or data that you provided. Algolia is like that, where Algolia will expose search capabilities on your data set for you. So you feed Algolia a bunch of data and Algolia will let you run really fast searches, elastic search style, or solar style on your data set.

And Algolia is an example of a company that ingests your data and then creates a component around your data that you can then query which is awesome because now you don't have to worry about building your own search. You don't have to worry about building your own fuzzy search, your own multi search multi [00:12:00] field search your filters, your searches, none of that.

Algolia will just do it for you and it'll do it for you at a fraction of the price that you would pay a developer to build. That, that piece of functionality for you. So search could take anywhere from, half an hour to half a week to half a month to create developers. As I said before, are high value they're expensive.

And half a month of a devs time is, you know what, the four or five, $6,000 roughly speaking instead of spending all of that money Algolia will let you do search. We'll let you integrate with them. It takes about half an hour to an hour, maybe half a day to integrate with Algolia maybe half a week to fully integrate with it and take full advantage of Algolia and it, they charge you practically they charge you pennies a month and they give you search capabilities, the unit economics of APIs that give you these kinds of capacities.

They're. Ex extremely attractive [00:13:00] to most companies, extremely attractive even for personal projects where instead of building this thing that you wanna build, like instead of building it yourself, you just integrate with a partner and you buy it instead of building it's really attractive, especially from a startup or a small business perspective.

Why wouldn't you do that? It saves you time in addition to saving you money. O other examples of APIs that are changing the game over here and are adding to this trend that I'm gonna be synthesizing for you and telling a story about are capability based APIs. So Twilio will give you a capability that you never had before, which is SMS.

SMS and video chat and uh, they acquired send grid. So email as well. So Twilio will let you integrate with their services and give you the ability to stream video on your platform. They'll give you the ability to send SMS to your customers. These are also relatively familiar to most developers, but then you have these other types of APIs.

They're not really even APIs anymore. Like Mapbox will provide you a custom [00:14:00] Google style map that you can search that you can put markers on that you can mark up, which geo JS and you can build a really beautiful map. Using their capabilities and they have a free tier and then they have various paid options and they give you the full UI from they, they serve you the full UI in your application.

They give you components for it. They give you documentation on how to put their component really easily embed that component onto your website or your app. and then they turn around and they give you this Photoshop style studio where you can actually style your maps. You can put colors on them.

You can define what the theme of the map is gonna be. If you want it, red and blue. Do you want it black and white? Do you want it to be satellite imagery or do you want it to be more abstract road style, like Google map, style road, data whatever you want. They'll give it to.

And they'll sorry. They'll whatever you want, whatever style of map you want, you can design. In a separate UI on map Box's platform, and that gets reflected immediately, instantly [00:15:00] on the embedded map that you have on your platform. So it's, they give you a full studio, it's a beautiful solution.

And then they give you the ability to integrate that solution into your platform and iterate on it without touching a single line of code. And that's. Really amazing. That's that's something that a developer would take forever to build and Mapbox just map Mapbox just gives it to you as part of their value offer.

The interesting thing about up these outward facing APIs is that they're composable. So let's say let's say Mapbox let's take a look at Mapbox. Mapbox might offer. Actually, I wanna build a more compelling case. Let's say you, you have all of the, you somehow get your hands on all of the property listings in your city and all of the property listings.

You have their historic data. You have the current listing price. You have you, you have information about square footage of their of the house of the lot. You decide to expose that data over an API. [00:16:00] So you've created an API that, that takes all of this data and you expose it for, let's say, 20, $20 a month.

Anybody can come in and they can grab that property data from you. Maybe they can enter the the address of a property in this hypothetical scenario and your hypothetical startup will give them for $20 a month. You'll give them all of the searches that they want. Unlimited searches across your city.

For any property, you can get square footage, you can get the current owner, you can get past owners, everything past prices, everything. Somebody comes along and says, Hey, It would be really cool if we could actually search all of your data in a UI. And I know you don't offer a UI cuz you're an API, but maybe you can offer a UI over here where we can search all of your data.

You go away, you think about it and you realize that it's gonna take you half a a month to really build a solution like that. You don't have the UI engineer in house that can help you build this. You don't have the expertise in house you'll have to hire for that. All in [00:17:00] all we're looking at months and months of effort in order to build a UI that many customers are now demanding from your solution, what do you do?

Maybe you go to Algolia and you say, Hey, Algolia let me take a look at your documentation. You read their docs, you understand their cap capabilities, and you decide that. It would be really smart to go on. Algolia paid tier, maybe it's a hundred or 200 bucks a month, not much, but for that a hundred or 200 bucks a month, you get full search capabilities.

Caching, really speedy, fast search advanced filters fuzzy search, all of that. You get all of that on Algolia for a couple hundred bucks a month. And the integration time your backend engineer tells you, yeah, we can spin up a simple HDML website probably use J and we can integrate that with Algolia looks like our junior developer might be able to do that in a couple of weeks.

Why wouldn't you take that option? Like, why wouldn't you The rational actor would end up picking Algolia over building it in house. The rational actor would do a full analysis. [00:18:00] Algolia see their capabilities and use that to build to build this front end web UI really fast and do it at a fraction of a cost and a fraction of the time.

What just happened was you have a data set based API. That's your first level at the very bottom over here. And you've gone ahead and you've composed it with Algolia and now you're offering your own API, but you've composed it with Algolia, which serves as a thin layer on top of your API.

So now you're actually selling Algolia work as well as. and you are charging for Algolia work. Maybe you are charging for UI access, or maybe you upped your price to make sure that you can make ends meet and pay Algolia. Maybe you've upped your margins because your service offerings so much better.

Now, either way, your customers are really happy. You're getting more customers in the door. Everybody's happy. Algolia wins because they gain a new customer in you and you win because you gain many new customers. Thanks to your. Capacity that Algolia enabled thanks to your new UI that Algolia [00:19:00] enabled.

So you've composed your data in an API with algo. now let's say I come along and I want to build a map functionality on top of your API. I might hook into your newly enabled. Maybe you've integrated Algolia into a special get request that that you can search against your entire data.

Algolia is now giving you search capabilities across your database, not just in the UI, but of course also on the ABI side. So I might come along and say, Hey, I wanna build a new startup. I wanna build a new startup that lets you visualize property prices across the United States or across the city.

I realized that your prop your business, your database, your data set based API, that gives me access to historic pricing information across the city is a great starting point. And I want to integrate with you. I see that you're charging maybe 50 bucks or a hundred bucks a month.

That makes a lot of sense. Why would I wanna go out there and make my own data set if I could buy it off a few? So [00:20:00] I sign up on a subscription basis with you. And I start building my UI. I realize that I don't really have the skills I need to build a GeoJSON style map on my own. I go to Mapbox, I buy Mapbox and integrate it into my solution to offer a really beautiful UI layer on top of your API.

That's in that's Algolia enabled. So now what we have is you have your data that you're exposing over APIs that has Algolia as a thin layer. And then I'm putting Mapbox on top of those two layers, and now we have Algolia and we have Mapbox and we have your own API, all of them making money off of my startup.

So these APIs compose, they compose really well and they compose and create chains of value that can then be acquired by companies. A third party company might buy me out and say, Hey, Mon, I wanna buy your company for 50 million, whatever crazy amount. And I'm gonna, I'm gonna pay you 50 million.

That's great. They're buying me, but they're also buying [00:21:00] the subscription that I have with the property price API, which is paying Algolia for the for the search API. So there's chains and chains of value that are now exchanging hands. It gets really cool because it almost looks like an ecosystem is being built, which is exactly what's happening.

More on that later blank slide. There are a couple of trends over here that I wanna talk about that are really similar, but they are also different. And I wanna talk about them in the context of each other. So C I C D is as you all know, continuous integration, continuous deployment CI is the part that tests your code and builds it and tests it before before allowing it to be merged.

TD is continuous deployment. That distributes your new, newly built and tested application across your network of nodes. So CICD goes together and it's essentially task runners with event based triggers. That's it? And of course deployment a deployment endpoint. oh [00:22:00] one, one end of it is an event based trigger.

You push something up to GitHub or you press a button. The pipeline runs and at the other end of it out pops a newly deployed application. So it's it's a build pipeline that's event based that itself is an abstraction and it's an automation of stuff that used to be done manually and is still done manually by software engineers.

All the time people used to test and deploy manually all the time. CS CD came along and they put a stopped all of that. Now the machine will test it for you. As soon as you push commit to your source code, it'll test it for you. That abstracted way, a whole class of developers, that abstracted way, a whole class of engineers who would deploy things manually testing manually.

What does that mean? What does that mean? It means yes. Yet another type of developer got abstracted away. Great. You're not telling me anything new Monarch. Why should I care? The interesting thing about C I C D is that the largest providers of C I C D Travis and buddy. No, Travis and [00:23:00] circle.

I use buddy CIA, but this Travis CI circle CI they're paid service. And they charge about 60 or 70 bucks a month in order to give you C I C D functionality that you can then configure yourself. But they'll handle your C I CD pipeline for you yet. Another service that's being that backend developers are paying for and that's affordable.

If I wanted to go and set up Jenkins on an instance right now and go and configure it with this clunky UI, I would take so long and it would be so painful. I would first have to requisition a server spin it up, get Jenkins going set up my credentials. That takes about a day with Jenkins in my experience like half a day to a day.

After you set up Jenkins, you want to go in and start configuring all of those pipelines. Jenkins is UI. Isn't that great as everybody knows it's notorious for its clunky UI, but it's a great tool. It's a great free open source tool. It's just. The amount of time that it takes to set Jenkins up is so high.

The [00:24:00] per hour labor cost of developers is about $50 an hour, roughly speaking. Why would I want to spend four to five hours? That's about 200, $300 and not work on something else. That's more valuable. Why would I want to set up Jenkins and then have to configure it in the clunky UI? If I could.

Pay somebody 75 bucks a month and they handle that for me. And they give me stuff that Jenkins doesn't give me like like code based C I C D definitions. You can define your C CD pipelines in code in Travis in circle. And why wouldn't I, why wouldn't I wanna pick that up? Why wouldn't I wanna build why wouldn't I wanna just pay somebody 75 bucks a month so they can handle all of this for me, not to mention they're managing the server, which.

The abstraction away of that low level service, the C I C D provider is managing the server for you. And that again, now we're starting to see a theme over here where low level stuff is being abstracted away and [00:25:00] is being char. And the developer is being charged a subscription fee in order to in order to hook into this piece of value that you've created.

So everything is turning into a SaaS platform, essentially in the backend. And it's really exciting. It's a little scary, but it's also really exciting because that means I, as a developer spend less time building stuff and more time less time doing the plumbing that I'm not really interested in, and that's not valuable to me.

And more time actually building business logic and creating value for my customers. Now let's talk about these large one stop shop infrastructure as a service provider. So I'm talking about GCP, AWS, even digital ocean, although they're, they have a more limited service offering all of these. And I believe Alibaba is also in the game now.

So all of these different all of these different players they offer. And have been offering for years many different services that they'll manage the server for, and all you have to do. [00:26:00] Click a couple of buttons. Tell them what kind of configuration you want for your database? How many gigs of storage do you want?

How many gigs or Ram do you want? What kind of CPU do you want? You configure all of this stuff. You press a button and boom it's deployed. If you want a load balancer they'll reposition and deploy it for you at the click of a button. If you want to clone your instance, they'll do that for you as.

And this is all old hat I'm this is not a trend, but the synthesis of this with all of the other with all of the other trends is the interesting part that I'm trying to get to. It's it's all coming together as it's all coming together in this. Style service offering for backend developers and frontend developers.

That's abstracting away the low level work and it's making it easy for me to buy rather than build in house. And I have a scary item over here called the downfall of the engineer question mark. [00:27:00] And I wanna talk about that and I would love to have a dialogue about that. But depends on how many questions we get.

I don't have any questions so far that I know of. But depends on how many questions we get. I can wax poetic about it, but we can talk about what this means for engineers. But there's one stop shop. I asked thing let's elaborate on that a little bit. Infrastructure used to be a big box in your company's basement or in, on a floor or not just one big box.

It used to be a whole floor of boxes that ENaC style, you know, 1940s, big mainframe style boxes that did all the hard work using you. You would have to plug it into your wall and it would suck up your it would contribute to your electric bill and you actually had to manage the damn thing.

We've moved past that and we've abstracted that away into the cloud. Now the cloud itself is being abstracted away into serverless and more and more of these infrastructure providers are offering serverless functions like, Lambda. Not only are they offering Lambda style functions, but.[00:28:00]

Other companies are building their own Lambda functions on top of infrastructure as a service. And then third parties are then building their applications and their APIs on top of on top of those secondary Lambda service pro like Netlify and Versace, I believe are on top of AWS.

Don't quote me on that, but they very well could be then people are building just they're building layers and layers and layers on top of SAS monthly subscription fees. And it's creating all these really interesting value chains. And I'm gonna, I'm gonna get into that in possibly the next slide before I do that, let's talk about open source.

So what's the future of open source? I don't. Is the honest answer. Jenkins is open source. Jenkins is free. Going back to CSE D Jenkins is free. I would never use Jenkins in my life ever again. I would avoid it like the plague if I could help it. And not only because of the clunky UI, but also [00:29:00] because of the fact that I have to manage my own server and I have to deploy it on a server.

So open source solutions, I don't think they're going away. They're definitely becoming less and less relevant and less useful to the to the end user. I'm a full stack developer. I'm going to give an example of what I'm seeing from another industry game development in game development, you used to have to build your rendering engine yourself.

You could buy one, but you would then have to write your algorithms yourself or path finding. You would have to make your code yourself and you would probably use a bunch of open source components along comes unity. The whole thing is commercial. I know there are open source core.

There's an open source core to it, but most of it is commercial. You can buy plugins for it. You can buy assets for it. And a whole ecosystem of commercial services has sprung up around around the unity engine and the unity engine makes it so that game developers are no longer coding their [00:30:00] UI.

They're just dragging and dropping components onto their UI onto the map or onto the 3d map, whatever you have and. It's a tool set that's commercial, and that offers cap capabilities that game developers didn't have before. Could something like that happen in the front end, in web development. I don't see a fundamental reason why not?

I know that people are gonna talk about dream Weaver. We've all been we've all been bitten by the, by, by dream Weaver and we're burnt by it. And we don't wanna go there as an industry. If a commercial solution arose that charged you 99 or $150 or $200 a month to give you the IDE and the framework, you need to have a full react style application.

That's just drag and drop. Why wouldn't you buy that? In the back end, it's the same thing in the back end. Why wouldn't you buy something that gave you. A commercial solution that had the support of engineers that had the support of software developers who were working for that company and were fixing bugs and [00:31:00] improving the platform for you always updating it and giving you more, more More and more functionality for more and more bank for your buck over time.

Why wouldn't you buy a solution like that and buy into it fully? Why wouldn't you rely on the professionals to do their jobs rather than going to the community and picking up something that's community built? Because in my experience these commercial solutions are so far ahead of any open source solution out there.

In terms of practical value, I really see the role of open source diminishing over time and becoming more and more specialized in certain areas and use cases. I feel that open source time is not done. In fact, it might still flourish as a result of this. Vast ecosystem of paid subscription services.

That's coming up. I feel like open source might actually flourish, but I feel like it's its role is going to change and it's going to be less mainstay and more support or low level building block in the future. But. Who knows. We'll see where that goes. People have been [00:32:00] talking about the death of open source forever.

I'm not gonna add to that chorus of voices cuz I actually love open source. And I don't wanna see it die, but I think it's definitely gonna change. So this is the slide that I really wanted to elaborate on. I think I have another 15 minutes or so maybe a bit more. Let's talk about the big picture.

And you guys can read the points over here, but I want you guys to just listen to the sound of my voice, telling you a story. And the story I wanna tell you is the story of the hammer. Back in yonder years the blacksmith who. the blacksmiths who did who made horseshoe for are for armies and who made armor and swords and weapons and, nails and various different pots and pans, whatever blacksmiths they would.

have to learn how to make their own hammer. And the only option they had for making a hammer was you have to for it yourself, or, borrow one or get one from somebody else who's a [00:33:00] friend of yours. But the default go to for blacksmiths was you had to make your own hammer, same thing for all of their tools.

You had to make your own tos. You had to make everything had to be made yourself. It was really hard to go out there and buy a really good hammer. It be because a skilled blacksmith would probably make a better hammer that suited for themselves than the hammers that were available in, the one thousands or 12 hundreds fast forward, a little bit.

And these blacksmiths. Yes, they were making hammers, but they were those hammers were very inconsistent in quality. They were not always one hammer was never the same as another hammer. They might be built off of the same blueprint or the same formula or recipe or shape or whatever you wanna call.

They would more or less look the same, but they weren't really the same hammer. Your hammer would be different from my hammer because your hammer would be built by you. My hammer would be built by me. So there was no consistency. The quality of hammers depended largely [00:34:00] on the scale of the blacksmith. And that was back when metallurgy and metal working were metalwork was a cottage industry back then division of labor came in and.

Some really smart people started making hammers in a factory. And inside the factory, they decided that they would make the best hammer possible and sell it for a profit. They started competing most blacksmiths didn't really wanna buy the hammer that came out of this factory because they just wanted to build their own hammer.

They were used to it. They were used to doing doing it that way. They was a sense of pride around making your own hammer and being, being the, making the best hammer you possibly could so that there was a sense of a craftsman's. What happened after a few decades or possibly centuries of specialized factories making hammers probably decades.

What happened was. These factories got so good at making that hammer, that the hammer they made was by, it was by [00:35:00] far superior to all the hammers that any blacksmith made, regardless of their skill. The hammers that were made in these factories benefited from consistency of process. They benefited from consistency of raw material.

They benefited from a continuous improvement on process and in purchasing practices continuous improvement in research. These people, these factories could actually do deep research on metals and they could hire really smart people to make better and better hammers and because of division of labor and because of economies of scale, buying a hammer from a factory.

Was also way cheaper than making a hammer yourself. Maybe you would take half a day or a day to make a hammer yourself, but the hammer you could buy from the factory, you just go across the street, buy the hammer and that's way cheaper than making it yourself. In terms of time, in terms of investment, it was just made sense to go buy a hammer.

And the hammers were also higher quality. So what happened was blacksmith stopped [00:36:00] making their own hammers and they started buying hammers from these. Over time. Of course, the blacksmiths themselves got obsolete and these factories started making More and more items in a more systematic way where they would hire experts and they would hire labor to build these components to build these tools, to build these components that would then be used in secondary industries.

And that, that same dynamic is currently happening in software. Develop. the same dynamic where the developer would previously build tools and the developer, even now the developer would build these tools themselves. They would create these components themselves. They would you would manage your own server.

You, you manage your own database. You create your own database schema. As you write your. Own conventions for code in the back end. You do integrations yourself. All of this is starting to get replaced by commercial players who will give you everything that. [00:37:00] That you can do and more at a lower cost than you can do it yourself.

So off zero they let you have up to 7,000 monthly active users with full authentication, hooked up to OA. They give you Google authentication. You can sign in with Google. You can sign in with LinkedIn, Twitter, GitHub. I think they have a hundred or 200 authentication partners now for oat. They give you password reset.

They give you a forgot password capabilities. All of. For free for up to 7,000 monthly users. And then they start charging you once you've reached 7,000 monthly active users. That's ridiculous. Why wouldn't you use oat? Why wouldn't you use odd zero? Why would you build your own authentication that can take days or weeks?

If you're in rails and you're using a gym, you're still, depending on something like device that you would've to configure yourself and maintain yourself and there could be bugs and you have to constantly update it instead. Odd zero just gives. Nope, no need to do that. [00:38:00] Just use our SDK we're professionals.

We're gonna manage that ourselves. You just use our authentication and you're gonna be just fine. It's free. Don't worry about it. Mind blown. Why would you ever wanna do odd to yourself? And this is happening across the board. It's happening with odd it's happening with infrastructure it's happening with C I C D.

It has happened with C I C D. And it's, this trend is accelerating and there's an ecosystem of paid services that are affordable for the average developer and that are no brainers to purchase. And what this is creating is an ecosystem of first, second, third level consumers, where all of these services are being composed.

One on top of the other. API is built on top of API. B is built on top of API. C is built on top of et cetera, cetera, and they're all working together. And developers and those companies are gonna be better at whatever that API specializes in. Than anybody you can hire a developer who's in odd, zero specializing in a, just doing odd.

An architect who's in odd. Zero is gonna be better at odd than pretty much [00:39:00] anybody you can hire. And that is a game changer because now you're looking at. Specialized developers who just deal with building authentication systems like locksmiths almost. And that division of labor, it, it is division of labor in the pure sense, because you are outsourcing, you're letting somebody else build art for you.

And you're buying that from them. That's division of labor, that's pure division of labor, where they're specializing in doing something really well, so that you can then build on top of that. What this increased convenience also comes with a lower barrier to entry. And the big picture over here is that boot camps that until today have been a little they've been in that phase of people.

Don't really know what to do with them until now. And this year they've really come into their own. Boot camps are now turning out developers that are better fit for their environment than universities are. What I mean by that. And that's a, I know that's a large claim, but I have numbers to back that up.

Last year 70, there were 78,000 [00:40:00] programming students be that software engineering of computer science that graduated from bachelor's degrees in univers. Last year. So that was 78,000. The year before that there were 70,000, that's about a 10% increase year of year. Meanwhile boot camps they've been growing way faster in 2019, there were only 20,000 boot camp graduates in 2020.

There are 33,000 boot camp graduates and 2021 that's a 70% increase. If that holds 2021, we're gonna see about 50, 55,000 boot camp graduates. Next year, they're gonna overtake universities and the year after that, they're gonna leave them behind in the dust. Yes, employers are hiring from boot camps.

They sport a 60 to 80% sorry, 60 to 95% placement rate in the first year after graduation. The median in my experience just guesstimating being about 80%, 85%. And these developers didn't know coding 12 weeks before they ended the program before they graduated. They didn't know coding at all, and now they have enough skills to go and build [00:41:00] web applications or backend applications.

Because there's a simultaneous trend of SaaS companies these APIs and serverless companies coming up simultaneously. There's. There's this resonance effect happening where these API companies are being picked up by these bootcamp graduates way faster than the university graduate will ever pick them up because the university graduate has been taught to build stuff a certain way in a traditional way, but the bootcamp graduate has been taught industry relevant skills and they're actually, in my experience, boot camp graduates have way more relevant skills than these university graduates have at this point it's also now more feasible for companies to hire bootcamp graduates because of this lower barrier to entry that comes from the convenience coming from all of these division of labor companies APIs and servers.

What does all this mean? I think what it means is that. Software development is gonna become a very democratic industry. I think in the next 50 years, coding is gonna become something that's as [00:42:00] that's we're gonna get closer and closer to that dream of everybody can code. I don't think we'll ever get there fully, but I think we're gonna get there more and more because coding is gonna be so powerful for so little effort You're you can just pick up a little bit of JavaScript integrate with Algolia and then you have full search integrate with Mapbox.

You have full mapping capabilities with just a smattering of JavaScript. That's going to change the unit economics of software development forever. And that's gonna, that's gonna. Change the unit economics of education in tech forever. So there's a massive sea change coming. It's completely invisible.

Nobody's talking about it. I don't know why. You're hearing it here first. This is really exciting stuff, and I really think that there's gonna be a massive sea change in the next in the next decade that these two the first four backend trends combined with boot camp is gonna change how we look at software development forever in the next 10 years.

We can talk about more philosophical stuff. Now, are we living in the singularity? Is it coming? Are we all gonna get eaten by Skynet? If anybody's familiar with the [00:43:00] technium hypothesis, that would be an interesting thing to talk about right now as well, because these new companies and these new technologies they're composing on each other in a very biological way.

It almost looks first level con producers, like grass and second level consumers like cows and third level consumers like tigers. Like it is really starting to feel like there is a more fluid Way of organization that's coming out of all of this that more closely resembles biology than it resembles business or technology.

All of these all of these API companies are composing with each other. They're composing on top of each other. And there's to say nothing of uh, YouTube's algorithms that'll tell you stuff that you didn't even know you wanted to hear. . Yeah, I can also take just regular old questions about, Hey.

Okay. What does this mean? What are these four API trends, etc. Etcetera.

**Brian Rinaldi:** All right. I didn't have any questions that were posting the chat yet, but I actually, I have some stuff I want, you covered a lot of ground here. I like, I think [00:44:00] one of the things I really is the way you tie it to So like a thought of a business way of thinking, as opposed to as developers, we often are just focused on oh, this is cool.

And the code is cool and not really thinking about oh, what is the cost of doing, of say, building something versus the cost of buying something and so on. And funny enough, I know this wasn't a jams stack presentation, but you basically gave like all of those things about those backend services and buying versus building and so on is a fundamental tenant of the whole jams stack philosophy.

It's that's what makes that possible. Like I add my authentication with O zero and my search with Algolia and my content with the headless CMS. And each of those is very distinct and it's and what it's trying to do for me. It's, I think that is all of those things coming together, as you mentioned to

**Monarch Wadia:** kind

**Brian Rinaldi:** make that a possible architecture

**Monarch Wadia:** it's it's a really weird [00:45:00] place to be isn't it as a software developer, because it feels less like architecture now, and it feels more like you're buying a host of subscription services and it feels messy to me as a pure bread software developer.

But yeah, as a business owner, it feels magical. It's whoa, I can do that.

**Brian Rinaldi:** I've been doing this for so long that I've built all those things myself, and I could tell you that even the ones that I did my best, that are still not as good. And don't aren't as, well refined as any of these solutions that I now just integrate, like I don't ever want to have to build off again.

It's. Awful to have to build and it's easy to mess up. As a developer, I'm more than grateful to pass that off. And I've built decent search before, but I can't compete with what Al Bo gives me right. Outta the box, honestly, without putting a ton of effort into it.

So I agree with you and it makes total sense.

**Monarch Wadia:** You can't compete with. And your business [00:46:00] can't compete with the other business who decided to adopt that tech. So what happens is your business ends up having less appealing features and ends up being not as attractive to your customers because, oh, you don't have that advanced search capability that the other businesses have.

Everybody has it. You don't. So it's actually not only is. Better to buy it from an economic point of view, but it's also, you have to buy it now because the gen E's out of the bottle and it's granting everybody their wishes. And if you don't, get on that band wagon your home baked solution for search is just not gonna be as good as the genie solution for search.

**Brian Rinaldi:** Yep.

**Monarch Wadia:** What's, what are you gonna do?

**Brian Rinaldi:** And you saved your, the lead to the very end, cuz I thought your comments about boot camps was was, were really interesting in that end and not something you hear people saying often there's I know, like I, I brought up in, in communities that I'm a part of.

Sometimes as soon as somebody starts talking about boot camps, it becomes a big debate. You know about the value of [00:47:00] boot camps, but I think that in many ways that you have a good point about the division of labor and the skillset that they bring. I think we're where the struggle has been is employers are often the ones who like I've found are hesitant to hop.

Even though when they do, like in my, and where I live, for instance, everybody, they're all looking for senior developers or, mid-level to senior developers and they'll tell me I've been looking for a senior developer for a year. Yeah. And I can't find anybody. And I'm like have you tried maybe looking at some of the junior developers out there's we have a lot of them, and you could train them.

They're like no, that would take too long.

**Monarch Wadia:** oh, unless you unless you change your architecture and you outsource this stuff to somebody else, and then you can have those junior developers work on business logic. So yeah. It's. Yeah.

**Brian Rinaldi:** Yeah. But I also, they spent a year looking for somebody and still haven't found imagine this junior developer would now have a year of experience.

if you'd just done that a year [00:48:00] ago and be ready, be. They'd be rolling already. I think, having that pipeline internally at a lot of companies is tough. They don't feel like they have the expertise to train somebody. I don't know. I don't know what it is, but I do think that there's a lot least in my area.

There's a lot of talent out there who are coming out of these boot camps who just underutilized at the moment.

**Monarch Wadia:** So I've been you already know this, but I've been working with boot camp talent for the last year and yeah, we have, 4,000 people on our newsletter. We have 3000 people roughly on our discord, 3000 across our social media and.

At min being and they're a lot of them are bootcamp developers and I talk to a lot of them. I see a lot, I see the same distribution in bootcamp clubs as in university undergrads. Yeah. I have neighbor's dog has that too. And I've closed my window. It's cool. Those are my dogs. what I was saying [00:49:00] was the The talent gap is the same in university grads, as it is in boot camp grads on average, unless you're going to a top tier university, like Waterloo or MIT or whatever, then yeah, you're gonna get way better talent.

But if you're looking at the average university versus the average boot camp I would rather hire from bootcamp at this point. I would have to filter and vet and search. But the boot camps are just as good as your average undergrad. Now the difference between junior and senior and intermediate.

Yeah. You have a point there, but that's just, if we don't hire junior developers, now we're not gonna have enough senior developers, five years from now. So yeah. What do we do as an industry?

**Brian Rinaldi:** Yep. I agree with you. Totally.
