---
_build:
  list: false
  render: never
---

**Sean C. Davis:** [00:00:00] Welcome to Code Sandwich Hour, where we take a meaty conversation with well known developers, sprinkling a little cheese and a few puns, and slept that between two metaphorical pieces of bread. This week's special guest is Raymond Camden of Adobe.

Hey everybody. Welcome to our very first code sandwich hour. I'm your host, Sean C. Davis and I. Super excited to be here. Thank you so much for coming out to support this show, to see to see what this is all about. This is gonna be a really fun journey, and I'm really excited that you are you're here along with me for it.

And you know what let's jump right in and let's declare it sandwich time. I'm going to bring on screen our very first special guest Raymond Camden. He's a senior developer evangelist over at Adobe. Thanks for being here.

**Raymond Camden:** Thank you for having me, Sean and I definitely am special.

Everyone tells me so[00:01:00]

**Sean C. Davis:** Yes, we I can see that for sure. I try to claim the same, but not as successfully I feel like I, Ray, I wanna give you a proper introduction. I also feel like we owe. Code sandwich hour, a proper introduction as well to explain the format, this is gonna be a little fun, a little weird.

So why don't we just start totally out of context and talk sandwiches first and and then we'll get back into it. So with that, Ray I'm curious. What is your, what's your perfect sandwich? What is the best sandwich in the world?

**Raymond Camden:** there's a couple of ways to answer that. I think, you said what is a perfect sandwich?

And to me, I really dislike ones that are messy and sloppy. I don't like getting gross when I eat that's so I like I love ribs, but I rarely eat 'em especially out because you just get disgusting when you read it. But my favorite one there's a little independent restaurant down here called social and they have a tuna fish sandwich and tuna fish.

Always sounded very bland and [00:02:00] boring to me. My wife and I go often and I thought, let me try something new. And I tried it and it was amazing. I was like, I'm gonna write bread. It's got a good sauce on it. It is just an incredible una sandwich and that's like my favorite perfect sandwich, et cetera.

**Sean C. Davis:** And we were talking about this earlier and you said that you can't, but you can't always, you can't always get it.

**Raymond Camden:** Yeah. Yeah. yeah. Supply issues everywhere is doing weird stuff. And luckily, that's the kind of thing where it's oh, I can't get my tuna sandwich. I am very privileged.

like that. The other issue is like not being able to get a PS five. Like I trust me, I recognize that's the worst thing that COVID has done to me that I am incredibly. yes. Fair

**Sean C. Davis:** fair. And also, but there's like something about this thing is so good because I can't always just walk down the street and get it.

**Raymond Camden:** Yes. It makes it nicer when it's available.

**Sean C. Davis:** Yes, definitely. [00:03:00] All right. Thanks for that. Okay. So I suppose we should back up and set the stage here. And all of you, this is code sandwich hour and where the name came from. We I went through a few iterations of live talk show formats, and we needed a theme and I like code and I like sandwiches.

And I feel like that's gonna be the context of most of these conversations that we have. We're, we'll run this. A as a CFE event on the first and third Thursdays of every month, usually at usually at this time, which is 1:00 PM Eastern in the states. And the format is going to be. This show is gonna be broken down into three different segments and they're all, they all have terrible pun names.

I guess there's another theme. It's not just code and sandwiches. It's also naming is really hard. , we might see these things change over time. But with that, let's let's get back into it and and like talk, talk some code. The first segment here is called. [00:04:00] The farm, the, my, my cheesy name for this is coming from the fact that when you're putting a sandwich together, I think depending on what kind of sandwich it is that a lot of those ingredients have to come from somewhere.

And so when we're as developers in our current stage, it's, I think easy to lose sight of where we came from and everything that had to happen to get us to where we are today. And. So Ray, I'm curious, like how did you, how'd you get your start in web development?

**Raymond Camden:** Sure. So my initial introduction to computers was when my mother's employer sent her home with an apple two E or an apple two plus.

With the intent that, to get her more familiar with personal computers. And this was long time ago when having a personal computer was a big deal. And, but for some reason they sent her home with also like a bunch of games. They knew she had a son, so maybe those were me. But I glammed onto that.

And after playing games on them for a while kind, going through all the games[00:05:00] I had started to look at programming for it around that same time people who know me know I'm a big star wars fan, if you can't tell by the toys behind me. But there was another movie that was kinda like a really big influence on me that came out when I was very young.

And that was. And if you've never seen trying a C it cause it's a masterpiece of early CGI. But the basic premise is that inside your computer, all the programs you write they're alive and they have personalities and they have, their own lives and stuff. And, I definitely wasn't young enough or naive enough to believe, oh, that's what really happens, but it absolutely sparked something in me and got me into it.

I did a lot of coding on my own on that apple to. And thought for sure I'm gonna get a career in computer science. I also saw war games and, I, for a while I thought that work in the movies and do CGI or work in security, and do that. So I entered college in a comp site program.

and discovered that[00:06:00] a, some of the computer science was really boring. If you sort this way, it's 2.1 times better than sorting this way. Whatever. And I also discovered that being good at math means buck at a certain point. That for me, it was calc three. And I hit a brick. So I decided to switch my major to English.

I enjoyed literature. I was gonna be a technical writer. And at about that time in CSA, mosaic came out, the web started and I started up playing around with building basic HTML pages. And this to me like really clicked. I was doing computer type stuff, but I was building something new and something.

So that's pretty much how it started.

**Sean C. Davis:** Ah, that, and that's really interesting. So you're, did you, and then did you graduate with the degree in. Yes. Yeah. Yeah. And so you you kinda took these pieces and now it works with all of the, like you, you're [00:07:00] doing a ton of writing still today, right?

**Raymond Camden:** Oh, AB absolutely. I've been blogging since about 2003. I've done 20 plus books. And not the like brag per se. Like a lot of those are like in a book not a whole book. It I found out early on that while I love to code. I love to talk about code more and share stuff that I've found in code a lot.

So that's part of the experience of, Like getting other people excited. Like I remember my first program. I remember the first bug I had. I remember how I felt when I got it working. And it's what I imagine, like hardcore drugs feel like the first time , but it worked, it got me addicted.

I enjoy giving that addiction to other people as well and helping them get things done.

**Sean C. Davis:** So did you were you writing code for a while before you got into the writing about writing code?

**Raymond Camden:** If I was coding at eight or nine years old. [00:08:00] I entered the professional world in 95. That's very early web.

Okay. Before college. So five or so years later I was doing my own blog before that I did a little bit of writing. I did some presentations and stuff like that.

**Sean C. Davis:** Yeah. Okay. So what what do you remember what the first like the first platform that you would've written on?

Would've.

**Raymond Camden:** my own. So I was using a platform called cold fusion. It was an application server cold fusion had a very passionate and very small community. It wasn't open source and it wasn't free. So it had two strikes against it, but it had something that nothing else did and that wasn't a.

Ease of use. It was really simple. It was very practical. A lot of other Lang people in different languages were poo P on ColdFusion because it did things in a simple way, but that made it really approachable. I spent a long time in the coal community and it was amazing.[00:09:00]

How many non-computer science people gravitated towards it because it was so much more approachable. I, I remember I had a lunch with somebody who had launched a big cold fusion site and they were a medical doctor and he was just raving to me about how happy he was, that cold fusion. Let him build this website.

Like it, it enabled his creativity, it enabled his business idea and all. And it was approachable now. Certainly ColdFusion, doesn't have the monopoly on that anymore. Other languages have done things that make it more approachable. Groovy, for example I remember when I was first looking at groovy, like six, seven years ago and they said, yeah, in Java, it's verbose to read a.

And people read files a lot. So we made it easy. Cause that's practical and I'm sitting there thinking, yeah. Cool fusion did that 10 years before that.

**Sean C. Davis:** right. Oh, that's what, when you said that's yeah, like a platform for billing website. I'm like, yeah. We're we're still trying to figure that out 25 [00:10:00] years later.

Yes. So yeah. Okay. I've heard a lot about cold fusion, but I never really. With it. So was it was it like its own language or just a platform? What like what language were you writing?

**Raymond Camden:** You could think of co fusion, like PHP, same concept. So you, along with Apache and you would have your own extension.

Dot PHP dot CFM, and you write code in there, co vision server process that spits out HTL return to the web server and sent out exact same concept as pH.

**Sean C. Davis:** Gotcha. And so this time is it's, this is pre web based CMS, correct? I would say early

**Raymond Camden:** early. Okay. When I started with it, talking to a database was a big deal and that was another one of cold Fusion's big selling points.

In fact, before that I've been using Pearl to write CGI scripts, form processing, stuff like that. We had a client who specifically needed to talk to SQL server. And I knew I could do that in Pearl, [00:11:00] but I wasn't looking forward to doing that. and I think, I can't say I Googled I Alta Vista or whatever.

It's a long time ago. And I discovered cold fusion and I remember I had something up and running within an hour which I thought was pretty impressive.

**Sean C. Davis:** Okay. That's yeah. That's amazing. So what. Can you talk a little bit about the I, I suppose how long did you have that blog around and what did you move to next?

What platform?

**Raymond Camden:** Yes, I forgot you originally asked me like, like what my blog platform was. So yeah, I wrote my own blog and. Cool fusion. And I'll use this to get on a soapbox to say one of the things one of the pieces of advice I'd to share when you're learning a new language is to build something that already exists.

We have this rule about not repeating yourself and that's true in production. But when you're learning, building something that already exists, lets you skip like the whole planning or the whole, what should I build? . Yeah, so for example, when I learned no JS, I definitely knew that there were [00:12:00] blogs out there already.

I built a simple blog in no JS so that I didn't have to think about what to build. I just, I knew, how blog worked and all that. And it gave me practice working with the new JS platform. But you asked me, what I switched to. Originally it was cold fusion for probably.

1213 years for a brand. Oh, okay. Okay. And I my blog where I gave it away is open source and had a really large community of people using it. So it went through a lot of iterations and features and stuff like that. And after 10 plus years, I just felt like it was time for something new. So I switched the WordPress.

because I had heard good things about it. And what I discovered is that WordPress has an amazing experience for a publisher, for a writer. It's it's perfect. I loved writing content for it. But it crashed like immediately. And I was shocked how fast it crashed. And I put that [00:13:00] blame on me, but it was a constant struggle to keep WordPress up and running. I was surprised like how much I had to tune outta the box to get things working. And again, I'll put most of the blame on me. I just quickly set things up cuz I had to set these expectations that were worth. So I did that.

I got it. Mostly stable, but I wasn't happy. It was at that time, that static site generators were getting some buzz. And I began to look at that and it was really appealing to me because coming from an app server background it was like, oh, I have an app server locally, but a production's just files.

Like nothing can break web can go down, but somebody else fixes that. So I switched to a side generator called hug. And I stayed with that for some X amount of time. Had some issues with how it worked. It was very fast, but it was hard to do customized stuff with it. Yeah. I kept heading into things[00:14:00] switched to J and I really liked J I hated installing it.

So I would install it, go through hell and then be happy for a long time. But then I'd give you a laptop or something like, oh crap, I gotta go through this again. so I did that a couple times and at some point 11 came out and the insulation was no JS space, so there was no issue there and it had the flexibility.

So it hit all the right bells for me. Currently on 11 running on Netlify. Okay.

**Sean C. Davis:** That's it? Yeah. I love that transition and I feel like I have some parallels in there as well. I've only been blogging for about 10 years or so. And I started with Actually I started writing a blog about just other odds and ends using WordPress.

And through that also got interested in web development. And I totally hear what you're saying with the yeah, it's probably on me cuz the way I felt with WordPress at least eight to 10 [00:15:00] years ago is that's like they give me. All of this power, like right at my fingertips, I can do so many things.

I've got the loop and I can loop through all of the content on my site, which also means I can almost immediately introduce an N plus one problem. And I've I've just slowed everything down. And then I spend a handful of years with. With Ruby and I did some juggle, but also lots of Ruby on rails apps.

And what I, what really resonated with me was the setup, the installation, all that stuff, like getting servers to work Oreo, the new machine. I actually, at one point had I had a repo in GitHub that I would use was just a script that would go install everything on my machine, because it would took, it took so long to do that.

It's like Ruby, Ruby is rough. But also now also running on 11, I'm starting to, I'm just starting to like, feel the I'm flexing 11 too much. So may maybe moving on. But but yeah, FA [00:16:00] fascinating. Okay. Yeah, no, I that's. I think that's really interesting and you like you, you brought us up to today and so let's talk a little bit about today and jump into our second segment here.

And I, in the theme of naming as hard, terrible names, I'm calling the second segment here, the deli, and why the deli? Because when, if okay. Let's like let's really beat. The sandwich metaphor into the ground. If I'm, if I consider a website to, to be a sandwich, then there are all of these different ingredients that can come together to make the thing what it is.

And I think that's really. It feels even more applicable today with there's always a new tool. There's a new option. It seems like every day. And as we progress and developer experience improves and all of these tooling tools that are available to us improve, it also becomes more and more overwhelming to get [00:17:00] started.

And to figure out like how. What tools should we use? And when I was looking at I looked through your blog a little bit and I was first yeah, astonished. It just like the depth, the breadth and like quality of everything that you've got on there.

And I, I went there thinking oh, I'm gonna be able to pick a topic and we can focus on that. But I feel like your your interests are very wide. You're like talking about all sorts of things. And so I'll just. I'll let you lead in, in my, I'll start with an open-ended question, which is what has you most excited in the wide world of WebDev today?

**Raymond Camden:** I think you have a nice way of saying I have a short attention span. That's fair. Like you could look at my history and I will write a hundred blog posts about a. and they're like, I'm done. I'm like, all right. And move on. I will dig something into the ground as I explore. And it's not like I stopped liking whatever it was, but I have nothing more to say about it [00:18:00] anymore.

Great example of that is that's a really awesome platform, mobile framework. I never stopped liking it, but I feel like I, I dug into it enough. I was ready to talk about something else. What has me the most excited? Yeah. Things are more complex now. But coming from like day one working on the web and how limited things were HTML was barely there.

There were no standards really. CSS was barely there. JavaScript was barely there. We have a much, much more richer, much more broader, much more powerful platform now. So I, what gets me excited now? Or what makes me happy is just a state of the platform in general. Mostly you look across the browsers and they are advancing very quickly.

They're I feel like kind of everything is being worked on and enhanced [00:19:00] especially CSS, especially JavaScript and this vanilla HTML as well. Biggest issue we had there really was iOS holding a lot of people back. And with them having such a significant hold on the mobile on, on the mobile platform.

That's been like the only real issue, but even if I could say, Chrome and edge are up here and mobile iOS or safari is down here, like this is still light years beyond from where we started. And at least in the last couple months I've seen the safari people. Making some goodish type noise.

That's a whole other different topic. But so just, in general we have a much better, much broader, much stronger platform. Yes. There's 90 tools out there. But knowing, or, learning hopefully early on that, you're not supposed to know all of them. Once you get that, I think it becomes a lot easier.

If I need to do something. Whether I know there's gonna be a hundred [00:20:00] APIs out there, I don't keep that in my brain. I just know when the time comes, most likely there'll be support for that. I Google I find the right library, APIs, hash, whatever, same thing on the web. I really like how far CSS has come, but I definitely don't have a great skill.

But I know that, I need to create this kind of layout. I'm gonna go to MDN. I'm gonna search there. I'm gonna find it. And I know it's gonna work. It's very rare now where I think I can't do something on the web. And that's that's a great thing that's a great situation to have.

So when

**Sean C. Davis:** you're, so you talked a little bit about yeah. Like finding the right fi finding a solution. So if you're looking for a. A particular tool or you've got a, you have a problem to solve. You want to see if there's a tool that can help you solve that problem. How do you how do you narrow in on the one that's right for you?

Yeah,

**Raymond Camden:** that's I feel like another kind of huge topic. So one of the interesting things [00:21:00] about when I moved from cold fusion development to more, no JS development, cold fusion tends to shift everything at. So for example, has built in RSS parsing and no JS. You're expected to find that, which, and guess what they definitely have it.

But it's overwhelming. If you like search NPM, you'll find like 30 of them. You have to have some skill in going through those options, figuring out what makes sense. A lot of times I'll look at just the usage, like how many downloads. I'm I will also look at how often things are updated.

But you have to have context there as well. Like I know that the RSS spec hasn't changed for a long time. So if I see like a five year old package that handles R RSS, I have to know that's actually probably okay. Cuz nothing has happened with in five years versus if it's some other technology, I should expect something.

So it's looking at usage, looking at how alternates updated on a GitHub [00:22:00] repo. I'll look at it issues. And if I see 5,000 open and like too closed, then that's something that's probably been abandoned. And I know it's probably a little bit dangerous to use. I tend to I take sometimes a contrarian view at open source in terms of, If you are building something that you want me to use like if your intent is for me to use your product or your open source project I will call you out.

If I feel like you're not taking care of it. If you're not documenting, if you're not responding to issues like and I've got people in band to pass it for it's open source, you should just fix it. I'm like no, like I'm still gonna. And if your intent is to get me to use something, then you need to do a little bit of work as well.

But again, that's another topic, sorry.

**Sean C. Davis:** no, this is great. Yeah, I was actually, I was thinking about the open source issue recently, cuz there was oh, there was a library I used a lot called called faker and that that re basically it's a great way to mock data and. The creator one time [00:23:00] base, released a new version, deleted everything.

And all of a sudden it's okay, all, any of my applications that are gonna bring this up to date now they're all broken. I need to go find find a replacement. And so there's there. Yeah. It's like open source. It's a really tricky topic because it needs. It's part of the great thing is that it's open it's community based and you can do anything, but also to succeed.

I, yeah. Yeah. I don't know. There's finding some accountability in there. I don't have the answer. I don't know if you do

**Raymond Camden:** it, again if your response to my asking, Hey, why is this not support? To say, oh, just do it yourself. That's not very helpful. At the same time though, people put a lot of time and energy and passion into things and you've gotta try not to tear them down.

I know I've gotten angry on Twitter before. I'm sure I'm the only person. And then I regret it later. I'm like next time, shut up. Also I think it's, I think it's really sad [00:24:00] that there are companies that could take their freaking coffee credit. And dump it into some of these open source projects and you'll make their day.

And it'd be nothing. It'd be a rounding error to a large company I won't name any companies. It'll be the rounding errors for a large company could really give back to the open source world. And I don't think enough companies are doing that. Do you think it's getting

**Sean C. Davis:** better? Or do you have any ideas on how we can how we can yeah.

Improve that? Giving from private or profitable organizations to open source projects.

**Raymond Camden:** I know NPM recently did some stuff to make it easier to fund like you'll electric, see messages when you install. I think that was all based on one popular library. They added their own message and it was it was bold.

And then BM said, okay let's make a nicer, more standard way of doing that. So I think there's definitely thought about that. And what you mentioned with faker, and I know that's happened a couple of times now people are recognizing that,[00:25:00] if you're gonna bring in 5,000 open source projects from 5,000 people, you have to be responsible for that.

Yeah.

**Sean C. Davis:** Yeah. Fair. Okay. There's be, before we move on to our last segment, I, there are two other, two other topics. I was curious to at least brush the surface on and. one is so your job Adobe what we were talking about just before we went on air, was that when I when I think about Adobe, I immediately think about illustrator, Photoshop, I think PDFs, but I think.

If I think about experience, I think about design experience, so to speak and not developer experience. And yet you are in developer advocacy, evangelism at Adobe. And so can you tell folks here what is what is Adobe doing for developers?

**Raymond Camden:** I can speak mainly about like my little area.

Sure. Yeah. Yeah. So we have a set of APIs and SDS that are all [00:26:00] related to working with PDFs and documents and it rents GOME gamut from simple utilitarian type things. Like I have a bunch of PDFs I need to add legal boiler play texts in front of 'em. So I need to merge PDF.

But I wanna automate that. So like that splitting PDFs, OCRing PDFs all the kind of simple type stuff that you wanna automate. Our team has APIs for that two things like I needed to generate dynamic PDFs. And so we like to use Microsoft word as a template, which. It's really neat and supply your data and you could, spit out custom invoices, custom employee, welcome letter stuff like that.

To also doing things like extracting information from PDFs. Great example of that is I have this fictional scenario where a scientific journal that published a long time ago. They have turned all their old paper journals in the PDF which is. But they have all this data in these PDFs that are locked away and [00:27:00] yes, you can open PDF very easily and you can look at a table of data but to actually use that data, you would need to copy it by hand or use some manual process.

One of our APIs actually will look in a PDF, look for tabular data and return it as tabular data CSV or or Excel data. So I built this demo that took 20 years of a fictional PDF of stellar data. And I was able to take 20 years of tables and put it into one giant data that you could then actually work with.

So it's that type of stuff. And our team is new. I've been there a year and I think it was open or. Around less than a year before I joined. So we're small team kind of new, and I'm just trying to get people knowledgeable about that. We also have and this will be definitely I think be useful for people working on the web.

We have a PDF embed viewer, which browsers already do a good job of viewing PDFs, but it's a full screen experience. You like leave [00:28:00] the website. Whereas we have this free in embed tool that lets you put a PDF, like in the middle of your. And you could do things like get events from it and stuff like that.

We've been doing the normal evangelism type stuff, doing blogging, doing presentations and talking about it and try to get, trying to get word out. And I'm also doing the internal stuff as well. So when I see people using our stuff and they're having trouble, I bring that inside and try to make a better.

Interesting.

**Sean C. Davis:** So is that, do you have to have a paid Adobe account for any of that to work or is, are some of those tools open to any developer?

**Raymond Camden:** All of the API stuff is commercial but there's a free trial and you just need an Adobe account for that. And same for the free PDF, or you have to have the account just so we can give you a key.

Use the key and you put in your Java script and you're good to go. Free trial does something really nice, I think which so we gave you like a thousand calls, which definitely gives you time to kick the tires. But we also gave you six months and I [00:29:00] can't tell you like how many things I have signed up for.

And then like life got busy. And I go back to, yes. Oh, your pretrial expired. And it's dang, like I need a bit more time. So we get like a good long time for you to come back to it later. If you get busy. It's

**Sean C. Davis:** really interesting. It seems like that could be really useful for a lot of developers because I've I've done some work with like you mentioned, generating invoices.

And I did that back in my Ruby days, which was possible and there. PDF libraries, but it just wasn't. I imagine as easy as it is to build. Company that's been focused on generating

**Raymond Camden:** PDFs. Yes. Yeah. PDF. So it was funny. Like I never really thought about PDFs until co fusion added support for working with PDFs.

And based on that, I started playing with it and realized, oh, PDFs can have JavaScript in them. PDFs can have bookmarks and stuff like that. You can OCR PDF although I never really [00:30:00] knew PDFs got any more complex and. Viewing something on screen. So it's one of those things where, you don't appreciate it until you look at it a bit closer.

**Sean C. Davis:** Yeah. That makes sense. That makes sense. Oh, and it, so I also came across something that said that you were, you've been working on you or you've been using view lately. Are you using that on your. For your you said you're using 11. Are you also using view or you just yeah. What, what do you use in or what are you building with view today?

**Raymond Camden:** I spend a lot of time on view two. So a lot of blog post and I wrote a book apart of a book on it. Like the gay presentations on it view two reminded me a lot of ColdFusion in terms of. It felt very approachable by people who were non-traditional developers people who may not find angular or react as friendly, and that doesn't anything wrong with angular or react and react.

Obviously it's not having any problems [00:31:00] being successful. But I have found at least view just to be more approachable, just periods, just more approachable. So I, I did a lot of work on there and a lot of Simple examples like using geolocation and VJs I I like simple things. I like, very short, simple blog posts, not how do something.

I used to have a lot of imposter syndrome that I wasn't writing blog posts how to build artificial intelligence and JavaScript. , I'm much, I'm not quite that intelligent

**Sean C. Davis:** or you know how to do

**Raymond Camden:** simple addition in JavaScript. But it's still simpler posts that tend to get more traffic and more feedback.

And I think are more useful. Recently I am looking at view three. I was waiting for it to be officially released. And that happened a couple of months ago. I have some thoughts on. Some of the changes it has made in terms of user experience. But the library itself is really good. I had worked on a view, two book.

We're working on an update for view [00:32:00] three, so I'm being forced to use it. Oh, okay. And it's great. Still My, my only concern now I'm not going down that road. I will say though, I, after writing a lot of blog posts on VJs you how to do X and view how to do Y and view and seeing that it's resonated with people on my blog in terms of just stats.

I've been doing a bit more on just like vanilla JavaScript, like just how to do X and JavaScript period and taking the view out of the picture to make it a little bit simpler and more direct for people. So I guess you could say vanilla JavaScript has been like, where I've been thinking about in terms content lately.

I intentionally don't call a DAP because. And this may sound silly, but I worry that if I title something how to do X and vanilla JavaScript, a significant amount of people will think, oh, is there a framework, vanilla, JavaScript, like they'll really believe it's something. And may not actually look at my post because they're thinking I don't wanna learn that.

I just wanna [00:33:00] use regular

**Sean C. Davis:** JavaScript. Yeah. Just JavaScript is JavaScript. Yep. So when you're writing and teaching, speaking about something, it's not necessarily. as a result of a thing that you've built, it might sometimes be like, you're interested in the thing, so you're gonna learn about it and then you're gonna

**Raymond Camden:** write about it.

Yeah, that's been my thing for the last 19 years of blogging, really. Like I get interested in something, I dig into it and then I blog about it. I'm very honest about not being the smartest person in the room. I struggle to learn things and when I do struggle and when I figure it. Oh, this is how I understand it.

Now. I write it and it helps submit the knowledge for me. And typically it helps other people as well. That's something else that's helped with the imposter syndrome as well. I do get feedback that I'm helping people, which I appreciate, if if I can help people go from beginner to intermediate, that's great.

I don't think I'll ever get people too advanced, but if I could help more people become better [00:34:00] beginners or stronger intermediate devs and I think that's a success

**Sean C. Davis:** It's really interesting because I I have, I almost always write reactively. It can, I've got a side project going on and oh, this thing is interesting or was difficult to find.

So I'm now I'm going to write about it. I think it's, that's really interesting that the it's almost. Totally reframing the side project to be not a, it's not the side project first and blogging about the side project. It's the side project is blogging and we're just gonna proactively learn some stuff.

I think that's really cool. Yeah.

**Raymond Camden:** I never write anything practical. Not to be honest. I write so much stupid crap. But. I did it because, 20, oh God, I'm old, 30, 40 years ago. I got addicted to writing programs and I have fun with it. And yeah, a lot of times, so many times I'll have a really stupid idea and I'll build it and I will I'll learn something or I'll find like a [00:35:00] really practical thing.

I have a blog post coming out soon that involves a full moon and dating apps for wear. And as stupid as that sounds, there's a couple things in there that I think are really useful that I'll try my best to make nice and clear. This is what you should learn from here. Don't actually build a dating app for wearables.

**Sean C. Davis:** I love that. Yeah, you gotta come up with all the ridiculous examples. Makes it fun. Yeah. Okay. With that, let's let's move on to our third and final segment. This one I've named sliders because we're gonna. Just, I'm gonna slip in a series of really qu well questions that should have quick answers, we'll say.

And you can pass on any of them. So just tell me pass and I'll move on. I've got to, I've got eight lined up here and then we'll ask you one additional question and then we'll wrap up for the day. Sure. Okay. Cool. All right, so here we go. Number one, what is your favorite open source? [00:36:00]

**Raymond Camden:** 11

**Sean C. Davis:** love that.

Number two. Okay. So you say you are an avid reader. What is the, what's the most life changing book that you've read?

**Raymond Camden:** I am not doing this quick. All good.

**Sean C. Davis:** It's okay.

**Raymond Camden:** All right. So throughout my life, there's been a couple times where in a particular media or medium. I will encounter something that completely blows my mind away in terms of what can be done, it's, I will have enjoyed it beforehand, but it's oh wow, like it's mind blowing.

When I was a teenager, I was introduced to Milan Canera being forgettable, lightness of Bain and. It was the first and I've been a huge reader for a very long time written read many books. This was the first book where I realized like the plot didn't really matter at all.

It was just masterfully written in terms of just language and just it [00:37:00] was life changing in terms of what I thought a book could be and got me to also realize. There could be genres out there that I'm not really a particular fan of, but someone could do something masterful in there. I'll give an example of that, of my father he classic rock kind of guy who plays some bands.

So he likes, Eagles and. Typical classic rock stuff. And he once told me he was a big fan of prince and I knew princess music. Wasn't really his style of music, but it was like, he's just a master at his craft and he respected how well he performed. How strong of a musician he was despite him not big in genre.

He like so long way of saying me Londoner when I was a teenager opened my eyes. I'll say now China MI. Has written books that it's like the mental equivalent. And so you made a mistake asking me a book question. Is like the mental equivalent of a round peg and a square hole in terms of reading.

And [00:38:00] not that it's hard to read, but he creates these concepts that you can read it. And your brain just has to stand back because doesn't know what to do with this. Not. That you can't understand it. It's just, it's alien almost.

**Sean C. Davis:** I'll stop now. Interesting. Okay. Okay. I like . I like that. That was good.

I really like the perspective there. It's not about the not necessarily the book or the plot. Okay, so number three you've so you've given a lot of talks over the years. And I know for most of us the talking we've done or the conferences meetups we've done since 2020 have largely been remote.

But perhaps before that what's the farthest that you've had traveled to speak. And what did you speak?

**Raymond Camden:** I've done Australia, Singapore, and I can't tell you exactly. how, yeah. Manila as well. To me, they're both really freaking far away. That was for IBM and it would've been a combination of our stuff and probably some [00:39:00] ionic that was big.

And at that time,

**Sean C. Davis:** oh, very cool. Were they conferences or meetups or what were the events? This was a couple years

**Raymond Camden:** ago. Meetups. Yeah, it was more of a meetup type thing. So I had a IBM member who worked in the Singapore region and he did a lot of setup for me. So I just flew in and I did my thing and then flew back.

That's a long, that's a long way

**Sean C. Davis:** yeah. To go for, but amazing. Okay. Number four. So you're also a lover of good beer. So tell me what's the best beer you've had in just in recent. Nothing

**Raymond Camden:** really stands out recent history. I tend to gravitate towards Mars and Octoberfest and their fall beers.

The rich creamy. Not very hobby, just there's it's a Mars in that's all I could say. It's a Octoberfest. Got really burned out on IPAs cuz like [00:40:00] every beer nowadays seems to be an IPA. A good red, I had a good red ale at a chain restaurant a couple weeks ago. That was pretty yummy.

My wife has got me into wine, and I never like wine. I felt one day I'll grow up and I'll be an adult and I'll like wine. She got me into wine and Cabernet seven know like a good strong SAV or just red wine in general. I've been really enjoying quite a bit lately as. Very

**Sean C. Davis:** cool.

I'm I am still waiting to grow up and enjoy, like I can do a glass of wine and then I'm like, okay. All right. Tired. Okay number five, you're in Louisiana. What would you say? What's the weirdest thing about Louisiana?

**Raymond Camden:** Oh , that's a loaded question. I have a lot of conflicting emotions about this state.

Honestly I'm not gonna pass, I'm gonna modify your question and talk about one of the strengths [00:41:00] and that is, I think we have very good food down here. Cajun and Creole food. I think is really good. We have a lot of good restaurants, so I think my hometown has one of the highest per capita numbers of restaurants.

So you know, my, my wife and I are both absolutely leaving Louisiana and leaving the south and that's a whole other topic. But, and I think we both agree that probably the only thing that we'll miss will be the food down here. And what yeah,

**Sean C. Davis:** remind me which area you're in.

**Raymond Camden:** I really want Northwest I've been out there a couple times.

And, but she has not, so she's never seen it. She's had her first chance in about two months. But Northwest or Northeast, really want it cold. You really just wanna be north cold cetera away from the heat. It's better agency running since March or so. And it gets incredibly hot down here.

**Sean C. Davis:** Yeah. That's that's brutal. I'm probably pretty humid in the summertime. I,

**Raymond Camden:** yeah, but I'll tell [00:42:00] you so we coming from Louisiana, we did a delayed honeymoon in Disneyland or world, the one in Florida. And in June or July, and we knew it was gonna be hot. We're like, yeah, we come from Louisiana, we know it's gonna be hot, but we're used to this.

The heat in Florida is 10 times the heat in Louisiana. So it's levels, man. And I'll take this over Florida any day, but it's still too high here.

**Sean C. Davis:** okay. All right. That's fair. Okay. Number six, we we touched on this maybe. Yeah. I think you probably gave some form of this answer, but you're a view guy or you were at one point of view guy.

So can you convince me in one sentence, why view is better than react?

In

**Raymond Camden:** one sentence. How about oneish sentence?

**Sean C. Davis:** Okay, good. We'll say, yeah. Okay. Yeah. I,

**Raymond Camden:** I look at my history with cold fusion, back when it was, when I was first doing it, it was cold fusion.net or classic ASP [00:43:00] and PHP. And that was pretty much the big options back then. They all did the exact same thing.

But one was easier to use. So I know react does everything that view can do. And again, reacts hugely popular. When I personally, when I look at react, it feels like it'd be hard to use. I don't doubt that I could get stuff done with react. It's not as enticing for me to use, whereas view at least for some time felt like it'd be easier to get stuff done.

okay. I like that. I like

**Sean C. Davis:** that answer. Yeah. Okay. Number seven, two more. Who should we have on this show next?

**Raymond Camden:** Wow. That

**Sean C. Davis:** is actually

**Raymond Camden:** talking. Talking about view. And yes, I am searching to make sure I get the names, there is a woman who wrote a very good view book and I think she's a pretty [00:44:00] cool and general Jennifer bland. Drawing a blank on her name. But she is also big in view and wrote a pretty cool book on VGs.

I think she'd be great to speak with. Okay,

**Sean C. Davis:** great. Love that. And last number eight. Wow. We'll call it second to last. Last of the short ones is okay. Is a slider, a sandwich? Sure.

**Raymond Camden:** I'm loose. I don't care. If you like what you debate about that, I'll be eating it. So that's fine.

**Sean C. Davis:** I love that.

I feel like I've got to, I had to prepare a little bit to be ready with my opinions cuz these things and the definition of a sandwich can be a fairly hot button topic for some folks. I think I'm on your side where I'm. I wanna be more inclusive. The more that, the more things that I call a sandwich, the more I get to eat sandwiches.

So that seems, it seems good. yeah. Okay. And last thing before we close. One more question. This is my favorite [00:45:00] question. It's my favorite, because I feel like it, it humbles experts. It boosts the confidence of beginners and it promotes. Solidarity among really all developers. And so I, I want to end most of these shows with this question, which is what is the worst mistake that you've made as a developer?

**Raymond Camden:** I spent a couple of hours looking at some code, trying to fix a problem, at least a couple hours. And I asked a coworker and he walked over and he is like, dude, scroll. And I hadn't realized it was more code, but the window than my editor. And that was the root of the problem. And literally if I had just scrolled my freaking window down a little bit more and looked at some more code in the file I would've got it a lot quicker

**Sean C. Davis:** scrolling.

I love that. okay. This was great. Thank you so much for being here, Ray really appreciated the time. I felt like.[00:46:00] I learned a ton. I'm now I'm inspired to, to consider this well really two things. One is to consider this idea of like reactive blogging rather than reacting to what I'm working on.

And also I've, I haven't spent enough time in view, so I feel like I need to really give it a fair shot. Yeah. Thanks. Thanks for your time. Not a

**Raymond Camden:** problem at all. Thank you for having me. I'm honored to be the first one.

**Sean C. Davis:** Absolutely. Be before you go, is there, if I assume folks will have some questions for you.

Maybe want to get in touch with you about writing, speaking, et cetera. So how can people find your work and and how can they get in contact with you?

**Raymond Camden:** I blog@raymondcamden.com. So just my name on Twitter. I am Raymond Camden. My DMS are open. You could send me a message. Tomorrow's my birthday.

So you could send me happy birthday message tomorrow. That'd be awesome. Happy birthday. Amazing. But I love questions because that lets me turn them blog post. So [00:47:00] ask away.
