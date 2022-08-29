---
_build:
  list: false
  render: never
---

**Ben Hong:** [00:00:00] I'm excited to talk to you today about a topic that's near and dear to my heart, which is helping people to unleash the power of serverless functions with next, for those who don't know me, here's a little bit about what I do. I'm a staff developer experience engineer at Netlify a view core team member, NEX ambassador, as well as a Google developer.

But enough about me, let's jump into the meat of it, which is the idea of what serverless is. Serverless can be confusing for those kind of just getting started with it, because it's about the fact that someone else is managing it. You're not the one starting it up, trying to scale it or maintain it.

You're simply leveraging the benefits so that you can focus on the business problems that need solving for your customers. That said, of course the question is that's nice and all, but why should we bother with serverless? I don't know about you, but especially as a front end developer, there's a lot of times where I'm trying to get something from the back end and there's something I might want to customize, or maybe I have an idea on how I can make things better, but when it comes [00:01:00] time to pitching something well, it's, a bit like Bob, denied well, here's the thing.

What, if you could build your own APIs that like sit in the middle between what the backend is giving. And while so interfacing with what you have on the front end code. Now some of you are probably thinking wait, Ben. But I already have enough to learn. Serverless function seems to have a pretty steep learning curve.

There's something about AWS and I gotta learn about Lambda functions and how do I spin up an environment? And then I have to figure out how they talk. I know it's a, but what if it didn't have to be let's go ahead and start by breaking down what serverless functions are like at its core. And so here we have a serverless function dot JS.

So let's go ahead and break this down. Let's start with the exports. When you're looking at this might look a little weird, but the thing to remember here is that when you're writing serverless functions, you are writing Java script, that's running on the server. So in other words, you're not in the client, you're not in the browser, you're actually in a node server.

So the syntax here for exporting is a little bit different in that we have this export dot handler rather than the ES six, that most of you are probably [00:02:00] familiar. But so that's like a little bit of a change, from there, what do we have? We assigned the handler an ay function, and the ay is important here because just like other APIs, your serverless functions also should be ay, finally, like any other HTTV call that you might make to an API, you actually need to return a response.

And in the response, it's basically an object that contains a couple properties. And so two key ones you'll most be commonly be using. The status code as well as the body and believe it or not, that's all it takes to write a serverless function. Now that we've seen what serverless functions really consist of.

It's time to show you what it looks like in a real code base. So jumping right in what we have here is a Canto PEX. And what it's doing is it's calling the poke API in order to fetch all the information that's coming down inside of our homepage. We have a reactive data property for PEX. And then when the page is actually created, it'll go ahead and actually fetch from the PEX.

And then in addition, because the original response [00:03:00] within the PEX doesn't actually contain links to the images. We have to make a second call in order to modify the original response so that it comes back in one piece, right? So this is already a small example of how we tend to on the front end hack together, those APIs in order to work the way we want it to, we don't wanna have to separate this call out.

We want one object that comes back with all the data that we. , but here's the thing, right? Is that one of the problems with this is that we're doing a lot of work on the client side. We're waiting for the client to actually like when it's created to not only do the fetching, but then to take that information, process it and then return it in a way that we like before we actually even do anything to the UI.

And so really, if we think about it from like an ideal front end developer workflow, what do we actually really want? We just really wanna fetch from an end point, let's call it slash API slash POL. and then assign it to PEX. That's all we wanna. So let's go ahead and show how this would work within the serverless context to get started using serverless functions.

The easiest [00:04:00] way is we're gonna leverage the Netlify CLI API's gonna abstract a lot of the configuration I setup that we typically have to do and make it really easy for us to work with it in our native dev environment. And so you can see here inside of our site, that we have dot Tomo to indicate that we basically have everything set up for Netlify.

And most importantly, for this talk, we declare that the functions will live inside of a folder for Netlify. And so here you see that's created here with Netlify functions and we even have our hello world right here. Now, how do we combine this with our next step? Since we're using Netlify CLI what we can run is nullify dev.

And what that's gonna do is actually gonna set everything up as far as like setting up a backend server with the API calls, proxying everything. And actually also simultaneously running our. App so that we can basically have them talk to each other without dealing with cores and all that stuff.

And so you can see now that something's actually changed, right? For our pro instead of running at port 3000, which is a default for next. We now have port 8 80, 88. And so what's really cool about this. Now is check this [00:05:00] out. If I go to slash.net laies slash function slash hello world. You'll see that I actually see the response that's written inside of here.

And so if I change this right now to be like new, more serverless, and I say this. It'll actually go ahead and hot module reload that you'll see actually here it reloaded the function. And when I refresh this, you'll see that our server actually has basically updated like hot module reloading, which is really great.

So let's go ahead and implement what we wanted to do in our perfect world. We said, what we wanna do is we have a PEX endpoint. So what I'm gonna do is create a new file called PEX, cuz this is what we're gonna hit PEX do. And we'll do the exports handler. It'll be an async function. And inside of here, we're gonna actually just copy over everything we just did from here.

And I'll just copy this whole constant for PX and we'll drop it in here. And then what we're gonna do is gonna make sure we return a response. So I'm gonna return a response. [00:06:00] Whoops. What we gotta do is return a response, right? So we're gonna return a response code of 200 and then with the body we're gonna J on does stringy our PEX.

The thing we have to do though, before we go ahead and do this is remember that right now, serverless functions are working within the node context. So what this means is that the fetch API is not available via the browser. Like we're used to on the client. So we need to do real quick is we need to add a dependency.

And so I've already installed this for the sake of this demo, but basically we'll say that cons fetch equals required node fetch. And so once we save that we should now be able to actually test this out by going to PEX function by going to our nullify functions slash PEX. And you'll see that we actually get the response back exactly as we expected.

And so if we go back into here, let's see how this would work in practice. So I'm gonna go ahead and delete all of this and then I'll leave the JSUN cause we're gonna need to J Sonify this. And then we just do slash.net laies slash function slash PEX. And then if I [00:07:00] save this. there you go. Everything should be good.

Now I'm gonna go ahead and let's get out of this endpoint, just go right back to home. And once I'm refreshed, you'll see that everything actually works exactly as we expect. And the beautiful thing about this now is that we've offloaded all those computations onto the serverless function, rather than doing it directly on our client side.

And so the one final piece we wanna. the final piece I wanna do for this demo is to show you that right now, as we can see this part here is a little bit ugly, right? The slash dot neti slash functions. We really want it to be slash API. So how can we go ahead and make this work? It's actually as simple as going into our nullify Tommo, and then we're basically gonna create a redirect and say that look, when we get a specific pattern, we're gonna wanna make sure that it routes to the right place.

And so in here, We're gonna go ahead and say that whenever we, this, we call slash API, we wanna go ahead and redirect it into our serverless function. So this is where this comes in and then to show the wild card, we just. The colon [00:08:00] splat, that's the syntax for it. And so once we save now, you'll notice actually too, is that it'll actually nullify CLI automatically reloads your Tomo for you.

So again, is that kinda got that hot module reload thing going on, which is awesome. And so now when I go ahead and switch this over let's break it first, right? So I'll say API V two and I save this should just break and so good. Everything's broken. And then to show you, it works, I'm gonna go ahead and make sure this is APIs.

And then we delete the functions and. and now when I'm refresh, check it out, it works. Just like that. And so there's so much more that we certainly could do with this. Because now that you've offloaded this logic into your server dysfunctions, you now have the ability to do things like customize the response even further.

So maybe in the future, it's like refactoring the data so that it actually capitalizes the string in advance for us so that we don't even need to do it on the front end. So to wrap things up. Tools like Netlify CLI, which allow you to work with serverless functions the way you would be normally used to working when you're working with your UI.

[00:09:00] That to me is the critical piece of infrastructure that makes all the difference to making serverless function that much more accessible to developers. And so at the end of the day, really, to me. Serverless functions, provide developers with superpowers to really have the freedom and flexibility to start architecting their solutions in ways that make the most sense for them without worrying about being limited.

Of course, this is a 10 minute talk and there's only so much I can cover, but in case you didn't know, I have a course on jams deck explorers, which is a free video course platform from Netlify. And in here, I get you up and running with serverless functions in less than 30 minutes. And so the best part about this is you don't need any framework.

And with that, thanks everyone for spending this time with me. If you're looking for me on the internet of things or have any questions, I'm basically under the moniker, Ben Hong under all the things. So there's like my Twitter, YouTube and Twitch with that said, thanks again, everyone. And I hope you enjoy the rest of the conference.
