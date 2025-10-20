---
_build:
  list: false
  render: never
---

**Brian Rinaldi:** [00:00:00] I am really excited about our final speaker, Rizèl Scarlett. Um, Rizèl has I spoken before at a number of, of, uh, my events over the years. Always great. I don't think that we've ever had this opportunity though to have like a fireside chat, so anyway. Introducing Rizèl. Rizèl is a tech lead for, uh, open source developer relations at Block with diverse backgrounds spanning GitHub startups, nonprofit organizations.

Uh, she's cultivated a passion for utilizing emerging technologies to champion equity within the tech industry. She moonlights as an advisor to G Code House. I don't know how to pronounce a little squiggly, so I'm gonna leave that out. An organization aimed at teaching women of [00:01:00] color and non non-binary people of color to code.

Rizèl believes in leveraging vulnerability, honesty, and kindness as a means to educate early career developers. When we're thrilled to have you here for a file side chat, welcome Rizèl.

**Rizèl Scarlett:** Thanks. I'm thrilled to be here. Always like your events, they're like always really well done.

**Brian Rinaldi:** Thanks. I really appreciate that.

It's mostly Potter, you know, it's uh, lots of just kidding. Potter Potter's, the guy in the back. Doing all the video secretly. He's controlling all the strings. He, he reminds me not to, not to be on mute when I get on screen. Um, and, and not that I've ever done that. I don't know where he gets this idea, but I've never, anyway, let's get to the topic at hand, which is basically, so when you and I chatted, I was, I would kind of pitch you the idea of.

We are now in this world, which has come up multiple times throughout the course of [00:02:00] today, where we are writing content that's not necessarily always being consumed by humans there. I mean, it was always true that we had like say, Google Bot or whatever, search for search that was consuming our content, but in this case, it's not just being consumed by like.

AI bots, but it's also being regurgitated by those same bots, um, in many cases. And so like thinking about like how, how do we approach this problem of. Of like, first of all, you know, developers, like if you want your stuff consumed by ai, like what's the best way to approach this? Um, I know you had some, like some thoughts even just in general, like, I mean, what are some of your thoughts of like, how do, how should developers start to think about, do they really need to think about like writing their, their content for ai?

**Rizèl Scarlett:** Yeah, I think so. Because many times, like you just said, right, um, AI tools are starting to [00:03:00] consume that content and regurgitate it. Um, I actually was looking at a couple of stats and I found a report, I forget the name of it, I wish I remembered so that you guys will. Believe me and not think I'm making up, but it said like 55% of developers, um, are asking AI tools questions over like actual, like search engine optimize, I mean search engines like Google and stuff like that.

Um. And then it, that was in the US and in the UK it's actually 62%. So I do think that like when you're creating content, we should be keeping like how AI tools are gonna consume and then spit out that content for others. Um, because that's where some people are starting to lean now, especially with some companies doing like AI mandates and stuff like that.

Some people are starting to lean there. Even myself, I found myself like asking like, chat GPT or something like. Questions that I usually used to go to Google for. And I think the, the, the key here though is like, don't [00:04:00] forget that humans will still consume the content as well. Like, um, I think sometimes maybe people are starting to be like, oh my gosh, AI first.

Um, I think we need to have, be able to have that balance of like. Hey, AI tools will need to consume this, but also will, um, like the average human being. 'cause not everybody's using AI tools and sometimes people want, uh, a deep dive.

**Brian Rinaldi:** Yeah, for sure. I mean, I think I, I've read something. About, you know, I think a lot of, a lot of people have seen just kind of this, uh, traffic drop off, um, for a lot of sites that, that kind of proves that yes, people are going to AI and getting, getting their, their search.

I mean, even if they go to Google, they're getting half the time. You know, they're getting their answer from AI anyway, and it turns out they, by the way, almost never click the link to find, to get the, the resource that the AI generated that off of. Um, so like, you [00:05:00] know, I, I, it's definitely, I think something we have to take into account.

Um. So, so one of the questions I had for you though, 'cause I mean obviously you all do a lot of AI stuff at Block. Um, and, and how, how is the way an LLM consumes your content, say, different than how a human might consume the content?

**Rizèl Scarlett:** Yeah, that's a good question. So like, I think for the way we as humans consume content, we're like.

We might skim stuff, we might go from spot to spot. Even. Even if it's a video, like whether you're reading or you're in a video, you might be like at one minute and then you're like, let me just skip to five minutes. Like I get the point. And then also as humans, were able to interpret nuance a lot, but LLMs are not that way really.

They kind of just like parse and like stitch together little chunks of information. Um, and humans, we want like. The storytelling. We want like a narrative arc. [00:06:00] We want emotion. Like the LLM doesn't really care about that, to be honest. So, um, I think the way that LLMs are looking for things, they're looking for like, or, or what helps them to find the point is like having like structured headings, like bullet points, numbered lists, um, metadata and stuff like that.

So the LLM knows where to go. To be able to answer the user's prompt. 'cause like, let's say I say, I don't know, sometimes I'm like, oh, can, can a baby eat this? Or I don't know, like I still question and I'm sure now chat, GPT or Claude or whatever, they're like looking through some of the top ranked searches and then they're like looking for like headings so they could quickly find the answer, um, and put it together in like a conversational manner for me.

**Brian Rinaldi:** Yeah. Yeah. You know, and, and some of those things are just good content structuring anyway. Yeah. Like, I think sometimes we get away [00:07:00] from, from, say, putting proper like headings in the proper order, which is just best practice anyway. Um, but I, I think if you want it consumed Yeah. Um. Having those kind of things is definitely helpful.

In fact, we, I, you may have missed a big, um, Ian was talking about how CloudFlare turns, takes their markdown, like with, with MDX, turn it into HTML and then turn it back into markdown, but with a lot more of like this simplified. Versions of the markdown, right? It's like, so you won't have like a component for tabs obviously.

'cause it doesn't un uh, but if you have a component, you just turn that into a list and things like that. Um, so I, it gets at some of what your point here, which is like you have to change the way you, you put the content for an LLM if you aren't doing their process and generating an LLM specific version.

Yeah. Um, yeah. So do. [00:08:00] Sorry, go ahead. You were gonna say something?

**Rizèl Scarlett:** Oh, no, no, no. I was, I was just agreeing with you that like. Um, it doesn't, it's not like hurting you to basically structure things better. It's just, it's you being more mindful of anything. I even, um, just really quickly, I was like even thinking about the fact that like, adding a alt text to your image helps the LLM but in the end it also helps people who need to use like, um, those like accessibility readers and all that.

But keep going. Sorry.

**Brian Rinaldi:** Yeah, yeah. No, no, it's true. Like, you know, in some, in some ways it, it doesn't understand like, say complicated like structure, but, but in some ways it also enforces you like on simpler things to have to do the best practices, right? Like, like add your all text and which we've covered even with another presentation was like, you know, adding alt text, adding accessibility things probably helps these as well.

Um. But what happens? Like, let me ask you, [00:09:00] like, let's, let's say, uh, I don't want it consumed by an LLM. Like, how do you, how do you, how do you do that? Because not everybody, you know, like if I have content that, that say is buying a login or something like that, and I don't want, I don't want to LLM to ever have access to that stuff.

What, is there something I can do?

**Rizèl Scarlett:** Yeah, so there's a couple things. However, I always do a disclaimer that it's not like. Guaranteed from the research that I've done, because it has to be that the LLM provider respects these boundaries. Um, but like you can have l LLMs txt a robots txt, basically specifying like, I don't want, um, an LLM or AI agent to.

Consume this information. Um, you could also, I think you had mentioned just now a login, like I think if you put things behind like a authentication wall or a paywall, which I, I don't really like for humans. [00:10:00] Um, but those also help to, um, guide the LLM from not. Like reviewing that information or consuming that information.

But again, with that disclaimer that like not all LLLM providers respect that. And I think in the future we're gonna have to start thinking about like. Like more like heavier technical standards, I guess, like licensing or creative commons or something like that. Especially for folks like artists. I know artists don't want their, their, like, art being consumed by AI tools.

So those are things that we might have to put in place, um, as like AI beco continues to become bigger and bigger.

**Brian Rinaldi:** Yeah. Um, we, we, I, I agree with ev, you know. That respecting boundaries is, is always the part you can't, some companies are, are much more respectful of boundaries than others. Um, unfortunately that's the world we live in.

Um, [00:11:00] I do have a couple questions from the audience. Uh, first of all, Brian asks, are plain text LLM files the most easily consumed format for an LLM to learn from? Or is semantic H-T-M-L-A better format for more complex source content?

**Rizèl Scarlett:** Uh, double checking. Are you saying for it to avoid that information or for it to consume the information?

**Brian Rinaldi:** In this case, he's asking for it to consume, like, oh, okay. Is it, is it better to convert it into something like a plain text format, or, or is, is it better in Symantec HM.

**Rizèl Scarlett:** From what I learned semantic, HTML, just because you have the ability to like, have the, the headings and like do little, um, indications that this is like the important information that you want like A-T-L-D-R and stuff like that.

So that's from my knowledge.

**Brian Rinaldi:** Okay. Yeah, and that's, I mean I think like maybe if you, if you did follow something like what was mentioned before about, about, um, [00:12:00] about converting to markdown 'cause. Generally these lms understand that, I mean, we write in markdown in the chat as an example, so I'm assuming that they would understand that better, but, and it does have that kind of markup to Yeah, yeah, like the headings and things like that.

Vale mentions, I've heard that XML performs better than markdown. I wonder if that's true. I have no idea.

**Rizèl Scarlett:** Didn't know that. Yeah, I didn't know that. I haven't used Yeah, with an LLM, like to consume that information.

**Brian Rinaldi:** Um, Brian says, I wonder if ASCI doc would even be better than markdown for more, for more complex plain text source content.

Actually, I wonder, 'cause I, I mean I've never really thought about like, does what goes on under the covers, like how it breaks it down, does it? Does it like I'm, I'm like, if it's looking in the HML document, I'm assuming [00:13:00] at some level it strips out a lot of the HTML and does some kind of conversion to help it structure the content better.

Um, but it doesn't mean, does that mean that, that, that their robots would actually like, understand Askie doc. I don't know. Yeah, because it doesn't, I don't assume that they necessarily understand whatever format I want to write my text in. Curious, like do you know anything about that at all?

**Rizèl Scarlett:** Yeah. I don't know the answer to this to be honest, but I would assume since it's trained on so many.

Like so much data, it should understand it. It's just more, I think it's less of the question of like, would it understand it or, or would it be better for it? I'm not sure. Yeah. To be honest. Yeah, that's true. I would understand.

**Brian Rinaldi:** Yeah. I mean it would understand the text, but would it understand like if you broke it down into different like, like the structure of the text they need better?

[00:14:00] Yeah, no, no idea. That's a really good question. Work. We'll have to, we'll have to like leave that one. We'll have to research it for later, but Very good question. Um, so yeah, actually Forbidden 4 0 3 says I've read that markdown form is actually most ideal to feed an LLM, but I would imagine that leans more towards text again, I guess.

I, I, I'm not sure which is better. I've never really, I never really heard specifically, like if it's better to be in markdown or it's better to be in text or it's better to be in html. Um, yeah, I don't, it sounds like you haven't really either.

**Rizèl Scarlett:** Yeah, I'm not sure like, which is better or not. I guess I've had better results with either Markdown and Symantec, HTML, but I mean, I haven't like sat there and like.

Evaluated and been like, this [00:15:00] one is, you know what I mean? Like Yeah. It's just been like personal anecdote for me.

**Brian Rinaldi:** Yeah. Yeah. And I think, I think it gets to like the, the point you were making earlier where the markup helps it understand, like say the importance of certain elements, right? But ultimately, like it's about, it's about how you serve up the information, right?

It's not so much like, um. The structure is important, but it's not the most critical piece because, you know, it's, it's going to, it's gonna consume it, turn it into like tokens and spit it back in whatever format it sees fit. Um, that's clearly different. If you ask, it's the same question twice. It's gonna give you two different answers, you know, slightly.

Um, so, so it's, you know, I don't know that it. You may be talking about like fine grain differences in how it understands your content as opposed to like the con the actual meat of the content. [00:16:00]

**Rizèl Scarlett:** Yeah. Yeah. I think what's important is like making sure, like again, like you have those hierarchies and stuff like that, but then you also like are leveraging like the, the metadata and like just making sure that like the LLM knows.

Or has context about what everything is more than like, oh, I'm using this framework or this file type for, for the AI to consume it. Yeah.

**Brian Rinaldi:** Yeah. And do you, I mean, so one thing I wanna get at, like that you mentioned earlier about how humans care about the narrative, right? Like, I mean, if we're, if we're writing content, okay, so.

I guess, let me take a step back and say we have, okay, so we have this kind of drop in the, where people are not coming to the source article, so I'm like writing my blog posts or whatever it is. Um, but you know, actually people might not be reading my blog posts. People might be consuming my blog posts.

[00:17:00] Via an LLM and, but like when I'm writing, I'm focused on creating that narrative. Um, do we, do we need to just change the way, like what are your thoughts? We need to change the way we're writing because people aren't necessarily ever gonna, like, aren't always reading the article. They're reading our article regurgitated by an LLM.

**Rizèl Scarlett:** My perspective is I think we need to serve both audiences. I don't know. Maybe other people won't agree with me, right? But I think all humans are nerds for different things. Like you might be like a car nerd or I don't know, a house cleaning nerd or whatever, so maybe not everyone's clicking your link anymore and there's been a drop.

The people who are really nerding out about whatever it is, they want that deep dive. They want the, like, the story before you actually write out your recipe. So you should still write for them in mind, but still structure your content, um, in a way that an AI can quickly grab it and turn it into something [00:18:00] conversational.

So still structure it in a way that like it can be, um, I don't know what's the right word here. Q and a, like, um, for, for the AI to pull from it. So I don't think, I don't wanna, I, I think we should still keep AI in mind, but I don't want to eventually live in this world where like AI is creating. The content and consuming the content.

And then we don't have any original like stories or anything. 'cause you could tell when something was developed by AI or only created for ai, it's just kind of like dry and uses a ton of big words and you're like, what? What is, what is this?

**Brian Rinaldi:** Yeah, totally. There's, I won't name names, but they're sites. I stopped.

Going to, because it was cleared, like the content, you can spot an AI generated article very easily. And I just, I'm like, yeah, I, I don't need to read this. Um, it's not, it's not entertaining to me, like it's not fun to read. Um, [00:19:00] we do, we do actually have a bunch of questions. I'm gonna get back to the, the questions here.

Okay. So, uh, do Brian asks, do LLMs follow link image references in the text and parse those too.

**Rizèl Scarlett:** Uh, what does he, what does that mean? Sorry.

**Brian Rinaldi:** I guess he's saying like, like, so, and I think that they do, they follow links like the, the bots that, that and, and you know, the, like say chat, GPT, buy there, or, you know, all the different, they, they follow the links in your, your content and consuming all that stuff.

**Rizèl Scarlett:** Yes. I didn't know what, like li, I didn't know if like, that's like one phrase, link image reference, but I'm not, I wasn't sure of that, but yeah, they do. Typically, they'll go towards like the link and stuff like that. Is that what you're saying? Is that what Yeah. Yeah. Yeah. You

**Brian Rinaldi:** was saying link slash image. I should, I made Oh,

**Rizèl Scarlett:** okay.

Yes. Sorry for the confusing. Yeah, they typically do. Okay. So from what I learned is [00:20:00] like an L similar to like SEO. The, the LLM will still like grab the top ranking. Um. Top ranking results and then it will like quickly like grab in important information from there, if there's A-T-L-D-R or a quick summary at like at the top or something like that, it'll grab that and bring that information to you so it does follow them.

**Brian Rinaldi:** Okay. Uh, let's see. Sarah asks, have you come across any. Content writing strategies for AI that would not also be good for humans. Everything I seem to find seems to be standard docs practices that we've been doing as tech writers.

**Rizèl Scarlett:** Okay. Wait, can you break that? The question down for me are is

**Brian Rinaldi:** basically, yeah, basically she's asking like, is there a reason you would want to, to write specifically for AI that would not necessarily be like follow best practices for writing for humans?

Um, like. Is [00:21:00] is there So far she's saying all the, all the things that, like how to write for AI is just use best practices we would use for, for writing for people anyway.

**Rizèl Scarlett:** Hmm. I think, I think I would agree with you, Sarah. I've come across that I think that, um, the. And I think this goes back to what I was saying a little bit earlier, right?

Like. These are just things that like we should be doing anyways. Um, and they kind of just like enhance the experience or basically remind us like, oh, these are something that we should be doing for, for humans. I think if I'm answering this correctly, right, you were asking like, is is there anything differentiating?

From like how we write for humans versus ai, I think those are still good PR best practices, whether we're like doing the hierarchical stuff or making sure we're clear using natural language, like those are all [00:22:00] stuff we should be doing anyways. But um, I think it's just almost like a good reminder that it will help the human and the ai.

I hope I understood. Is one thing I wanna bring up though, that like maybe people don't know about, um, is there's this thing that I recently discovered called MCP ui, so I know everybody's like familiar with MCP. And the idea is that like we've moved into, like as we can see, everybody's using like plain text for AI agents and um, it's like all black and white.

And this is like the new interface. Like people have like. Predicted, like maybe this is the death of the browser, which is really sad because like web interactivity was so fun like back in the day. Um, so they've implemented, or, um, two guys who used to work at Shopify have implemented this add-on, on top of MCP, which basically allows you to bring in interactive components to your AI agent.

So, um, [00:23:00] some of the demos they've done, I've done like my own thing, which was. Has been kind of cool, but some of the demos they've done is like, let's say you ask the AI agent like, oh, I wanna buy a shirt or something like that. Rather than it just coming back to you with plain text, it can bring in like an iframe with a, like a shopping cart and you could press add to cart or whatever.

Um, or it can bring back, it's either like pulling the iframe from like an external URL or you typing in your own HTML for it and you can interact with the AI agent. Through that. So it's not just responding to you in text, it's responding to you in like the form of a ui, if that makes sense. And I've done it for myself.

It's been kind of cool. I wanted to like, since I'm a new tech lead, I wanted to like see like where my team was with like getting their work done. And like the GitHub projects board, it's not like friendly for me to look at. I want to see it in more of a calendar view. So I'll like ask. I, I, I like, made this MCP server and then [00:24:00] I asked Goose like, oh, how, um, who has the least amount of work?

Or what does the workload look like between my team and stuff like that. And then it'll like come back with like a bar graph or charts and all that. And I think that's like a cool new way that like we can be also thinking about framing our content so that like AI agents can consume that and bring it back or regurgitate it to users.

**Brian Rinaldi:** In fact, we saw a little bit of that like earlier today with like the search component that, that um, um, that was getting built in one of the earlier presentations Joel Vardy was building and we're like. He was very sending back search results, but if you ask a specific question, it would actually send you back a form to fill out.

Mm-hmm. And things like that. Right. Like, so I agree with you. It gets back to a point i i I was trying to make earlier, which is like, I, content isn't [00:25:00] just long form text, right? Like content is also like things like, oh, an interactive like calendar, right. Um, that. That shows you what your team members are doing and things like that.

Um, and so like it's, you know, I think a lot of times we think of like the a, a agents just consuming blog posts and docs and things like that, but they're all, I mean, there's, there's all kinds of content that isn't just long form text. Yeah, that's, yeah, really good point. And, and then how do you serve that back up?

Because like if you're in a chat text base, like. Chat. Like say with chat GBT, it's gotta be good at like, Hey, I need to serve you up a, a component to actually interact with this type of content that isn't tech easily converted to text-based.

**Rizèl Scarlett:** Yeah, exactly. But yeah, happy to ask some more questions too. I just remembered, I'm like, wait, I did wanna bring that up.

But that's cool that like someone else was showing [00:26:00] that off in a, in a past session.

**Brian Rinaldi:** Yeah, it wasn't M-C-P-U-I specifically. I mean, it was, it was in the Algolia search results kind of thing that he was building in next gs, but, but I think it's very similar, similar, basically similar concept. Um, you know.

And do you, I mean, do you think. Like ultimately do you think are, what's your view in terms of the future of things like MCP? Because I think right now, like it's like, oh hey, I integrate this in my coding tool and it helps me with code. But like it does a lot more like, can you tell people like, like a little bit more about, say how you've like what MCP is.

I'm sure some people in the audience may not know and then like. Do you see it as a way of consuming content in, in the, in interacting with, with, uh, with the LLM in the long run from like a content perspective? Hmm.

**Rizèl Scarlett:** Okay. So MCP stands for model context Protocol. And this is [00:27:00] basically a standard or shared agreement of how AI agents can connect to real world applications.

'cause without, without it, at this point in time, without it, you'll have to make like your own custom integrations each time. When we first built Goose, that's what we were doing and it was like a pain. In the butt to be like, okay, I wanna connect Goose to Jira. And then you have to like create your own like thing.

And they, you can only do it in Python. I didn't know Python. It was so annoying. So, um, luckily like Block went over to Philanthropic and they were like, yo, we wanna make a standard and Philanthropics like, were already making that. So like Block was able to like, give some of their like, um. Ideas or input into that along with other companies.

So that's MCP, basically it's just a connector to real world apps. Uh, do I see it as a way to, I think you said something about like

**Brian Rinaldi:** interact with content. Like, 'cause right now I think a lot of like MCP is like, oh, I'm use it for [00:28:00] in, in coding it, most examples I see are around like generating code. But do you see that being more like, I might actually consume content that.

Via MCP servers.

**Rizèl Scarlett:** I use it for everything I know. Really? Yeah. I don't just use it for code. I know like, because you could just make it for anything you want. I know Nick Taylor made like a dev two MCP server. That's an example. Of like pulling in or using an MCP server to pull in like content. Like you can be like, Hey, how's this going?

Or, I know I've seen people use a Reddit MCP server and they're like, tell me like the latest on Reddit. So you could really like, have it if there's an MCP server for it, or if you wanna make one, you can really have it. Just pull in like the latest news for the day or whatever it is. You want to interact with content for you.

I, I also know there's like. I guess if we wanna talk about like documentation, there's, I think it's [00:29:00] called get MCP, and it basically turns your. Documentation, I mean, turns your, your app into like documents, like a documentation type of MCP server and you can just ask it like, how does Goose work? How does local stack work?

What's happening here? So I guess that's a code example, but it's still like more content based where it's pulling stuff from like maybe your documentation site or your code base and helping you or helping the user figure out how to use it. There's just everything I've seen like. A blender, MCP server where people like, they don't know how to like make those 3D assets and like your MCP client just makes it for you.

So it's, I think, at least for me, I tend to do more code examples out in public so people aren't like, oh, you are just using AI for fun. Like, no, I'm using it for code, but I often use it for non code things.

**Brian Rinaldi:** Yeah, that, you know. [00:30:00] Sarah mentioned actually that Astro has a, like, and I, I remember that Astro has an MCP server for the docs.

Like, you know, I know like a, I've interacted with the AWS for consuming docs as well, but I always like, again, I've, my, my experience with MCP both building and using has always been like inside my code editor and not so much like in, in chat. So like I hadn't really thought of it as a. Con like content consumption in, in that kind of non, like just, oh, oh, tell me what's on Reddit kind of thing.

Um, you know, so that, that's really interesting. So now, so now we gotta like, think of that too in the way, like, do we, so, so do you think like the way you would normally have in the past maybe provided the content API Do you think it's like, if I would've. Provided an an API to like access my content, should I have now have an MCP server to access that content?

Do you think that's [00:31:00] kind of becoming a necessity?

**Rizèl Scarlett:** I think so, I think it is becoming a necessity. I don't know if MCP will be the defacto thing for the future years. I think it's the d like it's the starter and I see so many companies adopting it, like Apple is adopting it for their operating system. Um, they, like, I seen an article about that.

So I think if you have. Like an application or an API, I think is valuable to have an MCP server for it, an official one. 'cause probably someone in the community made one for your app anyways, so you can make an official one and allow people to access it through their area, their AI agents.

**Brian Rinaldi:** Now if I want to say, take my content and make it accessible via MCP, do I have to then create my own rag pipeline to train off of whatever my content is and, or, or is there another way, like an easy way [00:32:00] that I could just, you know, take my existing content and not have to, you know, like rework it in order to make it work?

**Rizèl Scarlett:** I don't think you have to do the rag way. I mean, I think that's if you prefer that, but I know, uh, my boss, Angie Jones, she made a MCP server for our GOOSE documentation, and I don't think she did any of that. I think she just set up a couple of tool calls that probably said like, give me like information on this.

Read this part, create this, whatever, like the tool calls needed to be. And then basically that's it. A user can ask that. It'll have the tool descriptions, and then you'll have like the tool calls that are actually like executing and handling all that. So I think brag is if you wanna like go hard, but you don't need all that.

**Brian Rinaldi:** Okay. Yeah. Um, let me see. I'm gonna check if we've got more questions. Uh oh. Somebody didn't, didn't know Blender has an CP, sir. I [00:33:00] didn't know either. I'm gonna be honest. Like, I, I'm, I, I feel like I'm a bit of a newbie with MCP even though like, 'cause um, I haven't, I've used it, but not to the extent I feel like there's a whole world of like, stuff that I'm missing out on with MCP that like, 'cause I haven't really.

Integrated that heavily. Yeah. So what, yeah, what's, what are your favorite FCP servers?

**Rizèl Scarlett:** Ooh, okay. The Chrome, Chrome dev tools just came out with one. I know, as you said, favorite, but I just tried it yesterday and it was pretty cool because it. Can, uh, basically debug my applications. Like I can be like, oh, I'm on local host 3000.

Or I can be on, like, I'm on, I don't know, goose do, I mean that's a bad example, like youtube.com, I don't know. And then it will, I'll be like, oh, use the Chrome dev tools, like CP server to like figure out why like. The performance is slow or whatever, and it could tell me, and [00:34:00] then it could like, solve it. I thought that was great.

I'm like, amazing. I'm never using my brain again. Just kidding. I will. But it was pretty cool. Um, let me see. I'm gonna go to my extension list right now just to see. Um, because, uh, block, we build a lot of our own MCP servers in-house. Mm-hmm. Um, for like, security purposes. So let me just make sure that I have, um, I like playwright.

I like, um, oh, I like the n Netlify MCP server because now I essentially just say like, deploy it to here instead of like going into the, the application or console and having it deploy. There's literally so many that like, I don't know why I'm not thinking of them right now, but like anything you think of, there's, there's probably an MCP server for it.

Um, let me see. Hold on. I wanna get you guys good ones. But while, while I think of them, you can ask me more questions [00:35:00] if you wanted

**Brian Rinaldi:** Ooh, just checking through the chat here. Oh, go. Go forward.

**Rizèl Scarlett:** Sorry. I like it. There's a L 11 labs MCP server, so you can do like your whole like text to voice speech thing. I think that one's cool.

Um, and then I also like this one, what is it called? Container use. It basically allows you to like put your AI agents in, uh, like a container and allow them to like. Work in isolation and in parallel. And that allows me to basically like test out different versions of things. Like, this is a really simplified example, but if I'm like, how does this website look blue versus red?

I can just have it like, make two different containers and I just see the example side by side and it saves me a little bit of time. That's it.

**Brian Rinaldi:** That's really cool. We're actually, we're building one like, uh, my team, it's building one. Um. And part of it was, a lot of the stuff we do is like A-W-S-C-L-I, and I found like [00:36:00] A-W-S-C-L-I like.

It's powerful. Like, I forget, I mean, it's like, you know, Adrian, you know, uh, you know, Lambda dash, dash this, dash dash that. Then you have to like, you know, let me format the payload correctly. Let me do this. Like, and there's so many flags and things and I never remember honestly. Um, so I was like, can we just make it so like, if you're like, just.

Do kind of like netlify, deploy this to there. Okay. You know, create me a Lambda name this. Now I'll send the, you know, trigger this lambda. Like, and I think interacting in that kind of straight text way is, is really how it's much more natural than, at least for me, like then remembering a ton of command line flags.

**Rizèl Scarlett:** Yeah. It's powerful because it's like, I think as developers sometimes we like pride ourselves in like, oh, we remembered all this exact syntax. But I'm like, I think more the [00:37:00] point is like, you know that this exists and how to do it, but you, you don't re like, it's okay if you don't remember that you had to do two dashes or you know, or five, whatever.

Yeah. I think, I think natural language method is, is great.

**Brian Rinaldi:** Yeah. Yeah. I think it is. It, you know, and, and even if you think about like, from a content standpoint, like I think our documentation, we have like a, um, an AI that, that actually it's, it's trained on our. Specifically on the docs. One of the nice things I love about, it's like it, we pay for a service that does this, but like one of the nice things I love about it is that it does not answer questions.

Like if it's not, if it finds some, doesn't find the details in the docs, it's like, I don't know, I don't have an answer for that. You know? 'cause one of the troubles is with is just when it guesses and it guesses wrong, you know? Um, yeah.

**Rizèl Scarlett:** When it hallucinates or says, yeah, you're absolutely right. And you're like, but I'm not.

[00:38:00] Absolutely right.

**Brian Rinaldi:** Yeah. Yeah. But it makes you feel good. That's, that's the whole point. It's not really about doing No. Um, but yeah, it, I, I saw something, an article the other day that basically like, it's, that's, um, I was it, was it Anthropic or one of the companies had, like, had had done a bunch of research and said, it's just.

Kind of eliminating that. Guessing is where it tends to go wrong. Um, is that's what hallucinations is. Just it was trained. They built the, the tools to always try and have an answer. And so when it doesn't, it just guesses. Um, and that's where like these, these hallucinations come from. Um, you know. So Sarah has one.

I got um, couple. We think we have just a few minutes and I'm gonna try and get to the last couple questions. Sarah, thank you so much for all your questions. Um, Sarah asks, how do you find support has changed? Maybe projects have fewer questions, but also [00:39:00] more very confused People who've been told certain APIs exist, that sound totally reasonable, but don't.

**Rizèl Scarlett:** Interesting. Okay. So we do, in our documentation we have like inep, which like provides like AI responses. Um, so I think sometimes we do get a few confused people or sometimes people, like, they might ask Goose like, how does this part work? But, um, they may not have asked it well, and then Goose gives like a false answer.

So I have seen that a couple times, but it hasn't been enough. To bother me, but maybe that's 'cause like my team itself, we do such good, like, uh, like technical support. So I'm not, I, I've seen it, but it hasn't been like, oh man, this is awful for me.

**Brian Rinaldi:** Yeah. Yeah. I mean, I think, I wonder, we haven't seen it either internally.

But I, I'd be curious to ask my, our support team [00:40:00] if they've gotten like, questions that are wrong because AI is giving the wrong guidance. It's like, I, I know myself, for instance, like I use, uh, in cursor, like oftentimes, specifically when I'm trying to build stuff in AWS, it gives me apps stuff that looks completely right.

But is absolutely wrong. It's like, oh, that's, that looks correct to me. And then I'm like, oh, wait, no, that, that doesn't, that you know, doesn't exist in CDK. Like, what is it? It's making this up. Um, so I wonder if they're getting, people are getting support, teams are getting more questions about that. Um.

Sarah has one last question, and I think we're running outta time here. Um, do you have strategies for taking those experiences, for figuring out what LLMs get wrong about your content and go back and revise?

**Rizèl Scarlett:** Hmm, that's a good question. I wish I had like. Real [00:41:00] strategies. I, I think it's more like right now it's just reactive for us.

Like, oh, wow, we didn't realize that people are getting confused in how to do X, Y, Z. Let's write like a more like specific documenta, like fo like. Sorry, a more specific doc that like really explicitly outlines how to do this so people don't get confused. I think what has been happening, like we have AI all over internally and externally, and sometimes we have this bot called QAI, that'll like pull the wrong information.

But once we update the documentation to like be more explicit, it might pull it like two or three times the wrong way and then after that it gets it right. So it's not really like a. Tried and true strategy with like really proper formal formality. But that's just what, what's been working for us.

**Brian Rinaldi:** Yeah. I think like the, I'd say in my own experience, like adding to that is like we, so the tool I was mentioning [00:42:00] we use for docs is called capa.

That does like, it's basically like. Does the AI answers. And one of the, the thing I like about it that like, is the part I think we couldn't build, 'cause we could build a rag and like get, have it do this, you know, answers whatever, but like, or whatever the solution is now if it's not a rag. Um, but we had built something like that, but then we ended up choosing this because it, it does actually tell you like, here's questions that.

I couldn't answer, here's questions that I was unsure of the answer. Like, here's, you know, what, which ones got thumbs down and things like that. And I think, so just that analytics part of it and being able to say like, to see what questions people were getting and were getting either or answers or it couldn't answer based on the content that we had helped us to guide where we might have gaps that we can fill.

Um. So like, I think however, you know, but unfortunately if, if you're doing even [00:43:00] like say an MCP server or something like that, I don't necessarily have that data. This one is like all self-contained in our website so I can get that data. Um, but you know, I don't, I don't know what questions people are asking via chat, TBT, but I think if you could get access to that and figure out like, okay, here's where it's going wrong.

Um. Here's where, here's where their questions are being answered incorrectly. 'cause it's consuming my content and serving up the wrong answer. Um, whether it's a tool like KAA or something like that, it, it's helpful.

**Rizèl Scarlett:** That's interesting. I think I'm gonna try to implement that then I think I could even do it with like a MCP server that we have.

Like I like that. Yeah. You think so? I'm stuck on this. Yeah. That's good.

**Brian Rinaldi:** Yeah. Yeah. I mean, you just have to have that data otherwise like Yeah. It's without it. You're flying blind anyway. You don't know where they went wrong. 'cause you don't know what answer it gave so, or, or what question they even asked and where it went wrong.

So, [00:44:00] um, well. This was really fun conversation. I know it's like a broad topic, but in, in a very complex topic, and obviously lots of people had lots of questions about it, uh, and lots of thoughts about how to best structure content to be consumed by LLMs. I didn't know that would be the most, um, the hottest topic.

I, and unfortunately, Hmm. I don't know. You know, I don't, I don't really know. Um, but. Um, yeah, I really appreciate the conversation. It's been, it's been great. Always good seeing you Elle. Um, and, and thanks for, for being here.

**Rizèl Scarlett:** Great. Thank you for having me.
