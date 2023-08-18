---
_build:
  list: false
  render: never
---

**Sean C Davis** 0:03  
Welcome to another uptime FM episode. I'm your host, Sean C Davis. Now before we get into things today, just a little quick side note, we're after taking some inspiration from what Aaron and Brian have been doing with their dev relish show, I created a channel in uptime, or for uptime on CFVs Discord server. And this is going to be a space where we can we'll keep notes about the episode, you can post some questions about the episode. And so I created a little thread. For this one, I'll drop some notes, maybe some links if they come up. And we'll we'll kind of experiment with this. We'll see how it goes, we might continue to evolve how we use this. And the main goal here being to keep the conversation and the engagement going in between episodes since we have generally just a two week break. And we can get set up for the next one. And yeah, so we will see how this changes. But for now, let's get into this episode. Today, I'm excited to have special guest, Eldad Fux, founder and CEO of AppWrite, and we're going to talk today a lot about AppWrite, as we kind of explore what it takes to start, run, manage, maintain, and build a company all around an open source project. So welcome to the show. Well done.

**Eldad Fux**  1:22  
Hey, it's good to be here. It excited.

**Sean C Davis** 1:26  
Um, yeah, I'm really excited about this. Now I, I spent just like just a few months, most of my history is in the agency world building websites for various companies and different business applications. And when I shifted into the product world, I spent a few months at a company that was all built around open source and for the last two years have been in more of the kind of traditional space where building the, you know, I guess they're eventually both for profit, but the more like the closed source sort of thing. So I'm really excited to get into all that. But of course, we have to start where we always start and ask you, what is the best sandwich?

**Eldad Fux**  2:06  
Yeah, that's why you probably think, for me, I'm already I'm homeless guy, I will just sit like, plain but I didn't tell or something like that. Like, as simple as it is. It's like best for me. Yeah.

**Sean C Davis** 2:25  
That's my favorite part about this question is that there are no wrong answers. There's only you know, it's only what makes you happy and what you enjoy. But I generally have to try to, you know, see if there's any, if we can get any more specific about it. So is it any type of bread? Or do you have like, is there if you're putting a tele on bread? One type of bread is going to be better than the rest?

**Eldad Fux**  2:52  
Probably white bread?

Yeah, not the healthy one.

**Sean C Davis** 2:57  
And then do you? Do you toast it or leave it just cold room temperature? 

**Eldad Fux**  3:02  
God, just just like that, as simple as it is as quick as possible? It just gets to the point.

**Sean C Davis** 3:09  
I love that. I love that. It's so simple. But hey, it gets the job done. This is great. This is great.

**Eldad Fux**  3:15  
Exactly. Exactly.

**Sean C Davis** 3:17  
So okay, so we're going to talk open source. And and I, as I mentioned, before we started I have a long list of questions. And this could go a number of different directions. But I think before we do that, it would probably be good to help set the context for the folks listening. And so maybe you could begin by telling us a little bit about AppWrite? What is it? Why did you create it? What problem are you solving?

**Eldad Fux**  3:43  
Yeah, so So I probably probably started maybe even a decade ago, in my mind, trying to deal with my problems. I'm coming from a software engineering background, I've done a lot of software architecture, led multiple teams. And I guess I was at some point, I was really fascinated by the fact that I can really focus on building cool stuff. Like it's always a race, like you either have to learn something new, or deal with a lot of complexity to get things that you would expect to be trivia.

So with my desire for simplicity has already talked to you and I explained how I like my sandwich. I was really looking for something to abstract a lot of this complexity and give me and I see the I Agree developer experience before developer experience was even though I didn't really know how to phrase it, but I just wanted it to be nice and clean and something that I would like to use and apply it was this vision of creating this abstraction there that gives you all the API's that you would basically need in order to build any kind of nice frontend facing app whether it is for web or mobile or whatever. 

Today the concept is called Backend as a Service and that whatever it is, and when I started working on AppWrite for people Who might be familiar with backend as a service, it's basically like building like five or six products at the same time. So it's really, really difficult. And I was trying to build it as a side hustle during my free time. And at some point, I realized that I can't do this on my own, like, it's way too difficult. It's either let it die or do something to make it succeed, or at least they a lot. 

And coming from a deep open source background, with no formal education as a software engineer, I've learned code from open source communities. So I always have this itch to kind of give something back to the community and not just be in a passive consumer of open source. And I really, I decided to release AppWrite as an open source project exactly two years ago. And that was probably the best decision of my life. First of all, building something out in the open with the community is like, a completely different feeling. It's not like anything else. couldn't match any any cool product that I was getting close. 

And it helped AppWrite, become successful, apparently, because we're still here years later. And our community literally, like a few minutes, like literally a few minutes after the project was ready, like community started forming around the product, you could see the GiotHub star count starting to rise, people gathering around the project, wanting to help you start seeing that features get assembled and get done without doing much. And yeah, and the product became really successful a few months later. And then later on, we were able to raise some money build the company around, but I'm sure we're going to talk about that as well.

**Sean C Davis** 6:48  
For sure, for sure. Okay, so you, were you were you building it for a while, before you decided to make it open source?

**Eldad Fux**  6:57  
Yeah, I was, you know, it's really hard to set a date on when I started building AppWrite because as I mentioned, before, it was running in my mind for probably a decade, probably I assembled a lot of open source libraries that I had, that nobody really cared about, and assemble them all into one product. 

But it was definitely like a few months before releasing to the open source project, I gave a really hard push to try and make it like usable so people can get excited and join the community and excel, do something with it. And it's also like a hard decision when to release and open source for that actually, when AppWrite was just released. Like there was a lot of coming soon screens on the dashboard and stuff. It wasn't really ready. But it was good enough that we created some validity. But I guess like that was that's probably the time where you actually need to release and let go and let it go.

**Sean C Davis** 7:46  
Yeah, that's, that's interesting. So where did you? How do you draw that line in your mind between you? I mean, I'm trying to think of that there was a phrase I heard recently, which was, oh, I can't come up with it. It had something to do about think you should be embarrassed by everything that you ship. You know, like, if you if you're super proud of it, then you probably have shipped. Yeah. But yeah, where's that? Like, this was not quite ready, but we're putting it out there anyways,

**Eldad Fux**  8:15  
I will probably take this philosophy even farther and say it's probably true to your entire career. If you're too happy with the stuff that you will create in your family like you have a problem because they will not aspiring like enough, you don't you're not trying to get better enough. So I would say, never be satisfied. Like it's all doom die just unhappy or something like that. Just you have to be better all the time. 

And that's our life as software engineers, people trying to build stuff that give value to other people. And yeah, it definitely doesn't have to be perfect. I think for me, the line is if it's it can provide value to others. Like it should probably be out there. And it shouldn't be perfect by any means. We'll never be perfect, just continuous forces to improve it over and over again.

**Sean C Davis** 9:00  
Yes, I love that. Love that advice. Okay, so you mentioned, eventually you built a company around it. It was about a year after releasing the project, the open source project. And I was curious, I might be jumping a little too far ahead. But we'll come back if we need to just as you're going through that initial funding. What can you say around the difference between? What Yeah, what do you have to do differently when you're advocating for money for an open source project versus, you know, something that maybe has a maybe these are mutually exclusive? But I don't know if you're comparing it to something that has maybe a more immediate, like direct income value or something like that?

**Eldad Fux**  9:48  
Well, I think it's a really tough question because probably the process for each and every product and every company is a little bit different. But I think what might be a bit more common to open source company So even specifically to dev tooling products is that at mostly the beginning, the early stages, it's not really about the revenue, it's more about the product market fit the potential, the growth, the community engagement around it, like you can create a lot of validation that other products might need a lot of months or maybe a few years to get. And with open source, because of this bottom up approach, you can get that immediately. And you have like this constant, really, really short feedback loop with your end users, your customers, developers using your product. So that's really, really valuable. And you probably also want to target yourself to investors that are familiar with that landscape of open source companies. Because the the, the funding cycle is definitely different for open source companies and for dev tooling companies from other like b2b sauce campaign, which is pretty obvious, but I think we'd open source didn't come into more effect than other companies.

**Sean C Davis** 11:00  
And do you do you feel like the it, I should say, it makes a lot of sense that it's, it's very different. It's very contextualized to each individual circumstance. But yes, more important to show that or find that product market fit earlier? For having and having an open source company, I'm guessing you already had some sort of like you had a community behind it. And it wasn't, it was a thing that was out there that people were using compared to, some people might be able to just sell an idea or make a video and say I can build this thing, right, but you already had a lot of the thing in place.

**Eldad Fux**  11:41  
Yeah, definitely. Now, I think it's probably true to any company, like your job as a founder is to constantly have like to have a big vision and to constantly strive and create more validation about it. And I think with open source companies, the validation comes much earlier because of the mass scale that you can reach in the very early stages of the company. So we were able to show a huge traction around the product, a lot of engagement in the app with communities, across different platforms. So that really helped us like to ensure that we were on the right track. And today after seeing so many successful stories from huge and aspiring open source companies like GitLab, or Elastic or Redis Labs. So there was also this already kind of a pattern that investors are looking for. It's much clearer today, how what is the journey that an open source company should go through in order to be successful? So obviously, that helps us work.

**Sean C Davis** 12:36  
When can you can you kind of what are the broad points of that journey that an open source company should be going through?

**Eldad Fux**  12:46  
I think even as we touched on, like, it's the product market fit that comes very early on. It's the big vision that the company necessarily start from a specific angle, but can go in a lot of different, a lot of different areas. Like if you look at the last extorting phone, like Elastic search, going into having like this complete huge stacks and huge ecosystem around the product. So you need to understand that, and the validations come much sooner. And also, it's not about monetization, it's always a balance. When do you monetize? How much do you build? For me, like, if you focus on building the community first, like you increase the potential for monetization eventually. And that's a today like also, like open source communities understand that this monetization is actually really, really important for the project, because you don't want a project that doesn't have any funding any back end and can disappear to more so by creating monetization by having those funds on the vessel that we ensure that the product is and the ecosystem is really successful. And we can also talk about different ways that the company is also committed to helping the open source community and the ecosystem around the product to be successful as well. So it's not just about like making business success, communicate in a healthy environment for all parties.

**Sean C Davis** 14:03  
That makes sense. Yep. So I mean, as a result, do Do you regularly have to justify why the product is open source? Or is it? You know, the value is kind of baked in to just the existence of app, right?

**Eldad Fux**  14:27  
Well, obviously, it's really different and talking with different individual, but I don't think we need to really work. I think people really get to the the value of open source communities from every aspect of it, whether it's collaborating with the community and moving much faster than any like traditional company, you know, we have over 600 contributors. Like that's crazy. What other company can say 600 people contributed to the code source, if it's not an open source company, should be really big. So we have that almost like very early on, and if it's coming from the transparency and being able to see our pull request and how professional our team is or isn't. And being able to interact with the founder of the company on the soul, which is pretty cool, I guess. And the engineers and the core team and, you know, from talking to people ops about how to get hired, but so all of that a kid, a lot of advantages that other traditional company wouldn't have thought, I think it's a pretty much a clear choice for developers, that would go even farther and say, like, that's the best way to be the developer of the company. And I think not going that route is going to be super difficult and probably much store.

**Sean C Davis** 15:37  
Yeah, so yes, good point. Okay. Okay. So speaking of that community, you said that early on, right, even right after releasing it, that you saw the GitHub stars ticking up and up, and that community was building pretty quickly. So I mean, without any other context, that tells me that you, you obviously built something that is fulfilling and need solving a problem that many people had, was there anything, in addition to just having the good product that you did to be able to attract and maintain community members?

**Eldad Fux**  16:14  
Definitely, you can have the best product out there. If nobody knows about it, like it's probably worthless, right. And honestly, I've done a lot of work on myself as an introvert software engineer, that prefers to not be on camera like we like. Yeah, I grew to enjoy making me suffer anything, don't feel that. But it was really about getting out there. Putting my face in front of the police also about building trust, and you don't want it's really hard to trust someone back in the shadows. Know that, okay, not explaining the reasoning behind the border, the border, or the vision behind it. So it was a lot of personal world getting out there. A lot of content creation, to understand, we're talking, we mentioned developer experience and developer experience, not just about building like a pretty architecture in a nice API. It's like a full journey, from how people get exposure to your product, your awareness out there, and how your dogs are composed, how is the discoverability of all the different features in the product, to how you integrate with the SDK is installed. And then like the consistency and the predictability of the API, even the naming conventions, you know, like we can spend hours, we are trying to start using like aI capabilities. Now to help us with naming. Let's see how

**Sean C Davis** 17:38  
the interesting, interesting, yes. Okay, and so, you, okay, so you're very intentional about how you're building this community, and you're, you're making noise about your product, you're getting noticed. And now, you know, then then all of a sudden, you start getting some code contributions. So I, this is this is a part of the world that I don't have a lot of experience with. And so I'm curious, you know, how are you? Let's just start here to how do you balance the having a vision for the product? And? Or how maybe, maybe I'll ask it this way, how does the vision you have for the product, affect the way that you are accepting or reviewing pull requests or asking for contributions or, you know, working with folks who aren't your employees?

**Eldad Fux**  18:36  
Yeah, so it can be really, really hard. And from very early on, like, we design the product for contributions, like from the contribution guide to the product to how the architecture is fully explained, like how we have the advanced of everything in the architecture. So basically, the training process that an applied engineer goes through is the same process, then an open source contributor can just go on his own by just going through for documentation. So that's one thing that like we have a lot of different areas where we allow developers to expand the product. So I think like the big the good, folks issues need to be important in that regard. That we just have a step by step tutorial for any kind of extension to the product from how to add like an authentication adapter to our authentication service, to how to add a new one time to our server list compute service function service, to how to add a new adapter for supporting like MongoDB in the database or Postgres or adding support for s3. So everything is really well documented. And that way we allow the community to start engaging with our source code with our architecture starting to become more familiar with it, and contribute. You know, I think one of the most interesting facts, one that I'm really proud about is that most of the integrations to the product today and like maybe 90% of them were not written by an applied employee. Maybe some of them became later and applied in plush, but they started as community members. So it's like building this, we like to call it developer proof architecture where we really create a really solid structure of interfaces, adopted patterns and good contribution guides to help them build it according to our stand out and help us delay the vision of the product. And then again, like doing everything out in the open, like being very transparent with the RFC, for every new feature, we draft and our see as the community for feedbacks, been very transparent about it, asking the community if they want to contribute something, they should probably hope, and ideal and issue first before going diving into that and like committing, like one of the fights and we have to reject, we try to avoid it as much as we can. And luckily, we didn't have so nice like that. Hopefully you want if you listen without any heads up.

**Sean C Davis** 20:54  
Yeah, that's actually that's, I mean, even for a product that doesn't have that policy, it's that's probably just good advice to take.

**Eldad Fux**  21:03  
Yeah. Communicate with the maintainers. And the contributors before we dive into the source code to the shirt,

**Sean C Davis** 21:12  
for sure. So we're okay, so you set up the product so that it's easier to work with it? Does that mean that most of those contributions are coming in the form of I think you said adapters or extensions or plugins? Or are there also contributions that are coming into the core product itself?

**Eldad Fux**  21:32  
Yeah, definitely. We have bug fixes or new features or stuff that the committee see that we just don't have enough time to prioritize. So sometimes people will just pick them up. We're very communicative on it. So to provide support, specifically to maintain hours, and then also a great hiring strategy, because a lot of our engineers actually started this way. And we got to engage with them see that they're really awesome individuals, and now they work full time for effort. And they don't just have to do it for final. A contribution.

**Sean C Davis** 22:07  
Yes, yes, that's a that's a great benefit. So you've also been, so you've been writing code for a long time. And you know, how you just said that you're going, you're going, you're gonna post an RFC for any, any big feature that's going to come out. So it feels like you're making the community definitely an integral part of your planning process. Does that? Does that change the way that the team might work internally? Like is that, you know, internally? Are you still having stand ups and sprints in the same way? Or does that do you? Does it as a team working fully open source like that? Do you have to shift some of those more standard operating procedures to almost always include the entire community?

**Eldad Fux**  23:00  
Yeah, definitely. We're trying to be as collaborative as possible, and make sure that we constantly share our communications with the community for those RFCs. And definitely have some shifting our processes to make sure that we review issues from the community that we take feedback, and we can just run blindly, it has to be a collaborative possible. This is like an amazing resource that you have at your disposal, it's a shame to not use it properly. Because if you have any doubt about the design and architecture, it like even the the UI and UX of the product. So we just, you know, we open a bit of discussion as for feedback tag people, which is way more intuitive and easy than trying to find some AB test group or send emails to developers trying to bribe them with some stickers or something to to help you with a survey or something. So it's way easier that way. It's just a shame to not use the scissors. And I think on the other hand, like the community is really benefiting from that, from the transparency from understanding, well, the product is going and building that trust, which I think is really crucial for developer tools, in specific probably for any product. But in this category, it's much more we both in writing.

**Sean C Davis** 24:14  
And does that make it harder to prioritize because you're you're getting, you're getting ideas and suggestions from users, but also from developers, it's I imagine it's a large number of ideas and suggestions can compare to the small team that you're working with.

**Eldad Fux**  24:33  
Yeah, definitely can create a lot of noise. I think we constantly need to remind ourselves that we have a vision that we need to be committed to. Sometimes you have to filter food and sometimes it's not that nice, but as long as you're being transparent and honest about the reasoning behind it and just lay out all the reasoning why this specific feature can happen or we can well it is nice over that. I think the committee really acts subject, but I think it's also important to show strong leadership around the product and to have a clear vision and to strive there. Because, you know, just you need a direction, it doesn't work too many cooks in the kitchen. It's not it's not the best approach is

**Sean C Davis** 25:16  
to be just very direct and very transparent. And then everybody, everybody wins, because they know, they know what's happening, basically, right.

**Eldad Fux**  25:24  
Yeah, it's acceptable, it's probably the same way like a standard organization would work. People have ideas, they don't always get accepted. But eventually, like, you need to collaborate as a team or as a community in our case, and just move forward and understand like the the greater good of all of us together. Sometimes we might get things wrong, but can fix everything up all of that can be fixed yet.

**Sean C Davis** 25:46  
Exactly, exactly. I mean, I think that's really interesting is, you know, at stack that we have open source projects, but the core is not open, have stack bid. But I'm also hearing all these parallels between what you're saying and the way that we would interact with developers working with stack bid or customers or end users. And it's, and it does, a lot of that comes back to everyone should know what your vision is, they should know where you're going. And if you're going to not work on something for whatever reason, then being direct about that and explaining why. Yeah, a lot of those a lot of those values and those tactics, I think, translate to probably most product based organizations. Thank you. Okay, so one thing I noticed, looking into the app, right, a little deeper is that it's, it's a, it's a self hosted product. And the open source company that I worked for a couple years ago, was in the same area. And I recall that being it was it was like it for us, at that time, a less expensive way to be able to spread the product around. But it also it was it lowered our complexity as well. But I think that that it brought on some other challenges, along with those decisions that we made. So I'm curious that maybe we just go back to the beginning and say, Why did you originally choose to go the self hosted route?

**Eldad Fux**  27:20  
Well, I think when you choose open source, like it's almost obvious choice to go self hosting, and also like compute and stuff like that, we won't fund it at the beginning. So even thinking about that, like it wasn't really possible, even if we wanted to. So just being self hosted, made a lot of sense. And I think like even back then, I still had like the idea that it could become like a great company. It wasn't that like I was naive about the beginning. But I said that most cases will be a cool open source project. And even back then, like trying to think of what different monetization paths we could take. So it was really obvious that like, Cloud is going to be one of them. And because of the product complexity, and the fact that there are so many services and hosting is not the easiest so intuitive, the most intuitive way to do it, especially if you're coming from folden background or mobile dynamic, you don't really want to deal with containers and orchestration and Kubernetes and stuff like that. Exactly. So we're always fed the cloud, there's enough value. So we can go self hosted. And just help spread the word around the product and make it really really nicely because we're all like open source enthusiastic, and we don't really want to create like this with disabilities in the port, I can make it hard to sell host. So it was a really obvious stories. And you know, building that back into the sales, I feel like you also have so much potential in going the poor like and building an ecosystem around it. So going self hosted felt really, really comfortable for us. And even now, we have our cloud solution in beta right now. And there's not much difference between the self hosted in the cloud, it's really minimal features. And because we believe that the value that the cloud solution brings is already big enough. So we can build on top of that, instead of getting disabilities sometimes not criticizing, but sometimes like other companies or other products might have to do because it's just the monetization is really different between one product and another.

**Sean C Davis** 29:21  
So it sounds like you put you put a lot of energy and around making that hosting process really easy for developers.

**Eldad Fux**  29:31  
Yeah, definitely forming easy one command installation to different one click deployment on different cloud vendors, whether it's digital ocean, AWS, so Linode or even get bought to very simple and easy to use topical postfire that you can just spin on top of containers. And I really try like one of our biggest challenges is constantly to see to try and see the food chain in a very clear way. and how we can reduce it using software. So, constantly optimizing how the installation process can be smooth, and you think like with any other bosses or journey that we have in the product.

**Sean C Davis** 30:15  
And you get that feedback automatically, through. Yeah, like through analytics of your tool, or is it also more qualitative information and just talking with folks who are using it?

**Eldad Fux**  30:31  
It's probably both, then we have a really active community on Discord, which we interact with developers day in day out, we hear the feedback, I think one of the most appealing thing that we hear is that the installation is really seamless and easy. Which something will make us really happy, because we know we invested a lot of time in actually making it that easy. And on top of that, yeah, we have some very gentle analytics tools that are integrated to make sure that you also have the visibility to make the product better and to understand if the decisions that we made are actually benefiting with developers.

**Sean C Davis** 31:08  
Okay, okay. All right. Well, this has been amazing. I feel like I could go on and on and on. And you've got you've got an answer for every question. So let's, let's shift to this last segment, where I've got a series of nine short questions for you. Some are some, some will be in the same space, some not. And, of course, feel free to pass on any of these. Alright. Ready?

**Eldad Fux**  31:34  
I hope so.

**Sean C Davis** 31:39  
Some of these might have overlap. And you know, I think we just we covered so much. So my number one is, I think there's some overlap here. It's it's what is the hardest part about managing a community of developers who aren't your employees?

**Eldad Fux**  31:59  
Not enough time in the day to actually reach out to all I would love to spend more time with the community, which is a CEO today. I don't get as much as in the beginning. And I apologize for that. If you hit me up. I do. Absolutely.

**Sean C Davis** 32:13  
That's great. I love that one. Okay, number two, where's the most interesting place that you've traveled?

**Eldad Fux**  32:22  
Hmm. I don't know. I've actually haven't been in exotic places to take a vacation. I really like it here in London. Right now. I'm based in London currently. So I really enjoyed being in for a few weeks. I'm going to say for a few months.

**Sean C Davis** 32:41  
Oh, wow. Yes, that's an extended trip. That's, uh, that sounds amazing. In London, but six or seven years ago or so? And yeah, feel like, it was great. I had no idea how big it was. It's just massive.

**Eldad Fux**  32:56  
Yeah, it's massive.

**Sean C Davis** 32:59  
Okay, number three. So all right, we talked all about open source today. This one is what's when open source product or company that you really admire, or maybe one that you've taken a lot of inspiration from? I know, you mentioned a few. So you can you know, feel free to use one of those two.

**Eldad Fux**  33:18  
I'm gonna allow that honestly. So I don't want to leave any behind. But I think Elastic is a really good inspiration with the challenges that they had and like hearing the story. And he's also a close friend. He's one of loving angel investor. So I keep seeing that firsthand the challenges in like, the goal of the company and where they are today. Like it's amazing. A lot of sentiment for elastic.

**Sean C Davis** 33:43  
Yes. Okay, that's great. And they've been around for a long time, right? Or that at least the the open source tool had,

**Eldad Fux**  33:51  
I think, almost a decade or even more than a decade now.

**Sean C Davis** 33:55  
I think so I've just I, I came across it again recently. And it caught my attention because I was I was like, I was using this tool here two years ago when I was writing Ruby on Rails applications. And it's it's still around and thriving. This is great. Yeah. Okay, number four, what is one thing a developer should do if they want to get their product noticed by a community?

**Eldad Fux**  34:26  
Two things probably, first of all, probably build something that you can really relate to, and that you have a lot of passion for. That was like I think my biggest drive have to push up to the limits, and really try to gain a new set of skills. It's not just about building gates after it's about how to build an entire product of like basically a mini startup, you should treat your project as a mini startup, but you also have to take care of marketing advocating for it. Understanding the entire journey. It's not just about it. In a cool API is how people learn how to use that API, what the stickies they have. So it's an entire journey. It's an entire things an entire ecosystem, you need to think of not just the liquid border, that's probably the hard part. But the harder parts.

**Sean C Davis** 35:17  
Right. And there's a ton of nuance to pack in there. But I feel like to sum it up for you. Basically, it's not just about writing code. It's there's, there's

**Eldad Fux**  35:28  
probably a small part, honestly, it's a difficult, but small part.

**Sean C Davis** 35:32  
Yes, yes, totally. Totally agree. Okay, number five, what's your most enjoyable, non tech related activity?

**Eldad Fux**  35:39  
I'm a huge football fan. huge Manchester United fan. I don't miss that much since I was like, 11. And in recent games, I'm really I'm suffering a lot. The team is not that great. But I'm hopeful. I'm hopeful. I'm a huge fan.

**Sean C Davis** 35:58  
And have you so you're in London, have you? Have you been to a match?

**Eldad Fux**  36:05  
And not yet, but I have a few plans. So okay, good. Look, look out for me. On TV might be in the stands.

**Sean C Davis** 36:14  
Amazing. Amazing. Okay, number six, what is? What's the best? Or another way to say it maybe the most useful advice that you've received in your career?

**Eldad Fux**  36:30  
Never give up. Basic, but to don't just don't give up.

**Sean C Davis** 36:36  
Love it? Yeah. Number seven, what tool has helped you the most in the process of building and maintaining app, right?

**Eldad Fux**  36:47  
Well, tech stack is pretty complex. I think. I think Docker was a game changer. Like when the initial ideas about Apple it started because it's a really complex piece of tech tools. And Docker made it seamless with a single command. Otherwise, you know, Docker, I had to install like a GitLab instance, a self hosted GitLab instance was like 10 years ago, it took like 24 hours to just follow the commands. Everyone had their own treat, how to install a software back then. Things like Docker was a game changer. And we still rely on Okay, heavily. We're big fans of Docker as well.

**Sean C Davis** 37:25  
That's Yes. Okay. That's a that's the perfect answer. Because I, I built a couple open source projects, I mean, just really small for mostly internal use, even though they were they were publicly out there. But it was all pre Docker days. And yeah, the INS I just remembered the instructions of this is what you know, go to Digital Ocean and grab your server and then run this command and this command and you're like, maybe two, maybe it'll be done in two hours, maybe? I don't know. Yeah.

**Eldad Fux**  37:52  
After you finished generating all the certificates and the keys and passwords and making sure we have like the right level of access.

**Sean C Davis** 37:59  
Yes, yes. 100%. Yep. Okay, tomorrow, number eight, what is the biggest mistake you've made in your career?

**Eldad Fux**  38:11  
Not starting upwards.

**Sean C Davis** 38:16  
Like that one. And I feel like that's, that's right in line with everything else that you've you've been saying today, which is which is great. Okay, last question. Last question. Number nine. This is one that we keep coming back to we generally end on and it's it's a ridiculous one, but I love it. It is you can you can host a lunch with any one person person can be alive or not. Because this is hypothetical situation world. Who are you? Who are you bringing to lunch? Steve Jobs. Okay, all right.

**Eldad Fux**  38:50  
I know it's a cliche, but Apple is amazing, like the best brand on the planet. Yeah, amazing inspiration.

**Sean C Davis** 38:59  
You feel like you have a specific, like a first question that you would ask him.

**Eldad Fux**  39:07  
Not sure about the specific question, but I'm really curious about all the internal processes would meet them in Apple and that company of that size and making it so consistent, cohesive. And trigger a lot of emotions for people.

**Sean C Davis** 39:23  
Huh? Yes, that would be I feel like you would get so much value in just an hour lunch. Commerce. Yeah, definitely. Yeah, yeah. All right. Well, thanks, Dad. This was this was a fantastic show. Appreciate you being here. And one last thing before we go, feel free to tell listeners and viewers how to get in touch with you and if there's anything else that you want to plug along the way. That's done.

**Eldad Fux**  39:50  
Yeah, so you can follow me on Twitter at EldadFux and or we can chat with me on Discord hanging out in the AppWrite server all day long, literally all day long. So.

**Sean C Davis** 40:05  
All right, great, great. And thank you to everyone in the audience for listening live or even viewing later these shows are recorded live on the first and third Tuesdays of each month at 1pm. Eastern time in the US is 5pm GMT and then we later syndicate these on YouTube, but you can get past, present and future episodes, all listed on CFE.dev. Now, I'll be back here on April 21. Hosting Bryan Robinson we're going to dive deep into the composable content architectures. This is like a newer trend kind of emerging with with website patterns today. And so this one is going to be kind of interesting because Bryan's company and my company are working on kind of different ways to solve a similar problem. So that one, that'll be a little bit of a different one. But until then, from all of us at CFE.dev, thank you for joining us for this show. And I'll see you next time.
