---
_build:
  list: false
  render: never
---

**Brian Rinaldi**  0:05  
Hello, everybody, we're here. So we have, you know, you all weren't aware but Aaron almost didn't make it. She was at a conference, caught the COVID got the Paxlovid nice long nap and was able to make it with us. So we were both Rizel and I were both happy to see her appear in, in the feed as well. So for those of you don't know me and **Brian Rinaldi** developer experience engineer in LaunchDarkly, also started CFE dot Dev. Erin, do you want to introduce yourself? Yeah,

**Erin Mikail Staples**  0:43  
I'm Erin. I am currently coming to you live from quarantine in my apartment. But I am the developer community advocate at label studio. So I'm in the machine learning and AI space.

**Brian Rinaldi**  0:56  
And with us, we got Rizel Scarlett of GitHub you want to do an introduction of yourself for so?

**Rizel Scarlett**  1:02  
Yeah, sure. Um, I think you can mostly set it. My name is Rizel Scarlett. I'm a developer advocate at GitHub. I guess I'm mostly focused on like Copilot and CodeSpaces. And I'm happy y'all thought it was cool enough to hang out with y'all.

**Brian Rinaldi**  1:18  
Of course you are. And I actually had you on a, you've been on a couple of CFE presentations as well. So yeah, you're lucky.

**Erin Mikail Staples**  1:27  
And I  Copilot and CodeSpaces are two tools I have used in the last 48 hours. So that's like, I like, and I quote, like your blog post. And I'm like, please recognize

**Rizel Scarlett**  1:39  
are good to put it in.

**Erin Mikail Staples**  1:39  
Perfect, great. Like, do you need anything? I'm often like, please read this, everybody. Do you CodeSpaces do do all the fun stuff?

**Brian Rinaldi**  1:50  
Yeah, I need I need actually, I need I need Rizel's time for like an hour just to show me how to get the most out of Copilot, because I read your posts and stuff. And I'm like, I haven't using Copilot but like, I feel like I need I you know, that prompt engineering kind of thing. It's just like, I haven't quite gotten there yet.

**Rizel Scarlett**  2:09  
I got you. I want to like create a longer like a more detailed blog post, like the first one I did on prompt engineering was like, super short. And I was like, well, it wasn't super short. But it was just like my random thoughts. But then I didn't realize people were like, Oh, I really needed this. I'm like, Okay, I'll like expand on it more than Yeah, yeah,

**Brian Rinaldi**  2:27  
it was great. I actually sent it to a colleague to who was like, you know, it's like, I feel like I'm not using Copilot to its best abilities, you know? And I'm like, Yeah, well, I saw this post. And I sent it to him. I'm like, this seems like exactly what we want to do. Thank you.

**Erin Mikail Staples**  2:45  
Meanwhile, I'm over here. Like, I start thinking of something and then I'm like, timeout, I'm just going to ask Copilot.

**Rizel Scarlett**  2:52  
Now, I'd be doing that with ChatGPT. I have it like, open on every browser on my phone on my laptop. I'm just like, I have avery good question. Could I ask ChatGPT or copilot chat or whatever.

**Brian Rinaldi**  3:04  
Oh, yeah, they're asking. They're asking for the link to the post I gotta get, I guess, is the best place to get it on dev.to. Yeah. I didn't put it anywhere else. Yeah. Okay, working on that. Yeah,

**Erin Mikail Staples**  3:20  
we've got a Discord server as well. And I'm dropping all the links that were mentioned today from the chat in the discord server as well. So just join the CFE dot dev Discord server. And there is a dev release channel. We've just created a thread that has not only the posts from today, but all the links and cool stuff.

**Brian Rinaldi**  3:43  
Yeah, I'm trying to find you have that link right now.

**Rizel Scarlett**  3:46  
I put it in the private chat. Oh, perfect.

**Brian Rinaldi**  3:48  
Grab it from me. All right, I'm grabbing it and put it in the chat here. This is the post that that we were talking about this prompt engineering. Okay, so although we're actually here not to talk about so much about prompt engineering. I'd love to talk about that some more. But we do want to talk about demo. So, so I mean, I'd say you're, you've been endeavor with like, two years, right? It's

**Rizel Scarlett**  4:22  
a year and like, we'd want seven months. September will be my two year mark.

**Brian Rinaldi**  4:29  
Yeah, tell us tell us a little bit about like, what kind of brought you into the DevRel space. What is it you like about the role that you that drew you to it?

**Rizel Scarlett**  4:39  
Yeah, okay, here's, here's like my path. First, I signed up to study psychology in college, and then I was like, I don't have money for the next semester. And then people were talking about in order to like, actually have a whole career in psychology. You have to get a masters and I was like, oh, nevermind. So then I like dropped out of college. Then I I started Googling how to make how to make more money, a tech kept popping up

**Brian Rinaldi**  5:11  
it's always great already.

**Rizel Scarlett**  5:14  
Tech kept popping up. And at first I was gonna sign up for computer science. But I saw that one of the requirements was like linear algebra and all this other stuff that sounded really scary, because I'm not really like math. I don't know, I've never been really that great at math. So then I went for the IT route. So I got my Associates in it, I was a help desk technician, I was like, this is super fun. But then I kind of started getting bored after a while, because I felt like I like, understood all the things and also kind of any more challenge. And people were talking about API's and all that cool stuff. And I was trying it out. And I was like, I want to be a software engineer. So I went to coding bootcamp. And then I became a software engineer. And then I got my computer science degree, but I kind of missed, like helping people directly. So I like started helping, or I started this nonprofit with other folks. That was like teaching women of color, how to code. And then I was like, dang, I wish I could do this, like, for my full time job and get six figures. And then I started seeing like people on Twitter like Andrew Jones, and Brian Douglas doing talks and like teaching people and I was like, I don't want to be that. But I just didn't know what it was. And then I like stalked their LinkedIn profiles, I figured out what it was. And I just kept applying to the jobs until somebody said, Yes, that's that's the story.

**Brian Rinaldi**  6:34  
Yeah, that's amazing.

**Erin Mikail Staples**  6:36  
I love how you had like a target to go to, because I think like, I ended up in it on accident, but not on purpose. Like I was like, I remember they were like, you are ahead of open source community. And I was like, great. How to Open Source community. That was my path was like, the accidental ended up that I didn't know it was a job.

**Rizel Scarlett**  6:57  
Yeah. I hear a lot of people have that. I'm like, I wish I accidentally got a job. They're like, Hey, you're ahead of this. I'll be like, Wow, thank you.

**Erin Mikail Staples**  7:07  
Yeah, I mean, it was a definite like,

**Rizel Scarlett**  7:10  
oh, oh, it was scary. It's kind of Yeah, it was

**Erin Mikail Staples**  7:13  
terrifying. It was terrifying. Um, especially because I was like, what? But I think in, in developer advocacy, like, you are one of the things that I like, Absolutely. I'm always amazed by you. It's like holy cow, the content that you create is like, your content machine. Like, I'm very impressed by that. Very impressed. How do you approach making content that's so human? And like, what do you think the long term value of this content is? Sometimes that's where I struggle is like, I can make this blog post, but I'll be out of date in six months, and then I'm gonna cry about it.

**Rizel Scarlett**  7:48  
Oh, hmm. That's a good question. I don't know, I feel like the way that I create content is just like how I would be talking to somebody like this. Like, I would just I don't know if that makes any sense. But I feel like maybe sometimes some people put a lot of pressure on themselves to make a blog post sound a certain way. And I feel like I just write how I talk. And I don't, I don't do that much editing or anything, I just publish it. And sometimes it has typos. And people message me, and they're like, you have typos in this. But I think that helps to speed up the process for me. And like I mean, I use Grammarly and stuff like that. But I feel like I have like a pretty good, like, standard for how I will write my blog posts. Like I always think about who's my specific audience going to be because I think one time I was having a struggle, where I was like, I want it to be for beginners, but I also want it to be for experts. And like, it was like hard, like the blog posts became like super long and hard to really relate to it. And then I just started focusing on my audience wrote out the outline spoken my own, like, authentic voice. And I mean, if it gets outdated, it gets outdated. I tried to focus on stuff that I hear my job, like they have product meetings, or something called product club, and I just focus on what they say that they really want to push out. So like, if they're not talking about GitHub packages, I'm not writing anything about your packages, but I'm like, I hear them talking about co pilot. I'm like, Alright, I can like, try that one out. So I guess that's how I approach it.

**Brian Rinaldi**  9:18  
So it sounds sounds like like, it's one of the things we get in this show is like how each different company tends to have a different approach to DevRel. Yeah. So it sounds like for you, you get like a lot of a lot of freedom to kind of pick and choose where where you want to put your focus. Yeah, yeah.

**Rizel Scarlett**  9:40  
Yeah. Especially when I started because I started off as a junior developer advocate. So it was kind of like, do what you want and learn. So that gave me a lot of like, freedom to just be like, I want to learn this. I want to create this. I mean, now it's starting to become like, this is your focus. Rizel tried to focus on that, but I never really been that good at focusing to be on this If

**Erin Mikail Staples**  10:02  
I don't know so I actually think I'm gonna get on my soapbox here. This is a new take I have coming in this is influenced by recent conference attendees where I'm like, I don't like much like you like, I don't have a technical background, I'm self taught, I learned by the School of Google, but less in any other way than crap, I was enough to figure out how to get my job done and not let some dude, bro run me over. Kind of like how I learned and being told my code sucks a lot. And breaking things a lot. Um, but I think getting on my soapbox here, I think taking that newbie approach is actually really helpful from an educational standpoint, like I moved into the ML industry about eight months ago now. And so like, when I first went in, I was open in my like, interviews of like, I've written Python. I've came from data journalism. And that's pythons, weirdly, the only programming language I've had any formal instruction. And that was because I took one semester of data journalism. So I mean, is that a lot of Python knowledge? No. Is it the packages and the things that relate to like basic databases? And like, using API's? Yes. And have I worked with data and other cases? Yes. But I was new to the world of machine learning and entering machine learning industry. But I think it gave me a leg up in many ways. Because I'm like, Why isn't anybody talking about this? Like, this is like, the like, cool. You guys are all talking about these really high end applications. But like, we need to break down how they're working. Where, Why is this important? Or, like, sometimes I feel like my dumb I say dumb questions in quotations, because there are no dumb questions, but like, those are sometimes the most valuable questions.

**Rizel Scarlett**  11:39  
Yeah. Yeah, I agree. That's kind of like my interview for the role like GitHub, it was, I was supposed to do a presentation on something GitHub could probably improve, or how I would present something, it was mostly a rant of like, how they like, tell everybody to contribute to open source. But as someone like me, who never had contributed to open source, like, I don't really feel like the steps are there are like, there's a lot of explanations. So like, that's what I dived into when I first started, you get hung up, and I wasn't sure if I was like, offending everybody in the interview, but they were like, Yeah, we agree. Because also, I agree with you, Erin, where it's like, like, you know, we're talking at a high level sometimes. And then it's like, what about the people who have never done this, whether they're a beginner overall, or like a beginner in that specific?

**Brian Rinaldi**  12:30  
Yeah, I've definitely seen him even in my career, but we have a tendency, especially as we, you know, get deeper in the role to like, endeavor, to kind of feel like we have to dig deep into come out with, oh, this is gonna be so awesome. It's gonna show how to do this. And it was all really difficult. When, you know, I still think the large majority, their audience is still like, okay, but that's cool. But I don't even know how to get started. Because then we sometimes can ignore that beginner content in favor of like things that look impressive to, you know, to our Twitter, friends and stuff like that, like, you know, the echo chamber that is sometimes I think, DevRel gets stuck in a little bit of this echo chamber, we're talking to each other, I say on a show about their role for different people. But

**Erin Mikail Staples**  13:27  
Brian, like you and I have had this conversation, I believe, before of like, even and one of the things like I just came from PyCon, and pipe data, and they had a whole thing of like, what's your favorite code editor to write? And then people would be like, no book, and then they'd be like, Jupiter, and then they'd be like, Visual Studio code, or, and then it would be like, who's still writing on them? And it's like, that's such insider jokes. Yeah. But like, even I like, it's not fun to sit there. And like, everybody else is like laughing at a joke that, like, I'm fortunate now that I understand. But like, before, that's a joke that like, even like a year ago, I may have not picked up on or. And that's like, how can we make this a more inclusive space? Like I remember very distinctly, I was actually scared away from being in a community role. This is in the last two years, because I had feedback from someone on engineering, and I was on the DevRel community side. And I had put a pull request and didn't format it completely correctly. And I got like, shoot a new one. And it's like, Well, great. I'm not the code was technically there. But like, I formatted a pull request wrong. And like, and like, that's enough to scare people away. Yeah. And it's like, you know, you could have just walked me through that and how to like, do it better other than me, yeah.

**Brian Rinaldi**  14:45  
So for that, what like actually that, you know, to Erin's point, what what are some of the things that you Yeah, percentage and where do you where do you think there's still work to be done on that whole kind of trying to bring people in into contributions.

**Rizel Scarlett**  15:03  
Yeah, okay. Well, first to what Erin said earlier, I relate, because I used to have a software engineering job. And I told them, I wanted to be a developer advocate. They're like, what are your career goals, and they were like to my code out a lot. And then they're like to be a developer advocate, you actually have to be a good software engineer. And I was like, okay, but anyways, back to the question you asked on, like, what I brought up to them? I, I think, you know, I don't really remember the presentation that much. But I think I talked to them more about like, I'm not sure understanding how to get my pull request accepted. I'm not understanding necessarily how to like find beginner, beginner repositories to contribute to I'm not understanding how to even ask questions to people, because I didn't, I didn't even know how to use this court. So I would just be in the like, the repo and I'd be like, Alright, I want to pick up this issue, but I want more details on it. How do I get in contact with the maintainer? I think I had, like, downloaded discord. And then it said, I couldn't message the maintainer. And I was like, I don't I don't know how to use this. So like, those are like problems I brought up, I brought up like the lack of diversity as well, because it can look scary to like, just message a random white man and be like, Hey, I'm trying to write some code to your thing. And then also, I had this like, query, like, I didn't never hear that, like, saw, like, open source was actually mean. But I like made made it up in my mind that, like, if I open up a pull request, people are gonna laugh at me. Because I my jobs, my past jobs, it wasn't always like, positive feedback, or like, here's how to improve it, it will just be like, this sucks. And I'd be like, Oh, okay, so I was like, I don't want that experience in the public. So like, the way I tried to approach it was like, it's going to be friendly. Here. Some, like beginner repositories. I even I tried to do this, but I couldn't keep it up was like, bringing people on a stream who never contributed to open source before and me walking them, like through their their first PR, which was fun, but it's it was a lot of work.

**Brian Rinaldi**  17:02  
Yeah.

**Rizel Scarlett**  17:05  
I think I think the work to be done is I don't I don't know, if I even made that big of an impact there. I think those things are still problems where it's like people want to contribute. But they don't they still don't know, it's necessarily that friendly. I've tried as much as possible to show them but you know, I can only reach a certain amount of audience. And then like, how do they get the help? How do they get someone to like walk them through it so they can feel confident doing it? Yeah.

**Brian Rinaldi**  17:32  
Yeah, some of the some of the like, I've seen a trend towards putting some starter issues for people on some bigger projects. And I think that's a great idea. Something I've always personally advocated. I mean, I will say, I haven't done enough or much of it, I guess, myself, but for people who want is like, just start with the dogs, the dogs are a great way, especially because as somebody new, you tend to be like, the first the person who recognizes the stumbling blocks for somebody else who come in not knowing the property and other tool. So it's never it's never the thing that I think seems like I you know, you want to be like brings you much glory is contributing, you know, improvements to the docks, but it's like, but it's I think it's a great way to kind of start and even build that relationship with the people.

**Erin Mikail Staples**  18:32  
And how do you treat a doc pull request? And I think this is a huge one, like, so often, you're like, Oh, my goodness, look at this person. And like, I know, I'm coming from an open source organization like we recently have. We had to pull requests this month, and one was a Doc's pull requests, and one was a feature pull request, and how do you treat them? Like, you should treat them? equivalent? Because if you don't like I recently contributed to actually crowd dot Dev, and I'm gonna give him a shout out because they did a very good job of this. So the QA dot dev repo, I noticed a typo. I was playing around on their software, and I noticed a typo. And I was like, Hey, I noticed and I know what a front end that I can literally just correct this typo. Like I'm doing no other code edits, but correcting a typo. That isn't our front end code. Yeah. And they sent me an email, they sent me a shout out, they shouted me out on another platform, but it was like, all these little things go a long way, even though I didn't build a single extension, and it took me probably 15 minutes to contribute that.

**Rizel Scarlett**  19:30  
Wow, that's awesome.

**Erin Mikail Staples**  19:32  
That's what we need, like reading more things like that, like, or even like we had recently a contributor to our repo be like, you're missing a guide on this. Is it okay, if I write this and I'm like, Yes. Please, like, Thank you for telling me and I would never have known if you didn't tell me that individual use case. Yeah, like I don't know. I'm not using our product. 110 different ways every day. Try to but there's only two waiting for hours on a day. Eight of which I'm working. It's not all the time on that.

**Rizel Scarlett**  20:04  
Yeah, yeah, non code contributions are really important. And I wish more people more more potential contributors knew that too, like, they're out there. I know, a lot of times we're like, oh, we gotta go for the code. But like you all mentioned, like, Docs, translations are always needed. Design. I always wondered, though, like, how to how to open source maintainer is really handled like design contributions. Because to me, I always, I often see them like, contract people out rather than, like, get a design contribution. And

**Brian Rinaldi**  20:37  
yeah, oh, my God. I mean, if if I were creating an open source project, I'd love design contributions, because I, it is one area where I, I fall down in actually, like, I will say, even in all my projects, it is the biggest stumbling block to getting started is like, I couldn't build the thing. I just can't design it in such a Yeah, it's so difficult. But okay, I want to if you don't mind, I want to switch gears a little bit. Because I am really curious about co-pilot. We talked a little bit about it, but also, like, on the topic of like, how do you think having AI coding assistance like that is going to change the way we approach, like, Devereaux? I mean, because part of that is teaching people how to do sometimes these simple things, and you know, how to build apps and stuff like that? I mean, is it something we you think, obviously, you have to talk about the product? Because that's something you are sell, but like, is it something? What do you feel about, like, you know, if I'm teaching somebody how to do something in, you know, as part of my job, like, how does a coding assistant end up? You know, taking a part of that word, including coding is, like, AI assistant code snippets in that were generated in a post and things like that.

**Rizel Scarlett**  22:05  
Interesting question. I mean, one thing for me is like, at least during demos, it's a little scary, because I'm like, Oh, my gosh, we got to go. But then copilot has its own just like tabbing and typing. Um, that is an interesting question of, like, how is it going to affect how we do stuff? Um, I think I think I encouraged using it because I've, I'm going to write a blog post on like, how to create a Google Chrome extension, but using copilot and I think we can like, you know, write write comments, but then and ensure the code that is generated. But also don't forget to explain what that that code is doing. So the person can actually learn from it. I don't think it will, I don't think it will hurt, it will just give more context and help people to feel like more empowered and sped up. Because either way, you see a blog post, at least for me, I don't know about it, I see a blog post or read a little bit, and then I just start copying and pasting and hoping that it's working. So it's at least nice to like, have that comment at the top or be like, Oh, okay, this is how we generated it. And like, I think it might get people a little bit more excited about like coding, especially if they're coming from a beginner standpoint. I hope I answered that,

**Erin Mikail Staples**  23:18  
right. Yeah. No, I think that's a perfect answer. And I think I'm gonna, I'm gonna bounce off of that, because I think from the way that you answered that is very much looking at copilot just like another tool. And I think 10 years from now, let's fast forward, we've done everything and we're all magical badasses, or whatever, in our own respective fields. Because I think that's obviously how it's gonna go to predicting magic ball here.

**Brian Rinaldi**  23:41  
10 years from now, I'm not gonna be in my field.

**Erin Mikail Staples**  23:43  
That's right. Like I'm out. I don't know, maybe I'm retired because like, we're already in our own like, like, let's pretend like we're all like, whatever, no private island and reflecting on this, you know, the the Mad success of this podcast. This episode alone. You know, I think all of that being said is like, will it just be considered like another tool that we use in our toolkit? Like, think of how Visual Studio code, you know Vyas code like really, or Atom even revolutionized coding for many people. Like, I barely use the terminal now, like, the terminal terrifies me. 97% of the days, I'm like, who I like, there's somewhere a livestream video of me putting things it's 45 minutes of me putting things in the wrong folder watching user terminal because I was like, I'm gonna do this tutorial. In terminal watch me go and it's me putting things in the wrong folder. 45 minutes. It's embarrassing. But tools like VS code, really made it easier and like it. Do you think that code pilot is just the next generation of these types of tools? Yeah,

**Rizel Scarlett**  24:47  
I think so. And I mean, that's what GitHub is aiming for. I think sometimes like when the some of the user feedback I've seen on Twitter is them like saying, Oh, my God is going to take our jobs, blah, blah, blah. Like it really don't think it's gonna do that. It's just a tool, just like how envious code you have like the little autocomplete thing. Like, you don't have to accept the autocomplete suggestion it gives you, you just have to pay attention and be like, Nope, that's not what I want, or Yes, that's what I want. Same thing with Copilot. It's just another tool in our toolbox to help us and I don't, I don't remember what it's called, I'm calling autocomplete. But you know, when you like start typing, and you do dot whatever, and it creates a mess. Yeah, yeah, that's,

**Erin Mikail Staples**  25:26  
that's autocomplete in my brain. So

**Brian Rinaldi**  25:28  
Sasha has a question. He says, it finds it interesting that developers are open to co pilot generated code, but not to, to like, general code that are designed to code so like things that basically, you know, we were fine with, with having the AI spit out code for us. But then tools that are like, Hey, I'm going to just do this kind of visual design, have it generate an app for me tends to be like, a gift kind of derisive looks from developers, sometimes I think, interesting. I wasn't exactly what he said. But I mean, I would agree with him on that.

**Rizel Scarlett**  26:07  
Design to code ones,

**Erin Mikail Staples**  26:08  
like the figma. I was gonna say, is that like the figma plugins that are like figma? To whatever? CSS?

**Brian Rinaldi**  26:15  
Yeah, I think it's, it's essentially, I would say, like the no code type of tools.

**Erin Mikail Staples**  26:22  
Oh, I have a lot of spicy takes your Bumble let result go first. I'm just gonna set my name. I

**Rizel Scarlett**  26:28  
don't know. Okay, so from me, I have a hard time with low code. This is so dumb, but sometimes I'm like dragging and dropping the stuff. I'm like, I could have just built this myself. I think it's awesome, right? It looks so cool. Especially the stuff that are like, like, it's local, not no code, like the things that can incorporate code as well. Like, I think amplication is a cool product. I don't know if y'all know about that. But it like generates the backend code for you plus database. That's cool. But like, for me, I, I feel I have more control with copilot over what it generates, because it's only generating small snippets of code, and I can go back and edit it. Whereas, like, for me with low code, it like generated a whole app and a whole bunch of code. And now I have to go through it and be like, I want to change this. I don't know what file it's in. Like, that's, that's my apprehension. But I don't know.

**Brian Rinaldi**  27:24  
I think there's also like the context, right? Like, see, I really hadn't given this thought until such as question, but I'm like, okay, but, you know, with with a tool like copilot, or whatever, generally speaking, although people will go into ChatGPT and ask them questions, but like, they're typing, and I just put like, comment or whatever. And it's, it's, it's still within my code context, right? Like, I'm not, I'm not moving into a visual tool to then get code. You know what I mean? So,

**Erin Mikail Staples**  27:55  
so I'll add the comment. So go ahead, Brian. I was gonna say I have a very strong opinion on this. Okay. I've actually been a creator. In full disclosure, I've been a content creator in the low code, no code space, and came from that space, because, again, journalism, major WhatsApp and an art major, but learn to code by being stubborn and figuring it out on the chaos route. So I tried all the no code tools. I've tried almost all of them. I've created content tutorials. I've actually written help documents for some of these tools. So flashback to premiere jobs to pay the bills. My issue with some of them is compatibility. Because Have you ever taken those tools, and then been like, Oh, my goodness, this tool hasn't scaled, they're expensive. Like to scale a tool like bubble or a dalo, or even airtable. To add the number of users is super expensive. And it doesn't often fit within a modern web stack, and it doesn't fit within another tool. That being said, I still use them. Like, it's great for an MVP, it's great for getting something off the ground. It's great for really quick testing or being able to communicate to developers. However, like I do, remember, specifically, there was a project they worked on in the low code space about two years ago now. And the concepts of code I think, are more of a problem solving context. So like when it comes to databases, your database isn't locode or an Excel spreadsheet, is it an air table? Is it a SQL database, like those are three different databases, different technical skill levels, but the content is still the same. And the context is still the same. You need a first name, you need a last name, you need an email, you need to know where the data is coming from, whether it's an API, Zapier or a web hook, so on and so forth. But if you're missing that, I think sometimes low code or no code makes it so easy to just solve the problem without thinking about how your data is structured, or the longevity of the tool, that it becomes really expensive. And so my grievances aren't with the tools itself, but it's more of I think it lets you skip some of the critical thinking process. That's my spicy take. Sorry, it's too spicy. We're all of that. Take,

**Brian Rinaldi**  30:02  
yeah, we needed this spicy, spicy, pickled spicy relish that was

**Erin Mikail Staples**  30:07  
spicy relish the spicy habanero something. Something membranes.

**Brian Rinaldi**  30:16  
But you know, I do you think I do think these, like, I'm curious, I've only really started to, to dig into like using these tools and and see how it actually affects the way that I do my job as a developer like I think, for me right now the biggest thing is is like, you know, the demo is usually the hardest part on any, any thing that like, whether I'm doing a talk, or I'm doing a an article, like building that demo is usually the most time consuming piece. And, and, you know, it can help a lot with that because, you know, honestly, I'm not looking for to do brain surgery kind of thing. Like I'm not building, I'm building demos for people that understand how to do fairly simple things. I'm not like, you know, getting super complex, and, you know, you want to keep the demo simple. So it's learnable so, you know, copilots perfect for writing those pieces or you know, that like, hey, you know, how to generate or, you know, chat TBT generate me it's an app with tailwind and Astro or whatever and it's like I mean, granted Astra can do that, I guess bad example but but you know, I just gets it gets some of those pieces that I used to spend a lot of time like even that design piece like having it spit me out like the the layouts and stuff like that is is useful.

Speaker 3  31:46  
Yeah, I agree. I used Copilot to do like dynamic routes. And next Jas, like someone was like, We need this app already. resile, hurry up. And I was like, oh, man, I have a lot of time. And then copilot just did it. And I was like, Oh, perfect. Like, easy.

**Brian Rinaldi**  32:06  
I love Lucia's comment. People rolling their own brain surgery. It's true.

**Erin Mikail Staples**  32:13  
I probably want someone like say like my brain surgeon should have a backup should not be me. No, please, let's not get AI to the point of brain surgery. Oh, no.

**Brian Rinaldi**  32:26  
I don't know you know, in the in the sci fi movies, it's always like your robot performing the surgeries and stuff like

**Rizel Scarlett**  32:33  
that still seems scary to me.

**Erin Mikail Staples**  32:40  
So the result like to like what is like when you think of like GitHub, like Gabs, another one of those things that intimidated the crap out of me when I first learned to code, I was like, it was scary. I'm not going on there. Yikes. I actually have a floater GitHub account, but I forgot my login and password. And like, my stars are a mess. My repos are all a mess. Don't look at my GitHub, everybody. Um, but what what really kind of like, tell us about like, what misconceptions you hear a lot of when it comes to GitHub?

Speaker 3  33:11  
Oh, that's a good question. I don't, I could talk about my own misconceptions before our own misconceptions. Yeah, I did. I did think just like you, I was like, this thing is scary. I think I made a, I realized that I made my account since like, 2016. I don't think I knew how to code, then I think I just made it and I was like, I want to learn how to code. And I heard people go on this. And then I there's no commits until 2018. Because I was like, I don't know what the heck this thing is. It doesn't look scary. I think a one misconception is that people confuse Git and GitHub. Like, they sometimes like, bring me on to like, skip my expertise in Git. And I'm like, I work at GitHub, I can do as much as, like possible, but I don't like know, all the git commands ever. It's just a tool that, like, allows you to visually see the version control, but not necessarily that and then I do sometimes hear people say, I didn't know that GitHub had all these other like products and tools. Like I didn't know what had CodeSpaces or actions or security or whatever. Like they just have been using it to share and collaborate on code. And I think I had that perspective as well. I think in my interview, they were like, What do you want to like work on when you get here and I was like, open source and I can teach people about get I know git bisect they were like, okay, with the scope. But yeah, those are I think those are the misconceptions I hear.

**Erin Mikail Staples**  34:41  
I mean, yeah, fair. I don't really like the last eight months but getting Yeah. Oh, wait, they're different. They just go awkwardly. I don't wait because, I mean, I barely use git commands. I still like it was like a long time learning or I was just like, GitHub is a place where you put your code. Yeah.

**Brian Rinaldi**  35:05  
I'll make a, I guess, somewhat embarrassing. Amongst certain crowd might be embarrassing admission here. I can't do git from the command line to save my life. Like not even basic stuff. Like, I suck at even that. So I, I'm either using like, you know, VS code, I use the, you know, integration. So where I use or use the, what is it that get your app, the GitHub Desktop? Yeah, yeah. But beyond that, like,

**Erin Mikail Staples**  35:38  
top is, like, literally, once I figured out Github desktop, I was like, I am a pro. It covered up the fact I don't actually don't get, like, Yeah,

**Brian Rinaldi**  35:50  
I had to I a good friend of mine, who I actually got to see just a couple days ago, he did a presentation all about like Git commands. And literally the entire presentation, was him in the command line. Just showing you everything, like, Okay, so we're gonna do that. I mean, it was like, it was, it was brilliant. I was like, Oh, my God, like, I don't I don't know. I mean, he just spent like, 35-40 minutes, just and then the slide. Instead of giving you slide decks, he gave you the terminal output, as

**Erin Mikail Staples**  36:25  
that's fine. I mean, I feel like my command line skills have gotten so much better, but I'm directly working with someone who like loves working in the command line. Yeah. And so I've gotten a lot better. And it's funny because like, we'll pair together. And I always laugh because I'm like, I'm doing the same thing. But I'm in Visual Studio with all my extensions, including the cat and like, my pretty colors and like, he's working completely in the command line, but I've it's helped me a lot more like I feel a lot more competent, just pairing with someone. Yeah. But again, do I use much any other like Git commands other than git clone now?

**Rizel Scarlett**  37:01  
I feel good. I was gonna say, I've, I've gotten over the years I have gotten like, more comfortable with the command line. I think one because I wasn't helped us. And that's like the most coding like thing I did. And then when I've worked at a couple of startups, and I guess like we didn't have like our our, what was it? I forget what it's called or get workflow in order very well. So like one guy he came in and he was like, We got to get this together. And we like nicknamed him to get the git-tater like for dictator but he would do just like what you said, what your your coworker Erin, he would literally sit down with me, and like, make sure I like rebased properly, or he'll be like, You didn't use Git bisect, you shouldn't use that and I'm like, Okay, I don't know what that is. So I've gotten like more comfortability with with Git over over the past years.

**Brian Rinaldi**  37:57  
I was I was gonna mention, speaking of being intimidated by the command line, which I've always been, do either of you use fake? Like, I think, oh, pilot for for the command line specific. Hold

**Erin Mikail Staples**  38:13  
on. I'm like, no, like, take

**Rizel Scarlett**  38:16  
for the command line. Yes, I

**Brian Rinaldi**  38:17  
No, I know, you do have I love the figures. I mean, I've been using fig for a while and it's like, it just really has helped me be a little bit more comfortable in the command line because it gives me all the suggestions that I didn't know how to actually access before. You know, because I've seen people who are really fast on the command line and can can get you know, have it like suggest the folders or whenever it commands and like they've just got it all set up and like fake to me, it was like, you know, was like command line for Dummies but

**Erin Mikail Staples**  38:50  
so is it like work dot dev because like I'm obsessed with the terminal work. Which is like, like terminal, but it has it has Copilot built into it. Um, there you go and ChatGPT built into it. So GPT4 is built into it. And there are dev advocate shout out Elvis has turned me on to this at like a year ago. And I had been a workstand Ever since I've even got some my coworkers hooked on work. Because it has like, if you are like, I want to like the other day I was using it for to build like an API, like pulling calling API's from the command line. And I was like, I know it's curl but like to do the thing that I want it to do isn't quite, I don't know it. So you can like search and be like API. And then it's like, man, awesome. And it just pulls up like all the different commands you can use with API's. And it's like, so I think it worked out generally.

**Rizel Scarlett**  39:43  
Like I know when what fig like I'll be typing cd, and then it'll like, tell me you want to cd into documents or whatever. And

**Brian Rinaldi**  39:52  
they even have like, the you know, you can add like pre built scripts and things like that to it that. I know people who know what they're doing like that. That's easy. But, you know, Lucia, has her spicy take that it feels good sometimes feels like a time when to flex not to have an interface. Yeah, I think, you know, I obviously love developers. But sometimes we'd like to feel smart by making deals difficult. So, yeah,

**Erin Mikail Staples**  40:23  
when I think it's interesting, because I think like I've worked in, I am taking the chaotic route to learning a lot of different elements of coding, because they started in very front end and styling and CSS and like very, very front end focus. And then learned a lot of like templating languages and then moved to like a big API heavy calls. And like, did a lot of that. And now I'm in data and ml, which like, a lot of those folks like, we have multiple people who don't use GitHub because they don't need to, like they're building Jupyter notebooks or Jupyter lab are very, like Python heavy, which is awesome. But the workflows for each three of those groups are very different. And like, working with developers now over those three different industries, like the tools are very different, the tech stack are different, or the even the processes are very different. And it's been very interesting, I think, because they all have their own quirks. And then part of me is like, all of you are a little bit nuts. And all of you are a little bit wonderful. I think we're all a little bit nuts, respectively in every way, shape, or form, especially me. So you know, whatever.

Speaker 3  41:26  
Summary of all all developers in developer advocates for all the little

**Erin Mikail Staples**  41:32  
feel they are? And we all have random Hills we die on?

Speaker 3  41:36  
Yeah, yeah. I think that's now that you all say that. I think that's also part of my approach to DevRel, is like these are things that people made me feel kind of bad about or wouldn't like, break down to me, because, you know, they wanted to feel like they're the smartest. So I tried to like go in with like, we're both learning together. And it's okay. If you, if you don't know. Yeah.

**Brian Rinaldi**  42:00  
Yeah, I think that's one of the things I love about your writing style, presentation styles always, like it's just really approachable. So, okay, I want to switch for our last final final, like a little bit here. Unless we totally switch gears. And talk about, if you don't mind about, well, Aaron, you got COVID at a conference, I was been bringing up how I feel like, I've kind of come to deal with this, like, endeavor. Well, it's like, okay, you know, nowadays, you go to a conference, you know, you're kind of rolling, not just rolling the dice likelihood, you, you know, you come home with something and it seems to be like I'd say, you know, probably, please have conferences that I've gone to go to so many, but like, I've gotten something I've got the both times I got COVID I got a conference. So, you know, is, is this is this the new norm is this kind of, like, just kind of come with the territory of being a dev rel now, it's like, we got to deal with you know, just accept that you gotta go to conferences and the conference's are gonna get you sick, even even like PyCon, which had, like, you know, we don't know where you got it. But like, I'm pretty sure a lot of us have preventative measures in place. You know,

**Rizel Scarlett**  43:26  
this is what I'm an advocate for virtual or hybrid conferences. I keep hearing people say, they don't like virtual because they don't connect with the people. I'm like, I feel like I've been able to connect with people in the chat when I do a talk. And then we all stay safe. And everybody gets globally gets to be able to have access to the talk. And if they weren't financially able to get over there. They can't. But it does feel like something we need, I guess we just need to accept unless like, people start changing things. I don't know. I I personally don't like it. I have gotten sick one time. I haven't gotten COVID. But I did get sick after a conference. And I was like, I hate this. Like I don't. I don't like I don't like it. It's not fair.

**Erin Mikail Staples**  44:13  
Like because like I've been beating myself up all week and barely yesterday. And that was every day I was wearing a mask. I was super diligent on the wash my hands. And like it took me until Wednesday to even feel terrible, like yesterday is when I was like, Oh, I don't feel good. Like, and I think on the same sex spectrum of things, hybrid. We've been to a hybrid event and like, I'm sorry, I'm gonna say it hybrid events when they're done wrong and 90% of them. They're terrible. They're absolutely they're worse. They're the worst of an in person and virtual event because the intention isn't doing this and I'll actually specifically call out Py data Berlin, which I was at, which did an amazing job of a hybrid experience. So they have a discord live. During the events, and like, it's still active, there's still people talking and making friends. They had a specific virtual channel. They had people who wanted to meet up or in different areas, they had groups that were hanging out together. If you had questions, they incorporated the stream the entire conference, and then included virtual attendees in the question process. So it was like a virtual attendees, have a question, use this link, and you'll get the live question answered to the participant at the same time.

**Brian Rinaldi**  45:26  
I was like, that's cool.

**Erin Mikail Staples**  45:28  
It was super cool. And like, but like, case in point, I have not met either of you in person, like you could be talking to a robot for all I know, like you could be a robot. And like, I feel like I've connected with both of you through virtual events. So who's to say that we can't do that?

**Rizel Scarlett**  45:43  
Yeah. It's just companies need to invest better on the experience for both because I agree. If it's hybrid, sometimes the virtual, the virtual attendees get the short end of the stick?

**Brian Rinaldi**  45:55  
Yeah, yeah, for sure. And I mean, as somebody who organizes events, like every organized person, I haven't done a hybrid, but obviously, I do a lot of virtual ones. You know, hybrid is part of why they get it wrong, as hybrid is super difficult to do. It just takes a lot more thought. And because even from a technology standpoint, it's just hard to get all the pieces together to do to handle both pieces. Because just just doing an in person one is extremely difficult. Online ones are difficult, but not nearly as difficult, but like combining the two together. And you've just like, yeah, it's it's super, that's,

**Rizel Scarlett**  46:36  
that's fair. I wish there was alternative, though, to us risking essentially getting sick. Or it also feels like we got to be at a lot of conferences, or at least maybe it's me setting myself up. Because like, at the end of every year, I'm like, I'm not gonna sign up for a bunch of conferences. And then like, starts over the whole cycle. I have pies applied to like, and I'm like, I'm only going to pick four. But all they accepted me for all of them. I think I'm just Yeah, no, that's

**Erin Mikail Staples**  47:03  
really too much was the same thing. I was like, I'm gonna do less events this year.

**Brian Rinaldi**  47:08  
Yeah, yeah, I did. I got myself into that this year. I know, cuz I applied to a bunch of stuff. And usually it's like, a lot of them just don't get it. And then like, Oh, whoops, I got into too many this time. So

**Erin Mikail Staples**  47:24  
I think that's also if you're managing a developer advocacy team or community team, you'd be mindful, like my boss was very strict on if you're traveling, do you not feel pressure to work on a plane? Like, and like, he was like, go take Monday, Tuesday off, he's like, I don't want to see you online. I'm going to kick you off like, and you've been traveling for a week. go offline?

**Brian Rinaldi**  47:42  
Yeah.

**Erin Mikail Staples**  47:45  
Expense COVID tests he even told me was like, expense, your cover test? Because we're expecting you to travel. So expense them? Yeah, that's good.

**Brian Rinaldi**  47:53  
That's good. Yeah. I'm going to so I kind of shared with you both a little bit. But as we end here, I will do my my ghost pepper cake. Which is that is that I feel like, you know, we have it is part of the there is a lot of risk involved in events. And I do feel like, like, there's, there's, it's hard in an in person event to really mitigate that risk. So I feel like that a lot of times, there's events, like even PyCon. Okay, we don't know we've got it right, like so might have been PyCon might not have been PyCon. But there was a lot of, and I've been to a lot of events where it's like, okay, we're masking, and we're testing. But then then we have an in person social event or a race drinking together. And no masks, obviously, we have everybody going to the same lunch room, and having lunch indoors with no masks. And so like, I'm not like I'm not either, like I'm definitely not like a mask. Mask. I'm also not an anti mask or I'm like, you know, I don't tend to wear one that often nowadays, but like I'm not at Definitely not. You know, I feel like you know, people want to wear wear, but like, I just feel like some of those preventative measures at an in person event artist. It's like, it's it's really, unless you box lunch, tell everybody to get ticket outside or whatever. And you know, next in person events, or sorry, the social events, it's like, you know, it's I yeah, maybe wearing a mask in the conference room, but, but I'm sitting at lunch with the same 1000 people in a big room with everybody, you know, no masks on. So like, how much does that really prevent anything? That's my that's my super spicy take this somebody will probably

**Erin Mikail Staples**  49:51  
my super spicy take is if you feel sick and you're like you. I also think you do have a personal responsibility to test regularly like if you're choosing to be in public nowadays. especially for a conference for work paid stuff is a test regularly be employer should be paying that for that cost. Because those things are 20 bucks a pop, like that adds up. And I mean, I've been testing daily for 10-12 days now. But I also knew the risks that I took being in person. And personally, I'm like, if you're going to choose to take that risk, and continue to go out and see people, then that's fine. But like, I think even like, your tests are still two to three days behind, typically, but it's like it's better than nothing like at least like, because I mean, I would have if I wasn't testing like, I would have been like, I'm not that sick. Until I couldn't talk.

**Brian Rinaldi**  50:41  
Yeah, yeah. All right. So our final Aaron, I know you've been sick, so I'm assuming, you know, we got to close out the show with the pickle fact. Pickle fact. Pickle fact.

**Erin Mikail Staples**  50:57  
I did find one. Okay, um,

**Brian Rinaldi**  51:02  
I've seen the banner like, so it's all like, we got to look.

**Rizel Scarlett**  51:04  
Yeah, I know. Y'all do something about pickle.

**Brian Rinaldi**  51:09  
Just yeah, just so you know, it's become a thing.

**Erin Mikail Staples**  51:12  
Oh, so pickles will not prevent conference sick or COVID. However, three different people throughout history did consider them a treatment for very important things. So Cleopatra actually ate them because she helped. They believe that they helped keep her gorgeous. So pickles are great for your skin tone. Obviously, as Cleopatra said, just listen to her. And Caesar and Napoleon thought they could build muscle.

**Brian Rinaldi**  51:42  
Okay, love it.

**Erin Mikail Staples**  51:45  
I don't know if that's scientifically backed, but

**Brian Rinaldi**  51:48  
I'm pretty sure it's not.

**Erin Mikail Staples**  51:52  
Some History Channel website told me that when I quickly you will pick all the facts today. And so obviously it's on the internet must be true, right?

**Brian Rinaldi**  52:01  
Yeah. So okay, well, let's just have to eat some pickles for the next week and see see? I'll be curious COVID

**Erin Mikail Staples**  52:12  
Yeah, I'll be taking a pickles every day and also being coming out swell look out everybody

**Brian Rinaldi**  52:22  
you'll be strong. Yes.

**Erin Mikail Staples**  52:28  
I need to get my pickle Spock money here.

**Brian Rinaldi**  52:31  
Yeah, we do need to you know, we need to dev

**Erin Mikail Staples**  52:34  
last like sponsor me.

**Brian Rinaldi**  52:36  
Pickles. Yeah, no. We should get to sponsor the show.

**Erin Mikail Staples**  52:43  
Anybody have a contact at Vlassic?

**Brian Rinaldi**  52:48  
Alright, oversell. This was so much fun. love getting to chat with you. I'm glad that Aaron was able to make it because I think it's just we had a really great time. So before we we check out where can people find you?

**Rizel Scarlett**  53:07  
You can find me at BlackGirlBytes on basically every social media Twitter. Mastodon blue sky. Yeah, Bluesky, LinkedIn. My name is **Rizel Scarlett**. What else twitch and blackgirlbytes one. You know, I always say this. I created the account about locked out. And then I just created another one.

**Brian Rinaldi**  53:29  
Yeah, and sent me on GitHub to

**Rizel Scarlett**  53:31  
Oh, yeah, blackgirlbytes on GitHub.

**Brian Rinaldi**  53:33  
All right. Well, thanks so much Rizel and thanks, everybody for for joining and for keeping the chat spicy. And, and we'll see you again next month with check for details on CFE that they have for our next guest and we'll see you then. Bye bye

Transcribed by https://otter.ai
