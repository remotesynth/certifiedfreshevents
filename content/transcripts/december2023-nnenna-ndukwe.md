---
_build:
  list: false
  render: never
---

**Brian Rinaldi**  0:06  
All right, think we're live. Hello, everybody. Thank you all for joining. I see Cassidy and honoree already in the audience. Thank you all for joining. We're excited about today's show, especially because today is the first time we're, we're testing. So if you're joining on LinkedIn, this is our first attempt at actually broadcasting out to LinkedIn as well. So thanks, everybody who's joining us on YouTube. Thanks, everybody who might be joining on LinkedIn, as well. So we're excited about today's show. But before we get started, invite our guests on and then to introduce myself. I'm Brian Rinaldi. I'm a developer experience engineer at LaunchDarkly. I've been in DevRel for 13 plus years. And yeah, that's that's me.

**Erin Mikail Staples** 0:51  
And I'm Erin Mikail Staples and I am also in developer experience at LaunchDarkly. I have been in devrel for five-ish, five ish. We say ish, there's some adjacencies there. years. Yeah,

**Brian Rinaldi**  1:04  
everything's ish here with DevRel. I've have been in dev rel for 13 ish years, which is everything. Okay, so,

**Erin Mikail Staples** 1:14  
no exacts.

**Brian Rinaldi**  1:16  
So I want to also think, so we are, we have a sponsor for devrel(ish). And I want to be thank them. So data protocol is like, like think like Netflix. But for your developer community, you can create these interactive videos and, and be able to like actually have people you can see that kind of console there where they can interact and do things with the videos. It's really cool platform for you to kind of deliver content to your communities, really professionally done videos and things like that. So I think if you're interested, if you run a developer community, please check out data protocol. And thanks data protocol for your support. So with that, we're going to invite our guest Nnenna on stage Hi, Nnenna. Hello. Welcome to our dev relish show. So first of all, tell us a little bit about yourself. Which would you do? Where are you from? Etc? Yes,

**Nnenna Ndukwe**  2:20  
yes. So my name is Nina and Oogway. And I'm a developer advocate at unleash. And I was born in Houston, and, you know, moved to Boston, I would say how many years ago, maybe seven ish years ago. And, you know, the goal for me was to get into tech, and to kind of like figure it out along the way. And I eventually did, and I'll dig into that more. But um, right now I'm at on leash actually just started a couple of weeks ago, which is super exciting. And yeah, focusing on feature flag management and with a more of a focus on the open source community that they've done a really good job of building out to enable developers with integrating feature flags into the whole software dev lifecycle, which you all know quite a bit about. But the rules say

**Brian Rinaldi**  3:13  
that we both know a little bit about feature flags as well, we know with you since you.

**Erin Mikail Staples** 3:22  
They're making a lot of assumptions here, y'all.

**Brian Rinaldi**  3:25  
So, so yeah. So I think between when we initially scheduled this, and now you ended up at and leash, which is, you know, for anybody unfamiliar, it's a competitor. We're both working that so you know, but we're, we're friendly competition, right? So, yes,

**Nnenna Ndukwe**  3:43  
yes. We're all trying to help developers, you know, raise awareness about what feature flags are so you know, it's all it's all going in the better direction for engineering and companies as a whole. Was that diplomatic?

**Brian Rinaldi**  3:57  
That was that was perfectly good.

**Brian Rinaldi**  4:06  
Yeah, I mean, I've been doing it like, what two years two plus your two ish? I guess everything's gonna be ish. Now. And I, I didn't, he hadn't used a feature flag once. When I joined. I was like, I didn't even know what this thing was.

**Erin Mikail Staples** 4:22  
Oh, you feel like I had a leg up like because I wasn't LaunchDarkly customer before I joined and actually had used them to save her. But there was a few times that I definitely was like, crap, crap. But it was very much like the Undo crap. Something's breaking button.

**Nnenna Ndukwe**  4:39  
Yeah, I had experience with the using LaunchDarkly as well at O'Reilly Media. And yeah, there was obviously there was an internal engineering team that was responsible for actually integrating it into all the different engineering team repos, but it definitely helped when it came to project planning and just figuring out okay, what do we want? release when and to whom? For how long? All of that great experience with that, and that was four years of that.

**Brian Rinaldi**  5:08  
Nice. Yeah. So you all seek, you know, we were going to talk about a little bit about, you know, since you're both starting new positions, starting, you know, kind of the challenges of starting in a new role as Devereaux, but I think you all clearly coming in with better, even better from a better place than I was when I joined LaunchDarkly. Because I'm like, Yeah, I mean, I really know. Nothing about feature flags. I think that the most I knew, was they made me do homework. I'm sorry. The long guys are like, kind of going around in the back today. They decided to wait till the show started to kind of,

**Nnenna Ndukwe**  5:47  
they always do that.

**Brian Rinaldi**  5:48  
They're definitely watching Do I think I think you're right. You know, I think he's purposely like, wandering around back here. He's like, I see. He's on camera. I'm gonna get on there. So yeah, I hadn't other than the homework. That was my first time ever using a feature flag. So yeah, but you know, it's feature flags, part of a concept. Okay, so with that, tell us a little bit about your background as a developer, like what got you specifically interested in dev rel? Like, why did what made you choose that career path?

**Nnenna Ndukwe**  6:29  
Yeah, so I was engineering that was my background that has been my background of full stack web development. And that was in med tech, FinTech, what else? And Media Tech and you different programming languages and frameworks and tools that I've had experience with over time in those different industries. But along my journey of actually becoming a software developer, and when I actually taught myself how to code and like, went through a coding bootcamp, I had this different combination of non traditional pathways into engineering. From the beginning, I had documented my journey, my experience, and that looked like, you know, a blog that I started with, like, okay, things I learned these past few weeks in a coding bootcamp, or I recently attended this awesome event at the Google office here in Boston. And volunteering locally and getting involved in the local tech community here in Boston. There were so many things that I was doing and documenting and inadvertently sharing with the tech community and globally on social media. I was participating in speaking at tech events and things like that. And I didn't realize that there was actually a career that aligned with being a technical person and also turning around and sort of like packaging this information that you're learning along the way, like hashtag learning in public, and sharing that with the world. I didn't realize that there was an actual career path that would merge those two and complement both the technical and creative and social sides. And I kind of found out about Deborah through Rizel actually, wasn't she recently on the show? Or? She's?

**Brian Rinaldi**  8:19  
Yeah, yeah.

**Nnenna Ndukwe**  8:21  
Yeah.

**Brian Rinaldi**  8:23  
Rizel. Like, like she's presented i She actually presented last week. I think it was once on web5. Yeah. So and she's one of our favorite people.

**Nnenna Ndukwe**  8:33  
Yeah, she's amazing. And we've both known each other since the beginning or before careers really, like began with software development and beyond. So hearing about DevRel from her, I was like, okay, Roselle is amazing, super smart, and has so many different types of skills and wants to be able to share that with others, I want to be able to do the same thing to and, and that really means you're signing up to be a unicorn. And I have a lot of thoughts on, you know, what DevRel is and how it's perceived from companies and all of that later. But that was that introduction to it. And I started to take it seriously do a bit more research on it, I bought books. And then I got a mentor, Kurt Campbell, who began to teach me about content creation and developing a framework and strategy. And kind of reducing chances of like analysis paralysis, and just like moving forward with executing on things that can really help to enable developers in a very dynamic ways. And that was that gave me that fire that fuel to be like, Okay, I'm really going to try this. I really want to do this. And if I can find a way to exercise these different skill sets, it's not about being a perfect person and an expert in all of these. It's about the effort, because you understand the goal is you want to help You want to enable developers, I think that is something I tried to use to ground myself and to push myself forward in and death row. And it's been exciting. And so it's been less than a year, actually, since I've made this transition. But there's been so much that's happened along the way. And I'm thankful for that. Yeah. So

**Erin Mikail Staples** 10:17  
you were a full stack before, like your formally trained engineer. Yeah. I'm always like, part of me like doing this, especially being in a full stack role right now, like, I think, previous several things, I always had a language that I got to play in. So it was like, I never had to be truly full stack but accidentally became full stop, because I never went to two places that use the same language. So I did the chaotic route. Wow, I don't recommend do not recommend that route. Spicy, you're learning? Yeah, there's some learning gaps that Brian gets a lot of my dumb questions like, what? From learning gaps from self taught chaos? SNESs. Um, but like, what? It was just that wanting to be able to do different things that moved you into DevRel, from engineering, because that what I'm getting, right? Yes, that's

**Nnenna Ndukwe**  11:06  
exactly it, I didn't. And I don't want to downplay what it means to be an engineer. So I want to be careful with my wording here. But I didn't want to just code and that's kind of my part of my personality, like, I My mind is moving 1000 miles an hour, I'm interested in so many things, I have these hyper fixations. And growing up that was like, I'm interested in so many things, I want to do so many things, but we're supposed to pick one career, we're supposed to get really, really good and be an expert at one very specific thing. And that was, you know, the model that I understood what it meant to be an adult and to have a career or to have a skill set or a talent. And, and I feel like Deborah was that space where it was meant that you have the green light to explore and be many things at once. And, and that that can be celebrated. And that companies and people who are who might potentially use the product, the company you're working at, can benefit from you having many interests. So that's yeah, that's something I really wanted to explore. And I also think that it's, you know, so many aspects of Deveraux, where the skills that you're developing, whether it's speaking and or content creation, you know, helping to build community in some way. All of those things are transferable skills, and my, in my mind, those are, those are skills that you can take with you anywhere in the world doing anything. And so if you can have those, like writing as well, like, you can have those and be pretty decent at it, I think you can do anything, almost

**Brian Rinaldi**  12:41  
are many things. Yeah, and I think to your point, you know, having having done DevRel for a while, I, I've always found that people who really love to code, because it's not like it's not putting down being just a developer, like there's nothing wrong with that, like, honestly, the people who really love to just code and are like, you know, just passionate about that. And I've found to not do great in deferral, it's not because they can't, they obviously have the technical skills, they just don't enjoy it, because they're like, oh, you know, I'm gonna get I'm gonna be a dev rel, and I'm going to, I'm going to actually just get to experiment with new stuff, and all this other stuff, I'm going to be coding all that. And I've even had conversations with people like exploring it being like, you know, it's maybe 25% of the job. And sometimes that's being generous is actually coding, like most of the job is not about coding. So if you're just passionate about like, being in front of your laptop, or whatever, and, and just coding something all day, like you may not like this career that all that much. Well, I

**Erin Mikail Staples** 13:54  
think there's also people that we know, like Ali, I was actually talking to her because she went from being DevRel into back into being an engineer, and she's a formally trained engineer, and I was talking to her about that transition. And I was like, Yeah, I would get stressed having tickets each day. Like, I'm very like today, I've like hit a head, like started banging my head against something. And it's like, I'm gonna go play in Docs for a little bit because I don't I don't this hurts my head right now and I don't want to do it. So I'm just gonna do something else and I'll come back to the fresh brain. But I know some people are very much they want that consistent ticket in ticket out, which I think personally sounds a little like Hell

**Brian Rinaldi**  14:35  
yeah, I also I also personally, like I do not miss having to put things like like, you know, in having to be on call. Oh, my God is like, yeah, that that part. And and now I'm like, Well, I just mostly code demos. Broken like nobody's calling me in the middle of night. Hey, this demo is not working. You know, although we do get kind of roped into, like other things that are more, you know, production ish, like this, like the booth demos and things like that, that we worked on but but the point being is, yeah, I think coding is, it does give you that opportunity to be like a lot of different things. In fact, you're not going to succeed if you aren't doing a lot of different things, in my opinion. So like, if you just like, want to code all day? Yeah, I don't know you want, I don't think you'll like that. And

**Nnenna Ndukwe**  15:35  
one thing I like about that I try to remind myself is that there are different people meant for different things. So those people who just want to be super focused on coding only, they are people who have the potential to be great at it, or they all they already are, right. And they're very useful in that particular department. We need those people to build incredible things, so that we can then take parts of that and repackage it and bring that, you know, to developers, engineers all over to, you know, make it interesting and keep them interested to want to adopt it, utilize it in their systems, whatever. So I'm just like, I'm very happy that there are people who want to only do that, because that's what helps make my job easier.

**Brian Rinaldi**  16:21  
Yeah, I mean, they build the platforms that we're talking about. So great. Yeah, I

**Erin Mikail Staples** 16:28  
lovingly say not to put down other dev roles, but I do like to lovingly say that Deborah was kind of like you're the crash test dummy. Sometimes. Like you are the living crash test dummy of whatever you're working on. I feel that's today's a very example of a crash test dummy thing. But yeah.

**Brian Rinaldi**  16:46  
Yeah, yeah. You're the first user of so many of the things. Yeah, for sure. That's, that's, to me. That's one of the fun things I enjoy about it. It's just, it's always something new. And, you know, I think kind of transitioning to that talk of, well, you're both going into new roles. But you know, I think Devil is, is, that can be tough. It hasn't specific challenges. But Devil is also like, I'm constantly having to learn something new. Because it's like, okay, I need to focus on this thing. And it's not something I know. I mean, I've even submitted talks on things. I'm like, Okay, I don't know this topic, but I will by the time

**Erin Mikail Staples** 17:26  
I have done it, yes.

**Brian Rinaldi**  17:30  
Yeah, I regret it every time I do. I've done it.

**Erin Mikail Staples** 17:32  
I have been in that position. In my last role, actually, one of the talks I'm most proud of giving was one of the situations of heads Downing and learning and focusing on a topic for months. So like, I did a lot of it last year, doing a lot of reinforcement learning, a lot of machine learning, and a lot of like, but I was sitting there going, I've never traded model in my entire life. Like, I don't know what you're expecting me to do? Because I wouldn't know anything. Yeah, it was like CMPs do. Theoretically, we can figure it out. But yeah, I just I do distinctly remember going I have no idea like getting the talk, acceptance, email and going, I am so screwed. And then I Cassidy, I don't know that I haven't changed that. I think I am still young and stupid. And I still do that a lot of the times, I honestly, it's a good forcing mechanism, because I don't want to look like an idiot. So

**Brian Rinaldi**  18:26  
yeah, I've done exactly what Cassidy mentioned there. I've done exactly that. I'm like, you know, I want to learn this. And I haven't had the time to learn it. So I'm going to submit this talk. And then I'm going to have to learn it right? Yeah. So I did, I did learn it. But like I said, every single time I've done it, I've regretted it. I'm like, Why did I do this, it's so hard to develop a talk to begin with that like developing a talk and trying to trying to learn something and then you get up there. And then of course, you'll you'll get up there and all sudden, it's like, sitting front row is the person who's like the well known expert on this topic. And like, it's always just

**Nnenna Ndukwe**  19:09  
always done. It's so crazy how that happens. I completely relate to it. It's such a high pressure way of trying to learn something and to force yourself to grow and expand. Like when I made this career transition, I don't recommend this to many people when I made my career transition from engineering to DevRel it wasn't just that that changed. There were multiple layers there was also from Ed Media Tech to into cybersecurity, right and then there was also a larger company to a smaller company with like 30 people. And so that my like, that's like three levels of an adjustment to make. Do not recommend try to keep it at two to one just so that you can you know feel confident about slowly like learning and adjusting to something but um I do believe Yeah, there was some talk that I had a talk that I spoke at coop con EU in Amsterdam. And it was on like best practices for, like security, software security for production ready containers, didn't know much about containers. And somehow I needed to learn enough to be able to convince people that I understood the best practices, and to turn that around into a talk. And of course, the people in the crowd were people who have had years of experience in the container space in the cybersecurity space. But I did what I could. And yeah, and I think that that process continues to happen, or I guess, get presented with that opportunity to learn something in a relatively short amount of time, enough to be able to turn around and find a way to talk about it and make it interesting.

**Erin Mikail Staples** 20:56  
It's, it was very, I know, I remember asking the creator of fast API, like 1001 intro questions that are on the documentation page, and just feeling like stupid me like, oh, you actually created the you made you made this, I'm gonna go Shut up and like, erase all of that wish I could undo that. That was really cringe. But it's also like, the nicest human ever. So yeah, I think one of the questions I always have, because we've had a lot of most people on the show are actually self taught or come from non developer background. So awesome. Coming from a developer background, like, where, what do you wish that people would know? Like, what do you think is missing, but gives you a unique perspective?

**Nnenna Ndukwe**  21:38  
What do I think is missing from Deborah? Oh, yeah, yeah. Oh, what do we think is missing from DevRel? That is interesting, because it's the thing that includes so many things. So I'm not sure. I'm not sure I know what is missing yet. And yeah, I don't know. I, the way that I look at it is that it does encompass so many things. If anything, what is missing is actually the industry's catching up to the power of it, honestly. Oh, yeah. That's a good one. Yeah. So you know, one, I remember there was a point in time where I was considering making a transition into product management from engineering. And one of the things that stopped me or made me hesitant was because it seemed difficult to be able to quantify and measure success. And in engineering, it's a lot more obvious. You know, there's how many tickets did you get done? How many pull requests did you make, and, and review and did the thing ship and it's like, there are some more direct ways to be able to measure what ever success could look like as an engineer. But somehow, I still felt like Deveraux could be the thing I could try. without really realizing that it wasn't the easiest thing to measure to quantify, what and, and define what success looks like. I think that's an issue that many people endeavor might be facing once they actually get the job and have to do it. And if the company is not prepared to establish what that means, then things can feel a little shaky. And I think that is that is something that's an ongoing issue. And there's books on these kinds of things as well, I believe, like the business value of developer relations and how to how to really advocate for yourself and define those terms as early as possible. But it's an effort on many ends that come from many people in order to do that.

**Brian Rinaldi**  23:52  
Yeah, speaking of the business value of developer relations, that's Mary Mary finkles book, right? Yeah, she was a guest too. She's amazing. Yeah, that that episode with her was, was simply like, you know, it's one of those, you gotta go back and listen, and she's just even beyond what's in her book, which is amazing is like, you know, she's just a wealth of information on that topic. So speaking, I want to, I want to transition to talking about your, okay, so you're both in new roles. Like, it's, you know, every new role, no matter what kind of job you have is a challenge, right? Like, it's always a challenge. There's always a lot, but I think in deverill, it can be especially tough, or even relating to that metrics thing, like how do I make an impact in every company is different. It's like, it's not like, you know, I'm a developer, I go into the new company. It's like, oh, here's the tasks I have to get done. Like, here's the things I have to code. I know I kind of know where I'm headed, but you come as DevRel, it's like, okay. Oh, by the way, this come But he does differ completely different than my last company to Dev Rel, what they what's important to them is different and everything else. And then you have the challenges of learning, whatever new tools or whatever you represent me. Okay, I'm speaking for you. They want to hear from you, both of you. Because you, I mean, you know, you're both in that, in that right now. Like, what would? What are you feeling about it?

**Erin Mikail Staples** 25:24  
I mean, I'll personally say one of the biggest things is I came from a pretty one language environment. So I came from machine learning Python, Python, Python, Python, data science. And even the libraries that I was using in Python were very data science related. I haven't deployed a Docker container at work yet. So I've not launched our tool in Docker, and you can build things a Docker related to haven't touched it. Where I my last role, it was like, every single day was like, Okay, let's start in containers, let's hang out in that type of development. So one very, and then we had reinvent right at what was like right before my 30 day mark. So it was immediately being thrown into a, I always joke of like, learning. I haven't touched reaction a while I do know, some react but haven't touched in a while. So I had to come in and be like, crap, this is a different. And I do remember like, distinctly Cody, who's our manager, sending me a screenshot and he's of and he's like, watching my Git commits. And then I'm like, Please work. Why isn't this working? And he's like, you have a capitalization error. Like everything is technically correct. But I had missed a capitalization error in React. And I was like, This is so dumb. I'm so mad at this right now. Because I was like, feeling so frustrated and like, defeated because I was like googling it. I was chatting, beating, I was like, everything about the stupid thing is correct. Except I miss like a capital A capital letter. And it was like, that's, that is annoying. So I think that the switch of tech stacks is a, an even like, how even if you did come from a familiar tech stack, like I was working with our Python SDK today, there are still some nuances, nuance, nuances and nuances is Yeah, of ways of working within that tech stack itself that are slightly different.

**Nnenna Ndukwe**  27:05  
Yeah, that's something I want to hear more about. Because I want to know, like, what exactly Could you give an example of, of how it feels different?

**Erin Mikail Staples** 27:13  
Yeah, so I think a lot of it so I was at a machine learning like very much ml ops. So kind of like organization doing a lot of like the I was doing like a lot of data cleanup. A lot of, you know, I used pedantic a lot, I was using Docker containers. And I was doing that kind of work building Docker containers testing that a lot of spent a lot of my day and hugging face. We're looking at models or understanding that sort of thing, which you don't like feature flags, a lot of it is like front end stuff. So it's like I went from doing very ops, data databases to right, we have a demo to build for reinvent, that's front end. I have not touched front end in a while that's been on spec, like, and it's just you forget how quickly those muscles but then, when starting like actually working it let's also there is also the flip side of like it does every so often. I'm like, Yeah, came back. It's still there. It's just had to kick the cobwebs off.

**Nnenna Ndukwe**  28:10  
Yeah, it's been a while since I've touched react as well. And like one of the first tasks, my role at Unleashed was like, Okay, let's build a React tutorial. Right? And that was like, Okay, I'm really excited because I know react. Like I worked with it for years. But also, it's been a while. So how much do I remember how much of this is gonna be muscle memory, right can just like, I feel like I can close my eyes and type, you know, and I was a little shaky at first. But then there were some things that came back to me and I feel like taking a break, honestly, from looking at it every single day. When I was a full time engineer is it's nice to come back to it and feel like I have more fresh perspective. And it's easier for some reason to Google search things. I'm getting a gotten a lot better at Google searching to find the answers to problems now. Then I probably did being day in day out probably from some type of mental like tax or exhaustion. That made it a little bit harder was a developer.

**Brian Rinaldi**  29:13  
But now I rely on the on the co pilot chat. Ooh. The chat is Cody

**Erin Mikail Staples** 29:24  
source graph, because sometimes copilot and Cody will argue with each other and they're neither one of them right? So I do you have to go back and forth. I do find myself it's really funny because like, uh, I was peering with another one of our colleagues before reinvent. And I was running the logs at a terminal. And like my last role like before my last role, you would have never seen me in a terminal. I would be like, No, not touching it, don't like it. I terrified of it. Did not want to work in it. And my last role I did because I was more of the upside. I really got cut and I worked with someone who was a vim emacs user all the time, so they never written VS code. And I was like, terrifying like I did one project in Vim, and I like wanted to cry. It was so hard for him to not think about the way but the like then I was like, learned how to use it for logs. And so when we were preparing before reinvent and I had pulled I had terminal running for logs. And I would coworker was like, why are you? You know, there's like a little terminal window and VS code. It's like, I know, but I don't like that one. Want my full I want people to see everything that's coworker

**Brian Rinaldi**  30:24  
with me, by the way. Oh, is

**Erin Mikail Staples** 30:25  
that you? I thought it was Peter for a second.

**Brian Rinaldi**  30:28  
It was me. I'm like, Why? Why do you need a terminal? I never opened. All. I mean, I love people love the terminal like they because they can customize in ways that it's not like as easy, I guess, some vias code? I don't. Yeah, it's

**Erin Mikail Staples** 30:46  
like, the other thing is like I do I'm seeing the comments like not thinking about the problem is unreasonably effective way to solve problem that only works if you have years and years and years of experience as a developer, because like, Can I do that with Python based problems? Yeah, can I do that with like, my personal site is node handlebars like, yeah, my, my brain understands that structure. If you were like, Aaron, you haven't touched react in three days, go figure it out. Again. I'd be like, Alright, let me go. Let's be Googling it again.

**Brian Rinaldi**  31:18  
I think it's just going to show my biases here. It's, I mean, react to react, right? Like you say, it's so unnecessarily difficult, and obtuse in ways that I find like, I've used it plenty. I feel like I you know, mostly because I feel like I have to but, you know, every time I do, I'm like, this. I know. Cuz, you know, my biggest complaint about React is always I know, JavaScript. I've done JavaScript for ages. And somehow or another, I still don't know how to do the thing. And I could solve it in JavaScript. I can't always solve it and react. I'm like, oh, because I'm not doing it. The the React way. Anyway. Yeah, I just got spicy. It was time. I, you know, Baron, you're usually the spicy relish.

**Erin Mikail Staples** 32:13  
I know. You're the spice person today.

**Brian Rinaldi**  32:15  
I'm spicy. My react.

**Erin Mikail Staples** 32:17  
I'm gonna react.gg course right now. And I'm actually really liking that. But I think, you know, I am jealous. Like, Brian, it's like your experience. And like, you know, Nnenna, I'm like, the part that I'm always like, self conscious, especially starting a new role is like, being self taught. I have weird gaps, like, so I'm like, I like many times. I'm like, Oh, I can do this or all know how to do certain things. But then there's certain things that I'm like, I have no, yeah. Like this is like, because I missed a lot of my learning was on the job or on a role. So I was learning on projects, and never like, I never took a course. Except for semester data journalism. So like, asked me a lot about matplotlib, which is not really remember that, like matplotlib isn't even really used anymore in data visualization. Last time I checked, like, no one's really using it. I'm like, I can make a cool chart with it if you want. So yeah, I don't have any formal experience. But that's like why, when we had our professional developments, then I was like, I want to go be very intentional and take a course that has some of that fundamental things. And even again, early experiences, I had over engineered something, because that's the only way I knew how to do it. And then I'm like watching other people in I'm like, wow, I think also the other thing I say, being in a new role. Previously, I was always on a team of one or a team of two. So it was like either, I never have had more than one, teammate. So now I'm like, Well, now I gotta now I gotta spread my stupid questions across for other teammates.

**Brian Rinaldi**  33:57  
Then are you how many you have a bunch of colleagues? There? Are you like the first demo? I don't even know. Tell us a little bit more about your, your new role.

Speaker 1  34:08  
Yeah, there's my manager, who's head of DevRel. And then there's me, the developer advocate. There's a community manager and there's people who've done a lot of work in documentation that I get to rely on who are now solely focused on engineering. And yeah, so there's, there's a couple of engineering teams, and me and drew. And so like, there's a lot of work to obviously get done, but the, you know, getting into this role and like trying to get settled in and adjusted and figure out like, what is it that I'm going to be focusing my energy on? I'm mentally preparing myself for that context switching that's going to be happening a lot more frequently. You know, when there are tutorials that need to be created in languages I've never even looked at breeds near nothing. And I need to figure out what exactly it is I need to learn enough about this programming language or this particular framework or tool to then create a tutorial utilizing it just having to merge so many different skills to gather and constantly do that with another public programming language, or I don't know, if they'll have worked with rust before. You know, that's like a Right, exactly. So like, that's something I'm gonna have to dive into at some point, and create something based off of that. So it's like I try to think of what is the process? What is a framework to do that over and over again?

**Brian Rinaldi**  35:42  
Yeah, I mean, so on that note, I think, you know, one of the things that I tend to do, I mean, I've always been, well, not always I've been JavaScript focused for like, a decade now. I think I, so the story what I had done frontend and, and JavaScript when it was more of a jokey language. And then, for a while I was doing ActionScript, if you all know what ActionScript is, because I was doing flex and ActionScript, and all this stuff. And, and then what I was working at Adobe, I was doing like, basically, Dev Rel ish role at Adobe, in, focused on Flash and Flex. And then like, one day to the next, because this was like, when flash basically died. It was like, boom, you know, net, they're like, oh, by the way, now you're doing web web platform, and you're focused on JavaScript frameworks and JavaScript. And it was like, okay, and since then I haven't, that's really where I've been. But I think that, you know, when we're at working at platforms, like, like, we all are, that have all kinds of support all kinds of languages, right? I think, you know, I tend to focus on writing, I, I'm always writing my examples in JavaScript, but this is even another reason why I tend to avoid react isn't unless I'm doing a React specific example, right? Like is, is I want you to be able to understand it no matter what language you want. And I found that people can understand JavaScript, if they're whatever kind of developer, Python developer, you know, Ruby, developer, whatever, generally, like they see the syntax of a basic JavaScript application, and they can more or less understand it. I mean, there's nuances obviously. But like, if you start throwing in additional complications, like, like frameworks and things like that, that, that, that kind of complicate the, you know, your ability to understand that code and do kinds of things that you know, may not translate easily into another language, then your example suddenly becomes much more difficult to kind of be able to cross those different bridges for people with different language backgrounds.

**Erin Mikail Staples** 38:01  
That is, yeah, I was gonna say one of the things that I think is really interesting to hear you say that is I, I like to think I'm a language agnostic and equally crappy and terrible and shitty it all the same. At the same time, but I think like being self taught, I actually before I went to terminal, my other thing I avoided is I would hard code everything because I like my first paid code I ever wrote, aside from anything was email templates, like I learned building email templates, because I was actually Colin, shout out Colin, who's here actually got a lot of my questions. I was at a small agency, and I thought email templates weren't that going to be that hard. And, guys, a lot of like responsiveness, things you have to learn. But it was like a lot of the just like styling of it, or a lot of like using liquid for Shopify sites, like just changing, like tweaking the styling. And so I first felt very comfortable not but like JavaScript hurt my head for the longest time. So I avoided it. But like, it's so funny like this, like education development, because I do distinctly remember working on a project at my last role. And I was like a data project you to pull apart like a API, call in and clean up some data and then run, get it ready for running a model. And, like, Python is not really my favorite to work with API's. I'm not very good at it. Like I think it's kind of wonky if you have uneven datasets or messy datasets, so but cleaning it up in JavaScript really easy. So I definitely remember submitting this like Python notebook to like my manager. He's like, why did you do this in glitch first, and I was like, Well, I didn't know how to do it in Python. So I did it in JavaScript. And then I did the rest of it. But like I definitely and I think that's again, joining your roles where I'm most self conscious is like my hacky workarounds. Fortunately, Brian hasn't believed me too hard. Brian, Brian's like?

**Brian Rinaldi**  40:04  
Nope. So maybe, yeah, you were gonna, you were gonna say something as well?

**Nnenna Ndukwe**  40:09  
Oh, yeah, it's just like along the same lines. But that process of learning different things when you have to, like build with these different languages, frameworks or whatever it is that I struggled with the difference between and I think I still struggle with this the difference between the language convention, like the conventional way of doing of writing code in that particular language versus the best practice. And if that if there is a difference between the two, and also the personal, the personal coding style of whoever is the one writing that code and creating that tutorial, or, or showing you how to do something, trying to understand that to be able to decipher the difference between those things when learning a new language, like maybe go or that's how it felt when I was first learning Python years ago. It's like, I didn't know what to trust to know what to then turn around. And then No, I was writing good Python code. Like, am I just copying the style of the person who is right next to me because I work with them. And you know, so that's, that is not easy, I think to figure out but I hope I do figure it out at some point, though. But

**Erin Mikail Staples** 41:26  
I'm not counting on it. I posted in the chat, I still get confused. Like sometimes I'm like, Oh, this is the language and I'm like, Nope, that's the framework. This is the library. I there. In my brain. I know. They're different things. They're used differently. But I can't my they're all the same to me. They mix I know they're different. My brain can't put them in buttons, like buckets. Yeah,

**Nnenna Ndukwe**  41:49  
and I don't know if that matters that much to me. Sorry. I don't know what like, framework library doesn't matter. Gotta use it. I gotta use it to do something. And people are using it to do something. Let's get to the important. But yeah, I remember for a while when people were debating about like, what is react really? And you know, it's Oh, yeah.

**Erin Mikail Staples** 42:13  
But I mean, it matters.

**Brian Rinaldi**  42:15  
First love to debate, especially now, you know, we don't debate as much nowadays because we because most of us dropped off of x. But that was useless.

**Erin Mikail Staples** 42:30  
Yeah, timeout. Now. We're just arguing about what debate we should be on. Like, what thing?

**Brian Rinaldi**  42:34  
What platform?

**Nnenna Ndukwe**  42:35  
Are you on? X. Still, I

**Brian Rinaldi**  42:40  
mean, I haven't deactivated my account. But I haven't actually posted that on to it. Over a year, not looked at it

**Erin Mikail Staples** 42:47  
I'm like, on there still, I'll admit. And like I go back and forth. I want to be on threads. But like, I don't know, I've made the mistake when I made my threads account of like, I want to follow the same people on Instagram. Y'all. I have no filter on my Instagram follows. Like, I follow like, 8000 people on Instagram. It's a problem. Oh, so that meant when I made my threads account, I was like, I don't care about any of these things. I don't want like some people I like this is a terrible take like this is maybe my ghost pepper take of the day. Some people should not do short form written content. Like some of the reality TV stars that I follow for the gossip should not I don't care about your short form written content or strong suit. So but I want

**Brian Rinaldi**  43:30  
you can unfollow them.

**Erin Mikail Staples** 43:33  
I have 1000 and auto follow them. Yeah,

**Brian Rinaldi**  43:36  
that was a mistake. That was a new auto unfollow all of them and then start over. I

**Erin Mikail Staples** 43:43  
try it. I even looked up if there's an API, there's not when I last looked. Um, I just cried a lot, actually. And that's why I can't get into it. And like, weirdly, like as people are saying LinkedIn has become one. But now I'm getting the DMS I used to get on Twitter on LinkedIn. Yeah. And I actually started this conversation in a couple different channels. I'm in like, social channels. And I started a couple different just to get people's take of like, I'm curious, like, I know we're taking tangents here, but like, while we're on this tangent of platforms, LinkedIn request How do you treat them? And like or how loosey goosey are you with them? Because sometimes I feel bad because I'm like, I have no idea who that you are. But then I've also done it. And yeah, Cassie, I'm I tried threads. I actually really did like Mastodon and like I'm still on Mastodon a lot. Check that and I don't know, and then I don't use

**Brian Rinaldi**  44:34  
I saw you on threads. No, yeah, that's, that's what blue sky is for. It's it's purely a shitposting platform. That's it. I mean, that's that's why I don't use it because I'm like, you know, I mostly want people's like links to good content and other tutorials and other crap like useful stuff. I mean, I enjoy a good ship posts as much as as much as anybody but like when your entire, like, platform seems to be about sharing shitpost like that, to me is like, okay, yeah, I mean, it's fun for five minutes. And then I'm like, but that's what I'm not on blue sky. I do think LinkedIn has become more useful. And I use it more. Yeah, I'm, I'm pretty loose about letting people in. If if their title is something relevant to being a developer? I don't you know, if it says like, anything, that seems like they're going to immediately pitch me on something, then I don't say yes. Or if they send me an invite that says something that I'm like, okay, this person just wants to pitch me on something, then yeah, but other than that, I lead warm

**Erin Mikail Staples** 45:46  
anybody. If anybody sends me a form, like trying to pitch me, I now have a form response. It's like, yeah, I have it, like, pinned and it's like, I just copy paste it in. And I'm like, you know, I believe in building real relationships on platforms. And this isn't very authentic of you. And at least you could do your homework for 30 seconds and understand, like, actually what I'm about. And then I put, like, here's top five links that I got, like, here's things I've done in the past year, if you'd like to read more, if you read this, and do your homework, I'm happy to chat with you. But like, if not go read these things and get on my way. Like, part of this is, I don't wanna be like, it was like, I wasn't machine learning. But like, it was such a hype space, that like, I now have machine learning demos or talks to my name. And so they'll see that or they'll see that I'm connected to a lot of people in that space. And it was so high up that I got so many Trier ml problem, like I don't any more than that. Yeah.

**Brian Rinaldi**  46:44  
Yeah, I got a lot. And then. So, Omri asked, Where am I posting for certified for CFP. And, and I'm, I'm not posting anything, for anything, even for promotional purposes on on X, I just can't get myself to do it. I'm sorry. Not judging anybody, but I'm just like, I'm like I am. I feel like, you know, when you create when you're doing, like, I can't create content for there's some some place that I feel is, is just, I can't, I can't get on board with with the type of place that the ex has become, in, and so like, is they monetize my content. That's the whole point. That's what the platform sells is the content that we're all creating. So that's where I get I'm like, I can't I just can't do it. And I honestly, I had that problem with Facebook. And this is where like, I'm hesitant, but I've, um, somewhat like gotten over it. I mean, you know, I think I think Musk has shown us how bad things can really be them like, oh, you know, somebody wrote somewhere that his great musk, great achievement is making us all be like, oh, you know, maybe suck isn't that bad?

**Erin Mikail Staples** 48:00  
My agreed. I maybe take like a situational ethics approach to it. And because like I'm still on Facebook, and I'm still active on Facebook, and a lot of the like, the real like conversations about like, this is you know, my I formally studied journalism I studied media, business and journalism on and I one of my biggest gripes in grad school and actually was at an event, an alumni event for my graduate class last night. One of my biggest gripes is why some journalists take the holier than thou approach and they get so hung up on moral morals that they don't they forget about the end goal and the end goal is to start facilitate conversation or spread truth or do that stuff so it's like, how do you you know, balance that like for the reason I'm on Facebook is nine times out of 10. You'll see like all my other stuff on there, but like it's for I do stand up comedy on the side. It is the only place you'll get booked. If you're not on Facebook, you don't have a Facebook page and you're not in New York's the right Facebook groups. You will not get booked as a comic. And distort Yeah.

**Brian Rinaldi**  49:11  
Yep. I mean, it's look I'll be honest, like Yeah, billing everything from particularly a year ago when I first decided to pull just not post anything to while it was still Twitter at the time. It it hurt like it hurt CFE because I it was harder to get people to come. You know, because that was where developers still work. Now, everybody's so dispersed that kind of doesn't matter in youth engagement on X is rapidly the anyway, actually honestly, the game management on most of the platforms is length or group best.

**Nnenna Ndukwe**  49:51  
Do you feel like the culture on LinkedIn in the way people sharing what people share is changing now that it seems like more people moved over way from places like Exner all at least Yeah, they're using LinkedIn more, because I'm seeing a lot more casual posts now that are not professional related. Yes. And I guess Yeah, people really excited to show their dogs and their Christmas decorations. And, you know, so I'm like, wondering, is the culture changing now?

**Brian Rinaldi**  50:20  
Yeah, I think it is. I think LinkedIn has become more of a an important destination, even for developers used to be like, mean, I think for the most part, a lot of people were like, Oh, I treated it previously, which was that was like, I went on there every once in a while, like maybe once every few weeks to approve or deny a bunch of connection requests, and then hop right back off, and that was it. But now like, it's, it's really active. So I think they're there. I mean, I you know, I hate to say it, Cassidy but reds, the tech community on thread has gotten a lot better and it's starting to feel more like, like early days. Twitter, but you know, you know, blue sky is telling you, yeah, not your account. Mastodon Mastodon, actually, like I think Mastodon is pretty decent, but it's, it's not as free. Like, it's not as busy. But like, you will still get, you know, you can still find them. Unfortunately, you'd now like you gotta be a little bit on all of them, I think to do anything, I guess. And yeah, Colin, it is still suck. And I know, I know. But it's like,

**Nnenna Ndukwe**  51:40  
I'm on. I'm on threads, but I use it. It's all fitness content that comes my way. And like, that's the main thing that I talked about on Instagram a lot is just like, Hey, Everybody get up, move your body, drink some water. You know, just eat your grapes, and apples and carrots. Like, that's a lot of the things that I talked about there. And so then that funnels into my experience on threads, which is just all about health and wellness. And I'm not mad at it. But yeah, totally different experience.

**Erin Mikail Staples** 52:13  
On on threads, slash Instagram, I've

**Brian Rinaldi**  52:17  
treated threads as like, totally different from Instagram. And maybe that's because my Instagram was was private. Because years ago, when my son was in middle school, like some of his friends found my Instagram and start digging through like old photos of him and made it just anyway, I became an issue. So I just, I just privated my account since then. But then when I created my threads account, I didn't have a lot of like, the only people I follow are like comedians and stuff like that, for the most part. It's, you know, cluding Aaron, but like, you know, so all my threads is pretty much tech in I didn't have a lot of transfer over from Instagram. Maybe that's why I'm having a different experience. But I

**Erin Mikail Staples** 53:07  
do have a I have no I don't have kids. But I do have a story. I do adjunct teach sometimes. And I do have an embarrassing story of like, my students finding my Twitter. Because I like and I don't think it's that bad. Like, but I was teaching it was actually when it's teaching in Nevada, I was teaching like Introduction to Digital technologies both well, like 100 level required journalism class requires the lab not even class to graduate and they had to do digital investigation. So I'd be like, Go find your thing. Like go find people that you look up to on the Internet, what type of content are they producing? And what can this tell you about like their content strategy, like thinking about like, content strategy? Um, I had gotten out of a breakup, presumably, at this time, and I had tweeted, does anybody else have a meltdown and cries for even to the Spice Girls on their car? And as they're eating a burrito? Or is that just me or something along those lines like stupid like 30 minutes before this class started? And I say assignment this they would they would make like a board and copy paste images of things that come the inner links, and I put it on a projection and guess what first tweet someone found before that class? Oh, my God, college student and I was like,

**Nnenna Ndukwe**  54:23  
why did i What did you do? How did you react? I

**Erin Mikail Staples** 54:26  
literally was just like, fair game. It's on the internet fair game. I wasn't I was like, my goes two ways. Once I said it goes two ways, then it was like they were like, alright, because I did find out that some of them were subtweeting. And I was like, Y'all get some good or good. And that's why I will never work undergrads again. Like, undergrad freshmen terrified me. Yeah, that's my school students. No, no,

**Nnenna Ndukwe**  54:51  
that's not my ministry at all. I think that's someone else's calling. And not

**Erin Mikail Staples** 54:55  
my calling. I know enough to know that is not my calling. grad students do the work. Great. But yeah, anyhow, I know we're coming up on time.

**Brian Rinaldi**  55:04  
Yes, we are coming up on time it's been, you know, it's like that we could obviously keep chatting all afternoon. It's been so much fun. But it's time for the pickle Fact of the Day. So, Nnenna, would you obviously, we're pickle themed here playing off the dev relish. And, you know, the idea of DEV relish wasn't really about pickles. It was it was about being like there's a lot of different rules out there and they're not all like Dev Rel like they have different titles and things like that. And so it was damn frail ish rolls you know, but we have some fun with the relish aspect and we have a a well monthly since we do this monthly pickle fact and Aaron is in charge of our pickle fact than she is a resident actual like well fermenter does have its a term I don't know what I don't know what the term is.

**Erin Mikail Staples** 56:02  
What's it fermenters

**Brian Rinaldi**  56:03  
yes and then Collins already jumping in with the with the with the pickle ponds is a also a monthly thing. All of our audience jumps in with lots of pickle puns. Okay, Aaron. Before before we run out of time, let's let's hear the fact.

**Erin Mikail Staples** 56:20  
So this pickle pack takes us back to 1893 the Chicago World's Fair. The Pickle King. I don't know if that is a self given title, or a title that someone gave him. HJ Heinz dispatched a few local boys to tempt fairgoers with a free gift. And so he actually was handing out pickles at the World's Fair and pickled pins that have now become a collector's like they've actually been auctioned off for like a bajillion dollars or something I don't know, the actual number just said, auctioned off for high amounts of wealth. And it is actually one of the most successful marketing gambits and it is attributed to the founding of the HJ Heinz Company.

**Brian Rinaldi**  57:01  
Wow. Yeah. Nice. does have a F relish thing. They

**Erin Mikail Staples** 57:05  
relish. Yeah. But it actually was one of the biggest things and he got involved with lobbying efforts. And he is one of the reasons why we have food safety regulations outside of the jungle. But there's a whole nother book and a rabbit hole we could go down to, but he lobbied for new food safety regulations, but the reason behind it was not so kind and awesome. It was because though his competitors couldn't sell similar products with additives. That's

Speaker 2  57:29  
what happens. You know, you start off as a you know, just a fermenter or whatever, like, like you Aaron, and then suddenly you're working for big pickle

**Brian Rinaldi**  57:47  
Yep. You know, anyway, I think I think Aaron, since since apparently, you can just give yourself a title like pick okay. You know, you should be the pickle queen.

**Erin Mikail Staples** 58:00  
i Yeah, I'm gonna I'm self nominating pickle queen. I love that.

**Brian Rinaldi**  58:04  
Oh, yeah, we we have we're all in agreement here. So done voted. Guy. Pick the next time a little crown that says pickle queen.

**Erin Mikail Staples** 58:18  
This is my figuring out how to

**Nnenna Ndukwe**  58:21  
outfit too nice to be a certain color and like style. I'm

**Erin Mikail Staples** 58:25  
don't let people put you in a pickle

**Brian Rinaldi**  58:33  
All right. Well, this was so much fun. I want to thank you, Nnenna, for coming on. Thanks, everybody in the audience for rejoining. We will be back next month. Actually, I've got the next couple of shows already booked up. So. So look for that on CFE.dev as well. Also, just in case, you're curious. We just announced the the jam dot Dev. We'll be back next month. So that's our biggest event of the year, coming January 24 25th. If you're interested in web dev, or as even Dev, you know, if you're interested in JAM stack. Yeah, check that event out as well. And look for all the upcoming events on CFE.dev. Until next month. Thank you all for joining. Bye, my friends.