---
_build:
  list: false
  render: never
---

**Gift Egwuenu:** [00:00:00] I'm super excited to be. at more serverless, I really the new, more server, less. Anyway, today's stock. I'm going to be shown to how to build serverless applications with CloudFlare pages. Be said, I am gift green, new. I currently work as a developer advocate at CloudFlare. If you'd like to find more about me, you can check me out on my socials.

Lower gift onco in today's stock. I would like to go through a few things and the agenda for the talk will go through because it's a, several. This talk, I like to explain what servers is, what X functions is. I would assume that some people would know already know that, but I just like to use [00:01:00] this as a primer for the actual direction of the talk.

And then going to Cloudflare's network, right? We, most of you might be familiar already with CloudFlare, but I'll also explain what CloudFlare actually does and look into the CloudFlare developer ecosystem at glance, because. CloudFlare is mostly known for their security offerings, but we also have offerings for developers are looking to build serverless applications on the edge.

So I'd also share some of what those offerings are. And then we'll look at a very shot demo of using CloudFlare pages with functions. Let's get into it. So first servers, right? We all know that servers actually is your you're still, you are working with service, but you don't have to manage them.

You're upsetting all of those work to either platforms that handle those service for you. So you only [00:02:00] concentrate or you're only focused on actually writing. Good. We are familiar with serverless functions, right? Serverless the idea both. Now there is like a lot of people talking about the edge, right?

What exactly is the edge and how does that relate to serverless functions in the first place? My go to explanation of what the edge is in this image right here. So this is currently Cloudflare's global network apps large. We currently. More than 270 CDs or colocations across the entire board.

And the idea of the edge server is each of the dark blue point on this map indicates an actual CDN server, an actual colocation that we currently have servers running. But the idea of edge functions is to have your application or your functions running closer to your end users. So also think about, not only thinking [00:03:00] about this point as CS, but also thinking of them as.

Edge servers. So we have several different edge servers spread across the globe that allows you to build applications closers to your users. So that brings me to the definition of the edge. So the edge is the server that's geographically located closest. To your end users. And as we go over the talk, you see why this is actually needed in the first place, but because you might be asking I already have several less functions.

I could well ship my functions to one specific location. And that's fine. So how what's like the use cases for edge functions that would make me, switch to using that out, share of that as we go over the. But yeah. The edge is essentially your serverless functions distributed across different locations rather than having it in one specific location.

I was looking to CloudFlare global network at large CloudFlare is currently operating at a [00:04:00] massive scale. Like I mentioned, we have over 270 plus this data is a bit outdated, but we have over 270 plus City is located across the different cities and countries. And CloudFlare is known to have 25 million internet properties.

We help. Our main goal is to help, scale the internets, help security internet. And we've been doing that for so many years, unless take a look at the developer ecosystem because this is one area where we would like more people to know. We currently have several different offerings for developers to help them solve their use cases. Right? CloudFlare developer platform, currently houses, several different products that allows you to build on the edge.

There are different categories here. We have the compute product, data storage and services. One of the ones, some of the ones I will talk to you about today, workers. Workers KV and CloudFlare pages. Why I can [00:05:00] just talk briefly about some of these offerings. So if you're looking to build your application on the edge, your serverless application on the edge, the offering that CloudFlare offers you is called CloudFlare workers.

Now cloud CloudFlare workers allows you to build your serverless API and. Remember the map I showed you earlier where you have like several different colocations distributed across different locations. The benefit of building on flare is that we typically would deploy your server less functions to the edge, right?

So you have your functions running in different locations. And the benefit of that is that. Deploying your application on the edge allows, your users to be able to assess it at any time, regardless of where they're located, reducing latency for them, when they try to, use your app, right?

That's a, that's about workers and the compute offerings that we offer. We also have data storage. We have several different data storage offerings. One [00:06:00] of them is Walker KV. Show you like demo of how to use that later on. But the essence of having data storage options is to allow you not only, but server less applications, but also move your data alongside with your applications to the edge.

So we have offers like KV, durable objects, the cash API, and are to help you do. In this talk, I'm mostly going to be talking about CloudFlare pages, right? Which is a product that allows you to deploy, not just static websites. If you're already familiar with CloudFlare pages, you think that you only deploy your static frontend web applications to CloudFlare pages.

What there's more that you could do. And that's what the essence of the talk is. But I'll briefly talk about CloudFlare workers before moving. Like I said, CloudFlare workers allows you to deploy several less code across the globe with the benefits of deploying to the edge. You can write your worker functions in different programming language as it is.

We [00:07:00] currently support JavaScripts C plus rusts C and so many others. The. Great thing here with workers is how it integrates with the different offerings that we currently have. For example, you can build your CloudFlare workers function and have it integrated with KV or R two or with durable objects or it's.

This helps you have both your server, less application and your data all deployed on the edge. And because we also work. Browser nitty browser APIs. You have the request and the response object within your worker function to allow you do like different kind of requests, intersecting requests and all of that stuff.

This is an example worker. The syntax is pretty straightforward. You have a fetch API that you can use to return a response or fetch requests from the server, right? This would outputs. Hello workers. If you run it locally on your computer, right? [00:08:00] Moving from CloudFlare workers. I'm going to show you what the connection ISS, but moving from CloudFlare workers to CloudFlare pages is a separate offering that we have that allows front end developers not only build the application, but also allows them add dynamic functionality to their application.

One core thing, I. Found as a front end developer myself is when it's time for me to do some dynamic things, work with APIs. I would have to spin up like a server. CloudFlare pages is offering you way more than that. So you can be the full stack application using CloudFlare pages. What are some of the features that CloudFlare pages offers you?

Out of the box, you get a get integration whereby if your application is deployed to pages, you can either connect it to GitHub or GitLab and how your could Deployed automatically. So with every comment you make, there is going to be a new deploy preview for you to [00:09:00] Test your application. You have automatic C I C D integration.

Also integrated into pages. If that's something you're looking to use. I mentioned having preview links with every generated comments, this is super handy, especially when you're working on it team. And you have a product manager, for example, or you have a backend engineer. You want to share links of what you just deployed to production with them, or even.

If you're using C I C D even on like test environments, you can already share what changes you've made on your application that you're working with. Like I said, only test staging. You can have different environments tests, production dev and all of that stuff. I really like this feature about flare pages, because it allows you integrate with other product that we have.

For example, web analytics flare access and SSL, add several different other products we have by the integration between flare pages and this product is super seamless. And finally, [00:10:00] you can now add dynamic contents with the help of CloudFlare workers into your PGS application. Now. The connection I was talking about.

This is where you find it. CloudFlare workers. You can now write functions inside of your pages project. And what this allows you to do is add dynamic functionality inside your front end project. This is, this integration is called functions or pages functions, right? It's still in beatable. I would like to show you what you can do with pages functions.

So to get started with pages functions as you might have a front end application in this case, NOx application, this is a NOx application, and I want to be able to add dynamic functionality into my app. The way to use pages functions in your app is to create a functions directory. And inside that Amy JavaScript file, you add becomes an actual route or an API route that you can actually query on the front end.[00:11:00]

In this example, I have a functions directory and inside that I added an extra API directory just cause I wanted to simulate a natural API. So for every route that I. Every in every file I add into this in the browser I can navigate to slash API slash the name of the file to actually query that endpoint.

This is an example of what a pages functions look like. It's pretty similar to the example I showed you from what a CloudFlare worker look like. Looks like the only difference you'd see here is. Context object, actually exports several different things. So typically you would have requests with a worker API, you would have environments and all of others, but with functions, you also have like data and next for making middleware or fetch asset queries in your function.

And another difference of course, is the handler and you get the handler [00:12:00] could be a on request handler or it gets posts or puts handler. I will share more about that letter, but how you work with CloudFlare pages functions in your fronted application is with a CLI called Ang. We have C that allows you work with CloudFlare workers and also CloudFlare pages.

If you're running a front end application using functions, you typically need to use the, you typically need to use the Wrangler pages command. So we have a dev command. You have a build command, you have published command and you even have a KV command. If you're working with data, I'll share more that as we move.

Like I said, functions, what could you actually do with CloudFlare? PGS functions? Typical use cases that we've seen is like using functions inside of your front end application to store data, connect to thought party services, do authentic. Authentication in your application. You can also use it for geolocation based [00:13:00] redirect.

So for example, if you are trying to make your application specific for setting users in a specific location, you can use the request or CF object without share what that is later to perform setting queries inside of your function. You can do custom cash storage with KV integration with pages.

And there's something also called plugins and plugins allows you to extend the functionality of what you have with CloudFlare pages. I mentioned request handlers earlier. And the great thing here is this actually simulate how you typically work on it on an API, right? So you could do an on request post handler.

If you are working on a post request or you could substitute this for any other of this listed handlers, like if I'm doing a get request, for example, our create a function called. Request gets, or if you don't [00:14:00] want to specify because inside of a function file, you can have multiple handlers. This would help you define what your API would look like.

Talking about pages blogging page blogging is another integration with pages function. And the essence is that pages blogging is a library that would allow developers to use or arguments their existing pages project with deep integration to function. I explain what this is now. We've seen many people doing almost the same.

Over and over again, video function. So a typical example is arrow handling. For example, you're trying to do arrow handling and you find that in all your several projects, you're writing the same code over and over again. The great thing with SP plugins is that you can, write a plugin that you.

You package into a library that you can then use in several of your different projects and pages projects. We have currently different pages plugs integration. We have one that allows you intercept HTML [00:15:00] pages and inject thought box scripts. Typical examples of this is like you're using Google tag for example, or Google analytics in your application.

And you don't have to rewrite that code all over again because you just need to import. Plug in or validating authorization headers with an authentication package thought party package. Storing data in KV of durable object is also a very good use case for creating a plugin server side rendering web pages with data from a CMS is also another good use case for plugin.

And finally, like I mentioned, error handling or analytic tracking performance. You could also create a or use a plugging for that. So you don't have to rewrite this code all over again. Currently we. Several different official pages, plugins that you could use in your pages project. There is CloudFlare access, Google chats graph century for arrow handling.

And we currently even have community plugins. So we have people in [00:16:00] the community that are also creates plugins based off of the AIS case. Like they're finding that they're also having to rewrite the same thing all over again. So why not just create a plugin for that? Which to me. Takes this experience to another level because of the things you could do with pages plugins.

Let's talk a bit about the town, the edge A lot of people have this conversation about, yeah. Servers is nice. The edge functions are nice. We have our application deployed everywhere, but what about the data? What then do you just store it in one specific location or do you have to there's a whole conversation around data on the edge, and at Cal we currently have different offerings based. On your own use case of how you can actually store data on the edge in this store cloud only cover KV which is a key value storage that allows you to store data that is automatically cashed on the edge. We also have different offerings like cash [00:17:00] API, durable objects for making states full.

Storing state food data are to for blob storage and recently announced D one that allows you to work with a sequel light database. But like I said, I'll only cover KV, but if you love to learn about this other. Offerings that I mentioned our documentation is parked with a lot of information about them.

So KV is a key value storage, right? It allows you to store data globally on our edge network. The important thing you need to know about KV is it allows you read frequently. So if you saw data on KV, it's cashed and you can read quickly from it. Yeah, ki is great. If you are thinking about storing data alongside your serverless application or PG functions in this case.

So now I'd like to move over from talking about these actual things in real life. Maybe show you demo how all [00:18:00] of this works. So moving on my vs code, I have already in knocked application here. Like I mentioned earlier, I said, if you would like to add pages function into your front end application, you only need to create a functions directory.

And in there you can add all the files that you need. Like I said, yeah. Add in an extra folder called API. This is in necessary. I just like to have. A way to tell my brain that this is actual actually an API route that I'm visiting. So the fixed example that I have here is just quite simple.

It's returning he workers. I'm not sure if this is visible enough, so increase the bits, and then close this. So this is an example worker that just outputs a response of early workers to the. Browse now I mentioned ERs. ANGs are CLI that allows you to, run your, either CloudFlare workers' application or in this case page's [00:19:00] application.

So I already wrote a script that allows me to run my API and it uses MPX angr pages, dev death. Now. This would give me slash API because this is the index or GS file. So if I go to slash API, I should see other workers there. So this is like very bare example, but I have more example to show you. So the second example I like to show you is don't is to use the.

So use like a geolocation based redirect example, where I'm utilizing the requests parameter from the context. So I'm getting like the specific users location, and I'm asking them based on that, the application to do something. And in this example, I want to do. A request that checks for my current location, from the request, the CF object.

And if I am actually in the Netherlands, which of course I am in right now, [00:20:00] then the browser should perform a redirect to flares, Netherlands websites. So if I go to this route, by the way, to assess any routes, it's just the name of the file that you created. So in this case, it's country redirect, right?

And that's pretty much straightforward how to do user based to redirect. I am already thinking of use cases for this. If you have a website with location based data or translations, and you want people to like, I'm visiting a source, for example, the user can automatically de browser can automatically detect my location and just send me the Netherlands version of the ASOS website.

So that's An example. Of how to work with pages functions. And I'll show you one more or two more examples that I already have. The second here is using KV, right? So I mentioned earlier that KV is a key value storage, uses. [00:21:00] So it stores your data with keys and values. And in this example, I'm also doing redirect sports.

Now storing cashing the data that I want to redirect to KV and. Based off the request that is sent on the browser automatically do very direct. I'll walk through the code here. So I have an on request, gets handler function and I'm taking the request and environment parameters from the context I created in new URL, because I would like to use this hero to detect what parts name is served on the browser.

Now, the first set of code GC here is an redirect object. And what I'm doing here is I am writing this object to KV. I'm going to show you what KV looks like. So you see how this works behind the scene. I am on Cloudflare's dashboard and here I have my workers. K. So I've [00:22:00] already run. I've already done this application, like a couple of times.

So the data is already stored there. So I have the name space, which is how you store data in KV. And if I view this, you would see like this data that I've stored as the redirect here. Now, essentially what this does for me is since I already cashed the data on KV, what I like to do on the second part of this code is to.

Check the parameters that I'm assessing, and if it matches any of this key, I should automatically redirect the user to the value that I've stored on KV. So let's test that. I think I actually need to rerun this to make it work. So I need to run MPM, run KV this time around because I'm also adding the ki V name space in my example.

Route I'm visiting is slash API slash KV. Redirect. And then passing the parameters in this case, the parameters should be one of the keys that I've stored [00:23:00] on KV. And that would redirect me to the accent. The URL that I've attached to it, I could do the same for Twitter or any of that. It would essentially do the same thing.

So it's Don, it's doing redirect. If you see here, I logged a few things. I logged. The actual key coming from KV, which is this. And I'm also seeing if that's correct, redirect the user and sets the status to 3 0 2. And one last example, I'll show you is actually doing API post request, actually doing API, get requests to an external API, right?

For this example, I'm using API from. Rapid API. It's a geo data API that FES you country specific country that you're visits in right. In this case, I already sets the headers for the requests. And I am also specifying that it should only fetch me data for the specific users. [00:24:00] Users location.

So I'm collecting the country for the request and then I'm passing that to the API endpoint. So if I run, this should be slash API slash country, and then I get the actual data. Now for this example, this is a NOx application. I'm actually using this data inside of my NOx app right here, pages. Yeah.

Page, no I'm using it here. So I have a front end application that's running alongside the functions, which takes me to the next thing that I really like about page's functions is it allows you seamlessly build dynamic functionality straight off from your application. So you don't need to manage a server and a front end separately.

And. Pages is great. Let's now look at some of the resources that you get out of babies functions in case [00:25:00] you're looking to learn more. The documentation is the first place I recommend you to start with, because of course that's where you find most of the information that I've shared and even more. And you'd see that we also have documentation on how to work with, for example, durable objects, which I didn't share in this talk or R two or D one, which are the several different other data storage options you get gets.

And of course we have a blog community. YouTube channel, if you want to learn more about CloudFlare pages with functions or CloudFlare workers in general. So thank you so much. I hope you learn something from the stock. Thank you.

**Brian Rinaldi:** Thank you, gift. That was great. I I'm gonna say, like I've used Cloudflare's workers and pages and stuff quite a bit.

I think there was some questions in the audience about like how they differ from other services, because I know from my own experience how they do, but I wanted to ask you like the. And [00:26:00] we don't have to say compared to which one, obviously there's lots of different options out there, but like, how do you feel?

Like what makes CloudFlare pages and workers and all that difference. Say from running out on one of the other services that are similar.

**Gift Egwuenu:** So nice question actually, cause it puts me in a spot to not, sorry. Yeah, I don't like to do that, but I would say that car developer platform in general gives you the opportunity or the ability to build your full on application with most of the offerings that we have.

So if you're thinking of doing building your application on the edge, right? We have cloud fair workers now. We find that a lot of people are like front end developers like myself, that just want to add an additional like functions to the app, but don't want to manage separate workers, because these are separate things, right?

If you have a front end application, you have to have a work flare worker function running. [00:27:00] I just sent it that. So we have CloudFlare dysfunctions. Which allows you to do everything in one place. Now, if you're thinking of doing things. So say you have your building is start, right? I can already imagine that you have several different offerings within the CloudFlare developer suits that would allow you build your application fully on the edge.

So the essence of having this several different offerings is to bridge the gap because how we see like the web going is like going towards. Everything on the edge, everything on the server having to manage your server. So we are trying as much as possible to make the developers on our platform, have all the need, like in terms of services or things that you're looking to build.

So we have the several different print. I don't know if the answers your question properly.

**Brian Rinaldi:** I think it does. I think also like for, at least in my experience, one of the things, and I mentioned this in the chat is one of the things that I was unique to me when I started missing, particularly with CloudFlare workers, was that [00:28:00] every other provider that I know of, for the most part distinguishes between I'm making a surplus function and I'm deploying this to region, whatever, like everyone knows AWS wants a us east one.

Whereas CloudFlare workers like you don't ever specify region, cuz there's no difference between a regular serverless function and an edge function. If I'm on AWS, I'm okay. I can use AWS, like they have their Lambda at edge and then they have their front, right? There's actually different offerings that get further and further out to the edge.

But in CloudFlare, every worker is an edge worker.

**Gift Egwuenu:** Yeah. You're right. I think that's one, one of the big differences when you think of like flare compared to the other offerings out there, everything is on the edge, running on a V engine super fast for you to access at any point, regardless of the location that your users are at, cuz that's the essence of the edge [00:29:00] functions in the first place.

**Brian Rinaldi:** Yeah. And so one of the, one of the other things that, that I thought was really cool. And maybe you could talk about a little bit if is in workers, like obviously number one has its own run time. That's I think it's like a, I can't remember what it's based on, but it is JavaScript, but it's not node based.

Yeah. But one of the things I found cool was that you have that HTML rewriter that, that to me was awesome because we talked earlier about being able to do things like customization and things like that without having to run client side code and that HTML rewriter to me, felt really powerful for finding and swapping out anything within the Dom.

Although it's not technically the Dom, cuz we're not in the browser. But, I could say, oh, okay, give me any H one element with this class. And then, and then replace that text out based on whatever data I want. [00:30:00] Yeah.

**Gift Egwuenu:** I agree. HTML writer is like one of the, big things that you get out of using workers and for folks that are like building applications.

They have like user facing content in a way in their app. That's when you can use the H sharer, aPI. I remember making like a demo application one time. It's a full long frontend work application, but I didn't have to spin up like a frontend app. Cause I have a worker running and I'm then using history, that to change the colors on the websites, do texts, font and all of that manipulation directly. So there are certain use cases that would be super handy. If you are working, or if you're building a server less application, there is also like additional things. Like I mentioned, this is moving away from writer for a bit, but there are also like the data offerings that I mentioned that we currently offer you.

Because one thing you'd know, or one thing you find is [00:31:00] you. Fine. We want you to build your full own application on the edge, but that includes data, right? And the idea is you don't want to be serving your front end applic or your backend application quickly. And then your data is located somewhere super far from the user.

So that's why we have, that's why we have offerings like D one, for example, which is like a sequel. Database that allows you build your database on the edge alongside your worker or QV. Like I showed QV In the demo that I shared KV is a key value storage. So if you're thinking of storing data that you're frequently going to be pulling from rather than writing to then KV would be a potentially good use case for you because then your data is served quickly, fast, super fast, and you can then extend your application from not just being like.

Should I say states less to being [00:32:00] states because now you have data all running on the edge, yeah,

**Brian Rinaldi:** definitely. That is also one of the things that, that I find interesting is Is that there are multiple data offerings, cuz I do think that's an important point when you get to moving to the edge, which we talked about already a little bit today, but is that, your data has to has to follow you if you're doing any heavy data access at the edge, cuz otherwise you could be moving to the edge, forego any benefits because the data is all the way across the world.

And CloudFlare has a bunch of things not just the KV but as you mentioned, all the other different ways of handling different types of data, even the D one is okay we replicate read only data to across the edge for your database, which is can be super powerful. I think you, and one of the things you didn't mention about KV is that it also obviously replicates to all the edge nodes, cuz it's one of the things.

We use it in CloudFlare, [00:33:00] SDK at launched starkly that we have where basically we replicate all the keys of your flags to the edge. So you can access them right there. Yeah.

**Gift Egwuenu:** That's that's right. I think that's also like a big benefit of why you would use it in the firstly, cuz your detail is pretty much available regardless of where the application's been queried from.

That's super helpful. Yeah.

**Brian Rinaldi:** Yeah, definitely. Very cool. Yeah, so that, that was really great information. I was just checking this, make sure nobody asked any other questions, but I love the presentation gift and I really appreciate you coming out to talk to us today. Thank you.

Thank you. Thank you.
