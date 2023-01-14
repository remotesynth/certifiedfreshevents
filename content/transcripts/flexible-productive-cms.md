---
_build:
  list: false
  render: never
---

**Tiffany Janzen:** [00:00:00] Hi, Brian. Thanks so much. I'm really looking forward to some of the other upcoming events that you shared you'll see me at some of those as well. And hi everyone. It's great to be here today. I have really been looking forward to this event to dive into the topic around the challenges of the modern c m s.

In this talk today, I'm going to be diving into the questions around what are some of the common challenges around or with content-driven architecture, and then also to how to create a system that balances both flexibility and also productivity. As I find that these are often two of the biggest challenges that we.

Especially as developers, oftentimes between flexibility and productivity, we, there's some friction when we are thinking about content-driven architecture. And also too, working with content editors.

For those. I know Brian already introduced me, but a little overview. My name's Tiffany, but you can call me Tiff. A [00:01:00] bit about myself. I am a forever learner, a very curious person, which oftentimes can get me into a bit of trouble, and I absolutely love dogs. Actually, if I go back a slide that is my dog dirty, hairy, he's named after Clint Eastwood, and I also have a little wiener dog named Mr.

And I'm sharing this with you because it's almost like a forewarning because throughout this presentation you will see a lot of dogs. So just as a little heads up, On the side, I have built a technical community called Tiff and Tech, which reaches millions of people every month. And I try and not think about the numbers too much because it can become a little mind blowing if you start thinking about it too much.

But on these social platforms I really share advice on how to grow a career. My personal career journey in tech, very authentically my highs, but also my lows. Also with various coding tutorials and how-to videos. And then as [00:02:00] Brian mentioned as well I am I work at Stack Bitt. I'm a developer advocate at Stack Bitt, where I focus on building and educating the developer community through live videos, recorded videos, or really any form of content that best supports developers.

And prior to starting at Stack Bitt, I was a software developer. For the past five years, I've worked at both small startup companies and then also to large companies. So I won't dive too deep into stacked at this point, but to give more of an overview of what stacked is we provide an environment that allows for us as developers to be able to continue to work with any tech stack that we want so we can retain full control over our code.

Also to our content editors or marketers, they can work in their preferred environment in a visual editor that's very user-friendly easy to use, and then designers can work in their preferred environment. So I like to sum it up as everyone can [00:03:00] work how they want, and the best of all worlds.

And I'll get into a bit more of this at the, in the demo at the end. But that's a little bit of what stack bit is. Let's get into the history of CMSs. I decided when I was thinking about this talk today, I decided to first take a step back and really understand the history and some of the challenges faced around CMSs over the years.

And my reasoning to do that was because really when I'm learning anything technical or non-technical for me, To gain a solid understanding of it. The best way to do that is to understand a little bit of background on it, because that way it really helps us be able to understand why decisions were made different challenges faced along the way and it's a really great way to do that.

And in total transparency, I started at Stack Bitt about four months ago, so I'm still pretty new to the world of headless. I quickly realized that as I was diving into it, that there are so many different [00:04:00] challenges in this world alongside a lot of the benefits, and it's just a forever learning process.

When early content management, when we think of early content management systems they were at the time game changers for developers. Think about before content management systems came along, developers would need to write HTML for essentially each piece of content for the web. The traditional c m s, also known as monolithic applications, started to become popular around 2000 and.

Now, I'm sure you all are very familiar. Maybe some are too familiar with this logo here. A popular one that we are all very familiar with is WordPress. WordPress At the time though, and still today, but initially, it allowed for content editors and developers to work better together and for developers to enable content editors to be able to build out content much more efficient.

Shortly after full Stack [00:05:00] Frameworks really started to come onto the scene from Rubian Rails, Jengo Symphony, and many others. This at the time, this was a pivotal moment for developers and also for content management systems. It allowed for developers to be able to be more efficient and also web development.

They were able to create functional web applications with minimal setup and also quicker configuration. Focusing on being able to build out features rather than focusing on boiler plate. Also as a side note, before I move on, every time I see the Symphony logo, I have to take a step back and chuckle to myself.

When I was first learning how to code I went to a coding bootcamp, and this is many years ago. And at the time I was learning what, all the quote unquote sexy technology react JavaScript, node MongoDB. And this, I was like, this is great. I'm loving this. Fast forward to my first developer job.

It [00:06:00] was in p h P and Symphony, and I was like, this is extraordinarily different than what I initially learned, but, and then you see online all the challenges we should say that it can bring, but I actually grew to really enjoy it. But just wanted to share that funny story with you. Fast forward a bit more.

In 2008, Google released the V8 JavaScript engine, which really put JavaScript further in the spotlight and made it possible to execute the language with high performance in the browser. V8, as I'm sure many of us know on here, was designed to be fast, and it introduced a number of optimizations that made it even faster than previous JavaScript.

This made it possible for us to build more complex and sophisticated web applications without having to sacrifice performance. Oops. Fast forward to around 2013. Around this time, we really started to see JavaScript frameworks and libraries pop up. [00:07:00] These frameworks from Angular React made it easier for developers to build single page applications and also to be able to handle dynamic content on the front end.

It was around this time we started to see the shift for headless seed messes to start to gain more popular. I really love this photo of this dog. I think this dog sums up how I feel most Friday afternoons if I'm being totally candid, just like I need the weekend to come. At this time though, as modern JavaScript frameworks were gaining popularity, developers of course wanted to use them and build web applications with them.

These new technologies or newer technologies coming out, they wanted to start utilizing them. However, because of this, it caused a lot of friction with traditional monolithic CMSs. Which made it difficult to support these frameworks, not to mention some other pitfalls. Were continuing to appear with monolithic CMSs.[00:08:00] 

Now let's dive into some of the downsides of the monolithic cms. Okay. Maybe downsides isn't the right word. Maybe we should call it, let's call it challenges. Let's remain optimistic and just say challenges. The first being scalability. Monolithic CMSs can be resource intensive and they may not scale well as the size of a website or number of users continues to increase.

Not to mention cost. It can be super expensive to scale. For example, let's think of the cost of a headless c m s. They are affected typically by increases in content volume more than monoliths, which typically tend to be more affected by increases in traffic. Another challenge with the monolithic C m S is around upgrade and migration.

Upgrading and or migrating a monolithic C M S can be time consuming and a pretty risky process. It often [00:09:00] requires significant changes to the underlying infrastructure. For example, let's say what is a good example? Let's say there is a company that is using an outdated version of A C M S for their website, and the company decides to upgrade to the latest and greatest version of this c m s.

But the upgrade process requires significant changes to the underlying infrastructure. Think of things including updating the server environment, the database schema and other dependencies. There is a possibility, probably a large possibility that something along this process could go wrong, causing the website to go offline or experience other issues.

Not to mention that the amount of time the company will need to invest in resources and energy for testing and verifying that this upgrade was successful. A third challenge that I [00:10:00] wanna share with you today is dependency on a single vendor monolithic CMSs. When we think of them, they're typically developed and maintained by a single vendor, which can make it difficult to switch to a different system or to access support and updates.

This is often because of the way they've chosen to do something, whether it be a specific language they have chosen, or their APIs might be super opinion. Naturally. As these challenges started to come up and become more recognized, the paradigm started to shift. As the shift was taking place around this time, the end users wants and needs were changing too.

A good way to summarize this is to take a step back and understand what is meant by omnichannel. As I mentioned earlier in this presentation, I am still, cons all considering pretty new to the world of headless CMSs. And one of the words when I first started that I kept on [00:11:00] hearing about was omnichannel.

Omnichannel omni. and I'm thinking, what is this word, omnichannel? It's what is exactly, what really does it mean? So I took a step back and I searched up what does omni mean? So the root word, omni means all things in Latin. And when you really think about it, that's how content should be delivered.

Nowadays, all available channels must be supported to ensure. That's why we needed better solutions. Ones like decoupled, headless CMSs that are agile enough to be able to keep up with new mediums and technologies as they continue to arise. I love this picture of this dog too. I wonder I, it must be photoshopped.

There's no way dogs can be. It has to be photoshopped. But the little part of me likes to think that maybe it's actually this flexible , but to support omnichannel content delivery, it is necessary to have a content management system that is both agile and flexible. [00:12:00] Enter the world of headless. I'm gonna share one quick story with you here about this image, it just always makes me laugh.

When I first started at Stack Bitt, I got sent a welcome package and, in the welcome package was a lot of the typical things you would expect. T-shirts, hats I think notebook, that kind of . But then there was also this Lego set, quite a big Lego set with no context. Like why was I receiving this Lego set?

And it should have been like a forewarning because I quickly realized that at Stack Bitt a lot of my colleagues are huge Lego fans. Actually, we went to the JAMstack conference and the giveaway prides was a Lego. So there's this underlying theme of Legos, and I've actually converted. I used to be a puzzle person to now I am, I'm more on the Lego.

So we're going to get into some of the challenges and how to overcome these challenges with a headless c m s. But before we do, let's also talk a little bit about some of the benefits that a headless c m s brings to us. . [00:13:00] The first one that is probably one of the more obvious ones is flexibility. As developers, when we are using a headless c m s, we can bring in, we can, we have a choice of technologies we want to use for front end, such as react, angular view, whatever framework we want, we can continue to choose that.

Another big benefit of headless CMSs is separation of concerns with a headless c m S, the content management and presentation layer, they are decoupled, meaning you can focus on creating and managing content without worrying about the presentation aspect. This can also make it easier to manage and update your content.

And a third one being scalability. A headless c m s is designed to handle large amounts of data and content traffic. It can scale easily to meet the needs of your growing business. And also too, taking a step back, I think another [00:14:00] benefit of scalability is that you don't really need to worry about it, meaning it will continue to.

However, you might have to take in, into consideration the pricing as you scale which is a big challenge, I would say. Speaking of challenge, let's dive into some of the challenges around a headless c m s one being lack of defined structure with all the freedom and benefits that a headless CMS brings.

It also brings little definition in how we should structure pages and components. Developers must build their own front end for displaying content. And with that freedom, they must also figure out how to properly retrieve and display content from the c m s on their own. Now, this typically isn't the challenging part.

This part is typically pretty straightforward, but where the challenging part really comes in is the lack of. Defined structure, [00:15:00] how Without limitations, how do we know the best way to structure our content and how can we ensure that how we structure it today will be the best way to have structured it years from now as we continue to scale?

Lack of defined structure can make it harder to ensure that the front end is consistent and also easy to use for content editors with a traditional C M s. If we think about. Going back, yeah, going back to a traditional c m s, the front end is typically designed with the needs of content editors in mind.

For example, there's often tools and templates that is provided to them to help them create and organize their content in a logical and intuitive way. Another challenge that we face with headless CMS is the responsibility for building the front end now falls on to developers who may not have the same understanding of the needs and wants of content editors.[00:16:00] 

This can lead to a front end that is more difficult for content editors to use, and in turn lead to issues with content creation and other organizational. Now another challenge around headless CMSs, and I know it's not a fun challenge to talk about, is cost. Now, gimme a second here and I need some water is around cost though.

And I know it's not necessarily the funnest topic to talk about cost and money around this, but the reality is that's how a lot of decisions are still made. Many headless CMSs have pricing that is based on I, the number of content types a p I requests and team members. Now, of course, this varies from company to company, but those are the three main ones that we see.

So I wanted to dive into a little bit more around the cost for these three types. Just going back to. The reality of the [00:17:00] decision making being so oftentimes tightly wound to the pricing. So for content types, with headless CMSs, they typically charge on based on the number of content types that are created in the system.

So a content type is a blueprint. You can think of it as for a specific type of content, such as an article or a product. And each content. Counts towards the total number of each content, sorry, counts towards the total number of content types. Another way they charge us is through a p i requests, so based on the number of a p I requests that are made to the platform, and this can get expensive pretty quickly.

And the third way is team members. There are different pricing plans based on the number of team members that need to access the platform. The cost per team member increases as the number of team members increase, and as we continue to grow, that can get expensive quickly as well. Another challenge that we often face is real-time [00:18:00] preview.

When we think of for content editors, when we think of content editors, the ability to preview content in real time is one of the most important aspects in the content creation process. Or maybe not one of the most important, but it definitely is up there. It allows for them to be able to see how their changes will look on the front end of a website or application before the content is actually publish.

Without real time preview content, editors would have to rely on other method methods such as manually checking the website or other workarounds to see exactly how their changes would look. And this of course can be time consuming and also just plain out frustrating. It can lead to errors and inconsistencies.

This makes me think of a little story here. When I, at my last job I was at, the last project I was working on was an Angular project. It was an angular project for quite a big international airline.[00:19:00] We'd be working on quite large features during our sprint. Heads down focused, making good progress.

When you get into the zone when you're building a feature, it's the best only to have the design team or the content editors paying you and go, Hey, we need some text changed on screen. Like yesterday I made a ticket for it here, and it's yes, it only takes a few minutes to do. It's a quick process.

But the getting out of your workflow to make these changes for content editors that are so small, it does, when you think about all the time that really takes up is quite large. Another example is when content editors are working on blogs, so say they are going to be creating a new blog post for a company's site.

Without real time preview, without that feature, you could say the content ad editor would have to manually check the website after making each change to see how the post looks. So once again, this might simply just be flipping between screens, but that [00:20:00] takes time and it leads to so much potential for inconsistencies, errors to occur along.

And I really gave two examples there to really hone in on this because this is a huge challenge that we face. And with the loss of realtime preview, the demand for modular and flexible e editing experiences i e site builders has continued to grow, making both of these problems more difficult to solve.

I love this picture of the dog. Cause this is how I felt as I was first diving into the world of headless. Is it even possible to solve these challenges? How can we it is possible. One of the biggest ways, one of the biggest ways to really start solving this problem is you need to know your content editors.

Flexibility and productivity. We go back to this. This is a question that I wanted to answer at the beginning of this talk, and it's because knowing your content editors is so important to understand how flexible you should [00:21:00] structure your C M s versus how productive it should be. So what makes content flexible?

What does that even really mean? More flexibility means content editors have more control over specific type of content that they can edit. So when we think of the ultimate flexibility, it would essentially include the content editor writing code. Think of them having a blank field in which they could write HTML and c s to build up the page.

But this doesn't equate to the ultimate productivity in where they actually should be spending their time. Flexibility does not equal productivity. The content editors shouldn't be spending the majority of their time building pages from scratch, but rather they should be able to utilize structured templates to build quickly and e.

So then on the flip side of things, what exactly makes content productive Productivity can be thought of [00:22:00] as giving content editors the ultimate packages of templates and reusable content. They can build pages quickly and efficiently through predefined content. Oftentimes, if we think at the extreme end of productivity comes a lack though of flexibility to modify content.

For example, a good example of this is say if the fields are hard coded to mark up on the front end, content editors may not have the ability to move sections around. So it's that friction still we're facing. So can we have the best of both worlds? This slide, every time I get to it, always makes you think this is my dream office.

Just replace humans with dogs for my everyone, and we're good to go. In order to find balance in the best of both worlds, there needs to be a system in place that stands on both how we develop the model and code, how they're designed and [00:23:00] developed, and then also to how the editing environment should work.

I really like this diagram here on screen as it's a good visual representation of how modeling and coding are. When we think around modeling and coding, we need to design our pages to be easily composable by creating a model that allows editors to build pages using various types of sections that can be stacked and rearranged as desired.

These sections should be reusable between page layouts, but also two components within these sections need to be reusable as well. This approach for flexibility and efficiency in creating. Organization for the pages will help allow to have what's the word? I guess both being reusable and also structured.

I wanna share one more diagram here and then we will get into the demo. To make your components more flexible and adaptable, you can [00:24:00] design them to dynamically resolve the actual component from the content versus only allowing hard-coded child. Now rather than me just talking about it here, let's get into sharing my screen and going into a bit of a demo.

Brian, I'll switch to my screen here if you don't mind. Perfect. Alright, so as you can see here I have a next JS project on screen and I'm keeping up with the theme of this talk. So I called it Dog app. And to start with, let's just run this to see what the project actually looks like here.

Okay, so dogs Rule the World. This is a very basic page we have where there's two components. We have our header component or our here component I should say, and then we also have our card grid component down here. Now if I go back into VS. Code, the content, I have a markdown file here, which it has all the content inside of it and under [00:25:00] sections in type we are referencing each components.

We have the hero section, and then in the hero section you can see the content, the heading, subheading, et cetera. And then we also have the type of, or the co, the component, I should say of card grid section. So two components. Now I'm gonna keep both of these files open instead of giving you a headache by flipping back and forth too much.

So in this file here in our slug, if I scroll down, you can see, I just wanna quickly highlight, we have two utility functions here. We have pages by type, which essentially with next js, we have to tell it what all the pages are. So we run this. And then we also have U R URL to content, which will give us all the properties for this page, but that's not where I wanna spend the majority of our time here.

Let me scroll up again to the top here for flexible page. So you can see this is a very simple, we have a title here, and then we also have a diviv here. And inside of this [00:26:00] diviv, we are mapping over page sections. Sections coming from the markdown file. and what I did was this components map, I made it up here and I'm passing into this object, the hero section, and also to the card grid section.

So you can see here we are rendering these components all from the, all from flexible page and fi You know what a good thing to do is let's actually create another component, and I'll show you the workflow for this. So let's create a component. Let's create a component called testimonials.

This is where the spelling comes in, the spelling challenge, testimonials section. Perfect. All right, and I actually to save some time, have the code here. Let me copy this.

Perfect. So just created a component. Now we can import our [00:27:00] content into the markup file or put our content into the markup file. Let's scroll down a bit here

and put our type, which is the component testimonial section, and also some body and an. Perfect. All right, so now then if we go back into slug js, we can simply just import that testimonial section that we created here. Let me close this for more room and just gonna copy less chance of spelling errors, even though it's a rare occurrence that there won't be one.

All right. And put it here. There we go. Now if we go back into our local host, We can see here we have a testimonial section. Now this solves, actually, let me go back to Loho. So this solves one issue of. For the development side of things, we are now structuring our code in a way that's very [00:28:00] reusable. If other developers are to come in, it's very readable, but it's still, there's still a missing part here that for the content editors, if they were to come in, they would still have faced the issue of not being able to.

Edit content right directly in a visual editor. They still have to flip screens, whether it be from headless c m s or in this case using a markdown file, which would probably result in them having to make tickets for developers to go in and edit. So this is really where stack Bit comes in. Prior to what I am, prior to starting this project, I or sharing this project with you, I did two things.

One thing is I created this configuration file. Let me close some of these. Now, I created this configuration file here, which is a pretty simple configuration file. I'm importing different models. Let's go to, let's say, let's go to hero section. And we can see here it's defining hero section and we're doing that for all [00:29:00] of our different sections.

Now, if I scroll down in the config we're also letting them know about the Stack bid version, different versions, and also passing in the model. So it's pretty simple configuration file. And I also installed Stack bit prior to this. So now what I can do is simply run Stack Bit Dev and this will share with us a URL that we can.

And it's still running locally. Local development as you can see. But you can see now this looks so different already from just the page before with local host, and it's because Stack Bit gives a lot of tools to content editors right out of the gate. So for example, let's do a change here. Dogs Rule the World that's going to.

Dogs rule the world section, and let's do forever, just a silly text change kind of thing. And this will enable two a sync. So we can see here on screen the change that occurred. And then if I go back into our markdown file, [00:30:00] Scroll up. We can see that the two-way sync has been reflected. So this is just a snippet, I would say, of the power of snack stack bit.

And this is an example with a markdown using markdown files, but this could be really with any headless c m s and. , it really allows for, it's that missing link in the challenges that I spoke about today for both finding ways to structure code that is best suited for developers and being able to work in your preferred environment, but also to then allowing your content editors to take control and have the freedom and flexibility to create pages, build on their own.

And I guess allowing developers at the end of the day to continue to focus on larger. All right. That is my demo, Brian. I know I'm sharing my my screen still, so I'll either go back to my slides or open it up for q and.

Okay. 

**Brian Rinaldi:** That, yeah. That was [00:31:00] great. Thank you so much. I'll go ahead and remove these slides here since it's just, thank you. That was really good. I think we did have one question from the audience, but if anybody has additional questions, we've got some time here. And we can, we're can open it up to more questions.

One of the things. That came to mind for me is, it has been. So I knew, I've worked with a lot of marketing departments and they tended to, like we were, we wanted to move to a headless cms. Oftentimes this was driven largely by the development team and less so by the marketing team.

If you're thinking about like how you would position this, like to. To try and sell your marketing team on why they should do this, make this change, like what would be the key benefits you'd pitch them on in terms of moving headless? Because I, I found that's often the hard part.

We, the dev developers see the obvious like benefits to how they build applications, but the marketing or the whoever is [00:32:00] managing the content doesn't immediately see the benefits of how, of using a headless c. . 

**Tiffany Janzen:** Yeah, that's a great question, Brian. And I think too, it's one of those challenges that are faced around, as you mentioned, developers see the immediate benefits, of course, with working with headless, but a lot of times for content creators, even as I was sharing in the presentation with a traditional c m s, it.

It sometimes is more, they're providing tools right out of the gate for content editors, tools and different templates. Whereas headless CMSs, it goes back to, okay, so now the content editor marketer needs to get familiarized with going into a headless c m s working with content in this way.

So I think it goes back to. There is no perfect answer. The answer that comes to my mind, the obvious answers that comes to my mind is use, having something in place like a visual editor, like a stack bit. And this literally isn't me trying to, say, stack bit is the way to go, but it's, but it is a, so it's there for a reason.

It's a huge solution to this [00:33:00] problem as far as finding that way that everyone can work still in their preferred. . Yeah, 

**Brian Rinaldi:** I would agree with that because especially cuz most cases, what they had prior, what did allow them direct like editing and previewing experience, which is always a struggle with the headless cms.

Obviously, in this case, I guess we're only really referring to the web application part cuz you know, the idea of a headless CMS is also, like you said, the, that we can, now I can reuse that content in a mobile app. Or in whatever, any different thing. Theoretically even like a voice chat app and things like that, if it's like q and a type information.

And do you. Do you feel like, I guess this is more of like a general question. Obviously you're somewhat new to headless cms, but do you feel that people are actually. Taking [00:34:00] advantage of that? Is it primarily cuz that's where I've often I've seen it and it's always talked about in terms of websites.

Do you feel that in your experience, companies are actually using this, reusing this content across multiple platforms? Or is it just ideally we can, we're not, but we can. , 

**Tiffany Janzen:** that's a great question. I think you, I think my, from my experience, I don't think. , A lot of companies are utilizing it across various, as many various platforms as they can.

I think it's more we live in this, ideally we can world. I think it's slowly starting to become more and more, but from what I've initially seen it's more we're living more in that. Ideally we can world, and I don't really, I'm not certain as to why that is. Maybe. It's just one of those things that is nice to know.

We could, I don't know what it is. It's interesting though, but that's a great question. Yeah. 

**Brian Rinaldi:** My, my hazarding, I guess as to why is largely because of how they're [00:35:00] not developing the content based on. Content, like it's often like we have this component, it has these properties on the website, so make this content that matches those properties as opposed to the other way around.

Let's build the component based on the content that we have. , I, at least that's half what I've seen is it's always gone. Design creates a site, the developers say they come up with okay, here's the pieces of content we need for this site. And that kind of limits your reusability if you do it that direction.

I don't, that's just me guessing. 

**Tiffany Janzen:** Yeah. No, I agree. It's, sorry. No, go ahead. Go ahead. No, I was gonna say, it's one of those things that a lot of times I feel we often talk about the benefits or the positives, but on a day-to-day if, how much we actually implement them, that's a, that's to be determined, 

**Brian Rinaldi:** yeah. Yeah. It is it, yeah, definitely. And and I think that it's just a lot of. As with any tool, if you use it, if [00:36:00] you plan ahead and do it right, but if you quickly, like the quick way of solving it is not always the optimal way or almost never optimal.

No, it's here's a question from the audience. I'm, I ha took a. A, a shot at answering it in chat, but Mike asks, how do newer JavaScript run times like Dino and BUN fit into the headless c m s architecture? Is it, to me it seems like probably doesn't really matter because you build it the front end however you want, or what do you, what do you think 

**Tiffany Janzen:** that, that's probably, that's was my first thought too.

It's a great question, but I think it's it would be. , I would say that's maybe we could look at that as one of the benefits or positive sides about headless. It's not here to determine for the most part around the technologies or the front end side of things, what we use. So I think it's, that's up to us.

Yeah, that's how I would answer it as well, is it, they do fit in the sense that if that's a tech, if that's what you want to use, then [00:37:00] we can use. 

**Brian Rinaldi:** Yeah. Yeah, exactly. That's, I would, yeah, I agree with that. I'd say that the only thing I noted was that maybe if I recall, like some headless CMSs have like starters and, or like integrations that you might miss out on if you're using something they don't.

Have support for yeah, as like a lot of 'em have njs, but if you're using Astro, I might not get, as an example of a, using a newer technology, I might not get the same integrations that are pre-built. So I'd have to do some of that stuff manually, but 

**Tiffany Janzen:** exactly, it always, oh, sorry.

**Brian Rinaldi:** I said, but you can do it manually. That's the 

**Tiffany Janzen:** idea. Yeah, exactly. It comes with, even with, in the world of headless, we always say you can, yes you can, but it's one of those things where depending on which headless c m s you are working with or which you go with, there are still caveats that go along with that.

And as you mentioned, maybe one is a little has better support for x, y, and z technology than another [00:38:00] one. And I think that has to come into play too. Yep. 

**Brian Rinaldi:** Excellent. Okay. That's all the questions we had from the audience. I thought it was a great presentation. I think, You hit all the right points in terms of the considerations for choosing one.

I think, the one thing I would love is there's so many options. Obviously stack bits, not prescriptive, I know on which headless c m s, but it's like there are a lot of headless cms. What do you have? I guess my last question before we can end would be, do you have any advice on how you can use this information that you presented to help you choose which is the right headless C m s?

Obviously it's not like one answer, Hey, this is the one you should use, but it like, how can you, how do you choose. 

**Tiffany Janzen:** I think, and this isn't a perfect advice, so take it as you will, but I think how one way how you can choose is going back to your content editors. So [00:39:00] when you think about.

Choosing a headless c m s from the, your team do, are there going to be a lot of content editors or is it maybe just more so focused on the developer? It's a development team and you're making the content changes? Because I think that can really also too depict or should have some, say, quite a bit of say into which, how you choose.

For example, there are some, for example I showed a demo quickly with markdown files. So of course if you're working. Tons of content editors, you don't necessarily con markdown files probably aren't the way to go versus say something like Contentful where it has a more user-friendly interface that content editors can go in as well.

There's still challenges within that, but much more user-friendly than something they can markdown files. , I would say at the end of the day, aside from that different headless CMSs to varying degrees support more some technologies than others. As you can bring in whatever you want, but as we just spoke about, the support [00:40:00] might be different.

The main focus would be understanding your team and your content editors. 

**Brian Rinaldi:** Yeah, I think that makes sense. I think that's, getting their buy-in is the most important piece of. of the puzzle. To me it's , it's the hardest part. You can probably build a site with any of them.

, but like getting, but if the editors are like, this sucks and I'm not gonna use it then the project wound end up failing ultimately. 

**Tiffany Janzen:** Exactly. And then you're, as a developer, you're spending time in places that you shouldn't be or probably don't wanna be spending your time, making these updates.