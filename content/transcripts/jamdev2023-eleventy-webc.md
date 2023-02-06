---
_build:
  list: false
  render: never
---

**Raymond Camden:** [00:00:00] At raymondcamden.com I have a contact form there. You can send me your questions. I'm not really on the bird site anymore. I check it maybe once a day or so, but my dms are open. You're welcome to reach out to me there. I am on Mastodon just because I love to say I toot and you could reach me. You could reach me at Raymond Camden, at raymond camden.com.

That's Steve custom alias I set up and it's super long, but it's also a nice and easy way to find me. But definitely please reach out if you have any questions about what I'm talking about today or about Eleventy or about the web or about cats. So when I was initially planning this talk, because every speaker I plan way ahead, I definitely, I don't wait until last minute.

Cause that'd be really bad. My initial thinking was I would sort off by teaching you everything about [00:01:00] WebComponents. and then teach you about wey and tell you what's the same, what's different, et cetera. And because that would all be within 30 minutes, I figured why not, play violin at the same time.

Because if I could do all that in 30 minutes, I could also learn to play the violin and do it simultaneously. I quickly realized that was a bad. . I'm really good by the way. I bad ideas. I just have great skill depth. So instead, what I'm hoping to do is just quickly talk about WebComponents.

I figure a lot of people are getting exposed to them but I want to, talk about the mechanics a tiny bit. Should we, a little bit of code, if it's gonna show you what it's like to build one but then really spend a course most of our time talking about WebC. How it's similar, how it's different, et cetera.

Along the way there'll be multiple demos. At the very end I have a link to this slide deck. And that link contains all of the demos so you can grab it and you can run with it right away. And [00:02:00] obviously, I'm gonna give some commentary. WebC is still in motion, it's still being worked on.

In fact, there's cool features that are not even documented yet. And. I have my own opinions about how it should be used or how I think it should be used, and that may not be the same as what Zach has in mind. Interesting. And an interesting thing about Webc is that I love Eleventy but I struggled.

With learning and I'm definitely still learning webc. I've struggled a bit and not because the docs were lacking but just because it was hard for my brain to take in. I had the same issue with Eleventy serverless. It just took me a little while. It took me kind of playing with it. To get into the groove of the right way of using it.

And I'm finding the same thing with WebC and so I hope that I can show y'all, what it gives you why it's nice, what are some things that may confuse you and give you tools to start using it right away. and we'll just strictly about the whole violin thing since I don't know how to play.

So WebComponents I have maybe three slides [00:03:00] for that, which is about 300, two But the elevator pitch, this was introduced or talked about at least way back in 2011. Some time has passed since 2011. You may not be aware. It's 2020. I am saying that to myself just as much as I'm saying it to y'all because I'm am still struggling with accepting that it's 2023.

And now, WebComponents are actually pretty well supported even in that particular browser. And I'm now talking about IE11. I, myself just started playing with WebComponents maybe four months or so ago. I felt like it was a good, safe time and I wanted to try it out and see if it was something that I wanted to add to my development stack.

So not only am I learning webc, I'm also learning WebComponents. It is essentially the ability to create custom elements. Now, it is a shame that the standards committee behind the web have not added cap picture because if there's anything that [00:04:00] should be in the web, I think cap picture should be there.

WebComponents allows me to correct that mistake. And so part of the WebComponent spec is the ability to define a custom element to create a shadow dom, which is a really complex way of saying a kind of collapsed integrated dom. I think the best example of that is that if you ever add a input type equals.

If you've ever built a forum, you've probably built a file upload that's one tag, but it actually renders a couple things, right? It renders a little field where the file name will go. It renders a little button that will show that will, that you will click to open up the file picker.

There's a couple things behind that. One tag hidden behind the core root parent tag and shadow. Encapsulates that. Essentially, I'm grossly simplifying by the way, and the HTML template tag, and I put it in by that because I've been working with WebComponents and not actually making use of that particular aspect of it so far.

So it's not been [00:05:00] terribly important to me. But. It's part of the spec as well. And I will warn you now, I have a cat fixing to jump up and invade my personal space, but it's all gonna be okay. So why would you do a WebComponent? Or why would you use it? It's a great way to reduce complexity. Great way to reuse common things if on your particular website you have a way of creating a card ui, if you use Bootstrap, then you've seen card UIs before where it's title hetero graphing and stuff like that.

If you're reusing that type of complex that type of component across multiple parts of your site, a WebComponent's, a great way to package that up and also make it a little bit simpler to use. I also think we'll see WebComponents a lot more in library. And I'm actually surprised I'm not seeing this more often.

Bootstrap doesn't have WebComponents yet. I know. I, or the last time I checked, I believe they were thinking about doing that sometime soon. But I like bootstrap. , if you've seen the HTML [00:06:00] where it's like diviv class equals tab space, tab one, space, et cetera. It's a lot of divs and a lot of classes.

I would love to just have a tabs tag, I beneath that, a tab tag, just to make it a bit more evident what we're doing. So I think libraries will be a good place where we'll see WebComponents being added as an example of how we would look on a kind of typical webpage. You write it just as if the web standards folks had added a tag called placeholder.

If there's nothing special about that particular tag, it looks like regular HTML. You do have to then load the JavaScript that defines that WebComponent. , and again, this is not a WebComponent cla class, but I just want to give you an idea of the size of what it takes to build a WebComponent.

It's actually pretty simple. All this particular WebComponent is doing is creating s u g to do a place folder graphic. And so it has a little bit of logic for like height and width and texts and stuff like that. So this is a very minimal [00:07:00] simple WebC. and an outputs SVG I won't click on the live demo because just the exact same thing as the screenshot.

So there is a lot more information. I go to MDN docs. I love the MDN docs. I go there all the time. I will say I struggled with their WebComponent docs. It wasn't very clear to me. It was one of the very few cases where MDN wasn't crystal clear. , I put that on me. But I just like to warn people when I talk about it that maybe you will struggle as well.

There's a WebComponents.today, which has a lot of links with resources and things like that. And luckily there's been, 12 or so years of blog posts on it of various relative usefulness comp, considering that things have. So that's WebComponents in roughly five or so minutes.

Let's talk about WebC. So this is components for Eleventy. It lets you ship no or even just less JavaScript. And I am [00:08:00] not really a performance expert, but I've heard that no JavaScript really quick. It lets you use components without having to explicitly import them via script tags, which is pretty nice.

You could even replace existing HTML tags, which I immediately thought that'd be a great way to mess with my coworkers. Do something like if they use an image tag and if their IP is, or a particular office replace it with a cat. , but I would never recommend people doing that to your coworkers.

That's just plain me. It's also quite a bit more flexible than the WebComponent stack. Obviously it can be because it's gonna be done on the service side during your build process. But I find working in WebEd it'd be a bit more pleasurable than WebComponents because I have a bit more.

So in terms of how you do need the Eleventy two point X beta it's been supported in the Canaries for a while, but two point x is out now. So you should probably just use the beta. All of my demos are on the beta. You [00:09:00] do need to install the plugin. You don't have to. I'm sorry. Install the plugin.

You do npm Install Eleventy plugin web website. I was thinking about something else that you have to do, but. So you install the plugin and then, once you do that, do not forget to actually add it to your dot Eleventy dot js. I forget every single time, so please don't be like me. Actually remember to add it to your config file.

After that, what do you do then? So you write a component you have a couple of options to do that. You can use the new webs dot WebC template. And that looks like a bit like so I have a file called something dot WebC. I have regular html, and in there I can call a component called cat.

That's also gonna be defined in WebC. , you can use the render plugin and yeah, that works. I'm not really a fan of that because that's a lot of code. But if you have a liquid file and want to use or [00:10:00] call a web website component you do have to wrap it in that and you could make a little macro and your editor to make that easier.

I do wish I could just tell Eleventy tell Eleventy the parse liquid for WebComponent or for WebC components, but we can't do that. You can also pre and post process HTML that is not recommended if you look at the doc. So I am not gonna be showing that today. Instead, I'm gonna be focusing on the dot WebC template.

Alright, so let's switch to code. I'm always more comfortable and code. And we're gonna start off with demo one. This is my dot Eleventy, my Eleventy js file. By the way forget the speaker's name, but the speaker yesterday who showed visual studio code and this simple browser. Thank you so much. I love you. I have included the WebC plugin and then I'm gonna write a file index, WebC, and I'm gonna write a cat [00:11:00] tag.

Now quick tip for you, if you're using video studio code, don't forget, you can go into your file association setting and you can associate dot webc with HTML so you get nicer code formatting. So let's go ahead and run this particular server and you are on 8 0 81. We will reload. There we go. So that cat, where in the heck did it came?

it came from my underscore components file and oops, I don't want that over there. I want you over here. And there it is. That is my web website component. It's completely static. There's no JavaScript, there's nothing dynamic about it. I do have multiple HTML elements being rendered in there. And obviously hot reload works within components, just as you would expect it would within the outside as.

So that is the simple version. Let's start kicking it up a notch. So [00:12:00] typically if you're building any kind of thing that you can be reusing some, any type of complexity at all. You're gonna need to work with attributes. You're gonna pass something to the component, and that's gonna change how it works.

So for example, I may want to pass a width and height to the cat c. Inside the component inside my WebC code, I can bind to that val to that value using colon width equals, and then the name of a variable. And by the way, that variable can be any page variable at all, including front matter data as well.

So another example. And let me kill this particular server and we'll go into demo two. Demo two, and npm Run Dev. And if we look at this, I once again have my cat component. And in one case I'm not passing anything. And the other case I am passing a height and width. And if we look at our component, [00:13:00] we'll see it's a little bit off screen here.

So I'll add a line. Still have the image. And this time though, I'm specifying a heightened width. And if I reload this to get the current version, you could see I have a badly stretched picture. And that matches, what did I say? Width of 200 height of 400. So yes, it is expected, and by the way, I could totally fix that particular u URL to be.

All right, and let me show one more and are y'all still getting me? Okay,

Sean, can you quickly. Tell me if you're giving me a, okay. Sorry. One of my little apps said it was connected to wifi, so I freaked out a little bit. , I have too many distractions around me. That is the problem. So just to show you one more example this is another web website component. Notice that I added some front [00:14:00] matter title.

I'm calling a second component called CAT two. And in this particular, I have no problem binding the alt tag to the title. Now, this kind of breaks encapsulation to me. I would not do that. But it does show that any page data is gonna be available to your component I probably only use things past in, but you have those options.

And one thing that has always been true about Eleventy is that it's very flexible and I appreciate that.

So more on attributes. You can also work with techs. You can also work with HTML. As you can imagine, if you want to work with techs, any HTML would be escaped for security reasons. But inside your component, all you have to use. Is the atex or at html attribute to a PAG or a Diviv tag, and that content will be rendered out there [00:15:00] in the same code.

If we look at test three, I've included a new caption for my cat, and if we look at cat three, I have that p tag right there that is bound to that. So let's actually run this so you can see it in action. and there we see our caption being rendered, working as expected. And again, if I wanted to support HTML, I would just change that attribute to at HTML instead.

we can also do basic conditionals. Now I kind of wanna stop right here and say, so WebC is a template language. It's not going to be as powerful as liquid or Nu Jux. And we're gonna talk in a minute about like how to get around that. So we have conditionals and I'm gonna show you how that works in a second.

But we don't have a way to loop, for example, you would have to use a different language to do. Luckily we have a way. [00:16:00] Once again, Eleventy provides a way. So within our web sync components, it'll be WebC if some value that could be a variable, like an attribute I passed in. It could even be JavaScript, even async, JavaScript, and it will just plain work.

Some will show one more example in here.

This time I'm calling Cat four. I'm passing widths, I'm passing heights, I'm passing captions, and the only change that I made was that. Now I say, only render that paragraph. If the caption exists. Now, this won't be a great visual change per se but before this, I would've had an empty p tag in my layout.

This helps prevent that. If you viewed source, you would see no paragraph for here and a paragraph for the one with the caption.

So WebComponents, support slots, and this is gonna pretty much act [00:17:00] just like real components, real WebComponents. So you have the ability to do a default slot where anything in between the opening and closing tag will be rendered within that particular slot. You can also have name slides where in your component you dis you do slot name equals.

And then in your calling code, you specify a slot for that to be associated with. And this will hopefully make a lot more sense if we actually run this. So we will go into demo three and pm run dev, and we will start taking a look. And let me start closing some of these files here cause it's getting a little bit messy.

And again, all of. , all of this code is gonna be available on the repository for y'all to play with. Open up my first demo, and you could see that between my opening and closing cat tag, I [00:18:00] just have random content. And if I look at that component, the way that it's supported is by just adding the slot tag.

So if we reload. Here we could see that is where the caption went. We'll go back to the calling code . This is a picture of a cat. One thing I don't like is the focus, keep going back keeps going back and forth but this kind of shows how that works. If I wanna get a little bit more complex.

Here's an example where I show both a default slot and just ad hoc content as well as a. and I will show this running and then I'll show the code behind it. And you see I have a header and we will edit it just to make sure it's actually working. Of course it is. And then there's my caption.

And again, this is, this code here is gonna be very similar to what you would do in a WebComponent. and you got to make this a little bit over there so you can see the whole thing. And [00:19:00] that works just fine. One little thing that I will point out cuz I made this mistake earlier, this is the default slot.

It only shows up if you provide content. If you type this cat two and then line break cat two, a line break is. . So that would not show the default slot because you sent content to it. You just sent a line break. So keep that in mind. Don't make that mistake like I did. And I was like, oh, I broke WebC.

I didn't break WebC. So let's talk about JavaScript because the only thing that makes the web better is by adding JavaScript, and no one has ever gone wrong by just throwing more and more JavaScript advance. I think we all agree like more JavaScript to better gigs and gigs of JavaScript should be added to your site to make it run even better.

in WebC, there's a couple special things that [00:20:00] is going to happen. Eleventy is actually going to gobble up the JavaScript and I'm gonna show you an example of what I mean by them. Now, you will be provided a way to load the JavaScript, and that's not hard to do at all. If you don't want Eleventy to gobble up your JavaScript, you could tell it not to do that.

And I have run to a couple of cases where I wanted to disable that behavior. yet again, not to sound like a broken record. Eleventy provides a way. So let's look at an example. We're going to go into demo four, npm run Dev, and we're gonna show it breaking first. And I'm actually going to switch to my regular browser.

But here's an example. Another index out Webc, and I'm calling my cat C. and if we go into the CAT component I have added a little bit of JavaScript, a little Hello world. So if we go in, hear local hosts 8 0 81 open Up Dev [00:21:00] tools, we could see that there is no console log message and if I view Source Eleventy has stolen my JavaScript.

Of course it runs even faster now, but bad Eleventy. So there's a couple ways that we could fix it. If I don't want Eleventy to do any kind of bundling, I can go into my component and just do WebC heap like that. Come back here and we'll just reload the view source and the Java script comes out. So that works. I get multiple copies of the Java script, probably not what I want, so I'm gonna get rid of.

I'm gonna show you the proper solution is to tell the page to load the bundle JavaScript. Again, Eleventy saw that in the component. It took that out for me and made it available, and I could use that code. In a script tag, and you can see there script, and I'm asking it to get a the [00:22:00] JavaScript for this particular page.

By the way, and this kind of confuses me at times because I'm using WebC as a regular page and I'm calling a component, but Webs C will always steal a way JavaScript, so I have to actually tell it to keep this particular script tag in there. That kind of confused me as kinda like how async a await where you can't use a weight unless you put async on a function.

I'm easily confused. If we look at this is gonna be test two. We will see hello world. We'll see at one time because even though I have multiple components, Eleventy gobbled the JavaScript and made it available once. And if we view source on this, we will see. Right there. It replaced that that at raw with the bundled JavaScript.

So a little interesting side note if you're calling a component from liquid and here's an example of that, and you could see I have the render template, by the way. [00:23:00] Don't forget, even though render template's built in, you have to add it to your Eleventy js. I totally didn't forget that. I swear. The way to load in bundle JavaScript doesn't work on a liquid page.

It only works on a liquid layout page. So if we go into Includes main liquid, this is the syntax for liquid. But when I initially tried it on my test re page it didn't work. Now, Almost every real levity site you're gonna use layouts. So that won't be an issue. But just gonna keep that in mind in case you run into it.

Yes, a lot. So guess what? The same thing happens for CSS. And once again, you can disable that if you want, but you also interesting enough, get scoped c s as well, which is really nice. So we're gonna go to the next demo. Demo five, [00:24:00] demo, five npm run dev. And let me quickly show you what I'm doing. So I have my cat component again and I also have a regular vanilla type image.

If we look at my component, I specify that all images should have a max width of one. In my mind, I was thinking that's only going to apply to my particular image. That's actually not the case. So if we go in here and load, we can actually see that both images have the same thing applied. Luckily, there's a really easy fix for that.

We go into test two. The only change here I made is that I'm calling a newer version of my component, newer better version. And literally all I did was add WebC scoped to it. And if we go in here and actually let me go to the browser so you can actually view the source. And luckily I'm still on test two.[00:25:00] 

and we could see, so that component was first. It has the very small image, you max width of 100. My regular image was left alone. And if we view page source again, we could see by adding scoped, Eleventy added a random prefix to my c s such that my image is only going to apply to I'm sorry, my CSS for that image is only going to apply to the component.

And you could see this particular random prefix was added to the wrapper for this particular component, such that it only applies in there. Pretty easy to do. I probably won't play a lot with that cuz I am horrible at CSS. So you can get a bit more complex with bundling. You can put them in different buckets.

So if you wanted like things in the foot of your HTML page instead of the top, you can do things like that. It. Works basically by just adding a attribute WebC bucket and give it a name. And then your get CSS and your [00:26:00] get JS, both of those allow you to pass an optional second argument to specify the name of the bucket.

Completely optional. So there is more stuff you can do. You can actually import components via either a local file or npm package. Instead of having it within your source code, you can actually take a regular HTML tag and map it to a component, which is freaking magic, I think. And you can also use other languages inside webc.

And I see I'm already at 30 30. So I'm not gonna run this demo. I'm just gonna show you what that code looks like, cuz I, I ran to this right away because WebC doesn't have looping. It doesn't have if this, then that I hit that right away. It's not too hard to get away with it. All we can do is use a template.

with a WebC type and an Eleventy type. And in this case, I'm saying it's liquid and markdown. I really didn't use markdown. I just used liquid. I [00:27:00] really like liquid. So that's a language I chose. But obviously you can use Nuk or something else, but because webs seed doesn't support this type of logic, all I gotta do is switch it out and everything else works as if, so I can still do slots and things like.

It all just magically works really darn well. So I have more demos, but I also know I've hit that point. I will actually share one quick thing. So this morning I was thinking about the Google Static Map api. I'm a big fan of it because it's not really an api, it's just image tag.

Which makes it very nice and practical to use. And a lot of times you don't need an interactive draggable zoomable map. You just need a map and that's it. So I really appreciate that Google has this. Give me a URL and I'll give you a map. That's also why I really love Cloudinary because they have a lot built in by just using simple URLs.

I thought about building a [00:28:00] WebComponent that would make it easier to use the Google static maps. And then I realized how stupid. Of an idea. That was where I would take an easy image url, convert it into JavaScript that would end up rendering just an image U url. But that doesn't apply to WebC because.

it's going to end up being at bill time, just url. So if you actually do download this re repository, I built a web website component for Google Static Maps that takes the logic, generates the image for you, and just makes it easier to use. For example that is a map for Lafayette. I just passed any location and a Zoom level, and this is a map for lake Charles. So I wrote this morning in five minutes. What I love is that the output to this is going to be just freaking image tags. No JavaScript at all. I do love JavaScript, but no, JavaScript is even better. Few minutes over, I think. But not [00:29:00] too bad. I am definitely open for questions.

My cat has joined me off camera here. Maybe she'll make an appearance as. Thanks, 

**Sean C Davis:** Ray. That was really great. I, webs c is much more powerful than I remember. I heard, I saw an early demo and I'm I, as you were going through each. Demo. I was like writing all these questions down furiously and then the next demo answered some of those questions.

So I have a handful that I want to ask you, but a reminder to all of you in the audience that you can use the ask a question button at the bottom of your screen, add your questions in there. And we actually already have a couple, so I'll start with those. The first one. comes from Daniel, and I think you, you mostly answered this near the end, but I'm gonna ask it anyways.

So Daniel says, is there a way to make WebC components work? think work with markdown in 11, like for a figure and an image component? 

**Raymond Camden:** Yeah. Yeah. So I'll go back to Kota. My cat will [00:30:00] let me, she's right by the mouse. So where I had. Right there where I'm basically saying, Hey, I'm in a WebC file, but I need to use liquid.

I could use markdown as well. So that should just work. And 

**Sean C Davis:** so you're, because you have two in there and you had the comma between them, is it gonna, it's gonna process liquid first and then it's gonna process markdown after that? 

**Raymond Camden:** Yes. And I am 90% sure that's gonna work. work well. Here's those maps just for the heck of it.

Let's just do a low world and see what happens. And of course it worked. I never doubted it for a minute. Minute, . 

**Sean C Davis:** Amazing. Amazing. Actually, while we're, since we're talking code, I'm gonna jump down to Eric's question, who says he's curious about looping in WebC? So you mentioned that you have that if attribute that you can use.

if you're gonna loop content, you do, you have to get into liquid at that 

**Raymond Camden:** point. [00:31:00] Yes. Yeah. It wouldn't surprise me if that was added at some point in the future cuz it's pretty common. But right now you would need to switch liquid or again, Nu Jux are pug or whatever. I believe I saw someone in the community.

Created a short code or some other workaround basically. There, there are multiple workarounds for doing it. It's not native really to WebC yet. Okay. 

**Sean C Davis:** And you can then, you were showing your template in WebC, but you had components as WebC files as well. So let's say you had a gallery component and you were gonna have individual gallery items in there that you could use Nu jus or liquid.

To generate a loop, but then you could put that sub-component inside that loop theoretically, right? 

**Raymond Camden:** Yes, I believe so. Yeah. Okay. 

**Sean C Davis:** Okay, cool. All right. Next question from Derek. Derek asks, what are the advantages of using WebC overwriting standard WebComponents and using them in [00:32:00] 11? So 

**Raymond Camden:** first off, less JavaScript.

You'll still need some you still may need some JavaScript. I Adobe, my company, we have a P D F embed library that a allows you to put a pdf d on your website and that involves some JavaScript I can, and I have, I built a web website component for that. I still have to ship the JavaScript for our library.

What I don't have to ship is the default kind of WebComponent. Register this component so you can. Definitely less JavaScript and in some case no JavaScript. I built a placeholder WebComponent that uses s p G. My thinking is that I don't wanna rely on an external placeholder service, but I need to use placeholders, for my site that uses JavaScript to create s p g.

The same thing in Eleventy ships with no job script at all. I just, I'll put C sv g I. , do you feel like there's 

**Sean C Davis:** a breaking point in there somewhere where, for example, let's say you're gonna have something that's more like [00:33:00] really interactive. Maybe instead of a static map, you're gonna have typical interactive map and you're gonna add markers to it in that sort of thing.

Is WebC still practical in that case, or do you maybe move more towards a native app or native component 

**Raymond Camden:** at that point? It depends. , I. I would say, look at what you're building. I if I was using 11, I would default the WebC probably just knowing that I could ship less JavaScript. But I would keep open in my mind, if I'm banging my head against WebC and like, why is this not working?

I would punt and I would switch to a regular component. 

**Sean C Davis:** I like that. So you start with the simple, which is WebC. You have to do less work. And if it's not solving your problem, , then you can go more native from there. Okay. Daniel clarified his question, so didn't mean markdown inside of WebC file, but meant can you use WebC in inside of a markdown file?

But I'm thinking Yeah I'll let you answer. 

**Raymond Camden:** Yeah, no. So that [00:34:00] goes back to my liquid example in demo two, demo four right there. where you have to do rendered template, which I don't care for. And I've said that on Macedon that I would really like a way, even if it means more processing during build time, I would love within liquid to be able to say, Hey, if you see Cat, it is a WebComponent.

I wouldn't even mind, putting front matter to specify like where a cat is. But yeah, this is what you have to do. . Okay. Okay. That makes sense. Oh, I should say, oh. Yeah, go for Mark. Oh, I'm sorry. No, you're good. You're good. No, I was gonna say I, I'm actually not sure what you would do in markdown.

I've not used the rendered template plugin in markdown. I think it works there. But I use liquid all the time, so that's of like my my. . 

**Sean C Davis:** I don't know what the default settings are in version two, but I know that at least in my site is [00:35:00] using Eleventy as heavy on markdown. And I believe that I had to specify what the rendering engine was for markdown.

. So I think I had to tell it, Hey, I want you to process markdown as nun Jux first, and then run it through the markdown processor. So you have to make. short codes line up and everything. Yeah. Makes sense. Okay, so you have some previous experience with View and maybe some other UI frameworks or component frameworks as well.

You seem really excited about the, these WebComponents. How are you, how do you compare that to some of these, like arguably more popular but and maybe more featured full com UI library? 

**Raymond Camden:** Yeah. So my first experience with the component, like ex experience, I guess was view components.

And it's very compelling to have a single file component where you have H tm L and it's nice, it's by itself. I hate H TM L and JavaScript. That's why I'm not a fan of React. I look at React and I shutter. And that's not to say React is bad. I know React, [00:36:00] react is a little bit popular . But it's not for me.

When I look at like a view component, having that HTML by itself with a little bit of markup inside for Dynamicness and then having JavaScript and then having cs, I liked that separation when I started to look at WebComponents. And it's all JavaScript or typically, or this in my experie. . I still liked it but I wish that within one file I could have a separate HTML thing.

And then there's ways to make that a bit nicer. WebC feels closer to view components to me because I feel like I get that that ability to write h html and not have it in my JavaScript, if that makes. 

**Sean C Davis:** Yeah definitely. So it, yes. Yep. And so I imagine that would be, if you were writing like a felt component, it would be a little bit similar too, where it's it feels a little bit more natural rather than, I'm learning this whole new syntax for building a component.

Yeah. Okay. Alright. Last question. [00:37:00] We heard from Simon McDonald yesterday who's helping to build, enhance, which is really going heavy into the WebComponent space as well, and they're more on the server side rendering side of things. And I'm just curious to get your take, do you feel like even though WebComponents have been around for more than 10 years we're hearing a lot about them.

Do you feel. is this is this popularity gonna continue to grow or are we gonna see some more frameworks pop up? What's the, what did the next year or two do you think look like for 

**Raymond Camden:** WebComponent? I'm horribly bad at predicting the future . I do feel like components are a better fit for people who make libraries.

If I was Adobe and I was shipping a P D F in bed thing, , I think a WebComponent would be great for that. It's easier to use our stuff if you just drop a tag into your HTML. So I think we'll see more of that. Like I have to think bootstrap at some point we'll adopt a WebComponent version.

So I think we'll see movement. Amongst libraries. I do think developers will use it more and [00:38:00] more especially with WebKit now supporting it. It doesn't support part of it, but it supports it enough for sure. So I think in the next couple years we'll see a gradual growth in it. Okay 

**Sean C Davis:** great.

I tend to agree and I'm really excited cuz it felt like there was some potential, I don't know, eight years ago or so and just quieted down and now we've got some noise. Yeah, let's see. Let's see where this goes.