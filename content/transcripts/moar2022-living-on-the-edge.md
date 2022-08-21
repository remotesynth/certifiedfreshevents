---
_build:
    list: false
    render: never
---

**Salma Alam-Naylor:** [00:00:00] Thank you. Hi everybody. Welcome to more servers. I'm really excited to be the first speaker of the day. I'm really honored to be here. Thank you so much. The title of my talk is we're all living on it, but what exactly is the edge, but before we get to that a little bit about. I'm Selma. If you've seen me around the internet before you might know me as white Panther, or if you use a screen reader, white P four M three R I'm still trying to find ways to make screen readers, read out it as white Panther.

And I help developers build stuff, learn things, and love what they do. So I'm a staff developer experience engineer at Netlify. And if you haven't heard of Netlify, it's a modern web development platform that offers you a huge range of developer tools to build, test and [00:01:00] ship your websites, projects, and products really quickly.

So I work with developers at all. Experience levels to enable and empower everyone to build a better. And I do that by writing guides and tutorials for the amplified blog, speaking at events and conferences like this, speaking on podcasts and all that fun stuff. And I also stream live coding on Twitch.

I stream front end development, CSS, JavaScript, jams, stack accessibility, and Yolo deploying unfinished. I also maintain a variety of open source projects from fun stuff to serious stuff, and you can find them on my GitHub profile and get involved. If that's your bag. So back to today, we're all living on it, but what exactly is the edge more and more cloud hosting providers and software as a service platforms are offering serverless functions at the edge, but what is the edge?

What are edge functions and why does it matter? [00:02:00] And we're going to answer these questions today by looking at serverless functions, serverless and jams, stack the edge. And finally edge functions on Netlify. But first question to set the scene. What is a serverless function? Now? I like to break things down as much as possible when getting technical.

So the actual first question we're going to answer is what is a function? Now? Our function is a bit of code that does here is a small JavaScript function. It's called print message and it simply prints out the message. I am a function to the logs, the terminals, et cetera. So that's the function, but what about serverless?

What do we mean by serverless? However, we can't talk about serverless without answering what is a server? So a server is a computer that can store and run bits of code. And those bits of code are the functions we talked about just now [00:03:00] servers can be physical servers, that's hardware existing in time and space or virtual servers software on a physical machine.

And these mimic the functionality of physical servers. So when we say server less, do we actually mean no servers? No, we don't. When we talk about traditional servers, we talk about managed servers like this. Here is a server room storing a bunch of physical servers. And despite being managed, you might notice that the cable management is poor backend code.

For example, code that reads and writes information to a database needs a running server to. And before the Dawn of serverless and the cloud in around 2008 to 2010, in order to run any code that required a server, you had to store and run that code on your own physical servers or computers [00:04:00] like in this image and maintain, manage, and scale them yourself.

For small projects, you could get away with hosting your code in your bedroom or in a server room like this. But this doesn't scale. When you have thousands of website visitors around the world generating potentially millions of requests. And what do we mean by scale? More requests equals more resources, which means more servers to get around this larger businesses required a group of networked or connected physical.

To ensure a fast experience for users and the cost of running these physical servers could get expensive very quickly. Think about popular times for online shopping, such as C. eCommerce websites that run on physical service need to respond to demand. If there aren't enough service to handle all that traffic, the site will become slow, unresponsive and people won't be able to check out.

I've actually seen some websites, operate a virtual [00:05:00] queuing system in times like this, where you actually can't access the website until there's enough server resource available. And that's going to lose you and your business. Some sales. So the solution to all of that UN ideal nonsense has moved us from relying on managed physical servers to embracing cloud servers.

Serverless doesn't mean no servers. It means you don't manage the servers yourself. You use servers as a service, and here's what they might look like. And yes, cloud servers are still physical servers, somewhere in the world in a fixed location. You just don't need to worry about them. They're managed by somebody.

AWS provides serverless functions, also known as AWS Lander. And if you've used AWS in the past, you may be aware that you can choose which location or region to run your serverless functions from such as us west, us, east Paris or island. And we'll come back to [00:06:00] why locations of servers are important later when we start to talk about the edge.

So why is serverless. Serverless functions are backend as a service on demand. Serverless has removed limitations and constraints from the traditional managed server model, allowing you as developers to build and scale applications by only thinking about the bits of code that you need to run. This means that everyone from hobby developers to large businesses can execute backend code on demand without having to manage, maintain, and scale their own servers and manage their own cables.

With serverless, there's less stress, no security and software upgrades. You don't need any physical space and you can outsource the overheads and focus on building your product. Serverless is cost effective. When you run a serverless function, you pay only for the processing required. Whilst the code is running, not for persistently running servers and the maintenance that comes with it.

You also don't [00:07:00] need to worry about scaling, which means increasing the number of servers available when your website, traffic. It's all taken care of for you by the service provider. And what I love the most is that most cloud providers come with generous free plans. So you can usually run hobby projects that you serverless functions at little to no enough financial cost.

So you can try things out before you start investing in your next big idea. Now let's talk about serverless and jams stack. It might feel like a little side step, but it will lead us right onto the edge. Serverless is a complimentary technology to JAMstack meaning that the technologies work really nicely together and help enhance and enrich your projects.

They go hand in hand as the emoji suggests let's look at another definition. What is JAMstack you might know JAMstack as using static site generators to ship static sites, but as the web continues to evolve and make more and [00:08:00] more things possible, the definition of jams stack is also evolving. My colleague, Phil Hawksworth recently released a post on the Nefi Bo blog in which he discussed a refreshed jams stack definition.

The key takeaway is that jams stack is an architectural approach that decouples or separates the web experience layer the front end from data and business logic or the backend stuff using serverless functions with your front end code is a perfect example of this arch. And one of the key technologies that powered jams stack architecture from the beginning was the CDN or content delivery network.

A CDN is a network of servers distributed around the world, working together to serve cash static and prebuilt content to users from the closest server location possible. Keep this in mind and it'll become important in a moment. Traditionally [00:09:00] requests for webpages were processed by a managed server, which we talked about earlier.

And this is in a fixed location. A user makes a request from a web browser. The server receives that request runs the business logic builds and bundles, the HTML documents and all the resources in real time and sends it back to the browser. There are several factors that can make this slow resulting in a bad user experience.

If the business logic is complex, if the return bundle is large. And if the request is being made far away from the physical server in a fixed location, for example, halfway around the world, that's going to make the experience slow in contrast when using a static site generator combined with Netlify, your HTML pages are served as pre-built static assets from the content delivery network.

This removes the build and bundling process, saving you a lot of time. A CDN is [00:10:00] also known as an edge network, referring to the servers that sits on the edge of multiple networks, which act as bridges to route traffic, between networks across the CDN. When somebody visits your pre-generated site on networky, they get back the prebuilt pages straight away from the close to CDN server node location.

And there's no build to. As a result, people around the world get a fast experience on sites served by a CDN surplus functions have historically been restricted to running on service in specific locations. Take for example, AWS us west, for me in the UK, making a request to us west takes longer than making a request to one of the European regions due to the physical distance.

The request has to. If you are using serverless functions in your product in order to make your website fast for everyone globally, you need high availability on servers [00:11:00] around the world, coupled with an intelligent network, which knows how to route requests to the closest location to the user. And this is now possible with edge functions.

Edge functions are serverless functions powered by the edge network, which means you can run serverless functions at the closest location to a request anywhere in the world. You might also hear this technology referred to as edge computing. And with this, you, as developers can collectively make the web faster and more accessible to more people which could potentially change lives.

And with the wide adoption of edge computing, we may also begin to see a reduction in carbon emissions as a result of data being served quicker, over a shorter physical distance. And as someone currently surviving another heat WAV in the UK who doesn't have air conditioning, I would appreciate that very much in April.

This year NAFI released edge functions [00:12:00] and you can now add edge functions to any new or existing project on net. Nullify edge functions are very much like serverless functions. You can write them using JavaScript or type script, but instead of using node JS under the hood, they are powered by Dino an open source runtime built on web standards.

With nullify edge functions. You can transform HTTP requests and responses, stream server rendered content, and even run full server side rendered applications at the edge. So what does an edge function look like? Here is a hello world example. An edge function is a function, just a bit of code that does something.

And this hello world example is written in JavaScript, but you can also use type script. If you prefer here, we export a default AIC function and we return a new, a CTB response with a string. Hello. So you might be thinking well, Selma, that edge function code looks suspiciously [00:13:00] similar to a serverless function.

Why would I use edge functions in production instead of using standard serverless functions on Netlify? So whilst Netlify serverless functions are great for providing API endpoints and serving responses, the super cool thing about Netlify edge function. Is that you have the power to modify requests and responses on the fly before they are returned to the front end edge functions are also faster than serverless functions compared to node environments.

Dino starts up and is ready to run code much quicker and all this happens at the edge at the closest location to the user. And you'll see how this becomes very powerful. When we go through some example, The TLDR is that you can do a lot of stuff on the edge that you would usually do with client side JavaScript.

And if you know me, you know that I love to ship as little client side, JavaScript to the browser as possible. [00:14:00] So let's take a look at how you can add edge functions to your projects on Netlify into just three steps. Step one is to add edge function files to your projects. Step two is to associate those edge functions with URL.

Step three, you just deploy your project to Netlify as usual. So step one, let's add an edge function file to an existing project. Here's an existing project that you might have on Netlify. If you are already using Netlify functions, you'll have a Netlify directory. And inside that a functions directory.

Edge functions live in an edge functions, directory, bright neck, tough functions. And I dunno how many more times I can say functions today and saying it correctly. Here's the edge function we wrote earlier. Hello world. And there is living in the edge functions directory in our existing project. So step two is to associate your functions with URLs.

So if you've [00:15:00] got a project on Netlify you've most probably got a Nety Dotto. The Netlify dot Tomo file is a configuration file. That specifies how Netlify builds and deploys your site, including redirects branch settings, and more it's version controlled and allows new team members to get a setup with no configured required.

Here's a Netlify dot Tomo file. That's already got a redirect setup, redirecting from a nice clean, short URL to a terrible URL that is too. And to associate with edge function file to, to associate edge function files with URLs, we add edge functions, entries in thaty. Tom will file and each edge function will have a separate entry.

So you add the path that you'd like the edge function to run on. This one is just slash hello. And then we point to the name of the file inside the edge functions directory, which is hello edge. So step three is to deploy your project. Netlify as. If you've set up automatic deploys via GI, you can use GI push to [00:16:00] have Netlify build and deploy your site automatically.

Or you can build your project locally and then deploy it with Netlify using the Netlify CLI and here's our red function live. And if you've got keen fingers, you can actually go to this URL right now in your browser to see it in action. And I'll tell you more about that website in a moment. So there you have it.

Edge functions on Netlify in three. But just now I mentioned the Netlify CLI, so what's that. So in order to make edge functions, worth it for developers, we need good ways to develop and test locally for the edge. We can't go deploy this. And that's exactly what you get with the Netlify CLI install. The Netlify CLI globally via NP.

Then you can either associate an existing local project on Netlify using Netlify link in the project directory, or you can create a new project in your Netlify account using Netlify in it. [00:17:00] Finally, you can run Netlify dev to spin up a local development environment and your edge functions will run locally, even with geolocation data.

And we'll get to that in a. Top tip. You can also save some keystrokes and use NETTEL, which is a built in alias. I love telling people about that. It's my favorite. Okay. So that's hello world covered. So let's look at some more real world examples of how you can use Netlify edge functions. Let's return to our hello world edge function.

This is a small function that returns a response object. Now, if you're familiar with HTTP, you'll be pleased to know that this response is the standard web API response. And when working with edge functions, you are building with web standards and open APIs because of Dino and there's relatively little news to learn, and you can work with a response object in the usual ways, such as [00:18:00] setting the content type headers and more.

Edge functions receive two arguments, which you can make use of in your code. The first argument is the request object, which again is the standard request object representing the incoming HTTP request. And you can use all the native web API functionality on the request object, such as setting request, headers and pausing the request URL for per.

Here we modify the response based on the event, parameter in a URL. So we get the URL object from the request. And if we find the query parameter event equals more in the URL, we return, hello, more serverless, or we return. Hello, everyone else. If we don't find. This is a perfect example of being able to modify an incoming request before you send the response [00:19:00] back to the user, without needing to use client side, JavaScript to pause the URL in the browser.

After the fact, the second argument is the context object, which is specific to Nety and has some pretty powerful features. The context object exposes Netlify specific API. And currently you can work with cookies, access, geolocation, and IP information, return data as J right to logs. The next method will serve the next request in the HTTP chain.

And you can also rewrite incoming requests to another same site URL and get site. So let's still use the geolocation API to modify a returned response depending on your location. So let's make sure we add the context as a second argument of the edge function and let's grab the location information from context dot go.

Let's be [00:20:00] ruthless and say, you are only allowed to access this content. This hello message from the UK. So if the location.country dot code equals GB, and we can even modify the HTTP status code to return when the request is not coming from the UK to tell the browser that this content is not available for legal reasons.

And hopefully if you take anything away from this talk today, is that you remember what ATTP status code 4 51 means I like that one for some reason. As a front end developer, I don't think I've ever had these capabilities so readily accessible before. And I would have no idea how to configure physical servers and traditional backends to modify a response at the server level and based on the user's location with Netlify edge functions, it's right in front of me.

And it's using the web APIs I'm already familiar with plus some extra magic from the Netlify context. Now for [00:21:00] some more magic, let's take a look at how we can use cookies to create a personalized experience without JavaScript. Let's say you have an online shop where you sell two categories of products, corgis, and food, and you want to modify what someone sees based on what they're most interested in to hopefully encourage people to buy more things that they like.

Here's a really basic example. Say someone clicks on an item from the food category, which navigates to a URL that contains the string food. Here's some lovely pizza. Notice food in the URL with edge functions. We can pass the URL and set a cookie based on what the user clicked on. So here we grab the URL from the request.

If the path name contains food, we set the preferred cookie to. And if the path name contains corgi, we set the [00:22:00] prefers cookie to corgis. Next. When we load the homepage, we can read the prefers cookie and either modify the products that the user sees at the top of the page by sorting the data or by using context dot rewrite, to redirect to a special food homepage or a special corgi homepage.

So I clicked on a pizza. The preferred food cookie was set. And now when I navigate to the homepage, the URL is rewritten to the homepage for food. And all I see is food. Now I'm hungry. Sorry. If you are too. This no JS personalization idea is from Jason Langor, who was the creator of the food and corgis website.

He goes one step further and sets the cookies based on a scoring and waiting system. But go check out the code on GitHub and try out the personalization on the site. Personalization without JavaScript is a dream. And that's just one of the things you can do with [00:23:00] edge functions. If you're excited and curious.

There are so many more examples to look at over on edge functions, examples, the nullified app, which is the site that I showed you slash hello on earlier. We've got loads of examples. It's a growing list. There's inspiration for how you might put things into your products. There's atomic examples without trying to Sue you anyway with opinionated.

So you can also look at the code examples on GitHub as well as on the site. And you can also deploy the whole site to your Nety account to iterate and experiment. And there's more, you can use edge functions in any project, whether you are using a front end framework or not. And actually my favorite way to use edge functions is without a framework at all.

Barnetti also uses edge functions to power. Some of the more advanced features in a growing list of popular front end frameworks, including Astro 11 [00:24:00] N PEL kit remix. And more. Remember when I talked about rendering full server side rendered applications at the edge. You can do that now. You can also find more information in the amplified documentation about the frameworks that you can run on the edge.

So let's recap, serverless functions are bits of backend code run on servers in a fixed location that you don't have to worry about managing. An edge network is a group of connected servers that sits on the edge of multiple networks to route traffic, between networks across a content delivery network or CDM combine serverless functions with an edge network and you get edge functions, serverless functions at the edge, and they give you the power to run code on demand at the closest location to a request and intercept requests anywhere in the.

This is making the web faster and more accessible to more [00:25:00] people around the world. And as empowering developers to create more performant front ends by moving computation from the client to the edge, you can use Netlify edge functions today in your existing products on Netlify edge functions, run on Dino, which is open source and they use standard web APIs and the Netlify context.

It just takes three steps to get started with Netlify edge functions, add files, associate your files with URLs and deploy your project. As usual. We've got a library of examples of you to fork, deploy an experiment with, and you can use the Netlify CLI to develop and test edge functions locally. We've got loads more information on the docs about the APIs and how you can get started.

And I also have a video on YouTube where I explored edge functions during the launch in April, and did a lot of what I'm doing here today. So my name's Selma or white Panther or white before N three R. And I help [00:26:00] developers build stuff, learn things, and love what they do. If you want to find out more about me and see what I do, you can visit white panther.com to learn more.

Thank you for watching and have a great day at more server.

Thanks

**Brian Rinaldi:** SMA. That was fantastic. So we are gonna get to questions from the audience. We do have one question already, but folks, if you have more questions, this is a great opportunity. You've got SMA right here to answer your questions all about the edge. And I wrote this in the chat, but I really do think the edge is gonna be one of these like edge functions in particular are gonna be one of these things that as people understand what they can.

With them, that it really is gonna change how we build applications. Especially you talked a little bit about how you can intercept the request coming in and the response coming back. And that to me is like the most powerful thing about it. Cuz you can do all kinds of stuff as you noted like personalization without JavaScript because it's all happening at the edge, which also makes it really fast.

Yep.[00:27:00] Anyway, that wasn't a question that was just me like I'm I think this is totally cool stuff. So I'm gonna, first of all, get to the question from the audience. But so Jack asks, wouldn't running an edge network, increase the number of data centers in therefore increase emissions. I don't,

**Salma Alam-Naylor:** I don't know who knows, who knows?

The. I'm just speculating. Aren't I, but there's always gonna be pros and cons of every solution, more edge servers that have, this is my basic mats, more edge servers that have an exponentially shorter request time. It could work out fine. Who knows? It depends how the internet grows, in places that are far away from the standard fixed serverless functions, locations, isn't it?

It's just something to think about. I'd like someone to do the maths one day, cuz I don't think I can.

**Brian Rinaldi:** I would think, first of all, these servers existed, this wasn't like, oh, Hey, we're dumping. Like these servers were, the edge was already there. It was doing different things.

The key difference is [00:28:00] we're now running functions at the edge. And I do think, So you could in theory think okay, if we could do less say server side rendering on every request, and push more stuff to the edge where we're do, and caching more, do heavier caching and things like that.

I suppose in theory it should reduce emissions, but I'm not an

**Salma Alam-Naylor:** expert on that. And then you need to think about also, the, so moving the client side, JavaScript functionality to the edge, what's the trade off of putting the computation on the server level rather than the user's machine level, which we know JavaScripts at times can make machines go bur right?

So there's so many different moving parts, but I just, I like to think that it's something that could be possible. I'd like to think that we can solve. This with tech at some point in the future. So I am not living in an oven.

**Brian Rinaldi:** Yeah. We just, I, I did mention you, you said it's like 30, 30 plus degrees Celsius in that room here.

And I don't even know right now I'd be pouring sweat right now. I'd be like, oh, you I'll be gross [00:29:00] out. Like Brian you're covered in sweat. Okay. So Chad asked, are there particular features with CloudFlare that you're dependent on in this demo you just gave? No, cuz you're not, this is not CloudFlare.

And and actually, I, that gets to, I was curious, I know you all have a blog post on why Dino but maybe you can share some thoughts on like why Dino for Nety functions? Is there what is it you like about Dino? Specifically

**Salma Alam-Naylor:** something that Netlify is committed to is building a better web for everyone and building an open web.

And what really attracted Nety to Dino was the fact that Dino uses standard web APIs that have been around for forever. You don't need to learn some new syntax to use Nety edge functions or to use D. And so that was mainly me, really the main focus it's let's make it more accessible to everyone.

Let's make it work on the web standards and [00:30:00] not make everybody learn something new, which, hopefully would increase adoption down, down the line as well.

**Brian Rinaldi:** Yep. Okay. Another question from Amad are there any security concerns to consider while working with that function?

**Salma Alam-Naylor:** I would think the usual security concerns that come with anything that come with working on the web.

I think probably your question is about intercepting something in the middle. Of a request. I wouldn't say there are any untoward security con considerations that don't exist already. I'm not an expert you can find out more later when we talked to Eduardo who was one of the lead engineers working on edge functions, actually in a few hours who will probably be able to answer more of that.

**Brian Rinaldi:** That's a good that's good. And I'm looking forward to that cuz Eduardo and I got to work with him for close to a year at a prior job and guy is just, he's brilliant. He's awesome. So I definitely think he's a good person to ask those kind of questions [00:31:00] too. And that, by the way, for folks that's happening during our extended break later this afternoon okay.

There aren't any more? Oh hold on. Eric Weno will Netlify help me make better coffee. Okay. that's funny. Is it, do you think it would help make a better coffee?

**Salma Alam-Naylor:** Seriously, it actually funny story while we're talking about coffee Nefi so I recently got a new coffee machine and it's one of them that does it grinds the beans for you and you set the grind size and the amount.

And then you're meant to, it's meant to start coming out of the thing. Between eight and 12 seconds and you have to get the grind size and the amount of coffee, like perfectly tuned. I was actually thinking of building a website on Netlify that listed every single coffee and the perfect grind, size and amount for coffee.

One day when I make that website, yes,

**Brian Rinaldi:** that is, that would be super cool. And as a coffee lover myself, I want you to [00:32:00] build this for sure. so I I've got a couple of questions myself. First of all, one of the things I wanted to ask you about is it's one of the things that's fascinating me as I've explored edge functioned is okay.

We start thinking about okay, we're moving all this things to the edge and we're so used to oh, just call this API or grab this data from somewhere, except that data isn't at the edge. So I want you to maybe talk a little bit about some of the, like what can easily move to the edge and how do you deal with data at the

**Salma Alam-Naylor:** edge and things?

I think the answer is, it depends, isn't it? Because I think some data is moving to the edge as edge functions are getting more popular. And I guess it's the decisions you make. I would make these decisions as is a product leader as a tech lead. Okay. So what region do we need our data in for?

To cater for our biggest audience, or to cater for a market that we wanna move into. And I think at this point, those are the [00:33:00] types of decisions you need to be making. You can use edge functions. For may, maybe you can use a combination of edge functions and a serverless functions depending on the data where that lives, because you might wanna use serverless functions that, will run close to your data stores and then edge functions for all the other stuff.

So I think with edge functions A lot of people think that maybe it's like a, an all opt in or an all opt out. But I think the beauty of technology and the jams stack and the evolving ecosystem is that you use the best tool at the time. And so I'm not here saying everyone go use edge function straight away, but there are particular use cases for your products where edge functions would be better serving your products compared to serverless functions.

And it's also the other way around, the edge. Isn't the answer. To everything right now. But it's moving things along in a way that takes a lot of the front end. JavaScript stuff out that you can do on the server. And I'm coming from [00:34:00] this as a front end developer that has no idea about servers, don't care about them, but I wanna be able to do powerful stuff.

And so I think it's a way in to innovation. But building a stack that does the best job possible based on the technology available. Yeah.

**Brian Rinaldi:** And I think two things I'd add for my, for myself personally, is that number one? I think I can't wait for Dino to add a KV at the edge, cuz that at least would give me some way to cash some data, some simple data at the edge, which I know I'm sure they gotta be working on, do you.

Add a KV at the edge, please. And there are actually some third parties that now have started these edge data, like where you can have read only data at the edge. And I think that's super cool, but this is very new, like where they will they'll take database and push, read only versions of it somewhere in the edge.

This will be separate from Nety, but you it's things that you can easily use with Nety. [00:35:00] But on that note, Stefan asked and I think it, it, this is completely, you answered it in your last question, but do edge functions empower the front end dev? You basically said that.

**Salma Alam-Naylor:** Absolutely. Yeah, absolutely.

So if you are front end dev, who is curious about how this can remove a lot of nonsense from your JavaScript, I would give it a try. So I, I started my career as a frontend dev and that was about eight, nine years ago. And the amount of stuff we were doing in a browser back then compared to now on what's possible.

Is pretty cool actually. And it makes your code nicer. It separates your concerns more, and it allows you to prioritize like what's important, which is the user experience, rather than trolling through lots and lots of JavaScript that might not work on every single browser. Absolutely.

**Brian Rinaldi:** And you can write it all in JavaScript, right?

**Salma Alam-Naylor:** Exactly. Exactly. It's nothing new to learn. You've got web APIs, the same web APIs you are writing in your front end, [00:36:00] JavaScript you can use in Dino edge functions.

**Brian Rinaldi:** Ex yeah, definitely. So Stefan absolutely empowers front end devs. It's one of the things I love about it as a front end of myself. ICA asks, can you see user context information when debugging crashes caused by edge customizations to

**Salma Alam-Naylor:** you can see geolocation data you can see the, everything about the request that's available on the context API. Yes.

**Brian Rinaldi:** Okay. Okay, good. You knew the question, the answer to the question better.

I wasn't sure what the question meant, but great. Okay. Just one more question from me, it looks like that's the last question from the audience. So I wanted to talk a little bit about the server side rendering at the edge. So you talked about it very briefly.

So in this particular scenario, I could be using any one of those frameworks, that support server side rendering, as well as like obviously pre-building your application and it will run that server side [00:37:00] rendering at edge function. Do I have to do anything specific to get

**Salma Alam-Naylor:** that working or that.

Each framework will do it slightly differently, but it's all about the concept that people are calling adapters. So you would install like the Netlify edge adapter to an Astro project, for example. And if you install that via MPM, install that adapter, you add it to a config file to say, run on the edge, use the Netlify edge adapter, and then it will Run the whole application on the edge.

I think a lot of frameworks at the moment are an all or nothing opt in again. So be considerate whether you really need that edge rendering or whether you need server side rendering at all. But it's really just a one line. I hate saying this, but it's one line in a config file that allows your application to render server side on the.

Wow. Okay.

**Brian Rinaldi:** That's cool. I have to I haven't checked that out yet, but I definitely need to, we got just a couple minutes, but Mike asked one more question. How do you organize edge [00:38:00] functions in your code base when they're mixed in a repo with the rest of the app code?

**Salma Alam-Naylor:** so they all just go in an edge functions folder in the Netlify folder, they all live in one place.

And that's how Netlify knows how to build and bundle those edge functions and run them when you deploy. So they have to go in that one place and be defined in the Netlify Tommo file. And that's it. So at the moment, I think you might be able to do sub folders inside edge functions. I dunno whether you would need to, but again, it's quite early days.

And so there might be new things that end up coming up to organize them. If you are using edge functions, hundreds of files, but again, that might not be appropriate. And so you'd have to think about how to architect your application and whether everything needs to be on the edge, but they all just go in that one edge functions, folder, map them in your Towa file.

And then net knows what.

**Brian Rinaldi:** Yeah, I think you make an excellent point, which is something I've as I talk about this topic a lot myself, and it's basically that once you start using edge [00:39:00] functions, it's not oh, we're gonna move everything to the edge. It's really, you gotta start thinking about what makes sense at the edge and what makes sense handled the more traditional way of doing that.

Yeah. So yeah. Excellent point.
