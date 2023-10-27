---
_build:
  list: false
  render: never
---

**Brian Rinaldi**  0:00  
I screwed that up in the air and then I hit I hit it too many times I hit the button too many times. I don't know if you noticed. So we were both sitting there staring with people around. Yeah. It's alright. Um, you know, it's, it's not like I get a lot of practice doing this. It's not like, I'm on stream yard like four or five times a month already. That's my excuse. I'm going with it. So hello, everybody. Thank you all for joining us. We're really excited to have another episode of DEV relish. My name is Brian Rinaldi and my co hosts. I'm a developer experience engineer at LaunchDarkly. And my co host you can introduce yourself

**Erin Mikail Staples**  0:54  
yeah, I'm Erin Mikail Staples, and I am soon to be not funemployed I'm in my last few weeks of unemployment.

**Brian Rinaldi**  1:02  
No Right. What do you got to like really take Why are you here you should be off like having fun. I'm so

**Erin Mikail Staples**  1:09  
I like already. I already am really bad at it. I did. Like I did a very good job of being offline last week. So if anybody wants to geek out with me, I did play Starfield way too much. So if anybody is playing Starfield to get

**Brian Rinaldi**  1:21  
back into that I started, then I was, it's really good.

**Erin Mikail Staples**  1:25  
It's, I will say, I kind of avoided it, because I can get very bored very easily in video games. And I was like, Oh, I'll do something else. And then, honestly, I sucked back in for the online people. So I've been playing on Xbox. So

**Brian Rinaldi**  1:39  
well, like three hours. If it was multiplayer, I'd play a join you but I can't. So it starts very slowly, it takes me it took me a second me a long time to get through all that. sidetrack, that took me a long time to get through all the intro stuff. So I'm like, okay, eventually,

**Erin Mikail Staples**  1:56  
level tenants like it gets then gets really fun. If you're an open person,

**Brian Rinaldi**  2:02  
I am, I will get back to it, I promise. So before we, before we invite our guests on board, I want to take a moment to thank our sponsor. So data protocol, if you don't know about it already is like a developer engagement platform for dev rel. So it's, it's basically like Roku for developers, it's free to use, and you can check them out at data product called calm, basically, you can create whole playlists of material for your for your community. It's really great, like, easy to use platform. So we got a demo of it. It was really cool. So you should check it out. Data protocol.com. Thank you data protocol for sponsoring dev relish. So with that, we're gonna invite up Megan Lieu. So Megan is a data advocate at deep. Wow, got him on like messing it up deep, deep is not deeper. And there's only like different company names are so, so simple. I keep thinking Deepgram, is there a Deepgram? Or maybe there is

**Erin Mikail Staples**  3:05  
a Deepgram is Megan.

**Brian Rinaldi**  3:09  
Megan is at Deepnote. Lots about neat deep. Tell us about yourself, Megan and about the

**Megan Lieu**  3:17  
Hey, everyone. I am Megan, thanks for inviting me, I am very new to the DevRel space, less new to the data science space. And bringing those two things together is what brought me to deep note about 767 weeks ago, and I'm doing developer relations, they're creating a lot of content to raise awareness for our product, help our users use deep note better. And what deep note is, is a cloud based data science notebook that is super collaborative. So you can think of Jupyter notebooks but multiple people can work in your in the notebook at the same time, which is a godsend for for data scientists who are trying to work together. So that is a little bit about me and about deep note.

**Erin Mikail Staples**  4:12  
I mean, like there's so many cool notebook tools out there right now. And it's like that collaborative nature is like, really exciting. Like it's like very much like your Jupyter notebooks on steroids if you ever use that.

**Megan Lieu**  4:23  
Yes, that's Jupyter notebooks on steroids is a much, much more succinct way of describing it.

**Brian Rinaldi**  4:33  
Yeah, that's, that's very cool. So, okay. So going back to like how you obviously didn't, you started? Not even in tech, right, like so I was reading your bachelor background you started in finance? Yes. Tell us a little bit about how like what drew drew you from finance into tech, and eventually into deverill?

**Megan Lieu**  4:57  
Yeah, I studied You need finance in school. And so that pathway from studying in the business school to becoming an investment banker, that pipeline was super strong at our business school, as I'm sure it is, for a lot of other business schools, it's either investment banking, or consulting. And the first role that I had outside of once I graduated was being a financial analyst at a consulting firm. So on any given day, maybe maybe some days, I'll say, I'm a consultant. Other days, I would say I'm a financial analyst. But pretty much the role that I landed, once I graduated was a marrying of those two. So for all intents and purposes, I was like, by my alma mater is definitions I am successful. But I hated the work. It was spreadsheet hell, reporting up to like, five different levels of managers to get a deliverable across the finish line to a very finicky client. And that's probably not, you know, it's a generalization to say that all consultants have a workflow like that. But for me, being more on like the services side, especially a service that I didn't really enjoy, was, it made it hard to report to work every day to say the least. And so I graduated, and I was like, This is what I'm supposed to enjoy. Because I spent four years studying this, like I, my previous internships, were doing finance as well. So everything that I had, was leading me up to to this exact job. But for some reason, I didn't feel much fulfillment. And so I had to go back to the drawing board after a period of being super burnt out, and ask myself what experiences and strengths I have, what do I even enjoy outside of finance? What do I who am I outside of finance, to be a little bit more like dark about it? But that those are the kinds of questions that I had to ask to chart my next path. Because I didn't want to go down another, like six year period, thinking that I was going to do something and then get cold feet at the end, right. So I had to really evaluate what I'm good at what I was interested in. And those two things brought me to data analytics, because I had taken like two courses in school. But I was like, you know, what, those are the only two courses outside of finance that I took. So I know something about data. And data is tech. Right? So I was like, Yeah, I want to go down the the tech route, because it seemed a lot more fast paced, and potentially more filling than what I was previously doing. And so I went down that path and have not looked back since. So went from data analytics to data science and now DevRel. And so, that path has been fairly linear, and that each role has been different. And each role has built upon each other. And that has made it a very fulfilling journey. But by no means am I have I like figured it out completely. Like, I don't know if there is such thing as a as like a dream job or like a calling as to what you're supposed to do. But for in the meantime, I'm enjoying taking, taking previous skills, having them build on each other and just applying it to where I am at the moment. And where I am at the moment is is hectic, but I'm learning so much in this field of DevRel. And I if you had asked me like, three months ago, if I thought that I would be in this kind of role, like I would have told you that I would probably still be in data science, but I'm glad that it has taken me to where I am today.

**Brian Rinaldi**  9:09  
Yeah, it's you know, we were just, we just had in the comment actually. Maddies wrote that wonder what the percentage of people crossed into tech from completely different fields is and, you know, I think we've talked about this in other episodes, plenty. But all both of us came from different fields came from outside of like, we didn't do computer science. I think nearly every did we have any guests that we had computer science heaven

**Erin Mikail Staples**  9:39  
wintery had? I think the most we joke that he had the most computer science backgrounds, and it was like that, but it was like it. I believe we're like started like two semesters of

**Brian Rinaldi**  9:52  
yeah, there's something like that because yeah, it's so I you know, I'd be curious if, first of all, I I think it's it's common in tech to like, you know, to get in from some other field. But also, it's also I think in DevRel you find it's an even higher percentage. I feel like when I talked to Dev Rel folks, it's very rare. I made a deferral person who's like, oh, yeah, it was paid for scientists. Right. But

**Erin Mikail Staples**  10:22  
I'd even I'd question, Megan, I'm curious, like, if you found this in your job search, like, I know, you and I were going through the job search very similar times. Um, and I was looking for developer relations, jobs dev advocate jobs, Dev experience jobs. And I had folks that were point blank, like, you do not have a engineering background, or I had one of them, I passed their technical exam, and they still wanted me to do a second technical exam. And I was like, Okay, sure. Yeah, I would get halfway through the process. And they'd look and they'd be like, you don't have this experience? And I'd be like, thank you. I could have told you this. Like, it's I'm pretty transparent that I have a journalism degree to actually I'll let you know, when I go back to journalism land. But did you experience kind of the same thing? And did you know that DevRel, was your next adventure? Or was it going to be data science?

**Megan Lieu**  11:14  
Yeah, I, that is such an interesting call out and something that I was curious about, because I felt like the roles that I interviewed for I interviewed for three, one was more of a data science role. Two were Dev Rel community management roles. And those two were super informal, actually, I, these, these roles came to me because they were familiar with my content and my work on LinkedIn. And so I would like to think that that content, kind of spoke for itself in terms of getting me getting my foot in the door. And then I don't know if it's because both were super young startups. And so they hadn't developed, they hadn't really developed out that that hiring process. But for me, literally one of my interviews was just like, two conversations. And they're like, here's the job. And I was like, Wait, is this that easy. And then with my current job, it was it was more rigorous. It was like a three hour interview all in one go. Only with my CEO, though, like we, my company does not have a DevRel function, we don't have a marketing function. So he was really the only person that had a say, I guess, in in me being hired. So he was the only one that was really interviewing with. And so I was like, is this this cannot be typical of other DevRel interviews. So it's very interesting to hear your perspective, Aaron. And I think that that was just a factor of the fact that these roles are they don't have a developer relations function built out. And so maybe they didn't know what they were looking for.

**Brian Rinaldi**  13:02  
We talked about this a lot in the last episode, basically, that a lot of times, especially in smaller startups, like this is sometimes even their first non engineering hire. And even if it isn't, they don't necessarily have a clear it can make it can be really difficult to go through the process, because they don't necessarily have a clear idea of what it is they want from DevRel. So sometimes you're trying to kind of figure out, okay, what is this devil position going to be? And they're like, oh, you know, like, they say, like, list off 100 Things is like, okay, you don't have a clear vision for it. It's just gonna solve a lot of, we have all these problems and getting like exposure to developers, and, you know, on social media, and it's just gonna solve all those things. So,

**Megan Lieu**  13:53  
yeah, I guess that was kind of the the sentiment that I was getting from some of the companies I was interviewing with. And I sense that this was probably a broader trend.

**Erin Mikail Staples**  14:05  
Yeah, I think there's the there's the, there's kind of this thing that happens in DevRel. And it's like you want there's I like to think of like, I really like Mary Thengvall, who was on this podcast earlier. And she has the triangle of experience, community and advocacy. And I think that's a really great triangle to look at. But I mean, even during my own job search process, like I very much started on the community advocacy side and then have slowly worked closer towards experience. So I put myself smack dab in the middle right now. And it gives you like a framework of like, where do you fit in this larger picture of what is Dev role?

**Megan Lieu**  14:39  
Yeah, I use that triangle that you sent me so much, not only to not only when I was navigating the interview process with my company, because part of my interview process was creating a 30/60/90 and that 30/60/90 I framed it around like the three corners of that triangle. So for me, that was very nice, nicely organized guiding document for somebody who had never experienced ever before. But also I use it to, to tell people that I know in my personal life like what I do, so I'm like, There's awareness enablement and engagement. And so, yeah, that that triangle has been super helpful in me developing my role together with my, my manager.

**Brian Rinaldi**  15:30  
Yeah, Mary's work has been like, instrumental in many people's DevRel careers. She's just, you know, it's just so good. And it's, and I'd say, I'm curious, because you both went through the job recently. Like, I, I'd say, in my experience, there is no typical deverill interview process. Sometimes I feel like it, it follows a more traditional engineering role type process, sometimes it's more of like a marketing role. Sometimes it's a hybrid of both, you know, like, sometimes you sometimes you have no coding tests, sometimes you have a coding test. Sometimes you have homework, sometimes you have homework and a coding test. I mean, it's, it's just, I don't know that I've, I've had any two sets of interviews, like the only thing, the only commonality I find, in general, is that you have way too many interviews as part six, like, you know, that list out the process that we like, Oh, hey, here's the process, you're going to interview with 123456? It's like, you know, I guess in the startup, it's only limited by the size of the company. Right, but Right,

**Erin Mikail Staples**  16:45  
that's what you only have so many people to go through startup. Yeah, but I feel like I've interviewed their entire team, like, I'm part of the process. I still feel like I've interviewed more people than I was like, I What, um, but I think I love this question that Maddie tissues takes ads in here. Like, do you think that being a DevRel for a vendor is vastly different than for other companies? And I have my take on it, but I'm curious to hear your take on this.

**Megan Lieu**  17:17  
I have Yeah. I've wondered that myself. That's such a good question. Matt. I, yeah, I can only offer my perspective from being a working on the vendor side. And prior to this role, I was a data scientist and another vendor. And this past week, I went to a conference where it was all vendors. So my head is very, like vendor space right now. But I don't know, this is a question for you guys. Like, do you think that it is more common to have dev role roles at vendors? Because they are advocating on behalf of a tool or a product? Right? Like, how do you even What does developer advocacy look like in like, a Google or I bought? That's a product I guess, but

**Erin Mikail Staples**  18:02  
yeah, like a discord where you're creator facing, you know, or? Yeah, I have a spicy take care for you for my

**Brian Rinaldi**  18:12  
graphic for the spicy take.

**Erin Mikail Staples**  18:14  
Yeah, um, spicy takes here on my end is actually don't think that it is any different at all, if you're doing your job, right, and you're doing your job well, because at the end of the day, and this is something I really hold on to from I was an E commerce before moving into DevRel. And that's actually my first community job. And like open source, open source community manager, but like, I don't be concerned that you could never make it because like, I came from working very much with agencies and people and journalism facing, but like, it is actually no different at all, because at the end of the day, you're dealing with people and your audience, if you are in DevRel, or developer relations, or advocacy or developer experience, is developers like I will fully admit, I've been despite the email this morning of someone who scraped LinkedIn for emails, and they sent me a pretty form for me email, and I was like, Dude, why are you sending this? Where did you get my email? What are you doing? Like, this is so and I kind of like pushed back and I was like, Mark, don't email me. This is

**Brian Rinaldi**  19:11  
me to help your marketing or whether

**Erin Mikail Staples**  19:13  
they were it was it was someone DevRel adjacent, like, DevRel, like, founder, early stage startup adjacent. And I kind of felt bad because I was like, Oh, my goodness, am I grumpy for like, pushing back on this email that I got? And then I was like, no, because like, they were approaching me as if I was a vendor, and they should have approached me like I was a human. And I think I have done several at companies where I work with both creators and vendors. So I was at Unsplash, as a community manager for a while and work with developers from there. And guess what, it's no different. It's because at the end of the day, like if you're doing your job correctly, and I think if you're doing a successful version of your job, like you're the end of the day, you're How do you make people successful like you want if it's a developer relations person, you want to make people do great work and yes, I'm Montreal Unsplash. This is like two three years ago now, but yeah, I'm yours. You're

**Brian Rinaldi**  20:09  
the spicy pickle. I totally forgot. Yeah.

**Erin Mikail Staples**  20:13  
Spicy pickle have

**Brian Rinaldi**  20:15  
There he is.

**Erin Mikail Staples**  20:18  
Yeah, there's like, just don't like, yeah like just be a good person and make the people you work with successful and if you're being salesy probably don't. And I'm glad to hear maybe it's not that spicy. Also the unflushed circles apparently really smart. Tell them all I say hi, it was a great team. I obviously love them all.

**Brian Rinaldi**  20:40  
No, I I'd say my view is I don't think that too spicy. I think it's just about it's really about you know, I, I've always approached several as as a kind of be a two way thing. Like, I can't go to you asking for something like you being the community, right? Or community person? If I'm not there giving as well, right? Like, I can't, I can't, it's not DevRel is not a, you know, it's just a one way channel out like and I think that's, that's where like some of those interviews I think get stuck, right? Is they see it as like, Okay, you're just going to improve our like, outgoing, like, we're going to suddenly get all kinds of exposure, and we're going to, you know, and all this stuff like that. It's like, no, but this is this is actually a two way street. I mean, like, like, even the stuff on Sci Fi, like, has no real benefit to the company. And but they're supportive of me doing it, because they understand that this is, this is a give and take. And so doing stuff like, like this show, or like some of the other things that I run for developers is part of the way I engage with the developer community, on on, you know, someone on the company's behalf, but also like, in a way that gives back. So then when I go say, hey, you know, I need x for LaunchDarkly, like from some, you know, will you chat with me kind of, or will you come be in our conference or whatever? And they're like, Yeah, you know, I, they know me, they know, I, you know, we're part of the community, we're not just taking, we're not, you know, so that's, I think that's my perspective is just like about being having empathy, number one for like the people, you know, your audience and like trying to really help them, but also like being being there for them, not just asking of them?

**Megan Lieu**  22:36  
Yeah, I think it's easy to lose sight of the fact that you are serving humans at the end of the day, especially when you work in tech. And it's all about the product, and you know, like these product metrics and stuff. But if you don't put it in the perspective of the business, and then like the people who support the business and the stakeholders, it has to come back. It has to come back to the people at the end of the day. Yeah.

**Brian Rinaldi**  23:04  
I think Manny followed up with when you're when you're DevRel for vendors seems like it'd be hard to be impartial. Anybody have thoughts on that comment?

**Megan Lieu**  23:19  
Yes, yes. Yeah, no, I face that all the time. So I create a lot of content on LinkedIn. And it was actually only fairly recently that I got one of these comments, and I'm surprised that it didn't come sooner. There were like, there were like, your channel has become very salesy these days, is it because it's part of your job. And I was like, the unfollow buttons right there like you. I mean, like, my channel, and I hate to sound like, you know, I can do whatever I want. But like, literally, I can do whatever I want, like, but also people have to realize I wouldn't have taken a job at this company, whether that's DevRel, or any other kind of job with this company if I didn't believe in the product. And so, given before, I wasn't DevRel, I was a data scientist, and I was posting about my company then. And so, yeah, I mean, people definitely get that perception that you are no longer impartial, that your voice and the company's voice are one in the same. And so curious how you guys navigate that.

**Erin Mikail Staples**  24:35  
I have journalism like I lean into the journalism background like so for those of you who don't know, I did come from the journalism world, studied both journalism and undergraduate and in grad school, and I actually need to update it now. But it's currently out of date. I have a now page on my website, which says like anybody I'm taking money from or companies I'm working with, or organizations that I've been affiliated with in the past. Okay, I have, there have been times where I have posted things that I have been flagged by the, like the company that I worked for, like, please don't post that. And I've went, No. Like, no, I have been asked, I had a company, I also, you know, they're there. But I also do believe there is a difference between me as an individual and me as an individual representing the company. And so I tried to add on like, if it's a work post be like, usually added into my own context, like, Hey, I worked really hard on this come see how it works, or I'm really proud of XYZ comm see how it checks out? Like, in providing that little bit of context behind it like but still being like, full disclosure, they signed my paychecks like, yeah, and I also think the devil, and I think the stripe team does this really well. Or like, this is years ago, I heard it from them. Is they also acknowledged when their product was not the best? Hmm. And I think that's okay to say.

**Brian Rinaldi**  26:01  
I think Sorry. It's so if I mentioned is, you know, somehow I always end up with boba tea. It's, it's merely coincidence, that you've got like, an impressive water bottle there. Like it's like, almost, it's like the size looks massive.

**Erin Mikail Staples**  26:22  
Yeah, look at that. Yeah. hydrated, hydrated.

**Brian Rinaldi**  26:25  
So I've had this conversation, actually, recently, because there's been I've had folks, like, say, like, oh, you know, I can only take a job. In DevRel for a company, like a product that I'm super passionate about. And I'm like, I mean, I've been in debt for a long time. And like, the one thing as in any kind of job, especially in tech, one thing you can guarantee is that things will change. And so I can be, I can, I can almost promise that you, it's gonna, you're not always going to be super passionate about it. And if you if you take that perspective, you're just gonna be switching jobs a lot. Because you know that, like, it's just not going to, you're not going to be able to remain that kind of continually passionate about it. And like, the business objectives might change in a way or the product might argot like move more enterprise, or whatever. And then you're like, Okay, well, I'm, you know, I, I'm, I need to still be an advocate of it, I can be honest, like, like Erin says, were being upfront about, like, what are the situations where this is the best fit. And, you know, and acknowledge if it comes up, like, we're where we might not be the best fit kind of thing, but I think, you know, you can, I'm never gonna pitch somebody as, as a demo on a product that I think is going to be bad for them. Right? Like, I'm not gonna, you know, if it's not the right tool for, for whatever they're doing, I think I'll say it. And that's part of being I'm not, I'm not sales, I'm, I'm DevRel, I don't have I don't have sales goals. So that's why, you know, I can be honest about that stuff. And that's, that's important. But I also feel like, you know, I can, I can still advocate for something that I don't necessarily, not like super passionate about there. All these tools like have are great fits for the right types of things. And I can write about those kinds of things. I can speak about those kinds of things and talk to developers about those without necessarily having to like, just say, hey, you know, I'm not as passionate about this job as I used to be. So about this tool as I used to be. So I'm going to be like, I'm out of here. So yeah, I don't know if that's a spicy take or not a spicy take. But that's just my perspective on it.

**Megan Lieu**  28:50  
Spicy to me, because I just the way my brain works like, I have to, I'm either all in or all out, right? Like I'm so on extremes. So I'm just speaking from my own personal, how I know my brain works. But sure, as I as I go on in my career, I'm sure I'll realize that there are products that I'm working on that I'm not, I guess like I don't have to be passionate, but like I have to just subscribe to what the company is saying. But I can't I think if it ever gets to the point where you like, do not believe in the product or like you don't believe in the direction that your your company goes, you absolutely should not stay. You shouldn't stay like biased towards that product. And that's where your judgement as a human comes in. But yeah, that's this hot take for me because there are going to be days where you're not like super jazzed about what you do or the company you work for. But you're still employed by them. So

**Erin Mikail Staples**  30:00  
Yeah, definitely like to kind of touch on that. And like, kind of, I'm probably in the middle of both of you like, that's, I'm probably smack dab in the middle, I have worked at companies where I hadn't even used their tool until four weeks before I joined the company in my final stage of the interview process. That was my last role. Um, so I can learn machine learning on the fly. And my last role was in data labeling very deep ml ops, but had never written a model before I had not done data labeling before it didn't understand what it was, and join the role because of the mission. And once I started understanding the tech got really into it and was like, This is amazing and understood and saw the importance of it. In this time, this job search, like I have used the tool that I'm going to be employed to do in another vendor company, I have used a tool before I've set up the tool before at other companies. So but I'm experienced that right. So I have that. But arguably, there are companies the interview process that I had, were more familiar with their tools. But that wasn't a bigger draw to me, because I look kind of got to see behind the scenes and some of them and I was like, well, your team is a hot mess. And I the biggest thing I learned in my career path like and I think in this time round, is I really wanted to choose a team. And a manager that like I felt like got me and like, understood that like I've always kind of struggled with leadership, like having a really good manager or really good direction was something that was really important to me, and this next time around. And I think on that point, Mattie's point of Do you think it's fair that the company you work for gets to rent the audience that you spelt, spent years building up? Like? I love this question. And it's something that I've debated myself and gone back and forth. And I think it's fair with the caveat, if a company will ask me to post every single thing that they've done to my personal channels, no, it has to be a choice of mine, to post it. So there are times like I have, I can directly think of a company that that years ago now moved and did a lot of crypto projects, not really into crypto, some of them, I thought were a little scammy. That's fine. I did not reshare any of the projects or the work that I did, and they had never, we had an agreement that I will not be asked to work on certain projects that don't align with my personal values. And that's okay. I still discuss crypto because that was a significant part of their audience. But I discussed it in a way that was very nuanced, and coming from a lens of curiosity and understanding, which felt authentic to me and myself, but also was authentic to the company because there were people of that audience that had the same curiosity that I did. So I got to still be myself. And I think the minute that a company asked me to not be myself, that's when I need to know that I'm out. That's a hard no for me, like you're asking me to believe something I don't believe she'll a product that I don't want to show your you get free claim on my LinkedIn, Twitter, whatever, that I have a problem with that. But if I'm not doing work, that I'm not proud enough, that I don't want it on my personal feeds, that I have to ask myself the question, Am I doing the work that I want to be doing right now? Like, maybe do better work than Aaron? And that's a personal thing.

**Brian Rinaldi**  33:05  
Yeah, yeah. I'm going back to like, kind of renting the audience's I'm not going to want to get back in too deep into that actually want to talk about because it came up in that Megan, you have like 80 80,000 followers on LinkedIn, you create a lot of LinkedIn content. I'm really actually really, really curious. Because, okay, I will say like, back when Twitter was just a mere dumpster fire, and not whatever it's become now.

**Brian Rinaldi**  33:38  
Like, you know, it was bad, but it wasn't terrible. It was like, Okay, I generally ignored Like, I literally only showed up on LinkedIn to be like, Yeah, okay, I'll prove you, I'll prove you approve you because I've like, let the invitations pile up, and then I hop. But now I think there's, there's actually like a good audience like developer audience there now that there, and maybe it's different, it's slightly different. Because you're in if you're in data science, I don't know if data scientists tend to spend more time on LinkedIn or not. But but, you know, as we're trying to transition to other channels, because there's not really an easy channel to reach all developers anymore. Like, you know, I've been looking at LinkedIn, I just feel like I don't know how to use it. Right. So. So do you have as somebody who's clearly learned how to use it, right? We'd love your advice. Like, what are what are the tips and tricks for other developers on how can they use LinkedIn properly?

**Erin Mikail Staples**  34:38  
Yeah, please help me because I used to block this platform. Like I literally used to log in once a week because I'd be like, I'm not here to hear. You know, it's always like, yeah, some Chad's spicy take that.

**Megan Lieu**  34:52  
You are not alone in that thought. And not alone in that question of like, how do I use me did I don't think LinkedIn is inherently any easier or harder than any other platform to grasp all those things. You're saying like, Hey, I can't seem to understand how to use LinkedIn. That is me with Twitter, that is me with tick tock. And it just so happened that LinkedIn was, I mean, I dabbled in Instagram. And I think that, taking my skills from Instagram, which was taking good pictures, and knowing how to storytel in using words in the captions, I brought those over to LinkedIn. But I don't think that that is the standard way of using LinkedIn. I took what worked for me and took my own flavor of Megan to my audience on LinkedIn. And that is what they associate with me now. And so the lesson of that is you what works for you is what is going to work for you. And so for me, like I said, I really like taking pictures. And I really like storytelling. And that is the brand of my, my LinkedIn platform. And so that made it easy for me to stay consistent. And so if you cannot find a way to stay consistent, that is like that is like the foundation, it's finding what works for you so that you can do it on a regular cadence. And for me, that regular cadence was once a week at first. And then I figured out what works and what resonates well with my audience. And then I gradually pick that up to two and then three, and then four. And now I'm off to seven somehow. And, as with anything, it literally just becomes routine, if you work at it every day. And so if you had asked me a year ago, if I would have the muscle memory to do this, every frickin day, I would have said, heck no, like I at that point, a year ago, I was getting burned off, burnt out off of posting like three, four times a week. And now I've kind of just built up that muscle and figured out what works for my audience to stay consistent. So the two ingredients I always say are, find something that you can authentically talk about so that it sounds like you talking rather than somebody else talking, and then do that consistently. And eventually, you'll hit a couple of those posts that gained a lot of traction. And this advice, I think applies to to almost any other platform, right? Like if you can, if you can find something that you love, talk about talking about and love so much that you can do it consistently. That I think that's the that's the secret sauce, right? But it's just if I dig deep, and I asked myself, How come I haven't cracked the code on Twitter yet? How come I haven't cracked the code on on tick tock yet. It's because I just haven't wanted to, like I haven't wanted to like, figure out the audiences there. And so I'm not, I'm not going to do that. And so that consistency piece falls off. Whereas LinkedIn, I just feel comfortable with that audience and comfortable enough to do it every day. And so that just slowly but surely builds upon itself. And every once in a while you hit that like viral ish post. And that'd be like, Oh, yes. Like, that's what I that's the validation, I needed to keep going. But that's my, that's my thought process behind it. Like, there's nothing magical, it's literally figured out a way for you to tolerate it and then like tolerate it a little bit more to the point where you're like, Okay, I can see myself like regularly doing this and building it into your routine.

**Brian Rinaldi**  38:37  
Do you post like, are they like tutorials? Are they just like, stories? I mean, like and how, like, what's, I guess? I totally, I hear your point. But also like, is there I never know, like, do we you share longer posts, shorter posts? I mean, what's what yeah, you know, twit, Twitter had like this, the one thing that it had is that you had that very strict limitation of characters. So you kind of knew, I had to condense everything, for better or worse into this tiny little, like, box.

**Megan Lieu**  39:12  
Never get to work for me, because I like writing a lot I like and LinkedIn is suitable for me in that in that way. I just like like getting my thoughts out there. And by the end of it, I have like 10 paragraphs and I'm like, okay, like, I'll just I'll just do this and then turns out people are okay with that, like with reading a lot because not a lot but like not whole essay, but longer form. It does well on LinkedIn, because other people do that too. So and that's one of the reasons why I just never made it on on Twitter because I'm like, I have so many thoughts to share it I love sharing stories and writing in the process of writing that story out. I love and but that's not to say that that if it works for my audience, I'm And it worked for your audience, like, I know so many people who are who go viral consistently off of like super short stuff. But it all depends on like, you kind of have to train your audience in a way, like, there's two, there's two forces, like you have to train your audience to get them use to the style of writing that you enjoy doing. But also, you have to figure out what the audience likes. And so just by being a passive audience of the people that you are subscribed to, or that you follow on LinkedIn, you'll figure out like, what your audience tends to react to what they like reading. And so it's like, it's, it's like a push and pull, you have to kind of contribute your your voice to it, but also understand what what voice is they enjoy reading?

**Brian Rinaldi**  40:53  
That's, yeah, that's really good advice. Because I know that when you say that, I'm like, you know, the, the platforms that I've done better on tended to be ones that I spent time there like that I didn't just goes back to my point earlier about you can't just be be there, like, as a megaphone trying to like, you know, here I am. Here's what I'm, here's what I want you to hear Goodbye. I'm out of here. You know, and so like, the platforms that have worked for me are the ones that I've actually spent time on that I'm there often, like more more time listening than I am sharing, right? So yeah. Go ahead. Go

**Erin Mikail Staples**  41:34  
ahead, Megan. Oh, go ahead.

**Brian Rinaldi**  41:39  
Eventually, y'all figure this out.

**Erin Mikail Staples**  41:43  
And I think that makes total sense. Like, thinking about it. I've actually, like, had more success on LinkedIn recently. But that's because I find myself running away from the dumpster fire that is tweet X. Yeah, X, whatever that dumpster fire is, but like, in my last year, like the machine learning community is very huge on Mastodon and so I was very consistent on Mastodon and then once I left that job, and I wasn't working so much, it's like I checked in on Mastodon, the people I was super close with I was like, Well, I actually just talked to them on Discord. So I'm gonna go bump into another discord. And I mean, one of the random things I did today, and my fun employment life was building back up. We have like, internet, friends discord. And it's like, oh, making that somewhere that I actually want to be in control rather than neglecting a lot more. And it's used for random stuff. But I actually have seen myself spending more time on LinkedIn lately, just because it's like, I do like it. But I have also been a lot heavier. And I think this is, we talked about this not a couple of devilish episodes ago, and like the long term impact of the decline of Twitter for dev advocacy, because it very much went hand in hand. But I think it goes down to building actual relationships is I've probably been a lot heavier recently in I don't, I will not subscribe to everybody's newsletter I used to now I won't, I will mute people on every platform. I mute a ton of people. Because I'm like, I'm getting stressed just watching your content. And if your content is stressing me out that I don't need to be consuming it. Right. And it's also I think the thing is, like, one of the things I'm very impressed with how you've handled it and I've always admired like how you approach content creation on LinkedIn is the balancing that being not being afraid to be yourself like and I think especially like there's this pressure to you know, I love how Henry put it with the Dockers and the cotton you know, look at the chinos aren't the doctor isn't like be your busy your best chat on the internet, so to speak, which is very much why I avoided LinkedIn. Like it's just not me. And so that's why I avoided it because I am not someone who has a hot pink hair and tattoos and you know, you're probably not going to I'm not going to your office from a nine to five like you will not catch me in an office for nine to five because I would drive all of you nuts and get nothing done.

**Megan Lieu**  44:08  
Yeah, I, I post plenty of post I don't want to post and then there are posts where it just I can just let it rip and it just I'm like I'm proud of this. And so I have to be myself or else i i would dread it. I like I said there are plenty of posts that I'm like, Alright, there she goes. I it's probably going to tank so I'm just gonna log out but then there are there are posts where I'm like, I am proud of this and I I am very comfortable putting myself out there because I enjoy the process of doing it. And so being myself and like putting myself out there has helped me figure out the pieces that not only my my audience is comfortable reading and they know that that is a side of me but also Figuring out what I enjoy writing. And what I enjoy writing is just like general career development. things I learned in my my last job search. And those things don't have to do with my current job or what my company does. But I just like telling those stories, and I have an endless, like backlog of things to talk about there. Because I could just go on and on and on for days. And so none of those stories involve me wearing a suit, cotton Dockers, whatever, right? But it's it. Like, even if nobody read it, I'd be like, I enjoy writing this, so I'm gonna continue doing it.

**Brian Rinaldi**  45:38  
Yep. Yeah, that, I would agree with that. I think, you know, social media, and I have never, I've always been, I'm much more of a private person, even though you'd see me like I'm on get this thing I'm like, and, and I'm like, I've watched people who are very good at sharing, and they share a lot about themselves. And then like, I try, and I'm like, sis doesn't fit me, which is I mean, I know it. This is why like, I I'm not don't have millions of followers. So it's fun.

**Erin Mikail Staples**  46:08  
It's also different, like, there are things that I share on tick tock that I won't share on LinkedIn. Like it's almost, and this is something that I've personally started to struggle with. Probably only this year is my comedy hobby took off to a little bit more than a hobby. But then there's people who are in my comedy world that are like you do what? Like, we'd like they have zero interest at all in my tech life. They're like, Yeah, we don't care about that and go back to telling jokes here. And but. And then it's interesting, because like, people in tech know that I do comedy on the side. And they're like, Okay, I'm fast forwarding paths. And I And it's interesting, because like, Instagram was like, the throw all feed for me. Like, it's like, I will repost anybody's stories, like, I will have memes. I have 1000 pictures of my dog, like, you'll see my husband on there. And so it's funny because they get people to, like, that's where both audiences seem to comment, like with one or the other. But I don't post a lot of like, my day job stuff. Very rarely. It's like, unless I'm going to a conference. And they asked me to fix my phone. No, but I have gotten a lot of fix my website. It's built on Wix. Which no shit on Wix. But I'm like, I don't want to know I'm not. I can't I don't know how to do that. And I'm not fixing your website for free. And, hey, will you edit my reel or my video? No, I barely edit my own videos. So no, that's that's the comedy side that I asked.

**Brian Rinaldi**  47:34  
Editing videos. Oh, my God. reels.

**Erin Mikail Staples**  47:38  
Yeah, there's real,

**Brian Rinaldi**  47:40  
they do editing they ask you to? Yeah, there's a whole honestly,

**Erin Mikail Staples**  47:45  
people could make good money, just editing reels and editing content for comedians. And like theater people, there's an entire business that could be done out there. And it's someone that is not me, because I don't want to. So that's why I haven't as

**Brian Rinaldi**  48:01  
As a quick side note on that. I tried editing those, and it's just, I don't do a very good job of it. So I've been trying with moderate success. I'm just not consistent enough. There's a tool, there's a bunch of AI tools, but like one I'd like the one I found that I like is called Opus clips, or Opus clip. And basically, I'll like at the end of today, I'll feed this into OBS clip, and it will actually find chunks based on some keywords that I give it of like that you can you can you can tell it, like how long you want and stuff like that. And you'll find the chunks and reformat it. And the nice thing it does, like, I'm not this is not a pitch for Opus clip. But so far, I've been happy. Like, it'll actually take like the this wide video and then we'll find the the people and it'll put them in the format that fits on the phone. Yeah, pretty cool transcript and stuff like that. So like, I'm like, okay, you know, instead of it's, I've had moderate success, like with it so far in terms of, I've had a couple things like one or two things, get a lot of people and then most of the other stuff get Not that many, but I think that's more a factor of like, the channel than then the tool. So anyway, it's, it's cool, and they saved me. Like I spend I'll put up one that I spent maybe five minutes on as opposed to editing them before the pain was it just took me so long. You know, going through the video finding this stuff. It's like yeah.

**Brian Rinaldi**  49:39  
Yeah, absolutely. Okay, so, we are nearing our time. And we have so many. So you know, I have to tell every guest that about this because we the show is Dev relish. And yes, we have a nice play on words on relish. And so like a no Every episode we have a pickle fact and I'm hoping that Aaron has a pickle pickle for us because she's

**Erin Mikail Staples**  50:07  
so pickle Anna sauerkraut adjacent fact today, okay,

**Brian Rinaldi**  50:12  
so So the other thing Megan you may not know is that Aaron is a Pickler? herself. So this this was like, you know, perfect confluence of things so like Aaron and I, that I asked Aaron to do this show that was all pickle themed, and then only to find out Hey, Aaron so Pickler.

**Erin Mikail Staples**  50:32  
This was when some people made pandemic sourdough I was pandemic fermenting, and I took everything out of our apartment at the time and living in New York, you have an abundance of cabinet space, and by that I mean none. So I took everything seemed in a dark, cool space to pickle. I took everything out and like made like all of our pots and pans were like on the counter then and my husband's like, You were absolutely nuts. Like, what are you doing here? And as you know, two weeks later, he was like, I will never complain again, because those pickles are really good. But um, I will share actually today's pickle fat comes from an experience I had this weekend and then I googled the history of it because I was the person to Google at a bar. Um, so the origin of a pickle back shot, which there is debate among the origin of it. Brian's giving me a look, but it is like what does that pickle back? Oh, whiskey, okay, with followed by a shot of pickle juice and an alcohol, no sting of the alcohol. If you've never had one, you do recommend having one. There is a debate on if it is existed in the southern United States. Or actually Bushwick Country Club in Bushwick New York, which is about I used to live in Bushwick New York I now live in Greenpoint. But a local bar here in Greenpoint, which is known for a Polish immigrants neighborhood has a sour back, which is a twist on it with Polish vodka and sauerkraut, Brian, but that is your fun fact is there is a big debate on where the pic back shot originally intended for came from. But it is a very American, quote unquote, hipster drink is what they call it. And the iOS 17 is letting me know that we need balloons. That's the other latest if you haven't heard that,

**Brian Rinaldi**  52:23  
oh my god. That Wait, what

**Erin Mikail Staples**  52:27  
do you like you just have to like yeah, oh. If you have your computer, leave it like and you're on iOS and you're on a Mac and you've done the latest update. Maybe went off? Um, some people say it because I this is another fun fact that is there was a verge article that came out because it kept appearing in people's therapies like virtual therapy calls. So iOS had to release a statement because people would be like having a moment in therapy and blue camera would do like balloons or fireworks. I had fireworks I don't know how I triggered them the other day but that's so funny.

**Brian Rinaldi**  53:03  
Yeah, there is there is I forgot I there's a way you trigger that my such a pointless

**Erin Mikail Staples**  53:11  
because like I never never it's like there's an emoji one on zoom that I had to disable to.

**Brian Rinaldi**  53:17  
Yeah.

**Brian Rinaldi**  53:19  
So that was a good pickle fact. I, I I suppose big debate is relative. I'm wondering how big this is just like a couple of guys in the bar in the Northeast are like, ya know, we invented it.

**Erin Mikail Staples**  53:37  
It's actually a female patron is rumored to have mentioned it. Okay, actually pickle backs were invented by a woman so love that. Yeah, I will.

**Brian Rinaldi**  53:49  
No, no relation to Nickelback. Okay, no relation

**Erin Mikail Staples**  53:51  
to Nickelback the if you Google or not, here's an article that says the Bushwick is the origin but yeah, some people say it is a southern thing depending on the website you go to and my googling at the bar. did not do.

**Brian Rinaldi**  54:12  
We we've now Megan you have something you can use for future LinkedIn posts. We're gonna be like following Megan. It's just gonna be like, Well, I had been researching more about the pickle back and

**Megan Lieu**  54:25  
I love that. Have you guys ever had a pickle ball fact?

**Erin Mikail Staples**  54:31  
Have not.

**Brian Rinaldi**  54:32  
What's What's the pickleball pickleball pickleball the

**Erin Mikail Staples**  54:35  
game like the game right? Yeah, yeah,

**Brian Rinaldi**  54:38  
I was like, wait, I'm trying to like think of like, like, I'm actually

**Erin Mikail Staples**  54:42  
really good snarky article in our local New York paper about pickle ball in the last year.

**Brian Rinaldi**  54:49  
I bet it was not become a thing now. I have never played it. Okay. So we are unfortunately out of time. This was a ton of fun. Michigan, we're really grateful to have you here. So for folks who want to, you know, get in touch with you, obviously, they can find you on LinkedIn, is there any, this is your opportunity to just tell us how to get in touch with you or anything, any if you want to pitch any projects you're working on or anything like that. You can find

**Megan Lieu**  55:18  
me on LinkedIn. I'm on there. 24/7, literally, and then find me on deep nodes website depot.com. I'll be on the blog a lot. So you'll see my name sprinkled occasionally throughout there. But yeah, it's mostly it's mostly LinkedIn until I find the time to actually diversify. Yeah.

**Brian Rinaldi**  55:43  
Sounds good. All right. So really appreciate everybody who attended this. This week. We just to give you some updates for those who are still watching, we've got some good stuff coming up this Friday. We've got Nick Taylor is going to be digging into next Jas conference Thursday. And so the very next day, Nick is going to be like, grabbing the new next stuff and trying it out. So that's on Friday at 1pm. And then on Tuesday on Halloween, we are hosting onto DevOps for those you interested in DevOps. It's going to be like five speakers, all DevOps talk, good topics, some really great talks. So that should be a lot of fun, too. So, yeah, until then, we'll and we'll be announcing a new dev relish very, very soon. So look for that as well. So until next time, thanks, everybody. Hi.

**Erin Mikail Staples**  56:37  
Yeah, thanks for coming. And Thanks, Megan for listening, joining in and chatting with us. We're piggybacking with us where am I believes that like now I can't get it to turn on again ever works when you want it to an apple All right.

Transcribed by https://otter.ai
