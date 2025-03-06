---
_build:
  list: false
  render: never
---

**Bryan Robinson:** [00:00:00] And first things first, I do want to set some expectations. Last year at the jam. dev, I gave a presentation. You might've seen, seen me here as the world's foremost expert on jam stackology, but I've had to shutter that line of inquiry due to the death of the jam stack after all. So if you saw that presentation, you may have an understanding a little bit of my presentation style and this year.

Well, it's going to be a little bit different. No more professor Robinson, unfortunately. Um, I'm no longer an academic in the cutting edge field of Jamstackology. Uh, but much like last year. This will be a tech talk and we will talk tech in this tech talk, but talking tech, isn't the point of the talk about tech, right?

It's meant more to be an inspirational [00:01:00] talk than an instructive talk. I just want to be upfront with you about that and let you know that going in. That this is about you. It's about your power and not necessarily about the lines of code that we want to write. So with that being said, let's dive in. And I want to start this video by saying that we're going to do the six strategies for getting a job in Fang.

If you're looking for your first job in Fang, we're going to do five or six different things and they will all shock you. Before we get there, smash that subscribe button. Wait. Wait, no wrong venue. Uh, that's not right. That's not what this is about. Let me, let me try that intro again. Sorry. All right, here we go today.

We're going to cover the three apps that you can create to become a millionaire as a junior dev. Before we dive in, be sure to buy my course. Devionaire is a guide to wait. Nope. Still wrong. Still wrong. Not an influencer. I'm just here giving a presentation about developers and their power. Not about [00:02:00] money.

Okay. I got this. I got this. Here we go. Obviously all that type of content exists and it exists for a reason, right? Being a developer is certainly also about money. I've made a good living as a dev and as a dev educator. So I absolutely get it. And I want you to go get your money. Be stable, make as much money as our capitalistic society will let you.

But I want to talk a little bit about the other perks of being a developer. The, the side benefits, if you will, but before we can do that, I do need to address one big reality in our capitalistic web, this web that we find ourselves in, and it's good that it's called a web because in a lot of ways. We're trapped, we're trapped in what I would consider to be a user hostile web.

And if you don't believe me, take a look at Google AI summaries that may or may not be [00:03:00] correct. Google and Amazon have so many ads that you can't find what you're looking for. They're pointless, terrible, often spam laden. Content on news websites. There's advertorial junk, slowing our sites, slowing our apps.

And if that's not enough, check this out. I actually write on legal pads. That's primarily where I do my writing for blog posts and where I do my writing for this script and this presentation and all sorts of stuff, but sometimes I run out and when I do, I need to find one quickly. So I go to Google and I look up legal pads at Walgreens, right?

I won't go to the corner drug store and grab one and look at what I get. Most of these aren't for Walgreens. There's Office Depot, Uline, Ace Hardware, competitors of Walgreens. And I can't find what I'm looking for, but maybe I want it in two days and I can go to Amazon and I can wait for it. So go to Amazon, look up legal pad.

Ads, sponsored across the top. Oh, here are our first results right beneath them. Oh wait, nope. Each of that, those is sponsored, right? [00:04:00] Sponsored, sponsored, sponsored. Oh, here's five. One's an official pick. I don't really know what that is, but it going down. Here's more customers frequently viewed, but all those are sponsored too.

Ads, sponsored, sponsored, ads, AI junk, whatever it is. So again, I say. We're trapped, we're trapped in the, and pardon my language on this, the inshittification of the web. Now, what's that mean? That's not something that I came up with. The term inshittification, again, pardon the language, was originally coined by Cory Doctorow in his post about I'm not going to go too deep into historical context, although, if you know me, you know, it's a struggle for me not to go super deep in the history of the web, but I want to talk a little bit about it before we can move on in the previous slides, slides, we saw a few aspects of this Google and Amazon are two of the more notable examples of this Google, Amazon, and Google, and Amazon are two of the more notable examples of this Google, [00:05:00] Had amazing search, right?

They hooked literally the world on having all of our information right at our fingertips at all times. They then introduced ads that had to make money and they had to make the money off the engagement they had in search. Right? So that made users lives a little worse. But business customers better. Then they let companies compete on branded keywords like Walgreens.

I look up Walgreens legal pads. Cause I want a legal pad from Walgreens and I get whole bunch of their competitors right away. Amazon, much the same. They hook customers with low price goods and free two day shipping. Then they introduce ads, which made the customer's lives worse. And then they introduce even more ads, which made the business lives worth worse and all of that to rake back as much value from the businesses and from the users as they possibly could.

So we're trapped. We're trapped in this little ecosystem. Maybe we can break out. And I don't, I don't know that it's a breaking out that we need to do because that implies that we have [00:06:00] to like break the door down, maybe locked. And we can unlock the gate that keeps us from a better experience. And as it turns out, perhaps, perhaps developer knowledge, that key that can allow for us to unlock that gate for ourselves and maybe even for those around us as well.

So let's unlock ourselves and let's start simple. And then we'll kind of increase in complexity as we go along. So we'll start by where we are on the web. Now I've been tweaking for a long time. Wait.

I've been making changes, the website use for, I don't know, a real long time. I mean, Brian introduced me as saying just under two decades and probably about that amount of time I've, I've been making small changes to websites. Does anyone remember Firebug? If you're an old, like me and used Firebug, maybe, maybe [00:07:00] put something over in chat, maybe yourself, one of those Cloudflare things.

Let me put a bug in the chat or put a heart or whatever it is. If you've used firebugs, let me know. Anyway, firebug was really set of developer tools for the browser and it made our work so much easier. I learned how to debug so well in firebug. It was honestly, I think it's safe to say it was revolutionary, but I didn't just use it for work, right?

I also used it for other purposes like reading. Posts. I'm an old, I've been around Penny Arcade since it started, uh, the original site for Penny Arcade, and this is a, um, a machine version of it. The original site was white text on a blue background, tell you it would destroy my eyes if I spent more than maybe like two paragraphs on it.

And the writer for Penny Arcade rarely wrote just two paragraphs. I'd wanna read the whole thing and. So I'm going to go ahead and [00:08:00] write this background color and I'm white, black text on white background, and my eyes were better. Now, this is totally a personal issue for me, and I solved it in a very personal way, but I could do something because I knew the DevTools of the day.

Now I have even more DevTools, and though their site is better, they can actually For me now, thanks team over there. I now can go even further and do more things with the browser tools that I have available to me. For instance, I have a nine year old son. He goes camps him to be able to read through camp.

But I also want to limit his screen time. So I went to the summer camp website. I opened up DevTools, just started ripping things out, right? Header gone, footer gone, font sizes changed, margins changed, all these things because the website didn't have a print style sheet and I needed to print this out and I wanted to not waste 16 pages of paper.

I didn't want to waste all [00:09:00] of my color ink, so I made sure that. It was as small as possible and that I removed as much of the extraneous stuff as possible so that my son could read it and not have to be on a screen. Again, very, very personal. This might not seem like much, but something that a non developer won't be ready to do.

Right. Let's move on. Remember those, uh, those pesky AI summaries that I showed before. These simple tweaks that we can make just in like dev tools are things that. We can kind of fix systemic issues as well. Every time I search, I typically get an AI summary. And for me personally, I think these are highly problematic, uh, but they're also incredibly hard to ignore.

I mean, they're intentionally incredibly hard to ignore. They're right at the top. They're big. There's a little animation around them stuff. So I. Try to ignore them could [00:10:00] go away, but that's incredibly hard to do. Or I could go into dev tools and I could remove it every single time. Right. But why would I spend all of that every single time when I could try to ignore it, or we're still use it.

Right? So instead I can actually get my browser to totally kill it and never show it at all. But before we dive into that, I feel like giving too little tips before I can now do a little aside and go into historical context in modern and modern rants. Right? I really want to teach a little bit about the history.

I really want to come and give you some, some points of view on this. So I want to talk about CSS. Did you know that CSS was not necessarily going to be the styling specification? When it was created, there were other style options. There were other specifications being written and competing to try to find their way in.

And do you know why CSS succeeded where the others failed? A big part of it was the cascade. [00:11:00] The bane of JS bros everywhere. The assumption, which is an interesting one, was that users would want to have their own style sheets. Who's should have the highest priority. And that's why we've got the cascade so that a user style sheet can work its way in and be what takes over.

It adds, it adds a sense of agency to the user, which I think is, is a really cool rationalization for it. And I really enjoy it. But over the years, the easy ways of having your own little style sheet for the web became harder and eventually were replaced and removed from the browsers. Now, imagine I could write a CSS file that hid this garbage and this garbage and all of this garbage.

Imagine I could hide all of that just for myself. And well, you know, come to think of it, all those things are how [00:12:00] Google makes money and who owns the biggest browser food for thought on that. So rant over. Luckily. We still can do some of this. We don't have to have a user style sheet, even though I'd still like to have one.

We have browser extensions, right? As a developer, I could go in and I could create a browser extension that hid specifically each of these pieces of garbage that I don't want to have in my Google experience. But as a dev, I'm also pretty lazy, if I'm being honest. And the great thing is someone else has made something.

That allows me to do this in a very, very nice way. And that's the user JavaScript and CSS Chrome extension. And I use this fairly regularly. It does what it says on the box, right? It allows you to write JavaScript and CSS for individual sites or for all sites, which is a pretty nifty thing. For instance, I can find in this.

[00:13:00] Awful mess of HTML, where those AI summaries are, and then grab a selector. In this case, I have to find a data attribute to be the selector, and I can go into my interface and just add a CSS rule around it that says display none. I come back, it tries to load it in and poof, it's gone. Not bad. I now no longer have to worry about, I still see it load in and I actually keep it there because I actually kind of want to see it.

It gives me a little sense of satisfaction on that. Um, and I won't lie, right? Getting this the first time was pretty rough. If you look at all of those styles that we had to deal with. This HTML soup, this divitis that's happening isn't, isn't great for it, but it works. And it works across multiple sites.

I mentioned before the crap content that we have to deal with on new sites. We can deal with that too. We can add a class and all of those sites, we never see it again. In this case, here are a few of the things I've got in this style sheet, right? You can see Outbrain and Taboola. Those are two providers of [00:14:00] those crap content ads at the bottom of every news site.

You put these two things in and you tell this, this plugin or this extension to get, to add this to every single website. And they're all gone, all gone. You, uh, you have the open web convo ad that's from a website, a couple of websites that I read. You've got ad container, which is a fairly common ad container class.

All these things start going away all without getting an ad blocker, all without getting, you know, these specific things, all because, you know, a little bit of CSS. A little bit of developer knowledge goes a long, long way, especially when we have tools like this. And again, I'm not going deep into it. All the CSS you could ever want, you could write into it.

And you can also write custom JavaScript into it as well for any given site or for all websites as well. So really cool. I highly recommend picking it up and then taking a little bit of control back for how you see websites. Cause I think that can go a long way towards our mental health. Honestly, in this day and age.

Yeah, but Mo I see, actually I shouldn't be paying attention to [00:15:00] chat, but I see in chat, right? I love chat. Uh, but mobile. Yeah, it doesn't work on mobile and my phone. I still have to deal with, with the slop that comes my way, but I'm on my computer more often than not. Maybe I shouldn't be on my phone.

That's another good reason to think about that. Anyway, small changes are great, right? But have you ever needed something more? I want to tell you three different stories and kind of ever growing complexity about things I've seen and things that I've done. You can make your own apps, you know, first is a personal story.

Here's an app that I played around with a few years ago. Primarily, this was a chance for me to learn some new technology, but I also wanted a place to store my own bookmarks. Right. Just for me, I started life as a demo I made for a hackathon where I wanted to use iOS shortcuts to build Netlify sites. I wanted to actually send that in, uh, and then I wanted to be able to send it a URL and automatically have it scrape some information and pass it into a database, and then I wanted a place to display it, and then I wanted a place to search through it, each of [00:16:00] these little pieces came individually, but arose from individual pieces of my personal needs and honestly, a bit of my own desire to play with code.

Are there bookmarking sites out there? Absolutely. But none of them, I really wanted to deal with or honestly pay for, or get marketing details and marketing emails from, I don't really want that. From a tech perspective, this site currently uses 11d as a stack site generator, it uses sanity as a headless CMS, and I used a fuse dot JS for the search functionality.

Now this app would never be something that I could sell. It's got. A whole bunch of drawbacks to it, but I personally don't mind them. It would never sell because honestly, who's going to craft their own iOS shortcut to be able to use it. And honestly, it's never going to sell it because I don't want to step off for it because off is hard.

And I'm lazy. It was built by me for me and for no one else, really. And speaking of. By me [00:17:00] for me on the story. Number two, this one isn't about me. Great. Although I'll start about me a little bit. I wish I had some interesting visuals for this, but unfortunately those have been lost to history. Um, and I want to start by saying I used to run a local meetup in Memphis called the Memphis web workers.

Uh, we did monthly front end and design meetups. We'd average, you know, 30 or so folks a month, uh, and about, I don't know, maybe a year in, we got a new, a new dev that started attending. And he came most months and that's not, that's not really weird or unusual. That's kind of the hope, right? After five or six months of him coming, we kept talking over and over about how meetups are a great place to get your speaking career going.

And I'd highly recommend if you're in chat and you're interested in, in being a speaker, your local meetups are a great place to do that. So this community member, uh, finally was up for doing a presentation. He'd been working in react and he wanted to give a talk about some of the cool stuff that he was working on.

I'm like, okay, cool. And keep in mind, this was like forever ago. So react was fairly new. [00:18:00] Uh, so fast forward to his presentation, he was showcasing, honestly, a relatively simple little form and showing like how, how react was being dynamic with it and how it was shaping data for him. And as it turns out, it was for auditory testing.

And again, as it turned out. This community member wasn't a full time developer, he was a, an audiologist and he'd made a quick app because the tools that he had to do his job and to do the quick things he needed to do while doing this testing were so bad that he needed a way to do things quicker. Now, Don't worry, this data never touched the server.

The app was not having to deal with HIPAA. No HIPAAs were, uh, were injured in the making of this app. But the cool thing about this was a non developer who had developer tools and skills was able to be happier in his job. By playing with code to get there. And he hadn't [00:19:00] originally started playing with code just to work at his job.

He was playing with code because he was interested in it and it gave him the tools to do something better in his day to day life, pretty cool, I think. Story three. It's about me and my father. My father is a big fan of tasting beers. Uh, he's been using an app called untapped for a long, long, long time. Uh, I, on the other hand, uh, don't quantify my life in quite the same way.

So I have one beer in untapped and most of that was for my testing. Um, anyway, untapped was built many years ago so that people could check in the beers that they were registering, give them ratings, keep track of them. Uh, but it's old and it. It shows a little bit, it's slow. It's still primarily runs on jQuery for the front end, which, Hey, I love jQuery, but it's not exactly what you'd use nowadays.

And honestly, at this point, it's also relatively user averse. Uh, they spent most of their development time instead of working on the [00:20:00] actual user aspect of it, building things for bars so that bars will have people buy more drinks, right? And certification in, in progress there. So for Christmas each year, my wife and I.

Uh, live in Michigan. We would bring him beers from local breweries up here so he could taste them. And when he was out and about, he would like to taste new and interesting beers. And he needed a way to find it. Right. And the search functionality in untapped was awful. It was slow. It didn't really find things very well.

And so my father being the tech savvy person that he is, but not necessarily the developer, he did what he could. He made a Google spreadsheet. Right. And so he put all of his beers in there. He put information in there and then it was manually updating in both. He checked into untapped and then come and add it over into Google slides.

And I looked at that and I thought, wow, what a, what a waste of time. Can I do better for him? So two years ago, I decided to. Try to put something together for them. Something interesting for a little Christmas present. And I remembered there used to be an API. [00:21:00] So I jumped online, ready to go. I had a new Astro project, I think, ready to go and ingest the data.

I was like super gung ho about it. And I got to their API docs. I read to make sure I could get the information I needed. And then I went. I couldn't get an API key. I see Ray, Ray Camden in chat is already talking about. Yeah. Due to bad actors, the API had been shut down. Now I'm not sure what those bad actors were doing that a nice little rate limit couldn't solve.

Uh, but you know. Okay. It was worth a shot. I guess I'm not going to be able to get this done. I'm going to move on with my life. Not a big deal. My dad can write in Google sheets, fast forward a year to the next Christmas. And as usual, I started thinking about it again. I started wanting to play with it again.

And I say, Hey, if he's already in Google sheets, maybe I'll move him to air table. I've been playing with air table, uh, orbit where I was working at the time. I said, I can set up an air table. I spent a couple of evenings getting his beers in there and then starting to play with the front end. And then I really thought, Hey, this isn't.

This isn't the full thing, right? This is, he's still going to be doing the data entry twice. For the work that we're gonna [00:22:00] have to put into this, this isn't worth it. No, let's just can it fast forward another year. And I'm like, I I'm a developer, right? I can do this. I'm powerful. I know this can be done.

It's time for me to get it. And I did, I got it done and no one will ever, ever, ever want this code for. Any reason ever, I don't know that I've written such like spaghetti strings of code since I was a junior dev, since I was really a designer learning how to be a developer, but writing a code base that was never intended for mass consumption was actually like.

Super freeing. And here's the thing it worked, right? It worked in a way that my dad and I are actually still iterating on a couple of months later. I'm incorporating new features and requests from him. I'm fixing my broken scraper way more than I'd like to. Because again, the front end is pretty rough, but we got breweries.

We've got sortable tables. We've got ratings. We've got average ratings. We've got States that he's visited. We've got all sorts of cool [00:23:00] functionality in it. Uh, and. I was able to do it because I'm a developer, right? Here's a real quick look behind the scenes. Uh, the site's built in Astro. In fact, it's using some, some new modern stuff in Astro.

Like I've got a little thing in there for Astro actions because I'm learning that as I go. And then there's a folder of really, really, really, really bad code called my scraper worker. And it's got all of the little scripts that I wrote through the process. In fact, some of what I had to do because of.

Way that Puppeteer worked and some of the ways that untapped worked is I actually wrote some of this and put it into a, into a Chrome dev tools, uh, console and ran it in there to grab Jason from there. So I've had to do all of this work and I've honestly learned a ton through the process. I like, I learned Netlify, uh, functions don't, uh, don't allow for Puppeteer.

So then I moved it from Puppeteer for my scraping to just a fetch request. And then I use Cheerio JS, which is basically jQuery for a string of HTML. To grab it. They're writing it in jQuery. I'm scraping it in [00:24:00] Cheerio. Mash made in heaven. I've got all this data. I've had a lot of fun with it. We've played around with it.

I'm showing my dad new things about how he consumes his beer. And also just because. I guess I can make a guessing game out of the data. Now that I've got it, once I have all this data, then I can do more things that are more interesting. So here I can kind of guess between what beer I think my dad will like.

I'm able to kind of show him his tastes as well. Like oftentimes when we're talking about things, he'll say that he likes an IPA, but all of his ratings show that the lower the IBU, the lower the bitterness unit, the more likely he has to like it. So that's on him. Now I've mentioned a few times here, I made a game.

I said the word play quite a few times. And that's because development can also do some other things for us and they can make us powerful because code can also be play. And this is a big thing that I'm thinking about and working towards right now. [00:25:00] And code is. Play, it's a weird thing to say at a developer conference, but play helps us more than maybe as adults.

We know the act of creation for no other purpose than to see if we can is really a form of art and a form of play. And since I haven't given any philosophical references in this presentation, and if you know me, you know, it's been a struggle for me not to do it so far. Let's have a little. A little philosophy here.

I'll suggest this book for anyone that's interested in the power of play. It's called Play by Stuart Brown. There's a lot of really interesting information in this about how play is actually biologically wired into our brains and the brains of many mammals and how play can Actually create a state where something called neurogenesis is possible.

Even in adults, neurogenesis, meaning the creation of new neurons and new connections between neurons in our brains all via play. So by coding for no reason other [00:26:00] than you can, you can activate portions of your brain that will make you smarter and more resilient and honestly happier. Now, I want to say this to kind of sum things up and wrap things up here.

You are powerful. You have knowledge that the average person doesn't have simply by the fact that you can open dev tools. You can do things that will appear to be magic to a non developer working with clients. I'd open up dev tools to do like a tweak to the styles and to get their quick approval on something.

And I turned back to them and they'd have their eyes wide. And sometimes they'd even say something like, can, can anyone just open the code and. And change my site, they will always be like worried about it, right? I'm like, no, no, this is just this here, right? I'm just showing you it's just I'm tweaking it.

Don't worry. So yeah, we as developers can get around The crappy parts of the modern web or simply the parts that we don't like, right? Like me with the AI summaries, right? We [00:27:00] can do all this because we know about these things. We know about how they're built and what we can do to get around them. You can also use these skills to help those around you, right?

I've, I've debugged login issues by opening the console or opening the network panel. And obviously I've made apps for my friends and for my family. And I taught my dad a little bit more about his taste in beers. Um, So we can do these things. We can share them. We can give them to the people around us.

And honestly, there's, there's great opportunities, even in like nonprofit world. There's an event happening in Memphis. I'm not down there anymore this weekend called give camp, which is where developers and designers and marketers come together and give their time over and hackathon nonprofits. So there's a lot of things that we can do for ourselves, for others around us.

And I mean, with that. If you want to be powerful now, I want you to think about how much more powerful you can be. If you don't always think about monetizing your skills and just think about using them to grow your own tool set and to [00:28:00] honestly grow your mind. Believe me to do that play is the best way and play as a developer is really to exercise your power, not for money, but for satisfaction and for curiosity.

And with that, we'll bring Brian back up. We'll take some Q and A, which is my favorite type of play. I love Q and A, so be sure to send some questions in.

**Brian Rinaldi:** Yeah, everybody, you still got time. We've got plenty of time here with Brian. Just put your questions into the chat or in the Q and A module, preferably. So that was such a good talk, Bryan. I do still want to know how I can make a million dollars. Can you go back to that slide and just start talking about that?

**Bryan Robinson:** If I knew, I probably wouldn't be here, Brian. I'd probably just be, you know, getting dividends at this point.

**Brian Rinaldi:** All right, I probably can find that on YouTube. You're right. Um, so, uh, I, I think there's, there's two halves to your presentation here. One is, it's kind of a sad story of the current state of the web, right?

I mean, like, this is one I, [00:29:00] you know, I, I felt I've been very focused on lately. I mean, I mentioned in the chat a guy named Ed Zitron, who I listen to a lot about, like, you know, specifically on AI related stuff, but he has this, the term rot economy that like, he talks about, um, tech in general, just how we've made all these products really, really bad.

And, you know, if you, like, if you got into, let's imagine Google started today with the product that they're delivering you, would that have really convinced you to use it? Um, probably not. Right? Like, uh, and same with, like, he talks a lot about Facebook, which I'm no longer, I haven't been on since 2016. Um, so, like, you know, it's, I think they've, they do get you kind of, like you said, trapped and then, and then make the product really, really bad.

Um, And, but you just don't seem to have an alternative. Right. So,

**Bryan Robinson:** and we've been saying for a long time, since, since [00:30:00] well before some of these bigger things, right? Like the whole concept of, if you aren't, um, spending money, then you're the product, right? If you can't buy the product, then you are the product.

Like that's kind of been a phrase that's been around since like the early two thousands, like. We're in that we're in that zone.

**Brian Rinaldi:** Yeah, we are. I mean, you know, there's signs though to me like maybe we're headed in a better direction because like Honestly partly, you know, I'm not speaking for the world.

Obviously, I if you weren't here for my intro Yes, I think the world is falling apart right now And in tech is is probably you know, it's not it's leading the charge in there, unfortunately but Um, I think for, like, for the future of the web, there are some, some positive signs, even in that, um, you see a lot more individuals, like, like, you know, create taking instead of.

Being part of some conglomerate of news that's not [00:31:00] doing well, going off and creating their own newsletters, and, and, you know, it's, it is creating a bit of a problem, like, in terms of how do you manage all these subscriptions and choose where you give your money, et cetera, but, but I'd rather that than the alternative of, like, I have to give my money to this company that I really don't want, but, but just because I, I need access to this thing.

You know, yeah, I know it's not really a question there. I'm just like throwing stuff at you. Uh, okay. So Savannah did have a question. Um, great talk. Love thinking of code as play. Do you have any tips for getting into the mindset of play?

**Bryan Robinson:** Yes, I actually like fantastic question. Super glad you asked that question.

I, and I can't recommend it enough. So like, here's, here's the book. It's right next to me, right? Like play by, uh, by Stuart Brown, really great book. The Ted talk that's there was on that slide too, like really great Ted talk. But the big thing I almost like want to open the book and like turn to the page, um, is that [00:32:00] play is a, is a unique situation and part of like, one of the big parts of it is that it is what he says is seemingly.

So you have to allow yourself to not worry. And that's, that's a big ask. Right. Uh, but I think that there's a lot of things, right? I also long, long ago read a book called games, game storming, which was like bringing games into business, really great book. Uh, but I think if you look at it and think of what you're doing with your code as exploration.

Um, and as, as just pure creation, uh, the, I mean, the big part, right. Is, and this is, this is like my, my little capitalist screed here. Right. But like, if you look at it and you say, I don't have to make money off of this. The minute you do that, you're removing a piece of it and making money off of it could just be, I don't need to justify this to my, my day to [00:33:00] day job, uh, which I do firmly believe that all companies should be giving you time built in to play in code.

Um, that's a whole like 80, 20 thing. Like that was a whole big deal for a long time. Um, I do strongly believe that. And when you do that, you have to remember nothing may come of this. And that's okay. It's really about releasing the pent up tension of productivity. Productivity is partially diametric odds with the idea of play.

So it could be as simple as, and like, again, in this book, he talks about a lot of different types of play. Play isn't playing a board game necessarily. It can be, it's not going and playing a sport. It can be, he even says like reading a book that you enjoy or watching a TV show that you enjoy, or like these little things that you're doing to, to tell a story or hear a story, reading a good book.

Um, you know, sometimes [00:34:00] when people have writer's block in writing fiction, and even when I have writer's block when I'm writing for, uh, for, you know, technology, just free writing, right? Just like putting a blank piece of paper down and just letting your mind vomit out whatever it wants to vomit out. And that's a huge thing, even in code, right?

Like I showed you that, that folder of the scraper work, there's some code vomit in there and it's terrible. And it. Kind of works. Um, but it was just me exploring. It was me poking me console, logging me, debuggering throughout the code and just saying, what if I did this? Um, and I think that's what if, what if is probably the most powerful thing to get you into a play mindset.

It's both imaginative. It's, it's, but it's also like explorative. And I think that's a big thing. I don't know. I'm allowing yourself the time in your daily schedule, in your hourly schedule, whatever it can be your weekly schedule. It's important. Uh, in fact, in the book, he even talks about there have been, uh, neurological [00:35:00] studies around, um, since play is so hardwired into our brains, we experience play deprivation, just like we experience sleep deprivation.

And just like sleep deprivation, if you've experienced it long enough, You have to recoup it and you need more than average to get over that deprivation. So a lot of interesting things, a lot of good, a lot of bad, but like allowing yourself to say what if, and then exploring is one of the best ways, especially in code to get over it.

**Brian Rinaldi:** You know, and I going back to your in shitification of the web thing, you know, you can kind of lately I've, I've kind of taken like, okay, well, I need to back off of some of these sites. I deleted accounts on a number of other additional sites. I started kind of pulling back from, from being overly obsessed with, like, reading news, et cetera.

And I think that that has also, you know, um. Freed up time to do [00:36:00] some of these kinds of things. And I think, you know, I get, I'd say I get less time to necessarily play in code. Although part of my job is sometimes experimenting, which is fun. And I coming up with, so maybe it's that I don't need as much of that, but like, you can also create some of that time as well.

I do agree. Employers should give it to you. They, most of them, right. Especially right now are probably not going to do that. Um,

**Bryan Robinson:** and I do want to be very, very clear real fast. Like I'm one of the like work life balance, like if you don't enjoy the act of creation via code and you're doing it for a paycheck, mad respect, don't do it as a hobby, right?

Like if you don't enjoy, uh, I've also been watching, uh, Brian Sanderson's doing, uh, videos about how to write, uh, fantasy fiction and sci fi fiction and he says, and this goes for like any job, right? To enjoy The job that you have, you need to enjoy the process of the job, because even when you're having a terrible day, if you enjoy the process, you'll get over that, [00:37:00] right?

So if you don't enjoy the process of writing code, you can write code and you can make money doing that. Fine. Don't. Off hours doing it, but if you enjoy the, the exploration and the power it gives you, then you can treat it as a sense of play. As long as you don't like immediately try to monetize. Right.

Then it becomes a job. He also has things about like, Oh

**Brian Rinaldi:** yeah.

**Bryan Robinson:** Anyway.

**Brian Rinaldi:** Go ahead. Go ahead.

**Bryan Robinson:** I was gonna say, he has things in the book about how actually the, the opposite of, of play is not work. Right. Because you can play at work. And in fact, businesses should allow for it because it actually makes them more profitable because innovation is all around play.

Innovation is all around using the parts of our brain that we can access via play to make the next big thing.

**Brian Rinaldi:** All right. So I, I think you kind of already answered this, but I'm going to, I'm going to go ahead and ask you cause it was, um, Henri asks, is a startup considered monetizing your skillset? [00:38:00] Is that a bad thing?

**Bryan Robinson:** It is not a bad thing. Um, but it's also Again, to have like two different conversations, right? Like, and I'm super into the idea of playing games and stuff right now. So, um, that's where my mind is a lot, but it is neither play, nor is it this power that I'm talking about. It is its own power and we are powerful as developers to craft a new business for ourselves.

Uh, and so that's perfectly fine. Like I, I see plenty of indie devs out there that are making small products that are making really good things that they're able to make. Small money that then accrues. Right. And that's super cool. And I'm, I'm not going to say you shouldn't do that, but it's like, that's not play, right?

Maybe, maybe you play and you find something that you really want to like go forth and make a business out of. And that's cool, but. The act of play is also, it's kind of like the old conceptions of like science, right? Like we didn't always find the powerful things that we have from a scientific perspective in [00:39:00] the pursuit of that specific thing, right?

We were in the pursuit of all these other things and exploring our world and thinking through all the, all the process of our world. And we discovered these things. So oftentimes, honestly, this. This presentation today stems from the fact that I built that untapped thing for my dad that that gave me the inspiration and I like I'm writing about it.

I'm doing presentations about it. It's a big deal for me right now. So I discovered that via.

**Brian Rinaldi:** Yeah, I think there's something I'm reading that talks about, like, the context, how your mind tends to work based on, like, the context that you're in. And so, like, doing things like that changes the context and then opens up new ideas, basically.

Essentially is a kind of a quick way of putting it.

**Bryan Robinson:** Yeah, and again, like it's all like there's, there's neurology behind it, right? They've done neuroscience studies on the way the brain functions during [00:40:00] play activities. And the new connections get formed, right? It's not just new idea connections. It's literally new connections in your brain.

So again, you become more powerful and strike me down. And I'll become more powerful than you could ever imagine, right?

**Brian Rinaldi:** All right. You know, we, we got to always got to bring the Star Wars quotes to any, any conference, any developer conference. So, uh, Rachel asks one last question. We only got a couple of minutes here, but how do you convince your non developer friends that they are, they are too are powerful, sorry, that they too are powerful and can learn some of these basic skills.

So many smart people I know say I could never code like it's some innate power you're born with.

**Bryan Robinson:** Brilliant question. Absolutely. 10 would recommend this question. So. It's not always going to work, right? Like some people will say that and they'll be right. And that might be a self fulfilling prophecy, but that's kind of what we have to deal with when we deal with humanity, [00:41:00] right?

But the thing about it is to show them, it's teaching development is teaching development, whether it's to somebody. Who's, you know, 60 and has barely touched computers or somebody who, who has only grown up on, on tablets and phones. Right. It's what can I show them that gives them the feeling of power and the feeling of creation as quickly as possible.

So like things like CodePen are huge things like opening up dev tools and saying like here, I mean, not on a complex site, like Google's terrible. Don't do that, but like showing and giving them that little taste of the power and then saying we can grow from here. So I actually. Uh, got to teach a few different years, uh, journalism students, I taught HTML and CSS and these were kids, right?

Even, even like the six years ago that it was, they were kids to me at that point too. And most of them didn't even know how to navigate their file structure on their computers. So like, it was a challenge. But again, like we started in CodePen, which wasn't part of the curriculum. I changed the curriculum to [00:42:00] have that.

And we just started with like, I want you to write a paragraph. Here's how you do it. And look, it immediately appears here. We would move into CSS just a little bit. Be like, you style it here and it changes over there. Uh, and just kind of like build on that is the idea of an education of progressive disclosure and kind of growing this kind of, this kind of base.

Uh, but also I said a long time ago that I'd never be able to learn JavaScript. It was an ugly language. I was perfectly content with HTML now I still like HTML and CSS more, but like I write JavaScript every day and that's my main programming language. Uh, so we say I can't a lot and it's important to say, well, no, you can't right now.

Yeah. You haven't learned. I tell my nine year old this all the time, you're not going to be good immediately, like lower your taste level. Um, but give those little, those little bits, right? Like, look, you can do this. I promise you can do this or show them how to pro my dad uses Google sheets, do some formulas, right?

You can be powerful. That's programming. That's perfectly fine. [00:43:00]

**Brian Rinaldi:** Yeah. And I think you brought up something like with the code pen example, but I think it's one of those things that you can, you can. Make make it really accessible powerful, because you can build the web on the web, right? Like, you can use the web to build the web.

Like, I can get in there and start coding in the console. I can start things like that. Like, there's, it's just. makes it really accessible to learn. Um, okay. So we are unfortunately out of time. Um, I think we could go on and we dig into deeper philosophical topics like why or why, um, but we will leave that for another time.

Bryan, this was so great. Um, you had so many great comments in the chat, like people just really, really felt, uh, empowered by your talk. So yes. Yeah. Good job.
