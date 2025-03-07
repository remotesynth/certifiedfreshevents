---
_build:
  list: false
  render: never
---

**Rizèl Scarlett:** [00:00:00] Hey, y'all. So I'm going to talk to you. As you see, my title is objects in mirror are closer than they appear. Okay. So I'm going to give everyone a warning. I am more of like a little bit of a storyteller. So at first you might be like, what does this have to do with code, but it will eventually get there.

And I do a little bit of shock value. But it's, it's, it's mostly just jokes. So just giving everyone a heads up. All right. So starting off with the shock value, y'all, I have a confession to make. I cheated, but not on a person. Okay. So you don't have to get nervous and take me off here and not on a test either, but instead, and I was just talking to.

Brian about this on my maternity leave. So before I dive into this, just kind of repeating some of what Brian said, my name's Rizal [00:01:00] Scarlett. I'm a staff developer advocate at block. I'm passionate about technologies like JavaScript and I love open source. And I will say I'm passionately conflicted about AI.

Like I love using it, but also nervous of like where our industry will go with it. I'm also a new mom. Now, in terms of being a new mom, right, maternity leave is awesome, right? It's a beautiful time to like bond with your kid, but it's also really, really exhausting. As everyone says, like, I don't know why I normally don't sleep, but now with a baby, it feels way worse.

Like, I'm like, wow, I feel sleepy at 2 a. m. Usually I'm like up on my computer. But I also think sometimes maternity leave is a little bit boring. Like I've never heard anyone say this before. Maybe it's just me, but sometimes I spend hours sitting in one spot, like either feeding my baby, putting my baby back to sleep.

Sometimes she falls asleep and she doesn't even want me to leave. As you can see, my arm is basically locked down. [00:02:00] Obviously she's not strong to lock me down, but if I leave, then she'll wake up again. So most of my day is just like sitting next to her, like all day. And then I can feel my brain turning to goo.

Like sometimes I'm like, I'm having fun. And then sometimes I'm like, huh, nothing to do, especially since it's cold outside, like I live in a cold area. So people have suggested activities to me. They're like, why don't you like bake cookies or something like that? And I'm like. Yeah, but I have to basically just sit and only have one hand.

So I mostly just been doing things like watching TV. I watched almost every show on Netflix, Hulu, Prime. I even subscribed to Peacock. I was like, what, what do they have on there? I started playing games on my phone. I tried talking on the phone to people, but my baby was crying. So I can't hear anybody. I tweeted every random thought that I had.

And then all of a sudden. I ran out of things to do. So the workaholic in me jumped out and I decided I want to [00:03:00] see what they're doing on Slack and in my emails. I'm like, what y'all working on over there. And then I found out that they launched this AI agent that I had started working on with my team.

Before I want maternity leave and I look way better and it's using an electron app. I never used electron before. Apparently it's built where like it uses react under the hood. Electron has like a, um, Chrome rendering engine. And I was like, what, they're doing all this. I'm like a little bit jealous. Like, I want to see what's up.

What is everyone doing? So. I saw a couple of issues out there. I was like, okay, the stop button is not that obvious. And this is open source. Will I get in trouble if I contribute to it? So I opened a PR and it got approved. And I was like, Ooh, got a little bit of a dopamine hit. And I was like, what else do they got?

They said these little, the little kebab menu wasn't obvious. So I was like, let me just. Let me make it obvious. It's only gonna take me like two minutes with one [00:04:00] hand. So I did that and it got approved in Merge and then I got too big for my britches, right? There was no open issue or ticket for this but a user said it would be so cool if like the chat area right here was a what you see is what you get and I was like I feel like I could do that, right?

Little did I know that was clown behavior. I should have never even decided to do that. I'm on parental leave. Like what? But anyways, so I decided I'm going to roll my own what you see is what you get editor. I didn't even use a package dependency. I was like, this is fun to figure out. And I was like, maybe the team will be like, no, we should use a package dependency.

But they said they liked it. And I was like, okay, they liked it because a lot of. Um, a lot of those packages for what you see is what you get editors have like a huge boat size. So I was like, Oh my gosh, this is so fun. And then someone said, well, it does take up a lot of real estate. So if, I don't know if you could see with this video right here, it's taking up more real [00:05:00] estate from the.

the chat window. And I was like, that's fair. And they're like, and how many people are really going to use it? And I was like, okay, that's fair. Like, why don't you try like doing a pop over toolbar? And I was like, you know what? I could try that. I've never done that before, but let's try it. But there was a problem.

I did not know this, that since the chat. Input is a text area element that makes it way more complicated. And you might be wondering what's the problem with that, right? But text area elements, aren't your average DOM elements, HTML elements. You can usually like manipulate the contents, measure the positions, add new elements, text areas.

They don't really act like it's really hard. Um, because they really just expose only like raw text content and basic selection APIs. And a lot of the rendering is controlled by browsers behind the scenes. Now I did a little bit of like a illustrative concept for you all. I made this little house with React and SVGs just so you [00:06:00] guys can like kind of get the analogy, right?

So imagine you're looking at a house. Right. If you're inside the house, you can move the furniture items around. You can add new, like you can add new items. You can measure distances between things. That's how regular dollar elements behave. But if you're looking through a window. You can see inside, but you can't reach in and you can't manipulate things.

That's how a text area element will behave. So, basically what I'm saying is like, with a text area element, you can make some basic changes, like adding and removing text, but the browser handles all the internal workings using native operating system text editing capabilities. So, I was like, alright, I gotta figure out how to do this.

So, I was like, posting about it on Blue Sky, I'm like, how do you even do this? And then Mark Texan hit me up and he was like, have you watched this talk by Una Kravitz? She talks about the popover API that might be helpful to you. All [00:07:00] modern browsers have a popover API for creating popover pop up elements.

And I was like, Oh, maybe that is what I want. So here's how it works, right? Basically you have a button. Let me zoom in just in case you guys can't see it. You have a button and it has an attribute called my um popover target and you'll name it like whatever you want. I named it my popover and then so when you click that button the the the pop up will show up so like I have is a div and I gave it an ID and it has to match the, the popover targets attribute.

That way it knows that it'll connect to that and it'll show up at that time. And I made a little one that says this is a native popover. So here's how the results are, right? I recorded it so I don't have to switch my screen back and forth. I click the button, the popover shows up over here. Not a lot of code, but not exactly what I want because it's only works with button elements.

You have to use CSS to position the popover relative to its target element. So I'm [00:08:00] like, Oh, it won't really be dynamic for whenever a user selects text. And this doesn't work in text area. So I was like, womp womp, this isn't really what I want, but it was cool to learn about. So I was like, how I dynamically show popover on selected text.

And I was like, all right, here's my goals, right? I need to know the position of the selected text. And I made a listen. For events that happen when text was selected. So I did a little bit of Googling and I learned about the selection API and my friend Colby's blog post popped up and it said how to share selected texts in react with the selection API.

And I was like, Oh my gosh, this might be what I need. Like, I don't need to share part, but I'll be able to see how he got the little pop up over the words. I'm like, Oh my gosh, I'm excited. And so I figured out there's these different methods. There's get selection, there's get range at, and there's get bounding client.

So get selection, window dot selection, window dot get selection, basically returns the selection object to you and tells you [00:09:00] about the text that a user has selected on the page. And I was like, okay, cool. And that gives you access to get range at, um, with the passing in a zero. And basically how getRangeAt works is it tells you exactly the beginning and the end of the selected text.

So you have the start offset, which is where the selection began, and the end offset, where the selection ends. So, here's a little bit of a demo. Um, basically if I was to select world as, that's not what I wanted to do. Basically, as I selected word world right here with the exclamation mark, my start index will be seven, seven, and my index X will be 13 because the end index is.

After the whatever comes after that exclamation mark. So that's how the get range out works. Also, side note, I was like, what is the zero for? Like, what does that stand for? And that is basically representing, um, the different ranges that you [00:10:00] select. And I was like, when have I ever selected more than one range?

And apparently most browsers don't support that. Most of the time, you're only going to be passing in zero because I can't select engineers and people at the same time. I would only be able to select one at a time in most browsers. So then that also gave me access to getBoundingClientRect. And that returns a box of measurements around your selected text.

So it gives you the top, the right, the bottom, the left, and it gives you the width and height. I'm like, Oh, this is so cool. So I did like a little like demo for myself to see how it could work. And I'm like, okay, cool. I was able to figure out like the coordinates. I was able to put the popover right over it directly because I have the coordinates of where the text was selected.

I have the selection length. I even am able to see what text was selected. I'm like, cool. I can grab so much information. This is might be what I need. But then I found out. It didn't work in [00:11:00] text areas. I was like, still, it's happening to me only works in divs and other elements. So then I was like, I'm just gonna ask AI.

Okay. And I was like, I need reinforcements. I'm frustrated. And so this, I asked the AI agent that my company built. While I was on maternity leave, or that they made better, it's called code name goose. And I was like, listen, I need help. I don't know if it's crazy to ask an agent how to build itself, but I'm going to do it.

Right. And for people who don't know what an AI agent is, it's basically just a tool that executes tasks on your behalf. So whereas with like chat GPT or something like that, you're like, Hey, how do I do something or co pilot? And they suggest it to you. An agent will just. Do the task for you, if that's what you want.

And I have a little bit of a bias. I've tried out other agents. I tried out Devon. It was not as bad as everybody was talking about it, but I tried out Devin. I tried out this I'm [00:12:00] biased to this one because my company made it. It's a little open source. It's local to your machine is configurable. So you can add in whatever like model or LLM you want, and you can use model context protocol, which is like an open source thing that Anthropic made to like plug it into, like, Any, um, workflow that you have, so like, if you're using Figma or something like that, you can plug it in there rather than having to give it context already has the context.

But anyways, that was just giving you background about what, how this would all work. Anyways, I talked to the agent and it was like, did you try the mirror div approach? And I was like, I don't know what that is. And it told me. Basically it's going to create an invisible div that overlays the text area containing the exact same content and styling.

So basically when a user selects text, they're actually interacting with the invisible div and then there's a text area underneath it and it kind of gives that same look and feel, but you're getting access to the selection API. So I was like, okay, what if the AI agent is hallucinating? So then I double checked and I found a blog post from J.

Tompkins, which [00:13:00] Describes a very similar approach. So I was like, okay, let me try it out. And I saw the AI agent uses something called get computed style. And I was like, I have no clue what that is. So I asked, well, and I didn't ask, I looked at the blog post and they actually use that same thing. And I figured out that basically get computed slot style is an API that returns computed CSS styles of HTML elements.

And the whole point is you use the styles to match the text areas appearance of the overlay div. So. Here's how it is, right? We have like the div and then we have the text area being reflected here. Um, you would overlay them on top of each other, but I just did this so you all could see. The little blue dot is where that popover will start.

I'm like, okay, cool, cool. We got the text area. We got the div. It's reflecting it. If I put it on top of each other, this is the experience. I'm like, this might be what I want. And I was so excited when I tried to do this. Um, I basically had it working for myself, [00:14:00] got a little pop over, it got to do the bold, the italics.

I was trying it out. I put up a PR, attached videos, I'm demoing it. I was like, I'm so excited. But then I was like, let me try something out. And when I tried out Um, selecting multiple lines at like a random break, it did not work out well. It was looking ugly. I was like, Oh, I was so annoyed. And I was like, that's why it's called the mirror diver approach.

Because just like when real mirrors, things aren't always how they seem. Or as like car mirrors or windows, whatever they're called, those side mirrors say objects may be closer than they appear. So after that, I was frustrated and I wrote a comment saying, yeah, I'm not doing this ticket no more. Anyways, like they didn't have it on their their priority and I wasn't even supposed to be doing any work.

So I was like, I'm done. Um, and just expand more on the mirrored div. A mirrored div can kind of distort reality in subtle ways. Basically, text can [00:15:00] wrap at different points between the div and the text area, and browsers can handle spacing and font rendering differently, basically cause I'm causing positions to shift unexpectedly.

So here's the stuff I learned, right? I learned it's okay to do things that make you happy, even if it's not common, you know, some people would not want to do any coding on maternity leave. I want it made me happy. I learned not to pick up hard tasks though. That doesn't make me happy. And. I also learned that text areas are more unique and complex than I imagined, but I appreciate their engineering.

I learned about the pop over API and it's best if you're using buttons. I learned about the selection API, as you guys saw, it works amazing to grab text that's not in a text area element. And I learned about the mirror div approach, which to me is some big brain energy. Like it was, it was. Complex for me.

Um, and some resources. If you wanted to see the agent, I did a short link at [00:16:00] tiny URL dot com slash block dash goose. And then if you want to, I don't know, read stuff I wrote, I even wrote about this experience with the selection API's and stuff like that. If you wanted to go back over it, my blog post. Or my blog is at dev.

to slash black girl bites and on every social media platform My handle is at black girl bites so you can find me there and if you wanted to tweet or Blue sky post whatever that this was such a good talk and I am so cool. Feel free to That's it.

**Brian Rinaldi:** Thanks. So I love the story where you told this because you covered 3 different things, right?

Like, but in essence, just through trial and error, which I funny enough, you and I were chatting about Brian Robinson's talk. Proceeded to do, which you weren't able to watch, but like, kind of led right into your talk because he talked about [00:17:00] basically, um, the, you know, the power of play and how sometimes, like, even in planning code and in your case, like, that was, this was, even though you were on maternity leave, like, it was like.

This was, you were playing around, you were having fun with, with code, um, and even though it wasn't ultimately successful, I guess, did they take what you, what you use there and, and actually fish it? Or did you give up on the, on the editor?

**Rizèl Scarlett:** I gave up. I maybe we'll go back to that later. I don't know, but it's not a priority for them.

So they're like, eh, but they took the other stuff and I didn't take it as a loss. Kind of like you said, cause I just wanted to, I'm like, I haven't gotten to just play with code in a long time because there's always a goal or a priority that has to happen. So I just wanted to try stuff out and got a chance to.

**Brian Rinaldi:** Yeah. Well, I mean, maybe they'll, maybe they'll They'll finish it or you'll finish it when you're back and, you know,

**Rizèl Scarlett (2):** we'll [00:18:00] see, you know,

**Brian Rinaldi:** I've, I've seen those, it's amazing because I, I, I'm sure there must be a way to do that. I just, yeah,

**Rizèl Scarlett:** I think so too, because I was looking at discords. Discord has like a really good one.

I'm like, how did they do this? I probably should just use a package dependency or something. I was being, uh, stubborn and wanted to write it on my own. There's probably a npm package that does it right out the box.

**Brian Rinaldi:** Probably. I mean, I guess, I guess that might be the case. So, okay. So let's Uh, folks, if you got questions for result, we've got some time for questions here.

Um, but, uh, I want to kind of go over. So pop over API is specifically for doing like those. Well, pop overs, but yeah, can you can you kind of give a little more context of what what that API is about?

**Rizèl Scarlett:** Yeah, I mean. Uh, what I shared is what I learned and basically it only gets triggered [00:19:00] if you're using a button like the popover, uh, target attribute is only available on buttons.

So if you were to click a button and some, you wanted something to show up, you could do that and you could do it with no, no JavaScript, I guess.

**Brian Rinaldi:** So you can't, you can't, uh, can't use pop over like at any other click. It's only button click.

**Rizèl Scarlett:** Yeah. Only button. Yeah. I was disappointed. I'm like, they need to, I don't know.

I mean, not they need to, but I can't wait for browsers and engineers who work on that stuff to continue to develop that.

**Brian Rinaldi:** And the selection API will, will like. Is, is that kind of what's going on in that last, like you're using the selection API, but you're, you're basically using it in a div because you said it works in a div, but now I'm laying over the div over top of the text text.

**Rizèl Scarlett:** Yeah, exactly. Yeah, basically. [00:20:00] You yeah, you take a div, you copy how you copy the style of the text area and how it would behave. And you put it over it and then you select the text and it should show up. But sometimes it's a little wonky. So that's probably like the best. Solution, but I was like being a perfectionist and I was like, Oh my gosh, it's one like pixel off.

I don't like that.

**Brian Rinaldi:** Yeah, no, totally. So, so, I mean, I guess what would be like, what I'm trying to think of, like other uses for the selection API, if you can't use it, like a text area seems to be like really one of those places where you would have thought it would by default.

**Rizèl Scarlett:** Yeah, I guess because the text areas are just weird, but yeah, there's other times on browsers where you select text, like you might want to copy and paste or something like that, or I'm

**Rizèl Scarlett (2):** trying to think

**Rizèl Scarlett:** maybe if you were like on a news article and you want to like share a [00:21:00] quote from the article, you'd like select over it and like a little thing pops up and you're like, okay, sure.

I don't know.

**Brian Rinaldi:** Like a social share kind of thing. Yeah. Like, uh, yeah. I think I've seen some of those. So now I don't have that, that actually works. I didn't really, I've never dug into that API. Um, so yeah, Linda saying worker with text makes me think about the first dev task I had, where I had to use a button to expand left text.

There's so many edge cases that aren't super obvious, right? Like, yeah, I think absolutely. This is one of those things where the more you dig in, the more you like kind of struggle. Um, Because you hit these little edge cases in your case, it was the multi line selection, right?

**Rizèl Scarlett (2):** Yeah.

**Brian Rinaldi:** Yeah. Um, so Savannah asks, um.

1st of all, she says, your talks are always so engaging. So

**Rizèl Scarlett (2):** thank you.

**Brian Rinaldi:** She said, she asked, uh, do you have a process or any tips for others [00:22:00] wanting to give a talk one day in a similar storytelling framework? So it's not really, it's a pop over API or a selection. We're talking about, yeah, talk tips, which I did say, I mentioned you're one of my favorite speakers because you do kind of have.

Telling way of doing stuff. So, um, yeah.

**Rizèl Scarlett:** Thank you. I'm glad. Cause I don't have too much more on the selection API. I shared everything I knew, but, um, in terms of, uh, my talk process, I don't know, I think I just do a lot of trial and error. I give a lot of bad talks too. And I figured out, I'm like, okay, that one didn't necessarily hit and I can switch it.

And I kind of lean on like whatever's going on in my life at the time. Thank you. When I was pregnant, I gave, like, I found a way to relate it to that when I, I don't know if I got my first job, I found a way to relate it to that because it makes it, um, it makes me more passionate to talk about it, but I don't know if I [00:23:00] have, like, a specific process.

It's really just like, what's going on in my life. I go take a shower and then I just. My talk, I don't know, like I have shower thoughts. Yeah,

**Brian Rinaldi:** yeah, I do that like when I go to like a time on the treadmill and like that's usually when I come up with that's what I'm the most creative. And there's actually like science behind that, that like doing these other activities can kind of.

Uh,

**Rizèl Scarlett (2):** sparks,

**Brian Rinaldi:** you know, bring about spark creativity. Um, particularly when you're active or something like that. It is that's why, like, I, you know, I, 1 of the things that keeps me going back to the, to the gym. It's just that that's my thinking time. It's like, yeah.

**Rizèl Scarlett (2):** Yeah, that's true. I have thoughts. I'd be like, oh, that's smart.

**Brian Rinaldi:** So Benito says based on your experience with the electron framework, I've noticed chromium, which I understand is electrons core technology becoming increasingly dominant and [00:24:00] desktop application development. Would you recommend electron as a good entry point for someone looking to contribute to open source web technology projects?

What has been your experience working with it?

**Rizèl Scarlett:** That was literally my first time working with Electron that's and it felt like a web app like the experience the way that the project was structured. So if you're familiar with like react and stuff like that, I say go for it. Um, I, I say go for any code base that you're curious about and looks interesting to you.

I don't think you should limit it and be like, Oh, only electron or only this. Like if it looks, if it looks interesting and you want to dive in, go for it. I don't know if that answered

**Brian Rinaldi:** the question,

**Rizèl Scarlett:** but yeah,

**Brian Rinaldi:** I think it does. I mean, I think Electron, there's, there are some other alternatives, but Electron seems to be kind of the,

**Rizèl Scarlett:** oh, that's what they're saying.

Yeah, oh, there's Tori too. That's true. I see what they're saying. Yeah, there's Tori. But yeah, I say, if, if it's familiar to you, go for it. Yeah. [00:25:00]

**Brian Rinaldi:** Yeah, I, there was also at 1 point, I think, because even, um, originally, uh, visuals VS code was built on electron. And I think they forked it or something like that. If I remember, if I'm remembering the story correctly, it could be maybe I'm just making this up and I'm doing fake news or something here.

It sounds close, I think,

**Rizèl Scarlett:** I think Adam, I know Adam for sure was, I don't know if you remember Adam was building Electron. I do remember

**Brian Rinaldi:** Adam. Well, there was, yeah, there was, there was one that was, uh, years ago. So the first code editor I remember being built with web technologies, like, was actually one called Brackets when I worked at Adobe.

Um, and, and that was, so they built a whole engine for running like. You know, browser stuff in, in a desktop tool. Um, it's not made anymore, uh, but it [00:26:00] was, yeah, I, I am, I'm, I'm almost positive it preceded visual studio code.

**Rizèl Scarlett:** I think so. I think I can track it one time.

**Brian Rinaldi:** Did you really? Yeah.

**Rizèl Scarlett:** Yeah. I think I talked, there's a lag and I talked over you.

Sorry.

**Brian Rinaldi:** Yeah. I'm having like. And network issues today, of course, because, you know, I think thankfully you all I am, uh, I'm not going to be on the rest of the day. I'll just be on the chat. We got turned over to Sean, so hopefully his, his Internet's better than mine. But anyway, um, yeah, there is a little bit of a lag.

Um, but yeah, but brackets was, was with that 1st code editor that I remember, like, using like that. Um, but it doesn't exist anymore.

**Rizèl Scarlett (2):** Oh, the lag might be from me. I'm sorry guys. Oh, maybe

**Brian Rinaldi:** it is now I hear you, but I can't see you.

**Rizèl Scarlett (2):** Oh, no. Sorry. [00:27:00] Okay,

**Brian Rinaldi:** I'm

**Rizèl Scarlett (2):** back.

**Brian Rinaldi:** Oh, there we go. Hey, you're back. Well, thanks. Um. Can you, can you tell me a little bit more about this, the, the agent that that you all are building?

I'm curious because, I mean, obviously, like, it's a big, big hot topic. But he's becoming agentic, um, you know, so tell me a little bit more about the one you will.

**Rizèl Scarlett:** Yeah, like I had mentioned, it's open source and, um, you can, I think what's different than what I've seen from a few agents is kind of like, you can plug it into different tools that you have.

I think I mentioned it in the talk where like, if you're using Figma and plug, plug it into Figma and it'll have context of whatever designs you have. Um, And it's using model context protocols. So anybody can make their own type of like extension as [00:28:00] well. And I believe other products are using it to like cursor.

It's a cool, it's a cool agent. And I didn't really know much about agents until I use this, because I was like, what's the difference? Everyone's calling their tool agentic. But really, for me, I think when I say when people say agent, they should really mean like, It automates tasks for you. So you can say, Hey, I want to build, or I want to add these unit tests and it goes in and adds, oh my gosh, I'm sorry, guys, I'm going to

**Brian Rinaldi:** hear you.

So yeah, finish, finish your thought.

**Rizèl Scarlett:** Okay,

**Rizèl Scarlett (2):** let's use this.

**Rizèl Scarlett:** Um, yeah, but what was I saying? Yeah. Um, basically it goes in and automates the task for you. So it'll, it'll act on the task rather than say, Oh, did you want to write the word function? Or did you want to do this? It'll just go ahead and do it for you.

So that's supposed to like, speed up the development process and your productivity. I don't know exactly. How [00:29:00] I would feel about that if I was a pure software engineer, but I find it helpful as a developer advocate when I want to do like a quick demo or something like that. And I'm like, okay, I just want to do this for like a blog post or a talk or just so people can get the idea, but I don't necessarily have as much time because I have to work on other stuff.

So I find it helpful that. Yeah.

**Brian Rinaldi:** Yeah. Yeah. I've used like, I mean, cursor has their, their agent built in as well.

**Rizèl Scarlett (2):** Yeah.

**Brian Rinaldi:** Yeah. The composer. And I mean, I've, I've only recently started using it. I've, I've hesitated because I loved your like description of yourself as passionately conflicted. I, um, that's how I am.

I like, I tell people I'm like within, within my company, even though I'm known as being the. I think even though I, I use AI heavily, it's like, it's like, you know, it's not, you can be, I think an AI skeptic and yet still use AI. Um, but, um. But yeah, so I use the, their agent [00:30:00] and I, with you, as a developer advocate, it makes a lot of sense.

Like, hey, you know what, um, it, I can whip up the front end of a demo, um, really easily. Whereas I, I used to do that and it would take a long time. And honestly, I'm a bad designer. And it turns out that, you know, I'm bad enough to designer that the agent is a better designer than I am. So like, that's a big help.

Yum.

**Brian Rinaldi:** Yeah. And nobody's, nobody's deploying that code. Right. So like, I mean, I'm just, it's just a demo. It's not like a production app. So

**Rizèl Scarlett:** exactly when, once you get to production apps, maybe be need to be a little bit more careful review it more. I always tell people like review your code as much as possible when it's generated by AI.

And I think the part that I'm conflicted about with AI is that everyone. Describing it more like a human, like I recently wrote like a blog post. That's like your AI agents, not an engineer, like talking about it, replacing developers, acting like it's [00:31:00] can do every single thing that a human developer can do.

Not really true. I'm like, it just augments or helps us, but it's not like going to do every single thing. That's just my, my perspective.

**Brian Rinaldi:** Yeah, no, totally agree with you. In fact, my experience has been You know, a lot of times, like, for easy stuff, which is why it's great for, like, writing the front end of a, of a web app, right?

Like, some of the, some of those pieces, because that's not, I'm not saying it's, like, easy, easy, but, like, for what I'm trying to do, it's easy. I'm just a simple, like, front end, but, like, when I've asked it more difficult questions, it tends to be. Wrong, but it's authoritatively wrong. It's like, it's like that person who gets up there and like is, you know, um, to go back to, uh, uh, uh, uh, the guy I was quoting earlier, this guy named Ed Citron, he had this episode, apparently these researchers wrote this whole research paper about how, like, AI [00:32:00] is basically, they said it was AI is, and to forgive my language, but AI is bullshit.

It was literally they're, they're, but they, they, they're using some kind of scientific, Like, almost like definite philosophical definition of what bullshit is, um,

it's like,

**Brian Rinaldi:** because it's authoritative, even when it doesn't know what it's talking about. Right? Like, it's just, it's the person who didn't read the book and got up there and is giving the book report.

Um, you know, so those are, those are people we elect president of. So like, that's okay. Get myself in trouble here.

**Rizèl Scarlett:** That's interesting. And oh wait, I would be like, I should talk about how the agent might be a little bit different than some other AI tools. I didn't really think about these until just now.

But like, um, most of the agents I've used have been like lovable, or I think it's bolt. new or whatever. And that's like Um, through, like, [00:33:00] on the, like, via browser or cursor only really has access to that, like, one particular, um, repository that you're in a directory or whatever, but with the AI agent that my company made goose, it can.

Um, access your, if you want it, if you give it permissions to like, not out of your permissions, it can access your, um, system. So like your computer system. So I was just playing around with it. I had it like dim my, I told it to like dim my brightness, like start a YouTube video, um, collects data from the web and like turn it into a CSV and then a pivot chart chart, like I told it to do all that in one.

And I thought that was kind of cool that I could do. Like, I don't know when I will really be doing that, but I just. Like have been playing around with it. I even played tic tac toe with it. I was like, build a tic tac toe game. And then you play against me. So I don't know. I'm curious to see what people would do with it.

I think I saw a guy. Like make spin up [00:34:00] multiple instances of that particular agent and they were like working together to build a web app. I don't know how he did that, but those are those are like interesting random things that I figure I will bring up.

**Brian Rinaldi:** Yeah, that's um. That's, that's really interesting.

I was trying to think about like how that would work. Did it, did it work building your tic tac toe game? Did

**Rizèl Scarlett:** it? Yeah, it did. It did. It lost the game continuously. I thought it would be smarter, but it did build the tic tac toe game. And then I played X and then what it did, it was, it was take a screenshot to see the state of the game.

And then it would say, okay, I'm going to play in my O in this part. So I thought it was interesting. Yeah, I don't know what's like my

**Brian Rinaldi:** skepticism here of like an AI that's smart enough to build a tic tac toe game but can't win a tic tac toe. Yeah,

**Rizèl Scarlett:** I was like, I was like, just try to beat me [00:35:00] competitive. It saw that I did like a whole column and it's still put it's oh far away.

I was like, I don't know, but I'm going to keep playing around with it to see like, how can I make it more competitive? Since I have all the time on my hand, well, not all the time in the world, but since I have a little bit extra time, I just experimenting with it as much as possible.

**Brian Rinaldi:** Yeah. You know, it Eventually, it's going to keep playing tic tac toe and it's going to say the only way to win is not to play the game.

All right.

Yeah,

**Brian Rinaldi:** sorry. This is my war games reference for those of you not old like me. It sounds like I never saw war games.

Yeah, I don't know.

It

**Rizèl Scarlett (2):** sounds like it's funny.

**Brian Rinaldi:** No, like, I think the beginning of war games, they like, literally sitting there with, like, a phone that they hook into, like, you know, you, I don't, you would, you're obviously way too young to know that, like, used to take the phone and you had this little device, you'd actually put [00:36:00] the phone in and the communication, you put the handset.

Well, do you know what a hand said on the actual phone that used to you may not have even encountered that see Even my references to my birth like you like, you know Let me tell you what record players are

**Rizèl Scarlett:** I? Thought I knew what you were talking about for a second, but I was like, wait a minute. I'm not sure All

**Brian Rinaldi:** right.

Well, well, we've certainly gotten off topic here. It's totally my fault. Uh, you know, but, uh, all right. Well, I, I really appreciate that you took time off your, your maternity leave. Um, congratulations on the baby and, um, and everything. And so I, you know, But I appreciate that, you know, I, I think the, the passion that you, you have for this comes through because you're, you're like the kind of person who does these projects like, you know, for fun while you're sitting there trying, you know, take your baby with 1 hand.[00:37:00]

That's some people were asking. How do you code with 1 hand? And, um. Um, I'm not really sure slowly,

**Rizèl Scarlett (2):** very slowly.

**Brian Rinaldi:** All right. Well, thanks so much for coming out. Rizal, um, best of luck with the rest of your maternity leave and everything else. And, and I will, uh, hopefully see you up in Boston sometime soon.

**Rizèl Scarlett:** Yeah. See you. Thank you so much.
