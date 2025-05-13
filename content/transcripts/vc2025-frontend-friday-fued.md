---
_build:
  list: false
  render: never
---

**Bekah Hawrot Weigel:** [00:00:00] Now, so I wanna welcome our panel. From the front end Friday feud, our panelists are gonna be going head to head. They're gonna be debating the merits of assorted CSS concepts like Flexbox versus grid, various CSS frameworks and more. So they are gonna chat through these things. Feel free to put things in the chat as well.

Um, we can make sure that they're watching that. This is gonna be a really interactive and fun panel. Our panel features, um, we have our host, Kirk Shillingford, who is a full stack developer interested in functional programming. Then we have Nick Taylor, we met him earlier today, who's a developer advocate at Pomerium. Dan Ott, who we also met a developer and designer with Sprokets.

Meg Gutha, a Ruby on Rails developer at Penn Medicine who also [00:01:00] spoke earlier. And Jörn Bernhardt, who's been building web applications for over two decades. Thank you all so much for being here. Really looking forward to this.

**Kirk Shillingford:** Alright, well let's get started. Um, as, like I said, it's wonderful. Uh, my name is Kirk. I am going to be. Doing my very best to keep these four people just somewhat in line for the next hour as we dive into all things front end. Um, I wanted to make sure I started this off with saying that I think between these four folks here with like.

I don't know, over 50 years of web dev experience. I say that both to make them feel old, but also to share with you all how much wisdom they possess. Um, in sort of like an opposite of a Ron Swanson quote. They know more than me. Everybody here knows more than me when it comes to these [00:02:00] things. So my goal is to just gently steer the conversation.

We're gonna try and do this old school style, so high school debate. We're gonna have a bunch of topics lined up, but I'm gonna encourage folks in the chat if you have topics in mind. I'm gonna do my best sort of like check, and if there's something there and the panelists think it's interesting, we might dive into that as well.

But we have some topics lined up. We're gonna start with two panelists at first. Each one of them has about two minutes to kind of give their their opening statements. Then we'll do a quick 30 seconds for rebuttal on either side, and then we open it up to the general panel and we're gonna see how much, uh.

How does Nick say it? How much structured YOLO we can accomplish in the time, but I just wanna say welcome to everybody again. Thank you so much to our panelists for being here. Let's not waste any more time. Let's dive right in. First topic, CSS methodologies. I want to preface this by saying that when we were discussing this [00:03:00] panel.

So much time was devoted to figuring out how to define this problem. There was a pre-debate about the debate topic, so I'm sure this will be super easy for everyone to deal with. But first topic is we are gonna look at styles of CSS framework systems. We have Meg representing our class component style, our bootstrap style, our, Hey, there's a thing, there's a class for the thing, and you put the name and then you get all the features.

It's great. It works. We've been doing it forever. On the other side of things, we have year at his new school, new Age, hippy Dippity, ideas about these little small atomic functions like tailwind. Oh, just, just one thing at a time. I don't even know what that means. So are, we're gonna give him a chance to jump in.

Um, I'm gonna start with Meg. I have my own little timer here so I can see if they're yapping too much. I will let them know when they're yapping too much and we'll switch sides and it [00:04:00] should be a good time.

**Meg Gutshall:** I was born ready, Kirk.

**Kirk Shillingford:** I love that energy. Meg, we got two minutes. Go.

**Meg Gutshall:** Alright, so as Kirk already mentioned, component classes, they encapsulate, um, the declarations required style and element within the context of one component.

Everything is encapsulated. It separates concerns. You have your CSS in a style sheet, it's away from the HTML. 'cause having all that stuff in HTML, it gets messy. Code is confusing enough as it is. Well, why do you need that in there? Right? You can go in and easily tweak things using, um, like your. Variables and do it [00:05:00] globally.

There's less decision making responsibility when it comes to actually writing out the HTML and you have more consistency across your styles. Utility classes, they can lead to inconsistency 'cause you have to remember to add this to every single thing you're putting in. And you know, bootstrap, it's just.

It's just easy. It's just there. You have, but in class, okay, putting that in there and all this style comes with it and, you know, it handles, um, media queries just so, so nicely. You don't have to make all these different utility classes to handle 20

**Kirk Shillingford:** seconds left

**Meg Gutshall:** stuff. Uh, it's. It's just Bootstrap was my first love.

I'm never gonna give it up. I'm sorry. Ya, [00:06:00] you are never gonna take it away from me. That's, that's all, that's all there is to it.

**Kirk Shillingford:** And time, uh, Meg ending with the Never gonna give you up, never gonna let us down. Rick. Roll to just close that out.

**Meg Gutshall:** Does.

**Kirk Shillingford:** Um, that was a really nice opening salvo. Let's see if urine is ready to defend.

I got, she's sell, she's selling me on pure nostalgia. There's like, there's a warmth in my heart when I think about it. So let's see what you can do year your time starts now.

**Jörn Bernhardt:** Okay, so. Let's talk about tailwind and these atomic CSS classes. I learned the term atomic, by the way, today. I don't really like the vocabulary style.

I tend to, um, like the thing like you describe things, just say like, it looks like this, it does like this, something. I don't need to name some [00:07:00] component with an arbitrary name all the time, and I don't really need to do that because I know. What I need to do in order to get this component to look like, I want it to look, and why should I need this extra name of this component thing that works maybe well for this one side, but not for the other one.

So I tend to like just write the rules, what I, what I need in, um, the thing that I'm working on. I also think that once I lose one of these components, these classes, these bigger, larger classes, I just tend to forget them. If I use something like Bootstrap and with Tailwind and these, uh, built scripts, basically for, um, for these CSS classes, you don't really need to care about this anymore because it will just.

Not be there if you don't [00:08:00] need it. And it will just be added one, uh, once you do

**Kirk Shillingford:** 30 seconds.

**Jörn Bernhardt:** Um, yeah, so I, I think also it feels a little bit more like the react kind of way you put everything together where it belongs and, um, just think about it logically and not arbitrary. Like, okay, you have your style sheet somewhere.

Then you view somewhere and then your logic somewhere else. No, you put it all in its own little domain and you keep everything in this same thing kind of like this more, because I can delete stuff with one click, basically if I don't need it anymore.

**Kirk Shillingford:** Alright. Yeah, yeah. Mm-hmm. Um, interesting thoughts, interesting bounce backs.

Um, I personally feel like this is still pretty even for me. I represent a leader. I don't know anything [00:09:00] about this. The kids want my website to work and look good. I have a boss who's asking for way too much. They don't know what web development is. Just want to know what to do. Um, Meg, I am gonna give you a quick 32nd rebuttal and to let everybody know.

Nice. Gonna get 30 seconds. You gonna get 30 seconds again, and then the whole panel gets to weigh in. All right. And Meg. Tear 'em down.

**Meg Gutshall:** Yeah. Urine. Um, newsflash, not everybody uses react. Okay. So get with that. First off, um, second utility frameworks that hates CSS, let's just admit it. Alright. And they're like, oh, I don't wanna deal with this.

Let's just. Put all this into the HTML

10 seconds.

It's just, it's hard to look at an HTML file with all that [00:10:00] in there. Putting in components just makes things cleaner. It's the coding experience just so much better

**Kirk Shillingford:** and time. All right, same 30 seconds up on the clock. Some shots were fired there. Go. So

**Jörn Bernhardt:** I'm using the rules directly.

So that means I have to know a lot more about the CSS stuff that I'm, that I'm doing there. 'cause I need to know what, what to find. So instead of hating CSS, it's probably more about the other I. People just don't know how to do CSS and they just need some component that someone else wrote for them so they can just reuse it again.

So I, I really don't get that. And to be honest with the, if, if you're not using a component based thing, I think you're missing out a lot of stuff. So if you, if you started with some other [00:11:00] templating stuff.

**Kirk Shillingford:** Time. Oh, it's cool. I'm gonna call it right there. Uh, that was really funny. I like the part where you guys don't know how to stop.

Um, okay, so, uh, everybody said their opening statements, Meg jumped in, you chi in, um. The chat seems to be really liking the conflict portion of this. It seems to be a strong theme today. So we're gonna make this more chaotic and we're now gonna open it up to our two silent folks. To so far, uh, Dan and Nick, two people who famously have never had strong opinions about anything at all, either one of you can jump in.

**Nick Taylor:** I strongly disagree with that comment.

**Dan Ott:** I would also like to strongly disagree with Nick's strongly, strongly disagreed statement. So just so everybody knows where I stand. Exactly,

**Nick Taylor:** yeah. Now that, now that's all clear. Yeah.

**Kirk Shillingford:** All right. So let's [00:12:00] start with, uh, Nick, what is your, what's your take on the situation?

Where do you, maybe it's good to know, like where you were recently, have you changed your mind? What do you think is. Is the way that you probably default to now the most?

**Nick Taylor:** Yeah. Uh, I think component based is the way to go, but, and that, and that can be handled in many, and I don't mean bootstrap, uh, I just mean like that could be scope styles within a, like a single file component or you're using some other framework.

Um, but at the same time. You do want to have some global styles, like, like I, I worked in a. Code base where like all the links were getting set style wise, which made no sense to me. So like you had global styling, I, I changed it to global styling for some stuff that makes sense. Like headings and so on.

And then in [00:13:00] the component, if ever you did have to override that, you could, but like you, you're kind of breaking the design system if you're like. All of a sudden changing all the standard links, styling to something else. But there are reasons to have different looks for the style sometimes, but I think it's basically a mix.

You have a good foundation of base styles. 'cause if you're using something like Tailwind, they basically just delete all styling, uh, with the base stuff. So, you know, it's, uh. It's not 'cause I'm undecided. I think, I think the good mix there is you have some sensible defaults, uh, and then you, you go at the component based level for maximum reuse.

**Kirk Shillingford:** You know, Nick, everything you just said seems sort of like thoughtful and practical and reasonable and I don't know if I'm here for that. So let's jump to Dan Ready and let's see what Dan has to say. I would

**Dan Ott:** like to tag hard in here everything that Nick [00:14:00] said. Um, yeah, no. Um, I have become a huge fan of Tailwind and I would like to say two things.

First, I think that Meg, if we were gonna base this before, any of us, you know, before the rabble took over. Um, I think that Meg won this debate personally. I, I feel like Meg did a really good job year, was a, you know, you know, you know, you, you tried your best, you know what I mean? Um, however, I do, I

**Meg Gutshall:** liked you, Dan.

**Dan Ott:** So, uh, yeah, I mean, like, my thing with Tailwind fir, first of all, first of all, uh, I love Tailwind and I also love CSS and the people who built Tailwind know more about CSS than I will ever know in, ever in my life. If you look at the styles that Tailwind generates, you know, you, you think when, when you think of utility classes like that, you think like, oh, like M dash 10 is, you know, sets a margin or whatever.

And like, yes, that that's true. But, um. Uh, they have so many classes that do so many different things and they all work together. Right. And that's like [00:15:00] one of the coolest parts. Um, I do think component, like building things with components in mind is the right way to go. I think probably we can all agree with that.

Like not component classes, right? But component, the idea of a component is a self-contained thing, right? And, um, putting your, uh. Using tailwind classes like that and putting them in the components themselves. Lets them be, uh, lets them be transportable. Lets them, you, you can drop it into another site.

That tailwind, wait, this, this part's getting timed. Yes. We have to go to other, what? We can't chat about this forever. Forever. Whatever. Tailwind is the best. I'm awesome.

**Kirk Shillingford:** Let's.[00:16:00] [00:17:00]

**Dan Ott:** Hey, um, Nick was, uh, Nick was just saying how much that he agreed with everything that I said, so,

**Kirk Shillingford:** yeah, that, that's definitely what happened. So if you're wondering what just happened, um, I personally think Dan talked so much trash that the stream broke up. Um, but we're back. Um, and let's see, uh, let's do like a quick, so I think like we were actually in the middle of like a.

Wonderful discussion between industry professionals. So I'm gonna give Nick a chance to kind of reiterate what he said because it was, it was very good.

**Nick Taylor:** I'm happy

**Kirk Shillingford:** about him.

**Nick Taylor:** Yeah. So like I said, I, I, I definitely think it's sensible to have some base style default for things and just to. Because like Dan said, he's a big fan of Tailwind.

I am too, and I'm a big fan of [00:18:00] CSS. What I meant is in a component, you can definitely go scope styles if, if your framework supports that, but if building out the component styling, like definitely utility classes in there, um, maybe minimal in line, but I don't think you need that. It's like tail tailwind does much like Dan was saying, like they really know CSS like, and it always boggles my mind when people.

Say they hate Tailwind Cs and, but they're like Cs s lovers. 'cause like, anyways, uh,

**Dan Ott:** they're both good. Yeah. I mean, if you, if you're into CS s sometime, you should just check out the stuff that they're doing. It's, it's really incredible, uh, especially the new version with, um, the, they're, they're leaning really hard on CSS variables and things like that.

It's really cool. Yeah. E even if you're not planning on using Tailwind, I think you would learn a lot just like looking at the stuff they're doing.

**Meg Gutshall:** Mm-hmm. I wanted to add, um,

**Dan Ott:** oh, here we go.

**Meg Gutshall:** Yeah, I wanted to add, uh, Nick actually [00:19:00] showed me years back this Daisy UI and Oh, yeah, yeah. It, it's component based using tailwind utility classes.

Um, so it's. I, when I saw it, I'm like, oh my gosh. It's like tailwind of Bootstrap had a baby. Uh, that's like what the first thing that came to me. And so I think, I think that's pretty cool. I used it in one project before and it's, it's really neat 'cause it does have components and then you can use tailwind utility classes on top of those.

To make little tweaks here and there, wherever you need to. Um, so just mixing and matching is a really interesting idea as well.

**Kirk Shillingford:** Um, thanks Meg. And I think on that lovely note, we can probably wrap up this topic for a little bit. [00:20:00] Um. Someone in the chat wrote boot wind and someone else said, tails, strap.

And those are both terrible ideas and we're not gonna do either of that. Um, but I think probably a, a general place to end on here, sort of extending what Dan said, which is you should check out things even if you're probably not gonna use them, even if you probably don't like it or if it's not your style.

Um, there's a lot of things I've learned from languages, systems, and frameworks that I don't even necessarily like. Sometimes just like seeing another way of thinking of things can, can make things make more sense for you. Um, all right. Enough, nice stuff. We're going back to the next topic, uh, this time and my panels will let me know if I've messed this up.

I believe we have Meg up again, but this time against Dan, our topic, learning. The fundamentals a word that people say a lot, and I don't know what it means. Um, Meg is gonna be on the side of. Tradition [00:21:00] family values, CSS families Of course. Um, and hey, you know, like you gotta learn the basics. You gotta start from the beginning.

Uh, Dan is gonna come in from the perspective of, I don't know the future. I don't, I don't know what he is gonna talk about. I don't know what he is gonna say. It's probably gonna be cool. Uh. But let's get started and I think this time to make sure Meg gets a little reprieve, we are gonna start with Dan.

So same rules as before. Starting with me, starting with you. You're gonna get two minutes on the clock

**Meg Gutshall:** before beauty.

**Kirk Shillingford:** Alright.

**Dan Ott:** It was the clock. All of my arguments are based on being second, but that's fine. I'm fine. I'm adaptable.

**Meg Gutshall:** I I can go first if you want.

**Kirk Shillingford:** No, I think Dan should go first. I think, I think this is better.

We gotta keep 'em on our toes. All right, Dan, you've got two minutes to convince us why fundamentals are not the thing we need right now. [00:22:00] Go for it.

**Dan Ott:** Okay. I think we've all had enough of fundamentalism. Uh, I would like to see it get outta my face. Um. My biggest issue with the idea of learning the fundamentals and listen, I, uh, my opponent is going to say that they're very important and anybody who considers themselves, you know, well-versed in something, needs to know the fundamentals.

And while I, while I agree with that, there are many steps to get to the well-versed point, right? And the idea that you need to learn a whole bunch of. You know, let's be honest, really boring stuff. Uh, you know, before you can do anything fun is a form of gatekeeping and I am not here for it. I would like the gates to be open to everybody.

And, um, on a little bit, slightly more serious note, I think that if you are interested in doing a thing, just dive in and do it. You know what I mean? Go, go for it. Learn like you'll pick the rest of the stuff up later. I think learning the fundamentals is [00:23:00] probably a good idea, uh, eventually. But this isn't sports where you need to like have perfect form when you start, or you'll be ruined forever, right?

This is, this is coding where you can always learn. I'm, I still learn, if you saw my talk earlier, you saw that I've been doing this for a very long time and I learn things pretty much every day and I'm still learning. And so there's never like a point where you can, where you, where, where you're like, are going to get to a point and then you can't learn anything more, right?

And so. I think my basic statement is, uh, gatekeeping is bad. Fun is fun. Fundamentalism is bad. And, uh, doing exciting and fun things because it's fun and exciting is good. Fun is good, and I yield my time. I.

**Kirk Shillingford:** I yield my time. Look at you.

**Dan Ott:** Um, taking my, my entire goal for this whole thing, taking my job away from me.

My entire goal for this whole thing was to get to a point where I could say, I yield my time. There you go.

**Kirk Shillingford:** [00:24:00] Um, let me reset this handy dandy timer. Strong opener from Dan. Making some, I think, uh, really good points there. Dan says, dive right in. I think Dan also said. Front end development is boring. I dunno what that was about, but he definitely said that. And we're gonna jump straight to Meg and not give him a chance to defend himself.

Meg, you've got two minutes. Go.

**Meg Gutshall:** What? What am I eating? What am I eating? It's called Dev soup and Mika told me about that earlier today. Maybe you guys know about that. That's all you're gonna get from these modern solutions Div soup. They put divs everywhere. Diviv in here. Div in here. And we're gonna add a little class here. You know what that is?

That's not good. Semantic code. That's why you need to learn the basics of HTML and CSS. You, you wanna put divs all through your code? That's [00:25:00] okay. It'll, it'll get the job done. But a lot of these modern frameworks don't build accessibility into their frameworks. That's like an afterthought. They, they'll get to it and they'll do their best.

Accessibility's, very important. We saw so many talks about that earlier today. Uh, also. A lot of times you need to build your own custom solutions for custom problems. How are you gonna do that on a modern solution? Just spinning up some sort of framework. You know, if you know these basics, you'll be able to dig deeper in there or write code on top of whatever you're using to get customized code second solutions.

There's a lot of HTML [00:26:00] elements that people don't know about because they're just so used to using the typical stuff. But if you dig deeper, like just last year I did a deep study and learned a lot of stuff. Um, so you don't have to learn it before starting, but it's something important to learn.

**Kirk Shillingford:** Exactly.

Yield my time. Two minutes. Wow. Wow. There was no extra time to yield. Don't try to steal my line. What is the smallest, smallest unit of time that can be yielded? A microsecond? Who knows? Um, no, those are both great. Uh, all right, so we're gonna do our quick. I'm all right. 30. You have 30 seconds. I'm holding you guys.

This one 30 seconds rebuttal, Dan, then back to Meg. Then I feel like urine is bursting at the seam with thoughts and he's just waiting for his time. So let's not keep [00:27:00] him waiting too long. Dan,

**Dan Ott:** go. Okay. First of all, I would like to protest the, uh, treatment from the moderators in this panel. I feel like I'm being unfairly, uh, you know, like.

I don't know. I don't know what the word is, but like, it's bad. Second of all, soup is delicious. Okay, so I eat soup all the time. It's always good. There's nothing wrong with soup. Um, third of all, I would say that the components, if you find, like, if you're trying to get through something big and fast, you can find.

Components that solve a lot of the accessibility issues that are around, uh, right away. You know, Nick put in a comment about like, diviv roll button, area label, but like, that's not the kind of thing that people do, you know, off the bat. I'm, I'm just saying use some components. Use Bootstrap if you want.

That's, that's good. Bootstrap is fine. You know, you don't need to know everything that Bootstrap is doing to use Bootstrap. Okay. I yield my time up and done.

**Kirk Shillingford:** Maggie. Oh man. I got distracted by chat and I didn't see the I did

**Dan Ott:** too. I went way over. Sorry. [00:28:00]

**Kirk Shillingford:** Oh my gosh. I will afford me. I thought it was me for a second.

Yeah, my the same amount of time. We'll keep it fair. Meg, you have the same extra time that Dan stole from everyone else. I didn't remind him about go.

**Meg Gutshall:** Okay. Uh, so. Let me just tell you about some cool stuff that you can use with HTML. Did, you know, with ordered lists, you can use reverse. Type that in and it'll reverse the numbering order. You can also add in, start until it went over. Start at type and say either numerals, letters, Roman numerals, and there's, there's a ton of other stuff for a link you can put [00:29:00] down download after the h.

H. So if you are linking to A PDF when they click on it, it just downloads it right off the bat. Alright,

**Kirk Shillingford:** that is time. Um, but a suitcase debate in the chat. I feel like some people have kind of deviated away from origin topic, if that's okay. Um, and I'm gonna open it up to the rest of the panel. I think this time we'll start with Yen, who has just been.

Typing these questions in the panelist chat, like, but what about this? So

**Nick Taylor:** it's all trash talk in the panel. All trash talk in the panel.

Uh, you're on mute, you're.

**Jörn Bernhardt:** Yeah, I, I was, I was just, uh, thinking when, when, uh, Meg was, uh, talking about the diff soup, she never heard about fragments in, in these components, uh, frameworks, basically. So [00:30:00] where you can get rid of these things, you can still do all the, all the fun fundamentals in there if you want to, but you don't have to.

You can just take whatever you. Whatever you like and you have so many options, so many different options that you can choose from. You can ask chat, g PT for this or for that. No. There are lots of things that you can, that you can use, so I'm just thinking maybe if, if you know the fundamentals.

**Kirk Shillingford:** Yeah. I'm gonna end it.

On Yen says, don't learn any fundamentals. Only Hyper Bowl. No nuance Nick. Go for it.

**Nick Taylor:** Yeah. Uh, I hate that I'm the, I'm, I hate that I'm the only one that isn't able to be fake angry here, but, uh, but I, I. And, and this is sounds like what you said at the beginning, that I have no strong opinions, but it's not true.

It's [00:31:00] like I, I don't think it matters if you learn fundamentals first or if you just jump into a framework, I think you should just build, and you're gonna l like say you start off with the framework, at some point you're gonna be like. I have no idea how the CSS feature works, or I don't know how this thing in the framework works.

And then you're gonna have to dig into that. So you're gonna have to go and figure out some fundamentals. Or if you come from the fundamentals side, you might know all the fundamentals, but you have no idea how the framework works. So you go through a few things, but you're gonna have to dig in there too.

So it's like, you know. I just think really, I think the most important thing, uh, in all seriousness is just build something. 'cause there's a lot of people that get like dev paralysis or like, you know, uh, people always talking about, you know, like, oh, I should work on this project or whatever. And yeah, I really wish I could be fake angry, but, um, I just.

I just [00:32:00] want people to build stuff. 'cause like you're just gonna learn so much from doing that and you're gonna pick up the other stuff along the way. Like I started learning fundamentals but only 'cause I'm old. So like I used to do like CSS and JavaScript and like literal pirated Windows 2000 Pro Notepad do exe.

But like if I was starting today, I would probably have jumped into React initially, probably, you know? So I don't know, just learn and. I really need to work on my fake angry. I'm, I'm sorry. I, I have, I've failed you all in the YouTube chat.

**Kirk Shillingford:** You know, I really wanted to gavel, but here we are. Um, I feel like Nick said maybe the real CSS fundamentals is the framework we picked up along the way.

**Meg Gutshall:** Hmm, exactly,

**Kirk Shillingford:** exactly.

**Meg Gutshall:** Can we fire Kirk?

**Kirk Shillingford:** No. I can fire you. It doesn't work the other way around. Um, nope, as always. Um, I [00:33:00] think we've sort of like come to a nice place here. Uh, spoiler alert everyone. All these things are, it depends, but no, uh, it's worth it wherever you, I think starting wherever you'd like is probably more important than what you start with.

Um, but just like find a way to not stay in that same place forever. Um, because we met those people. They're on Reddit. And we wanna be better than that. Um, all right. So we have been asking, I know Meg said in the chat, we'll remind folks, uh, if there's any topics you want us to jump into, you can throw 'em in the chat and if you, for time, we're gonna pick 'em up.

Um, I've seen multiple people, um, ask for pixels versus em units versus REM units. Uh. Which is an interesting one. I'm wondering if anybody here has some strong opinions about those. Oh, I do. I I know you do. I was, I was giving the others a chance. I know [00:34:00] you do. Um, so maybe let's do like a quick, uh, kind of.

Since this one is came from the chat, we'll do this in a sort of like lightning fashion. So won't do the standard debate style. If anybody has any thoughts here, chime in and we'll do it for the next couple of minutes or so before we get back to one of our other main topics.

**Dan Ott:** Linda's getting, uh, well, I mean, I'm sorry, I Linda just in the chat just got me totally off topic 'cause she said, does pineapple belong on pizza?

Oh no, that one, that one's the answer is no. We,

**Meg Gutshall:** I'll fight all of you.

**Kirk Shillingford:** Oh gosh.

**Meg Gutshall:** It

**Kirk Shillingford:** I tried so

**Meg Gutshall:** hard. Definitely does. Along with bacon.

**Dan Ott:** Bacon, yes. Pineapple. Pineapple

**Meg Gutshall:** and bacon.

**Dan Ott:** I don't need wet puddles on my pizza. That's, that's it. I yield my time.

**Meg Gutshall:** Bring the pineapple first. Dummy. What? Puddles.

**Kirk Shillingford:** Watch me make a bunch of enemies right now.

I don't think there should ever [00:35:00] be chicken on pizza.

**Meg Gutshall:** I think Nick's having it secret here.

**Nick Taylor:** Oh, I was on mute. I was saying, I was just saying I could literally eat a whole pack of bacon and not feel bad about it.

**Kirk Shillingford:** Yeah. Well that's, that's the Canadian,

**Nick Taylor:** it's

**Kirk Shillingford:** so good. Well,

**Nick Taylor:** I'm, I'm basically fueled, fueled bacon and maple syrup, but sometimes you gotta tap into the reserve.

But, uh, Linda and

**Meg Gutshall:** I are going out for pizza after this.

**Nick Taylor:** Uh, okay.

**Kirk Shillingford:** There's some coalitions forming between like people and chat and people on the panel. There's a lot happening here.

**Nick Taylor:** I don't, I don't know. Stuff got real, man. It got real. We,

**Kirk Shillingford:** we, we cannot, and we cannot get into this, cannot get into pizza 'cause then this stream will last forever.

Um, okay. So. Before we jump in, I do wanna actually add, does anyone have any thoughts on the pixels rem m thoughts? They don't necessarily have to be antagonistic just to Yeah, yeah. What do you think?

**Nick Taylor:** I let, let, let Dan go and I have thoughts too, but I have a feeling I align with a lot of what Dan probably is gonna say.

Yeah. I

**Dan Ott:** mean, my real [00:36:00] answer, my non and take it and tag and, what's the word? An an, an antagonistic I can, a non fighting answer is, it depends and, um. Like, there's, so, you know, s and REMS is, uh, are very similar, right? They're relative units and the. Usage of the, like, the reason why we use things like that is because things like zoom, the, it's an accessibility issue, right?

So things like zoom and things like that work differently when you use relative units versus, uh, absolute units, which you could get into pixels or centimeters, which is a valid CSS, you know, unit of measurement. There's a lot of. Wild, uh, CSS number values that like is also there. Um, none of them are real, right?

Like you could never put like, take a ruler and put it up on your screen. It will never be the same, right? Because screens are all different, all that stuff. Um, the reason you use relative units is because, uh. So they're relative to, so s are relative to their direct [00:37:00] parent and Reems, the R stands root, so that's relative to the HTML object, the HTML element all the way at the top.

And they scale much easier for, um, people who use Zoom or, or things like that. Um, so I, I, I tend to use a mix honestly, and, and things that mm-hmm. That deal with text, I will always use. One of the two, like REMS or m's, and then things that don't use text, I will usually use pixels because that's fine.

That's, that's my quick answer. Yeah. I don't know if that was under 30 seconds, but, oh, I.

**Kirk Shillingford:** It wasn't. It definitely wasn't. But that's okay. Uh, I think we're, I have no idea how time works. I, I don't, you don't know how units work? I don't. You don't know how time works? It's okay. We'll do Nick and then me, and then you will close us off.

**Nick Taylor:** Yeah, it's, it's pretty much what Dan said. Like, and I remember reading a [00:38:00] post from Josh Cuomo, uh, who's also from Montreal representing, um, you know, people used to say like, pixels were bad for accessibility, and it's not the case. Like there are certain scenarios I think. But, um, it is a really depends, like, and I typically use REM a lot.

I don't know, I. I could use m within like the container, but I typically have, I've mainly stuck to M but uh, rem, sorry, but I don't know. It depends, like, it, like it really depends what you want the inside of that container to do. Like if you really want everything within it to grow according to its.

Container, then an M in there for things is good, but if you don't, then I would just stick to rem. Um, and I don't know, centimeters are cool 'cause Canada.

**Kirk Shillingford:** [00:39:00] Thanks Nick, for always missing you. Never missing the opportunity to plug the system. International.

**Nick Taylor:** Yeah, yeah. Uh, de system.

**Kirk Shillingford:** Yeah. All right. Okay. Europe's in the chat.

Here we go.

**Nick Taylor:** Europe has entered the chat.

**Kirk Shillingford:** Save us from ourselves.

**Meg Gutshall:** The post that Nick referred to. I recently read and I put it in the chat because I found out I was doing it all wrong. Um, yeah, I pretty much use REM for everything, and then I read that post and I was like, huh, I guess that I should use.

Pixels and M for some things. Mm-hmm. Because again, accessibility, people zoom things and when you zoom with relative m's, [00:40:00] some things get huge and that's not a good user experience. Um, and I'm one of those people who zooms my browser. But I only do it like to 110 or 120%, so I don't notice that much. But people who zoom a lot, it will compound a lot.

Um, so I definitely, uh, recommend reading that article I posted in the chat. It's there Joe. Look up.

**Kirk Shillingford:** Look,

**Jörn Bernhardt:** Joe, look, you don't see it as well,

**Kirk Shillingford:** you know, maybe giving you speakers access to the chat was a mistake. Um, all right, yarn, you're gonna close this out and I think we got time for one more topic. So what do you think?

**Jörn Bernhardt:** Okay, so to be honest, I also use every unit, but I. Do [00:41:00] love gradients. Here it is. I I said it. I somehow hid it when, whenever we did the CSS battle stuff somehow. Um, I don't think that anybody noticed that I like gradients yet. But, um, you can do pixel art with gradients, so whenever you use pixels. It, uh, feels to me like these old school retro games where you had just a couple of pixels on the screen.

In the end, you always like put pixels on the screen. You're not so, I, I just like them more. I think even though I tend to use the other stuff as well,

**Kirk Shillingford:** I have to admit. He seems so sad. The fact I just, everyone else is like, ah, there's a time and a place. There's some really good resources. Check them out.

And you're just like, but I kind of, kind of like things more though, so I won't do that. [00:42:00] And honestly that's, that's pretty fair. Um, but no, like everyone said, there's, it's worth checking these things. I feel like the big takeaway for this one is just like. There's nuances to all of them. I think my experience with CSS is being very confused at first and then being very confused later with realizing like, I'm not confused because it doesn't make sense.

I'm confused because like some very smart people had some very specific reasons for everything that they've done. Like CSS is sort of like a living history of a bunch of people trying to make, doing things on the web worse. So sometimes you might not think there's a purpose for something, but there usually is.

Uh, thank you for, I think it was Joe and IU who would both recommend it in the chat. Um, got a good discussion out of it. Really appreciate it. So I think we have time. Well, we'll see. But we're gonna try and [00:43:00] get one more topic in. This one is really about sort of like the systems, what I call the systems re of the front end world right now.

Uh, if you are in front end land, you probably know about something called next js. Um, and if you've been in this space for some time, you also know that in the last five years we've had several iterations of what is the cool thing that the cool kids are doing. Um, we've had the rise and fall against like remix.

You can go back all the way to January. Like, there's always something new and interesting happening in the world of front end, especially when it comes to just like what are the big systems and frameworks that people are building around. So I think we're gonna do a topic here where we have our panelists.

Sort of give their 2 cents on how they feel about the current major [00:44:00] frameworks. And we are not gonna live in a JavaScript centric land here. So I'm opening like the Jangos of the world, the rails of the world, the things that are actually powering the internet, the PHPs of the world, the things that are actually powering everything.

Urine's, making a bunch of faces. Um. Throwing them all in there. And I think for this last one, we will get, uh, I think a statement from all four of our panelists. So let's start with who hasn't gone first. Nick, I think let's start with you. I'm gonna give you a minute and you can talk about what maybe your favorite framework is, what framework you might think.

Well, I don't know if people should get into this, like how do you feel about the current landscape? Should you stick to what we have? Just full thoughts on the topic. Let's kind of dive in.

**Nick Taylor:** Cool. For some context, I used to work on the frameworks team at nafi. Um, uh, worked with a lot of the frameworks. The ones that I enjoy [00:45:00] right now are Astro, uh, and even though it's not officially, uh, 1.0 10 Stack Start is looking really promising.

Um, if you haven't. Used anything Tan Stack, uh, every, everything they do on the Tan Stack team, uh, Tanner and all the maintainers is, it's pretty amazing. And it's just, I think at least if we're talking about React ecosystem, I think things got really complicated. Um, you know, and. I just find something like Tan Stack, refreshing, doesn't really hurt my brain.

Um, you know, uh, next yes is great and super powerful, but, uh, you know, and I'm not saying this 'cause I worked at Netlify, but, um, there's just some stuff that I feel is missing out of it in terms of like, there's. The caching in next GS throws people off a lot. Um, [00:46:00] you can't really access stuff within the requests like headers and so on, or cookies and like, uh, most of the other frameworks you can.

Um, this is a decision, uh, and it's totally fine. It's just, you just have to know these things is all. Um. And, uh, ne that said, next yes, is still, uh, a really good framework, but for me, my, my two favorites right now are Astro and, uh, ack Start. Uh, uh, I'll just say one last thing. I got to hang with Josh Sr.

From the Laravel crew and the stuff with, uh, bolt and all the stuff they have going on with Laravel, uh, is pretty exciting too, though, even if it's not full stack JavaScript.

**Kirk Shillingford:** Thanks, Nick. Um, good. I think we're gonna call that our good opener and let's jump over next to Dan and let's see what Dan has to say or where he's gonna be leaning on the next Js.

[00:47:00] Next Js or no side of things.

**Dan Ott:** Okay. Yeah. First of all, I was told that I would get to argue against things in this panel all the time, and now I'm being forced to just argue for something without. Unexpected positivity is the worst.

**Meg Gutshall:** I think you should argue against our moderator forcing you to do this.

**Kirk Shillingford:** Yeah, I'm overruled. I'm also

**Dan Ott:** the judge. Oops. Continue lawyered. Um, yeah, I, I think, um, I am pretty much all in on, on next JS for. For, for sites that reach some level of complexity and or interactivity. Um, I don't think SJS is the best choice for, uh, I don't know, I guess traditional website, you know, like the documents, basically the, um, but.

When once you start interacting with people and you know, having to receive input and you know, [00:48:00] and give feedback, things like that, the things that nex js unlocks, especially in the last couple years with server components, um, really makes life, I don't know, 7 billion times easier. Um. Anybody who's dealt with react and disliked having to understand how hooks work, right?

Uh, you can make a entire interactive next J site that doesn't use hooks at all. Like that's that because, because a lot of it happens on the server now, uh, which, which is really dope. And that's the key that a lot of the, uh, you know, over the, up until the last couple years, uh, most of the front end. FA frameworks, uh, focused on taking a bunch of input and then building out a static site.

And so the value of that, the static site is, there's no server side at all. It's already just on the server, so it's going to be incredibly fast every time, but the applications that gets all the attention are things where people. Send things [00:49:00] in and then also receive things back like Twitter or, you know, I mean Zoom or whatever, you know, things like that where there's lots of back and forth.

And in that situation, you, you need to do a lot of like silly negotiation if you're doing everything on the front end and the back end is completely separate. If you use a server side component framework like Next JS or remix, or there's probably other ones, uh, you get it all together on one component.

I yield the rest of my time.

**Kirk Shillingford:** I know, I know, I know. You okay. Um, no. I think really strong arguments there for next JS and a really like, nice explanation of why it can be a good idea. Um, wait, Nick, could we. You were you, did you mute yourself again?

**Nick Taylor:** Oh, I was, I was just trash talking, but I was on mute the one time I trash talking.

I'm muted. It's,

**Kirk Shillingford:** you're really not cut out for this. You can't. Yeah,

**Nick Taylor:** God, it's not

**Kirk Shillingford:** gonna work. [00:50:00] Okay, so let's have maybe yen chime in with, he's been saying basically no frameworks don't use any of this sets front end free again in the chat this entire time. So we'll give him some time and maybe like Meg is gonna be the responsible one to close this off with like the other frameworks that are out there.

Erin, go for it.

**Jörn Bernhardt:** No, I, it just, it, it just, uh, um, wrote that for Dan so he has something to, to argue against all the frameworks basically. I

**Dan Ott:** appreciate that.

**Jörn Bernhardt:** But, um, I, I haven't started without any frameworks. Built my own built tools and things like this, so trying to get the most out of your HTML. Basically you want to click something and you don't want to have a full page reload whenever you go on the next page on your application or on your site.

So you just want to, like, download the stuff that you need [00:51:00] and getting to this point is, uh, pretty hard, um, actually, or was pretty hard and nowadays it's getting better. But the approach that, for example, react took was way too complicated and they put up like multiple layers on top of it. So it got more complex and more complicated and they really didn't like, uh, like that at all.

So I looked into different frameworks as well. I think, uh, Astro does it really well, but I, uh, tried out Swell Kit. Before. Before, and I need to, I need to, uh, just say that swell kit is the first thing that made me feel like, okay, I can build this stuff that I want in a way that, um, it gives me like a performant and, um, yeah.

[00:52:00] Nice end result basically. And at the same time, I can be, uh, very, very productive with it. So. I think a lot of people just quit researching new frameworks whenever they, something 15 that's, uh, that made them productive. So I hope I haven't reached that yet. But look, it is

**Kirk Shillingford:** just great.

**Jörn Bernhardt:** I Thanks

**Kirk Shillingford:** Erin. Um, and I think, okay, so we've had, uh.

We've had two people bitching Astro. Um, Nick dive into my, his favorite system as Dan made a strong point for next Js Yen. Basically said everything that Dan said was wrong. And um, I think our last, uh, presenter, Meg, is gonna come in with some nuance takes that might fall under idea. You know, you don't even have to use JavaScript, man.

Meg, go for it.

**Meg Gutshall:** Yeah, I'm coming in from left field as usual. [00:53:00] You are talking to the Ruby on Rails developer here, and yes, we do use JavaScript still stimulus. If you haven't heard of it, it's pretty cool. Stimulus is part of the hot wire ecosystem. And hot wire isn't specifically rails. If you mess around with Elixir, you've probably heard of this too.

Um, it's stimulus is like the most raily JavaScript framework. It's they have controllers that you set up, so it's just. Structured in a very rails way. Um, and it makes me happy as a Rails developer [00:54:00] because I have learned react and redux. I learned react before hooks, and. I don't, I props passing props and stuff.

Uh, no. Um, yeah, stimulus makes a lot more sense to me using it in the ecosystem that I work in, but also something like a little more everybody else's speed. I, I am a big fan of alpine js. It's very, very lightweight. It. Is reminiscent of jQuery only.

**Dan Ott:** I feel like it's reminiscent of tailwind except for JavaScript.

**Meg Gutshall:** Yeah. Yeah. So yeah, look at me being just like totally contradicting myself. Um, but it's reminiscent of jQuery, but not a pain in the ass. Which Jake, we [00:55:00] is very much pain my ass. So yeah,

**Kirk Shillingford:** I think, I think we can all agree on that point there. Jake weary is a massive I disagree strongly. I know you disagree strongly.

I'll

**Meg Gutshall:** fight you. I'll drive to Ohio and smack you down over this.

**Kirk Shillingford:** What's hard about Jake wear though? We, we have five minutes left before one a deal. Commits a felony

**Meg Gutshall:** deal with an issue with jQuery. That took a, a big chunk of my life at work,

**Nick Taylor:** so, oh, you got issues? Okay. There. I'm trying to trash. Trying trash.

It's

**Meg Gutshall:** personal, it's personal. So

**Kirk Shillingford:** what have we learned today? Um, Dan will argue with anyone over anything all the time. Nick cannot argue at all, and it's a wonder how he's made it so far without any conflict resolution. And Yen likes three specific things [00:56:00] very, very much and doesn't like anything else. Um, Meg just contradicts herself all the time.

No. Uh, we have a couple minutes left and. I want to say a few things here. I wanna say, first of all, thank you to the panelists for such a wonderful job. Thank you for the enthusiasm. Thank you for the energy. Um, whether it was angry energy or not, it was very much appreciated. Uh, oh. Be as we said somewhere through this, that yeah, the kind of, the point of all this is.

There's a lot of stuff out there and nobody has all the answers, and it's never too late to find something new that you like or to find something new that you don't like, but you learn something from it. Um, I have so much respect for all these people here, and I know they're all doing amazing work with the tools that they are using.

Um, and you know, it's mainly, it's about the people, not the tools, but if you find the right tool for you, that is also a really good thing too. And if you don't, there's probably something else out there. As long as, oh, can I trash talk?

**Nick Taylor:** Can I interrupt you for a [00:57:00] trash talk?

**Kirk Shillingford:** Yeah. One trash talk

**Nick Taylor:** and some people are tools.

There you go.

**Kirk Shillingford:** Okay. Okay. There you go. Boom. Okay. There's, he, he's from Quebec, folks. He's from Quebec. All right. Um, but yes, thank you to everybody who came in

**Meg Gutshall:** trash talk.

**Kirk Shillingford:** Thank you for the folks in the chat, uh, for honestly providing me a fatton of assignment. Um, I feel like Glinda Linda and the chat deserves are on TV show.

Linda is the funniest person I've, I've ever seen. Um, but yes. So I feel like this

**Meg Gutshall:** also, Kirk, thank you for moderating and letting us abuse you.

**Kirk Shillingford:** It's, yeah, he, he was mid, he was mid. It's my lot in life as I spent the entire day avoiding conversations about Kirk Day and I will continue to do so. Um, do not at me.

**Jörn Bernhardt:** We have a little celebration in the coworking room after this. Yeah. With, with the Kirk Day and stuff.

**Kirk Shillingford:** I don't know [00:58:00] anything about that. Um, so we just wanna encourage everybody as we sort of like wind down. Um, I think the big theme here has been just like, try new things, try new things. Uh, give it a shot.

You don't need to find a fancy framework. You can do it in your end style and just like, go with what you know. You can learn things along the way. You can always jump back. Uh, there's no rules here except just keep, keep trying to figure things out. And if you get stuck, you know, ask your friends for help.

Um, all these people here, I at some point have asked for help with something and they've given me great advice or terrible advice, but like, we did it together and that's what matters. So I'm just, I'm just really grateful. I'm really grateful I had a chance to like be on this panel and do this thing with my friends.

'cause everybody here is my friend. And, um, that's, that's my favorite part of front end development, my friends, is do front end development. The end. [00:59:00] Thank you. Yeah, see you all soon.

**Nick Taylor:** Bye, everybody.