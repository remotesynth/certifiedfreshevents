---
_build:
  list: false
  render: never
---

**Sean C. Davis:** [00:00:00] Welcome to code sandwich hour, where we take a meaty conversation with well known developers, sprinkling a little cheese and a few puns, and slept that between two metaphorical pieces of bread. This week's special guest is Jen of Microsoft. Welcome back everyone. I'm very excited to be here to kick off episode number two of code sandwich hour.

This is really exciting. We had a great time two weeks ago, and today we are joined by our very special guest Jen Luper and I will invite her on and say, thank you for being here, Jen Looper. It's a pleasure to have you.

**Jen Looper:** Hi, thanks everybody. And really pleased to be here. Hello from Boston from the The closet that I've retrofitted into an office.

So it's the cloth office coming to you live from Boston.

**Sean C. Davis:** amazing. You wouldn't know. You've got the you've. I feel like you've got the fancy background figured out. It's great. yeah. Jen, I want to [00:01:00] there so many questions I wanna to dig in and I, we'll have a really fun hour here, but I think the being code sandwich hour, the first thing we should do is totally outta context.

Just ask you right away. What is the best

**Jen Looper:** sandwich? So I am a purist. I like things simple and really good. So I really love a BLT, a really good BLT. And when I say BLT, it is, bacon, lettuce, tomato with a little schmear of Mayo on wheat so it's and in new England, they're always trying to put cheese on things.

For whatever reason they put cheese on apple pie. Oh. Apple. I know.

**Sean C. Davis:** I'm not from that's that seems okay. Yeah. , I'm

**Jen Looper:** a Midwesterner so I can make fun of the , but and the other thing they always ask on your BLT, would you like cheese? No, isn't that a BLT C

**Sean C. Davis:** Yeah. Interesting.

Okay. So do you does the bread have to be toasted? Should be toasted? Yeah. Should be toasted. Okay. [00:02:00] And then do you have specific type or cut. I know people are very opinionated about their the type of bacon that they will.

**Jen Looper:** Yeah, that's a great question. I I would avoid the sweet, like the maple bacon that has that sweetness to it because the tomatoes take your take care of the sweetness, so you don't wanna compete.

So a nice salt level and not too thin, but medium thickness I think would be nice.

**Sean C. Davis:** okay. And just like that. Yeah. Like the balance of the crispiness as well, probably right.

**Jen Looper:** Crispy salty, sweet, crunchy, a little schmear and some nice bread.

**Sean C. Davis:** I love that. Ooh. Yeah. Now I'm hungry. I've seen yeah, I've seen people put eggs on BLTs and avocados, not cheese though.

That's a, for me,

**Jen Looper:** it's so strange. It's a thing around here. Avocados. I can actually see, I think I've had that in MES mouth too bad. Yeah.

**Sean C. Davis:** Yeah. It worked decently and then eggs are just, I people add eggs to everything. it's I it's okay. Sometimes I suppose oh, and the, yeah the new England thing.

So I'm also, I'm [00:03:00] in the Midwest I'm in Cincinnati, Ohio and took a trip to Northeast. I yeah, maybe five years ago or so. And I ordered a regular coffee cuz if you order. Regular coffee in Ohio. I think that's often it's synonymous with just black coffee. They just give you a coffee, but in the new England, it's it also comes with cream and sugar.

That's what regular coffee means. Apparently.

**Jen Looper:** Yeah. Know that it's true. You have to be precise. Like it's, I think Duncans start this, but in New York city and the kiosks, my favorite thing is to get the little blue cups and the kiosks in New York city. And that's a very sweetened. Milky coffee that comes just auto there's no, there's nothing you can do to customize it.

That's what you get and shut up,

**Sean C. Davis:** interesting. Interesting. Okay. Yeah. I, that, that's where I learned my lesson to be very, yes. Very specific about what we want here. Yes. Okay. Now that I'm sufficiently hungry and I would imagine most of our viewers are as well. Let's get into [00:04:00] the main part of the show.

Quick recap for those of you who weren't with us a couple weeks ago this is code sandwich hour. We will take yeah, about 45 minutes to an hour. And we'll step through a series of three different segments last week, or last time I had really terrible punty names for each segment. And it's gonna happen again, although we changed him up I don't know if this will be a thing.

We'll try it out and see what happens. And maybe one of these terrible names will stick one of these times. Okay. Does you ready to get into it? Jen? Let's do it. Fantastic. Okay. First segment, I'm this week, we're calling the first segment. Hello world. And doing this because I want to talk a little bit about your.

What I'll just call your hello world moments in tech. So start us off by tell us a little bit about like, how you got into this space. What was your first job in tech all about? Yeah.

**Jen Looper:** My first job in tech was at a startup in Boston, not too far down the [00:05:00] street. It was called closing council.com and.

Building websites for title insurance lawyers. So the most boring

**Sean C. Davis:** drug. Okay. Okay.

**Jen Looper:** Oh my goodness. We used access databases and ass P and I was the front end person. So I was creating interfaces and they were terrifying. They were tabs and tabs. Boy weather was exciting days. That was about you.

Around 2001, 2000, 2001. So

**Sean C. Davis:** table layout.

**Jen Looper:** Oh yes. Beautiful table layouts. And remember the little it was a little transparent image that you would stick in the bottom for some reason. And I'm trying to remember, I'm sure our viewer, viewers of a certain age will remember why, but I think it was for SEO or some really weird hack.

Super weird.

**Sean C. Davis:** So it would it was just like a transparent image you would put in the, would you put it in the table?

**Jen Looper:** Yeah, it [00:06:00] would be like in the footer or something for some weird reason. Now I'm gonna have to look at a why we did that. I

**Sean C. Davis:** interesting. Okay. What were you just if you were building the front ends, were you just writing plain old HTML, or were you using any sort of frameworks at that

**Jen Looper:** time?

We were using as S P and I must have been just writing HTML on top of it. I don't remember. I don't remember writing much JavaScript. Definitely not. I think I was more styling things. It's all a blur. I do remember. And my amazing colleague Aldo, who was the database guy, and he had a whole array of sounds on his computer, like silly noises.

So whenever he was deploying the database for a new client, , he would have abundance, break out the depends. And I always, my God, until today I was like, we're gonna break out the depend.

**Sean C. Davis:** That's amazing. Amazing. Oh, we coming from Brian that the spacer was [00:07:00] because the empty table cell would not maintain the proper size, even if the size was specified.

Spacer.

**Jen Looper:** Okay. It was a spacer. Alrighty. All right.

**Sean C. Davis:** Ah, okay. So it was for the table to actually respect the size that you told it to be fascinating. We've come a long way. I think

**Jen Looper:** hacks on top of hacks. Amazing. We had to support I E whatever it was. Oh

**Sean C. Davis:** yeah. What version do you think we would've been at in oh one ish.

Was it, is this like six. Five. I was okay. I was gonna say five, but yeah. Yeah. Cuz I was thinking I, I started really I didn't start tinkering probably till closer to 2009, 10 and I was thinking was maybe on six or seven at that point

**Jen Looper:** must have been way back. Yeah. Terrifying days.

Yeah.

**Sean C. Davis:** amazing. Do you remember what text editor or IDE you would've used back [00:08:00] in those early days? I

**Jen Looper:** feel like it might have been dream Weaver, but I'm not sure. I know I used that early on and I'm trying to remember if that closing council will use dream Weaver, I think, yeah. I think.

Think so, something like that, cuz it was, I remember the direct tab layouts. We should go to the way back machine and go to closing council.com.

**Sean C. Davis:** yeah. I'm this is I'm definitely. I'm gonna check that out afterwards. Just a I, I don't know. Sometimes it's fun just to look at like the style. Probably interesting to, to even look at the code but even just the style alone is.

Wow. Very different.

**Jen Looper:** One of our designs that we crafted, we called it Xou and we were literally selling a design called Xou to these lawyers.

**Sean C. Davis:** oh man. Wow. Yeah, take us through like the next the journey. Where did you go after that?

**Jen Looper:** Yeah I probably should just dial it back a minute because I didn't come from a [00:09:00] tech background. It was so long ago that who did right. My training is to become a French teacher.

So that's why I have little hidden quotes all over the place to drip trip people up so I always wanted to be a French teacher and, went all the way through and got my degrees and was ready to get a professorship. But sadly, there weren't any so and I adjuncted for a little while and I couldn't make ends meet.

So I grabbed the for, I was able to train from scratch and grab that job. And I'm really grateful actually. They gave me, someone like me, a chance Probably they didn't pay anything. So it worked for everyone, it was the next one. Yeah. And the gal who was our marketing manager, Julie, she wrote my first recommendation letter, cuz we all got laid off, but she was helping us find our next thing.

When your startups, founder, and then. You just go to the next thing, but yeah. What was your question again? I was dreaming in nostalgia land back then. that's all fit,

**Sean C. Davis:** bear clear. Yeah. Just curious what was what was the next step after the, what is it CLO closed in closing

**Jen Looper:** closing council?

Yes. Yeah. Yeah. So the next step after that was interesting, because that was the end of the.com boom. [00:10:00] They burnt through their finances, laid off everybody and we were all. Left a drift, but I had already been having my foot out the door and I went to a nonprofit. And that was a, that was an interesting move because that was my first experience with ed tech, which was cuz it was an educational nonprofit for it was called Jewish family and life.

It was find funded by the a high foundation and there were different departments throughout Jewish family and life. And handling like cradle to grave. So the little kids had their area. I was part of the middle school group. So I was BGAN news. That was my website. BGAN news.com. So we had JS news BGAN news and it was like the whole thing.

Oh, lots of Z. Yeah. It was very early early days. And we had boy, we had Baba books as well, so that was our book club Scholastic, but for Jewish teenager, And it was fascinating to work in a nonprofit that it was a different world. The one thing I learned at that gig is that you really need to be invested in the mission to enjoy your work at a nonprofit.

If you're not, I'm not Jewish. So it was a huge [00:11:00] learning experience for me. And it was really valuable. I that's actually a work experience that I, I learned a lot at and take a lot of lessons from and let's see. So we had, yeah, we had sch. Trying to remember what some of the other ancillary brands that we had at Jewish family in life were blanking Jewish.

I can't remember schwa anyway, lots of different, groups of folks who were gathered together to kind to support the community. And I was there during nine 11, which was wild. I've never seen a community organized that fast. We launched a website. We launched J's news.com within three hours of the bombings.

It was unbeliev.

**Sean C. Davis:** Oh, okay. So you were, were you working on it beforehand or was just like you spun up something new?

**Jen Looper:** Oh I guess we had some templates, but we spun up something completely new because what we wanted was to have a news outlet for the particular perspective of the Jewish community and something that the community could turn to and have a news outlet of their own.

It was really impressive.

**Sean C. Davis:** Yeah. That's a, that's amazing. So did it, and then did it [00:12:00] continue to build after.

**Jen Looper:** I found it recently on the way back machine. It didn't last more than a year or so. I think it was folded into another one of the brands, but it was one of those, at the moment kind of creating a a gathering place for folks to to talk together places to put in prayers and this kind of thing.

It was a really interesting effort and very educational for me. But yeah, very intense moment of my career was a Jewish family in life. Go.

**Sean C. Davis:** I bet. And what, so what was your role for for that

**Jen Looper:** organization? Yeah, I was the web developer, a web designer, I guess they called me a web mistress.

in the back of the day, we were all webmaster is the web mistress web. And yeah, I was managing Bob a news.com and some work on Baba books, which is the book club. But Bob agan news was cool because we were all games and there's a forum and we did lots of games in flash. So it was a lot of that was where I was exposed actually to cold fusion and the whole Adobe stack.

So cold fusion and flash. Okay. And [00:13:00] yeah, and, but building games in flash was really fun. And we did a lot of cool things. We had, we created our bespoke game, which was like Majong, but for teaching Hebrew Blanking on the name of the game, but it was interesting sort of stackable tiles that students could like shuffle around and learn learn the different Hebrew letters.

It was really cool.

**Sean C. Davis:** That's a, yeah, it sounds like something really fun to build. I think I only really built one game sort of education application, and that was a fun few months. That, that kind of. I don't know, having more interactivity, like a little fresh breath of air compared to just putting static layouts on the page and all that.

Yeah. Really fun to see those coming together. Definitely.

**Jen Looper:** Yeah. And I just remember the name. It was Shama was the name of the ancillary website that was for okay. More intellectual debates. And there was also social justice.com and that the tagline was stop kvetch. Social justice.com.

**Sean C. Davis:** [00:14:00] okay. This is great. Okay. And so we're doing some yeah. Education tech and all of that. All right. So I was actually, I was looking back through Your yeah your LinkedIn job descriptions and around this time period came across a snappy, the squirrel was that, so was this a, I was trying to figure out like, what was going on here.

Can can you tell us a little bit about that?

**Jen Looper:** I have no idea what was going on. Yeah, no, actually snappy were snappy. Snappy's still alive. The books are still alive. I got really into building mobile apps at a certain moment in my life when it was really awesome to build mobile apps. And one of the cool mobile apps we were able to build was like little eBooks that you can flip through and then you can have like games attached to them.

And just, they're really nice on iPad and I'm always interested in educational stuff. And my dad had this idea of writing like money saving tips and finances for kids. So he wrote up a whole bunch of little storylines. It's his idea to do snappy. Snappy is like his concept, so we just rock that.

That's great. That was great. If you [00:15:00] go to snappy squirrel@chinluer.com, I think it's stilly. I'm converting them over. But I just still live@snappysquirrel.com. Yeah. Yeah. Okay. So snappy has issues. Snappy has issues. He realizes it's fall and he has to save nuts for the winter.

How is he gonna keep his nuts safe? What are you gonna bury them? Are you gonna stick him in a tree? What are you gonna do? He has to learn about thinking and, the sneaky Fox comes in and says, I'm a I'm gonna give you so much interest for your nuts and, and he's a scam artist, so it's better to go to owl bank because owl is an honest person.

owl is, the way you might be banking, you're not gonna get as much interest, but your stuff will be safer, , there's a lot of, okay. Okay. And then of course he needs a nest and then snappy plays the stock market. And all hell breaks loose. He buys a bond. My dad is a very cautious investor, so he's always that people buy bond.

That's

**Sean C. Davis:** great. Yeah. This

**Jen Looper:** is whole thing. Yeah. It's, a risky investment. Snappy loses all the nuts. It's not,

**Sean C. Davis:** it's not good. so is it [00:16:00] whole, like all the books, all like fit together in. this whole yeah. Timeline to like piece all of the information together.

**Jen Looper:** Yeah. It is a consecutive storyline and I did it as separate mobile apps and each had a parent section and they had like tips on how to discuss these things with your kids.

And it had a game. So you could always have a, you could read the book with your kid or you could play the little game. So it would be. Like a platform or with snappy running or something. It was all done on Corona SDK. This is my Corona moment when I really enjoyed making mobile apps with Corona SDK. Oh,

**Sean C. Davis:** interesting.

Okay. Okay. Yeah. And the squirrel caught my attention because I I got my start in hosting it interview hosting storytelling. And I started this podcast several years ago called squirrel stories and it. It had nothing the differences. It actually had nothing to do with squirrels.

It was it was fun. It would just go, they were live shows, but would get syndicated as as podcasts. And it was we would go to local bars and grab some [00:17:00] friends and people who were there and jump up on stage and share goofy and embarrassing stories. And so it was like, this was fun.

But now, because I did that for. A year or a year and a half that now some of the folks that remember that Jill just like everyth. Squirrel related is associated with me. Always. I still get my yeah, people send me squirrel things all the time. Got squirrel

**Jen Looper:** squirrel important elements of our ecosystem.

So we have to support them.

**Sean C. Davis:** that's right. Exactly. Yes. okay. With that, yeah, let's let's transition into our second segment, which today I'm calling the menu because we'll say what's on the menu today. So what's happening in in your world and. And what I'm curious though you've already talked a lot about education and your interests that's, you thought you were going to be a teacher, you wanted to be a teacher and yet somehow teaching still made its way into your career.

And so can you, yeah. Can you just share like how that progression how has teaching [00:18:00] stuck with you through the years in your development?

**Jen Looper:** Yeah, it's a nice question. I always, you're asked by an interviewer, whatever, so tell me about yourself.

One of the first things I usually say is I'm just a teacher, I've taught I've taught preschool, I've taught elementary school. I founded the Wellesley Chinese language school. For elementary school kids, I've taught, middle school kids. I've founded the Wellesley code academy.

I've taught game development for middle school. Kids worked with high school kids. I teach adult learners now. And I really think that it's a great way to just keep your. On your toes, cuz students will nail your butt to the wall, yeah. I'm currently a professor at Boston university of metropolitan college, which is their extension school and they're, these are professionals they're for example, backend developers who wanna learn the front end and they they will bring all of that Java of knowledge and just.

Challenge all your Java script knowledge, and it's really a fascinating, it's a great conversation to have to have an exchange of ideas. I just think it's a great way to just keep your brain nimble and always try to not [00:19:00] just teach, but also learn because it's really 50 50 to keep to keep yourself on your toes.

But yeah, right now I'm an educational cloud advocate. So I'm on the next generation team at Microsoft and we take care of higher education and And and faculty as well, but I'm, I always have this love for the stem education and the K-12, snappy the K-12 stuff. And I'm currently under contract with Wiley to write a textbook for grade six through eight computer science for kids.

Very cool. Okay. It's gonna be fun. And it's all game driven. It's really getting kids to. It's closely aligned to the computers science teachers association, the CSTA standards. They have very strict standards for what you're supposed to teach at that. So it's tightly aligned to the to those standards, but within a game concept.

So we're doing things like tinkering with. A little bit of data science, a little bit of databases, a little bit of make code, which is a block based programming thing with a hidden curriculum of sustainability. So you're basically wandering through an enchanted forest with a guide [00:20:00] and she's giving you challenges.

Look, this is a petrified forest. This is part of our forest. And this is where we keep our petrified wood people come and try to steal it. Can you create a model, an algorithm to figure out who's here just to take pictures and who's here to take pictures so that they can scope out. Steel. So these kind of things, interesting.

**Sean C. Davis:** Yeah. So did you have to build did you have to build anything to support that or are these using languages or frameworks platforms that are already in place for them?

**Jen Looper:** Yeah I really want it to be accessible to everyone. So all the tools I chose are browser based. I don't want, because a lot of schools are gonna be using Chromebooks and it's not easy to download things.

I used I found a way to U to build database queries. It's called SQL fiddle. I had no idea. And you can just go into your browser and start bashing away at SQL. And these are great little tools that people can just learn. And it's no stress, no pain, but we start with make code, which is all done in the browser.

And that's a Microsoft product for all ages, but really useful to, to build little games. But I also had to I'm building, this is a print publication. It's gonna be a [00:21:00] physical textbook. So there has to be a website attached to it with lesson plans. So that's the other half of it.

**Sean C. Davis:** Gotcha.

Okay. And that's work that you're doing separate from your work at

**Jen Looper:** Microsoft? Yeah. That's all side gig stuff. okay. Okay. Yeah. All the stem stuff I do is side.

**Sean C. Davis:** Interesting. So the Microsoft gig, are you yeah you are you're teaching folks is that what

**Jen Looper:** it is? Yes, we are tightly affiliated with the student team, which is part of the next generation team.

And they're the ones who manage the student ambassador program. So there's lots and lots, 5,500 student ambassadors all over the world. So I'm a cloud advocate. So it's my job to interact with these students for example, tomorrow's birthday. So we're, we created a lovely event on that tenant in teams so that the students can gather with us.

And we're gonna talk to some researchers from Microsoft research to talk about the cool things that they're. And they're doing some really cool stuff. There's eco pods and all kinds of neat stuff. So we're gonna talk about that tomorrow. But yeah, it's our job to keep them en engaged and learning, always learning.

**Sean C. Davis:** Okay. So it's like more Yeah more coordination [00:22:00] and engagement and that sort of thing.

**Jen Looper:** Yeah. And also we also deal talk to faculty who are, using Azure in their classrooms and figuring out, how can we make this easier for you? How can you know, how can you manage your grant a little bit more efficiently?

What can we do in terms of curriculum? I'm passionate about curriculum design. So I'm really interested in building things that could be taught. That's a faculty member could just pick up and teach in their C. .

**Sean C. Davis:** Yeah. That's okay. So I, yeah, I've I read that you were pursuing a degree in curriculum.

Yeah. What's what is the technical term for the degree?

**Jen Looper:** Yeah, it's a master's of education in curriculum and instruction at UMass law. Okay.

**Sean C. Davis:** So yeah, so I'm thinking like I love teaching and thinking through the process. how do I disseminate this information in the easiest way to understand it and all that.

But I just like, until I read that I never even considered that. There's also there's the study of study or the study of teaching as well. And so yeah, that, that must be fascinating to be like I'm working on teaching, but [00:23:00] I'm working on higher level. Like how do we teach that sort of meta teaching?

Yeah. Yeah. Meta teaching. That's the way you say. Yeah. And

**Jen Looper:** yeah, the important thing is that we've been, I've been put in contact with all these amazing K-12 teachers who. Absolutely heroic. And who have started teaching in 2020 in the middle of the pandemic, to get, thrown onto zoom or hybrid or doing pods.

Have you heard about pods where they have a house? Yeah. And grades on each floor?

**Sean C. Davis:** What heroes? Oh, I've yeah, I've heard about it, but I don't really know exactly what it is,

**Jen Looper:** how it works. Yeah. Incredible. But it's interesting. The. The courses or the classes that were given in this program, I'm really looking forward to this coming semester, starting mid-May because one of the classes is teaching diverse students.

The other one is assessment. An assessment is hard. It's really hard to get it right. Especially online. So I'm curious, what can we do about assessment?

**Sean C. Davis:** interesting. So is a lot of, yeah, a lot of what you're doing is it's almost Kinda like testing, figuring out how to teach in the [00:24:00] most effective way and assess in the most effective.

**Jen Looper:** Yeah. And a lot of the teachers are coming from school districts that have prepackaged curriculum or they have a particular type of instruction that they do. They fit into a certain pattern and they have to retrofit their learnings into the pattern that their school is delivering to them.

So it's a very interesting moment to be a K-12 teacher right now. It's a really hard job and my hat is absolutely off to these.

**Sean C. Davis:** because they're always having to follow something, but also yeah, just like constantly adapting. Yeah.

**Jen Looper:** Plus all the standardized tests, okay. Yeah. Dealing with all of these things.

**Sean C. Davis:** Interesting. Yeah. And and you also have you have another nonprofit that you run front end foxes.

**Jen Looper:** Yeah. Yeah. This is a passion project. It's about four years now that we've been working on this. And we started it as the view community's version of NG girls, the angular communities program at this type.

Okay. So it's basically gathering bunches of women together. They wanna learn, and then giving a, creating a curriculum so that they can work together to build something in angular. We did the same thing, but in [00:25:00] view and, traveling from conference to conference, Doing like a free workshop before the conference and then maybe getting some tickets for the folks to attend the conference as well.

So it's a diversity kind of initiative pandemic crushed a lot of these communities and, it's been very difficult. So we pivoted and we opened a boot camp. And so we are now front end foxes.school. And it's either foxes or squirrels with me, so

**Sean C. Davis:** fair. Something animal based.

It's great. It's great. Yeah. Yeah.

**Jen Looper:** And yeah, so that's been going well, we graduated about 200 ladies all over the world, so we had people in Africa, Europe, north America, and Latin, and at various times. So we'll start again in September. We hope we have a new sponsor, so we're just giving the logistics set and.

We have some amazing instructors and we have our own curriculum that I'm happy with, which is important.

**Sean C. Davis:** Yes. Yes. And then do you help place the folks after they graduate as well? Or just give 'em resources to, to help with

**Jen Looper:** that? Yeah. We try to help them network via us. I've had ladies in LA specifically dropping out [00:26:00] of the boot camp because they got jobs.

So I'm like bye.

**Sean C. Davis:** Amazing. Yeah. That's a win for

**Jen Looper:** everybody. Yeah, absolutely. Yeah. But this is something that our future sponsor Reddit, which I can say now that they are gonna be sponsoring cohort number C3, which is our fourth cohort. I would like for, I would like to work with companies and figure out how we can get some some heavier mentoring and maybe after the bootcamp to keep going, what we can do to support them as people go into the job force, you

**Sean C. Davis:** know?

Interesting. Okay. I found it really interesting that you are you're teaching you're teaching tech at the higher education level. You've you also have this bootcamp nonprofit that is, focused on teaching people tech and getting jobs and all of that. And from my experience, those two things tend to clash.

They tend to be at odds they're that higher education tends to, Be teaching things that are maybe like one step behind what other folks are teaching [00:27:00] boot camps are. And maybe a little bit more theoretical boot camps are are, tend to just be like, we're super fast paced. We're trying to get you placed, get a job.

And so with doing both of those, is that is it a misconception or, what do you do to like what's. Similar and different about the your life in both of those

**Jen Looper:** worlds. That's a great question. And it's a great insight with the higher ed work that we do we tend to be a little bit more product focused, so we're talking to folks who already have an Azure grant because they want one, which means that Microsoft gives them a certain amount of money and they can burn through Azure doing things.

So it's a little bit. curriculum design focused with that particular way that we interface on a professional level with the, with faculty in higher ed, however, there's higher ed and there's higher ed. I teach at an extension school, which is right in between, and this is a very interesting moment.

Very interesting moment in higher ed because during the pandemic a million students [00:28:00] dropped out. There's the missing million. We don't know what happened. Wow. And so where are they gonna go? Enrollments have been crushed. So maybe, this is a moment where we need to rethink, we need to rethink what we're doing at higher.

I don't know if boot camps are the answer, but maybe there's some kind of mishmash between the extension school experience. Boston university extension school has a venerable and interesting pre-professional program, which is really nice to see, but, we're teaching web skills. I teach HC M L CS JavaScript with a little bit of view.

Okay. Same thing. This is almost the same thing that we do in the boot camp. So learn the basics. I'm. Coursera fits in here somewhere as well. All of the MOS CS 50 from Harvard. So we're in a moment where we're democratizing higher ed to an extent that curriculum's gonna start busting open.

And I really look forward to that. I think interesting really fascinating moment. The next couple years in higher ed are gonna be a wild ride to get ready.

**Sean C. Davis:** [00:29:00] okay. All right. I feel like it's been a long time coming, so that's really exciting. Are. These extension schools or, yeah, like the, what, whatever seems like it's in that, that middle ground.

Are they do they have the same accreditation? If you graduate from one of those schools, does it look the same on your resume?

**Jen Looper:** At this point in time, who cares? Maybe it doesn't matter anymore. Yeah. Like nobody, Microsoft doesn't even ask if you graduated, it's but the full degree thing is really changing. It's very interesting, but they are accredited according to, the state rules of accreditation.

But the degree. I've seen it in my own department, that people are unclear the difference between Harvard extension and Harvard. For me, this drives me crazy, cuz there's a massive difference, but I wonder if the brands are getting very much muddy muddled. I'll tell you one little piece of Intel I have from MIT.

My husband's a professor at MIT in E C S electrical engineering, computer science, and they're revamping the curriculum majorly towards project based learning. And I'm [00:30:00] like, if MIT is doing. This is fascinating. They're all getting in there and doing labs, they're doing maker type activities with circuits and signals and systems.

And he's, he is like hanging on with those fingernails, cuz he is an applied, with classical Chinese training. So he is but it's wild over there. And they're blazing the trail. Yeah, we'll have to see what happens. I think it's gonna be fascinat.

**Sean C. Davis:** And that's what I'm thinking when you say that, it's okay if MIT is changing what they're doing, then probably we start to see other institutions follow suit pretty soon.

**Jen Looper:** Yes. Yeah. Although just today in the Chronicle of higher education, I read that MIT's going back to asking for SATs interesting.

**Sean C. Davis:** Oh, because I didn't know that they had

**Jen Looper:** stopped. They stopped over pandemic. Everyone thought it was permanent. Oh, sorry guys. Back to the classrooms for you, so

**Sean C. Davis:** what was the what was the reasoning? Was it just the pandemic or was it also that they, there was, there's some flaw in the S a T system.

**Jen Looper:** A little of both. I think we had hoped that people would understand that standardized tests are easily. Gamified are very [00:31:00] easy for privilege people to do much, much better because they get all that test prep, and is really a rough way to do any kind of assessment of a student's capability, but everything is gamified.

So I think they feel like they have to have some kind of baseline somehow. So it's a tough, it's a tough question for them. But the headline today and the Chronicle. MIT just reintroduced the SATs. And this is why you shouldn't . I was like, all right.

**Sean C. Davis:** Okay. Yeah.

**Jen Looper:** It worked for me.

I got into Lowell without having to retake the GREs, which made me really happy cuz I'm not taking those things again. I know the graduate student

**Sean C. Davis:** school exams, so it's oh, okay. So what did they not use that anymore? Or did you get in for some other qualifi?

**Jen Looper:** Yeah, they just asked you for your trans.

just to make sure you have a BA so that you can get into an ma. And I was like I have a PhD. I don't know if that count. Does

**Sean C. Davis:** that count?

**Jen Looper:** They wouldn't take it. I had to beg Wellesley to get my transcript back. It's strange. It's endemic was weird. Like [00:32:00]

**Sean C. Davis:** you're like, yeah. Okay. The PhD isn't good enough anymore or something.

Yeah. interesting. Okay. Before we move on, I got a question from JJ who says back to gamification designing game education. What do you do to determine if the game is going in a particular direction that will make it popular. And do you keep updating games after you release them?

**Jen Looper:** Ooh, so I haven't done game development professionally and I never really done it professionally. I did it as a side hustle. The only time I made money off of an app that I built was when I sold it. , that's one thing because it would, the golden age of games, indie games, was what do you think?

Like 20 10, 20 14 I'm

**Sean C. Davis:** yeah I'm not the person to ask cuz I'm not a not a classic. Yeah,

**Jen Looper:** neither am I. And I was always interested in educational games, which is an absolute buzz kill, so in that beautiful window when you could actually make a little bit of [00:33:00] money with indie games it was all about SEO.

You had to get the app store to pick up your game and feature it and stand out from all the rest flappy bird type stuff. You, and you did have to update it pretty frequently. as I remember, I'm still the one playing like farm heroes, , I love farm heroes because the only people who play it are the QA testers at king and I could beat them.

And I'll

**Sean C. Davis:** I got top of the leaderboard, what? Yeah, whatever it takes to win.

**Jen Looper:** Yeah. But I think games have turned so, so high tech and so professional now I think, man, if you're an indie game developer, it's a rough row to, to travel.

**Sean C. Davis:** I think, yeah. What is it? Because I imagine these companies have gotten like, they're, they have a platform that they work on and that just keeps getting more intense that it's the starting point is probably, or the gap is probably getting larger

**Jen Looper:** all the time.

Yeah. You wanna get acquired, right? Lizard just got acquired by Microsoft, which surprised everyone. So we'll see what happens with that, but we've got the Xbox ecosystem as [00:34:00] well. Not a gamer, but I, and I'm always interested in educational games and to see how you can teach. I was just on Twitter and I saw that Elon Musk created a bespoke custom school for his kids, big surprise, and it's all about games and they allow kids to come and do the school curriculum for extracurriculars.

And it's all about working in a team to solve problems. It could. personally, I think kids should be outside playing in the dirt, but I'm like the Waldorf mom, I'm not the Elon Musk mom. , I don't know, but apparently it works for some folks. My daughter taught at game U, which had a lot of autistic children in her in her classroom.

And they really do well with kind of building their own games and really focusing on the details. And so there are certain audiences that game. Focus learning really works for.

**Sean C. Davis:** Yeah. And it's just I, yeah I don't know. I was thinking totally like other direction, but I'm reading this like really thick history book right now.

And [00:35:00] I would never have read that for fun while I was in school, let alone, I wouldn't read it. If I was told to read it, it was like the way we were. History was so boring and dry. And I'm like, I don't know if it's, cuz I'm getting older that I'm interested in these stories more, but also it's just, wasn't super accessible to get this 600 page book and go through it without lots of context.

So I'm like if we can use games to make kids more interested in what they're learning I'm yeah. I'm all for it. With the balance of getting outside. Of course.

**Jen Looper:** Yes. Yes. But I feel isn't. Oh, isn't civilization or one of the, those, that type of game that's been brought online. I feel like they're working with universities.

And creating real educational experiences around wandering through Hercule and Pompe, like ancient Greek, cuz they can do everything in 3d. Oh really impressive. And I don't remember the name of it. Somebody will tell me the game I'm thinking of, but it's [00:36:00] starting to get like the convergence of education and games is starting to get much more rigorous, which is interesting.

**Sean C. Davis:** Interesting. Interesting. Yeah. F fascinating world that we live in. Everything's Ooh. Changing all the time, which is great. Yay. Which is great. Okay. With that. Yeah. Let's move on to our last segment with our last few minutes. So this week I'm gonna call this one or DFS, because why not have snacks at the end?

but no, in in this segment, I'm gonna ask a series of. Fairly short questions that should have somewhat quick answers. And I tend to be all over the place. So we'll have some tech, some personal and feel free to pass on any of them. This puts you on the hot seat. Okay, cool. Okay. So question number one.

What is the best part about teaching?

**Jen Looper:** Best part about teaching is when someone stops you. And this really happened to me in staples, the checkout girl, and she's. I took your [00:37:00] class and because I took your class, I'm going to school in the fall to major in computer science. And I was like, absolutely. My sister, you go and slay.

I love that. That is

**Sean C. Davis:** amazing. Oh yes. Yes. So like just making that difference and like help helping other people's improve their life, yeah. Yeah. Yeah. Love that. Okay. Question number two. What piece of. Could you have used most when you were first starting out your career?

**Jen Looper:** Really? Anything? I didn't have any . I wish we would've had things like women who code, but we didn't, it was not a thing way, way back in the day. I think that I was not advised early enough to embrace the open source. I've always said this. It, I grew up in a kind of CLO the closed ecosystem, the Adobe ecosystem, co fusion and all those sort of more closed source type of environ.

and I think it would've been smarter and probably more sustainable to jump into the JavaScript ecosystem earlier and embrace that open source and really start contributing early, onto open source. [00:38:00] Then considerably later that I started doing this sort of thing, cuz it just didn't know it was a thing.

**Sean C. Davis:** Interesting. Okay. Good answer. Number three, what is the one thing someone should not miss? If they are traveling to Massachusetts Boston area?

**Jen Looper:** Huh? Oh my gosh. There was a lot of touristy stuff to do in Boston. I'll tell you a little place that I love, and it allows you to go to the north shore, which is a very, have some very pretty beaches.

As you're driving up 95 north, there's a place called lobster land.

**Sean C. Davis:** Okay. All right, that's good. It's right on the highway. You

**Jen Looper:** cannot miss it. It's a big size lobster to land with L O B S T a and they have these big ass lobsters. You can just eat as much as you might. It's become pretty popular.

Fight through and get parking and just park at lobster to land and eat yourself sick and then go to the beach and like vegetate. That's what I would say.

**Sean C. Davis:** That sounds amazing. Yes. Now that's the other thing I. Remember from the [00:39:00] Northeast trip where the lobster rolls everywhere, just on the side of the road.

Delicious. Great. Yes. So good. Okay. Number four. What are the most rewarding and also most challenging, maybe probably two different things. Aspects of working at one of the giant tech firms. Yeah.

**Jen Looper:** I, I always say that working at Microsoft has been the most challenging Career shift in my life.

It's nothing like nothing you can do prior will prepare you for Microsoft is so big. There's at one end, there's like you're in the kid, in the candy store, you've got all these opportunities at your fingertips, there's just so much going on. And you can try to pursue your passions which is really awesome.

There's great. And there's great people here. I have to say that. I'm sure. The old timers who used to know Microsoft in the old days would be really surprised to hear that, but the culture has shifted dramatically and the CEO and I'm not drinking the Kool-Aid our CEO has really shifted the culture.

He's done an amazing job turning like turned the Titanic [00:40:00] right on around. So well done Satya, the challenging thing is that it is so big and you just have it, it's just an immense amount of pressure to have impact, you can. Somewhat easier impact in a somewhat smaller company. If I break production at Boba news, I am busted production at Boba news.

Then you need to fix that before

**Sean C. Davis:** you can go home. ,

**Jen Looper:** You pull that at Microsoft, there's gonna be issues, not that I'm in the process of breaking production, but know wouldn't let me anywhere near, but it's just such a large org, and just define your niche can be challenging for some people.

**Sean C. Davis:** Okay. Yeah. I love that. That's great perspective. okay. Number five. How many languages do you speak?

**Jen Looper:** I speak English and French. Very fluently. My Spanish is I'm mediocre. My German is worse than that. My Latin is shame. I know enough Chinese for people to I know when people are insulting me,

**Sean C. Davis:** okay.

I'll give them the

**Jen Looper:** look [00:41:00] that's great, but oh yeah, I can scrape by an Italian. Okay.

**Sean C. Davis:** So did those all come from from getting the PhD in French or was it just think you've picked up different languages from different places?

**Jen Looper:** I really love learning languages. I'm pretty efficient at it.

It's just something I like to do. And I'm pretty good at doing. I just started in learning French when I was, 16 or so, or younger 14. So that came more easily and then spent a lot of time over there. And then once you learn one romance language, the other kind of role on in, so you take a couple classes in Spanish and you start to figure out the pattern.

Same in Italian. And you need to know Latin if you're gonna do medieval studies, which is what I did. Ooh. Do not like Latin and German because of my heritage. And then my husband's Chinese. So when we go to China, I need to know when they're insulting

**Sean C. Davis:** me. Ah yes, absolutely. That's great. I did I did three years of Latin in high school and yeah, it was brutal.

It's smart. Yeah. [00:42:00] Sorry.

**Jen Looper:** You have your Wheelock Wheelock guide.

**Sean C. Davis:** Yeah. Whew. Yeah, those were interesting days. Okay oh, number six. Okay. I got a, I have a four parter here for you, so here we go. Okay. If you could have lunch with anyone living or not who would it be?

Where would you take them? What would you order? And what topic would you bring up? Wow. That's a, is a loaded question. I know

**Jen Looper:** no, it's an interesting question, but it reminds me very much of my college application because we had to talk about, who is our sort of like hero and why. So I'm gonna give you the same answer because she's still great, incredible person to hang out with.

But Eleanor of Aquita, she she was a 12th century. Queen. She was the wife of two Kings and the mother of two more. She was the mother of Richard, the Lionheart and bad king, John. She was an absolute Savage and Henry the young king, that was her other son. And she banded all those kids together and tried to overthrow her husband Henry the second.[00:43:00]

But it was she was a badass. She got mad. Because he wasn't paying attention to her. She was a huge HES. She had inherited most of Southern France was her Dutchy. And so she was the, an absolute prize. So she was married to Louis salmon in France and he boarded her to tears. So she chucked him and married Henry who is considerably younger than she was.

I wanna say over 10 years younger didn't matter. And anyway, long story short, total Savage. In a world where, you could get snatched at any moment and forcibly married off. If you're that kind of era, she, basically lived the way she wanted to live and caused an immense amount of trouble.

And I, I have massive props. She also was responsible for cultivating a considerable amount of arts and culture brought up from bio crusades into Aquita into England. But I I let's say where would I take her to lunch? Geez. I think she should take me to lunch. I probably would just bring her home and cook something nice.

Maybe I haven't.

**Sean C. Davis:** [00:44:00] Okay. That's exactly. That's

**Jen Looper:** what do people eat? But she's pretty sophisticated, on her tastes. She liked, she had a taste with the finer things. So maybe one of the nicer restaurants. Oh, we could go to like the Mandarin Oriental and have tea or actually Boston public library has lovely English tea.

Maybe she'd like that. So that would be good. Yeah. Okay. So that was the person that was the venue

**Sean C. Davis:** venue. You, you've got the order, you got the tea, so then what's yeah. What's the first topic that you're discussing. I would really

**Jen Looper:** like to know why exactly she turned on Henry the second I want the tea, we're gonna have tea and I want the tea.

I want all the details, like why, what happened and why. What happened to make her sons like such pains in the rear? Like they were really problematic. Her daughter was really cool though and it was a huge she went, she was ma to Champan. I think she was she was married into champagne and she also brought a lot of arts and culture into Champan.

I would also like to know the rumor has it, that, she had a fling with a Troubador. So I wanna know [00:45:00] that tea as. It's just lots and lots of gossip that I'd love because we just don't know. She didn't write anything. We don't also, we'd like to know what she looked like, but I've always been really interested in this cool Savage, like no nonsense.

And her mother-in-law was a Savage to Matilda was really, these ladies.

**Sean C. Davis:** It's amazing. I have some reading to do now. I gotta learn. Yeah. Yeah, this is great. All the gossip. Okay. We've just a few more. All right. So number 17. All right. I read the other day that there's a new Guinness book of world records record for someone for the number of times someone has watch.

A movie in the cinema and someone has watched Spider-Man 292 times at the theater. . And so in, in that same vein if you had to go to the cinema to watch a film, 292 times, then it was the same film every time. Which one would it be? [00:46:00] Wow.

**Jen Looper:** Oh man. There's a movie that I really love. It's well, okay.

I love all the merchant ivory stuff. So like some of the historical stuff and the room with a view and all the old Helena bottom Carter stuff. But there's a movie that just wipes me out every time I watch it. And I don't, I would have to be like in the mood to watch this that many times, but because of its soundtrack, there's a movie called all the mornings in the world.

And it's the story of. Maha ma who was a veal vile player. So he played the prototype cello. He was very famous in around Louis fourteen's time and his teacher and the learnings he got from his teacher. So that's a terrific movie and the soundtrack is absolutely ravishing. So I think I could sit through that several times, but I'd probably dissolve in like the act of flowers on, by the end of that.

**Sean C. Davis:** Okay. Okay. [00:47:00] Yeah. I'm like, that's, I don't even know if it mattered. How many years you spread that out? It's 292 times. That's a lot. That's a lot of times. It's a lot of times. . Okay. Second to last one. I'd like to ask this question. Who do you nominate for us to have on the show next?

Who would you want to see on this show?

**Jen Looper:** Who would you have last time?

**Sean C. Davis:** Was it right? We, yeah, Ray den. .

**Jen Looper:** How about Frederick Harper, so cool. And he's so fun.

**Sean C. Davis:** Fantastic. we'll get Frederick on the show. Great. Okay. Number nine, last one. My, my second favorite question after what is the best sandwich is What is the worst mistake you've made as a developer?

Maybe we'll just say since if, if it's larger as you've, we talked a lot about teaching today, so maybe what's the worst mistake that you've made throughout your

**Jen Looper:** career? It's really stupid mistakes. In Massachusetts, there's a thing called the tax holiday, like a weekend in August.

You're not allowed to charge tax sales tax for [00:48:00] Massachusetts purchases. I was working at a, a. Excuse me.com and I turned it off for the weekend. Forgot to turn it on for a week.

**Sean C. Davis:** That's a good one.

**Jen Looper:** I like that one. Fortunately we didn't have that many Massachusetts people buying expensive stuff, but this is a stupid interview because it was manual process.

What a dumb thing to do. I took production. I busted a shopping cart. Pretty good. Same company. I was reckless

**Sean C. Davis:** I feel bad. Oh, that's

**Jen Looper:** good. My, the manager was really nice about it, but he's you can't go home now. You have to fix

**Sean C. Davis:** protection. Oh yeah. That's it's good. I like that question because a lot of people have, especially developers.

Some somebody has that story or when folks don't have that story yet it's. Don't be too afraid of acquiring the story someday because it's happened too long.

**Jen Looper:** Yeah. Yeah, for sure. Yeah. Test before,

**Sean C. Davis:** before pushing that's that is that's right. My so far, I think one of the the cringes answers I've got to that [00:49:00] is I had a friend who told me is contracting with a larger organization, but just like independent contractor and.

Accidentally deleted 30 days worth of data and didn't, there was no database backup for it. So just gone. Gone. Yeah. Yeah. So

**Jen Looper:** the database stuff is scary cuz like half the time those backups are just not there as

**Sean C. Davis:** long . Yeah. Yeah. And if, yeah, you got you've gotta be diligent about the backups about testing.

I've there's another one from an old colleague who had. that you could upload you could upload a CSV into this more antiquated CMS and and like store and it would store new data, but there was a checkbox that would say overwrite existing data. And it, and so like the implication or the assumption doing that is that, yeah.

I'm gonna update, I'm gonna match these rows and if they're different and that's what he thought. [00:50:00] And it meant actually like I'm wiping everything out and here's the new, yeah. And so it's like immediately took this. This whole website off fine. Cuz all it deleted all the data, they had, the data they lost on, maybe like a day's worth of changes, but it was still like that's a bad checkbox.

Yeah.

**Jen Looper:** That is a, that's a rough checkbox. Yeah, for sure. It's just like the question of when developers are asked to do infrastructure type stuff, Scary here. I'm trying to struggle for my age and 900 exam,

**Sean C. Davis:** oh, absolutely. Thank you. Thank you very much for being with us, Jen, this was so much fun.

**Jen Looper:** Yay. Thank you very much for having me. I really appreciate the time.

**Sean C. Davis:** absolutely. Now before we go, if folks wanna get in touch with you, I know we've had a couple more questions pop up, but we're gonna wrap it here. You can follow up separately. How can folks get in touch with you and anything else that you want to wanna plug in these last

**Jen Looper:** couple minutes?

Yeah, that's nice. Yeah, just reach out to me on Twitter. I'm at gem Luper on Twitter and you can always reach out to me on LinkedIn. And I usually hang out there and, interact with folks. It's a little [00:51:00] bit easier on LinkedIn than on Twitter. So yeah, I'm happy to chat anytime.

Just reach out.

**Sean C. Davis:** Fantastic. Thanks. And we'll be back here, same time in two weeks and until then enjoy your time and we'll see you next time. Thanks.
