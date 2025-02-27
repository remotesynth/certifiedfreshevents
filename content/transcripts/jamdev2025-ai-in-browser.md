---
_build:
  list: false
  render: never
---

[00:00:00] Hello

and welcome to AI in the browser with Gemini Nano. I am Raymond Camden, a developer evangelist for whoever wants to hire. If you're hiring, let me know. Please reach out. I put all of my contact information on this slide. Definitely reach out if you have a job or if you have a question about the presentation, that's fine as well.

But I love to get questions. So definitely reach out if you want to know more about what I'm talking about today. Also, the slide deck and the demos, well, the one demo, uh, can be found in this GitHub repository right here. If you're watching this while I'm [00:01:00] recorded, you can just pause and copy the URL. Uh, but you'll find this deck amongst others and all of my example code for.

Uh, working with AI. So, I want to start off with just a quick assumption about, uh, what I think you know, what I hope you know. Uh, first off, I am not going to explain what Gen AI is again. You know, you probably have sit in about 20 of those presentations. So I assume you know at a high level, um, and obviously there's going to be a little bit of JavaScript because we're talking about the browser here.

But luckily you won't have to be an expert. I'm not an expert, I'll be honest there. And speaking of not being an expert, I've been working with Gen AI for about a year. I feel like I probably have Maybe another nine or ten more years to go before I feel really comfortable with this and that is Okay, because we can still get things done and [00:02:00] be dangerous in a great way So TLDR for what I'm talking about today Chrome is bringing Gen AI to the web, which is great because everyone loves that.

Uh, it uses the nano model, which is small, relatively speaking, I'll say that much. Uh, this is currently in what's called a early preview, uh, which means there is a sign up form. I'll talk about that in a minute. In terms of getting access to some of the docs. It's actually in the Chrome Dev, uh, and Canary browsers already.

Uh, but to get access to some of the stuff, you do need to go through a form once and that's okay. Uh, it's also task focused, not general purpose. There is an API to have just a general chat, like why is sky blue and why does it involve cats? That exists, but you'll see in the docs, it's not even really talked about because that's not really what [00:03:00] Uh, Chrome, if I could speak for them, what they see as a purpose for this instead, uh, they focus more on task based APIs.

Um, outside of actually getting the model, this is 100 percent offline and 100 percent just on your device. So no API calls, you can keep everything on there. So if you're worried about privacy, et cetera, if you're building a offline, uh, application, this will still work. Again, assuming that you get the model at least once.

So, I do have a link to the docs in the slide deck where you can read more. In terms of enabling, like I said, there is this form that you have to fill out the docs that are linked to that's all public. There's a few more docs that go a bit deeper into, um, you know, how to set things up, go through the form, sign up once.

This also gives you access to a forum where you can talk about stuff. [00:04:00] Uh, I have found them to be incredibly quick to get people in here. Also incredibly quick to respond to questions as well. Uh, you will then do some flags and things and so forth and then kind of wave some magic. Uh, this feature has been a little bit kind of wonky for me at times where I see it working and then I see it not working and then I see it working.

Uh, it feels a little bit flaky now. I am incredibly excited about this. Uh, I think once it gets a little bit more stable, it's going to be awesome. I'll just share from my personal experience, like the initial onboarding sometimes, uh, is a little bit wonky. Luckily, I only have 10 minutes. We're gonna skip all that in terms of APIs and features.

It has translation. Uh, it has a language detector. It has a summarizer, also a writer, and rewriter. The rewriter is especially interesting because it could do things like, I have a block of text that's a bit too long. Can you just make it [00:05:00] shorter? It does a really good job at it. There's also streaming feature, so you, you can provide, uh, responses back to people more quickly.

It does support sessions as well, so you can use something like local storage to save the chat between the. Uh, the user and a particular agent and then reload that when they come back to your site. Uh, support system instructions. The big thing not supported now is anything multimodal. So you can't, for example, give it a PDF and ask it to parse it.

Uh, you can't ask it to look at an image and tell you what it is or generate an image. Uh, be willing to bet that may come in the future, but it's not here now. So. Again, just a few minutes here. Let's look at a quick example so you can see like how much code is needed to actually use this. And this, hopefully you get as excited about this as I am.

So you begin by simply checking to see if it is available. In this code sample, I'm simply returning if it's not [00:06:00] there. My thinking is that, uh, this AI feature in general is going to be really great for progressive enhancement. So I can see cases where you simply turn on new features based on if the user supports this or not.

So in this case, I'm checking specifically for the Summarizer API. Now, if they have that, there's a second check that you have to do where you basically ask if it's available and you can see the line of code there where I'm calling that it returns three things, no, after download or readily after download means it needs to actually fetch the model and you could have event listeners that tie into that if you want, uh, I'm going to skip that, pretend it's already downloaded, uh, but you can provide that type of kind of real time Hey, I have this cool feature.

Not quite ready yet. It'll be ready in a minute or so, and I'll let you know. Readily is the string that you want to look for to see that it's really, really ready. And [00:07:00] yes, readily. I'm not a fan of that string, but it is what it is. You pick your battles, right? So, once you have confirmed that it's actually ready to go, it's been downloaded, the model's there, you can then create a Summarizer object.

And you can see that's one line of code. There are multiple options in terms of how you want to use it. Uh, key points will be essentially bullet points, TLDR, teaser, headline, etc. You can go between markdown and plain text and different lengths and those lengths will impact different, uh, types in different ways.

So for example, short for key points may only be like three bullet points whereas long may be six. And for other different types of responses, it will change the response. So you have options. All right, so once you've done that, then all you have to do is pass it some data and you will get a summary back.[00:08:00]

This will take a couple of seconds and you'll see me run an example in a moment here. Uh, but you can then, uh, provide that to the user. So let's look at an example here. And this is in my repository. Um, I did wrap their simple code with some Alpine JS code to make this nice demo. I have a block of text from my blog that I'm going to copy and paste in here.

I think I got into the screen a little bit, but that's alright. So this is from a recent blog post and it's about four or five paragraphs. I'm going to ask Chrome to summarize. It's working and There you see it summarized it down to three bullet points. I know what I wrote most of the time, uh, and I could say that this is a valid summary of what I wrote.

And you can also see it was really darn quick, about two seconds [00:09:00] or so. Now, I didn't give it the entire blog post, uh, but still relatively quick. Again, all on device, no API calls. So with the example already, uh, there is obviously more, you can look at the docs again. I've linked to this in the slide deck and I have a set of articles on my blog that talk about, uh, Gemini in general, as well as some of the browser based things.

I will say the API has changed over the last couple of months. So some of my older blog posts may not quite work yet. But that being said, I'm really, really excited about this because, again, I think the idea of progressively enhancing your web app to include on device AI skills could be incredibly useful.

And you saw that there's all these different task based things that you could start adding into your applications now. And, uh, you know, check it out. Let me know [00:10:00] what you think. Let me know what you build and I hope you would enjoy it as much as I have.
