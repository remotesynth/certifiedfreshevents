---
_build:
  list: false
  render: never
---

**Sean C. Davis:** [00:00:00] Welcome to code sandwich hour, where we take a meaty conversation with well known developers, sprinkling a little cheese and a few puns, and slept that between two metaphorical pieces of bread.

This week's special guest is Sue Charla. Sue spends for days as a developer community manager for Redis, but she has an extensive resume that extends far beyond that. And then it includes being an award-winning community manager, coder tech writer, and event MC. Welcome to the show SU thanks,

**Suze Shardlow:** Sean. How are you today?

**Sean C. Davis:** Good, good. It's great to have you here.

**Suze Shardlow:** It's good to be here. Thanks for inviting me.

**Sean C. Davis:** absolutely. Now I usually jump right into my favorite question of the day, but you already mentioned in the chat that it's super hot in the UK where you are. So I felt like if, can we start with the but we'll start with the small talk, the weather.

How, like what [00:01:00] is the actual temperature what's going on over there?

**Suze Shardlow:** Oh, I am British. And that is our favorite topic. Yeah, let's have a look. I have a handy, the monitor here in my office. It is 28 and a half degrees Celsius, which is 83 Fahrenheit in the office. So can I imagine

**Sean C. Davis:** that's oh, that's inside.

That's inside.

**Suze Shardlow:** Yeah. Inside. So outside. It's probably gonna be probably about the same actually one right at the top of the house. So all the heat's risen up. So it's probably about a low eighties, mid eighties outside.

**Sean C. Davis:** What's the is that normal, this type of, or time of year, what's what's the norm,

**Suze Shardlow:** we get a couple of days like this every year, so we don't get along stretches of this.

Thank God. Tomorrow's gonna be really hot. Tomorrow's gonna be more like 90. But yeah, we it's generally quite bearable but we do get the odd really hot day in this country in the summer. This is one of [00:02:00] those days.

**Sean C. Davis:** Ah, okay. And I was particularly interested in it cuz I'm I'm in Cincinnati, Ohio, and we're going through same sort of thing.

Now it tends to be about that hot most of the summer, but we were in the seventies a week or two ago and now it's yeah, I just checked today is 91. So 30, 33 Celsius. Wow. And it's rained a lot. So it's also 70% humidity. Yeah. It's brutal. that's

**Suze Shardlow:** the worst. That's the worst. Yeah, I can handle the cold or I can handle the heat as long as it's dry, cold or dry heat, but yeah, you throw in the humidity.

It's horrible. Horrible,

**Sean C. Davis:** Brutal, brutal. Yeah. Hopefully the, hopefully the questions don't keep you on the hot seat too much and we can we'll just, we'll breeze through right through this. This it'll be great. Be great, Joe. With that let's start with my favorite question, which is what is the best sandwich?

**Suze Shardlow:** The best sandwich is a sandwich that somebody else has made for you. I feel like it [00:03:00] food well, food in general always taste better when somebody else has made it for you. Doesn't it. But sandwich in particular, I dunno what it is about sandwich that somebody else has made. It always taste better. But for me personally, I I do eating meat.

It's not it for everybody, but yeah, something with like chicken or how, or if I'm going. To a sandwich bar. And they've got ingredients there that I wouldn't normally buy for myself. I do a bit of astronomy. And I like rocket as well. Nice peppery taste in there. I don't tend to have much in the way of condiments, so I rarely put butter or anything on my sandwiches, cuz I feel like there's enough in the ingredients.

So yeah, some people might feel like that's a bit dry, maybe a bit of Mayo. I don't know. But yeah, it's got to have some sort of meat or prawns or something like that in it. And as for the bread, I'm quite partial to a baguette type bread, something crusty or a roll. But I currently [00:04:00] live in the in the Midlands UK and there's this thing in Britain as you can figure out whereabouts in Britain.

Somebody comes from as to what they call a bread roll. So here in the Midlands we call it. Yeah, there's a whole map. If you go on the internet, you can see a map in it. It will tell you the words in each era, but here in the Midlands, we call it a cob. So yeah, I do like a cob or a a baguette. Yeah.

Interesting. You can tempt me with a sandwich. That's got meat. That's good enough for me.

**Sean C. Davis:** I like I love the answer that you're flexible. There's this whole like, framework and there are boundaries and the boundaries are, it's gotta have meat and somebody else has to make it.

And then it's probably a good sandwich. Yeah.

**Suze Shardlow:** Yeah. Okay. Definitely.

**Sean C. Davis:** I like that. And I can I 100% absolutely agree. You can take two sandwiches that are otherwise exactly identical or, yeah, like you said, food in any way. Identical. And if I made one, it's just, it's not the same. And I don't know why that is.[00:05:00]

**Suze Shardlow:** no, I think it's cuz you knew what went in it, there might be a secret ingredient and these other folks are putting in, but they don't tell you about, I don't know. Yeah. But that's just sprinkling of love. Maybe we to love ourselves more and then our S are taste better. But maybe it always tastes nicer than somebody else makes it.

**Sean C. Davis:** Maybe you found the secret, but does that I'm thinking, I'm trying to think does that translate to other parts of life? If you make the same, if you build the same website that somebody else builds, do you appreciate what you built more or do you like what the other person built more?

Not that's a realistic scenario, but what do you

**Suze Shardlow:** think? That is a good question. I think something like that, we've all got our own ways of doing things and we've all learned in a different way. And trying to read somebody else's code sometimes is like the worst thing I know, isn't it

**Sean C. Davis:** yes. Yeah.

Yes.

**Suze Shardlow:** And creating a website requires a lot of empathy and a lot of people forget that they don't put themselves in the shoes of whoever's using it. You generally [00:06:00] tend to create that's terrible, doesn't it? I think most web developers create the website for them. They don't think about other people.

They think of themselves as this as the typical user. So I think the answer to that question is no in that case. Interesting.

**Sean C. Davis:** Interesting. Yeah. I think I think you're right. And if you're tuned in and who those users are supposed to be, then you're yeah. And are coding empathetically then theoretically.

Yeah. You're yeah. You're serving the project as best you can, ideally.

**Suze Shardlow:** Yeah. But in reality, I don't think that's the case. Yeah. Interesting question though.

**Sean C. Davis:** All right. So with that let's take a quick step back and and then we'll jump. Into the show. This the format of the rest of the show will be going through a series of three segments each with its own purpose and a, usually a pun name, try to create some sort of pun.

And I, I generally try to create a theme that's catered to our guests. Since we have Sue here today I've been told that you enjoy running. And so our theme today is going to be just [00:07:00] loosely, call it running a race. See how that we'll see how that goes. For those of you who are listening into the recording, these shows are recorded, live on generally on the first and third Thursdays of each month at 1:00 PM Eastern time in the states, which is 5:00 PM GMT.

The live shows are then later syndicated on cfe.dev and YouTube as videos, and also available in audio format, wherever you get your podcasts. And so with that, I'm ready to get started. How about you Sue?

**Suze Shardlow:** Yeah, I hope bit scared, but I'm ready.

**Sean C. Davis:** Okay. No, this will be, it'll be great. We'll we'll keep it like nice and loose and open ended first.

And then we'll the hard questions will come in. We'll save those for the end, okay. So segment number one today, I'm going to call this starting block and I'm saying that because race begins with everyone on equal footing at their own starting blocks and where we go can change drastically based on our abilities and the decisions we make along the way.

And so in that vein, [00:08:00] let's start by exploring the early days of your career. Those the jobs the activities that kind of set the foundation for what you're doing now. And so I had read a bit that you began in marketing, but I'll just keep it open. So can you tell me yeah. Where did your career begin?

Who were you working for? What were

**Suze Shardlow:** you doing. Okay. So the nutshell version, cuz my career began a long time ago. Cuz I'm quite old, but so the UK education system didn't know what to do with girls that like coding and I would argue, they still don't know what to do with girls that like coding.

So there was never a pass passed me at school to I wasn't even aware that you could do it for a living, but I was always interested. So I got my first computer when I was probably about, I wanna say between the ages of five and seven years old and it was a BBC micro made in England. And yeah, I was coding very happily on that all the time.

And then there came a point where, I didn't take any further cuz didn't really [00:09:00] know what to do. But also the sort of the age of the home PC came in and we got this PC, I was like, oh, I dunno how to cope this. It's all like DUI, you can't see what's behind it. So I stopped coding then, and didn't really know what I wanted to do.

So like you say, I went into marketing and I took a business degree cuz that was the vice versa thing I could think of specialized in marketing. And then I had a range of marketing roles in different organizations. So at one point I worked for the Canadian government in economic development, trying to attract people to invest, to bring their businesses over to Canada.

I worked for an engineering company. I worked for a small it consultancy. And then I got a job with the police in London, in communications, in their tech department. So London's police service is the largest one in the UK. And at the time there are about 50,000 users and some of those. [00:10:00] Some of the systems, some of the it systems or hardware or software were being used by every single person in the service.

So for example, everybody had to log in to the network to do stuff like to get their email. And then there's subsets that I, of the service that only needed certain things. So quite a lot of people needed the radio every day. So when we had to update those things, I was there supporting those rollouts with communications, trying to persuade people the benefits and show them how to use these things and stuff.

Cuz I was still really interested in technology. So I was always adjacent to it, but never really knew how to get into it. And my bosses didn't know how to help me to get into it either. And then I got I went through a few different roles in the police cause one of the good things about the police is they do have a lot of different things that you can get involved in.

So I did that for four years and then I thought I wanna get closer to cause I think policings in the community. So I wanted to get closer to the community. So then I ended up managing [00:11:00] logistics and stuff in the police stations, which was really good being right. I'm a, not myself being on the frontline, but working with frontline officers and stuff.

So that was a really different thing to do. And it was more local so that it was very centralized. This was more actually in the local police stations. Okay. And then I thought, I still wanted to do tech. I still wanted to do coding and I didn't really know how to do it. So I started doing some research and around that time was when the boot camps were really becoming more well known.

And I realized I could go to a boot camp and learn how to code. I really knew how to carry a little bit from when I was a kid, but learn about modern software development. And at the same time, I was hearing rumblings that they might want to make some layoffs in my team. So I discussed it with my boss.

I took a career break to do the boot camp. and then came back and all the timing. It was one of those ones where everything just fell perfectly into place. So when I came back, they said, yes, we are gonna make the layoffs. And if you want to go, [00:12:00] then you can go. And because I had 12 years of service at that point, the severance was really good.

So I went and did that. And then I had a few sort of things going on in my personal life. I had a bereavement and things like that. So it was actually quite timely. I had some time to just chill out and figure out what I wanted to do. And quite a lot of good options came my way. So I didn't go straight into working full time for anyone.

I just did a bit of freelance work and then the opportunity at Redis came up and they had heard about me and they asked me if I wanted to apply for the role of development, community manager at Redis. And I thought, yeah, actually that's quite a good combo of what I've previously done. The marketing.

Okay.

**Sean C. Davis:** So I'm interrupting at this point because what happened was I got so distracted by all the possible combinations of sandwiches that Sue threw out that I had to stop the stream and go get a sandwich. Not really. We had some technical difficulties, but sandwiches make everything better. Okay. Let's keep going. Okay. And with that, it looks like SU [00:13:00] is back. So I'm going to invite her back on stage. Welcome back, SU

**Suze Shardlow:** Sean. I'm so sorry, Brian. I managed to get a message to Brian, but yeah, it is right. The computer decided it was gonna do a little install in the middle of what we were doing without asking me.

So I was as surprise as you sorry

**Sean C. Davis:** about that was and I was, so I was telling the audience who was hung around that. We were talking about this exact event right before we started, you were like, oh, that's happened to colleagues. It hasn't happened to me yet. It could happen. And then yep.

Couple minutes into it. And here we are.

**Suze Shardlow:** yeah, I'm so sorry. I can stay a little bit longer at the end. If don't worry about having to stop on the air, if you can stay on this. So can I, yeah, no

**Sean C. Davis:** worries. Fantastic. Okay. Yeah, we'll get the, we'll get those really hard. Or, I don't know another I had to one other version that I shared of this story, which was like, maybe you actually needed to go, you started talking about sandwiches and was like, actually I need to get one immediately.

I'm gonna sign off for a few minutes. [00:14:00] Another theory I had was that yeah, maybe we just need those hard questions are coming at the end. So if we took a quick break, we might not get to those, but

**Suze Shardlow:** well, you can combine the two, cuz it is actually around dinner time here in the UK. So that is a good excuse.

Isn't it just going get sandwich and be like, oh, now I can get out of answering the odd questions. So

**Sean C. Davis:** yeah. Win, win, win for sure. Okay. Yeah, let's let's jump back in and we'll wrap up that first segment. And one thing I was really curious about is that we, I, as I look at my, my career, which has didn't, it didn't start in tech and it changed it evolved and have had other guests and friends and colleagues who have taken similar path where it didn't necessarily start with tech.

And I think that yet when I look back, I can see that. There is this clear path of my interest that kind of, moves, moves through every job. But specifically, one thing that I I haven't really run across [00:15:00] someone who has spent a por a good portion of their career, where they ended up in tech, but that a big part of it was public service, and specifically for the police.

So I, I find that super interesting. And one question that I had there was, so you said there were 50,000 users for the met in general. And I'm curious that like what was the balance between how many of those folks are actual officers and like, how big is the folks who aren't out there in the field?

**Suze Shardlow:** Okay. So at the time there were about 30,000 police officers and 20,000 police staff, or as you might call them civilian. But some of those police staff are also on the front line because we have police community support officers and they don't have the powers of arrest, but they do have other things that they can do.

So they go out and assist the officers. So they're very much operational as well. And they use the radios and they use a lot of that [00:16:00] equipment. So yeah, it was at least 30,000. And then I think we had about 14,000 police community support officers. And then the other 6,000 people were doing all the other things, like the job that I was doing or working in forensics or, all of that good stuff, accounting, HR, all of those things.

Yeah, at least 30,000 offices.

**Sean C. Davis:** Okay. Wow. Really interesting. Okay. I've got a few more questions, but I feel like that this is probably a good way, a good time to segment into our segue into our second segment, which I'm calling. The stride and I'm calling it the stride because usually in the race, if it's a, if it's a race that's going okay, eventually you'll hit that stride.

And so in, in our careers as well, we hit that point where we feel like we're doing what we should be doing. Maybe we're not there yet. Maybe we know we're gonna, we're gonna still have some twists and turns, but feeling, feeling good at the moment. And I want to talk a little bit about what you're [00:17:00] doing at Redis today, but first let's with the work at the met still in, in mind how would you say that the, your time helping?

So you're like embedded in communities there. What would you say you've pulled from that experience that you can apply to? Work that you're doing with tech communities today?

**Suze Shardlow:** I well, one of the main things that I realized really early on, like when I was studying marketing, is that your audience is key.

So if you are ever going to be doing any form of communication, you need to think about the audience, where are they? What do they respond to? How do they communicate? Because that gives you a clear to how they communicate with them. What do they care about? What don't they care about? You think about these offices that I was trying to tell about this technology.

These things were a tiny little thing in the whole kind of big mix of things they have to remember. Cuz when you are walking down the street, you don't know what you are gonna meet. [00:18:00] You need to know your grounds for stopping somebody. So you need to be able to remember all this stuff.

And if I'm coming and telling you, you've got pressive different button on your radio, like why would I even care about that? Why don't I, so you're really fighting for for priority, yeah. Knowing your audience is something that I learned really early on in my career and especially in the police, because the those 30,000 officers, it, they, it's just a massive group and it's really different cuz you can join the police when you're 18 and you can leave when you're 48.

So you have people that were quite old who weren't, they weren't used to using technology in the same way or the same type of technology as the 18 year olds. And so yeah the group was really different. I also was leading the employee resource group for senior women in the police as well when I was there.

Yeah. And it's, I suppose it's funny and not funny that I've gone from a really male dominated industry police to another really male dominated industry. But [00:19:00] yeah, seeing the struggles that women were facing in the police, like women face same struggles in. As well. So yeah, there were a lot of things there that, were similar.

But yeah, mostly it was about deciding how I'm gonna get my message across and out there and helping people to help others as well. I used to try and find champions in different units to spread the word about how to do things or why it's important to do these things because London's made up of 33 burs, the met polices 32 of those, the 33rd one is the city of London and they have their own force just for that borough.

Interesting. The financial, yeah. So that's the financial aid. So they do it. Their work is quite interesting cuz they work on a lot of fraud and stuff. So the types of crimes they're dealing with can be quite different. So yeah, if you think about the geography of London's one of the biggest cities in the world, or at least in Europe, especially in terms of [00:20:00] population and also the the footprint of it is quite big. So I can't go out to, and this is before the days where we were really doing virtual stuff, I can't go out and actually meet people face to face and give them the messages that I need them to know. So I need to liaise with champions around the place and stuff like that.

Okay. Yeah. Yeah. And that is something that we like to do in tech. Isn't it, we like to help people to help themselves and help others.

**Sean C. Davis:** Yeah. Interesting. Interesting. Okay. So you mentioned working in a in a women's group at the met as well, and then you've since been leading the, what is it?

The ladies of code group in London. Yeah. Can I suppose first, maybe just, can you give us a little bit of an intro into that group? What's the format? What are your goals and and,

**Suze Shardlow:** and all of that. Okay. So I first got involved with them before the pandemic. In fact, it was when I was trying to figure out how to get into [00:21:00] development.

And I realized that you could go to these meetup groups and learn things. So I started going to the meetup. So that's how I first came across the group. And then a few years later they needed another organizer. So I got involved that way. But what you often find when you go to meetups is even though they're, meetups, don't say they're just for men, when you go there, it is mostly men.

So we wanted to create a safe space for people that aren't men to come and learn. And, if you wanna practice speaking, then give a talk and then you're not gonna get man's blamed by anybody, yeah. You're not gonna get that. What about this? Actually type stuff. So we just provide a safe space and then obviously so we've got, how many members have we got now?

Nearly 4,000 members now and it, wow. Okay. Yeah, it grew quite a lot over the pandemic because we weren't restricted to London. So before that we were only doing in personal events, like most groups were and so it was really people who could get into London. So people that were working or living in London[00:22:00] or people that lived near central London and could just come in of an evening.

But then in the pandemic, we were faced with two choices, which was either stop everything or go online. So he decided to try online and it was a bit scary. I think anyone who's running online for the first time in the pandemic can test that it was a bit scary the first time. But yeah. Then it became, it became quite easy, cuz we just learned together and just figured it out and stuff like that.

I'm quite proud of fact actually that in the early days of the pandemic, so in the first year or so we did deliver quite a lot of events and one of them is still going now. We put together some series. So one of the series, the ones that's still going now is called get on with it because when the pandemic first came along and we were all locked down, everybody was saying, oh, you've got so much more time on your hands.

Now, when you get a job after the pandemic, they're gonna ask you, what did you do? And how did you improve yourself in the pandemic? But actually there were a lot of people that had less [00:23:00] time on their hands in lockdown because say for example, they had caring responsibilities. So say they, for example, had a child that was disabled and they might have been using respite service.

normally, and then lockdown came along and all of these places were shut. So then they've got to do their full time job, and they've got to look after their kids, or even if you know your children aren't disabled. But you normally would send them to school or somewhere else during the day, and then you'd get on with your, you couldn't do that.

So people were finding that there were things piling up. And so this was a bit of time that we carved out and said, look, just come to this session on the zoom. There's no judgment or anything, and it can be any, it doesn't have to be tech related, but some people did decide they wanted to create apps that they've been putting off for ages.

And some people just they wanted to set sort out Lego bricks with their kids, somebody put up a shelf, that kind of thing. And so the point was to just give a bit of mutual support, but also if you were finding that you were lacking motivation to get started, just the act of saying out loud what [00:24:00] you are gonna do.

Kind of galvanizes that goal and makes you more likely to to achieve it. So that was one of the series. Another series that we did was get into, so they all started with, get it started with get on with it and then we just get all of okay. Get into was where we interviewed people. I bit like this far side chat about their role, because people think about tech, from the outside, looking in it's all a bit mysterious, isn't it?

And you think, okay. I'm quite interested in tech, but I dunno if I can code and I don't really know what else is in tech. So we picked people with different roles and we interviewed them about their jobs. So we had to get into work development was the first one, because that is the way that a lot of people get into tech.

But again, it's, still mysterious. So I deliberately chose somebody who had self taught because not everybody has the means to go to for boot camp. Or something like that. And we had get into engineering management, if you wanna level up or you're getting into tech and you think, okay, what's beyond being a developer, how what's the management [00:25:00] track look like get into product management, get into data engineering.

We had all these different things. And then we did a lean coffee series as well. That's where you democratically pick topics to talk about. And then you have a limited amount of time to talk about them, to have a discussion, like four minute discussion. That was quite good. Yeah. That was quite fun.

And we had another one, I can't remember where that was, but the one that stood the test of time was our Sunday co-working session. So that's still, I can't believe that it's still going on now, like more than two years later, but yeah, there's been people that have been coming since the beginning and for them, that's their, the thing where they come and get things done.

So I'm really proud of that. And just over the pandemic, I think I've delivered. At least a hundred online events, at

**Sean C. Davis:** least. Whoa. That's amazing. So that's more than one a week or about one a week?

**Suze Shardlow:** Since April, so that was two years ago, so yeah. So yeah. It would be, yeah. And over 300 hours altogether.

So [00:26:00] quite a lot of time chatting. Yeah. Started talking into my camera lens.

**Sean C. Davis:** yeah. That's a huge accomplishment, but I think that it's yeah, the maybe even the bigger one that you said I, there were so many of these virtual events that popped up and it, they were great. Yeah.

They like it unlocked the barriers that in person events have, which are there, there are several, even for me, In Cincinnati it's it's a small city we've we have maybe two and a half million in the surrounding area, but it's funny, like if you hold an event downtown, all of a sudden we cut this we cut our attendance to almost nothing because people don't, they don't wanna park downtown.

They don't wanna, they don't wanna commute or they've gotta get their kids or, whate whatever it might be. And so at a virtual events, it's yeah, okay. We can do this. And they just exploded. But what you mentioned was that if you have some that are still going today, I'm like, yes.

[00:27:00] If you are able to continue to do events, post pandemic successfully, that are in a similar format that during the pandemic, it's like you clearly struck a chord with that one. That's that's working well.

**Suze Shardlow:** Yeah. Yeah, it is nice. But but it means a lots of people and it's really helped.

**Sean C. Davis:** Yes, absolutely. Okay. I actually, I just thought of two questions. One was I'll ask my, I'll ask the broader one first, which is, you mentioned that there were similar similar challenges or struggles for women in the police, as well as in tech. Can you talk a little bit about that?

What are some of the, what are some of those struggles that overlap,

**Suze Shardlow:** Getting promoted? As you go up the police, people or women in leadership positions, as you go up tech, few women in leadership positions I guess being listened to and heard just the sexism, the way you get [00:28:00] treated at work, things that people find acceptable to say to you generally.

Just the life of being somebody that isn't a man basically just dealing with lo of unchecked privilege as well. So I joined a bar and I sat down with a bar commander who's in charge of the whole borough. And because I was the senior person in charge of logistics, he was like, oh, I'm so glad you're on my senior leadership team.

Cuz not only are you a woman, you're also from an ethnic minority. I was like, oh, that's good. So I'm ticking two boxes. I was like, do you realize like what you just said? And yeah. And he got promoted, so that's all good. Isn't it? Yeah, it's just that thing. I think it is. If you're a woman, anywhere in a male dominated industry is hot, it's hard

**Sean C. Davis:** and it's gonna and the struggles are gonna be similar.

Yeah. So what is yeah. Do you do any any events or meetups that are focused specifically on some of those topics for. For your meetups in London,

**Suze Shardlow:** Just in terms of [00:29:00] like how to get ahead and get how to get yourself. Oh, that was the other get, get heard. Okay. So it was a, it was a series of public speaking workshops because we don't see enough people that aren't men on the conference stages.

We don't see enough people that aren't white, that aren't CIS, that aren't able bodied. So it was really to help people to formulate an idea for a talk. And then that culminated, it was a four week workshop. And that culminated in a showcase session where the people who had gone all the way through, because, inevitably you're gonna get folks that come for a couple and then they have to drop out.

So the people that have made it all their way to the end gave a talk at the end and we recorded it for them and we did a nice little event and, just give them an artifact that they can use later. If they wanna, it's, it was always easier to get more speaking gigs. If you've done one and you can show people what you've done, isn't it.

Things like that. But I, I to talk to people about what they do rather than what it's like [00:30:00] to be a woman personally, because I don't really wanna center it around oh, you are a woman in tech. And somebody always asks about imposter syndrome, which is fine. If you feel like you're struggling with imposter in your own then that's something.

But I feel like it's, you don't hear a lot of men talking about imposter syndrome. It seems to be like a thing that's labeled onto women. And I personally, I don't feel like I'm an imposter. I feel like other people have tried to make me feel like I one. So I think if you look at why you feel like you've got imposter syndrome you might finally answer that.

Yeah. I like to just talk about the work mostly. And give people a space to talk about what they wanna do and how they can get there from people that have done it. Because I think that, there's a lot of really well meaning men that tell you how they did it, but it's not the same for us.

It's not the same. Yeah. Yeah. We can't follow your blueprint. It's yeah. We can't do the exact same steps that you did and get the same results. So yeah. It's

**Sean C. Davis:** [00:31:00] yeah. Oh yeah. That is yes. Very interesting. I love that focus focusing on the work and and those techniques. Okay, so the other question I had was, do you, okay, so this is like events you've got your branded names, but the group is ladies of code.

Do you still have, do you still have men who show up to the meetings?

**Suze Shardlow:** Yeah. Yeah. And in fact so we are still only virtual. And we do have men that come, which is fine. We welcome everybody. We don't exclude anybody. But when we were in person, before I joined the group, they didn't include men.

So if there were men in there, they would ask them to leave. And they did have quite a few occasions where men would turn up and they like didn't understand why they can come. And it's look, you can go to any meetup you want. we're telling you, this is one meetup. That's just for women. It's it's one meetup in the hole in London that they're telling you, you can't come to it's like, what, why are you insisting that you need to come?

It's you are welcome everywhere. It's [00:32:00] it was just really odd. It's it that's the clues in the name. I personally wouldn't turn anybody away, but that's what they decided to do. And it was just funny that people felt entitled to come, even though the space wasn't there designed for them.

And it wasn't, it was supposed to be a safe space for women. But yeah. We do welcome anybody and we do have some good allies that come to our group now. But I think that if somebody's saying that this is who their group is for, then you need to respect that even though you think that they shouldn't be excluding, you just think about, are you excluded anywhere else?

No. Are they excluded everywhere else? Yeah, they probably are. So just give them their space and let have it.

**Sean C. Davis:** Yeah. Okay. So the reason I ask that is because I was so pre pandemic, I was an instructor for a local chapter called girl development and helping out cuz they were like, we're trying to get more more women instructors, but it's like [00:33:00] the community, especially of women developers in my town is like, it's super small.

So part of that was like we're gonna build this up and eventually we'll have no. Male instructors. And that's that's the goal worked myself out of a job, but I, and so I only ended up teaching a few courses there, but yeah, it was always like there's one dude in the class.

And , there are plenty of other resources that you have locally. So yeah, I, I can relate, but I am curious what, where was the shift? So you had this really hard line of actually we're kicking you out. And I think that's that's really honorable. I really like that. But what changed it?

So why that shift

**Suze Shardlow:** for me personally, because I wanted them to see what it was like to be in the minority somewhere. Okay. And to hear about what we have to say and things like that, but if anybody was I don't remember this ever happening, but if anyone was gonna start mandating, then I would've stopped that straight away and be like, no, that's not why we're here.

But yeah. And also yeah. To so that, if there was anyone there who genuinely wanted to be an [00:34:00] ally, then they can see what it's about. But yeah, I think as well, it's quite funny because some men are quite uncomfortable going into spaces there they're in the minority and it's how do you think we feel like , it's really weird.

It's have you not thought about this before? But yeah, I think it, it helps people to check their privilege a bit if they, if you invite them into these spaces, other groups don't do that. And that's absolutely fine. I can totally understand why you wouldn't do it. But also I guess a part of me didn't want to have that added level of confrontation when I'm trying to just run an event for people.

And get that done in a really good way. Like that is something I just don't need. Yeah. It's unfortunately, that, that is, the reality of the situation. You're gonna stop throw people out, then you've got another piece of work that you don't really need. Yeah.

**Sean C. Davis:** Yeah. That's that, that makes a lot of sense.

You wanna keep it flowing, but absolutely gonna shut [00:35:00] down the mansplaining as soon as it happens, but that if you can do that, then you also create another teaching opportunity, which is very, that's very cool. Very powerful. Yeah. Okay. So I do wanna be mindful of time and get this at least most of this last session in, but we haven't really given any time to Redis.

So why don't we take a couple minutes and let's talk about what you're doing there. So what do you do as community manager for Redis.

**Suze Shardlow:** So I currently am helping to produce a lot of content and also formulating ideas thought of that. So we are doing a lot of live streaming at the moment.

I like, as you can probably tell a big fan of the series. So we're putting together some ideas for series that we could do for the live streams. I like to be quite strategic. So I don't personally, I don't really wanna go on there and do just a random live stream. I wanna have a reason so examples of what I have done.

So I only been there well, less than a year, but some things that I did or when I've joined live stream wise was we've got this [00:36:00] thing called red university and there's eight or nine courses that you can take on there. Beginning from IU 1 0 1. Which is introduction to Redis data structures, and then we've got other courses.

So your Python developer is one for you. Your Java developer is one for you. So I decided, cuz I hadn't used Redis before I thought I'll do, are you 1 0 1? And I'd like seeing that loads of developer relations people have been learning in public. So I thought, oh yeah, I'll do that. I'll learn in public. So being one of my colleagues, Justin went through that course in public on the last year.

So that was a little bit of a that was a bit scary, but you, I think you should do something that scares you often. And then I did hack home Fest last year as well, which is the first for Redis. So red hadn't really got involved with that before. So I organized TOF and worked with people around the business to identify some repo, got some really good contributions from the community there as well, which is really pleasing and quite surprising actually.

And it, it was really good for us because it was a Testament to how [00:37:00] well we'd written our read MES and set up our repost that folks could just jump in and make these pool requests that absolutely worked. And they added a lot of value. So really pleased with that. And as part of that, as well, had some fireside chats with the documentation team to demystify technical writing, cuz documentation's one of the ways that people often say that you can dip your toes into open source contributing.

But a lot of people really don't know how to get started with it. And some people might be thinking, I really wanna be a technical writer, but I dunno, lots involved. So at the time we had three technical writers, we've now got five, but we had three. So I did five side chats with them to go into their background.

And it was really cool cause they've all got different backgrounds as well. We're hoping to do some more similar things like that. I've also just launched an ambassador program called reticent insiders where I'm currently looking for folks that are passionate about Redis. I may want to talk and write about it.

And we can help them to hone their talks and their blogs and stuff. That's why I'm looking for some [00:38:00] people that are really passionate about the tech to come join us as volunteer ambassadors. And also always looking for a collab, love a collab. So if anybody else working say in developer relations for something that goes nicely with Redis, then maybe we can do a little collab together, hit me up.

Love that.

**Sean C. Davis:** So many things you've got going on. I so heard you say that you really like the, you like the series, whether it's livestream or not that you like to put things into a series. I can relate love doing that. I have. Backed off of doing that sort of thing, including the learning in public piece recently, I'm like, oh yeah, I can do this.

I can do this, all these ideas, but I, for me, I've started them and then they fizzle out. And so I'm curious, how do you ensure that they don't, that they maintain they like that? Yeah. That they maintain a focus that they continue to be a priority or [00:39:00] is it, am I thinking about this wrong?

Is it okay that some fizzle out

**Suze Shardlow:** that is a really good question. And Like I said, I like to be quite strategic. And I think some people that work with me are like, oh, we go to seas and she'll just say, yeah, you gotta plan it all out first before we start, I say, yeah, you do have to plan it out a bit. I don't wanna be like the the fun sponge, but, let's think about what we are doing here and have a framework to it.

And for hackfest I actually wrote out like a big strategic plan of how I was gonna do it, because I thought we can't really just try open the load of repos and just see what comes back. We need to actually think about this. And I think that if you're gonna do a series, the thing that I always say to people, if they're gonna start something and a lot of the time people say we're gonna do a series of this or that, and we're gonna do it weekly.

I always say to them like, okay, plan out the first. And then see what that looks like, because if you can't think of six things you're gonna do over the next six weeks, then how are [00:40:00] you gonna continue beyond that? Or if you can't think of six, think of four and then just do it as a limited series, because that's fine.

And then, it's always good to end on a high isn't it? So then you've got to the end and you're like, okay. That was a nice self-contained piece of work. And then there's no pressure to keep going on for years is there and keep thinking of those ideas. So I personally would say, look at the bigger picture, what are you trying to achieve?

And what realistically, have you got material wise that you can deliver and then chop that up and see how many weeks you can get out of it at the beginning. You don't have to have the whole plan really laid out because a strategic plan is just an overview. Isn't it? It's not the detail, but at least if you had.

An idea of what realistically you can do that you'll know how long you can go on for, but I've spoken to so many people over the years, they wanna start something, which is great. And I think most people are like that. They wanna start something, but they don't know how to do the [00:41:00] middle and the end. And just at least think about the middle, even if you haven't thought about the end.

Because like you say, you can fizzle out and then like it's not fun anymore. And it feels like a chore and it's oh, whereas, you could do six and you'll probably learn quite a lot. So like one, one symptom of this whole this whole approach that I have though, is that I'm a perfectionist.

So I don't like to start something unless I know how it's gonna look. And like I said to you before we started the show today, I've been thinking about making a podcast, but my perfectionism is a little bit stopping me from that. But I think once and also the learning curve. When I took all my events online, that was quite hard.

But we did it and now I'm quite comfortable with running an event online. And once I did my first podcast, it'll be fine because then Anna has to do it and I'll be like, what was all the fuss about? But I think what I wanna do is do like a limited series. So I'll do six or 10 parts. And over those six weeks or those 10 episodes, I'm gonna learn so much about what has worked or what hasn't worked.

And then I could [00:42:00] start a new series and it would be different. And it's fine if you wanna do that within your series and change it as you go along, but there's also some validity and say that was the end of that project. And now I'm gonna do it totally different change the format, completely different topic.

And this is how I'm gonna run next one based on what I learned the first time. I love that.

**Sean C. Davis:** Yeah, the, I have since shifted to two more project based work. I think I've done two things that have been a game changer for me that where I'm not like here are so many things that I'm doing and I'm not getting anything done.

And one was that I shifted to more of this project based work. Like I'm you had said you don't need to know the end and I think that's fine if you like, that's part of the design of the thing. I'm trying to do projects now where I always have a, just a general idea of what the end is. And I couple that practice with doing one thing on the side at a time per week.

So like I'm gonna work in weeks [00:43:00] and only gonna do one thing. And it's been a total game changer for me. Of course. It's not like it's not totally realistic this week. I was working on three different projects because it's like stuff life happens. But but anyways I really that framework project based and yeah, having a plan.

Going after a series that, in that limited scope, love that. Okay. With that. Yeah. Let's transition to our last segment of the day, which we're going to call the last lap or the final stretch, the last leg. It's the last portion of the race where you might not have much left in the tank, but we're gonna, we're gonna keep going.

And so hopefully, hopefully this isn't as challenging as running a 5k or a 10 K, but I'll let you be the judge when we're done. , this is gonna be a series of, let's see how many I have. I have nine questions there are some multiple there are multiple yeah.

Questions that are also multiple questions is the way I should say it. Okay. Okay. So they should be fairly quick prompting, mostly [00:44:00] short answers and feel free to pass on any of them. All right. you ready? Yeah. Okay. All right. We'll start. Let's start with local London question first. Number one, what is your favorite restaurant in London?

**Suze Shardlow:** Ah, that is a really hard one because I have not been to a restaurant in two years,

**Sean C. Davis:** right? Yeah.

Yeah.

**Suze Shardlow:** True. I currently live in Nottingham, so I moved out of London in January and my favorite restaurant in Notting is called Lumi trial to French restaurant, which luckily survived the pandemic.

So that is what I'm gonna say. London, I cannot remember where I used to go. Yeah. But yeah, no, the Lumus child is my go-to in naughty and I highly recommend you in the area.

**Sean C. Davis:** Are you somebody who's like same dish every time cuz it's perfect. Or are you're like, I like the restaurant, I'm trying lots of different

**Suze Shardlow:** things [00:45:00] I would try.

But if it's something that I know, I don't like, I'm not gonna have it. So like I know that I've never liked mushrooms and I probably never will. Cuz I've done that thing of, they use a lot of mushrooms in French cuisine, but I've done that thing of, they say try something seven times.

You'll like it that's never gonna work for me. You wear mushrooms, but yeah, I will definitely try different things there cuz I like most of the stuff on the menu. Yeah. Okay.

**Sean C. Davis:** All right. Like that number two. We, this is on the topic of ladies of code. We ended up getting pretty deep into this, but I'll pull this one out, which is if there's one piece of advice that you had to give women who are new to the industry, what would that be?

**Suze Shardlow:** That. Oh, wow. That is a good question. I don't know. [00:46:00] There's so many things. What did I wish I knew when I joined this industry? Oh, I guess don't feel pressured. Yeah. I dunno why I didn't think of that earlier. There's so much pressure on people, especially if you look at certain hashtags on Twitter, people say, oh, you need to blog about this.

You need to do, you need to get to public speaking. It's if it's not your bag, then don't feel pressured to do it. And so for some people, the thought of doing a talk is worse than dying. And I've seen people being forced to stand up and their bodies are literally shaking. So don't feel any pressure to do these things.

You will get a job if you never do a talk and you never write a blog post in your entire life, trust me, you'll still get a job. You'll still be employed. You can still get paid a lot of money without doing that stuff. If you don't feel like it's your bag, don't listen to all those people on Twitter, which just has a small subset of people in tech at the end of the day.

Isn't it? It is good for your career to do this stuff, but[00:47:00] I feel like there's a lot of pressure on people in tech to do this. Yeah. Don't feel pressured cuz there's so much else you've got to worry about cuz you've still got those questions. Like which language should I learn? Which framework should I learn?

So adding all of that into the mix is just needless worry, isn't it?

**Sean C. Davis:** Yes, absolutely. And I've found that I've con I've gone through that. Me personally as well, and I'm. I have to keep reminding myself of yeah, I don't have to do everything to see on Twitter. That what is really important, I think is meeting a lot of people or meet meeting people that can also help your career.

And like you say, you don't have to do that if you're, or you don't have to give a speech to, or talk at a conference to meet people, you can, there are ways to meet people that are comfortable probably for most people, hopefully.

**Suze Shardlow:** Yeah.

**Sean C. Davis:** Yeah. Okay. Number three. So our theme today was running racing.

What's the most rewarding [00:48:00] run that you've been on.

**Suze Shardlow:** So I know this one I know the answer to this one and I re I remembered it through this interview. So thanks for reminding me. So it was the first 10 K erase that I ever did, and it was just before y'all got locked down for the pandemic.

So it was in San Diego. In the in the home of where they admitted the triathlon. So yeah, I entered this 10 K race and I thought I could do it cuz I hadn't run 10 K before, but it was still it's a race, isn't it? And you always think what happens if I don't know, because I got asthma, what happens if I start wheezing and I can't stop or, what happens if my knee hurts part way through what happens if my foot hurts or whatever and I can't finish.

But yeah, that was the most rewarding race that I'd ever done. And so when you said about the starting blocks and then the stride and the and the finish the last, yeah, I did do a sprint finish, but I think a lot of people do it really reminded me and I did write that one up as a blog [00:49:00] post within a couple of days of doing it.

Cause I knew that I wouldn't remember. How I felt, but yeah, that was really emotional. When I crossed that line, I was like, wow, I actually managed to do that. And like I said, at the beginning, I'm quite old. So I came quite high in my age category as well. And I didn't do too badly overall. I can't remember where I placed overall, but I definitely was in the in the faster thing.

And I did it in under an hour. I'm really pleased with that. That's yeah, I think I came top five with my age category oh, wow. Okay. Yeah. Yeah. That was the most rewarding race of that because the, I never thought I'd run 10 K. And when I started running, I never thought I'd run a mile then people thought I'd run 5k.

Yeah. But the thing with running is it is really quick to get better at, and then you just become a bit addicted. Yeah, that was a massive achievement for me, cuz I was never that sporty when I was a kid, I was too busy playing my computer. So

**Sean C. Davis:** And that's great. And I didn't know that they, their triathlon was invented in San Diego.

That's a [00:50:00] fun, fun fact there.

**Suze Shardlow:** Yeah. Yeah. It's this place called I think was it Fiesta island? Somebody's gonna correct me in the chat. I know the Simon used to live in San Diego. He was watching. So he'll tell me in the chat, but yeah, it's in my blog post, I think it's Fiesta island, but yeah, that's where the triathlon was invented.

**Sean C. Davis:** Interesting. Interesting. Okay. Number four, a segue, if you finish a race, you get a you get an award and a I feel like a big part of your resume consists of, oh, and they're your triathlon awards. Great. But also in the text space, like a big part of your resume are the awards you've won.

And I'm really curious to get your opinion because I've ha I've heard. polarizing views on awards that the, on the positive end they're they can be a good self promotion. They can, there can be an opportunity for marketing that can be for individuals or organizations. They can also just be like boosting self confidence, but I've also heard on the negative end, [00:51:00] especially if you have to apply for 'em, like they can be distracting.

It can take time. Maybe the whole like marketing thing doesn't always work out. And so I don't have a strong opinion either way, but I'm curious, what's your take?

**Suze Shardlow:** I was nominated for mine and I think I was actually quite surprised that I was nominated and I was really surprised that I won.

Because I think that we don't necessarily look at our own achievement as some, as things that are necessarily great. You just think, oh, that's something that I did. And to me it was easy, it was just part of my job or part of my hobby or whatever. And so yeah, from that point of view, I was quite humbled and shocked and I do put it in my bio, but I'm multi award winning.

I do feel a little bit embarrassed about doing that, but the reason why somebody gave me an award was because they wanted me to tell people about it and they wanted me to be recognized. So [00:52:00] I feel like if I've got this thing, then why not talk about it? I have been in organizations where they've got this whole factory of nominating people, or especially if they're sponsoring the award or nominating the company or the projects for awards.

And I think that. The thing that you've got to remember about any award is that it was only the people that were entered at the time that are gonna be considered. So for example, there are gonna be like really talented chefs in the world, but there's only gonna be the ones on the TV that get recognized.

Like you go, you look at master chef, there are amateur chefs on there that are really good. And then they get famous. If they've never gone on master chef, they never would've got famous. So they only recognize that people that happen to be there at the time and happen to be nominated. So I'm sure there are loads of people that are done really great things.

Same as I have that have never been nominated and so never get recognized. So I think you've got to remember [00:53:00] that as well. So yeah, it's a tricky one, but I do agree with you that there are some awards that are given, especially to companies which are just, I know somebody who's company they just pay to get one.

They paid like $5,000 or something. And then they've got one. There are other awards where they say you've been nominated and the award ceremony is coming up and you've gotta pay 500 pounds for ticket to come and attend. And I think right, if I don't pay 500 pounds, then you're not gonna gimme the award.

Are you? Because you're not gonna say, oh, Sue's won the award, but she can't be here tonight. It's not very good for the aesthetics. Yeah. Yeah. Yeah, there's a lot of stuff around it, but for me personally, it was just really nice to know that somebody valued my work enough to take the time to nominate me.

**Sean C. Davis:** Okay. That's great. I love that. And I like how you distinguish between the personal award and. And the company and being nominated [00:54:00] versus applying or paying, I think that's that's a great way to, to draw that line. Okay. Number five. Let's throw in another local question here. So you can do London do non ham.

What what, whatever you prefer. But I wrote this in the context of London, because as you mentioned earlier, it's one of the biggest cities in the world, or at least in Europe. So tons of people also tons of tourists. So I'm curious, let's put restaurants and food aside for a minute. What is, what's the hidden gem?

Like what's the thing that tourists don't know about place or activity or whatever that is amazing.

**Suze Shardlow:** That is a really good question. Okay.

I feel like I wanna talk about the green spaces. So even if you're in central London, you can find these little squares, they're just gardens and it's so tranquil and it doesn't feel like you're in central London and you have similar in Nottingham as well. But one of the [00:55:00] things that I think a lot of people don't know about in Nottingham is you've got this place called the arboreum and they've got hundreds of different species of trees and they've got a nice little pond.

And I went there the other day and the ducks were there with their duckling. So those duck things are fast. Like they are tiny, but it's like somebody well off and they've but I think, I feel like that is one of NIOS best kept secrets, cuz it's just tucked away and it's so quiet. And the really great thing about noting is it's really easy to walk around.

It's so compact. So it is like the fifth city in England, but it's really easy to get around. For me it's about getting away from the hustle and bustle. And finding those little Oasis of tranquility.

**Sean C. Davis:** Even in the little squares in the London area, you're you don't you're not, you feel removed from the traffic and the noise at least temporarily.

**Suze Shardlow:** Yeah. Cuz there's I guess, because in London, in those squares, the buildings around them are so tall. So they're these Georgian really [00:56:00] tall. They used to be houses and then normally they've got companies in them and they're like five stories, height, so they block out the noise. Yeah. Yeah.

**Sean C. Davis:** Interesting. Okay. Love that. I love that answer. Okay. Number six. So I read somewhere that you are a baker or have been, or just en enjoy it as a hobby. I caught onto that cuz I've also done a fair amount, mostly in the pandemic, but still trying to keep a little bit here and there.

Okay. So we can maybe I'll ask this as a two parter and you can, maybe the answers are the same, but let's say part one is a less meal sort of scenario. You get one more baked. Good. What are you going? Which, what are you choosing versus part two would be, you can only eat one baked good for the rest of your life.

What are you choosing? Maybe those are the same. Maybe they're different.

**Suze Shardlow:** I, I think they're gonna be the same. So one of the things I really enjoy making, because it's quite easy and it's stuff [00:57:00] that you would have in the house anyway is chocolate chip banana cake. Okay. Yeah, if and it's really good if you've got bananas that have gone a little bit more ripe than you wanna have them, it's really good for oh, sweeter using them.

Yeah. It's really good for using them up and yeah, it just tastes so nice and it smells really nice as well, and it's easy for you to make and you can make it for yourself so you don't have to go out and buy it. In fact, I'm not even sure I've found that in the shops ever. So you have to make it for yourself.

But yeah, I could just imagine somebody answering this question with, do you know those cakes you can make in a mug? So you get a mug and you've dump all the stuff in you stir and you put it in the microwave. I can imagine somebody might say that because you genuinely have all the ingredients in the house and you can have it whenever you want.

And it only takes five. Oh, so you

**Sean C. Davis:** bake it in the microwave.

**Suze Shardlow:** You, you can make cakes like that. There's this microwave, my cake thing. I personally don't do that, but I was just thinking that [00:58:00] is a good answer to this question because the thing with baking is sometimes it can take ages, but you can make it in the microwave is easier.

**Sean C. Davis:** Yes, definitely. Okay. I wonder if I haven't heard of banana cake. I wonder if that's similar to what we have or at least what I know is called banana bread and it's if, and if we add a little bit of vanilla or chocolate chips, then it starts to get cakey. Do you know if those are the same thing or they've, are they very different?

**Suze Shardlow:** I think they're probably the similar, yeah. Whereas you would make it in a loaf tin. So it would come out more than ALO shape. I made it in a in a flat square tin and then you just cut into squares. So I think it's probably the same. They,

**Sean C. Davis:** yeah. Ah, okay. Yeah. I feel like I should try your method the cake method, because the one like with a really good bread, the crust is a, it's like a good part of the bread, but I feel like with the banana bread, I don't want the crust.

I want the it's like a cake, like I want the inside of it. So yeah, maybe I should change this format, cook it in [00:59:00] the in the cake

**Suze Shardlow:** pan. Yeah. Yeah. Try that. I'll send you a recipe.

**Sean C. Davis:** Okay, fantastic. all right. Okay. Three more. Number seven is okay. So I've, I originally only thought I was gonna ask this question once.

I think I asked it maybe in the second episode and then the answers have been so amazing. So no pressure that I just, I keep it in there. So here's a four parter and I can repeat 'em cuz it's a lot. So the concept is. , you can take anybody to lunch. They can be living or not living. And four questions are one who would it be?

Two. Where are you going to eat three? What are you going to order de and four, what is the first topic that you are bringing up for? Discussion?

Wow.

**Suze Shardlow:** That is a big question.

**Sean C. Davis:** It's a big question. Yeah, so much for the small, tiny, quick questions, right?

**Suze Shardlow:** Yeah. Yes.[01:00:00] I think I wanna say Michelle Obama is the person that I would go to lunch with. It would be quite scary or wow, Michelle, I can't even speak cuz you were just something else.

I'll do the same thing. Yep. Yeah. And she's really tall as well. So I be like, yeah. Oh, is she, I don't think I do that. I think so. I think she's really tall. Yeah. Whenever I've seen her on the news and stuff, she always seems to drop everybody else. Where we would go somewhere. That's really quiet because I want to have Michelle's undivided attention.

If you are gonna cover a dinner with Michelle Obama, you don't want everyone coming over and trying to get selfie. great point. Yes. So maybe somewhere in local in Nottingham, because people don't tend to, people come to the UK, they just think London don't know. Oh, they think Edinburgh, they don't think I'm gonna get to Nottingham.

So maybe somewhere around here, what am I gonna order? I in a restaurant, I like to order something that I wouldn't necessarily cook for [01:01:00] myself because like we said, at the beginning, it's always tastes better when somebody else makes it. And also if it's something that's a lot of hassle. So maybe something like beef, Wellington, cuz that's a bit of a F or duck.

Because if you're cooking duck in the oven, your oven is gonna get really greasy. So I don't want that in my oven at home. And what was the last one? What was the first thing I'm gonna ask? Yeah. Then

I guess what advice she's got for me and the reason I chose a woman of color for this is because people give you advice. It's, like I said earlier, people will give you advice, but it's based on what they did. And she's had experiences as a woman of color that a lot of other folks won't have had and a lot of struggles that, that I would've had as well.

So I would ask her for some advice, I guess I'm not as sure exactly what about maybe how to be heard for, I don't know. So I think women tend to not be heard as much yeah, maybe that. I like [01:02:00] that would be,

**Sean C. Davis:** that would be an amazing lunch. That was, yeah. Yeah. That would be great. Love that.

Okay. Two more. Number eight is, was thinking , we'll call this one, just ran random and obscure. Hopefully easy. Okay. So I, wherever I found that you like to bake, I also found that you like to do karaoke and I think it's said was, did it say your favorite song was oh, it was a Fleetwood Mac song.

What is it?

**Suze Shardlow:** I think it's go your own way. I think it's yes.

**Sean C. Davis:** Yeah. Okay. That was it. So the question is what's your second favorite karaoke song?

**Suze Shardlow:** Oh, pink. What about us? Okay. Okay. Is a good one. I'm not gonna say it now. Probably. Probably not. No,

**Sean C. Davis:** No.

**Suze Shardlow:** It's yeah, it's not one of her most famous ones or what was that woman rise up by is ITRA or day or rise up?[01:03:00]

**Sean C. Davis:** Oh yeah. Okay. Okay.

**Suze Shardlow:** Yeah. Yeah. Sorry. I couldn't, you did say you might be obscure.

**Sean C. Davis:** Yeah. Yeah, exactly.

**Suze Shardlow:** But I think the I think the messages in those two songs are good, otherwise something by heart because I'm an eighties child. So like what about love? Amazing alone? Those power ballads

**Sean C. Davis:** power ballads are amazing.

Yes. Yeah.

**Suze Shardlow:** Yeah. Like the eighties was the best decade and I feel sorry for anyone who's being a, who's a child now, cuz you're not singing power ballads. Like I was.

**Sean C. Davis:** It's right. And I am, and so I'm like, I was born at the end of the eighties and I play a lot of music, but I can't, I cannot sing.

I can't figure it out. So I don't do karaoke, but I tell you like very regularly in this house for like power ball evening, we're just gonna find some eighties playlist and it, yeah, those are so fun.

**Suze Shardlow:** they? They are fun. They're so cathartic. Aren't they just get it all out?

**Sean C. Davis:** Yes. Yes, [01:04:00] absolutely. Okay. Last question. This is my second favorite question next to what's best sandwich. And and I asked this every show and it is what is the worst? The way I usually asked it, ask it is what is the worst mistake you've made as a developer? I'd say, let's apply this to whether it's community management or just being in tech, but yeah, what's the worst mistake you've made.

**Suze Shardlow:** I think. Some of the worst mistakes I've made of public speaking related, nothing bad. Like I didn't go out there in like curse or anything, but just maybe just making a mistake or maybe not being as prepared as I should have been. So a lot of what I've done in recent years has been public speaking based.

So I do a lot of like event MCing. I do a lot of talks. I do a lot of hosting of events and things like that. And I went to speak at a conference in Berlin and I had sent them my slides beforehand. And I didn't [01:05:00] check what the slides were gonna look like on their machine. And I wasn't using my own machine, which I would not recommend you do if you can use your machine, please do.

But I was a bit of a new bit conference speaking at the time, so I didn't really think anything of it. And I got there and the fonts were like messed up and all of my slides, they were supposed to be in capital letter. And they'd all been like changing to lowercase because they were using like Google slides and I'd done it in keynote.

It was a total mess and the way they'd set it up they didn't have the speaker notes up. So I had no speaker notes. And so I'm talking. Yeah. , it's luckily I knew the topic and it's fine. I given that talk before, but that was not experience I want to repeat. And then when I did a a virtual conference, I was doing the topic, a virtual conference, and we were on stream yard, which for those people who dunno stream yard is it is like a TV studio.

So you come in stream yard and there's streamy yard BES it out to wherever your streaming to and in stream yard [01:06:00] when you're not live. You're automatically muted. So the audience can't see you, but I thought, oh, I'll just do belt on braces. I'll mute myself. So the MC introduced me and then I came on and started talking and forgot.

I was still on mute so I'm merely talking away and he came back and goes C on me. I like, so that was not a good way to start the talk, but , luckily I'm, I don't know. I tend to not dwell on these things too much and just go straight into it. So it was fine, but it was something that I didn't really need.

But yeah, I really, those kinds of of things where you feel really oh, this was a level of stress that added to a really stressful situation. But yeah, you can bounce back from it quite easily. I think. And a lot of people don't even one of my friends was watching that one where I accidentally was on mute and he didn't even remember an hour later.

So I was like that puts it into perspective. Nobody remembers. And the feedback that I'd rather talk was good.

**Sean C. Davis:** So that's right. [01:07:00] Yes. Yeah. Okay. So that made me think of that made me think of so many things. But I should say I love the idea of don't dwell on it. Something I tell folks a lot who are getting into speaking is if you're I try to relate it to to sports.

So sporting event that, especially a competitive one, that if you're playing that game, half of the people there who are watching it, want you to do poorly, the other half wants you to do really well. When you're giving a talk, everybody wants you to succeed. Everybody is on your side. And and like you always, and other lots of other tips in there, but I.

Yeah, so I, I say that a lot, but your answers made me think of two, two fairly well, one, one event that happened recently and one that went all the way back to my university days. And now, so the university one was related to your Berlin talk. And this is in the early days of speaking, I took a public speaking course, and then I had to speak a [01:08:00] lot as part of this ongoing senior project throughout my senior year.

And one of the last presentations where we were like wrapping this up, we had a group project and I was like, I'll do most of the speaking. I'll make the slides. I liked doing that stuff. And I had same thing. I was like, slides on USB disc or whatever, go and load it into this other computer.

And it was going great. I was on slide four and then no slide five and no slide six. And the whole. Rest of the visuals for the presentation gone. And so I was like now I have no visuals. And I practiced enough that it went, it went okay, but I couldn't, I had nothing to refer to.

I was like yeah, that, that one. And then here's your second oh, I, I goofed, I actually didn't get called out on this one, but it was for a conference talk a year or two ago. And I, so I have this setup here, it was in the pandemic. So I've got my mic, which goes through this [01:09:00] little audio interface and then goes into the computer.

And it's really weird because I have to set it up. I have to choose the, I have to choose the frequency on that. That gets sent into the computer. I don't totally know why, but it's like I can choose 44.1 or 48 or something like that. And it went, the power went out in a meeting I had previously.

And so I realized that it wasn't on and like quickly turned it back on and chose the wrong setting. and this is also the first week of the, of me starting my new job and what happens when I choose the, when I choose the right setting, I just sound like me. Hopefully I've got it right now.

So I sound like this, when I choose the wrong setting, I sound like a mouse. My voice is like super, super high. Wow. But not so high that somebody who doesn't know me would [01:10:00] be like, something's not working. It's more like. This, guy's got a really high voice. This is really weird.

And so I met all my coworkers for the first time with this voice that isn't my voice. And I gave a conference talk where the conference coordinator was like I don't know you, I just met you. So gave this talk. And it was that somebody I know, listened to the talk, took a video of it and sent it to me.

And I was like, oh, this is amazing. Fortunately, not many people went to that, but I don't know, those are good. I felt like I, I felt like I had to get those out there, but I really commiserate with the, or resonate with the, that idea of it's great experience to be able to think on your feet to make those mistakes.

And and you just keep going and nobody really cares. It's totally fine.

**Suze Shardlow:** Yeah. Yeah. And it's a bit like earlier when I accident, the, my machine decided it was gonna do that. And I've been in that position as well. And I've been in MC my guests has dropped. I've had to ad lib for 30 minutes before

So once you've done these things a few times, then nothing really [01:11:00] bothers you does it. Okay. Yeah. But it's like anything it takes practice. And I think anyone who's gonna sit there and criticize you for a mistake you made like that. I would love to see them on the stage trying to do this stuff because it's not easy.

It's easy to sit there in your chair or in your armchair or in your office or wherever you are with a critical look at somebody. But if you don't wanna try yourself, you're not really in a position to to pick holes in it. Absolutely.

**Sean C. Davis:** Absolutely. I love that. That's it for now.

Thank you so much, Sue. This was a ton of fun. Really appreciate you being here.

**Suze Shardlow:** Oh, thanks so much for inviting me, Sharon. I'm so sorry about earlier, but I really love the chat with you. So thanks for inviting me.

**Sean C. Davis:** Yeah, this was great. And no worries. And so one last thing before we go, if you yeah.

So I suppose tell the listeners and the viewers how to get in touch with you and feel free if we missed anything that you wanna plug real quick go for it.

**Suze Shardlow:** I got a fun fact. I wanna tell everybody which I thought you were gonna ask me. Cuz you [01:12:00] did send me a question or two beforehand, like you definitely gave me any spoilers, but you said what's the thing that you're most proud of that you built in the questions and the thing that I'm most proud of that I've created is this book.

**Sean C. Davis:** Ooh, I wrote a book. Amazing. Yeah. 32nd coding. Okay.

**Suze Shardlow:** Yeah. And the fun fact about this book is it that it was published the same day as Dave Gros book, Dave gro from the food fighters published his autobiography last year. On the same day as my book, cuz he heard that was a very auspicious date and the food fighters tweeted me a message of congratulations.

Oh, that's

**Sean C. Davis:** amazing.

**Suze Shardlow:** yeah, so it was a really fun holding this book in my hand for the first time and going into a bookshop and seeing it was even better. Cause it's like this book actually exists outside of my house and it's gonna be somebody else's house. But when I got that tweet for the food fighters, I was like, oh, I don't even care that I've got book now I've got a tweet from the food fighters.

So yeah, so that's the thing that I'm most proud of. So that's the thing I would [01:13:00] like to plug, but yeah, people can get in touch with me via my website, which is Sue's dev SU said e.dev, all my contact details on there. I love meeting new people and like I said, love to collaborate. So yeah.

Hit me up if you wanna chat about anything really.

**Sean C. Davis:** Fantastic. And just for folks who are listening in and not watching the video, that book was called 32nd coding and where can people find it everywhere.

**Suze Shardlow:** Everywhere. Yeah, if you wanna know, it's basically covers 50 topics in coding.

And I had to, I took a portion of those and I had to explain these concepts in like under 170 words each, which was hard. Oh,

**Sean C. Davis:** interesting. Interesting. Okay. Yeah. It's tweet level teaching .

**Suze Shardlow:** Exactly. Exactly. Yeah, that was a good challenge. Yeah,

**Sean C. Davis:** very cool. All right. That's it for this show.

Thank you all for being here. We will be back live again on July 7th with Benji Weinberger. And that is the day [01:14:00] before I take the longest flight of my life so far. So it'll be a really interesting and I'll be nervous a little bit, so it'll be, but it'll be a good show. Okay. So for all, from all of us CFE joining us.
