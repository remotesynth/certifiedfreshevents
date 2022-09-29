---
_build:
  list: false
  render: never
---

**Raymond Camden:** [00:00:00] I will try to make this topic as exciting as possible. And one of the ways that I have done that is by giving you terribly exciting slides. So we started off with working with documents on the web, also known as. Doing cool stuff. We have documents in case you were curious. You can do animated gys in a background and you totally should on all of your websites.

Sues has already talked about who I am. I won't go over with that again. I will say if you follow me on Twitter which you should totally do because I only tweet super serious, business critical, important stuff. My dms are open, so if you have any questions about what I'm showing today or any questions about web development about adoption, about Star Wars, about cats, [00:01:00] definitely reach out.

A lot of those 6,000 posts that she mentioned that came from people just randomly asking me questions. I enjoy digging into and, making things work with code. So I absolutely don't mind your question. If I'm busy, I'll tell you and I'll get back to you what I can but absolutely reach out if you have questions.

When I talk about document services of these from, my, my perspective, it really is gonna come down to two main buckets. And that is viewing. PDFs on the web in your website. And for us, this will be a free service. I'd like to be upfront and honest and direct about when things cost money.

The other bucket is actually working with PDFs and other documents, so any type of operation you could think of in terms of creating or breaking apart or merging or doing whatever with pdf. That's gonna be the other bucket that I'll be [00:02:00] talking about today. That part is not free. I'll talk a bit more about costs and stuff like that later.

But again, I'd like to be upper enough about, what you could play with and what is going to cost some money at least later on down the road. So let's start off by talking about Adobe PDF and Bed. Now, let me quickly say that we have official marketing branded names for everything.

Obviously we're Adobe. I'm really bad at branding, so I sometimes use the imprecise marketing term. Hopefully any of my coworkers watching this will forgive me. But I did try my best, just so you know. I tried to be, I tried very hard to be. On brand as much as possible. So yes, Adobe PDF in bed, That's the official name.

I probably won't say Adobe too many more times after this. What this is a JavaScript. For viewing PDFs on the web as browsers can definitely render PDFs but it is normally a full pain type experience. So if you [00:03:00] link to a PDF from your website the user will absolutely be able to view it in the pdf.

In their browser, but it's gonna take over the entire screen. So none of your navigation, none of that is going to be there to get the user back or help direct them elsewhere. You also don't get any kind of idea about how people are actually looking at those PDFs. So our. PDF in bed will give you much more control over that experience.

We have different types of ways to view PDFs. Not every PDF is the same, so we provide different ways to work with them. And also we have a lot of hooks into the actual document to allow you to modify things and really customize the experience for your site. And again, this is.

All right, so as an example I am using Reveal JS as a html. Presentation framework. I actually really do PowerPoint, but I do so many demos on the web. I like [00:04:00] having my slide deck on the web as well. But this is an example of the PDF embedded in my HTML site. This should look very similar to the typical Acrobat experience, so I can, use my mouse wheel.

I can scroll down and see Dedia. I have annotation tools, so like I love that kitty. So I'm just gonna make a marker to it because it's so cool. I'm even gonna add a comment. This cat rocks and as I'm typing, I am li I, I'm like holding my arm up so my cat won't bite me. So this cat rocks. So one of my lap, not so much.

But anyway again, very much like an acrobat type experience. I can do zoom in I can do search again, and all of this is within my HTML website, which in this case is just my slide deck. And when I'm done with this or if I just want a copy of it, I can absolutely just click save and it downloads to my system.

And by the way it does [00:05:00] download, Actually let me open this. I'll show you . Of course it opened up with my browser. But it does actually save with the annotations in there. So all the things I did with the drawing and all that, that was preserved in my copy. So how this is done, you know how you actually use this.

So step one, you get a key. So you do that by going to your website you click on the get free credentials, a nice blue button there, and we will walk you through doing that. By the way, we also have a developer ish console where later on if you need to create more keys, And work with your projects that is where you would go.

But when you're first signing up, when you're first testing it, you can literally just click there and we walk you through creating the credentials. Keys are host specific, and that is super important, if you're working on local hosts, you will need a key for local hosts. If you're sending your final result to [00:06:00] raymond camden.com, then you will need a key for Raymond camden.com.

I can say that when you specify your host, you can do just raymond camden.com, and that means do dot and dev dot, et cetera will work. So if I'm running a local copy of Raymond Camden dot. I can set up my host files such that dev dot raymond camden.com goes to local host, and then use the same key in dev and production, or I can use environment variables, but just keep in mind that you do want to think about where you'll be testing and where you'll be using this in production.

So you then load the library and that is you copying and ing the this script tag into your code. And that is a URL that points to our library to make all this fun stuff work. Once you've done that, before you can start using the pdf n bed. You do have to wait for the library to load. If you [00:07:00] look at our documentation, and this is the example we.

It's a simple event listener listening for that particular event name. I won't read it off screen cuz it's a little bit long. And basically when that event fires you then do your stuff. The issue that I ran into this and this is perfectly valid code, but the first time I tested this, I was working with VJs.

What was happening is that the library was loading before view was ready, and it wasn't always consistent for me. And what I discovered is that you can also check for a particular window variable, and in this case Adobe, dc and basically write code like you see on screen here where I'm basically. If the variable is created, that means a library is loaded and ready to go.

Go ahead and run my code to render the pdf, otherwise add the event listener. And that's gonna also fire the same function when done. I almost always recommend using code [00:08:00] that looks like this. So once you've done that, you then initialize and load the pdf. And what does that look? It's basically two steps.

You create an Adobe DC view the object, you pass in your key and you tell it the ID value of a diviv somewhere on your page. So if you wanna control the heightened width of diviv the layout, right column, lip column, whatever you do that and vanilla css like you would usually but the library does need to know what that particular diviv.

After that, you then run the preview file method on that particular object. You tell it the location of your PDF and you tell it the file name. And the file name is really just used to show the the title on screen. By the way, you don't have to use a, you can also use a file promise or a file reader promise.

So if you wanted to support something where you want a user to upload a pdf, [00:09:00] And you wanna render that on screen, you can support that version as well. As an example of this, I'll show you in the browser. This is me using all of my design skills, picking that lovely green. But I put some major signal on top.

I put some major signal bottom and I put the PDF in the middle. I could absolutely make that PDF a bit bigger. I could make that look a bit nicer. Excuse me. Look at bit nicer. That is on me, not Adobe. But if we look at that particular code, it's pretty much. Exactly what I showed before. Let me scroll this over a little bit.

You can see how load the library you can see how I'm using that code that I suggested where I check for window, Adobe DC or the particular event, the fire. And then I have my code. And this is pretty much exactly what you just saw. And if I wanted to make that bigger like PDF display, I go into my CSS and do whatever I want.[00:10:00]

So that is like the vanilla super basic version of it. You can absolutely change things up a bit. So for example you can change it so that you see one page at a time only. You could have it where it's one page but allows you to scroll, and that's the default view. We call that full window. We have an inline mode, which will take the PDF and stretch it all the way out.

Don't do that on a hundred page PDF unless you want a really long HTML page. And then we also have a light box, which will do a model window. And all of this is done via just, modifying your code a little bit. All I've done here is change preview file. To pass a second argument where I pass some options in there.

In this case, it's the embed mode and I'm specifying what I want. So this will make a bit more sense if we look at it. So again, this is the default called full window, and it's not, the entire browser window, but[00:11:00] I like to think of it as fully in the diviv that contains. See there's like a streaming PDF view here where I can just scroll and scroll.

If you compare that to size container, and you can see it's a little bit smaller. And again, I could make this div shaped a bit nicer, but it's one page at a time and I can click and go back and forth to different pages. Inline is the one where I've said it stretches out and you could see it did that as it loaded.

So now my webpage is really long. And then light box will be the modal version. And you could see it popped up like that. And I have maybe a little bit harder to see it, but I have a little close here that gets rid of Imal window. I'm not a fan of this particular version of my demo. I wanna show you this code pin I have.

Instead, this is a bit more realistic where I'm not showing it on page load. Instead I have a button that will render the pdf, and if I make this a bit [00:12:00] bigger, it can click and there you go. And I don't think I have. I was gonna say I definitely have this on my code pin my slide deck, the entire thing.

I is up on a GitHub repository. I think I actually forgot to include that link in the slide deck. But when I'm at my very end, I'll pop over on GitHub and show you that url if you wanna grab the slides and then grab the demos.

So that is just customizing the view. We also allow for a lot more if you could do things like modify what's gonna show in the ui, doing things like turning off print and save. And to be clear, you're still rendering a PDF in the browser. Somebody could still take a screenshot. But if you want to at least stop partially people doing that, you can turn off and on those buttons, if you don't want people adding annotation to the comments, you can also do that.

And we have a lot of docs that go [00:13:00] really deep into all the things that you can modify. I have an example and code here. Basically all I'm doing is turning off download, turning off print, turning off, annotation, and turning off the left hand panel. By the way, that's where you would normally see things like pages and stuff like that, but it's a real kind of simple modification to the JavaScript.

If we look at an example of that, In this one I have disabled print and save. So when I click on the three dotted menu that is gone, I no longer have a left hand navigation. And I mentioned the code was easy. Let me actually show it. This is pretty much the exact same thing you saw on the slide, but.

If for some reason I wanted to allow print but not allow download I can actually just get rid of this because by default it's on, but I could also make it more explicit and set that value to true. [00:14:00] And I will pause to take a sip of water. Very dramatic Pause was so that. Is how you would modify the ui.

So again, the idea behind this really is letting you control the experience versus kind of the browser default. I'm gonna take over and just use my own particular viewer. It's also gonna be more consistent. So edges PDF viewer versus Chrome's PDF viewer versus firebox, they all have their own kind of spin on how to do things.

This will give you something consistent across all the browser. We also provide a lot of detail into the document itself. So for example, if you want to get the metadata about the PDF document, now normally, what your PDFs are, but if you are allowing people to upload, We can tell you things like how many pages, et cetera.

You also have APIs in there to change [00:15:00] to a different page, change to a particular Zoom. And what I think is interesting is you can also even do your own searches. So search is part of the experience, but if you wanted to do your own search, You can do that. And where I have found that interesting, and I have a demo of this on my blog, is I built a search engine for my PDFs in my Jan Sack site, so I can search for food and it can find it in PDFs.

When I click to take you to that document, I open up a webpage with the PDF in embed. I show the document and I use the search API to actually go into the PDF for the term that you entered. And highlight that for you. And again, that is what these APIs allow you to do. If you want to do more work with annotations.

If you want to create some, if you want to save some, we have an API for that. We also have built in integration with Adobe Analytics but we have full event support. [00:16:00] So if you don't want to use Adobe Analytics, if you want to use the analytics from a particular search engine company out in California you could use any analytics engine you want because we have the ability for you to listen into those particular events.

For example one of the demos I built was the page sorry was something that listened for a page view event. And I noticed when you had viewed all the pages in a pdf, so you know those legal terms that nobody reads, they still make you scroll to the bottom. You could do the same thing with a PDF document You could force to use or to go through all the pages, pretend that they're reading, and then notice when they viewed every single page on.

Again, this is pretty deep. We have an online sandbox which has a nicer pdf, although no cats really sad. But it shows you the different views and allows you to do, to customize things like the, I wanna see what it looks like when I [00:17:00] turn off that left hand panel. Turn off page controls, et cetera.

And what's cool is that you can also get the code directly from here. I'll also point out that you can actually let go back to customize. You can actually upload your own PDF if you want to see it in here, and then compare the different ui slash ux options. So this is online linked to from my slide deck.

And again, I will be sharing that location when I'm all done. That is all of the front end stuff and because this is a pretty particular place to switch, I am looking over at my MacBook Pro here, looking at the stream and just seeing if I see any questions yet. I'm doing it a little bit quick and I don't believe I see any questions yet.

But again, if you think of something later, if you think of something that you just want to know, absolutely, feel free [00:18:00] to reach out to me. I am here for you and again, my good hub repository will have all of these particular examples that I just showed along with the slide deck. All right.

Another dramatic follows, by the way I did kick the cat off my lap. I got tired of abiding.

So let's go to server land. Our backend integration stuff, and guess that's the official marketing term. Our stuff falls into three core services. We have SDKs for Java, node.net and Python. I will say the Python SDK only supports one of the services so far. But we do have rest APIs.

For those of you in the audience who are only here because I was a cold fusion person, you can use the Java SDK with cold fusion. There's a bit of a issue in terms [00:19:00] of getting the jars in there exactly. Come see me after come see my recorded cold fusion presentation from a couple weeks ago where I talk about it.

You can make it work yet, you just have to do a little bit of set up. And again, worse comes the worst. You switch to our rest APIs and go from there. I will say I am a no JS person, so I will be using no for everything. I absolutely love Python. It is the only language that has gotten me excited for a decade or so.

I have done a little bit with our Python SDKs. I'm still learning Python by the way. Hopefully this will show up on screen. This book, I know I'm going off topic here, I apologize. But this book, The Python Crash Course, by Eric Math. Is really darn good and I recommend it. You can see working my way slowly through it as time allows.

And as we all know, times are a bit stressful [00:20:00] right now. So as I said in the beginning this is our commercial service. It is not free. However, you can get a free trial. That free trial gives you 1000 calls. Over a six month period. Now, I don't know about you but I cannot tell you how many times I have signed up for a service because I'm totally gonna learn it.

I'm totally gonna, car by some time to play with it and, maybe write a blog post on him and then a month later I'm like, Oh my God. What? What happened? Oh, my trial looks. So you do have a nice long period of time to work with this. If for some reason you sign up and the six months expires, you can sign up again with another account or reach out to me and I can help you potentially reset things.

But again, you can absolutely do everything I'm showing here today. You can try it out, you can play with it and you have a good amount of time to do that. You will need to [00:21:00] get your credentials. And again, our website will walk you through doing that. This will not be host based but it will be two things.

It'll be adjacent file with a couple keys in there. And it will be a private do key key file that you will use for your credentials. And I'll be showing an example of this. We have multiple different ways for you to set things up. You have options, which is always a good thing. So in terms of our three backend things, We have PDF services, and I put that in quotes because everything I'm talking about today is a PDF service.

But the PDF services thing is our pocket knife, every type of tool imaginable type thing. So that's where you slice and dice and manipulate PDFs, and it's a bit different from our other two service. Document generation and PDF extract. Yes, that's all different types of services, but this is how we organize things and it makes sense.[00:22:00]

So PDF services this was known as PDF tools up till about two months or so ago. And by the way, am I the only one who, you know, since this pandemic has started, just time is so weird. Something could have been like a year ago and it feels like last week and then vice versa. So up until some point, this was officially known as PDF tools.

So if you're Googling and c PDF tools in the answer, just know that was the old marketing name for what's PDF services now. This is, like I said, the, everything related to doing stuff with PDFs. Now what I mean by stuff marketing loves me creating PDFs. So you can use office documents, you can use static and dynamic html.

But you could take this and you could create a PDF from it. You could take a PDF and go to multiple office documents or text or images. And by the way going from a PDF to image. Again [00:23:00] on my blog, if you're a JAMstack person, I have an example of creating image thumbnails from PDF documents for you to render.

In your Jams Stack site, you can combine PDFs. Oh, no, the cat is back. You can take multiple PDFs and combine them. The one this is really useful for when you're creating PDFs, let's say like from the Word document, and you need to add some kind of boiler plate legalese. To the beginning or something to the end, you can OCR pdf.

And by that what I mean is if you've ever seen a PDF that's just a scanned image, you can actually turn down to text. And if you've not seen that before, you will in about five or so minutes. You can then take pdf, but you can compress it, make it smaller, et cetera. So just make it more efficient.

You could add a password or a lot permissions like. You get insert, move, shipped around. Really this like anything that you could imagine [00:24:00] doing with a pdf, this would all fall into the PDF services bucket. Including things like splitting a pdf. Oh, I know you can't. I love you, but you're just being grouchy.

All right. I know in most of these virtual presentations, it's kids who are causing a ruckus in the background. This time. It's my cat. I'll tell you she's mad because she wants to go outside and I just don't want her outside. All right I promise no more cat interruptions. So the general flow of how you work with this, and this will be the same whether your Java, JavaScript et cetera, is that you will make a credentials object.

You will create what's called an execution context specific to your operation. We have an execution context for doing ocr, for adding a. Et cetera, you will set your input. So if I'm converting from word to pdf, that's where you set your input. You will execute and you will save your result.

All of that in, [00:25:00] real code looks a bit like this. And this is this pretty much everything. I don't have the no JS requires, but if you could see on top where I do my credentials I will show you an example of what that Js O looks. Not my credentials. Jsom. So it'll be five keys of which one of them?

Private key file. This is a path to your actual private key. This is what it looks like. And I wanna point out, I'm gonna go back to the code this block. If you don't want to use two files for your credentials you're worried about checking it into source control and stuff like that. We actually have API methods for set this key set, that key set, the third key, et cetera.

Which means that if you can use environment variables to handle all of those secure values, so I create my execution contest. In this case, I'm doing ocr. I'm gonna be pointing to a local file. I'm going to execute, and when I'm done, I'm gonna take [00:26:00] that result and I'm gonna save it as a file. I could also use it with a no JS buffer instead, but typically I want to take the result and just save it.

So I'm gonna show you an example of this in OCR example js. And this is pretty much the same thing I showed on screen. I did make it fancy and I used hipster JavaScript with as sync a weight and all that. You do not have to write your code like this. But basically I say I have an input file path a PDF that needs ocr.

And you know what, let me actually show you that in Acrobat PDFs. Nope, I didn't put it in there. I put it in demos services, pdf that needs ocr and it went to the wrong monitor. So this is that pdf and you see it's definitely readable, but if you try to copy any texts, you can't because the whole darn thing is a image.

And if I try to find something like, [00:27:00] Oh, security, which I know is there, it can't find it. Now Acrobat does actually ask me to add ocr. I wanna tell no to leave alone. Let's close it. So if I want to make that readable, I could then use the code that I showed on screen where I make credentials, I create my execution context, and then I simply run the result.

And in this case, I am returning it and saving it to output. And if we run this go on demos, by the way, to use our services, you have to have a cat background and your terminal. That's part of the license agreement. You can quote me on that. All right. Node ocr, example js. So it's gonna take my pdf, it's gonna send it to our api, it's gonna do the OCR on it, and when it's done, it's going to return it back to me.

Normally this [00:28:00] runs a little bit quicker. I made a heck of a lot quicker. I am having some slower internet today, but that's okay. It is done. And if we look at pdf, that is now ocr. , open this one up. Now we actually have, and you'll see our document. And if I actually search for security, Security, it finds it.

So a trivial example, but also really darn useful, right? Because if you're, especially if you're letting people upload documents, you know their PDFs you don't know what state it's going to be. So I think this is really handy. Pretty darn simple to use. I have also taken an example and built one in Pipe Dream.

If you follow me on my blog, you know that I am a big fan of Pipe Dream. It's a workflow service where you can essentially drag and drop almost different things together. For example I have a step that [00:29:00] says New file and Dropbox. I literally just clicked a few buttons to add integration with my Dropbox account.

I then wrote a little bit of code, which is pretty similar to what I had before using our api. And then the end result is that it takes that pdf, it adds a password to it. In this case, I'm pretty sure I hardcoded it somewhere. it goes, Ironman sucks or something. But it takes it and then it saves it right back into Dropbox.

So all of our APIs, all that stuff, it works everywhere. Microsoft Power Automate. We have great support there. Baked in you could do it in Amazon Lambda. I just wrote a blog post on doing that. And again Pie Team is one of my favorite services. It was not difficult to build it here as well. And again, I link to this from my from my presentation.

So if you wanna look at this [00:30:00] example, you can, Oh yeah, there's a password right there. Ironman sucks. So more that you can do with pdf services, again, don't forget that it used to be PDF tools. I talked about how the credential information can be passed in via methods, and actually if you go back to the pipe, dream one, you could see I read all of my credentials.

Excuse me if I'm environment variables dramatic. Pause for water.

And this is an example of creating that credentials, not using files, but instead just passing in each value via an API call. So you have that. You can also chain stuff together. So for example, I wanna do a cr, I wanna append the document to your pdf and then I wanna pass or protect it. You can absolutely chain multiple different things together.

And that maybe before we move on, that is PDF services. I'm not gonna show you anything more on that because every [00:31:00] other operation pretty much follows the exact same thing. It's, pretty much credentials. What's your execution object, What's your input? Tell me to run and then save the output.

So instead, I wanna move on now to document generation. This is a really, Like this really excites me for some reason, even though it involves Microsoft Word. What's exciting about Microsoft Word? I'm gonna show you what's exciting about it. You could take Microsoft Word and use it as a document use it as a template, and then you could take your data.

And that data could be flat files, it could be a database, it could be another API call that you make. We don't care if you take whatever data you want. You take a Word document as a. And then we output a pdf. So for example, imagine you had a billing system and every month you wanted to send bills to all your customers who owe you money.

You can design a billing invoice in Microsoft [00:32:00] Word, then write some code to hit your database ca pass that data and your Word document to our api and we'll give you custom PDFs. So you take a Microsoft Word document. You change some of the texts to tokens, and I'll show you an example to that in a minute.

You then pass it to our API and then you get a PDF out. So let me let me actually show an example first before I go any further. I have a Microsoft Word document, and this is where your client may go in and they may do their own you , they may date, do their own formatting and stuff like that.

I know this is tiny, and we make it bigger like that, and we will make this a proper title. Like this and say, I want to make you back normal-ish. I want to hire you for a [00:33:00] job and pay you x dollars a week. So you can imagine this as being a very boring, but very quick to read a job offer that you want to email to a candidate.

So if I wanna start making this dynamic, we have a Microsoft Word add in that adds UI to Microsoft Word. I clicked it right there. And what I can do is a couple different things. If my developer has some sample data for me, they can give me that data as a jsun file that I could upload. But if that data's not ready yet, I could actually all within Word, Start kind of building things from here and say, I know that I'm going to have a name for the person I wanna hire.

And it's just a string. And I will click create another. I wanna hire them for a job that's also going to be a string. And then I wanna offer them a salary that will be a. [00:34:00] and all I've done is basically told word what kind of dynamic data I'm gonna have and made three tags for me. I can then go in here and say, You know what, this is actually supposed to be a tag, supposed to be a name, and that job is also supposed to be a tag, as is your salary.

All right. Now at this point I can save this Word document. I can give it to my developer. They write code that looks very much like what I just showed you. It's a PDF services sdk. It is a credentials object. In this case, the operation's gonna be document generation. So I would tell it where my Word document is and I would give it my data and then I would get it PDF out.

But what I really is that you could actually do a lot of testing directly within. So I'm gonna go ahead and click generate document. I'm gonna sign in to Adobe and [00:35:00] you all get to see my password. No, I'm just getting my password is Ironman sucks. My password is not that.

Whew. I am so happy. I remember that I thought for sure I was gonna be a missing app. So I have signed in and what it did is it took my tags and it made some sample data. If I can go in here and if I feel comfortable enough, I could say, My name is Raymond, the Camden. My job is gonna be Cat Wrangler and my salary's gonna be 9,000 a week.

That's we darn good. Click continue. And what's happening now is that Microsoft Word is actually using our APIs. I didn't have to set up my own particular keys, it was just ready to go. I click the view document and I could actually see my output. I could even save this if I wanted. And if for some reason I [00:36:00] wanted to get fancy and say, And by the way, don't let me be fancy.

I am not good when it comes to fancy, but I like that green better. And I want to change the text a little bit. I can do that and I could click continue and let's say generate document again it does reset the values, but I'm okay. I'm, we're concerned with how this looks. So I will generate the PDF again.

Let, Its do, let it do its magic

and view the document. And I love that. I love the fact that this is approachable to non-developers. I'm working with a client, they could just take word and they could just go crazy, right? They could make it look as pretty as they want, add images and stuff like that. They could work on this.

I work on the code and honestly, my code doesn't. Once I know where to get this data, I'm done. And we could continue to iterate on Microsoft Word forever, [00:37:00] and I don't have to worry about changing code. Now, by the way, we do a lot more than just simple value replacement. So for example, I can even do conditionals, and I'm doing this all via Microsoft Word.

So I could say, Hey, if if the salary is greater than 500, I wanna write something else and that is you must be awesome, and I'm gonna talk a bit more about this code in a second, but I can now test this generate document. I'll keep salary at zero just so we can see it not show up. Again, this is integrating with the api, it's generating the document.

I click view and okay, I could see it didn't show up, which is what I. I go back, continue generate document again, and I make all the money. I make all the money. I could buy all my cat toys. Hit continue. [00:38:00] And do. Hit you document. And there's that paragraph along with conditions, we could also do looping.

So I mentioned an invoice earlier on. So if you have line items for why you're billing. You can actually create tables that dynamically grow based on the data that you're sending. So you can do a bulleted list, you can do tables, you can also do dynamic images. It gets really deep and complex.

And I love using Microsoft Word as a template language. It just. Excites me. In case you're curious, the template language is based on Jada. And if you're comfortable, obviously you could type all those codes that I kind of auto inserted via the nice UI panel. If you wanna type that by hand, you can.

There are things in here number formatting. So for example, I could add commas. I can do . I could strip off after certain number of decimal places. Jada is pretty darn complex and we [00:39:00] support a very large subset of that. So I mentioned, looping conditionals and formatting functions.

I have blog posts talking about this. If you wanna see more about that. And to be clear, your data means anything and everything. If you want to work with a database, if you have a flat file that you could read in via your. Anything at all. You can also modify the data before we send to the api.

So for example, you have data that comes from a database and an api. You wanna merge them together and do blah, blah, blah to them. That's fine. Just once you're done, once you've made your data the way you want it, you give it to us, you give us your Word document, we give you a beautiful pdf. So I did show that demo.

We have a bunch of examples. On our site and they all look a lot nicer than what I did, but definitely more business oriented. You could see sales agreements, invoices, not a cap two, [00:40:00] be found all serious business time type stuff. We also have a online tool that basically lets you take these and put your own data and see how they look.

It's like an online sandbox that you can use to play. So that's document generation. Like I said I find it incredibly exciting. Maybe I'm a nerd. There's a small chance of that. I wanna talk about the last API and that is the Extract api. This is powered by AI and machine learning cuz everything now is and Adobe Sensei.

And it returns incredibly detailed data about your PDF documents. Like I, I've known for a long time that PDFs were pretty complex. I am learning just how darn complex they can be. The Extract API provides every single bit of data imaginable about that. It can also return images from your pdf. So if you just want to suck out those images [00:41:00] and do stuff with them, you can.

and it could even take tables and give you pictures or CSV or Excel files from them. So if you look at our blog, I wrote up a demo a couple weeks ago where I imagined a scientific journal that HA has PDFs of their old journals. And in those PDFs are tables of data. I actually built the demo where I used.

To get the tables out as csv, I pared that data and then I ran reports on 20 years of PDFs of data to give you an aggregate view of the information contained within all those documents and extract is how I did it. So the code is gonna look pretty similar to everything else. This is all using one sdk, so it's no big surprise there.

But all I'm doing is I'm loading sdk and then I'm creating my credentials. And again, execution context.[00:42:00] It does get a bit complex. Let me close this. When you begin telling it what to extract, so for example, I'm asking for texts, I'm asking for tables, and I'm telling it to extract those as pictures and tables of data.

I'm asking for a CSV format, so this part's a bit complex, but pretty much everything else is the exact same. I'm pointing to a local PDF I'm executing and I'm saving it because of the level of data return. It is going to be a zip file of everything in there if I run this.

We'll see do what it does and it looks pretty similar. Similar to the other operations. Good chance for me to take a sip of water

and it's done. It's saved to an output dot sip. What that looks like, [00:43:00] and I've already extracted it and I apologize. This is a little bit small. Let me change to. Large icons, extra large icons. So you get a Js O file. I'm gonna show that in a moment. And then I had asked for the tables to be exported and I asked for both pictures and CSV files.

So I have a picture of my table and let me bring it over here. And I also have a CSV version of that. And you can see it's just the same data.

Now what that JS O looks like. I told you it was complex. It is quite complex. This is one PDF and it is I will say the js o result is gonna be all munched together. No line breaks. I went ahead and ran a format and visual studio code on this, but it is, [00:44:00] Shoot, we're not even halfway there. Let me keep going.

It is 17,000 lines of data and it includes everything possible. Imagine. So for example the text for planetary science. The Kele. I know I said that wrong survey. It gives you a path to it. It gives you the bounds for it. It gives you the font family, the font size. And this going for every bit of text in this pdf.

You have all of this data. One thing I will point out we publish a js o schema format for this particular document in Visual Studio Code. I have set that. I've linked to that particular schema that then allows me to go in here and say, Oh, what does bounds mean? And I get the help information for.

And for example, what's an alt family name? It's the alternate B family name. There you [00:45:00] go. But if you do use digital to do a code or if you use any editor that supports the js o schema you can get in editor support for working with this. To be honest, I've not done a lot with this data.

What I have done is written code that grabs all of the text elements and gives me one kind of ginormous glob of text for pdf. That's how I built my James Stack PDF search, blog demo that I mentioned earlier.

That was possibly quite a lot. I will say we have great documentation. I will just kinda show you what it looks like. There you go. Nice and simple. It's stocks. I do think especially like under PDF services, you have all those operations, ocr, compressed protect, remove protection, et cetera.

And nice examples. Java, net node and REST api so you can see how they all work together. We do have a [00:46:00] support forum, but we also have Stack Overflow tag. So I know some people like Stack Overflow, some people don't. We have people who monitor the forums all the time, so posts to wherever you feel comfortable.

And we definitely monitor Stack Overflow as well. We have a blog. It's up on medium. And you could see my most recent entry on Lambda. . It's super exciting. You should definitely read it. By the way, I've been doing serverless for years, and this was the first time I used Lambda. So that was an experience.

It was fun. And we also have a monthly YouTube show where we talk about different topics or we have, people come on who are using our technology. It is currently called Paper Cuts. We are going through a rebranding because yay. So the name will change. The link will still work.

And actually we just had a, Oh, the cat is [00:47:00] back again. We just had a session yesterday where I talked about tips and tricks of working with our services. Stuff that I covered a little bit today, but I went into deeper detail. So if you are interested. After this presentation, definitely see the last YouTube show we did for some things to think about when you get started.

Whew. All right. I am gonna look to see if I have any questions. Of course now the cat is literally between me and my MacBook where I have a thing of right.

**Suze Shardlow:** Do not worry. I will get the questions for you. Thank you. But I don't worry. There was a lot of sympathy for you and also for the cat though,

So we, the audience was a little bit divided. Both of you had some good support from the audience there and, We're all thinking that you must be very tasty because the cat wants to eat you instead of that food. [00:48:00] Either that or you're just not feeding them enough. So you'd be the judge of that

**Raymond Camden:** if you could see her way.

She's definitely a .

**Suze Shardlow:** Yeah. Yeah. I think we're gonna know the answer then. My question to you is you highlighted the documentation at the end of your presentation. Is the documentation available in pdf?

**Raymond Camden:** No, is not actually . It is not I, you know what, No one's ever mentioned that before. I can absolutely see needing a downloadable version of our docs.

If, imagine in the future where you're on an airplane ride to a conference and you wanna learn something it's international. Imagine that, right? I could absolutely sing, needing a downloaded version, so I will raise. , but

**Suze Shardlow:** yeah, no, you lost me. Imagine you're on an airplane, cuz I can't imagine that right now.

No, I forgot what it's like. Cool. Okay for those of you who wanted, I will read out the question shortly, but for those of you who wanted Raymond's [00:49:00] slides, you can find them and GitHub his hand, his CF Jedi Master.

**Raymond Camden:** I'm going there right now. It's should be, if I could type live, it's all fear of this cat next.

**Suze Shardlow:** Is real. I did post the link in the chat earlier, so if you folks wanna scroll all the way up, you can, but also have a look at what array is showing us right now. Yes, CF Master and it was document services perso. Yes. So go and have a look at that. So questions then. Tristan wants to know, is there a non continuous mode to read a pdf?

And by that they mean, can you show page five with, let's say page a hundred, side by side, for

**Raymond Camden:** example? Yes. And, or I'm okay. I'm gonna move the cat. There we go. All right if we go back to

demos, embed test two, [00:50:00] so size container and so again, what you're seeing on screen here is not I did not. Size this nicely. So again, blame me, not the embed. But that is the mode that allows to show one page at a time. You can when the thing loads, say go to page three now, specifically, if you want to show page three and page a hundred.

You can put multiple embeds on one web page. You could do that. You could not inside one in embed here. Show both pages together like that. So we have a solution if you're willing to put two embeds in there. Cool.

**Suze Shardlow:** Okay. Sounds like a good workaround. Brilliant. Are you cool to stay on for a couple of minutes after the hour or do you have to rush?

**Raymond Camden:** I am totally cool.

**Suze Shardlow:** Okay, brilliant. I will get through the rest of these questions. Thank you for that. So the next question is from Karen who wants to know, can you implement PDF [00:51:00] signatures?

**Raymond Camden:** You, I'm sorry, go ahead.

**Suze Shardlow:** No, so If you are using this solution to put embed PDFs or use PDFs on your web pages, can you use the PDF signature?

**Raymond Camden:** Right now, no. You can link to it. I have to be honest, I'm learning sign right now. Hopefully my coworkers aren't getting mad at me. I've just recently learned sign. Document generation absolutely in can you sign so you can put the signing fields in there. And then sign has its own API as well.

I did not cover in this presentation. So you can do it like that sign does let you embed on a webpage, but it's a different technology. But you can have a similar type solution, just not with this particular embed, if that makes sense. Hopeful. Okay,

**Suze Shardlow:** brilliant. Thank you. Donya would like to know, can you link to a specific page in the PDF from another [00:52:00] page on the website?

For example, you've got a button on your home page. It goes to the about page, which has got the embedded PDF on it and goes straight to the fifth page in the pdf.

**Raymond Camden:** Yes. Short answer is absolutely yes. So I mentioned how we have all kind of APIs and crap that you that go into the pdf. One of those is go to page X so you can I have a demo of that on my blog where it's not, click here for page five.

But it's that search example where I searched for f I have a list of results. And when you click through to the result, I didn't wanna just show the PDF that has your word. I wanted to show the PDF and scroll down to where you were. And then technically that's a different api. It's a search api. I'll go to the word and I'll highlight it for you.

But if you wanted to just go to page five then Yes. Cool. Okay.

**Suze Shardlow:** And your blog again is@raymondcamden.com. Yes. Any, do you remember what that blog post was called by [00:53:00] chance?

**Raymond Camden:** No. But cuz I'm sharing screen here. I will give you an easy way to it. This was all Jams Stack stuff, so if you go into my tags, just scroll down past the ads.

Go into 11 or go into static sites. You will find them. I know it's under 11. Yeah. Using PDFs with the jam stack. I have one, two, have a couple of them. Yeah. Right there. Using PDFs. Search, text extraction. Yeah. That blog post uses PDF embed uses the extract API as well. Pretty sure it uses lunar js in the front end, but you can use whatever you.

Cool. Yeah.

**Suze Shardlow:** And also your website has got a handy search function, so if anyone wants to go on there and just use a search function type PDF jams stack and you'll be able to find all of those. Or like Raymond said use the tags as well. Such a well organized website. But I guess with this over 6,000 posts, it needs to be, [00:54:00]

**Raymond Camden:** Some of them are even good posts.

**Suze Shardlow:** So all of them are good. All of them Good. I've read them all. Thank you. So last question then is about J. Would like to know how you add the J schema in BS

**Raymond Camden:** code? Yep. I'll show you the way I did it. In the project settings, which is vs code there's a setting with Jason on file. You let me.

I copied and pasted from their docs. So basically a file schema to match. And this could be dynamic but in my case it's always just called structure data js o and the URL could either be a remote url. You can also download the schema and put it in your file system. In the docs that I saw two hours ago they mentioned that you could do it on a per project basis.

You could do it on a per user basis. So for all of BS code, and you could even do something like this, and this is not the exact right syntax, but you add something like schema[00:55:00] and it will make it supported. And that's not the exact right way, but there you go. Cool.

**Suze Shardlow:** Brilliant. Thanks once again.

Now you've had received so many brilliant comments in the chat. You need to go back through this. Scroll back through. There were quite a lot of caps. Every time you took some water, it was like pause for water. So yeah all of the good cat. And also thanks to Joel Karachi who's posted a co pen about how they link to a specific page based on the URL link.

So thank you Joel, for sharing that resource with us. Yeah. So yeah, thanks once again, Ray for coming and helping us to celebrate four years here at C. Doctor, please don't leave it another few years to

your,

**Raymond Camden:** You are most welcome. Thank y'all for having me.
