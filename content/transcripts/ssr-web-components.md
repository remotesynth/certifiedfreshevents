---
_build:
  list: false
  render: never
---

**Simon MacDonald:** [00:00:00] Great, thanks so much Brian. And yeah, please, folks check out cfe.dev. I really appreciate Brian having me on here.

He's does a lot of work for the community and it's all free grad us for you to be able to enjoy. So if you like my talk you know, please check out some of the other ones that Brian has available as well. And as you mentioned we're here to talk about solving common web component problems with server side rendering.

And, you know, not to spoil the ending, but we're gonna do it with this new open source project called Enhance. It's part of it's an open source project that is done by Begin, which is the company that I work for. And now, who am I? Well, I'm Simon McDonald. I'm the head of developer experience. I've began.

And what does that mean? Well, basically I, I wear a bunch of hats. I do a lot of different things, whether it's talking to fine folks like you, attending conferences, writing some codes and documentation, really whatever's required. And if you need to ask me any questions about began enhance, or anything that we talk about today you can hit me.

McDon on Twitter for as long as that site is still up. And who knows, even by the end of the talk, it might not be. But you [00:01:00] can also find me in many other social media sites using exactly the same user ID, including Mastodon. I believe I'm at macdonst@mastodon.online. So please, if you feel like I continue the conversation over on one of those sites this is actually me from last week.

Do this little slide called Infinite assigns. It's too bad with, with online talks. I'm not able to kind of get a picture, but you know, it goes back about 40, 50 talks by now. So it's just something I love to do anyway. What are we here to talk about today? Well, let's take a look at the index. We're, we're gonna go through these different topics and first and foremost is what are web components?

Because there may be some people on the call who are not aware of what web components are. This may be their first exposure to them, so, Let's talk about it. Well, this is what the mdn definition of web components is. So it's a suite of different technologies that allow you to create reusable custom elements, so all their functionality encapsulated away from the rest of the code.

And then you can use them in your various [00:02:00] different web apps and you're probably thinking to yourself, it's like, oh, he means react. That's what he means. Those are custom elements are react and reusable components. That's react. No, no, I, I actually don't mean react at all. And in fact, let's kind of address the elephant in the room right away because I, I feel like some people in the audience may be equating web components to react, because react components are a type of web-based components, but they're not the specification for web components at all.

So taking a look at the differences between both react and web components. React gives you a way of building reusable web components, which is fantastic. So we can use these in multiple different projects that we have. As well it provides this really useful ability to do dom syncing. So anytime that something changes in your webpage, react will calculate what needs to be updated and then just repaint that part instead of [00:03:00] repainting the entire page, which is super useful and it's nice for perform.

React is staple. They don't specifically say which state library you should use, but they provide you a bunch of different ways to hook into the state using various different projects, but it's not part of the platform. So what that means is it's not directly included in the web browser itself.

You have to install the reactive npm package and all of the other packages that come along with React in order to make the framework usable. So that can be a little bit of a problem sometimes. Web components which were actually released in 2012, which is a year before React, was was born are also reusable web components that you can use pretty much anywhere.

They're interoperable. So when I say they can be used pretty much anywhere, not only can you use them in your plain vanilla JavaScript web application you can use them in a React application or a view application or an Angular application. It doesn't really matter. What your site is originally built with, you can start to transition to [00:04:00] web components one at a time.

So perhaps you need to build a new component for a new feature that's coming out. You may want to take a look at building it as a web component just to see how well it works in your current application. And then over time you can start to migrate away from these frameworks and over or to a complete web component framework, or sorry, over to web components themselves. Why you wanna do that? Well, we'll talk about that a bit later. They're accessible. Web components are web standards. They are basically html, which is way more accessible than a React. Than a React component generally is. I usually, at this point, I would be asking the audience for a show of hands.

If anybody's built some React components lately, or view components or ular components you may notice that it is a bit of a chore to make them accessible. And one of the reasons for that is, is it's built by JavaScript, so it doesn't have the accessibility features built into it by default, which many html tags do.

So it adds on a bunch of extra work when you're trying to [00:05:00] make these components accessible. And you're probably thinking like, oh, hey me, why would I worry about accessibility? Well, you definitely should. So I can't tell you how to care about other people who have different problems, whether it be low vision or low motor control.

But I can tell you that at some point in time it. Will be you. You're gonna get older. Your vision is gonna start to fail, and you will want a web that works in low contrast mode, or should say high contrast mode, or it gives you the ability to move around using the keyboard rather than the mouse, because, you know, eh, you're not as, you're fine.

Motor control just isn't there anymore. So, really, You're investing in your own future. And then if you don't think of things that way, you might also want to think of them in the way that a lot of companies and governments will not buy your product unless it passes certain accessible accessibility standards.

So there's a lot of different reasons why you should care about accessibility, and there's a lot of folks in the industry that are way better at me than talking about it. And I, I suggest that you search these talks out. Ashley Chris DeMaars various people [00:06:00] that talk about accessibility and are way more eloquent about it than I am.

And then last but not least, web components are part of the platform. And so what we mean there is that everything that you need in order to build and run a web component is already included in your web browser. And. Pretty much all of your Evergreen web browsers support these things, especially now that we've been able to move away from having to support Internet Explorer.

These things are right in the browser for you. So you have to ask yourself the question, why would I wanna pull in another framework to create a reusable component when the platform, when the browser already provides a type of functionality for me? And that is a really good question when you think about it.

So what are web components part two? Well, they are formed with three different specifications and the first and is the custom element specification. So that is a set of JavaScript APIs that allow you to define custom elements, their behavior, which can then be used and reused in your desired user interface.

So [00:07:00] again, this is where you have a tag and you define how that tag is going to behave using your custom element specification. And then the second specification is the shadow dom. It's another set of JavaScript APIs for attaching the encapsulated or the shadow dom tree to an element so it's rendered separately from the main documents dom.

And then you can control that associated functionality. So in this way you can keep an elements features private so that they can be scripted and styled without any fear of collision from the rest of the parts of your document. So it's really useful if you're, you're building components that may be embedded in other different webpages.

So when everything is all encapsulated away, you can be reasonably secure that anything that you've put into that web component won't interfere with your client's website as well. So another good usage of web component. And then finally, third specification is HTML templates. So the template and slot element allow you to write [00:08:00] markup templates that are, you know, not displayed in the rendered page.

And then they can be used to render your custom elements as multiple times, sorry, as many times as possible. So they're gonna be reused many times across the page. And so that's gonna reduce the, the amount of boiler plate HTML that has to end up in your. Page as well as the slot element, which allows you to compose web components of other components or other HTML tags as well.

So it really is nice to be able to compose these things out of smaller components so you can just kind of add in all these leaf nodes and create more advanced components. All right, so taking a look at a custom.

This one's very simple. It's just a straight up hello world. And in our hello world tag, we have an attribute where the name is Simon. Okay, that's not too fancy. It's just gonna display. Hello assign. If we take a look at the JavaScript for creating this, just using the custom element part of the web component specification we are creating our [00:09:00] class.

The hello world class extends from HTML element. And on the connected callback ae, when this JavaScript is loaded into the page, we're gonna get the attribute name, and then we're gonna just use the old nr html trick to add this H one string into the tag. So what it ends up doing is just displaying Hello Simon to the world.

Which is great. And then finally, what's important for the web components is you have to make this call to custom elements dot define. So this is telling the browser that anytime you encounter this hello world tag in the, in the html markup, you wanna instantiate this hello world class. So without this line, the browser won't know what to do when it hits this type of element.

and what that looks like if you, if you take a look at the html if you were to inspect things, it's just a lot like this. You see, hello world, we have the attribute, Simon. And then we have our H one tag with our warning in there as well, or our header in there I should say. [00:10:00] So, very simple when it comes to the custom element specific.

Building on top of that, we move into the second part of the specification, and that is the shadow dom. So with the shadow dom, the HTML tag looks exactly the same, and the output is the same as well. So nothing really any different here. But if we take a look at the job script, that's where things get quite a bit different.

So instead of just using the inner dot html trick in our constructor, first thing we're always gonna do is call super, because those are the rules. So we still get the attribute name off of the tag, but then we just use the document to create a new H one element. And then we started pending text.

We create a span, we put our name in there, and then finally we add all that into the shadow. Document by basically attaching this component to the shadow dom and then appending our new header into the shadow dom as well. And then of course outside of the class definition, we still have this call to define custom elements [00:11:00] because we still need to tell the browser what to do when we hit Hello World.

So the JavaScript for that looks a bit different. The output is exactly the same, but if you were to inspect this custom element, you would see something just a little bit different. We still see the hello world tag with our attribute Simon in the light Dom. But then we see this bit here, the shadow route, so that we can know that this H one and this span have been added into the shadow dom instead of into the light dom for us.

So that's hoping to encapsulate some of these, this markup away from the light Dom. It's, that's pretty interesting. Now, the third part of the HTML specification for web components is our HTML templates and slots. So in this case, we're gonna change up what our tag looks like just a little bit. So instead of putting my name in as an attribute to whole world, we're gonna pass in a span with an attribute.

Plot and its name is name I know and how, you know, how, you know, unique. I've [00:12:00] decided to make this component. But basically the. The markup looks a little bit different that you use, but the result is exactly the same. And if we were to take a look at the JavaScript, it gets a little bit different. So what we're able to do is define this reusable template so that anytime we need to just add this markup into the page, we can just clone from the template and just insert it into the shadow dom. Instead of having to go through the effort of adding all of impending all of these dom node. One after another using the JavaScript api. So with the HTML template and slot version, again, we call our constructor call super, which we always have to do. We are attaching the component to the shadow do, and then we're just gonna clone the template and pass things in.

So basically this html gets replaced into what the, into the Hello world still to have to define the custom element, which makes perfect sense. Same output, [00:13:00] but once again, our, if we were to inspect the html, it looks a little bit different. So in this case, we still have Hello World in the light dom we have our shadow route in the shadow dom, which we have our header and our, our slot with the, the name Simon, which we'll get filled in.

Actually that's, that's a bug. I forgot to change that to a span with the Simon in the middle. And then finally our, this. Kind of reversed. But anyway if you were to use the, the slots and templates, you will notice that some of the, the slot part still shows up in the, the light dom, the shadow do is what the actual contents of the web component look like.

So all of that is just a long way of saying this is what web component specification is. And the next part gonna say, why are they useful? And that's a good question. Why would you go through the trouble of using web components if we have all these other frameworks?

Well, first and foremost, we have our component reuse and interoperability. [00:14:00] So using web components you take advantage of small, reusable, modular elements that easily fit into webpages and reduce development time as it is cross sharable and isn't dependent on any kind of technology stack. Web components can be used across many different types of frameworks, so you can use them in your Angular or your React project.

It uses far less JavaScript. So all parts of the web component spec work in the browser from the custom elements to the slots. And so that's super useful because there's no extra JavaScript that needs to be added to the page in order to be able to properly get a web component set up cuz it's already built into the browser itself.

So you can take a look at some of the frameworks and honestly if you saw my Twitter ran last week, I tried to buy a pair of pants and it was just, A checkout form and it was 4.6 megabytes of JavaScript just to build that checkout form. And that is completely unacceptable. And then it didn't work without JavaScript, so there was actually an issue with the state machine and I couldn't buy the pants and.

Yeah, what are you gonna [00:15:00] do? You don't need 4.6 megabytes of JavaScript to check somebody out, is all I'm saying. They're accessible. So custom built in elements can extend the native html elements like inputs and buttons and stuff like that. So they have all of the inherent functionalities and characteristics of, you know, regular HTML elements, so you don't have to use a whole bunch of extra JavaScript to add more and more accessible points into these components as well.

They have a shorter learning path, so you don't have to, you know, if you started to learn HTML and JavaScript, you can start to add web components into your project without having to learn yet another framework. So you're gonna be able to you know, develop your application a lot faster because you don't have as much learning.

And then finally we have the encapsulation. So the shadow dom provides a nice encapsulation mechanism so we can separate our style and our script and the other HTML markup from the content of our application. And this way it can't be messed with with. [00:16:00] Outside of the component itself and you can be reasonably secure that when you add a web component into a third party page, you are not going to affect the, the third party page in any way as well.

So bad example, but you can see sometimes you will have like embedding a Twitter component into a page. And if you're able to do that as a web component, you can ensure that that Twitter component does not mess up the rest of the page as well. So as an aside, is anybody actually using web component?

And I think that's a pretty good question. Not that popularity generally means that something is better, but it sure seems like over time the usage of web components has, is increased. So Google likes to track statistics like that. And the way that they're doing it for web components is that custom element define call.

So any page that has at least one custom element dot define is being treated as. This is, this page is using a web component, and so right now it's increased to [00:17:00] just under 20% of all webpages are using custom elements, which is, that's pretty awesome. Web components are on their way up again. Oh, alright.

But are any like big apps made using web components? Again, the answer to that is yes. I mean, have anybody ever here ever used YouTube? If you were to go to the source code of YouTube and inspect it you'll see that the entire user interface is a bunch of web components. And as well Adobe with their Photoshop web and Lightroom web has built everything using web components as well.

So when folks tell you that, Hey, you know, you can't build a real application out of web components, I, I think I would have to disagree with that. As well. You, you know, you might use GitHub on a daily basis and, and quite a good portion of GitHub's web interface has built with web components as.

All right, so we talked about what web components are and you know, why you would use them, but what are some of the problems that we run into [00:18:00] them? Because like, no technology is perfect and believe me, I'm not saying that web components is perfect. So you may have heard of the flash of uns styled content.

So, you know, that's basically when you load a webpage and things look okay. But then all of a sudden there's a flash and the fonts completely change and the page looks different than, than what you had before. Because it's taking a while before the, the fonts and some external style sheets load and the page is set up correctly.

So that is what's called the flash of un style content. And that's not exactly what happens with web components, but it's pretty close. What we're actually seeing is what we call the flash of undefined custom elements. I am pulling this definition from Corey LaViska, who is a really great follower sorry.

Great follow on web components. You should check out Corey's Twitter again while it still exists. And what we're seeing here is this brief flash of un styled html, where your customer, it should be when the page loads. And there's a really good reason for this and we'll get into it. And it may be a little bit difficult to show [00:19:00] you on a, on a live stream, but we'll give it our best shot.

All right. First off, we have our flash up on style content example. So again, exactly the, the same thing we had before. We're just, you know, creating our template and we're gonna style it by make sure that all H one s in our custom element show up as red. I'm gonna try this. You may not be able to see it, but I'm gonna type cfe, do dev and the webpage is gonna reload.

And for a brief period you might have seen like some really small texts that said cfe.dev and black. Let me try that and I'll say, hi Brian, or I can. So again, we could, we can see before the, the styling is applied, you kind of get that flash of like the undefined custom element and here's what's really happening.

And then if you couldn't see it in the stream, let me explain it with some text. So why does this kind of stuff happen? Well, first of all, the browser's gonna request the HTML from you, and then it's gonna go [00:20:00] along and it's going to start rendering the HTML and it encounters this unknown element called Hello World.

All right. Cool. . Then the browser treats that unknown element as just an inline element. So it's basically gonna treat that hello girl tag as a span because it doesn't know what to do with it at that point in time. Then eventually the browser will load the JavaScript, which is where the web component is instantiated, and all of that encapsulated JavaScript is loaded and that custom element define Hello World is called and finally, The browser knows what to do with that tag, and it sees that there's some scripting that's, sorry, it's some, yeah, some styling that is applied to that tag as well.

And then it flips everything over so that our H one is larger and the color is red. So that's a bit of a problem when it comes to some custom elements, as you may see, that kind of nasty flash when things The other problem that we run into is that the shadow dom doesn't necessarily play great with native forms, and so why that's the case is that custom elements can only [00:21:00] extend the HTML element.

It would be really great if they could extend, you know, button elements and input elements, and in some of the browsers you can do that. Safari won't let us have nice things. So they have refused to implement this part of the specification for a really long time. So it would be really nice to be able to just say this tag is a button and then there's an attribute called is, and then you give it the class of the web component that you want the button to extend.

So that would allow you to embed a button directly into your form element and have it behavior taken over by your web components. Otherwise, you're embedding your web component tag into the form, but then the native behavior of a button tag is not being passed up to the form because it's in the shadow dom.

And the form is expecting these things to be in the light do. And where that really plays out is when you wanna hit the enter key to automatically submit your form. And it just doesn't happen because the button is not being detected in the right place. [00:22:00] So that kind of sucks. And yes, that's basically I was talking about the four elements inside the shadow do, are not considered part of the form.

Now this one is really difficult to example to to basically it's hard for me to prove a negative. So at this point in time I'm hitting enter a whole bunch of times and I'm not seeing what should be an alert dialogue just popping up when. Basically when the enter is hit. And that's because we have the web component is my button, and it is, it is not a type of button so it doesn't get all of the normal behavior that a button would have inside an HTML form.

So that's a bit of a problem. All right, so how do we solve certain issues like this? And that's a really good question, and it's probably why most of us are here.

So if we take a look at the solutions, we have a couple for the flash of un flash of undefined custom. [00:23:00] So first and foremost, this is exactly the same custom element that we had before the hello world with the span inside it to display things. The JavaScript isn't any different than we had before. We still have the style tag in our template.

But what we do have different is this little bit of CSS selector that says anytime something is not defined, make the visibility hidden. So what does that end up looking like? And again, hopefully folks can see this. My CFE dev, it goes white for a second and then eventually our H one colored in red with cfe.dev shows back up there.

So, you know, that is one possible solution for that. But it's not really the best one because you have this scenario where you have these blocks of your page that are completely hidden from view, from your users, and eventually they just flash in there. Once the custom element is defined, ie. Once the, the JavaScript of that page runs.

Now you can imagine what would happen if for some reason there is an area in [00:24:00] that JavaScript or a network issue and your JavaScript wasn't able to load. You would just have. Big chunks of, you know, undefined elements all over your page. So the question is is, is there a better solution? And yeah. So again, I think we already buried the lead on this one, but welcome to enhance

It's a new open source framework that we have began, have worked. And you may be wondering like what it is. Well, it's a really great way of you rendering sorry, of you writing web applications. So you're gonna author everything on just regular html. Everything is rendered on the server and we're doing it in cloud functions.

Makes it very easy for you to build applications. Everything in Enhance is taking care of using web standards. So we're not gonna add a bunch of like non-standard syntax into things just to be able to like hook you into enhance. And if we do need to add any non-standard syntax, soon as the web browsers make that kind of functionality [00:25:00] available, we'll move to that and you'll be able to drop that piece of enhance.

And then finally when you're running an enhanced application and it using enhanced SSR render your web components we want you to think of an HTML first way. So we want your application to be working completely. Sorry. Didn't get to the cough button fast enough. We want your application to be working completely using html, and then the JavaScripts gets loaded and it enhances it so that it provides more interactive functionality.

And we really feel like that is an excellent way of moving forward with building web applications. All right, so let's do a demo and let me see if I can properly get this to work. I'm just going to hopefully not break anything, but I'll just stop sharing for a second and then

start sharing again. But this time [00:26:00] I'm going to share my main screen. And we have this, this little example here. So this is a counterexample, not very fancy, but let me flip over to our. Network tab. And what we're gonna see is that when I hit the plus key or the minus key, we're just incrementing or decrementing the counter so that things move along.

How do we do that inside of an enhanced application? Well, basically when we hit the counter route, so on, my local hosts have slash counter that's going to go inside of our app folder. Inside of our pages folder and you go to counter. So everything enhances using, you know, file based routing. So if you need to add a new page to the application, you just drop it into the, the pages folder, and then you can start writing just regular html so you can see the counter page.

We're just using section tags and you know, our paragraph tags and our anchor tag. But we also have this, you [00:27:00] know, new tag here. Like what is the state counter? And that is an enhanced web component. Anytime enhanced encounter is one of these. It's gonna look to see if there's one in the Elements folder.

And in this case, we do have one defined called the state Counter. In this custom element we are exporting this function and being passed into the function as an object. And the two important parts of this object is the html, which is a tag template, literal, and this is what enhance uses to parse through all of your web components specification, extract the style tags, and do the expansion of your custom elements as well as the state.

And the state is where you can pull off things like the attributes to your custom elements as well as the store. Where does the so get set? It's a really good question, which we'll get into in just a minute. But basically what you can see here is we have our style tag where we define what these buttons should look like.

And I know that somewhere KJ is grinding his teeth because I couldn't get these things to like center. I mean, I'm not a CSS wizard, that is for sure. Some of these things. [00:28:00] And then we've built our web component using just plain old html. And so we have a form tag and then there we have our decrement button, which anytime is called, we'll, you know, hit this action to decrement.

We have our value right here and then we have a hidden value for the input as well for the form, and then another button to increment things. So, alright, that's pretty cool. Why did we build it with a form? I'll show you in just a. . Now, when it comes to the script tag we are just defining a regular old custom elements, or sorry, a regular old web components that's extending an HTM elements.

We're grabbing the paragraph, selector our input. We're getting the value off of whatever is passed into the web component. So if you can start this counter at 150 if you want to, just by sending the value attribute. And then we're adding a couple of event listeners for clicks. So anytime we get a click we're going to deve, which again is pretty easy.

We just subtract one from the value or intermit, we add one to the value, [00:29:00] and then we set the attribute. Of the web component. So we're going back and we're setting the the value attribute or the web component, and that's important because we have this other method here, which is the observe attributes.

So, What happens in the web point of specification if we list the different attributes that we want to observe? So anytime the value changes, we're gonna get a callback, and that callback is down here, the attribute changed. Callback will give you the name of the attribute changed. It's previous value and it's new value.

So first thing that you want to do before we we mess with anything is to check to make sure that the old value and the new value are not identical to each other because there's no point in order to re render your web component at that point in time. That the values are exactly the same. Nothing's changed.

If they are different, then we check, Hey, is it value? Okay, cool. In that case, let's just get our paragraph tag and we're just gonna update the value of our internal paragraph and our our hidden input tag [00:30:00] to be this new value. That's great. So that's what's actually doing everything on this JavaScript side of things.

but what happens if we turn JavaScript off? Okay, so the page has reloaded itself. But if we hit the increment key, you might be noticing something a little bit different on the network tab. And that's that every time I hit one of these things, there's a backend API that's being called, and that's because we've built this using HTML first and.

We're, instead of having the detriment or the increment preventing the form from submitting it will go off and hit our backend api, so it's gonna hit our counter API in order to increment your detriment the value. So if we take a look at our api, so anytime you need to add some of this, this background functionality with the api, all you really need to do, again, file based routing is make sure that your API file name matches your pages file name, and of course you can nest your pages and nest your [00:31:00] APIs as many directories as you want.

It will still be able to find it for you. So on our backend api, the first thing that's gonna happen is the post route is hit. It's going to find out what the value is from the request body and then find out what the action is, whether it should be increment or detriment, and it's gonna get that off the query string.

It's gonna do a little simple math, and then it's going to take the session, put it in the sorry, take the value, put it into our session, and then hit the counter route. So the reason that we do this is so that we can go and have this get method called, and then it's going to pull the value off of the session, clear out our session and return JSON.

So the JSON is coming back and that's what's going to be populated into our store. So in that case if there's a value in the store, we'll use it. Otherwise, we'll use whatever the attribute value is, and if none of those things were found, let's just start with zero. So that's what allows us to, you know, be able to do this web component [00:32:00] with or without JavaScript.

And now I'm gonna turn JavaScript back on, because slides.com will stop working if I, if I don't do that. So that's just a, a bit of a demo when it comes to our web components. Right, and now I gotta find streamer again. So I'm just gonna stop sharing and start sharing again back to my slides.

All right, so we're back to the demo side of things. So what does this look like with the flash of, you know, undefined custom element? It's a little bit different because basically when the HTML comes down from the server, instead of it being the, you know, in the shadow do, we've already expanded our custom element.

So we have our Hello World tag. We have the, the span is already in there. And then the JavaScript looks very much the. Now the style tag is already hoisted up into the head of [00:33:00] our page that's returned from the enhanced server, so that the styles will be applied immediately as well. No, JavaScript has to be loaded at this point in time, so, It's hard to, hard to show that.

So what we'll just do is talk a little bit about it. So the browser requests the html on the server side enhance is gonna expand all of your custom elements that have been added onto the page, as well as going through all of those custom elements, looking for the style tags and hoisting them into the page's head tag so that they're immediately available when the browser starts loading your page.

now it encounters the browser, still encounters this unknown element called Hello World. And it's like, whoa, what do we do with it? Well, luckily it still treats it as an inline element, but since your CSS is already loaded and in the head, it's styled properly. And then finally the browser loads the web component's, JavaScript.

And this way the, your customer element specification takes over at that point in.[00:34:00] 

And then once the JavaScript is loaded, any kind of additional behavior that you wanna add it to, the web component is loaded as well, and it will take over at that point in time. So you basically get the best of both worlds. If for some reason the JavaScript fails to load your page is still usable by your end users, which is great.

People will be able to buy those pants, which I wish I could have. They sold out. But also once the JavaScript loads, you'll be able to provide more advanced interactivity as well. So that makes your life a heck of a lot. When it comes to the shadow down versus form solution it's, it's much the same.

Basically we have our, our form action is exactly the same but when we're passing my button in my button is the component itself. It's just a button. And since everything is already rendered on the server side, This doesn't show up as a unknown element inside of the, the form. It is an actual button component that still has all of the the inherited attributes of an HTML [00:35:00] button.

So that gives us a couple of ways of, you know, fixing some of the issues that come around with web components. And that's pretty much it for me. If you wanna get in touch again, follow enhanced dev on Twitter and on Mastodon. I think I've got that set up as well. Or you can talk to me as well.

Hit up enhance.dev for more documentation. And there'll be a link to the Discord from there in the top right hand corner as well where you can talk to any of us at begin and ask us more questions about enhance. I just wanna say thanks. I, I know that, you know, it's hard for me to take a look at the chat while presenting as well, but I think we have plenty of time for questions, so I'm going to pause now and, and let people jump in with questions.

Awesome. 

**Brian Rinaldi:** Let me gonna change the way out here. There we go. That was great. That was so really cool. I, you know, I started looking at enhanced myself cuz you know, when you guys announced [00:36:00] it, it seemed really interesting. I'm curious, like the file based routing and stuff feels a lot like, like common framework.

You know, like a next kind of thing or, or but how does it compare otherwise? I mean, it seems like you all have, have intentionally kept it simple and focused on a particular kind of solution as opposed to like a next, which is like obviously react based, but it's, it kind of does a billion things I can't even keep track of.

Is, is that, is that kind of like the purpose of, of you wanna kind of keep it very focused on. Doing SSR and web components or, or are you, do you have other plans for it 

**Simon MacDonald:** going. Well basically we, when it comes to enhance, we want to focus on the expansion of the custom elements on the server side. So enhance is very specifically for that.

If you want it to build a. Functional web app, which is your, you're rendering your HTML on the server, but you're using other [00:37:00] frameworks. You could drop down another level to what we use. And also another open source project at work. It's called Architect and architect is a way of you creating, you know, restful like web applications with whatever type of front end that you want, and deploying them to aws.

With enhance things are a bit more opinionated. We want to provide a way for you to super side render these, these custom elements, these web components, but again, try to make it as simple as possible for people so that they can just start writing web applications and not having to install 4.6 megabytes of JavaScript in order for things to work.

So it, it is, it is a bit more opinionated in that way. Mm. 

**Brian Rinaldi:** So Oliver's asking, just love to hear about how, more about how the SSR is handled, I guess like how does, how does that work behind the scenes? I know, like, like say if I were, I mean, do you support specific deployment options for ssr? Like, I'm assuming these are.

Converted somehow into some kind of lambda or something like that [00:38:00] behind the scenes. How does that all 

**Simon MacDonald:** come together? Yeah, that's a good question. And the way that it's almost like a layer cake basically. So it's hard, hard to do the hand motions, but at the very bottom we have aws. And then in order to make deployment to AWS easier, we have the architect open source project.

And then on top of that we have the enhanced project for doing the server side rendering of the web components. In order to connect the two things together, there is a plugin that connects, architect and enhance. And that's what allows us to be able to do the routing and make sure that whatever route you hit loads, the correct enhanced page, does all the custom element expansion and returns the HTML for you.

That kind of answer the question or do we need some more detail on which I'd be happy to provide? 

**Brian Rinaldi:** I'll, I'll wait on Oliver to, to respond and see what he says, but I, I think I get it. So, so by default, enhanced is not connected to architect for the service I'm running. This would be like, you have to add that on [00:39:00] if you wanna be able to do that.

Is it, is that what you're saying? 

**Simon MacDonald:** When you create a, you can. It as, I'm gonna be a, a, a senior engineer. I'm gonna say it depends. But what I'm really saying is when you create a new enhanced application using the mpx, you know, create, enhance from from MPM or basically doing or using our Begin CLI to create a new application, we set up all of those connections for you by default, which makes your life a lot easier.

If you wanted to use Enhance outside of. You know, application structure you could use it specifically to expand your, your custom elements as well. So you could just use the MPM package itself. But we've already gone through the trouble of making that a heck of a lot easier for you. So we're hoping that people use the application route instead.

**Brian Rinaldi:** Okay. So Oliver says so the, the AWS infrastructure is under my account rather than begins, right? 

**Simon MacDonald:** You can, you can choose. So if you're just getting started with begin, you may wanna [00:40:00] deploy to the free tier. And so that way you don't have to mess with setting up AWS certificates and credentials and all that other sorts of fun stuff.

But if you wanted to jump off and use your account, you can definitely do that. . 

**Brian Rinaldi:** Okay. Is that like just a configuration within within architect or like how I set up my configured 

**Simon MacDonald:** architect for deployment? Yeah, you can deploy either through begin or directly through architect. So Okay. And your, the credentials you want to use, It's up to We'll make it really easy for you to deploy, to begin and get your application up and running. But we have, we always tell people we have escape patches. We're never gonna lock you in to begin as a vendor. If you decide that, oh, I'd rather go to my own AWS section, you can eject your application and begin.

Use architect to deploy directly to aws, or if you decide that, oh, architect is not the solution for me either. You can eject that application from architect and use things like cloud formation to deploy directly to [00:41:00] AWS as well. However, never try to write cloud formation by yourself. Even really simple applications end up becoming like 1200 to 1700 lines of really nasty XML or yaml.

So yeah. Nice. Yeah, you need a tool to help you manage that. And architect is actually a, a great tool for doing it. 

**Brian Rinaldi:** I have, I have a recent experience with that pain because Yeah. I had to build something cuz reinvents coming in. Only a couple weeks I'll be there. I dunno if you will. But and I had to build something for that using an internal AWS system for.

And the only way, the only thing accepted is cloud formation templates. Which is funny cuz I talk to people at aws. I'm like, I'm like, I need some help with this cloud formation. They're like, Hmm, I always use Terraform or some, you know, or the cdk. And I'm like, well, Yeah, I wish I could, but you 

**Simon MacDonald:** can't. Well, I, I would suggest that you, you build it using architect and then you can do the dry run option, which will [00:42:00] generate the cloud formation file for you, and then you can just deploy that and through your internal system.

Sadly, I, now you tell me. I'm sorry I didn't, you should have, should have asked me. You should have asked me ahead of time and unfortunately I won't be at reinvent, but Brian Laro will be there and I'm sure you guys will catch up. 

**Brian Rinaldi:** Ah, yes, I know this Brian Luu fellow probably. Yeah. So Seneca s so does it only deploy to aws?

Are there other options for deployment? 

**Simon MacDonald:** Currently it's focused on aws and that was a decision that began made a while back. We find that when you focus on one cloud provider, you can really compound your kind of investment in things. We would love for other cloud providers to, you know, have all of the things that begin an enhanced need in order to deploy.

It would be great to be able to put this on AWS or, or Google Cloud platform, but, you know, we're we're a small team and it's an open source project and we would love to have poll requests on this. But one of the main reasons [00:43:00] why we picked AWS initially, they never break you. That's a wonderful thing about aws.

It's also a terrible thing about AWS cuz you log into the console and there's 140 different things to pick from. And the reason there's 140 different things to pick from is every time they introduce a breaking change, they just create a new service. So there's good and bad points about that. The good points is, you know, code that you wrote five, 10 years ago still runs on aws.

You know, the bad point is, You log in, you're like, oh, I'm overwhelmed by the paradox of choice right now. So, 

**Brian Rinaldi:** Yep. So one another question we have is how does performance an overall compute effort look like? When I hear cloud functions, the framework blowing up my wallet is my top concern. , 

**Simon MacDonald:** Yeah. You have to be a really.

I think it was like 89 requests per second before it starts becoming worrisome. Or was it, it, it was some ridiculously high number of requests per second before you start having to worry about [00:44:00] the amount of money that it's gonna cost you. When it comes to Dynamo db, which we use to backend a lot of the stuff you get 25 gigabytes of storage for free, and then it's like a dollar 25 for each additional gigabyte.

Yeah, you get millions of invocations of your cloud functions for free as well. So like I run, I've run multiple applications and I think I'm paying 23 cents. A month on my AWS bill and it's, it's mostly S3 storage. In fact, it's all S3 storage, so it takes a while before it becomes an issue. There's definitely a crossover point where you're getting so many requests per second that you would wanna move over to like an e c two instance or something like that.

And I'd say take a look at the Duck bill group for some of their, you know, they've done a lot of research into the pricing of aws. , but for the most part we haven't run into any issues with that. And our AWS bill to run the entire company is shockingly low, [00:45:00] so we're pretty happy with. 

**Brian Rinaldi:** So, okay.

It looks like Brian, if that is fake, Brian Laro 

**Simon MacDonald:** is real. Brian, it's, it's real. Brian Laux, I'm sure. Yeah. . 

**Brian Rinaldi:** Cuz Jen was asking if there's any connection with between this and Amplify, but it sounds like no direct connection, but you can use them together. 

**Simon MacDonald:** Yeah. 

**Brian Rinaldi:** Sounds like kinda the answer.

Excellent. Well, this was awesome. I don't see any other questions, but I definitely, I, I, I'm excited to really take this for a spin myself. Because it, it looks really cool. I, I definitely wanna, wanna give it a shot. So I really appreciate the presentation, Simon, and I really appreciate everybody attending.

Please be sure to come join this Thursday at 1:00 PM We've got Stephanie Echos is gonna be interviewing with Sean C. Davis. It should be, it should be a really good conversation, so definitely check that out. I'll also be announcing December events and things like that coming soon. And go ahead and just grab your ticket for for the jam.dev.[00:46:00] 

Now. Why not? It's free. So, alright. So thanks everybody. Thanks Simon. I'll see you next time. 

**Simon MacDonald:** Thanks everyone. And if you decide to use Enhance and you like it, please let me,

