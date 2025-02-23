---
_build:
  list: false
  render: never
---

**Rachel Andrew:** [00:00:00] Hello.

It's really good to be here.

**Brian Rinaldi:** Yeah, we're really excited to have you here. So, um, before we get started, I know we're going to open it up for questions from the audience, but like, can you tell us a little bit about yourself, um, beyond the intro kind of thing and, uh, and your current role at Google?

**Rachel Andrew:** Yeah, sure.

So you mentioned I'm content lead for, um, Chrome developer relations and day to day, that means that I manage a small team of really excellent writers and we publish to web. dev and developer. chrome. com. So if you've read anything on my website. Those sites that is something that my team have worked on.

We're basically supporting DevRel and the broader Chrome organization to, you know, with all the content about, about [00:01:00] features and things. Um, so yeah, that's, that's kind of the main part of my work as, as you mentioned, I'm also involved in baseline, which we'll, we'll talk about, and I've been a CSS working group member for a very long time.

I joined as an invited expert originally, and now obviously I'm at Google. So I represent Google on the working group and I edit a couple of specs, multi column layout, um, and it's the sort of main one that I do work on. And, um, there's other things that I kind of chip in with, you know, as, as, uh, as needed, um, particularly layout things and things to do with print as well.

Let's see if that's a print I'm interested in.

**Brian Rinaldi:** So, um, one of the things that we, we didn't mention in the intro, but I know you were interested in talking about it, and it was announced just last week, the focus areas of Interop 2025. Um, can you share a little bit about what Interop is and, and which browsers are involved in it and so on?

**Rachel Andrew:** Yeah, sure. So, um, Interop is [00:02:00] a project that's been running since, um, 2022, although there was a sort of predecessor, um, in 2021. And what this is, is it's a project that brings together browser vendors and other implementers. So that's, uh, people from Chrome, Safari, and Firefox and Edge, but also people from Igalia and Bukoup who do implementations and tests and things.

Uh, so we all get together and we identify a list of focus areas. And these are things that are typically pain points for developers. So places where there are interoperability problems, it might be that it's completely missing in a browser, or it could be that, you know, it is actually in the browsers, but there's a bunch of bugs and issues that, that people trip over.

So we get those things together. Um, and then every year all of the browsers work to try and get those things fixed, um, and get to the end of the year and we can go, great. You know, the, the platform has got better and more stable. Uh, so there's a dashboard, um, at wpt. fyi interop, [00:03:00] um, dash 2025 is, is this year's.

Um, and so, yeah, you can go there and you can kind of follow along. It's based on web platform tests. So as tests pass, the score gets higher. And, and hopefully we all, uh, you know, get to the end and we've got a more or less complete score for each thing.

**Brian Rinaldi:** So I saw they, they were talking a lot about like the focus areas of 2024 and what was accomplished.

I mean, do you want to, can you share some of what you feel like were kind of the key accomplishments last year?

**Rachel Andrew:** Yeah, and I guess it depends what you're most interested in. Um, I mean the, the nice thing with last year is that every Browser got to 99 out of a hundred. So pretty much all of the tests were passing for all of the features.

Um, things I think are particularly interesting, um, app property. So a way to, you know, create custom properties in CSS that have got default values and types. It makes those very simple CSS variables. So much more powerful, um, and, [00:04:00] and it makes them easier to use as well. Um, you're not going to end up with, you know, someone trying to set something that should have a number in as a color or, or what have you.

Um, little things like text wrap balance. I thought it was a nice feature because, uh, you know, it's something that I think. Anyone who's come from a print background or a traditional design background, you know, the web is quite frustrating because, you know, you have all these sort of things where lines are unbalanced and things look messy because you think, well, you know, we should be able to balance those headings.

Um, and it seems like it's taken a long time to have had a feature that. That just does that. And, uh, so having, you know, little features like that become interoperable, they're small things, but, but it's, uh, it's really nice to see. Um, and then, you know, there's this sort of methods for, for APIs and so on.

Um, uh, request video frame callback was included for video. So that lets you schedule a function that runs the next video frame. So there's kind of all kinds of things, you know, from big features to small, pop over was included, CSS nesting, declarative shadow DOM, um, you know, a [00:05:00] whole bunch of stuff.

**Brian Rinaldi:** It's yeah, I'm, it, it seems like a lot of things are like those paper cut type issues that, you know, would help you smooth, smooth the whole experience because you, you don't have to deal with like kind of the, Oh, I lost my word.

See, five years apparently does not make you an expert, but yeah, so I think,

**Rachel Andrew:** yeah, you sort of look at, you look at the list of tests and you think, Oh, some of those look really like. Who's running into that? What's that? But, you know, everything is something that someone is going to trip up over because people do all sorts of things and the combinations of different features often, you know, cause problems.

And so, you know, I kind of think, you know, each test passing is saying that someone's not running into

**Brian Rinaldi:** nice. Um, and I just want to remind the audience, you can put your questions in the chat or in the Q and a module. So, like. Please ask questions, but I, I do have some other questions, but sticking on this interop topic, um, so we talked about last year, like, what are the focus [00:06:00] areas for this year?

And that, are there any, like, you're particularly interested in yourself?

**Rachel Andrew:** Yes, I think there's, there's some stuff that's pretty new to the platform. So, for instance, view transitions, um. Uh, and what's included for this year is for single page apps. So transitions in single page apps, um, are going to be included.

Uh, another thing that's included is anchor positioning. Uh, again, a fairly new thing, uh, is going to make popovers so much more useful because you're going to be able to position them. Uh, that's such a useful thing. And I think that's one of the things that helps people remove an awful lot of, you know, custom JavaScript or third party libraries that happen to use to, to get that kind of, um, thing in, in their apps.

So to have that as part of the platform is cool. Uh, Core Web Vitals, um, there's an inclusion of that. So getting. Getting those performance APIs working everywhere, uh, navigation APIs included. So yeah, again, it's, there's just stuff all over the platform. Um, and, and, you know, then there were areas of, there's [00:07:00] an area called compact, which just bundles up a sort of a bunch of little things that people fall over.

So, so yeah, I think it's looking like a really good year and. That's a whole bunch of cool stuff. You know, if that all happens, that's going to be part of the platform.

**Brian Rinaldi:** Amazing. And so do you, having been a part of this, this effort, um, do you find like there's difficulty in kind of getting all the browsers to agree?

It seems like if everybody got to 99 out of, you know, uh, percent last year, like. Pretty much everybody's on board with this.

**Rachel Andrew:** Yeah, I mean, I think, you know, the difficulties are really what you'd imagine if you're trying to get a bunch of companies, big companies together to all agree on a set of things to work on.

You know, browsers are just businesses. Um, and as we all know, businesses have got different priorities. They've got, it's very small teams actually work on, uh, implementation of, of platform features. So you've got constraints and, and the, the [00:08:00] code base of browsers is different, you know, so what might be easy for Chrome to implement might not be easy for Firefox to implement or vice versa.

So, so that's really the thing is a bunch of meetings to go through and make sure The things that are chosen are implementable by everybody. Um, and, and also that, you know, obviously people are having to have internal meetings and, and decide whether there is time and space and the people to, to do each of the things.

So I think, you know, it's a case of a bunch of businesses working together and saying, well, you know, which of these things can, can we all work together on, um, because, you know, we, we could pick anything. Um, but if, if people aren't able to do it for whatever reason, that's, that's not helpful. So, so yeah, it's, it's, it's a lot of alignment.

Um, I think sometimes people think there's more tension than, than really there is, you know, that there are things on the web platform that certain browsers disagree with and those things tend to be quite publicly. You know, noted, we have standards positions against [00:09:00] things or whatever. Um, but generally, you know, things that have gone through the standards process, um, that are on the standards track, it really is just a case of, you know, when people have got time to, to be working on them.

And so, so that's really the, the sort of discussions is what's the set of things that we can all work together on and we can actually land before the end of the year. Um,

**Brian Rinaldi:** that sounds great. I mean, I, so I guess the, the difficult part was, is dealt with before it even gets to, to, to this, uh, this point basically.

**Rachel Andrew:** Yeah. Yeah. And I mean, you know, we want to be able to, obviously you never know. And because as I say that, you know, there are individuals who are very much the expert on a certain part of the platform or, you know, and, and, and.

You never know if, if people are out, it's, it's small teams. Um, so it doesn't always work that everything gets done. I think last year was particularly successful. Um, but that, that's the game. Um, You know, and in previous years, sometimes things have landed a little bit after the end of the year, but they've [00:10:00] still happened.

So, so, yeah, it's, uh, it's just, it's just a really nice momentum and it's nice to have this idea that, yes, these things are going to happen this year.

**Brian Rinaldi:** Okay, so we do have, uh, some actual audience questions that I want to make sure I get to. So, uh, Alex, Alexander asks, what is your take on JSO or maybe it's J0 and JSSugar?

I don't know if you're aware of those. I actually am not, so.

**Rachel Andrew:** I'm not really, I'm afraid I'm not. I know I'm speaking at a JavaScript conference. Um, I'm very much a CSS I mean, as, as a developer, I was really a backend developer. Um, I can admit to having been a PHP developer for a very, very long time. That's what I kind of think of as my, my main language.

Um, Though I'm, I'm fairly out of date these days. So PHP isn't particularly useful at Google, as you can imagine. Um, but, but yeah, so I'm, I'm sorry. I don't, I don't have opinions on, on those because I don't, [00:11:00] I sort of vaguely know the names, but that's about it. I

**Brian Rinaldi:** don't even know the name, so I'm clearly out of the loop.

That's what happens when you leave Twitter permanently. You just lose track of things. Anthony asks, how often do you guys meet up to see how progress is going on tackling issues for each browser?

**Rachel Andrew:** Um, yeah, there is, there is a regular meetings of, of the sort of team. Um, but obviously the, everything is tracked by web platform tests.

So, you know, you can see exactly how we're getting on by looking at the dashboard. Uh, and that's the nice thing about this process. And I think. It's also one of the ways that, that we decide on, um, which things to include is they need to have a full test suite. So sometimes things aren't included because the test suite isn't good enough for us to be able to actually tell if they're interoperable or not.

Um, so [00:12:00] yeah, it's, it's pretty, you know, if, if the browsers are passing the tests, then the score goes up. So. You know, to some degree it's, it's, we can all look at that dashboard, but there are, you know, there are sort of regular meetings and things for, for the team, because also the planning for the next year, you know, the way it's been working is, is that actually begins partly through the year.

We start thinking about, you know, what's the next year of interop and which features will be included. So it's, it's an, at this point, it's an ongoing effort.

**Brian Rinaldi:** Great. Um, I, so Alex, Alexander has another question. Will people always keep using pointers for buttons, even though the specs clearly outline that cursor pointer is only for links?

I guess this is, it's not so much a question. Maybe he's asking for your opinion on this.

**Rachel Andrew:** I don't know. I guess. Yeah. Um, you know, it's, it's. It's funny. It's like, what, what are people's assumptions at this point? I don't know, you know, and so, and I think, you know, so I, [00:13:00] I, yeah, I'm not sure I have an opinion about that.

Um,

**Brian Rinaldi:** yeah,

**Rachel Andrew:** I mean, I'm not convinced that many people ever read a spec. And so, you know, typically we, you know, we, we learn we've, I think most of us have learned web development by looking at other web development. Um, so certainly it was how I learned, but the, you know, there wasn't as much material around, but, you know, we're all learning off each other.

People, whether you're learning off someone on YouTube or you're learning off books or just from looking at people's stuff and, and, and sort of seeing how you can do that. Um, so there's all sorts of things that become the way things are done that aren't specified anywhere or, or even specified differently, but that's just what people have decided to do.

Um,

**Brian Rinaldi:** yeah, I agree. In fact, you could argue in some ways, this is how specs evolve because people. Choose to do things and when it becomes an accepted standard, well, maybe we need to look back at the spec because we didn't consider this or, you know, is it a valid use case? [00:14:00] Um, or not, uh, you know, these aren't necessarily like stuck in time type things.

These are evolving things.

**Rachel Andrew:** Yeah. And I think, you know, particularly, you know, from, from earlier days of the web, things were, were far more loosely specified than they are, than they are now. Um, so all sorts of things just kind of evolved.

**Brian Rinaldi:** Yes. I remember those days.

So, okay, Dan, Dan asks, uh, excited to be joining from St. Helena. Can you comment on how you find governance of the CSS working group and how it helps or hinders your work and work of advancing the art and science of web development?

**Rachel Andrew:** Yeah. So, I mean, working groups, I think there's definitely, you have to be a certain type to enjoy spending your time in working groups.

I know that, um, you know, there's, there's a lot of debate, but I think it's, it's, [00:15:00] It's important, you know, particularly for CSS. I think, you know, anything we put into CSS is going to be there for a very long time. It's very hard for us to remove anything or to change anything. And, um, so the fact that we have this process and that people.

You know, it's quite hard to push things through quickly. Um, you know, you have an idea, you write, you know, a bit of a spec and say, you know, I want to do this. This is how I think it's going to work. And it's very unlikely that that is what is going to go through the group and come out the other side and look exactly the same, you know, whether it's a small thing or a big thing.

Um. Someone's going to, you know, bring up a problem. Someone is going to, you know, look at the code of their browser and say, actually, you know, I don't think that's really going to work for us. We're going to need to do this a different way. Someone's going to have some other research or they know that people are doing a certain thing or, um, and so that process, while it can seem quite painful, um, I think particularly from the outside, if you're looking and saying, why haven't we [00:16:00] got this feature yet?

Because there seems to be all this bike shedding going on. Um, generally I think does. does come out with, with better solutions because we end up with the knowledge of, of everybody. Um, and, and there are some amazingly knowledgeable people who have different takes on things. You know, I was a web developer.

I'm, I'm not a browser engineer. Um, I'm a web developer and then someone who writes about web development. And so I have a, a take on things, you know, how would I explain this to developers? It tends to be how I come up with things. You know, would this make sense if I had to stand on stage and tell people about it?

Because if not, then maybe it's not, you know, the interface isn't great. You know, the ergonomics aren't great. Somebody else is looking at browser code. And saying, this is going to have, this is going to cause a performance problem if we do this, this way, or, and so I think having all of these takes, um, ends up with something which is, which, you know, typically is better than it would be if, you know, just as a chrome sat down and said, this is [00:17:00] what we're going to do, or, you know, or what, you know, one group or another.

So, yeah, I think, Can be frustrating. You know, you have to wait for your issue to come up in a meeting and there's lots of issues and there's a backlog and then it gets debated and it, you know, you have to come back later with some changes. But I think generally that that makes things better. Um, and I have to say that I have learned.

So much by being involved in those processes. Um, you know, as someone who either say, isn't the browser engineer, it's, it's an incredible learning experience to be involved with, with the CSS working group.

**Brian Rinaldi:** You know, and I think, I think those of us who were around in the days when like. Basically, they couldn't get agreement on standards and things like that.

You know, the, I remember even, even the early days when how long did it take to jump HTML versions? It was like a decade. We took, there was a point when there was like a decade span between HTML versions, um, you know, [00:18:00] because we couldn't get agreement between the competitors, I think. Um, and you'd had so many interoperability issues, I think.

It, you can appreciate like that this may be not the fastest process, but it's better than the alternative. Right.

**Rachel Andrew:** Yeah. And I think things were just not well specced. I mean, I, I say I edit multicon layout and when I, that was one of the very first CSS three specs. So one of the first things that kind of got split out when all the big sort of split up of, of specifications happened and it became modularized and it really was just a set of examples.

So it was kind of like saying. You should split this content into columns, but it didn't say how, or, you know, there wasn't really any specification text sort of clearly defining how that should happen and what should happen, um, specifically around say items that spanned and, and things like that. And so I think we've got a lot more rigorous over the years, you know, the, the working group of actually making sure that [00:19:00] every little thing is specified because it's the bits that aren't specified is where you get the differences.

Because it's left to each engineers to figure out how to do it. So typically now, you know, engineers will come back and say, um, Oh, I'm, I'm implementing this and I don't know what you expect me to do here. You know, it's not in the spec. And so then the spec gets updated to actually include a decision for that thing.

Um, so yeah, so the, the sort of the more clear and specific that the specifications are the better, because then we don't get these differences between browsers.

**Brian Rinaldi:** So Alex asks, um, and this is kind of related to what we've been talking about. I think just getting a slightly different angle at it. Uh, since there are so many browsers on the market, is it hard to agree on future standards for all browsers and what areas get prioritized first?

So, I know you were talking about, like, the, how that debate goes on in the CSS spec process. Um, is it like. Is it a lot of just [00:20:00] discussion of how this gets implemented, or are there a lot of disagreements? I mean, what, what can you describe how that process, uh, works?

**Rachel Andrew:** It's mostly just discuss, I mean, you know, there are people with very strong opinions, um, in general, you know, the thing I'm particularly in CSS is, is, is, I can't really speak for the entire platform because I'm not involved in other areas of standards, but, um, certainly in, in CSS, those, you know, those people that, that are, you know, have, have these, you know, disagreements with, as it were, you know, people who are sort of interested in doing things a different way, everybody really cares about the web, you know, it's, um.

You know, you don't come across people who are there for some nefarious purpose, other than that they really care about the web and they want it to be good. We have different ideas sometimes about what good looks like. Um, and, uh, obviously, and, um, and sometimes, you know, we work for browsers that have different priorities.

So sometimes we can't work on a thing we might actually [00:21:00] personally want to work on or whatever. Um, you know. It's, it's a group of people who really, really care about the web and about getting it right, you know, and about things not coming back and just thinking, oh yeah, we messed up there, you know, we don't want to do that.

And so, and so that, that's, that's the cool thing about this. And yeah, obviously there's a lot of debate and there's a lot of opinions. Um, but, but generally people do care very much about, about the platform.

**Brian Rinaldi:** Yeah, I, I, I mean, personally, I appreciate the level of caution in this, because as you said, you can't, it's not like the kind of thing where you're like, oh, you release, you implement this back and you're like, whoops, let's change it back.

When all of a sudden it's like, you know, being used in thousands of sites or, you know, millions of sites across the web. It's like, oh, I can't, I mean, now, now we've got to live with that mistake basically forever.

**Rachel Andrew:** Yeah, exactly. Yeah.

**Brian Rinaldi:** So, uh, Zaid asks, this is completely changing topic [00:22:00] here. Zaid asks, what tips do you have for becoming a DevRel or an evangelist in, it says in traditional enterprise environment, but like, I guess, do you have tips since you are working in developer relations?

Do you have tips for somebody who wants to go that direction?

**Rachel Andrew:** Yeah. I mean, I think, I think, you know, building your profile and actually, I mean, I, I was, I mean, I was, I was freelance until I started at Google, um, just over three years ago. Um, so I was kind of like an unofficial dev rel for bits of CSS that I cared about.

So people know about me for talking about CSS grid. Now I just took it upon myself to start going on about CSS grid because I wanted the specs to sort of hang around. Um, and I think that that's. You know, you, you kind of, most people going to DevRel have got some kind of existing profile, you know, they've got talks, they've got writing or, you know, it didn't have to be all talks, there are plenty of DevRels who mainly write and, you know, mainly, you know, mainly do other kinds of outreach, but I think it does help if there's stuff of yours out there that you [00:23:00] can point to.

Um, and it doesn't need to be big conferences or, you know, it can be, you know, meetups you've recorded or online things, um, doing video tutorials, you know, there's a whole load of ways that people do that. Um, but I think that's probably the main thing is just making sure you've got a bit of a profile. Uh, and also practicing doing that because if, if you're doing dev rel, you.

I'm going to have to go and talk to people about things, um, you know, whether it's a big crowd or whether it's in small groups. So I think practicing that for the things that you care about and, uh, and figuring out what sort of stuff you want to be doing as a dev rel as well, you know, where, what things are you good at?

What do you enjoy doing? Um, you know, I don't particularly enjoy doing things like video tutorials and video shorts and things. It's just not really my thing. So, but, you know, there's people who love that and are really good at it, you know, so, so I think, you know, figuring out those things is probably the thing and building at that profile.

**Brian Rinaldi:** I think that that's great advice. Um, [00:24:00] you know, I'd, I'd say I've been in 15 years about being DevRel, um. And, and, you know, one of the things I'd add, I think you're, you're right. Find the things you're good at because now that you can't do everything, um, is, is definitely great advice. Um, and I think also you have to be, you have to recognize what the job is.

I think some people think, Oh, if I'm a dev rel, I'm just coding, like having fun coding cool stuff all day. And I try and warn people, like it's actually probably, I'd say in my experience, about 30 percent coding. At best, um, you know, it's not really like all day sitting there in front of your laptop building cool projects.

A lot of it's not a lot of it's speaking to people having, you know, meeting with customers, et cetera. Like, it's, it's, you know, different different types of activities. Um, okay, so we, I, there's a bunch more questions, but I do want to [00:25:00] actually switch topics a little bit here because I know you're involved with the Baseline project and I want to make sure people even know what the Baseline project is.

Um, it's about, so like, can you tell us a little bit more about that?

**Rachel Andrew:** Yeah, sure. So I think, you know, we've both been web developers for a very long time. And I think that a common pain point through my entire career, like way back at Netscape four days is that. You know, you don't know when things are going to actually be available for you to use.

You know, there's a cool feature that you see in one browser. Then you realize it doesn't work in the other browser and that's kind of got harder and harder as time's gone on. I think, you know, when we had browsers that stuck around for a long time, so say IE8 or something, you know, we could kind of say, well, if it doesn't work in IE8, I can't use it because.

You know, we had to wait for that browser to move on, but with evergreen browsers, you know, uh, Chrome and Firefox release every month. Uh, Safari is releasing quite regularly these days. It's actually very hard to know what's [00:26:00] available for you to use. You hear about these cool features. Then you discover that it actually isn't available in a browser.

So baseline was kind of an idea to try and solve this problem once and for all to make it easy to know which features can I actually use. Kind of as a group, rather than having to look individually at each feature. So the heart of the project is a data set, which is owned by a W3C community group, and it maps the entire web platform as a set of features and figures out whether they're ready to use.

So it does this feature, you know, you, can you use it? There's no big interoperability gaps. Now it's the first time I've had a large scale mapping like this. Um, so although we've got things like, can I use, which we've done a bit of that, you know, and, and MDN where you can go and see individual. Properties and methods and so on.

Um, we've not really had something that's mapped everything. Uh, so if you go to MDN and also web. dev, you'll see sort of indicators on pages about features saying this is part of [00:27:00] baseline, which means roughly that it is, you know, interoperable, um, across our core browser set and. And we have two lines. We have baseline newly available, which basically is interoperability.

Um, and, and then we have widely available, which is 30 months after that point, which is the point that you can probably pretty much safely use that without worrying about compatibility at that point.

**Brian Rinaldi:** So how this is basically you, if you go to web. dev or MDN, that's how you would find out if, if it's. Beats this baseline standard is checking the feature that you want to use. There's not like a one of the things that can I use, I mean, it was like, Oh, you just type it in and would just bring up the chart is slightly different.

Right?

**Rachel Andrew:** Well, so now we've got the dataset and yeah, we are exposing it on. Um, on these sites, we also have, um, webstatus. dev, which is a dashboard where you can see which things are becoming baseline. But the real [00:28:00] cool thing about having this dataset is that we can then start to use the data. Um, and we're already starting to see this happen.

So, um, there's a company called RunVision who are, uh, uh, you know, real user data, um, solution. They've incorporated baseline into their tools. So you can take your real user data, you know, the people who are actually visiting your website, and you can find out. Which sort of line of baseline they support, or how many of your users wouldn't support things that are in, in baseline of that line.

Um, so you could take a group of all the features that are in baseline 2023, for example, which is everything that became available in 2023 and back, and you could see that, Oh, well actually only. 7 percent of my users, um, you know, wouldn't, wouldn't get those features. So this is super useful. So we can now say, okay, I now know how much of the platform my users of my site, um, support, and then we can, hopefully, you know, now we've got this data.

The [00:29:00] next sort of hope is that we can roll that out across the tool chain. So your IDE should tell you, you know, if you've said I'm going to use baseline 2023, um, as you're developing, if you try and use a feature that doesn't fit. It should let you know that, um, we should get, you know, things like, um, you know, linters and things that you run as part of your CI pipeline, um, been able to say, Hey, you know, you've used a feature which maybe doesn't have great browser support for you.

Um, so I think that's really the exciting part of this now. I mean, yes, we can use it for. Showing status. And that's, that's a really good use case. If you're writing about a feature, we've got like a little widget you can put on your site if you're writing about a feature. Um, but I think the really exciting stuff is now we've got this grouping and it's getting updated as new features come out, we can then start to roll that into tooling.

And that's kind of the next phase of this, um, actually making it so you can develop for the web without kind of constantly checking MDN or what have you. For [00:30:00] support,

**Brian Rinaldi:** I recall that, like, even back in the can I use didn't have a data set, but it was basically. The dogs are going crazy here. Of course, it was just a big 5 repo.

Right so, this, this, you actually build something more interactive, maybe even extension for your or things like that.

**Rachel Andrew:** Right? Yeah, I mean, it, it, it does, it is actually backed by a big GitHub repo, which I mean, which you can go and have a look at, but then that is then backed behind that are the, um, the keys that map to the browser compact data, which shows an MDN, so like that's our best kind of, uh, representation of.

The platform in terms of individual features lay right down to, you know, a CSS property or a JavaScript method. And what we've done with this feature grouping work is bring those things together to say, well, actually all of these different bits make one feature. You know, it's not a whole thing unless it's [00:31:00] got all these different bits.

Um, and, uh, that hasn't existed really before. Um, because, you know, an entire spec isn't a feature. You know, there's lots of stuff in, in CSS that's just never been implemented and nobody even knows about, but it's part of specific specifications. So it's been, it's been quite a process to figure that out.

But now we have, um, I think there's all sorts of exciting things that could come from that. Um, and I, I do feel it's the, the sort of best chance we have of, of. Um, and it's also highlighting things like, you know, how much faster things are becoming interoperable now, I, you mentioned waiting ages between HTML versions, I mean, there was 10 years between versions of internet explorer at one point, you know, after IE6, um, you know, we wasted very, and like the platform just stopped, um, and, and, uh, but it, even in the last, you know, sort of four or five years.

We're [00:32:00] seeing, you know, really big features become available across browsers pretty quickly, you know, with, within a few months. Um, and that's, I think this, this data helps to highlight that sort of thing as well, you know, the actual improvements to the platform, which, which is pretty cool.

**Brian Rinaldi:** Yeah. Yeah. That's, that's, that is.

Super useful. I mean, I'm not somebody who went through those days when things move slowly. I mean, sites like, can I use were helpful, but they, they were updated only had to be really updated periodically. And now it's like, things are moving much, much faster. Um, so yeah, absolutely. I want to get back to the audience questions a little bit here.

Um, so Charles asked, uh, what's it, what's a CSS spec or proposal you believe to be underrated that isn't getting the attention it deserves?

**Rachel Andrew:** Um, I mean, you see, I would say multi column layout because I think people just don't, don't think about it. And part of that is because of a very specific problem with it in that, um, if you have too much content for your [00:33:00] columns, you either end up scrolling, scrolling up and down, which is terrible, or they end, or you set a height on it and they go off in the inline direction.

We are intending to fix that. Um, I've got a level two of the spec. In fact, this morning I was, I was writing some spec text for that. I think, but multi col is quite an interest. It's the only thing we have that, that behaves like that, that will just let you. Split a bunch of text up into columns. Um, but I think the thing that I really get excited about and nobody ever talks about really is, is CSS for print.

Um, there's a whole bunch of specifications, which are for. Printed material as in printing books and things, um, which browsers don't implement. Um, although they have started implementing some of those features. Uh, but there are other user agents that aren't browsers, which are designed just for doing print with, with CSS.

Um, it's pretty fun to design a book using CSS and then actually print it. And, and be able to do all the layout and things. Um, and I, I think that's, that's definitely saying that people don't often realize exists and is, [00:34:00] is a very cool part of the platform.

**Brian Rinaldi:** Yeah. Yeah. I've seen some of those, those tools for people like not even self publishing, but even some publishers, when I wrote for some publishers in the past, they actually used, um, CSS and HTML to do the layout.

Um, so yeah. Absolutely. Something exists. Uh, Henri asks, uh, can we expect anchor positioning to reach baseline soon ish or just by the end of the year?

**Rachel Andrew:** Yeah, it's in interop. So that, um, means that, you know, the hope is that, yeah, it should become interoperable and therefore baseline newly available this year.

That's the hope. And I think that's, that's a pretty exciting one.

**Brian Rinaldi:** So, so what's like, is there a relationship between Interop like directly in the baseline project, or is it just kind of like indirectly they would go through Interop and then that feature will likely become part of baseline?

**Rachel Andrew:** Yeah. I mean, if, if, if all those tests are passing, then yes, that we would, that, that [00:35:00] is probably going to mean that that feature is, is in baseline.

So, you know, a lot of the things that became baseline in 2024 were part of Interop. Um. So, yeah, it's, it's probably our best read on what is coming to baseline is the things that are in interop. Um, you know, it kind of gives us a bit of a heads up as to what's, what's likely to land.

**Brian Rinaldi:** So, um, changing topics here again, uh, Alexander asks, what makes a good technical writer and how do you enhance your tech writing skills?

**Rachel Andrew:** Um, I think a curiosity, um, I think, you know, you can learn how to write, um, actually, you know, Google has publicly available tech writing courses, which, which I think are very good. And, and, and often people recommend them. Um, but I think, you know, in terms of technical writing, a lot of it is about being quite curious and about being able to ask questions, um, because, you know, you'll often have to write about something that you don't really know about.

You know, you have to find that out and [00:36:00] you have to find that out probably from an engineer who's worked on it. Um, so kind of being able to ask questions and, and not being afraid of doing that is, is pretty important. Um, I was, you know, having, you know, good writing skills, you know, um, knowing how to follow a style guide is incredibly useful.

A lot of people don't get a lot of practice at that and that's, that's. You know, everyone's got different style guides they want to comply with. So it's usually getting used to kind of, to write an edit to a style guide, editing other people's stuff and having your stuff edited. I think, you know, I, I spot a lot of writing problems when I'm editing someone else's stuff, and then I realized that I also do them myself.

Um, and then, but, you know, and, and having your stuff edited, I, you know, I'd learned so much from my team, you know, that they, you know, a lot of them are better copy editors than I am, for example, you know, and we'll pick up on. On issues. And obviously I'm a Brit and we write in American English. So there are things that I, I miss, you know, and, um, so I think actually having your [00:37:00] stuff edited by someone else is incredibly helpful.

If you can get into that position, you know, if you write maybe for a publication and they will do an edit, you know, work with our editor and see what they're changing. Cause that's, you learn a lot by having someone redline all over your stuff. Um, but yeah, I think it was say it's, it's part. Part writing and part just, you know, learning how to write and part having this kind of curiosity at how things work and, and how to explain them.

**Brian Rinaldi:** Yeah, I, I agree with everything you said there. And I think, you know, one of the things is even the best writers in my experience, like can, can benefit from editing, like just not. Learning not to take those edits personally really is a, is a big deal. Yes. Right. Yeah.

**Rachel Andrew:** And I think, you know, and it's hard because you write something and you think, yeah, I'm really, you know, you're really pleased with it.

And then someone comes along and like messes around with it and you're like, Oh, um, and I think the more that [00:38:00] happens to you, the more used to it you get. Um, and, and yeah, so, but it's, yeah, it's. Something that I think is useful for everyone to learn how to do because writing is just so important, you know, it might just be an email while you're explaining a feature that you've been working on, um, but that's writing, that's technical writing.

Um, so it's, it's a useful thing to build.

**Brian Rinaldi:** Yeah, absolutely. I think I, you know, and it's not necessarily something I recommend, but like writing a book was the one where I had to really get over myself in terms of because the editing process and that was so often so difficult that I, I'm like, okay, you know, you had to decide what You know, what things were worth fighting about to keep in, in terms of your, your own writing style versus what things.

Okay. You know what I can learn from that. I did learn a lot of things from that. Um, you know, I think, yeah, like, not making a lot of assumptions about about what people's technical [00:39:00] knowledge is who are reading this. Um, and, you know, and we're, we're best to, like, add, like, add any explanation before I show code and things like that.

So, um, lots of. Yeah. Difficult lessons. I learned over, over the years. So,

**Rachel Andrew:** yeah, yes, it's definitely a humbling experience to be edited and, uh, but, but always valuable. Um,

**Brian Rinaldi:** absolutely. So, okay, this question may feel free to defer if you'd rather not answer. Um, so, um, but I'm asking the audience question here was upvoted as well.

So, uh, is Apple holding things up? Uh, sometimes it seems like Safari is, is basically the laggard. I mean,

**Rachel Andrew:** you know, I'm not going to reply with a personal opinion, but I think that, um, depends on what you care about on the platform. When I'm talking to developers about, um, [00:40:00] any features, you know, on the platform, you know, people have got different things that they're really stuck on.

They're like, you know, why isn't this thing available across browser? Why isn't that thing available? And it can be quite, you know, it. It can be a feature from any browser. You know, I've had people come to me, you know, as someone who works at Chrome, asking why we haven't done a certain thing or why we're holding something up.

So I think the perception tends to be around very specific features that people are keen to have, because there's obviously a lot of work that Apple have done, which, you know, they have been. The people pushing that forward, you know, particularly in CSS and there are other things that either they haven't done or they say they don't want to do.

As I say, browsers often have standard positions against things that they're not intending to do. Um, from writing about this stuff, uh, it's, it's actually quite even who is last to ship something because like, you know, I write sort of a news to the web platform. blog post where I just, you know, talk about the things that are landing in different browsers.

And, you know, sometimes it's us, who is the person who has held it up and [00:41:00] sometimes it's somebody else. So it's probably more even than you think. Um, I've, I've not done any data on this, but I think, you know, I think, yeah, there's, there's definitely frustrations with. We, you know, with things because of specific features that people want.

Um, you know, we do hear that.

**Brian Rinaldi:** Yeah, absolutely. I think, you know, like you said that each company has their own sets of priorities. Um, you know, so yeah, it's, it's, it's going to be different for every, depending on which, which you're talking about. I think a lot of times in, from my experience where Apple, Apple is more like the laggard sometimes on JavaScript stuff than they are on CSS stuff.

But I can't, you know,

**Rachel Andrew:** it does go back to how these things are standardized. You know, with CSS, we tend to very much work together because you can't really ship a CSS feature if people, other people don't want it because no one's going to use it. Um, I think there was some of the JavaScript APIs, depending on the sort of thing it is, [00:42:00] sometimes people are like, well, actually, you know, we can use this.

Um, and, and so I think that they're sort of standardized in different ways and. And so, you know, that tends not to happen so much like in my world, in the CSS world, because we we've already debated these things to the nth degree before they get into a browser, you know, most of the time.

**Brian Rinaldi:** Makes total sense.

Um, okay, let's see, we've got time for, I think for one more question. Um. So we've got a lot of questions, so I apologize to the audience that we are not going to get to all these questions. But, uh, but I'm going to let's see. I'm going to see if we can pick 1 last 1 here. Um, another 1 from Alexander, um, what type of content do you find the most important for learning blog post, podcast, uh, video, et cetera.

**Rachel Andrew:** For me, it tends to be written stuff. Um, I, um, have aphantasia, so I have no [00:43:00] visual memory. Um, so if I watch something, I will never remember what it was that I just saw. Although I do find videos sometimes useful to like learn my way around an interface. I'm very bad at learning any interfaces because I can't remember what it looked like last time I looked at it.

But I'm very, very Text based, you know, I tend to think of things in, in sort of rooms of text. That's, that's, that's how I sort of perceive everything. Um, so that's me personally. I've kind of learned to do things in a more visual way. And I understand that video is very important for people because I've seen that, you know, I've seen how important that is for other people.

And I think that's the thing is, you know, the more you can provide your content in different ways, the better, you know, if you can provide stuff as text and video, if you can get out and talk to people, um, because there are, you know, People who are all over, you know, sort of in terms of how they best learn.

Um, and so if you've got some content, you can do it in two or three ways, then brilliant, because you're going to reach more people with that content. [00:44:00]

**Brian Rinaldi:** Absolutely agree with you. I mean, yeah, I, I am focused on writing as well. Um, that's where I, how I. Prefer to learn, but I think I am aware that lots of other people had different learning styles and like, the more you, the more you can provide, especially if you're trying to reach a broad audience, like, if you can do, if you can repurpose content for video and for written, um, even if it's or audio, even if that's possible, then then go for it.

Right? I don't think there's a better it's what works for you.

**Rachel Andrew:** Yeah, yeah, that's it. But yeah, definitely reuse your stuff in lots of different ways. And you'll, you'll definitely reach, uh, reach more of an audience that way. So,

**Brian Rinaldi:** yeah, totally agree. So, um, well, we are unfortunately out of time, even though there's a long list of questions we still had to get to.

Um, but, uh, before we go, uh, just where can people kind of find you on the web, um, and maybe connect with you or like on social or anything, [00:45:00] um, after this.

**Rachel Andrew:** Yeah, so I'm on Blue Sky and it's probably my main place. So I'm Rachel Andrew. You can find me on Blue Sky fairly easily. Um, and my, my personal blog is, is rachelandrew.

co. uk. Um, but yeah, I'm, I'm Rachel Andrew in most sort of online places. Um, so you can, um, fairly easy, yeah, easy to search.

**Brian Rinaldi:** Excellent. So yeah, maybe they'll reach out to you on, on Blue Sky and be like asking their questions there, but, uh,

**Rachel Andrew:** Yeah, I'm very, very, very happy to, to, to answer some questions.

**Brian Rinaldi:** Great.

Well, this was such a great conversation. I really appreciate you taking the time to come out and chat with us. Um, I learned a lot. Hopefully people in the audience did as well.

**Rachel Andrew:** It's been great fun. I hope everyone enjoys the rest of the rest of the event. Thank you.
