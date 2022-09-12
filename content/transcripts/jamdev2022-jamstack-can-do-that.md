---
_build:
  list: false
  render: never
---

**Charlie Gerard:** [00:00:00] Hi everyone. Thanks for joining me today and thanks for the intro. Brian I'm excited to talk about things that you might not know the gems tech can do or things that you're excited. The gems tech can do. It's either like the jumps stack can do that or the jump stack can do that. It depends on how you decide to see.

But before I dive into the topic I've been introduced already, but I'm just gonna repeat it. Why not? My name is Charlie Gerra. I'm a staff engineer, a neti I've been there for a couple of years. I used to build the Netlify app. So I was on the product team. You might be familiar with R UI.

And for the past few month I actually switched to a developer experience team. I've had the opportunity to see the product from different angles which is really interesting. I am also part of the Google developer experts group and my specialty is in web technologies. If ever you have any question about that, feel free to reach it.

Reach me afterwards. I am the author of [00:01:00] practical machine learning in JavaScript and overall I am a self-proclaimed creative techn. I absolutely love exploring how far I can push the boundaries of what can be done on the web. And hopefully I'll show you a bit of that in this talk. First of all, to make sure everyone is on the same page.

I know that this whole conference is about the JAMstack. Some of you might already know, but just in case people are just joining now, I'm just gonna have a couple of slides defining the gems stack. So Jay for Java. A for APIs and M for markup. So it's a type of front end architecture that relies on pre rendering pages and serving them at the CDN level.

So it's open used with static site generators, such as Gaby 11 T view, press Hugo and many more. Okay. But the kind of issue with static sites generators being associated with the gems stack is that there is still a common misconception that the gems stack is only good for blogs or similar static sites.

So people might think like a platform [00:02:00] like Netlify is good for hosting your site projects, but not for bigger sites. However, that's not necessarily true, especially with the growth of the API ecosystem. You can build complex applications with this architecture. For example, net LiFi is built on net LiFi and it's a fully featured developer tool that serves millions of developers, but in the stock, I want to showcase a few different examples of things you can do in the job tech that you might not know.

First of all, I want to talk about building realtime multi-user experiences. So if you have experimented or built applications in the past with realtime features, you might have used tools like sock IO, but in general, to set up web sockets using this tool, you need to be running and configuring some kind observer.

If we have a look at a short code sample, if you wanted to set up SoYo in in an express server, You would start by requiring the nots modules needed. Then you would define a route here, like a [00:03:00] simple home route that would serve a file. And to start the website kit connection you would do IO dot on connection and hearing this code sample every time a user visits the page, it would log the message, a user connected.

And once the service side receives a message from the client side, with the content chat message, it would. Plug it. And finally, you would start your server on a specific port to start the app. However, this is not, if you push that code to Netlify, it's not gonna work. The gem stack, like this architecture is about not having to really configure and run your own server.

So there is no way to run this particular piece of code, right? Like when you just push it to net five. So how can you build real time experiences on the gems stack then? This is where I want to talk about very cool library called Croke. So I'm not gonna go into too much details about the internals of how it works.

Here's a little animation that you can find on there, on their site that illustrates briefly how it works. So when a Crooke app [00:04:00] starts. It connects to a nearby cloud-based reflector and a reflector is a type of public server in the cloud. And it mirrors user inputs to a VI computer running on each user's local client.

So crooked makes shows that these VI computers stay in synchronization. So every user has the same shared experience, even though no central server is coordinating things. I it's like a very brief explanation. If you want to learn more, I would recommend to check out the docs. And if you if you blog post, it's a type of architecture I didn't really know before.

But the most important thing to know is that there is no dedicated server and server side code. So as this very small example, I build like a tiny demo of a real time. Multi-user UI, where a square follows the mouse of one client connected. And the change is reflected on the screen of the other client.

So I wanted to build something a little bit more fancy, but I didn't get the time. And in a way I thought maybe actually that's a good thing. So I can show you a code example of how to get [00:05:00] started with this tool instead of showing something that's too complex. So let's have a quick look at what that code sample could, would look like to build something to start building something like this.

So if you're implementing Croke in a react app, for example, you would need to start by importing a model and some custom hooks from Croke. And then this tool relies on a concept of model and view the model handles the calculation and simulation. So here we're defining some initial properties. We have a position objects with an X and Y we have an array for the number of people connected et cetera.

And then we have some logic to handle new users that will be connected to the app and to update the position of the element on the. From there, we can have an app function that registers the model on load, and then you wrap a component in a crochet session. And you, where you have to provide an IP an API key and specify the model that you need to communicate with.

And then finally you [00:06:00] have your animation display component that uses some of crochet's custom hook. The first one to get the model reference and here I created a published move function that will publish some data back to the model when it's invoked. And finally, we're calling this function inside an on mouse move event.

So we get the coordinates of the mouse movement to send it back to the model. So it updates the position of square on the screens of all the clients connect. And then we render the, my little I called it circle, but it's a square. And I finally were rendering like the deal with the coordinates.

So this is like a very quick work through, I don't expect people to understand completely in three slides, how all of this works. Under the hood, but the main goal is to show that you can start building realtime applications and that can be done on the gems stack, which is really cool if I've used to play with.

So I quite a while, and knowing that now I don't have to set up the service line myself and I can just do front end code is is really cool. And my little demo is only a square around the screen, but if you look at their [00:07:00] documentation, you could start to think that you can create a Figma like app only without framework on the gems.

And there's another tool that I discovered only a couple of days ago, so I'm not gonna go into it at all. But I thought that I really wanted to mention it. It's called live blocks. So it also allows you to do real time experiences on the JAMstack. And that the example that I saw the other day was a live, like a piano app that you could share with your friends and you could jam together.

But yes, I'm not gonna have the time to go into this, but if it, if you're interested, you could have a look at life blocks as well. Now another kind of technology you might not associate with the gems stack is machine learning. So when you hear machine learning, you probably don't think about the gems stack right after.

But you can actually do some ML in the front end using the gems stack architecture. So no real need to set up some complex backend. One way to do ML in the front end is with the help of tools like TensorFlow, GS and ML five GS. So there are more tools out there. It's available on [00:08:00] GitHub, if you want to do some searching, but if you're only getting started with ML in JavaScript, I, these other tool that I would recommend.

So apart from talking about the tools, I'm gonna go through three different things that you can do with ML on the gems. So first using a pre-trained model. So a pre-trained model is a machine learning model that has already been trained with a lot of data. So you don't need to do the training yourself.

I was trying to find some kind of analogy that maybe from dev would like that would make it easier for people to understand if you're not familiar with machine learning. So I thought about maybe like Webpac, so to be able to use Webpac you don't have to know about what it doesn't do.

The hood, you. Indicate the files in your code base and where they are, and it generates new files based on some configuration. So it's kinda like mesh like a machine learning model kind of feels like that as well. So using a pre-train model, you can feed it some new sample data and it will return some predictions based on what it learned from the data that it was trained with.

So let's [00:09:00] go through an example of building a small demo to run some toxicity classification on a piece of. So you need to start by importing intensive flows and the toxicity model. Then you need to load the model and you can specify a threshold for accuracy between zero and one. So here I have 0.9 because I want it to be really accurate.

But so zero would be, I don't care about the accuracy and closer to one would be. I want it to be really. And then you can have a predict function where you call the classify method on the model, passing a sentence and returning some predictions. So if the match property on the prediction is true, it means that the sentence contains some toxic content.

And from there you can get a label representing the type of toxicity. For example, if it's an. A threat, something obscene, et cetera. And you can build the rest of your application with without prediction. So in a few lines of code, this is adding ML to a purely [00:10:00] front end application, which is pretty.

Another thing that can be done is run custom algorithms in a serverless function. So net five functions are serverless functions and they allow you to write some backend code without having to configure a server. So I know that I said that the gem stack allows you to like, not have to write backend code, but like serverless functions allow you to leverage the ecosystem of not just modules that usually run on the server.

But without having to maintain or configure an actual server. So you can add functionality to your application without having to have so much a backend knowledge to dive a little bit more into how this works. Let's go through an example of using a, not just module that implements a machine learning algorithm called random for S classifier.

So if this means nothing to you again it's totally fine. I don't expect you to be a machine learning experts. The main goal is to see how it can be used in gems stack applications. So this quote sample is about predicting the species of a flower based on some properties like pet length with et [00:11:00] cetera.

So that's a classic like starter project that you would do in machine learning. And that's why I chose. So we start by requiring the module. And then here we have, I have a variable called like test data that will hold the value, passed to the serverless function when it's invoked.

So you could think that your page would have an input HTML element in which a user could write something about the properties of the flower that they want to predict and on submit or you invoke the serverless function that runs some machine learning. So here we have the original data set very small but that is going to be used to train the algorithm.

So we have an array of three different objects that contains the properties of flowers and their species. So it's different from the previous example, because at this point there is no pre-trained model. We're going to run the training step inside the server, less function. Then we create a new instance of the.

And we give it our training data with the fit method. We indicate which property we want to predict. So here the species, [00:12:00] and then we call the predict method, passing it, our new data coming from our request that should not have species indicated because this is what we're trying to predict. And finally we're returning the prediction in the body so we can display in the front end if we want.

So in this example, we can see that we wouldn't be able to run this code a completely client side, because it's a, not just specific module, but we can leverage serverless functions to be able to use this this module without having to set up some backend environment. And finally we can do some ML by calling some APIs.

So here we're gonna see how to use the deep AI to do some AI automated content moderation. So here we're in a serverless function. Again, we start by requiring deep AI. Then we set our API key. And we call the call standard API method with the type of classification we want to do here at content moderation.

And we pass it the link to the path, to an image and here is probably a [00:13:00] cat. And finally we return something from our function that has the output of the prediction. So again, in a few lines of code, we can add some machine learning to a JAMstack site. But even though that's, pretty exciting and hopefully, maybe you have some ideas of things that you want to play with.

There are some limits to keep in mind that I'd like to mention that I would need to mention. First of all, do not use the not GS implementation of TensorFlow GS not in a jam stack app. So even though I showed you how to import a pre-trained model as a client side package, TensorFlow GS also has a node GS implementation that you can use.

At first I thought it would be cool to use it in a serverless function, but this is where I realized that there are limits to this net five functions run for a maximum of 10 seconds and sometimes loading a TensorFlows model in your application can take longer. So my function was failing. It was basically not actually finishing to run what it was supposed to run in 10 [00:14:00] seconds.

So it was just failing for longer running tasks. You can use background functions that run for a maximum of 15 minutes, but then there are implications in terms of your user experience, because if the user has to wait for so long to get the predictions back, That's not super great. So that's why if you want to use TensorFlows, I would recommend to use it client side and only use the pre-trained model feature or also something called transfer learning that I didn't talk about.

But not try to create your own model unless you're building an application, that's about having some kind of graph that shows the training process. So the user would be expecting some delay, but otherwise I wouldn't really recommend running the no GS implement. But also server less functions cannot exceed 50 megabytes.

So depending on the amount of nodes modules you're requiring your functions might fail. If you do come across this issue, one workaround is to split your logic into multiple functions. But depending on what you're doing, this might not be [00:15:00] possible. And also that's not always the best architecture to have to split something into multiple functions.

If it's actually supposed to only do one. So now that I showed how to create real time multi-user experiences and do some ML on the gems stack. I want to talk about a third thing that you might not know can be done on the gems stack. And this is IOT. That's like the latest thing that I've been looking into.

So internet of things in case people are not familiar. But for this one, I'm going to focus on the Philips Q lights. So there are these are internet connected lights. I think that I've seen a lot of people having lights in their background, like mine is running right now.

So some of you probably have some, if you don't have Philips Q light, you might have other lights, but. In general, you can control them with an app on your phone but you can also control them using JavaScript because there's an API that you can ping. So I've been looking into controlling them on the gem stack, using serverless functions.

[00:16:00] Before I dive into the code. I want to share a little live demo with you in the chat. But considering that there is a little delay, I might keep going with my slides while you're playing with the demo. I don't know. Let's just see what happens. I'll just share it and see what people do. . So there's only three buttons in the.

It's like green, red, and purple. And that should be connected to whatever is my lights are behind me. Yeah. Okay. So people are studying. Okay. So this is working Woohoo. So it's like there's no throttling or anything. If it crashes because too many people do it I'll just restart them. But yeah.

Now that I can see that it's doing something in the background, I'll let people play with it, but I keep going with showing my good. Okay. So knowing that the Philip two light bulbs have an API, I start by requiring the node fetch package. And then I defined a comment that I want is really going wild in the bar.

I love it. Woo. Anyway so I start by defining a comment. I want to. And here I'm [00:17:00] changing the color of a SP to a specific one. I will also specify the IP address of my lights and the username to be able to authenticate there's like a party going in my room now. Then you can notice that I'm using process dot end and the great thing about net five functions.

Is that these secret tokens are pulled directly from the one that I saved in the UI. So no need to have a dot end file or anything to be requiring these these environment variables. So then if I do have the IP address, I fetched it from Netlify and I have a username to authenticate to my request that I'm doing to the Phillips API.

I do put request to my lights to to send the comment. So in a few lines of code, I can tinker and learn more about IOT, but. There's at this point, if we only look at this piece of code, there's a catch that I need to mention, and this is where it's gonna get I got really into this, so hopefully you'll find that interesting as well.

So first of all, the piece of code I just saw you does not work once deployed or at least [00:18:00] not as it is. So bear with me. It's it works on my machine, but it's gonna get more interesting. So the reason why it doesn't work once deployed is that the IP address of the Phillips shoe lights is private to my local network.

So it's not publicly accessible. So as the code is running from a civilist function, it is trying to ping the API, using my private API address that does not exist outside of my local network. So there's multiple ways around this. One is called port forwarding, and you can basically configure your router to expose a specific IP address publicly.

And this could then allow the lights to be controlled from a deployed function. However, I would not recommend port forwarding for security reasons depending on where you live, if you're in an apartment block that has like a lot of people around, some people might be looking at all IP addresses around.

Doing some shady stuff. And if they do see the IP address of your lights, that you made it public, they could easily ping it and remotely control your lights. And that could end up being an access point to other devices on your network. So [00:19:00] I would not recommend doing that. You can try but then don't blame me if something that happens.

There is some extra work to get it to work when deploy. But even just as is I still, I think it's still pretty exciting from a learning point of view, to be able to tinker and learn more about IOT while being a front end developer, cuz the code sample I showed you with the IP address, it would still work locally.

It just can't be controlled from outside. So there's another work around using a CloudFlare where you can use, I think it's CloudFlare tunnel. As some kind of bridge between your local network and a publicly available URL. But when I went through some blog posts the idea of having to spend some time setting up a CloudFlare account, set up some configs in a dashboard that didn't really excite me.

So I tried to find another way and I did, it was a bit more complicated, but it was also a bit more fun. So the way I personally went about it is to use a raspberry pie and the Netlify CLI. So to make it work, the raspberry pie is not necessary. You can run what I'm about to show you on your laptop.

But I usually have multiple [00:20:00] terminals windows, open tabs, open and running different apps. So I will probably forget which is running what, and if I close it, then my, my experiment is not working anymore. Whereas in the Rasberry pie, I can run that independently. I have it in the corner of my apartment and I don't care.

So you can also run that in a second laptop if you want. But the main thing that makes it work is this command Netlify dev dash live. So if you haven't used the Netlify CLI before running Netlify dev starts your local server, like Y start or NPM start, but adding the dash live flag opens a tunnel.

Between your local host and the URL that you can share with anyone in the world. So that URL is publicly available. It will look something like this. I think that's exactly the one that's running right now, actually. So that URL looks something like this, you have my sat name. So the one that you, that I shared with you is doesn't have the hash and the live.

But the one that's running on my raspberry pie has the.live and the hash So what's going on then? Is that in what, on what I deployed on net five? It's [00:21:00] actually, so in my UI, I can use that public URL generated by net five Def live, and I do a fetch request and send a particular color to trigger my lights.

And here you go, you got some net five powered IOT that I hope you had fun playing with. If you don't want to use the Netlify CLI no worries. There are other tools that create tunnels like Enro or local. I try them both. So it works. Personally I find the net finds CLI more convenient, but it's all up to you.

The most important part is understanding that to get this to work from outside, for people to be able to remotely control it, you need some kind of publicly available URL, but doing it on your local network with only your internal addresses is totally fine as. So in this example, I showed you how to interact with an IOT device that has an API.

But what's really cool with IOT is to build your own devices. So just as an FYI, this solution also works to interact with internet connected Arnos. So I tried it with the adrenal 33 nano IOT. And I got just the built in L E D to turn [00:22:00] on and off by pinging and net five function. So for this micro controller, I had to write some adrenal code that needed to be uploaded to the board.

So not all of it is JavaScript, but you could imagine a solution where the AR adrenal code is already all written up. And what users have to do is just uploaded which could be done via website using webs V. And then you would indicate the types of comment that can be sent to it in JavaScript.

So from a user's point of view, they would they wouldn't need to know much Arno. So talking about triggering the builtin, L E D maybe isn't the most exciting thing, but you can connect lots of different sensors and actuators to the board and send comments by RGS. So if we look quickly at the code sample for the function that communicates with the adrenal, there's not much difference from the one triggering the Philips slides.

I still need a device IP address. That's on my local network. And the, then the syntax for the second argument that I passed in the URL, the comment is a little bit different because in Arduino, I'm handling messages by looking at URL parameters. It wouldn't work the same way as the API exposed by Philips.[00:23:00]

So I'm quite excited to keep diving into this hardware plus JAMstack thing. Cuz I've been playing with REOs for a while and if there's something new to learn or new ways to make it work, I'm all for it. But also I'm always happy to find ways to maybe bring more people on board to trying things.

Cuz it's just pretty fun. If you're interested and you're not quite sure where to build. One idea would be to build some build lights. If you're using NFI, you can use what is called event triggered function. So if you call one of your servers functions deploy dash failed JS, for example, whatever is in this function will be triggered when a deploy fails.

So you could turn your lights red when a deploy fails and back to green when it's all good. But even if you don't use net fine, I'm sure that whatever platform you're using has some kind of web hooks that you can use to also trigger lights based on. And you can go from there. But anyway, one last thing that's pushing the limits of the gems stack is interactive installations.

So once again, bringing the gems stack outside of the browser, but what do I mean by interactive installations? Before I show a [00:24:00] couple of examples. I wanna talk about how so there's a few web APIs that can be used to connect devices to front end applications, such as web Bluetooth, web USB, and Webedy again, no can required using these APIs definitely fits into the gem stack because it's just like JavaScripts and like APIs.

And you can build some really fun stuff with them. So a first example is this hoverboard project that I built using the daydream, Google controller web Bluetooth, and three GS. I have a little controller device that tracks changes in movement using an accelerometer and general scope. So I connected this device to my UI using web Bluetooth.

So all the data is sent to the browser, using that web API. I then attached to the device to a skateboard on the floor and I stood on the skateboard. And when I tilt, left and right, I update my 3d environments built using 3g ADSS. And then I projecting the projected the whole thing on the wall.

Cause it was just more fun than being in front of my small laptop screen. But I actually had the opportunity to showcase that [00:25:00] installation at a real in person conference in, in Singapore, before the pandemic. So other people could could give it a try. So even if it looks like, oh, it's just running in my browser, actually know you can take that out of like in the world and have other people use it as an install.

And it's all running in the front end, if JavaScript, you can build projects like these on the jams stack. Another project that I built a couple of years ago connected some drumsticks with hardware that was measuring acceleration and movement connected them to a front end via web Bluetooth as well.

And it was sending over media commands so I could trigger whatever I wanted in the UI. So it's like in the gem stack, you can connect a lot of different pieces to create some some cool stuff. I dunno if you see, but there's these little lights on the drum sticks, these are like devices attached.

And I had some attached to my feet as well. And depending on where I was hitting, it was different sounds and triggering animations and stuff. So all of it in the gems stack as well. But anyway, I'm going to the end, I'm getting to the end of this talk. So as a recap, if you have [00:26:00] to remember only a few points it would be that gem stack is the only.

For blogs, especially with the growth of the API ecosystem and serverless functions. There are really tons of things that you can. Here. I mentioned real time. Multi-user experiences, machine learning, OT, but this list is not exhaustive and I'm still researching other types of applications that could kinda push the boundaries.

You can also do AR VR and mixed reality all in JavaScript as well. With the whole Metaverse or like just VR, really? If you're scared that as suggestive you're missing out, you can learn about how to build 3d environments using JavaScript and run a web VR experiment on an O quest.

That's possible. And finally serverless functions are great. Even if you don't run machine learning in your app, even if you're not excited at all about anything that I mentioned, I would still recommend that you give it a try and look at other examples that are there, cuz it can really give more power to your application.

But on this thank you so much for listening and playing with my lights. So I know that [00:27:00] I threw a lot of information at you in this talk, so I don't expect you to remember everything at all. I'm here, if you have any question, but if nothing comes to mind right now, no problem. You can reach me later.

I'm dev Def Charlie on Twitter, but otherwise thank you everyone. And thanks jam dev for having me.

**Brian Rinaldi:** That was amazing. You are definitely far more creative than am. I think it's pretty impressive. All the different ideas you had of how to integrate all these different things.

So I. I know I was inspired to come up with some new things. So hopefully other people were too. And one of the things I was gonna before, there's a couple of audience questions already, and folks feel free to keep asking questions. We still got some time. One of the things I think was interesting was that, apart from croquette, which, you seem like I had some built in hooks and react compos, like everything you're showing.

Doesn't matter what tool I'm building, whether I'm using react or I'm using view. Yes, exactly. It's, this is [00:28:00] gonna work anywhere, right? Cuz I'm just using JavaScript and I'm using APIs. . Yeah,

**Charlie Gerard:** I'm a big fan of JavaScript. Every time that I try to experiment with something new, I usually don't start with a framework because it's just too much.

I just wanna make it work. I don't wanna bother, spinning up a react app or I not, react to whatever other, framework i, still love GS. So anything that just like that works without having to set up anything. I love that.

**Brian Rinaldi:** Totally. Yeah. And so even you were using at the end there to standard like browser APIs, like the web Bluetooth, web mini the just, I think it's easy to forget how much you can just do without having to necessarily rely on a ton of framework code and things like that.

Nothing, not that there's anything wrong with the. Love, I use whatever

**Charlie Gerard:** works, but I still loves, so

**Brian Rinaldi:** yeah, me too. I think even getting to that point, like I. there's [00:29:00] sometimes a misconception that jams stack is oh, it's you have to do the front end has to be all JavaScript, react or view or whatever.

But I still, I still run great sites that still work with Hugo, for instance, that are just purely static, but still have like authentication, still have a dynamic, a search and so on. That don't necessarily have to throw all the tools at, I think that's what

**Charlie Gerard:** I really like about the API part of the gems stack is that it's framework agnostic.

You can add a lot of different services by, adding services that just use APIs and you just ping stuff. And. It's more, it leaves you with the decision of the tooling that you wanna use. It's not oh, here's a code sample. That's only a react code sample. It's no, let people choose what they wanna use.

**Brian Rinaldi:** exactly. Tom asked for static sites, are there limitations on how easily or how much state can be managed when leveraging backend [00:30:00] APIs or functions, any recommendations of tools to make managing state on a static site?

Whoa. It's a, yeah, right now it's a lot thing. Oh yeah.

**Charlie Gerard:** right now. I don't think I would have a good answer for this. I'm gonna say, I don't know. Okay. That's it?

**Brian Rinaldi:** Yeah. I, if, we're talking about managing state, it depends like there's client side state and there's like service side state.

I guess it depends on which state you're talking about.

**Charlie Gerard:** I don't and

**Brian Rinaldi:** yeah, this would be one of those things like a lot of like things. Phelp kit or whatever, or N JS have built in stuff for handling state as well. That may be one of the places where a framework makes sense.

Yeah. Okay. When you say devices for web USB, web Bluetooth, what kinds of devices would these be for accelerometers and other sensors?

**Charlie Gerard:** [00:31:00] So not everything works. So for example, with web Bluetooth it has to be Bluetooth, low energy. So if if a device is using Bluetooth, that is like a previous version that doesn't always work.

So I'll have a pair of headset. That don't connect via web Bluetooth, but but I saw experiments with pod. Pro that were, that was working with with web Bluetooth. And you could use the, a accelerometer and the gestures and stuff to trigger stuff in the UI. As usually as long as for web Bluetooth, as long as device is Bluetooth, low energy, it should be working with the API for web USB.

I did try it. I did try to upload a sketch Anno sketch via web USB. So that was working. I think that usually I'm not quite sure exactly. If there's different types of USB stuff, I'm not sure about that, but I think that you might have stuff for like keyboards. I think that maybe if you wanted to trigger lights on your keyboard via web USB or something, maybe you could do that.

And for web media [00:32:00] I have not tried it directly, but media is like usually a type of messages that are sent. So if you have an instrument that sends media messages. I think usually for people who are experimenting with music in Java script, I think they're using the web me API to connect to their controllers, but I'm not a hundred percent sure.

So don't quote me on this. I've mostly used webs B web Bluetooth and web BSB once with Audrey, but a while ago I don't know if there's examples that you can find on GitHub. I don't know if there's a list of available devices that people have tried, but I wanted to get more into the two other APIs I haven't tried yet, but later.

**Brian Rinaldi:** Yep. Makes sense. So let me ask you again about the light demo. So when you're running the application that people connected to where they're actually clicking to change the lights. Yeah. That's actually running on Netlify right? Yeah. That's and then, but you then you're also is it's a separate application that's running on the back end to [00:33:00] manage like that you're connecting to that's running on that or do we know?

Or is it the same application?

**Charlie Gerard:** I have the same repo running on once, but it was just like a personal choice. The only thing that needs to be running on the raspberry PI is the actual function the function code that connects to the IP address of my lights on my local network. Okay. That needs to run on the raspberry PI because then with net five Def dash live it's it's doing that tunnel between my local host and the public URL, but on net, I is the part of the, is the UI.

Pings the URL generated. So I have the same report running, but it was just a choice. I could have just a function file running on my respir pie. All I need is the URL exposed. So that I can ping it. Because,

**Brian Rinaldi:** so it's running on the raspberry pie, obviously there's no UI, but it's.

That is proxying that there could be function. I don't need it. Yeah. Yeah. So it's just proxy the function off to, so when, so you're calling, when you call that function [00:34:00] within your application, you're actually calling it on the raspberry PI not. That is cool. I would've I wouldn't have thought of that particular solution.

I have used things like a

**Charlie Gerard:** lot of different solutions and this one was like, ah, that's cool. I can, because I think I wanted the constraint of can I like just use net fire, like only NiFi things. Can I try to do that? And at first I was using local tunnel because the Netlife the live feature of the Netlife.

I CLI wasn't working on the raspberry pine because of a architecture problem. And like I, yeah, this is where I also used that project to improve the CLI because there was a problem with I think it was, there was a tool used that was running on the AMD 64 architecture and RA is RM 64. I don't really know that much about that.

I learned about it while debugging the thing. And now, So I will also improve the CLI because I had just a quick look into this. Even if you don't do IOT stuff, sometimes you end up improving the product you work for by going in weird ways. So

**Brian Rinaldi:** yeah. That's amazing. That's [00:35:00] awesome. So if for people you said who want to get started with the doing, sorry, machine learning.

You, your recommendation was to start with TensorFlow JS, or you said ML day JS. Do they both like they both accomplish ML five ML, five do JS. Okay. And then are they both basically the same thing, just different libraries or. Where they do different things. I,

**Charlie Gerard:** they do well, tenor flows does more things.

But I think so from what I understand, the purpose of L five GS is to provide a more accessible way to get into machine learning. Cause I think it's built on top of TensorFlow, GS, but. TensorFlows sometimes has some dragon that's can be a bit scary, like what's a tenser and all that stuff. And it feels like you might have to know a lot more before using it.

And M L fives is trying to expose the easier models to use or the easier ways to do things. So people are. Less scared to, to go into machine learning, but you can do object [00:36:00] detection in images. You can do text classification that I showed in M five GS. So if it's maybe like your very first time I would recommend to look at one of the examples of of M five GS and and then as you feel more comfortable and you wanna build more custom things, you can slowly get into TensorFlow.

You can also start right away with Sage. Yes. But I feel like sometimes people are maybe like a little bit scared of getting into this. So that's why I also mention M F I GS as well.

**Brian Rinaldi:** Awesome. Yeah. And and I think you, for me, I've took a lot of notes of like different libraries and stuff.

I wanna check out the realtime stuff was amazing. I didn't even know those really existed. I don't seen the web suck stuff, that's pretty awesome. Really exciting.

**Charlie Gerard:** Definitely. Yeah. I, yeah, I, yeah.

**Brian Rinaldi:** Sorry. No, go ahead. I, I think, no, it's

**Charlie Gerard:** just that. Yeah.

**Brian Rinaldi:** Okay. business go. Yeah.

Yeah. But so that one was croquet, right? Croquette [00:37:00] or Croke? Yeah. CRO

**Charlie Gerard:** I don't know. I said croquette, but I don't know if it's croquet. I don't know. So if somebody knows, they can tell me.

**Brian Rinaldi:** And so is that like completely free or is that something like a service you have to pay for?

**Charlie Gerard:** Ooh, that's a good question.

I'm not sure for the thing that I built, I didn't pay. Okay. But maybe as you, maybe if you want to be able to have more like a certain amount of users access an app, maybe starts costing money. I'm not sure, actually we would have to double check that cuz, but for my prototype to get started and look into it, it was free.

**Brian Rinaldi:** Okay. Very cool. And I love how your lights are still changing back there on occasion. Like still mess.

**Charlie Gerard:** the thing is as if there's a delay, it means people might be clicking and it's actually not happening until a few seconds later.

**Brian Rinaldi:** This was amazing. I, I. Like I said, I had a, got a lot of ideas and a lot of libraries to check out and I think it, like I said, it was great.

And then it shows [00:38:00] that there's so much more than just like the standard application that we could. We always talk about building. You can just do pretty much anything there's absolutely. Yeah, absolutely. Fantastic.
